'use strict';

exports.userDELETE = function(args, res, next) {
  /**
   * Remove User
   * Delete User by ID 
   *
   * userId String The ID of the user
   * returns Success
   **/
  var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou",
  "object" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
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
  "code" : 123,
  "message" : "aeiou",
  "object" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
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
  var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou",
  "object" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.userPOST = function(args, res, next) {
  /**
   * Add a new User
   * Return an array of all users 
   *
   * user User User object
   * returns Success
   **/
  var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou",
  "object" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.userStateAllGET = function(args, res, next) {
  /**
   * Get User state
   *
   * returns List
   **/
  const databaseService = require('../database/databaseService');
    databaseService.executeQuery("SELECT * FROM person_state", function(err, sqlResult) {
        if (err) {
            console.error("Error occurred", err);
            res.end();
        }

        var result = {};
        result['application/json'] = [];

        var i = 0
        for (i = 0; i < sqlResult.rows.length; i++) {
            result['application/json'].push({
                "name": sqlResult.rows[i].person_state_name,
                "id": sqlResult.rows[i].person_state_id
            })
        }

        if (Object.keys(result).length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result[Object.keys(result)[0]] || {}, null, 2));
        } else {
            res.end();
        }
    })
}

exports.userTypeAllGET = function(args, res, next) {
  /**
   * Get User type
   *
   * returns List
   **/
  const databaseService = require('../database/databaseService');
    databaseService.executeQuery("SELECT * FROM person_type", function(err, sqlResult) {
        if (err) {
            console.error("Error occurred", err);
            res.end();
        }

        var result = {};
        result['application/json'] = [];

        var i = 0
        for (i = 0; i < sqlResult.rows.length; i++) {
            result['application/json'].push({
                "name": sqlResult.rows[i].person_type_name,
                "id": sqlResult.rows[i].person_type_id
            })
        }

        if (Object.keys(result).length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result[Object.keys(result)[0]] || {}, null, 2));
        } else {
            res.end();
        }
    })
}

exports.usersAllGET = function(args, res, next) {
  /**
   * Get Users
   * Return an array of all users 
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "id" : "aeiou",
  "email" : "aeiou",
  "username" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

