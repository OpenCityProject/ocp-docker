'use strict';
const pgdb = require('../model/pgdb')

exports.poiAllGET = function(args, res, next) {
  /**
   * Get Points of Interest
   * Returns information about the Points of Interest near your location. 
   *
   * lat Double Latitude component of location.
   * long Double Longitude component of location.
   * returns List
   **/
//   var examples = {};
//   examples['application/json'] = [ {
//   "end_date" : "aeiou",
//   "poi_url" : "aeiou",
//   "description" : "aeiou",
//   "gps_lat" : "aeiou",
//   "gps_long" : "aeiou",
//   "tags" : "aeiou",
//   "location_polygon" : "aeiou",
//   "name" : "aeiou",
//   "opening_hours" : "aeiou",
//   "is_all_day" : true,
//   "id" : "aeiou",
//   "categories" : "aeiou",
//   "start_date" : "aeiou"
// } ];

  const query = pgdb.getPoi()
  query.then(pois=>{
    console.log("number of pois: " + pois.length);
    var poiResponse = [];
    pois.forEach((poi) => {
      console.log('poi', poi)
      poiResponse.push(poi);
    });
    res.end(JSON.stringify(poiResponse));
  }).catch(err=>{
    console.error('Error', err);
    res.end(JSON.stringify(err));
  })

  // if (Object.keys(examples).length > 0) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // } else {
  //   res.end();
  // }
}

exports.poiDELETE = function(args, res, next) {
  /**
   * Remove Point of Interest by ID
   * Delete a specific Point of Interest. 
   *
   * poiId String The id of the Point of Interest
   * returns Success
   **/
  var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou",
  "object" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.poiGET = function(args, res, next) {
  /**
   * Get Point of Interest by ID
   * Returns information about the specific Point of Interest. 
   *
   * poiId String The id of the Point of Interest
   * returns Object
   **/
  var examples = {};
  examples['application/json'] = "{}";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.poiPATCH = function(args, res, next) {
  /**
   * Update Point of Interest
   * Update a specific Point of Interest. 
   *
   * poiId String The id of the Point of Interest
   * poi Poi Point of Interest object (optional)
   * returns Success
   **/
  var examples = {};
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou",
  "object" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.poiPOST = function(args, res, next) {
  /**
   * Add Point of Interest
   * Upload a new Point of Interest. 
   *
   * poi Poi Point of Interest object
   * returns Success
   **/
  var poiDTO = args.poi.value;
  var poi = { poi_id:  poiDTO.id, poi_name: poiDTO.name, location_title: "unknown", location_polygon: poiDTO.location_polygon, recurrence_rule_id: 12345,
              start_date: poiDTO.start_date, end_date: poiDTO.end_date, poi_url: poiDTO.poi_url, poi_description: poiDTO.description,
                poi_state_id: 0, who_added_patron_id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11" }
  const query = pgdb.insertPoi(poi);
  query.then(response=>{
    console.log(response);
    res.end(JSON.stringify(response));
  }).catch(err=>{
    console.error('Error', err);
    res.end(JSON.stringify(err));
  })

  // var examples = {};
  // examples['application/json'] = {
  //   "code" : 123,
  //   "message" : "aeiou",
  //   "object" : "{}"
  // };
  // if (Object.keys(examples).length > 0) {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  // } else {
  //   res.end();
  // }
}

exports.poiStateAllGET = function(args, res, next) {
  /**
   * Get POI state
   *
   * returns List
   **/
  const databaseService = require('../database/databaseService');
    databaseService.executeQuery("SELECT * FROM poi_state", function(err, sqlResult) {
        if (err) {
            console.error("Error occurred", err);
            res.end();
        }

        var result = {};
        result['application/json'] = [];

        var i = 0
        for (i = 0; i < sqlResult.rows.length; i++) {
            result['application/json'].push({
                "name": sqlResult.rows[i].poi_state_name,
                "id": sqlResult.rows[i].poi_state_id
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

