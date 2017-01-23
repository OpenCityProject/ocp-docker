'use strict';

var url = require('url');

var Weekday = require('./WeekdayService');

module.exports.weekdayAllGET = function weekdayAllGET (req, res, next) {
  Weekday.weekdayAllGET(req.swagger.params, res, next);
};
