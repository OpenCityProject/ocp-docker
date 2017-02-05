'use strict';
const poiModel = require('../model/poi');

exports.categoryGET = function(args, res, next) {
    /**
     * Get Category
     * Returns an array of category.
     *
     * returns List
     **/
    const query = poiModel.getCategory();
    query.then(response => {
        console.log('categoryGET response:', response);
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
        console.error('Error', err);
        res.end(JSON.stringify(err));
    })
}

exports.poiAllGET = function(args, res, next) {
    /**
     * Get Points of Interest
     * Returns information about the Points of Interest near your location. 
     *
     * lat Double Latitude component of location.
     * long Double Longitude component of location.
     * returns List
     **/
    const query = poiModel.getPoi(args.lat.value, args.long.value, args.radiusInMetre.value || 2000);
    query.then(response => {
        console.log("Number of POIs: " + response.length);
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
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
    const query = poiModel.deletePoi(args.poiId.value)
    query.then(response => {
        console.log(response);
        res.end(JSON.stringify(response));
    }).catch(err => {
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
    const query = poiModel.getPoiById(args.poiId.value)
    query.then(response => {
        console.log(response);
        res.end(JSON.stringify(response));
    }).catch(err => {
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
    var poi = {
        poi_id: poiDTO.id,
        poi_name: poiDTO.name,
        location_title: "unknown",
        location_polygon: poiDTO.location_polygon,
        recurrence_rule_id: 12345,
        start_date: poiDTO.start_date,
        end_date: poiDTO.end_date,
        poi_url: poiDTO.poi_url,
        poi_description: poiDTO.description,
        poi_state_id: 1,
        who_added_patron_id: "009b4c56-e2c9-11e6-940b-6f54577f0d9d"
    }
    const query = poiModel.updatePoi(args.poiId.value, poi);
    query.then(response => {
        console.log(response);
        res.end(JSON.stringify(response));
    }).catch(err => {
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
    var poi = {
        poi_id: poiDTO.id,
        poi_name: poiDTO.name,
        location_title: "unknown",
        location_polygon: poiDTO.location_polygon,
        recurrence_rule_id: 12345,
        start_date: poiDTO.start_date,
        end_date: poiDTO.end_date,
        poi_url: poiDTO.poi_url,
        poi_description: poiDTO.description,
        poi_state_id: 1,
        who_added_patron_id: "009b4c56-e2c9-11e6-940b-6f54577f0d9d"
    }
    const query = poiModel.insertPoi(poi);
    query.then(response => {
        console.log(response);
        res.end(JSON.stringify(response));
    }).catch(err => {
        console.error('Error', err);
        res.end(JSON.stringify(err));
    })
}

exports.poiStateAllGET = function(args, res, next) {
    /**
     * Get POI state
     *
     * returns List
     **/
    const query = poiModel.getPoiState();
    query.then(response => {
        console.log('poiStateAllGET response:', response);
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
        console.error('Error', err);
        res.end(JSON.stringify(err));
    })
}

exports.tagGET = function(args, res, next) {
    /**
     * Get Tags
     * Returns an array of tag.
     *
     * returns List
     **/
    const query = poiModel.getTag();
    query.then(response => {
        console.log('tagGET response:', response);
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
        console.error('Error', err);
        res.end(JSON.stringify(err));
    })
}

exports.tagIdDELETE = function(args, res, next) {
    /**
     * Delete a Tag by ID
     *
     * id String The ID of the Tag
     * returns Success
     **/
    console.log(`tagIdDELETE id: ${args.id.value}`);
    const query = poiModel.deleteTag(args.id.value);
    query.then(response => {
        console.log('tagIdDELETE response:', response);
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
        console.error('Error', err);
        res.end(JSON.stringify(err));
    })
}

exports.tagIdPATCH = function(args, res, next) {
    /**
     * Update a Tag by ID
     *
     * id String The ID of the Tag
     * name String Value of the tag
     * returns Success
     **/
    console.log(`tagIdPATCH id: ${args.id.value}, name: ${args.name.value}`);
    const query = poiModel.updateTag(args.id.value, args.name.value);
    query.then(response => {
        console.log('tagIdPATCH response:', response);
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
        console.error('Error', err);
        res.end(JSON.stringify(err));
    })
}

exports.tagPOST = function(args, res, next) {
    /**
     * Add a Tag
     *
     * name String Value of the tag
     * returns Success
     **/
    console.log(`tagPOST name: ${args.name.value}`);
    const query = poiModel.insertTag(args.name.value);
    query.then(response => {
        console.log('tagPOST response:', response);
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
        console.error('Error', err);
        res.end(JSON.stringify(err));
    })
}