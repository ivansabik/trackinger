var mongoose = require('mongoose');

exports.routeSchema = mongoose.Schema({
  id: String,
  status: String,
  startedAt: Date, 
  geopoints: [{
    lat: Number,
    lon:Number,
    timestamp: Date
  }]
});


