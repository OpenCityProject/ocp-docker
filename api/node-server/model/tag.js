const pgconfig = require('./pgconfig');
const knex = require('knex')(pgconfig);

module.exports = {
    test() {
        knex.select(knex.raw(1))
    },
    deleteTag(id) {
        return knex('tag').where('tag_id', id).del();
    },
    insertTag(name) {
        return knex('tag').insert({
            tag_name: name
        });
    },
    getTag() {
        return knex.select('tag_id AS id', 'tag_name AS name').from('tag');
    },
    updateTag(id, name) {
        return knex('tag').where('tag_id', id).update({
            tag_name: name
        });
    }
}