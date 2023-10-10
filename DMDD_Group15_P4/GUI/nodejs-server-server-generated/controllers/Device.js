'use strict';

var utils = require('../utils/writer.js');
var Device = require('../service/DeviceService');

module.exports.apiDeviceDeviceIdDELETE = function apiDeviceDeviceIdDELETE (req, res, next, deviceId) {
  Device.apiDeviceDeviceIdDELETE(deviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDeviceDeviceIdGET = function apiDeviceDeviceIdGET (req, res, next, deviceId) {
  Device.apiDeviceDeviceIdGET(deviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDeviceDeviceIdPUT = function apiDeviceDeviceIdPUT (req, res, next, body, deviceId) {
  Device.apiDeviceDeviceIdPUT(body, deviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDeviceGET = function apiDeviceGET (req, res, next) {
  Device.apiDeviceGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiDevicePOST = function apiDevicePOST (req, res, next, body) {
  Device.apiDevicePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
