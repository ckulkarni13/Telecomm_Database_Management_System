'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.apiCustomerCustomerIdDELETE = function apiCustomerCustomerIdDELETE (req, res, next, customerId) {
  Customer.apiCustomerCustomerIdDELETE(customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerCustomerIdGET = function apiCustomerCustomerIdGET (req, res, next, customerId) {
  Customer.apiCustomerCustomerIdGET(customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerCustomerIdPUT = function apiCustomerCustomerIdPUT (req, res, next, body, customerId) {
  Customer.apiCustomerCustomerIdPUT(body, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerGET = function apiCustomerGET (req, res, next) {
  Customer.apiCustomerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCustomerPOST = function apiCustomerPOST (req, res, next, body) {
  Customer.apiCustomerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
