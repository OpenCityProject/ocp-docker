const pgconfig = {
  client: 'pg',
  connection: {
    host : 'db',
    user : process.env.POSTGRES_ADMIN_USER,
    password : process.env.POSTGRES_ADMIN_PASSWORD,
    database : process.env.POSTGRES_DB
  }
}
const knex = require('knex')(pgconfig)

module.exports = {
  removePerson(username){
    return knex.del().from('person').where('username', username)
  }
}
