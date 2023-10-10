'use strict';

var utils = require('../utils/writer.js');
var ServiceContract = require('../service/ServiceContractService');

module.exports.apiServiceContractContractIdDELETE = function apiServiceContractContractIdDELETE (req, res, next, contractId) {
  ServiceContract.apiServiceContractContractIdDELETE(contractId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceContractContractIdGET = function apiServiceContractContractIdGET (req, res, next, contractId) {
  ServiceContract.apiServiceContractContractIdGET(contractId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceContractContractIdPUT = function apiServiceContractContractIdPUT (req, res, next, body, contractId) {
  ServiceContract.apiServiceContractContractIdPUT(body, contractId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceContractGET = function apiServiceContractGET (req, res, next) {
  ServiceContract.apiServiceContractGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiServiceContractPOST = function apiServiceContractPOST (req, res, next, body) {
  ServiceContract.apiServiceContractPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
