const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    end_year : {
        type: Number,
        required: false
    },
    intensity : {
        type: Number,
        required: false
    },
    sector: {
        type: String,
        required: false
    },
    topic : {
        type: String,
        required: false
    },
    insight : {
        type: String,
        required: false
    },
    url: {
        type: String,
        reuired: false
    },
    region: {
        type: String,
        required: false
    },
    start_year: {
        type: String,
        required: false
    },
    impact: {
        type: String,
        required: false
    },
    added: {
        type: String,
        required: false
    } ,
    published: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    relevance: {
        type: Number,
        required: false
    },
    pestle: {
        type: String,
        required: false
    },
    source: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    likelihood: {
        type: Number,
        required: false
    }
},{
    timestamps: true
})

var Countries = mongoose.model('Country', countrySchema)

module.exports = Countries;