FROM mdillon/postgis:latest

ADD 01-init.sql /docker-entrypoint-initdb.d/
ADD 02-seed.sql /docker-entrypoint-initdb.d/
ADD 03-seedtestdata.sql /docker-entrypoint-initdb.d/
