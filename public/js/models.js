function Route() {
  this.id = this._generateId();
  this.status = null;
  this.startedAt = null;
  this.geopoint = [];
  this.shortUrl = null;
  this.getStart() = function() {}
  this.addGeopoint() = function() {}
  this.getDistance() = function() {}
  this.getTime() = function() {}
  this._generateId() = function() {}
  this.getMapsPolyline() = function() {}
  this.getMapsMarkers() = function() {}
  this.save() = function() {}
}

function Geopoint() {
  this.lat = null;
  this.lon = null;
  this.timestamp = new Date().getTime();
}
