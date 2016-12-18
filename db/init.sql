CREATE USER regular_user WITH PASSWORD 'regular_password';
CREATE USER admin_user WITH PASSWORD 'admin_password';

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE OR REPLACE 	FUNCTION set_updated_timestamp()
  RETURNS TRIGGER
  LANGUAGE plpgsql
AS $$
BEGIN
  NEW.when_updated := now();
  RETURN NEW;
END;
$$;


/**************************************************************************************************
BEGIN - SQL Power Architect Forward Engineering SQL Script
**************************************************************************************************/
CREATE SEQUENCE mime_type_mime_type_id_seq_1;

CREATE TABLE IF NOT EXISTS mime_type (
                mime_type_id SMALLINT NOT NULL DEFAULT nextval('mime_type_mime_type_id_seq_1'),
                mime_type_name VARCHAR(50) NOT NULL,
                CONSTRAINT mime_type_id PRIMARY KEY (mime_type_id)
);


ALTER SEQUENCE mime_type_mime_type_id_seq_1 OWNED BY mime_type.mime_type_id;

CREATE SEQUENCE user_agent_user_agent_id_seq_1;

CREATE TABLE IF NOT EXISTS user_agent (
                user_agent_id INTEGER NOT NULL DEFAULT nextval('user_agent_user_agent_id_seq_1'),
                user_agent_string VARCHAR(512) NOT NULL,
                CONSTRAINT user_agent_id PRIMARY KEY (user_agent_id)
);


ALTER SEQUENCE user_agent_user_agent_id_seq_1 OWNED BY user_agent.user_agent_id;

CREATE TABLE IF NOT EXISTS log_level (
                log_level_id SMALLINT NOT NULL,
                log_level_name VARCHAR(10) NOT NULL,
                CONSTRAINT log_level_id PRIMARY KEY (log_level_id)
);
COMMENT ON TABLE log_level IS 'ERROR
WARNING
INFO
VERBOSE';


CREATE SEQUENCE log_log_id_seq;

CREATE TABLE IF NOT EXISTS log (
                log_id BIGINT NOT NULL DEFAULT nextval('log_log_id_seq'),
                log_key VARCHAR(200) NOT NULL,
                log_description VARCHAR(2000) NOT NULL,
                log_level_id SMALLINT NOT NULL,
                when_added TIMESTAMP DEFAULT NOW() NOT NULL,
                CONSTRAINT log_id PRIMARY KEY (log_id)
);


ALTER SEQUENCE log_log_id_seq OWNED BY log.log_id;

CREATE SEQUENCE config_config_id_seq;

CREATE TABLE IF NOT EXISTS config (
                config_id INTEGER NOT NULL DEFAULT nextval('config_config_id_seq'),
                config_key VARCHAR(200) NOT NULL,
                config_value VARCHAR(2000) NOT NULL,
                is_deleted BOOLEAN NOT NULL,
                when_added TIMESTAMP DEFAULT NOW() NOT NULL,
                when_updated TIMESTAMP NOT NULL,
                CONSTRAINT config_id PRIMARY KEY (config_id)
);


ALTER SEQUENCE config_config_id_seq OWNED BY config.config_id;

CREATE TABLE IF NOT EXISTS person_state (
                person_state_id SMALLINT NOT NULL,
                person_state_name VARCHAR(20) NOT NULL,
                CONSTRAINT person_state_id PRIMARY KEY (person_state_id)
);
COMMENT ON TABLE person_state IS 'Active
Disabled
Deleted
Locked';


CREATE TABLE IF NOT EXISTS person_type (
                person_type_id SMALLINT NOT NULL,
                person_type_name VARCHAR(20) NOT NULL,
                CONSTRAINT person_type_id PRIMARY KEY (person_type_id)
);
COMMENT ON TABLE person_type IS 'Admin - can create new moderator accounts, can disable current moderator accounts
Moderator - can approve/reject/modify/cancel submitted events
End User - can submit events, can submit event modifications';


