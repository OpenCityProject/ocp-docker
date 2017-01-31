const pgconfig = require('./pgconfig');
const knex = require('knex')(pgconfig);

module.exports = {
    test() {
        knex.select(knex.raw(1))
    },
    getPoi(lat, long, radiusInMetre) {
        return knex
            .select(knex.raw("\
				poi.poi_id AS id,\
				poi_name AS name,\
				location_gps_coordinate[0] AS gps_lat,\
				location_gps_coordinate[1] AS gps_long,\
				location_polygon,\
				start_date,\
				end_date,\
				NULL AS opening_hours,\
				NULL AS is_all_day,\
				poi_url,\
				poi_description AS description,\
				string_agg(category.category_name, ',') AS categories,\
				string_agg(tag.tag_name, ',') AS tags"))
            .from('poi')
            .leftJoin('poi_category', 'poi_category.poi_id', 'poi.poi_id')
            .leftJoin('poi_tag', 'poi_tag.poi_id', 'poi.poi_id')
            .leftJoin('category', 'category.category_id', 'poi_category.category_id')
            .leftJoin('tag', 'tag.tag_id', 'poi_tag.tag_id')
            //.where() // TODO: Look up POI by GPS coordinate + Radius.
            .groupBy('poi.poi_id');
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