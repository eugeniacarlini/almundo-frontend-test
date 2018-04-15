/*
* APP
* Entry point file
*/

import { forEach } from 'lodash';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import bb from 'express-busboy';
import SourceMapSupport from 'source-map-support';
import Hotel from '../source/models/hotel.server.model'
import { hotels } from '../source/data/data' 

//routes
import almundoRoutes from './routes/almundo.server.route';

//express
const app = express();
// express-busboy to parse multipart/form-data
bb.extend(app);
// allow-cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 3001;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/almundo-app', () => {
    mongoose.connection.db.dropDatabase();

    //load hotels into almundo-app db
    forEach(hotels, (value, key) => {
        Hotel.create(value, function (err, instance) {
            if (err) return console.log(`Error when persisting ${instance}`);
        });
    });
});

// add Source Map Support
SourceMapSupport.install();

app.use('/api', almundoRoutes);
app.get('/', (req, res) => {
    return res.end('Hello World!');
});

// catch 404
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// start the server
app.listen(port, () => {
    console.log(`Almundo Server Listening at ${port}`);
});