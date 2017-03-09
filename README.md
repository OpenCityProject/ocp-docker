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

There is a basic api using express in api folder

There is an API spec for swagger in the api-def folder. Go to http://editor.swagger.io/ and paste it in to the editor.
From there you can generate a server and a client

### Test pages
Create a user first: http://localhost/create-user.html  
Then use that user's email to create POIs: http://localhost/create-poi.html  

### Details  
There are 2 main api endpoints which will readily be used:  
  
1) User - /v1/user  
User POST example: ```curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 9a550192-c030-1789-ed0e-32be9e67cc07" -d '{"name" : "wesley", "email": "wesley@example1.com"}' "http://localhost/v1/users"```  
2) POI - /v1/poi  
POI POST example: ```curl -X POST -H "Content-Type: application/json" -H "Authorization: Basic YWRtaW5AbyBjcC5jb206YWRtaW4=" -H "Cache-Control: no-cache" -H "Postman-Token: 463f4a4b-f8ef-61e2-306d-909e952f593d" -d '{"name":"Cathedral Square","gps_lat":"10","gps_long":"10","distanceInMetres":100,"start_date":"2017-03-06T11:00:00.000Z","end_date":"2017-03-06T12:00:00.000Z","is_all_day":true,"poi_url":"","description":"It'\''s a historic site","categories":"6","tags":"","is_every_day":true,"days_of_week":"1,2,3"}' "http://localhost/v1/poi"```

Database
--------
Database Entity Relationship diagram

![DB Diagram](/db/db-design.pdf "OCP Database design")

Also useful resource for auditing:

* http://stackoverflow.com/questions/1523446/is-it-possible-to-get-a-history-of-queries-made-in-postgres

Docker Compose
--------------
Of note, the database is held by docker, you may want to setup a replication to somewhere else

```bash
docker-compose up # -d for daemon, --build if you make a change
# Remove database data
docker-compose down
docker volume rm ocpdocker_db-data

# Inspect
docker volume ls
docker volume inspect ocpdocker_db-data
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


