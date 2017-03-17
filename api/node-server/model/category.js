const pgconfig = require('./pgconfig');
const knex = require('knex')(pgconfig);

module.exports = {
    test() {
        knex.select(knex.raw(1))
    },
    deleteCategory(id) {
        return knex('category').where('category_id', id).del();
    },
    insertCategory(name) {
        return knex('category').insert({
            category_name: name
        });
    },
    getCategories() {
        return knex.select('category_id AS id', 'category_name AS name').from('category');
    },
    updateCategory(id, name) {
        return knex('category').where('category_id', id).update({
            category_name: name
        });
    },
}