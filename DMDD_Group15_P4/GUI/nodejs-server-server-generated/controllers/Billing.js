'use strict';

var utils = require('../utils/writer.js');
var Billing = require('../service/BillingService');

module.exports.apiBillingBillingIdDELETE = function apiBillingBillingIdDELETE (req, res, next, billingId) {
  Billing.apiBillingBillingIdDELETE(billingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBillingBillingIdGET = function apiBillingBillingIdGET (req, res, next, billingId) {
  Billing.apiBillingBillingIdGET(billingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBillingBillingIdPUT = function apiBillingBillingIdPUT (req, res, next, body, billingId) {
  Billing.apiBillingBillingIdPUT(body, billingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBillingGET = function apiBillingGET (req, res, next) {
  Billing.apiBillingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiBillingPOST = function apiBillingPOST (req, res, next, body) {
  Billing.apiBillingPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
