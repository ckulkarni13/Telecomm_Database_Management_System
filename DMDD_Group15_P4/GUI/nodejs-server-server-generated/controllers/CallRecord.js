'use strict';

var utils = require('../utils/writer.js');
var CallRecord = require('../service/CallRecordService');

module.exports.apiCallRecordCallRecordIdDELETE = function apiCallRecordCallRecordIdDELETE (req, res, next, callRecordId) {
  CallRecord.apiCallRecordCallRecordIdDELETE(callRecordId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCallRecordCallRecordIdGET = function apiCallRecordCallRecordIdGET (req, res, next, callRecordId) {
  CallRecord.apiCallRecordCallRecordIdGET(callRecordId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCallRecordCallRecordIdPUT = function apiCallRecordCallRecordIdPUT (req, res, next, body, callRecordId) {
  CallRecord.apiCallRecordCallRecordIdPUT(body, callRecordId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCallRecordGET = function apiCallRecordGET (req, res, next) {
  CallRecord.apiCallRecordGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCallRecordPOST = function apiCallRecordPOST (req, res, next, body) {
  CallRecord.apiCallRecordPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
