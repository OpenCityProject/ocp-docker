Open City Project
=================

Installation
------------
Just run the following command:
```bash
docker-compose up
```

API
---
Uses Swagger  
Currently a single endpoint - POI  
Contains get(all), put, post, and delete only  
Can test using curl or postman  

Database
--------
Currently a single table. 
  
POI  
poi_id, poi_name, person_name, reason, address, opening_hours, category  
  
See init.sql, this also creates 3 entries for testing in the poi table   
  
Not sure why, but docker-compose up doesn't seem to call the init.sql script.  
So for testing, copy and paste the init.sql code manually to initialise the database in the db docker container. 
`docker exec -it [id of db container] bash`  
`psql --username=postgres`  
`\connect ocp`  
  
Docker Compose
--------------
Of note, the database is held by docker, you may want to setup a replication to somewhere else

```bash
docker-compose up # -d for daemon, --build if you make a change
# remove
docker-compose down
docker volume rm ocp_db-data

# Inspect
docker volume ls
docker volume inspect ocp_db-data
docker ps
docker-compose ps
docker images
docker-compose rm -f

## Clear all
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)
# Delete all volumes
docker volume rm $(docker volume ls -q)

# Shell Access
docker-machine ssh default
docker exec -it my-app-container bash
```

NodeJS Express 
--------------
Just a note here that 
* req.query = querystring
* req.params = rest params in /user/:id
* req.body = post options
* req.get(headerName) = for headers

Use req.method to distinguish post, get etc

Conventions
-----------
### Postgres
> Based on: http://stackoverflow.com/questions/338156/table-naming-dilemma-singular-vs-plural-names
> http://stackoverflow.com/questions/2878248/postgresql-naming-conventions

1. Table names, column names are lowercase, with underscores
2. Always use singlar names (user instead of users)
3. ALL SQL is capitalised (SELECT, INSERT etc)

Required columns: when_updated and when_added - uses a trigger to update

When no clear unique id is clear for a table, use a uuid, preferably
```
CREATE EXTENSION "uuid-ossp";
SELECT uuid_generate_v1mc()
-- or -worse because disk frag, but actually random
CREATE EXTENSION pgcrypto;
SELECT gen_random_uuid()
```


