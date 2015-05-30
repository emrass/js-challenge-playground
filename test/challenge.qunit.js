(function() {
  "use strict";

  QUnit.module("Challenge - API", {
    setup: function() {
      this.challengeUT = new Challenge();
    },
    teardown: function() {

    }
  });

  QUnit.test("should be a Challenge", function(assert) {
    assert.ok(this.challengeUT instanceof Challenge, "instance of Challenge");
  });

  QUnit.test("should store an argument", function(assert) {
    var challengeUT = new Challenge("argumentTest");
    assert.ok(challengeUT.argument === "argumentTest", "stores an argument");
  });

}());
