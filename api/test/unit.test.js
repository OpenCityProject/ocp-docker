const assert = require('assert')
const fetch = require('node-fetch')
const pgauth = require('../model/pgauth')
const bcrypt = require('bcryptjs')
const testDb = require('./db')

describe('dummy', function(){
  it('should return true', function(){
    assert(true)
  })
})
describe('auth', function(){
  const username = 'username'
  const password = 'password'
  const password_hash = bcrypt.hashSync(password, 10)

  before('addPerson', function(){
    return pgauth.findPerson(username)
    .then(person=>{
      if (person) return testDb.removePerson(username)
    }).then(res=>{
      return pgauth.addPerson({
        username: username
      , password_hash: password_hash
      , email: 'someemail@email.com'
      })
    })
  })
  after('removePerson', function(){
    return testDb.removePerson(username)
  })
  describe('pg api', function(){
    describe('findPerson', function(){
      it(`should find a person named ${username}`, function(){
        return pgauth.findPerson(username)
        .then(person=>{
          assert.equal(person.username, username)
          assert(bcrypt.compareSync(password, password_hash))
        })
      })
      it('should not find a person named alan', function(){
        return pgauth.findPerson('alan')
        .then(person=>{
          assert(!person)
        })
      })
      // may want to add for deleted person support (deactivated?)
    })
  })
  describe('api endpoint', function(){
    let sessions = []
    after('remove added sessions', function(){
      return Promise.all(sessions.map(s=>pgauth.removeSession(s)))
    })
    describe('misc', function(){
      it('should 403 without an auth token', function(){
        return fetch('http://localhost/users')
        .then(res=>{
          assert.equal(403, res.status)
        })
      })
      it('should 403 with an incorrect auth method', function(){
        return fetch('http://localhost/users', {
          'Authorization': 'tokenhere'
        })
        .then(res=>{
          assert.equal(403, res.status)
        })
      })
      it('should 403 with an incorrect key', function(){
        return fetch('http://localhost/users', {
          'Authorization': 'Bearer tokenhere'
        })
        .then(res=>{
          assert.equal(403, res.status)
        })
      })
    })
    describe('finding a person', function(){
      it('should 404 with no username', function(){
        return fetch('http://localhost/users/finduser/')
        .then(res=>{
          assert.equal(404, res.status)
        })
      })
      it('should 200 with no username, not no user', function(){
        return fetch('http://localhost/users/finduser/random')
        .then(res=>{
          assert(res.ok, 'just ok')
          return res.json()
        }).then(res=>{
          assert(!res.userFound, 'userfound no')
        })
      })
      it('should 200 with no username, finds user', function(){
        return fetch('http://localhost/users/finduser/'+username)
        .then(res=>{
          assert(res.ok, 'just ok')
          return res.json()
        }).then(res=>{
          assert(res.userFound, 'userfound yes')
        })
      })
    })
    describe('register', function(){
      // json schema validation too
      const userDef = {
        username: 'wannabe'
      , password: 'some password'
      , email: 'somebody@email.com'
      }
      after('remove added user', function(){
        return testDb.removePerson(userDef.username)
      })
      it('has no profile picture, should find a valid user', function(){
        return fetch('http://localhost/users/register', {
          method: 'POST'
        , headers: {
            'Accept': 'application/json'
          , 'Content-Type': 'application/json'
          }
        , body: JSON.stringify(userDef)
        }).then(res=>{
          assert(res.ok)
          return res.json()
        }).then(json=>{
          assert(json.token)
          sessions.push(json.token)
        })
      })
    })
    describe('logging in', function(){
      // json schema validation too
      it('should log in as the user', function(){
        const loginDeets = {username, password}
        return fetch('http://localhost/users/login', {
          method: 'POST'
        , headers: {
            'Accept': 'application/json'
          , 'Content-Type': 'application/json'
          }
        , body: JSON.stringify(loginDeets)
        }).then(res=>{
          assert(res.ok)
          return res.json()
        }).then(json=>{
          assert(json.token)
          sessions.push(json.token)
          return fetch('http://localhost/users', {
            headers: {
              'Authorization': 'Bearer '+json.token
            }
          }).then(res=>{
            assert(res.ok)
          })
        })
      })
    })
  })
})
