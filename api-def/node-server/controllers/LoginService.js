'use strict';
var express = require('express')

const authModel = require('../model/pgauth');
const bcrypt = require('bcrypt');
const saltRounds = 4;

exports.loginPOST = function(args, res, next) {
  /**
   * Get Recurrence Frequency
   *
   * returns List
   **/
    console.log('loginPOST: ' + JSON.stringify(args.auth.value));
    const query = authModel.findPerson(args.auth.value.email);
    query.then(response => {
      var person = response;
      console.log('person: ', JSON.stringify(person));
      //now get password
      const passwordQuery = authModel.getPassword(person.person_id);
      passwordQuery.then(passwordResponse => {
        var password = passwordResponse;
        console.log('comparing ' + args.auth.value.password + " with: " + password.password_hash);
        bcrypt.compare(args.auth.value.password, password.password_hash, function(err, hashRes) {
            if (hashRes) {
              res.writeHead(200, {'Content-Type': 'text/plain'});
              res.end("Success");
            } else {
              res.writeHead(401, {'Content-Type': 'text/plain'});
              res.end("Unauthorized");
            }
        });
      }).catch(err => {
          console.error('Error', err);
          res.end(JSON.stringify(err));
      })
    }).catch(err => {
        console.error('Error', err);
        res.end(JSON.stringify(err));
    })
}
