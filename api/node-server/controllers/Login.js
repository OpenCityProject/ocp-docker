'use strict';

var url = require('url');

var Login = require('./LoginService');

module.exports.loginPOST = function loginPOST (req, res, next) {
  Login.loginPOST(req.swagger.params, res, next);
};


