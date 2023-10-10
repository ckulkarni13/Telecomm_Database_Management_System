'use strict';

var utils = require('../utils/writer.js');
var Location = require('../service/LocationService');

module.exports.apiLocationGET = function apiLocationGET (req, res, next) {
  Location.apiLocationGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationLocationIdDELETE = function apiLocationLocationIdDELETE (req, res, next, locationId) {
  Location.apiLocationLocationIdDELETE(locationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationLocationIdGET = function apiLocationLocationIdGET (req, res, next, locationId) {
  Location.apiLocationLocationIdGET(locationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationLocationIdPUT = function apiLocationLocationIdPUT (req, res, next, body, locationId) {
  Location.apiLocationLocationIdPUT(body, locationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationPOST = function apiLocationPOST (req, res, next, body) {
  Location.apiLocationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
