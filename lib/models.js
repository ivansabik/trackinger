// trackinger - server
// models.js

var mongoose = require('mongoose');

var routeSchema = mongoose.Schema({
  id: String,
  status: String,
  startedAt: Date, 
  geopoints: [{
    lat: Number,
    lon:Number,
    timestamp: Date
  }]
});

var Route = new ();


