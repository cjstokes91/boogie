const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

require('dotenv').config();
require('./config/database');

// let boogiesRouter = require('./routes/boogies');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//api routes go before "catch all" route 
// app.use('/api/boogie', boogiesRouter);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app listening on port ${port}`)
});