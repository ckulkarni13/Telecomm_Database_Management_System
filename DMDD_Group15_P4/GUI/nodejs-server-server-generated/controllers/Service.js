'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.apiServiceGET = function apiServiceGET (req, res, next) {
  Service.apiServiceGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServicePOST = function apiServicePOST (req, res, next, body) {
  Service.apiServicePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceServiceIdDELETE = function apiServiceServiceIdDELETE (req, res, next, serviceId) {
  Service.apiServiceServiceIdDELETE(serviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceServiceIdGET = function apiServiceServiceIdGET (req, res, next, serviceId) {
  Service.apiServiceServiceIdGET(serviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceServiceIdPUT = function apiServiceServiceIdPUT (req, res, next, body, serviceId) {
  Service.apiServiceServiceIdPUT(body, serviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
