INSERT INTO public.person(person_name, phone_number, email, person_type_id, oauth_provider_id, oauth_token, oauth_token_expiration, person_state_id) VALUES 
    ('Eddie', '01234567', 'eddie@example.com', 1, NULL, 'Abcdefghijklmno', '9999-9-9', 1),
	('Elliot', '02234567', 'elliot@example.com', 1, NULL, 'Bbcdefghijklmno', '9999-9-9', 1);

INSERT INTO public.recurrence_rule(recurrence_rule_id, first_day_of_the_week, recurrence_frequency_id, interval) VALUES
    (12345, 1, 1, 1),
    (12346, 2, 2, 2);