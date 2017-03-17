'use strict';

var url = require('url');

var Tag = require('./TagService');

module.exports.tagGET = function tagGET (req, res, next) {
  Tag.tagGET(req.swagger.params, res, next);
};

module.exports.tagIdDELETE = function tagIdDELETE (req, res, next) {
  Tag.tagIdDELETE(req.swagger.params, res, next);
};

module.exports.tagIdPATCH = function tagIdPATCH (req, res, next) {
  Tag.tagIdPATCH(req.swagger.params, res, next);
};

module.exports.tagPOST = function tagPOST (req, res, next) {
  Tag.tagPOST(req.swagger.params, res, next);
};
