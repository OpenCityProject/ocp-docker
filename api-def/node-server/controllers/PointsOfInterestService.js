'use strict';

exports.poiGET = function(args, res, next) {

  var pg = require('pg');
  var conString = "postgres://admin_user:admin_password@db:5432/ocp";
  var client = new pg.Client(conString);
  client.connect();
  console.log("hurray2");
  var query = client.query("SELECT * FROM poi");
  query.on('row', function(row) {
      console.log(row);
  });

  query.on('end', function() {
      client.end();
  });

  /**
   * parameters expected in the args:
  * lat (Double)
  * lng (Double)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "gps_lng" : "aeiou",
  "poi_name" : "aeiou",
  "poi_type" : "aeiou",
  "gps_lat" : "aeiou",
  "poi_id" : "aeiou",
  "category" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.poiPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * poi (POI)
  **/
    var examples = {};
  examples['application/json'] = {
  "success" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.poiPoiIdDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * poiId (String)
  * poi (POI)
  **/
    var examples = {};
  examples['application/json'] = {
  "success" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.poiPoiIdPATCH = function(args, res, next) {
  /**
   * parameters expected in the args:
  * poiId (String)
  * poi (POI)
  **/
    var examples = {};
  examples['application/json'] = {
  "success" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

