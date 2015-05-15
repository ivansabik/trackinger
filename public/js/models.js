function Route() {
  this.id = this._generateId();
  this.status = null;
  this.startedAt = null;
  if (startedAt === undefined) {
    this.startedAt = new Date().getTime();
  } else {
    this.startedAt = timestamp;
  }
  this.geopoints = [];
  this.getStart() = function() {}
  this.addGeopoint() = function() {}
  this.getDistance() = function() {}
  this.getTime() = function() {}
  this._generateId() = function() {}
  this.getMapsPolyline() = function() {}
  this.getMapsMarkers() = function() {}
  this.save() = function() {}
}

function Geopoint(lat, lon, timestamp) {
  this.lat = null;
  this.lon = null;
  if (timestamp === undefined) {
    this.timestamp = new Date().getTime();
  } else {
    this.timestamp = timestamp;
  }
}
