'use strict';
/*jshint asi: true */

var test = require('tap').test
var assert = require('../')

test('\ncondition is true', function (t) {
  t.plan(1);
  function callback(err, res) {
    if (err) t.fail(err)
    t.equal(res, 'result')
  }

  function run(cb) {
    if(!assert(1, 'condition should be true', cb)) return
    cb(null, 'result')
  }

  run(callback)
})

test('\ncondition is false', function (t) {
  t.plan(3);

  function callback(err, res) {
    t.ok(err, 'calls back with error')
    t.equal(err.message, 'condition should be true', 'error message is assert description')
    t.ok(!res, 'has no res')
  }

  function run(cb) {
    if(!assert(0, 'condition should be true', cb)) return
    cb(null, 'result')
  }

  run(callback)
})
