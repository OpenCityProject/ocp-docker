'use strict';

var url = require('url');

var PointOfInterest = require('./PointOfInterestService');

module.exports.categoryGET = function categoryGET (req, res, next) {
  PointOfInterest.categoryGET(req.swagger.params, res, next);
};

module.exports.categoryIdDELETE = function categoryIdDELETE (req, res, next) {
  PointOfInterest.categoryIdDELETE(req.swagger.params, res, next);
};

module.exports.categoryIdPATCH = function categoryIdPATCH (req, res, next) {
  PointOfInterest.categoryIdPATCH(req.swagger.params, res, next);
};

module.exports.categoryPOST = function categoryPOST (req, res, next) {
  PointOfInterest.categoryPOST(req.swagger.params, res, next);
};

module.exports.poiAllGET = function poiAllGET (req, res, next) {
  PointOfInterest.poiAllGET(req.swagger.params, res, next);
};

module.exports.poiDELETE = function poiDELETE (req, res, next) {
  PointOfInterest.poiDELETE(req.swagger.params, res, next);
};

module.exports.poiGET = function poiGET (req, res, next) {
  PointOfInterest.poiGET(req.swagger.params, res, next);
};

module.exports.poiPATCH = function poiPATCH (req, res, next) {
  PointOfInterest.poiPATCH(req.swagger.params, res, next);
};

module.exports.poiPOST = function poiPOST (req, res, next) {
  PointOfInterest.poiPOST(req.swagger.params, res, next);
};

module.exports.poiStateAllGET = function poiStateAllGET (req, res, next) {
  PointOfInterest.poiStateAllGET(req.swagger.params, res, next);
};

module.exports.tagGET = function tagGET (req, res, next) {
  PointOfInterest.tagGET(req.swagger.params, res, next);
};

module.exports.tagIdDELETE = function tagIdDELETE (req, res, next) {
  PointOfInterest.tagIdDELETE(req.swagger.params, res, next);
};

module.exports.tagIdPATCH = function tagIdPATCH (req, res, next) {
  PointOfInterest.tagIdPATCH(req.swagger.params, res, next);
};

module.exports.tagPOST = function tagPOST (req, res, next) {
  PointOfInterest.tagPOST(req.swagger.params, res, next);
};
