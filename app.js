const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Docker!');
});

app.listen(3000, (req, res) => {
    console.log('app listening on 3000');
})