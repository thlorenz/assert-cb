'use strict';

var si = typeof setImmediate === 'function' ? setImmediate : function setImmediate(fn) { setTimeout(fn, 0) }

var assert = module.exports = 

/**
 * Assert that calls the callback if the given condition is false.
 * Passes the given condition through to the caller to allow branching depending on its value.
 *
 * @name assert-cb
 * @function
 * @param {boolean} condition if false callback is invoked with an error
 * @param {string} msg the error message
 * @param {function} cb invoked only if the condition is false 
 * @return {boolean} the given condition
 */
function assert(condition, msg, cb) {
  if (condition) return condition;  
  var err;

  function fail() { cb(err) }

  // creating error here in to keep setImmediate stack trace out of it
  err = new Error(msg)

  si(fail); 
  return condition;
}
