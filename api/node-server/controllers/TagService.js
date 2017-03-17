'use strict';
const tagModel = require('../model/tag');
const pgconfig = require('../model/pgconfig');
const knex = require('knex')(pgconfig);

exports.tagGET = function(args, res, next) {
    /**
     * Get Tags
     * Returns an array of tag.
     *
     * returns List
     **/
    const query = tagModel.getTag();
    query.then(response => {
        console.log('tagGET response:', response);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
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
    const query = tagModel.deleteTag(args.id.value);
    query.then(response => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
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
    const query = tagModel.updateTag(args.id.value, args.name.value);
    query.then(response => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
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
    const query = tagModel.insertTag(args.name.value);
    query.then(response => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}