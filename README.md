# StopWatch

## Description

StopWatch is a simple stopwatch application that allows you to start, stop, and reset your stopwatch.

## Requirements

    - [Node.js](https://nodejs.org/en/) (v14.x or higher)
    - [Express](https://expressjs.com/)
    - [postgresql](https://www.postgresql.org/)
    

## Installation

```bash

    git clone 

    cd stopwatch-node

    npm install

    npm start

```

## PostgreSQL

To install PostgreSQL, you need to install the `postgresql` and `postgresql-contrib` packages.

```bash

    sudo apt-get install postgresql postgresql-contrib

```

After installing PostgreSQL, you need to create a database and a user with Superuser privileges.

```bash

    sudo -u postgres createuser -s stopwatch

    sudo -u postgres createdb -O stopwatch stopwatch

    sudo -u postgres psql -d stopwatch -c "ALTER USER stopwatch WITH PASSWORD 'stopwatch';"

    sudo -u postgres psql -d stopwatch -c "ALTER USER stopwatch WITH SUPERUSER;"

    sudo -u postgres psql -d stopwatch -c "GRANT ALL PRIVILEGES ON DATABASE stopwatch TO stopwatch;"

    sudo -u postgres psql -d stopwatch -c "ALTER DATABASE stopwatch SET search_path TO stopwatch, public;"

```

After creating the database and user, you need to create a table with script in `/sqlscript/create_table.sql`.

````bash

    sudo -u postgres psql -d stopwatch -f ./sqlscript/create_table.sql

````


That's all!

to see the result, visit http://localhost:4000/







