'use strict';

var url = require('url');

var Recurrence = require('./RecurrenceService');

module.exports.recurrenceFrequencyAllGET = function recurrenceFrequencyAllGET (req, res, next) {
  Recurrence.recurrenceFrequencyAllGET(req.swagger.params, res, next);
};

module.exports.weekdayAllGET = function weekdayAllGET (req, res, next) {
  Recurrence.weekdayAllGET(req.swagger.params, res, next);
};
