INSERT INTO public.person (person_name, phone_number, email, person_type_id, oauth_provider_id, oauth_token, oauth_token_expiration, person_state_id) VALUES 
    ('Eddie', '01234567', 'eddie@example.com', 1, NULL, 'Abcdefghijklmno', '9999-9-9', 1),
	('Elliot', '02234567', 'elliot@example.com', 1, NULL, 'Bbcdefghijklmno', '9999-9-9', 1);

INSERT INTO public.recurrence_rule (first_day_of_the_week, recurrence_frequency_id, interval) VALUES
    (1, 1, 1),
    (1, 2, 2);

DO $$
DECLARE who_added_person_id UUID;
BEGIN
	who_added_person_id := (SELECT person_id FROM person WHERE person_name = 'Eddie');
	INSERT INTO public.poi (
			poi_name, 
			location_title,
			location_gps_coordinate,
			location_polygon,
			recurrence_rule_id, 
			start_date, 
			end_date,
	        poi_url,
	        poi_description,
	        poi_state_id,
	        who_added_person_id
	    ) VALUES (
			'3 on 3 street basketball', 
			'Albany Spark Basketball',
			POINT(-36.721349, 174.705999), 
			'(
		 		(174.705853,-36.721252),
		 		(174.706097,-36.721203),
		 		(174.706188,-36.721461),
		 		(174.705960,-36.721519)
	 		)',
			2,
			'2017-02-01',
			'2017-12-31',
			'http://google.com/',
			'Spark hosted 3 on 3 street basketball social competitions.',
			1,
			who_added_person_id
		), (
			'Summer Night Market', 
			'Jellicoe Street',
			NULL, 
			'(
		 		(174.753803,-36.839683),
		 		(174.756067,-36.840279),
		 		(174.755943,-36.840627),
		 		(174.754940,-36.840395),
		 		(174.754565,-36.840992),
		 		(174.753406,-36.840700)
	 		)',
			2,
			'2017-02-01',
			'2017-03-31',
			'http://google.com/',
			'Summer Night Market by the Wharf.',
			1,
			who_added_person_id
		);
END $$;

