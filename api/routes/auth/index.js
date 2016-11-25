const passport = require('passport')  
const pgauth = require('../../model/pgauth')
const debug = require('debug')('ocp-api:server')
const localAuth = require('./local')

// Passport serializers
passport.serializeUser(function (user, cb) {
  cb(null, user.username)
})

passport.deserializeUser(function (username, cb) {
  pgauth.findPerson(username).then(user=>{
    if (user) {
      cb(null, user)
    } else {
      cb(null)
    }
  }).catch(err=>{
    cb(null)
  })
})

localAuth.initLocalAuth()

function authenticationMiddleware(req, res, next) {
  //if (req.isAuthenticated()) { //I believe this is sessions
  //  return next()
  //}
  //Go in to database and check if session token is active
  //res.redirect('/') // alternatively, redirect to login with the redirect back url - not for api - return 403
  // And this is the api version, checkout passport for a better implementation
  const authHeader = req.get('Authorization')
  if (authHeader){
    const m = /^Bearer (.+)$/.exec(authHeader)
    if (m) {
      const token = m[1]
      return pgauth.findSession(token).then(res=>{
        if (res){
          req.token = token
          next()
        } else {
          debug('Session is no longer valid')
          res.status(403).end()
        }
      }).catch(err=>{
        console.error('could not access session:', err)
        res.status(503).end()
      })
    } else {
      debug('No token found')
    }
  } else {
    debug('No auth header received')
  }
  return res.status(403).end()
}

module.exports = {
  authenticationMiddleware
, logout: localAuth.logout
}
