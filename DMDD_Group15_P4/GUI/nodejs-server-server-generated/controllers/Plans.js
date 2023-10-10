'use strict';

var utils = require('../utils/writer.js');
var Plans = require('../service/PlansService');

module.exports.apiPlansGET = function apiPlansGET (req, res, next) {
  Plans.apiPlansGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPlansPOST = function apiPlansPOST (req, res, next, body) {
  Plans.apiPlansPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPlansPlanIdDELETE = function apiPlansPlanIdDELETE (req, res, next, planId) {
  Plans.apiPlansPlanIdDELETE(planId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPlansPlanIdGET = function apiPlansPlanIdGET (req, res, next, planId) {
  Plans.apiPlansPlanIdGET(planId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPlansPlanIdPUT = function apiPlansPlanIdPUT (req, res, next, body, planId) {
  Plans.apiPlansPlanIdPUT(body, planId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