CREATE SEQUENCE password_password_id_seq_1;

CREATE TABLE IF NOT EXISTS password (
                password_id BIGINT NOT NULL DEFAULT nextval('password_password_id_seq_1'),
                salt VARCHAR(16) NOT NULL,
                password_hash VARCHAR(200) NOT NULL,
                person_id UUID NOT NULL,
                fail_count SMALLINT,
                last_failure DATE,
                CONSTRAINT password_id PRIMARY KEY (password_id)
);


ALTER SEQUENCE password_password_id_seq_1 OWNED BY password.password_id;

CREATE TABLE IF NOT EXISTS oauth_provider (
                oauth_provider_id SMALLINT NOT NULL,
                oauth_provider_name VARCHAR(200) NOT NULL,
                oauth_provider_url VARCHAR(2000),
                CONSTRAINT oauth_provider_id PRIMARY KEY (oauth_provider_id)
);


CREATE TABLE IF NOT EXISTS participant_type (
                participant_type_id SMALLINT NOT NULL,
                participant_type_name VARCHAR(10) NOT NULL,
                CONSTRAINT participant_type_id PRIMARY KEY (participant_type_id)
);
COMMENT ON TABLE participant_type IS 'unknown
person
room
resource
group';


CREATE SEQUENCE participant_participant_id_seq;

CREATE TABLE IF NOT EXISTS participant (
                participant_id BIGINT NOT NULL DEFAULT nextval('participant_participant_id_seq'),
                participant_type_id SMALLINT NOT NULL,
                participant_name VARCHAR(200) NOT NULL,
                participant_url VARCHAR(2000),
                CONSTRAINT participant_id PRIMARY KEY (participant_id)
);
COMMENT ON TABLE participant IS 'A participant can be a person, group, room, or other resource.';


ALTER SEQUENCE participant_participant_id_seq OWNED BY participant.participant_id;

CREATE TABLE IF NOT EXISTS weekday (
                weekday_id SMALLINT NOT NULL,
                weekday_name VARCHAR(10) NOT NULL,
                CONSTRAINT weekday_id PRIMARY KEY (weekday_id)
);
COMMENT ON COLUMN weekday.weekday_name IS 'Values are from 1 to 7, with Sunday being 1';


CREATE TABLE IF NOT EXISTS recurrence_frequency (
                recurrence_frequency_id SMALLINT NOT NULL,
                recurrence_frequency_name VARCHAR(10) NOT NULL,
                CONSTRAINT recurrence_frequency_id PRIMARY KEY (recurrence_frequency_id)
);
COMMENT ON TABLE recurrence_frequency IS 'daily
weekly
monthly
yearly';


CREATE SEQUENCE recurrence_rule_recurrence_rule_id_seq_1;

CREATE TABLE IF NOT EXISTS recurrence_rule (
                recurrence_rule_id BIGINT NOT NULL DEFAULT nextval('recurrence_rule_recurrence_rule_id_seq_1'),
                first_day_of_the_week SMALLINT NOT NULL,
                occurrence_count INTEGER,
                recurrence_frequency_id SMALLINT NOT NULL,
                interval INTEGER NOT NULL,
                recurrence_end_date DATE,
                CONSTRAINT recurrence_rule_id PRIMARY KEY (recurrence_rule_id)
);
COMMENT ON TABLE recurrence_rule IS 'Describe the recurrence pattern for a recurring event.';
COMMENT ON COLUMN recurrence_rule.first_day_of_the_week IS 'Indicates which day of the week the recurrence rule treats as the first day of the week. Values of 1 to 7 correspond to Sunday through Saturday. A value of 0 indicates that this property is not set for the recurrence rule.';
COMMENT ON COLUMN recurrence_rule.occurrence_count IS 'The occurrence count of the recurrence end, or null/0 if the recurrence end is date-based.';
COMMENT ON COLUMN recurrence_rule.interval IS 'Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency. For example, a recurrence rule with a frequency type of weekly and an interval of 2 repeats every two weeks.';
COMMENT ON COLUMN recurrence_rule.recurrence_end_date IS 'DateTime with Timezone
The end date of the recurrence end, or nil if the recurrence end is count-based.';


