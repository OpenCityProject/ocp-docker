CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Main db design for Open City Project - KEEP IT SIMPLE
CREATE TABLE IF NOT EXISTS poi (
  poi_id UUID PRIMARY KEY DEFAULT uuid_generate_v1mc()
, poi_name TEXT NOT NULL
, person_name TEXT NOT NULL 
, reason TEXT NOT NULL
, address TEXT NOT NULL
, opening_hours TEXT NOT NULL
, category TEXT NOT NULL --Connect with others, Savour the moment, Play/Be active, Keep learning , Make a difference
);

INSERT INTO public.poi (poi_name, person_name, reason, address, opening_hours, category) VALUES 
    ('Canterbury Museum', 'Wesley', 'You can find out about the history of Christchurch', 'Rolleston Ave, Christchurch Central', '9am-5pm', 'Keep Learning'),
    ('Looking for eels under the Antigua Boat Sheds', 'Sarah', 'It is great to see them up close', '2 Cambridge Terrace', 'Anytime', 'Savour the moment'),
    ('Visiting Cathedral Square', 'Jessica', 'You can find out about the cathedral', '1 Cathedral Square', 'Anytime', 'Savour the moment');
