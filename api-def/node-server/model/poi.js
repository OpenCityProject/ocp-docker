const pgconfig = require('./pgconfig')
const knex = require('knex')(pgconfig)

module.exports = {
	test() {
		knex.select(knex.raw(1))
	},
	getPoi(lat, long) {
		// return knex
		// 	.select(
		// 		'poi_id AS id',
		// 		'poi_name AS name',
		// 		'location_gps_coordinate AS gps_lat',
		// 		'location_gps_coordinate AS gps_long',
		// 		'location_polygon',
		// 		'start_date',
		// 		'end_date',
		// 		'NULL AS opening_hours',
		// 		'NULL AS is_all_day',
		// 		'poi_url',
		// 		'poi_description AS description',
		// 		'NULL AS categories',
		// 		'NULL AS tags')
		// 	.from('poi');
		return knex
			.select()
			.from('poi');
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