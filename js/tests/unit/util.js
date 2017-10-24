$(function () {
  'use strict'

  QUnit.module('Util')

  QUnit.test('Util should work on noConflict mode', function (assert) {
    assert.expect(1)
    jQuery.noConflict() // eslint-disable-line func-call-spacing

    (function ($) { // eslint-disable-line no-unexpected-multiline
      var $el = $('<div data-target="body"></div>').appendTo($('#qunit-fixture'))
      assert.strictEqual(Util.getSelectorFromElement($el[0]), 'body')
    }(jQuery))

    // restore $
    window.$ = jQuery
  })
})
