/**
 * Open City Project API
 * Interact with your city with the Open City Project API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenCityProjectApi);
  }
}(this, function(expect, OpenCityProjectApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenCityProjectApi.Poi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Poi', function() {
    it('should create an instance of Poi', function() {
      // uncomment below and update the code to test Poi
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be.a(OpenCityProjectApi.Poi);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property gpsLat (base name: "gps_lat")', function() {
      // uncomment below and update the code to test the property gpsLat
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property gpsLong (base name: "gps_long")', function() {
      // uncomment below and update the code to test the property gpsLong
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property locationPolygon (base name: "location_polygon")', function() {
      // uncomment below and update the code to test the property locationPolygon
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property distanceInMetre (base name: "distance_in_metre")', function() {
      // uncomment below and update the code to test the property distanceInMetre
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property isAllDay (base name: "is_all_day")', function() {
      // uncomment below and update the code to test the property isAllDay
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property poiUrl (base name: "poi_url")', function() {
      // uncomment below and update the code to test the property poiUrl
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property isEveryDay (base name: "is_every_day")', function() {
      // uncomment below and update the code to test the property isEveryDay
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property daysOfWeek (base name: "days_of_week")', function() {
      // uncomment below and update the code to test the property daysOfWeek
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new OpenCityProjectApi.Poi();
      //expect(instance).to.be();
    });

  });

}));
