const pgconfig = require('./pgconfig')
const knex = require('knex')(pgconfig)

module.exports = {
	test() {
		knex.select(knex.raw(1))
	},
	getPoi() {
		return knex.select().from('poi');
	},
	insertPoi(poi) {
		console.log("poi is: ")
		console.log(poi);
		return knex('poi').insert(poi);
	},
	deletePoi(poiId) {
		return knex('poi').where('poi_id', poiId).del();
	},
	getPoiById(poiId) {
		return knex.select().from('poi').where('poi_id', poiId);
	},
	updatePoi(poiId, poi) {
		return knex('poi').where('poi_id', poiId).update(poi);
	},
	getPoiState() {
		return knex.select('poi_state_id AS id', 'poi_state_name AS name').from('poi_state');
	}
}