import React from "react";
import List from "./js/components/List";
import Form from "./js/components/Form";
import Post from "./js/components/Post";

const { Client } = require('pg');

var DATABASE_URL ="postgres://rmxmpzgcmwwzzs:3206e5e9975d89cfce5819a3a9d673762d703e696ac72739cf9c1dde3edc8253@ec2-54-227-245-146.compute-1.amazonaws.com:5432/ddcu08p8i3oma3";

const client = new Client({
    connectionString: DATABASE_URL,
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


const App = () => (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
        <div className="col-md-4 offset-md-1">
            <h2>API posts</h2>
            <Post />
        </div>
    </div>
);
export default App;