const { Client } = require('pg');

var DATABASE_URL ="postgres://rmxmpzgcmwwzzs:3206e5e9975d89cfce5819a3a9d673762d703e696ac72739cf9c1dde3edc8253@ec2-54-227-245-146.compute-1.amazonaws.com:5432/ddcu08p8i3oma3";

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});