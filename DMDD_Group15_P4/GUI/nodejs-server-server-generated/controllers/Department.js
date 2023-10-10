'use strict';

var utils = require('../utils/writer.js');
var Department = require('../service/DepartmentService');

module.exports.apiDepartmentDepartmentIdDELETE = function apiDepartmentDepartmentIdDELETE (req, res, next, departmentId) {
  Department.apiDepartmentDepartmentIdDELETE(departmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDepartmentDepartmentIdGET = function apiDepartmentDepartmentIdGET (req, res, next, departmentId) {
  Department.apiDepartmentDepartmentIdGET(departmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDepartmentDepartmentIdPUT = function apiDepartmentDepartmentIdPUT (req, res, next, body, departmentId) {
  Department.apiDepartmentDepartmentIdPUT(body, departmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDepartmentGET = function apiDepartmentGET (req, res, next) {
  Department.apiDepartmentGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDepartmentPOST = function apiDepartmentPOST (req, res, next, body) {
  Department.apiDepartmentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
