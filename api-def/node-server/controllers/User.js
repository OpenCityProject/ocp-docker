'use strict';

var url = require('url');

var User = require('./UserService');

module.exports.userDELETE = function userDELETE (req, res, next) {
  User.userDELETE(req.swagger.params, res, next);
};

module.exports.userGET = function userGET (req, res, next) {
  User.userGET(req.swagger.params, res, next);
};

module.exports.userPATCH = function userPATCH (req, res, next) {
  User.userPATCH(req.swagger.params, res, next);
};

module.exports.userPOST = function userPOST (req, res, next) {
  User.userPOST(req.swagger.params, res, next);
};

module.exports.userStateAllGET = function userStateAllGET (req, res, next) {
  User.userStateAllGET(req.swagger.params, res, next);
};

module.exports.userTypeAllGET = function userTypeAllGET (req, res, next) {
  User.userTypeAllGET(req.swagger.params, res, next);
};

module.exports.usersAllGET = function usersAllGET (req, res, next) {
  User.usersAllGET(req.swagger.params, res, next);
};
