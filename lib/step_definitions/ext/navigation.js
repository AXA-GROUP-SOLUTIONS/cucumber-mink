/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Arnaud Dezandee
 *
 * Authors:
 *     Arnaud Dezandee <dezandee.arnaud@gmail.com>
 */

var url = require('url');

var Navigation = module.exports = {};

///////////////////

Navigation.root = function(Driver, callback) {
  if (!Driver.baseUrl) {
    callback(new Error('Please provide a base url to use root functions !'));
  } else {
    Driver.url(Driver.baseUrl, callback);
  }
};

Navigation.browse = function(Driver, path, callback) {
  Driver.url(url.resolve(Driver.baseUrl, path), callback);
};

Navigation.refresh = function(Driver, callback) {
  Driver.refresh(callback);
};

Navigation.back = function(Driver, callback) {
  Driver.back(callback);
};
