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
}

exports.poiDELETE = function(args, res, next) {
  /**
   * Remove Point of Interest by ID
   * Delete a specific Point of Interest. 
   *
   * poiId String The id of the Point of Interest
   * returns Success
   **/
  console.log(args.poiId.value);
  const query = pgdb.deletePoi(args.poiId.value)
  query.then(response=>{
    console.log(response);
    res.end(JSON.stringify(response));
  }).catch(err=>{
    console.error('Error', err);
    res.end(JSON.stringify(err));
  })
}

exports.poiGET = function(args, res, next) {
  /**
   * Get Point of Interest by ID
   * Returns information about the specific Point of Interest. 
   *
   * poiId String The id of the Point of Interest
   * returns Object
   **/
  console.log(args.poiId.value);
  const query = pgdb.getPoiById(args.poiId.value)
  query.then(response=>{
    console.log(response);
    res.end(JSON.stringify(response));
  }).catch(err=>{
    console.error('Error', err);
    res.end(JSON.stringify(err));
  })
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
  console.log(args.poiId.value);
  var poiDTO = args.poi.value;
  var poi = { poi_id:  poiDTO.id, poi_name: poiDTO.name, location_title: "unknown", location_polygon: poiDTO.location_polygon, recurrence_rule_id: 12345,
              start_date: poiDTO.start_date, end_date: poiDTO.end_date, poi_url: poiDTO.poi_url, poi_description: poiDTO.description,
                poi_state_id: 1, who_added_patron_id: "009b4c56-e2c9-11e6-940b-6f54577f0d9d" }
  const query = pgdb.updatePoi(args.poiId.value, poi);
  query.then(response=>{
    console.log(response);
    res.end(JSON.stringify(response));
  }).catch(err=>{
    console.error('Error', err);
    res.end(JSON.stringify(err));
  })
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
                poi_state_id: 1, who_added_patron_id: "009b4c56-e2c9-11e6-940b-6f54577f0d9d" }
  const query = pgdb.insertPoi(poi);
  query.then(response=>{
    console.log(response);
    res.end(JSON.stringify(response));
  }).catch(err=>{
    console.error('Error', err);
    res.end(JSON.stringify(err));
  })
}

