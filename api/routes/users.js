const express = require('express')
const router = express.Router()
const pgauth = require('../model/pgauth')
const auth = require('./auth').authenticationMiddleware
const authLogout = require('./auth').logout
const passport = require('passport')

router.get('/', auth, function(req, res, next) {
  res.send('respond with a resource')
})
router.get('/finduser/:username', function(req, res, next) {
  const username = req.param('username')
  if (!username){
    return req.status(400).end()
  }
  pgauth.findPerson(username).then(resp=>{
    res.json({userFound: !!resp})
  }).catch(err=>{
    console.error('error finding person', err)
    res.status(503).end()
  })
})
router.post('/login'
, passport.authenticate('login', {session: false})
, function(req, res, next) {
  if (!req.token){
    return res.status(403).json({err: 'Sorry, looks like auth worked but we haven\'t worked out how to give you a token!'})
  }
  res.json({token: req.token})
})
//router.post('/fb'
//, passport.authenticate('facebook', {session: false})
//, function(req, res, next) {
//  if (!req.token){
//    return res.status(403).json({err: 'Sorry, looks like auth worked but we haven\'t worked out how to give you a token!'})
//  }
//  res.json({token: req.token})
//})
router.post('/register'
, passport.authenticate('register', {session: false})
, function(req, res, next) {
  if (!req.token){
    //console.log('user:', req.user, 'probably want to call login now for the token')
    return res.status(403).json({err: 'Sorry, looks like auth worked but we haven\'t worked out how to give you a token!'})
  }
  res.json({token: req.token})
})
router.get('/logout', auth, function(req, res, next){
  req.logout()
  authLogout(req.token).then(rows=>{
    if (!rows)
      console.error('No rows deleted from sessions?', rows)
    return req.json({message: 'You\'ve been logged out!'})
  }).catch(err=>{
    req.status(503).end()
  })
})

module.exports = router
