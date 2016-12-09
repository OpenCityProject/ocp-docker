'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.usersGET = function usersGET (req, res, next) {
  Users.usersGET(req.swagger.params, res, next);
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  Users.usersPOST(req.swagger.params, res, next);
};

module.exports.usersUsernameDELETE = function usersUsernameDELETE (req, res, next) {
  Users.usersUsernameDELETE(req.swagger.params, res, next);
};

module.exports.usersUsernamePATCH = function usersUsernamePATCH (req, res, next) {
  Users.usersUsernamePATCH(req.swagger.params, res, next);
};