ALTER SEQUENCE recurrence_rule_recurrence_rule_id_seq_1 OWNED BY recurrence_rule.recurrence_rule_id;

CREATE TABLE IF NOT EXISTS recurrence_position (
                recurrence_rule_id BIGINT NOT NULL,
                position SMALLINT NOT NULL,
                CONSTRAINT recurrence_position_id PRIMARY KEY (recurrence_rule_id, position)
);
COMMENT ON TABLE recurrence_position IS 'An array of ordinal numbers that filters which recurrences to include in the recurrence rule''s frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday, and a setPositions array containing 2 and -1, occurs only on the second weekday and last weekday of every year.';


CREATE TABLE IF NOT EXISTS recurrence_day_of_year (
                recurrence_rule_id BIGINT NOT NULL,
                day_of_the_year SMALLINT NOT NULL,
                CONSTRAINT recurrence_day_of_year_id PRIMARY KEY (recurrence_rule_id, day_of_the_year)
);
COMMENT ON TABLE recurrence_day_of_year IS 'The days of the year that the event occurs, as an array of numbers. Values can be from 1 to 366 and from -1 to -366. This parameter is only valid for recurrence rules of type yearly.';


CREATE TABLE IF NOT EXISTS recurrence_week_of_year (
                recurrence_rule_id BIGINT NOT NULL,
                week_of_the_year SMALLINT NOT NULL,
                CONSTRAINT recurrence_week_of_year_id PRIMARY KEY (recurrence_rule_id, week_of_the_year)
);
COMMENT ON TABLE recurrence_week_of_year IS 'The weeks of the year that the event occurs, as an array of numbers. Values can be from 1 to 53 and from -1 to -53. This parameter is only valid for recurrence rules of type yearly.';


CREATE TABLE IF NOT EXISTS recurrence_day_of_month (
                recurrence_rule_id BIGINT NOT NULL,
                month_day SMALLINT NOT NULL,
                CONSTRAINT recurrence_day_of_month_id PRIMARY KEY (recurrence_rule_id, month_day)
);
COMMENT ON TABLE recurrence_day_of_month IS 'The days of the month that the event occurs, as an array of numbers. Values can be from 1 to 31 and from -1 to -31. This parameter is only valid for recurrence rules of type monthly.';


CREATE TABLE IF NOT EXISTS recurrence_day_of_week (
                recurrence_rule_id BIGINT NOT NULL,
                weekday_id SMALLINT NOT NULL,
                week_number SMALLINT
);
COMMENT ON TABLE recurrence_day_of_week IS 'The days of the week associated with the recurrence rule, as an array. This property value is valid only for recurrence rules that were initialized with specific days of the week and a frequency type of weekly, monthly, or yearly.';


CREATE UNIQUE INDEX recurrence_day_of_week_idx
 ON recurrence_day_of_week
 ( recurrence_rule_id, weekday_id, week_number );

CLUSTER recurrence_day_of_week_idx ON recurrence_day_of_week;

CREATE TABLE IF NOT EXISTS person (
                person_id UUID DEFAULT uuid_generate_v1mc() NOT NULL,
                person_name VARCHAR(200) NOT NULL,
                phone_number VARCHAR(15),
                email VARCHAR(254),
                person_type_id SMALLINT NOT NULL,
                oauth_provider_id SMALLINT,
                oauth_token VARCHAR,
                oauth_token_expiration DATE,
                person_state_id SMALLINT NOT NULL,
                first_login DATE,
                last_login DATE,
                when_added TIMESTAMP DEFAULT NOW() NOT NULL,
                when_updated TIMESTAMP,
                CONSTRAINT person_id PRIMARY KEY (person_id)
);
COMMENT ON TABLE person IS 'End users of the system, who can add POI, follow, edit etc.
This table is not called "User" as it is a reserved keyword.';
COMMENT ON COLUMN person.person_id IS 'uuid';


