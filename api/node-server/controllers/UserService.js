'use strict';

const userModel = require('../model/user');

exports.userDELETE = function(args, res, next) {
  /**
   * Remove User
   * Delete User by ID 
   *
   * userId String The ID of the user
   * returns Success
   **/
    const query = userModel.deleteUser(args.userId.value)
    query.then(response => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

exports.userGET = function(args, res, next) {
  /**
   * Get User
   * Get User by ID 
   *
   * userId String The ID of the user
   * returns Success
   **/
  var examples = {};
  examples['application/json'] = {
    "code": 123,
    "message": "aeiou",
    "object": "{}"
  };
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end();
  }
}

exports.userPATCH = function(args, res, next) {
  /**
   * Update User
   * Update User by ID 
   *
   * userId String The ID of the user
   * user User The User object
   * returns Success
   **/
    var personDTO = args.user.value;
    var person = {
        person_name: personDTO.name,
        phone_number: "1111-2222",
        email: personDTO.email,
        person_type_id: 1,
        oauth_token: "Abcdefghijklmno",
        oauth_token_expiration: "9999-9-9",
        person_state_id: "1",
    }
    const query = userModel.editUser(args.userId.value, person);
    query.then(response => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

exports.userPOST = function(args, res, next) {
  /**
   * Add a new User
   **/
    var personDTO = args.user.value;
    var person = {
        person_name: personDTO.name,
        phone_number: "1111-2222",
        email: personDTO.email,
        person_type_id: 1,
        oauth_token: "Abcdefghijklmno",
        oauth_token_expiration: "9999-9-9",
        person_state_id: "1",
    }
    const query = userModel.insertUser(person);
    query.then(response => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

exports.userStateAllGET = function(args, res, next) {
  /**
   * Get User state
   *
   * returns List
   **/
  const query = userModel.getUserState();
  query.then(response => {
    console.log('userStateAllGET response:', response);
    res.end(JSON.stringify(response || {}, null, 2));
  }).catch(err => {
    console.error('Error', err);
    res.writeHead(503, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(err));
  })
}

exports.userTypeAllGET = function(args, res, next) {
  /**
   * Get User type
   *
   * returns List
   **/
  const query = userModel.getUserType();
  query.then(response => {
    console.log('userTypeAllGET response:', response);
    res.end(JSON.stringify(response || {}, null, 2));
  }).catch(err => {
    console.error('Error', err);
    res.writeHead(503, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(err));
  })
}

exports.usersAllGET = function(args, res, next) {
  /**
   * Get Users
   * Return an array of all users 
   *
   * returns List
   **/
  const databaseService = require('../database/databaseService');
  databaseService.executeQuery("\
            SELECT \
              p.*, \
              pt.person_type_name,\
              ps.person_state_name,\
              op.oauth_provider_name\
            FROM person AS p\
              INNER JOIN person_type AS pt ON pt.person_type_id = p.person_type_id\
              INNER JOIN person_state AS ps ON ps.person_state_id = p.person_state_id\
              LEFT JOIN oauth_provider AS op ON op.oauth_provider_id = p.oauth_provider_id\
          ", function(err, sqlResult) {
    if (err) {
      console.error("Error occurred", err);
      res.writeHead(503, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(err));
    }

    var result = {};
    result['application/json'] = [];

    var i = 0
    for (i = 0; i < sqlResult.rows.length; i++) {
      result['application/json'].push({
        "id": sqlResult.rows[i].person_id,
        "name": sqlResult.rows[i].person_name,
        "email": sqlResult.rows[i].email,
        "phone": sqlResult.rows[i].phone_number,
        "type": sqlResult.rows[i].person_type_name,
        "state": sqlResult.rows[i].person_state_name,
        "oauth_provider": sqlResult.rows[i].oauth_provider_name,
        "oauth_token": sqlResult.rows[i].oauth_token,
        "oauth_token_expiration": sqlResult.rows[i].oauth_token_expiration,

      })
    }

    if (Object.keys(result).length > 0) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result[Object.keys(result)[0]] || {}, null, 2));
    } else {
      res.writeHead(503, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(err));
    }
  })
}