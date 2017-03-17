const pgconfig = require('./pgconfig');
const knex = require('knex')(pgconfig);

module.exports = {
    test() {
        knex.select(knex.raw(1))
    },
    getPoi(lat, long, radiusInMetre) {
        return knex
            .select(knex.raw(`\
				poi.poi_id AS id,\
				poi_name AS name,\
				location_gps_coordinate[0] AS gps_lat,\
				location_gps_coordinate[1] AS gps_long,\
				location_polygon,\
                location_title AS address,\
				CASE\
				    WHEN location_gps_coordinate IS NOT NULL THEN\
				        ST_Distance(ST_GeogFromText(ST_AsText(location_gps_coordinate::geometry)), ST_GeogFromText('SRID=4326;POINT(${lat} ${long})'))\
				    WHEN location_polygon IS NOT NULL THEN\
				        ST_Distance(ST_GeogFromText(ST_AsText(location_polygon::geometry)), ST_GeogFromText('SRID=4326;POINT(${lat} ${long})'))\
				END AS distance_in_metre,\
				start_date,\
				end_date,\
				poi_url,\
				poi_description AS description,\
                (\
                    SELECT string_agg(category_name, ',')\
                    FROM poi_category\
                        INNER JOIN category ON category.category_id = poi_category.category_id\
                    WHERE poi_category.poi_id = poi.poi_id\
                ) AS categories,\
                (\
                    SELECT string_agg(tag_name, ',')\
                    FROM poi_tag\
                        INNER JOIN tag ON tag.tag_id = poi_tag.tag_id\
                    WHERE poi_tag.poi_id = poi.poi_id\
                ) AS tags,\
                 (\
                    SELECT person_name\
                    FROM person\
                    WHERE poi.who_added_person_id = person.person_id\
                ) AS author,\
                CASE\
                    WHEN poi.recurrence_rule_id != 1 THEN
                        (\
                            SELECT array_agg(weekday_id)\
                            FROM recurrence_day_of_week\
                                INNER JOIN recurrence_rule ON recurrence_rule.recurrence_rule_id = recurrence_day_of_week.recurrence_rule_id\
                            WHERE poi.recurrence_rule_id = recurrence_rule.recurrence_rule_id\
                        )\
                    WHEN poi.recurrence_rule_id = 1 THEN\
                        ARRAY[1,2,3,4,5,6,7]\
                END AS days_available`))
            .from('poi')
            .where(knex.raw(`\
                (\
                    location_gps_coordinate IS NOT NULL\
                    AND ST_DWithin(ST_GeogFromText(ST_AsText(location_gps_coordinate::geometry)), ST_GeogFromText('SRID=4326;POINT(${lat} ${long})'), ${radiusInMetre})\
                )\
                OR (\
                    location_polygon IS NOT NULL\
                    AND ST_DWithin(ST_GeogFromText(ST_AsText(location_polygon::geometry)), ST_GeogFromText('SRID=4326;POINT(${lat} ${long})'), ${radiusInMetre})\
                )`))
            .groupBy('poi.poi_id');
    },
    getCategoryById(categoryId) {
        return knex.select('category_name').from('category').where('category_id', categoryId);
    },
    insertPoi(poi) {
        console.log("poi is: ")
        console.log(poi);
        return knex('poi').insert(poi).returning("poi_id");
    },
    insertPoiCategory(poi_id, category_id) {
        return knex('poi_category').insert({poi_id, category_id});
    },
    insertPoiRecurrenceRule(first_day_of_the_week, recurrence_frequency_id, interval, recurrence_end_date) {
        return knex('recurrence_rule').insert({ first_day_of_the_week, recurrence_frequency_id, interval, recurrence_end_date}).returning("recurrence_rule_id");
    },
    insertRecurrenceDayOfWeek(days) {
        return knex('recurrence_day_of_week').insert(days);
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