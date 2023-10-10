'use strict';

var utils = require('../utils/writer.js');
var ServiceSubscription = require('../service/ServiceSubscriptionService');

module.exports.apiServiceSubscriptionGET = function apiServiceSubscriptionGET (req, res, next) {
  ServiceSubscription.apiServiceSubscriptionGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceSubscriptionPOST = function apiServiceSubscriptionPOST (req, res, next, body) {
  ServiceSubscription.apiServiceSubscriptionPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceSubscriptionSubscriptionIdDELETE = function apiServiceSubscriptionSubscriptionIdDELETE (req, res, next, subscriptionId) {
  ServiceSubscription.apiServiceSubscriptionSubscriptionIdDELETE(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceSubscriptionSubscriptionIdGET = function apiServiceSubscriptionSubscriptionIdGET (req, res, next, subscriptionId) {
  ServiceSubscription.apiServiceSubscriptionSubscriptionIdGET(subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceSubscriptionSubscriptionIdPUT = function apiServiceSubscriptionSubscriptionIdPUT (req, res, next, body, subscriptionId) {
  ServiceSubscription.apiServiceSubscriptionSubscriptionIdPUT(body, subscriptionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
