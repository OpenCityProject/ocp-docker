const pgconfig = require('./pgconfig');
const knex = require('knex')(pgconfig);

module.exports = {
  getRecurrenceFrequency() {
    return knex.select('recurrence_frequency_id as id', 'recurrence_frequency_name as name')
      .from('recurrence_frequency');
  },
  getWeekday() {
    return knex.select('weekday_id AS id', 'weekday_name AS name')
      .from('weekday');
  }
}