CREATE SEQUENCE session_session_id_seq;

CREATE TABLE IF NOT EXISTS session (
                session_id BIGINT NOT NULL DEFAULT nextval('session_session_id_seq'),
                person_id UUID DEFAULT uuid_generate_v1mc() NOT NULL,
                ip_address VARCHAR(45) NOT NULL,
                user_agent_id INTEGER NOT NULL,
                when_added TIMESTAMP DEFAULT NOW() NOT NULL,
                when_updated TIMESTAMP,
                when_expire TIMESTAMP,
                CONSTRAINT session_id PRIMARY KEY (session_id)
);
COMMENT ON COLUMN session.person_id IS 'uuid';
COMMENT ON COLUMN session.when_expire IS 'null means it never expires';


ALTER SEQUENCE session_session_id_seq OWNED BY session.session_id;

CREATE SEQUENCE tag_tag_id_seq;

CREATE TABLE IF NOT EXISTS tag (
                tag_id BIGINT NOT NULL DEFAULT nextval('tag_tag_id_seq'),
                tag_name VARCHAR(200) NOT NULL,
                CONSTRAINT tag_id PRIMARY KEY (tag_id)
);


ALTER SEQUENCE tag_tag_id_seq OWNED BY tag.tag_id;

CREATE SEQUENCE category_category_id_seq;

CREATE TABLE IF NOT EXISTS category (
                category_id BIGINT NOT NULL DEFAULT nextval('category_category_id_seq'),
                category_name VARCHAR(200) NOT NULL,
                CONSTRAINT category_id PRIMARY KEY (category_id)
);
COMMENT ON TABLE category IS 'Connect with others
Savour the moment
Play/Be active
Keep learning
Make a difference';


ALTER SEQUENCE category_category_id_seq OWNED BY category.category_id;

CREATE TABLE IF NOT EXISTS poi (
                poi_id UUID DEFAULT uuid_generate_v1mc() NOT NULL,
                poi_name VARCHAR(200) NOT NULL,
                location_title VARCHAR(200),
                location_gps_coordinate POINT,
                location_polygon POLYGON,
                recurrence_rule_id BIGINT NOT NULL,
                start_date DATE,
                end_date DATE,
                start_date_1 BOOLEAN,
                organiser_participant_id BIGINT,
                poi_url VARCHAR(2000),
                poi_description VARCHAR(2000),
                is_deleted BOOLEAN,
                when_added TIMESTAMP DEFAULT NOW() NOT NULL,
                who_added_patron_id UUID NOT NULL,
                when_updated TIMESTAMP,
                who_updated_patron_id UUID,
                CONSTRAINT poi_id PRIMARY KEY (poi_id)
);
COMMENT ON TABLE poi IS 'Point of Interest';
COMMENT ON COLUMN poi.poi_id IS 'uuid';
COMMENT ON COLUMN poi.location_gps_coordinate IS 'GPS Coordinate - should use geography data type.';
COMMENT ON COLUMN poi.poi_url IS 'Website / Facebook Event link';
COMMENT ON COLUMN poi.when_added IS 'DateTime with Timezone';
COMMENT ON COLUMN poi.when_updated IS 'DateTime with Timezone';


CREATE TABLE IF NOT EXISTS poi_image (
                poi_image_id UUID DEFAULT uuid_generate_v1mc() NOT NULL,
                poi_id UUID NOT NULL,
                poi_image_seq SMALLINT NOT NULL,
                poi_image_blob BYTEA NOT NULL,
                mime_type_id SMALLINT NOT NULL,
                poi_image_width_pixel SMALLINT NOT NULL,
                poi_image_height_pixel SMALLINT NOT NULL,
                when_added TIMESTAMP DEFAULT NOW() NOT NULL,
                when_updated TIMESTAMP,
                CONSTRAINT poi_image_id PRIMARY KEY (poi_image_id)
);
COMMENT ON COLUMN poi_image.poi_image_id IS 'UUID';
COMMENT ON COLUMN poi_image.poi_id IS 'uuid';


