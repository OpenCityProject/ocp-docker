'use strict'

const pg = require('pg');

// Create a config to configure both pooling behavior and client options
// note: all config is optional and the environment variables will be read if the config is not present
const pgConfig = {
    user: process.env.POSTGRES_USER || "regular_user",
    password: process.env.POSTGRES_PASSWORD || "regular_password",
    host: process.env.POSTGRES_SERVER || "localhost",
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_DB || "ocp",
    max: process.env.POSTGRES_MAX_CLIENT || 10, // max number of clients in the pool
    idleTimeoutMillis: process.env.POSTGRES_IDLE_TIMEOUT_MILLIS || 30000, // how long a client is allowed to remain idle before being closed
};

// Initialises a connection pool, it will keep idle connections open for a 30 seconds and set a limit of maximum 10 idle clients
var pool = new pg.Pool(pgConfig);

exports.executeQuery = function(queryString, cb) {
    console.log(`Executing postgreSQLService.executeQuery(), queryString: ${queryString}`);
    return pool.connect(function(err, client, done) {
        if (err) {
            return console.error("Error occurred", err);
        }
        return client.query(`${queryString}`, [], function(err, result) {
            done();
            cb(err, result);
        })
    });
};