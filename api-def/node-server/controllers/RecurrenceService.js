'use strict';

exports.recurrenceFrequencyAllGET = function(args, res, next) {
  /**
   * Get Recurrence Frequency
   *
   * returns List
   **/
  const databaseService = require('../database/databaseService');
    databaseService.executeQuery("SELECT * FROM recurrence_frequency", function(err, sqlResult) {
        if (err) {
            console.error("Error occurred", err);
            res.end();
        }

        var result = {};
        result['application/json'] = [];

        var i = 0
        for (i = 0; i < sqlResult.rows.length; i++) {
            result['application/json'].push({
                "name": sqlResult.rows[i].recurrence_frequency_name,
                "id": sqlResult.rows[i].recurrence_frequency_id
            })
        }

        if (Object.keys(result).length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result[Object.keys(result)[0]] || {}, null, 2));
        } else {
            res.end();
        }
    })
}

exports.weekdayAllGET = function(args, res, next) {
  /**
   * Get Weekday
   *
   * returns List
   **/
  const databaseService = require('../database/databaseService');
    databaseService.executeQuery("SELECT * FROM weekday", function(err, sqlResult) {
        if (err) {
            console.error("Error occurred", err);
            res.end();
        }

        var result = {};
        result['application/json'] = [];

        var i = 0
        for (i = 0; i < sqlResult.rows.length; i++) {
            result['application/json'].push({
                "name": sqlResult.rows[i].weekday_name,
                "id": sqlResult.rows[i].weekday_id
            })
        }

        if (Object.keys(result).length > 0) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result[Object.keys(result)[0]] || {}, null, 2));
        } else {
            res.end();
        }
    })
}