CREATE TABLE IF NOT EXISTS person_saved_poi (
                poi_id UUID NOT NULL,
                person_id UUID NOT NULL,
                person_saved_poi_seq SMALLINT NOT NULL,
                CONSTRAINT person_saved_poi_id PRIMARY KEY (poi_id, person_id)
);
COMMENT ON TABLE person_saved_poi IS 'User''s saved favourite POI.';
COMMENT ON COLUMN person_saved_poi.poi_id IS 'uuid';
COMMENT ON COLUMN person_saved_poi.person_id IS 'uuid';


CREATE TABLE IF NOT EXISTS poi_tag (
                tag_id BIGINT NOT NULL,
                poi_id UUID NOT NULL,
                CONSTRAINT poi_tag_id PRIMARY KEY (tag_id, poi_id)
);


CREATE TABLE IF NOT EXISTS poi_category (
                poi_id UUID NOT NULL,
                category_id BIGINT NOT NULL,
                CONSTRAINT poi_category_id PRIMARY KEY (poi_id, category_id)
);
COMMENT ON TABLE poi_category IS 'Should remove the primary key, and rely on the unique key between the poi_id and category_id';


ALTER TABLE poi_image ADD CONSTRAINT mime_type_poi_image_fk
FOREIGN KEY (mime_type_id)
REFERENCES mime_type (mime_type_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE session ADD CONSTRAINT user_agent_session_fk
FOREIGN KEY (user_agent_id)
REFERENCES user_agent (user_agent_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE log ADD CONSTRAINT log_level_log_fk
FOREIGN KEY (log_level_id)
REFERENCES log_level (log_level_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE person ADD CONSTRAINT person_state_person_fk
FOREIGN KEY (person_state_id)
REFERENCES person_state (person_state_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE person ADD CONSTRAINT person_type_person_fk
FOREIGN KEY (person_type_id)
REFERENCES person_type (person_type_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE password ADD CONSTRAINT person_password_fk
FOREIGN KEY (person_id)
REFERENCES person (person_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE person ADD CONSTRAINT oauth_provider_patron_fk
FOREIGN KEY (oauth_provider_id)
REFERENCES oauth_provider (oauth_provider_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE participant ADD CONSTRAINT participant_type_participant_fk
FOREIGN KEY (participant_type_id)
REFERENCES participant_type (participant_type_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE poi ADD CONSTRAINT participant_poi_fk
FOREIGN KEY (organiser_participant_id)
REFERENCES participant (participant_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE recurrence_day_of_week ADD CONSTRAINT weekday_recurrence_day_of_week_fk
FOREIGN KEY (weekday_id)
REFERENCES weekday (weekday_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE recurrence_rule ADD CONSTRAINT recurrence_frequency_recurrence_rule_fk
FOREIGN KEY (recurrence_frequency_id)
REFERENCES recurrence_frequency (recurrence_frequency_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE recurrence_day_of_week ADD CONSTRAINT recurrence_rule_recurrence_day_of_week_fk
FOREIGN KEY (recurrence_rule_id)
REFERENCES recurrence_rule (recurrence_rule_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE recurrence_day_of_month ADD CONSTRAINT recurrence_rule_recurrence_day_of_month_fk
FOREIGN KEY (recurrence_rule_id)
REFERENCES recurrence_rule (recurrence_rule_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE recurrence_week_of_year ADD CONSTRAINT recurrence_rule_recurrence_week_of_year_fk
FOREIGN KEY (recurrence_rule_id)
REFERENCES recurrence_rule (recurrence_rule_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE recurrence_day_of_year ADD CONSTRAINT recurrence_rule_recurrence_day_of_year_fk
FOREIGN KEY (recurrence_rule_id)
REFERENCES recurrence_rule (recurrence_rule_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE recurrence_position ADD CONSTRAINT recurrence_rule_recurrence_position_fk
FOREIGN KEY (recurrence_rule_id)
REFERENCES recurrence_rule (recurrence_rule_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE poi ADD CONSTRAINT recurrence_rule_poi_fk
FOREIGN KEY (recurrence_rule_id)
REFERENCES recurrence_rule (recurrence_rule_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE poi ADD CONSTRAINT person_poi_fk
FOREIGN KEY (who_updated_patron_id)
REFERENCES person (person_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE poi ADD CONSTRAINT person_poi_fk1
FOREIGN KEY (who_added_patron_id)
REFERENCES person (person_id)
ON DELETE NO ACTION
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE person_saved_poi ADD CONSTRAINT person_person_saved_poi_fk
FOREIGN KEY (person_id)
REFERENCES person (person_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE session ADD CONSTRAINT person_session_fk
FOREIGN KEY (person_id)
REFERENCES person (person_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE poi_tag ADD CONSTRAINT tag_poi_tag_fk
FOREIGN KEY (tag_id)
REFERENCES tag (tag_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE poi_category ADD CONSTRAINT category_poi_category_fk
FOREIGN KEY (category_id)
REFERENCES category (category_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE poi_category ADD CONSTRAINT poi_poi_category_fk
FOREIGN KEY (poi_id)
REFERENCES poi (poi_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE poi_tag ADD CONSTRAINT poi_poi_tag_fk
FOREIGN KEY (poi_id)
REFERENCES poi (poi_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE person_saved_poi ADD CONSTRAINT poi_person_saved_poi_fk
FOREIGN KEY (poi_id)
REFERENCES poi (poi_id)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;

ALTER TABLE poi_image ADD CONSTRAINT poi_poi_image_fk
FOREIGN KEY (poi_id)
REFERENCES poi (poi_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

/**************************************************************************************************
END - SQL Power Architect Forward Engineering SQL Script
**************************************************************************************************/

-- Trigger for each table that should have its timestamp updated whenever an update is called
DO $$ BEGIN
  EXECUTE (
  SELECT string_agg('
    CREATE TRIGGER update_timestamp
      BEFORE UPDATE ON ' || quote_ident(t) || '
      FOR EACH ROW EXECUTE PROCEDURE set_updated_timestamp();
  ', E'\n')
FROM unnest('{config, person, poi, poi_image, session}'::text[]) t -- list your tables here
  );
END $$;
-- http://dba.stackexchange.com/questions/62033/how-to-reuse-an-update-trigger-for-multiple-tables-in-postgresql


--GRANT INSERT ON log TO regular_user;
--GRANT SELECT, INSERT, UPDATE ON person TO regular_user;
--GRANT SELECT, INSERT ON person_photo TO regular_user;
--GRANT SELECT, INSERT ON image TO regular_user;
--GRANT SELECT, INSERT, DELETE ON session TO regular_user;

--GRANT SELECT, INSERT, UPDATE ON poi TO regular_user;
--GRANT SELECT, INSERT ON poi_schedule TO regular_user;
--GRANT SELECT, INSERT, UPDATE ON schedule TO regular_user;

GRANT ALL ON ALL TABLES IN SCHEMA public TO admin_user;

-- How to do permissions properly, if you care enough to get around to this
----ACCESS BD
--REVOKE CONNECT ON DATABASE toast FROM PUBLIC;
--GRANT  CONNECT ON DATABASE toast  TO regular_user;
--
----ACCESS SCHEMA
--REVOKE ALL     ON SCHEMA public FROM PUBLIC;
--GRANT  USAGE   ON SCHEMA public  TO user;
--
----ACCESS TABLES
--REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC ;
--GRANT SELECT                         ON ALL TABLES IN SCHEMA public TO read_only ;
--GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO read_write ;
--GRANT ALL                            ON ALL TABLES IN SCHEMA public TO admin ;



