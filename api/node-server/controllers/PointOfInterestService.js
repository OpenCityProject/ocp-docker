'use strict';
const poiModel = require('../model/poi');
const userModel = require('../model/user');
const pgconfig = require('../model/pgconfig');
const knex = require('knex')(pgconfig);

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
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

exports.poiGetByCategory = function(args, res, next) {
    const categoryQuery = poiModel.getCategoryById(args.category.value); //first get category name by id
    categoryQuery.then(response => {
        var categoryName = response[0].category_name;
        console.log("cat name is: " + categoryName);
        const query = poiModel.getPoi(args.lat.value, args.long.value, args.radiusInMetre.value || 2000);
        query.then(response => {
            var filteredResponse = response.filter((poi) => {
                return poi.categories && poi.categories.toLowerCase().split(",").indexOf(categoryName.toLowerCase()) >= 0;
            })
            console.log("Number of POIs: " + filteredResponse.length);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(filteredResponse || {}, null, 2));
        })
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
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
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
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
    const query = poiModel.getPoiById(args.poiId.value)
    query.then(response => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

exports.poiPATCH = function(args, auth, res, next) {
    /**
     * Update Point of Interest
     * Update a specific Point of Interest. 
     *
     * poiId String The id of the Point of Interest
     * poi Poi Point of Interest object (optional)
     * returns Success
     **/
    var poiId = args.poiId.value;
    console.log(auth);
    var credentials = new Buffer(auth.split(" ").pop(), "base64").toString("ascii").split(":"); 
    // TODO check password

    // first find user by id
    const userQuery = userModel.getUserIdByEmail(credentials[0]); //credentials [0] should be email (using basic auth)
    userQuery.then(response => {
        console.log(response[0].person_id);
        var poiDTO = args.poi.value;
        
        // add recurrence recurrence rule 
        getRecurrenceRule(poiDTO, function(recurrenceRuleId) { //pass in function as callback
            var poi = {
                poi_name: poiDTO.name,
                location_title: poiDTO.address,
                location_gps_coordinate: knex.raw('point(10, 10)'),
                location_polygon: poiDTO.location_polygon,
                recurrence_rule_id: recurrenceRuleId,
                start_date: poiDTO.start_date,
                end_date: poiDTO.end_date,
                is_all_day: poiDTO.is_all_day,
                poi_url: poiDTO.poi_url,
                poi_description: poiDTO.description,
                poi_state_id: 1,
                who_added_person_id: response[0].person_id //person_id of the user email that was inputted
            }
            // now create query to update POI
            const query = poiModel.updatePoi(poiId, poi);
            query.then(id => {
                console.log(id[0]);
                // finally create another query to post category
                const categoryQuery = poiModel.updatePoiCategory(id[0], poiDTO.categories); // now update category
                categoryQuery.then(categoryResponse => {
                    console.log(categoryResponse);
                    res.writeHead(204, {'Content-Type': 'text/plain'}); // pass this in as a callback
                    res.end();
                })
            })
        });
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

exports.poiPOST = function(args, auth, res, next) {
    /**
     * Add Point of Interest
     * Upload a new Point of Interest. 
     *
     * poi Poi Point of Interest object
     * returns Success
     **/
    console.log(auth);
    var credentials = new Buffer(auth.split(" ").pop(), "base64").toString("ascii").split(":"); 
    // TODO check password

    // first find user by id
    const userQuery = userModel.getUserIdByEmail(credentials[0]); //credentials [0] should be email (using basic auth)
    userQuery.then(response => {
        console.log(response[0].person_id);
        var poiDTO = args.poi.value;
        
        // add recurrence recurrence rule 
        getRecurrenceRule(poiDTO, function(recurrenceRuleId) { //pass in function as callback
            var poi = {
                poi_name: poiDTO.name,
                location_title: poiDTO.address,
                location_gps_coordinate: knex.raw('point(10, 10)'),
                location_polygon: poiDTO.location_polygon,
                recurrence_rule_id: recurrenceRuleId,
                start_date: poiDTO.start_date,
                end_date: poiDTO.end_date,
                is_all_day: poiDTO.is_all_day,
                poi_url: poiDTO.poi_url,
                poi_description: poiDTO.description,
                poi_state_id: 1,
                who_added_person_id: response[0].person_id //person_id of the user email that was inputted
            }
            // now create query to insert POI
            const query = poiModel.insertPoi(poi);
            query.then(id => {
                console.log(id[0]);
                // finally create another query to post category
                const categoryQuery = poiModel.insertPoiCategory(id[0], poiDTO.categories);
                categoryQuery.then(categoryResponse => {
                    console.log(categoryResponse);
                    res.writeHead(204, {'Content-Type': 'text/plain'}); // pass this in as a callback
                    res.end();
                })
            })
        });
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

function getRecurrenceRule(poiDTO, callback) {
    var recurrenceRuleId;
    if (poiDTO.is_every_day) {
        recurrenceRuleId = 1; //daily
        callback(recurrenceRuleId);
    } else {
        //const recurrenceQuery = poiModel.insertPoiRecurrenceRule(1, 1, 1, NULL); //daily
        recurrenceRuleId = 2; //daily
        const query = poiModel.insertPoiRecurrenceRule(1, 2, 1, null); // insert new weekly rule
        query.then(id => {
            console.log(id[0]);
            var dayIndexes = poiDTO.days_of_week.split(",");
            var days = dayIndexes.map((dayIndex) => {
                return { recurrence_rule_id: id[0], weekday_id: dayIndex, week_number: null };
            })
            console.log(days);
            const recurrenceQuery = poiModel.insertRecurrenceDayOfWeek(days);
            recurrenceQuery.then(response => {
                callback(id[0]);
            })
        })
    }
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
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}