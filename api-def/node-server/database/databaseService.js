const postgreSQLService = require('./postgreSQLService')

module.exports.executeQuery = function executeQuery (queryString, cb) {
  return postgreSQLService.executeQuery(queryString, cb)
};