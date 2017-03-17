'use strict';

var url = require('url');

var Category = require('./CategoryService');

module.exports.categoryGET = function categoryGET (req, res, next) {
  Category.categoryGET(req.swagger.params, res, next);
};

module.exports.categoryIdDELETE = function categoryIdDELETE (req, res, next) {
  Category.categoryIdDELETE(req.swagger.params, res, next);
};

module.exports.categoryIdPATCH = function categoryIdPATCH (req, res, next) {
  Category.categoryIdPATCH(req.swagger.params, res, next);
};

module.exports.categoryPOST = function categoryPOST (req, res, next) {
  Category.categoryPOST(req.swagger.params, res, next);
};
