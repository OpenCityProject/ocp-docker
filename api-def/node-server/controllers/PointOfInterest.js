'use strict';

var url = require('url');

var PointOfInterest = require('./PointOfInterestService');

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
