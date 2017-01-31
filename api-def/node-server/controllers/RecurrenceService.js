'use strict';

const recurrenceModel = require('../model/recurrence');

exports.recurrenceFrequencyAllGET = function(args, res, next) {
  /**
   * Get Recurrence Frequency
   *
   * returns List
   **/
  const query = recurrenceModel.getRecurrenceFrequency();
  query.then(response => {
    console.log('recurrenceFrequencyAllGET response:', response);
    res.end(JSON.stringify(response || {}, null, 2));
  }).catch(err => {
    console.error('Error', err);
    res.status(503).end(JSON.stringify(err));
  })
}

exports.weekdayAllGET = function(args, res, next) {
  /**
   * Get Weekday
   *
   * returns List
   **/
  const query = recurrenceModel.getWeekday();
  query.then(response => {
    console.log('weekdayAllGET response:', response);
    res.end(JSON.stringify(response || {}, null, 2));
  }).catch(err => {
    console.error('Error', err);
    res.status(503).end(JSON.stringify(err));
  })
}