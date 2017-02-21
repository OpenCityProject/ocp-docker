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
  },
  getUsers() {
    return knex.select('person_name').from('person');
  },
  insertUser(person) {
    console.log("person is: ")
    console.log(person);
    return knex('person').insert(person);
  },
  getUserIdByEmail(email) {
    return knex.select('person_id').from('person').where('email', email);
  }
}