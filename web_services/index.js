//Config file constants
require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');




app.use(express.json());
app.use(routes);

app.get('/')



app.listen(process.env.PORT, (err) => {
    (err)? console.log('Error', err) : console.log(`Server on port ${process.env.PORT}`);
});

