INSERT INTO public.category (category_name) VALUES 
	('Amusement Park'),
	('Kids'),
    ('Natural'),
    ('Sports'),
    ('Connect with others'),
    ('Savour the moment'),
    ('Play/Be active'),
    ('Keep learning'),
    ('Make a difference'),
    ('Social Event');

INSERT INTO public.person (person_name, phone_number, email, person_type_id, oauth_provider_id, oauth_token, oauth_token_expiration, person_state_id) VALUES 
    ('Admin', '11111111', 'admin@ocp.com', 1, NULL, 'Abcdefghijklmno', '9999-9-9', 1),
    ('Eddie', '01234567', 'eddie@example.com', 1, NULL, 'Abcdefghijklmno', '9999-9-9', 1),
    ('Wesley', '012345672', 'wesley@example.com', 1, NULL, 'Abcdefghijklmno', '9999-9-9', 1),
	('Elliot', '02234567', 'elliot@example.com', 1, NULL, 'Bbcdefghijklmno', '9999-9-9', 1);

INSERT INTO public.recurrence_rule (first_day_of_the_week, recurrence_frequency_id, interval, recurrence_end_date) VALUES
    (1, 1, 1, NULL), -- Daily
    (1, 2, 2, '2017-03-31'); -- Weekly, and ends on 2017-03-31

-- Repeat Thursdays, Fridays and Saturdays.
INSERT INTO public.recurrence_day_of_week (recurrence_rule_id, weekday_id, week_number) VALUES
	(2, 4, NULL),
	(2, 5, NULL),
	(2, 6, NULL);

INSERT INTO public.tag (tag_name) VALUES 
	('TheColorRunNZ'),
	('Adidas3on3'),
    ('Spark'),
    ('LanternFestival2017');

DO $$
DECLARE who_added_person_id UUID;
DECLARE new_poi_id UUID;
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
			is_all_day,
	        poi_url,
	        poi_description,
	        poi_state_id,
	        who_added_person_id
	    ) VALUES (
			'3 on 3 street basketball', 
			'Albany Spark Basketball',
			POINT(-36.721349, 174.705999), 
			'(
		 		(-36.721252, 174.705853),
		 		(-36.721203, 174.706097),
		 		(-36.721461, 174.706188),
		 		(-36.721519, 174.705960)
	 		)',
			1, -- Repeat Everyday
			'2017-02-01 00:00:00+13:00', -- All day event
			'2017-02-01 00:00:00+13:00',
			'TRUE',
			'http://google.com/',
			'Spark hosted 3 on 3 street basketball social competitions.',
			1,
			who_added_person_id
		), (
			'Summer Night Market', 
			'Jellicoe Street',
			NULL, 
			'(
		 		(-36.839683,174.753803),
		 		(-36.840279,174.756067),
		 		(-36.840627,174.755943),
		 		(-36.840395,174.754940),
		 		(-36.840992,174.754565),
		 		(-36.840700,174.753406)
	 		)',
			2, -- Repeat Thursdays, Fridays and Saturdays
			'2017-02-15 17:30:00+13:00', -- 5:30PM to 10PM
			'2017-02-15 22:00:00+13:00',
			'FALSE',
			'http://google.com/',
			'Summer Night Market by the Wharf.',
			1,
			who_added_person_id
		);

	new_poi_id := (SELECT poi_id FROM poi WHERE poi_name = '3 on 3 street basketball');

	INSERT INTO public.poi_category (poi_id, category_id) VALUES 
		(new_poi_id, 4),
		(new_poi_id, 5);

	INSERT INTO public.poi_tag (poi_id, tag_id) VALUES 
		(new_poi_id, 3),
		(new_poi_id, 2);
END $$;

