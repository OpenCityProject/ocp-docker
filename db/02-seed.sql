INSERT INTO public.log_level(log_level_id, log_level_name) VALUES 
	(1, 'ERROR'),
    (2, 'WARNING'),
    (3, 'INFO'),
    (4, 'VERBOSE');

INSERT INTO public.participant_type(participant_type_id, participant_type_name) VALUES 
	(1, 'Person'),
    (2, 'Room'), 
    (3, 'Resource'),
    (4, 'Group');

INSERT INTO public.person_state(person_state_id, person_state_name) VALUES 
    (1, 'Active'),
    (2, 'Deleted'),
    (3, 'Disabled'),
    (4, 'EmailNotVerified'),
    (5, 'Locked');

INSERT INTO public.person_type(person_type_id, person_type_name) VALUES 
    (1, 'Admin'),
    (2, 'Moderator'),
    (3, 'End User');

INSERT INTO public.poi_state(poi_state_id, poi_state_name) VALUES 
    (1, 'Approved'),
    (2, 'Declined'),
    (3, 'Deleted'),
    (4, 'Submitted');

INSERT INTO public.recurrence_frequency(recurrence_frequency_id, recurrence_frequency_name) VALUES 
	(1, 'Daily'),
    (2, 'Weekly'),
    (3, 'Monthy'),
    (4, 'Yearly');

INSERT INTO public.weekday(weekday_id, weekday_name) VALUES
	(1, 'Monday'),
    (2, 'Tuesday'),
    (3, 'Wednesday'),
    (4, 'Thursday'),
    (5, 'Friday'),
    (6, 'Saturday'),
    (7, 'Sunday');

 

