var path = require('path');
var Mink = require('../../../lib/mink.js');

module.exports = function () {
  // Test for backward compatibility, otherwise use .init()
  Mink.call(this);
  Mink.loadPartials(path.join(__dirname, '../partials'));
};
