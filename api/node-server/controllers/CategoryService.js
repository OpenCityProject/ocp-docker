'use strict';
const categoryModel = require('../model/category');
const pgconfig = require('../model/pgconfig');
const knex = require('knex')(pgconfig);

exports.categoryGET = function(args, res, next) {
    /**
     * Get Category
     * Returns an array of category.
     *
     * returns List
     **/
    const query = categoryModel.getCategories();
    query.then(response => {
        console.log('categoryGET response:', response);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response || {}, null, 2));
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

exports.categoryIdDELETE = function(args, res, next) {
  /**
   * Delete a Category by ID
   *
   * id String The ID of the Category
   * returns Success
   **/
  console.log(`categoryIdDELETE id: ${args.id.value}`);
    const query = categoryModel.deleteCategory(args.id.value);
    query.then(response => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

exports.categoryIdPATCH = function(args, res, next) {
  /**
   * Update a Category by ID
   *
   * id String The ID of the Category
   * name String Value of the category
   * returns Success
   **/
  console.log(`categoryIdPATCH id: ${args.id.value}, name: ${args.name.value}`);
    const query = categoryModel.updateCategory(args.id.value, args.name.value);
    query.then(response => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}

exports.categoryPOST = function(args, res, next) {
  /**
   * Add a Category
   *
   * name String Value of the category
   * returns Success
   **/
  console.log(`categoryPOST name: ${args.name.value}`);
    const query = categoryModel.insertCategory(args.name.value);
    query.then(response => {
        res.writeHead(204, {'Content-Type': 'text/plain'});
        res.end();
    }).catch(err => {
        console.error('Error', err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(err));
    })
}
