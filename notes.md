# Notes on node.JS implementation

## MongoDB info
- A given mongo database is broken up into a series of BSON files on disk, with increasing size up to 2GB. 
    BSON is its own format, built specifically for MongoDB. 
    Info: [http://www.slideshare.net/mdirolf/inside-mongodb-the-internals-of-an-opensource-database]

- Database is by default stored in: `mkdir -p /data/db`.

- MongoDB is run from app root using `mongod -dbpath=./data/db`.
