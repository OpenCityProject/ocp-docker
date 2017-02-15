const pgconfig = require('./pgconfig');
const knex = require('knex')(pgconfig);

module.exports = {
  getUserState() {
    return knex.select('person_state_id as id', 'person_state_name as name')
      .from('person_state');
  },
  getUserType() {
    return knex.select('person_type_id as id', 'person_type_name as name')
      .from('person_type');
  }
}