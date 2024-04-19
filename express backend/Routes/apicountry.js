const express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');
const cors = require('./cors');
// import fs from 'fs';

const Countries = require('../Model/countries');

var countryRouter = express.Router();

countryRouter.route('/post-data')
    .options(cors.corsWithOptions, (req, res) => { res.statusCode = 200 })
    .post((req, res, next) => {
        fs.readFile('jsondata.json', 'UTF-8', (err, data) => {
            if (err) {
                console.log('Error reading JSON file:', err);
            }
            try {
                const jsondata = JSON.parse(data);
                //console.log(jsondata); 

                Countries.create(jsondata)
                    .then((country) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(country)
                    }, err => next(err))
                    .catch((err) => next(err));
            }
            catch (parseError) {
                console.log('Error parsing JSON: ', parseError);
            }
        });
    })

countryRouter.route('/get-data')
    .options(cors.corsWithOptions, (req, res) => { res.statusCode = 200 })
    .get(cors.corsWithOptions, (req, res, next) => {
        Countries.find()
            .then((country) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(country)
            }, (err) => next(err))
            .catch((err) => next(err));
    })


module.exports = countryRouter;

