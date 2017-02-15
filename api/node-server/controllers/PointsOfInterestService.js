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
    res.setHeader('Content-Type', 'application/json');
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
    res.writeHead(204, {'Content-Type': 'text/plain'});
    res.end();
  }).catch(err=>{
    console.error('Error', err);
    res.writeHead(404, {'Content-Type': 'text/plain'});
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
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  }).catch(err=>{
    console.error('Error', err);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(err));
  })
}

exports.poiPATCH = function(args, res, next) {
  console.log(args.poiId.value);
  var poi = args.poi.value;
  const query = pgdb.updatePoi(args.poiId.value, poi);
  query.then(response=>{
    res.writeHead(204, {'Content-Type': 'text/plain'});
    res.end();
  }).catch(err=>{
    console.error('Error', err);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(err));
  })
}

exports.poiPOST = function(args, res, next) {
  var poi = args.poi.value;
  const query = pgdb.insertPoi(poi);
  query.then(response=>{
    res.writeHead(204, {'Content-Type': 'text/plain'});
    res.end();
  }).catch(err=>{
    console.error('Error', err);
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(err));
  })
}
