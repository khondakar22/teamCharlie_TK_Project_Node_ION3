/**
 * [mongoose description]
 * @type {[type]}
 */
var mongoose = require('mongoose');
/**
 * [Schema description]
 * @type {[type]}
 */
var Schema = mongoose.Schema;

var User = require('../models/usersModel');

/**
 * [locationSchema description]
 * @type {Schema}
 */
var locationSchema = new Schema({
    lat:{type: Number, required: true},
    lng:{type: Number,required: true },
    user : {type: Schema.Types.ObjectId,ref:'User'},
    created: {type: Date,  default: Date.now }
});

module.exports = mongoose.model('Location', locationSchema);