const pgconfig = require('./pgconfig')
const knex = require('knex')(pgconfig)

module.exports = {
  test(){
    knex.select(knex.raw(1))
  }
}
