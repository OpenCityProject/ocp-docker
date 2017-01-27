const pgconfig = require('./pgconfig')
const knex = require('knex')(pgconfig)

module.exports = {
  test(){
    knex.select(knex.raw(1))
  },
  getPoi(){
    return knex.select().from('poi');
  },
  insertPoi(poi) {
    console.log("poi is: ")
    console.log(poi);
    return knex('poi').insert(poi);
  }
}
