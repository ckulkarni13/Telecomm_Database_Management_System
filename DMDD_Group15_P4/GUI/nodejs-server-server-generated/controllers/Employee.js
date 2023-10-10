'use strict';

var utils = require('../utils/writer.js');
var Employee = require('../service/EmployeeService');

module.exports.apiEmployeeEmployeeIdDELETE = function apiEmployeeEmployeeIdDELETE (req, res, next, employeeId) {
  Employee.apiEmployeeEmployeeIdDELETE(employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiEmployeeEmployeeIdGET = function apiEmployeeEmployeeIdGET (req, res, next, employeeId) {
  Employee.apiEmployeeEmployeeIdGET(employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiEmployeeEmployeeIdPUT = function apiEmployeeEmployeeIdPUT (req, res, next, body, employeeId) {
  Employee.apiEmployeeEmployeeIdPUT(body, employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiEmployeeGET = function apiEmployeeGET (req, res, next) {
  Employee.apiEmployeeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiEmployeePOST = function apiEmployeePOST (req, res, next, body) {
  Employee.apiEmployeePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
