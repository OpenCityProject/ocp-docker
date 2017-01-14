'use strict';

var url = require('url');


var PointsOfInterest = require('./PointsOfInterestService');


module.exports.poiGET = function poiGET (req, res, next) {
  PointsOfInterest.poiGET(req.swagger.params, res, next);
};

module.exports.poiPOST = function poiPOST (req, res, next) {
  PointsOfInterest.poiPOST(req.swagger.params, res, next);
};

module.exports.poiPoiIdDELETE = function poiPoiIdDELETE (req, res, next) {
  PointsOfInterest.poiPoiIdDELETE(req.swagger.params, res, next);
};

module.exports.poiPoiIdPATCH = function poiPoiIdPATCH (req, res, next) {
  PointsOfInterest.poiPoiIdPATCH(req.swagger.params, res, next);
};
