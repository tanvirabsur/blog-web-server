const express = require('express');
const { run } = require('./db');
const router = require('./route');
const app = express();
const port = 8080;
app.use(express.json());
run();

app.use('/', router)

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})