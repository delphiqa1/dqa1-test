var assert = require('assert');
var common = require('../../../common.js');
var MockServer = require('../../../lib/mockserver.js');
var Nightwatch = require('../../../lib/nightwatch.js');
var MochaTest = require('../../../lib/mochatest.js');

module.exports = MochaTest.add('client.submit', {
  beforeEach: function () {
    this.client = Nightwatch.client();
    this.protocol = common.require('api/protocol.js')(this.client);
  },

  testSubmit: function (done) {
    var protocol = this.protocol;

    var command = protocol.submit('TEST_ELEMENT', function callback() {
      done();
    });

    assert.equal(command.request.method, 'POST');
    assert.equal(command.data, '');
    assert.equal(command.request.path, '/wd/hub/session/1352110219202/element/TEST_ELEMENT/submit');
  }

});
