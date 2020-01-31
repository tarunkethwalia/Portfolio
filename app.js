const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Url = require('./environment');
const mongoose = require('mongoose');
const projects = require('./routes/projects');

app.use(cors());
//Mongo Connection
mongoose.connect(process.env.MongoUrl || Url.env.MongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).catch(err => console.error(err));
mongoose.Promise = global.Promise;

app.use(('/uploads'),express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.use('/api/projects', projects);

app.get('/*', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

module.exports = app;
