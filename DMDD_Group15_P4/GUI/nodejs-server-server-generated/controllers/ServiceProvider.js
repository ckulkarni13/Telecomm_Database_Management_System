'use strict';

var utils = require('../utils/writer.js');
var ServiceProvider = require('../service/ServiceProviderService');

module.exports.apiServiceProviderGET = function apiServiceProviderGET (req, res, next) {
  ServiceProvider.apiServiceProviderGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceProviderPOST = function apiServiceProviderPOST (req, res, next, body) {
  ServiceProvider.apiServiceProviderPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceProviderProviderIdDELETE = function apiServiceProviderProviderIdDELETE (req, res, next, providerId) {
  ServiceProvider.apiServiceProviderProviderIdDELETE(providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceProviderProviderIdGET = function apiServiceProviderProviderIdGET (req, res, next, providerId) {
  ServiceProvider.apiServiceProviderProviderIdGET(providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceProviderProviderIdPUT = function apiServiceProviderProviderIdPUT (req, res, next, body, providerId) {
  ServiceProvider.apiServiceProviderProviderIdPUT(body, providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
