const pgconfig = require('./pgconfig')
const knex = require('knex')(pgconfig)
const mime = require('mime-types')

module.exports = {
  findPerson(username){
    return knex.select().from('person').where('username', username).first()
  }
, findSession(sessionId){
    return knex.select().from('session').where('session_id', sessionId).first()
  }
, addPerson(params){
    const personParams = ['username', 'password_hash', 'email']
      .reduce((a, n)=>{a[n] = params[n]; return a}, {})
    return knex.insert(personParams).into('person').returning('*').then(person=>{
      if (params.photo && params.photo.name){
        const photoParams = ['image', 'name', 'width', 'height']
          .reduce((a, n)=>{a[n] = params.photo[n]; return a}, {})
        const imageParams = Object.assign({}, photoParams, {
          mimetype: mime.lookup(params.photo.name)
        })
        return this.addImage(imageParams).then(image_id=>{
          const profilePicParams = {
            username: params.username
          , image_id: image_id
          }
          return this.addProfilePicture(profilePicParams).then(()=>{
            return person
          })
        })
      }
      return person
    })
  }
, addImage(params){
    return knex.insert(params).into('image').returning('image_id')
  }
, addProfilePicture(params){
    return knex.insert(params).into('person_photo')
  }
, addSession(username, extras){
    return knex.insert({username, ipaddress: extras.ipaddress}).into('session').returning('session_id')
      .then(res=>res.length ? res[0] : null)
  }
, removeSession(sessionId){
    return knex.del().from('session').where('session_id', sessionId)
  }
}
