'use strict';

var utils = require('../utils/writer.js');
var CustomerQuery = require('../service/CustomerQueryService');

module.exports.apiCustomerQueryCustomerQueryIdDELETE = function apiCustomerQueryCustomerQueryIdDELETE (req, res, next, customerQueryId) {
  CustomerQuery.apiCustomerQueryCustomerQueryIdDELETE(customerQueryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerQueryCustomerQueryIdGET = function apiCustomerQueryCustomerQueryIdGET (req, res, next, customerQueryId) {
  CustomerQuery.apiCustomerQueryCustomerQueryIdGET(customerQueryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerQueryCustomerQueryIdPUT = function apiCustomerQueryCustomerQueryIdPUT (req, res, next, body, customerQueryId) {
  CustomerQuery.apiCustomerQueryCustomerQueryIdPUT(body, customerQueryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerQueryGET = function apiCustomerQueryGET (req, res, next) {
  CustomerQuery.apiCustomerQueryGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerQueryPOST = function apiCustomerQueryPOST (req, res, next, body) {
  CustomerQuery.apiCustomerQueryPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
