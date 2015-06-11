/* eslint no-reserved-keys: 0 */

'use strict';

var Mongoose = require('mongoose');
var Bootcamp;

var bootcampSchema = Mongoose.Schema({
  name: {type: String, required: true},
  url: {type: String},
  imageURL: {type: String},
  online: {type: Boolean},
  languages: {type: Array},
  price: {type: String},
  founded: {type: String},
  financing: {type: Boolean},
  experienceLvl: {type: String},
  classSize: {type: Number},
  reimbursement: {type: String},
  housing: {type: Boolean},
  address: {type: String},
  createdAt: {type: Date, required: true, default: Date.now}
});

Bootcamp = Mongoose.model('Bootcamp', bootcampSchema);
module.exports = Bootcamp;
