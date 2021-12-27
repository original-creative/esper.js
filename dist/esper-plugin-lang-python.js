/*!
 * esper.js
 * 
 * Compiled: Mon Dec 27 2021 18:06:15 GMT+0800 (China Standard Time)
 * Target  : web (umd)
 * Profile : web
 * Version : f14e2da-dirty
 * 
 * 
 * The MIT License (MIT)
 * Copyright (c) 2016 Robert Blanckaert
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("esper"));
	else if(typeof define === 'function' && define.amd)
		define(["esper"], factory);
	else if(typeof exports === 'object')
		exports["esper-plugin-lang-python"] = factory(require("esper"));
	else
		root["esper-plugin-lang-python"] = factory(root["esper"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var esper_ref = __webpack_require__(1);
var plugin = __webpack_require__(2);
esper_ref._registerPlugin(plugin);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var skulpty = __webpack_require__(91);
var PythonRuntime = __webpack_require__(92);
var esper = void 0;

function parser(code, options) {
	options = options || {};
	var opts = { locations: true, ranges: true };
	var ast = skulpty.parse(code, opts);
	var fixThis = {
		'type': 'VariableDeclaration',
		'declarations': [{
			'type': 'VariableDeclarator',
			'id': {
				'type': 'Identifier',
				'name': 'self'
			},
			'init': {
				'type': 'ThisExpression'
			}
		}],
		'kind': 'var',
		'userCode': false
	};
	ast.body.unshift(fixThis);
	return ast;
}

var startupCode = __webpack_require__(181);
var startupCodeAST = void 0;

var plugin = module.exports = {
	name: 'lang-python',
	skulpty: skulpty,
	parser: parser,
	init: function init(e) {
		esper = e;
		esper.languages.python = plugin;
		startupCodeAST = esper.languages.javascript.parser(startupCode);
	},
	setupRealm: function setupRealm(realm) {
		realm.PythonString = function (_esper$StringValue) {
			(0, _inherits3.default)(PythonString, _esper$StringValue);

			function PythonString() {
				(0, _classCallCheck3.default)(this, PythonString);
				return (0, _possibleConstructorReturn3.default)(this, (PythonString.__proto__ || (0, _getPrototypeOf2.default)(PythonString)).apply(this, arguments));
			}

			(0, _createClass3.default)(PythonString, [{
				key: 'derivePrototype',
				value: function derivePrototype(realm) {
					return realm.pythonStringBaseInstance;
				}
			}]);
			return PythonString;
		}(esper.StringValue);

		var PythonStringBase = function (_esper$EasyObjectValu) {
			(0, _inherits3.default)(PythonStringBase, _esper$EasyObjectValu);

			function PythonStringBase() {
				(0, _classCallCheck3.default)(this, PythonStringBase);
				return (0, _possibleConstructorReturn3.default)(this, (PythonStringBase.__proto__ || (0, _getPrototypeOf2.default)(PythonStringBase)).apply(this, arguments));
			}

			(0, _createClass3.default)(PythonStringBase, null, [{
				key: 'join$e',
				value: /*#__PURE__*/_regenerator2.default.mark(function join$e(thiz, args, s) {
					var j;
					return _regenerator2.default.wrap(function join$e$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									if (!(args.length != 1)) {
										_context.next = 2;
										break;
									}

									return _context.abrupt('return', esper.CompletionRecord.makeTypeError(s.realm, 'join() takes exactly one argument (' + args.length + ' given)'));

								case 2:
									return _context.delegateYield(s.realm.ArrayPrototype.get('join', s), 't0', 3);

								case 3:
									j = _context.t0;
									return _context.delegateYield(j.call(args[0], [thiz], s), 't1', 5);

								case 5:
									return _context.abrupt('return', _context.t1);

								case 6:
								case 'end':
									return _context.stop();
							}
						}
					}, join$e, this);
				})
			}]);
			return PythonStringBase;
		}(esper.EasyObjectValue);

		realm.pythonStringBaseInstance = new PythonStringBase(realm);

		//Copy JS string functions for python that are pretty close.
		var map = {
			uper: 'toUpperCase',
			lower: 'toLowerCase',
			find: 'indexOf',
			replace: 'replace',
			split: 'split',
			trim: 'trim',
			charCodeAt: 'charCodeAt', //Used by Skulpty stdlib
			substring: 'substring', //Used by Skulpty stdlib
			toString: 'toString',
			valueOf: 'valueOf'
		};
		for (var k in map) {
			realm.pythonStringBaseInstance.properties[k] = realm.StringPrototype.properties[map[k]];
		}
		realm.loadLangaugeStartupCode(startupCodeAST);
		realm.PythonRuntime = new PythonRuntime.PythonRuntime(realm);
		realm.PythonListProto = new PythonRuntime.PythonListProto(realm);
		realm.PythonList = new PythonRuntime.PythonList(realm);
		var pr = realm.globalScope.get("__pythonRuntime");
		var copy = function copy(x, y, z) {
			return pr.getImmediate(x).setImmediate(y, realm.PythonRuntime.getImmediate(z));
		};
		//copy("ops","subscriptIndex", "subscriptIndex");
		copy("functions", "str", "str");
	},
	startupCode: function startupCode() {
		return startupCodeAST;
	},
	makeLiteralValue: function makeLiteralValue(v, realm, n) {
		if (n.nonUserCode) return;
		if (typeof v !== 'string') return;
		return new realm.PythonString(v, realm);
	}
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(5);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(15).Object.getPrototypeOf;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(9);
var $getPrototypeOf = __webpack_require__(11);

__webpack_require__(19)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(10);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(9);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(14)('keys');
var uid = __webpack_require__(18);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(15);
var global = __webpack_require__(16);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(17) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(20);
var core = __webpack_require__(15);
var fails = __webpack_require__(29);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var core = __webpack_require__(15);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(23);
var has = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24);
var createDesc = __webpack_require__(32);
module.exports = __webpack_require__(28) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var IE8_DOM_DEFINE = __webpack_require__(27);
var toPrimitive = __webpack_require__(31);
var dP = Object.defineProperty;

exports.f = __webpack_require__(28) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(28) && !__webpack_require__(29)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(29)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var document = __webpack_require__(16).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(26);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
var $Object = __webpack_require__(15).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(28), 'Object', { defineProperty: __webpack_require__(24).f });


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(40);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(68);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(63);
module.exports = __webpack_require__(67).f('iterator');


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(43)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(44);
var defined = __webpack_require__(10);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(46);
var hide = __webpack_require__(23);
var Iterators = __webpack_require__(47);
var $iterCreate = __webpack_require__(48);
var setToStringTag = __webpack_require__(61);
var getPrototypeOf = __webpack_require__(11);
var ITERATOR = __webpack_require__(62)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(49);
var descriptor = __webpack_require__(32);
var setToStringTag = __webpack_require__(61);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(23)(IteratorPrototype, __webpack_require__(62)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(25);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(59);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(60).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24);
var anObject = __webpack_require__(25);
var getKeys = __webpack_require__(51);

module.exports = __webpack_require__(28) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(52);
var enumBugKeys = __webpack_require__(59);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(53);
var arrayIndexOf = __webpack_require__(56)(false);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(10);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(55);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(53);
var toLength = __webpack_require__(57);
var toAbsoluteIndex = __webpack_require__(58);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(44);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(44);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(16).document;
module.exports = document && document.documentElement;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(24).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(62)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(14)('wks');
var uid = __webpack_require__(18);
var Symbol = __webpack_require__(16).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var global = __webpack_require__(16);
var hide = __webpack_require__(23);
var Iterators = __webpack_require__(47);
var TO_STRING_TAG = __webpack_require__(62)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65);
var step = __webpack_require__(66);
var Iterators = __webpack_require__(47);
var toIObject = __webpack_require__(53);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(62);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(82);
module.exports = __webpack_require__(15).Symbol;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(16);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(28);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(46);
var META = __webpack_require__(71).KEY;
var $fails = __webpack_require__(29);
var shared = __webpack_require__(14);
var setToStringTag = __webpack_require__(61);
var uid = __webpack_require__(18);
var wks = __webpack_require__(62);
var wksExt = __webpack_require__(67);
var wksDefine = __webpack_require__(72);
var enumKeys = __webpack_require__(73);
var isArray = __webpack_require__(76);
var anObject = __webpack_require__(25);
var isObject = __webpack_require__(26);
var toObject = __webpack_require__(9);
var toIObject = __webpack_require__(53);
var toPrimitive = __webpack_require__(31);
var createDesc = __webpack_require__(32);
var _create = __webpack_require__(49);
var gOPNExt = __webpack_require__(77);
var $GOPD = __webpack_require__(79);
var $GOPS = __webpack_require__(74);
var $DP = __webpack_require__(24);
var $keys = __webpack_require__(51);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(78).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(75).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(17)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(23)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(18)('meta');
var isObject = __webpack_require__(26);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(24).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(29)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var core = __webpack_require__(15);
var LIBRARY = __webpack_require__(17);
var wksExt = __webpack_require__(67);
var defineProperty = __webpack_require__(24).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(51);
var gOPS = __webpack_require__(74);
var pIE = __webpack_require__(75);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(55);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(53);
var gOPN = __webpack_require__(78).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(52);
var hiddenKeys = __webpack_require__(59).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(75);
var createDesc = __webpack_require__(32);
var toIObject = __webpack_require__(53);
var toPrimitive = __webpack_require__(31);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(27);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(28) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72)('asyncIterator');


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72)('observable');


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(84);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
module.exports = __webpack_require__(15).Object.setPrototypeOf;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(20);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(87).set });


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(26);
var anObject = __webpack_require__(25);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(21)(Function.call, __webpack_require__(79).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
var $Object = __webpack_require__(15).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(49) });


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// const Sk = require('skulpt');
	const Sk = __webpack_require__(1);
	const transform = __webpack_require__(2);
	const improveError = __webpack_require__(3);

	Sk.python3 = true;

	var defaultOptions = {
		locations: true,
		ranges: true,
		sippets: true,
		filename: 'file.py',
		useLet: false,
		friendlyErrors: true
	};

	function rangeToLoc(x, offsets) {
		var best = -1;
		for ( var i = 0; i < offsets.length; ++i ) {
			if ( offsets[i] > x ) break;
			best = i;
		}
		var off = best >= 0 ? offsets[best] : 0;
		return {line: best+2, column: x - off, pos: x };
	}

	function locToRange(line, col, offsets) {
		var loff = 0;
		if ( line >= 2 && (line-2) < offsets.length ) loff = offsets[line-2];
		return loff + col;
	}

	function decorate(n, code, offsets, options) {
		var numrange = locToRange(n.lineno, n.col_offset, offsets);

		var range = [
			numrange === numrange ? numrange : Infinity,
			numrange === numrange ? numrange : -Infinity
		];
		
		if ( n.value ) range[1] += (n.value.length);

		if ( n.children )
		for ( var i = 0; i < n.children.length; ++i ) {
			var r = decorate(n.children[i], code, offsets, options);
			range[0] = Math.min(range[0], r[0]);
			range[1] = Math.max(range[1], r[1]);
		}

		if ( options.ranges ) n.range = range;
		if ( options.locations ) {
			n.loc = {
				start: rangeToLoc(range[0], offsets),
				end: rangeToLoc(range[1], offsets),
			};
		}
		if ( options.snippets ) n.str = code.substring(range[0], range[1]);

		return range;
	}

	function parser(code, options) {
		var lineOffsets = [];
		var idx = -1;
		var parse, ast;
		options = options || {};
		for ( var opt in defaultOptions ) {
			if ( !(opt in options) ) options[opt] = defaultOptions[opt];
		}

		while ( true ) {
			idx = code.indexOf("\n", idx+1);
			if ( idx < 0 ) break;
			lineOffsets.push(idx+1);
		}

		try {
			parse = Sk.parse(options.filename, code);
			decorate(parse.cst, code, lineOffsets, options);
			parse.flags = parse.flags | Sk.Parser.CO_FUTURE_UNICODE_LITERALS; //Enable future unicode literals
			ast = Sk.astFromParse(parse.cst, options.filename, parse.flags);
		} catch ( e ) {
			if ( e.extra && e.extra.node ) decorate(e.extra.node, code, lineOffsets, options);
			improveError(e, options, code);
			if ( e.loc ) {
				e.pos = locToRange(e.loc.line, e.loc.column, lineOffsets);
			}
			throw e;
		}

		//console.log(JSON.stringify(ast, null, "  "));
		var ctx = {varType: (options.useLet ? 'let' : 'var')};
		var js = transform(ast, ctx);
		return js;
	}

	module.exports = {
		parse: parser,
		pythonRuntime: __webpack_require__(4),
		defaultOptions: {runtimeParamName: '__pythonRuntime'}
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/* ---- /Users/rob/skulpty/lib/preamble.js ---- */ 

	var goog = {
		global: global
	};

	var COMPILED = false;

	goog.exportSymbol = function() {};
	goog.require = function() {};

	goog.inherits = function(childCtor, parentCtor) {
	  if ( !parentCtor ) throw new Error("Cant inherit from undefined?");
	  /** @constructor */
	  function tempCtor() {};
	  tempCtor.prototype = parentCtor.prototype;
	  childCtor.superClass_ = parentCtor.prototype;
	  childCtor.prototype = new tempCtor();
	  /** @override */
	  childCtor.prototype.constructor = childCtor;
	};

	goog.asserts = {
		assert: function(what, why) {
	        if ( !what ) throw new Error("AssertionFailed:" + why);
	    }
	};

	var Sk = Sk || {};

	Sk.builtin = Sk.builtin  ||  {};

	Sk.builtin.bool = Boolean;
	Sk.builtin.int_ = function Int(x) {
	  this.v = x;
	};

	Sk.builtin.int_.prototype.threshold$ = Infinity;
	Sk.builtin.int_.prototype.valueOf = function() { return this.v.valueOf(); };

	Sk.builtin.tuple = function(x) {
	  this.v = Array.prototype.slice.call(x, 0);
	};
	Sk.builtin.tuple.prototype.sq$length = function() { return this.length; };

	Sk.builtin.float_ = Number;
	Sk.builtin.long = Number;
	Sk.builtin.func = function(fx) { return fx; };


	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/src/type.js ---- */ 

	if(Sk.builtin === undefined) {
	    Sk.builtin = {};
	}

	/**
	 * Maps Python dunder names to the Skulpt Javascript function names that
	 * implement them.
	 *
	 * Note: __add__, __mul__, and __rmul__ can be used for either numeric or
	 * sequence types. Here, they default to the numeric versions (i.e. nb$add,
	 * nb$multiply, and nb$reflected_multiply). This works because Sk.abstr.binary_op_
	 * checks for the numeric shortcuts and not the sequence shortcuts when computing
	 * a binary operation.
	 *
	 * Because many of these functions are used in contexts in which Skulpt does not
	 * [yet] handle suspensions, the assumption is that they must not suspend. However,
	 * some of these built-in functions are acquiring 'canSuspend' arguments to signal
	 * where this is not the case. These need to be spliced out of the argument list before
	 * it is passed to python. Array values in this map contain [dunderName, argumentIdx],
	 * where argumentIdx specifies the index of the 'canSuspend' boolean argument.
	 *
	 * @type {Object}
	 */
	Sk.dunderToSkulpt = {
	    "__eq__": "ob$eq",
	    "__ne__": "ob$ne",
	    "__lt__": "ob$lt",
	    "__le__": "ob$le",
	    "__gt__": "ob$gt",
	    "__ge__": "ob$ge",
	    "__hash__": "tp$hash",
	    "__abs__": "nb$abs",
	    "__neg__": "nb$negative",
	    "__pos__": "nb$positive",
	    "__int__": "nb$int_",
	    "__long__": "nb$lng",
	    "__float__": "nb$float_",
	    "__add__": "nb$add",
	    "__radd__": "nb$reflected_add",
	    "__sub__": "nb$subtract",
	    "__rsub__": "nb$reflected_subtract",
	    "__mul__": "nb$multiply",
	    "__rmul__": "nb$reflected_multiply",
	    "__div__": "nb$divide",
	    "__rdiv__": "nb$reflected_divide",
	    "__floordiv__": "nb$floor_divide",
	    "__rfloordiv__": "nb$reflected_floor_divide",
	    "__mod__": "nb$remainder",
	    "__rmod__": "nb$reflected_remainder",
	    "__divmod__": "nb$divmod",
	    "__rdivmod__": "nb$reflected_divmod",
	    "__pow__": "nb$power",
	    "__rpow__": "nb$reflected_power",
	    "__contains__": "sq$contains",
	    "__len__": ["sq$length", 1],
	    "__get__": ["tp$descr_get", 3],
	    "__set__": ["tp$descr_set", 3]
	};

	/**
	 *
	 * @constructor
	 *
	 * @param {*} name name or object to get type of, if only one arg
	 *
	 * @param {Sk.builtin.tuple=} bases
	 *
	 * @param {Object=} dict
	 *
	 *
	 * This type represents the type of `type'. *Calling* an instance of
	 * this builtin type named "type" creates class objects. The resulting
	 * class objects will have various tp$xyz attributes on them that allow
	 * for the various operations on that object.
	 *
	 * calling the type or calling an instance of the type? or both?
	 */
	Sk.builtin.type = function (name, bases, dict) {
	    var mro;
	    var obj;
	    var klass;
	    var v;
	    if (bases === undefined && dict === undefined) {
	        // 1 arg version of type()
	        // the argument is an object, not a name and returns a type object
	        obj = name;
	        return obj.ob$type;
	    } else {

	        // argument dict must be of type dict
	        if(dict.tp$name !== "dict") {
	            throw new Sk.builtin.TypeError("type() argument 3 must be dict, not " + Sk.abstr.typeName(dict));
	        }

	        // checks if name must be string
	        if(!Sk.builtin.checkString(name)) {
	            throw new Sk.builtin.TypeError("type() argument 1 must be str, not " + Sk.abstr.typeName(name));
	        }

	        // argument bases must be of type tuple
	        if(bases.tp$name !== "tuple") {
	            throw new Sk.builtin.TypeError("type() argument 2 must be tuple, not " + Sk.abstr.typeName(bases));
	        }

	        // type building version of type

	        // dict is the result of running the classes code object
	        // (basically the dict of functions). those become the prototype
	        // object of the class).

	        /**
	        * The constructor is a stub, that gets called from object.__new__
	        * @constructor
	        */
	        klass = function (args, kws) {
	            var args_copy;

	            // Call up through the chain in case there's a built-in object
	            // whose constructor we need to initialise
	            if (klass.prototype.tp$base !== undefined) {
	                if (klass.prototype.tp$base.sk$klass) {
	                    klass.prototype.tp$base.call(this, args, kws);
	                } else {
	                    // Call super constructor if subclass of a builtin
	                    args_copy = args.slice();
	                    args_copy.unshift(klass, this);
	                    Sk.abstr.superConstructor.apply(undefined, args_copy);
	                }
	            }

	            this["$d"] = new Sk.builtin.dict([]);
	            this["$d"].mp$ass_subscript(new Sk.builtin.str("__dict__"), this["$d"]);
	        };


	        var _name = Sk.ffi.remapToJs(name); // unwrap name string to js for latter use

	        var inheritsBuiltin = false;

	        // Invoking the class object calls __new__() to generate a new instance,
	        // then __init__() to initialise it
	        klass.tp$call = function(args, kws) {
	            var newf = Sk.builtin.type.typeLookup(klass, "__new__"), newargs;
	            var self;

	            args = args || [];
	            kws = kws || [];

	            if (newf === undefined || newf === Sk.builtin.object.prototype["__new__"]) {
	                // No override -> just call the constructor
	                self = new klass(args, kws);
	                newf = undefined;
	            } else {
	                newargs = args.slice();
	                newargs.unshift(klass);
	                self = Sk.misceval.applyOrSuspend(newf, undefined, undefined, kws, newargs);
	            }

	            return Sk.misceval.chain(self, function(s) {
	                var init = Sk.builtin.type.typeLookup(s.ob$type, "__init__");

	                self = s; // in case __new__ suspended

	                if (init !== undefined) {
	                    args.unshift(self);
	                    return Sk.misceval.applyOrSuspend(init, undefined, undefined, kws, args);
	                } else if (newf === undefined && (args.length !== 0 || kws.length !== 0) && !inheritsBuiltin) {
	                    // We complain about spurious constructor arguments if neither __new__
	                    // nor __init__ were overridden
	                    throw new Sk.builtin.TypeError("__init__() got unexpected argument(s)");
	                }
	            }, function(r) {
	                if (r !== Sk.builtin.none.none$ && r !== undefined) {
	                    throw new Sk.builtin.TypeError("__init__() should return None, not " + Sk.abstr.typeName(r));
	                } else {
	                    return self;
	                }
	            });
	        };

	        if (bases.v.length === 0 && Sk.python3) {
	            // new style class, inherits from object by default
	            Sk.abstr.setUpInheritance(_name, klass, Sk.builtin.object);
	        }

	        var parent, it, firstAncestor, builtin_bases = [];
	        // Set up inheritance from any builtins
	        for (it = bases.tp$iter(), parent = it.tp$iternext(); parent !== undefined; parent = it.tp$iternext()) {
	            if (firstAncestor === undefined) {
	                firstAncestor = parent;
	            }

	            while (parent.sk$klass && parent.prototype.tp$base) {
	                parent = parent.prototype.tp$base;
	            }

	            if (!parent.sk$klass && builtin_bases.indexOf(parent) < 0) {
	                builtin_bases.push(parent);
	                inheritsBuiltin = true;
	            }
	        }

	        if (builtin_bases.length > 1) {
	            throw new Sk.builtin.TypeError("Multiple inheritance with more than one builtin type is unsupported");
	        }

	        // Javascript does not support multiple inheritance, so only the first
	        // base (if any) will directly inherit in Javascript
	        if (firstAncestor !== undefined) {
	            goog.inherits(klass, firstAncestor);

	            if (firstAncestor.prototype instanceof Sk.builtin.object || firstAncestor === Sk.builtin.object) {
	                klass.prototype.tp$base = firstAncestor;
	            }
	        }

	        klass.prototype.tp$name = _name;
	        klass.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(_name, klass);

	        // set __module__ if not present (required by direct type(name, bases, dict) calls)
	        var module_lk = new Sk.builtin.str("__module__");
	        if(dict.mp$lookup(module_lk) === undefined) {
	            dict.mp$ass_subscript(module_lk, Sk.globals["__name__"]);
	        }

	        // copy properties into our klass object
	        // uses python iter methods
	        var k;
	        for (it = dict.tp$iter(), k = it.tp$iternext(); k !== undefined; k = it.tp$iternext()) {
	            v = dict.mp$subscript(k);
	            if (v === undefined) {
	                v = null;
	            }
	            klass.prototype[k.v] = v;
	            klass[k.v] = v;
	        }

	        klass["__class__"] = klass;
	        klass["__name__"] = name;
	        klass.sk$klass = true;
	        klass.prototype["$r"] = function () {
	            var cname;
	            var mod;
	            var reprf = this.tp$getattr("__repr__");
	            if (reprf !== undefined && reprf.im_func !== Sk.builtin.object.prototype["__repr__"]) {
	                return Sk.misceval.apply(reprf, undefined, undefined, undefined, []);
	            }

	            if ((klass.prototype.tp$base !== undefined) &&
	                (klass.prototype.tp$base !== Sk.builtin.object) &&
	                (klass.prototype.tp$base.prototype["$r"] !== undefined)) {
	                // If subclass of a builtin which is not object, use that class' repr
	                return klass.prototype.tp$base.prototype["$r"].call(this);
	            } else {
	                // Else, use default repr for a user-defined class instance
	                mod = dict.mp$subscript(module_lk); // lookup __module__
	                cname = "";
	                if (mod) {
	                    cname = mod.v + ".";
	                }
	                return new Sk.builtin.str("<" + cname + _name + " object>");
	            }
	        };

	        klass.prototype.tp$setattr = function(name, data, canSuspend) {
	            var r, /** @type {(Object|undefined)} */ setf = Sk.builtin.object.prototype.GenericGetAttr.call(this, "__setattr__");
	            if (setf !== undefined) {
	                r = Sk.misceval.callsimOrSuspend(/** @type {Object} */ (setf), new Sk.builtin.str(name), data);
	                return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
	            }

	            return Sk.builtin.object.prototype.GenericSetAttr.call(this, name, data);
	        };

	        klass.prototype.tp$getattr = function(name, canSuspend) {
	            var r, /** @type {(Object|undefined)} */ getf;
	            // Convert AttributeErrors back into 'undefined' returns to match the tp$getattr
	            // convention
	            var callCatchUndefined = function() {
	                return Sk.misceval.tryCatch(function() {
	                    return Sk.misceval.callsimOrSuspend(/** @type {Object} */ (getf), new Sk.builtin.str(name));
	                }, function (e) {
	                    if (e instanceof Sk.builtin.AttributeError) {
	                        return undefined;
	                    } else {
	                        throw e;
	                    }
	                });
	            };

	            getf = Sk.builtin.object.prototype.GenericGetAttr.call(this, "__getattribute__");

	            if (getf !== undefined) {
	                r = callCatchUndefined();
	            } else {
	                r = Sk.builtin.object.prototype.GenericGetAttr.call(this, name);
	                if (r === undefined) {
	                    getf = Sk.builtin.object.prototype.GenericGetAttr.call(this, "__getattr__");
	                    if (getf !== undefined) {
	                        r = callCatchUndefined();
	                    }
	                }
	            }
	            
	            return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
	        };

	        klass.prototype.tp$str = function () {
	            var strf = this.tp$getattr("__str__");
	            if (strf !== undefined && strf.im_func !== Sk.builtin.object.prototype["__str__"]) {
	                return Sk.misceval.apply(strf, undefined, undefined, undefined, []);
	            }
	            if ((klass.prototype.tp$base !== undefined) &&
	                (klass.prototype.tp$base !== Sk.builtin.object) &&
	                (klass.prototype.tp$base.prototype.tp$str !== undefined)) {
	                // If subclass of a builtin which is not object, use that class' repr
	                return klass.prototype.tp$base.prototype.tp$str.call(this);
	            }
	            return this["$r"]();
	        };
	        klass.prototype.tp$length = function (canSuspend) {
	            var r = Sk.misceval.chain(Sk.abstr.gattr(this, "__len__", canSuspend), function(lenf) {
	                return Sk.misceval.applyOrSuspend(lenf, undefined, undefined, undefined, []);
	            });
	            return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
	        };
	        klass.prototype.tp$call = function (args, kw) {
	            return Sk.misceval.chain(this.tp$getattr("__call__", true), function(callf) {
	                if (callf === undefined) {
	                    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object is not callable");
	                }
	                return Sk.misceval.applyOrSuspend(callf, undefined, undefined, kw, args);
	            });
	        };
	        klass.prototype.tp$iter = function () {
	            var iterf = this.tp$getattr("__iter__");
	            if (iterf === undefined) {
	                throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object is not iterable");
	            }
	            return Sk.misceval.callsim(iterf);
	        };
	        klass.prototype.tp$iternext = function (canSuspend) {
	            var self = this;
	            var r = Sk.misceval.chain(self.tp$getattr("next", canSuspend), function(/** {Object} */ iternextf) {
	                if (iternextf === undefined) {
	                    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(self) + "' object is not iterable");
	                }

	                return Sk.misceval.tryCatch(function() {
	                    return Sk.misceval.callsimOrSuspend(iternextf);
	                }, function(e) {
	                    if (e instanceof Sk.builtin.StopIteration) {
	                        return undefined;
	                    } else {
	                        throw e;
	                    }
	                });
	            });

	            return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
	        };

	        klass.prototype.tp$getitem = function (key, canSuspend) {
	            var getf = this.tp$getattr("__getitem__", canSuspend), r;
	            if (getf !== undefined) {
	                r = Sk.misceval.applyOrSuspend(getf, undefined, undefined, undefined, [key]);
	                return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
	            }
	            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object does not support indexing");
	        };
	        klass.prototype.tp$setitem = function (key, value, canSuspend) {
	            var setf = this.tp$getattr("__setitem__", canSuspend), r;
	            if (setf !== undefined) {
	                r = Sk.misceval.applyOrSuspend(setf, undefined, undefined, undefined, [key, value]);
	                return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
	            }
	            throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(this) + "' object does not support item assignment");
	        };

	        if (bases) {
	            //print("building mro for", name);
	            //for (var i = 0; i < bases.length; ++i)
	            //print("base[" + i + "]=" + bases[i].tp$name);
	            klass["$d"] = new Sk.builtin.dict([]);
	            klass["$d"].mp$ass_subscript(Sk.builtin.type.basesStr_, bases);
	            mro = Sk.builtin.type.buildMRO(klass);
	            klass["$d"].mp$ass_subscript(Sk.builtin.type.mroStr_, mro);
	            klass.tp$mro = mro;
	            //print("mro result", Sk.builtin.repr(mro).v);
	        }

	        // fix for class attributes
	        klass.tp$setattr = Sk.builtin.type.prototype.tp$setattr;

	        var shortcutDunder = function (skulpt_name, magic_name, magic_func, canSuspendIdx) {
	            klass.prototype[skulpt_name] = function () {
	                var args = Array.prototype.slice.call(arguments), canSuspend;
	                args.unshift(magic_func, this);

	                if (canSuspendIdx !== null) {
	                    canSuspend = args[canSuspendIdx+1];
	                    args.splice(canSuspendIdx+1, 1);

	                    if (canSuspend) {
	                        return Sk.misceval.callsimOrSuspend.apply(undefined, args);
	                    }
	                }
	                return Sk.misceval.callsim.apply(undefined, args);
	            };
	        };

	        // Register skulpt shortcuts to magic methods defined by this class.
	        // Dynamically deflined methods (eg those returned by __getattr__())
	        // cannot be used by these magic functions; this is consistent with
	        // how CPython handles "new-style" classes:
	        // https://docs.python.org/2/reference/datamodel.html#special-method-lookup-for-old-style-classes
	        var dunder, skulpt_name, canSuspendIdx;
	        for (dunder in Sk.dunderToSkulpt) {
	            skulpt_name = Sk.dunderToSkulpt[dunder];
	            if (typeof(skulpt_name) === "string") {
	                canSuspendIdx = null;
	            } else {
	                canSuspendIdx = skulpt_name[1];
	                skulpt_name = skulpt_name[0];
	            }

	            if (klass[dunder]) {
	                // scope workaround
	                shortcutDunder(skulpt_name, dunder, klass[dunder], canSuspendIdx);
	            }
	        }

	        return klass;
	    }

	};

	/**
	 *
	 */
	Sk.builtin.type.makeTypeObj = function (name, newedInstanceOfType) {
	    Sk.builtin.type.makeIntoTypeObj(name, newedInstanceOfType);
	    return newedInstanceOfType;
	};

	Sk.builtin.type.makeIntoTypeObj = function (name, t) {
	    goog.asserts.assert(name !== undefined);
	    goog.asserts.assert(t !== undefined);
	    t.ob$type = Sk.builtin.type;
	    t.tp$name = name;
	    t["$r"] = function () {
	        var ctype;
	        var mod = t.__module__;
	        var cname = "";
	        if (mod) {
	            cname = mod.v + ".";
	        }
	        ctype = "class";
	        if (!mod && !t.sk$klass && !Sk.python3) {
	            ctype = "type";
	        }
	        return new Sk.builtin.str("<" + ctype + " '" + cname + t.tp$name + "'>");
	    };
	    t.tp$str = undefined;
	    t.tp$getattr = Sk.builtin.type.prototype.tp$getattr;
	    t.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
	    t.tp$richcompare = Sk.builtin.type.prototype.tp$richcompare;
	    t.sk$type = true;

	    return t;
	};

	Sk.builtin.type.ob$type = Sk.builtin.type;
	Sk.builtin.type.tp$name = "type";
	Sk.builtin.type["$r"] = function () {
	    if(Sk.python3) {
	        return new Sk.builtin.str("<class 'type'>");
	    } else {
	        return new Sk.builtin.str("<type 'type'>");
	    }
	};

	//Sk.builtin.type.prototype.tp$descr_get = function() { print("in type descr_get"); };

	//Sk.builtin.type.prototype.tp$name = "type";

	// basically the same as GenericGetAttr except looks in the proto instead
	Sk.builtin.type.prototype.tp$getattr = function (name, canSuspend) {
	    var res;
	    var tp = this;
	    var descr;
	    var f;

	    if (this["$d"]) {
	        res = this["$d"].mp$lookup(new Sk.builtin.str(name));
	        if (res !== undefined) {
	            return res;
	        }
	    }

	    descr = Sk.builtin.type.typeLookup(tp, name);

	    //print("type.tpgetattr descr", descr, descr.tp$name, descr.func_code, name);
	    if (descr !== undefined && descr !== null && descr.ob$type !== undefined) {
	        f = descr.tp$descr_get;
	        // todo;if (f && descr.tp$descr_set) // is a data descriptor if it has a set
	        // return f.call(descr, this, this.ob$type);
	    }

	    if (f) {
	        // non-data descriptor
	        return f.call(descr, Sk.builtin.none.none$, tp, canSuspend);
	    }

	    if (descr !== undefined) {
	        return descr;
	    }

	    return undefined;
	};

	Sk.builtin.type.prototype.tp$setattr = function (name, value) {
	    // class attributes are direct properties of the object
	    this[name] = value;
	};

	Sk.builtin.type.typeLookup = function (type, name) {
	    var mro = type.tp$mro;
	    var pyname = new Sk.builtin.str(name);
	    var base;
	    var res;
	    var i;

	    // todo; probably should fix this, used for builtin types to get stuff
	    // from prototype
	    if (!mro) {
	        if (type.prototype) {
	            return type.prototype[name];
	        }
	        return undefined;
	    }

	    for (i = 0; i < mro.v.length; ++i) {
	        base = mro.v[i];
	        if (base.hasOwnProperty(name)) {
	            return base[name];
	        }
	        res = base["$d"].mp$lookup(pyname);
	        if (res !== undefined) {
	            return res;
	        }
	        if (base.prototype && base.prototype[name] !== undefined) {
	            return base.prototype[name];
	        }
	    }

	    return undefined;
	};

	Sk.builtin.type.mroMerge_ = function (seqs) {
	    /*
	     var tmp = [];
	     for (var i = 0; i < seqs.length; ++i)
	     {
	     tmp.push(new Sk.builtin.list(seqs[i]));
	     }
	     print(Sk.builtin.repr(new Sk.builtin.list(tmp)).v);
	     */
	    var seq;
	    var i;
	    var next;
	    var k;
	    var sseq;
	    var j;
	    var cand;
	    var cands;
	    var res = [];
	    for (; ;) {
	        for (i = 0; i < seqs.length; ++i) {
	            seq = seqs[i];
	            if (seq.length !== 0) {
	                break;
	            }
	        }
	        if (i === seqs.length) { // all empty
	            return res;
	        }
	        cands = [];
	        for (i = 0; i < seqs.length; ++i) {
	            seq = seqs[i];
	            //print("XXX", Sk.builtin.repr(new Sk.builtin.list(seq)).v);
	            if (seq.length !== 0) {
	                cand = seq[0];
	                //print("CAND", Sk.builtin.repr(cand).v);
	                OUTER:
	                    for (j = 0; j < seqs.length; ++j) {
	                        sseq = seqs[j];
	                        for (k = 1; k < sseq.length; ++k) {
	                            if (sseq[k] === cand) {
	                                break OUTER;
	                            }
	                        }
	                    }

	                // cand is not in any sequences' tail -> constraint-free
	                if (j === seqs.length) {
	                    cands.push(cand);
	                }
	            }
	        }

	        if (cands.length === 0) {
	            throw new Sk.builtin.TypeError("Inconsistent precedences in type hierarchy");
	        }

	        next = cands[0];
	        // append next to result and remove from sequences
	        res.push(next);
	        for (i = 0; i < seqs.length; ++i) {
	            seq = seqs[i];
	            if (seq.length > 0 && seq[0] === next) {
	                seq.splice(0, 1);
	            }
	        }
	    }
	};

	Sk.builtin.type.buildMRO_ = function (klass) {
	    // MERGE(klass + mro(bases) + bases)
	    var i;
	    var bases;
	    var all = [
	        [klass]
	    ];

	    //Sk.debugout("buildMRO for", klass.tp$name);

	    var kbases = klass["$d"].mp$subscript(Sk.builtin.type.basesStr_);
	    for (i = 0; i < kbases.v.length; ++i) {
	        all.push(Sk.builtin.type.buildMRO_(kbases.v[i]));
	    }

	    bases = [];
	    for (i = 0; i < kbases.v.length; ++i) {
	        bases.push(kbases.v[i]);
	    }
	    all.push(bases);

	    return Sk.builtin.type.mroMerge_(all);
	};

	/*
	 * C3 MRO (aka CPL) linearization. Figures out which order to search through
	 * base classes to determine what should override what. C3 does the "right
	 * thing", and it's what Python has used since 2.3.
	 *
	 * Kind of complicated to explain, but not really that complicated in
	 * implementation. Explanations:
	 *
	 * http://people.csail.mit.edu/jrb/goo/manual.43/goomanual_55.html
	 * http://www.python.org/download/releases/2.3/mro/
	 * http://192.220.96.201/dylan/linearization-oopsla96.html
	 *
	 * This implementation is based on a post by Samuele Pedroni on python-dev
	 * (http://mail.python.org/pipermail/python-dev/2002-October/029176.html) when
	 * discussing its addition to Python.
	 */
	Sk.builtin.type.buildMRO = function (klass) {
	    return new Sk.builtin.tuple(Sk.builtin.type.buildMRO_(klass));
	};

	Sk.builtin.type.prototype.tp$richcompare = function (other, op) {
	    var r2;
	    var r1;
	    if (other.ob$type != Sk.builtin.type) {
	        return undefined;
	    }
	    if (!this["$r"] || !other["$r"]) {
	        return undefined;
	    }
	    r1 = new Sk.builtin.str(this["$r"]().v.slice(1,6));
	    r2 = new Sk.builtin.str(other["$r"]().v.slice(1,6));
	    if (this["$r"]().v.slice(1,6) !== "class") {
	        r1 = this["$r"]();
	        r2 = other["$r"]();
	    }
	    return r1.tp$richcompare(r2, op);
	};



	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/src/abstract.js ---- */ 

	/**
	 * @namespace Sk.abstr
	 *
	 */
	Sk.abstr = {};

	//
	// Number
	//

	Sk.abstr.typeName = function (v) {
	    var vtypename;
	    if (v.tp$name !== undefined) {
	        vtypename = v.tp$name;
	    } else {
	        vtypename = "<invalid type>";
	    }
	    return vtypename;
	};

	Sk.abstr.binop_type_error = function (v, w, name) {
	    var vtypename = Sk.abstr.typeName(v),
	        wtypename = Sk.abstr.typeName(w);

	    throw new Sk.builtin.TypeError("unsupported operand type(s) for " + name + ": '" + vtypename + "' and '" + wtypename + "'");
	};

	Sk.abstr.unop_type_error = function (v, name) {
	    var vtypename = Sk.abstr.typeName(v),
	        uop = {
	            "UAdd"  : "+",
	            "USub"  : "-",
	            "Invert": "~"
	        }[name];

	    throw new Sk.builtin.TypeError("bad operand type for unary " + uop + ": '" + vtypename + "'");
	};

	/**
	 * lookup and return the LHS object slot function method.  This coudl be either a builtin slot function or a dunder method defined by the user.
	 * @param obj
	 * @param name
	 * @returns {Object|null|undefined}
	 * @private
	 */
	Sk.abstr.boNameToSlotFuncLhs_ = function (obj, name) {
	    if (obj === null) {
	        return undefined;
	    }

	    switch (name) {
	    case "Add":
	        return obj.nb$add ? obj.nb$add : obj["__add__"];
	    case "Sub":
	        return obj.nb$subtract ? obj.nb$subtract : obj["__sub__"];
	    case "Mult":
	        return obj.nb$multiply ? obj.nb$multiply : obj["__mul__"];
	    case "Div":
	        return obj.nb$divide ? obj.nb$divide : obj["__div__"];
	    case "FloorDiv":
	        return obj.nb$floor_divide ? obj.nb$floor_divide : obj["__floordiv__"];
	    case "Mod":
	        return obj.nb$remainder ? obj.nb$remainder : obj["__mod__"];
	    case "DivMod":
	        return obj.nb$divmod ? obj.nb$divmod : obj["__divmod__"];
	    case "Pow":
	        return obj.nb$power ? obj.nb$power : obj["__pow__"];
	    case "LShift":
	        return obj.nb$lshift ? obj.nb$lshift : obj["__lshift__"];
	    case "RShift":
	        return obj.nb$rshift ? obj.nb$rshift : obj["__rshift__"];
	    case "BitAnd":
	        return obj.nb$and ? obj.nb$and : obj["__and__"];
	    case "BitXor":
	        return obj.nb$xor ? obj.nb$xor : obj["__xor__"];
	    case "BitOr":
	        return obj.nb$or ? obj.nb$or : obj["__or__"];
	    }
	};

	Sk.abstr.boNameToSlotFuncRhs_ = function (obj, name) {
	    if (obj === null) {
	        return undefined;
	    }

	    switch (name) {
	    case "Add":
	        return obj.nb$reflected_add ? obj.nb$reflected_add : obj["__radd__"];
	    case "Sub":
	        return obj.nb$reflected_subtract ? obj.nb$reflected_subtract : obj["__rsub__"];
	    case "Mult":
	        return obj.nb$reflected_multiply ? obj.nb$reflected_multiply : obj["__rmul__"];
	    case "Div":
	        return obj.nb$reflected_divide ? obj.nb$reflected_divide : obj["__rdiv__"];
	    case "FloorDiv":
	        return obj.nb$reflected_floor_divide ? obj.nb$reflected_floor_divide : obj["__rfloordiv__"];
	    case "Mod":
	        return obj.nb$reflected_remainder ? obj.nb$reflected_remainder : obj["__rmod__"];
	    case "DivMod":
	        return obj.nb$reflected_divmod ? obj.nb$reflected_divmod : obj["__rdivmod__"];
	    case "Pow":
	        return obj.nb$reflected_power ? obj.nb$reflected_power : obj["__rpow__"];
	    case "LShift":
	        return obj.nb$reflected_lshift ? obj.nb$reflected_lshift : obj["__rlshift__"];
	    case "RShift":
	        return obj.nb$reflected_rshift ? obj.nb$reflected_rshift : obj["__rrshift__"];
	    case "BitAnd":
	        return obj.nb$reflected_and ? obj.nb$reflected_and : obj["__rand__"];
	    case "BitXor":
	        return obj.nb$reflected_xor ? obj.nb$reflected_xor : obj["__rxor__"];
	    case "BitOr":
	        return obj.nb$reflected_or ? obj.nb$reflected_or : obj["__ror__"];
	    }
	};

	Sk.abstr.iboNameToSlotFunc_ = function (obj, name) {
	    switch (name) {
	    case "Add":
	        return obj.nb$inplace_add ? obj.nb$inplace_add : obj["__iadd__"];
	    case "Sub":
	        return obj.nb$inplace_subtract ? obj.nb$inplace_subtract : obj["__isub__"];
	    case "Mult":
	        return obj.nb$inplace_multiply ? obj.nb$inplace_multiply : obj["__imul__"];
	    case "Div":
	        return obj.nb$inplace_divide ? obj.nb$inplace_divide : obj["__idiv__"];
	    case "FloorDiv":
	        return obj.nb$inplace_floor_divide ? obj.nb$inplace_floor_divide : obj["__ifloordiv__"];
	    case "Mod":
	        return obj.nb$inplace_remainder;
	    case "Pow":
	        return obj.nb$inplace_power;
	    case "LShift":
	        return obj.nb$inplace_lshift ? obj.nb$inplace_lshift : obj["__ilshift__"];
	    case "RShift":
	        return obj.nb$inplace_rshift ? obj.nb$inplace_rshift : obj["__irshift__"];
	    case "BitAnd":
	        return obj.nb$inplace_and;
	    case "BitOr":
	        return obj.nb$inplace_or;
	    case "BitXor":
	        return obj.nb$inplace_xor ? obj.nb$inplace_xor : obj["__ixor__"];
	    }
	};
	Sk.abstr.uoNameToSlotFunc_ = function (obj, name) {
	    if (obj === null) {
	        return undefined;
	    }
	    switch (name) {
	    case "USub":
	        return obj.nb$negative ? obj.nb$negative : obj["__neg__"];
	    case "UAdd":
	        return obj.nb$positive ? obj.nb$positive : obj["__pos__"];
	    case "Invert":
	        return obj.nb$invert ? obj.nb$invert : obj["__invert__"];
	    }
	};

	Sk.abstr.binary_op_ = function (v, w, opname) {
	    var wop;
	    var ret;
	    var vop;

	    // All Python inheritance is now enforced with Javascript inheritance
	    // (see Sk.abstr.setUpInheritance). This checks if w's type is a strict
	    // subclass of v's type
	    var w_is_subclass = w.constructor.prototype instanceof v.constructor;

	    // From the Python 2.7 docs:
	    //
	    // "If the right operand’s type is a subclass of the left operand’s type and
	    // that subclass provides the reflected method for the operation, this
	    // method will be called before the left operand’s non-reflected method.
	    // This behavior allows subclasses to override their ancestors’ operations."
	    //
	    // -- https://docs.python.org/2/reference/datamodel.html#index-92

	    if (w_is_subclass) {
	        wop = Sk.abstr.boNameToSlotFuncRhs_(w, opname);
	        if (wop !== undefined) {
	            if (wop.call) {
	                ret = wop.call(w, v);
	            } else {
	                ret = Sk.misceval.callsim(wop, w, v);
	            }
	            if (ret !== undefined && ret !== Sk.builtin.NotImplemented.NotImplemented$) {
	                return ret;
	            }
	        }
	    }

	    vop = Sk.abstr.boNameToSlotFuncLhs_(v, opname);
	    if (vop !== undefined) {
	        if (vop.call) {
	            ret = vop.call(v, w);
	        } else {
	            ret = Sk.misceval.callsim(vop, v, w);
	        }
	        if (ret !== undefined && ret !== Sk.builtin.NotImplemented.NotImplemented$) {
	            return ret;
	        }
	    }
	    // Don't retry RHS if failed above
	    if (!w_is_subclass) {
	        wop = Sk.abstr.boNameToSlotFuncRhs_(w, opname);
	        if (wop !== undefined) {
	            if (wop.call) {
	                ret = wop.call(w, v);
	            } else {
	                ret = Sk.misceval.callsim(wop, w, v);
	            }
	            if (ret !== undefined && ret !== Sk.builtin.NotImplemented.NotImplemented$) {
	                return ret;
	            }
	        }
	    }
	    Sk.abstr.binop_type_error(v, w, opname);
	};

	Sk.abstr.binary_iop_ = function (v, w, opname) {
	    var wop;
	    var ret;
	    var vop = Sk.abstr.iboNameToSlotFunc_(v, opname);
	    if (vop !== undefined) {
	        if (vop.call) {
	            ret = vop.call(v, w);
	        } else {  // assume that vop is an __xxx__ type method
	            ret = Sk.misceval.callsim(vop, v, w);
	        }
	        if (ret !== undefined && ret !== Sk.builtin.NotImplemented.NotImplemented$) {
	            return ret;
	        }
	    }
	    // If there wasn't an in-place operation, fall back to the binop
	    return Sk.abstr.binary_op_(v, w, opname);
	};
	Sk.abstr.unary_op_ = function (v, opname) {
	    var ret;
	    var vop = Sk.abstr.uoNameToSlotFunc_(v, opname);
	    if (vop !== undefined) {
	        if (vop.call) {
	            ret = vop.call(v);
	        } else {  // assume that vop is an __xxx__ type method
	            ret = Sk.misceval.callsim(vop, v); //  added to be like not-in-place... is this okay?
	        }
	        if (ret !== undefined) {
	            return ret;
	        }
	    }
	    Sk.abstr.unop_type_error(v, opname);
	};

	//
	// handle upconverting a/b from number to long if op causes too big/small a
	// result, or if either of the ops are already longs
	Sk.abstr.numOpAndPromote = function (a, b, opfn) {
	    var tmp;
	    var ans;
	    if (a === null || b === null) {
	        return undefined;
	    }

	    if (typeof a === "number" && typeof b === "number") {
	        ans = opfn(a, b);
	        // todo; handle float   Removed RNL (bugs in lng, and it should be a question of precision, not magnitude -- this was just wrong)
	        if ((ans > Sk.builtin.int_.threshold$ || ans < -Sk.builtin.int_.threshold$) && Math.floor(ans) === ans) {
	            return [Sk.builtin.lng.fromInt$(a), Sk.builtin.lng.fromInt$(b)];
	        } else {
	            return ans;
	        }
	    } else if (a === undefined || b === undefined) {
	        throw new Sk.builtin.NameError("Undefined variable in expression");
	    }

	    if (a.constructor === Sk.builtin.lng) {
	        return [a, b];
	    } else if ((a.constructor === Sk.builtin.int_ ||
	                a.constructor === Sk.builtin.float_) &&
	                b.constructor === Sk.builtin.complex) {
	        // special case of upconverting nmber and complex
	        // can we use here the Sk.builtin.checkComplex() method?
	        tmp = new Sk.builtin.complex(a);
	        return [tmp, b];
	    } else if (a.constructor === Sk.builtin.int_ ||
	               a.constructor === Sk.builtin.float_) {
	        return [a, b];
	    } else if (typeof a === "number") {
	        tmp = Sk.builtin.assk$(a);
	        return [tmp, b];
	    } else {
	        return undefined;
	    }
	};

	Sk.abstr.boNumPromote_ = {
	    "Add"     : function (a, b) {
	        return a + b;
	    },
	    "Sub"     : function (a, b) {
	        return a - b;
	    },
	    "Mult"    : function (a, b) {
	        return a * b;
	    },
	    "Mod"     : function (a, b) {
	        var m;
	        if (b === 0) {
	            throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
	        }
	        m = a % b;
	        return ((m * b) < 0 ? (m + b) : m);
	    },
	    "Div"     : function (a, b) {
	        if (b === 0) {
	            throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
	        } else {
	            return a / b;
	        }
	    },
	    "FloorDiv": function (a, b) {
	        if (b === 0) {
	            throw new Sk.builtin.ZeroDivisionError("division or modulo by zero");
	        } else {
	            return Math.floor(a / b);
	        } // todo; wrong? neg?
	    },
	    "Pow"     : Math.pow,
	    "BitAnd"  : function (a, b) {
	        var m = a & b;
	        if (m < 0) {
	            m = m + 4294967296; // convert back to unsigned
	        }
	        return m;
	    },
	    "BitOr"   : function (a, b) {
	        var m = a | b;
	        if (m < 0) {
	            m = m + 4294967296; // convert back to unsigned
	        }
	        return m;
	    },
	    "BitXor"  : function (a, b) {
	        var m = a ^ b;
	        if (m < 0) {
	            m = m + 4294967296; // convert back to unsigned
	        }
	        return m;
	    },
	    "LShift"  : function (a, b) {
	        var m;
	        if (b < 0) {
	            throw new Sk.builtin.ValueError("negative shift count");
	        }
	        m = a << b;
	        if (m > a) {
	            return m;
	        } else {
	            // Fail, this will get recomputed with longs
	            return a * Math.pow(2, b);
	        }
	    },
	    "RShift"  : function (a, b) {
	        var m;
	        if (b < 0) {
	            throw new Sk.builtin.ValueError("negative shift count");
	        }
	        m = a >> b;
	        if ((a > 0) && (m < 0)) {
	            // fix incorrect sign extension
	            m = m & (Math.pow(2, 32 - b) - 1);
	        }
	        return m;
	    }
	};

	Sk.abstr.numberBinOp = function (v, w, op) {
	    var tmp;
	    var numPromoteFunc = Sk.abstr.boNumPromote_[op];
	    if (numPromoteFunc !== undefined) {
	        tmp = Sk.abstr.numOpAndPromote(v, w, numPromoteFunc);
	        if (typeof tmp === "number") {
	            return tmp;
	        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.int_) {
	            return tmp;
	        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.float_) {
	            return tmp;
	        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.lng) {
	            return tmp;
	        } else if (tmp !== undefined) {
	            v = tmp[0];
	            w = tmp[1];
	        }
	    }

	    return Sk.abstr.binary_op_(v, w, op);
	};
	goog.exportSymbol("Sk.abstr.numberBinOp", Sk.abstr.numberBinOp);

	Sk.abstr.numberInplaceBinOp = function (v, w, op) {
	    var tmp;
	    var numPromoteFunc = Sk.abstr.boNumPromote_[op];
	    if (numPromoteFunc !== undefined) {
	        tmp = Sk.abstr.numOpAndPromote(v, w, numPromoteFunc);
	        if (typeof tmp === "number") {
	            return tmp;
	        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.int_) {
	            return tmp;
	        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.float_) {
	            return tmp;
	        } else if (tmp !== undefined && tmp.constructor === Sk.builtin.lng) {
	            return tmp;
	        } else if (tmp !== undefined) {
	            v = tmp[0];
	            w = tmp[1];
	        }
	    }

	    return Sk.abstr.binary_iop_(v, w, op);
	};
	goog.exportSymbol("Sk.abstr.numberInplaceBinOp", Sk.abstr.numberInplaceBinOp);

	Sk.abstr.numberUnaryOp = function (v, op) {
	    var value;
	    if (op === "Not") {
	        return Sk.misceval.isTrue(v) ? Sk.builtin.bool.false$ : Sk.builtin.bool.true$;
	    } else if (v instanceof Sk.builtin.bool) {
	        value = Sk.builtin.asnum$(v);
	        if (op === "USub") {
	            return new Sk.builtin.int_(-value);
	        }
	        if (op === "UAdd") {
	            return new Sk.builtin.int_(value);
	        }
	        if (op === "Invert") {
	            return new Sk.builtin.int_(~value);
	        }
	    } else {
	        if (op === "USub" && v.nb$negative) {
	            return v.nb$negative();
	        }
	        if (op === "UAdd" && v.nb$positive) {
	            return v.nb$positive();
	        }
	        if (op === "Invert" && v.nb$invert) {
	            return v.nb$invert();
	        }
	    }

	    return Sk.abstr.unary_op_(v, op);
	};
	goog.exportSymbol("Sk.abstr.numberUnaryOp", Sk.abstr.numberUnaryOp);

	//
	// Sequence
	//

	Sk.abstr.fixSeqIndex_ = function (seq, i) {
	    i = Sk.builtin.asnum$(i);
	    if (i < 0 && seq.sq$length) {
	        i += seq.sq$length();
	    }
	    return i;
	};

	/**
	 * @param {*} seq
	 * @param {*} ob
	 * @param {boolean=} canSuspend
	 */
	Sk.abstr.sequenceContains = function (seq, ob, canSuspend) {
	    var seqtypename;
	    var special;
	    var r;

	    if (seq.sq$contains) {
	        return seq.sq$contains(ob);
	    }

	    /**
	     *  Look for special method and call it, we have to distinguish between built-ins and
	     *  python objects
	     */
	    special = Sk.abstr.lookupSpecial(seq, "__contains__");
	    if (special != null) {
	        // method on builtin, provide this arg
	        return Sk.misceval.isTrue(Sk.misceval.callsim(special, seq, ob));
	    }

	    if (!Sk.builtin.checkIterable(seq)) {
	        seqtypename = Sk.abstr.typeName(seq);
	        throw new Sk.builtin.TypeError("argument of type '" + seqtypename + "' is not iterable");
	    }

	    r = Sk.misceval.iterFor(Sk.abstr.iter(seq), function(i) {
	        if (Sk.misceval.richCompareBool(i, ob, "Eq")) {
	            return new Sk.misceval.Break(true);
	        } else {
	            return false;
	        }
	    }, false);

	    return canSuspend ? r : Sk.misceval.retryOptionalSuspensionOrThrow(r);
	};

	Sk.abstr.sequenceConcat = function (seq1, seq2) {
	    var seq1typename;
	    if (seq1.sq$concat) {
	        return seq1.sq$concat(seq2);
	    }
	    seq1typename = Sk.abstr.typeName(seq1);
	    throw new Sk.builtin.TypeError("'" + seq1typename + "' object can't be concatenated");
	};

	Sk.abstr.sequenceGetIndexOf = function (seq, ob) {
	    var seqtypename;
	    var i, it;
	    var index;
	    if (seq.index) {
	        return Sk.misceval.callsim(seq.index, seq, ob);
	    }
	    if (Sk.builtin.checkIterable(seq)) {
	        index = 0;
	        for (it = Sk.abstr.iter(seq), i = it.tp$iternext();
	             i !== undefined; i = it.tp$iternext()) {
	            if (Sk.misceval.richCompareBool(ob, i, "Eq")) {
	                return new Sk.builtin.int_(index);
	            }
	            index += 1;
	        }
	        throw new Sk.builtin.ValueError("sequence.index(x): x not in sequence");
	    }

	    seqtypename = Sk.abstr.typeName(seq);
	    throw new Sk.builtin.TypeError("argument of type '" + seqtypename + "' is not iterable");
	};

	Sk.abstr.sequenceGetCountOf = function (seq, ob) {
	    var seqtypename;
	    var i, it;
	    var count;
	    if (seq.count) {
	        return Sk.misceval.callsim(seq.count, seq, ob);
	    }
	    if (Sk.builtin.checkIterable(seq)) {
	        count = 0;
	        for (it = Sk.abstr.iter(seq), i = it.tp$iternext();
	             i !== undefined; i = it.tp$iternext()) {
	            if (Sk.misceval.richCompareBool(ob, i, "Eq")) {
	                count += 1;
	            }
	        }
	        return new Sk.builtin.int_(count);
	    }

	    seqtypename = Sk.abstr.typeName(seq);
	    throw new Sk.builtin.TypeError("argument of type '" + seqtypename + "' is not iterable");
	};

	Sk.abstr.sequenceGetItem = function (seq, i, canSuspend) {
	    var seqtypename;
	    if (seq.mp$subscript) {
	        return seq.mp$subscript(i);
	    }

	    seqtypename = Sk.abstr.typeName(seq);
	    throw new Sk.builtin.TypeError("'" + seqtypename + "' object is unsubscriptable");
	};

	Sk.abstr.sequenceSetItem = function (seq, i, x, canSuspend) {
	    var seqtypename;
	    if (seq.mp$ass_subscript) {
	        return seq.mp$ass_subscript(i, x);
	    }

	    seqtypename = Sk.abstr.typeName(seq);
	    throw new Sk.builtin.TypeError("'" + seqtypename + "' object does not support item assignment");
	};

	Sk.abstr.sequenceDelItem = function (seq, i) {
	    var seqtypename;
	    if (seq.sq$del_item) {
	        i = Sk.abstr.fixSeqIndex_(seq, i);
	        seq.sq$del_item(i);
	        return;
	    }

	    seqtypename = Sk.abstr.typeName(seq);
	    throw new Sk.builtin.TypeError("'" + seqtypename + "' object does not support item deletion");
	};

	Sk.abstr.sequenceRepeat = function (f, seq, n) {
	    var ntypename;
	    var count;
	    n = Sk.builtin.asnum$(n);
	    count = Sk.misceval.asIndex(n);
	    if (count === undefined) {
	        ntypename = Sk.abstr.typeName(n);
	        throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + ntypename + "'");
	    }
	    return f.call(seq, n);
	};

	Sk.abstr.sequenceGetSlice = function (seq, i1, i2) {
	    var seqtypename;
	    if (seq.sq$slice) {
	        i1 = Sk.abstr.fixSeqIndex_(seq, i1);
	        i2 = Sk.abstr.fixSeqIndex_(seq, i2);
	        return seq.sq$slice(i1, i2);
	    } else if (seq.mp$subscript) {
	        return seq.mp$subscript(new Sk.builtin.slice(i1, i2));
	    }

	    seqtypename = Sk.abstr.typeName(seq);
	    throw new Sk.builtin.TypeError("'" + seqtypename + "' object is unsliceable");
	};

	Sk.abstr.sequenceDelSlice = function (seq, i1, i2) {
	    var seqtypename;
	    if (seq.sq$del_slice) {
	        i1 = Sk.abstr.fixSeqIndex_(seq, i1);
	        i2 = Sk.abstr.fixSeqIndex_(seq, i2);
	        seq.sq$del_slice(i1, i2);
	        return;
	    }

	    seqtypename = Sk.abstr.typeName(seq);
	    throw new Sk.builtin.TypeError("'" + seqtypename + "' doesn't support slice deletion");
	};

	Sk.abstr.sequenceSetSlice = function (seq, i1, i2, x) {
	    var seqtypename;
	    if (seq.sq$ass_slice) {
	        i1 = Sk.abstr.fixSeqIndex_(seq, i1);
	        i2 = Sk.abstr.fixSeqIndex_(seq, i2);
	        seq.sq$ass_slice(i1, i2, x);
	    } else if (seq.mp$ass_subscript) {
	        seq.mp$ass_subscript(new Sk.builtin.slice(i1, i2), x);
	    } else {
	        seqtypename = Sk.abstr.typeName(seq);
	        throw new Sk.builtin.TypeError("'" + seqtypename + "' object doesn't support slice assignment");
	    }
	};

	// seq - Python object to unpack
	// n   - JavaScript number of items to unpack
	Sk.abstr.sequenceUnpack = function (seq, n) {
	    var res = [];
	    var it, i;

	    if (!Sk.builtin.checkIterable(seq)) {
	        throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(seq) + "' object is not iterable");
	    }

	    for (it = Sk.abstr.iter(seq), i = it.tp$iternext();
	         (i !== undefined) && (res.length < n);
	         i = it.tp$iternext()) {
	        res.push(i);
	    }

	    if (res.length < n) {
	        throw new Sk.builtin.ValueError("need more than " + res.length + " values to unpack");
	    }
	    if (i !== undefined) {
	        throw new Sk.builtin.ValueError("too many values to unpack");
	    }

	    // Return Javascript array of items
	    return res;
	};

	//
	// Object
	//

	Sk.abstr.objectFormat = function (obj, format_spec) {
	    var meth; // PyObject
	    var result; // PyObject

	    // If no format_spec is provided, use an empty string
	    if(format_spec == null) {
	        format_spec = "";
	    }

	    // Find the (unbound!) __format__ method (a borrowed reference)
	    meth = Sk.abstr.lookupSpecial(obj, "__format__");
	    if (meth == null) {
	        throw new Sk.builtin.TypeError("Type " + Sk.abstr.typeName(obj) + "doesn't define __format__");
	    }

	    // And call it
	    result = Sk.misceval.callsim(meth, obj, format_spec);
	    if (!Sk.builtin.checkString(result)) {
	        throw new Sk.builtin.TypeError("__format__ must return a str, not " + Sk.abstr.typeName(result));
	    }

	    return result;
	};

	Sk.abstr.objectAdd = function (a, b) {
	    var btypename;
	    var atypename;
	    if (a.nb$add) {
	        return a.nb$add(b);
	    }

	    atypename = Sk.abstr.typeName(a);
	    btypename = Sk.abstr.typeName(b);
	    throw new Sk.builtin.TypeError("unsupported operand type(s) for +: '" + atypename + "' and '" + btypename + "'");
	};

	// in Python 2.6, this behaviour seems to be defined for numbers and bools (converts bool to int)
	Sk.abstr.objectNegative = function (obj) {
	    var objtypename;
	    var obj_asnum = Sk.builtin.asnum$(obj); // this will also convert bool type to int

	    if (obj instanceof Sk.builtin.bool) {
	        obj = new Sk.builtin.int_(obj_asnum);
	    }

	    if (obj.nb$negative) {
	        return obj.nb$negative();
	    }

	    objtypename = Sk.abstr.typeName(obj);
	    throw new Sk.builtin.TypeError("bad operand type for unary -: '" + objtypename + "'");
	};

	// in Python 2.6, this behaviour seems to be defined for numbers and bools (converts bool to int)
	Sk.abstr.objectPositive = function (obj) {
	    var objtypename = Sk.abstr.typeName(obj);
	    var obj_asnum = Sk.builtin.asnum$(obj); // this will also convert bool type to int

	    if (obj instanceof Sk.builtin.bool) {
	        obj = new Sk.builtin.int_(obj_asnum);
	    }

	    if (obj.nb$negative) {
	        return obj.nb$positive();
	    }

	    throw new Sk.builtin.TypeError("bad operand type for unary +: '" + objtypename + "'");
	};

	Sk.abstr.objectDelItem = function (o, key) {
	    var otypename;
	    var keytypename;
	    var keyValue;
	    if (o !== null) {
	        if (o.mp$del_subscript) {
	            o.mp$del_subscript(key);
	            return;
	        }
	        if (o.sq$ass_item) {
	            keyValue = Sk.misceval.asIndex(key);
	            if (keyValue === undefined) {
	                keytypename = Sk.abstr.typeName(key);
	                throw new Sk.builtin.TypeError("sequence index must be integer, not '" + keytypename + "'");
	            }
	            Sk.abstr.sequenceDelItem(o, keyValue);
	            return;
	        }
	        // if o is a slice do something else...
	    }

	    otypename = Sk.abstr.typeName(o);
	    throw new Sk.builtin.TypeError("'" + otypename + "' object does not support item deletion");
	};
	goog.exportSymbol("Sk.abstr.objectDelItem", Sk.abstr.objectDelItem);

	Sk.abstr.objectGetItem = function (o, key, canSuspend) {
	    var otypename;
	    if (o !== null) {
	        if (o.tp$getitem) {
	            return o.tp$getitem(key, canSuspend);
	        } else if (o.mp$subscript) {
	            return o.mp$subscript(key, canSuspend);
	        } else if (Sk.misceval.isIndex(key) && o.sq$item) {
	            return Sk.abstr.sequenceGetItem(o, Sk.misceval.asIndex(key), canSuspend);
	        }
	    }

	    otypename = Sk.abstr.typeName(o);
	    throw new Sk.builtin.TypeError("'" + otypename + "' does not support indexing");
	};
	goog.exportSymbol("Sk.abstr.objectGetItem", Sk.abstr.objectGetItem);

	Sk.abstr.objectSetItem = function (o, key, v, canSuspend) {
	    var otypename;
	    if (o !== null) {
	        if (o.tp$setitem) {
	            return o.tp$setitem(key, v, canSuspend);
	        } else if (o.mp$ass_subscript) {
	            return o.mp$ass_subscript(key, v, canSuspend);
	        } else if (Sk.misceval.isIndex(key) && o.sq$ass_item) {
	            return Sk.abstr.sequenceSetItem(o, Sk.misceval.asIndex(key), v, canSuspend);
	        }
	    }

	    otypename = Sk.abstr.typeName(o);
	    throw new Sk.builtin.TypeError("'" + otypename + "' does not support item assignment");
	};
	goog.exportSymbol("Sk.abstr.objectSetItem", Sk.abstr.objectSetItem);


	Sk.abstr.gattr = function (obj, nameJS, canSuspend) {
	    var ret, f;
	    var objname = Sk.abstr.typeName(obj);

	    if (obj === null) {
	        throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + nameJS + "'");
	    }

	    if (obj.tp$getattr !== undefined) {
	        ret = obj.tp$getattr(nameJS, canSuspend);
	    }

	    ret = Sk.misceval.chain(ret, function(r) {
	        if (r === undefined) {
	            throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + nameJS + "'");
	        }
	        return r;
	    });

	    return canSuspend ? ret : Sk.misceval.retryOptionalSuspensionOrThrow(ret);
	};
	goog.exportSymbol("Sk.abstr.gattr", Sk.abstr.gattr);


	Sk.abstr.sattr = function (obj, nameJS, data, canSuspend) {
	    var objname = Sk.abstr.typeName(obj), r, setf;

	    if (obj === null) {
	        throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + nameJS + "'");
	    }

	    if (obj.tp$setattr !== undefined) {
	        return obj.tp$setattr(nameJS, data, canSuspend);
	    } else {
	        throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + nameJS + "'");
	    }
	};
	goog.exportSymbol("Sk.abstr.sattr", Sk.abstr.sattr);


	Sk.abstr.iternext = function (it, canSuspend) {
	    return it.tp$iternext(canSuspend);
	};
	goog.exportSymbol("Sk.abstr.iternext", Sk.abstr.iternext);


	/**
	 * Get the iterator for a Python object  This iterator could be one of the following.
	 * This is the preferred mechanism for consistently getting the correct iterator.  You should
	 * not just use tp$iter because that could lead to incorrect behavior of a user created class.
	 *
	 * - tp$iter
	 * - A user defined `__iter__` method
	 * - A user defined `__getitem__` method
	 *
	 * @param obj
	 *
	 * @throws {Sk.builtin.TypeError}
	 * @returns {Object}
	 */

	Sk.abstr.iter = function(obj) {
	    var iter;
	    var getit;
	    var ret;

	    /**
	     * Builds an iterator around classes that have a __getitem__ method.
	     *
	     * @constructor
	     */
	    var seqIter = function (obj) {
	        this.idx = 0;
	        this.myobj = obj;
	        this.getitem = Sk.abstr.lookupSpecial(obj, "__getitem__");
	        this.tp$iternext = function () {
	            var ret;
	            try {
	                ret = Sk.misceval.callsim(this.getitem, this.myobj, Sk.ffi.remapToPy(this.idx));
	            } catch (e) {
	                if (e instanceof Sk.builtin.IndexError || e instanceof Sk.builtin.StopIteration) {
	                    return undefined;
	                } else {
	                    throw e;
	                }
	            }
	            this.idx++;
	            return ret;
	        };
	    };

	    if (obj.tp$getattr) {
	        iter =  Sk.abstr.lookupSpecial(obj,"__iter__");
	        if (iter) {
	            ret = Sk.misceval.callsim(iter, obj);
	            if (ret.tp$iternext) {
	                return ret;
	            }
	        }
	    }
	    if (obj.tp$iter) {
	        try {  // catch and ignore not iterable error here.
	            ret = obj.tp$iter();
	            if (ret.tp$iternext) {
	                return ret;
	            }
	        } catch (e) { }
	    }
	    getit = Sk.abstr.lookupSpecial(obj, "__getitem__");
	    if (getit) {
	        // create internal iterobject if __getitem__
	        return new seqIter(obj);
	    }
	    throw new Sk.builtin.TypeError("'" + Sk.abstr.typeName(obj) + "' object is not iterable");
	};
	goog.exportSymbol("Sk.abstr.iter", Sk.abstr.iter);

	/**
	 * Special method look up. First try getting the method via
	 * internal dict and getattr. If getattr is not present (builtins)
	 * try if method is defined on the object itself
	 *
	 * @returns {null|Object} Return null if not found or the function
	 */
	Sk.abstr.lookupSpecial = function(op, str) {
	    var res;
	    var obtp;
	    if (op.ob$type) {
	        obtp = op.ob$type;
	    } else {
	        return null;
	    }

	    return Sk.builtin.type.typeLookup(obtp, str);
	};
	goog.exportSymbol("Sk.abstr.lookupSpecial", Sk.abstr.lookupSpecial);

	/**
	 * Mark a class as unhashable and prevent its `__hash__` function from being called.
	 * @param  {function(...[?])} thisClass The class to mark as unhashable.
	 * @return {undefined}
	 */
	Sk.abstr.markUnhashable = function (thisClass) {
	    var proto = thisClass.prototype;
	    proto.__hash__ = Sk.builtin.none.none$;
	    proto.tp$hash = Sk.builtin.none.none$;
	};

	/**
	 * Set up inheritance between two Python classes. This allows only for single
	 * inheritance -- multiple inheritance is not supported by Javascript.
	 *
	 * Javascript's inheritance is prototypal. This means that properties must
	 * be defined on the superclass' prototype in order for subclasses to inherit
	 * them.
	 *
	 * ```
	 * Sk.superclass.myProperty                 # will NOT be inherited
	 * Sk.superclass.prototype.myProperty       # will be inherited
	 * ```
	 *
	 * In order for a class to be subclassable, it must (directly or indirectly)
	 * inherit from Sk.builtin.object so that it will be properly initialized in
	 * {@link Sk.doOneTimeInitialization} (in src/import.js). Further, all Python
	 * builtins should inherit from Sk.builtin.object.
	 *
	 * @param {string} childName The Python name of the child (subclass).
	 * @param {function(...[?])} child     The subclass.
	 * @param {function(...[?])} parent    The superclass.
	 * @return {undefined}
	 */
	Sk.abstr.setUpInheritance = function (childName, child, parent) {
	    goog.inherits(child, parent);
	    child.prototype.tp$base = parent;
	    child.prototype.tp$name = childName;
	    child.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj(childName, child);
	};

	/**
	 * Call the super constructor of the provided class, with the object `self` as
	 * the `this` value of that constructor. Any arguments passed to this function
	 * after `self` will be passed as-is to the constructor.
	 *
	 * @param  {function(...[?])} thisClass The subclass.
	 * @param  {Object} self      The instance of the subclas.
	 * @param  {...?} args Arguments to pass to the constructor.
	 * @return {undefined}
	 */
	Sk.abstr.superConstructor = function (thisClass, self, args) {
	    var argumentsForConstructor = Array.prototype.slice.call(arguments, 2);
	    thisClass.prototype.tp$base.apply(self, argumentsForConstructor);
	};



	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/src/object.js ---- */ 

	/**
	 * @constructor
	 * Sk.builtin.object
	 *
	 * @description
	 * Constructor for Python object. All Python classes (builtin and user-defined)
	 * should inherit from this class.
	 *
	 * @return {Sk.builtin.object} Python object
	 */
	Sk.builtin.object = function () {
	    if (!(this instanceof Sk.builtin.object)) {
	        return new Sk.builtin.object();
	    }

	    return this;
	};



	var _tryGetSubscript = function(dict, pyName) {
	    try {
	        return dict.mp$subscript(pyName);
	    } catch (x) {
	        return undefined;
	    }
	};

	/**
	 * Get an attribute
	 * @param {string} name JS name of the attribute
	 * @param {boolean=} canSuspend Can we return a suspension?
	 * @return {undefined}
	 */
	Sk.builtin.object.prototype.GenericGetAttr = function (name, canSuspend) {
	    var res;
	    var f;
	    var descr;
	    var tp;
	    var dict;
	    var pyName = new Sk.builtin.str(name);
	    goog.asserts.assert(typeof name === "string");

	    tp = this.ob$type;
	    goog.asserts.assert(tp !== undefined, "object has no ob$type!");

	    dict = this["$d"] || this.constructor["$d"];

	    // todo; assert? force?
	    if (dict) {
	        if (dict.mp$lookup) {
	            res = dict.mp$lookup(pyName);
	        } else if (dict.mp$subscript) {
	            res = _tryGetSubscript(dict, pyName);
	        } else if (typeof dict === "object") {
	            // todo; definitely the wrong place for this. other custom tp$getattr won't work on object -- bnm -- implemented custom __getattr__ in abstract.js
	            res = dict[name];
	        }
	        if (res !== undefined) {
	            return res;
	        }
	    }

	    descr = Sk.builtin.type.typeLookup(tp, name);

	    // otherwise, look in the type for a descr
	    if (descr !== undefined && descr !== null) {
	        f = descr.tp$descr_get;
	        // todo - data descriptors (ie those with tp$descr_set too) get a different lookup priority

	        if (f) {
	            // non-data descriptor
	            return f.call(descr, this, this.ob$type, canSuspend);
	        }
	    }

	    if (descr !== undefined) {
	        return descr;
	    }

	    return undefined;
	};
	goog.exportSymbol("Sk.builtin.object.prototype.GenericGetAttr", Sk.builtin.object.prototype.GenericGetAttr);

	Sk.builtin.object.prototype.GenericPythonGetAttr = function(self, name) {
	    return Sk.builtin.object.prototype.GenericGetAttr.call(self, name.v);
	};
	goog.exportSymbol("Sk.builtin.object.prototype.GenericPythonGetAttr", Sk.builtin.object.prototype.GenericPythonGetAttr);

	/**
	 * @param {string} name
	 * @param {undefined} value
	 * @param {boolean=} canSuspend
	 * @return {undefined}
	 */
	Sk.builtin.object.prototype.GenericSetAttr = function (name, value, canSuspend) {
	    var objname = Sk.abstr.typeName(this);
	    var pyname;
	    var dict;
	    var tp = this.ob$type;
	    var descr;
	    var f;

	    goog.asserts.assert(typeof name === "string");
	    goog.asserts.assert(tp !== undefined, "object has no ob$type!");

	    dict = this["$d"] || this.constructor["$d"];

	    descr = Sk.builtin.type.typeLookup(tp, name);

	    // otherwise, look in the type for a descr
	    if (descr !== undefined && descr !== null) {
	        f = descr.tp$descr_set;
	        // todo; is this the right lookup priority for data descriptors?
	        if (f) {
	            return f.call(descr, this, value, canSuspend);
	        }
	    }

	    if (dict.mp$ass_subscript) {
	        pyname = new Sk.builtin.str(name);

	        if (this instanceof Sk.builtin.object && !(this.ob$type.sk$klass) &&
	            dict.mp$lookup(pyname) === undefined) {
	            // Cannot add new attributes to a builtin object
	            throw new Sk.builtin.AttributeError("'" + objname + "' object has no attribute '" + Sk.unfixReserved(name) + "'");
	        }
	        dict.mp$ass_subscript(new Sk.builtin.str(name), value);
	    } else if (typeof dict === "object") {
	        dict[name] = value;
	    }
	};
	goog.exportSymbol("Sk.builtin.object.prototype.GenericSetAttr", Sk.builtin.object.prototype.GenericSetAttr);

	Sk.builtin.object.prototype.GenericPythonSetAttr = function(self, name, value) {
	    return Sk.builtin.object.prototype.GenericSetAttr.call(self, name.v, value);
	};
	goog.exportSymbol("Sk.builtin.object.prototype.GenericPythonSetAttr", Sk.builtin.object.prototype.GenericPythonSetAttr);

	Sk.builtin.object.prototype.HashNotImplemented = function () {
	    throw new Sk.builtin.TypeError("unhashable type: '" + Sk.abstr.typeName(this) + "'");
	};

	Sk.builtin.object.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
	Sk.builtin.object.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;

	// Although actual attribute-getting happens in pure Javascript via tp$getattr, classes
	// overriding __getattr__ etc need to be able to call object.__getattr__ etc from Python
	Sk.builtin.object.prototype["__getattr__"] = Sk.builtin.object.prototype.GenericPythonGetAttr;
	Sk.builtin.object.prototype["__setattr__"] = Sk.builtin.object.prototype.GenericPythonSetAttr;

	/**
	 * The name of this class.
	 * @type {string}
	 */
	Sk.builtin.object.prototype.tp$name = "object";

	/**
	 * The type object of this class.
	 * @type {Sk.builtin.type}
	 */
	Sk.builtin.object.prototype.ob$type = Sk.builtin.type.makeIntoTypeObj("object", Sk.builtin.object);
	Sk.builtin.object.prototype.ob$type.sk$klass = undefined;   // Nonsense for closure compiler
	Sk.builtin.object.prototype.tp$descr_set = undefined;   // Nonsense for closure compiler

	/** Default implementations of dunder methods found in all Python objects */
	/**
	 * Default implementation of __new__ just calls the class constructor
	 * @name  __new__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__new__"] = function (cls) {
	    Sk.builtin.pyCheckArgs("__new__", arguments, 1, 1, false, false);

	    return new cls([], []);
	};

	/**
	 * Python wrapper for `__repr__` method.
	 * @name  __repr__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__repr__"] = function (self) {
	    Sk.builtin.pyCheckArgs("__repr__", arguments, 0, 0, false, true);

	    return self["$r"]();
	};

	/**
	 * Python wrapper for `__str__` method.
	 * @name  __str__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__str__"] = function (self) {
	    Sk.builtin.pyCheckArgs("__str__", arguments, 0, 0, false, true);

	    return self["$r"]();
	};

	/**
	 * Python wrapper for `__hash__` method.
	 * @name  __hash__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__hash__"] = function (self) {
	    Sk.builtin.pyCheckArgs("__hash__", arguments, 0, 0, false, true);

	    return self.tp$hash();
	};

	/**
	 * Python wrapper for `__eq__` method.
	 * @name  __eq__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__eq__"] = function (self, other) {
	    Sk.builtin.pyCheckArgs("__eq__", arguments, 1, 1, false, true);

	    return self.ob$eq(other);
	};

	/**
	 * Python wrapper for `__ne__` method.
	 * @name  __ne__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__ne__"] = function (self, other) {
	    Sk.builtin.pyCheckArgs("__ne__", arguments, 1, 1, false, true);

	    return self.ob$ne(other);
	};

	/**
	 * Python wrapper for `__lt__` method.
	 * @name  __lt__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__lt__"] = function (self, other) {
	    Sk.builtin.pyCheckArgs("__lt__", arguments, 1, 1, false, true);

	    return self.ob$lt(other);
	};

	/**
	 * Python wrapper for `__le__` method.
	 * @name  __le__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__le__"] = function (self, other) {
	    Sk.builtin.pyCheckArgs("__le__", arguments, 1, 1, false, true);

	    return self.ob$le(other);
	};

	/**
	 * Python wrapper for `__gt__` method.
	 * @name  __gt__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__gt__"] = function (self, other) {
	    Sk.builtin.pyCheckArgs("__gt__", arguments, 1, 1, false, true);

	    return self.ob$gt(other);
	};

	/**
	 * Python wrapper for `__ge__` method.
	 * @name  __ge__
	 * @memberOf Sk.builtin.object.prototype
	 * @instance
	 */
	Sk.builtin.object.prototype["__ge__"] = function (self, other) {
	    Sk.builtin.pyCheckArgs("__ge__", arguments, 1, 1, false, true);

	    return self.ob$ge(other);
	};

	/** Default implementations of Javascript functions used in dunder methods */

	/**
	 * Return the string representation of this instance.
	 *
	 * Javascript function, returns Python object.
	 *
	 * @name  $r
	 * @memberOf Sk.builtin.object.prototype
	 * @return {Sk.builtin.str} The Python string representation of this instance.
	 */
	Sk.builtin.object.prototype["$r"] = function () {
	    return new Sk.builtin.str("<object>");
	};

	Sk.builtin.hashCount = 1;
	Sk.builtin.idCount = 1;

	/**
	 * Return the hash value of this instance.
	 *
	 * Javascript function, returns Python object.
	 *
	 * @return {Sk.builtin.int_} The hash value
	 */
	Sk.builtin.object.prototype.tp$hash = function () {
	    if (!this.$savedHash_) {
	        this.$savedHash_ = new Sk.builtin.int_(Sk.builtin.hashCount++);
	    }

	    return this.$savedHash_;
	};

	/**
	 * Perform equality check between this instance and a Python object (i.e. this == other).
	 *
	 * Implements `__eq__` dunder method.
	 *
	 * Javascript function, returns Python object.
	 *
	 * @param  {Object} other The Python object to check for equality.
	 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if equal, false otherwise
	 */
	Sk.builtin.object.prototype.ob$eq = function (other) {
	    if (this === other) {
	        return Sk.builtin.bool.true$;
	    }

	    return Sk.builtin.NotImplemented.NotImplemented$;
	};

	/**
	 * Perform non-equality check between this instance and a Python object (i.e. this != other).
	 *
	 * Implements `__ne__` dunder method.
	 *
	 * Javascript function, returns Python object.
	 *
	 * @param  {Object} other The Python object to check for non-equality.
	 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if not equal, false otherwise
	 */
	Sk.builtin.object.prototype.ob$ne = function (other) {
	    if (this === other) {
	        return Sk.builtin.bool.false$;
	    }

	    return Sk.builtin.NotImplemented.NotImplemented$;
	};

	/**
	 * Determine if this instance is less than a Python object (i.e. this < other).
	 *
	 * Implements `__lt__` dunder method.
	 *
	 * Javascript function, returns Python object.
	 *
	 * @param  {Object} other The Python object to compare.
	 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if this < other, false otherwise
	 */
	Sk.builtin.object.prototype.ob$lt = function (other) {
	    return Sk.builtin.NotImplemented.NotImplemented$;
	};

	/**
	 * Determine if this instance is less than or equal to a Python object (i.e. this <= other).
	 *
	 * Implements `__le__` dunder method.
	 *
	 * Javascript function, returns Python object.
	 *
	 * @param  {Object} other The Python object to compare.
	 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if this <= other, false otherwise
	 */
	Sk.builtin.object.prototype.ob$le = function (other) {
	    return Sk.builtin.NotImplemented.NotImplemented$;
	};

	/**
	 * Determine if this instance is greater than a Python object (i.e. this > other).
	 *
	 * Implements `__gt__` dunder method.
	 *
	 * Javascript function, returns Python object.
	 *
	 * @param  {Object} other The Python object to compare.
	 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if this > other, false otherwise
	 */
	Sk.builtin.object.prototype.ob$gt = function (other) {
	    return Sk.builtin.NotImplemented.NotImplemented$;
	};

	/**
	 * Determine if this instance is greater than or equal to a Python object (i.e. this >= other).
	 *
	 * Implements `__ge__` dunder method.
	 *
	 * Javascript function, returns Python object.
	 *
	 * @param  {Object} other The Python object to compare.
	 * @return {(Sk.builtin.bool|Sk.builtin.NotImplemented)} true if this >= other, false otherwise
	 */
	Sk.builtin.object.prototype.ob$ge = function (other) {
	    return Sk.builtin.NotImplemented.NotImplemented$;
	};

	// Wrap the following functions in Sk.builtin.func once that class is initialized
	/**
	 * Array of all the Python functions which are methods of this class.
	 * @type {Array}
	 */
	Sk.builtin.object.pythonFunctions = ["__repr__", "__str__", "__hash__",
	"__eq__", "__ne__", "__lt__", "__le__", "__gt__", "__ge__", "__getattr__", "__setattr__"];

	/**
	 * @constructor
	 * Sk.builtin.none
	 *
	 * @extends {Sk.builtin.object}
	 */
	Sk.builtin.none = function () {
	    this.v = null;
	};
	Sk.abstr.setUpInheritance("NoneType", Sk.builtin.none, Sk.builtin.object);

	/** @override */
	Sk.builtin.none.prototype["$r"] = function () { return new Sk.builtin.str("None"); };

	/** @override */
	Sk.builtin.none.prototype.tp$hash = function () {
	    return new Sk.builtin.int_(0);
	};

	/**
	 * Python None constant.
	 * @type {Sk.builtin.none}
	 */
	Sk.builtin.none.none$ = new Sk.builtin.none();

	/**
	 * @constructor
	 * Sk.builtin.NotImplemented
	 *
	 * @extends {Sk.builtin.object}
	 */
	Sk.builtin.NotImplemented = function() { };
	Sk.abstr.setUpInheritance("NotImplementedType", Sk.builtin.NotImplemented, Sk.builtin.object);

	/** @override */
	Sk.builtin.NotImplemented.prototype["$r"] = function () { return new Sk.builtin.str("NotImplemented"); };

	/**
	 * Python NotImplemented constant.
	 * @type {Sk.builtin.NotImplemented}
	 */
	Sk.builtin.NotImplemented.NotImplemented$ = new Sk.builtin.NotImplemented();

	goog.exportSymbol("Sk.builtin.none", Sk.builtin.none);
	goog.exportSymbol("Sk.builtin.NotImplemented", Sk.builtin.NotImplemented);



	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/src/function.js ---- */ 

	/**
	 * @namespace Sk.builtin
	 */


	/**
	 * Check arguments to Python functions to ensure the correct number of
	 * arguments are passed.
	 *
	 * @param {string} name the name of the function
	 * @param {Object} args the args passed to the function
	 * @param {number} minargs the minimum number of allowable arguments
	 * @param {number=} maxargs optional maximum number of allowable
	 * arguments (default: Infinity)
	 * @param {boolean=} kwargs optional true if kwargs, false otherwise
	 * (default: false)
	 * @param {boolean=} free optional true if free vars, false otherwise
	 * (default: false)
	 */
	Sk.builtin.pyCheckArgs = function (name, args, minargs, maxargs, kwargs, free) {
	    var nargs = args.length;
	    var msg = "";

	    if (maxargs === undefined) {
	        maxargs = Infinity;
	    }
	    if (kwargs) {
	        nargs -= 1;
	    }
	    if (free) {
	        nargs -= 1;
	    }
	    if ((nargs < minargs) || (nargs > maxargs)) {
	        if (minargs === maxargs) {
	            msg = name + "() takes exactly " + minargs + " arguments";
	        } else if (nargs < minargs) {
	            msg = name + "() takes at least " + minargs + " arguments";
	        } else {
	            msg = name + "() takes at most " + maxargs + " arguments";
	        }
	        msg += " (" + nargs + " given)";
	        throw new Sk.builtin.TypeError(msg);
	    }
	};
	goog.exportSymbol("Sk.builtin.pyCheckArgs", Sk.builtin.pyCheckArgs);

	/**
	 * Check type of argument to Python functions.
	 *
	 * @param {string} name the name of the argument
	 * @param {string} exptype string of the expected type name
	 * @param {boolean} check truthy if type check passes, falsy otherwise
	 */
	Sk.builtin.pyCheckType = function (name, exptype, check) {
	    if (!check) {
	        throw new Sk.builtin.TypeError(name + " must be a " + exptype);
	    }
	};
	goog.exportSymbol("Sk.builtin.pyCheckType", Sk.builtin.pyCheckType);

	Sk.builtin.checkSequence = function (arg) {
	    return (arg !== null && arg.mp$subscript !== undefined);
	};
	goog.exportSymbol("Sk.builtin.checkSequence", Sk.builtin.checkSequence);

	/**
	 * Use this to test whether or not a Python object is iterable.  You should **not** rely
	 * on the presence of tp$iter on the object as a good test, as it could be a user defined
	 * class with `__iter__` defined or ``__getitem__``  This tests for all of those cases
	 *
	 * @param arg {Object}   A Python object
	 * @returns {boolean} true if the object is iterable
	 */
	Sk.builtin.checkIterable = function (arg) {
	    var ret = false;
	    if (arg !== null ) {
	        try {
	            ret = Sk.abstr.iter(arg);
	            if (ret) {
	                return true;
	            } else {
	                return false;
	            }
	        } catch (e) {
	            if (e instanceof Sk.builtin.TypeError) {
	                return false;
	            } else {
	                throw e;
	            }
	        }
	    }
	    return ret;
	};
	goog.exportSymbol("Sk.builtin.checkIterable", Sk.builtin.checkIterable);

	Sk.builtin.checkCallable = function (obj) {
	    // takes care of builtin functions and methods, builtins
	    if (typeof obj === "function") {
	        return true;
	    }
	    // takes care of python function, methods and lambdas
	    if (obj instanceof Sk.builtin.func) {
	        return true;
	    }
	    // takes care of instances of methods
	    if (obj instanceof Sk.builtin.method) {
	        return true;
	    }
	    // go up the prototype chain to see if the class has a __call__ method
	    if (Sk.abstr.lookupSpecial(obj, "__call__") !== undefined) {
	        return true;
	    } 
	    return false;
	};

	Sk.builtin.checkNumber = function (arg) {
	    return (arg !== null && (typeof arg === "number" ||
	        arg instanceof Sk.builtin.int_ ||
	        arg instanceof Sk.builtin.float_ ||
	        arg instanceof Sk.builtin.lng));
	};
	goog.exportSymbol("Sk.builtin.checkNumber", Sk.builtin.checkNumber);

	/**
	 * Checks for complex type, delegates to internal method
	 * Most skulpt users would search here!
	 */
	Sk.builtin.checkComplex = function (arg) {
	    return Sk.builtin.complex._complex_check(arg);
	};
	goog.exportSymbol("Sk.builtin.checkComplex", Sk.builtin.checkComplex);

	Sk.builtin.checkInt = function (arg) {
	    return (arg !== null) && ((typeof arg === "number" && arg === (arg | 0)) ||
	        arg instanceof Sk.builtin.int_ ||
	        arg instanceof Sk.builtin.lng);
	};
	goog.exportSymbol("Sk.builtin.checkInt", Sk.builtin.checkInt);

	Sk.builtin.checkFloat = function (arg) {
	    return (arg !== null) && (arg instanceof Sk.builtin.float_);
	};
	goog.exportSymbol("Sk.builtin.checkFloat", Sk.builtin.checkFloat);

	Sk.builtin.checkString = function (arg) {
	    return (arg !== null && arg.__class__ == Sk.builtin.str);
	};
	goog.exportSymbol("Sk.builtin.checkString", Sk.builtin.checkString);

	Sk.builtin.checkClass = function (arg) {
	    return (arg !== null && arg.sk$type);
	};
	goog.exportSymbol("Sk.builtin.checkClass", Sk.builtin.checkClass);

	Sk.builtin.checkBool = function (arg) {
	    return (arg instanceof Sk.builtin.bool);
	};
	goog.exportSymbol("Sk.builtin.checkBool", Sk.builtin.checkBool);

	Sk.builtin.checkNone = function (arg) {
	    return (arg instanceof Sk.builtin.none);
	};
	goog.exportSymbol("Sk.builtin.checkNone", Sk.builtin.checkNone);

	Sk.builtin.checkFunction = function (arg) {
	    return (arg !== null && arg.tp$call !== undefined);
	};
	goog.exportSymbol("Sk.builtin.checkFunction", Sk.builtin.checkFunction);

	/**
	 * @constructor
	 * Sk.builtin.func
	 *
	 * @description
	 * This function converts a Javascript function into a Python object that is callable.  Or just
	 * think of it as a Python function rather than a Javascript function now.  This is an important
	 * distinction in skulpt because once you have Python function you cannot just call it.
	 * You must now use Sk.misceval.callsim to call the Python function.
	 *
	 * @param {Function} code the javascript implementation of this function
	 * @param {Object=} globals the globals where this function was defined.
	 * Can be undefined (which will be stored as null) for builtins. (is
	 * that ok?)
	 * @param {Object=} closure dict of free variables
	 * @param {Object=} closure2 another dict of free variables that will be
	 * merged into 'closure'. there's 2 to simplify generated code (one is $free,
	 * the other is $cell)
	 *
	 * closure is the cell variables from the parent scope that we need to close
	 * over. closure2 is the free variables in the parent scope that we also might
	 * need to access.
	 *
	 * NOTE: co_varnames and co_name are defined by compiled code only, so we have
	 * to access them via dict-style lookup for closure.
	 *
	 */
	Sk.builtin.func = function (code, globals, closure, closure2) {
	    var k;
	    this.func_code = code;
	    this.func_globals = globals || null;
	    if (closure2 !== undefined) {
	        // todo; confirm that modification here can't cause problems
	        for (k in closure2) {
	            closure[k] = closure2[k];
	        }
	    }
	    this.func_closure = closure;
	    return this;
	};
	goog.exportSymbol("Sk.builtin.func", Sk.builtin.func);


	Sk.builtin.func.prototype.tp$name = "function";
	Sk.builtin.func.prototype.tp$descr_get = function (obj, objtype) {
	    goog.asserts.assert(obj !== undefined && objtype !== undefined);
	    if (obj === Sk.builtin.none.none$) {
	        return this;
	    }
	    return new Sk.builtin.method(this, obj, objtype);
	};
	Sk.builtin.func.prototype.tp$call = function (args, kw) {
	    var j;
	    var i;
	    var numvarnames;
	    var varnames;
	    var kwlen;
	    var kwargsarr;
	    var expectskw;
	    var name;
	    var numargs;

	    expectskw = this.func_code["co_kwargs"];
	    kwargsarr = [];

	    if (this.func_code["no_kw"] && kw) {
	        name = (this.func_code && this.func_code["co_name"] && this.func_code["co_name"].v) || "<native JS>";
	        throw new Sk.builtin.TypeError(name + "() takes no keyword arguments");
	    }

	    if (kw) {
	        // bind the kw args
	        kwlen = kw.length;
	        varnames = this.func_code["co_varnames"];
	        numvarnames = varnames && varnames.length;
	        for (i = 0; i < kwlen; i += 2) {
	            // todo; make this a dict mapping name to offset
	            for (j = 0; j < numvarnames; ++j) {
	                if (kw[i] === varnames[j]) {
	                    break;
	                }
	            }
	            if (varnames && j !== numvarnames) {
	                if (j in args) {
	                    name = (this.func_code && this.func_code["co_name"] && this.func_code["co_name"].v) || "<native JS>";
	                    throw new Sk.builtin.TypeError(name + "() got multiple values for keyword argument '" + kw[i] + "'");
	                }
	                args[j] = kw[i + 1];
	            } else if (expectskw) {
	                // build kwargs dict
	                kwargsarr.push(new Sk.builtin.str(kw[i]));
	                kwargsarr.push(kw[i + 1]);
	            } else {
	                name = (this.func_code && this.func_code["co_name"] && this.func_code["co_name"].v) || "<native JS>";
	                throw new Sk.builtin.TypeError(name + "() got an unexpected keyword argument '" + kw[i] + "'");
	            }
	        }
	    }

	    if (this.func_closure) {
	        // todo; OK to modify?
	        if (this.func_code["co_varnames"]) {
	            // Make sure all default arguments are in args before adding closure
	            numargs = args.length;
	            numvarnames = this.func_code["co_varnames"].length;
	            for (i = numargs; i < numvarnames; i++) {
	                args.push(undefined);
	            }
	        }

	        args.push(this.func_closure);
	    }

	    if (expectskw) {
	        args.unshift(kwargsarr);
	    }

	    //print(JSON.stringify(args, null, 2));

	    // note: functions expect 'this' to be globals to avoid having to
	    // slice/unshift onto the main args
	    return this.func_code.apply(this.func_globals, args);
	};

	Sk.builtin.func.prototype.tp$getattr = function (key) {
	    return this[key];
	};
	Sk.builtin.func.prototype.tp$setattr = function (key, value) {
	    this[key] = value;
	};

	//todo; investigate why the other doesn't work
	//Sk.builtin.type.makeIntoTypeObj('function', Sk.builtin.func);
	Sk.builtin.func.prototype.ob$type = Sk.builtin.type.makeTypeObj("function", new Sk.builtin.func(null, null));

	Sk.builtin.func.prototype["$r"] = function () {
	    var name = (this.func_code && this.func_code["co_name"] && this.func_code["co_name"].v) || "<native JS>";
	    return new Sk.builtin.str("<function " + name + ">");
	};



	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/src/seqtype.js ---- */ 

	/**
	 * @constructor
	 * Sk.builtin.seqtype
	 *
	 * @description
	 * Abstract class for Python sequence types.
	 *
	 * @extends {Sk.builtin.object}
	 *
	 * @return {undefined} Cannot instantiate a Sk.builtin.seqtype object
	 */
	Sk.builtin.seqtype = function () {

	    throw new Sk.builtin.ExternalError("Cannot instantiate abstract Sk.builtin.seqtype class");

	};

	Sk.abstr.setUpInheritance("SequenceType", Sk.builtin.seqtype, Sk.builtin.object);

	Sk.builtin.seqtype.sk$abstract = true;

	/**
	 * Python wrapper of `__len__` method.
	 *
	 * @name  __len__
	 * @instance
	 * @memberOf Sk.builtin.seqtype.prototype
	 */
	Sk.builtin.seqtype.prototype["__len__"] = new Sk.builtin.func(function (self) {

	    Sk.builtin.pyCheckArgs("__len__", arguments, 0, 0, false, true);

	    return new Sk.builtin.int_(self.sq$length());    

	});

	/**
	 * Python wrapper of `__iter__` method.
	 *
	 * @name  __iter__
	 * @instance
	 * @memberOf Sk.builtin.seqtype.prototype
	 */
	Sk.builtin.seqtype.prototype["__iter__"] = new Sk.builtin.func(function (self) {

	    Sk.builtin.pyCheckArgs("__iter__", arguments, 0, 0, false, true);

	    return self.tp$iter();

	});

	/**
	 * Python wrapper of `__contains__` method.
	 *
	 * @name  __contains__
	 * @instance
	 * @memberOf Sk.builtin.seqtype.prototype
	 */
	Sk.builtin.seqtype.prototype["__contains__"] = new Sk.builtin.func(function (self, item) {

	    Sk.builtin.pyCheckArgs("__contains__", arguments, 1, 1, false, true);

	    if (self.sq$contains(item)) {
	        return Sk.builtin.bool.true$;
	    } else {
	        return Sk.builtin.bool.false$;
	    }

	});

	/**
	 * Python wrapper of `__getitem__` method.
	 *
	 * @name  __getitem__
	 * @instance
	 * @memberOf Sk.builtin.seqtype.prototype
	 */
	Sk.builtin.seqtype.prototype["__getitem__"] = new Sk.builtin.func(function (self, key) {

	    Sk.builtin.pyCheckArgs("__getitem__", arguments, 1, 1, false, true);

	    return self.mp$subscript(key);

	});

	/**
	 * Python wrapper of `__add__` method.
	 *
	 * @name  __add__
	 * @instance
	 * @memberOf Sk.builtin.seqtype.prototype
	 */
	Sk.builtin.seqtype.prototype["__add__"] = new Sk.builtin.func(function (self, other) {

	    Sk.builtin.pyCheckArgs("__add__", arguments, 1, 1, false, true);

	    return self.sq$concat(other);

	});

	/**
	 * Python wrapper of `__mul__` method.
	 *
	 * @name  __mul__
	 * @instance
	 * @memberOf Sk.builtin.seqtype.prototype
	 */
	Sk.builtin.seqtype.prototype["__mul__"] = new Sk.builtin.func(function (self, n) {

	    Sk.builtin.pyCheckArgs("__mul__", arguments, 1, 1, false, true);

	    if (!Sk.misceval.isIndex(n)) {
	        throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(n) + "'");
	    }

	    return self.sq$repeat(n);

	});

	/**
	 * Python wrapper of `__rmul__` method.
	 *
	 * @name  __rmul__
	 * @instance
	 * @memberOf Sk.builtin.seqtype.prototype
	 */
	Sk.builtin.seqtype.prototype["__rmul__"] = new Sk.builtin.func(function (self, n) {

	    Sk.builtin.pyCheckArgs("__rmul__", arguments, 1, 1, false, true);

	    return self.sq$repeat(n);    

	});



	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/src/str.js ---- */ 

	Sk.builtin.interned = {};

	/**
	 * @constructor
	 * @param {*} x
	 * @extends Sk.builtin.object
	 */
	Sk.builtin.str = function (x) {
	    var ret;
	    if (x === undefined) {
	        x = "";
	    }
	    if (x instanceof Sk.builtin.str) {
	        return x;
	    }
	    if (!(this instanceof Sk.builtin.str)) {
	        return new Sk.builtin.str(x);
	    }


	    // convert to js string
	    if (x === true) {
	        ret = "True";
	    } else if (x === false) {
	        ret = "False";
	    } else if ((x === null) || (x instanceof Sk.builtin.none)) {
	        ret = "None";
	    } else if (x instanceof Sk.builtin.bool) {
	        if (x.v) {
	            ret = "True";
	        } else {
	            ret = "False";
	        }
	    } else if (typeof x === "number") {
	        ret = x.toString();
	        if (ret === "Infinity") {
	            ret = "inf";
	        } else if (ret === "-Infinity") {
	            ret = "-inf";
	        }
	    } else if (typeof x === "string") {
	        ret = x;
	    } else if (x.tp$str !== undefined) {
	        ret = x.tp$str();
	        if (!(ret instanceof Sk.builtin.str)) {
	            throw new Sk.builtin.ValueError("__str__ didn't return a str");
	        }
	        return ret;
	    } else {
	        return Sk.misceval.objectRepr(x);
	    }

	    // interning required for strings in py
	    if (Sk.builtin.interned["1" + ret]) {
	        return Sk.builtin.interned["1" + ret];
	    }

	    this.__class__ = Sk.builtin.str;
	    this.v = ret;
	    this["v"] = this.v;
	    Sk.builtin.interned["1" + ret] = this;
	    return this;

	};
	goog.exportSymbol("Sk.builtin.str", Sk.builtin.str);

	Sk.abstr.setUpInheritance("str", Sk.builtin.str, Sk.builtin.seqtype);

	Sk.builtin.str.prototype.mp$subscript = function (index) {
	    var ret;
	    if (Sk.misceval.isIndex(index)) {
	        index = Sk.misceval.asIndex(index);
	        if (index < 0) {
	            index = this.v.length + index;
	        }
	        if (index < 0 || index >= this.v.length) {
	            throw new Sk.builtin.IndexError("string index out of range");
	        }
	        return new Sk.builtin.str(this.v.charAt(index));
	    } else if (index instanceof Sk.builtin.slice) {
	        ret = "";
	        index.sssiter$(this, function (i, wrt) {
	            if (i >= 0 && i < wrt.v.length) {
	                ret += wrt.v.charAt(i);
	            }
	        });
	        return new Sk.builtin.str(ret);
	    } else {
	        throw new Sk.builtin.TypeError("string indices must be integers, not " + Sk.abstr.typeName(index));
	    }
	};

	Sk.builtin.str.prototype.sq$length = function () {
	    return this.v.length;
	};
	Sk.builtin.str.prototype.sq$concat = function (other) {
	    var otypename;
	    if (!other || !Sk.builtin.checkString(other)) {
	        otypename = Sk.abstr.typeName(other);
	        throw new Sk.builtin.TypeError("cannot concatenate 'str' and '" + otypename + "' objects");
	    }
	    return new Sk.builtin.str(this.v + other.v);
	};
	Sk.builtin.str.prototype.nb$add = Sk.builtin.str.prototype.sq$concat;
	Sk.builtin.str.prototype.nb$inplace_add = Sk.builtin.str.prototype.sq$concat;
	Sk.builtin.str.prototype.sq$repeat = function (n) {
	    var i;
	    var ret;

	    if (!Sk.misceval.isIndex(n)) {
	        throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '" + Sk.abstr.typeName(n) + "'");
	    }

	    n = Sk.misceval.asIndex(n);
	    ret = "";
	    for (i = 0; i < n; ++i) {
	        ret += this.v;
	    }
	    return new Sk.builtin.str(ret);
	};
	Sk.builtin.str.prototype.nb$multiply = Sk.builtin.str.prototype.sq$repeat;
	Sk.builtin.str.prototype.nb$inplace_multiply = Sk.builtin.str.prototype.sq$repeat;
	Sk.builtin.str.prototype.sq$item = function () {
	    goog.asserts.fail();
	};
	Sk.builtin.str.prototype.sq$slice = function (i1, i2) {
	    i1 = Sk.builtin.asnum$(i1);
	    i2 = Sk.builtin.asnum$(i2);
	    if (i1 < 0) {
	        i1 = 0;
	    }
	    return new Sk.builtin.str(this.v.substr(i1, i2 - i1));
	};

	Sk.builtin.str.prototype.sq$contains = function (ob) {
	    if (!(ob instanceof Sk.builtin.str)) {
	        throw new Sk.builtin.TypeError("TypeError: 'In <string> requires string as left operand");
	    }
	    return this.v.indexOf(ob.v) != -1;
	};

	Sk.builtin.str.prototype.__iter__ = new Sk.builtin.func(function (self) {
	    return new Sk.builtin.str_iter_(self);
	});

	Sk.builtin.str.prototype.tp$iter = function () {
	    return new Sk.builtin.str_iter_(this);
	};

	Sk.builtin.str.prototype.tp$richcompare = function (other, op) {
	    if (!(other instanceof Sk.builtin.str)) {
	        return undefined;
	    }

	    switch (op) {
	        case "Lt":
	            return this.v < other.v;
	        case "LtE":
	            return this.v <= other.v;
	        case "Eq":
	            return this.v === other.v;
	        case "NotEq":
	            return this.v !== other.v;
	        case "Gt":
	            return this.v > other.v;
	        case "GtE":
	            return this.v >= other.v;
	        default:
	            goog.asserts.fail();
	    }
	};

	Sk.builtin.str.prototype["$r"] = function () {
	    // single is preferred
	    var ashex;
	    var c;
	    var i;
	    var ret;
	    var len;
	    var quote = "'";
	    //jshint ignore:start
	    if (this.v.indexOf("'") !== -1 && this.v.indexOf('"') === -1) {
	        quote = '"';
	    }
	    //jshint ignore:end
	    len = this.v.length;
	    ret = quote;
	    for (i = 0; i < len; ++i) {
	        c = this.v.charAt(i);
	        if (c === quote || c === "\\") {
	            ret += "\\" + c;
	        } else if (c === "\t") {
	            ret += "\\t";
	        } else if (c === "\n") {
	            ret += "\\n";
	        } else if (c === "\r") {
	            ret += "\\r";
	        } else if (c < " " || c >= 0x7f) {
	            ashex = c.charCodeAt(0).toString(16);
	            if (ashex.length < 2) {
	                ashex = "0" + ashex;
	            }
	            ret += "\\x" + ashex;
	        } else {
	            ret += c;
	        }
	    }
	    ret += quote;
	    return new Sk.builtin.str(ret);
	};


	Sk.builtin.str.re_escape_ = function (s) {
	    var c;
	    var i;
	    var ret = [];
	    var re = /^[A-Za-z0-9]+$/;
	    for (i = 0; i < s.length; ++i) {
	        c = s.charAt(i);

	        if (re.test(c)) {
	            ret.push(c);
	        } else {
	            if (c === "\\000") {
	                ret.push("\\000");
	            } else {
	                ret.push("\\" + c);
	            }
	        }
	    }
	    return ret.join("");
	};

	Sk.builtin.str.prototype["lower"] = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("lower", arguments, 1, 1);
	    return new Sk.builtin.str(self.v.toLowerCase());
	});

	Sk.builtin.str.prototype["upper"] = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("upper", arguments, 1, 1);
	    return new Sk.builtin.str(self.v.toUpperCase());
	});

	Sk.builtin.str.prototype["capitalize"] = new Sk.builtin.func(function (self) {
	    var i;
	    var cap;
	    var orig;
	    Sk.builtin.pyCheckArgs("capitalize", arguments, 1, 1);
	    orig = self.v;

	    if (orig.length === 0) {
	        return new Sk.builtin.str("");
	    }
	    cap = orig.charAt(0).toUpperCase();

	    for (i = 1; i < orig.length; i++) {
	        cap += orig.charAt(i).toLowerCase();
	    }
	    return new Sk.builtin.str(cap);
	});

	Sk.builtin.str.prototype["join"] = new Sk.builtin.func(function (self, seq) {
	    var it, i;
	    var arrOfStrs;
	    Sk.builtin.pyCheckArgs("join", arguments, 2, 2);
	    Sk.builtin.pyCheckType("seq", "iterable", Sk.builtin.checkIterable(seq));
	    arrOfStrs = [];
	    for (it = seq.tp$iter(), i = it.tp$iternext(); i !== undefined; i = it.tp$iternext()) {
	        if (i.constructor !== Sk.builtin.str) {
	            throw new Sk.builtin.TypeError("TypeError: sequence item " + arrOfStrs.length + ": expected string, " + typeof i + " found");
	        }
	        arrOfStrs.push(i.v);
	    }
	    return new Sk.builtin.str(arrOfStrs.join(self.v));
	});

	Sk.builtin.str.prototype["split"] = new Sk.builtin.func(function (self, on, howmany) {
	    var splits;
	    var index;
	    var match;
	    var result;
	    var s;
	    var str;
	    var regex;
	    Sk.builtin.pyCheckArgs("split", arguments, 1, 3);
	    if ((on === undefined) || (on instanceof Sk.builtin.none)) {
	        on = null;
	    }
	    if ((on !== null) && !Sk.builtin.checkString(on)) {
	        throw new Sk.builtin.TypeError("expected a string");
	    }
	    if ((on !== null) && on.v === "") {
	        throw new Sk.builtin.ValueError("empty separator");
	    }
	    if ((howmany !== undefined) && !Sk.builtin.checkInt(howmany)) {
	        throw new Sk.builtin.TypeError("an integer is required");
	    }

	    howmany = Sk.builtin.asnum$(howmany);
	    regex = /[\s]+/g;
	    str = self.v;
	    if (on === null) {
	        str = goog.string.trimLeft(str);
	    } else {
	        // Escape special characters in "on" so we can use a regexp
	        s = on.v.replace(/([.*+?=|\\\/()\[\]\{\}^$])/g, "\\$1");
	        regex = new RegExp(s, "g");
	    }

	    // This is almost identical to re.split,
	    // except how the regexp is constructed

	    result = [];
	    index = 0;
	    splits = 0;
	    while ((match = regex.exec(str)) != null) {
	        if (match.index === regex.lastIndex) {
	            // empty match
	            break;
	        }
	        result.push(new Sk.builtin.str(str.substring(index, match.index)));
	        index = regex.lastIndex;
	        splits += 1;
	        if (howmany && (splits >= howmany)) {
	            break;
	        }
	    }
	    str = str.substring(index);
	    if (on !== null || (str.length > 0)) {
	        result.push(new Sk.builtin.str(str));
	    }

	    return new Sk.builtin.list(result);
	});

	Sk.builtin.str.prototype["strip"] = new Sk.builtin.func(function (self, chars) {
	    var regex;
	    var pattern;
	    Sk.builtin.pyCheckArgs("strip", arguments, 1, 2);
	    if ((chars !== undefined) && !Sk.builtin.checkString(chars)) {
	        throw new Sk.builtin.TypeError("strip arg must be None or str");
	    }
	    if (chars === undefined) {
	        pattern = /^\s+|\s+$/g;
	    } else {
	        regex = Sk.builtin.str.re_escape_(chars.v);
	        pattern = new RegExp("^[" + regex + "]+|[" + regex + "]+$", "g");
	    }
	    return new Sk.builtin.str(self.v.replace(pattern, ""));
	});

	Sk.builtin.str.prototype["lstrip"] = new Sk.builtin.func(function (self, chars) {
	    var regex;
	    var pattern;
	    Sk.builtin.pyCheckArgs("lstrip", arguments, 1, 2);
	    if ((chars !== undefined) && !Sk.builtin.checkString(chars)) {
	        throw new Sk.builtin.TypeError("lstrip arg must be None or str");
	    }
	    if (chars === undefined) {
	        pattern = /^\s+/g;
	    } else {
	        regex = Sk.builtin.str.re_escape_(chars.v);
	        pattern = new RegExp("^[" + regex + "]+", "g");
	    }
	    return new Sk.builtin.str(self.v.replace(pattern, ""));
	});

	Sk.builtin.str.prototype["rstrip"] = new Sk.builtin.func(function (self, chars) {
	    var regex;
	    var pattern;
	    Sk.builtin.pyCheckArgs("rstrip", arguments, 1, 2);
	    if ((chars !== undefined) && !Sk.builtin.checkString(chars)) {
	        throw new Sk.builtin.TypeError("rstrip arg must be None or str");
	    }
	    if (chars === undefined) {
	        pattern = /\s+$/g;
	    } else {
	        regex = Sk.builtin.str.re_escape_(chars.v);
	        pattern = new RegExp("[" + regex + "]+$", "g");
	    }
	    return new Sk.builtin.str(self.v.replace(pattern, ""));
	});

	Sk.builtin.str.prototype["partition"] = new Sk.builtin.func(function (self, sep) {
	    var pos;
	    var sepStr;
	    Sk.builtin.pyCheckArgs("partition", arguments, 2, 2);
	    Sk.builtin.pyCheckType("sep", "string", Sk.builtin.checkString(sep));
	    sepStr = new Sk.builtin.str(sep);
	    pos = self.v.indexOf(sepStr.v);
	    if (pos < 0) {
	        return new Sk.builtin.tuple([self, Sk.builtin.str.$emptystr, Sk.builtin.str.$emptystr]);
	    }

	    return new Sk.builtin.tuple([
	        new Sk.builtin.str(self.v.substring(0, pos)),
	        sepStr,
	        new Sk.builtin.str(self.v.substring(pos + sepStr.v.length))]);
	});

	Sk.builtin.str.prototype["rpartition"] = new Sk.builtin.func(function (self, sep) {
	    var pos;
	    var sepStr;
	    Sk.builtin.pyCheckArgs("rpartition", arguments, 2, 2);
	    Sk.builtin.pyCheckType("sep", "string", Sk.builtin.checkString(sep));
	    sepStr = new Sk.builtin.str(sep);
	    pos = self.v.lastIndexOf(sepStr.v);
	    if (pos < 0) {
	        return new Sk.builtin.tuple([Sk.builtin.str.$emptystr, Sk.builtin.str.$emptystr, self]);
	    }

	    return new Sk.builtin.tuple([
	        new Sk.builtin.str(self.v.substring(0, pos)),
	        sepStr,
	        new Sk.builtin.str(self.v.substring(pos + sepStr.v.length))]);
	});

	Sk.builtin.str.prototype["count"] = new Sk.builtin.func(function (self, pat, start, end) {
	    var normaltext;
	    var ctl;
	    var slice;
	    var m;
	    Sk.builtin.pyCheckArgs("count", arguments, 2, 4);
	    if (!Sk.builtin.checkString(pat)) {
	        throw new Sk.builtin.TypeError("expected a character buffer object");
	    }
	    if ((start !== undefined) && !Sk.builtin.checkInt(start)) {
	        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
	    }
	    if ((end !== undefined) && !Sk.builtin.checkInt(end)) {
	        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
	    }

	    if (start === undefined) {
	        start = 0;
	    } else {
	        start = Sk.builtin.asnum$(start);
	        start = start >= 0 ? start : self.v.length + start;
	    }

	    if (end === undefined) {
	        end = self.v.length;
	    } else {
	        end = Sk.builtin.asnum$(end);
	        end = end >= 0 ? end : self.v.length + end;
	    }

	    normaltext = pat.v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	    m = new RegExp(normaltext, "g");
	    slice = self.v.slice(start, end);
	    ctl = slice.match(m);
	    if (!ctl) {
	        return  new Sk.builtin.int_(0);
	    } else {
	        return new Sk.builtin.int_(ctl.length);
	    }

	});

	Sk.builtin.str.prototype["ljust"] = new Sk.builtin.func(function (self, len, fillchar) {
	    var newstr;
	    Sk.builtin.pyCheckArgs("ljust", arguments, 2, 3);
	    if (!Sk.builtin.checkInt(len)) {
	        throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(len));
	    }
	    if ((fillchar !== undefined) && (!Sk.builtin.checkString(fillchar) || fillchar.v.length !== 1)) {
	        throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(fillchar));
	    }
	    if (fillchar === undefined) {
	        fillchar = " ";
	    } else {
	        fillchar = fillchar.v;
	    }
	    len = Sk.builtin.asnum$(len);
	    if (self.v.length >= len) {
	        return self;
	    } else {
	        newstr = Array.prototype.join.call({length: Math.floor(len - self.v.length) + 1}, fillchar);
	        return new Sk.builtin.str(self.v + newstr);
	    }
	});

	Sk.builtin.str.prototype["rjust"] = new Sk.builtin.func(function (self, len, fillchar) {
	    var newstr;
	    Sk.builtin.pyCheckArgs("rjust", arguments, 2, 3);
	    if (!Sk.builtin.checkInt(len)) {
	        throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(len));
	    }
	    if ((fillchar !== undefined) && (!Sk.builtin.checkString(fillchar) || fillchar.v.length !== 1)) {
	        throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(fillchar));
	    }
	    if (fillchar === undefined) {
	        fillchar = " ";
	    } else {
	        fillchar = fillchar.v;
	    }
	    len = Sk.builtin.asnum$(len);
	    if (self.v.length >= len) {
	        return self;
	    } else {
	        newstr = Array.prototype.join.call({length: Math.floor(len - self.v.length) + 1}, fillchar);
	        return new Sk.builtin.str(newstr + self.v);
	    }

	});

	Sk.builtin.str.prototype["center"] = new Sk.builtin.func(function (self, len, fillchar) {
	    var newstr;
	    var newstr1;
	    Sk.builtin.pyCheckArgs("center", arguments, 2, 3);
	    if (!Sk.builtin.checkInt(len)) {
	        throw new Sk.builtin.TypeError("integer argument exepcted, got " + Sk.abstr.typeName(len));
	    }
	    if ((fillchar !== undefined) && (!Sk.builtin.checkString(fillchar) || fillchar.v.length !== 1)) {
	        throw new Sk.builtin.TypeError("must be char, not " + Sk.abstr.typeName(fillchar));
	    }
	    if (fillchar === undefined) {
	        fillchar = " ";
	    } else {
	        fillchar = fillchar.v;
	    }
	    len = Sk.builtin.asnum$(len);
	    if (self.v.length >= len) {
	        return self;
	    } else {
	        newstr1 = Array.prototype.join.call({length: Math.floor((len - self.v.length) / 2) + 1}, fillchar);
	        newstr = newstr1 + self.v + newstr1;
	        if (newstr.length < len) {
	            newstr = newstr + fillchar;
	        }
	        return new Sk.builtin.str(newstr);
	    }

	});

	Sk.builtin.str.prototype["find"] = new Sk.builtin.func(function (self, tgt, start, end) {
	    var idx;
	    Sk.builtin.pyCheckArgs("find", arguments, 2, 4);
	    if (!Sk.builtin.checkString(tgt)) {
	        throw new Sk.builtin.TypeError("expected a character buffer object");
	    }
	    if ((start !== undefined) && !Sk.builtin.checkInt(start)) {
	        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
	    }
	    if ((end !== undefined) && !Sk.builtin.checkInt(end)) {
	        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
	    }

	    if (start === undefined) {
	        start = 0;
	    } else {
	        start = Sk.builtin.asnum$(start);
	        start = start >= 0 ? start : self.v.length + start;
	    }

	    if (end === undefined) {
	        end = self.v.length;
	    } else {
	        end = Sk.builtin.asnum$(end);
	        end = end >= 0 ? end : self.v.length + end;
	    }

	    idx = self.v.indexOf(tgt.v, start);
	    idx = ((idx >= start) && (idx < end)) ? idx : -1;

	    return new Sk.builtin.int_(idx);
	});

	Sk.builtin.str.prototype["index"] = new Sk.builtin.func(function (self, tgt, start, end) {
	    var idx;
	    Sk.builtin.pyCheckArgs("index", arguments, 2, 4);
	    idx = Sk.misceval.callsim(self["find"], self, tgt, start, end);
	    if (Sk.builtin.asnum$(idx) === -1) {
	        throw new Sk.builtin.ValueError("substring not found");
	    }
	    return idx;
	});

	Sk.builtin.str.prototype["rfind"] = new Sk.builtin.func(function (self, tgt, start, end) {
	    var idx;
	    Sk.builtin.pyCheckArgs("rfind", arguments, 2, 4);
	    if (!Sk.builtin.checkString(tgt)) {
	        throw new Sk.builtin.TypeError("expected a character buffer object");
	    }
	    if ((start !== undefined) && !Sk.builtin.checkInt(start)) {
	        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
	    }
	    if ((end !== undefined) && !Sk.builtin.checkInt(end)) {
	        throw new Sk.builtin.TypeError("slice indices must be integers or None or have an __index__ method");
	    }

	    if (start === undefined) {
	        start = 0;
	    } else {
	        start = Sk.builtin.asnum$(start);
	        start = start >= 0 ? start : self.v.length + start;
	    }

	    if (end === undefined) {
	        end = self.v.length;
	    } else {
	        end = Sk.builtin.asnum$(end);
	        end = end >= 0 ? end : self.v.length + end;
	    }

	    idx = self.v.lastIndexOf(tgt.v, end);
	    idx = (idx !== end) ? idx : self.v.lastIndexOf(tgt.v, end - 1);
	    idx = ((idx >= start) && (idx < end)) ? idx : -1;

	    return new Sk.builtin.int_(idx);
	});

	Sk.builtin.str.prototype["rindex"] = new Sk.builtin.func(function (self, tgt, start, end) {
	    var idx;
	    Sk.builtin.pyCheckArgs("rindex", arguments, 2, 4);
	    idx = Sk.misceval.callsim(self["rfind"], self, tgt, start, end);
	    if (Sk.builtin.asnum$(idx) === -1) {
	        throw new Sk.builtin.ValueError("substring not found");
	    }
	    return idx;
	});

	Sk.builtin.str.prototype["startswith"] = new Sk.builtin.func(function (self, tgt) {
	    Sk.builtin.pyCheckArgs("startswith", arguments, 2, 2);
	    Sk.builtin.pyCheckType("tgt", "string", Sk.builtin.checkString(tgt));
	    return new Sk.builtin.bool( self.v.indexOf(tgt.v) === 0);
	});

	// http://stackoverflow.com/questions/280634/endswith-in-javascript
	Sk.builtin.str.prototype["endswith"] = new Sk.builtin.func(function (self, tgt) {
	    Sk.builtin.pyCheckArgs("endswith", arguments, 2, 2);
	    Sk.builtin.pyCheckType("tgt", "string", Sk.builtin.checkString(tgt));
	    return new Sk.builtin.bool( self.v.indexOf(tgt.v, self.v.length - tgt.v.length) !== -1);
	});

	Sk.builtin.str.prototype["replace"] = new Sk.builtin.func(function (self, oldS, newS, count) {
	    var c;
	    var patt;
	    Sk.builtin.pyCheckArgs("replace", arguments, 3, 4);
	    Sk.builtin.pyCheckType("oldS", "string", Sk.builtin.checkString(oldS));
	    Sk.builtin.pyCheckType("newS", "string", Sk.builtin.checkString(newS));
	    if ((count !== undefined) && !Sk.builtin.checkInt(count)) {
	        throw new Sk.builtin.TypeError("integer argument expected, got " +
	            Sk.abstr.typeName(count));
	    }
	    count = Sk.builtin.asnum$(count);
	    patt = new RegExp(Sk.builtin.str.re_escape_(oldS.v), "g");

	    if ((count === undefined) || (count < 0)) {
	        return new Sk.builtin.str(self.v.replace(patt, newS.v));
	    }

	    c = 0;

	    function replacer (match) {
	        c++;
	        if (c <= count) {
	            return newS.v;
	        }
	        return match;
	    }

	    return new Sk.builtin.str(self.v.replace(patt, replacer));
	});

	Sk.builtin.str.prototype["zfill"] = new Sk.builtin.func(function (self, len) {
	    var str = self.v;
	    var ret;
	    var zeroes;
	    var offset;
	    var pad = "";

	    Sk.builtin.pyCheckArgs("zfill", arguments, 2, 2);
	    if (! Sk.builtin.checkInt(len)) {
	        throw new Sk.builtin.TypeError("integer argument exepected, got " + Sk.abstr.typeName(len));
	    }

	    // figure out how many zeroes are needed to make the proper length
	    zeroes = len.v - str.length;
	    // offset by 1 if there is a +/- at the beginning of the string
	    offset = (str[0] === "+" || str[0] === "-") ? 1 : 0;
	    for(var i = 0; i < zeroes; i++){
	        pad += "0";
	    }
	    // combine the string and the zeroes
	    ret = str.substr(0, offset) + pad + str.substr(offset);
	    return new Sk.builtin.str(ret);


	});

	Sk.builtin.str.prototype["isdigit"] = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("isdigit", arguments, 1, 1);
	    return new Sk.builtin.bool( /^\d+$/.test(self.v));
	});

	Sk.builtin.str.prototype["isspace"] = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("isspace", arguments, 1, 1);
	    return new Sk.builtin.bool( /^\s+$/.test(self.v));
	});


	Sk.builtin.str.prototype["expandtabs"] = new Sk.builtin.func(function (self, tabsize) {
	    // var input = self.v;
	    // var expanded = "";
	    // var split;
	    // var spacestr = "";
	    // var spacerem;


	    var spaces;
	    var expanded;

	    Sk.builtin.pyCheckArgs("expandtabs", arguments, 1, 2);


	    if ((tabsize !== undefined) && ! Sk.builtin.checkInt(tabsize)) {
	        throw new Sk.builtin.TypeError("integer argument exepected, got " + Sk.abstr.typeName(tabsize));
	    }
	    if (tabsize === undefined) {
	        tabsize = 8;
	    } else {
	        tabsize = Sk.builtin.asnum$(tabsize);
	    }

	    spaces = (new Array(tabsize + 1)).join(" ");
	    expanded = self.v.replace(/([^\r\n\t]*)\t/g, function(a, b) {
	        return b + spaces.slice(b.length % tabsize);
	    });
	    return new Sk.builtin.str(expanded);
	});

	Sk.builtin.str.prototype["swapcase"] = new Sk.builtin.func(function (self) {
	    var ret;
	    Sk.builtin.pyCheckArgs("swapcase", arguments, 1, 1);


	    ret = self.v.replace(/[a-z]/gi, function(c) {
	        var lc = c.toLowerCase();
	        return lc === c ? c.toUpperCase() : lc;
	    });

	    return new Sk.builtin.str(ret);
	});

	Sk.builtin.str.prototype["splitlines"] = new Sk.builtin.func(function (self, keepends) {
	    var data = self.v;
	    var i = 0;
	    var j = i;
	    var selflen = self.v.length;
	    var strs_w = [];
	    var ch;
	    var eol;
	    var sol = 0;
	    var slice;
	    Sk.builtin.pyCheckArgs("splitlines", arguments, 1, 2);
	    if ((keepends !== undefined) && ! Sk.builtin.checkBool(keepends)) {
	        throw new Sk.builtin.TypeError("boolean argument expected, got " + Sk.abstr.typeName(keepends));
	    }
	    if (keepends === undefined) {
	        keepends = false;
	    } else {
	        keepends = keepends.v;
	    }


	    for (i = 0; i < selflen; i ++) {
	        ch = data.charAt(i);
	        if (data.charAt(i + 1) === "\n" && ch === "\r") {
	            eol = i + 2;
	            slice = data.slice(sol, eol);
	            if (! keepends) {
	                slice = slice.replace(/(\r|\n)/g, "");
	            }
	            strs_w.push(new Sk.builtin.str(slice));
	            sol = eol;
	        } else if ((ch === "\n" && data.charAt(i - 1) !== "\r") || ch === "\r") {
	            eol = i + 1;
	            slice = data.slice(sol, eol);
	            if (! keepends) {
	                slice = slice.replace(/(\r|\n)/g, "");
	            }
	            strs_w.push(new Sk.builtin.str(slice));
	            sol = eol;
	        }

	    }
	    if (sol < selflen) {
	        eol = selflen;
	        slice = data.slice(sol, eol);
	        if (! keepends) {
	            slice = slice.replace(/(\r|\n)/g, "");
	        }
	        strs_w.push(new Sk.builtin.str(slice));
	    }
	    return new Sk.builtin.list(strs_w);
	});

	Sk.builtin.str.prototype["title"] = new Sk.builtin.func(function (self) {
	    var ret;

	    Sk.builtin.pyCheckArgs("title", arguments, 1, 1);

	    ret = self.v.replace(/[a-z][a-z]*/gi, function(str) {
	        return str[0].toUpperCase() + str.substr(1).toLowerCase();
	    });

	    return new Sk.builtin.str(ret);
	});

	Sk.builtin.str.prototype["isalpha"] = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("isalpha", arguments, 1, 1);
	    return new Sk.builtin.bool( self.v.length && goog.string.isAlpha(self.v));
	});

	Sk.builtin.str.prototype["isalnum"] = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("isalnum", arguments, 1, 1);
	    return new Sk.builtin.bool( self.v.length && goog.string.isAlphaNumeric(self.v));
	});

	// does not account for unicode numeric values
	Sk.builtin.str.prototype["isnumeric"] = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("isnumeric", arguments, 1, 1);
	    return new Sk.builtin.bool( self.v.length && goog.string.isNumeric(self.v));
	});

	Sk.builtin.str.prototype["islower"] = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("islower", arguments, 1, 1);
	    return new Sk.builtin.bool( self.v.length && /[a-z]/.test(self.v) && !/[A-Z]/.test(self.v));
	});

	Sk.builtin.str.prototype["isupper"] = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("isupper", arguments, 1, 1);
	    return new Sk.builtin.bool( self.v.length && !/[a-z]/.test(self.v) && /[A-Z]/.test(self.v));
	});

	Sk.builtin.str.prototype["istitle"] = new Sk.builtin.func(function (self) {
	    // Comparing to str.title() seems the most intuitive thing, but it fails on "",
	    // Other empty-ish strings with no change.
	    var input = self.v;
	    var cased = false;
	    var previous_is_cased = false;
	    var pos;
	    var ch;
	    Sk.builtin.pyCheckArgs("istitle", arguments, 1, 1);
	    for (pos = 0; pos < input.length; pos ++) {
	        ch = input.charAt(pos);
	        if (! /[a-z]/.test(ch) && /[A-Z]/.test(ch)) {
	            if (previous_is_cased) {
	                return new Sk.builtin.bool( false);
	            }
	            previous_is_cased = true;
	            cased = true;
	        } else if (/[a-z]/.test(ch) && ! /[A-Z]/.test(ch)) {
	            if (! previous_is_cased) {
	                return new Sk.builtin.bool( false);
	            }
	            cased = true;
	        } else {
	            previous_is_cased = false;
	        }
	    }
	    return new Sk.builtin.bool( cased);
	});

	Sk.builtin.str.prototype.nb$remainder = function (rhs) {
	    // % format op. rhs can be a value, a tuple, or something with __getitem__ (dict)

	    // From http://docs.python.org/library/stdtypes.html#string-formatting the
	    // format looks like:
	    // 1. The '%' character, which marks the start of the specifier.
	    // 2. Mapping key (optional), consisting of a parenthesised sequence of characters (for example, (somename)).
	    // 3. Conversion flags (optional), which affect the result of some conversion types.
	    // 4. Minimum field width (optional). If specified as an '*' (asterisk), the actual width is read from the next
	    // element of the tuple in values, and the object to convert comes after the minimum field width and optional
	    // precision. 5. Precision (optional), given as a '.' (dot) followed by the precision. If specified as '*' (an
	    // asterisk), the actual width is read from the next element of the tuple in values, and the value to convert comes
	    // after the precision. 6. Length modifier (optional). 7. Conversion type.  length modifier is ignored

	    var ret;
	    var replFunc;
	    var index;
	    var regex;
	    if (rhs.constructor !== Sk.builtin.tuple && (rhs.mp$subscript === undefined || rhs.constructor === Sk.builtin.str)) {
	        rhs = new Sk.builtin.tuple([rhs]);
	    }

	    // general approach is to use a regex that matches the format above, and
	    // do an re.sub with a function as replacement to make the subs.

	    //           1 2222222222222222   33333333   444444444   5555555555555  66666  777777777777777777
	    regex = /%(\([a-zA-Z0-9]+\))?([#0 +\-]+)?(\*|[0-9]+)?(\.(\*|[0-9]+))?[hlL]?([diouxXeEfFgGcrs%])/g;
	    index = 0;
	    replFunc = function (substring, mappingKey, conversionFlags, fieldWidth, precision, precbody, conversionType) {
	        var result;
	        var convName;
	        var convValue;
	        var base;
	        var r;
	        var mk;
	        var value;
	        var handleWidth;
	        var formatNumber;
	        var alternateForm;
	        var precedeWithSign;
	        var blankBeforePositive;
	        var leftAdjust;
	        var zeroPad;
	        var i;
	        fieldWidth = Sk.builtin.asnum$(fieldWidth);
	        precision = Sk.builtin.asnum$(precision);

	        if (mappingKey === undefined || mappingKey === "") {
	            i = index++;
	        } // ff passes '' not undef for some reason

	        if (precision === "") { // ff passes '' here aswell causing problems with G,g, etc.
	            precision = undefined;
	        }

	        zeroPad = false;
	        leftAdjust = false;
	        blankBeforePositive = false;
	        precedeWithSign = false;
	        alternateForm = false;
	        if (conversionFlags) {
	            if (conversionFlags.indexOf("-") !== -1) {
	                leftAdjust = true;
	            } else if (conversionFlags.indexOf("0") !== -1) {
	                zeroPad = true;
	            }

	            if (conversionFlags.indexOf("+") !== -1) {
	                precedeWithSign = true;
	            } else if (conversionFlags.indexOf(" ") !== -1) {
	                blankBeforePositive = true;
	            }

	            alternateForm = conversionFlags.indexOf("#") !== -1;
	        }

	        if (precision) {
	            precision = parseInt(precision.substr(1), 10);
	        }

	        formatNumber = function (n, base) {
	            var precZeroPadded;
	            var prefix;
	            var didSign;
	            var neg;
	            var r;
	            var j;
	            base = Sk.builtin.asnum$(base);
	            neg = false;
	            didSign = false;
	            if (typeof n === "number") {
	                if (n < 0) {
	                    n = -n;
	                    neg = true;
	                }
	                r = n.toString(base);
	            } else if (n instanceof Sk.builtin.float_) {
	                r = n.str$(base, false);
	                if (r.length > 2 && r.substr(-2) === ".0") {
	                    r = r.substr(0, r.length - 2);
	                }
	                neg = n.nb$isnegative();
	            } else if (n instanceof Sk.builtin.int_) {
	                r = n.str$(base, false);
	                neg = n.nb$isnegative();
	            } else if (n instanceof Sk.builtin.lng) {
	                r = n.str$(base, false);
	                neg = n.nb$isnegative();	//	neg = n.size$ < 0;	RNL long.js change
	            }

	            goog.asserts.assert(r !== undefined, "unhandled number format");

	            precZeroPadded = false;

	            if (precision) {
	                //print("r.length",r.length,"precision",precision);
	                for (j = r.length; j < precision; ++j) {
	                    r = "0" + r;
	                    precZeroPadded = true;
	                }
	            }

	            prefix = "";

	            if (neg) {
	                prefix = "-";
	            } else if (precedeWithSign) {
	                prefix = "+" + prefix;
	            } else if (blankBeforePositive) {
	                prefix = " " + prefix;
	            }

	            if (alternateForm) {
	                if (base === 16) {
	                    prefix += "0x";
	                } else if (base === 8 && !precZeroPadded && r !== "0") {
	                    prefix += "0";
	                }
	            }

	            return [prefix, r];
	        };

	        handleWidth = function (args) {
	            var totLen;
	            var prefix = args[0];
	            var r = args[1];
	            var j;
	            if (fieldWidth) {
	                fieldWidth = parseInt(fieldWidth, 10);
	                totLen = r.length + prefix.length;
	                if (zeroPad) {
	                    for (j = totLen; j < fieldWidth; ++j) {
	                        r = "0" + r;
	                    }
	                } else if (leftAdjust) {
	                    for (j = totLen; j < fieldWidth; ++j) {
	                        r = r + " ";
	                    }
	                } else {
	                    for (j = totLen; j < fieldWidth; ++j) {
	                        prefix = " " + prefix;
	                    }
	                }
	            }
	            return prefix + r;
	        };

	        //print("Rhs:",rhs, "ctor", rhs.constructor);
	        if (rhs.constructor === Sk.builtin.tuple) {
	            value = rhs.v[i];
	        } else if (rhs.mp$subscript !== undefined && mappingKey !== undefined) {
	            mk = mappingKey.substring(1, mappingKey.length - 1);
	            //print("mk",mk);
	            value = rhs.mp$subscript(new Sk.builtin.str(mk));
	        } else if (rhs.constructor === Sk.builtin.dict || rhs.constructor === Sk.builtin.list) {
	            // new case where only one argument is provided
	            value = rhs;
	        } else {
	            throw new Sk.builtin.AttributeError(rhs.tp$name + " instance has no attribute 'mp$subscript'");
	        }
	        base = 10;
	        if (conversionType === "d" || conversionType === "i") {
	            return handleWidth(formatNumber(value, 10));
	        } else if (conversionType === "o") {
	            return handleWidth(formatNumber(value, 8));
	        } else if (conversionType === "x") {
	            return handleWidth(formatNumber(value, 16));
	        } else if (conversionType === "X") {
	            return handleWidth(formatNumber(value, 16)).toUpperCase();
	        } else if (conversionType === "f" || conversionType === "F" || conversionType === "e" || conversionType === "E" || conversionType === "g" || conversionType === "G") {
	            convValue = Sk.builtin.asnum$(value);
	            if (typeof convValue === "string") {
	                convValue = Number(convValue);
	            }
	            if (convValue === Infinity) {
	                return "inf";
	            }
	            if (convValue === -Infinity) {
	                return "-inf";
	            }
	            if (isNaN(convValue)) {
	                return "nan";
	            }
	            convName = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(conversionType.toLowerCase())];
	            if (precision === undefined || precision === "") {
	                if (conversionType === "e" || conversionType === "E") {
	                    precision = 6;
	                } else if (conversionType === "f" || conversionType === "F") {
	                    precision = 7;
	                }
	            }
	            result = (convValue)[convName](precision); // possible loose of negative zero sign

	            // apply sign to negative zeros, floats only!
	            if(Sk.builtin.checkFloat(value)) {
	                if(convValue === 0 && 1/convValue === -Infinity) {
	                    result = "-" + result; // add sign for zero
	                }
	            }

	            if ("EFG".indexOf(conversionType) !== -1) {
	                result = result.toUpperCase();
	            }
	            return handleWidth(["", result]);
	        } else if (conversionType === "c") {
	            if (typeof value === "number") {
	                return String.fromCharCode(value);
	            } else if (value instanceof Sk.builtin.int_) {
	                return String.fromCharCode(value.v);
	            } else if (value instanceof Sk.builtin.float_) {
	                return String.fromCharCode(value.v);
	            } else if (value instanceof Sk.builtin.lng) {
	                return String.fromCharCode(value.str$(10, false)[0]);
	            } else if (value.constructor === Sk.builtin.str) {
	                return value.v.substr(0, 1);
	            } else {
	                throw new Sk.builtin.TypeError("an integer is required");
	            }
	        } else if (conversionType === "r") {
	            r = Sk.builtin.repr(value);
	            if (precision) {
	                return r.v.substr(0, precision);
	            }
	            return r.v;
	        } else if (conversionType === "s") {
	            r = new Sk.builtin.str(value);
	            if (precision) {
	                return r.v.substr(0, precision);
	            }
	            if(fieldWidth) {
	                r.v = handleWidth([" ", r.v]);
	            }
	            return r.v;
	        } else if (conversionType === "%") {
	            return "%";
	        }
	    };

	    ret = this.v.replace(regex, replFunc);
	    return new Sk.builtin.str(ret);
	};

	/**
	 * @constructor
	 * @param {Object} obj
	 */
	Sk.builtin.str_iter_ = function (obj) {
	    if (!(this instanceof Sk.builtin.str_iter_)) {
	        return new Sk.builtin.str_iter_(obj);
	    }
	    this.$index = 0;
	    this.$obj = obj.v.slice();
	    this.sq$length = this.$obj.length;
	    this.tp$iter = this;
	    this.tp$iternext = function () {
	        if (this.$index >= this.sq$length) {
	            return undefined;
	        }
	        return new Sk.builtin.str(this.$obj.substr(this.$index++, 1));
	    };
	    this.$r = function () {
	        return new Sk.builtin.str("iterator");
	    };
	    return this;
	};

	Sk.abstr.setUpInheritance("iterator", Sk.builtin.str_iter_, Sk.builtin.object);

	Sk.builtin.str_iter_.prototype.__class__ = Sk.builtin.str_iter_;

	Sk.builtin.str_iter_.prototype.__iter__ = new Sk.builtin.func(function (self) {
	    Sk.builtin.pyCheckArgs("__iter__", arguments, 0, 0, true, false);
	    return self;
	});

	Sk.builtin.str_iter_.prototype["next"] = new Sk.builtin.func(function (self) {
	    var ret = self.tp$iternext();
	    if (ret === undefined) {
	        throw new Sk.builtin.StopIteration();
	    }
	    return ret;
	});



	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/src/tokenize.js ---- */ 

	/*
	 * This is a port of tokenize.py by Ka-Ping Yee.
	 *
	 * each call to readline should return one line of input as a string, or
	 * undefined if it's finished.
	 *
	 * callback is called for each token with 5 args:
	 * 1. the token type
	 * 2. the token string
	 * 3. [ start_row, start_col ]
	 * 4. [ end_row, end_col ]
	 * 5. logical line where the token was found, including continuation lines
	 *
	 * callback can return true to abort.
	 *
	 */

	/**
	 * @constructor
	 */
	Sk.Tokenizer = function (filename, interactive, callback) {
	    this.filename = filename;
	    this.callback = callback;
	    this.lnum = 0;
	    this.parenlev = 0;
	    this.parenstack = [];
	    this.continued = false;
	    this.namechars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
	    this.numchars = "0123456789";
	    this.contstr = "";
	    this.needcont = false;
	    this.contline = undefined;
	    this.indents = [0];
	    this.endprog = /.*/;
	    this.strstart = [-1, -1];
	    this.interactive = interactive;
	    this.doneFunc = function () {
	        var i;
	        for (i = 1; i < this.indents.length; ++i) // pop remaining indent levels
	        {
	            if (this.callback(Sk.Tokenizer.Tokens.T_DEDENT, "", [this.lnum, 0], [this.lnum, 0], "")) {
	                return "done";
	            }
	        }
	        if (this.callback(Sk.Tokenizer.Tokens.T_ENDMARKER, "", [this.lnum, 0], [this.lnum, 0], "")) {
	            return "done";
	        }

	        return "failed";
	    };

	};

	/**
	 * @enum {number}
	 */
	Sk.Tokenizer.Tokens = {
	    T_ENDMARKER       : 0,
	    T_NAME            : 1,
	    T_NUMBER          : 2,
	    T_STRING          : 3,
	    T_NEWLINE         : 4,
	    T_INDENT          : 5,
	    T_DEDENT          : 6,
	    T_LPAR            : 7,
	    T_RPAR            : 8,
	    T_LSQB            : 9,
	    T_RSQB            : 10,
	    T_COLON           : 11,
	    T_COMMA           : 12,
	    T_SEMI            : 13,
	    T_PLUS            : 14,
	    T_MINUS           : 15,
	    T_STAR            : 16,
	    T_SLASH           : 17,
	    T_VBAR            : 18,
	    T_AMPER           : 19,
	    T_LESS            : 20,
	    T_GREATER         : 21,
	    T_EQUAL           : 22,
	    T_DOT             : 23,
	    T_PERCENT         : 24,
	    T_BACKQUOTE       : 25,
	    T_LBRACE          : 26,
	    T_RBRACE          : 27,
	    T_EQEQUAL         : 28,
	    T_NOTEQUAL        : 29,
	    T_LESSEQUAL       : 30,
	    T_GREATEREQUAL    : 31,
	    T_TILDE           : 32,
	    T_CIRCUMFLEX      : 33,
	    T_LEFTSHIFT       : 34,
	    T_RIGHTSHIFT      : 35,
	    T_DOUBLESTAR      : 36,
	    T_PLUSEQUAL       : 37,
	    T_MINEQUAL        : 38,
	    T_STAREQUAL       : 39,
	    T_SLASHEQUAL      : 40,
	    T_PERCENTEQUAL    : 41,
	    T_AMPEREQUAL      : 42,
	    T_VBAREQUAL       : 43,
	    T_CIRCUMFLEXEQUAL : 44,
	    T_LEFTSHIFTEQUAL  : 45,
	    T_RIGHTSHIFTEQUAL : 46,
	    T_DOUBLESTAREQUAL : 47,
	    T_DOUBLESLASH     : 48,
	    T_DOUBLESLASHEQUAL: 49,
	    T_AT              : 50,
	    T_OP              : 51,
	    T_COMMENT         : 52,
	    T_NL              : 53,
	    T_RARROW          : 54,
	    T_ERRORTOKEN      : 55,
	    T_N_TOKENS        : 56,
	    T_NT_OFFSET       : 256
	};

	/** @param {...*} x */
	function group (x) {
	    var args = Array.prototype.slice.call(arguments);
	    return "(" + args.join("|") + ")";
	}

	/** @param {...*} x */
	function any (x) {
	    return group.apply(null, arguments) + "*";
	}

	/** @param {...*} x */
	function maybe (x) {
	    return group.apply(null, arguments) + "?";
	}

	/* we have to use string and ctor to be able to build patterns up. + on /.../
	 * does something strange. */
	var Whitespace = "[ \\f\\t]*";
	var Comment_ = "#[^\\r\\n]*";
	var Ident = "[a-zA-Z_]\\w*";

	var Binnumber = "0[bB][01]*";
	var Hexnumber = "0[xX][\\da-fA-F]*[lL]?";
	var Octnumber = "0[oO]?[0-7]*[lL]?";
	var Decnumber = "[1-9]\\d*[lL]?";
	var Intnumber = group(Binnumber, Hexnumber, Octnumber, Decnumber);

	var Exponent = "[eE][-+]?\\d+";
	var Pointfloat = group("\\d+\\.\\d*", "\\.\\d+") + maybe(Exponent);
	var Expfloat = "\\d+" + Exponent;
	var Floatnumber = group(Pointfloat, Expfloat);
	var Imagnumber = group("\\d+[jJ]", Floatnumber + "[jJ]");
	var Number_ = group(Imagnumber, Floatnumber, Intnumber);

	// tail end of ' string
	var Single = "^[^'\\\\]*(?:\\\\.[^'\\\\]*)*'";
	// tail end of " string
	var Double_ = '^[^"\\\\]*(?:\\\\.[^"\\\\]*)*"';
	// tail end of ''' string
	var Single3 = "[^'\\\\]*(?:(?:\\\\.|'(?!''))[^'\\\\]*)*'''";
	// tail end of """ string
	var Double3 = '[^"\\\\]*(?:(?:\\\\.|"(?!""))[^"\\\\]*)*"""';
	var Triple = group("[ubUB]?[rR]?'''", '[ubUB]?[rR]?"""');
	var String_ = group("[uU]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*'",
	    '[uU]?[rR]?"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*"');

	// Because of leftmost-then-longest match semantics, be sure to put the
	// longest operators first (e.g., if = came before ==, == would get
	// recognized as two instances of =).
	var Operator = group("\\*\\*=?", ">>=?", "<<=?", "<>", "!=",
	    "//=?", "->",
	    "[+\\-*/%&|^=<>]=?",
	    "~");

	var Bracket = "[\\][(){}]";
	var Special = group("\\r?\\n", "[:;.,`@]");
	var Funny = group(Operator, Bracket, Special);

	var ContStr = group("[uUbB]?[rR]?'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*" +
	        group("'", "\\\\\\r?\\n"),
	        "[uUbB]?[rR]?\"[^\\n\"\\\\]*(?:\\\\.[^\\n\"\\\\]*)*" +
	        group("\"", "\\\\\\r?\\n"));
	var PseudoExtras = group("\\\\\\r?\\n", Comment_, Triple);
	// Need to prefix with "^" as we only want to match what's next
	var PseudoToken = "^" + group(PseudoExtras, Number_, Funny, ContStr, Ident);


	var triple_quoted = {
	    "'''"  : true, '"""': true,
	    "r'''" : true, 'r"""': true, "R'''": true, 'R"""': true,
	    "u'''" : true, 'u"""': true, "U'''": true, 'U"""': true,
	    "b'''" : true, 'b"""': true, "B'''": true, 'B"""': true,
	    "ur'''": true, 'ur"""': true, "Ur'''": true, 'Ur"""': true,
	    "uR'''": true, 'uR"""': true, "UR'''": true, 'UR"""': true,
	    "br'''": true, 'br"""': true, "Br'''": true, 'Br"""': true,
	    "bR'''": true, 'bR"""': true, "BR'''": true, 'BR"""': true
	};

	var single_quoted = {
	    "'"  : true, '"': true,
	    "r'" : true, 'r"': true, "R'": true, 'R"': true,
	    "u'" : true, 'u"': true, "U'": true, 'U"': true,
	    "b'" : true, 'b"': true, "B'": true, 'B"': true,
	    "ur'": true, 'ur"': true, "Ur'": true, 'Ur"': true,
	    "uR'": true, 'uR"': true, "UR'": true, 'UR"': true,
	    "br'": true, 'br"': true, "Br'": true, 'Br"': true,
	    "bR'": true, 'bR"': true, "BR'": true, 'BR"': true
	};

	// hack to make closure keep those objects. not sure what a better way is.
	(function () {
	    var k;
	    for (k in triple_quoted) {
	    }
	    for (k in single_quoted) {
	    }
	}());


	var tabsize = 8;

	function contains (a, obj) {
	    var i = a.length;
	    while (i--) {
	        if (a[i] === obj) {
	            return true;
	        }
	    }
	    return false;
	}

	function rstrip (input, what) {
	    var i;
	    for (i = input.length; i > 0; --i) {
	        if (what.indexOf(input.charAt(i - 1)) === -1) {
	            break;
	        }
	    }
	    return input.substring(0, i);
	}

	Sk.Tokenizer.prototype.generateTokens = function (line) {
	    var nl_pos;
	    var newl;
	    var initial;
	    var token;
	    var epos;
	    var spos;
	    var start;
	    var pseudomatch;
	    var capos;
	    var comment_token;
	    var endmatch, pos, column, end, max;


	    // bnm - Move these definitions in this function otherwise test state is preserved between
	    // calls on single3prog and double3prog causing weird errors with having multiple instances
	    // of triple quoted strings in the same program.

	    var pseudoprog = new RegExp(PseudoToken);
	    var single3prog = new RegExp(Single3, "g");
	    var double3prog = new RegExp(Double3, "g");

	    var endprogs = {     "'": new RegExp(Single, "g"), "\"": new RegExp(Double_, "g"),
	        "'''"               : single3prog, '"""': double3prog,
	        "r'''"              : single3prog, 'r"""': double3prog,
	        "u'''"              : single3prog, 'u"""': double3prog,
	        "b'''"              : single3prog, 'b"""': double3prog,
	        "ur'''"             : single3prog, 'ur"""': double3prog,
	        "br'''"             : single3prog, 'br"""': double3prog,
	        "R'''"              : single3prog, 'R"""': double3prog,
	        "U'''"              : single3prog, 'U"""': double3prog,
	        "B'''"              : single3prog, 'B"""': double3prog,
	        "uR'''"             : single3prog, 'uR"""': double3prog,
	        "Ur'''"             : single3prog, 'Ur"""': double3prog,
	        "UR'''"             : single3prog, 'UR"""': double3prog,
	        "bR'''"             : single3prog, 'bR"""': double3prog,
	        "Br'''"             : single3prog, 'Br"""': double3prog,
	        "BR'''"             : single3prog, 'BR"""': double3prog,
	        'r'                 : null, 'R': null,
	        'u'                 : null, 'U': null,
	        'b'                 : null, 'B': null
	    };


	    if (!line) {
	        line = '';
	    }
	    //print("LINE:'"+line+"'");

	    this.lnum += 1;
	    pos = 0;
	    max = line.length;

	    if (this.contstr.length > 0) {
	        if (!line) {
	            throw new Sk.builtin.SyntaxError("EOF in multi-line string", this.filename, this.strstart[0], this.strstart[1], {
	                kind: "STRING_EOF",
	                line: this.contline
	            });
	        }
	        this.endprog.lastIndex = 0;
	        endmatch = this.endprog.test(line);
	        if (endmatch) {
	            pos = end = this.endprog.lastIndex;
	            if (this.callback(Sk.Tokenizer.Tokens.T_STRING, this.contstr + line.substring(0, end),
	                this.strstart, [this.lnum, end], this.contline + line)) {
	                return 'done';
	            }
	            this.contstr = '';
	            this.needcont = false;
	            this.contline = undefined;
	        }
	        else if (this.needcont && line.substring(line.length - 2) !== "\\\n" && line.substring(line.length - 3) !== "\\\r\n") {
	            if (this.callback(Sk.Tokenizer.Tokens.T_ERRORTOKEN, this.contstr + line,
	                this.strstart, [this.lnum, line.length], this.contline)) {
	                return 'done';
	            }
	            this.contstr = '';
	            this.contline = undefined;
	            return false;
	        }
	        else {
	            this.contstr += line;
	            this.contline = this.contline + line;
	            return false;
	        }
	    }
	    else if (this.parenlev === 0 && !this.continued) {
	        if (!line) {
	            return this.doneFunc();
	        }
	        column = 0;
	        while (pos < max) {
	            if (line.charAt(pos) === ' ') {
	                column += 1;
	            }
	            else if (line.charAt(pos) === '\t') {
	                column = (column / tabsize + 1) * tabsize;
	            }
	            else if (line.charAt(pos) === '\f') {
	                column = 0;
	            }
	            else {
	                break;
	            }
	            pos = pos + 1;
	        }
	        if (pos === max) {
	            return this.doneFunc();
	        }

	        if ("#\r\n".indexOf(line.charAt(pos)) !== -1) // skip comments or blank lines
	        {
	            if (line.charAt(pos) === '#') {
	                comment_token = rstrip(line.substring(pos), '\r\n');
	                nl_pos = pos + comment_token.length;
	                if (this.callback(Sk.Tokenizer.Tokens.T_COMMENT, comment_token,
	                    [this.lnum, pos], [this.lnum, pos + comment_token.length], line)) {
	                    return 'done';
	                }
	                //print("HERE:1");
	                if (this.callback(Sk.Tokenizer.Tokens.T_NL, line.substring(nl_pos),
	                    [this.lnum, nl_pos], [this.lnum, line.length], line)) {
	                    return 'done';
	                }
	                return false;
	            }
	            else {
	                //print("HERE:2");
	                if (this.callback(Sk.Tokenizer.Tokens.T_NL, line.substring(pos),
	                    [this.lnum, pos], [this.lnum, line.length], line)) {
	                    return 'done';
	                }
	                if (!this.interactive) {
	                    return false;
	                }
	            }
	        }

	        if (column > this.indents[this.indents.length - 1]) // count indents or dedents
	        {
	            this.indents.push(column);
	            if (this.callback(Sk.Tokenizer.Tokens.T_INDENT, line.substring(0, pos), [this.lnum, 0], [this.lnum, pos], line)) {
	                return 'done';
	            }
	        }
	        while (column < this.indents[this.indents.length - 1]) {
	            if (!contains(this.indents, column)) {
	                throw new Sk.builtin.IndentationError("unindent does not match any outer indentation level",
	                    this.filename, this.lnum, pos, line);
	            }
	            this.indents.splice(this.indents.length - 1, 1);
	            //print("dedent here");
	            if (this.callback(Sk.Tokenizer.Tokens.T_DEDENT, '', [this.lnum, pos], [this.lnum, pos], line)) {
	                return 'done';
	            }
	        }
	    }
	    else // continued statement
	    {
	        if (!line) {
	            throw new Sk.builtin.SyntaxError("EOF in multi-line statement", this.filename, this.lnum, 0, {
	                kind: 'STATEMENT_EOF',
	                parenlev: this.parenlev,
	                parenstack: this.parenstack
	            });
	        }
	        this.continued = false;
	    }

	    while (pos < max) {
	        //print("pos:"+pos+":"+max);
	        // js regexes don't return any info about matches, other than the
	        // content. we'd like to put a \w+ before pseudomatch, but then we
	        // can't get any data
	        capos = line.charAt(pos);
	        while (capos === ' ' || capos === '\f' || capos === '\t') {
	            pos += 1;
	            capos = line.charAt(pos);
	        }
	        pseudoprog.lastIndex = 0;
	        pseudomatch = pseudoprog.exec(line.substring(pos));
	        if (pseudomatch) {
	            start = pos;
	            end = start + pseudomatch[1].length;
	            spos = [this.lnum, start];
	            epos = [this.lnum, end];
	            pos = end;
	            token = line.substring(start, end);
	            initial = line.charAt(start);
	            //Sk.debugout("token:",token, "initial:",initial, start, end);
	            if (this.numchars.indexOf(initial) !== -1 || (initial === '.' && token !== '.')) {
	                if (this.callback(Sk.Tokenizer.Tokens.T_NUMBER, token, spos, epos, line)) {
	                    return 'done';
	                }
	            }
	            else if (initial === '\r' || initial === '\n') {
	                newl = Sk.Tokenizer.Tokens.T_NEWLINE;
	                //print("HERE:3");
	                if (this.parenlev > 0) {
	                    newl = Sk.Tokenizer.Tokens.T_NL;
	                }
	                if (this.callback(newl, token, spos, epos, line)) {
	                    return 'done';
	                }
	            }
	            else if (initial === '#') {
	                if (this.callback(Sk.Tokenizer.Tokens.T_COMMENT, token, spos, epos, line)) {
	                    return 'done';
	                }
	            }
	            else if (triple_quoted.hasOwnProperty(token)) {
	                this.endprog = endprogs[token];
	                this.endprog.lastIndex = 0;
	                endmatch = this.endprog.test(line.substring(pos));
	                if (endmatch) {
	                    pos = this.endprog.lastIndex + pos;
	                    token = line.substring(start, pos);
	                    if (this.callback(Sk.Tokenizer.Tokens.T_STRING, token, spos, [this.lnum, pos], line)) {
	                        return 'done';
	                    }
	                }
	                else {
	                    this.strstart = [this.lnum, start];
	                    this.contstr = line.substring(start);
	                    this.contline = line;
	                    return false;
	                }
	            }
	            else if (single_quoted.hasOwnProperty(initial) ||
	                single_quoted.hasOwnProperty(token.substring(0, 2)) ||
	                single_quoted.hasOwnProperty(token.substring(0, 3))) {
	                if (token[token.length - 1] === '\n') {
	                    this.strstart = [this.lnum, start];
	                    this.endprog = endprogs[initial] || endprogs[token[1]] || endprogs[token[2]];
	                    this.contstr = line.substring(start);
	                    this.needcont = true;
	                    this.contline = line;
	                    //print("i, t1, t2", initial, token[1], token[2]);
	                    //print("ep, cs", this.endprog, this.contstr);
	                    return false;
	                }
	                else {
	                    if (this.callback(Sk.Tokenizer.Tokens.T_STRING, token, spos, epos, line)) {
	                        return 'done';
	                    }
	                }
	            }
	            else if (this.namechars.indexOf(initial) !== -1) {
	                if (this.callback(Sk.Tokenizer.Tokens.T_NAME, token, spos, epos, line)) {
	                    return 'done';
	                }
	            }
	            else if (initial === '\\') {
	                //print("HERE:4");
	                if (this.callback(Sk.Tokenizer.Tokens.T_NL, token, spos, [this.lnum, pos], line)) {
	                    return 'done';
	                }
	                this.continued = true;
	            }
	            else {
	                if ('([{'.indexOf(initial) !== -1) {
	                    this.parenlev += 1;
	                    this.parenstack.push([initial, this.lnum, pos]);
	                }
	                else if (')]}'.indexOf(initial) !== -1) {
	                    this.parenlev -= 1;
	                    this.parenstack.pop();
	                }
	                if (this.callback(Sk.Tokenizer.Tokens.T_OP, token, spos, epos, line)) {
	                    return 'done';
	                }
	            }
	        }
	        else {
	            if (this.callback(Sk.Tokenizer.Tokens.T_ERRORTOKEN, line.charAt(pos),
	                [this.lnum, pos], [this.lnum, pos + 1], line)) {
	                return 'done';
	            }
	            pos += 1;
	        }
	    }

	    return false;
	};

	Sk.Tokenizer.tokenNames = {
	    0  : 'T_ENDMARKER', 1: 'T_NAME', 2: 'T_NUMBER', 3: 'T_STRING', 4: 'T_NEWLINE',
	    5  : 'T_INDENT', 6: 'T_DEDENT', 7: 'T_LPAR', 8: 'T_RPAR', 9: 'T_LSQB',
	    10 : 'T_RSQB', 11: 'T_COLON', 12: 'T_COMMA', 13: 'T_SEMI', 14: 'T_PLUS',
	    15 : 'T_MINUS', 16: 'T_STAR', 17: 'T_SLASH', 18: 'T_VBAR', 19: 'T_AMPER',
	    20 : 'T_LESS', 21: 'T_GREATER', 22: 'T_EQUAL', 23: 'T_DOT', 24: 'T_PERCENT',
	    25 : 'T_BACKQUOTE', 26: 'T_LBRACE', 27: 'T_RBRACE', 28: 'T_EQEQUAL', 29: 'T_NOTEQUAL',
	    30 : 'T_LESSEQUAL', 31: 'T_GREATEREQUAL', 32: 'T_TILDE', 33: 'T_CIRCUMFLEX', 34: 'T_LEFTSHIFT',
	    35 : 'T_RIGHTSHIFT', 36: 'T_DOUBLESTAR', 37: 'T_PLUSEQUAL', 38: 'T_MINEQUAL', 39: 'T_STAREQUAL',
	    40 : 'T_SLASHEQUAL', 41: 'T_PERCENTEQUAL', 42: 'T_AMPEREQUAL', 43: 'T_VBAREQUAL', 44: 'T_CIRCUMFLEXEQUAL',
	    45 : 'T_LEFTSHIFTEQUAL', 46: 'T_RIGHTSHIFTEQUAL', 47: 'T_DOUBLESTAREQUAL', 48: 'T_DOUBLESLASH', 49: 'T_DOUBLESLASHEQUAL',
	    50 : 'T_AT', 51: 'T_OP', 52: 'T_COMMENT', 53: 'T_NL', 54: 'T_RARROW',
	    55 : 'T_ERRORTOKEN', 56: 'T_N_TOKENS',
	    256: 'T_NT_OFFSET'
	};

	goog.exportSymbol("Sk.Tokenizer", Sk.Tokenizer);
	goog.exportSymbol("Sk.Tokenizer.prototype.generateTokens", Sk.Tokenizer.prototype.generateTokens);
	goog.exportSymbol("Sk.Tokenizer.tokenNames", Sk.Tokenizer.tokenNames);



	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/gen/parse_tables.js ---- */ 

	// generated by pgen/main.py
	Sk.OpMap = {
	"(": Sk.Tokenizer.Tokens.T_LPAR,
	")": Sk.Tokenizer.Tokens.T_RPAR,
	"[": Sk.Tokenizer.Tokens.T_LSQB,
	"]": Sk.Tokenizer.Tokens.T_RSQB,
	":": Sk.Tokenizer.Tokens.T_COLON,
	",": Sk.Tokenizer.Tokens.T_COMMA,
	";": Sk.Tokenizer.Tokens.T_SEMI,
	"+": Sk.Tokenizer.Tokens.T_PLUS,
	"-": Sk.Tokenizer.Tokens.T_MINUS,
	"*": Sk.Tokenizer.Tokens.T_STAR,
	"/": Sk.Tokenizer.Tokens.T_SLASH,
	"|": Sk.Tokenizer.Tokens.T_VBAR,
	"&": Sk.Tokenizer.Tokens.T_AMPER,
	"<": Sk.Tokenizer.Tokens.T_LESS,
	">": Sk.Tokenizer.Tokens.T_GREATER,
	"=": Sk.Tokenizer.Tokens.T_EQUAL,
	".": Sk.Tokenizer.Tokens.T_DOT,
	"%": Sk.Tokenizer.Tokens.T_PERCENT,
	"`": Sk.Tokenizer.Tokens.T_BACKQUOTE,
	"{": Sk.Tokenizer.Tokens.T_LBRACE,
	"}": Sk.Tokenizer.Tokens.T_RBRACE,
	"@": Sk.Tokenizer.Tokens.T_AT,
	"==": Sk.Tokenizer.Tokens.T_EQEQUAL,
	"!=": Sk.Tokenizer.Tokens.T_NOTEQUAL,
	"<>": Sk.Tokenizer.Tokens.T_NOTEQUAL,
	"<=": Sk.Tokenizer.Tokens.T_LESSEQUAL,
	">=": Sk.Tokenizer.Tokens.T_GREATEREQUAL,
	"~": Sk.Tokenizer.Tokens.T_TILDE,
	"^": Sk.Tokenizer.Tokens.T_CIRCUMFLEX,
	"<<": Sk.Tokenizer.Tokens.T_LEFTSHIFT,
	">>": Sk.Tokenizer.Tokens.T_RIGHTSHIFT,
	"**": Sk.Tokenizer.Tokens.T_DOUBLESTAR,
	"+=": Sk.Tokenizer.Tokens.T_PLUSEQUAL,
	"-=": Sk.Tokenizer.Tokens.T_MINEQUAL,
	"*=": Sk.Tokenizer.Tokens.T_STAREQUAL,
	"/=": Sk.Tokenizer.Tokens.T_SLASHEQUAL,
	"%=": Sk.Tokenizer.Tokens.T_PERCENTEQUAL,
	"&=": Sk.Tokenizer.Tokens.T_AMPEREQUAL,
	"|=": Sk.Tokenizer.Tokens.T_VBAREQUAL,
	"^=": Sk.Tokenizer.Tokens.T_CIRCUMFLEXEQUAL,
	"<<=": Sk.Tokenizer.Tokens.T_LEFTSHIFTEQUAL,
	">>=": Sk.Tokenizer.Tokens.T_RIGHTSHIFTEQUAL,
	"**=": Sk.Tokenizer.Tokens.T_DOUBLESTAREQUAL,
	"//": Sk.Tokenizer.Tokens.T_DOUBLESLASH,
	"//=": Sk.Tokenizer.Tokens.T_DOUBLESLASHEQUAL,
	"->": Sk.Tokenizer.Tokens.T_RARROW
	};
	Sk.ParseTables = {
	sym:
	{and_expr: 257,
	 and_test: 258,
	 arglist: 259,
	 argument: 260,
	 arith_expr: 261,
	 assert_stmt: 262,
	 atom: 263,
	 augassign: 264,
	 break_stmt: 265,
	 classdef: 266,
	 comp_for: 267,
	 comp_if: 268,
	 comp_iter: 269,
	 comp_op: 270,
	 comparison: 271,
	 compound_stmt: 272,
	 continue_stmt: 273,
	 debugger_stmt: 274,
	 decorated: 275,
	 decorator: 276,
	 decorators: 277,
	 del_stmt: 278,
	 dictorsetmaker: 279,
	 dotted_as_name: 280,
	 dotted_as_names: 281,
	 dotted_name: 282,
	 encoding_decl: 283,
	 eval_input: 284,
	 except_clause: 285,
	 exec_stmt: 286,
	 expr: 287,
	 expr_stmt: 288,
	 exprlist: 289,
	 factor: 290,
	 file_input: 291,
	 flow_stmt: 292,
	 for_stmt: 293,
	 fpdef: 294,
	 fplist: 295,
	 funcdef: 296,
	 global_stmt: 297,
	 if_stmt: 298,
	 import_as_name: 299,
	 import_as_names: 300,
	 import_from: 301,
	 import_name: 302,
	 import_stmt: 303,
	 lambdef: 304,
	 list_for: 305,
	 list_if: 306,
	 list_iter: 307,
	 listmaker: 308,
	 not_test: 309,
	 old_lambdef: 310,
	 old_test: 311,
	 or_test: 312,
	 parameters: 313,
	 pass_stmt: 314,
	 power: 315,
	 print_stmt: 316,
	 raise_stmt: 317,
	 return_stmt: 318,
	 shift_expr: 319,
	 simple_stmt: 320,
	 single_input: 256,
	 sliceop: 321,
	 small_stmt: 322,
	 stmt: 323,
	 subscript: 324,
	 subscriptlist: 325,
	 suite: 326,
	 term: 327,
	 test: 328,
	 testlist: 329,
	 testlist1: 330,
	 testlist_comp: 331,
	 testlist_safe: 332,
	 trailer: 333,
	 try_stmt: 334,
	 varargslist: 335,
	 while_stmt: 336,
	 with_item: 337,
	 with_stmt: 338,
	 xor_expr: 339,
	 yield_expr: 340,
	 yield_stmt: 341},
	number2symbol:
	{256: 'single_input',
	 257: 'and_expr',
	 258: 'and_test',
	 259: 'arglist',
	 260: 'argument',
	 261: 'arith_expr',
	 262: 'assert_stmt',
	 263: 'atom',
	 264: 'augassign',
	 265: 'break_stmt',
	 266: 'classdef',
	 267: 'comp_for',
	 268: 'comp_if',
	 269: 'comp_iter',
	 270: 'comp_op',
	 271: 'comparison',
	 272: 'compound_stmt',
	 273: 'continue_stmt',
	 274: 'debugger_stmt',
	 275: 'decorated',
	 276: 'decorator',
	 277: 'decorators',
	 278: 'del_stmt',
	 279: 'dictorsetmaker',
	 280: 'dotted_as_name',
	 281: 'dotted_as_names',
	 282: 'dotted_name',
	 283: 'encoding_decl',
	 284: 'eval_input',
	 285: 'except_clause',
	 286: 'exec_stmt',
	 287: 'expr',
	 288: 'expr_stmt',
	 289: 'exprlist',
	 290: 'factor',
	 291: 'file_input',
	 292: 'flow_stmt',
	 293: 'for_stmt',
	 294: 'fpdef',
	 295: 'fplist',
	 296: 'funcdef',
	 297: 'global_stmt',
	 298: 'if_stmt',
	 299: 'import_as_name',
	 300: 'import_as_names',
	 301: 'import_from',
	 302: 'import_name',
	 303: 'import_stmt',
	 304: 'lambdef',
	 305: 'list_for',
	 306: 'list_if',
	 307: 'list_iter',
	 308: 'listmaker',
	 309: 'not_test',
	 310: 'old_lambdef',
	 311: 'old_test',
	 312: 'or_test',
	 313: 'parameters',
	 314: 'pass_stmt',
	 315: 'power',
	 316: 'print_stmt',
	 317: 'raise_stmt',
	 318: 'return_stmt',
	 319: 'shift_expr',
	 320: 'simple_stmt',
	 321: 'sliceop',
	 322: 'small_stmt',
	 323: 'stmt',
	 324: 'subscript',
	 325: 'subscriptlist',
	 326: 'suite',
	 327: 'term',
	 328: 'test',
	 329: 'testlist',
	 330: 'testlist1',
	 331: 'testlist_comp',
	 332: 'testlist_safe',
	 333: 'trailer',
	 334: 'try_stmt',
	 335: 'varargslist',
	 336: 'while_stmt',
	 337: 'with_item',
	 338: 'with_stmt',
	 339: 'xor_expr',
	 340: 'yield_expr',
	 341: 'yield_stmt'},
	dfas:
	{256: [[[[1, 1], [2, 1], [3, 2]], [[0, 1]], [[2, 1]]],
	       {2: 1,
	        4: 1,
	        5: 1,
	        6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        10: 1,
	        11: 1,
	        12: 1,
	        13: 1,
	        14: 1,
	        15: 1,
	        16: 1,
	        17: 1,
	        18: 1,
	        19: 1,
	        20: 1,
	        21: 1,
	        22: 1,
	        23: 1,
	        24: 1,
	        25: 1,
	        26: 1,
	        27: 1,
	        28: 1,
	        29: 1,
	        30: 1,
	        31: 1,
	        32: 1,
	        33: 1,
	        34: 1,
	        35: 1,
	        36: 1,
	        37: 1}],
	 257: [[[[38, 1]], [[39, 0], [0, 1]]],
	       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
	 258: [[[[40, 1]], [[41, 0], [0, 1]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 259: [[[[42, 1], [43, 2], [44, 3]],
	        [[45, 4]],
	        [[46, 5], [0, 2]],
	        [[45, 6]],
	        [[46, 7], [0, 4]],
	        [[42, 1], [43, 2], [44, 3], [0, 5]],
	        [[0, 6]],
	        [[43, 4], [44, 3]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1,
	        42: 1,
	        44: 1}],
	 260: [[[[45, 1]], [[47, 2], [48, 3], [0, 1]], [[45, 3]], [[0, 3]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 261: [[[[49, 1]], [[26, 0], [37, 0], [0, 1]]],
	       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
	 262: [[[[21, 1]], [[45, 2]], [[46, 3], [0, 2]], [[45, 4]], [[0, 4]]],
	       {21: 1}],
	 263: [[[[19, 1], [8, 2], [9, 5], [30, 4], [14, 3], [15, 6], [22, 2]],
	        [[19, 1], [0, 1]],
	        [[0, 2]],
	        [[50, 7], [51, 2]],
	        [[52, 2], [53, 8], [54, 8]],
	        [[55, 2], [56, 9]],
	        [[57, 10]],
	        [[51, 2]],
	        [[52, 2]],
	        [[55, 2]],
	        [[15, 2]]],
	       {8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 30: 1}],
	 264: [[[[58, 1],
	         [59, 1],
	         [60, 1],
	         [61, 1],
	         [62, 1],
	         [63, 1],
	         [64, 1],
	         [65, 1],
	         [66, 1],
	         [67, 1],
	         [68, 1],
	         [69, 1]],
	        [[0, 1]]],
	       {58: 1,
	        59: 1,
	        60: 1,
	        61: 1,
	        62: 1,
	        63: 1,
	        64: 1,
	        65: 1,
	        66: 1,
	        67: 1,
	        68: 1,
	        69: 1}],
	 265: [[[[33, 1]], [[0, 1]]], {33: 1}],
	 266: [[[[10, 1]],
	        [[22, 2]],
	        [[70, 3], [30, 4]],
	        [[71, 5]],
	        [[52, 6], [72, 7]],
	        [[0, 5]],
	        [[70, 3]],
	        [[52, 6]]],
	       {10: 1}],
	 267: [[[[29, 1]],
	        [[73, 2]],
	        [[74, 3]],
	        [[75, 4]],
	        [[76, 5], [0, 4]],
	        [[0, 5]]],
	       {29: 1}],
	 268: [[[[32, 1]], [[77, 2]], [[76, 3], [0, 2]], [[0, 3]]], {32: 1}],
	 269: [[[[78, 1], [48, 1]], [[0, 1]]], {29: 1, 32: 1}],
	 270: [[[[79, 1],
	         [80, 1],
	         [7, 2],
	         [81, 1],
	         [79, 1],
	         [74, 1],
	         [82, 1],
	         [83, 3],
	         [84, 1],
	         [85, 1]],
	        [[0, 1]],
	        [[74, 1]],
	        [[7, 1], [0, 3]]],
	       {7: 1, 74: 1, 79: 1, 80: 1, 81: 1, 82: 1, 83: 1, 84: 1, 85: 1}],
	 271: [[[[86, 1]], [[87, 0], [0, 1]]],
	       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
	 272: [[[[88, 1],
	         [89, 1],
	         [90, 1],
	         [91, 1],
	         [92, 1],
	         [93, 1],
	         [94, 1],
	         [95, 1]],
	        [[0, 1]]],
	       {4: 1, 10: 1, 16: 1, 18: 1, 29: 1, 32: 1, 35: 1, 36: 1}],
	 273: [[[[34, 1]], [[0, 1]]], {34: 1}],
	 274: [[[[13, 1]], [[0, 1]]], {13: 1}],
	 275: [[[[96, 1]], [[94, 2], [91, 2]], [[0, 2]]], {35: 1}],
	 276: [[[[35, 1]],
	        [[97, 2]],
	        [[2, 4], [30, 3]],
	        [[52, 5], [98, 6]],
	        [[0, 4]],
	        [[2, 4]],
	        [[52, 5]]],
	       {35: 1}],
	 277: [[[[99, 1]], [[99, 1], [0, 1]]], {35: 1}],
	 278: [[[[23, 1]], [[73, 2]], [[0, 2]]], {23: 1}],
	 279: [[[[45, 1]],
	        [[70, 2], [48, 3], [46, 4], [0, 1]],
	        [[45, 5]],
	        [[0, 3]],
	        [[45, 6], [0, 4]],
	        [[48, 3], [46, 7], [0, 5]],
	        [[46, 4], [0, 6]],
	        [[45, 8], [0, 7]],
	        [[70, 9]],
	        [[45, 10]],
	        [[46, 7], [0, 10]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 280: [[[[97, 1]], [[100, 2], [0, 1]], [[22, 3]], [[0, 3]]], {22: 1}],
	 281: [[[[101, 1]], [[46, 0], [0, 1]]], {22: 1}],
	 282: [[[[22, 1]], [[102, 0], [0, 1]]], {22: 1}],
	 283: [[[[22, 1]], [[0, 1]]], {22: 1}],
	 284: [[[[72, 1]], [[2, 1], [103, 2]], [[0, 2]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 285: [[[[104, 1]],
	        [[45, 2], [0, 1]],
	        [[100, 3], [46, 3], [0, 2]],
	        [[45, 4]],
	        [[0, 4]]],
	       {104: 1}],
	 286: [[[[17, 1]],
	        [[86, 2]],
	        [[74, 3], [0, 2]],
	        [[45, 4]],
	        [[46, 5], [0, 4]],
	        [[45, 6]],
	        [[0, 6]]],
	       {17: 1}],
	 287: [[[[105, 1]], [[106, 0], [0, 1]]],
	       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
	 288: [[[[72, 1]],
	        [[107, 2], [47, 3], [0, 1]],
	        [[72, 4], [53, 4]],
	        [[72, 5], [53, 5]],
	        [[0, 4]],
	        [[47, 3], [0, 5]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 289: [[[[86, 1]], [[46, 2], [0, 1]], [[86, 1], [0, 2]]],
	       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
	 290: [[[[37, 2], [26, 2], [6, 2], [108, 1]], [[0, 1]], [[109, 1]]],
	       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
	 291: [[[[2, 0], [103, 1], [110, 0]], [[0, 1]]],
	       {2: 1,
	        4: 1,
	        5: 1,
	        6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        10: 1,
	        11: 1,
	        12: 1,
	        13: 1,
	        14: 1,
	        15: 1,
	        16: 1,
	        17: 1,
	        18: 1,
	        19: 1,
	        20: 1,
	        21: 1,
	        22: 1,
	        23: 1,
	        24: 1,
	        25: 1,
	        26: 1,
	        27: 1,
	        28: 1,
	        29: 1,
	        30: 1,
	        31: 1,
	        32: 1,
	        33: 1,
	        34: 1,
	        35: 1,
	        36: 1,
	        37: 1,
	        103: 1}],
	 292: [[[[111, 1], [112, 1], [113, 1], [114, 1], [115, 1]], [[0, 1]]],
	       {5: 1, 20: 1, 27: 1, 33: 1, 34: 1}],
	 293: [[[[29, 1]],
	        [[73, 2]],
	        [[74, 3]],
	        [[72, 4]],
	        [[70, 5]],
	        [[71, 6]],
	        [[116, 7], [0, 6]],
	        [[70, 8]],
	        [[71, 9]],
	        [[0, 9]]],
	       {29: 1}],
	 294: [[[[30, 1], [22, 2]], [[117, 3]], [[0, 2]], [[52, 2]]], {22: 1, 30: 1}],
	 295: [[[[118, 1]], [[46, 2], [0, 1]], [[118, 1], [0, 2]]], {22: 1, 30: 1}],
	 296: [[[[4, 1]], [[22, 2]], [[119, 3]], [[70, 4]], [[71, 5]], [[0, 5]]],
	       {4: 1}],
	 297: [[[[28, 1]], [[22, 2]], [[46, 1], [0, 2]]], {28: 1}],
	 298: [[[[32, 1]],
	        [[45, 2]],
	        [[70, 3]],
	        [[71, 4]],
	        [[116, 5], [120, 1], [0, 4]],
	        [[70, 6]],
	        [[71, 7]],
	        [[0, 7]]],
	       {32: 1}],
	 299: [[[[22, 1]], [[100, 2], [0, 1]], [[22, 3]], [[0, 3]]], {22: 1}],
	 300: [[[[121, 1]], [[46, 2], [0, 1]], [[121, 1], [0, 2]]], {22: 1}],
	 301: [[[[31, 1]],
	        [[97, 2], [102, 3]],
	        [[25, 4]],
	        [[97, 2], [25, 4], [102, 3]],
	        [[122, 5], [42, 5], [30, 6]],
	        [[0, 5]],
	        [[122, 7]],
	        [[52, 5]]],
	       {31: 1}],
	 302: [[[[25, 1]], [[123, 2]], [[0, 2]]], {25: 1}],
	 303: [[[[124, 1], [125, 1]], [[0, 1]]], {25: 1, 31: 1}],
	 304: [[[[11, 1]], [[70, 2], [126, 3]], [[45, 4]], [[70, 2]], [[0, 4]]],
	       {11: 1}],
	 305: [[[[29, 1]],
	        [[73, 2]],
	        [[74, 3]],
	        [[127, 4]],
	        [[128, 5], [0, 4]],
	        [[0, 5]]],
	       {29: 1}],
	 306: [[[[32, 1]], [[77, 2]], [[128, 3], [0, 2]], [[0, 3]]], {32: 1}],
	 307: [[[[129, 1], [130, 1]], [[0, 1]]], {29: 1, 32: 1}],
	 308: [[[[45, 1]],
	        [[129, 2], [46, 3], [0, 1]],
	        [[0, 2]],
	        [[45, 4], [0, 3]],
	        [[46, 3], [0, 4]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 309: [[[[7, 1], [131, 2]], [[40, 2]], [[0, 2]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 310: [[[[11, 1]], [[70, 2], [126, 3]], [[77, 4]], [[70, 2]], [[0, 4]]],
	       {11: 1}],
	 311: [[[[132, 1], [75, 1]], [[0, 1]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 312: [[[[133, 1]], [[134, 0], [0, 1]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 313: [[[[30, 1]], [[52, 2], [126, 3]], [[0, 2]], [[52, 2]]], {30: 1}],
	 314: [[[[24, 1]], [[0, 1]]], {24: 1}],
	 315: [[[[135, 1]], [[44, 2], [136, 1], [0, 1]], [[109, 3]], [[0, 3]]],
	       {8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 30: 1}],
	 316: [[[[12, 1]],
	        [[45, 2], [137, 3], [0, 1]],
	        [[46, 4], [0, 2]],
	        [[45, 5]],
	        [[45, 2], [0, 4]],
	        [[46, 6], [0, 5]],
	        [[45, 7]],
	        [[46, 8], [0, 7]],
	        [[45, 7], [0, 8]]],
	       {12: 1}],
	 317: [[[[5, 1]],
	        [[45, 2], [0, 1]],
	        [[46, 3], [0, 2]],
	        [[45, 4]],
	        [[46, 5], [0, 4]],
	        [[45, 6]],
	        [[0, 6]]],
	       {5: 1}],
	 318: [[[[20, 1]], [[72, 2], [0, 1]], [[0, 2]]], {20: 1}],
	 319: [[[[138, 1]], [[139, 0], [137, 0], [0, 1]]],
	       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
	 320: [[[[140, 1]], [[2, 2], [141, 3]], [[0, 2]], [[140, 1], [2, 2]]],
	       {5: 1,
	        6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        12: 1,
	        13: 1,
	        14: 1,
	        15: 1,
	        17: 1,
	        19: 1,
	        20: 1,
	        21: 1,
	        22: 1,
	        23: 1,
	        24: 1,
	        25: 1,
	        26: 1,
	        27: 1,
	        28: 1,
	        30: 1,
	        31: 1,
	        33: 1,
	        34: 1,
	        37: 1}],
	 321: [[[[70, 1]], [[45, 2], [0, 1]], [[0, 2]]], {70: 1}],
	 322: [[[[142, 1],
	         [143, 1],
	         [144, 1],
	         [145, 1],
	         [146, 1],
	         [147, 1],
	         [148, 1],
	         [149, 1],
	         [150, 1],
	         [151, 1]],
	        [[0, 1]]],
	       {5: 1,
	        6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        12: 1,
	        13: 1,
	        14: 1,
	        15: 1,
	        17: 1,
	        19: 1,
	        20: 1,
	        21: 1,
	        22: 1,
	        23: 1,
	        24: 1,
	        25: 1,
	        26: 1,
	        27: 1,
	        28: 1,
	        30: 1,
	        31: 1,
	        33: 1,
	        34: 1,
	        37: 1}],
	 323: [[[[1, 1], [3, 1]], [[0, 1]]],
	       {4: 1,
	        5: 1,
	        6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        10: 1,
	        11: 1,
	        12: 1,
	        13: 1,
	        14: 1,
	        15: 1,
	        16: 1,
	        17: 1,
	        18: 1,
	        19: 1,
	        20: 1,
	        21: 1,
	        22: 1,
	        23: 1,
	        24: 1,
	        25: 1,
	        26: 1,
	        27: 1,
	        28: 1,
	        29: 1,
	        30: 1,
	        31: 1,
	        32: 1,
	        33: 1,
	        34: 1,
	        35: 1,
	        36: 1,
	        37: 1}],
	 324: [[[[45, 1], [70, 2], [102, 3]],
	        [[70, 2], [0, 1]],
	        [[45, 4], [152, 5], [0, 2]],
	        [[102, 6]],
	        [[152, 5], [0, 4]],
	        [[0, 5]],
	        [[102, 5]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1,
	        70: 1,
	        102: 1}],
	 325: [[[[153, 1]], [[46, 2], [0, 1]], [[153, 1], [0, 2]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1,
	        70: 1,
	        102: 1}],
	 326: [[[[1, 1], [2, 2]],
	        [[0, 1]],
	        [[154, 3]],
	        [[110, 4]],
	        [[155, 1], [110, 4]]],
	       {2: 1,
	        5: 1,
	        6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        12: 1,
	        13: 1,
	        14: 1,
	        15: 1,
	        17: 1,
	        19: 1,
	        20: 1,
	        21: 1,
	        22: 1,
	        23: 1,
	        24: 1,
	        25: 1,
	        26: 1,
	        27: 1,
	        28: 1,
	        30: 1,
	        31: 1,
	        33: 1,
	        34: 1,
	        37: 1}],
	 327: [[[[109, 1]], [[156, 0], [42, 0], [157, 0], [158, 0], [0, 1]]],
	       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
	 328: [[[[75, 1], [159, 2]],
	        [[32, 3], [0, 1]],
	        [[0, 2]],
	        [[75, 4]],
	        [[116, 5]],
	        [[45, 2]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 329: [[[[45, 1]], [[46, 2], [0, 1]], [[45, 1], [0, 2]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 330: [[[[45, 1]], [[46, 0], [0, 1]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 331: [[[[45, 1]],
	        [[48, 2], [46, 3], [0, 1]],
	        [[0, 2]],
	        [[45, 4], [0, 3]],
	        [[46, 3], [0, 4]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 332: [[[[77, 1]],
	        [[46, 2], [0, 1]],
	        [[77, 3]],
	        [[46, 4], [0, 3]],
	        [[77, 3], [0, 4]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 333: [[[[30, 1], [102, 2], [14, 3]],
	        [[52, 4], [98, 5]],
	        [[22, 4]],
	        [[160, 6]],
	        [[0, 4]],
	        [[52, 4]],
	        [[51, 4]]],
	       {14: 1, 30: 1, 102: 1}],
	 334: [[[[16, 1]],
	        [[70, 2]],
	        [[71, 3]],
	        [[161, 4], [162, 5]],
	        [[70, 6]],
	        [[70, 7]],
	        [[71, 8]],
	        [[71, 9]],
	        [[161, 4], [116, 10], [162, 5], [0, 8]],
	        [[0, 9]],
	        [[70, 11]],
	        [[71, 12]],
	        [[162, 5], [0, 12]]],
	       {16: 1}],
	 335: [[[[42, 1], [118, 2], [44, 3]],
	        [[22, 4]],
	        [[47, 5], [46, 6], [0, 2]],
	        [[22, 7]],
	        [[46, 8], [0, 4]],
	        [[45, 9]],
	        [[42, 1], [118, 2], [44, 3], [0, 6]],
	        [[0, 7]],
	        [[44, 3]],
	        [[46, 6], [0, 9]]],
	       {22: 1, 30: 1, 42: 1, 44: 1}],
	 336: [[[[18, 1]],
	        [[45, 2]],
	        [[70, 3]],
	        [[71, 4]],
	        [[116, 5], [0, 4]],
	        [[70, 6]],
	        [[71, 7]],
	        [[0, 7]]],
	       {18: 1}],
	 337: [[[[45, 1]], [[100, 2], [0, 1]], [[86, 3]], [[0, 3]]],
	       {6: 1,
	        7: 1,
	        8: 1,
	        9: 1,
	        11: 1,
	        14: 1,
	        15: 1,
	        19: 1,
	        22: 1,
	        26: 1,
	        30: 1,
	        37: 1}],
	 338: [[[[36, 1]], [[163, 2]], [[70, 3], [46, 1]], [[71, 4]], [[0, 4]]],
	       {36: 1}],
	 339: [[[[164, 1]], [[165, 0], [0, 1]]],
	       {6: 1, 8: 1, 9: 1, 14: 1, 15: 1, 19: 1, 22: 1, 26: 1, 30: 1, 37: 1}],
	 340: [[[[27, 1]], [[72, 2], [0, 1]], [[0, 2]]], {27: 1}],
	 341: [[[[53, 1]], [[0, 1]]], {27: 1}]},
	states:
	[[[[1, 1], [2, 1], [3, 2]], [[0, 1]], [[2, 1]]],
	 [[[38, 1]], [[39, 0], [0, 1]]],
	 [[[40, 1]], [[41, 0], [0, 1]]],
	 [[[42, 1], [43, 2], [44, 3]],
	  [[45, 4]],
	  [[46, 5], [0, 2]],
	  [[45, 6]],
	  [[46, 7], [0, 4]],
	  [[42, 1], [43, 2], [44, 3], [0, 5]],
	  [[0, 6]],
	  [[43, 4], [44, 3]]],
	 [[[45, 1]], [[47, 2], [48, 3], [0, 1]], [[45, 3]], [[0, 3]]],
	 [[[49, 1]], [[26, 0], [37, 0], [0, 1]]],
	 [[[21, 1]], [[45, 2]], [[46, 3], [0, 2]], [[45, 4]], [[0, 4]]],
	 [[[19, 1], [8, 2], [9, 5], [30, 4], [14, 3], [15, 6], [22, 2]],
	  [[19, 1], [0, 1]],
	  [[0, 2]],
	  [[50, 7], [51, 2]],
	  [[52, 2], [53, 8], [54, 8]],
	  [[55, 2], [56, 9]],
	  [[57, 10]],
	  [[51, 2]],
	  [[52, 2]],
	  [[55, 2]],
	  [[15, 2]]],
	 [[[58, 1],
	   [59, 1],
	   [60, 1],
	   [61, 1],
	   [62, 1],
	   [63, 1],
	   [64, 1],
	   [65, 1],
	   [66, 1],
	   [67, 1],
	   [68, 1],
	   [69, 1]],
	  [[0, 1]]],
	 [[[33, 1]], [[0, 1]]],
	 [[[10, 1]],
	  [[22, 2]],
	  [[70, 3], [30, 4]],
	  [[71, 5]],
	  [[52, 6], [72, 7]],
	  [[0, 5]],
	  [[70, 3]],
	  [[52, 6]]],
	 [[[29, 1]], [[73, 2]], [[74, 3]], [[75, 4]], [[76, 5], [0, 4]], [[0, 5]]],
	 [[[32, 1]], [[77, 2]], [[76, 3], [0, 2]], [[0, 3]]],
	 [[[78, 1], [48, 1]], [[0, 1]]],
	 [[[79, 1],
	   [80, 1],
	   [7, 2],
	   [81, 1],
	   [79, 1],
	   [74, 1],
	   [82, 1],
	   [83, 3],
	   [84, 1],
	   [85, 1]],
	  [[0, 1]],
	  [[74, 1]],
	  [[7, 1], [0, 3]]],
	 [[[86, 1]], [[87, 0], [0, 1]]],
	 [[[88, 1], [89, 1], [90, 1], [91, 1], [92, 1], [93, 1], [94, 1], [95, 1]],
	  [[0, 1]]],
	 [[[34, 1]], [[0, 1]]],
	 [[[13, 1]], [[0, 1]]],
	 [[[96, 1]], [[94, 2], [91, 2]], [[0, 2]]],
	 [[[35, 1]],
	  [[97, 2]],
	  [[2, 4], [30, 3]],
	  [[52, 5], [98, 6]],
	  [[0, 4]],
	  [[2, 4]],
	  [[52, 5]]],
	 [[[99, 1]], [[99, 1], [0, 1]]],
	 [[[23, 1]], [[73, 2]], [[0, 2]]],
	 [[[45, 1]],
	  [[70, 2], [48, 3], [46, 4], [0, 1]],
	  [[45, 5]],
	  [[0, 3]],
	  [[45, 6], [0, 4]],
	  [[48, 3], [46, 7], [0, 5]],
	  [[46, 4], [0, 6]],
	  [[45, 8], [0, 7]],
	  [[70, 9]],
	  [[45, 10]],
	  [[46, 7], [0, 10]]],
	 [[[97, 1]], [[100, 2], [0, 1]], [[22, 3]], [[0, 3]]],
	 [[[101, 1]], [[46, 0], [0, 1]]],
	 [[[22, 1]], [[102, 0], [0, 1]]],
	 [[[22, 1]], [[0, 1]]],
	 [[[72, 1]], [[2, 1], [103, 2]], [[0, 2]]],
	 [[[104, 1]],
	  [[45, 2], [0, 1]],
	  [[100, 3], [46, 3], [0, 2]],
	  [[45, 4]],
	  [[0, 4]]],
	 [[[17, 1]],
	  [[86, 2]],
	  [[74, 3], [0, 2]],
	  [[45, 4]],
	  [[46, 5], [0, 4]],
	  [[45, 6]],
	  [[0, 6]]],
	 [[[105, 1]], [[106, 0], [0, 1]]],
	 [[[72, 1]],
	  [[107, 2], [47, 3], [0, 1]],
	  [[72, 4], [53, 4]],
	  [[72, 5], [53, 5]],
	  [[0, 4]],
	  [[47, 3], [0, 5]]],
	 [[[86, 1]], [[46, 2], [0, 1]], [[86, 1], [0, 2]]],
	 [[[37, 2], [26, 2], [6, 2], [108, 1]], [[0, 1]], [[109, 1]]],
	 [[[2, 0], [103, 1], [110, 0]], [[0, 1]]],
	 [[[111, 1], [112, 1], [113, 1], [114, 1], [115, 1]], [[0, 1]]],
	 [[[29, 1]],
	  [[73, 2]],
	  [[74, 3]],
	  [[72, 4]],
	  [[70, 5]],
	  [[71, 6]],
	  [[116, 7], [0, 6]],
	  [[70, 8]],
	  [[71, 9]],
	  [[0, 9]]],
	 [[[30, 1], [22, 2]], [[117, 3]], [[0, 2]], [[52, 2]]],
	 [[[118, 1]], [[46, 2], [0, 1]], [[118, 1], [0, 2]]],
	 [[[4, 1]], [[22, 2]], [[119, 3]], [[70, 4]], [[71, 5]], [[0, 5]]],
	 [[[28, 1]], [[22, 2]], [[46, 1], [0, 2]]],
	 [[[32, 1]],
	  [[45, 2]],
	  [[70, 3]],
	  [[71, 4]],
	  [[116, 5], [120, 1], [0, 4]],
	  [[70, 6]],
	  [[71, 7]],
	  [[0, 7]]],
	 [[[22, 1]], [[100, 2], [0, 1]], [[22, 3]], [[0, 3]]],
	 [[[121, 1]], [[46, 2], [0, 1]], [[121, 1], [0, 2]]],
	 [[[31, 1]],
	  [[97, 2], [102, 3]],
	  [[25, 4]],
	  [[97, 2], [25, 4], [102, 3]],
	  [[122, 5], [42, 5], [30, 6]],
	  [[0, 5]],
	  [[122, 7]],
	  [[52, 5]]],
	 [[[25, 1]], [[123, 2]], [[0, 2]]],
	 [[[124, 1], [125, 1]], [[0, 1]]],
	 [[[11, 1]], [[70, 2], [126, 3]], [[45, 4]], [[70, 2]], [[0, 4]]],
	 [[[29, 1]], [[73, 2]], [[74, 3]], [[127, 4]], [[128, 5], [0, 4]], [[0, 5]]],
	 [[[32, 1]], [[77, 2]], [[128, 3], [0, 2]], [[0, 3]]],
	 [[[129, 1], [130, 1]], [[0, 1]]],
	 [[[45, 1]],
	  [[129, 2], [46, 3], [0, 1]],
	  [[0, 2]],
	  [[45, 4], [0, 3]],
	  [[46, 3], [0, 4]]],
	 [[[7, 1], [131, 2]], [[40, 2]], [[0, 2]]],
	 [[[11, 1]], [[70, 2], [126, 3]], [[77, 4]], [[70, 2]], [[0, 4]]],
	 [[[132, 1], [75, 1]], [[0, 1]]],
	 [[[133, 1]], [[134, 0], [0, 1]]],
	 [[[30, 1]], [[52, 2], [126, 3]], [[0, 2]], [[52, 2]]],
	 [[[24, 1]], [[0, 1]]],
	 [[[135, 1]], [[44, 2], [136, 1], [0, 1]], [[109, 3]], [[0, 3]]],
	 [[[12, 1]],
	  [[45, 2], [137, 3], [0, 1]],
	  [[46, 4], [0, 2]],
	  [[45, 5]],
	  [[45, 2], [0, 4]],
	  [[46, 6], [0, 5]],
	  [[45, 7]],
	  [[46, 8], [0, 7]],
	  [[45, 7], [0, 8]]],
	 [[[5, 1]],
	  [[45, 2], [0, 1]],
	  [[46, 3], [0, 2]],
	  [[45, 4]],
	  [[46, 5], [0, 4]],
	  [[45, 6]],
	  [[0, 6]]],
	 [[[20, 1]], [[72, 2], [0, 1]], [[0, 2]]],
	 [[[138, 1]], [[139, 0], [137, 0], [0, 1]]],
	 [[[140, 1]], [[2, 2], [141, 3]], [[0, 2]], [[140, 1], [2, 2]]],
	 [[[70, 1]], [[45, 2], [0, 1]], [[0, 2]]],
	 [[[142, 1],
	   [143, 1],
	   [144, 1],
	   [145, 1],
	   [146, 1],
	   [147, 1],
	   [148, 1],
	   [149, 1],
	   [150, 1],
	   [151, 1]],
	  [[0, 1]]],
	 [[[1, 1], [3, 1]], [[0, 1]]],
	 [[[45, 1], [70, 2], [102, 3]],
	  [[70, 2], [0, 1]],
	  [[45, 4], [152, 5], [0, 2]],
	  [[102, 6]],
	  [[152, 5], [0, 4]],
	  [[0, 5]],
	  [[102, 5]]],
	 [[[153, 1]], [[46, 2], [0, 1]], [[153, 1], [0, 2]]],
	 [[[1, 1], [2, 2]], [[0, 1]], [[154, 3]], [[110, 4]], [[155, 1], [110, 4]]],
	 [[[109, 1]], [[156, 0], [42, 0], [157, 0], [158, 0], [0, 1]]],
	 [[[75, 1], [159, 2]],
	  [[32, 3], [0, 1]],
	  [[0, 2]],
	  [[75, 4]],
	  [[116, 5]],
	  [[45, 2]]],
	 [[[45, 1]], [[46, 2], [0, 1]], [[45, 1], [0, 2]]],
	 [[[45, 1]], [[46, 0], [0, 1]]],
	 [[[45, 1]],
	  [[48, 2], [46, 3], [0, 1]],
	  [[0, 2]],
	  [[45, 4], [0, 3]],
	  [[46, 3], [0, 4]]],
	 [[[77, 1]],
	  [[46, 2], [0, 1]],
	  [[77, 3]],
	  [[46, 4], [0, 3]],
	  [[77, 3], [0, 4]]],
	 [[[30, 1], [102, 2], [14, 3]],
	  [[52, 4], [98, 5]],
	  [[22, 4]],
	  [[160, 6]],
	  [[0, 4]],
	  [[52, 4]],
	  [[51, 4]]],
	 [[[16, 1]],
	  [[70, 2]],
	  [[71, 3]],
	  [[161, 4], [162, 5]],
	  [[70, 6]],
	  [[70, 7]],
	  [[71, 8]],
	  [[71, 9]],
	  [[161, 4], [116, 10], [162, 5], [0, 8]],
	  [[0, 9]],
	  [[70, 11]],
	  [[71, 12]],
	  [[162, 5], [0, 12]]],
	 [[[42, 1], [118, 2], [44, 3]],
	  [[22, 4]],
	  [[47, 5], [46, 6], [0, 2]],
	  [[22, 7]],
	  [[46, 8], [0, 4]],
	  [[45, 9]],
	  [[42, 1], [118, 2], [44, 3], [0, 6]],
	  [[0, 7]],
	  [[44, 3]],
	  [[46, 6], [0, 9]]],
	 [[[18, 1]],
	  [[45, 2]],
	  [[70, 3]],
	  [[71, 4]],
	  [[116, 5], [0, 4]],
	  [[70, 6]],
	  [[71, 7]],
	  [[0, 7]]],
	 [[[45, 1]], [[100, 2], [0, 1]], [[86, 3]], [[0, 3]]],
	 [[[36, 1]], [[163, 2]], [[70, 3], [46, 1]], [[71, 4]], [[0, 4]]],
	 [[[164, 1]], [[165, 0], [0, 1]]],
	 [[[27, 1]], [[72, 2], [0, 1]], [[0, 2]]],
	 [[[53, 1]], [[0, 1]]]],
	labels:
	[[0, 'EMPTY'],
	 [320, null],
	 [4, null],
	 [272, null],
	 [1, 'def'],
	 [1, 'raise'],
	 [32, null],
	 [1, 'not'],
	 [2, null],
	 [26, null],
	 [1, 'class'],
	 [1, 'lambda'],
	 [1, 'print'],
	 [1, 'debugger'],
	 [9, null],
	 [25, null],
	 [1, 'try'],
	 [1, 'exec'],
	 [1, 'while'],
	 [3, null],
	 [1, 'return'],
	 [1, 'assert'],
	 [1, null],
	 [1, 'del'],
	 [1, 'pass'],
	 [1, 'import'],
	 [15, null],
	 [1, 'yield'],
	 [1, 'global'],
	 [1, 'for'],
	 [7, null],
	 [1, 'from'],
	 [1, 'if'],
	 [1, 'break'],
	 [1, 'continue'],
	 [50, null],
	 [1, 'with'],
	 [14, null],
	 [319, null],
	 [19, null],
	 [309, null],
	 [1, 'and'],
	 [16, null],
	 [260, null],
	 [36, null],
	 [328, null],
	 [12, null],
	 [22, null],
	 [267, null],
	 [327, null],
	 [308, null],
	 [10, null],
	 [8, null],
	 [340, null],
	 [331, null],
	 [27, null],
	 [279, null],
	 [330, null],
	 [46, null],
	 [39, null],
	 [41, null],
	 [47, null],
	 [42, null],
	 [43, null],
	 [37, null],
	 [44, null],
	 [49, null],
	 [45, null],
	 [38, null],
	 [40, null],
	 [11, null],
	 [326, null],
	 [329, null],
	 [289, null],
	 [1, 'in'],
	 [312, null],
	 [269, null],
	 [311, null],
	 [268, null],
	 [29, null],
	 [21, null],
	 [28, null],
	 [30, null],
	 [1, 'is'],
	 [31, null],
	 [20, null],
	 [287, null],
	 [270, null],
	 [334, null],
	 [298, null],
	 [293, null],
	 [266, null],
	 [338, null],
	 [336, null],
	 [296, null],
	 [275, null],
	 [277, null],
	 [282, null],
	 [259, null],
	 [276, null],
	 [1, 'as'],
	 [280, null],
	 [23, null],
	 [0, null],
	 [1, 'except'],
	 [339, null],
	 [18, null],
	 [264, null],
	 [315, null],
	 [290, null],
	 [323, null],
	 [265, null],
	 [273, null],
	 [317, null],
	 [318, null],
	 [341, null],
	 [1, 'else'],
	 [295, null],
	 [294, null],
	 [313, null],
	 [1, 'elif'],
	 [299, null],
	 [300, null],
	 [281, null],
	 [302, null],
	 [301, null],
	 [335, null],
	 [332, null],
	 [307, null],
	 [305, null],
	 [306, null],
	 [271, null],
	 [310, null],
	 [258, null],
	 [1, 'or'],
	 [263, null],
	 [333, null],
	 [35, null],
	 [261, null],
	 [34, null],
	 [322, null],
	 [13, null],
	 [292, null],
	 [278, null],
	 [288, null],
	 [314, null],
	 [316, null],
	 [262, null],
	 [286, null],
	 [297, null],
	 [303, null],
	 [274, null],
	 [321, null],
	 [324, null],
	 [5, null],
	 [6, null],
	 [48, null],
	 [17, null],
	 [24, null],
	 [304, null],
	 [325, null],
	 [285, null],
	 [1, 'finally'],
	 [337, null],
	 [257, null],
	 [33, null]],
	keywords:
	{'and': 41,
	 'as': 100,
	 'assert': 21,
	 'break': 33,
	 'class': 10,
	 'continue': 34,
	 'debugger': 13,
	 'def': 4,
	 'del': 23,
	 'elif': 120,
	 'else': 116,
	 'except': 104,
	 'exec': 17,
	 'finally': 162,
	 'for': 29,
	 'from': 31,
	 'global': 28,
	 'if': 32,
	 'import': 25,
	 'in': 74,
	 'is': 83,
	 'lambda': 11,
	 'not': 7,
	 'or': 134,
	 'pass': 24,
	 'print': 12,
	 'raise': 5,
	 'return': 20,
	 'try': 16,
	 'while': 18,
	 'with': 36,
	 'yield': 27},
	tokens:
	{0: 103,
	 1: 22,
	 2: 8,
	 3: 19,
	 4: 2,
	 5: 154,
	 6: 155,
	 7: 30,
	 8: 52,
	 9: 14,
	 10: 51,
	 11: 70,
	 12: 46,
	 13: 141,
	 14: 37,
	 15: 26,
	 16: 42,
	 17: 157,
	 18: 106,
	 19: 39,
	 20: 85,
	 21: 80,
	 22: 47,
	 23: 102,
	 24: 158,
	 25: 15,
	 26: 9,
	 27: 55,
	 28: 81,
	 29: 79,
	 30: 82,
	 31: 84,
	 32: 6,
	 33: 165,
	 34: 139,
	 35: 137,
	 36: 44,
	 37: 64,
	 38: 68,
	 39: 59,
	 40: 69,
	 41: 60,
	 42: 62,
	 43: 63,
	 44: 65,
	 45: 67,
	 46: 58,
	 47: 61,
	 48: 156,
	 49: 66,
	 50: 35},
	start: 256
	};



	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/src/parser.js ---- */ 

	// low level parser to a concrete syntax tree, derived from cpython's lib2to3

	/**
	 *
	 * @constructor
	 * @param {Object} grammar
	 *
	 * p = new Parser(grammar);
	 * p.setup([start]);
	 * foreach input token:
	 *     if p.addtoken(...):
	 *         break
	 * root = p.rootnode
	 *
	 * can throw SyntaxError
	 */
	function Parser (filename, grammar) {
	    this.filename = filename;
	    this.grammar = grammar;
	    this.p_flags = 0;
	    return this;
	}

	// all possible parser flags
	Parser.FUTURE_PRINT_FUNCTION = "print_function";
	Parser.FUTURE_UNICODE_LITERALS = "unicode_literals";
	Parser.FUTURE_DIVISION = "division";
	Parser.FUTURE_ABSOLUTE_IMPORT = "absolute_import";
	Parser.FUTURE_WITH_STATEMENT = "with_statement";
	Parser.FUTURE_NESTED_SCOPES = "nested_scopes";
	Parser.FUTURE_GENERATORS = "generators";
	Parser.CO_FUTURE_PRINT_FUNCTION = 0x10000;
	Parser.CO_FUTURE_UNICODE_LITERALS = 0x20000;
	Parser.CO_FUTURE_DIVISON = 0x2000;
	Parser.CO_FUTURE_ABSOLUTE_IMPORT = 0x4000;
	Parser.CO_FUTURE_WITH_STATEMENT = 0x8000;

	Parser.prototype.setup = function (start) {
	    var stackentry;
	    var newnode;
	    start = start || this.grammar.start;
	    //print("START:"+start);

	    newnode =
	    {
	        type    : start,
	        value   : null,
	        context : null,
	        children: []
	    };
	    stackentry =
	    {
	        dfa  : this.grammar.dfas[start],
	        state: 0,
	        node : newnode
	    };
	    this.stack = [stackentry];
	    this.used_names = {};
	};

	function findInDfa (a, obj) {
	    var i = a.length;
	    while (i--) {
	        if (a[i][0] === obj[0] && a[i][1] === obj[1]) {
	            return true;
	        }
	    }
	    return false;
	}


	// Add a token; return true if we're done
	Parser.prototype.addtoken = function (type, value, context) {
	    var errline;
	    var itsfirst;
	    var itsdfa;
	    var state;
	    var v;
	    var t;
	    var newstate;
	    var i;
	    var a;
	    var arcs;
	    var first;
	    var states;
	    var tp;
	    var ilabel = this.classify(type, value, context);
	    //print("ilabel:"+ilabel);

	    OUTERWHILE:
	    while (true) {
	        tp = this.stack[this.stack.length - 1];
	        states = tp.dfa[0];
	        first = tp.dfa[1];
	        arcs = states[tp.state];

	        // look for a state with this label
	        for (a = 0; a < arcs.length; ++a) {
	            i = arcs[a][0];
	            newstate = arcs[a][1];
	            t = this.grammar.labels[i][0];
	            v = this.grammar.labels[i][1];
	            if (ilabel === i) {
	                // look it up in the list of labels
	                goog.asserts.assert(t < 256);
	                // shift a token; we're done with it
	                this.shift(type, value, newstate, context);
	                // pop while we are in an accept-only state
	                state = newstate;
	                //print("before:"+JSON.stringify(states[state]) + ":state:"+state+":"+JSON.stringify(states[state]));
	                /* jshint ignore:start */
	                while (states[state].length === 1
	                    && states[state][0][0] === 0
	                    && states[state][0][1] === state) {
	                    // states[state] == [(0, state)])
	                    this.pop();
	                    //print("in after pop:"+JSON.stringify(states[state]) + ":state:"+state+":"+JSON.stringify(states[state]));
	                    if (this.stack.length === 0) {
	                        // done!
	                        return true;
	                    }
	                    tp = this.stack[this.stack.length - 1];
	                    state = tp.state;
	                    states = tp.dfa[0];
	                    first = tp.dfa[1];
	                    //print(JSON.stringify(states), JSON.stringify(first));
	                    //print("bottom:"+JSON.stringify(states[state]) + ":state:"+state+":"+JSON.stringify(states[state]));
	                }
	                /* jshint ignore:end */
	                // done with this token
	                //print("DONE, return false");
	                return false;
	            } else if (t >= 256) {
	                itsdfa = this.grammar.dfas[t];
	                itsfirst = itsdfa[1];
	                if (itsfirst.hasOwnProperty(ilabel)) {
	                    // push a symbol
	                    this.push(t, this.grammar.dfas[t], newstate, context);
	                    continue OUTERWHILE;
	                }
	            }
	        }

	        //print("findInDfa: " + JSON.stringify(arcs)+" vs. " + tp.state);
	        if (findInDfa(arcs, [0, tp.state])) {
	            // an accepting state, pop it and try somethign else
	            //print("WAA");
	            this.pop();
	            if (this.stack.length === 0) {
	                throw new Sk.builtin.SyntaxError("too much input", this.filename);
	            }
	        } else {
	            // no transition
	            errline = context[0][0];

	            var that = this;
	            var ar = arcs.map(function(a) {
	                var i = a[0];
	                var t = that.grammar.labels[i][0];
	                return Sk.nameForToken(t);
	            });
	            var extra = {
	                kind: "DAG_MISS",
	                expected: ar,
	                found: Sk.nameForToken(type),
	                found_val: value,
	                inside: Sk.nameForToken(tp.node.type),
	                node: tp.node,
	                parent: this.stack.length > 1 ? this.stack[this.stack.length - 2].node : undefined
	            };
	            var reason = "expected " + ar.join(', ') + " but found " + extra.found + " while parsing " + extra.inside;

	            throw new Sk.builtin.SyntaxError(reason, this.filename, errline, context, extra);
	        }
	    }
	};

	// turn a token into a label
	Parser.prototype.classify = function (type, value, context) {
	    var ilabel;
	    if (type === Sk.Tokenizer.Tokens.T_NAME) {
	        this.used_names[value] = true;
	        ilabel = this.grammar.keywords.hasOwnProperty(value) && this.grammar.keywords[value];

	        /* Check for handling print as an builtin function */
	        if(value === "print" && (this.p_flags & Parser.CO_FUTURE_PRINT_FUNCTION || Sk.python3 === true)) {
	            ilabel = false; // ilabel determines if the value is a keyword
	        }

	        if (ilabel) {
	            //print("is keyword");
	            return ilabel;
	        }
	    }
	    ilabel = this.grammar.tokens.hasOwnProperty(type) && this.grammar.tokens[type];
	    if (!ilabel) {
	        // throw new Sk.builtin.SyntaxError("bad token", type, value, context);
	        // Questionable modification to put line number in position 2
	        // like everywhere else and filename in position 1.
	        var extra = {
	            kind: "CLASSIFY",
	            type: type,
	            value: value
	        };
	        throw new Sk.builtin.SyntaxError("bad token", this.filename, context[0][0], context, extra);
	    }
	    return ilabel;
	};

	// shift a token
	Parser.prototype.shift = function (type, value, newstate, context) {
	    var dfa = this.stack[this.stack.length - 1].dfa;
	    var state = this.stack[this.stack.length - 1].state;
	    var node = this.stack[this.stack.length - 1].node;
	    //print("context", context);
	    var newnode = {
	        type      : type,
	        value     : value,
	        lineno    : context[0][0],         // throwing away end here to match cpython
	        col_offset: context[0][1],
	        children  : null
	    };
	    if (newnode) {
	        node.children.push(newnode);
	    }
	    this.stack[this.stack.length - 1] = {
	        dfa  : dfa,
	        state: newstate,
	        node : node
	    };
	};

	// push a nonterminal
	Parser.prototype.push = function (type, newdfa, newstate, context) {
	    var dfa = this.stack[this.stack.length - 1].dfa;
	    var node = this.stack[this.stack.length - 1].node;
	    var newnode = {
	        type      : type,
	        value     : null,
	        lineno    : context[0][0],      // throwing away end here to match cpython
	        col_offset: context[0][1],
	        children  : []
	    };
	    this.stack[this.stack.length - 1] = {
	        dfa  : dfa,
	        state: newstate,
	        node : node
	    };
	    this.stack.push({
	        dfa  : newdfa,
	        state: 0,
	        node : newnode
	    });
	};

	//var ac = 0;
	//var bc = 0;

	// pop a nonterminal
	Parser.prototype.pop = function () {
	    var node;
	    var pop = this.stack.pop();
	    var newnode = pop.node;
	    //print("POP");
	    if (newnode) {
	        //print("A", ac++, newnode.type);
	        //print("stacklen:"+this.stack.length);
	        if (this.stack.length !== 0) {
	            //print("B", bc++);
	            node = this.stack[this.stack.length - 1].node;
	            node.children.push(newnode);
	        } else {
	            //print("C");
	            this.rootnode = newnode;
	            this.rootnode.used_names = this.used_names;
	        }
	    }
	};

	/**
	 * parser for interactive input. returns a function that should be called with
	 * lines of input as they are entered. the function will return false
	 * until the input is complete, when it will return the rootnode of the parse.
	 *
	 * @param {string} filename
	 * @param {string=} style root of parse tree (optional)
	 */
	function makeParser (filename, style) {
	    var tokenizer;
	    var T_OP;
	    var T_NL;
	    var T_COMMENT;
	    var prefix;
	    var column;
	    var lineno;
	    var p;
	    if (style === undefined) {
	        style = "file_input";
	    }
	    p = new Parser(filename, Sk.ParseTables);
	    // for closure's benefit
	    if (style === "file_input") {
	        p.setup(Sk.ParseTables.sym.file_input);
	    } else {
	        goog.asserts.fail("todo;");
	    }
	    lineno = 1;
	    column = 0;
	    prefix = "";
	    T_COMMENT = Sk.Tokenizer.Tokens.T_COMMENT;
	    T_NL = Sk.Tokenizer.Tokens.T_NL;
	    T_OP = Sk.Tokenizer.Tokens.T_OP;
	    tokenizer = new Sk.Tokenizer(filename, style === "single_input", function (type, value, start, end, line) {
	        var s_lineno = start[0];
	        var s_column = start[1];
	        /*
	         if (s_lineno !== lineno && s_column !== column)
	         {
	         // todo; update prefix and line/col
	         }
	         */
	        if (type === T_COMMENT || type === T_NL) {
	            prefix += value;
	            lineno = end[0];
	            column = end[1];
	            if (value[value.length - 1] === "\n") {
	                lineno += 1;
	                column = 0;
	            }
	            //print("  not calling addtoken");
	            return undefined;
	        }
	        if (type === T_OP) {
	            type = Sk.OpMap[value];
	        }
	        if (p.addtoken(type, value, [start, end, line])) {
	            return true;
	        }
	    });

	    // create parser function
	    var parseFunc = function (line) {
	        var ret = tokenizer.generateTokens(line);
	        //print("tok:"+ret);
	        if (ret) {
	            if (ret !== "done") {
	                throw new Sk.builtin.SyntaxError("incomplete input", this.filename);
	            }
	            return p.rootnode;
	        }
	        return false;
	    };

	    // set flags, and return
	    parseFunc.p_flags = p.p_flags;
	    return parseFunc;
	}

	Sk.parse = function parse (filename, input) {
	    var i;
	    var ret;
	    var lines;
	    var parseFunc = makeParser(filename);
	    if (input.substr(input.length - 1, 1) !== "\n") {
	        input += "\n";
	    }
	    //print("input:"+input);
	    lines = input.split("\n");
	    for (i = 0; i < lines.length; ++i) {
	        ret = parseFunc(lines[i] + ((i === lines.length - 1) ? "" : "\n"));
	    }

	    /*
	     * Small adjustments here in order to return th flags and the cst
	     */
	    return {"cst": ret, "flags": parseFunc.p_flags};
	};

	Sk.parseTreeDump = function parseTreeDump (n, indent) {
	    //return JSON.stringify(n, null, 2);
	    var i;
	    var ret;
	    indent = indent || "";
	    ret = "";
	    ret += indent;
	    if (n.type >= 256) { // non-term
	        ret += Sk.ParseTables.number2symbol[n.type] + "\n";
	        for (i = 0; i < n.children.length; ++i) {
	            ret += Sk.parseTreeDump(n.children[i], indent + "  ");
	        }
	    } else {
	        ret += Sk.Tokenizer.tokenNames[n.type] + ": " + new Sk.builtin.str(n.value)["$r"]().v + "\n";
	    }
	    return ret;
	};


	goog.exportSymbol("Sk.parse", Sk.parse);
	goog.exportSymbol("Sk.parseTreeDump", Sk.parseTreeDump);



	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/gen/astnodes.js ---- */ 

	/* File automatically generated by ./asdl_js.py. */

	/* ----- expr_context ----- */
	/** @constructor */
	function Load() {}
	/** @constructor */
	function Store() {}
	/** @constructor */
	function Del() {}
	/** @constructor */
	function AugLoad() {}
	/** @constructor */
	function AugStore() {}
	/** @constructor */
	function Param() {}

	/* ----- boolop ----- */
	/** @constructor */
	function And() {}
	/** @constructor */
	function Or() {}

	/* ----- operator ----- */
	/** @constructor */
	function Add() {}
	/** @constructor */
	function Sub() {}
	/** @constructor */
	function Mult() {}
	/** @constructor */
	function Div() {}
	/** @constructor */
	function Mod() {}
	/** @constructor */
	function Pow() {}
	/** @constructor */
	function LShift() {}
	/** @constructor */
	function RShift() {}
	/** @constructor */
	function BitOr() {}
	/** @constructor */
	function BitXor() {}
	/** @constructor */
	function BitAnd() {}
	/** @constructor */
	function FloorDiv() {}

	/* ----- unaryop ----- */
	/** @constructor */
	function Invert() {}
	/** @constructor */
	function Not() {}
	/** @constructor */
	function UAdd() {}
	/** @constructor */
	function USub() {}

	/* ----- cmpop ----- */
	/** @constructor */
	function Eq() {}
	/** @constructor */
	function NotEq() {}
	/** @constructor */
	function Lt() {}
	/** @constructor */
	function LtE() {}
	/** @constructor */
	function Gt() {}
	/** @constructor */
	function GtE() {}
	/** @constructor */
	function Is() {}
	/** @constructor */
	function IsNot() {}
	/** @constructor */
	function In_() {}
	/** @constructor */
	function NotIn() {}







	/* ---------------------- */
	/* constructors for nodes */
	/* ---------------------- */





	/** @constructor */
	function Module(/* {asdl_seq *} */ body)
	{
	    this.body = body;
	    return this;
	}

	/** @constructor */
	function Interactive(/* {asdl_seq *} */ body)
	{
	    this.body = body;
	    return this;
	}

	/** @constructor */
	function Expression(/* {expr_ty} */ body)
	{
	    goog.asserts.assert(body !== null && body !== undefined);
	    this.body = body;
	    return this;
	}

	/** @constructor */
	function Suite(/* {asdl_seq *} */ body)
	{
	    this.body = body;
	    return this;
	}

	/** @constructor */
	function FunctionDef(/* {identifier} */ name, /* {arguments__ty} */ args, /*
	                          {asdl_seq *} */ body, /* {asdl_seq *} */
	                          decorator_list, /* {int} */ lineno, /* {int} */
	                          col_offset)
	{
	    goog.asserts.assert(name !== null && name !== undefined);
	    goog.asserts.assert(args !== null && args !== undefined);
	    this.name = name;
	    this.args = args;
	    this.body = body;
	    this.decorator_list = decorator_list;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function ClassDef(/* {identifier} */ name, /* {asdl_seq *} */ bases, /*
	                       {asdl_seq *} */ body, /* {asdl_seq *} */ decorator_list,
	                       /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(name !== null && name !== undefined);
	    this.name = name;
	    this.bases = bases;
	    this.body = body;
	    this.decorator_list = decorator_list;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Return_(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */
	                      col_offset)
	{
	    this.value = value;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Delete_(/* {asdl_seq *} */ targets, /* {int} */ lineno, /* {int} */
	                      col_offset)
	{
	    this.targets = targets;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Assign(/* {asdl_seq *} */ targets, /* {expr_ty} */ value, /* {int} */
	                     lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(value !== null && value !== undefined);
	    this.targets = targets;
	    this.value = value;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function AugAssign(/* {expr_ty} */ target, /* {operator_ty} */ op, /* {expr_ty}
	                        */ value, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(target !== null && target !== undefined);
	    goog.asserts.assert(op !== null && op !== undefined);
	    goog.asserts.assert(value !== null && value !== undefined);
	    this.target = target;
	    this.op = op;
	    this.value = value;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Print(/* {expr_ty} */ dest, /* {asdl_seq *} */ values, /* {bool} */
	                    nl, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    this.dest = dest;
	    this.values = values;
	    this.nl = nl;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function For_(/* {expr_ty} */ target, /* {expr_ty} */ iter, /* {asdl_seq *} */
	                   body, /* {asdl_seq *} */ orelse, /* {int} */ lineno, /*
	                   {int} */ col_offset)
	{
	    goog.asserts.assert(target !== null && target !== undefined);
	    goog.asserts.assert(iter !== null && iter !== undefined);
	    this.target = target;
	    this.iter = iter;
	    this.body = body;
	    this.orelse = orelse;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function While_(/* {expr_ty} */ test, /* {asdl_seq *} */ body, /* {asdl_seq *}
	                     */ orelse, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(test !== null && test !== undefined);
	    this.test = test;
	    this.body = body;
	    this.orelse = orelse;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function If_(/* {expr_ty} */ test, /* {asdl_seq *} */ body, /* {asdl_seq *} */
	                  orelse, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(test !== null && test !== undefined);
	    this.test = test;
	    this.body = body;
	    this.orelse = orelse;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function With_(/* {expr_ty} */ context_expr, /* {expr_ty} */ optional_vars, /*
	                    {asdl_seq *} */ body, /* {int} */ lineno, /* {int} */
	                    col_offset)
	{
	    goog.asserts.assert(context_expr !== null && context_expr !== undefined);
	    this.context_expr = context_expr;
	    this.optional_vars = optional_vars;
	    this.body = body;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Raise(/* {expr_ty} */ type, /* {expr_ty} */ inst, /* {expr_ty} */
	                    tback, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    this.type = type;
	    this.inst = inst;
	    this.tback = tback;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function TryExcept(/* {asdl_seq *} */ body, /* {asdl_seq *} */ handlers, /*
	                        {asdl_seq *} */ orelse, /* {int} */ lineno, /* {int} */
	                        col_offset)
	{
	    this.body = body;
	    this.handlers = handlers;
	    this.orelse = orelse;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function TryFinally(/* {asdl_seq *} */ body, /* {asdl_seq *} */ finalbody, /*
	                         {int} */ lineno, /* {int} */ col_offset)
	{
	    this.body = body;
	    this.finalbody = finalbody;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Assert(/* {expr_ty} */ test, /* {expr_ty} */ msg, /* {int} */ lineno,
	                     /* {int} */ col_offset)
	{
	    goog.asserts.assert(test !== null && test !== undefined);
	    this.test = test;
	    this.msg = msg;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Import_(/* {asdl_seq *} */ names, /* {int} */ lineno, /* {int} */
	                      col_offset)
	{
	    this.names = names;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function ImportFrom(/* {identifier} */ module, /* {asdl_seq *} */ names, /*
	                         {int} */ level, /* {int} */ lineno, /* {int} */
	                         col_offset)
	{
	    goog.asserts.assert(module !== null && module !== undefined);
	    this.module = module;
	    this.names = names;
	    this.level = level;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Exec(/* {expr_ty} */ body, /* {expr_ty} */ globals, /* {expr_ty} */
	                   locals, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(body !== null && body !== undefined);
	    this.body = body;
	    this.globals = globals;
	    this.locals = locals;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Global(/* {asdl_seq *} */ names, /* {int} */ lineno, /* {int} */
	                     col_offset)
	{
	    this.names = names;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Expr(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(value !== null && value !== undefined);
	    this.value = value;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Pass(/* {int} */ lineno, /* {int} */ col_offset)
	{
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Break_(/* {int} */ lineno, /* {int} */ col_offset)
	{
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Continue_(/* {int} */ lineno, /* {int} */ col_offset)
	{
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Debugger_(/* {int} */ lineno, /* {int} */ col_offset)
	{
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function BoolOp(/* {boolop_ty} */ op, /* {asdl_seq *} */ values, /* {int} */
	                     lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(op !== null && op !== undefined);
	    this.op = op;
	    this.values = values;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function BinOp(/* {expr_ty} */ left, /* {operator_ty} */ op, /* {expr_ty} */
	                    right, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(left !== null && left !== undefined);
	    goog.asserts.assert(op !== null && op !== undefined);
	    goog.asserts.assert(right !== null && right !== undefined);
	    this.left = left;
	    this.op = op;
	    this.right = right;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function UnaryOp(/* {unaryop_ty} */ op, /* {expr_ty} */ operand, /* {int} */
	                      lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(op !== null && op !== undefined);
	    goog.asserts.assert(operand !== null && operand !== undefined);
	    this.op = op;
	    this.operand = operand;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Lambda(/* {arguments__ty} */ args, /* {expr_ty} */ body, /* {int} */
	                     lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(args !== null && args !== undefined);
	    goog.asserts.assert(body !== null && body !== undefined);
	    this.args = args;
	    this.body = body;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function IfExp(/* {expr_ty} */ test, /* {expr_ty} */ body, /* {expr_ty} */
	                    orelse, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(test !== null && test !== undefined);
	    goog.asserts.assert(body !== null && body !== undefined);
	    goog.asserts.assert(orelse !== null && orelse !== undefined);
	    this.test = test;
	    this.body = body;
	    this.orelse = orelse;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Dict(/* {asdl_seq *} */ keys, /* {asdl_seq *} */ values, /* {int} */
	                   lineno, /* {int} */ col_offset)
	{
	    this.keys = keys;
	    this.values = values;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Set(/* {asdl_seq *} */ elts, /* {int} */ lineno, /* {int} */
	                  col_offset)
	{
	    this.elts = elts;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function ListComp(/* {expr_ty} */ elt, /* {asdl_seq *} */ generators, /* {int}
	                       */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(elt !== null && elt !== undefined);
	    this.elt = elt;
	    this.generators = generators;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function SetComp(/* {expr_ty} */ elt, /* {asdl_seq *} */ generators, /* {int}
	                      */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(elt !== null && elt !== undefined);
	    this.elt = elt;
	    this.generators = generators;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function DictComp(/* {expr_ty} */ key, /* {expr_ty} */ value, /* {asdl_seq *}
	                       */ generators, /* {int} */ lineno, /* {int} */
	                       col_offset)
	{
	    goog.asserts.assert(key !== null && key !== undefined);
	    goog.asserts.assert(value !== null && value !== undefined);
	    this.key = key;
	    this.value = value;
	    this.generators = generators;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function GeneratorExp(/* {expr_ty} */ elt, /* {asdl_seq *} */ generators, /*
	                           {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(elt !== null && elt !== undefined);
	    this.elt = elt;
	    this.generators = generators;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Yield(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */
	                    col_offset)
	{
	    this.value = value;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Compare(/* {expr_ty} */ left, /* {asdl_int_seq *} */ ops, /* {asdl_seq
	                      *} */ comparators, /* {int} */ lineno, /* {int} */
	                      col_offset)
	{
	    goog.asserts.assert(left !== null && left !== undefined);
	    this.left = left;
	    this.ops = ops;
	    this.comparators = comparators;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Call(/* {expr_ty} */ func, /* {asdl_seq *} */ args, /* {asdl_seq *} */
	                   keywords, /* {expr_ty} */ starargs, /* {expr_ty} */ kwargs,
	                   /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(func !== null && func !== undefined);
	    this.func = func;
	    this.args = args;
	    this.keywords = keywords;
	    this.starargs = starargs;
	    this.kwargs = kwargs;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Repr(/* {expr_ty} */ value, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(value !== null && value !== undefined);
	    this.value = value;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Num(/* {object} */ n, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(n !== null && n !== undefined);
	    this.n = n;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Str(/* {string} */ s, /* {int} */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(s !== null && s !== undefined);
	    this.s = s;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Attribute(/* {expr_ty} */ value, /* {identifier} */ attr, /*
	                        {expr_context_ty} */ ctx, /* {int} */ lineno, /* {int}
	                        */ col_offset)
	{
	    goog.asserts.assert(value !== null && value !== undefined);
	    goog.asserts.assert(attr !== null && attr !== undefined);
	    goog.asserts.assert(ctx !== null && ctx !== undefined);
	    this.value = value;
	    this.attr = attr;
	    this.ctx = ctx;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Subscript(/* {expr_ty} */ value, /* {slice_ty} */ slice, /*
	                        {expr_context_ty} */ ctx, /* {int} */ lineno, /* {int}
	                        */ col_offset)
	{
	    goog.asserts.assert(value !== null && value !== undefined);
	    goog.asserts.assert(slice !== null && slice !== undefined);
	    goog.asserts.assert(ctx !== null && ctx !== undefined);
	    this.value = value;
	    this.slice = slice;
	    this.ctx = ctx;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Name(/* {identifier} */ id, /* {expr_context_ty} */ ctx, /* {int} */
	                   lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(id !== null && id !== undefined);
	    goog.asserts.assert(ctx !== null && ctx !== undefined);
	    this.id = id;
	    this.ctx = ctx;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function List(/* {asdl_seq *} */ elts, /* {expr_context_ty} */ ctx, /* {int} */
	                   lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(ctx !== null && ctx !== undefined);
	    this.elts = elts;
	    this.ctx = ctx;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Tuple(/* {asdl_seq *} */ elts, /* {expr_context_ty} */ ctx, /* {int}
	                    */ lineno, /* {int} */ col_offset)
	{
	    goog.asserts.assert(ctx !== null && ctx !== undefined);
	    this.elts = elts;
	    this.ctx = ctx;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function Ellipsis()
	{
	    return this;
	}

	/** @constructor */
	function Slice(/* {expr_ty} */ lower, /* {expr_ty} */ upper, /* {expr_ty} */
	                    step)
	{
	    this.lower = lower;
	    this.upper = upper;
	    this.step = step;
	    return this;
	}

	/** @constructor */
	function ExtSlice(/* {asdl_seq *} */ dims)
	{
	    this.dims = dims;
	    return this;
	}

	/** @constructor */
	function Index(/* {expr_ty} */ value)
	{
	    goog.asserts.assert(value !== null && value !== undefined);
	    this.value = value;
	    return this;
	}

	/** @constructor */
	function comprehension(/* {expr_ty} */ target, /* {expr_ty} */ iter, /*
	                            {asdl_seq *} */ ifs)
	{
	    goog.asserts.assert(target !== null && target !== undefined);
	    goog.asserts.assert(iter !== null && iter !== undefined);
	    this.target = target;
	    this.iter = iter;
	    this.ifs = ifs;
	    return this;
	}

	/** @constructor */
	function ExceptHandler(/* {expr_ty} */ type, /* {expr_ty} */ name, /* {asdl_seq
	                            *} */ body, /* {int} */ lineno, /* {int} */
	                            col_offset)
	{
	    this.type = type;
	    this.name = name;
	    this.body = body;
	    this.lineno = lineno;
	    this.col_offset = col_offset;
	    return this;
	}

	/** @constructor */
	function arguments_(/* {asdl_seq *} */ args, /* {identifier} */ vararg, /*
	                         {identifier} */ kwarg, /* {asdl_seq *} */ defaults)
	{
	    this.args = args;
	    this.vararg = vararg;
	    this.kwarg = kwarg;
	    this.defaults = defaults;
	    return this;
	}

	/** @constructor */
	function keyword(/* {identifier} */ arg, /* {expr_ty} */ value)
	{
	    goog.asserts.assert(arg !== null && arg !== undefined);
	    goog.asserts.assert(value !== null && value !== undefined);
	    this.arg = arg;
	    this.value = value;
	    return this;
	}

	/** @constructor */
	function alias(/* {identifier} */ name, /* {identifier} */ asname)
	{
	    goog.asserts.assert(name !== null && name !== undefined);
	    this.name = name;
	    this.asname = asname;
	    return this;
	}


	Module.prototype._astname = "Module";
	Module.prototype._fields = [
	    "body", function(n) { return n.body; }
	];
	Interactive.prototype._astname = "Interactive";
	Interactive.prototype._fields = [
	    "body", function(n) { return n.body; }
	];
	Expression.prototype._astname = "Expression";
	Expression.prototype._fields = [
	    "body", function(n) { return n.body; }
	];
	Suite.prototype._astname = "Suite";
	Suite.prototype._fields = [
	    "body", function(n) { return n.body; }
	];
	FunctionDef.prototype._astname = "FunctionDef";
	FunctionDef.prototype._fields = [
	    "name", function(n) { return n.name; },
	    "args", function(n) { return n.args; },
	    "body", function(n) { return n.body; },
	    "decorator_list", function(n) { return n.decorator_list; }
	];
	ClassDef.prototype._astname = "ClassDef";
	ClassDef.prototype._fields = [
	    "name", function(n) { return n.name; },
	    "bases", function(n) { return n.bases; },
	    "body", function(n) { return n.body; },
	    "decorator_list", function(n) { return n.decorator_list; }
	];
	Return_.prototype._astname = "Return";
	Return_.prototype._fields = [
	    "value", function(n) { return n.value; }
	];
	Delete_.prototype._astname = "Delete";
	Delete_.prototype._fields = [
	    "targets", function(n) { return n.targets; }
	];
	Assign.prototype._astname = "Assign";
	Assign.prototype._fields = [
	    "targets", function(n) { return n.targets; },
	    "value", function(n) { return n.value; }
	];
	AugAssign.prototype._astname = "AugAssign";
	AugAssign.prototype._fields = [
	    "target", function(n) { return n.target; },
	    "op", function(n) { return n.op; },
	    "value", function(n) { return n.value; }
	];
	Print.prototype._astname = "Print";
	Print.prototype._fields = [
	    "dest", function(n) { return n.dest; },
	    "values", function(n) { return n.values; },
	    "nl", function(n) { return n.nl; }
	];
	For_.prototype._astname = "For";
	For_.prototype._fields = [
	    "target", function(n) { return n.target; },
	    "iter", function(n) { return n.iter; },
	    "body", function(n) { return n.body; },
	    "orelse", function(n) { return n.orelse; }
	];
	While_.prototype._astname = "While";
	While_.prototype._fields = [
	    "test", function(n) { return n.test; },
	    "body", function(n) { return n.body; },
	    "orelse", function(n) { return n.orelse; }
	];
	If_.prototype._astname = "If";
	If_.prototype._fields = [
	    "test", function(n) { return n.test; },
	    "body", function(n) { return n.body; },
	    "orelse", function(n) { return n.orelse; }
	];
	With_.prototype._astname = "With";
	With_.prototype._fields = [
	    "context_expr", function(n) { return n.context_expr; },
	    "optional_vars", function(n) { return n.optional_vars; },
	    "body", function(n) { return n.body; }
	];
	Raise.prototype._astname = "Raise";
	Raise.prototype._fields = [
	    "type", function(n) { return n.type; },
	    "inst", function(n) { return n.inst; },
	    "tback", function(n) { return n.tback; }
	];
	TryExcept.prototype._astname = "TryExcept";
	TryExcept.prototype._fields = [
	    "body", function(n) { return n.body; },
	    "handlers", function(n) { return n.handlers; },
	    "orelse", function(n) { return n.orelse; }
	];
	TryFinally.prototype._astname = "TryFinally";
	TryFinally.prototype._fields = [
	    "body", function(n) { return n.body; },
	    "finalbody", function(n) { return n.finalbody; }
	];
	Assert.prototype._astname = "Assert";
	Assert.prototype._fields = [
	    "test", function(n) { return n.test; },
	    "msg", function(n) { return n.msg; }
	];
	Import_.prototype._astname = "Import";
	Import_.prototype._fields = [
	    "names", function(n) { return n.names; }
	];
	ImportFrom.prototype._astname = "ImportFrom";
	ImportFrom.prototype._fields = [
	    "module", function(n) { return n.module; },
	    "names", function(n) { return n.names; },
	    "level", function(n) { return n.level; }
	];
	Exec.prototype._astname = "Exec";
	Exec.prototype._fields = [
	    "body", function(n) { return n.body; },
	    "globals", function(n) { return n.globals; },
	    "locals", function(n) { return n.locals; }
	];
	Global.prototype._astname = "Global";
	Global.prototype._fields = [
	    "names", function(n) { return n.names; }
	];
	Expr.prototype._astname = "Expr";
	Expr.prototype._fields = [
	    "value", function(n) { return n.value; }
	];
	Pass.prototype._astname = "Pass";
	Pass.prototype._fields = [
	];
	Break_.prototype._astname = "Break";
	Break_.prototype._fields = [
	];
	Continue_.prototype._astname = "Continue";
	Continue_.prototype._fields = [
	];
	Debugger_.prototype._astname = "Debugger";
	Debugger_.prototype._fields = [
	];
	BoolOp.prototype._astname = "BoolOp";
	BoolOp.prototype._fields = [
	    "op", function(n) { return n.op; },
	    "values", function(n) { return n.values; }
	];
	BinOp.prototype._astname = "BinOp";
	BinOp.prototype._fields = [
	    "left", function(n) { return n.left; },
	    "op", function(n) { return n.op; },
	    "right", function(n) { return n.right; }
	];
	UnaryOp.prototype._astname = "UnaryOp";
	UnaryOp.prototype._fields = [
	    "op", function(n) { return n.op; },
	    "operand", function(n) { return n.operand; }
	];
	Lambda.prototype._astname = "Lambda";
	Lambda.prototype._fields = [
	    "args", function(n) { return n.args; },
	    "body", function(n) { return n.body; }
	];
	IfExp.prototype._astname = "IfExp";
	IfExp.prototype._fields = [
	    "test", function(n) { return n.test; },
	    "body", function(n) { return n.body; },
	    "orelse", function(n) { return n.orelse; }
	];
	Dict.prototype._astname = "Dict";
	Dict.prototype._fields = [
	    "keys", function(n) { return n.keys; },
	    "values", function(n) { return n.values; }
	];
	Set.prototype._astname = "Set";
	Set.prototype._fields = [
	    "elts", function(n) { return n.elts; }
	];
	ListComp.prototype._astname = "ListComp";
	ListComp.prototype._fields = [
	    "elt", function(n) { return n.elt; },
	    "generators", function(n) { return n.generators; }
	];
	SetComp.prototype._astname = "SetComp";
	SetComp.prototype._fields = [
	    "elt", function(n) { return n.elt; },
	    "generators", function(n) { return n.generators; }
	];
	DictComp.prototype._astname = "DictComp";
	DictComp.prototype._fields = [
	    "key", function(n) { return n.key; },
	    "value", function(n) { return n.value; },
	    "generators", function(n) { return n.generators; }
	];
	GeneratorExp.prototype._astname = "GeneratorExp";
	GeneratorExp.prototype._fields = [
	    "elt", function(n) { return n.elt; },
	    "generators", function(n) { return n.generators; }
	];
	Yield.prototype._astname = "Yield";
	Yield.prototype._fields = [
	    "value", function(n) { return n.value; }
	];
	Compare.prototype._astname = "Compare";
	Compare.prototype._fields = [
	    "left", function(n) { return n.left; },
	    "ops", function(n) { return n.ops; },
	    "comparators", function(n) { return n.comparators; }
	];
	Call.prototype._astname = "Call";
	Call.prototype._fields = [
	    "func", function(n) { return n.func; },
	    "args", function(n) { return n.args; },
	    "keywords", function(n) { return n.keywords; },
	    "starargs", function(n) { return n.starargs; },
	    "kwargs", function(n) { return n.kwargs; }
	];
	Repr.prototype._astname = "Repr";
	Repr.prototype._fields = [
	    "value", function(n) { return n.value; }
	];
	Num.prototype._astname = "Num";
	Num.prototype._fields = [
	    "n", function(n) { return n.n; }
	];
	Str.prototype._astname = "Str";
	Str.prototype._fields = [
	    "s", function(n) { return n.s; }
	];
	Attribute.prototype._astname = "Attribute";
	Attribute.prototype._fields = [
	    "value", function(n) { return n.value; },
	    "attr", function(n) { return n.attr; },
	    "ctx", function(n) { return n.ctx; }
	];
	Subscript.prototype._astname = "Subscript";
	Subscript.prototype._fields = [
	    "value", function(n) { return n.value; },
	    "slice", function(n) { return n.slice; },
	    "ctx", function(n) { return n.ctx; }
	];
	Name.prototype._astname = "Name";
	Name.prototype._fields = [
	    "id", function(n) { return n.id; },
	    "ctx", function(n) { return n.ctx; }
	];
	List.prototype._astname = "List";
	List.prototype._fields = [
	    "elts", function(n) { return n.elts; },
	    "ctx", function(n) { return n.ctx; }
	];
	Tuple.prototype._astname = "Tuple";
	Tuple.prototype._fields = [
	    "elts", function(n) { return n.elts; },
	    "ctx", function(n) { return n.ctx; }
	];
	Load.prototype._astname = "Load";
	Load.prototype._isenum = true;
	Store.prototype._astname = "Store";
	Store.prototype._isenum = true;
	Del.prototype._astname = "Del";
	Del.prototype._isenum = true;
	AugLoad.prototype._astname = "AugLoad";
	AugLoad.prototype._isenum = true;
	AugStore.prototype._astname = "AugStore";
	AugStore.prototype._isenum = true;
	Param.prototype._astname = "Param";
	Param.prototype._isenum = true;
	Ellipsis.prototype._astname = "Ellipsis";
	Ellipsis.prototype._fields = [
	];
	Slice.prototype._astname = "Slice";
	Slice.prototype._fields = [
	    "lower", function(n) { return n.lower; },
	    "upper", function(n) { return n.upper; },
	    "step", function(n) { return n.step; }
	];
	ExtSlice.prototype._astname = "ExtSlice";
	ExtSlice.prototype._fields = [
	    "dims", function(n) { return n.dims; }
	];
	Index.prototype._astname = "Index";
	Index.prototype._fields = [
	    "value", function(n) { return n.value; }
	];
	And.prototype._astname = "And";
	And.prototype._isenum = true;
	Or.prototype._astname = "Or";
	Or.prototype._isenum = true;
	Add.prototype._astname = "Add";
	Add.prototype._isenum = true;
	Sub.prototype._astname = "Sub";
	Sub.prototype._isenum = true;
	Mult.prototype._astname = "Mult";
	Mult.prototype._isenum = true;
	Div.prototype._astname = "Div";
	Div.prototype._isenum = true;
	Mod.prototype._astname = "Mod";
	Mod.prototype._isenum = true;
	Pow.prototype._astname = "Pow";
	Pow.prototype._isenum = true;
	LShift.prototype._astname = "LShift";
	LShift.prototype._isenum = true;
	RShift.prototype._astname = "RShift";
	RShift.prototype._isenum = true;
	BitOr.prototype._astname = "BitOr";
	BitOr.prototype._isenum = true;
	BitXor.prototype._astname = "BitXor";
	BitXor.prototype._isenum = true;
	BitAnd.prototype._astname = "BitAnd";
	BitAnd.prototype._isenum = true;
	FloorDiv.prototype._astname = "FloorDiv";
	FloorDiv.prototype._isenum = true;
	Invert.prototype._astname = "Invert";
	Invert.prototype._isenum = true;
	Not.prototype._astname = "Not";
	Not.prototype._isenum = true;
	UAdd.prototype._astname = "UAdd";
	UAdd.prototype._isenum = true;
	USub.prototype._astname = "USub";
	USub.prototype._isenum = true;
	Eq.prototype._astname = "Eq";
	Eq.prototype._isenum = true;
	NotEq.prototype._astname = "NotEq";
	NotEq.prototype._isenum = true;
	Lt.prototype._astname = "Lt";
	Lt.prototype._isenum = true;
	LtE.prototype._astname = "LtE";
	LtE.prototype._isenum = true;
	Gt.prototype._astname = "Gt";
	Gt.prototype._isenum = true;
	GtE.prototype._astname = "GtE";
	GtE.prototype._isenum = true;
	Is.prototype._astname = "Is";
	Is.prototype._isenum = true;
	IsNot.prototype._astname = "IsNot";
	IsNot.prototype._isenum = true;
	In_.prototype._astname = "In";
	In_.prototype._isenum = true;
	NotIn.prototype._astname = "NotIn";
	NotIn.prototype._isenum = true;
	comprehension.prototype._astname = "comprehension";
	comprehension.prototype._fields = [
	    "target", function(n) { return n.target; },
	    "iter", function(n) { return n.iter; },
	    "ifs", function(n) { return n.ifs; }
	];
	ExceptHandler.prototype._astname = "ExceptHandler";
	ExceptHandler.prototype._fields = [
	    "type", function(n) { return n.type; },
	    "name", function(n) { return n.name; },
	    "body", function(n) { return n.body; }
	];
	arguments_.prototype._astname = "arguments";
	arguments_.prototype._fields = [
	    "args", function(n) { return n.args; },
	    "vararg", function(n) { return n.vararg; },
	    "kwarg", function(n) { return n.kwarg; },
	    "defaults", function(n) { return n.defaults; }
	];
	keyword.prototype._astname = "keyword";
	keyword.prototype._fields = [
	    "arg", function(n) { return n.arg; },
	    "value", function(n) { return n.value; }
	];
	alias.prototype._astname = "alias";
	alias.prototype._fields = [
	    "name", function(n) { return n.name; },
	    "asname", function(n) { return n.asname; }
	];




	/* ---- /Users/rob/skulpty/lib/../node_modules/skulpt/src/ast.js ---- */ 

	//
	// This is pretty much a straight port of ast.c from CPython 2.6.5.
	//
	// The previous version was easier to work with and more JS-ish, but having a
	// somewhat different ast structure than cpython makes testing more difficult.
	//
	// This way, we can use a dump from the ast module on any arbitrary python
	// code and know that we're the same up to ast level, at least.
	//

	var SYM = Sk.ParseTables.sym;
	var TOK = Sk.Tokenizer.Tokens;
	var COMP_GENEXP = 0;
	var COMP_SETCOMP = 1;

	/** @constructor */
	function Compiling (encoding, filename, c_flags) {
	    this.c_encoding = encoding;
	    this.c_filename = filename;
	    this.c_flags = c_flags || 0;
	}

	/**
	 * @return {number}
	 */
	function NCH (n) {
	    goog.asserts.assert(n !== undefined);
	    if (n.children === null) {
	        return 0;
	    }
	    return n.children.length;
	}

	function CHILD (n, i) {
	    goog.asserts.assert(n !== undefined);
	    goog.asserts.assert(i !== undefined);
	    return n.children[i];
	}

	function REQ (n, type) {
	    goog.asserts.assert(n.type === type, "node wasn't expected type");
	}

	function strobj (s) {
	    goog.asserts.assert(typeof s === "string", "expecting string, got " + (typeof s));
	    return new Sk.builtin.str(s);
	}

	/** @return {number} */
	function numStmts (n) {
	    var ch;
	    var i;
	    var cnt;
	    switch (n.type) {
	        case SYM.single_input:
	            if (CHILD(n, 0).type === TOK.T_NEWLINE) {
	                return 0;
	            }
	            else {
	                return numStmts(CHILD(n, 0));
	            }
	        case SYM.file_input:
	            cnt = 0;
	            for (i = 0; i < NCH(n); ++i) {
	                ch = CHILD(n, i);
	                if (ch.type === SYM.stmt) {
	                    cnt += numStmts(ch);
	                }
	            }
	            return cnt;
	        case SYM.stmt:
	            return numStmts(CHILD(n, 0));
	        case SYM.compound_stmt:
	            return 1;
	        case SYM.simple_stmt:
	            return Math.floor(NCH(n) / 2); // div 2 is to remove count of ;s
	        case SYM.suite:
	            if (NCH(n) === 1) {
	                return numStmts(CHILD(n, 0));
	            }
	            else {
	                cnt = 0;
	                for (i = 2; i < NCH(n) - 1; ++i) {
	                    cnt += numStmts(CHILD(n, i));
	                }
	                return cnt;
	            }
	            break;
	        default:
	            goog.asserts.fail("Non-statement found");
	    }
	    return 0;
	}

	function forbiddenCheck (c, n, x, lineno) {
	    if (x === "None") {
	        throw new Sk.builtin.SyntaxError("assignment to None", c.c_filename, lineno, [], {node: n});
	    }
	    if (x === "True" || x === "False") {
	        throw new Sk.builtin.SyntaxError("assignment to True or False is forbidden", c.c_filename, lineno, [], {node: n});
	    }
	}

	/**
	 * Set the context ctx for e, recursively traversing e.
	 *
	 * Only sets context for expr kinds that can appear in assignment context as
	 * per the asdl file.
	 */
	function setContext (c, e, ctx, n) {
	    var i;
	    var exprName;
	    var s;
	    goog.asserts.assert(ctx !== AugStore && ctx !== AugLoad);
	    s = null;
	    exprName = null;

	    switch (e.constructor) {
	        case Attribute:
	        case Name:
	            if (ctx === Store) {
	                forbiddenCheck(c, n, e.attr, n.lineno);
	            }
	            e.ctx = ctx;
	            break;
	        case Subscript:
	            e.ctx = ctx;
	            break;
	        case List:
	            e.ctx = ctx;
	            s = e.elts;
	            break;
	        case Tuple:
	            if (e.elts.length === 0) {
	                throw new Sk.builtin.SyntaxError("can't assign to ()", c.c_filename, n.lineno, ctx, {node: n});
	            }
	            e.ctx = ctx;
	            s = e.elts;
	            break;
	        case Lambda:
	            exprName = "lambda";
	            break;
	        case Call:
	            exprName = "function call";
	            break;
	        case BoolOp:
	        case BinOp:
	        case UnaryOp:
	            exprName = "operator";
	            break;
	        case GeneratorExp:
	            exprName = "generator expression";
	            break;
	        case Yield:
	            exprName = "yield expression";
	            break;
	        case ListComp:
	            exprName = "list comprehension";
	            break;
	        case SetComp:
	            exprName = "set comprehension";
	            break;
	        case DictComp:
	            exprName = "dict comprehension";
	            break;
	        case Dict:
	        case Set:
	        case Num:
	        case Str:
	            exprName = "literal";
	            break;
	        case Compare:
	            exprName = "comparison";
	            break;
	        case Repr:
	            exprName = "repr";
	            break;
	        case IfExp:
	            exprName = "conditional expression";
	            break;
	        default:
	            goog.asserts.fail("unhandled expression in assignment");
	    }
	    if (exprName) {
	        throw new Sk.builtin.SyntaxError("can't " + (ctx === Store ? "assign to" : "delete") + " " + exprName, c.c_filename, n.lineno, [], {node: n});
	    }

	    if (s) {
	        for (i = 0; i < s.length; ++i) {
	            setContext(c, s[i], ctx, n);
	        }
	    }
	}

	var operatorMap = {};
	(function () {
	    operatorMap[TOK.T_VBAR] = BitOr;
	    operatorMap[TOK.T_CIRCUMFLEX] = BitXor;
	    operatorMap[TOK.T_AMPER] = BitAnd;
	    operatorMap[TOK.T_LEFTSHIFT] = LShift;
	    operatorMap[TOK.T_RIGHTSHIFT] = RShift;
	    operatorMap[TOK.T_PLUS] = Add;
	    operatorMap[TOK.T_MINUS] = Sub;
	    operatorMap[TOK.T_STAR] = Mult;
	    operatorMap[TOK.T_SLASH] = Div;
	    operatorMap[TOK.T_DOUBLESLASH] = FloorDiv;
	    operatorMap[TOK.T_PERCENT] = Mod;
	}());

	function getOperator (n) {
	    goog.asserts.assert(operatorMap[n.type] !== undefined);
	    return operatorMap[n.type];
	}

	function astForCompOp (c, n) {
	    /* comp_op: '<'|'>'|'=='|'>='|'<='|'<>'|'!='|'in'|'not' 'in'|'is'
	     |'is' 'not'
	     */
	    REQ(n, SYM.comp_op);
	    if (NCH(n) === 1) {
	        n = CHILD(n, 0);
	        switch (n.type) {
	            case TOK.T_LESS:
	                return Lt;
	            case TOK.T_GREATER:
	                return Gt;
	            case TOK.T_EQEQUAL:
	                return Eq;
	            case TOK.T_LESSEQUAL:
	                return LtE;
	            case TOK.T_GREATEREQUAL:
	                return GtE;
	            case TOK.T_NOTEQUAL:
	                return NotEq;
	            case TOK.T_NAME:
	                if (n.value === "in") {
	                    return In_;
	                }
	                if (n.value === "is") {
	                    return Is;
	                }
	        }
	    }
	    else if (NCH(n) === 2) {
	        if (CHILD(n, 0).type === TOK.T_NAME) {
	            if (CHILD(n, 1).value === "in") {
	                return NotIn;
	            }
	            if (CHILD(n, 0).value === "is") {
	                return IsNot;
	            }
	        }
	    }
	    goog.asserts.fail("invalid comp_op");
	}

	function seqForTestlist (c, n) {
	    /* testlist: test (',' test)* [','] */
	    var i;
	    var seq = [];
	    goog.asserts.assert(n.type === SYM.testlist ||
	        n.type === SYM.listmaker ||
	        n.type === SYM.testlist_comp ||
	        n.type === SYM.testlist_safe ||
	        n.type === SYM.testlist1);
	    for (i = 0; i < NCH(n); i += 2) {
	        goog.asserts.assert(CHILD(n, i).type === SYM.test || CHILD(n, i).type === SYM.old_test);
	        seq[i / 2] = astForExpr(c, CHILD(n, i));
	    }
	    return seq;
	}

	function astForSuite (c, n) {
	    /* suite: simple_stmt | NEWLINE INDENT stmt+ DEDENT */
	    var j;
	    var num;
	    var i;
	    var end;
	    var ch;
	    var pos;
	    var seq;
	    REQ(n, SYM.suite);
	    seq = [];
	    pos = 0;
	    if (CHILD(n, 0).type === SYM.simple_stmt) {
	        n = CHILD(n, 0);
	        /* simple_stmt always ends with an NEWLINE and may have a trailing
	         * SEMI. */
	        end = NCH(n) - 1;
	        if (CHILD(n, end - 1).type === TOK.T_SEMI) {
	            end -= 1;
	        }
	        for (i = 0; i < end; i += 2) // by 2 to skip ;
	        {
	            seq[pos++] = astForStmt(c, CHILD(n, i));
	        }
	    }
	    else {
	        for (i = 2; i < NCH(n) - 1; ++i) {
	            ch = CHILD(n, i);
	            REQ(ch, SYM.stmt);
	            num = numStmts(ch);
	            if (num === 1) {
	                // small_stmt or compound_stmt w/ only 1 child
	                seq[pos++] = astForStmt(c, ch);
	            }
	            else {
	                ch = CHILD(ch, 0);
	                REQ(ch, SYM.simple_stmt);
	                for (j = 0; j < NCH(ch); j += 2) {
	                    if (NCH(CHILD(ch, j)) === 0) {
	                        goog.asserts.assert(j + 1 === NCH(ch));
	                        break;
	                    }
	                    seq[pos++] = astForStmt(c, CHILD(ch, j));
	                }
	            }
	        }
	    }
	    goog.asserts.assert(pos === numStmts(n));
	    return seq;
	}

	function astForExceptClause (c, exc, body) {
	    /* except_clause: 'except' [test [(',' | 'as') test]] */
	    var e;
	    REQ(exc, SYM.except_clause);
	    REQ(body, SYM.suite);
	    if (NCH(exc) === 1) {
	        return new ExceptHandler(null, null, astForSuite(c, body), exc.lineno, exc.col_offset);
	    }
	    else if (NCH(exc) === 2) {
	        return new ExceptHandler(astForExpr(c, CHILD(exc, 1)), null, astForSuite(c, body), exc.lineno, exc.col_offset);
	    }
	    else if (NCH(exc) === 4) {
	        e = astForExpr(c, CHILD(exc, 3));
	        setContext(c, e, Store, CHILD(exc, 3));
	        return new ExceptHandler(astForExpr(c, CHILD(exc, 1)), e, astForSuite(c, body), exc.lineno, exc.col_offset);
	    }
	    goog.asserts.fail("wrong number of children for except clause");
	}

	function astForTryStmt (c, n) {
	    var exceptSt;
	    var i;
	    var handlers;
	    var nc = NCH(n);
	    var nexcept = (nc - 3) / 3;
	    var body, orelse = [],
	        finally_ = null;

	    REQ(n, SYM.try_stmt);
	    body = astForSuite(c, CHILD(n, 2));
	    if (CHILD(n, nc - 3).type === TOK.T_NAME) {
	        if (CHILD(n, nc - 3).value === "finally") {
	            if (nc >= 9 && CHILD(n, nc - 6).type === TOK.T_NAME) {
	                /* we can assume it's an "else",
	                 because nc >= 9 for try-else-finally and
	                 it would otherwise have a type of except_clause */
	                orelse = astForSuite(c, CHILD(n, nc - 4));
	                nexcept--;
	            }

	            finally_ = astForSuite(c, CHILD(n, nc - 1));
	            nexcept--;
	        }
	        else {
	            /* we can assume it's an "else",
	             otherwise it would have a type of except_clause */
	            orelse = astForSuite(c, CHILD(n, nc - 1));
	            nexcept--;
	        }
	    }
	    else if (CHILD(n, nc - 3).type !== SYM.except_clause) {
	        throw new Sk.builtin.SyntaxError("malformed 'try' statement", c.c_filename, n.lineno);
	    }

	    if (nexcept > 0) {
	        handlers = [];
	        for (i = 0; i < nexcept; ++i) {
	            handlers[i] = astForExceptClause(c, CHILD(n, 3 + i * 3), CHILD(n, 5 + i * 3));
	        }
	        exceptSt = new TryExcept(body, handlers, orelse, n.lineno, n.col_offset);

	        if (!finally_) {
	            return exceptSt;
	        }

	        /* if a 'finally' is present too, we nest the TryExcept within a
	         TryFinally to emulate try ... except ... finally */
	        body = [exceptSt];
	    }

	    goog.asserts.assert(finally_ !== null);
	    return new TryFinally(body, finally_, n.lineno, n.col_offset);
	}


	function astForDottedName (c, n) {
	    var i;
	    var e;
	    var id;
	    var col_offset;
	    var lineno;
	    REQ(n, SYM.dotted_name);
	    lineno = n.lineno;
	    col_offset = n.col_offset;
	    id = strobj(CHILD(n, 0).value);
	    e = new Name(id, Load, lineno, col_offset);
	    for (i = 2; i < NCH(n); i += 2) {
	        id = strobj(CHILD(n, i).value);
	        e = new Attribute(e, id, Load, lineno, col_offset);
	    }
	    return e;
	}

	function astForDecorator (c, n) {
	    /* decorator: '@' dotted_name [ '(' [arglist] ')' ] NEWLINE */
	    var nameExpr;
	    REQ(n, SYM.decorator);
	    REQ(CHILD(n, 0), TOK.T_AT);
	    REQ(CHILD(n, NCH(n) - 1), TOK.T_NEWLINE);
	    nameExpr = astForDottedName(c, CHILD(n, 1));
	    if (NCH(n) === 3) // no args
	    {
	        return nameExpr;
	    }
	    else if (NCH(n) === 5) // call with no args
	    {
	        return new Call(nameExpr, [], [], null, null, n.lineno, n.col_offset);
	    }
	    else {
	        return astForCall(c, CHILD(n, 3), nameExpr);
	    }
	}

	function astForDecorators (c, n) {
	    var i;
	    var decoratorSeq;
	    REQ(n, SYM.decorators);
	    decoratorSeq = [];
	    for (i = 0; i < NCH(n); ++i) {
	        decoratorSeq[i] = astForDecorator(c, CHILD(n, i));
	    }
	    return decoratorSeq;
	}

	function astForDecorated (c, n) {
	    var thing;
	    var decoratorSeq;
	    REQ(n, SYM.decorated);
	    decoratorSeq = astForDecorators(c, CHILD(n, 0));
	    goog.asserts.assert(CHILD(n, 1).type === SYM.funcdef || CHILD(n, 1).type === SYM.classdef);

	    thing = null;
	    if (CHILD(n, 1).type === SYM.funcdef) {
	        thing = astForFuncdef(c, CHILD(n, 1), decoratorSeq);
	    }
	    else if (CHILD(n, 1) === SYM.classdef) {
	        thing = astForClassdef(c, CHILD(n, 1), decoratorSeq);
	    }
	    if (thing) {
	        thing.lineno = n.lineno;
	        thing.col_offset = n.col_offset;
	    }
	    return thing;
	}

	//note: with statements need to be updated to 2.7
	//see: ast.c lines: 3127 -> 3185

	function astForWithVar (c, n) {
	    REQ(n, SYM.with_item);
	    return astForExpr(c, CHILD(n, 1));
	}

	function astForWithStmt (c, n) {
	    /* with_stmt: 'with' test [ with_var ] ':' suite */
	    var optionalVars;
	    var contextExpr;
	    var suiteIndex = 3; // skip with, test, :
	    goog.asserts.assert(n.type === SYM.with_stmt);
	    contextExpr = astForExpr(c, CHILD(n, 1));
	    if (CHILD(n, 2).type === SYM.with_item) {
	        optionalVars = astForWithVar(c, CHILD(n, 2));
	        setContext(c, optionalVars, Store, n);
	        suiteIndex = 4;
	    }
	    return new With_(contextExpr, optionalVars, astForSuite(c, CHILD(n, suiteIndex)), n.lineno, n.col_offset);
	}

	function astForExecStmt (c, n) {
	    var expr1, globals = null, locals = null;
	    var nchildren = NCH(n);
	    goog.asserts.assert(nchildren === 2 || nchildren === 4 || nchildren === 6);

	    /* exec_stmt: 'exec' expr ['in' test [',' test]] */
	    REQ(n, SYM.exec_stmt);
	    expr1 = astForExpr(c, CHILD(n, 1));
	    if (nchildren >= 4) {
	        globals = astForExpr(c, CHILD(n, 3));
	    }
	    if (nchildren === 6) {
	        locals = astForExpr(c, CHILD(n, 5));
	    }
	    return new Exec(expr1, globals, locals, n.lineno, n.col_offset);
	}

	function astForIfStmt (c, n) {
	    /* if_stmt: 'if' test ':' suite ('elif' test ':' suite)*
	     ['else' ':' suite]
	     */
	    var off;
	    var i;
	    var orelse;
	    var hasElse;
	    var nElif;
	    var decider;
	    var s;
	    REQ(n, SYM.if_stmt);
	    if (NCH(n) === 4) {
	        return new If_(
	            astForExpr(c, CHILD(n, 1)),
	            astForSuite(c, CHILD(n, 3)),
	            [], n.lineno, n.col_offset);
	    }

	    s = CHILD(n, 4).value;
	    decider = s.charAt(2); // elSe or elIf
	    if (decider === "s") {
	        return new If_(
	            astForExpr(c, CHILD(n, 1)),
	            astForSuite(c, CHILD(n, 3)),
	            astForSuite(c, CHILD(n, 6)),
	            n.lineno, n.col_offset);
	    }
	    else if (decider === "i") {
	        nElif = NCH(n) - 4;
	        hasElse = false;
	        orelse = [];

	        /* must reference the child nElif+1 since 'else' token is third, not
	         * fourth child from the end. */
	        if (CHILD(n, nElif + 1).type === TOK.T_NAME &&
	            CHILD(n, nElif + 1).value.charAt(2) === "s") {
	            hasElse = true;
	            nElif -= 3;
	        }
	        nElif /= 4;

	        if (hasElse) {
	            orelse = [
	                new If_(
	                    astForExpr(c, CHILD(n, NCH(n) - 6)),
	                    astForSuite(c, CHILD(n, NCH(n) - 4)),
	                    astForSuite(c, CHILD(n, NCH(n) - 1)),
	                    CHILD(n, NCH(n) - 6).lineno,
	                    CHILD(n, NCH(n) - 6).col_offset)];
	            nElif--;
	        }

	        for (i = 0; i < nElif; ++i) {
	            off = 5 + (nElif - i - 1) * 4;
	            orelse = [
	                new If_(
	                    astForExpr(c, CHILD(n, off)),
	                    astForSuite(c, CHILD(n, off + 2)),
	                    orelse,
	                    CHILD(n, off).lineno,
	                    CHILD(n, off).col_offset)];
	        }
	        return new If_(
	            astForExpr(c, CHILD(n, 1)),
	            astForSuite(c, CHILD(n, 3)),
	            orelse, n.lineno, n.col_offset);
	    }

	    goog.asserts.fail("unexpected token in 'if' statement");
	}

	function astForExprlist (c, n, context) {
	    var e;
	    var i;
	    var seq;
	    REQ(n, SYM.exprlist);
	    seq = [];
	    for (i = 0; i < NCH(n); i += 2) {
	        e = astForExpr(c, CHILD(n, i));
	        seq[i / 2] = e;
	        if (context) {
	            setContext(c, e, context, CHILD(n, i));
	        }
	    }
	    return seq;
	}

	function astForDelStmt (c, n) {
	    /* del_stmt: 'del' exprlist */
	    REQ(n, SYM.del_stmt);
	    return new Delete_(astForExprlist(c, CHILD(n, 1), Del), n.lineno, n.col_offset);
	}

	function astForGlobalStmt (c, n) {
	    /* global_stmt: 'global' NAME (',' NAME)* */
	    var i;
	    var s = [];
	    REQ(n, SYM.global_stmt);
	    for (i = 1; i < NCH(n); i += 2) {
	        s[(i - 1) / 2] = strobj(CHILD(n, i).value);
	    }
	    return new Global(s, n.lineno, n.col_offset);
	}

	function astForAssertStmt (c, n) {
	    /* assert_stmt: 'assert' test [',' test] */
	    REQ(n, SYM.assert_stmt);
	    if (NCH(n) === 2) {
	        return new Assert(astForExpr(c, CHILD(n, 1)), null, n.lineno, n.col_offset);
	    }
	    else if (NCH(n) === 4) {
	        return new Assert(astForExpr(c, CHILD(n, 1)), astForExpr(c, CHILD(n, 3)), n.lineno, n.col_offset);
	    }
	    goog.asserts.fail("improper number of parts to assert stmt");
	}

	function aliasForImportName (c, n) {
	    /*
	     import_as_name: NAME ['as' NAME]
	     dotted_as_name: dotted_name ['as' NAME]
	     dotted_name: NAME ('.' NAME)*
	     */

	    var i;
	    var a;
	    var name;
	    var str;
	    loop: while (true) {
	        switch (n.type) {
	            case SYM.import_as_name:
	                str = null;
	                name = strobj(CHILD(n, 0).value);
	                if (NCH(n) === 3) {
	                    str = CHILD(n, 2).value;
	                }
	                return new alias(name, str == null ? null : strobj(str));
	            case SYM.dotted_as_name:
	                if (NCH(n) === 1) {
	                    n = CHILD(n, 0);
	                    continue loop;
	                }
	                else {
	                    a = aliasForImportName(c, CHILD(n, 0));
	                    goog.asserts.assert(!a.asname);
	                    a.asname = strobj(CHILD(n, 2).value);
	                    return a;
	                }
	                break;
	            case SYM.dotted_name:
	                if (NCH(n) === 1) {
	                    return new alias(strobj(CHILD(n, 0).value), null);
	                }
	                else {
	                    // create a string of the form a.b.c
	                    str = "";
	                    for (i = 0; i < NCH(n); i += 2) {
	                        str += CHILD(n, i).value + ".";
	                    }
	                    return new alias(strobj(str.substr(0, str.length - 1)), null);
	                }
	                break;
	            case TOK.T_STAR:
	                return new alias(strobj("*"), null);
	            default:
	                throw new Sk.builtin.SyntaxError("unexpected import name", c.c_filename, n.lineno);
	        }
	        break;
	    }
	}

	function astForImportStmt (c, n) {
	    /*
	     import_stmt: import_name | import_from
	     import_name: 'import' dotted_as_names
	     import_from: 'from' ('.'* dotted_name | '.') 'import'
	     ('*' | '(' import_as_names ')' | import_as_names)
	     */
	    var modname;
	    var idx;
	    var nchildren;
	    var ndots;
	    var mod;
	    var i;
	    var aliases;
	    var col_offset;
	    var lineno;
	    REQ(n, SYM.import_stmt);
	    lineno = n.lineno;
	    col_offset = n.col_offset;
	    n = CHILD(n, 0);
	    if (n.type === SYM.import_name) {
	        n = CHILD(n, 1);
	        REQ(n, SYM.dotted_as_names);
	        aliases = [];
	        for (i = 0; i < NCH(n); i += 2) {
	            aliases[i / 2] = aliasForImportName(c, CHILD(n, i));
	        }
	        return new Import_(aliases, lineno, col_offset);
	    }
	    else if (n.type === SYM.import_from) {
	        mod = null;
	        ndots = 0;

	        for (idx = 1; idx < NCH(n); ++idx) {
	            if (CHILD(n, idx).type === SYM.dotted_name) {
	                mod = aliasForImportName(c, CHILD(n, idx));
	                idx++;
	                break;
	            }
	            else if (CHILD(n, idx).type !== TOK.T_DOT) {
	                break;
	            }
	            ndots++;
	        }
	        ++idx; // skip the import keyword
	        switch (CHILD(n, idx).type) {
	            case TOK.T_STAR:
	                // from ... import
	                n = CHILD(n, idx);
	                nchildren = 1;
	                break;
	            case TOK.T_LPAR:
	                // from ... import (x, y, z)
	                n = CHILD(n, idx + 1);
	                nchildren = NCH(n);
	                break;
	            case SYM.import_as_names:
	                // from ... import x, y, z
	                n = CHILD(n, idx);
	                nchildren = NCH(n);
	                if (nchildren % 2 === 0) {
	                    throw new Sk.builtin.SyntaxError("trailing comma not allowed without surrounding parentheses", c.c_filename, n.lineno);
	                }
	                break;
	            default:
	                throw new Sk.builtin.SyntaxError("Unexpected node-type in from-import", c.c_filename, n.lineno);
	        }
	        aliases = [];
	        if (n.type === TOK.T_STAR) {
	            aliases[0] = aliasForImportName(c, n);
	        }
	        else {
	            for (i = 0; i < NCH(n); i += 2) {
	                aliases[i / 2] = aliasForImportName(c, CHILD(n, i));
	            }
	        }
	        modname = mod ? mod.name.v : "";
	        return new ImportFrom(strobj(modname), aliases, ndots, lineno, col_offset);
	    }
	    throw new Sk.builtin.SyntaxError("unknown import statement", c.c_filename, n.lineno);
	}

	function astForTestlistComp(c, n) {
	    /* testlist_comp: test ( comp_for | (',' test)* [','] ) */
	    /* argument: test [comp_for] */
	    goog.asserts.assert(n.type === SYM.testlist_comp || n.type === SYM.argument);
	    if (NCH(n) > 1 && CHILD(n, 1).type === SYM.comp_for) {
	        return astForGenExpr(c, n);
	    }
	    return astForTestlist(c, n);
	}

	function astForListcomp (c, n) {
	    /* listmaker: test ( list_for | (',' test)* [','] )
	     list_for: 'for' exprlist 'in' testlist_safe [list_iter]
	     list_iter: list_for | list_if
	     list_if: 'if' test [list_iter]
	     testlist_safe: test [(',' test)+ [',']]
	     */

	    function countListFors (c, n) {
	        var nfors = 0;
	        var ch = CHILD(n, 1);
	        count_list_for: while (true) {
	            nfors++;
	            REQ(ch, SYM.list_for);
	            if (NCH(ch) === 5) {
	                ch = CHILD(ch, 4);
	            }
	            else {
	                return nfors;
	            }
	            count_list_iter: while (true) {
	                REQ(ch, SYM.list_iter);
	                ch = CHILD(ch, 0);
	                if (ch.type === SYM.list_for) {
	                    continue count_list_for;
	                }
	                else if (ch.type === SYM.list_if) {
	                    if (NCH(ch) === 3) {
	                        ch = CHILD(ch, 2);
	                        continue count_list_iter;
	                    }
	                    else {
	                        return nfors;
	                    }
	                }
	                break;
	            }
	            break;
	        }
	    }

	    function countListIfs (c, n) {
	        var nifs = 0;
	        while (true) {
	            REQ(n, SYM.list_iter);
	            if (CHILD(n, 0).type === SYM.list_for) {
	                return nifs;
	            }
	            n = CHILD(n, 0);
	            REQ(n, SYM.list_if);
	            nifs++;
	            if (NCH(n) == 2) {
	                return nifs;
	            }
	            n = CHILD(n, 2);
	        }
	    }

	    var j;
	    var ifs;
	    var nifs;
	    var lc;
	    var expression;
	    var t;
	    var forch;
	    var i;
	    var ch;
	    var listcomps;
	    var nfors;
	    var elt;
	    REQ(n, SYM.listmaker);
	    goog.asserts.assert(NCH(n) > 1);
	    elt = astForExpr(c, CHILD(n, 0));
	    nfors = countListFors(c, n);
	    listcomps = [];
	    ch = CHILD(n, 1);
	    for (i = 0; i < nfors; ++i) {
	        REQ(ch, SYM.list_for);
	        forch = CHILD(ch, 1);
	        t = astForExprlist(c, forch, Store);
	        expression = astForTestlist(c, CHILD(ch, 3));
	        if (NCH(forch) === 1) {
	            lc = new comprehension(t[0], expression, []);
	        }
	        else {
	            lc = new comprehension(new Tuple(t, Store, ch.lineno, ch.col_offset), expression, []);
	        }

	        if (NCH(ch) === 5) {
	            ch = CHILD(ch, 4);
	            nifs = countListIfs(c, ch);
	            ifs = [];
	            for (j = 0; j < nifs; ++j) {
	                REQ(ch, SYM.list_iter);
	                ch = CHILD(ch, 0);
	                REQ(ch, SYM.list_if);
	                ifs[j] = astForExpr(c, CHILD(ch, 1));
	                if (NCH(ch) === 3) {
	                    ch = CHILD(ch, 2);
	                }
	            }
	            if (ch.type === SYM.list_iter) {
	                ch = CHILD(ch, 0);
	            }
	            lc.ifs = ifs;
	        }
	        listcomps[i] = lc;
	    }
	    return new ListComp(elt, listcomps, n.lineno, n.col_offset);
	}

	function astForFactor (c, n) {
	    /* some random peephole thing that cpy does */
	    var expression;
	    var pnum;
	    var patom;
	    var ppower;
	    var pfactor;
	    if (CHILD(n, 0).type === TOK.T_MINUS && NCH(n) === 2) {
	        pfactor = CHILD(n, 1);
	        if (pfactor.type === SYM.factor && NCH(pfactor) === 1) {
	            ppower = CHILD(pfactor, 0);
	            if (ppower.type === SYM.power && NCH(ppower) === 1) {
	                patom = CHILD(ppower, 0);
	                if (patom.type === SYM.atom) {
	                    pnum = CHILD(patom, 0);
	                    if (pnum.type === TOK.T_NUMBER) {
	                        pnum.value = "-" + pnum.value;
	                        return astForAtom(c, patom);
	                    }
	                }
	            }
	        }
	    }

	    expression = astForExpr(c, CHILD(n, 1));
	    switch (CHILD(n, 0).type) {
	        case TOK.T_PLUS:
	            return new UnaryOp(UAdd, expression, n.lineno, n.col_offset);
	        case TOK.T_MINUS:
	            return new UnaryOp(USub, expression, n.lineno, n.col_offset);
	        case TOK.T_TILDE:
	            return new UnaryOp(Invert, expression, n.lineno, n.col_offset);
	    }

	    goog.asserts.fail("unhandled factor");
	}

	function astForForStmt (c, n) {
	    /* for_stmt: 'for' exprlist 'in' testlist ':' suite ['else' ':' suite] */
	    var target;
	    var _target;
	    var nodeTarget;
	    var seq = [];
	    REQ(n, SYM.for_stmt);
	    if (NCH(n) === 9) {
	        seq = astForSuite(c, CHILD(n, 8));
	    }
	    nodeTarget = CHILD(n, 1);
	    _target = astForExprlist(c, nodeTarget, Store);
	    if (NCH(nodeTarget) === 1) {
	        target = _target[0];
	    }
	    else {
	        target = new Tuple(_target, Store, n.lineno, n.col_offset);
	    }

	    return new For_(target,
	        astForTestlist(c, CHILD(n, 3)),
	        astForSuite(c, CHILD(n, 5)),
	        seq, n.lineno, n.col_offset);
	}

	function astForCall (c, n, func) {
	    /*
	      arglist: (argument ',')* (argument [',']| '*' test [',' '**' test]
	               | '**' test)
	      argument: test [comp_for] | test '=' test       # Really [keyword '='] test
	    */
	    var tmp;
	    var k;
	    var key;
	    var e;
	    var kwarg;
	    var vararg;
	    var keywords;
	    var args;
	    var ch;
	    var i;
	    var ngens;
	    var nkeywords;
	    var nargs;

	    REQ(n, SYM.arglist);
	    nargs = 0;
	    nkeywords = 0;
	    ngens = 0;
	    for (i = 0; i < NCH(n); i++) {
	        ch = CHILD(n, i);
	        if (ch.type === SYM.argument) {
	            if (NCH(ch) === 1) {
	                nargs++;
	            }
	            else if (CHILD(ch, 1).type === SYM.comp_for) {
	                ngens++;
	            }
	            else {
	                nkeywords++;
	            }
	        }
	    }
	    if (ngens > 1 || (ngens && (nargs || nkeywords))) {
	        throw new Sk.builtin.SyntaxError("Generator expression must be parenthesized if not sole argument", c.c_filename, n.lineno);
	    }
	    if (nargs + nkeywords + ngens > 255) {
	        throw new Sk.builtin.SyntaxError("more than 255 arguments", c.c_filename, n.lineno);
	    }
	    args = [];
	    keywords = [];
	    nargs = 0;
	    nkeywords = 0;
	    vararg = null;
	    kwarg = null;
	    for (i = 0; i < NCH(n); i++) {
	        ch = CHILD(n, i);
	        if (ch.type === SYM.argument) {
	            if (NCH(ch) === 1) {
	                if (nkeywords) {
	                    throw new Sk.builtin.SyntaxError("non-keyword arg after keyword arg", c.c_filename, n.lineno);
	                }
	                if (vararg) {
	                    throw new Sk.builtin.SyntaxError("only named arguments may follow *expression", c.c_filename, n.lineno);
	                }
	                args[nargs++] = astForExpr(c, CHILD(ch, 0));
	            }
	            else if (CHILD(ch, 1).type === SYM.comp_for) {
	                args[nargs++] = astForGenExpr(c, ch);
	            }
	            else {
	                e = astForExpr(c, CHILD(ch, 0));
	                if (e.constructor === Lambda) {
	                    throw new Sk.builtin.SyntaxError("lambda cannot contain assignment", c.c_filename, n.lineno);
	                }
	                else if (e.constructor !== Name) {
	                    throw new Sk.builtin.SyntaxError("keyword can't be an expression", c.c_filename, n.lineno);
	                }
	                key = e.id;
	                forbiddenCheck(c, CHILD(ch, 0), key, n.lineno);
	                for (k = 0; k < nkeywords; ++k) {
	                    tmp = keywords[k].arg;
	                    if (tmp === key) {
	                        throw new Sk.builtin.SyntaxError("keyword argument repeated", c.c_filename, n.lineno);
	                    }
	                }
	                keywords[nkeywords++] = new keyword(key, astForExpr(c, CHILD(ch, 2)));
	            }
	        }
	        else if (ch.type === TOK.T_STAR) {
	            vararg = astForExpr(c, CHILD(n, ++i));
	        }
	        else if (ch.type === TOK.T_DOUBLESTAR) {
	            kwarg = astForExpr(c, CHILD(n, ++i));
	        }
	    }
	    return new Call(func, args, keywords, vararg, kwarg, func.lineno, func.col_offset);
	}

	function astForTrailer (c, n, leftExpr) {
	    /* trailer: '(' [arglist] ')' | '[' subscriptlist ']' | '.' NAME 
	     subscriptlist: subscript (',' subscript)* [',']
	     subscript: '.' '.' '.' | test | [test] ':' [test] [sliceop]
	     */
	    var e;
	    var elts;
	    var slc;
	    var j;
	    var slices;
	    var simple;
	    REQ(n, SYM.trailer);
	    if (CHILD(n, 0).type === TOK.T_LPAR) {
	        if (NCH(n) === 2) {
	            return new Call(leftExpr, [], [], null, null, n.lineno, n.col_offset);
	        }
	        else {
	            return astForCall(c, CHILD(n, 1), leftExpr);
	        }
	    }
	    else if (CHILD(n, 0).type === TOK.T_DOT) {
	        return new Attribute(leftExpr, strobj(CHILD(n, 1).value), Load, n.lineno, n.col_offset);
	    }
	    else {
	        REQ(CHILD(n, 0), TOK.T_LSQB);
	        REQ(CHILD(n, 2), TOK.T_RSQB);
	        n = CHILD(n, 1);
	        if (NCH(n) === 1) {
	            return new Subscript(leftExpr, astForSlice(c, CHILD(n, 0)), Load, n.lineno, n.col_offset);
	        }
	        else {
	            /* The grammar is ambiguous here. The ambiguity is resolved 
	             by treating the sequence as a tuple literal if there are
	             no slice features.
	             */
	            simple = true;
	            slices = [];
	            for (j = 0; j < NCH(n); j += 2) {
	                slc = astForSlice(c, CHILD(n, j));
	                if (slc.constructor !== Index) {
	                    simple = false;
	                }
	                slices[j / 2] = slc;
	            }
	            if (!simple) {
	                return new Subscript(leftExpr, new ExtSlice(slices), Load, n.lineno, n.col_offset);
	            }
	            elts = [];
	            for (j = 0; j < slices.length; ++j) {
	                slc = slices[j];
	                goog.asserts.assert(slc.constructor === Index && slc.value !== null && slc.value !== undefined);
	                elts[j] = slc.value;
	            }
	            e = new Tuple(elts, Load, n.lineno, n.col_offset);
	            return new Subscript(leftExpr, new Index(e), Load, n.lineno, n.col_offset);
	        }
	    }
	}

	function astForFlowStmt (c, n) {
	    /*
	     flow_stmt: break_stmt | continue_stmt | return_stmt | raise_stmt
	     | yield_stmt
	     break_stmt: 'break'
	     continue_stmt: 'continue'
	     return_stmt: 'return' [testlist]
	     yield_stmt: yield_expr
	     yield_expr: 'yield' testlist
	     raise_stmt: 'raise' [test [',' test [',' test]]]
	     */
	    var ch;
	    REQ(n, SYM.flow_stmt);
	    ch = CHILD(n, 0);
	    switch (ch.type) {
	        case SYM.break_stmt:
	            return new Break_(n.lineno, n.col_offset);
	        case SYM.continue_stmt:
	            return new Continue_(n.lineno, n.col_offset);
	        case SYM.yield_stmt:
	            return new Expr(astForExpr(c, CHILD(ch, 0)), n.lineno, n.col_offset);
	        case SYM.return_stmt:
	            if (NCH(ch) === 1) {
	                return new Return_(null, n.lineno, n.col_offset);
	            }
	            else {
	                return new Return_(astForTestlist(c, CHILD(ch, 1)), n.lineno, n.col_offset);
	            }
	            break;
	        case SYM.raise_stmt:
	            if (NCH(ch) === 1) {
	                return new Raise(null, null, null, n.lineno, n.col_offset);
	            }
	            else if (NCH(ch) === 2) {
	                return new Raise(astForExpr(c, CHILD(ch, 1)), null, null, n.lineno, n.col_offset);
	            }
	            else if (NCH(ch) === 4) {
	                return new Raise(
	                    astForExpr(c, CHILD(ch, 1)),
	                    astForExpr(c, CHILD(ch, 3)),
	                    null, n.lineno, n.col_offset);
	            }
	            else if (NCH(ch) === 6) {
	                return new Raise(
	                    astForExpr(c, CHILD(ch, 1)),
	                    astForExpr(c, CHILD(ch, 3)),
	                    astForExpr(c, CHILD(ch, 5)),
	                    n.lineno, n.col_offset);
	            }
	            break;
	        default:
	            goog.asserts.fail("unexpected flow_stmt");
	    }
	    goog.asserts.fail("unhandled flow statement");
	}

	function astForArguments (c, n) {
	    /* parameters: '(' [varargslist] ')'
	     varargslist: (fpdef ['=' test] ',')* ('*' NAME [',' '**' NAME]
	     | '**' NAME) | fpdef ['=' test] (',' fpdef ['=' test])* [',']
	     */
	    var parenthesized;
	    var id;
	    var complexArgs;
	    var k;
	    var j;
	    var i;
	    var foundDefault;
	    var defaults;
	    var args;
	    var ch;
	    var vararg = null;
	    var kwarg = null;
	    if (n.type === SYM.parameters) {
	        if (NCH(n) === 2) // () as arglist
	        {
	            return new arguments_([], null, null, []);
	        }
	        n = CHILD(n, 1);
	    }
	    REQ(n, SYM.varargslist);

	    args = [];
	    defaults = [];

	    /* fpdef: NAME | '(' fplist ')'
	     fplist: fpdef (',' fpdef)* [',']
	     */
	    foundDefault = false;
	    i = 0;
	    j = 0; // index for defaults
	    k = 0; // index for args
	    while (i < NCH(n)) {
	        ch = CHILD(n, i);
	        switch (ch.type) {
	            case SYM.fpdef:
	                complexArgs = 0;
	                parenthesized = 0;
	                handle_fpdef: while (true) {
	                    if (i + 1 < NCH(n) && CHILD(n, i + 1).type === TOK.T_EQUAL) {
	                        defaults[j++] = astForExpr(c, CHILD(n, i + 2));
	                        i += 2;
	                        foundDefault = true;
	                    }
	                    else if (foundDefault) {
	                        /* def f((x)=4): pass should raise an error.
	                         def f((x, (y))): pass will just incur the tuple unpacking warning. */
	                        if (parenthesized && !complexArgs) {
	                            throw new Sk.builtin.SyntaxError("parenthesized arg with default", c.c_filename, n.lineno);
	                        }
	                        throw new Sk.builtin.SyntaxError("non-default argument follows default argument", c.c_filename, n.lineno);
	                    }

	                    if (NCH(ch) === 3) {
	                        ch = CHILD(ch, 1);
	                        // def foo((x)): is not complex, special case.
	                        if (NCH(ch) !== 1) {
	                            throw new Sk.builtin.SyntaxError("tuple parameter unpacking has been removed", c.c_filename, n.lineno);
	                        }
	                        else {
	                            /* def foo((x)): setup for checking NAME below. */
	                            /* Loop because there can be many parens and tuple
	                             unpacking mixed in. */
	                            parenthesized = true;
	                            ch = CHILD(ch, 0);
	                            goog.asserts.assert(ch.type === SYM.fpdef);
	                            continue handle_fpdef;
	                        }
	                    }
	                    if (CHILD(ch, 0).type === TOK.T_NAME) {
	                        forbiddenCheck(c, n, CHILD(ch, 0).value, n.lineno);
	                        id = strobj(CHILD(ch, 0).value);
	                        args[k++] = new Name(id, Param, ch.lineno, ch.col_offset);
	                    }
	                    i += 2;
	                    if (parenthesized) {
	                        throw new Sk.builtin.SyntaxError("parenthesized argument names are invalid", c.c_filename, n.lineno);
	                    }
	                    break;
	                }
	                break;
	            case TOK.T_STAR:
	                forbiddenCheck(c, CHILD(n, i + 1), CHILD(n, i + 1).value, n.lineno);
	                vararg = strobj(CHILD(n, i + 1).value);
	                i += 3;
	                break;
	            case TOK.T_DOUBLESTAR:
	                forbiddenCheck(c, CHILD(n, i + 1), CHILD(n, i + 1).value, n.lineno);
	                kwarg = strobj(CHILD(n, i + 1).value);
	                i += 3;
	                break;
	            default:
	                goog.asserts.fail("unexpected node in varargslist");
	        }
	    }
	    return new arguments_(args, vararg, kwarg, defaults);
	}

	function astForFuncdef (c, n, decoratorSeq) {
	    /* funcdef: 'def' NAME parameters ':' suite */
	    var body;
	    var args;
	    var name;
	    REQ(n, SYM.funcdef);
	    name = strobj(CHILD(n, 1).value);
	    forbiddenCheck(c, CHILD(n, 1), CHILD(n, 1).value, n.lineno);
	    args = astForArguments(c, CHILD(n, 2));
	    body = astForSuite(c, CHILD(n, 4));
	    return new FunctionDef(name, args, body, decoratorSeq, n.lineno, n.col_offset);
	}

	function astForClassBases (c, n) {
	    /* testlist: test (',' test)* [','] */
	    goog.asserts.assert(NCH(n) > 0);
	    REQ(n, SYM.testlist);
	    if (NCH(n) === 1) {
	        return [ astForExpr(c, CHILD(n, 0)) ];
	    }
	    return seqForTestlist(c, n);
	}

	function astForClassdef (c, n, decoratorSeq) {
	    /* classdef: 'class' NAME ['(' testlist ')'] ':' suite */
	    var s;
	    var bases;
	    var classname;
	    REQ(n, SYM.classdef);
	    forbiddenCheck(c, n, CHILD(n, 1).value, n.lineno);
	    classname = strobj(CHILD(n, 1).value);
	    if (NCH(n) === 4) {
	        return new ClassDef(classname, [], astForSuite(c, CHILD(n, 3)), decoratorSeq, n.lineno, n.col_offset);
	    }
	    if (CHILD(n, 3).type === TOK.T_RPAR) {
	        return new ClassDef(classname, [], astForSuite(c, CHILD(n, 5)), decoratorSeq, n.lineno, n.col_offset);
	    }

	    bases = astForClassBases(c, CHILD(n, 3));
	    s = astForSuite(c, CHILD(n, 6));
	    return new ClassDef(classname, bases, s, decoratorSeq, n.lineno, n.col_offset);
	}

	function astForLambdef (c, n) {
	    /* lambdef: 'lambda' [varargslist] ':' test */
	    var args;
	    var expression;
	    if (NCH(n) === 3) {
	        args = new arguments_([], null, null, []);
	        expression = astForExpr(c, CHILD(n, 2));
	    }
	    else {
	        args = astForArguments(c, CHILD(n, 1));
	        expression = astForExpr(c, CHILD(n, 3));
	    }
	    return new Lambda(args, expression, n.lineno, n.col_offset);
	}

	function astForComprehension(c, n) {
	    /* testlist_comp: test ( comp_for | (',' test)* [','] )
	       argument: test [comp_for] | test '=' test       # Really [keyword '='] test */
	    
	    var j;
	    var ifs;
	    var nifs;
	    var ge;
	    var expression;
	    var t;
	    var forch;
	    var i;
	    var ch;
	    var genexps;
	    var nfors;
	    var elt;
	    var comps;
	    var comp;

	    function countCompFors(c, n) {
	        var nfors = 0;
	        count_comp_for: while (true) {
	            nfors++;
	            REQ(n, SYM.comp_for);
	            if (NCH(n) === 5) {
	                n = CHILD(n, 4);
	            } else {
	                return nfors;
	            }
	            count_comp_iter: while (true) {
	                REQ(n, SYM.comp_iter);
	                n = CHILD(n, 0);
	                if (n.type === SYM.comp_for) {
	                    continue count_comp_for;
	                } else if (n.type === SYM.comp_if) {
	                    if (NCH(n) === 3) {
	                        n = CHILD(n, 2);
	                        continue count_comp_iter;
	                    } else {
	                        return nfors;
	                    }
	                }
	                break;
	            }
	            break;
	        }
	        goog.asserts.fail("logic error in countCompFors");
	    }

	    function countCompIfs(c, n) {
	        var nifs = 0;
	        while (true) {
	            REQ(n, SYM.comp_iter);
	            if (CHILD(n, 0).type === SYM.comp_for) {
	                return nifs;
	            }
	            n = CHILD(n, 0);
	            REQ(n, SYM.comp_if);
	            nifs++;
	            if (NCH(n) == 2) {
	                return nifs;
	            }
	            n = CHILD(n, 2);
	        }
	    }

	    nfors = countCompFors(c, n);
	    comps = [];
	    for (i = 0; i < nfors; ++i) {
	        REQ(n, SYM.comp_for);
	        forch = CHILD(n, 1);
	        t = astForExprlist(c, forch, Store);
	        expression = astForExpr(c, CHILD(n, 3));
	        if (NCH(forch) === 1) {
	            comp = new comprehension(t[0], expression, []);
	        } else {
	            comp = new comprehension(new Tuple(t, Store, n.lineno, n.col_offset), expression, []);
	        }
	        if (NCH(n) === 5) {
	            n = CHILD(n, 4);
	            nifs = countCompIfs(c, n);
	            ifs = [];
	            for (j = 0; j < nifs; ++j) {
	                REQ(n, SYM.comp_iter);
	                n = CHILD(n, 0);
	                REQ(n, SYM.comp_if);
	                expression = astForExpr(c, CHILD(n, 1));
	                ifs[j] = expression;
	                if (NCH(n) === 3) {
	                    n = CHILD(n, 2);
	                }
	            }
	            if (n.type === SYM.comp_iter) {
	                n = CHILD(n, 0);
	            }
	            comp.ifs = ifs;
	        }
	        comps[i] = comp;
	    }
	    return comps;
	}

	function astForIterComp(c, n, type) {
	    var elt, comps;
	    goog.asserts.assert(NCH(n) > 1);
	    elt = astForExpr(c, CHILD(n, 0));
	    comps = astForComprehension(c, CHILD(n, 1));
	    if (type === COMP_GENEXP) {
	        return new GeneratorExp(elt, comps, n.lineno, n.col_offset);
	    } else if (type === COMP_SETCOMP) {
	        return new SetComp(elt, comps, n.lineno, n.col_offset);
	    }
	}

	function astForDictComp(c, n) {
	    var key, value;
	    var comps = [];
	    goog.asserts.assert(NCH(n) > 3);
	    REQ(CHILD(n, 1), TOK.T_COLON);
	    key = astForExpr(c, CHILD(n, 0));
	    value = astForExpr(c, CHILD(n, 2));
	    comps = astForComprehension(c, CHILD(n, 3));
	    return new DictComp(key, value, comps, n.lineno, n.col_offset);
	}

	function astForGenExpr(c, n) {
	    goog.asserts.assert(n.type === SYM.testlist_comp || n.type === SYM.argument);
	    return astForIterComp(c, n, COMP_GENEXP);
	}

	function astForSetComp(c, n) {
	    goog.asserts.assert(n.type === SYM.dictorsetmaker);
	    return astForIterComp(c, n, COMP_SETCOMP);
	}

	function astForWhileStmt (c, n) {
	    /* while_stmt: 'while' test ':' suite ['else' ':' suite] */
	    REQ(n, SYM.while_stmt);
	    if (NCH(n) === 4) {
	        return new While_(astForExpr(c, CHILD(n, 1)), astForSuite(c, CHILD(n, 3)), [], n.lineno, n.col_offset);
	    }
	    else if (NCH(n) === 7) {
	        return new While_(astForExpr(c, CHILD(n, 1)), astForSuite(c, CHILD(n, 3)), astForSuite(c, CHILD(n, 6)), n.lineno, n.col_offset);
	    }
	    goog.asserts.fail("wrong number of tokens for 'while' stmt");
	}

	function astForAugassign (c, n) {
	    REQ(n, SYM.augassign);
	    n = CHILD(n, 0);
	    switch (n.value.charAt(0)) {
	        case "+":
	            return Add;
	        case "-":
	            return Sub;
	        case "/":
	            if (n.value.charAt(1) === "/") {
	                return FloorDiv;
	            }
	            return Div;
	        case "%":
	            return Mod;
	        case "<":
	            return LShift;
	        case ">":
	            return RShift;
	        case "&":
	            return BitAnd;
	        case "^":
	            return BitXor;
	        case "|":
	            return BitOr;
	        case "*":
	            if (n.value.charAt(1) === "*") {
	                return Pow;
	            }
	            return Mult;
	        default:
	            goog.asserts.fail("invalid augassign");
	    }
	}

	function astForBinop (c, n) {
	    /* Must account for a sequence of expressions.
	     How should A op B op C by represented?
	     BinOp(BinOp(A, op, B), op, C).
	     */
	    var tmp;
	    var newoperator;
	    var nextOper;
	    var i;
	    var result = new BinOp(
	        astForExpr(c, CHILD(n, 0)),
	        getOperator(CHILD(n, 1)),
	        astForExpr(c, CHILD(n, 2)),
	        n.lineno, n.col_offset);
	    var nops = (NCH(n) - 1) / 2;
	    for (i = 1; i < nops; ++i) {
	        nextOper = CHILD(n, i * 2 + 1);
	        newoperator = getOperator(nextOper);
	        tmp = astForExpr(c, CHILD(n, i * 2 + 2));
	        result = new BinOp(result, newoperator, tmp, nextOper.lineno, nextOper.col_offset);
	    }
	    return result;

	}


	function astForTestlist(c, n) {
	    /* this doesn't show up in Grammar.txt never did: testlist_gexp: test (',' test)* [','] */
	    /* testlist_comp: test (',' test)* [','] */
	    /* testlist: test (',' test)* [','] */
	    /* testlist_safe: test (',' test)+ [','] */
	    /* testlist1: test (',' test)* */
	    goog.asserts.assert(NCH(n) > 0);
	    if (n.type === SYM.testlist_comp) {
	        if (NCH(n) > 1) {
	            goog.asserts.assert(CHILD(n, 1).type !== SYM.comp_for);
	        }
	    }
	    else {
	        goog.asserts.assert(n.type === SYM.testlist || n.type === SYM.testlist_safe || n.type === SYM.testlist1);
	    }

	    if (NCH(n) === 1) {
	        return astForExpr(c, CHILD(n, 0));
	    }
	    else {
	        return new Tuple(seqForTestlist(c, n), Load, n.lineno, n.col_offset);
	    }

	}

	function astForExprStmt (c, n) {
	    var expression;
	    var value;
	    var e;
	    var i;
	    var targets;
	    var expr2;
	    var varName;
	    var expr1;
	    var ch;
	    REQ(n, SYM.expr_stmt);
	    /* expr_stmt: testlist (augassign (yield_expr|testlist) 
	     | ('=' (yield_expr|testlist))*)
	     testlist: test (',' test)* [',']
	     augassign: '+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '|=' | '^='
	     | '<<=' | '>>=' | '**=' | '//='
	     test: ... here starts the operator precendence dance
	     */
	    if (NCH(n) === 1) {
	        return new Expr(astForTestlist(c, CHILD(n, 0)), n.lineno, n.col_offset);
	    }
	    else if (CHILD(n, 1).type === SYM.augassign) {
	        ch = CHILD(n, 0);
	        expr1 = astForTestlist(c, ch);
	        switch (expr1.constructor) {
	            case GeneratorExp:
	                throw new Sk.builtin.SyntaxError("augmented assignment to generator expression not possible", c.c_filename, n.lineno);
	            case Yield:
	                throw new Sk.builtin.SyntaxError("augmented assignment to yield expression not possible", c.c_filename, n.lineno);
	            case Name:
	                varName = expr1.id;
	                forbiddenCheck(c, ch, varName, n.lineno);
	                break;
	            case Attribute:
	            case Subscript:
	                break;
	            default:
	                throw new Sk.builtin.SyntaxError("illegal expression for augmented assignment", c.c_filename, n.lineno);
	        }
	        setContext(c, expr1, Store, ch);

	        ch = CHILD(n, 2);
	        if (ch.type === SYM.testlist) {
	            expr2 = astForTestlist(c, ch);
	        }
	        else {
	            expr2 = astForExpr(c, ch);
	        }

	        return new AugAssign(expr1, astForAugassign(c, CHILD(n, 1)), expr2, n.lineno, n.col_offset);
	    }
	    else {
	        // normal assignment
	        REQ(CHILD(n, 1), TOK.T_EQUAL);
	        targets = [];
	        for (i = 0; i < NCH(n) - 2; i += 2) {
	            ch = CHILD(n, i);
	            if (ch.type === SYM.yield_expr) {
	                throw new Sk.builtin.SyntaxError("assignment to yield expression not possible", c.c_filename, n.lineno);
	            }
	            e = astForTestlist(c, ch);
	            setContext(c, e, Store, CHILD(n, i));
	            targets[i / 2] = e;
	        }
	        value = CHILD(n, NCH(n) - 1);
	        if (value.type === SYM.testlist) {
	            expression = astForTestlist(c, value);
	        }
	        else {
	            expression = astForExpr(c, value);
	        }
	        return new Assign(targets, expression, n.lineno, n.col_offset);
	    }
	}

	function astForIfexpr (c, n) {
	    /* test: or_test 'if' or_test 'else' test */
	    goog.asserts.assert(NCH(n) === 5);
	    return new IfExp(
	        astForExpr(c, CHILD(n, 2)),
	        astForExpr(c, CHILD(n, 0)),
	        astForExpr(c, CHILD(n, 4)),
	        n.lineno, n.col_offset);
	}

	/**
	 * s is a python-style string literal, including quote characters and u/r/b
	 * prefixes. Returns decoded string object.
	 */
	function parsestr (c, s) {
	    var encodeUtf8 = function (s) {
	        return unescape(encodeURIComponent(s));
	    };
	    var decodeUtf8 = function (s) {
	        return decodeURIComponent(escape(s));
	    };
	    var decodeEscape = function (s, quote) {
	        var d3;
	        var d2;
	        var d1;
	        var d0;
	        var c;
	        var i;
	        var len = s.length;
	        var ret = "";
	        for (i = 0; i < len; ++i) {
	            c = s.charAt(i);
	            if (c === "\\") {
	                ++i;
	                c = s.charAt(i);
	                if (c === "n") {
	                    ret += "\n";
	                }
	                else if (c === "\\") {
	                    ret += "\\";
	                }
	                else if (c === "t") {
	                    ret += "\t";
	                }
	                else if (c === "r") {
	                    ret += "\r";
	                }
	                else if (c === "b") {
	                    ret += "\b";
	                }
	                else if (c === "f") {
	                    ret += "\f";
	                }
	                else if (c === "v") {
	                    ret += "\v";
	                }
	                else if (c === "0") {
	                    ret += "\0";
	                }
	                else if (c === '"') {
	                    ret += '"';
	                }
	                else if (c === '\'') {
	                    ret += '\'';
	                }
	                else if (c === "\n") /* escaped newline, join lines */ {
	                }
	                else if (c === "x") {
	                    d0 = s.charAt(++i);
	                    d1 = s.charAt(++i);
	                    ret += String.fromCharCode(parseInt(d0 + d1, 16));
	                }
	                else if (c === "u" || c === "U") {
	                    d0 = s.charAt(++i);
	                    d1 = s.charAt(++i);
	                    d2 = s.charAt(++i);
	                    d3 = s.charAt(++i);
	                    ret += String.fromCharCode(parseInt(d0 + d1, 16), parseInt(d2 + d3, 16));
	                }
	                else {
	                    // Leave it alone
	                    ret += "\\" + c;
	                    // goog.asserts.fail("unhandled escape: '" + c.charCodeAt(0) + "'");
	                }
	            }
	            else {
	                ret += c;
	            }
	        }
	        return ret;
	    };

	    //print("parsestr", s);

	    var quote = s.charAt(0);
	    var rawmode = false;
	    var unicode = false;

	    // treats every sequence as unicodes even if they are not treated with uU prefix
	    // kinda hacking though working for most purposes
	    if((c.c_flags & Parser.CO_FUTURE_UNICODE_LITERALS || Sk.python3 === true)) {
	        unicode = true;
	    }

	    if (quote === "u" || quote === "U") {
	        s = s.substr(1);
	        quote = s.charAt(0);
	        unicode = true;
	    }
	    else if (quote === "r" || quote === "R") {
	        s = s.substr(1);
	        quote = s.charAt(0);
	        rawmode = true;
	    }
	    goog.asserts.assert(quote !== "b" && quote !== "B", "todo; haven't done b'' strings yet");

	    goog.asserts.assert(quote === "'" || quote === '"' && s.charAt(s.length - 1) === quote);
	    s = s.substr(1, s.length - 2);
	    if (unicode) {
	        s = encodeUtf8(s);
	    }

	    if (s.length >= 4 && s.charAt(0) === quote && s.charAt(1) === quote) {
	        goog.asserts.assert(s.charAt(s.length - 1) === quote && s.charAt(s.length - 2) === quote);
	        s = s.substr(2, s.length - 4);
	    }

	    if (rawmode || s.indexOf("\\") === -1) {
	        return strobj(decodeUtf8(s));
	    }
	    return strobj(decodeEscape(s, quote));
	}

	function parsestrplus (c, n) {
	    var i;
	    var ret;
	    REQ(CHILD(n, 0), TOK.T_STRING);
	    ret = new Sk.builtin.str("");
	    for (i = 0; i < NCH(n); ++i) {
	        try {
	            ret = ret.sq$concat(parsestr(c, CHILD(n, i).value));
	        } catch (x) {
	            throw new Sk.builtin.SyntaxError("invalid string (possibly contains a unicode character)", c.c_filename, CHILD(n, i).lineno);
	        }
	    }
	    return ret;
	}

	function parsenumber (c, s, lineno) {
	    var neg;
	    var val;
	    var tmp;
	    var end = s.charAt(s.length - 1);

	    // call internal complex type constructor for complex strings
	    if (end === "j" || end === "J") {
	        return Sk.builtin.complex.complex_subtype_from_string(s);
	    }

	    // Handle longs
	    if (end === "l" || end === "L") {
	        return Sk.longFromStr(s.substr(0, s.length - 1), 0);
	    }

	    // todo; we don't currently distinguish between int and float so
	    // str is wrong for these.
	    if (s.indexOf(".") !== -1) {
	        return new Sk.builtin.float_(parseFloat(s));
	    }

	    // Handle integers of various bases
	    tmp = s;
	    neg = false;
	    if (s.charAt(0) === "-") {
	        tmp = s.substr(1);
	        neg = true;
	    }

	    if (tmp.charAt(0) === "0" && (tmp.charAt(1) === "x" || tmp.charAt(1) === "X")) {
	        // Hex
	        tmp = tmp.substring(2);
	        val = parseInt(tmp, 16);
	    } else if ((s.indexOf("e") !== -1) || (s.indexOf("E") !== -1)) {
	        // Float with exponent (needed to make sure e/E wasn't hex first)
	        return new Sk.builtin.float_(parseFloat(s));
	    } else if (tmp.charAt(0) === "0" && (tmp.charAt(1) === "b" || tmp.charAt(1) === "B")) {
	        // Binary
	        tmp = tmp.substring(2);
	        val = parseInt(tmp, 2);
	    } else if (tmp.charAt(0) === "0") {
	        if (tmp === "0") {
	            // Zero
	            val = 0;
	        } else {
	            // Octal
	            tmp = tmp.substring(1);
	            if ((tmp.charAt(0) === "o") || (tmp.charAt(0) === "O")) {
	                tmp = tmp.substring(1);
	            }
	            val = parseInt(tmp, 8);
	        }
	    }
	    else {
	        // Decimal
	        val = parseInt(tmp, 10);
	    }

	    // Convert to long
	    if (val > Sk.builtin.int_.threshold$ &&
	        Math.floor(val) === val &&
	        (s.indexOf("e") === -1 && s.indexOf("E") === -1)) {
	        return Sk.longFromStr(s, 0);
	    }

	    // Small enough, return parsed number
	    if (neg) {
	        return new Sk.builtin.int_(-val);
	    } else {
	        return new Sk.builtin.int_(val);
	    }
	}

	function astForSlice (c, n) {
	    var n2;
	    var step;
	    var upper;
	    var lower;
	    var ch;
	    REQ(n, SYM.subscript);

	    /*
	     subscript: '.' '.' '.' | test | [test] ':' [test] [sliceop]
	     sliceop: ':' [test]
	     */
	    ch = CHILD(n, 0);
	    lower = null;
	    upper = null;
	    step = null;
	    if (ch.type === TOK.T_DOT) {
	        return new Ellipsis();
	    }
	    if (NCH(n) === 1 && ch.type === SYM.test) {
	        return new Index(astForExpr(c, ch));
	    }
	    if (ch.type === SYM.test) {
	        lower = astForExpr(c, ch);
	    }
	    if (ch.type === TOK.T_COLON) {
	        if (NCH(n) > 1) {
	            n2 = CHILD(n, 1);
	            if (n2.type === SYM.test) {
	                upper = astForExpr(c, n2);
	            }
	        }
	    }
	    else if (NCH(n) > 2) {
	        n2 = CHILD(n, 2);
	        if (n2.type === SYM.test) {
	            upper = astForExpr(c, n2);
	        }
	    }

	    ch = CHILD(n, NCH(n) - 1);
	    if (ch.type === SYM.sliceop) {
	        if (NCH(ch) === 1) {
	            ch = CHILD(ch, 0);
	            step = new Name(strobj("None"), Load, ch.lineno, ch.col_offset);
	        }
	        else {
	            ch = CHILD(ch, 1);
	            if (ch.type === SYM.test) {
	                step = astForExpr(c, ch);
	            }
	        }
	    }
	    return new Slice(lower, upper, step);
	}

	function astForAtom(c, n) {
	    /* atom: ('(' [yield_expr|testlist_comp] ')' |
	       '[' [listmaker] ']' |
	       '{' [dictorsetmaker] '}' |
	       '`' testlist1 '`' |
	       NAME | NUMBER | STRING+)
	    */
	    var i;
	    var values;
	    var keys;
	    var size;
	    var ch = CHILD(n, 0);
	    var elts;
	    switch (ch.type) {
	        case TOK.T_NAME:
	            // All names start in Load context, but may be changed later
	            return new Name(strobj(ch.value), Load, n.lineno, n.col_offset);
	        case TOK.T_STRING:
	            return new Str(parsestrplus(c, n), n.lineno, n.col_offset);
	        case TOK.T_NUMBER:
	            return new Num(parsenumber(c, ch.value, n.lineno), n.lineno, n.col_offset);
	        case TOK.T_LPAR: // various uses for parens
	            ch = CHILD(n, 1);
	            if (ch.type === TOK.T_RPAR) {
	                return new Tuple([], Load, n.lineno, n.col_offset);
	            }
	            if (ch.type === SYM.yield_expr) {
	                return astForExpr(c, ch);
	            }
	            //            if (NCH(ch) > 1 && CHILD(ch, 1).type === SYM.comp_for) {
	            //                return astForComprehension(c, ch);
	            //            }
	            return astForTestlistComp(c, ch);
	        case TOK.T_LSQB: // list or listcomp
	            ch = CHILD(n, 1);
	            if (ch.type === TOK.T_RSQB) {
	                return new List([], Load, n.lineno, n.col_offset);
	            }
	            REQ(ch, SYM.listmaker);
	            if (NCH(ch) === 1 || CHILD(ch, 1).type === TOK.T_COMMA) {
	                return new List(seqForTestlist(c, ch), Load, n.lineno, n.col_offset);
	            } 
	            return astForListcomp(c, ch);
	            
	        case TOK.T_LBRACE:
	            /* dictorsetmaker: 
	             *     (test ':' test (comp_for : (',' test ':' test)* [','])) |
	             *     (test (comp_for | (',' test)* [',']))
	             */
	            keys = [];
	            values = [];
	            ch = CHILD(n, 1);
	            if (n.type === TOK.T_RBRACE) {
	                //it's an empty dict
	                return new Dict([], null, n.lineno, n.col_offset);
	            } 
	            else if (NCH(ch) === 1 || (NCH(ch) !== 0 && CHILD(ch, 1).type === TOK.T_COMMA)) {
	                //it's a simple set
	                elts = [];
	                size = Math.floor((NCH(ch) + 1) / 2);
	                for (i = 0; i < NCH(ch); i += 2) {
	                    var expression = astForExpr(c, CHILD(ch, i));
	                    elts[i / 2] = expression;
	                }
	                return new Set(elts, n.lineno, n.col_offset);
	            } 
	            else if (NCH(ch) !== 0 && CHILD(ch, 1).type == SYM.comp_for) {
	                //it's a set comprehension
	                return astForSetComp(c, ch);
	            } 
	            else if (NCH(ch) > 3 && CHILD(ch, 3).type === SYM.comp_for) {
	                //it's a dict compr. I think.
	                return astForDictComp(c, ch);
	            } 
	            else {
	                size = Math.floor((NCH(ch) + 1) / 4); // + 1 for no trailing comma case
	                for (i = 0; i < NCH(ch); i += 4) {
	                    keys[i / 4] = astForExpr(c, CHILD(ch, i));
	                    values[i / 4] = astForExpr(c, CHILD(ch, i + 2));
	                }
	                return new Dict(keys, values, n.lineno, n.col_offset);
	            }
	        case TOK.T_BACKQUOTE:
	            //throw new Sk.builtin.SyntaxError("backquote not supported, use repr()", c.c_filename, n.lineno);
	            return new Repr(astForTestlist(c, CHILD(n, 1)), n.lineno, n.col_offset);
	        default:
	            goog.asserts.fail("unhandled atom", ch.type);

	    }
	}

	function astForPower (c, n) {
	    /* power: atom trailer* ('**' factor)*
	     */
	    var f;
	    var tmp;
	    var ch;
	    var i;
	    var e;
	    REQ(n, SYM.power);
	    e = astForAtom(c, CHILD(n, 0));
	    if (NCH(n) === 1) {
	        return e;
	    }
	    for (i = 1; i < NCH(n); ++i) {
	        ch = CHILD(n, i);
	        if (ch.type !== SYM.trailer) {
	            break;
	        }
	        tmp = astForTrailer(c, ch, e);
	        tmp.lineno = e.lineno;
	        tmp.col_offset = e.col_offset;
	        e = tmp;
	    }
	    if (CHILD(n, NCH(n) - 1).type === SYM.factor) {
	        f = astForExpr(c, CHILD(n, NCH(n) - 1));
	        e = new BinOp(e, Pow, f, n.lineno, n.col_offset);
	    }
	    return e;
	}

	function astForExpr (c, n) {
	    /* handle the full range of simple expressions
	     test: or_test ['if' or_test 'else' test] | lambdef
	     or_test: and_test ('or' and_test)*
	     and_test: not_test ('and' not_test)*
	     not_test: 'not' not_test | comparison
	     comparison: expr (comp_op expr)*
	     expr: xor_expr ('|' xor_expr)*
	     xor_expr: and_expr ('^' and_expr)*
	     and_expr: shift_expr ('&' shift_expr)*
	     shift_expr: arith_expr (('<<'|'>>') arith_expr)*
	     arith_expr: term (('+'|'-') term)*
	     term: factor (('*'|'/'|'%'|'//') factor)*
	     factor: ('+'|'-'|'~') factor | power
	     power: atom trailer* ('**' factor)*

	     As well as modified versions that exist for backward compatibility,
	     to explicitly allow:
	     [ x for x in lambda: 0, lambda: 1 ]
	     (which would be ambiguous without these extra rules)

	     old_test: or_test | old_lambdef
	     old_lambdef: 'lambda' [vararglist] ':' old_test

	     */

	    var exp;
	    var cmps;
	    var ops;
	    var i;
	    var seq;
	    LOOP: while (true) {
	        switch (n.type) {
	            case SYM.test:
	            case SYM.old_test:
	                if (CHILD(n, 0).type === SYM.lambdef || CHILD(n, 0).type === SYM.old_lambdef) {
	                    return astForLambdef(c, CHILD(n, 0));
	                }
	                else if (NCH(n) > 1) {
	                    return astForIfexpr(c, n);
	                }
	            // fallthrough
	            case SYM.or_test:
	            case SYM.and_test:
	                if (NCH(n) === 1) {
	                    n = CHILD(n, 0);
	                    continue LOOP;
	                }
	                seq = [];
	                for (i = 0; i < NCH(n); i += 2) {
	                    seq[i / 2] = astForExpr(c, CHILD(n, i));
	                }
	                if (CHILD(n, 1).value === "and") {
	                    return new BoolOp(And, seq, n.lineno, n.col_offset);
	                }
	                goog.asserts.assert(CHILD(n, 1).value === "or");
	                return new BoolOp(Or, seq, n.lineno, n.col_offset);
	            case SYM.not_test:
	                if (NCH(n) === 1) {
	                    n = CHILD(n, 0);
	                    continue LOOP;
	                }
	                else {
	                    return new UnaryOp(Not, astForExpr(c, CHILD(n, 1)), n.lineno, n.col_offset);
	                }
	                break;
	            case SYM.comparison:
	                if (NCH(n) === 1) {
	                    n = CHILD(n, 0);
	                    continue LOOP;
	                }
	                else {
	                    ops = [];
	                    cmps = [];
	                    for (i = 1; i < NCH(n); i += 2) {
	                        ops[(i - 1) / 2] = astForCompOp(c, CHILD(n, i));
	                        cmps[(i - 1) / 2] = astForExpr(c, CHILD(n, i + 1));
	                    }
	                    return new Compare(astForExpr(c, CHILD(n, 0)), ops, cmps, n.lineno, n.col_offset);
	                }
	                break;
	            case SYM.expr:
	            case SYM.xor_expr:
	            case SYM.and_expr:
	            case SYM.shift_expr:
	            case SYM.arith_expr:
	            case SYM.term:
	                if (NCH(n) === 1) {
	                    n = CHILD(n, 0);
	                    continue LOOP;
	                }
	                return astForBinop(c, n);
	            case SYM.yield_expr:
	                exp = null;
	                if (NCH(n) === 2) {
	                    exp = astForTestlist(c, CHILD(n, 1));
	                }
	                return new Yield(exp, n.lineno, n.col_offset);
	            case SYM.factor:
	                if (NCH(n) === 1) {
	                    n = CHILD(n, 0);
	                    continue LOOP;
	                }
	                return astForFactor(c, n);
	            case SYM.power:
	                return astForPower(c, n);
	            default:
	                goog.asserts.fail("unhandled expr", "n.type: %d", n.type);
	        }
	        break;
	    }
	}

	function astForPrintStmt (c, n) {
	    /* print_stmt: 'print' ( [ test (',' test)* [','] ]
	     | '>>' test [ (',' test)+ [','] ] )
	     */
	    var nl;
	    var i, j;
	    var seq;
	    var start = 1;
	    var dest = null;
	    REQ(n, SYM.print_stmt);
	    if (NCH(n) >= 2 && CHILD(n, 1).type === TOK.T_RIGHTSHIFT) {
	        dest = astForExpr(c, CHILD(n, 2));
	        start = 4;
	    }
	    seq = [];
	    for (i = start, j = 0; i < NCH(n); i += 2, ++j) {
	        seq[j] = astForExpr(c, CHILD(n, i));
	    }
	    nl = (CHILD(n, NCH(n) - 1)).type === TOK.T_COMMA ? false : true;
	    return new Print(dest, seq, nl, n.lineno, n.col_offset);
	}

	function astForStmt (c, n) {
	    var ch;
	    if (n.type === SYM.stmt) {
	        goog.asserts.assert(NCH(n) === 1);
	        n = CHILD(n, 0);
	    }
	    if (n.type === SYM.simple_stmt) {
	        goog.asserts.assert(numStmts(n) === 1);
	        n = CHILD(n, 0);
	    }
	    if (n.type === SYM.small_stmt) {
	        REQ(n, SYM.small_stmt);
	        n = CHILD(n, 0);
	        /* small_stmt: expr_stmt | print_stmt  | del_stmt | pass_stmt
	         | flow_stmt | import_stmt | global_stmt | exec_stmt
	         | assert_stmt
	         */
	        switch (n.type) {
	            case SYM.expr_stmt:
	                return astForExprStmt(c, n);
	            case SYM.print_stmt:
	                return astForPrintStmt(c, n);
	            case SYM.del_stmt:
	                return astForDelStmt(c, n);
	            case SYM.pass_stmt:
	                return new Pass(n.lineno, n.col_offset);
	            case SYM.flow_stmt:
	                return astForFlowStmt(c, n);
	            case SYM.import_stmt:
	                return astForImportStmt(c, n);
	            case SYM.global_stmt:
	                return astForGlobalStmt(c, n);
	            case SYM.exec_stmt:
	                return astForExecStmt(c, n);
	            case SYM.assert_stmt:
	                return astForAssertStmt(c, n);
	            case SYM.debugger_stmt:
	                return new Debugger_(n.lineno, n.col_offset);
	            default:
	                goog.asserts.fail("unhandled small_stmt");
	        }
	    }
	    else {
	        /* compound_stmt: if_stmt | while_stmt | for_stmt | try_stmt
	         | funcdef | classdef | decorated
	         */
	        ch = CHILD(n, 0);
	        REQ(n, SYM.compound_stmt);
	        switch (ch.type) {
	            case SYM.if_stmt:
	                return astForIfStmt(c, ch);
	            case SYM.while_stmt:
	                return astForWhileStmt(c, ch);
	            case SYM.for_stmt:
	                return astForForStmt(c, ch);
	            case SYM.try_stmt:
	                return astForTryStmt(c, ch);
	            case SYM.with_stmt:
	                return astForWithStmt(c, ch);
	            case SYM.funcdef:
	                return astForFuncdef(c, ch, []);
	            case SYM.classdef:
	                return astForClassdef(c, ch, []);
	            case SYM.decorated:
	                return astForDecorated(c, ch);
	            default:
	                goog.asserts.assert("unhandled compound_stmt");
	        }
	    }
	}

	Sk.astFromParse = function (n, filename, c_flags) {
	    var j;
	    var num;
	    var ch;
	    var i;
	    var c = new Compiling("utf-8", filename, c_flags);
	    var stmts = [];
	    var k = 0;
	    switch (n.type) {
	        case SYM.file_input:
	            for (i = 0; i < NCH(n) - 1; ++i) {
	                ch = CHILD(n, i);
	                if (n.type === TOK.T_NEWLINE) {
	                    continue;
	                }
	                REQ(ch, SYM.stmt);
	                num = numStmts(ch);
	                if (num === 1) {
	                    stmts[k++] = astForStmt(c, ch);
	                }
	                else {
	                    ch = CHILD(ch, 0);
	                    REQ(ch, SYM.simple_stmt);
	                    for (j = 0; j < num; ++j) {
	                        stmts[k++] = astForStmt(c, CHILD(ch, j * 2));
	                    }
	                }
	            }
	            return new Module(stmts);
	        case SYM.eval_input:
	            goog.asserts.fail("todo;");
	        case SYM.single_input:
	            goog.asserts.fail("todo;");
	        default:
	            goog.asserts.fail("todo;");
	    }
	};

	Sk.astDump = function (node) {
	    var spaces = function (n) // todo; blurgh
	    {
	        var i;
	        var ret = "";
	        for (i = 0; i < n; ++i) {
	            ret += " ";
	        }
	        return ret;
	    };

	    var _format = function (node, indent) {
	        var ret;
	        var elemsstr;
	        var x;
	        var elems;
	        var fieldstr;
	        var field;
	        var attrs;
	        var fieldlen;
	        var b;
	        var a;
	        var i;
	        var fields;
	        var namelen;
	        if (node === null) {
	            return indent + "None";
	        }
	        else if (node.prototype && node.prototype._astname !== undefined && node.prototype._isenum) {
	            return indent + node.prototype._astname + "()";
	        }
	        else if (node._astname !== undefined) {
	            namelen = spaces(node._astname.length + 1);
	            fields = [];
	            for (i = 0; i < node._fields.length; i += 2) // iter_fields
	            {
	                a = node._fields[i]; // field name
	                b = node._fields[i + 1](node); // field getter func
	                fieldlen = spaces(a.length + 1);
	                fields.push([a, _format(b, indent + namelen + fieldlen)]);
	            }
	            attrs = [];
	            for (i = 0; i < fields.length; ++i) {
	                field = fields[i];
	                attrs.push(field[0] + "=" + field[1].replace(/^\s+/, ""));
	            }
	            fieldstr = attrs.join(",\n" + indent + namelen);
	            return indent + node._astname + "(" + fieldstr + ")";
	        }
	        else if (goog.isArrayLike(node)) {
	            //Sk.debugout("arr", node.length);
	            elems = [];
	            for (i = 0; i < node.length; ++i) {
	                x = node[i];
	                elems.push(_format(x, indent + " "));
	            }
	            elemsstr = elems.join(",\n");
	            return indent + "[" + elemsstr.replace(/^\s+/, "") + "]";
	        }
	        else {
	            if (node === true) {
	                ret = "True";
	            }
	            else if (node === false) {
	                ret = "False";
	            }
	            else if (node instanceof Sk.builtin.lng) {
	                ret = node.tp$str().v;
	            }
	            else if (node instanceof Sk.builtin.str) {
	                ret = node["$r"]().v;
	            }
	            else {
	                ret = "" + node;
	            }
	            return indent + ret;
	        }
	    };

	    return _format(node, "");
	};

	goog.exportSymbol("Sk.astFromParse", Sk.astFromParse);
	goog.exportSymbol("Sk.astDump", Sk.astDump);



	/* ---- /Users/rob/skulpty/lib/afterword.js ---- */ 

	function wrapAstThing(fx, argpos, debug) {
		argpos = argpos || 2;
		return function(x) {
			var n = arguments[argpos-1];
			var result = fx.apply(undefined, arguments);
			result.range = n.range;
			result.str = n.str;
			result.loc = n.loc;
			if ( debug ) {
				console.log(n);
				console.log(result);
			}
			return result;
		};
	}

	astForAtom = wrapAstThing(astForAtom);
	astForCompOp = wrapAstThing(astForCompOp);
	astForSuite = wrapAstThing(astForSuite);
	astForExceptClause = wrapAstThing(astForExceptClause);
	astForDottedName = wrapAstThing(astForDottedName);
	astForDecorator = wrapAstThing(astForDecorator);
	astForDecorators = wrapAstThing(astForDecorators);
	astForDecorated = wrapAstThing(astForDecorated);
	astForWithVar = wrapAstThing(astForWithVar);
	astForWithStmt = wrapAstThing(astForWithStmt);
	astForExecStmt = wrapAstThing(astForExecStmt);
	astForIfStmt = wrapAstThing(astForIfStmt);
	astForExprlist = wrapAstThing(astForExprlist);
	astForDelStmt = wrapAstThing(astForDelStmt);
	astForGlobalStmt = wrapAstThing(astForGlobalStmt);
	astForAssertStmt = wrapAstThing(astForAssertStmt);
	astForImportStmt = wrapAstThing(astForImportStmt);
	astForTestlistComp = wrapAstThing(astForTestlistComp);
	astForListcomp = wrapAstThing(astForListcomp);
	astForFactor = wrapAstThing(astForFactor);
	astForForStmt = wrapAstThing(astForForStmt);
	astForTrailer = wrapAstThing(astForTrailer);
	astForFlowStmt = wrapAstThing(astForFlowStmt);
	astForArguments = wrapAstThing(astForArguments);
	astForFuncdef = wrapAstThing(astForFuncdef);
	astForClassBases = wrapAstThing(astForClassBases);
	astForClassdef = wrapAstThing(astForClassdef);
	astForLambdef = wrapAstThing(astForLambdef);
	astForComprehension = wrapAstThing(astForComprehension);
	astForIterComp = wrapAstThing(astForIterComp);
	astForDictComp = wrapAstThing(astForDictComp);
	astForGenExpr = wrapAstThing(astForGenExpr);
	astForSetComp = wrapAstThing(astForSetComp);
	astForWhileStmt = wrapAstThing(astForWhileStmt);
	astForAugassign = wrapAstThing(astForAugassign);
	astForBinop = wrapAstThing(astForBinop);
	astForTestlist = wrapAstThing(astForTestlist);
	astForExprStmt = wrapAstThing(astForExprStmt);
	astForIfexpr = wrapAstThing(astForIfexpr);
	astForExpr = wrapAstThing(astForExpr);
	Sk.astFromParse = wrapAstThing(Sk.astFromParse, 1);

	Sk.nameForToken = function(v) {
		if ( typeof v === "string" ) return v;
		for ( var name in Sk.Tokenizer.Tokens ) {
			if ( Sk.Tokenizer.Tokens[name] == v ) return name;
		}
		if ( v in Sk.ParseTables.number2symbol ) {
			return Sk.ParseTables.number2symbol[v];
		}

		return '???:' + v;
	};

	//Sk.python3 = true;
	Sk.Parser = Parser;
	Sk.builtin.str.prototype.valueOf = function() { return this.v; };
	Sk.builtin.str.prototype.toString = function() { return this.v; };

	Sk.builtin.SyntaxError = function(str, file, line, ctx, extra) {
		var err = new SyntaxError(str, file, line);
		err.context = ctx;
		err.extra = extra;
		err.line = line;
		return err;
	};

	Sk.builtin.IndentationError = function(str, file, line, row, extra) {
		var err = new SyntaxError('Indentation Error: ' + str, file, line);
		err.context = [[line, row], [line, row]];
		err.extra = {
		};
		err.line = line;
		return err;
	};


	module.exports = Sk;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var isArray = Array.isArray;

	function getOpName(op) {
		if (op.prototype._astname) {
			return op.prototype._astname;
		}
		throw new Error("Coudlnt decode operator name for: " + (op.name || op.toString()));
	}

	function abort(why) {
		console.log(new Error("ABORT:" + why).stack);
		throw new Error(why);
	}

	function isExpression(n) {
		return /Expression$/.test(n.type);
	}

	var idx = 0;
	function createTempName(hint) {
		return '__temp$' + hint + '$' + idx++;
	}

	function ensureStatement(s) {
		var f = s;
		if ( !isArray(s) ) f = [f];
		for ( var i = 0; i < f.length; ++i ) {
			var v = f[i];
			if ( isExpression(v) ) {
				f[i] = {type: "ExpressionStatement", expression: v};
			}
		}

		if ( isArray(s) ) return s;
		else return f[0];
	}

	function ident(n) {
		return {type: "Identifier", name: n.valueOf()};
	}

	function member(o, p) {
		return {
			type: "MemberExpression",
			object: o,
			property: p,
			computed: false
		};
	}

	function literal(v) {
		if ( typeof v === 'object' ) v = v.valueOf();

		if ( typeof v === 'number' && (1 / v !== 1 / Math.abs(v)) ) {
			return {type: "UnaryExpression", argument: literal(-v), operator: '-' };
		}

		return {type: "Literal", value: v, raw: JSON.stringify(v)};
	}

	function binOp(left, op, right) {
		return {
			type: "BinaryExpression",
			left: left,
			right: right,
			operator: op
		};
	}

	function logicOp(left, op, right) {
		return {
			type: "LogicalExpression",
			left: left,
			right: right,
			operator: op
		};
	}

	function ternary(cond, a, b) {
		return {
			type: "ConditionalExpression",
			test: cond,
			consequent: a,
			alternate: b
		};
	}

	function var_(name, init) {
		return {
			type: "VariableDeclaration",
			kind: 'var',
			declarations: [{
				type: "VariableDeclarator",
				id: name,
				init: init ? init : undefined
			}]
		};
	}

	function transform(node, ctx) {
		//console.log(node.lineno, node.col_offset);
		var result = dispatch(node, ctx);
		if ( node.range ) result.range = [node.range[0], node.range[1]];
		if ( node.loc ) result.loc = node.loc;
		result.str = node.str;
		return result;
	}

	function dispatch(node, ctx) {
		if ( !ctx.locals ) ctx.locals = Object.create(null);

		if ( !node ) {
			console.log("WAT!", new Error().stack);
			throw new Error("What?");
		}
		if ( isArray(node) ) {
			var body = [];
			for ( var i = 0; i < node.length; ++i ) {
				var r = transform(node[i], ctx);
				if ( isArray(r) ) body.push.apply(body, r);
				else body.push(r);
			}
			return body;
		}
		switch (node._astname) {
			case 'Attribute': return transformAttribute(node, ctx);
			case 'Assign': return transformAssign(node, ctx);
			case 'AugAssign': return transformAugAssign(node, ctx);
			case 'BinOp': return transformBinOp(node, ctx);
			case 'BoolOp': return transformBoolOp(node, ctx);
			case 'Break': return transformBreak(node, ctx);
			case 'Call': return transformCall(node, ctx);
			case 'ClassDef': return transformClassDef(node, ctx);
			case 'Continue': return tranformContinue(node, ctx);
			case 'Compare': return transformCompare(node, ctx);
			case 'Dict': return transformDict(node, ctx);
			case 'Delete': return transformDel(node, ctx);
			case 'Expr': return transformExpr(node, ctx);
			case 'For': return transformFor(node, ctx);
			case 'FunctionDef': return transformFunctionDef(node, ctx);
			case 'GeneratorExp': return transformListComp(node, ctx); //TODO: Make this seperate
			case 'Global': return transformGlobal(node, ctx);
			case 'If': return transformIf(node, ctx);
			case 'Import': return NoOp();
			case 'Lambda': return transformLambda(node, ctx);
			case 'List': return transformList(node, ctx);
			case 'ListComp': return transformListComp(node, ctx);
			case 'Module': return transformModule(node, ctx);
			case 'Name': return transformName(node, ctx);
			case 'Print': return transformPrint(node, ctx);
			case 'Return': return transformReturn(node, ctx);
			case 'Str': return transformStr(node, ctx);
			case 'Subscript': return transformSubscript(node, ctx);
			case 'Tuple': return transformTuple(node, ctx);
			case 'Num': return transformNum(node, ctx);
			case 'Pass': return transformPass(node, ctx);
			case 'UnaryOp': return transformUnaryOp(node, ctx);
			case 'While': return transformWhile(node, ctx);
			default:
				console.log("Dont know how to transform: " + node._astname);
				console.log(JSON.stringify(node, null, '  '));
				throw new Error("Dont know how to transform: " + node._astname);
		}
	}

	function NoOp() { return []; }



	function makeVariableName(name) {
		var parts = Array.isArray(name) ? name : name.split(/\./g);
		if ( parts.length === 1 ) return ident(name);
		var prop = parts.pop();
		return member(makeVariableName(parts), ident(prop));
	}

	function transformAttribute(node, ctx) {
		var n = node.attr;
		if ( n._astname ) n = transform(n, ctx);
		else n = {type: 'Identifier', name: n.valueOf()};
		return member(transform(node.value, ctx), n);
	}

	function transformAugAssign(node, ctx) {
		//TODO: We need to not inject left into the code twice
		//as it could have side effects.
		var right = transform(node.value, ctx);
		var left = transform(node.target, ctx);
		var tn = createTempName("left");
		var opName = getOpName(node.op);
		return [
			var_(ident(tn), left),
			ensureStatement({
				type: "AssignmentExpression",
				operator: '=',
				left: left,
				right: createBinOp(left, opName, right)
			})
		];
	}

	function transformAssign(node, ctx) {

		var results = [];
		for ( var i = 0; i < node.targets.length; ++i ) {
			var left = node.targets[i];
			if ( ctx.writeTarget ) {
				left = member(ctx.writeTarget, transform(left,ctx));
			}
			results.push.apply(results,createTupleUnpackingAssign(left, transform(node.value, ctx), ctx));
		
		}
		if ( results.length == 1 ) return results[0];
		return {type: "BlockStatement", body: results}; 
	}

	function createBinOp(left, op, right) {

		if ( op === 'FloorDiv' ) {
			return {
				type: "CallExpression",
				callee: makeVariableName('Math.floor'),
				arguments: [{
					type: "BinaryExpression",
					left: left,
					right: right,
					operator: '/'
				}]
			};
		}

		var fxOps = {
			"Add": "__pythonRuntime.ops.add",
			"Mult": "__pythonRuntime.ops.multiply",
			"Pow": "Math.pow"
		};

		if ( op in fxOps  ) {
			var call = {
				type: "CallExpression",
				callee: makeVariableName(fxOps[op]),
				arguments: [left, right]
			};
			return call;
		}

		var operators = {
			"Add": "+",
			"Sub": "-",
			"Mod": "%",
			"Div": "/",
			"BitAnd": "&",
			"BitOr": "|",
			'BitXor': '^',
			"LShift": "<<",
			"RShift": ">>"

		};

		if ( !(op in operators) ) abort("Unknown binary operator: " + op);

		return binOp(left, operators[op], right);
	}

	function transformBinOp(node, ctx) {
		var left = transform(node.left, ctx);
		var right = transform(node.right, ctx);
		return createBinOp(left, getOpName(node.op), right);
	}

	function transformBoolOp(node, ctx) {
		var fvals = new Array(node.values.length);
		for ( var i = 0; i < node.values.length; ++i ) {
			fvals[i] = transform(node.values[i], ctx);
		}
		var opName = getOpName(node.op);
		var operators = {
			'And': '&&',
			'Or': '||'
		};

		if ( !(opName in operators ) ) abort("Unknown bool opeartor: " + opName);
		var opstr = operators[opName];

		var result = fvals.pop();
		while ( fvals.length > 0 ) {
			result = logicOp(fvals.pop(), opstr, result);
		}


		//TODO: Support || as well?
		return result;
	}

	function transformBreak(node, ctx) {
		return {type: "BreakStatement"};
	}

	function transformCall(node, ctx) {
		var builtins = ['len'];
		if ( node.func._astname == 'Name' ) {
			switch ( node.func.id.v ) {
				case 'len':
					return {
						type: "MemberExpression",
						object: transform(node.args[0], ctx),
						property: {type: "Identifier", name: "length"}
					};
				case 'all': case 'ord':
				case 'sum': case 'any':
				case 'str': case 'chr':
				case 'ascii': case 'divmod':
				case 'range': case 'enumerate':
				case 'round': case 'filter':
				case 'abs': case 'float':
				case 'int': case 'hex':
				case 'tuple': case  'map':
				case 'bool': case 'max':
				case 'sorted': case 'min':
				case 'list': case 'oct':
				case 'pow': case  'reversed':
				case 'repr':
					return {
						type: 'CallExpression',
						callee: makeVariableName('__pythonRuntime.functions.' + node.func.id.v),
						arguments: transform(node.args, ctx)
					};
				case 'dict':
					var args = [];
					for ( var i = 0; i < node.keywords.length; ++i ) {
						args.push({
							type: "ArrayExpression",
							elements: [
								literal(node.keywords[i].arg.v),
								transform(node.keywords[i].value, ctx)
							]
						});
					}
					return {
						type: "NewExpression",
						callee: makeVariableName('__pythonRuntime.objects.dict'),
						arguments: args
					};

			}
		}

		var args = transform(node.args, ctx);

		if ( node.keywords.length > 0 ) {
			var paramsDict = {
				type: "ObjectExpression",
				properties: [{
					type: "Property",
					key: ident("__kwp"),
					value: literal(true)
				}]
			};

			for ( var i = 0; i < node.keywords.length; ++i ) {
				var k = node.keywords[i];
				paramsDict.properties.push({
					type: "Property",
					key: ident(k.arg.v),
					value: transform(k.value, ctx)
				});
			}

			var extraArg = {
				type: "CallExpression",
				callee: makeVariableName('__pythonRuntime.utils.createParamsObj'),
				arguments: [paramsDict]
			};

			args.push(extraArg);
		}

		return {
			type: "CallExpression",
			callee: transform(node.func, ctx),
			arguments: args
		};
	}

	function transformClassDef(node, ctx) {
		var body = [];
		var proto = member(ident(node.name), ident('prototype'));
		var nctx = {
			writeTarget: proto,
			inClass: true,
			locals: Object.create(null)
		};

		if ( node.bases.length > 1 ) alert("Multiple base classes not supported.");

		var base = (node.bases.length > 0) ? transform(node.bases[0], ctx) : undefined;

		var ctorBody = [];
		ctorBody.push({
			type: "VariableDeclaration",
			kind: 'var',
			declarations: [{
				type: "VariableDeclarator",
				id: ident('that'),
				init: {type: "ThisExpression"}
			}]
		});

		ctorBody.push({
			type: "IfStatement",
			test: {
				type:"UnaryExpression",
				argument: binOp(ident('that'), "instanceof", ident(node.name)),
				operator: "!"
			},
			consequent: ensureStatement({
				type: "AssignmentExpression",
				left: ident('that'),
				right: {
					type:  "CallExpression",
					callee: makeVariableName('Object.create'),
					arguments: [ proto ]
				},
				operator: '='
			})
		});

		ctorBody.push({
			type: "IfStatement",
			test: {
				type: "CallExpression",
				callee: member(proto, ident('hasOwnProperty')),
				arguments: [literal('__init__')]
			},
			consequent: ensureStatement({
				type: "CallExpression",
				callee: member(member(proto, ident('__init__')), ident('apply')),
				arguments: [ident('that'), ident('arguments')]
			})
		});

		if ( base ) {
			ctorBody.push(ensureStatement({
				type: "CallExpression",
				callee: {
					type: "MemberExpression",
					object: base,
					property: ident('apply'),
					computed: false
				},
				arguments: [ident('that'), ident('arguments')]
			}));
		}

		ctorBody.push({
			type: "ReturnStatement",
			argument: ident('that')
		});


		body.push({
			type: "FunctionDeclaration",
			id: ident(node.name),
			params: [],
			body: {type: "BlockStatement", body:ctorBody}
		});

		if ( base ) {
			body.push({
				type: "AssignmentExpression",
				left: proto,
				right: {
					type:  "CallExpression",
					callee: makeVariableName('Object.create'),
					arguments: [ member(base, ident('prototype')) ]
				},
				operator: "="
			});
		}

		body = body.concat(transform(node.body, nctx));

		body.push({
			type: "ReturnStatement",
			argument: ident(node.name)
		});

		return {
			"type": "VariableDeclaration",
			"declarations": [
			{
			  "type": "VariableDeclarator",
			  "id": ident(node.name),
			  "init": {
			  	type: "CallExpression",
			  	callee: {
			  		type: "FunctionExpression",
			  		params: [],
			  		body: {type: "BlockStatement", body: ensureStatement(body)}
			  	},
			  	arguments: []
			  }
			}],
			"kind": ctx.varType || 'var'
		};
	}


	function tranformContinue(node, ctx) {
		return {type: "ContinueStatement"};
	}

	function makeCop(left, op, right) {

		var fxOps = {
			"In_": "in",
			"In": "in",
			"NotIn": "in"
		};
		var opName = getOpName(op);
		if ( opName in fxOps  ) {
			var call = {
				type: "CallExpression",
				callee: makeVariableName("__pythonRuntime.ops." + fxOps[opName]),
				arguments: [left, right]
			};

			if ( opName == "NotIn" ) {
				return {
					type: "UnaryExpression",
					argument: call,
					operator: "!"
				};
			} else {
				return call;	
			} 
		}

		
		var operators = {
			"Eq": "===",
			"NotEq": "!==",
			"LtE": "<=",
			"Lt": "<",
			"GtE": ">=",
			"Gt": ">",
			"Is": "===",
			"IsNot": "!=="
		};
		
		if ( !(opName in operators) ) abort("Unsuported Compare operator: " + opName);
		return binOp(left, operators[opName], right);
	}

	function transformCompare(node, ctx) {
		var left = transform(node.left, ctx);
		var result;

		for ( var i = 0; i < node.comparators.length; ++i ) {
			var right = transform(node.comparators[i], ctx);
			var cop = makeCop(left, node.ops[i], right);
			if ( result ) {
				result = logicOp(result, '&&', cop);
			} else {
				result = cop;
			}
			left = right;
		}

		

		return result;
		
	}

	function transformDel(node, ctx) {
		var result = [];
		for ( var i = 0; i < node.targets.length; ++i ) {
			var st = node.targets[i];
			var partial = transform(st, ctx);
			result.push({
				type: "AssignmentExpression",
				operator: "=",
				left: partial,
				right: {
					type: "UnaryExpression",
					argument: literal(0),
					operator: 'void',
					prefix: true
				}
			});
		}
		return ensureStatement({
			type: "SequenceExpression",
			expressions: result
		});
	}

	function transformDict(node, ctx) {
		var args = [];
		for ( var i = 0; i < node.keys.length; ++i ) {
			args.push({
				type: "ArrayExpression",
				elements: [
					transform(node.keys[i], ctx),
					transform(node.values[i], ctx)
				]
			});
		}
		return {
			type: "NewExpression",
			callee: makeVariableName("__pythonRuntime.objects.dict"),
			arguments: args
		};
	}

	function transformExpr(node, ctx) {
		return {
			type: "ExpressionStatement",
			expression: transform(node.value, ctx)
		};
	}

	function assignPossiblyWithDeclaration(target, value, ctx) {
		var left = target._astname ? transform(target, ctx) : target;
		var varible;

		if ( left.type === "Identifier" ) varible = left.name;

		if ( !varible || !ctx || !ctx.locals || ctx.locals[varible] ) {
			return {type: "ExpressionStatement", expression: {
				type: "AssignmentExpression",
				operator: "=",
				left: left,
				right: value
			}};
		}

		ctx.locals[varible] = true;

		return {
			type: "VariableDeclaration",
			declarations: [{
				type: "VariableDeclarator",
				id: left,
				init: value
			}],
			kind: ctx.varType || 'var'
		};
	}

	function createTupleUnpackingAssign(target, value, ctx) {

		if ( target._astname === 'Tuple' ) {
			var result = [];
			var tn = createTempName("right");
			result.push({
				type: "VariableDeclaration",
				kind: "var",
				declarations: [{
					type: "VariableDeclarator",
					id: ident(tn),
					init: value
				}]
			});
			for ( var i = 0; i < target.elts.length; ++i ) {
				result.push.apply(result,createTupleUnpackingAssign(
					target.elts[i],
					{type: "MemberExpression", object: ident(tn), property: literal(i),  computed: true}
				,ctx));
			}
			return result;
		}

		return [assignPossiblyWithDeclaration(target, value, ctx)];
	}

	function createForLoop(iident, tident, iter, target, body, ctx) {

		body = createTupleUnpackingAssign(
			target, 
			{type: "MemberExpression", object: tident, property: iident, computed: true},
			ctx
		).concat(body);

		var riter = ternary(
			{type: "CallExpression", callee: makeVariableName("Array.isArray"), arguments:[iter]},
			iter,
			{type: "CallExpression", callee: makeVariableName("Object.keys"), arguments:[iter]}
		);

		return {
			type: "ForStatement",
			init: {
				"type": "VariableDeclaration",
				"declarations": [
				{
				  "type": "VariableDeclarator",
				  "id": iident,
				  "init": literal(0)
				},
				{
				  "type": "VariableDeclarator",
				  "id": tident,
				  "init": riter
				}],
				"kind": ctx.varType
			},
			test: binOp(iident, '<', {
				type: "MemberExpression", object: tident, property: {type: "Identifier", name: "length"}
			}),
			update: {
				"type": "UpdateExpression",
				"operator": "++",
				"prefix": true,
				"argument": iident
			},
			body: {type: "BlockStatement", body: body}
		};
	}

	function transformFor(node, ctx) {
		var name = createTempName('idx');
		var iident = ident(name);
		var tname = createTempName('target');
		var tident = {type: "Identifier", name: tname};
		var iter = transform(node.iter, ctx);
		var body = ensureStatement(transform(node.body, ctx));

		if ( node.orelse && node.orelse.length > 0 ) abort("else: for-else statement unsupported.");
		return createForLoop(iident, tident, iter, node.target, body, ctx);
	}

	function prepareFunctionBody(node, ctx) {
		var args = node.args.args.slice(0);
		if  ( ctx.inClass ) {
			//TODO: Make sure it's named self, maybe?
			args.shift();
		}
		var hasAnyArguments = args.length > 0 || node.args.vararg || node.args.kwarg;
		var nctx = {
			locals: Object.create(null),
			varType: ctx.varType
		};
		var body = ensureStatement(transform(node.body, nctx));
		var premble = [];

		if ( ctx.inClass ) {
			premble.push({
				"type": "VariableDeclaration",
				"declarations": [{
					"type": "VariableDeclarator",
					"id": ident('self'),
					"init": {type: "ThisExpression"}
				}],
				"kind": "var"
			});
		}

		if ( hasAnyArguments ) {
			
			var hasParams = createTempName('hasParams');
			var param0 = createTempName('param0');
			var realArgCount = createTempName('realArgCount');
			var argLen = makeVariableName('arguments.length');
			var argN = {type: "MemberExpression", object: ident('arguments'), property: binOp(argLen, '-', literal(1)), computed: true};
			var argNKeywords = {type: "MemberExpression", object: argN, property: ident('keywords'), computed: false};

			premble.push({
				"type": "VariableDeclaration",
				"declarations": [
				{
				  "type": "VariableDeclarator",
				  "id": ident(hasParams),
				  "init": logicOp(binOp(argLen, '>', literal(0)), '&&', logicOp(argN, '&&', argNKeywords))
				}],
				"kind":  "var"
			});

			var main = [];
			main.push({
				"type": "VariableDeclaration",
				"declarations": [{
					"type": "VariableDeclarator",
					"id": ident(param0),
					"init": ternary(ident(hasParams), argNKeywords, {type: "ObjectExpression", properties: []})
				},{
					"type": "VariableDeclarator",
					"id": ident(realArgCount),
					"init": binOp(argLen, '-', ternary(ident(hasParams), literal(1), literal(0)))
				}],
				"kind": "var"
			});

			for ( var i = 0; i < args.length; ++i ) {
				var a = node.args.args[i];
				var didx = i - (node.args.args.length - node.args.defaults.length);
				var def = didx >= 0 ? transform(node.args.defaults[didx], ctx) : ident('undefined');

				main.push({
					type: "IfStatement",
					test: binOp(ident(realArgCount), '<', literal(i+1)),
					consequent: ensureStatement({
						type: "AssignmentExpression",
						operator: "=",
						left: ident(a.id),
						right: ternary(
							binOp(literal(a.id), 'in', ident(param0)),
							{type: "MemberExpression", object: ident(param0), property: ident(a.id), computed: false},
							def
						)
					})
				});
			}

			if ( node.args.vararg ) {
				main.push({
					"type": "VariableDeclaration",
					"declarations": [{
						"type": "VariableDeclarator",
						"id": ident(node.args.vararg),
						"init": {
							type: "CallExpression",
							callee: makeVariableName("Array.prototype.slice.call"),
							arguments: [ident('arguments'), literal(node.args.args.length), hasAnyArguments ? ident(realArgCount) : undefined]
						}
					}],
					"kind": "var"
				});
			}

			if ( node.args.kwarg ) {
				for ( var i = 0; i < node.args.args.length; ++i ) {
					main.push(ensureStatement({
						type: "UnaryExpression",
						operator: "delete",
						argument: {
							type: "MemberExpression",
							object: ident(param0),
							property: ident(node.args.args[i].id),
							computed: false
						}
					}));
				}
				main.push({
					"type": "VariableDeclaration",
					"declarations": [{
						"type": "VariableDeclarator",
						"id": ident(node.args.kwarg),
						"init": ident(param0)
					}],
					"kind": "var"
				});
			}

			premble = premble.concat(main); //TODO: If we dont have defauts, we can guard this with __hasParams	
		}


		body = premble.concat(body);
		var params = transform(args, ctx);
		return {
			premble: premble,
			body: body,
			params: params
		};

	}

	function transformFunctionDef(node, ctx) {
		var data = prepareFunctionBody(node, ctx);



		if ( ctx.writeTarget ) {
			return ensureStatement({
				type: "AssignmentExpression",
				left: {type: "MemberExpression", object: ctx.writeTarget, property: ident(node.name)},
				right: {
					type: "FunctionExpression",
					name: ident(node.name),
					params: data.params,
					body: {type: "BlockStatement", body: data.body}
				},
				operator: '='
			});
		} else {
			return {
				type: "FunctionDeclaration",
				id: {type: "Identifier", name: node.name.v},
				params: data.params,
				body: {type: "BlockStatement", body: data.body}
			};
		}
	}

	function transformGlobal(node, ctx) {
		for ( var i = 0; i < node.names.length; ++i ) {
			ctx.locals[node.names[i].v] = true;
		}
		return [];
	}

	function transformIf(node, ctx) {
		var body = ensureStatement(transform(node.body, ctx));
		return {
			type: "IfStatement",
			test: transform(node.test, ctx),
			consequent: {type: "BlockStatement", body: body},
			alternate: (node.orelse && node.orelse.length > 0) ? {type: "BlockStatement", body: ensureStatement(transform(node.orelse, ctx))} : undefined
		};
	}

	function transformLambda(node, ctx) {
		var data = prepareFunctionBody(node, ctx);
		
		//TODO: This is pretty sketchy.
		var last = data.body[data.body.length - 1];
		data.body[data.body.length - 1] = {type: "ReturnStatement", argument: last.expression};

		return {
			type: "FunctionExpression",
			params: data.params,
			body: {type: "BlockStatement", body: data.body}
		};
	}

	function transformList(node, ctx) {
		var call = {
			type: "CallExpression",
			callee: makeVariableName("__pythonRuntime.objects.list"),
			arguments: transform(node.elts, ctx)
		};
		return call;
	}

	function transformListComp(node, ctx) {	
		var body = [];
		var aggrigator = createTempName('result');

		body.push({
			"type": "VariableDeclaration",
			"declarations": [{
				"type": "VariableDeclarator",
				"id": ident(aggrigator),
				"init": {
					type: "NewExpression",
					callee: makeVariableName('__pythonRuntime.objects.list'),
					arguments: []
				}
			}],
			"kind": "var"
		});

		var insideBody = [];

		insideBody.push(ensureStatement({
			type: "CallExpression",
			callee: {type: "MemberExpression", object: ident(aggrigator), property: ident('push'), computed: false},
			arguments: [transform(node.elt, ctx)]
		}));

		//if ( node.generators.length !== 1 ) abort("Unsuported number of generators");
		var gen = node.generators[0];

		for ( var g = node.generators.length - 1; g >= 0; --g ) {
			var idxName = createTempName('idx');
			var listName = createTempName("list" + g);
			var iterName = createTempName('iter');
			var gen = node.generators[g];
			for ( var i = 0; i < gen.ifs.length; ++i ) {
				insideBody.unshift({
					type: "IfStatement",
					test: {type: "UnaryExpression", argument: transform(gen.ifs[i], ctx), operator: "!"},
					consequent: {type: "ContinueStatement"}
				});
			}

			insideBody = [
				{
					type: "VariableDeclaration",
					kind: "var",
					declarations: [{
						type: "VariableDeclarator",
						id: ident(listName),
						init: transform(gen.iter, ctx)
					}]
				},
				createForLoop(ident(idxName), ident(iterName), ident(listName), gen.target, insideBody, ctx)
			];
		}

		body.push.apply(body, insideBody);
		body.push({
			type: "ReturnStatement",
			argument: ident(aggrigator)
		});

		var expr = {
			type: "FunctionExpression",
			params: [],
			body: {type: "BlockStatement", body: body}
		};

		return {
			type: "CallExpression",
			callee: expr,
			arguments: []
		};
	}

	function transformModule(node, ctx) {
		return {
			type: "Program",
			body: ensureStatement(transform(node.body, ctx))
		};
	}

	function transformName(node, ctx) {
		if ( node.id.v === 'True' ) return {type: "Literal", value: true, raw: "true"};
		if ( node.id.v === 'False' ) return {type: "Literal", value: false, raw: "false"};
		if ( node.id.v === 'None' ) return {type: "Literal", value: null, raw: "null"};

		if ( node.id.v === 'random' ) return makeVariableName('__pythonRuntime.imports.random');
		return ident(node.id);
	}

	function transformNum(node, ctx) {
		return literal(node.n);
	}

	function transformPrint(node, ctx) {
		return {
			type: "CallExpression",
			callee: makeVariableName("console.log"),
			arguments: transform(node.values, ctx)
		};
	}

	function transformReturn(node, ctx) {
		return {
			type: "ReturnStatement",
			argument: node.value ? transform(node.value, ctx) : undefined
		};
	}

	function transformStr(node, ctx) {
		return literal(node.s.valueOf());
	}

	function transformTuple(node, ctx) {
		var call = {
			type: "CallExpression",
			callee: makeVariableName("__pythonRuntime.objects.tuple"),
			arguments: transform(node.elts, ctx)
		};
		return call;
	}

	function transformSubscript(node, ctx) {
		//TODO: Do silly pythonic list offset logic
		var val = transform(node.value, ctx);
		if ( node.slice.value ) {
			var lu = transform(node.slice.value, ctx);
			lu = {
				type: "CallExpression",
				callee: makeVariableName("__pythonRuntime.ops.subscriptIndex"),
				arguments: [val, lu]
			};
			return {
				type: "MemberExpression",
				computed: true,
				object: val,
				property: lu
			};
		}

		return {
			type: "CallExpression",
			callee: makeVariableName('__pythonRuntime.internal.slice'),
			arguments:[
				val,
				node.slice.lower ? transform(node.slice.lower, ctx) : ident('undefined'),
				node.slice.upper ? transform(node.slice.upper, ctx) : ident('undefined'),
				node.slice.step ? transform(node.slice.step, ctx) : ident('undefined'),
			]
		};
	}

	function transformPass(node, ctx) {
		return {type: "EmptyStatement"};
	}

	function transformUnaryOp(node, ctx) {
		var argument = transform(node.operand, ctx);

		var fxOps = {
			"Add": "add",
			"Mult": "multiply",
		};
		var opName = getOpName(node.op);

		if ( opName in fxOps  ) {
			var call = {
				type: "CallExpression",
				callee: makeVariableName("__pythonRuntime.ops." + fxOps[opName]),
				arguments: [argument]
			};
			return call;
		}

		var operators = {
			"Not": "!",
			"USub": "-",
			"Invert": "~"
		};

		if ( !(opName in operators) ) abort("Unknown unary operator: " + opName);

		return {
			type: "UnaryExpression",
			argument: argument,
			operator: operators[opName]
		};
		
	}

	function transformWhile(node, ctx) {
		if ( node.orelse && node.orelse.length > 0 ) abort("else: statement for while unsupported.");
		return {
			type: "WhileStatement",
			test: transform(node.test, ctx),
			body: {type: "BlockStatement", body: ensureStatement(transform(node.body, ctx))}
		};	
	}

	module.exports = transform;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// var Sk = require('skulpt');
	var Sk = __webpack_require__(1);

	function splat(e) {
		console.log("GOT ERROR!");
		console.log(e, e.extra);
		console.log(JSON.stringify(e.extra.node, function(k,  o) {
			if ( k == 'type' ) return Sk.nameForToken(o);
			else if ( k == 'children' ) return o;
			else if ( k ===  '' ) return o;
			else if ( !isNaN(parseInt(k)) ) return o;
			else return undefined;
		}, '  '));
	}

	function improveError(e, options, code) {
		var r;
		if ( e.context && e.context.length >0 ) {
			r = e.context[0];	
		}

		if ( e.extra && e.extra.node ) {
			if ( !r ) {
				r = [e.extra.node.loc.start.line,e.extra.node.loc.start.column];
			}
		}

		if ( r ) {
			setErrorPos(e, r[0], r[1]);
		}

		if ( options.friendlyErrors && e.extra ) {
			e.message = makeErrorFriendly(e, code);
		}
	}

	function setErrorPos(e, line, col) {
		e.loc = {line: line, column: col};
		e.line = line;
		e.column = col;
	}

	function friendlyString(s) {
		switch (s) {
		case 'if_stmt': return 'if statement';
		case 'while_stmt': return 'while statement';
		case 'funcdef': return 'function';
		default: return '?' + s + '?';
		} 
	}

	function nodeToType(n) {
		var type = Sk.nameForToken(n.type);
		if ( type === 'suite' ) return nodeToType(n.children[0]);
		return friendlyString(type);
	}

	function makeErrorFriendly(e, code) {
		//console.log("EX", e.message, e.extra);
		if ( e.extra.kind == "DAG_MISS" ) {
			if ( e.extra.expected.indexOf('T_COLON') !== -1 ) {
				//We might be missing a colon.
				var after = (e.context && e.context[2] ? e.context[2] : e.extra.found_val).replace(/\s+$/,'');
				var lc = e.extra.node.children[e.extra.node.children.length-1];
				if ( lc.value === 'else' ) after = 'else';

				if ( e.extra.found == 'T_SEMI' ) {
					return "Replace the `;` at the end of `" + after + "` with a `:`";
				} else if ( e.extra.found == 'T_NEWLINE' ) {
					return "Need a `:` on the end of the line following `" + after + "`.";
				} else if ( e.extra.found == 'T_NAME' ) {
					return "Need a `:` after `" + after + "`.";
				} else if ( e.extra.found == 'T_EQUAL' ) {
					return "Can't assign to a variable within the condition of an " + friendlyString(e.extra.inside) + ".  Did you mean to use `==` instead of `=`?";
				}
			}

			if ( e.extra.expected.indexOf('T_DEDENT') !== -1 ) {
				if ( e.extra.found_val.toLowerCase() === 'else' ) {
					return "`else` needs to line up with its `if`.";
				} else {
					return "Indentation error.";
				}
			}

			if ( e.extra.expected.indexOf('T_INDENT') !== -1 ) {
				var lc = e.extra.parent || e.extra.node;
				var name  = nodeToType(lc);
				if ( name === 'if statement' ) {
					//Scan for the most recent part of the ifstatement.
					for ( var i = 0; i < lc.children.length; ++i ) {
						if ( ["if", "elif", "else"].indexOf(lc.children[i].value) !== -1 ) {
							name = lc.children[i].value + ' statement';
						}
					}
				}
				if ( lc.value === 'else' ) name = 'else statement';
				return 'Empty ' + name + '. Put 4 spaces in front of statements inside the ' + name + '.';
			}

			if ( e.extra.found === 'T_NAME' ) {
				switch ( e.extra.found_val ) {
					case 'else':
					case 'elif':
						return '`' + e.extra.found_val + '` must be paired with an `if`';
					case 'elseif':
						return '`elseif` should be shortened to `elif`';
				} 
			}

			if ( e.extra.found === 'T_AMPER' && e.extra.inside == 'and_expr' ) {
				return 'Python uses the word `and` instead of `&&` for boolean AND expressions.';
			}


			if ( e.extra.inside === 'trailer' ) {
				//We are parsing either an arglist or a subscript.
				if ( e.extra.expected.indexOf('T_RPAR') === 0 ) {
					//Expected ), must be a arglsit;
					if ( e.line > e.extra.node.lineno ) {
						//Our arglist is incomplete, and we have made it to the next line,.
						//Likely they just forgot to close their ()'s
						setErrorPos(e, e.extra.node.lineno, e.extra.node.col_offset);
						var t = e.extra.node.loc;
						e.context = [
							[t.start.line,t.start.column],
							[t.end.line,t.end.column]
						];
						return 'Unclosed `(` in function arguments.' + e.extra.node.lineno;

					}
					return 'Function calls paramaters must be seperated by `,`s';
				}
			}

			if ( e.extra.found === 'T_INDENT' ) {
				if ( e.extra.expected.indexOf('stmt') !== -1 ) {
					return 'Too much indentation at the beginning of this line.';
				}
			}

			if ( e.extra.expected.indexOf('subscriptlist') === 0 ) {
				return "Malformed subscript";
			}

			if ( e.extra.expected.indexOf('T_NEWLINE') !== -1 ) {
				var n = e.extra.node;
				
				if ( e.extra.node.children[0] ) {
					var n = e.extra.node.children[0];
					var previousType = Sk.nameForToken(n.type);
				
					if ( previousType == 'small_stmt' ) {
						while ( n.children && n.children.length == 1 ) n = n.children[0];
						var what = code.substring(n.range[0], n.range[1]);
						return 'If you want to call `' + what +'` as function, you need `()`\'s';
					}
				}
			}

			return 'Unexpected token: ' + e.message;
		} else if ( e.extra.kind == "CLASSIFY" ) {
			if ( e.extra.value === '"' ) return 'Unterminated string. Add a matching `"` at the end of your string.';
			return 'Unterminated `' + e.extra.value + '`';
		} else if ( e.extra.kind == "STRING_EOF" ) {
			return 'Unterminated muti-line string. Add a matching `"""` at the end of your string.';
		} else if ( e.extra.kind == "STATEMENT_EOF" ) {
			if ( e.extra.parenlev > 0 ) {
				var top = e.extra.parenstack[e.extra.parenstack.length-1];
				var kind = top[0];
				var types = '([{';
				var pair = ')]}';
				var close = pair[types.indexOf(kind)];
				setErrorPos(e, top[1], top[2]-1);
				return 'Unmatched `' + kind + '`.  Every opening `' + kind + '` needs a closing `' + close + '` to match it.';
			}
			return e.message;
		}

		return e.message;
		
		
	}

	module.exports = improveError;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	(function (root, factory) {
	  'use strict';
	  if(true)
	    module.exports = factory();
	  else {}
	}(this, function() {
	  'use strict';
	  var pythonRuntime = {
	    internal: {
	      // Only used within runtime
	      isSeq: function (a) { return a && (a._type === "list" || a._type === "tuple"); },
	      slice: function (obj, start, end, step) {
	        var slice;
	        if ( typeof obj === 'string' ) slice = function(x,y) { return obj.substring(x,y); }
	        else slice = obj.slice.bind(obj);

	        if (step == null || step === 0) step = 1; // TODO: step === 0 is a runtime error
	        if (start == null) {
	          if (step < 0) start = obj.length - 1;
	          else start = 0;
	        } else if (start < 0) start += obj.length;
	        if (end == null) {
	          if (step < 0) end = -1;
	          else end = obj.length;
	        } else if (end < 0) end += obj.length;

	        var ret = new pythonRuntime.objects.list(), tmp, i;
	        if (step < 0) {
	          tmp = slice(end + 1, start + 1);
	          for (i = tmp.length - 1; i >= 0; i += step) ret.append(tmp[i]);
	        } else {
	          tmp = slice(start, end);
	          if (step === 1 && typeof tmp !== 'string') ret = pythonRuntime.utils.createList(tmp);
	          else for (i = 0; i < tmp.length; i += step) ret.append(tmp[i]);
	        }
	        if ( typeof obj === 'string' ) return ret.join('');
	        return ret;
	      },
	      isJSArray: Array.isArray || function(obj) {
	        return toString.call(obj) === '[object Array]';
	      }
	    },

	    utils: {
	      createDict: function () {
	        var ret = new pythonRuntime.objects.dict();
	        if (arguments.length === 1 && arguments[0] instanceof Object)
	          for (var k in arguments[0]) ret[k] = arguments[0][k];
	        else
	          throw TypeError("createDict expects a single JavaScript object");
	        return ret;
	      },
	      createParamsObj: function () {
	        // In: expr, expr, ..., {id:expr, __kwp:true}, {id:expr, __kwp:true}, ...
	        // Out: {formals:[expr, expr, ...], keywords:{id:expr, id:expr, ...}}
	        var params = { formals: new pythonRuntime.objects.list(), keywords: new PythonDict() };
	        for (var i = 0; i < arguments.length; i++) {
	          if (arguments[i] && arguments[i].__kwp === true) {
	            for (var k in arguments[i])
	              if (k !== '__kwp') params.keywords[k] = arguments[i][k];
	          }
	          else params.formals.push(arguments[i]);
	        }
	        return params;
	      },
	      convertToList: function (list) {
	        Object.defineProperties(list, pythonRuntime.utils.listPropertyDescriptor);
	        return list;
	      },
	      convertToDict: function (dict) {
	        Object.defineProperties(dict, pythonRuntime.utils.dictPropertyDescriptor);
	        return dict;
	      }, 
	      listPropertyDescriptor: {
	          "_type": {
	            value: 'list',
	            writable: false,
	            enumerable: false
	          },
	          "_isPython": {
	            value: true,
	            writable: false,
	            enumerable: false
	          },
	          "append": {
	            value: function (x) {
	              this.push(x);
	            },
	            enumerable: false
	          },
	          "clear": {
	            value: function () {
	              this.splice(0, this.length);
	            },
	            enumerable: false
	          },
	          "copy": {
	            value: function () {
	              return this.slice(0);
	            },
	            enumerable: false
	          },
	          "count": {
	            value: function (x) {
	              var c = 0;
	              for (var i = 0; i < this.length; i++)
	                if (this[i] === x) c++;
	              return c;
	            },
	            enumerable: false
	          },
	          "equals": {
	            value: function (x) {
	              try {
	                if (this.length !== x.length) return false;
	                for (var i = 0; i < this.length; i++) {
	                  if (this[i].hasOwnProperty("equals")) {
	                    if (!this[i].equals(x[i])) return false;
	                  } else if (this[i] !== x[i]) return false;
	                }
	                return true;
	              }
	              catch (e) { }
	              return false;
	            },
	            enumerable: false
	          },
	          "extend": {
	            value: function (L) {
	              for (var i = 0; i < L.length; i++) this.push(L[i]);
	            },
	            enumerable: false
	          },
	          "index": {
	            value: function (x) {
	              return this.indexOf(x);
	            },
	            enumerable: false
	          },
	          "indexOf": {
	            value: function (x, fromIndex) {
	              try {
	                for (var i = fromIndex ? fromIndex : 0; i < this.length; i++) {
	                  if (this[i].hasOwnProperty("equals")) {
	                    if (this[i].equals(x)) return i;
	                  } else if (this[i] === x) return i;
	                }
	              }
	              catch (e) { }
	              return -1;
	            },
	            enumerable: false
	          },
	          "insert": {
	            value: function (i, x) {
	              this.splice(i, 0, x);
	            },
	            enumerable: false
	          },
	          "pop": {
	            value: function (i) {
	              if (arguments.length<1) i = this.length - 1;
	              var item = this[i];
	              this.splice(i, 1);
	              return item;
	            },
	            enumerable: false
	          },
	          "_pySlice": {
	            value: function (start, end, step) {
	              return pythonRuntime.internal.slice(this, start, end, step);
	            },
	            enumerable: false
	          },
	          "remove": {
	            value: function (x) {
	              this.splice(this.indexOf(x), 1);
	            },
	            enumerable: false
	          },
	          "sort": {
	            value: function(x, reverse) {
	              var list2 = this.slice(0);
	              var apply_key = function(a, numerical) {
	                var list3 = list2.map(x);
	                // construct a dict that maps the listay before and after the map
	                var mapping = {};
	                for(var i in list3) mapping[list3[i]] = list2[i];
	                if(numerical)
	                  list3.sort(function(a, b) { return a - b; });
	                else
	                  list3.sort();
	                for(var i in a) a[i] = mapping[list3[i]];
	              };
	              for(var i in this) {
	                if(typeof this[i] !== 'number' || !isFinite(this[i])) {
	                  if(typeof x != 'undefined') {
	                    apply_key(this, false);
	                  }
	                  else {
	                    list2.sort();
	                    for (var j in this) this[j] = list2[j];
	                  }
	                  if(reverse)
	                    this.reverse();
	                  return;
	                }
	              }
	              if(typeof x != 'undefined') {
	                apply_key(this, true);
	              }
	              else {
	                list2.sort(function(a, b) { return a - b; });
	                for(var i in this) this[i] = list2[i];
	              }
	              if(reverse)
	                this.reverse();
	            },
	            enumerable: false
	          },
	          "toString": {
	            value: function () {
	              return '[' + this.join(', ') + ']';
	            },
	            enumerable: false
	          }
	      },
	      createList: function () {
	        var ret = new pythonRuntime.objects.list();
	        if (arguments.length === 1 && arguments[0] instanceof Array)
	          for (var i in arguments[0]) ret.push(arguments[0][i]);
	        else
	          for (var i in arguments) ret.push(arguments[i]);
	        return ret;
	      },
	      dictPropertyDescriptor: {
	        "_type": {
	          value: 'dict',
	          writable: false
	        },
	        "_isPython": {
	          value: true,
	          enumerable: false
	        },
	        "items": {
	          value: function () {
	            var items = new pythonRuntime.objects.list();
	            for (var k in this) items.append(new pythonRuntime.objects.tuple(k, this[k]));
	            return items;
	          },
	          enumerable: false
	        },
	        "length": {
	          get: function () {
	            return Object.keys(this).length;
	          },
	          enumerable: false
	        },
	        "clear": {
	          value: function () {
	            for (var i in this) delete this[i];
	          },
	          enumerable: false
	        },
	        "get": {
	          value: function (key, def) {
	            if (key in this) return this[key];
	            else if (def !== undefined) return def;
	            return null;
	          },
	          enumerable: false
	        },
	        "keys": {
	          value: function () {
	            return Object.keys(this);
	          },
	          enumerable: false
	        },
	        "pop": {
	          value: function (key, def) {
	            var value;
	            if (key in this) {
	              value = this[key];
	              delete this[key];
	            } else if (def !== undefined) value = def;
	            else return new Error("KeyError");
	            return value;
	          },
	          enumerable: false
	        }, "values": {
	          value: function () {
	            var values = new pythonRuntime.objects.list();
	            for (var key in this) values.append(this[key]);
	            return values;
	          },
	          enumerable: false
	        }
	      }
	    },
	    ops: {
	      add: function (a, b) {
	        if (typeof a === 'object' && pythonRuntime.internal.isSeq(a) && pythonRuntime.internal.isSeq(b)) {
	          if (a._type !== b._type)
	            throw TypeError("can only concatenate " + a._type + " (not '" + b._type + "') to " + a._type);
	          var ret;
	          if (a._type === 'list') ret = new pythonRuntime.objects.list();
	          else if (a._type === 'tuple') ret = new pythonRuntime.objects.tuple();
	          if (ret) {
	            for (var i = 0; i < a.length; i++) ret.push(a[i]);
	            for (var i = 0; i < b.length; i++) ret.push(b[i]);
	            return ret;
	          }
	        }
	        return a + b;
	      },
	      in: function (a, b, n) {
	        var r = b.hasOwnProperty('indexOf') ? b.indexOf(a) >= 0 : a in b;
	        return n ? !r : r;
	      },
	      multiply: function (a, b) {
	        // TODO: non-sequence operand must be an integer
	        if ( typeof a === 'object' ) {
	          if (pythonRuntime.internal.isSeq(a) && !isNaN(parseInt(b))) {
	            var ret;
	            if (a._type === 'list') ret = new pythonRuntime.objects.list();
	            else if (a._type === 'tuple') ret = new pythonRuntime.objects.tuple();
	            if (ret) {
	              for (var i = 0; i < b; i++)
	                for (var j = 0; j < a.length; j++) ret.push(a[j]);
	              return ret;
	            }
	          } else if (pythonRuntime.internal.isSeq(b) && !isNaN(parseInt(a))) {
	            var ret;
	            if (b._type === 'list') ret = new pythonRuntime.objects.list();
	            else if (b._type === 'tuple') ret = new pythonRuntime.objects.tuple();
	            if (ret) {
	              for (var i = 0; i < a; i++)
	                for (var j = 0; j < b.length; j++) ret.push(b[j]);
	              return ret;
	            }
	          }
	        }
	        return a * b;
	      },
	      subscriptIndex: function (o, i) {
	        if ( i >= 0 ) return i;
	        if ( pythonRuntime.internal.isSeq(o) ) return o.length + i;
	        if ( pythonRuntime.internal.isJSArray(o) ) return o.length + i;
	        if ( typeof o === "string" ) return o.length + i;
	        return i;
	      }
	    },

	    objects: {
	      dict: function () {
	        var obj = new PythonDict();
	        for (var i = 0; i < arguments.length; ++i ) obj[arguments[i][0]] = arguments[i][1];
	        return obj;
	      },
	      list: function () {
	        var arr = [];
	        arr.push.apply(arr, arguments);
	        pythonRuntime.utils.convertToList(arr);
	        return arr;
	      },
	      tuple: function () {
	        var arr = [];
	        arr.push.apply(arr, arguments);
	        Object.defineProperty(arr, "_type",
	        {
	          get: function () { return 'tuple'; },
	          enumerable: false
	        });
	        Object.defineProperty(arr, "_isPython",
	        {
	          get: function () { return true; },
	          enumerable: false
	        });
	        Object.defineProperty(arr, "count",
	        {
	          value: function (x) {
	            var c = 0;
	            for (var i = 0; i < this.length; i++)
	              if (this[i] === x) c++;
	            return c;
	          },
	          enumerable: false
	        });
	        Object.defineProperty(arr, "equals",
	        {
	          value: function (x) {
	            try {
	              if (this.length !== x.length) return false;
	              for (var i = 0; i < this.length; i++) {
	                if (this[i].hasOwnProperty("equals")) {
	                  if (!this[i].equals(x[i])) return false;
	                } else if (this[i] !== x[i]) return false;
	              }
	              return true;
	            }
	            catch (e) { }
	            return false;
	          },
	          enumerable: false
	        });
	        Object.defineProperty(arr, "index",
	        {
	          value: function (x) {
	            return this.indexOf(x);
	          },
	          enumerable: false
	        });
	        Object.defineProperty(arr, "indexOf",
	        {
	          value: function (x, fromIndex) {
	            try {
	              for (var i = fromIndex ? fromIndex : 0; i < this.length; i++) {
	                if (this[i].hasOwnProperty("equals")) {
	                  if (this[i].equals(x)) return i;
	                } else if (this[i] === x) return i;
	              }
	            }
	            catch (e) { }
	            return -1;
	          },
	          enumerable: false
	        });
	        Object.defineProperty(arr, "_pySlice",
	        {
	          value: function (start, end, step) { 
	            return pythonRuntime.internal.slice(this, start, end, step);
	          },
	            enumerable: false
	        });
	        Object.defineProperty(arr, "toString",
	        {
	          value: function () {
	            var s = '(' + this.join(', ');
	            if (this.length === 1) s += ',';
	            s += ')';
	            return s;
	          },
	          enumerable: false
	        });
	        return arr;
	      }
	    },

	    // Python built-in functions

	    functions: {
	      abs: function(x) {
	        return Math.abs(x);
	      },
	      all: function(iterable) {
	        for (var i in iterable) if (pythonRuntime.functions.bool(iterable[i]) !== true) return false;
	        return true;
	      },
	      any: function(iterable) {
	        for (var i in iterable) if (pythonRuntime.functions.bool(iterable[i]) === true) return true;
	        return false;
	      },
	      ascii: function(obj) {
	        var s = pythonRuntime.functions.repr(obj),
	            asc = "",
	            code;
	        for (var i = 0; i < s.length; i++) {
	          code = s.charCodeAt(i);
	          if (code <= 127) asc += s[i];
	          else if (code <= 0xFF) asc += "\\x" + code.toString(16);
	          else if (0xD800 <= code && code <= 0xDBFF) { // UCS-2 for the astral chars
	            // if (i+1 >= s.length) throw "High surrogate not followed by low surrogate"; // Is this needed?
	            code = ((code-0xD800)*0x400)+(s.charCodeAt(++i)-0xDC00)+0x10000;
	            asc += "\\U" + ("000"+code.toString(16)).slice(-8);
	          } else if (code <= 0xFFFF) asc += "\\u" + ("0"+code.toString(16)).slice(-4);
	          else if (code <= 0x10FFFF) asc += "\\U" + ("000"+code.toString(16)).slice(-8);
	          else; // Invalid value, should probably throw something. It should never get here though as strings shouldn't contain them in the first place
	        }
	        return asc;
	      },
	      bool: function(x) {
	        return !(x === undefined || // No argument
	                 x === null || // None
	                 x === false || // False
	                 x === 0 || // Zero
	                 x.length === 0 || // Empty Sequence
	                 // TODO: Empty Mapping, needs more support for python mappings first
	                 (x.__bool__ !== undefined && x.__bool__() === false) || // If it has bool conversion defined
	                 (x.__len__ !== undefined && (x.__len__() === false || x.__len__() === 0))); // If it has length conversion defined
	      },
	      chr: function(i) {
	        return String.fromCharCode(i); // TODO: Error code for not 0 <= i <= 1114111
	      },
	      divmod: function(a, b) {
	        return pythonRuntime.objects.tuple(Math.floor(a/b), a%b);
	      },
	      enumerate: function(iterable, start) {
	        start = start || 0;
	        var ret = new pythonRuntime.objects.list();
	        for (var i in iterable) ret.push(new pythonRuntime.objects.tuple(start++, iterable[i]));
	        return ret;
	      },
	      filter: function(fn, iterable) {
	        fn = fn || function () { return true; };
	        var ret = new pythonRuntime.objects.list();
	        for (var i in iterable) if (fn(iterable[i])) ret.push(iterable[i]);
	        return ret;
	      },
	      float: function(x) {
	        if (x === undefined) return 0.0;
	        else if (typeof x == "string") { // TODO: Fix type check
	          x = x.trim().toLowerCase();
	          if ((/^[+-]?inf(inity)?$/i).exec(x) !== null) return Infinity*(x[0]==="-"?-1:1);
	          else if ((/^nan$/i).exec(x) !== null) return NaN;
	          else return parseFloat(x);
	        } else if (typeof x == "number") { // TODO: Fix type check
	          return x; // TODO: Get python types working right so we can return an actual float
	        } else {
	          if (x.__float__ !== undefined) return x.__float__();
	          else return null; // TODO: Throw TypeError: float() argument must be a string or a number, not '<type of x>'
	        }
	      },
	      hex: function(x) {
	        return x.toString(16);
	      },
	      int: function (s) {
	        return parseInt(s);
	      },
	      len: function (o) {
	        return o.length;
	      },
	      list: function (iterable) {
	        var ret = new pythonRuntime.objects.list();
	        if ( arguments.length == 0 ) return ret;
	        if ( arguments.length > 1 ) throw new TypeError('list() takes at most 1 argument (' + arguments.length + ' given)');
	        if (iterable instanceof Array) for (var i in iterable) ret.push(iterable[i]);
	        else for (var i in iterable) ret.push(i);
	        return ret;
	      },
	      map: function(fn, iterable) {
	        // TODO: support additional iterables passed
	        var ret = new pythonRuntime.objects.list();
	        for (var i in iterable) ret.push(fn(iterable[i]));
	        return ret;
	      },
	      max: function(arg1, arg2) {
	        // TODO: support optional keyword-only arguments
	        // TODO: empty iterable raises Python ValueError
	        if (!arg2) { // iterable
	          var max = null;
	          for (var i in arg1) if (max === null || arg1[i] > max) max = arg1[i];
	          return max;
	        } else return arg1 >= arg2 ? arg1 : arg2;
	      },
	      min: function(arg1, arg2) {
	        // TODO: support optional keyword-only arguments
	        // TODO: empty iterable raises Python ValueError
	        if (!arg2) { // iterable
	          var max = null;
	          for (var i in arg1) if (max === null || arg1[i] < max) max = arg1[i];
	          return max;
	        } else return arg1 <= arg2 ? arg1 : arg2;
	      },
	      oct: function(x) {
	        return x.toString(8);
	      },
	      ord: function(c) {
	        return c.charCodeAt(0);
	      },
	      pow: function(x, y, z) {
	        return z ? Math.pow(x, y) % z : Math.pow(x, y);
	      },
	      print: function () {
	        var s = "";
	        for (var i = 0; i < arguments.length; i++)
	          s += i === 0 ? arguments[i] : " " + arguments[i];
	        console.log(s);
	      },
	      range: function (start, stop, step) {
	        if (stop === undefined) {
	          stop = start;
	          start = 0;
	          step = 1;
	        }
	        else if (step === undefined) step = 1;
	        var len = ~~((stop - start) / step); //~~ is a fast floor
	        if ( len < 0 ) return pythonRuntime.utils.convertToList([]);
	        var r = new Array(len);
	        var element = 0;

	        var i = start;
	        while (i < stop && step > 0 || i > stop && step < 0) {
	          r[element++] = i;
	          i += step;
	        }

	        pythonRuntime.utils.convertToList(r);
	        return r;
	      },
	      repr: function (obj) {
	        if (typeof obj === 'string') return "'" + obj + "'"; // TODO: Patch until typesystem comes up.
	        if (obj.__repr__ !== undefined) return obj.__repr__();
	        else if (obj.__class__ !== undefined && obj.__class__.module !== undefined && obj.__class__.__name__) {
	          return '<'+obj.__class__.__module__+'.'+obj.__class__.__name__+' object>';
	        } else return obj.toString(); // Raise a please report warning here, we should never reach this piece of code
	      },
	      reversed: function (seq) {
	        var ret = new pythonRuntime.objects.list();
	        for (var i in seq) ret.push(seq[i]);
	        return ret.reverse();
	      },
	      round: function (num, ndigits) {
	        if (ndigits) {
	          var scale = Math.pow(10, ndigits);
	          return Math.round(num * scale) / scale;
	        }
	        return Math.round(num);
	      },
	      sorted: function (iterable, key, reverse) {
	        var ret = new pythonRuntime.objects.list();
	        for (var i in iterable) ret.push(iterable[i]);
	        if(key) ret.sort(key); else ret.sort();
	        if (reverse) ret.reverse();
	        return ret;
	      },
	      str: function (obj) {
	        return obj.toString();
	      },
	      sum: function (iterable, start) {
	        // TODO: start can't be a string
	        var ret = start || 0;
	        for (var i in iterable) ret += iterable[i];
	        return ret;
	      },
	      tuple: function (iterable) {
	        var ret = new pythonRuntime.objects.tuple();
	        for (var i in iterable) ret.push(iterable[i]);
	        return ret;
	      }
	    },

	    // Python imports
	    // TODO: from x import y, z

	    imports: {
	      random: {
	        random: function () { return Math.random(); }
	      }
	    }
	  };

	  function PythonDict() {

	  }

	  Object.defineProperties(PythonDict.prototype, pythonRuntime.utils.dictPropertyDescriptor);
	  return pythonRuntime;
	}));



/***/ })
/******/ ])
});
;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyObjectValue = __webpack_require__(93);
var ObjectValue = __webpack_require__(158);
var ArrayValue = __webpack_require__(174);
var PrimitiveValue = __webpack_require__(165);
var CompletionRecord = __webpack_require__(149);
var Value = __webpack_require__(105);
var _g = __webpack_require__(150);

var PythonRuntime = function (_EasyObjectValue) {
	(0, _inherits3.default)(PythonRuntime, _EasyObjectValue);

	function PythonRuntime(realm) {
		(0, _classCallCheck3.default)(this, PythonRuntime);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PythonRuntime.__proto__ || (0, _getPrototypeOf2.default)(PythonRuntime)).call(this, realm));

		var functions = new ObjectValue(realm);
		functions.setImmediate("str", _this.getImmediate("str"));
		functions.setImmediate("range", _this.getImmediate("range"));
		functions.setImmediate("round", _this.getImmediate("round"));
		functions.setImmediate("abs", realm.Math.getImmediate("abs"));

		_this.setImmediate("functions", functions);

		var objects = new ObjectValue(realm);
		objects.setImmediate("list", new PythonList(realm));
		objects.setImmediate("tuple", new PythonList(realm));
		_this.setImmediate("objects", objects);

		var ops = new ObjectValue(realm);
		ops.setImmediate("multiply", _this.getImmediate("multiply"));
		ops.setImmediate("add", _this.getImmediate("add"));
		ops.setImmediate("subscriptIndex", _this.getImmediate("subscriptIndex"));
		ops.setImmediate("in", _this.getImmediate("in"));
		_this.setImmediate("ops", ops);

		return _this;
	}

	(0, _createClass3.default)(PythonRuntime, null, [{
		key: 'list$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function list$e(thiz, args, s) {
			return _regenerator2.default.wrap(function list$e$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', new PythonList(s.realm));

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, list$e, this);
		})
	}, {
		key: 'makeList$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeList$e(thiz, args, s) {
			return _regenerator2.default.wrap(function makeList$e$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt('return', new PythonList(s.realm));

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, makeList$e, this);
		})
	}, {
		key: 'str$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function str$e(thiz, args, s) {
			return _regenerator2.default.wrap(function str$e$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.delegateYield(args[0].toStringValue(), 't0', 1);

						case 1:
							return _context3.abrupt('return', _context3.t0);

						case 2:
						case 'end':
							return _context3.stop();
					}
				}
			}, str$e, this);
		})
	}, {
		key: 'range',
		value: /*#__PURE__*/_regenerator2.default.mark(function range(thiz, args, s) {
			var result, start, step, end, i;
			return _regenerator2.default.wrap(function range$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							result = [];
							start = 0;
							step = 1;
							return _context4.delegateYield(args[0].toIntNative(), 't0', 4);

						case 4:
							end = _context4.t0;

							if (!(args.length > 1)) {
								_context4.next = 9;
								break;
							}

							start = end;
							return _context4.delegateYield(args[1].toIntNative(), 't1', 8);

						case 8:
							end = _context4.t1;

						case 9:
							if (!(args.length > 2)) {
								_context4.next = 12;
								break;
							}

							return _context4.delegateYield(args[2].toIntNative(), 't2', 11);

						case 11:
							step = _context4.t2;

						case 12:
							console.log(start, step, end);

							i = start;

							while (i < end && step > 0 || i > end && step < 0) {
								result.push(Value.fromNative(i));
								i += step;
							}

							return _context4.delegateYield(s.realm.PythonList.call(null, result, s), 't3', 16);

						case 16:
							return _context4.abrupt('return', _context4.t3);

						case 17:
						case 'end':
							return _context4.stop();
					}
				}
			}, range, this);
		})
	}, {
		key: 'round$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function round$e(thiz, args, s) {
			var n, digits, extra;
			return _regenerator2.default.wrap(function round$e$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							if (!(args.length > 0)) {
								_context5.next = 7;
								break;
							}

							return _context5.delegateYield(args[0].toNumberNative(), 't0', 2);

						case 2:
							n = _context5.t0;
							return _context5.delegateYield(args[1].toIntNative(), 't1', 4);

						case 4:
							digits = _context5.t1;
							extra = Math.pow(10, digits);
							return _context5.abrupt('return', Value.fromNative(Math.round(n * extra) / extra));

						case 7:
							_context5.t2 = Value;
							_context5.t3 = Math;
							return _context5.delegateYield(args[0].toNumberNative(), 't4', 10);

						case 10:
							_context5.t5 = _context5.t4;
							_context5.t6 = _context5.t3.round.call(_context5.t3, _context5.t5);
							return _context5.abrupt('return', _context5.t2.fromNative.call(_context5.t2, _context5.t6));

						case 13:
						case 'end':
							return _context5.stop();
					}
				}
			}, round$e, this);
		})
	}, {
		key: 'in$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function in$e(thiz, args, s) {
			var t, o, result;
			return _regenerator2.default.wrap(function in$e$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							t = args[0];
							o = args[1];

							if (!o.has("indexOf")) {
								_context6.next = 10;
								break;
							}

							return _context6.delegateYield(o.get("indexOf"), 't0', 4);

						case 4:
							_context6.t1 = Value.undef;
							_context6.t2 = [t];
							_context6.t3 = s;
							return _context6.delegateYield(_context6.t0.call(_context6.t1, _context6.t2, _context6.t3), 't4', 8);

						case 8:
							result = _context6.t4;
							return _context6.abrupt('return', yiled * result.toBoolean());

						case 10:
							return _context6.delegateYield(o.inOperator(t), 't5', 11);

						case 11:
							return _context6.abrupt('return', _context6.t5);

						case 12:
						case 'end':
							return _context6.stop();
					}
				}
			}, in$e, this);
		})

		//Ops

	}, {
		key: 'add$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function add$e(thiz, args, s) {
			return _regenerator2.default.wrap(function add$e$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.delegateYield(args[0].add(args[1]), 't0', 1);

						case 1:
							return _context7.abrupt('return', _context7.t0);

						case 2:
						case 'end':
							return _context7.stop();
					}
				}
			}, add$e, this);
		})
	}, {
		key: 'multiply$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function multiply$e(thiz, args, s) {
			return _regenerator2.default.wrap(function multiply$e$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.delegateYield(args[0].multiply(args[1]), 't0', 1);

						case 1:
							return _context8.abrupt('return', _context8.t0);

						case 2:
						case 'end':
							return _context8.stop();
					}
				}
			}, multiply$e, this);
		})
	}, {
		key: 'subscriptIndex$e',
		value: /*#__PURE__*/_regenerator2.default.mark(function subscriptIndex$e(thiz, args, s) {
			return _regenerator2.default.wrap(function subscriptIndex$e$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							return _context9.delegateYield(args[0].get(args[1].toNative()), 't0', 1);

						case 1:
							return _context9.abrupt('return', _context9.t0);

						case 2:
						case 'end':
							return _context9.stop();
					}
				}
			}, subscriptIndex$e, this);
		})
	}]);
	return PythonRuntime;
}(EasyObjectValue);

var PythonList = function (_EasyObjectValue2) {
	(0, _inherits3.default)(PythonList, _EasyObjectValue2);

	function PythonList() {
		(0, _classCallCheck3.default)(this, PythonList);
		return (0, _possibleConstructorReturn3.default)(this, (PythonList.__proto__ || (0, _getPrototypeOf2.default)(PythonList)).apply(this, arguments));
	}

	(0, _createClass3.default)(PythonList, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, s) {
			var result, i, v;
			return _regenerator2.default.wrap(function call$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							result = new ArrayValue(s.realm);

							result.setPrototype(s.realm.PythonListProto);

							result.setImmediate('length', Value.fromNative(args.length));
							result.properties.length.enumerable = false;

							for (i = 0; i < args.length; ++i) {
								v = args[i];

								if (!(v instanceof Value)) v = realm.fromNative(v);
								result.setImmediate(i, v);
							}
							console.log(result.debugString);
							return _context10.abrupt('return', result);

						case 7:
						case 'end':
							return _context10.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'callPrototype',
		value: function callPrototype(realm) {
			return realm.PythonListProto;
		}
	}, {
		key: 'constructorFor',
		value: function constructorFor(realm) {
			return realm.PythonListProto;
		}
		//objPrototype(realm) { return realm.Function; }

	}]);
	return PythonList;
}(EasyObjectValue);

var PythonListProto = function (_EasyObjectValue3) {
	(0, _inherits3.default)(PythonListProto, _EasyObjectValue3);

	function PythonListProto(realm) {
		(0, _classCallCheck3.default)(this, PythonListProto);

		var _this3 = (0, _possibleConstructorReturn3.default)(this, (PythonListProto.__proto__ || (0, _getPrototypeOf2.default)(PythonListProto)).call(this, realm));

		_this3.setImmediate("push", realm.ArrayPrototype.getImmediate("push"));
		_this3.setImmediate("pop", realm.ArrayPrototype.getImmediate("pop"));
		_this3.setImmediate("sort", realm.ArrayPrototype.getImmediate("sort"));
		return _this3;
	}

	return PythonListProto;
}(EasyObjectValue);

PythonListProto.prototype.wellKnownName = '%PythonList%';

module.exports = { PythonRuntime: PythonRuntime, PythonList: PythonList, PythonListProto: PythonListProto };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _getOwnPropertyDescriptor = __webpack_require__(94);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getIterator2 = __webpack_require__(97);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getOwnPropertyNames = __webpack_require__(102);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(105);
var PropertyDescriptor = __webpack_require__(156);
var ObjectValue = __webpack_require__(158);
var CompletionRecord = __webpack_require__(149);
var EasyNativeFunction = __webpack_require__(180);

var EasyObjectValue = function (_ObjectValue) {
	(0, _inherits3.default)(EasyObjectValue, _ObjectValue);

	function EasyObjectValue(realm) {
		(0, _classCallCheck3.default)(this, EasyObjectValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (EasyObjectValue.__proto__ || (0, _getPrototypeOf2.default)(EasyObjectValue)).call(this, realm));

		var objProto = realm.ObjectPrototype;
		if (typeof _this.objPrototype === 'function') {
			objProto = _this.objPrototype(realm);
		} else if (typeof _this.call === 'function') {
			objProto = realm.FunctionPrototype;
		}
		if (_this.call == 'function') _this.clazz = 'Function';
		_this.setPrototype(objProto);

		_this._init(realm);
		_this.easyRef = (0, _getPrototypeOf2.default)(_this).constructor;
		return _this;
	}

	(0, _createClass3.default)(EasyObjectValue, [{
		key: '_init',
		value: function _init(realm) {
			var clazz = (0, _getPrototypeOf2.default)(this);
			for (var _iterator = (0, _getOwnPropertyNames2.default)(clazz.constructor), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var p = _ref;

				if (p === 'length') continue;
				if (p === 'name') continue;
				if (p === 'prototype') continue;
				if (p === 'constructor') continue;
				if (p === 'caller') continue;
				if (p === 'callee') continue;
				if (p === 'arguments') continue;
				var parts = p.split(/\$/);
				var flags = parts.length > 1 ? parts.pop() : '';
				var name = parts.join('');

				var d = (0, _getOwnPropertyDescriptor2.default)(clazz.constructor, p);
				var v = new PropertyDescriptor();
				var length = 1;

				if (d.get) {
					//Its a property
					var val = d.get();
					if (val instanceof Value) v.value = val;else v.value = realm.fromNative(val);
				} else {
					if (d.value.esperLength !== undefined) length = d.value.esperLength;
					var rb = EasyNativeFunction.make(realm, d.value, this);

					var _rblen = new PropertyDescriptor(Value.fromNative(length));
					_rblen.configurable = false;
					_rblen.writable = false;
					_rblen.enumerable = false;
					rb.properties['length'] = _rblen;

					if (clazz.wellKnownName && !rb.wellKnownName) {
						rb.wellKnownName = clazz.wellKnownName + "#" + name;
					}

					v.value = rb;
				}
				if (flags.indexOf('e') !== -1) v.enumerable = false;
				if (flags.indexOf('w') !== -1) v.writable = false;
				if (flags.indexOf('c') !== -1) v.configurable = false;
				if (flags.indexOf('g') !== -1) {
					v.getter = v.value;
					delete v.value;
				}
				this.properties[name] = v;
			}

			if (this.callPrototype) {
				var pt = new PropertyDescriptor(this.callPrototype(realm));
				pt.configurable = false;
				pt.enumerable = false;
				pt.writable = false;
				this.properties['prototype'] = pt;
			}

			if (this.callLength !== undefined) {
				var rblen = new PropertyDescriptor(Value.fromNative(this.callLength));
				rblen.configurable = false;
				rblen.writable = false;
				rblen.enumerable = false;
				this.properties['length'] = rblen;
			}

			if (this.constructorFor) {
				var target = this.constructorFor(realm);
				if (target) {
					var cs = new PropertyDescriptor(this);
					cs.configurable = false;
					cs.enumerable = false;
					target.properties['constructor'] = cs;
				}
			}

			/*
   if ( realm.Function ) {
   	let cs = new PropertyDescriptor(realm.Function);
   	cs.configurable = false;
   	cs.enumerable = false;
   	this.properties['constructor'] = cs;
   }
   */
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return typeof this.call === 'function' ? 'function' : 'object';
		}
	}]);
	return EasyObjectValue;
}(ObjectValue);

EasyObjectValue.EasyNativeFunction = EasyNativeFunction;

module.exports = EasyObjectValue;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var $Object = __webpack_require__(15).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(53);
var $getOwnPropertyDescriptor = __webpack_require__(79).f;

__webpack_require__(19)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(42);
module.exports = __webpack_require__(99);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var get = __webpack_require__(100);
module.exports = __webpack_require__(15).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(101);
var ITERATOR = __webpack_require__(62)('iterator');
var Iterators = __webpack_require__(47);
module.exports = __webpack_require__(15).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(55);
var TAG = __webpack_require__(62)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
var $Object = __webpack_require__(15).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(19)('getOwnPropertyNames', function () {
  return __webpack_require__(77).f;
});


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _for = __webpack_require__(106);

var _for2 = _interopRequireDefault(_for);

var _symbol = __webpack_require__(68);

var _symbol2 = _interopRequireDefault(_symbol);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperties = __webpack_require__(108);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _promise = __webpack_require__(111);

var _promise2 = _interopRequireDefault(_promise);

var _from = __webpack_require__(131);

var _from2 = _interopRequireDefault(_from);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _weakMap = __webpack_require__(135);

var _weakMap2 = _interopRequireDefault(_weakMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompletionRecord = __webpack_require__(149);
var GenDash = __webpack_require__(150);

var undef = void 0,
    nil = void 0,
    tru = void 0,
    fals = void 0,
    nan = void 0,
    emptyString = void 0,
    zero = void 0,
    one = void 0,
    negone = void 0,
    negzero = void 0,
    smallIntValues = void 0;
var cache = new _weakMap2.default();
var bookmarks = new _weakMap2.default();
var ObjectValue = void 0,
    PrimitiveValue = void 0,
    StringValue = void 0,
    NumberValue = void 0,
    BridgeValue = void 0,
    Evaluator = void 0;

var serial = 0;
/**
 * Represents a value a variable could take.
 */

var Value = function () {
	(0, _createClass3.default)(Value, null, [{
		key: 'fromPrimativeNative',

		/**
   * Convert a native javascript primative value to a Value
   * @param {any} value - The value to convert
   */
		value: function fromPrimativeNative(value) {
			if (!value) {
				if (value === undefined) return undef;
				if (value === null) return nil;
				if (value === false) return fals;
				if (value === '') return emptyString;
			}

			if (value === true) return tru;

			if (typeof value === 'number') {
				if (value === 0) {
					return 1 / value > 0 ? zero : negzero;
				}
				if (value | 0 === value) {
					var snv = smallIntValues[value + 1];
					if (snv) return snv;
				}
				return new NumberValue(value);
			}
			if (typeof value === 'string') return new StringValue(value);
			if (typeof value === 'boolean') return tru;
		}
	}, {
		key: 'hasBookmark',
		value: function hasBookmark(native) {
			return bookmarks.has(native);
		}
	}, {
		key: 'getBookmark',
		value: function getBookmark(native) {
			return bookmarks.get(native);
		}

		/**
   * Convert a native javascript value to a Value
   *
   * @param {any} value - The value to convert
   * @param {Realm} realm - The realm of the new value.
   */

	}, {
		key: 'fromNative',
		value: function fromNative(value, realm) {
			if (value instanceof Value) return value;
			var prim = Value.fromPrimativeNative(value);
			if (prim) return prim;

			if (value instanceof Error) {
				if (!realm) throw new Error('We needed a realm, but we didnt have one.  We were sad :(');
				if (value instanceof TypeError) return realm.TypeError.makeFrom(value);
				if (value instanceof ReferenceError) return realm.ReferenceError.makeFrom(value);
				if (value instanceof SyntaxError) return realm.SyntaxError.makeFrom(value);else return realm.Error.makeFrom(value);
			}

			if (Value.hasBookmark(value)) {
				return Value.getBookmark(value);
			}

			throw new TypeError('Tried to load an unsafe native value into the interperter:' + (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) + ' / ' + value);
			//TODO: Is this cache dangerous?
			if (!cache.has(value)) {
				var nue = new BridgeValue(realm, value);
				cache.set(value, nue);
				return nue;
			}
			return cache.get(value);
		}

		/**
   * Holds a value representing `undefined`
   *
   * @returns {UndefinedValue}
   */

	}, {
		key: 'createNativeBookmark',
		value: function createNativeBookmark(v, realm) {
			var out;
			var thiz = this;
			if (typeof v.call === 'function') {
				switch (realm ? realm.options.bookmarkInvocationMode : '') {
					case 'loop':
						out = function Bookmark() {
							var Evaluator = __webpack_require__(151);
							var cthis = realm.makeForForeignObject(this);
							var c = v.call(cthis, (0, _from2.default)(arguments).map(function (v) {
								return realm.makeForForeignObject(v);
							}), realm.globalScope);
							var evalu = new Evaluator(realm, null, realm.globalScope);
							evalu.pushFrame({ type: 'program', generator: c, scope: realm.globalScope });
							var gen = evalu.generator();
							var result = void 0;
							do {
								result = gen.next();
							} while (!result.done);
							return result.value.toNative();
						};
						break;
					case 'async':
						out = function BookmarkAsync() {
							var Evaluator = __webpack_require__(151);
							var cthis = realm.makeForForeignObject(this);
							var c = v.call(cthis, (0, _from2.default)(arguments).map(function (v) {
								return realm.makeForForeignObject(v);
							}), realm.globalScope);
							var evalu = new Evaluator(realm, null, realm.globalScope);
							evalu.pushFrame({ type: 'program', generator: c, scope: realm.globalScope });
							var gen = evalu.generator();
							function handler(value) {
								while (!value.done) {
									value = gen.next();
									if (value.value && value.value.then) {
										return value.value.then(function (v) {
											return handler({ done: false, value: v });
										});
									}
								}
								return value;
							}
							return new _promise2.default(function (resolve, reject) {
								try {
									var value = gen.next();
									resolve(value);
								} catch (e) {
									reject(e);
								}
							}).then(handler).then(function (v) {
								return v.value.toNative();
							});
						};
						break;
					default:
						out = function Bookmark() {
							throw new Error('Atempted to invoke bookmark for ' + v.debugString);
						};
				}
			} else {
				out = {};
			}
			(0, _defineProperties2.default)(out, {
				toString: { value: function value() {
						return v.debugString;
					}, writable: true },
				inspect: { value: function value() {
						return v.debugString;
					}, writable: true },
				esperValue: { get: function get() {
						return v;
					} }
			});
			bookmarks.set(out, v);
			return out;
		}
	}, {
		key: 'undef',
		get: function get() {
			return undef;
		}

		/**
   * Holds a value representing `null`
   *
   * @returns {NullValue}
   */

	}, {
		key: 'null',
		get: function get() {
			return nil;
		}

		/**
   * Holds a value representing `true`
   *
   * @returns {BooleanValue} true
   */

	}, {
		key: 'true',
		get: function get() {
			return tru;
		}

		/**
   * Holds a value representing `fasle`
   *
   * @returns {BooleanValue} false
   */

	}, {
		key: 'false',
		get: function get() {
			return fals;
		}

		/**
   * Holds a value representing `NaN`
   *
   * @returns {NumberValue} NaN
   */

	}, {
		key: 'nan',
		get: function get() {
			return nan;
		}

		/**
   * Holds a value representing `''`
   *
   * @returns {StringValue} ''
   */

	}, {
		key: 'emptyString',
		get: function get() {
			return emptyString;
		}

		/**
   * Holds a value representing `0`
   *
   * @returns {NumberValue} 0
   */

	}, {
		key: 'zero',
		get: function get() {
			return zero;
		}

		/**
   * Holds a value representing `1`
   *
   * @returns {NumberValue} 1
   */

	}, {
		key: 'one',
		get: function get() {
			return one;
		}
	}]);

	function Value() {
		(0, _classCallCheck3.default)(this, Value);

		this.serial = serial++;
	}

	/**
  * Converts this value to a native javascript value.
  *
  * @abstract
  * @returns {*}
  */


	(0, _createClass3.default)(Value, [{
		key: 'toNative',
		value: function toNative() {
			throw new Error('Unimplemented: Value#toNative');
		}

		/**
   * Deep copy this value to a native javascript value.
   *
   * @returns {*}
   */

	}, {
		key: 'toJS',
		value: function toJS() {
			return this.toNative();
		}

		/**
   * A string representation of this Value suitable for display when
   * debugging.
   * @abstract
   * @returns {string}
   */

	}, {
		key: 'inspect',
		value: function inspect() {
			return this.debugString;
		}

		/**
   * Indexes the value to get the value of a property.
   * i.e. `value[name]`
   * @param {String} name
   * @abstract
   * @returns {Value}
   */

	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name) {
			var err;
			return _regenerator2.default.wrap(function get$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							err = "Can't access get " + name + ' of that type.';
							_context.next = 3;
							return CompletionRecord.typeError(err);

						case 3:
							return _context.abrupt('return', _context.sent);

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'getImmediate',
		value: function getImmediate(name) {
			return GenDash.syncGenHelper(this.get(name));
		}

		/**
   * Computes the javascript expression `!value`
   * @returns {Value}
   */

	}, {
		key: 'not',
		value: /*#__PURE__*/_regenerator2.default.mark(function not() {
			return _regenerator2.default.wrap(function not$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt('return', !this.truthy ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, not, this);
		})

		/**
   * Computes the javascript expression `+value`
   * @returns {Value}
   */

	}, {
		key: 'unaryPlus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryPlus() {
			return _regenerator2.default.wrap(function unaryPlus$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.t0 = Value;
							return _context3.delegateYield(this.toNumberValue(), 't1', 2);

						case 2:
							_context3.t2 = +_context3.t1.toNative();
							return _context3.abrupt('return', _context3.t0.fromNative.call(_context3.t0, _context3.t2));

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, unaryPlus, this);
		})

		/**
   * Computes the javascript expression `-value`
   * @returns {Value}
   */

	}, {
		key: 'unaryMinus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryMinus() {
			return _regenerator2.default.wrap(function unaryMinus$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.t0 = Value;
							return _context4.delegateYield(this.toNumberValue(), 't1', 2);

						case 2:
							_context4.t2 = -_context4.t1.toNative();
							return _context4.abrupt('return', _context4.t0.fromNative.call(_context4.t0, _context4.t2));

						case 4:
						case 'end':
							return _context4.stop();
					}
				}
			}, unaryMinus, this);
		})

		/**
   * Computes the javascript expression `typeof value`
   * @returns {Value}
   */

	}, {
		key: 'typeOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function typeOf() {
			return _regenerator2.default.wrap(function typeOf$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', Value.fromNative(this.jsTypeName));

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, typeOf, this);
		})

		/**
   * Computes the javascript expression `!(value == other)`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'notEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function notEquals(other) {
			var result;
			return _regenerator2.default.wrap(function notEquals$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.delegateYield(this.doubleEquals(other), 't0', 1);

						case 1:
							result = _context6.t0;
							return _context6.delegateYield(result.not(), 't1', 3);

						case 3:
							return _context6.abrupt('return', _context6.t1);

						case 4:
						case 'end':
							return _context6.stop();
					}
				}
			}, notEquals, this);
		})

		/**
   * Computes the javascript expression `!(value === other)`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'doubleNotEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleNotEquals(other) {
			var result;
			return _regenerator2.default.wrap(function doubleNotEquals$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.delegateYield(this.tripleEquals(other), 't0', 1);

						case 1:
							result = _context7.t0;
							return _context7.delegateYield(result.not(), 't1', 3);

						case 3:
							return _context7.abrupt('return', _context7.t1);

						case 4:
						case 'end':
							return _context7.stop();
					}
				}
			}, doubleNotEquals, this);
		})

		/**
   * Computes the javascript expression `value === other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other) {
			return _regenerator2.default.wrap(function tripleEquals$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.abrupt('return', other === this ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context8.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'getPrototypeProperty',
		value: function getPrototypeProperty() {
			var p = this.properties['prototype'];
			if (!p) return;
			return p.value;
		}
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew(realm) {
			var nue, p;
			return _regenerator2.default.wrap(function makeThisForNew$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							nue = new ObjectValue(realm);
							p = this.getPrototypeProperty();

							if (p) nue.setPrototype(p);
							return _context9.abrupt('return', nue);

						case 4:
						case 'end':
							return _context9.stop();
					}
				}
			}, makeThisForNew, this);
		})

		/**
   * Computes the javascript expression `value > other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'gt',
		value: /*#__PURE__*/_regenerator2.default.mark(function gt(other) {
			return _regenerator2.default.wrap(function gt$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							_context10.t0 = Value;
							return _context10.delegateYield(this.toPrimitiveNative(), 't1', 2);

						case 2:
							_context10.t2 = _context10.t1;
							return _context10.delegateYield(other.toPrimitiveNative(), 't3', 4);

						case 4:
							_context10.t4 = _context10.t3;
							_context10.t5 = _context10.t2 > _context10.t4;
							return _context10.abrupt('return', _context10.t0.fromNative.call(_context10.t0, _context10.t5));

						case 7:
						case 'end':
							return _context10.stop();
					}
				}
			}, gt, this);
		})

		/**
   * Computes the javascript expression `value < other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'lt',
		value: /*#__PURE__*/_regenerator2.default.mark(function lt(other) {
			return _regenerator2.default.wrap(function lt$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							_context11.t0 = Value;
							return _context11.delegateYield(this.toPrimitiveNative(), 't1', 2);

						case 2:
							_context11.t2 = _context11.t1;
							return _context11.delegateYield(other.toPrimitiveNative(), 't3', 4);

						case 4:
							_context11.t4 = _context11.t3;
							_context11.t5 = _context11.t2 < _context11.t4;
							return _context11.abrupt('return', _context11.t0.fromNative.call(_context11.t0, _context11.t5));

						case 7:
						case 'end':
							return _context11.stop();
					}
				}
			}, lt, this);
		})

		/**
   * Computes the javascript expression `value >= other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'gte',
		value: /*#__PURE__*/_regenerator2.default.mark(function gte(other) {
			return _regenerator2.default.wrap(function gte$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							_context12.t0 = Value;
							return _context12.delegateYield(this.toPrimitiveNative(), 't1', 2);

						case 2:
							_context12.t2 = _context12.t1;
							return _context12.delegateYield(other.toPrimitiveNative(), 't3', 4);

						case 4:
							_context12.t4 = _context12.t3;
							_context12.t5 = _context12.t2 >= _context12.t4;
							return _context12.abrupt('return', _context12.t0.fromNative.call(_context12.t0, _context12.t5));

						case 7:
						case 'end':
							return _context12.stop();
					}
				}
			}, gte, this);
		})

		/**
   * Computes the javascript expression `value <= other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'lte',
		value: /*#__PURE__*/_regenerator2.default.mark(function lte(other) {
			return _regenerator2.default.wrap(function lte$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							_context13.t0 = Value;
							return _context13.delegateYield(this.toPrimitiveNative(), 't1', 2);

						case 2:
							_context13.t2 = _context13.t1;
							return _context13.delegateYield(other.toPrimitiveNative(), 't3', 4);

						case 4:
							_context13.t4 = _context13.t3;
							_context13.t5 = _context13.t2 <= _context13.t4;
							return _context13.abrupt('return', _context13.t0.fromNative.call(_context13.t0, _context13.t5));

						case 7:
						case 'end':
							return _context13.stop();
					}
				}
			}, lte, this);
		})

		/**
   * Computes the javascript expression `value - other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'subtract',
		value: /*#__PURE__*/_regenerator2.default.mark(function subtract(other) {
			return _regenerator2.default.wrap(function subtract$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							_context14.t0 = Value;
							return _context14.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context14.t2 = _context14.t1;
							return _context14.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context14.t4 = _context14.t3;
							_context14.t5 = _context14.t2 - _context14.t4;
							return _context14.abrupt('return', _context14.t0.fromNative.call(_context14.t0, _context14.t5));

						case 7:
						case 'end':
							return _context14.stop();
					}
				}
			}, subtract, this);
		})

		/**
   * Computes the javascript expression `value / other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'divide',
		value: /*#__PURE__*/_regenerator2.default.mark(function divide(other) {
			return _regenerator2.default.wrap(function divide$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							_context15.t0 = Value;
							return _context15.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context15.t2 = _context15.t1;
							return _context15.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context15.t4 = _context15.t3;
							_context15.t5 = _context15.t2 / _context15.t4;
							return _context15.abrupt('return', _context15.t0.fromNative.call(_context15.t0, _context15.t5));

						case 7:
						case 'end':
							return _context15.stop();
					}
				}
			}, divide, this);
		})

		/**
   * Computes the javascript expression `value * other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'multiply',
		value: /*#__PURE__*/_regenerator2.default.mark(function multiply(other) {
			return _regenerator2.default.wrap(function multiply$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							_context16.t0 = Value;
							return _context16.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context16.t2 = _context16.t1;
							return _context16.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context16.t4 = _context16.t3;
							_context16.t5 = _context16.t2 * _context16.t4;
							return _context16.abrupt('return', _context16.t0.fromNative.call(_context16.t0, _context16.t5));

						case 7:
						case 'end':
							return _context16.stop();
					}
				}
			}, multiply, this);
		})

		/**
   * Computes the javascript expression `value % other`
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'mod',
		value: /*#__PURE__*/_regenerator2.default.mark(function mod(other) {
			return _regenerator2.default.wrap(function mod$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							_context17.t0 = Value;
							return _context17.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context17.t2 = _context17.t1;
							return _context17.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context17.t4 = _context17.t3;
							_context17.t5 = _context17.t2 % _context17.t4;
							return _context17.abrupt('return', _context17.t0.fromNative.call(_context17.t0, _context17.t5));

						case 7:
						case 'end':
							return _context17.stop();
					}
				}
			}, mod, this);
		})
	}, {
		key: 'bitNot',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitNot() {
			return _regenerator2.default.wrap(function bitNot$(_context18) {
				while (1) {
					switch (_context18.prev = _context18.next) {
						case 0:
							_context18.t0 = Value;
							return _context18.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context18.t2 = ~_context18.t1;
							return _context18.abrupt('return', _context18.t0.fromNative.call(_context18.t0, _context18.t2));

						case 4:
						case 'end':
							return _context18.stop();
					}
				}
			}, bitNot, this);
		})
	}, {
		key: 'shiftLeft',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftLeft(other) {
			return _regenerator2.default.wrap(function shiftLeft$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							_context19.t0 = Value;
							return _context19.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context19.t2 = _context19.t1;
							return _context19.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context19.t4 = _context19.t3;
							_context19.t5 = _context19.t2 << _context19.t4;
							return _context19.abrupt('return', _context19.t0.fromNative.call(_context19.t0, _context19.t5));

						case 7:
						case 'end':
							return _context19.stop();
					}
				}
			}, shiftLeft, this);
		})
	}, {
		key: 'shiftRight',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRight(other) {
			return _regenerator2.default.wrap(function shiftRight$(_context20) {
				while (1) {
					switch (_context20.prev = _context20.next) {
						case 0:
							_context20.t0 = Value;
							return _context20.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context20.t2 = _context20.t1;
							return _context20.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context20.t4 = _context20.t3;
							_context20.t5 = _context20.t2 >> _context20.t4;
							return _context20.abrupt('return', _context20.t0.fromNative.call(_context20.t0, _context20.t5));

						case 7:
						case 'end':
							return _context20.stop();
					}
				}
			}, shiftRight, this);
		})
	}, {
		key: 'shiftRightZF',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRightZF(other) {
			return _regenerator2.default.wrap(function shiftRightZF$(_context21) {
				while (1) {
					switch (_context21.prev = _context21.next) {
						case 0:
							_context21.t0 = Value;
							return _context21.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context21.t2 = _context21.t1;
							return _context21.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context21.t4 = _context21.t3;
							_context21.t5 = _context21.t2 >>> _context21.t4;
							return _context21.abrupt('return', _context21.t0.fromNative.call(_context21.t0, _context21.t5));

						case 7:
						case 'end':
							return _context21.stop();
					}
				}
			}, shiftRightZF, this);
		})
	}, {
		key: 'bitAnd',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitAnd(other) {
			return _regenerator2.default.wrap(function bitAnd$(_context22) {
				while (1) {
					switch (_context22.prev = _context22.next) {
						case 0:
							_context22.t0 = Value;
							return _context22.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context22.t2 = _context22.t1;
							return _context22.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context22.t4 = _context22.t3;
							_context22.t5 = _context22.t2 & _context22.t4;
							return _context22.abrupt('return', _context22.t0.fromNative.call(_context22.t0, _context22.t5));

						case 7:
						case 'end':
							return _context22.stop();
					}
				}
			}, bitAnd, this);
		})
	}, {
		key: 'bitOr',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitOr(other) {
			return _regenerator2.default.wrap(function bitOr$(_context23) {
				while (1) {
					switch (_context23.prev = _context23.next) {
						case 0:
							_context23.t0 = Value;
							return _context23.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context23.t2 = _context23.t1;
							return _context23.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context23.t4 = _context23.t3;
							_context23.t5 = _context23.t2 | _context23.t4;
							return _context23.abrupt('return', _context23.t0.fromNative.call(_context23.t0, _context23.t5));

						case 7:
						case 'end':
							return _context23.stop();
					}
				}
			}, bitOr, this);
		})
	}, {
		key: 'bitXor',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitXor(other) {
			return _regenerator2.default.wrap(function bitXor$(_context24) {
				while (1) {
					switch (_context24.prev = _context24.next) {
						case 0:
							_context24.t0 = Value;
							return _context24.delegateYield(this.toNumberNative(), 't1', 2);

						case 2:
							_context24.t2 = _context24.t1;
							return _context24.delegateYield(other.toNumberNative(), 't3', 4);

						case 4:
							_context24.t4 = _context24.t3;
							_context24.t5 = _context24.t2 ^ _context24.t4;
							return _context24.abrupt('return', _context24.t0.fromNative.call(_context24.t0, _context24.t5));

						case 7:
						case 'end':
							return _context24.stop();
					}
				}
			}, bitXor, this);
		})

		/**
   * Computes the `value` raised to the `other` power (`value ** other`)
   * @param {Value} other - The other value
   * @returns {Value}
   */

	}, {
		key: 'pow',
		value: /*#__PURE__*/_regenerator2.default.mark(function pow(other) {
			return _regenerator2.default.wrap(function pow$(_context25) {
				while (1) {
					switch (_context25.prev = _context25.next) {
						case 0:
							_context25.t0 = Value;
							_context25.t1 = Math;
							return _context25.delegateYield(this.toNumberNative(), 't2', 3);

						case 3:
							_context25.t3 = _context25.t2;
							return _context25.delegateYield(other.toNumberNative(), 't4', 5);

						case 5:
							_context25.t5 = _context25.t4;
							_context25.t6 = _context25.t1.pow.call(_context25.t1, _context25.t3, _context25.t5);
							return _context25.abrupt('return', _context25.t0.fromNative.call(_context25.t0, _context25.t6));

						case 8:
						case 'end':
							return _context25.stop();
					}
				}
			}, pow, this);
		})
	}, {
		key: 'inOperator',
		value: /*#__PURE__*/_regenerator2.default.mark(function inOperator(other) {
			var err;
			return _regenerator2.default.wrap(function inOperator$(_context26) {
				while (1) {
					switch (_context26.prev = _context26.next) {
						case 0:
							err = "Cannot use 'in' operator to search for 'thing' in 'thing'";
							return _context26.abrupt('return', new CompletionRecord(CompletionRecord.THROW, {
								type: "TypeError",
								message: err
							}));

						case 2:
						case 'end':
							return _context26.stop();
					}
				}
			}, inOperator, this);
		})

		/**
   * Is the value is truthy, i.e. `!!value`
   *
   * @abstract
   * @type {boolean}
   */

	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			return _regenerator2.default.wrap(function toNumberValue$(_context27) {
				while (1) {
					switch (_context27.prev = _context27.next) {
						case 0:
							throw new Error('Unimplemented: Value#toNumberValue');

						case 1:
						case 'end':
							return _context27.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context28) {
				while (1) {
					switch (_context28.prev = _context28.next) {
						case 0:
							throw new Error('Unimplemented: Value#StringValue');

						case 1:
						case 'end':
							return _context28.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'toStringNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringNative() {
			return _regenerator2.default.wrap(function toStringNative$(_context29) {
				while (1) {
					switch (_context29.prev = _context29.next) {
						case 0:
							return _context29.delegateYield(this.toStringValue(), 't0', 1);

						case 1:
							return _context29.abrupt('return', _context29.t0.native);

						case 2:
						case 'end':
							return _context29.stop();
					}
				}
			}, toStringNative, this);
		})
	}, {
		key: 'toBooleanValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toBooleanValue() {
			return _regenerator2.default.wrap(function toBooleanValue$(_context30) {
				while (1) {
					switch (_context30.prev = _context30.next) {
						case 0:
							return _context30.abrupt('return', this.truthy ? tru : fals);

						case 1:
						case 'end':
							return _context30.stop();
					}
				}
			}, toBooleanValue, this);
		})
	}, {
		key: 'toUIntNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toUIntNative() {
			var nv;
			return _regenerator2.default.wrap(function toUIntNative$(_context31) {
				while (1) {
					switch (_context31.prev = _context31.next) {
						case 0:
							return _context31.delegateYield(this.toNumberValue(), 't0', 1);

						case 1:
							nv = _context31.t0;
							return _context31.abrupt('return', Math.floor(nv.native));

						case 3:
						case 'end':
							return _context31.stop();
					}
				}
			}, toUIntNative, this);
		})
	}, {
		key: 'toIntNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toIntNative() {
			var nv;
			return _regenerator2.default.wrap(function toIntNative$(_context32) {
				while (1) {
					switch (_context32.prev = _context32.next) {
						case 0:
							return _context32.delegateYield(this.toNumberValue(), 't0', 1);

						case 1:
							nv = _context32.t0;
							return _context32.abrupt('return', Math.floor(nv.native));

						case 3:
						case 'end':
							return _context32.stop();
					}
				}
			}, toIntNative, this);
		})
	}, {
		key: 'toNumberNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberNative() {
			var nv;
			return _regenerator2.default.wrap(function toNumberNative$(_context33) {
				while (1) {
					switch (_context33.prev = _context33.next) {
						case 0:
							return _context33.delegateYield(this.toNumberValue(), 't0', 1);

						case 1:
							nv = _context33.t0;
							return _context33.abrupt('return', nv.native);

						case 3:
						case 'end':
							return _context33.stop();
					}
				}
			}, toNumberNative, this);
		})
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveValue$(_context34) {
				while (1) {
					switch (_context34.prev = _context34.next) {
						case 0:
							throw new Error('Unimplemented: Value#toPrimitiveValue');

						case 1:
						case 'end':
							return _context34.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toPrimitiveNative',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveNative(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveNative$(_context35) {
				while (1) {
					switch (_context35.prev = _context35.next) {
						case 0:
							return _context35.delegateYield(this.toPrimitiveValue(preferedType), 't0', 1);

						case 1:
							return _context35.abrupt('return', _context35.t0.native);

						case 2:
						case 'end':
							return _context35.stop();
					}
				}
			}, toPrimitiveNative, this);
		})

		/**
   * Quickly make a generator for this value
   */

	}, {
		key: 'fastGen',
		value: /*#__PURE__*/_regenerator2.default.mark(function fastGen() {
			return _regenerator2.default.wrap(function fastGen$(_context36) {
				while (1) {
					switch (_context36.prev = _context36.next) {
						case 0:
							return _context36.abrupt('return', this);

						case 1:
						case 'end':
							return _context36.stop();
					}
				}
			}, fastGen, this);
		})

		/**
   * Garentee this value can never change
   *
   * @abstract
   * @returns bool
   */

	}, {
		key: 'makeImmutable',
		value: function makeImmutable() {
			throw new Error('Unimplemented: Value#makeImmutable');
		}
	}, {
		key: 'debugString',
		get: function get() {
			var native = this.toNative();
			return native ? native.toString() : '???';
		}
	}, {
		key: 'truthy',
		get: function get() {
			throw new Error('Unimplemented: Value#truthy');
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			throw new Error('Unimplemented: Value#jsTypeName');
		}
	}, {
		key: 'specTypeName',
		get: function get() {
			return this.jsTypeName;
		}
	}, {
		key: 'isCallable',
		get: function get() {
			return typeof this.call === 'function';
		}
	}]);
	return Value;
}();

module.exports = Value;

if (_symbol2.default) {
	Value.prototype[(0, _for2.default)('nodejs.util.inspect.custom')] = Value.prototype.inspect;
}

ObjectValue = __webpack_require__(158);
PrimitiveValue = __webpack_require__(165);
StringValue = __webpack_require__(170);
NumberValue = __webpack_require__(172);
var UndefinedValue = __webpack_require__(179);
var NullValue = __webpack_require__(173);

undef = new UndefinedValue();
nil = new NullValue();
tru = new PrimitiveValue(true);
fals = new PrimitiveValue(false);
nan = new PrimitiveValue(NaN);
emptyString = new StringValue('');

zero = new NumberValue(0);
negzero = new NumberValue(-0);
one = new NumberValue(1);
negone = new NumberValue(-1);
smallIntValues = [negone, zero, one, new NumberValue(2), new NumberValue(3), new NumberValue(4), new NumberValue(5), new NumberValue(6), new NumberValue(7), new NumberValue(8), new NumberValue(9)];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(15).Symbol['for'];


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
var $Object = __webpack_require__(15).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(28), 'Object', { defineProperties: __webpack_require__(50) });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
__webpack_require__(42);
__webpack_require__(63);
__webpack_require__(113);
__webpack_require__(129);
__webpack_require__(130);
module.exports = __webpack_require__(15).Promise;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var global = __webpack_require__(16);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(101);
var $export = __webpack_require__(20);
var isObject = __webpack_require__(26);
var aFunction = __webpack_require__(22);
var anInstance = __webpack_require__(114);
var forOf = __webpack_require__(115);
var speciesConstructor = __webpack_require__(118);
var task = __webpack_require__(119).set;
var microtask = __webpack_require__(121)();
var newPromiseCapabilityModule = __webpack_require__(122);
var perform = __webpack_require__(123);
var userAgent = __webpack_require__(124);
var promiseResolve = __webpack_require__(125);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(62)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(126)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(61)($Promise, PROMISE);
__webpack_require__(127)(PROMISE);
Wrapper = __webpack_require__(15)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(128)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(116);
var isArrayIter = __webpack_require__(117);
var anObject = __webpack_require__(25);
var toLength = __webpack_require__(57);
var getIterFn = __webpack_require__(100);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(25);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(47);
var ITERATOR = __webpack_require__(62)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(25);
var aFunction = __webpack_require__(22);
var SPECIES = __webpack_require__(62)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(120);
var html = __webpack_require__(60);
var cel = __webpack_require__(30);
var global = __webpack_require__(16);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(55)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var macrotask = __webpack_require__(119).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(55)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(22);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25);
var isObject = __webpack_require__(26);
var newPromiseCapability = __webpack_require__(122);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(23);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(16);
var core = __webpack_require__(15);
var dP = __webpack_require__(24);
var DESCRIPTORS = __webpack_require__(28);
var SPECIES = __webpack_require__(62)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(62)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(20);
var core = __webpack_require__(15);
var global = __webpack_require__(16);
var speciesConstructor = __webpack_require__(118);
var promiseResolve = __webpack_require__(125);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(20);
var newPromiseCapability = __webpack_require__(122);
var perform = __webpack_require__(123);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(133);
module.exports = __webpack_require__(15).Array.from;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(21);
var $export = __webpack_require__(20);
var toObject = __webpack_require__(9);
var call = __webpack_require__(116);
var isArrayIter = __webpack_require__(117);
var toLength = __webpack_require__(57);
var createProperty = __webpack_require__(134);
var getIterFn = __webpack_require__(100);

$export($export.S + $export.F * !__webpack_require__(128)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(24);
var createDesc = __webpack_require__(32);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
__webpack_require__(63);
__webpack_require__(137);
__webpack_require__(145);
__webpack_require__(147);
module.exports = __webpack_require__(15).WeakMap;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(16);
var each = __webpack_require__(138)(0);
var redefine = __webpack_require__(46);
var meta = __webpack_require__(71);
var assign = __webpack_require__(141);
var weak = __webpack_require__(142);
var isObject = __webpack_require__(26);
var validate = __webpack_require__(143);
var NATIVE_WEAK_MAP = __webpack_require__(143);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(144)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(21);
var IObject = __webpack_require__(54);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(57);
var asc = __webpack_require__(139);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(140);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var isArray = __webpack_require__(76);
var SPECIES = __webpack_require__(62)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(28);
var getKeys = __webpack_require__(51);
var gOPS = __webpack_require__(74);
var pIE = __webpack_require__(75);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(29)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(126);
var getWeak = __webpack_require__(71).getWeak;
var anObject = __webpack_require__(25);
var isObject = __webpack_require__(26);
var anInstance = __webpack_require__(114);
var forOf = __webpack_require__(115);
var createArrayMethod = __webpack_require__(138);
var $has = __webpack_require__(12);
var validate = __webpack_require__(143);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(16);
var $export = __webpack_require__(20);
var meta = __webpack_require__(71);
var fails = __webpack_require__(29);
var hide = __webpack_require__(23);
var redefineAll = __webpack_require__(126);
var forOf = __webpack_require__(115);
var anInstance = __webpack_require__(114);
var isObject = __webpack_require__(26);
var setToStringTag = __webpack_require__(61);
var dP = __webpack_require__(24).f;
var each = __webpack_require__(138)(0);
var DESCRIPTORS = __webpack_require__(28);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(146)('WeakMap');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(20);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(148)('WeakMap');


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(20);
var aFunction = __webpack_require__(22);
var ctx = __webpack_require__(21);
var forOf = __webpack_require__(115);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(105);

var CompletionRecord = function () {
	function CompletionRecord(type, value, target) {
		(0, _classCallCheck3.default)(this, CompletionRecord);

		if (value === undefined) {
			value = type;
			type = CompletionRecord.NORMAL;
		}

		this.type = type;
		this.value = value;
		this.target = target;
	}

	(0, _createClass3.default)(CompletionRecord, [{
		key: 'addExtra',


		/**
   * Easy access to value.addExtra.
   * Note: Returns a generator.
   * @param {Object} obj - Extra properties
   */
		value: function addExtra(obj) {
			return this.value.addExtra(obj);
		}
	}, {
		key: 'abrupt',
		get: function get() {
			return this.type !== CompletionRecord.NORMAL;
		}
	}], [{
		key: 'makeTypeError',
		value: function makeTypeError(realm, msg) {
			var err = void 0;
			if (msg instanceof Error) err = realm.TypeError.makeFrom(msg);else err = realm.TypeError.make(msg);
			return new CompletionRecord(CompletionRecord.THROW, err);
		}
	}, {
		key: 'makeReferenceError',
		value: function makeReferenceError(realm, msg) {
			var err = void 0;
			if (msg instanceof Error) err = realm.ReferenceError.makeFrom(msg);else err = realm.ReferenceError.make(msg);
			return new CompletionRecord(CompletionRecord.THROW, err);
		}
	}, {
		key: 'makeSyntaxError',
		value: function makeSyntaxError(realm, msg) {
			var err = void 0;
			if (msg instanceof Error) err = realm.SyntaxError.makeFrom(msg);else err = realm.SyntaxError.make(msg);
			return new CompletionRecord(CompletionRecord.THROW, err);
		}
	}, {
		key: 'makeRangeError',
		value: function makeRangeError(realm, msg) {
			var err = void 0;
			if (msg instanceof Error) err = realm.RangeError.makeFrom(msg);else err = realm.RangeError.make(msg);
			return new CompletionRecord(CompletionRecord.THROW, err);
		}
	}, {
		key: 'typeError',
		value: function typeError(msg) {
			return new CompletionRecord(CompletionRecord.THROW_STD, ['TypeError', msg]);
		}
	}, {
		key: 'referenceError',
		value: function referenceError(msg) {
			return new CompletionRecord(CompletionRecord.THROW_STD, ['ReferenceError', msg]);
		}
	}, {
		key: 'syntaxError',
		value: function syntaxError(msg) {
			return new CompletionRecord(CompletionRecord.THROW_STD, ['SyntaxError', msg]);
		}
	}, {
		key: 'rangeError',
		value: function rangeError(msg) {
			return new CompletionRecord(CompletionRecord.THROW_STD, ['RangeError', msg]);
		}
	}]);
	return CompletionRecord;
}();

module.exports = CompletionRecord;

CompletionRecord.NORMAL = 0;
CompletionRecord.BREAK = 1;
CompletionRecord.CONTINUE = 2;
CompletionRecord.RETURN = 3;
CompletionRecord.THROW = 4;
CompletionRecord.THROW_STD = 5;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(sortValArray),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(mergeValArray);

function sortValArray(arr, comp) {
	var mid, left, right;
	return _regenerator2.default.wrap(function sortValArray$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(arr.length < 2)) {
						_context.next = 2;
						break;
					}

					return _context.abrupt('return', arr);

				case 2:
					mid = Math.floor(arr.length / 2);
					return _context.delegateYield(sortValArray(arr.slice(0, mid), comp), 't0', 4);

				case 4:
					left = _context.t0;
					return _context.delegateYield(sortValArray(arr.slice(mid, arr.length), comp), 't1', 6);

				case 6:
					right = _context.t1;
					return _context.delegateYield(mergeValArray(left, right, comp), 't2', 8);

				case 8:
					return _context.abrupt('return', _context.t2);

				case 9:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

function mergeValArray(l, r, comp) {
	var result;
	return _regenerator2.default.wrap(function mergeValArray$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					result = [];

				case 1:
					if (!(l.length && r.length)) {
						_context2.next = 10;
						break;
					}

					return _context2.delegateYield(comp(l[0], r[0]), 't0', 3);

				case 3:
					if (!_context2.t0) {
						_context2.next = 7;
						break;
					}

					result.push(l.shift());
					_context2.next = 8;
					break;

				case 7:
					result.push(r.shift());

				case 8:
					_context2.next = 1;
					break;

				case 10:

					while (l.length) {
						result.push(l.shift());
					}while (r.length) {
						result.push(r.shift());
					}return _context2.abrupt('return', result);

				case 13:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

var GenDash = function () {
	function GenDash() {
		(0, _classCallCheck3.default)(this, GenDash);
	}

	(0, _createClass3.default)(GenDash, null, [{
		key: 'identify',
		value: /*#__PURE__*/_regenerator2.default.mark(function identify(value) {
			return _regenerator2.default.wrap(function identify$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return', value);

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, identify, this);
		})
	}, {
		key: 'map',
		value: /*#__PURE__*/_regenerator2.default.mark(function map(what, fx) {
			var out, i;
			return _regenerator2.default.wrap(function map$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							fx = fx || GenDash.identify;
							out = new Array(what.length);
							i = 0;

						case 3:
							if (!(i < what.length)) {
								_context4.next = 9;
								break;
							}

							return _context4.delegateYield(fx(what[i], i, what), 't0', 5);

						case 5:
							out[i] = _context4.t0;

						case 6:
							++i;
							_context4.next = 3;
							break;

						case 9:
							return _context4.abrupt('return', out);

						case 10:
						case 'end':
							return _context4.stop();
					}
				}
			}, map, this);
		})
	}, {
		key: 'each',
		value: /*#__PURE__*/_regenerator2.default.mark(function each(what, fx) {
			var i;
			return _regenerator2.default.wrap(function each$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							if (!(what == null)) {
								_context5.next = 2;
								break;
							}

							return _context5.abrupt('return', what);

						case 2:
							i = 0;

						case 3:
							if (!(i < what.length)) {
								_context5.next = 11;
								break;
							}

							return _context5.delegateYield(fx(what[i], i, what), 't0', 5);

						case 5:
							_context5.t1 = _context5.t0;

							if (!(false === _context5.t1)) {
								_context5.next = 8;
								break;
							}

							return _context5.abrupt('break', 11);

						case 8:
							++i;
							_context5.next = 3;
							break;

						case 11:
							return _context5.abrupt('return', what);

						case 12:
						case 'end':
							return _context5.stop();
					}
				}
			}, each, this);
		})
	}, {
		key: 'noop',
		value: /*#__PURE__*/_regenerator2.default.mark(function noop() {
			return _regenerator2.default.wrap(function noop$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
						case 'end':
							return _context6.stop();
					}
				}
			}, noop, this);
		})
	}, {
		key: 'sort',
		value: /*#__PURE__*/_regenerator2.default.mark(function sort(what, comp) {
			return _regenerator2.default.wrap(function sort$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							comp = comp || /*#__PURE__*/_regenerator2.default.mark(function _callee(left, right) {
								return _regenerator2.default.wrap(function _callee$(_context7) {
									while (1) {
										switch (_context7.prev = _context7.next) {
											case 0:
												return _context7.abrupt('return', left < right);

											case 1:
											case 'end':
												return _context7.stop();
										}
									}
								}, _callee, this);
							});
							return _context8.delegateYield(sortValArray(what, comp), 't0', 2);

						case 2:
							return _context8.abrupt('return', _context8.t0);

						case 3:
						case 'end':
							return _context8.stop();
					}
				}
			}, sort, this);
		})
	}, {
		key: 'values',
		value: /*#__PURE__*/_regenerator2.default.mark(function values(what) {
			var out, o;
			return _regenerator2.default.wrap(function values$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							out = [];
							_context9.t0 = _regenerator2.default.keys(what);

						case 2:
							if ((_context9.t1 = _context9.t0()).done) {
								_context9.next = 9;
								break;
							}

							o = _context9.t1.value;

							if (Object.hasOwnProperty(o)) {
								_context9.next = 6;
								break;
							}

							return _context9.abrupt('continue', 2);

						case 6:
							out.push(what[o]);
							_context9.next = 2;
							break;

						case 9:
							return _context9.abrupt('return', out);

						case 10:
						case 'end':
							return _context9.stop();
					}
				}
			}, values, this);
		})
	}, {
		key: 'keys',
		value: /*#__PURE__*/_regenerator2.default.mark(function keys(what) {
			var out, o;
			return _regenerator2.default.wrap(function keys$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							out = [];
							_context10.t0 = _regenerator2.default.keys(what);

						case 2:
							if ((_context10.t1 = _context10.t0()).done) {
								_context10.next = 9;
								break;
							}

							o = _context10.t1.value;

							if (Object.hasOwnProperty(o)) {
								_context10.next = 6;
								break;
							}

							return _context10.abrupt('continue', 2);

						case 6:
							out.push(o);
							_context10.next = 2;
							break;

						case 9:
							return _context10.abrupt('return', out);

						case 10:
						case 'end':
							return _context10.stop();
					}
				}
			}, keys, this);
		})
	}, {
		key: 'identity',
		value: /*#__PURE__*/_regenerator2.default.mark(function identity(value) {
			return _regenerator2.default.wrap(function identity$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.abrupt('return', value);

						case 1:
						case 'end':
							return _context11.stop();
					}
				}
			}, identity, this);
		})
	}, {
		key: 'syncGenHelper',
		value: function syncGenHelper(gen) {
			var val = gen.next();
			if (!val.done) {
				console.log('This code path uses a helper, but the actual method yielded...');
				throw new Error('This code path uses a helper, but the actual method yielded...');
			}
			return val.value;
		}
	}]);
	return GenDash;
}();

module.exports = GenDash;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(152);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(97);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(105);
var CompletionRecord = __webpack_require__(149);
var ClosureValue = __webpack_require__(155);
var ObjectValue = __webpack_require__(158);
var FutureValue = __webpack_require__(176);
var RegExpValue = __webpack_require__(177);
var PropertyDescriptor = __webpack_require__(156);
var ErrorValue = __webpack_require__(178);
var ArrayValue = __webpack_require__(174);
var EvaluatorInstruction = __webpack_require__(157);

var Frame = function Frame(type, o) {
	(0, _classCallCheck3.default)(this, Frame);

	this.type = type;
	for (var k in o) {
		this[k] = o[k];
	}
};

var Evaluator = function () {
	function Evaluator(realm, n, s) {
		(0, _classCallCheck3.default)(this, Evaluator);

		this.realm = realm;
		var that = this;
		this.lastValue = null;
		this.ast = n;
		this.defaultYieldPower = 5;
		this.yieldPower = this.defaultYieldPower;
		this.debug = false;
		this.profile = false;
		this.lastASTNodeProcessed = null;
		/**
   * @type {Object[]}
   * @property {Generator} generator
   * @property {string} type
   * @property {ast} ast
   */
		this.frames = [];
		if (n) this.pushAST(n, s);
	}

	(0, _createClass3.default)(Evaluator, [{
		key: 'pushAST',
		value: function pushAST(n, s) {
			var that = this;
			var gen = n ? this.branch(n, s) : /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return EvaluatorInstruction.stepMinor;

							case 2:
								return _context.abrupt('return', _context.sent);

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			})();
			this.pushFrame({ generator: gen, type: 'program', scope: s, ast: n });
		}
	}, {
		key: 'processLostFrames',
		value: function processLostFrames(frames) {
			for (var _iterator = frames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var f = _ref;

				if (f.profileName) {
					this.incrCtr('fxTime', f.profileName, Date.now() - f.entered);
				}
			}
		}
	}, {
		key: 'unwindStack',
		value: function unwindStack(target, canCrossFxBounds, label) {
			var finallyFrames = [];
			for (var i = 0; i < this.frames.length; ++i) {
				var t = this.frames[i].type;
				var match = t == target || target == 'return' && t == 'function';
				if (match && label) {
					match = this.frames[i].labels && this.frames[i].labels.indexOf(label) !== -1;
				}

				if (match) {
					var j = i + 1;
					for (; j < this.frames.length; ++j) {
						if (this.frames[j].type != 'finally') break;
					}var fr = this.frames[j];
					this.processLostFrames(this.frames.splice(0, i + 1));
					this.saveFrameShortcuts();
					Array.prototype.unshift.apply(this.frames, finallyFrames);
					return fr;
				} else if (target == 'return' && this.frames[i].retValue) {
					var _fr = this.frames[i];
					this.processLostFrames(this.frames.splice(0, i));
					this.saveFrameShortcuts();
					Array.prototype.unshift.apply(this.frames, finallyFrames);
					return _fr;
				} else if (!canCrossFxBounds && this.frames[i].type == 'function') {
					break;
				} else if (t == 'finally') {
					finallyFrames.push(this.frames[i]);
				}
			}
			return false;
		}
	}, {
		key: 'next',
		value: function next(lastValueOveride) {
			var frames = this.frames;

			//Implement proper tailcalls by hand.
			do {
				var top = frames[0];
				var result = void 0;
				//console.log(top.type, top.ast && top.ast.type);

				if (top.exception) {
					this.lastValue = top.exception;
					delete top.exception;
				} else if (top.retValue) {
					this.lastValue = top.retValue;
					delete top.retValue;
				}

				result = top.generator.next(lastValueOveride || this.lastValue);
				lastValueOveride = undefined;
				var val = result.value;

				if (val instanceof EvaluatorInstruction) {
					switch (val.type) {
						case 'branch':
							this.branchFrame(val.kind, val.ast, val.scope, val.extra);
							continue;
						case 'getEvaluator':
							//lastValueOveride = this;
							//continue;
							return this.next(this);
						case 'getRealm':
							return this.next(this.realm);
						case 'getScope':
							for (var i = 0; i < frames.length; ++i) {
								if (frames[i].scope) return this.next(frames[i].scope);
							}throw new Error('No scope');
						case 'waitForFramePop':
							continue;
						case 'framePushed':
							continue;
						case 'event':
						case 'step':
							if (this.instrument) this.instrument(this, val);
							return { done: false, value: val };
					}
				}

				if (val instanceof CompletionRecord) {
					this.processCompletionValueMeaning(val);
					this.lastValue = val.value;
					continue;
				}
				//if ( !val ) console.log("Bad val somewhere around", this.topFrame.type);
				if (this.instrument) this.instrument(this, val);

				if (val && val.then) {
					if (top && top.type !== 'await') {
						this.pushAwaitFrame(val);
					}
					return { done: false, value: val };
				}

				this.lastValue = val;
				if (result.done) {
					var lastFrame = this.popFrame();

					if (lastFrame.profileName) {
						this.processLostFrames([lastFrame]);
					}

					// Latient values can't cross function calls.
					// Dont do this, and you get coffeescript mode.
					if (lastFrame.type === 'function' && !lastFrame.returnLastValue) {
						this.lastValue = Value.undef;
					}

					if (frames.length === 0) {
						if (this.debug) {
							this.dumpProfilingInformation();
						}
						if (this.onCompletion) this.onCompletion(result.value);
						return { done: true, value: result.value };
					} else continue;
				}
			} while (false);

			return { done: false, value: this.lastValue };
		}
	}, {
		key: 'processCompletionValueMeaning',
		value: function processCompletionValueMeaning(val) {
			if (val.type === CompletionRecord.THROW_STD) {
				var msg = val.value[1];
				switch (val.value[0]) {
					case "TypeError":
						val = CompletionRecord.makeTypeError(this.realm, msg);
						break;
					case "RefrenceError":
						val = CompletionRecord.makeReferenceError(this.realm, msg);
						break;
					case "RangeError":
						val = CompletionRecord.makeReferenceError(this.realm, msg);
						break;
					case "SyntaxError":
						val = CompletionRecord.makeSyntaxError(this.realm, msg);
						break;
				}
			}
			if (!(val.value instanceof Value)) {
				if (val.value instanceof Error) {
					throw new Error('Value was an error: ' + val.value.stack);
				} else if (val.value.type) {
					switch (val.value.type) {
						case "TypeError":
							val.value = CompletionRecord.makeTypeError(this.realm, val.value.message).value;
					}
				} else {
					throw new Error('Value isnt of type Value, its: ' + val.value.toString());
				}
			}

			switch (val.type) {
				case CompletionRecord.CONTINUE:
					if (this.unwindStack('continue', false, val.target)) return true;
					throw new Error('Cant find matching loop frame for continue');
				case CompletionRecord.BREAK:
					if (this.unwindStack('loop', false, val.target)) return true;
					throw new Error('Cant find matching loop frame for break');
				case CompletionRecord.RETURN:
					var rfr = this.unwindStack('return', false);
					if (!rfr) throw new Error('Cant find function bounds.');
					rfr.retValue = val.value;
					return true;
				case CompletionRecord.THROW:
					//TODO: Fix this nonsense:
					var e = val.value.toNative();
					//val.value.native = e;

					var smallStack = void 0;
					if (e && e.stack) smallStack = e.stack.split(/\n/).slice(0, 4).join('\n');
					var stk = this.buildStacktrace(e).join('\n    ');
					var bestFrame = void 0;
					for (var i = 0; i < this.frames.length; ++i) {
						if (this.frames[i].ast) {
							bestFrame = this.frames[i];
							break;
						}
					}

					if (val.value instanceof ErrorValue) {
						if (this.realm.options.addExtraErrorInfoToStacks && val.value.extra) {
							stk += '\n-------------';
							for (var key in val.value.extra) {
								var vv = val.value.extra[key];
								if (vv instanceof Value) stk += '\n' + key + ' => ' + vv.debugString;else stk += '\n' + key + ' => ' + vv;
							}
						}
					}

					if (e instanceof Error) {
						e.stack = stk;
						if (smallStack && this.realm.options.addInternalStack) e.stack += '\n-------------\n' + smallStack;
						if (bestFrame) {
							e.range = bestFrame.ast.range;
							e.loc = bestFrame.ast.loc;
						}
					}

					if (val.value instanceof ErrorValue) {
						if (!val.value.has('stack')) {
							val.value.setImmediate('stack', Value.fromNative(stk));
							val.value.properties['stack'].enumerable = false;
						}
					}

					var tfr = this.unwindStack('catch', true);
					if (tfr) {
						tfr.exception = val;
						this.lastValue = val;
						return true;
					}
					var line = -1;
					if (this.topFrame.ast && this.topFrame.ast.attr) {
						line = this.topFrame.ast.attr.pos.start_line;
					}
					//console.log(this.buildStacktrace(val.value.toNative()));
					var v = val.value.toNative();
					if (this.onError) this.onError(v);
					throw v;
				case CompletionRecord.NORMAL:
					return false;
			}
		}
	}, {
		key: 'buildStacktrace',
		value: function buildStacktrace(e) {
			var lines = e ? [e.toString()] : [];
			for (var _iterator2 = this.frames, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
				var _ref2;

				if (_isArray2) {
					if (_i2 >= _iterator2.length) break;
					_ref2 = _iterator2[_i2++];
				} else {
					_i2 = _iterator2.next();
					if (_i2.done) break;
					_ref2 = _i2.value;
				}

				var f = _ref2;

				//if ( f.type !== 'function' ) continue;
				if (f.ast) {
					var line = 'at ' + (f.ast.srcName || f.ast.type) + ' ';
					if (f.ast.loc) line += '(<src>:' + f.ast.loc.start.line + ':' + f.ast.loc.start.column + ')';
					lines.push(line);
				}
			}
			return lines;
		}
	}, {
		key: 'pushFrame',
		value: function pushFrame(frame) {
			frame.srcAst = frame.ast;
			if (frame.yieldPower === undefined) frame.yieldPower = this.defaultYieldPower;
			this.frames.unshift(new Frame(frame.type, frame));
			this.saveFrameShortcuts();
		}
	}, {
		key: 'pushAwaitFrame',
		value: function pushAwaitFrame(val) {
			this.pushFrame({
				generator: /*#__PURE__*/_regenerator2.default.mark(function _callee2(f) {
					return _regenerator2.default.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									if (f.resolved) {
										_context2.next = 5;
										break;
									}

									_context2.next = 3;
									return f;

								case 3:
									_context2.next = 0;
									break;

								case 5:
									if (!f.successful) {
										_context2.next = 9;
										break;
									}

									return _context2.abrupt('return', f.value);

								case 9:
									return _context2.abrupt('return', new CompletionRecord(CompletionRecord.THROW, f.value));

								case 10:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee2, this);
				})(val),
				type: 'await'
			});
		}
	}, {
		key: 'popFrame',
		value: function popFrame() {
			var frame = this.frames.shift();
			this.saveFrameShortcuts();
			return frame;
		}
	}, {
		key: 'saveFrameShortcuts',
		value: function saveFrameShortcuts() {
			var prev = this.yieldPower;
			if (this.frames.length == 0) {
				this.topFrame = undefined;
				this.yieldPower = this.defaultYieldPower;
			} else {
				this.topFrame = this.frames[0];
				this.yieldPower = this.topFrame.yieldPower;
			}
		}
	}, {
		key: 'fromNative',
		value: function fromNative(native, x) {
			return this.realm.fromNative(native, x);
		}
	}, {
		key: 'generator',
		value: function generator() {
			return {
				next: this.next.bind(this),
				throw: function _throw(e) {
					throw e;
				},
				evaluator: this
			};
		}
	}, {
		key: 'breakFrames',
		value: function breakFrames() {}
	}, {
		key: 'resolveRef',
		value: /*#__PURE__*/_regenerator2.default.mark(function resolveRef(n, s, create) {
			var oldAST, r;
			return _regenerator2.default.wrap(function resolveRef$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							oldAST = this.topFrame.ast;

							this.topFrame.ast = n;
							return _context3.delegateYield(Evaluator.doResolveRef(n, s, create, this.branch.bind(this)), 't0', 3);

						case 3:
							r = _context3.t0;

							this.topFrame.ast = oldAST;
							return _context3.abrupt('return', r);

						case 6:
						case 'end':
							return _context3.stop();
					}
				}
			}, resolveRef, this);
		})
	}, {
		key: 'partialMemberExpression',
		value: /*#__PURE__*/_regenerator2.default.mark(function partialMemberExpression(left, n, s) {
			var right;
			return _regenerator2.default.wrap(function partialMemberExpression$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							if (!n.computed) {
								_context4.next = 7;
								break;
							}

							return _context4.delegateYield(this.branch(n.property, s), 't0', 2);

						case 2:
							right = _context4.t0;
							return _context4.delegateYield(left.get(right.toNative()), 't1', 4);

						case 4:
							return _context4.abrupt('return', _context4.t1);

						case 7:
							if (!(n.property.type == 'Identifier')) {
								_context4.next = 14;
								break;
							}

							if (left) {
								_context4.next = 10;
								break;
							}

							throw 'Cant index ' + n.property.name + ' of undefined';

						case 10:
							return _context4.delegateYield(left.get(n.property.name), 't2', 11);

						case 11:
							return _context4.abrupt('return', _context4.t2);

						case 14:
							if (left) {
								_context4.next = 16;
								break;
							}

							throw 'Cant index ' + n.property.value.toString() + ' of undefined';

						case 16:
							return _context4.delegateYield(left.get(n.property.value.toString()), 't3', 17);

						case 17:
							return _context4.abrupt('return', _context4.t3);

						case 18:
						case 'end':
							return _context4.stop();
					}
				}
			}, partialMemberExpression, this);
		})

		//NOTE: Returns generator, fast return yield *;

	}, {
		key: 'doBinaryEvaluation',
		value: function doBinaryEvaluation(operator, left, right) {
			switch (operator) {
				case '==':
					return left.doubleEquals(right);
				case '!=':
					return left.notEquals(right);
				case '===':
					return left.tripleEquals(right);
				case '!==':
					return left.doubleNotEquals(right);
				case '+':
					return left.add(right);
				case '-':
					return left.subtract(right);
				case '*':
					return left.multiply(right);
				case '/':
					return left.divide(right);
				case '%':
					return left.mod(right);
				case '|':
					return left.bitOr(right);
				case '^':
					return left.bitXor(right);
				case '&':
					return left.bitAnd(right);
				case 'in':
					return right.inOperator(left);
				case 'instanceof':
					if (!right.call) {
						return (/*#__PURE__*/_regenerator2.default.mark(function _callee3() {
								return _regenerator2.default.wrap(function _callee3$(_context5) {
									while (1) {
										switch (_context5.prev = _context5.next) {
											case 0:
												_context5.next = 2;
												return CompletionRecord.typeError("Right-hand side of 'instanceof' is not callable");

											case 2:
											case 'end':
												return _context5.stop();
										}
									}
								}, _callee3, this);
							})()
						);
					}
					return left.instanceOf(right);
				case '>':
					return left.gt(right);
				case '<':
					return left.lt(right);
				case '>=':
					return left.gte(right);
				case '<=':
					return left.lte(right);
				case '<<':
					return left.shiftLeft(right);
				case '>>':
					return left.shiftRight(right);
				case '>>>':
					return left.shiftRightZF(right);
				case '**':
					return left.pow(right);
				default:
					throw new Error('Unknown binary operator: ' + operator);
			}
		}
	}, {
		key: 'branchFrame',
		value: function branchFrame(type, n, s, extra) {
			var frame = { generator: this.branch(n, s), type: type, scope: s, ast: n };

			if (extra) {
				for (var k in extra) {
					frame[k] = extra[k];
				}
				if (extra.profileName) {
					frame.entered = Date.now();
				}
			}
			this.pushFrame(frame);
			return EvaluatorInstruction.framePushed;
		}
	}, {
		key: 'beforeNode',
		value: function beforeNode(n) {
			var tf = this.topFrame;
			var state = { top: tf, ast: tf.ast, node: n };
			this.lastASTNodeProcessed = n;
			if (this.debug) this.incrCtr('astInvocationCount', n.type);
			tf.ast = n;
			return state;
		}
	}, {
		key: 'afterNode',
		value: function afterNode(state, r) {
			var tf = this.topFrame;
			tf.value = r;
			tf.ast = state.ast;
		}

		/**
   * @private
   * @param {object} n - AST Node to dispatch
   * @param {Scope} s - Current evaluation scope
   */

	}, {
		key: 'branch',
		value: function branch(n, s) {
			if (!n.dispatch) {
				var nextStep = this.findNextStep(n.type);

				n.dispatch = /*#__PURE__*/_regenerator2.default.mark(function _callee4(that, n, s) {
					var state, result;
					return _regenerator2.default.wrap(function _callee4$(_context6) {
						while (1) {
							switch (_context6.prev = _context6.next) {
								case 0:
									state = that.beforeNode(n);
									return _context6.delegateYield(nextStep(that, n, s), 't0', 2);

								case 2:
									result = _context6.t0;

									if (!(result instanceof CompletionRecord)) {
										_context6.next = 7;
										break;
									}

									_context6.next = 6;
									return result;

								case 6:
									result = _context6.sent;

								case 7:
									if (!(result && result.then)) {
										_context6.next = 11;
										break;
									}

									_context6.next = 10;
									return result;

								case 10:
									result = _context6.sent;

								case 11:

									that.afterNode(state, result);

									return _context6.abrupt('return', result);

								case 13:
								case 'end':
									return _context6.stop();
							}
						}
					}, _callee4, this);
				});
			}
			return n.dispatch(this, n, s);
		}
	}, {
		key: 'incrCtr',
		value: function incrCtr(n, c, v) {
			if (v === undefined) v = 1;
			if (!this.profile) this.profile = {};
			var o = this.profile[n];
			if (!o) {
				o = {};
				this.profile[n] = o;
			}
			c = c || '???';
			if (c in o) o[c] += v;else o[c] = v;
		}
	}, {
		key: 'dumpProfilingInformation',
		value: function dumpProfilingInformation() {
			var _this = this;

			function lpad(s, l) {
				return s + new Array(Math.max(l - s.length, 1)).join(' ');
			}

			if (!this.profile) {
				console.log('===== Profile: None collected =====');
				return;
			}

			console.log('===== Profile =====');

			var _loop = function _loop(sec) {
				console.log(sec + ' Stats:');
				var o = _this.profile[sec];
				var okeys = (0, _keys2.default)(o).sort(function (a, b) {
					return o[b] - o[a];
				});
				for (var _iterator3 = okeys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
					var _ref3;

					if (_isArray3) {
						if (_i3 >= _iterator3.length) break;
						_ref3 = _iterator3[_i3++];
					} else {
						_i3 = _iterator3.next();
						if (_i3.done) break;
						_ref3 = _i3.value;
					}

					var name = _ref3;

					console.log('  ' + lpad(name, 20) + ': ' + o[name]);
				}
			};

			for (var sec in this.profile) {
				_loop(sec);
			}
			console.log('=================');
		}
	}, {
		key: 'insterment',
		get: function get() {
			return this.instrument;
		},
		set: function set(v) {
			this.instrument = v;
		}
	}]);
	return Evaluator;
}();

Evaluator.doResolveRef = __webpack_require__(175).doResolveRef;
Evaluator.prototype.findNextStep = __webpack_require__(175).findNextStep;

module.exports = Evaluator;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154);
module.exports = __webpack_require__(15).Object.keys;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(9);
var $keys = __webpack_require__(51);

__webpack_require__(19)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _keys = __webpack_require__(152);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(105);
var PropertyDescriptor = __webpack_require__(156);
var ObjectValue = __webpack_require__(158);
var ArrayValue = __webpack_require__(174);
var EvaluatorInstruction = __webpack_require__(157);
var EvaluatorHandlers = void 0;

/**
 * Represents a value that maps directly to an untrusted local value.
 */

var ClosureValue = function (_ObjectValue) {
	(0, _inherits3.default)(ClosureValue, _ObjectValue);

	/**
  * @param {object} func - AST Node for function
  * @param {Scope} scope - Functions up-values.
  */
	function ClosureValue(func, scope) {
		(0, _classCallCheck3.default)(this, ClosureValue);

		var realm = scope.realm;

		var _this = (0, _possibleConstructorReturn3.default)(this, (ClosureValue.__proto__ || (0, _getPrototypeOf2.default)(ClosureValue)).call(this, realm, realm.FunctionPrototype));

		_this.func = func;
		_this.funcSourceAST = func;
		_this.scope = scope;
		_this.returnLastValue = false;
		_this.properties['prototype'] = new PropertyDescriptor(new ObjectValue(realm), false);
		_this.properties['name'] = new PropertyDescriptor(realm.fromNative(func.id ? func.id.name : undefined), false);
		_this.properties['length'] = new PropertyDescriptor(realm.fromNative(func.params.length), false);
		return _this;
	}

	(0, _createClass3.default)(ClosureValue, [{
		key: 'toNative',
		value: function toNative() {
			return Value.createNativeBookmark(this, this.scope.realm);
		}
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			return _regenerator2.default.wrap(function doubleEquals$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', other === this ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, doubleEquals, this);
		})

		/**
   *
   * @param {Value} thiz
   * @param {Value[]} args
   * @param {Scope} scope
   */

	}, {
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args, scope, extra) {
			var invokeScope, obj, v, fn, n, argn, argvars, argsObj, i, vv, _v, calleeProp, lengthProp, _i, p, name, rest, def, _name, ref, opts, result;

			return _regenerator2.default.wrap(function call$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							//TODO: This way of scoping is entirelly wrong.
							if (!scope) scope = this.scope;
							invokeScope = void 0;

							if (this.boundScope) {
								invokeScope = this.boundScope.createChild();
								invokeScope.writeTo = this.boundScope.object;
								invokeScope.thiz = this.thiz || /* thiz ||*/this.boundScope.thiz;
							} else {
								invokeScope = this.scope.createChild();
								invokeScope.thiz = this.thiz || thiz;
							}

							if (this.func.strict === true) invokeScope.strict = true;

							if (this.func.id) {
								invokeScope.add(this.func.id.name, this);
							}

							obj = this.scope.object;
							/*
       if ( this.func.upvars ) {
       	for ( let n in this.func.upvars ) {
       		//TODO: There should be a method that does this.
       		invokeScope.object.rawSetProperty(n, obj.properties[n]);
       	}
       }
       */

							//Do Var Hoisting

							if (this.func.vars) {
								for (v in this.func.vars) {
									invokeScope.add(v, Value.undef);
									invokeScope.object.properties[v].isVariable = true;
								}
							}

							/*
       if ( this.func.funcs ) {
       	for ( let fn in this.func.funcs ) {
       		let n = this.func.funcs[fn];
       		let closure = new ClosureValue(n, scope);
       		invokeScope.add(n.id.name, closure);
       	}
       }
       */

							// Just a total guess that this is correct behavior...
							if (!invokeScope.strict && this.func.funcs) {
								for (fn in this.func.funcs) {
									n = this.func.funcs[fn];

									invokeScope.add(n.id.name, Value.undef);
								}
							}

							argn = Math.max(args.length, this.func.params.length);
							argvars = new Array(argn);
							argsObj = new ObjectValue(invokeScope.realm);

							argsObj.clazz = 'Arguments';

							i = 0;

						case 13:
							if (!(i < argn)) {
								_context2.next = 26;
								break;
							}

							vv = Value.undef;

							if (i < args.length) vv = args[i];

							_v = new PropertyDescriptor(vv);

							argvars[i] = _v;

							if (!invokeScope.strict) {
								_context2.next = 22;
								break;
							}

							return _context2.delegateYield(argsObj.set(i, vv), 't0', 20);

						case 20:
							_context2.next = 23;
							break;

						case 22:
							argsObj.rawSetProperty(i, _v);

						case 23:
							++i;
							_context2.next = 13;
							break;

						case 26:
							if (invokeScope.strict) {
								_context2.next = 31;
								break;
							}

							calleeProp = new PropertyDescriptor(invokeScope.realm.fromNative(args.length));

							calleeProp.enumerable = false;
							argsObj.rawSetProperty('callee', calleeProp);
							return _context2.delegateYield(argsObj.set('callee', this), 't1', 31);

						case 31:
							lengthProp = new PropertyDescriptor(invokeScope.realm.fromNative(args.length));

							lengthProp.enumerable = false;
							argsObj.rawSetProperty('length', lengthProp);

							invokeScope.add('arguments', argsObj);

							_i = 0;

						case 36:
							if (!(_i < this.func.params.length)) {
								_context2.next = 59;
								break;
							}

							p = this.func.params[_i];

							if (p.type === "AssignmentPattern") {
								p = p.left;
								//TODO: Calculate default value
							}

							if (!(p.type === 'RestElement')) {
								_context2.next = 45;
								break;
							}

							name = this.func.params[_i].argument.name;
							rest = args.slice(_i);

							invokeScope.add(name, ArrayValue.make(rest, scope.realm));
							_context2.next = 56;
							break;

						case 45:
							def = Value.undef;

							if (!(p.type === "Identifier")) {
								_context2.next = 53;
								break;
							}

							p = { id: p };
							if (!p.id) console.log("Wrong P", (0, _keys2.default)(this.func.vars), p);
							_name = p.id ? p.id.name : undefined;


							if (scope.strict) {
								//Scope is strict, so we make a copy for the args variable
								invokeScope.add(_name, _i < args.length ? args[_i] : def);
							} else {
								//Scope isnt strict, magic happens.
								invokeScope.object.rawSetProperty(_name, argvars[_i]);
							}
							_context2.next = 56;
							break;

						case 53:
							return _context2.delegateYield(EvaluatorHandlers.doResolveRef(p, invokeScope), 't2', 54);

						case 54:
							ref = _context2.t2;
							return _context2.delegateYield(ref.setValue(args.length ? args[_i] : def), 't3', 56);

						case 56:
							++_i;
							_context2.next = 36;
							break;

						case 59:
							opts = { returnLastValue: this.returnLastValue, creator: this };

							if (extra && extra.evaluator && extra.evaluator.debug) {
								opts['profileName'] = extra.callNode.callee.srcName;
							}
							if (extra && extra.callee) {
								opts.callee = extra.callee;
							}
							if (this.func.nonUserCode) {
								opts.yieldPower = -1;
							}

							_context2.next = 65;
							return EvaluatorInstruction.branch('function', this.func.body, invokeScope, opts);

						case 65:
							result = _context2.sent;
							return _context2.abrupt('return', result);

						case 67:
						case 'end':
							return _context2.stop();
					}
				}
			}, call, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			if (this.func && this.func.id) return '[Function ' + this.func.id.name + ']';
			return '[Function]';
		}
	}, {
		key: 'truthy',
		get: function get() {
			return true;
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return 'function';
		}
	}, {
		key: 'specTypeName',
		get: function get() {
			return 'object';
		}
	}]);
	return ClosureValue;
}(ObjectValue);

ClosureValue.prototype.clazz = 'Function';

module.exports = ClosureValue;

EvaluatorHandlers = __webpack_require__(175);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(105);
var CompletionRecord = __webpack_require__(149);
var EvaluatorInstruction = __webpack_require__(157);
var GenDash = __webpack_require__(150);

var serial = 0;

//TODO: We should call this a PropertyDescriptor, not a variable.

var PropertyDescriptor = function () {
	function PropertyDescriptor(value, enumerable) {
		(0, _classCallCheck3.default)(this, PropertyDescriptor);

		this.value = value;
		this.serial = serial++;
		this.configurable = true;
		this.enumerable = enumerable !== undefined ? !!enumerable : true;
		this.writable = true;
		this.getter = undefined;
		this.setter = undefined;
		this.variable = false;
	}

	(0, _createClass3.default)(PropertyDescriptor, [{
		key: 'getValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function getValue(thiz) {
			var s;
			return _regenerator2.default.wrap(function getValue$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							thiz = thiz || Value.null;

							if (!this.getter) {
								_context.next = 7;
								break;
							}

							_context.next = 4;
							return EvaluatorInstruction.getScope;

						case 4:
							s = _context.sent;
							return _context.delegateYield(this.getter.call(thiz, [], s), 't0', 6);

						case 6:
							return _context.abrupt('return', _context.t0);

						case 7:
							return _context.abrupt('return', this.value);

						case 8:
						case 'end':
							return _context.stop();
					}
				}
			}, getValue, this);
		})
	}, {
		key: 'setValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function setValue(thiz, to, s) {
			return _regenerator2.default.wrap(function setValue$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							thiz = thiz || Value.null;

							if (!this.setter) {
								_context2.next = 10;
								break;
							}

							_context2.t0 = s;

							if (_context2.t0) {
								_context2.next = 7;
								break;
							}

							_context2.next = 6;
							return EvaluatorInstruction.getScope;

						case 6:
							_context2.t0 = _context2.sent;

						case 7:
							s = _context2.t0;
							return _context2.delegateYield(this.setter.call(thiz, [to], s), 't1', 9);

						case 9:
							return _context2.abrupt('return', _context2.t1);

						case 10:
							if (this.writable) {
								_context2.next = 16;
								break;
							}

							if (!(!s || !s.strict)) {
								_context2.next = 13;
								break;
							}

							return _context2.abrupt('return', this.value);

						case 13:
							_context2.next = 15;
							return CompletionRecord.typeError("Can't write to non-writable value.");

						case 15:
							return _context2.abrupt('return', _context2.sent);

						case 16:
							this.value = to;
							return _context2.abrupt('return', this.value);

						case 18:
						case 'end':
							return _context2.stop();
					}
				}
			}, setValue, this);
		})
	}, {
		key: 'setValueImmediate',
		value: function setValueImmediate(thiz, to, s) {
			return GenDash.syncGenHelper(this.setValue(thiz, to, s));
		}
	}, {
		key: 'direct',
		get: function get() {
			return !this.getter && !this.setter && this.writable;
		}
	}]);
	return PropertyDescriptor;
}();

module.exports = PropertyDescriptor;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EvaluatorInstruction = function () {
	(0, _createClass3.default)(EvaluatorInstruction, null, [{
		key: 'branch',
		value: function branch(kind, ast, scope, extra) {
			var ei = new EvaluatorInstruction('branch');
			ei.kind = kind;
			ei.ast = ast;
			ei.scope = scope;
			ei.extra = extra;
			return ei;
		}
	}]);

	function EvaluatorInstruction(type) {
		(0, _classCallCheck3.default)(this, EvaluatorInstruction);

		this.type = type;
	}

	(0, _createClass3.default)(EvaluatorInstruction, [{
		key: 'mark',
		value: function mark(o) {
			for (var k in o) {
				this[k] = o[k];
			}return this;
		}
	}]);
	return EvaluatorInstruction;
}();

EvaluatorInstruction.stepMinor = new EvaluatorInstruction('step');
EvaluatorInstruction.stepMajor = new EvaluatorInstruction('step');
EvaluatorInstruction.stepStatement = new EvaluatorInstruction('step');
EvaluatorInstruction.waitForFramePop = new EvaluatorInstruction('waitForFramePop');
EvaluatorInstruction.framePushed = new EvaluatorInstruction('framePushed');
EvaluatorInstruction.getEvaluator = new EvaluatorInstruction('getEvaluator');
EvaluatorInstruction.getRealm = new EvaluatorInstruction('getRealm');
EvaluatorInstruction.getScope = new EvaluatorInstruction('getScope');
EvaluatorInstruction.eventLoopBodyStart = new EvaluatorInstruction('event').mark({ event: 'loopBodyStart' });
module.exports = EvaluatorInstruction;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _getOwnPropertyNames = __webpack_require__(102);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _freeze = __webpack_require__(159);

var _freeze2 = _interopRequireDefault(_freeze);

var _seal = __webpack_require__(162);

var _seal2 = _interopRequireDefault(_seal);

var _getIterator2 = __webpack_require__(97);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _setPrototypeOf = __webpack_require__(84);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(105);
var PropertyDescriptor = __webpack_require__(156);
var CompletionRecord = __webpack_require__(149);
var PrimitiveValue = __webpack_require__(165);
var NullValue = __webpack_require__(173);
var GenDash = __webpack_require__(150);
var EvaluatorInstruction = __webpack_require__(157);

var alwaysFalse = function alwaysFalse() {
	return false;
};
var undefinedReturningGenerator = /*#__PURE__*/_regenerator2.default.mark(function undefinedReturningGenerator() {
	return _regenerator2.default.wrap(function undefinedReturningGenerator$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					return _context.abrupt('return', Value.undef);

				case 1:
				case 'end':
					return _context.stop();
			}
		}
	}, undefinedReturningGenerator, this);
});

var ObjRefrence = function () {
	function ObjRefrence(object, name, ctxthis) {
		(0, _classCallCheck3.default)(this, ObjRefrence);

		this.object = object;
		this.name = name;
		this.ctxthis = ctxthis;
	}

	(0, _createClass3.default)(ObjRefrence, [{
		key: 'del',
		value: function del(s) {
			if (s.strict) return this.object.deleteStrict(this.name);else return this.object.delete(this.name);
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.object.get(this.name, this.ctxthis || this.object);
		}
	}, {
		key: 'setValue',
		value: function setValue(value, s) {
			return this.object.set(this.name, value);
		}
	}]);
	return ObjRefrence;
}();

/**
 * Represents an Object.
 */


var ObjectValue = function (_Value) {
	(0, _inherits3.default)(ObjectValue, _Value);

	function ObjectValue(realm, proto) {
		(0, _classCallCheck3.default)(this, ObjectValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ObjectValue.__proto__ || (0, _getPrototypeOf2.default)(ObjectValue)).call(this));

		_this.extensable = true;
		_this.proto = null;
		if (proto) _this.eraseAndSetPrototype(proto);else if (realm) _this.eraseAndSetPrototype(realm.ObjectPrototype);else _this.properties = (0, _create2.default)(null);
		return _this;
	}

	(0, _createClass3.default)(ObjectValue, [{
		key: 'ref',
		value: function ref(name, ctxthis) {
			var existing = this.properties[name];
			var thiz = this;

			var get = void 0;
			if (existing) {
				return new ObjRefrence(this, name, ctxthis);
			} else {
				return {
					name: name,
					object: thiz,
					isVariable: false,
					del: alwaysFalse,
					getValue: undefinedReturningGenerator,
					setValue: function setValue(to, s) {
						return this.object.set(this.name, to);
					}
				};
			}
		}

		//Note: Returns generator by tailcall.

	}, {
		key: 'set',
		value: function set(name, value, extra) {
			var thiz = this;
			extra = extra || {};

			if (!Object.prototype.hasOwnProperty.call(this.properties, name)) {
				if (this.properties[name] && this.properties[name].setter) {
					return this.properties[name].setValue(this, value);
				}
				if (!this.extensable) {
					//TODO: Should we throw here in strict mode?
					return Value.undef.fastGen();
				}
				var v = new PropertyDescriptor(value);
				v.enumerable = 'enumerable' in extra ? extra.enumerable : true;
				this.properties[name] = v;

				return v.setValue(this, value);
			}

			return this.properties[name].setValue(this, value);
		}
	}, {
		key: 'rawSetProperty',
		value: function rawSetProperty(name, value) {
			this.properties[name] = value;
		}
	}, {
		key: 'setImmediate',
		value: function setImmediate(name, value) {
			if (name in this.properties) {
				if (Object.prototype.hasOwnProperty.call(this.properties, name)) {
					if (this.properties[name].direct) {
						this.properties[name].value = value;
						return;
					}
				}
			} else if (this.extensable) {
				var v = new PropertyDescriptor(value);
				v.del = this.delete.bind(this, name);
				this.properties[name] = v;
				return;
			}
			return GenDash.syncGenHelper(this.set(name, value));
		}
	}, {
		key: 'has',
		value: function has(name) {
			return name in this.properties;
		}
	}, {
		key: 'delete',
		value: function _delete(name) {
			var po = this.properties[name];
			if (!po.configurable) {
				return false;
			}
			return delete this.properties[name];
		}
	}, {
		key: 'deleteStrict',
		value: function deleteStrict(name) {
			var po = this.properties[name];
			if (!po.configurable) {
				return CompletionRecord.typeError("Can't delete nonconfigurable object");
			}
			return delete this.properties[name];
		}
	}, {
		key: 'toNative',
		value: function toNative(realm) {
			var _this2 = this;

			//TODO: This is really a mess and should maybe be somewhere else.
			var bk = Value.createNativeBookmark(this, realm);
			if (this.jsTypeName === 'function') return bk;

			var _loop = function _loop(p) {
				var name = p; //work around bug in FF where the scope of p is incorrect
				var po = _this2.properties[name];
				if (Object.prototype.hasOwnProperty.call(bk, name)) return 'continue';
				if (bk[p] !== undefined) return 'continue';

				(0, _defineProperty2.default)(bk, p, {
					get: function get() {
						var c = _this2.properties[name].value;
						return c === undefined ? undefined : c.toNative();
					},
					set: function set(v) {
						_this2.properties[name].value = Value.fromNative(v, realm);
					},
					enumerable: po.enumerable,
					configurable: po.configurable
				});
			};

			for (var p in this.properties) {
				var _ret = _loop(p);

				if (_ret === 'continue') continue;
			}
			return bk;
		}
	}, {
		key: 'toJS',
		value: function toJS() {
			var out = {};
			for (var p in this.properties) {
				var _name = p; //work around bug in FF where the scope of p is incorrect
				var po = this.properties[_name];
				if (!po.enumerable) continue;
				out[_name] = po.value.toJS();
			}
			return out;
		}
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.delegateYield(this.toPrimitiveValue(), 't0', 1);

						case 1:
							_context2.t1 = other;
							return _context2.delegateYield(_context2.t0.add(_context2.t1), 't2', 3);

						case 3:
							return _context2.abrupt('return', _context2.t2);

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			var hint, pv, pthis;
			return _regenerator2.default.wrap(function doubleEquals$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							if (!(other === this)) {
								_context3.next = 2;
								break;
							}

							return _context3.abrupt('return', Value.true);

						case 2:
							if (!(other instanceof ObjectValue)) {
								_context3.next = 4;
								break;
							}

							return _context3.abrupt('return', Value.false);

						case 4:
							if (!(other instanceof PrimitiveValue)) {
								_context3.next = 10;
								break;
							}

							hint = other.jsTypeName == 'string' ? 'string' : 'number';
							return _context3.delegateYield(this.toPrimitiveValue(hint), 't0', 7);

						case 7:
							pv = _context3.t0;
							return _context3.delegateYield(pv.doubleEquals(other), 't1', 9);

						case 9:
							return _context3.abrupt('return', _context3.t1);

						case 10:
							return _context3.delegateYield(this.toPrimitiveValue('string'), 't2', 11);

						case 11:
							pthis = _context3.t2;
							return _context3.delegateYield(pthis.doubleEquals(other), 't3', 13);

						case 13:
							return _context3.abrupt('return', _context3.t3);

						case 14:
						case 'end':
							return _context3.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'inOperator',
		value: /*#__PURE__*/_regenerator2.default.mark(function inOperator(str) {
			var svalue;
			return _regenerator2.default.wrap(function inOperator$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.delegateYield(str.toStringValue(), 't0', 1);

						case 1:
							svalue = _context4.t0;
							return _context4.abrupt('return', this.has(svalue.toNative()) ? Value.true : Value.false);

						case 3:
						case 'end':
							return _context4.stop();
					}
				}
			}, inOperator, this);
		})
	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, ctxthis) {
			var existing;
			return _regenerator2.default.wrap(function get$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							existing = this.properties[name];

							if (existing) {
								_context5.next = 8;
								break;
							}

							if (!this.proto) {
								_context5.next = 7;
								break;
							}

							return _context5.delegateYield(this.proto.get(name, ctxthis || this), 't0', 4);

						case 4:
							return _context5.abrupt('return', _context5.t0);

						case 7:
							return _context5.abrupt('return', Value.undef);

						case 8:
							if (!existing.direct) {
								_context5.next = 10;
								break;
							}

							return _context5.abrupt('return', existing.value);

						case 10:
							return _context5.delegateYield(existing.getValue(ctxthis || this), 't1', 11);

						case 11:
							return _context5.abrupt('return', _context5.t1);

						case 12:
						case 'end':
							return _context5.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'getImmediate',
		value: function getImmediate(name, ctxthis) {
			var existing = this.properties[name];
			if (!existing) return Value.undef;
			if (existing.direct) return existing.value;
			return GenDash.syncGenHelper(existing.getValue(ctxthis || this));
		}
	}, {
		key: 'instanceOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function instanceOf(other) {
			return _regenerator2.default.wrap(function instanceOf$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							if (other.constructorOf) {
								_context6.next = 2;
								break;
							}

							return _context6.abrupt('return', Value.false);

						case 2:
							return _context6.delegateYield(other.constructorOf(this), 't0', 3);

						case 3:
							return _context6.abrupt('return', _context6.t0);

						case 4:
						case 'end':
							return _context6.stop();
					}
				}
			}, instanceOf, this);
		})
	}, {
		key: 'constructorOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function constructorOf(what) {
			var target, realm, pt, checked;
			return _regenerator2.default.wrap(function constructorOf$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.delegateYield(this.get('prototype'), 't0', 1);

						case 1:
							target = _context7.t0;
							_context7.next = 4;
							return EvaluatorInstruction.getRealm;

						case 4:
							realm = _context7.sent;
							pt = what.getPrototype(realm);
							checked = [];

						case 7:
							if (!pt) {
								_context7.next = 16;
								break;
							}

							if (!(pt === target)) {
								_context7.next = 10;
								break;
							}

							return _context7.abrupt('return', Value.true);

						case 10:
							checked.push(pt);
							pt = pt.getPrototype(realm);

							if (!(checked.indexOf(pt) !== -1)) {
								_context7.next = 14;
								break;
							}

							return _context7.abrupt('return', Value.false);

						case 14:
							_context7.next = 7;
							break;

						case 16:
							return _context7.abrupt('return', Value.false);

						case 17:
						case 'end':
							return _context7.stop();
					}
				}
			}, constructorOf, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			var p;
			return _regenerator2.default.wrap(function observableProperties$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							_context8.t0 = _regenerator2.default.keys(this.properties);

						case 1:
							if ((_context8.t1 = _context8.t0()).done) {
								_context8.next = 9;
								break;
							}

							p = _context8.t1.value;

							if (this.properties[p].enumerable) {
								_context8.next = 5;
								break;
							}

							return _context8.abrupt('continue', 1);

						case 5:
							_context8.next = 7;
							return realm.fromNative(p);

						case 7:
							_context8.next = 1;
							break;

						case 9:
							return _context8.abrupt('return');

						case 10:
						case 'end':
							return _context8.stop();
					}
				}
			}, observableProperties, this);
		})
	}, {
		key: 'getPropertyValueMap',
		value: function getPropertyValueMap() {
			var list = {};
			for (var p in this.properties) {
				var v = this.properties[p];
				if (v.value) {
					list[p] = v.value;
				}
			}
			return list;
		}
	}, {
		key: 'hasOwnProperty',
		value: function hasOwnProperty(name) {
			return Object.prototype.hasOwnProperty.call(this.properties, name);
		}
	}, {
		key: 'setPrototype',
		value: function setPrototype(val) {
			if (!this.properties) return this.eraseAndSetPrototype(val);
			if (val === null || val === undefined || val instanceof NullValue) {
				(0, _setPrototypeOf2.default)(this.properties, null);
				this.proto = null;
				return;
			}
			this.proto = val;
			if (val.properties) (0, _setPrototypeOf2.default)(this.properties, val.properties);
		}
	}, {
		key: 'eraseAndSetPrototype',
		value: function eraseAndSetPrototype(val) {
			if (val === null || val === undefined || val instanceof NullValue) {
				this.proto = null;
				this.properties = (0, _create2.default)(null);
			} else {
				this.proto = val;
				this.properties = (0, _create2.default)(val.properties);
			}
		}
	}, {
		key: 'getPrototype',
		value: function getPrototype() {
			return this.proto;
		}
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			var methodNames, realm, _iterator, _isArray, _i, _ref, _name2, method, rescr, res;

			return _regenerator2.default.wrap(function toPrimitiveValue$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							methodNames = void 0;
							realm = void 0;

							if (preferedType == 'string') {
								methodNames = ['toString', 'valueOf'];
							} else {
								methodNames = ['valueOf', 'toString'];
							}

							_iterator = methodNames, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

						case 4:
							if (!_isArray) {
								_context9.next = 10;
								break;
							}

							if (!(_i >= _iterator.length)) {
								_context9.next = 7;
								break;
							}

							return _context9.abrupt('break', 41);

						case 7:
							_ref = _iterator[_i++];
							_context9.next = 14;
							break;

						case 10:
							_i = _iterator.next();

							if (!_i.done) {
								_context9.next = 13;
								break;
							}

							return _context9.abrupt('break', 41);

						case 13:
							_ref = _i.value;

						case 14:
							_name2 = _ref;
							return _context9.delegateYield(this.get(_name2), 't0', 16);

						case 16:
							method = _context9.t0;

							if (!(method && method.call)) {
								_context9.next = 39;
								break;
							}

							if (realm) {
								_context9.next = 22;
								break;
							}

							_context9.next = 21;
							return EvaluatorInstruction.getRealm;

						case 21:
							realm = _context9.sent;

						case 22:
							return _context9.delegateYield(method.call(this, [], realm.globalScope), 't1', 23);

						case 23:
							_context9.next = 25;
							return _context9.t1;

						case 25:
							rescr = _context9.sent;
							//TODO: There should be more aruments here
							res = Value.undef;

							if (rescr instanceof CompletionRecord) {
								_context9.next = 31;
								break;
							}

							res = rescr;
							_context9.next = 37;
							break;

						case 31:
							if (!(rescr.type == CompletionRecord.RETURN)) {
								_context9.next = 35;
								break;
							}

							res = rescr.value;
							_context9.next = 37;
							break;

						case 35:
							if (!(rescr.type != CompletionRecord.NORMAL)) {
								_context9.next = 37;
								break;
							}

							return _context9.abrupt('continue', 39);

						case 37:
							if (!(res.specTypeName !== 'object')) {
								_context9.next = 39;
								break;
							}

							return _context9.abrupt('return', res);

						case 39:
							_context9.next = 4;
							break;

						case 41:
							_context9.next = 43;
							return CompletionRecord.typeError('Cannot convert object to primitive value');

						case 43:
							return _context9.abrupt('return', _context9.sent);

						case 44:
						case 'end':
							return _context9.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			var prim;
			return _regenerator2.default.wrap(function toNumberValue$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							return _context10.delegateYield(this.toPrimitiveValue('number'), 't0', 1);

						case 1:
							prim = _context10.t0;
							return _context10.delegateYield(prim.toNumberValue(), 't1', 3);

						case 3:
							return _context10.abrupt('return', _context10.t1);

						case 4:
						case 'end':
							return _context10.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'toObjectValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toObjectValue(realm) {
			return _regenerator2.default.wrap(function toObjectValue$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.abrupt('return', this);

						case 1:
						case 'end':
							return _context11.stop();
					}
				}
			}, toObjectValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			var prim, gen;
			return _regenerator2.default.wrap(function toStringValue$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							return _context12.delegateYield(this.toPrimitiveValue('string'), 't0', 1);

						case 1:
							prim = _context12.t0;
							gen = prim.toStringValue();
							return _context12.delegateYield(gen, 't1', 4);

						case 4:
							return _context12.abrupt('return', _context12.t1);

						case 5:
						case 'end':
							return _context12.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'makeImmutable',
		value: function makeImmutable() {
			for (var _iterator2 = (0, _getOwnPropertyNames2.default)(this.properties), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
				var _ref2;

				if (_isArray2) {
					if (_i2 >= _iterator2.length) break;
					_ref2 = _iterator2[_i2++];
				} else {
					_i2 = _iterator2.next();
					if (_i2.done) break;
					_ref2 = _i2.value;
				}

				var p = _ref2;

				var o = this.properties[p];
				if (o.value && o.writable) o.writable = false;
				if (o.configurable) o.configurable = false;
				(0, _freeze2.default)(o);
			}
			if (this.extensable) this.extensable = false;
			(0, _seal2.default)(this.properties);
			(0, _freeze2.default)(this);
		}
	}, {
		key: 'debugString',
		get: function get() {
			var strProps = ['{', '[', this.clazz, ']'];
			var delim = [];
			if (this.wellKnownName) {
				strProps.push('(', this.wellKnownName, ')');
			}
			if (this.proto) {
				delim.push('[[Prototype]]: ' + (this.proto.wellKnownName || this.proto.clazz || this.proto.jsTypeName));
			}
			for (var n in this.properties) {
				if (!Object.prototype.hasOwnProperty.call(this.properties, n)) continue;
				var val = this.properties[n].value;
				if (this.properties[n].getter || this.properties[n].setter) delim.push(n + ': [Getter/Setter]');else if (val.specTypeName === 'object') delim.push(n + ': [Object]');else if (val.specTypeName === 'function') delim.push(n + ': [Function]');else delim.push(n + ': ' + val.specTypeName);
			}
			strProps.push(delim.join(', '));
			strProps.push('] }');
			return strProps.join(' ');
		}
	}, {
		key: 'truthy',
		get: function get() {
			return true;
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			if (typeof this.call !== 'function') return 'object';
			return 'function';
		}
	}, {
		key: 'specTypeName',
		get: function get() {
			return 'object';
		}
	}]);
	return ObjectValue;
}(Value);

ObjectValue.prototype.clazz = 'Object';

module.exports = ObjectValue;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
module.exports = __webpack_require__(15).Object.freeze;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(26);
var meta = __webpack_require__(71).onFreeze;

__webpack_require__(19)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(163), __esModule: true };

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(164);
module.exports = __webpack_require__(15).Object.seal;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(26);
var meta = __webpack_require__(71).onFreeze;

__webpack_require__(19)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _stringify = __webpack_require__(166);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(convert);

var Value = __webpack_require__(105);
var CompletionRecord = __webpack_require__(149);
var EvaluatorInstruction = __webpack_require__(157);
var EmptyValue = __webpack_require__(168);
var StringValue = void 0;

function convert(other) {
	return _regenerator2.default.wrap(function convert$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(other instanceof PrimitiveValue)) {
						_context.next = 2;
						break;
					}

					return _context.abrupt('return', other.toNative());

				case 2:
					return _context.delegateYield(other.toPrimitiveNative(), 't0', 3);

				case 3:
					return _context.abrupt('return', _context.t0);

				case 4:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

/**
 * Represents a primitive value.
 */

var PrimitiveValue = function (_Value) {
	(0, _inherits3.default)(PrimitiveValue, _Value);

	function PrimitiveValue(value) {
		(0, _classCallCheck3.default)(this, PrimitiveValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PrimitiveValue.__proto__ || (0, _getPrototypeOf2.default)(PrimitiveValue)).call(this, null));

		_this.native = value;
		//Object.defineProperty(this, 'native', {
		//	'value': value,
		//	'enumerable': true
		//});
		return _this;
	}

	(0, _createClass3.default)(PrimitiveValue, [{
		key: 'ref',
		value: function ref(name) {
			var that = this;
			var out = (0, _create2.default)(null);
			out.getValue = /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								return _context2.delegateYield(that.get(name), 't0', 1);

							case 1:
								return _context2.abrupt('return', _context2.t0);

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee, this);
			});
			out.setValue = /*#__PURE__*/_regenerator2.default.mark(function _callee2(to) {
				return _regenerator2.default.wrap(function _callee2$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								return _context3.delegateYield(that.set(name, to), 't0', 1);

							case 1:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee2, this);
			});
			return out;
		}
	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name) {
			var realm;
			return _regenerator2.default.wrap(function get$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.next = 2;
							return EvaluatorInstruction.getRealm;

						case 2:
							realm = _context4.sent;
							return _context4.delegateYield(this.derivePrototype(realm).get(name, this), 't0', 4);

						case 4:
							return _context4.abrupt('return', _context4.t0);

						case 5:
						case 'end':
							return _context4.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'set',
		value: /*#__PURE__*/_regenerator2.default.mark(function set(name, to) {
			return _regenerator2.default.wrap(function set$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
						case 'end':
							return _context5.stop();
					}
				}
			}, set, this);
		})
	}, {
		key: 'derivePrototype',
		value: function derivePrototype(realm) {
			switch ((0, _typeof3.default)(this.native)) {
				case 'string':
					return realm.StringPrototype;
				case 'number':
					return realm.NumberPrototype;
				case 'boolean':
					return realm.BooleanPrototype;
			}
		}
	}, {
		key: 'toNative',
		value: function toNative() {
			return this.native;
		}
	}, {
		key: 'asString',
		value: /*#__PURE__*/_regenerator2.default.mark(function asString() {
			return _regenerator2.default.wrap(function asString$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.abrupt('return', this.native.toString());

						case 1:
						case 'end':
							return _context6.stop();
					}
				}
			}, asString, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			var native, num, _num;

			return _regenerator2.default.wrap(function doubleEquals$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							native = this.native;

							if (!(other instanceof PrimitiveValue)) {
								_context7.next = 5;
								break;
							}

							return _context7.abrupt('return', Value.fromNative(this.native == other.native));

						case 5:
							if (!(typeof native === 'number')) {
								_context7.next = 15;
								break;
							}

							if (!(other instanceof StringValue)) {
								_context7.next = 12;
								break;
							}

							return _context7.delegateYield(other.toNumberValue(), 't0', 8);

						case 8:
							num = _context7.t0;
							return _context7.abrupt('return', Value.from(native === num.toNative()));

						case 12:
							return _context7.abrupt('return', Value.false);

						case 13:
							_context7.next = 20;
							break;

						case 15:
							if (!(typeof native == 'boolean')) {
								_context7.next = 20;
								break;
							}

							return _context7.delegateYield(this.toNumberValue(), 't1', 17);

						case 17:
							_num = _context7.t1;
							return _context7.delegateYield(_num.doubleEquals(other), 't2', 19);

						case 19:
							return _context7.abrupt('return', _context7.t2);

						case 20:
							return _context7.abrupt('return', Value.false);

						case 21:
						case 'end':
							return _context7.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other) {
			return _regenerator2.default.wrap(function tripleEquals$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.abrupt('return', this.native === other.toNative() ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context8.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							_context9.t0 = Value;
							_context9.t1 = this.native;
							return _context9.delegateYield(other.toPrimitiveNative('number'), 't2', 3);

						case 3:
							_context9.t3 = _context9.t2;
							_context9.t4 = _context9.t1 + _context9.t3;
							return _context9.abrupt('return', _context9.t0.fromNative.call(_context9.t0, _context9.t4));

						case 6:
						case 'end':
							return _context9.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'instanceOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function instanceOf(other) {
			return _regenerator2.default.wrap(function instanceOf$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							return _context10.abrupt('return', Value.false);

						case 1:
						case 'end':
							return _context10.stop();
					}
				}
			}, instanceOf, this);
		})
	}, {
		key: 'unaryPlus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryPlus() {
			return _regenerator2.default.wrap(function unaryPlus$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.abrupt('return', Value.fromNative(+this.native));

						case 1:
						case 'end':
							return _context11.stop();
					}
				}
			}, unaryPlus, this);
		})
	}, {
		key: 'unaryMinus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryMinus() {
			return _regenerator2.default.wrap(function unaryMinus$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							return _context12.abrupt('return', Value.fromNative(-this.native));

						case 1:
						case 'end':
							return _context12.stop();
					}
				}
			}, unaryMinus, this);
		})
	}, {
		key: 'not',
		value: /*#__PURE__*/_regenerator2.default.mark(function not() {
			return _regenerator2.default.wrap(function not$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							return _context13.abrupt('return', Value.fromNative(!this.native));

						case 1:
						case 'end':
							return _context13.stop();
					}
				}
			}, not, this);
		})
	}, {
		key: 'gt',
		value: /*#__PURE__*/_regenerator2.default.mark(function gt(other) {
			return _regenerator2.default.wrap(function gt$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							_context14.t0 = Value;
							_context14.t1 = this.native;
							return _context14.delegateYield(convert(other), 't2', 3);

						case 3:
							_context14.t3 = _context14.t2;
							_context14.t4 = _context14.t1 > _context14.t3;
							return _context14.abrupt('return', _context14.t0.fromNative.call(_context14.t0, _context14.t4));

						case 6:
						case 'end':
							return _context14.stop();
					}
				}
			}, gt, this);
		})
	}, {
		key: 'lt',
		value: /*#__PURE__*/_regenerator2.default.mark(function lt(other) {
			return _regenerator2.default.wrap(function lt$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							_context15.t0 = Value;
							_context15.t1 = this.native;
							return _context15.delegateYield(convert(other), 't2', 3);

						case 3:
							_context15.t3 = _context15.t2;
							_context15.t4 = _context15.t1 < _context15.t3;
							return _context15.abrupt('return', _context15.t0.fromNative.call(_context15.t0, _context15.t4));

						case 6:
						case 'end':
							return _context15.stop();
					}
				}
			}, lt, this);
		})
	}, {
		key: 'gte',
		value: /*#__PURE__*/_regenerator2.default.mark(function gte(other) {
			return _regenerator2.default.wrap(function gte$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							_context16.t0 = Value;
							_context16.t1 = this.native;
							return _context16.delegateYield(convert(other), 't2', 3);

						case 3:
							_context16.t3 = _context16.t2;
							_context16.t4 = _context16.t1 >= _context16.t3;
							return _context16.abrupt('return', _context16.t0.fromNative.call(_context16.t0, _context16.t4));

						case 6:
						case 'end':
							return _context16.stop();
					}
				}
			}, gte, this);
		})
	}, {
		key: 'lte',
		value: /*#__PURE__*/_regenerator2.default.mark(function lte(other) {
			return _regenerator2.default.wrap(function lte$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							_context17.t0 = Value;
							_context17.t1 = this.native;
							return _context17.delegateYield(convert(other), 't2', 3);

						case 3:
							_context17.t3 = _context17.t2;
							_context17.t4 = _context17.t1 <= _context17.t3;
							return _context17.abrupt('return', _context17.t0.fromNative.call(_context17.t0, _context17.t4));

						case 6:
						case 'end':
							return _context17.stop();
					}
				}
			}, lte, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			return _regenerator2.default.wrap(function observableProperties$(_context18) {
				while (1) {
					switch (_context18.prev = _context18.next) {
						case 0:
							return _context18.delegateYield(this.derivePrototype(realm).observableProperties(realm), 't0', 1);

						case 1:
						case 'end':
							return _context18.stop();
					}
				}
			}, observableProperties, this);
		})
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew() {
			return _regenerator2.default.wrap(function makeThisForNew$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							throw new Error('primative value is not a constructor');

						case 1:
						case 'end':
							return _context19.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}, {
		key: 'getPrototype',
		value: function getPrototype(realm) {
			return this.derivePrototype(realm);
		}
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveValue$(_context20) {
				while (1) {
					switch (_context20.prev = _context20.next) {
						case 0:
							return _context20.abrupt('return', this);

						case 1:
						case 'end':
							return _context20.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context21) {
				while (1) {
					switch (_context21.prev = _context21.next) {
						case 0:
							if (!(typeof this.native === 'string')) {
								_context21.next = 2;
								break;
							}

							return _context21.abrupt('return', this);

						case 2:
							return _context21.abrupt('return', Value.fromNative(String(this.native)));

						case 3:
						case 'end':
							return _context21.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			return _regenerator2.default.wrap(function toNumberValue$(_context22) {
				while (1) {
					switch (_context22.prev = _context22.next) {
						case 0:
							if (!(typeof this.native === 'number')) {
								_context22.next = 2;
								break;
							}

							return _context22.abrupt('return', this);

						case 2:
							return _context22.abrupt('return', Value.fromNative(Number(this.native)));

						case 3:
						case 'end':
							return _context22.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'makeImmutable',
		value: function makeImmutable() {
			return true;
		}
	}, {
		key: 'debugString',
		get: function get() {
			if ((0, _typeof3.default)(this.native) === 'object') return '[native object]';else if (typeof this.native === 'function') return '[native function]';else if (typeof this.native === 'string') return (0, _stringify2.default)(this.native);else return '' + this.native;
		}
	}, {
		key: 'truthy',
		get: function get() {
			return !!this.native;
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return (0, _typeof3.default)(this.native);
		}
	}]);
	return PrimitiveValue;
}(Value);

module.exports = PrimitiveValue;

StringValue = __webpack_require__(170);

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(167), __esModule: true };

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(15);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(105);
var BridgeValue = __webpack_require__(169);
var CompletionRecord = __webpack_require__(149);
var EvaluatorInstruction = __webpack_require__(157);

var EmptyValue = function (_Value) {
	(0, _inherits3.default)(EmptyValue, _Value);

	function EmptyValue() {
		(0, _classCallCheck3.default)(this, EmptyValue);
		return (0, _possibleConstructorReturn3.default)(this, (EmptyValue.__proto__ || (0, _getPrototypeOf2.default)(EmptyValue)).call(this, null));
	}

	(0, _createClass3.default)(EmptyValue, [{
		key: 'not',
		value: /*#__PURE__*/_regenerator2.default.mark(function not() {
			return _regenerator2.default.wrap(function not$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', Value.fromNative(true));

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, not, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			return _regenerator2.default.wrap(function doubleEquals$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!(other instanceof EmptyValue)) {
								_context2.next = 4;
								break;
							}

							return _context2.abrupt('return', Value.true);

						case 4:
							if (!(other instanceof BridgeValue)) {
								_context2.next = 8;
								break;
							}

							return _context2.abrupt('return', Value.fromNative(this.toNative() == other.toNative()));

						case 8:
							return _context2.abrupt('return', Value.false);

						case 9:
						case 'end':
							return _context2.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			return _regenerator2.default.wrap(function observableProperties$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return');

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, observableProperties, this);
		})
	}, {
		key: 'instanceOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function instanceOf() {
			return _regenerator2.default.wrap(function instanceOf$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', Value.false);

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, instanceOf, this);
		})

		/**
   * @param {String} name
   * @param {Realm} realm
   * @returns {CompletionRecord} Indexing empty values is a type error.
   */

	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name) {
			var str, realm, err;
			return _regenerator2.default.wrap(function get$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							str = 'Cannot read property \'' + name + '\' of ' + this.specTypeName;
							_context5.next = 3;
							return EvaluatorInstruction.getRealm;

						case 3:
							realm = _context5.sent;
							err = CompletionRecord.makeTypeError(realm, str);
							return _context5.delegateYield(err.addExtra({ code: 'IndexEmpty', target: this, prop: name }), 't0', 6);

						case 6:
							return _context5.abrupt('return', err);

						case 7:
						case 'end':
							return _context5.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'makeImmutable',
		value: function makeImmutable() {
			return true;
		}
	}, {
		key: 'truthy',
		get: function get() {
			return false;
		}
	}]);
	return EmptyValue;
}(Value);

module.exports = EmptyValue;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _typeof2 = __webpack_require__(39);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _create = __webpack_require__(88);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(105);
var CompletionRecord = __webpack_require__(149);
/**
 * Represents a value that maps directly to an untrusted local value.
 */

var BridgeValue = function (_Value) {
	(0, _inherits3.default)(BridgeValue, _Value);

	function BridgeValue(value) {
		(0, _classCallCheck3.default)(this, BridgeValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (BridgeValue.__proto__ || (0, _getPrototypeOf2.default)(BridgeValue)).call(this));

		_this.native = value;
		return _this;
	}

	(0, _createClass3.default)(BridgeValue, [{
		key: 'makeBridge',
		value: function makeBridge(value) {
			return BridgeValue.make(value);
		}
	}, {
		key: 'ref',
		value: function ref(name, s) {
			var that = this;
			var out = (0, _create2.default)(null);
			var doset = function doset(value) {
				return that.native[name] = value.toNative();
			};
			out.getValue = /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt('return', Value.fromNative(that.native[name]));

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			});
			out.setValue = /*#__PURE__*/_regenerator2.default.mark(function _callee2(to) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								doset(to);
							case 1:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			});

			return out;
		}
	}, {
		key: 'toNative',
		value: function toNative() {
			return this.native;
		}
	}, {
		key: 'asString',
		value: /*#__PURE__*/_regenerator2.default.mark(function asString() {
			return _regenerator2.default.wrap(function asString$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return', this.native.toString());

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, asString, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			return _regenerator2.default.wrap(function doubleEquals$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', this.makeBridge(this.native == other.toNative()));

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other) {
			return _regenerator2.default.wrap(function tripleEquals$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', this.makeBridge(this.native === other.toNative()));

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.abrupt('return', this.makeBridge(this.native + other.toNative()));

						case 1:
						case 'end':
							return _context6.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'subtract',
		value: /*#__PURE__*/_regenerator2.default.mark(function subtract(other) {
			return _regenerator2.default.wrap(function subtract$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							return _context7.abrupt('return', this.makeBridge(this.native - other.toNative()));

						case 1:
						case 'end':
							return _context7.stop();
					}
				}
			}, subtract, this);
		})
	}, {
		key: 'multiply',
		value: /*#__PURE__*/_regenerator2.default.mark(function multiply(other) {
			return _regenerator2.default.wrap(function multiply$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							return _context8.abrupt('return', this.makeBridge(this.native * other.toNative()));

						case 1:
						case 'end':
							return _context8.stop();
					}
				}
			}, multiply, this);
		})
	}, {
		key: 'divide',
		value: /*#__PURE__*/_regenerator2.default.mark(function divide(other) {
			return _regenerator2.default.wrap(function divide$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							return _context9.abrupt('return', this.makeBridge(this.native / other.toNative()));

						case 1:
						case 'end':
							return _context9.stop();
					}
				}
			}, divide, this);
		})
	}, {
		key: 'mod',
		value: /*#__PURE__*/_regenerator2.default.mark(function mod(other) {
			return _regenerator2.default.wrap(function mod$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							return _context10.abrupt('return', this.makeBridge(this.native % other.toNative()));

						case 1:
						case 'end':
							return _context10.stop();
					}
				}
			}, mod, this);
		})
	}, {
		key: 'shiftLeft',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftLeft(other) {
			return _regenerator2.default.wrap(function shiftLeft$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							return _context11.abrupt('return', this.makeBridge(this.native << other.toNative()));

						case 1:
						case 'end':
							return _context11.stop();
					}
				}
			}, shiftLeft, this);
		})
	}, {
		key: 'shiftRight',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRight(other) {
			return _regenerator2.default.wrap(function shiftRight$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							return _context12.abrupt('return', this.makeBridge(this.native >> other.toNative()));

						case 1:
						case 'end':
							return _context12.stop();
					}
				}
			}, shiftRight, this);
		})
	}, {
		key: 'shiftRightZF',
		value: /*#__PURE__*/_regenerator2.default.mark(function shiftRightZF(other) {
			return _regenerator2.default.wrap(function shiftRightZF$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							return _context13.abrupt('return', this.makeBridge(this.native >>> other.toNative()));

						case 1:
						case 'end':
							return _context13.stop();
					}
				}
			}, shiftRightZF, this);
		})
	}, {
		key: 'bitAnd',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitAnd(other) {
			return _regenerator2.default.wrap(function bitAnd$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							return _context14.abrupt('return', this.makeBridge(this.native & other.toNative()));

						case 1:
						case 'end':
							return _context14.stop();
					}
				}
			}, bitAnd, this);
		})
	}, {
		key: 'bitOr',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitOr(other) {
			return _regenerator2.default.wrap(function bitOr$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							return _context15.abrupt('return', this.makeBridge(this.native | other.toNative()));

						case 1:
						case 'end':
							return _context15.stop();
					}
				}
			}, bitOr, this);
		})
	}, {
		key: 'bitXor',
		value: /*#__PURE__*/_regenerator2.default.mark(function bitXor(other) {
			return _regenerator2.default.wrap(function bitXor$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							return _context16.abrupt('return', this.makeBridge(this.native ^ other.toNative()));

						case 1:
						case 'end':
							return _context16.stop();
					}
				}
			}, bitXor, this);
		})
	}, {
		key: 'gt',
		value: /*#__PURE__*/_regenerator2.default.mark(function gt(other) {
			return _regenerator2.default.wrap(function gt$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							return _context17.abrupt('return', this.makeBridge(this.native > other.toNative()));

						case 1:
						case 'end':
							return _context17.stop();
					}
				}
			}, gt, this);
		})
	}, {
		key: 'lt',
		value: /*#__PURE__*/_regenerator2.default.mark(function lt(other) {
			return _regenerator2.default.wrap(function lt$(_context18) {
				while (1) {
					switch (_context18.prev = _context18.next) {
						case 0:
							return _context18.abrupt('return', this.makeBridge(this.native < other.toNative()));

						case 1:
						case 'end':
							return _context18.stop();
					}
				}
			}, lt, this);
		})
	}, {
		key: 'gte',
		value: /*#__PURE__*/_regenerator2.default.mark(function gte(other) {
			return _regenerator2.default.wrap(function gte$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							return _context19.abrupt('return', this.makeBridge(this.native >= other.toNative()));

						case 1:
						case 'end':
							return _context19.stop();
					}
				}
			}, gte, this);
		})
	}, {
		key: 'lte',
		value: /*#__PURE__*/_regenerator2.default.mark(function lte(other) {
			return _regenerator2.default.wrap(function lte$(_context20) {
				while (1) {
					switch (_context20.prev = _context20.next) {
						case 0:
							return _context20.abrupt('return', this.makeBridge(this.native <= other.toNative()));

						case 1:
						case 'end':
							return _context20.stop();
					}
				}
			}, lte, this);
		})
	}, {
		key: 'inOperator',
		value: /*#__PURE__*/_regenerator2.default.mark(function inOperator(other) {
			return _regenerator2.default.wrap(function inOperator$(_context21) {
				while (1) {
					switch (_context21.prev = _context21.next) {
						case 0:
							return _context21.abrupt('return', this.makeBridge(other.toNative() in this.native));

						case 1:
						case 'end':
							return _context21.stop();
					}
				}
			}, inOperator, this);
		})
	}, {
		key: 'instanceOf',
		value: /*#__PURE__*/_regenerator2.default.mark(function instanceOf(other) {
			return _regenerator2.default.wrap(function instanceOf$(_context22) {
				while (1) {
					switch (_context22.prev = _context22.next) {
						case 0:
							return _context22.abrupt('return', this.makeBridge(this.native instanceof other.toNative()));

						case 1:
						case 'end':
							return _context22.stop();
					}
				}
			}, instanceOf, this);
		})
	}, {
		key: 'unaryPlus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryPlus() {
			return _regenerator2.default.wrap(function unaryPlus$(_context23) {
				while (1) {
					switch (_context23.prev = _context23.next) {
						case 0:
							return _context23.abrupt('return', this.makeBridge(+this.native));

						case 1:
						case 'end':
							return _context23.stop();
					}
				}
			}, unaryPlus, this);
		})
	}, {
		key: 'unaryMinus',
		value: /*#__PURE__*/_regenerator2.default.mark(function unaryMinus() {
			return _regenerator2.default.wrap(function unaryMinus$(_context24) {
				while (1) {
					switch (_context24.prev = _context24.next) {
						case 0:
							return _context24.abrupt('return', this.makeBridge(-this.native));

						case 1:
						case 'end':
							return _context24.stop();
					}
				}
			}, unaryMinus, this);
		})
	}, {
		key: 'not',
		value: /*#__PURE__*/_regenerator2.default.mark(function not() {
			return _regenerator2.default.wrap(function not$(_context25) {
				while (1) {
					switch (_context25.prev = _context25.next) {
						case 0:
							return _context25.abrupt('return', this.makeBridge(!this.native));

						case 1:
						case 'end':
							return _context25.stop();
					}
				}
			}, not, this);
		})
	}, {
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name) {
			return _regenerator2.default.wrap(function get$(_context26) {
				while (1) {
					switch (_context26.prev = _context26.next) {
						case 0:
							return _context26.abrupt('return', this.makeBridge(this.native[name]));

						case 1:
						case 'end':
							return _context26.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'set',
		value: /*#__PURE__*/_regenerator2.default.mark(function set(name, value) {
			return _regenerator2.default.wrap(function set$(_context27) {
				while (1) {
					switch (_context27.prev = _context27.next) {
						case 0:
							this.native[name] = value.toNative();

						case 1:
						case 'end':
							return _context27.stop();
					}
				}
			}, set, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			var p;
			return _regenerator2.default.wrap(function observableProperties$(_context28) {
				while (1) {
					switch (_context28.prev = _context28.next) {
						case 0:
							_context28.t0 = _regenerator2.default.keys(this.native);

						case 1:
							if ((_context28.t1 = _context28.t0()).done) {
								_context28.next = 7;
								break;
							}

							p = _context28.t1.value;
							_context28.next = 5;
							return this.makeBridge(p);

						case 5:
							_context28.next = 1;
							break;

						case 7:
							return _context28.abrupt('return');

						case 8:
						case 'end':
							return _context28.stop();
					}
				}
			}, observableProperties, this);
		})

		/**
   *
   * @param {Value} thiz
   * @param {Value[]} args
   */

	}, {
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, args) {
			var realArgs, i, result, _result;

			return _regenerator2.default.wrap(function call$(_context29) {
				while (1) {
					switch (_context29.prev = _context29.next) {
						case 0:
							realArgs = new Array(args.length);

							for (i = 0; i < args.length; ++i) {
								realArgs[i] = args[i].toNative();
							}
							_context29.prev = 2;
							result = this.native.apply(thiz ? thiz.toNative() : undefined, realArgs);
							return _context29.abrupt('return', this.makeBridge(result));

						case 7:
							_context29.prev = 7;
							_context29.t0 = _context29['catch'](2);
							_result = this.makeBridge(_context29.t0);
							return _context29.abrupt('return', new CompletionRecord(CompletionRecord.THROW, _result));

						case 11:
						case 'end':
							return _context29.stop();
					}
				}
			}, call, this, [[2, 7]]);
		})
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew() {
			return _regenerator2.default.wrap(function makeThisForNew$(_context30) {
				while (1) {
					switch (_context30.prev = _context30.next) {
						case 0:
							return _context30.abrupt('return', this.makeBridge((0, _create2.default)(this.native.prototype)));

						case 1:
						case 'end':
							return _context30.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context31) {
				while (1) {
					switch (_context31.prev = _context31.next) {
						case 0:
							return _context31.abrupt('return', Value.fromNative(this.native.toString()));

						case 1:
						case 'end':
							return _context31.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			return '[Bridge: ' + this.native + ']';
		}
	}, {
		key: 'truthy',
		get: function get() {
			return !!this.native;
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return (0, _typeof3.default)(this.native);
		}
	}], [{
		key: 'make',
		value: function make(native) {
			if (native === undefined) return Value.undef;
			var prim = Value.fromPrimativeNative(native);
			if (prim) return prim;

			if (Value.hasBookmark(native)) {
				return Value.getBookmark(native);
			}

			return new BridgeValue(native);
		}
	}]);
	return BridgeValue;
}(Value);

module.exports = BridgeValue;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(171);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(165);
var Value = __webpack_require__(105);
var NumberValue = void 0;

var StringValue = function (_PrimitiveValue) {
	(0, _inherits3.default)(StringValue, _PrimitiveValue);

	function StringValue() {
		(0, _classCallCheck3.default)(this, StringValue);
		return (0, _possibleConstructorReturn3.default)(this, (StringValue.__proto__ || (0, _getPrototypeOf2.default)(StringValue)).apply(this, arguments));
	}

	(0, _createClass3.default)(StringValue, [{
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm) {
			var idx;
			return _regenerator2.default.wrap(function get$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							idx = Number(name);

							if (isNaN(idx)) {
								_context.next = 3;
								break;
							}

							return _context.abrupt('return', StringValue.fromNative(this.native[idx]));

						case 3:
							if (!(name === 'length')) {
								_context.next = 5;
								break;
							}

							return _context.abrupt('return', StringValue.fromNative(this.native.length));

						case 5:
							return _context.delegateYield((0, _get3.default)(StringValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(StringValue.prototype), 'get', this).call(this, name, realm), 't0', 6);

						case 6:
							return _context.abrupt('return', _context.t0);

						case 7:
						case 'end':
							return _context.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			var rv, os;
			return _regenerator2.default.wrap(function doubleEquals$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!(other instanceof StringValue)) {
								_context2.next = 4;
								break;
							}

							return _context2.abrupt('return', Value.fromNative(this.native == other.native));

						case 4:
							if (!(other instanceof NumberValue)) {
								_context2.next = 9;
								break;
							}

							return _context2.delegateYield(this.toNumberValue(), 't0', 6);

						case 6:
							rv = _context2.t0;
							return _context2.delegateYield(rv.doubleEquals(other), 't1', 8);

						case 8:
							return _context2.abrupt('return', _context2.t1);

						case 9:
							if (!(other.jsTypeName == "object")) {
								_context2.next = 14;
								break;
							}

							return _context2.delegateYield(other.toStringValue(), 't2', 11);

						case 11:
							os = _context2.t2;

							if (!(os.jsTypeName == "string")) {
								_context2.next = 14;
								break;
							}

							return _context2.abrupt('return', Value.fromNative(this.native == os.native));

						case 14:
							return _context2.delegateYield((0, _get3.default)(StringValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(StringValue.prototype), 'doubleEquals', this).call(this, other), 't3', 15);

						case 15:
							return _context2.abrupt('return', _context2.t3);

						case 16:
						case 'end':
							return _context2.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.t0 = Value;
							_context3.t1 = this.native;
							return _context3.delegateYield(other.toPrimitiveNative('string'), 't2', 3);

						case 3:
							_context3.t3 = _context3.t2;
							_context3.t4 = _context3.t1 + _context3.t3;
							return _context3.abrupt('return', _context3.t0.fromNative.call(_context3.t0, _context3.t4));

						case 6:
						case 'end':
							return _context3.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'observableProperties',
		value: /*#__PURE__*/_regenerator2.default.mark(function observableProperties(realm) {
			var p;
			return _regenerator2.default.wrap(function observableProperties$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.t0 = _regenerator2.default.keys(this.native);

						case 1:
							if ((_context4.t1 = _context4.t0()).done) {
								_context4.next = 7;
								break;
							}

							p = _context4.t1.value;
							_context4.next = 5;
							return Value.fromNative(p);

						case 5:
							_context4.next = 1;
							break;

						case 7:
							return _context4.abrupt('return');

						case 8:
						case 'end':
							return _context4.stop();
					}
				}
			}, observableProperties, this);
		})
	}, {
		key: 'has',
		value: function has(name) {
			var idx = Number(name);
			if (!isNaN(idx)) {
				return idx >= 0 && idx < this.native.length;
			}
			return false;
		}
	}, {
		key: 'iterateAll',
		value: /*#__PURE__*/_regenerator2.default.mark(function iterateAll() {
			var len, idx, result, ii;
			return _regenerator2.default.wrap(function iterateAll$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							len = this.native.length;
							idx = 0;
							result = new Array(len);

							for (ii = 0; ii < len; ++ii) {
								result[idx++] = Value.fromNative(this.native[ii]);
							}
							return _context5.abrupt('return', result);

						case 5:
						case 'end':
							return _context5.stop();
					}
				}
			}, iterateAll, this);
		})
	}]);
	return StringValue;
}(PrimitiveValue);

module.exports = StringValue;

NumberValue = __webpack_require__(172);

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(94);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(171);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(165);
var Value = __webpack_require__(105);
var StringValue = void 0;

var NumberValue = function (_PrimitiveValue) {
	(0, _inherits3.default)(NumberValue, _PrimitiveValue);

	function NumberValue() {
		(0, _classCallCheck3.default)(this, NumberValue);
		return (0, _possibleConstructorReturn3.default)(this, (NumberValue.__proto__ || (0, _getPrototypeOf2.default)(NumberValue)).apply(this, arguments));
	}

	(0, _createClass3.default)(NumberValue, [{
		key: 'doubleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function doubleEquals(other) {
			var on;
			return _regenerator2.default.wrap(function doubleEquals$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							on = void 0;

							if (!(other instanceof NumberValue)) {
								_context.next = 5;
								break;
							}

							return _context.abrupt('return', Value.fromNative(this.native == other.native));

						case 5:
							if (!(other instanceof StringValue)) {
								_context.next = 10;
								break;
							}

							return _context.delegateYield(other.toNumberValue(), 't0', 7);

						case 7:
							on = _context.t0;
							_context.next = 13;
							break;

						case 10:
							if (!(other.specTypeName == 'object')) {
								_context.next = 13;
								break;
							}

							return _context.delegateYield(other.toPrimitiveValue(), 't1', 12);

						case 12:
							on = _context.t1;

						case 13:
							if (on) {
								_context.next = 16;
								break;
							}

							return _context.delegateYield((0, _get3.default)(NumberValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(NumberValue.prototype), 'doubleEquals', this).call(this, other), 't2', 15);

						case 15:
							return _context.abrupt('return', _context.t2);

						case 16:
							return _context.delegateYield(this.doubleEquals(on), 't3', 17);

						case 17:
							return _context.abrupt('return', _context.t3);

						case 18:
						case 'end':
							return _context.stop();
					}
				}
			}, doubleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.t0 = Value;
							_context2.t1 = this.native;
							return _context2.delegateYield(other.toPrimitiveNative('number'), 't2', 3);

						case 3:
							_context2.t3 = _context2.t2;
							_context2.t4 = _context2.t1 + _context2.t3;
							return _context2.abrupt('return', _context2.t0.fromNative.call(_context2.t0, _context2.t4));

						case 6:
						case 'end':
							return _context2.stop();
					}
				}
			}, add, this);
		})
	}]);
	return NumberValue;
}(PrimitiveValue);

module.exports = NumberValue;

StringValue = __webpack_require__(170);

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyValue = __webpack_require__(168);
var Value = __webpack_require__(105);

var NullValue = function (_EmptyValue) {
	(0, _inherits3.default)(NullValue, _EmptyValue);

	function NullValue() {
		(0, _classCallCheck3.default)(this, NullValue);
		return (0, _possibleConstructorReturn3.default)(this, (NullValue.__proto__ || (0, _getPrototypeOf2.default)(NullValue)).apply(this, arguments));
	}

	(0, _createClass3.default)(NullValue, [{
		key: 'toNative',
		value: function toNative() {
			return null;
		}
	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other, realm) {
			return _regenerator2.default.wrap(function tripleEquals$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', other instanceof NullValue ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'asString',
		value: /*#__PURE__*/_regenerator2.default.mark(function asString() {
			return _regenerator2.default.wrap(function asString$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt('return', 'null');

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, asString, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.t0 = other.specTypeName;
							_context3.next = _context3.t0 === "null" ? 3 : _context3.t0 === "boolean" ? 4 : _context3.t0 === "number" ? 5 : _context3.t0 === "undefined" ? 7 : 8;
							break;

						case 3:
							return _context3.abrupt('return', Value.zero);

						case 4:
							return _context3.abrupt('return', other.native ? Value.one : Value.zero);

						case 5:
							return _context3.delegateYield(Value.zero.add(other), 't1', 6);

						case 6:
							return _context3.abrupt('return', _context3.t1);

						case 7:
							return _context3.abrupt('return', Value.nan);

						case 8:
							return _context3.delegateYield(Value.fromNative("null").add(other), 't2', 9);

						case 9:
							return _context3.abrupt('return', _context3.t2);

						case 10:
						case 'end':
							return _context3.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveValue$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.t0 = preferedType;
							_context4.next = _context4.t0 === "number" ? 3 : 4;
							break;

						case 3:
							return _context4.abrupt('return', Value.zero);

						case 4:
							return _context4.abrupt('return', Value.fromNative("null"));

						case 5:
						case 'end':
							return _context4.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			return _regenerator2.default.wrap(function toNumberValue$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', Value.zero);

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.abrupt('return', Value.fromNative('null'));

						case 1:
						case 'end':
							return _context6.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'jsTypeName',
		get: function get() {
			return 'object';
		}
	}, {
		key: 'specTypeName',
		get: function get() {
			return 'null';
		}
	}, {
		key: 'debugString',
		get: function get() {
			return 'null';
		}
	}]);
	return NullValue;
}(EmptyValue);

module.exports = NullValue;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getIterator2 = __webpack_require__(97);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(152);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(171);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(165);
var ObjectValue = __webpack_require__(158);
var Value = __webpack_require__(105);
var GenDash = __webpack_require__(150);
var NumberValue = void 0;

var ArrayValue = function (_ObjectValue) {
	(0, _inherits3.default)(ArrayValue, _ObjectValue);

	function ArrayValue(realm) {
		(0, _classCallCheck3.default)(this, ArrayValue);
		return (0, _possibleConstructorReturn3.default)(this, (ArrayValue.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue)).call(this, realm, realm.ArrayPrototype));
	}

	(0, _createClass3.default)(ArrayValue, [{
		key: 'get',
		value: /*#__PURE__*/_regenerator2.default.mark(function get(name, realm) {
			return _regenerator2.default.wrap(function get$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.delegateYield((0, _get3.default)(ArrayValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue.prototype), 'get', this).call(this, name, realm), 't0', 1);

						case 1:
							return _context.abrupt('return', _context.t0);

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, get, this);
		})
	}, {
		key: 'adjustLength',
		value: function adjustLength(name, value) {
			if (name == 'length' && this.properties.length) {
				//TODO: 15.4.5.2 specifies more complex behavior here.
				var target = GenDash.syncGenHelper(value.toIntNative());
				var length = this.getLengthSync();
				if (target < length) {
					for (var i = length - 1; i >= target; --i) {
						delete this.properties[i];
					}
				}
			}

			if (!isNaN(parseInt(name))) {
				var _length = this.getLengthSync();
				if (name >= _length) {
					this.properties.length.value = Value.fromNative(name + 1);
				}
			}
		}
	}, {
		key: 'getLengthSync',
		value: function getLengthSync() {
			return this.properties.length.value.native;
		}
	}, {
		key: 'set',
		value: function set(name, v) {
			this.adjustLength(name, v);
			return (0, _get3.default)(ArrayValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue.prototype), 'set', this).call(this, name, v);
		}
	}, {
		key: 'setImmediate',
		value: function setImmediate(name, v) {
			this.adjustLength(name, v);
			return (0, _get3.default)(ArrayValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue.prototype), 'setImmediate', this).call(this, name, v);
		}
	}, {
		key: 'toNative',
		value: function toNative() {
			var out = new Array(this.getLengthSync());
			for (var _iterator = (0, _keys2.default)(this.properties), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var i = _ref;

				if (i === 'length') continue;
				var po = this.properties[i];
				if (po && po.value) {
					if (!po.direct) {
						(0, _defineProperty2.default)(out, i, {
							enumerable: po.enumerable,
							writable: po.writable,
							configurable: po.configurable,
							value: po.value.toNative()
						});
					} else {
						out[i] = po.value.toNative();
					}
				}
			}
			return out;
		}
	}, {
		key: 'toJS',
		value: function toJS() {
			var out = new Array(this.getLengthSync());
			for (var _iterator2 = (0, _keys2.default)(this.properties), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
				var _ref2;

				if (_isArray2) {
					if (_i2 >= _iterator2.length) break;
					_ref2 = _iterator2[_i2++];
				} else {
					_i2 = _iterator2.next();
					if (_i2.done) break;
					_ref2 = _i2.value;
				}

				var i = _ref2;

				if (i === 'length') continue;
				var po = this.properties[i];
				out[i] = po.value.toJS();
			}
			return out;
		}
	}, {
		key: 'iterateAll',
		value: /*#__PURE__*/_regenerator2.default.mark(function iterateAll() {
			var len, idx, result, ii;
			return _regenerator2.default.wrap(function iterateAll$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							len = this.getLengthSync();
							idx = 0;
							result = new Array(len);
							ii = 0;

						case 4:
							if (!(ii < len)) {
								_context2.next = 10;
								break;
							}

							return _context2.delegateYield(this.get(ii), 't0', 6);

						case 6:
							result[idx++] = _context2.t0;

						case 7:
							++ii;
							_context2.next = 4;
							break;

						case 10:
							return _context2.abrupt('return', result);

						case 11:
						case 'end':
							return _context2.stop();
					}
				}
			}, iterateAll, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			if (!this.properties.length) return (0, _get3.default)(ArrayValue.prototype.__proto__ || (0, _getPrototypeOf2.default)(ArrayValue.prototype), 'debugString', this);
			var length = this.properties.length.value.native;

			var loop = Math.min(length, 20);
			var r = new Array(loop);
			for (var i = 0; i < loop; ++i) {
				var po = this.properties[i];
				if (po && po.value) r[i] = po.value.debugString;else r[i] = '';
			}
			return '[' + r.join(', ') + (loop < length ? '...' : '') + ']';
		}
	}], [{
		key: 'make',
		value: function make(vals, realm) {

			var av = new ArrayValue(realm);

			av.setImmediate('length', Value.fromNative(0));
			av.properties.length.enumerable = false;

			for (var i = 0; i < vals.length; ++i) {
				var v = vals[i];
				if (!(v instanceof Value)) v = realm.fromNative(v);
				av.setImmediate(i, v);
			}
			return av;
		}
	}]);
	return ArrayValue;
}(ObjectValue);

ArrayValue.prototype.clazz = 'Array';

module.exports = ArrayValue;

NumberValue = __webpack_require__(172);

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(97);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(evaluateArrayExpression),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(evaluateAssignmentExpression),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(evaluateBinaryExpression),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(evaluateBlockStatement),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(evaluateBreakStatement),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(evaluateCallExpression),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(doCall),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(addMethodFnToClass),
    _marked9 = /*#__PURE__*/_regenerator2.default.mark(evaluateClassExpression),
    _marked10 = /*#__PURE__*/_regenerator2.default.mark(evaluateClassDeclaration),
    _marked11 = /*#__PURE__*/_regenerator2.default.mark(evaluateConditionalExpression),
    _marked12 = /*#__PURE__*/_regenerator2.default.mark(evaluateContinueStatement),
    _marked13 = /*#__PURE__*/_regenerator2.default.mark(evaluateDoWhileStatement),
    _marked14 = /*#__PURE__*/_regenerator2.default.mark(evaluateEmptyStatement),
    _marked15 = /*#__PURE__*/_regenerator2.default.mark(evaluateExpressionStatement),
    _marked16 = /*#__PURE__*/_regenerator2.default.mark(evaluateIdentifier),
    _marked17 = /*#__PURE__*/_regenerator2.default.mark(evaluateIfStatement),
    _marked18 = /*#__PURE__*/_regenerator2.default.mark(evaluateImportDeclaration),
    _marked19 = /*#__PURE__*/_regenerator2.default.mark(genForLoop),
    _marked20 = /*#__PURE__*/_regenerator2.default.mark(evaluateForStatement),
    _marked21 = /*#__PURE__*/_regenerator2.default.mark(evaluateForInStatement),
    _marked22 = /*#__PURE__*/_regenerator2.default.mark(evaluateForOfStatement),
    _marked23 = /*#__PURE__*/_regenerator2.default.mark(evaluateFunctionDeclaration),
    _marked24 = /*#__PURE__*/_regenerator2.default.mark(evaluateFunctionExpression),
    _marked25 = /*#__PURE__*/_regenerator2.default.mark(evaluateLabeledStatement),
    _marked26 = /*#__PURE__*/_regenerator2.default.mark(evaluateLiteral),
    _marked27 = /*#__PURE__*/_regenerator2.default.mark(evaluateLogicalExpression),
    _marked28 = /*#__PURE__*/_regenerator2.default.mark(evaluateMemberExpression),
    _marked29 = /*#__PURE__*/_regenerator2.default.mark(evaluateMetaProperty),
    _marked30 = /*#__PURE__*/_regenerator2.default.mark(evaluateObjectExpression),
    _marked31 = /*#__PURE__*/_regenerator2.default.mark(evaluateProgram),
    _marked32 = /*#__PURE__*/_regenerator2.default.mark(evaluateReturnStatement),
    _marked33 = /*#__PURE__*/_regenerator2.default.mark(evaluateSequenceExpression),
    _marked34 = /*#__PURE__*/_regenerator2.default.mark(evaluateSuperExpression),
    _marked35 = /*#__PURE__*/_regenerator2.default.mark(evaluateSwitchStatement),
    _marked36 = /*#__PURE__*/_regenerator2.default.mark(evaluateTaggedTemplateExpression),
    _marked37 = /*#__PURE__*/_regenerator2.default.mark(evaluateTemplateLiteral),
    _marked38 = /*#__PURE__*/_regenerator2.default.mark(evaluateThisExpression),
    _marked39 = /*#__PURE__*/_regenerator2.default.mark(evaluateThrowStatement),
    _marked40 = /*#__PURE__*/_regenerator2.default.mark(evaluateTryStatement),
    _marked41 = /*#__PURE__*/_regenerator2.default.mark(evaluateUpdateExpression),
    _marked42 = /*#__PURE__*/_regenerator2.default.mark(evaluateUnaryExpression),
    _marked43 = /*#__PURE__*/_regenerator2.default.mark(evaluateVariableDeclaration),
    _marked44 = /*#__PURE__*/_regenerator2.default.mark(genWhileLoop),
    _marked45 = /*#__PURE__*/_regenerator2.default.mark(evaluateWhileStatement),
    _marked46 = /*#__PURE__*/_regenerator2.default.mark(evaluateWithStatement),
    _marked47 = /*#__PURE__*/_regenerator2.default.mark(doResolveRef);

var Value = __webpack_require__(105);
var CompletionRecord = __webpack_require__(149);
var ClosureValue = __webpack_require__(155);
var ObjectValue = __webpack_require__(158);
var FutureValue = __webpack_require__(176);
var RegExpValue = __webpack_require__(177);
var PropertyDescriptor = __webpack_require__(156);
var ErrorValue = __webpack_require__(178);
var ArrayValue = __webpack_require__(174);
var EvaluatorInstruction = __webpack_require__(157);

function evaluateArrayExpression(e, n, s) {
	var result, idx, i, val, itr, _iterator, _isArray, _i, _ref, _e;

	return _regenerator2.default.wrap(function evaluateArrayExpression$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					//let result = new ObjectValue();
					result = new Array(n.elements.length);
					idx = 0;
					i = 0;

				case 3:
					if (!(i < n.elements.length)) {
						_context.next = 37;
						break;
					}

					if (!n.elements[i]) {
						_context.next = 33;
						break;
					}

					if (!(n.elements[i].type === 'SpreadElement')) {
						_context.next = 29;
						break;
					}

					return _context.delegateYield(e.branch(n.elements[i].argument, s), 't0', 7);

				case 7:
					val = _context.t0;

					if (val.iterateAll) {
						_context.next = 10;
						break;
					}

					return _context.abrupt('return', CompletionRecord.makeTypeError(s.realm, n.elements[i].argument.srcName + ' is not iterable.'));

				case 10:
					return _context.delegateYield(val.iterateAll(), 't1', 11);

				case 11:
					itr = _context.t1;
					_iterator = itr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);

				case 13:
					if (!_isArray) {
						_context.next = 19;
						break;
					}

					if (!(_i >= _iterator.length)) {
						_context.next = 16;
						break;
					}

					return _context.abrupt('break', 27);

				case 16:
					_ref = _iterator[_i++];
					_context.next = 23;
					break;

				case 19:
					_i = _iterator.next();

					if (!_i.done) {
						_context.next = 22;
						break;
					}

					return _context.abrupt('break', 27);

				case 22:
					_ref = _i.value;

				case 23:
					_e = _ref;
					result[idx++] = _e;

				case 25:
					_context.next = 13;
					break;

				case 27:
					_context.next = 31;
					break;

				case 29:
					return _context.delegateYield(e.branch(n.elements[i], s), 't2', 30);

				case 30:
					result[idx++] = _context.t2;

				case 31:
					_context.next = 34;
					break;

				case 33:
					++idx;

				case 34:
					++i;
					_context.next = 3;
					break;

				case 37:
					if (!(e.yieldPower >= 3)) {
						_context.next = 40;
						break;
					}

					_context.next = 40;
					return EvaluatorInstruction.stepMinor;

				case 40:
					return _context.abrupt('return', ArrayValue.make(result, s.realm));

				case 41:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

function evaluateAssignmentExpression(e, n, s) {
	var realm, ref, cur, argument, value;
	return _regenerator2.default.wrap(function evaluateAssignmentExpression$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					//TODO: Account for not-strict mode
					realm = s.realm;
					return _context2.delegateYield(e.resolveRef(n.left, s, n.operator === '='), 't0', 2);

				case 2:
					ref = _context2.t0;

					if (!(!ref && s.strict)) {
						_context2.next = 5;
						break;
					}

					return _context2.abrupt('return', CompletionRecord.makeReferenceError(s.realm, 'Invalid refrence in assignment.'));

				case 5:
					if (!(n.operator == '=')) {
						_context2.next = 9;
						break;
					}

					_context2.t1 = Value.undef;
					_context2.next = 11;
					break;

				case 9:
					return _context2.delegateYield(ref.getValue(), 't2', 10);

				case 10:
					_context2.t1 = _context2.t2;

				case 11:
					cur = _context2.t1;
					return _context2.delegateYield(e.branch(n.right, s), 't3', 13);

				case 13:
					argument = _context2.t3;
					value = void 0;

					if (!(e.yieldPower >= 3)) {
						_context2.next = 18;
						break;
					}

					_context2.next = 18;
					return EvaluatorInstruction.stepMinor;

				case 18:
					_context2.t4 = n.operator;
					_context2.next = _context2.t4 === '=' ? 21 : _context2.t4 === '+=' ? 23 : _context2.t4 === '-=' ? 26 : _context2.t4 === '*=' ? 29 : _context2.t4 === '/=' ? 32 : _context2.t4 === '%=' ? 35 : _context2.t4 === '<<=' ? 38 : _context2.t4 === '>>=' ? 41 : _context2.t4 === '>>>=' ? 44 : _context2.t4 === '|=' ? 47 : _context2.t4 === '&=' ? 50 : _context2.t4 === '^=' ? 53 : _context2.t4 === '**=' ? 56 : 59;
					break;

				case 21:
					value = argument;
					return _context2.abrupt('break', 60);

				case 23:
					return _context2.delegateYield(cur.add(argument, realm), 't5', 24);

				case 24:
					value = _context2.t5;
					return _context2.abrupt('break', 60);

				case 26:
					return _context2.delegateYield(cur.subtract(argument, realm), 't6', 27);

				case 27:
					value = _context2.t6;
					return _context2.abrupt('break', 60);

				case 29:
					return _context2.delegateYield(cur.multiply(argument, realm), 't7', 30);

				case 30:
					value = _context2.t7;
					return _context2.abrupt('break', 60);

				case 32:
					return _context2.delegateYield(cur.divide(argument, realm), 't8', 33);

				case 33:
					value = _context2.t8;
					return _context2.abrupt('break', 60);

				case 35:
					return _context2.delegateYield(cur.mod(argument, realm), 't9', 36);

				case 36:
					value = _context2.t9;
					return _context2.abrupt('break', 60);

				case 38:
					return _context2.delegateYield(cur.shiftLeft(argument, realm), 't10', 39);

				case 39:
					value = _context2.t10;
					return _context2.abrupt('break', 60);

				case 41:
					return _context2.delegateYield(cur.shiftRight(argument, realm), 't11', 42);

				case 42:
					value = _context2.t11;
					return _context2.abrupt('break', 60);

				case 44:
					return _context2.delegateYield(cur.shiftRightZF(argument, realm), 't12', 45);

				case 45:
					value = _context2.t12;
					return _context2.abrupt('break', 60);

				case 47:
					return _context2.delegateYield(cur.bitOr(argument, realm), 't13', 48);

				case 48:
					value = _context2.t13;
					return _context2.abrupt('break', 60);

				case 50:
					return _context2.delegateYield(cur.bitAnd(argument, realm), 't14', 51);

				case 51:
					value = _context2.t14;
					return _context2.abrupt('break', 60);

				case 53:
					return _context2.delegateYield(cur.bitXor(argument, realm), 't15', 54);

				case 54:
					value = _context2.t15;
					return _context2.abrupt('break', 60);

				case 56:
					return _context2.delegateYield(cur.pow(argument, realm), 't16', 57);

				case 57:
					value = _context2.t16;
					return _context2.abrupt('break', 60);

				case 59:
					throw new Error('Unknown assignment operator: ' + n.operator);

				case 60:
					if (!ref) {
						_context2.next = 64;
						break;
					}

					return _context2.delegateYield(ref.setValue(value, s), 't17', 62);

				case 62:
					_context2.next = 65;
					break;

				case 64:
					return _context2.delegateYield(s.put(n.left.name, value, s), 't18', 65);

				case 65:
					return _context2.abrupt('return', value);

				case 66:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

function evaluateBinaryExpression(e, n, s) {
	var left, right;
	return _regenerator2.default.wrap(function evaluateBinaryExpression$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					if (!(n.operator == '&&' || n.operator == '||')) {
						_context3.next = 3;
						break;
					}

					return _context3.delegateYield(evaluateLogicalExpression(e, n, s), 't0', 2);

				case 2:
					return _context3.abrupt('return', _context3.t0);

				case 3:
					return _context3.delegateYield(e.branch(n.left, s), 't1', 4);

				case 4:
					left = _context3.t1;
					return _context3.delegateYield(e.branch(n.right, s), 't2', 6);

				case 6:
					right = _context3.t2;

					if (!(e.yieldPower >= 4)) {
						_context3.next = 10;
						break;
					}

					_context3.next = 10;
					return EvaluatorInstruction.stepMinor;

				case 10:
					return _context3.delegateYield(e.doBinaryEvaluation(n.operator, left, right, s), 't3', 11);

				case 11:
					return _context3.abrupt('return', _context3.t3);

				case 12:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

function evaluateBlockStatement(e, n, s) {
	var result, ss, _iterator2, _isArray2, _i2, _ref2, statement, _iterator3, _isArray3, _i3, _ref3, _statement;

	return _regenerator2.default.wrap(function evaluateBlockStatement$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					result = Value.undef;
					ss = s.createBlockChild();
					_iterator2 = n.body, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);

				case 3:
					if (!_isArray2) {
						_context4.next = 9;
						break;
					}

					if (!(_i2 >= _iterator2.length)) {
						_context4.next = 6;
						break;
					}

					return _context4.abrupt('break', 20);

				case 6:
					_ref2 = _iterator2[_i2++];
					_context4.next = 13;
					break;

				case 9:
					_i2 = _iterator2.next();

					if (!_i2.done) {
						_context4.next = 12;
						break;
					}

					return _context4.abrupt('break', 20);

				case 12:
					_ref2 = _i2.value;

				case 13:
					statement = _ref2;

					if (!(statement.type != "FunctionDeclaration")) {
						_context4.next = 16;
						break;
					}

					return _context4.abrupt('continue', 18);

				case 16:
					return _context4.delegateYield(e.branch(statement, ss), 't0', 17);

				case 17:
					result = _context4.t0;

				case 18:
					_context4.next = 3;
					break;

				case 20:
					_iterator3 = n.body, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);

				case 21:
					if (!_isArray3) {
						_context4.next = 27;
						break;
					}

					if (!(_i3 >= _iterator3.length)) {
						_context4.next = 24;
						break;
					}

					return _context4.abrupt('break', 38);

				case 24:
					_ref3 = _iterator3[_i3++];
					_context4.next = 31;
					break;

				case 27:
					_i3 = _iterator3.next();

					if (!_i3.done) {
						_context4.next = 30;
						break;
					}

					return _context4.abrupt('break', 38);

				case 30:
					_ref3 = _i3.value;

				case 31:
					_statement = _ref3;

					if (!(_statement.type == "FunctionDeclaration")) {
						_context4.next = 34;
						break;
					}

					return _context4.abrupt('continue', 36);

				case 34:
					return _context4.delegateYield(e.branch(_statement, ss), 't1', 35);

				case 35:
					result = _context4.t1;

				case 36:
					_context4.next = 21;
					break;

				case 38:
					return _context4.abrupt('return', result);

				case 39:
				case 'end':
					return _context4.stop();
			}
		}
	}, _marked4, this);
}

function evaluateBreakStatement(e, n, s) {
	var label;
	return _regenerator2.default.wrap(function evaluateBreakStatement$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					label = n.label ? n.label.name : undefined;

					if (!(e.yieldPower >= 1)) {
						_context5.next = 4;
						break;
					}

					_context5.next = 4;
					return EvaluatorInstruction.stepMinor;

				case 4:
					return _context5.abrupt('return', new CompletionRecord(CompletionRecord.BREAK, Value.undef, label));

				case 5:
				case 'end':
					return _context5.stop();
			}
		}
	}, _marked5, this);
}

function evaluateCallExpression(e, n, s) {
	return _regenerator2.default.wrap(function evaluateCallExpression$(_context7) {
		while (1) {
			switch (_context7.prev = _context7.next) {
				case 0:
					return _context7.delegateYield(doCall(e, n, n.callee, s, /*#__PURE__*/_regenerator2.default.mark(function _callee() {
						var args, idx, i, val, itr, _iterator4, _isArray4, _i4, _ref4, _e2;

						return _regenerator2.default.wrap(function _callee$(_context6) {
							while (1) {
								switch (_context6.prev = _context6.next) {
									case 0:
										args = new Array(n.arguments.length);
										idx = 0;
										i = 0;

									case 3:
										if (!(i < n.arguments.length)) {
											_context6.next = 33;
											break;
										}

										if (!(n.arguments[i].type === 'SpreadElement')) {
											_context6.next = 28;
											break;
										}

										return _context6.delegateYield(e.branch(n.arguments[i].argument, s), 't0', 6);

									case 6:
										val = _context6.t0;

										if (val.iterateAll) {
											_context6.next = 9;
											break;
										}

										return _context6.abrupt('return', CompletionRecord.makeTypeError(s.realm, n.arguments[i].argument.srcName + ' is not iterable.'));

									case 9:
										return _context6.delegateYield(val.iterateAll(), 't1', 10);

									case 10:
										itr = _context6.t1;
										_iterator4 = itr, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);

									case 12:
										if (!_isArray4) {
											_context6.next = 18;
											break;
										}

										if (!(_i4 >= _iterator4.length)) {
											_context6.next = 15;
											break;
										}

										return _context6.abrupt('break', 26);

									case 15:
										_ref4 = _iterator4[_i4++];
										_context6.next = 22;
										break;

									case 18:
										_i4 = _iterator4.next();

										if (!_i4.done) {
											_context6.next = 21;
											break;
										}

										return _context6.abrupt('break', 26);

									case 21:
										_ref4 = _i4.value;

									case 22:
										_e2 = _ref4;
										args[idx++] = _e2;

									case 24:
										_context6.next = 12;
										break;

									case 26:
										_context6.next = 30;
										break;

									case 28:
										return _context6.delegateYield(e.branch(n.arguments[i], s), 't2', 29);

									case 29:
										args[idx++] = _context6.t2;

									case 30:
										++i;
										_context6.next = 3;
										break;

									case 33:
										return _context6.abrupt('return', args);

									case 34:
									case 'end':
										return _context6.stop();
								}
							}
						}, _callee, this);
					})), 't0', 1);

				case 1:
					return _context7.abrupt('return', _context7.t0);

				case 2:
				case 'end':
					return _context7.stop();
			}
		}
	}, _marked6, this);
}

function doCall(e, n, c, s, argProvider) {
	var thiz, callee, base, args, name, err, callResult, result;
	return _regenerator2.default.wrap(function doCall$(_context8) {
		while (1) {
			switch (_context8.prev = _context8.next) {
				case 0:
					thiz = s.strict ? Value.undef : s.global.thiz;
					callee = void 0, base = void 0;

					if (!(c.type == 'Super')) {
						_context8.next = 8;
						break;
					}

					return _context8.delegateYield(e.branch(c, s), 't0', 4);

				case 4:
					callee = _context8.t0;

					thiz = s.thiz;
					_context8.next = 22;
					break;

				case 8:
					if (!(c.type === 'MemberExpression')) {
						_context8.next = 20;
						break;
					}

					return _context8.delegateYield(e.branch(c.object, s), 't1', 10);

				case 10:
					thiz = base = _context8.t1;
					return _context8.delegateYield(e.partialMemberExpression(thiz, c, s), 't2', 12);

				case 12:
					callee = _context8.t2;

					if (c.object.type == "Super") thiz = s.thiz;

					if (!(callee instanceof CompletionRecord)) {
						_context8.next = 18;
						break;
					}

					if (!(callee.type == CompletionRecord.THROW)) {
						_context8.next = 17;
						break;
					}

					return _context8.abrupt('return', callee);

				case 17:
					callee = callee.value;

				case 18:
					_context8.next = 22;
					break;

				case 20:
					return _context8.delegateYield(e.branch(c, s), 't3', 21);

				case 21:
					callee = _context8.t3;

				case 22:
					if (!(n.type === 'NewExpression')) {
						_context8.next = 29;
						break;
					}

					return _context8.delegateYield(callee.makeThisForNew(s.realm), 't4', 24);

				case 24:
					thiz = _context8.t4;

					if (!(thiz instanceof CompletionRecord)) {
						_context8.next = 29;
						break;
					}

					if (!(thiz.type == CompletionRecord.THROW)) {
						_context8.next = 28;
						break;
					}

					return _context8.abrupt('return', thiz);

				case 28:
					thiz = thiz.value;

				case 29:
					if (!(typeof callee.rawCall === 'function')) {
						_context8.next = 32;
						break;
					}

					return _context8.delegateYield(callee.rawCall(n, e, s), 't5', 31);

				case 31:
					return _context8.abrupt('return', _context8.t5);

				case 32:
					return _context8.delegateYield(argProvider(), 't6', 33);

				case 33:
					args = _context8.t6;
					name = c.srcName || c.source() || callee.jsTypeName;

					if (!(e.yieldPower >= 1)) {
						_context8.next = 38;
						break;
					}

					_context8.next = 38;
					return EvaluatorInstruction.stepMajor;

				case 38:
					if (callee.isCallable) {
						_context8.next = 42;
						break;
					}

					err = CompletionRecord.makeTypeError(e.realm, '' + name + ' is not a function');
					return _context8.delegateYield(err.addExtra({
						code: 'CallNonFunction',
						target: callee,
						targetAst: c,
						targetName: name,
						base: base
					}), 't7', 41);

				case 41:
					return _context8.abrupt('return', err);

				case 42:

					if (e.debug) {
						e.incrCtr('fxInvocationCount', c.srcName);
					}

					callResult = callee.call(thiz, args, s, {
						asConstructor: n.type === 'NewExpression',
						callNode: n,
						evaluator: e,
						callee: callee
					});

					if (!(callResult instanceof CompletionRecord)) {
						_context8.next = 46;
						break;
					}

					return _context8.abrupt('return', callResult);

				case 46:
					if (!(typeof callResult.next !== 'function')) {
						_context8.next = 49;
						break;
					}

					console.log('Generator Failure', callResult);
					return _context8.abrupt('return', CompletionRecord.makeTypeError(e.realm, '' + name + ' didnt make a generator'));

				case 49:
					return _context8.delegateYield(callResult, 't8', 50);

				case 50:
					result = _context8.t8;

					if (!(n.type === 'NewExpression')) {
						_context8.next = 59;
						break;
					}

					if (!(result instanceof Value)) {
						_context8.next = 56;
						break;
					}

					if (!(result.specTypeName === 'undefined')) {
						_context8.next = 55;
						break;
					}

					return _context8.abrupt('return', thiz);

				case 55:
					return _context8.abrupt('return', result);

				case 56:
					return _context8.abrupt('return', thiz);

				case 59:
					return _context8.abrupt('return', result);

				case 60:
				case 'end':
					return _context8.stop();
			}
		}
	}, _marked7, this);
}

var classFeatures = {};
function addMethodFnToClass(fx, clazz, proto, e, m, s) {
	var ks, k, pd;
	return _regenerator2.default.wrap(function addMethodFnToClass$(_context9) {
		while (1) {
			switch (_context9.prev = _context9.next) {
				case 0:
					if (!(m.kind == 'constructor')) {
						_context9.next = 3;
						break;
					}

					_context9.next = 25;
					break;

				case 3:
					ks = void 0;

					fx.funcSourceAST = m;

					if (!m.computed) {
						_context9.next = 12;
						break;
					}

					return _context9.delegateYield(e.branch(m.key, s), 't0', 7);

				case 7:
					k = _context9.t0;
					return _context9.delegateYield(k.toStringNative(e.realm), 't1', 9);

				case 9:
					ks = _context9.t1;
					_context9.next = 13;
					break;

				case 12:
					ks = m.key.name;

				case 13:
					pd = void 0;


					if (m.static) {
						fx.superTarget = clazz.getPrototype();
						if (Object.prototype.hasOwnProperty.call(clazz.properties, ks)) {
							pd = clazz.properties[ks];
						} else {
							pd = new PropertyDescriptor(Value.undef);
							clazz.rawSetProperty(ks, pd);
						}
					} else {
						fx.superTarget = proto.getPrototype();
						if (Object.prototype.hasOwnProperty.call(proto.properties, ks)) {
							pd = proto.properties[ks];
						} else {
							pd = new PropertyDescriptor(Value.undef);
							proto.rawSetProperty(ks, pd);
						}
					}
					pd.enumerable = false;
					_context9.t2 = m.kind;
					_context9.next = _context9.t2 === 'set' ? 19 : _context9.t2 === 'get' ? 21 : _context9.t2 === 'method' ? 23 : 25;
					break;

				case 19:
					pd.setter = fx;
					return _context9.abrupt('break', 25);

				case 21:
					pd.getter = fx;
					return _context9.abrupt('break', 25);

				case 23:
					pd.value = fx;
					return _context9.abrupt('break', 25);

				case 25:
					return _context9.abrupt('return', Value.undef);

				case 26:
				case 'end':
					return _context9.stop();
			}
		}
	}, _marked8, this);
}
classFeatures.MethodDefinition = /*#__PURE__*/_regenerator2.default.mark(function _callee2(clazz, proto, e, m, s) {
	return _regenerator2.default.wrap(function _callee2$(_context10) {
		while (1) {
			switch (_context10.prev = _context10.next) {
				case 0:
					_context10.t0 = addMethodFnToClass;
					return _context10.delegateYield(e.branch(m.value, s), 't1', 2);

				case 2:
					_context10.t2 = _context10.t1;
					_context10.t3 = clazz;
					_context10.t4 = proto;
					_context10.t5 = e;
					_context10.t6 = m;
					_context10.t7 = s;
					return _context10.delegateYield((0, _context10.t0)(_context10.t2, _context10.t3, _context10.t4, _context10.t5, _context10.t6, _context10.t7), 't8', 9);

				case 9:
				case 'end':
					return _context10.stop();
			}
		}
	}, _callee2, this);
});
classFeatures.ClassMethod = /*#__PURE__*/_regenerator2.default.mark(function _callee3(clazz, proto, e, m, s) {
	var fx;
	return _regenerator2.default.wrap(function _callee3$(_context11) {
		while (1) {
			switch (_context11.prev = _context11.next) {
				case 0:
					return _context11.delegateYield(evaluateFunctionExpression(e, m, s), 't0', 1);

				case 1:
					fx = _context11.t0;
					return _context11.delegateYield(addMethodFnToClass(fx, clazz, proto, e, {
						kind: m.kind,
						static: m.static,
						key: m.key
					}, s), 't1', 3);

				case 3:
					return _context11.abrupt('return', _context11.t1);

				case 4:
				case 'end':
					return _context11.stop();
			}
		}
	}, _callee3, this);
});
classFeatures.EmptyStatement = /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
	return _regenerator2.default.wrap(function _callee4$(_context12) {
		while (1) {
			switch (_context12.prev = _context12.next) {
				case 0:
					return _context12.abrupt('return', Value.undef);

				case 1:
				case 'end':
					return _context12.stop();
			}
		}
	}, _callee4, this);
});

function evaluateClassExpression(e, n, s) {
	var clazz, _iterator5, _isArray5, _i5, _ref5, m, sc, proto, _iterator6, _isArray6, _i6, _ref6, _m;

	return _regenerator2.default.wrap(function evaluateClassExpression$(_context15) {
		while (1) {
			switch (_context15.prev = _context15.next) {
				case 0:
					clazz = undefined;
					_iterator5 = n.body.body, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);

				case 2:
					if (!_isArray5) {
						_context15.next = 8;
						break;
					}

					if (!(_i5 >= _iterator5.length)) {
						_context15.next = 5;
						break;
					}

					return _context15.abrupt('break', 21);

				case 5:
					_ref5 = _iterator5[_i5++];
					_context15.next = 12;
					break;

				case 8:
					_i5 = _iterator5.next();

					if (!_i5.done) {
						_context15.next = 11;
						break;
					}

					return _context15.abrupt('break', 21);

				case 11:
					_ref5 = _i5.value;

				case 12:
					m = _ref5;

					if (!(m.type == "MethodDefinition" && m.kind == "constructor")) {
						_context15.next = 19;
						break;
					}

					return _context15.delegateYield(e.branch(m.value, s), 't0', 15);

				case 15:
					clazz = _context15.t0;

					clazz.superTarget = clazz;
					clazz.funcSourceAST = n;
					return _context15.abrupt('break', 21);

				case 19:
					_context15.next = 2;
					break;

				case 21:
					sc = void 0;

					if (!n.superClass) {
						_context15.next = 25;
						break;
					}

					return _context15.delegateYield(e.branch(n.superClass, s), 't1', 24);

				case 24:
					sc = _context15.t1;

				case 25:

					if (!clazz) {
						clazz = new ObjectValue(e.realm);
						if (sc) {
							clazz.call = /*#__PURE__*/_regenerator2.default.mark(function _callee5(thiz, args, scope, extra) {
								return _regenerator2.default.wrap(function _callee5$(_context13) {
									while (1) {
										switch (_context13.prev = _context13.next) {
											case 0:
												return _context13.delegateYield(sc.call(thiz, args, scope, extra), 't0', 1);

											case 1:
												return _context13.abrupt('return', Value.undef);

											case 2:
											case 'end':
												return _context13.stop();
										}
									}
								}, _callee5, this);
							});
						} else {
							clazz.call = /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
								return _regenerator2.default.wrap(function _callee6$(_context14) {
									while (1) {
										switch (_context14.prev = _context14.next) {
											case 0:
												return _context14.abrupt('return', Value.undef);

											case 1:
											case 'end':
												return _context14.stop();
										}
									}
								}, _callee6, this);
							});
						}
					}

					proto = new ObjectValue(e.realm);
					return _context15.delegateYield(clazz.set('prototype', proto), 't2', 28);

				case 28:
					return _context15.delegateYield(clazz.set('name', Value.fromNative(n.id.name)), 't3', 29);

				case 29:
					return _context15.delegateYield(proto.set('constructor', clazz), 't4', 30);

				case 30:

					if (sc) {
						clazz.setPrototype(sc);
						proto.setPrototype(sc.getPrototypeProperty());
						clazz.parentClassInstance = sc;
					}
					clazz.superTarget = clazz.getPrototype();

					s.add(n.id.name, clazz);

					if (!(e.yieldPower >= 3)) {
						_context15.next = 36;
						break;
					}

					_context15.next = 36;
					return EvaluatorInstruction.stepMinor;

				case 36:
					_iterator6 = n.body.body, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);

				case 37:
					if (!_isArray6) {
						_context15.next = 43;
						break;
					}

					if (!(_i6 >= _iterator6.length)) {
						_context15.next = 40;
						break;
					}

					return _context15.abrupt('break', 53);

				case 40:
					_ref6 = _iterator6[_i6++];
					_context15.next = 47;
					break;

				case 43:
					_i6 = _iterator6.next();

					if (!_i6.done) {
						_context15.next = 46;
						break;
					}

					return _context15.abrupt('break', 53);

				case 46:
					_ref6 = _i6.value;

				case 47:
					_m = _ref6;

					if (module.exports.classFeatures[_m.type]) {
						_context15.next = 50;
						break;
					}

					throw new Error("Unsuported Class Feature " + _m.type);

				case 50:
					return _context15.delegateYield(module.exports.classFeatures[_m.type](clazz, proto, e, _m, s), 't5', 51);

				case 51:
					_context15.next = 37;
					break;

				case 53:
					return _context15.abrupt('return', clazz);

				case 54:
				case 'end':
					return _context15.stop();
			}
		}
	}, _marked9, this);
}

function evaluateClassDeclaration(e, n, s) {
	var clazz;
	return _regenerator2.default.wrap(function evaluateClassDeclaration$(_context16) {
		while (1) {
			switch (_context16.prev = _context16.next) {
				case 0:
					return _context16.delegateYield(evaluateClassExpression(e, n, s), 't0', 1);

				case 1:
					clazz = _context16.t0;
					return _context16.delegateYield(s.put(n.id.name, clazz), 't1', 3);

				case 3:
					return _context16.abrupt('return', clazz);

				case 4:
				case 'end':
					return _context16.stop();
			}
		}
	}, _marked10, this);
}

function evaluateConditionalExpression(e, n, s) {
	var test;
	return _regenerator2.default.wrap(function evaluateConditionalExpression$(_context17) {
		while (1) {
			switch (_context17.prev = _context17.next) {
				case 0:
					return _context17.delegateYield(e.branch(n.test, s), 't0', 1);

				case 1:
					test = _context17.t0;

					if (!(e.yieldPower >= 4)) {
						_context17.next = 5;
						break;
					}

					_context17.next = 5;
					return EvaluatorInstruction.stepMinor;

				case 5:
					if (!test.truthy) {
						_context17.next = 10;
						break;
					}

					return _context17.delegateYield(e.branch(n.consequent, s), 't1', 7);

				case 7:
					return _context17.abrupt('return', _context17.t1);

				case 10:
					if (!n.alternate) {
						_context17.next = 13;
						break;
					}

					return _context17.delegateYield(e.branch(n.alternate, s), 't2', 12);

				case 12:
					return _context17.abrupt('return', _context17.t2);

				case 13:
					return _context17.abrupt('return', Value.undef);

				case 14:
				case 'end':
					return _context17.stop();
			}
		}
	}, _marked11, this);
}

function evaluateContinueStatement(e, n, s) {
	var label, val;
	return _regenerator2.default.wrap(function evaluateContinueStatement$(_context18) {
		while (1) {
			switch (_context18.prev = _context18.next) {
				case 0:
					label = n.label ? n.label.name : undefined;
					val = new CompletionRecord(CompletionRecord.CONTINUE, Value.undef, label);

					if (!(e.yieldPower >= 1)) {
						_context18.next = 5;
						break;
					}

					_context18.next = 5;
					return EvaluatorInstruction.stepMinor;

				case 5:
					return _context18.abrupt('return', val);

				case 6:
				case 'end':
					return _context18.stop();
			}
		}
	}, _marked12, this);
}

function evaluateDoWhileStatement(e, n, s) {
	var last, that, gen, finished;
	return _regenerator2.default.wrap(function evaluateDoWhileStatement$(_context20) {
		while (1) {
			switch (_context20.prev = _context20.next) {
				case 0:
					last = Value.undef;
					that = e;
					gen = /*#__PURE__*/_regenerator2.default.mark(function gen() {
						return _regenerator2.default.wrap(function gen$(_context19) {
							while (1) {
								switch (_context19.prev = _context19.next) {
									case 0:
										_context19.next = 2;
										return that.branchFrame('continue', n.body, s, { labels: n.labels });

									case 2:
										last = _context19.sent;

									case 3:
										return _context19.delegateYield(that.branch(n.test, s), 't0', 4);

									case 4:
										if (_context19.t0.truthy) {
											_context19.next = 0;
											break;
										}

									case 5:
									case 'end':
										return _context19.stop();
								}
							}
						}, gen, this);
					});

					if (!(e.yieldPower > 0)) {
						_context20.next = 6;
						break;
					}

					_context20.next = 6;
					return EvaluatorInstruction.stepMinor;

				case 6:
					e.pushFrame({ generator: gen(), type: 'loop', labels: n.labels, ast: n });

					_context20.next = 9;
					return EvaluatorInstruction.waitForFramePop;

				case 9:
					finished = _context20.sent;
					return _context20.abrupt('return', Value.undef);

				case 11:
				case 'end':
					return _context20.stop();
			}
		}
	}, _marked13, this);
}

function evaluateEmptyStatement(e, n, s) {
	return _regenerator2.default.wrap(function evaluateEmptyStatement$(_context21) {
		while (1) {
			switch (_context21.prev = _context21.next) {
				case 0:
					if (!(e.yieldPower >= 5)) {
						_context21.next = 3;
						break;
					}

					_context21.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					return _context21.abrupt('return', Value.undef);

				case 4:
				case 'end':
					return _context21.stop();
			}
		}
	}, _marked14, this);
}

function evaluateExpressionStatement(e, n, s) {
	return _regenerator2.default.wrap(function evaluateExpressionStatement$(_context22) {
		while (1) {
			switch (_context22.prev = _context22.next) {
				case 0:
					if (!(e.yieldPower > 4)) {
						_context22.next = 3;
						break;
					}

					_context22.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					return _context22.delegateYield(e.branch(n.expression, s), 't0', 4);

				case 4:
					return _context22.abrupt('return', _context22.t0);

				case 5:
				case 'end':
					return _context22.stop();
			}
		}
	}, _marked15, this);
}

function evaluateIdentifier(e, n, s) {
	var err, r;
	return _regenerator2.default.wrap(function evaluateIdentifier$(_context23) {
		while (1) {
			switch (_context23.prev = _context23.next) {
				case 0:
					if (!(e.yieldPower >= 4)) {
						_context23.next = 3;
						break;
					}

					_context23.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					if (!(n.name === 'undefined')) {
						_context23.next = 5;
						break;
					}

					return _context23.abrupt('return', Value.undef);

				case 5:
					if (s.has(n.name)) {
						_context23.next = 13;
						break;
					}

					if (true) {
						_context23.next = 8;
						break;
					}

					return _context23.abrupt('return', Value.undef);

				case 8:
					err = CompletionRecord.makeReferenceError(e.realm, n.name + ' is not defined');
					return _context23.delegateYield(err.addExtra({ code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict }), 't0', 10);

				case 10:
					_context23.next = 12;
					return err;

				case 12:
					return _context23.abrupt('return', _context23.sent);

				case 13:
					r = s.ref(n.name);
					return _context23.delegateYield(r.getValue(), 't1', 15);

				case 15:
					return _context23.abrupt('return', _context23.t1);

				case 16:
				case 'end':
					return _context23.stop();
			}
		}
	}, _marked16, this);
}

function evaluateIfStatement(e, n, s) {
	var test;
	return _regenerator2.default.wrap(function evaluateIfStatement$(_context24) {
		while (1) {
			switch (_context24.prev = _context24.next) {
				case 0:
					if (!(e.yieldPower >= 2)) {
						_context24.next = 3;
						break;
					}

					_context24.next = 3;
					return EvaluatorInstruction.stepStatement;

				case 3:
					return _context24.delegateYield(e.branch(n.test, s), 't0', 4);

				case 4:
					test = _context24.t0;

					if (!test.truthy) {
						_context24.next = 10;
						break;
					}

					return _context24.delegateYield(e.branch(n.consequent, s), 't1', 7);

				case 7:
					return _context24.abrupt('return', _context24.t1);

				case 10:
					if (!n.alternate) {
						_context24.next = 13;
						break;
					}

					return _context24.delegateYield(e.branch(n.alternate, s), 't2', 12);

				case 12:
					return _context24.abrupt('return', _context24.t2);

				case 13:
					return _context24.abrupt('return', Value.undef);

				case 14:
				case 'end':
					return _context24.stop();
			}
		}
	}, _marked17, this);
}

function evaluateImportDeclaration(e, n, s) {
	return _regenerator2.default.wrap(function evaluateImportDeclaration$(_context25) {
		while (1) {
			switch (_context25.prev = _context25.next) {
				case 0:
					return _context25.abrupt('return', Value.undef);

				case 1:
				case 'end':
					return _context25.stop();
			}
		}
	}, _marked18, this);
}

function genForLoop(e, n, s) {
	var test, createPerIterationEnvironment, is, last;
	return _regenerator2.default.wrap(function genForLoop$(_context26) {
		while (1) {
			switch (_context26.prev = _context26.next) {
				case 0:
					test = Value.true;
					createPerIterationEnvironment = n.init && n.init.kind == 'let' ? function (p) {
						var is = s.createChild();
						for (var _iterator7 = n.init.declarations, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
							var _ref7;

							if (_isArray7) {
								if (_i7 >= _iterator7.length) break;
								_ref7 = _iterator7[_i7++];
							} else {
								_i7 = _iterator7.next();
								if (_i7.done) break;
								_ref7 = _i7.value;
							}

							var dec = _ref7;

							is.addBlock(dec.id.name, p.get(dec.id.name));
						}
						return is;
					} : function (p) {
						return p;
					};
					is = createPerIterationEnvironment(s);

					if (!n.test) {
						_context26.next = 6;
						break;
					}

					return _context26.delegateYield(e.branch(n.test, s), 't0', 5);

				case 5:
					test = _context26.t0;

				case 6:
					last = Value.undef;

				case 7:
					if (!test.truthy) {
						_context26.next = 23;
						break;
					}

					e.topFrame.ast = n;

					if (!(e.yieldPower > 0)) {
						_context26.next = 12;
						break;
					}

					_context26.next = 12;
					return EvaluatorInstruction.eventLoopBodyStart;

				case 12:
					_context26.next = 14;
					return e.branchFrame('continue', n.body, is, { labels: n.labels });

				case 14:
					last = _context26.sent;

					is = createPerIterationEnvironment(is);

					if (!n.update) {
						_context26.next = 18;
						break;
					}

					return _context26.delegateYield(e.branch(n.update, is), 't1', 18);

				case 18:
					if (!n.test) {
						_context26.next = 21;
						break;
					}

					return _context26.delegateYield(e.branch(n.test, is), 't2', 20);

				case 20:
					test = _context26.t2;

				case 21:
					_context26.next = 7;
					break;

				case 23:
				case 'end':
					return _context26.stop();
			}
		}
	}, _marked19, this);
};

function evaluateForStatement(e, n, s) {
	var finished;
	return _regenerator2.default.wrap(function evaluateForStatement$(_context27) {
		while (1) {
			switch (_context27.prev = _context27.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context27.next = 3;
						break;
					}

					_context27.next = 3;
					return EvaluatorInstruction.stepStatement;

				case 3:
					if (!n.init) {
						_context27.next = 5;
						break;
					}

					return _context27.delegateYield(e.branch(n.init, s), 't0', 5);

				case 5:

					e.pushFrame({ generator: genForLoop(e, n, s), type: 'loop', labels: n.labels, ast: n });

					_context27.next = 8;
					return EvaluatorInstruction.waitForFramePop;

				case 8:
					finished = _context27.sent;
					return _context27.abrupt('return', Value.undef);

				case 10:
				case 'end':
					return _context27.stop();
			}
		}
	}, _marked20, this);
}

function evaluateForInStatement(e, n, s) {
	var last, object, names, that, ref, decl, gen, finished;
	return _regenerator2.default.wrap(function evaluateForInStatement$(_context29) {
		while (1) {
			switch (_context29.prev = _context29.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context29.next = 3;
						break;
					}

					_context29.next = 3;
					return EvaluatorInstruction.stepStatement;

				case 3:
					last = Value.undef;
					return _context29.delegateYield(e.branch(n.right, s), 't0', 5);

				case 5:
					object = _context29.t0;
					names = object.observableProperties(s.realm);
					that = e;
					ref = void 0;

					s = s.createBlockChild();

					if (n.left.type === 'VariableDeclaration') {
						decl = n.left.declarations[0];

						if (n.left.kind != 'var') s.addBlock(decl.id.name, Value.undef);
						ref = s.ref(decl.id.name, s);
					} else {
						ref = s.ref(n.left.name, s);
					}

					if (ref) {
						_context29.next = 16;
						break;
					}

					if (!s.strict) {
						_context29.next = 14;
						break;
					}

					return _context29.abrupt('return', CompletionRecord.makeReferenceError(s.realm, n.left.name + ' is not defined'));

				case 14:
					//Create an var in global scope if varialbe doesnt exist and not in strict mode.
					s.global.add(n.left.name, Value.undef);
					ref = s.ref(n.left.name);

				case 16:
					gen = /*#__PURE__*/_regenerator2.default.mark(function gen() {
						var _iterator8, _isArray8, _i8, _ref8, name;

						return _regenerator2.default.wrap(function gen$(_context28) {
							while (1) {
								switch (_context28.prev = _context28.next) {
									case 0:
										_iterator8 = names, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);

									case 1:
										if (!_isArray8) {
											_context28.next = 7;
											break;
										}

										if (!(_i8 >= _iterator8.length)) {
											_context28.next = 4;
											break;
										}

										return _context28.abrupt('break', 18);

									case 4:
										_ref8 = _iterator8[_i8++];
										_context28.next = 11;
										break;

									case 7:
										_i8 = _iterator8.next();

										if (!_i8.done) {
											_context28.next = 10;
											break;
										}

										return _context28.abrupt('break', 18);

									case 10:
										_ref8 = _i8.value;

									case 11:
										name = _ref8;
										return _context28.delegateYield(ref.setValue(name, s), 't0', 13);

									case 13:
										_context28.next = 15;
										return that.branchFrame('continue', n.body, s, { labels: n.labels });

									case 15:
										last = _context28.sent;

									case 16:
										_context28.next = 1;
										break;

									case 18:
									case 'end':
										return _context28.stop();
								}
							}
						}, gen, this);
					});

					e.pushFrame({ generator: gen(), type: 'loop', labels: n.labels, ast: n });

					_context29.next = 20;
					return EvaluatorInstruction.waitForFramePop;

				case 20:
					finished = _context29.sent;
					return _context29.abrupt('return', Value.undef);

				case 22:
				case 'end':
					return _context29.stop();
			}
		}
	}, _marked21, this);
}

//TODO: For of does more crazy Symbol iterator stuff
function evaluateForOfStatement(e, n, s) {
	var last, object, names, that, ref, decl, gen, finished;
	return _regenerator2.default.wrap(function evaluateForOfStatement$(_context31) {
		while (1) {
			switch (_context31.prev = _context31.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context31.next = 3;
						break;
					}

					_context31.next = 3;
					return EvaluatorInstruction.stepStatement;

				case 3:
					last = Value.undef;
					return _context31.delegateYield(e.branch(n.right, s), 't0', 5);

				case 5:
					object = _context31.t0;
					names = object.observableProperties(s.realm);
					that = e;
					ref = void 0;

					s = s.createBlockChild();
					if (n.left.type === 'VariableDeclaration') {
						decl = n.left.declarations[0];

						if (decl.kind == 'var') s.add(decl.id.name, Value.undef);else s.addBlock(decl.id.name, Value.undef);
						//yield * s.put(n.left.declarations[0].id.name, Value.undef);
						ref = s.ref(n.left.declarations[0].id.name, s.realm);
					} else {
						ref = s.ref(n.left.name, s.realm);
					}

					gen = /*#__PURE__*/_regenerator2.default.mark(function gen() {
						var _iterator9, _isArray9, _i9, _ref9, name;

						return _regenerator2.default.wrap(function gen$(_context30) {
							while (1) {
								switch (_context30.prev = _context30.next) {
									case 0:
										_iterator9 = names, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);

									case 1:
										if (!_isArray9) {
											_context30.next = 7;
											break;
										}

										if (!(_i9 >= _iterator9.length)) {
											_context30.next = 4;
											break;
										}

										return _context30.abrupt('break', 25);

									case 4:
										_ref9 = _iterator9[_i9++];
										_context30.next = 11;
										break;

									case 7:
										_i9 = _iterator9.next();

										if (!_i9.done) {
											_context30.next = 10;
											break;
										}

										return _context30.abrupt('break', 25);

									case 10:
										_ref9 = _i9.value;

									case 11:
										name = _ref9;
										_context30.t0 = ref;
										_context30.t1 = object;
										return _context30.delegateYield(name.toStringNative(), 't2', 15);

									case 15:
										_context30.t3 = _context30.t2;
										return _context30.delegateYield(_context30.t1.get.call(_context30.t1, _context30.t3), 't4', 17);

									case 17:
										_context30.t5 = _context30.t4;
										_context30.t6 = s;
										return _context30.delegateYield(_context30.t0.setValue.call(_context30.t0, _context30.t5, _context30.t6), 't7', 20);

									case 20:
										_context30.next = 22;
										return that.branchFrame('continue', n.body, s, { labels: n.labels });

									case 22:
										last = _context30.sent;

									case 23:
										_context30.next = 1;
										break;

									case 25:
									case 'end':
										return _context30.stop();
								}
							}
						}, gen, this);
					});

					e.pushFrame({ generator: gen(), type: 'loop', labels: n.labels });

					_context31.next = 15;
					return EvaluatorInstruction.waitForFramePop;

				case 15:
					finished = _context31.sent;
					return _context31.abrupt('return', Value.undef);

				case 17:
				case 'end':
					return _context31.stop();
			}
		}
	}, _marked22, this);
}

function evaluateFunctionDeclaration(e, n, s) {
	var closure;
	return _regenerator2.default.wrap(function evaluateFunctionDeclaration$(_context32) {
		while (1) {
			switch (_context32.prev = _context32.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context32.next = 3;
						break;
					}

					_context32.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					closure = new ClosureValue(n, s);

					s.add(n.id.name, closure);
					return _context32.abrupt('return', Value.undef);

				case 6:
				case 'end':
					return _context32.stop();
			}
		}
	}, _marked23, this);
}

function evaluateFunctionExpression(e, n, s) {
	var value;
	return _regenerator2.default.wrap(function evaluateFunctionExpression$(_context33) {
		while (1) {
			switch (_context33.prev = _context33.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context33.next = 3;
						break;
					}

					_context33.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					value = new ClosureValue(n, s);

					if (n.type === 'ArrowFunctionExpression') {
						value.thiz = s.thiz;
						if (n.expression) value.returnLastValue = true;
					}
					return _context33.abrupt('return', value);

				case 6:
				case 'end':
					return _context33.stop();
			}
		}
	}, _marked24, this);
}

function evaluateLabeledStatement(e, n, s) {
	return _regenerator2.default.wrap(function evaluateLabeledStatement$(_context34) {
		while (1) {
			switch (_context34.prev = _context34.next) {
				case 0:
					if (!(e.yieldPower >= 5)) {
						_context34.next = 3;
						break;
					}

					_context34.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					return _context34.delegateYield(e.branch(n.body, s), 't0', 4);

				case 4:
					return _context34.abrupt('return', _context34.t0);

				case 5:
				case 'end':
					return _context34.stop();
			}
		}
	}, _marked25, this);
}

function evaluateLiteral(e, n, s) {
	var tryFloat;
	return _regenerator2.default.wrap(function evaluateLiteral$(_context35) {
		while (1) {
			switch (_context35.prev = _context35.next) {
				case 0:
					if (!(e.yieldPower >= 5)) {
						_context35.next = 3;
						break;
					}

					_context35.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					if (!n.regex) {
						_context35.next = 7;
						break;
					}

					return _context35.abrupt('return', RegExpValue.make(new RegExp(n.regex.pattern, n.regex.flags), s.realm));

				case 7:
					if (!(n.value === null)) {
						_context35.next = 16;
						break;
					}

					if (!(e.raw === 'null')) {
						_context35.next = 10;
						break;
					}

					return _context35.abrupt('return', Value.null);

				case 10:

					//Work around Esprima turning Infinity into null. =\
					tryFloat = parseFloat(n.raw);

					if (isNaN(tryFloat)) {
						_context35.next = 13;
						break;
					}

					return _context35.abrupt('return', e.fromNative(tryFloat, n));

				case 13:
					return _context35.abrupt('return', e.fromNative(null, n));

				case 16:
					return _context35.abrupt('return', e.realm.makeLiteralValue(n.value, n));

				case 17:
				case 'end':
					return _context35.stop();
			}
		}
	}, _marked26, this);
}

function evaluateLogicalExpression(e, n, s) {
	var left;
	return _regenerator2.default.wrap(function evaluateLogicalExpression$(_context36) {
		while (1) {
			switch (_context36.prev = _context36.next) {
				case 0:
					return _context36.delegateYield(e.branch(n.left, s), 't0', 1);

				case 1:
					left = _context36.t0;

					if (!(e.yieldPower >= 4)) {
						_context36.next = 5;
						break;
					}

					_context36.next = 5;
					return EvaluatorInstruction.stepMajor;

				case 5:
					_context36.t1 = n.operator;
					_context36.next = _context36.t1 === '&&' ? 8 : _context36.t1 === '||' ? 12 : 16;
					break;

				case 8:
					if (!left.truthy) {
						_context36.next = 11;
						break;
					}

					return _context36.delegateYield(e.branch(n.right, s), 't2', 10);

				case 10:
					return _context36.abrupt('return', _context36.t2);

				case 11:
					return _context36.abrupt('return', left);

				case 12:
					if (!left.truthy) {
						_context36.next = 14;
						break;
					}

					return _context36.abrupt('return', left);

				case 14:
					return _context36.delegateYield(e.branch(n.right, s), 't3', 15);

				case 15:
					return _context36.abrupt('return', _context36.t3);

				case 16:
					throw new Error('Unknown logical operator: ' + n.operator);

				case 17:
				case 'end':
					return _context36.stop();
			}
		}
	}, _marked27, this);
}

function evaluateMemberExpression(e, n, s) {
	var left;
	return _regenerator2.default.wrap(function evaluateMemberExpression$(_context37) {
		while (1) {
			switch (_context37.prev = _context37.next) {
				case 0:
					if (!(e.yieldPower >= 4)) {
						_context37.next = 3;
						break;
					}

					_context37.next = 3;
					return EvaluatorInstruction.stepMinor;

				case 3:
					return _context37.delegateYield(e.branch(n.object, s), 't0', 4);

				case 4:
					left = _context37.t0;
					return _context37.delegateYield(e.partialMemberExpression(left, n, s), 't1', 6);

				case 6:
					return _context37.abrupt('return', _context37.t1);

				case 7:
				case 'end':
					return _context37.stop();
			}
		}
	}, _marked28, this);
}

function evaluateMetaProperty(e, n, s) {
	var i, t;
	return _regenerator2.default.wrap(function evaluateMetaProperty$(_context38) {
		while (1) {
			switch (_context38.prev = _context38.next) {
				case 0:
					i = 0;

				case 1:
					if (!(i < e.frames.length - 1)) {
						_context38.next = 12;
						break;
					}

					t = e.frames[i].type;

					if (!(t === "function")) {
						_context38.next = 9;
						break;
					}

					if (!(e.frames[i + 1].ast.type == "NewExpression")) {
						_context38.next = 8;
						break;
					}

					return _context38.abrupt('return', e.frames[i].callee);

				case 8:
					return _context38.abrupt('return', Value.undef);

				case 9:
					++i;
					_context38.next = 1;
					break;

				case 12:
					return _context38.abrupt('return', Value.undef);

				case 13:
				case 'end':
					return _context38.stop();
			}
		}
	}, _marked29, this);
}

function evaluateObjectExpression(e, n, s) {
	var nat, i, prop, key, value, pd;
	return _regenerator2.default.wrap(function evaluateObjectExpression$(_context39) {
		while (1) {
			switch (_context39.prev = _context39.next) {
				case 0:
					//TODO: Need to wire up native prototype
					nat = new ObjectValue(s.realm);
					i = 0;

				case 2:
					if (!(i < n.properties.length)) {
						_context39.next = 27;
						break;
					}

					prop = n.properties[i];
					key = void 0;

					if (!n.computed) {
						_context39.next = 10;
						break;
					}

					return _context39.delegateYield(e.branch(prop.key, s), 't0', 7);

				case 7:
					key = _context39.t0.toNative().toString();
					_context39.next = 11;
					break;

				case 10:
					if (prop.key.type == 'Identifier') {
						key = prop.key.name;
					} else if (prop.key.type == 'Literal') {
						key = prop.key.value.toString();
					}

				case 11:
					return _context39.delegateYield(e.branch(prop.value, s), 't1', 12);

				case 12:
					value = _context39.t1;
					pd = void 0;


					if (Object.prototype.hasOwnProperty.call(nat.properties, key)) {
						pd = nat.properties[key];
					} else {
						pd = new PropertyDescriptor(Value.undef);
						nat.rawSetProperty(key, pd);
					}

					_context39.t2 = prop.kind;
					_context39.next = _context39.t2 === 'init' ? 18 : _context39.t2 === 'get' ? 20 : _context39.t2 === 'set' ? 22 : 18;
					break;

				case 18:
					pd.value = value;
					return _context39.abrupt('break', 24);

				case 20:
					pd.getter = value;
					return _context39.abrupt('break', 24);

				case 22:
					pd.setter = value;
					return _context39.abrupt('break', 24);

				case 24:
					++i;
					_context39.next = 2;
					break;

				case 27:
					if (!(e.yieldPower > 0)) {
						_context39.next = 30;
						break;
					}

					_context39.next = 30;
					return EvaluatorInstruction.stepMajor;

				case 30:
					return _context39.abrupt('return', nat);

				case 31:
				case 'end':
					return _context39.stop();
			}
		}
	}, _marked30, this);
}

function evaluateProgram(e, n, s) {
	var result, v, _iterator10, _isArray10, _i10, _ref10, statement;

	return _regenerator2.default.wrap(function evaluateProgram$(_context40) {
		while (1) {
			switch (_context40.prev = _context40.next) {
				case 0:
					result = Value.undef;

					if (n.vars) for (v in n.vars) {
						s.add(v, Value.undef);
					}
					if (n.strict === true) s.strict = true;

					if (!(e.yieldPower >= 4)) {
						_context40.next = 6;
						break;
					}

					_context40.next = 6;
					return EvaluatorInstruction.stepMajor;

				case 6:
					_iterator10 = n.body, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);

				case 7:
					if (!_isArray10) {
						_context40.next = 13;
						break;
					}

					if (!(_i10 >= _iterator10.length)) {
						_context40.next = 10;
						break;
					}

					return _context40.abrupt('break', 22);

				case 10:
					_ref10 = _iterator10[_i10++];
					_context40.next = 17;
					break;

				case 13:
					_i10 = _iterator10.next();

					if (!_i10.done) {
						_context40.next = 16;
						break;
					}

					return _context40.abrupt('break', 22);

				case 16:
					_ref10 = _i10.value;

				case 17:
					statement = _ref10;
					return _context40.delegateYield(e.branch(statement, s), 't0', 19);

				case 19:
					result = _context40.t0;

				case 20:
					_context40.next = 7;
					break;

				case 22:
					return _context40.abrupt('return', result);

				case 23:
				case 'end':
					return _context40.stop();
			}
		}
	}, _marked31, this);
}

function evaluateReturnStatement(e, n, s) {
	var retVal;
	return _regenerator2.default.wrap(function evaluateReturnStatement$(_context41) {
		while (1) {
			switch (_context41.prev = _context41.next) {
				case 0:
					retVal = Value.undef;

					if (!n.argument) {
						_context41.next = 4;
						break;
					}

					return _context41.delegateYield(e.branch(n.argument, s), 't0', 3);

				case 3:
					retVal = _context41.t0;

				case 4:
					if (!(e.yieldPower >= 2)) {
						_context41.next = 7;
						break;
					}

					_context41.next = 7;
					return EvaluatorInstruction.stepMajor;

				case 7:
					return _context41.abrupt('return', new CompletionRecord(CompletionRecord.RETURN, retVal));

				case 8:
				case 'end':
					return _context41.stop();
			}
		}
	}, _marked32, this);
}

function evaluateSequenceExpression(e, n, s) {
	var last, _iterator11, _isArray11, _i11, _ref11, expr;

	return _regenerator2.default.wrap(function evaluateSequenceExpression$(_context42) {
		while (1) {
			switch (_context42.prev = _context42.next) {
				case 0:
					last = Value.undef;

					if (!(e.yieldPower >= 4)) {
						_context42.next = 4;
						break;
					}

					_context42.next = 4;
					return EvaluatorInstruction.stepMajor;

				case 4:
					_iterator11 = n.expressions, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);

				case 5:
					if (!_isArray11) {
						_context42.next = 11;
						break;
					}

					if (!(_i11 >= _iterator11.length)) {
						_context42.next = 8;
						break;
					}

					return _context42.abrupt('break', 20);

				case 8:
					_ref11 = _iterator11[_i11++];
					_context42.next = 15;
					break;

				case 11:
					_i11 = _iterator11.next();

					if (!_i11.done) {
						_context42.next = 14;
						break;
					}

					return _context42.abrupt('break', 20);

				case 14:
					_ref11 = _i11.value;

				case 15:
					expr = _ref11;
					return _context42.delegateYield(e.branch(expr, s), 't0', 17);

				case 17:
					last = _context42.t0;

				case 18:
					_context42.next = 5;
					break;

				case 20:
					return _context42.abrupt('return', last);

				case 21:
				case 'end':
					return _context42.stop();
			}
		}
	}, _marked33, this);
}

function evaluateSuperExpression(e, n, s) {
	var fr, i, result;
	return _regenerator2.default.wrap(function evaluateSuperExpression$(_context43) {
		while (1) {
			switch (_context43.prev = _context43.next) {
				case 0:
					fr = void 0;
					i = 0;

				case 2:
					if (!(i < e.frames.length)) {
						_context43.next = 9;
						break;
					}

					fr = e.frames[i];

					if (!fr.creator) {
						_context43.next = 6;
						break;
					}

					return _context43.abrupt('break', 9);

				case 6:
					++i;
					_context43.next = 2;
					break;

				case 9:
					result = fr.creator.superTarget;
					return _context43.abrupt('return', result);

				case 11:
				case 'end':
					return _context43.stop();
			}
		}
	}, _marked34, this);
}

function evaluateSwitchStatement(e, n, s) {
	var discriminant, last, matches, matchVals, matched, i, cas, testval, equality, genSwitch, finished;
	return _regenerator2.default.wrap(function evaluateSwitchStatement$(_context45) {
		while (1) {
			switch (_context45.prev = _context45.next) {
				case 0:
					if (!(e.yieldPower >= 2)) {
						_context45.next = 3;
						break;
					}

					_context45.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					return _context45.delegateYield(e.branch(n.discriminant, s), 't0', 4);

				case 4:
					discriminant = _context45.t0;
					last = Value.undef;
					matches = 0;
					matchVals = new Array(n.cases.length);
					matched = false;
					i = 0;

				case 10:
					if (!(i < n.cases.length)) {
						_context45.next = 22;
						break;
					}

					cas = n.cases[i];

					if (!cas.test) {
						_context45.next = 19;
						break;
					}

					return _context45.delegateYield(e.branch(cas.test, s), 't1', 14);

				case 14:
					testval = _context45.t1;
					return _context45.delegateYield(testval.tripleEquals(discriminant), 't2', 16);

				case 16:
					equality = _context45.t2;

					if (equality.truthy) ++matches;
					matchVals[i] = equality.truthy;

				case 19:
					++i;
					_context45.next = 10;
					break;

				case 22:
					genSwitch = /*#__PURE__*/_regenerator2.default.mark(function genSwitch(e, n) {
						var _i12, _cas, _iterator12, _isArray12, _i13, _ref12, statement;

						return _regenerator2.default.wrap(function genSwitch$(_context44) {
							while (1) {
								switch (_context44.prev = _context44.next) {
									case 0:
										_i12 = 0;

									case 1:
										if (!(_i12 < n.cases.length)) {
											_context44.next = 31;
											break;
										}

										_cas = n.cases[_i12];

										if (matched) {
											_context44.next = 12;
											break;
										}

										if (!_cas.test) {
											_context44.next = 9;
											break;
										}

										if (matchVals[_i12]) {
											_context44.next = 7;
											break;
										}

										return _context44.abrupt('continue', 28);

									case 7:
										_context44.next = 11;
										break;

									case 9:
										if (!(matches !== 0)) {
											_context44.next = 11;
											break;
										}

										return _context44.abrupt('continue', 28);

									case 11:
										matched = true;

									case 12:
										_iterator12 = _cas.consequent, _isArray12 = Array.isArray(_iterator12), _i13 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);

									case 13:
										if (!_isArray12) {
											_context44.next = 19;
											break;
										}

										if (!(_i13 >= _iterator12.length)) {
											_context44.next = 16;
											break;
										}

										return _context44.abrupt('break', 28);

									case 16:
										_ref12 = _iterator12[_i13++];
										_context44.next = 23;
										break;

									case 19:
										_i13 = _iterator12.next();

										if (!_i13.done) {
											_context44.next = 22;
											break;
										}

										return _context44.abrupt('break', 28);

									case 22:
										_ref12 = _i13.value;

									case 23:
										statement = _ref12;
										return _context44.delegateYield(e.branch(statement, s), 't0', 25);

									case 25:
										last = _context44.t0;

									case 26:
										_context44.next = 13;
										break;

									case 28:
										++_i12;
										_context44.next = 1;
										break;

									case 31:
									case 'end':
										return _context44.stop();
								}
							}
						}, genSwitch, this);
					});


					e.pushFrame({ generator: genSwitch(e, n), type: 'loop', labels: n.labels });
					_context45.next = 26;
					return EvaluatorInstruction.waitForFramePop;

				case 26:
					finished = _context45.sent;
					return _context45.abrupt('return', last);

				case 28:
				case 'end':
					return _context45.stop();
			}
		}
	}, _marked35, this);
}

function evaluateTaggedTemplateExpression(e, n, s) {
	var quasis, expressions, value, fn, strings, rawStrings, i, sv, rv, args, _i14;

	return _regenerator2.default.wrap(function evaluateTaggedTemplateExpression$(_context47) {
		while (1) {
			switch (_context47.prev = _context47.next) {
				case 0:
					quasis = n.quasi.quasis;
					expressions = n.quasi.expressions;
					value = Value.fromNative(quasis[0].value.cooked);
					return _context47.delegateYield(e.branch(n.tag, s), 't0', 4);

				case 4:
					fn = _context47.t0;
					strings = [];
					rawStrings = [];

					for (i = 0; i < quasis.length; ++i) {
						strings.push(e.realm.fromNative(quasis[i].value.cooked));
						rawStrings.push(e.realm.fromNative(quasis[i].value.raw));
					}
					sv = ArrayValue.make(strings, e.realm);
					rv = ArrayValue.make(rawStrings, e.realm);

					sv.rawSetProperty('raw', new PropertyDescriptor(rv, false));

					args = [sv];
					_i14 = 0;

				case 13:
					if (!(_i14 < expressions.length)) {
						_context47.next = 21;
						break;
					}

					_context47.t1 = args;
					return _context47.delegateYield(e.branch(expressions[_i14], s), 't2', 16);

				case 16:
					_context47.t3 = _context47.t2;

					_context47.t1.push.call(_context47.t1, _context47.t3);

				case 18:
					++_i14;
					_context47.next = 13;
					break;

				case 21:
					return _context47.delegateYield(doCall(e, n, n.tag, s, /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
						return _regenerator2.default.wrap(function _callee7$(_context46) {
							while (1) {
								switch (_context46.prev = _context46.next) {
									case 0:
										return _context46.abrupt('return', args);

									case 1:
									case 'end':
										return _context46.stop();
								}
							}
						}, _callee7, this);
					})), 't4', 22);

				case 22:
					return _context47.abrupt('return', _context47.t4);

				case 23:
				case 'end':
					return _context47.stop();
			}
		}
	}, _marked36, this);
}

function evaluateTemplateLiteral(e, n, s) {
	var value, i;
	return _regenerator2.default.wrap(function evaluateTemplateLiteral$(_context48) {
		while (1) {
			switch (_context48.prev = _context48.next) {
				case 0:
					value = Value.fromNative(n.quasis[0].value.cooked);
					i = 0;

				case 2:
					if (!(i < n.expressions.length)) {
						_context48.next = 13;
						break;
					}

					_context48.t0 = value;
					return _context48.delegateYield(e.branch(n.expressions[i], s), 't1', 5);

				case 5:
					_context48.t2 = _context48.t1;
					return _context48.delegateYield(_context48.t0.add.call(_context48.t0, _context48.t2), 't3', 7);

				case 7:
					value = _context48.t3;
					return _context48.delegateYield(value.add(Value.fromNative(n.quasis[i + 1].value.cooked)), 't4', 9);

				case 9:
					value = _context48.t4;

				case 10:
					++i;
					_context48.next = 2;
					break;

				case 13:
					return _context48.abrupt('return', value);

				case 14:
				case 'end':
					return _context48.stop();
			}
		}
	}, _marked37, this);
}

function evaluateThisExpression(e, n, s) {
	return _regenerator2.default.wrap(function evaluateThisExpression$(_context49) {
		while (1) {
			switch (_context49.prev = _context49.next) {
				case 0:
					if (!(e.yieldPower >= 4)) {
						_context49.next = 3;
						break;
					}

					_context49.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					if (!s.thiz) {
						_context49.next = 7;
						break;
					}

					return _context49.abrupt('return', s.thiz);

				case 7:
					return _context49.abrupt('return', Value.undef);

				case 8:
				case 'end':
					return _context49.stop();
			}
		}
	}, _marked38, this);
}

function evaluateThrowStatement(e, n, s) {
	var value;
	return _regenerator2.default.wrap(function evaluateThrowStatement$(_context50) {
		while (1) {
			switch (_context50.prev = _context50.next) {
				case 0:
					return _context50.delegateYield(e.branch(n.argument, s), 't0', 1);

				case 1:
					value = _context50.t0;

					if (!(e.yieldPower >= 2)) {
						_context50.next = 5;
						break;
					}

					_context50.next = 5;
					return EvaluatorInstruction.stepMajor;

				case 5:
					return _context50.abrupt('return', new CompletionRecord(CompletionRecord.THROW, value));

				case 6:
				case 'end':
					return _context50.stop();
			}
		}
	}, _marked39, this);
}

function evaluateTryStatement(e, n, s) {
	var result, handlerScope;
	return _regenerator2.default.wrap(function evaluateTryStatement$(_context51) {
		while (1) {
			switch (_context51.prev = _context51.next) {
				case 0:
					if (!(e.yieldPower >= 2)) {
						_context51.next = 3;
						break;
					}

					_context51.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					if (n.finalizer) e.pushFrame({ generator: e.branch(n.finalizer, s), type: 'finally', scope: s });
					_context51.next = 6;
					return e.branchFrame('catch', n.block, s);

				case 6:
					result = _context51.sent;

					if (!(result instanceof CompletionRecord && result.type == CompletionRecord.THROW)) {
						_context51.next = 14;
						break;
					}

					if (n.handler) {
						_context51.next = 10;
						break;
					}

					return _context51.abrupt('return', result);

				case 10:
					handlerScope = s.createChild();

					handlerScope.add(n.handler.param.name, result.value);
					return _context51.delegateYield(e.branch(n.handler.body, handlerScope), 't0', 13);

				case 13:
					return _context51.abrupt('return', _context51.t0);

				case 14:
					return _context51.abrupt('return', result);

				case 15:
				case 'end':
					return _context51.stop();
			}
		}
	}, _marked40, this);
}

function evaluateUpdateExpression(e, n, s) {
	var nue, ref, old;
	return _regenerator2.default.wrap(function evaluateUpdateExpression$(_context52) {
		while (1) {
			switch (_context52.prev = _context52.next) {
				case 0:
					//TODO: Need to support something like ++x[1];
					nue = void 0;

					if (!(e.yieldPower >= 3)) {
						_context52.next = 4;
						break;
					}

					_context52.next = 4;
					return EvaluatorInstruction.stepMajor;

				case 4:
					return _context52.delegateYield(e.resolveRef(n.argument, s, true), 't0', 5);

				case 5:
					ref = _context52.t0;
					old = Value.nan;

					if (!ref) {
						_context52.next = 10;
						break;
					}

					return _context52.delegateYield(ref.getValue(), 't1', 9);

				case 9:
					old = _context52.t1;

				case 10:
					if (old === undefined) old = Value.nan;
					_context52.t2 = n.operator;
					_context52.next = _context52.t2 === '++' ? 14 : _context52.t2 === '--' ? 17 : 20;
					break;

				case 14:
					return _context52.delegateYield(old.add(e.fromNative(1)), 't3', 15);

				case 15:
					nue = _context52.t3;
					return _context52.abrupt('break', 21);

				case 17:
					return _context52.delegateYield(old.subtract(e.fromNative(1)), 't4', 18);

				case 18:
					nue = _context52.t4;
					return _context52.abrupt('break', 21);

				case 20:
					throw new Error('Unknown update expression type: ' + n.operator);

				case 21:
					if (!ref) {
						_context52.next = 23;
						break;
					}

					return _context52.delegateYield(ref.setValue(nue, s), 't5', 23);

				case 23:
					if (!n.prefix) {
						_context52.next = 25;
						break;
					}

					return _context52.abrupt('return', nue);

				case 25:
					return _context52.abrupt('return', old);

				case 26:
				case 'end':
					return _context52.stop();
			}
		}
	}, _marked41, this);
}

function evaluateUnaryExpression(e, n, s) {
	var ref, worked, left;
	return _regenerator2.default.wrap(function evaluateUnaryExpression$(_context53) {
		while (1) {
			switch (_context53.prev = _context53.next) {
				case 0:
					if (!(e.yieldPower >= 4)) {
						_context53.next = 3;
						break;
					}

					_context53.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					if (!(n.operator === 'delete')) {
						_context53.next = 18;
						break;
					}

					if (!(n.argument.type !== 'MemberExpression' && n.argument.type !== 'Identifier')) {
						_context53.next = 6;
						break;
					}

					return _context53.abrupt('return', Value.true);

				case 6:
					return _context53.delegateYield(e.resolveRef(n.argument, s), 't0', 7);

				case 7:
					ref = _context53.t0;

					if (ref) {
						_context53.next = 10;
						break;
					}

					return _context53.abrupt('return', Value.false);

				case 10:
					if (!(ref.isVariable || !ref.del)) {
						_context53.next = 12;
						break;
					}

					return _context53.abrupt('return', Value.false);

				case 12:
					worked = ref.del(s);

					if (!(worked instanceof CompletionRecord)) {
						_context53.next = 17;
						break;
					}

					_context53.next = 16;
					return worked;

				case 16:
					return _context53.abrupt('return', _context53.sent);

				case 17:
					return _context53.abrupt('return', Value.fromNative(worked));

				case 18:
					if (!(n.operator === 'typeof')) {
						_context53.next = 23;
						break;
					}

					if (!(n.argument.type == 'Identifier')) {
						_context53.next = 23;
						break;
					}

					if (s.has(n.argument.name)) {
						_context53.next = 23;
						break;
					}

					return _context53.delegateYield(Value.undef.typeOf(), 't1', 22);

				case 22:
					return _context53.abrupt('return', _context53.t1);

				case 23:
					return _context53.delegateYield(e.branch(n.argument, s), 't2', 24);

				case 24:
					left = _context53.t2;
					_context53.t3 = n.operator;
					_context53.next = _context53.t3 === '-' ? 28 : _context53.t3 === '+' ? 30 : _context53.t3 === '!' ? 32 : _context53.t3 === '~' ? 34 : _context53.t3 === 'typeof' ? 36 : _context53.t3 === 'void' ? 38 : 39;
					break;

				case 28:
					return _context53.delegateYield(left.unaryMinus(), 't4', 29);

				case 29:
					return _context53.abrupt('return', _context53.t4);

				case 30:
					return _context53.delegateYield(left.unaryPlus(), 't5', 31);

				case 31:
					return _context53.abrupt('return', _context53.t5);

				case 32:
					return _context53.delegateYield(left.not(), 't6', 33);

				case 33:
					return _context53.abrupt('return', _context53.t6);

				case 34:
					return _context53.delegateYield(left.bitNot(), 't7', 35);

				case 35:
					return _context53.abrupt('return', _context53.t7);

				case 36:
					return _context53.delegateYield(left.typeOf(), 't8', 37);

				case 37:
					return _context53.abrupt('return', _context53.t8);

				case 38:
					return _context53.abrupt('return', Value.undef);

				case 39:
					throw new Error('Unknown binary operator: ' + n.operator);

				case 40:
				case 'end':
					return _context53.stop();
			}
		}
	}, _marked42, this);
}

function evaluateVariableDeclaration(e, n, s) {
	var kind, add, _iterator13, _isArray13, _i15, _ref13, decl, value, name, r, _value, _iterator14, _isArray14, _i16, _ref14, prop, _r, _value2, idx, _iterator15, _isArray15, _i17, _ref15, _prop, len, rest, _r2;

	return _regenerator2.default.wrap(function evaluateVariableDeclaration$(_context54) {
		while (1) {
			switch (_context54.prev = _context54.next) {
				case 0:
					kind = n.kind;

					if (!(e.yieldPower >= 3)) {
						_context54.next = 4;
						break;
					}

					_context54.next = 4;
					return EvaluatorInstruction.stepMajor;

				case 4:
					add = function add(name, decl, value) {
						if (kind === 'const') {
							if (s.has(name)) {
								return CompletionRecord.makeSyntaxError(e.realm, 'Identifier \'' + name + '\' has already been declared');
							}
							s.addConst(name, value);
						} else if (kind == 'let') {
							if (s.blockHas(name)) {
								return CompletionRecord.makeSyntaxError(e.realm, 'Identifier \'' + name + '\' has already been declared');
							}
							s.addBlock(name, value);
						} else {
							if (!decl.init && s.has(name)) {} else {
								s.add(name, value);
							}
						}
						return false;
					};

					_iterator13 = n.declarations, _isArray13 = Array.isArray(_iterator13), _i15 = 0, _iterator13 = _isArray13 ? _iterator13 : (0, _getIterator3.default)(_iterator13);

				case 6:
					if (!_isArray13) {
						_context54.next = 12;
						break;
					}

					if (!(_i15 >= _iterator13.length)) {
						_context54.next = 9;
						break;
					}

					return _context54.abrupt('break', 107);

				case 9:
					_ref13 = _iterator13[_i15++];
					_context54.next = 16;
					break;

				case 12:
					_i15 = _iterator13.next();

					if (!_i15.done) {
						_context54.next = 15;
						break;
					}

					return _context54.abrupt('break', 107);

				case 15:
					_ref13 = _i15.value;

				case 16:
					decl = _ref13;

					if (!(decl.id.type == 'Identifier')) {
						_context54.next = 28;
						break;
					}

					value = Value.undef;
					name = decl.id.name;

					if (!decl.init) {
						_context54.next = 23;
						break;
					}

					return _context54.delegateYield(e.branch(decl.init, s), 't0', 22);

				case 22:
					value = _context54.t0;

				case 23:
					r = add(name, decl, value);

					if (!r) {
						_context54.next = 26;
						break;
					}

					return _context54.abrupt('return', r);

				case 26:
					_context54.next = 105;
					break;

				case 28:
					if (!(decl.id.type == 'ObjectPattern')) {
						_context54.next = 57;
						break;
					}

					_value = Value.undef;

					if (!decl.init) {
						_context54.next = 33;
						break;
					}

					return _context54.delegateYield(e.branch(decl.init, s), 't1', 32);

				case 32:
					_value = _context54.t1;

				case 33:
					_iterator14 = decl.id.properties, _isArray14 = Array.isArray(_iterator14), _i16 = 0, _iterator14 = _isArray14 ? _iterator14 : (0, _getIterator3.default)(_iterator14);

				case 34:
					if (!_isArray14) {
						_context54.next = 40;
						break;
					}

					if (!(_i16 >= _iterator14.length)) {
						_context54.next = 37;
						break;
					}

					return _context54.abrupt('break', 55);

				case 37:
					_ref14 = _iterator14[_i16++];
					_context54.next = 44;
					break;

				case 40:
					_i16 = _iterator14.next();

					if (!_i16.done) {
						_context54.next = 43;
						break;
					}

					return _context54.abrupt('break', 55);

				case 43:
					_ref14 = _i16.value;

				case 44:
					prop = _ref14;
					_context54.t2 = add;
					_context54.t3 = prop.value.name;
					_context54.t4 = decl;
					return _context54.delegateYield(_value.get(prop.key.name), 't5', 49);

				case 49:
					_context54.t6 = _context54.t5;
					_r = (0, _context54.t2)(_context54.t3, _context54.t4, _context54.t6);

					if (!_r) {
						_context54.next = 53;
						break;
					}

					return _context54.abrupt('return', _r);

				case 53:
					_context54.next = 34;
					break;

				case 55:
					_context54.next = 105;
					break;

				case 57:
					if (!(decl.id.type == 'ArrayPattern')) {
						_context54.next = 102;
						break;
					}

					_value2 = Value.undef;

					if (!decl.init) {
						_context54.next = 62;
						break;
					}

					return _context54.delegateYield(e.branch(decl.init, s), 't7', 61);

				case 61:
					_value2 = _context54.t7;

				case 62:
					idx = 0;
					_iterator15 = decl.id.elements, _isArray15 = Array.isArray(_iterator15), _i17 = 0, _iterator15 = _isArray15 ? _iterator15 : (0, _getIterator3.default)(_iterator15);

				case 64:
					if (!_isArray15) {
						_context54.next = 70;
						break;
					}

					if (!(_i17 >= _iterator15.length)) {
						_context54.next = 67;
						break;
					}

					return _context54.abrupt('break', 100);

				case 67:
					_ref15 = _iterator15[_i17++];
					_context54.next = 74;
					break;

				case 70:
					_i17 = _iterator15.next();

					if (!_i17.done) {
						_context54.next = 73;
						break;
					}

					return _context54.abrupt('break', 100);

				case 73:
					_ref15 = _i17.value;

				case 74:
					_prop = _ref15;

					if (!(_prop.type === 'RestElement')) {
						_context54.next = 89;
						break;
					}

					return _context54.delegateYield(_value2.get('length'), 't8', 77);

				case 77:
					len = _context54.t8.toNative();
					rest = [];

				case 79:
					if (!(idx < len)) {
						_context54.next = 86;
						break;
					}

					_context54.t9 = rest;
					return _context54.delegateYield(_value2.get(idx++), 't10', 82);

				case 82:
					_context54.t11 = _context54.t10;

					_context54.t9.push.call(_context54.t9, _context54.t11);

					_context54.next = 79;
					break;

				case 86:
					return _context54.abrupt('return', add(_prop.argument.name, decl, ArrayValue.make(rest, s.realm)));

				case 89:
					_context54.t12 = add;
					_context54.t13 = _prop.name;
					_context54.t14 = decl;
					return _context54.delegateYield(_value2.get(idx), 't15', 93);

				case 93:
					_context54.t16 = _context54.t15;
					_r2 = (0, _context54.t12)(_context54.t13, _context54.t14, _context54.t16);

					if (!_r2) {
						_context54.next = 97;
						break;
					}

					return _context54.abrupt('return', _r2);

				case 97:
					++idx;

				case 98:
					_context54.next = 64;
					break;

				case 100:
					_context54.next = 105;
					break;

				case 102:
					_context54.next = 104;
					return CompletionRecord.typeError('Couldnt resolve declarations component: ' + decl.id.type);

				case 104:
					return _context54.abrupt('return', _context54.sent);

				case 105:
					_context54.next = 6;
					break;

				case 107:
					return _context54.abrupt('return', Value.undef);

				case 108:
				case 'end':
					return _context54.stop();
			}
		}
	}, _marked43, this);
}

function genWhileLoop(e, n, s) {
	var last;
	return _regenerator2.default.wrap(function genWhileLoop$(_context55) {
		while (1) {
			switch (_context55.prev = _context55.next) {
				case 0:
					last = Value.undef;

				case 1:
					return _context55.delegateYield(e.branch(n.test, s), 't0', 2);

				case 2:
					if (!_context55.t0.truthy) {
						_context55.next = 12;
						break;
					}

					e.topFrame.ast = n;

					if (!(e.yieldPower > 0)) {
						_context55.next = 7;
						break;
					}

					_context55.next = 7;
					return EvaluatorInstruction.eventLoopBodyStart;

				case 7:
					_context55.next = 9;
					return e.branchFrame('continue', n.body, s);

				case 9:
					last = _context55.sent;
					_context55.next = 1;
					break;

				case 12:
				case 'end':
					return _context55.stop();
			}
		}
	}, _marked44, this);
}

function evaluateWhileStatement(e, n, s) {
	var finished;
	return _regenerator2.default.wrap(function evaluateWhileStatement$(_context56) {
		while (1) {
			switch (_context56.prev = _context56.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context56.next = 3;
						break;
					}

					_context56.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					e.pushFrame({ generator: genWhileLoop(e, n, s), type: 'loop', labels: n.labels, ast: n });
					_context56.next = 6;
					return EvaluatorInstruction.waitForFramePop;

				case 6:
					finished = _context56.sent;
					return _context56.abrupt('return', Value.undef);

				case 8:
				case 'end':
					return _context56.stop();
			}
		}
	}, _marked45, this);
}

function evaluateWithStatement(e, n, s) {
	var o, ns, pairs, p;
	return _regenerator2.default.wrap(function evaluateWithStatement$(_context57) {
		while (1) {
			switch (_context57.prev = _context57.next) {
				case 0:
					if (!(e.yieldPower > 0)) {
						_context57.next = 3;
						break;
					}

					_context57.next = 3;
					return EvaluatorInstruction.stepMajor;

				case 3:
					if (!s.strict) {
						_context57.next = 5;
						break;
					}

					return _context57.abrupt('return', CompletionRecord.makeSyntaxError(e.realm, 'Strict mode code may not include a with statement'));

				case 5:
					return _context57.delegateYield(e.branch(n.object, s), 't0', 6);

				case 6:
					o = _context57.t0;
					ns = s.createBlockChild();

					if (o instanceof ObjectValue) {
						pairs = o.getPropertyValueMap();

						for (p in pairs) {
							ns.set(p, pairs[p]);
						}
					}
					return _context57.delegateYield(e.branch(n.body, ns), 't1', 10);

				case 10:
					return _context57.abrupt('return', _context57.t1);

				case 11:
				case 'end':
					return _context57.stop();
			}
		}
	}, _marked46, this);
}

function findNextStep(type) {
	switch (type) {
		case 'ArrayExpression':
			return evaluateArrayExpression;
		case 'ArrowFunctionExpression':
			return evaluateFunctionExpression;
		case 'AssignmentExpression':
			return evaluateAssignmentExpression;
		case 'BinaryExpression':
			return evaluateBinaryExpression;
		case 'BreakStatement':
			return evaluateBreakStatement;
		case 'BlockStatement':
			return evaluateBlockStatement;
		case 'CallExpression':
			return evaluateCallExpression;
		case 'ClassDeclaration':
			return evaluateClassDeclaration;
		case 'ClassExpression':
			return evaluateClassExpression;
		case 'ConditionalExpression':
			return evaluateConditionalExpression;
		case 'DebuggerStatement':
			return evaluateEmptyStatement;
		case 'DoWhileStatement':
			return evaluateDoWhileStatement;
		case 'ContinueStatement':
			return evaluateContinueStatement;
		case 'EmptyStatement':
			return evaluateEmptyStatement;
		case 'ExpressionStatement':
			return evaluateExpressionStatement;
		case 'ForStatement':
			return evaluateForStatement;
		case 'ForInStatement':
			return evaluateForInStatement;
		case 'ForOfStatement':
			return evaluateForOfStatement;
		case 'FunctionDeclaration':
			return evaluateFunctionDeclaration;
		case 'FunctionExpression':
			return evaluateFunctionExpression;
		case 'Identifier':
			return evaluateIdentifier;
		case 'IfStatement':
			return evaluateIfStatement;
		case 'ImportDeclaration':
			return evaluateImportDeclaration;
		case 'LabeledStatement':
			return evaluateLabeledStatement;
		case 'Literal':
			return evaluateLiteral;
		case 'LogicalExpression':
			return evaluateLogicalExpression;
		case 'MetaProperty':
			return evaluateMetaProperty;
		case 'MemberExpression':
			return evaluateMemberExpression;
		case 'NewExpression':
			return evaluateCallExpression;
		case 'ObjectExpression':
			return evaluateObjectExpression;
		case 'Program':
			return evaluateProgram;
		case 'ReturnStatement':
			return evaluateReturnStatement;
		case 'SequenceExpression':
			return evaluateSequenceExpression;
		case 'Super':
			return evaluateSuperExpression;
		case 'SwitchStatement':
			return evaluateSwitchStatement;
		case 'TaggedTemplateExpression':
			return evaluateTaggedTemplateExpression;
		case 'TemplateLiteral':
			return evaluateTemplateLiteral;
		case 'ThisExpression':
			return evaluateThisExpression;
		case 'ThrowStatement':
			return evaluateThrowStatement;
		case 'TryStatement':
			return evaluateTryStatement;
		case 'UnaryExpression':
			return evaluateUnaryExpression;
		case 'UpdateExpression':
			return evaluateUpdateExpression;
		case 'VariableDeclaration':
			return evaluateVariableDeclaration;
		case 'WhileStatement':
			return evaluateWhileStatement;
		case 'WithStatement':
			return evaluateWithStatement;

		case 'BooleanLiteral':
		case 'StringLiteral':
		case 'NumericLiteral':
		case 'NullLiteral':
			return evaluateLiteral;

		default:
			throw new Error('Unknown AST Node Type: ' + type);
	}
}

function doResolveRef(n, s, create, branch) {
	var iref, idx, ref, refs, _iterator16, _isArray16, _i18, _ref16, e, orefs, _iterator18, _isArray18, _i20, _ref18, _e3, rref, def;

	return _regenerator2.default.wrap(function doResolveRef$(_context63) {
		while (1) {
			switch (_context63.prev = _context63.next) {
				case 0:
					_context63.t0 = n.type;
					_context63.next = _context63.t0 === 'Identifier' ? 3 : _context63.t0 === 'MemberExpression' ? 6 : _context63.t0 === 'ArrayPattern' ? 24 : _context63.t0 === 'ObjectPattern' ? 44 : _context63.t0 === 'AssignmentPattern' ? 62 : _context63.t0 === 'VariableDeclarator' ? 68 : 70;
					break;

				case 3:
					iref = s.ref(n.name, s.realm);

					if (!iref) {
						iref = {
							getValue: /*#__PURE__*/_regenerator2.default.mark(function getValue() {
								var err;
								return _regenerator2.default.wrap(function getValue$(_context58) {
									while (1) {
										switch (_context58.prev = _context58.next) {
											case 0:
												err = CompletionRecord.makeReferenceError(s.realm, n.name + ' is not defined');
												return _context58.delegateYield(err.addExtra({ code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict }), 't0', 2);

											case 2:
												_context58.next = 4;
												return err;

											case 4:
												return _context58.abrupt('return', _context58.sent);

											case 5:
											case 'end':
												return _context58.stop();
										}
									}
								}, getValue, this);
							}),
							del: function del() {
								return true;
							}
						};
						if (!create || s.strict) {
							iref.setValue = /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
								var err;
								return _regenerator2.default.wrap(function _callee8$(_context59) {
									while (1) {
										switch (_context59.prev = _context59.next) {
											case 0:
												err = CompletionRecord.makeReferenceError(s.realm, n.name + ' is not defined');
												return _context59.delegateYield(err.addExtra({ code: 'UndefinedVariable', when: 'write', ident: n.name, strict: s.strict }), 't0', 2);

											case 2:
												_context59.next = 4;
												return err;

											case 4:
												return _context59.abrupt('return', _context59.sent);

											case 5:
											case 'end':
												return _context59.stop();
										}
									}
								}, _callee8, this);
							});
						} else {
							iref.setValue = /*#__PURE__*/_regenerator2.default.mark(function _callee9(value) {
								var aref;
								return _regenerator2.default.wrap(function _callee9$(_context60) {
									while (1) {
										switch (_context60.prev = _context60.next) {
											case 0:
												s.global.set(n.name, value, s);
												aref = s.global.ref(n.name, s);

												this.setValue = aref.setValue;
												this.getValue = aref.getValue;
												this.del = s.strict ? aref.deleteStrict : aref.delete;

											case 5:
											case 'end':
												return _context60.stop();
										}
									}
								}, _callee9, this);
							});
						}
					}

					return _context63.abrupt('return', iref);

				case 6:
					idx = void 0;
					return _context63.delegateYield(branch(n.object, s), 't1', 8);

				case 8:
					ref = _context63.t1;

					if (!n.computed) {
						_context63.next = 14;
						break;
					}

					return _context63.delegateYield(branch(n.property, s), 't2', 11);

				case 11:
					idx = _context63.t2.toNative();
					_context63.next = 15;
					break;

				case 14:
					idx = n.property.name;

				case 15:
					if (ref) {
						_context63.next = 19;
						break;
					}

					_context63.next = 18;
					return CompletionRecord.typeError('Can\'t write property of undefined: ' + idx);

				case 18:
					return _context63.abrupt('return', _context63.sent);

				case 19:
					if (ref.ref) {
						_context63.next = 23;
						break;
					}

					_context63.next = 22;
					return CompletionRecord.typeError('Can\'t write property of non-object type: ' + idx);

				case 22:
					return _context63.abrupt('return', _context63.sent);

				case 23:
					return _context63.abrupt('return', ref.ref(idx, s));

				case 24:
					refs = [];
					//TODO: This should take an iterable

					_iterator16 = n.elements, _isArray16 = Array.isArray(_iterator16), _i18 = 0, _iterator16 = _isArray16 ? _iterator16 : (0, _getIterator3.default)(_iterator16);

				case 26:
					if (!_isArray16) {
						_context63.next = 32;
						break;
					}

					if (!(_i18 >= _iterator16.length)) {
						_context63.next = 29;
						break;
					}

					return _context63.abrupt('break', 43);

				case 29:
					_ref16 = _iterator16[_i18++];
					_context63.next = 36;
					break;

				case 32:
					_i18 = _iterator16.next();

					if (!_i18.done) {
						_context63.next = 35;
						break;
					}

					return _context63.abrupt('break', 43);

				case 35:
					_ref16 = _i18.value;

				case 36:
					e = _ref16;
					_context63.t3 = refs;
					return _context63.delegateYield(doResolveRef(e, s, false, branch), 't4', 39);

				case 39:
					_context63.t5 = _context63.t4;

					_context63.t3.push.call(_context63.t3, _context63.t5);

				case 41:
					_context63.next = 26;
					break;

				case 43:
					return _context63.abrupt('return', {
						setValue: /*#__PURE__*/_regenerator2.default.mark(function setValue(v) {
							var idx, _iterator17, _isArray17, _i19, _ref17, r;

							return _regenerator2.default.wrap(function setValue$(_context61) {
								while (1) {
									switch (_context61.prev = _context61.next) {
										case 0:
											idx = 0;
											_iterator17 = refs, _isArray17 = Array.isArray(_iterator17), _i19 = 0, _iterator17 = _isArray17 ? _iterator17 : (0, _getIterator3.default)(_iterator17);

										case 2:
											if (!_isArray17) {
												_context61.next = 8;
												break;
											}

											if (!(_i19 >= _iterator17.length)) {
												_context61.next = 5;
												break;
											}

											return _context61.abrupt('break', 22);

										case 5:
											_ref17 = _iterator17[_i19++];
											_context61.next = 12;
											break;

										case 8:
											_i19 = _iterator17.next();

											if (!_i19.done) {
												_context61.next = 11;
												break;
											}

											return _context61.abrupt('break', 22);

										case 11:
											_ref17 = _i19.value;

										case 12:
											r = _ref17;

											if (v.has(idx)) {
												_context61.next = 15;
												break;
											}

											return _context61.abrupt('break', 22);

										case 15:
											_context61.t0 = r;
											return _context61.delegateYield(v.get(idx), 't1', 17);

										case 17:
											_context61.t2 = _context61.t1;
											return _context61.delegateYield(_context61.t0.setValue.call(_context61.t0, _context61.t2), 't3', 19);

										case 19:
											++idx;

										case 20:
											_context61.next = 2;
											break;

										case 22:
										case 'end':
											return _context61.stop();
									}
								}
							}, setValue, this);
						})
					});

				case 44:
					orefs = {};
					_iterator18 = n.properties, _isArray18 = Array.isArray(_iterator18), _i20 = 0, _iterator18 = _isArray18 ? _iterator18 : (0, _getIterator3.default)(_iterator18);

				case 46:
					if (!_isArray18) {
						_context63.next = 52;
						break;
					}

					if (!(_i20 >= _iterator18.length)) {
						_context63.next = 49;
						break;
					}

					return _context63.abrupt('break', 61);

				case 49:
					_ref18 = _iterator18[_i20++];
					_context63.next = 56;
					break;

				case 52:
					_i20 = _iterator18.next();

					if (!_i20.done) {
						_context63.next = 55;
						break;
					}

					return _context63.abrupt('break', 61);

				case 55:
					_ref18 = _i20.value;

				case 56:
					_e3 = _ref18;
					return _context63.delegateYield(doResolveRef(_e3.value, s, false, branch), 't6', 58);

				case 58:
					orefs[_e3.key.name] = _context63.t6;

				case 59:
					_context63.next = 46;
					break;

				case 61:
					return _context63.abrupt('return', {
						setValue: /*#__PURE__*/_regenerator2.default.mark(function setValue(v) {
							var k;
							return _regenerator2.default.wrap(function setValue$(_context62) {
								while (1) {
									switch (_context62.prev = _context62.next) {
										case 0:
											_context62.t0 = _regenerator2.default.keys(orefs);

										case 1:
											if ((_context62.t1 = _context62.t0()).done) {
												_context62.next = 11;
												break;
											}

											k = _context62.t1.value;

											if (v.has(k)) {
												_context62.next = 5;
												break;
											}

											return _context62.abrupt('break', 11);

										case 5:
											_context62.t2 = orefs[k];
											return _context62.delegateYield(v.get(k), 't3', 7);

										case 7:
											_context62.t4 = _context62.t3;
											return _context62.delegateYield(_context62.t2.setValue.call(_context62.t2, _context62.t4), 't5', 9);

										case 9:
											_context62.next = 1;
											break;

										case 11:
										case 'end':
											return _context62.stop();
									}
								}
							}, setValue, this);
						})
					});

				case 62:
					return _context63.delegateYield(doResolveRef(n.left, s, false, branch), 't7', 63);

				case 63:
					rref = _context63.t7;
					return _context63.delegateYield(branch(n.right, s), 't8', 65);

				case 65:
					def = _context63.t8;
					return _context63.delegateYield(rref.setValue(def), 't9', 67);

				case 67:
					return _context63.abrupt('return', rref);

				case 68:
					return _context63.delegateYield(doResolveRef(n.id, s, create, branch), 't10', 69);

				case 69:
					return _context63.abrupt('return', _context63.t10);

				case 70:
					_context63.next = 72;
					return CompletionRecord.typeError('Couldnt resolve ref component: ' + n.type);

				case 72:
					return _context63.abrupt('return', _context63.sent);

				case 73:
				case 'end':
					return _context63.stop();
			}
		}
	}, _marked47, this);
}

module.exports = {
	evaluateIdentifier: evaluateIdentifier,
	findNextStep: findNextStep,
	classFeatures: classFeatures,
	doResolveRef: doResolveRef
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

var _promise = __webpack_require__(111);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyValue = __webpack_require__(168);
var Value = __webpack_require__(105);

function defer() {
	var resolve, reject;
	var promise = new _promise2.default(function (a, b) {
		resolve = a;
		reject = b;
	});
	return {
		resolve: resolve,
		reject: reject,
		promise: promise
	};
}

var FutureValue = function (_Value) {
	(0, _inherits3.default)(FutureValue, _Value);

	function FutureValue(realm) {
		(0, _classCallCheck3.default)(this, FutureValue);

		var _this = (0, _possibleConstructorReturn3.default)(this, (FutureValue.__proto__ || (0, _getPrototypeOf2.default)(FutureValue)).call(this, realm));

		_this.resolved = false;
		_this.successful = undefined;
		_this.value = undefined;
		_this.defered = defer();
		return _this;
	}

	/**
  * Creates a new future value wraping the promise p.
  * @param {Promise} promise
  */


	(0, _createClass3.default)(FutureValue, [{
		key: 'resolve',
		value: function resolve(value) {
			this.value = value;
			this.resolved = true;
			this.successful = true;
			this.defered.resolve(value);
		}
	}, {
		key: 'reject',
		value: function reject(value) {
			this.value = value;
			this.resolved = true;
			this.successful = false;
			this.defered.resolve(value);
		}
	}, {
		key: 'then',
		value: function then() {
			var p = this.defered.promise;
			return p.then.apply(p, arguments);
		}
	}, {
		key: 'jsTypeName',
		get: function get() {
			return 'internal:future';
		}
	}, {
		key: 'debugString',
		get: function get() {
			return '[Future]';
		}
	}], [{
		key: 'make',
		value: function make(promise) {
			var fv = new FutureValue(null);
			promise.then(function (resolved) {
				fv.resolve(Value.fromNative(resolved));
			}, function (caught) {
				fv.reject(Value.fromNative(caught));
			});
			return fv;
		}
	}]);
	return FutureValue;
}(Value);

module.exports = FutureValue;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(165);
var ObjectValue = __webpack_require__(158);
var Value = __webpack_require__(105);

var RegExpValue = function (_ObjectValue) {
	(0, _inherits3.default)(RegExpValue, _ObjectValue);

	function RegExpValue(realm) {
		(0, _classCallCheck3.default)(this, RegExpValue);
		return (0, _possibleConstructorReturn3.default)(this, (RegExpValue.__proto__ || (0, _getPrototypeOf2.default)(RegExpValue)).call(this, realm, realm.RegExpPrototype));
	}

	(0, _createClass3.default)(RegExpValue, [{
		key: 'toNative',
		value: function toNative() {
			return this.regexp;
		}
	}, {
		key: 'debugString',
		get: function get() {
			return this.regexp.toString();
		}
	}], [{
		key: 'make',
		value: function make(regexp, realm) {

			var av = new RegExpValue(realm);
			av.regexp = regexp;
			av.setImmediate('source', Value.fromNative(regexp.source));
			av.properties['source'].enumerable = false;
			av.setImmediate('global', Value.fromNative(regexp.global));
			av.properties['global'].enumerable = false;
			av.setImmediate('ignoreCase', Value.fromNative(regexp.ignoreCase));
			av.properties['ignoreCase'].enumerable = false;
			av.setImmediate('multiline', Value.fromNative(regexp.multiline));
			av.properties['multiline'].enumerable = false;
			return av;
		}
	}]);
	return RegExpValue;
}(ObjectValue);

RegExpValue.prototype.clazz = 'RegExp';

module.exports = RegExpValue;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty = __webpack_require__(35);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimitiveValue = __webpack_require__(165);
var ObjectValue = __webpack_require__(158);
var Value = __webpack_require__(105);
var EvaluatorInstruction = __webpack_require__(157);

var ErrorInstance = function (_ObjectValue) {
	(0, _inherits3.default)(ErrorInstance, _ObjectValue);

	function ErrorInstance(realm, proto) {
		(0, _classCallCheck3.default)(this, ErrorInstance);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ErrorInstance.__proto__ || (0, _getPrototypeOf2.default)(ErrorInstance)).call(this, realm, proto));

		_this.realm = realm;
		return _this;
	}

	(0, _createClass3.default)(ErrorInstance, [{
		key: 'createNativeAnalog',
		value: function createNativeAnalog() {
			if (!this.native) {
				var stack = void 0;
				var NativeClass = this.proto.nativeClass || Error;
				this.native = new NativeClass();
				if (!this.native.stack) {
					try {
						throw this.native;
					} catch (e) {
						stack = e.stack;
					}
				} else {
					stack = this.native.stack;
				}

				var frames = stack ? stack.split(/\n/) : [];
				if (stack.length > 1) {
					var header = frames.shift();
					while (/at (ErrorInstance.createNativeAnalog|ErrorObject.make|Function.makeTypeError)/.test(frames[0])) {
						frames.shift();
					}
					this.native.stack = header + '\n' + frames.join('\n');
				}
				for (var k in this.extra) {
					this.native[k] = this.extra[k];
				}
			}
			return this.native;
		}
	}, {
		key: 'toNative',
		value: function toNative() {
			var out = this.createNativeAnalog();
			var msg = this.properties['message'].value;
			if (msg) out.message = msg.toNative();

			if (this.properties['stack']) {
				msg.stack = this.properties['stack'].value.native;
			}

			out.value = this;

			return out;
		}
	}, {
		key: 'addExtra',
		value: /*#__PURE__*/_regenerator2.default.mark(function addExtra(extra) {
			var evaluator, scope, ast, list, _k, v, k;

			return _regenerator2.default.wrap(function addExtra$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (this.realm.options.extraErrorInfo) {
								_context.next = 2;
								break;
							}

							return _context.abrupt('return');

						case 2:
							_context.next = 4;
							return EvaluatorInstruction.getEvaluator;

						case 4:
							evaluator = _context.sent;

							if (!evaluator) {
								_context.next = 21;
								break;
							}

							scope = evaluator.topFrame.scope;
							ast = extra.ast = evaluator.topFrame.ast;

							extra.scope = scope;
							//TODO: Sometiems scope is undefined, figure out why.
							if (extra.ast.loc) {
								extra.line = extra.ast.loc.start.line;
							}

							_context.t0 = extra.code;
							_context.next = _context.t0 === 'UndefinedVariable' ? 13 : _context.t0 === 'SmartAccessDenied' ? 13 : _context.t0 === 'CallNonFunction' ? 15 : _context.t0 === 'IndexEmpty' ? 20 : 21;
							break;

						case 13:
							if (scope) extra.candidates = scope.getVariableNames();
							return _context.abrupt('break', 21);

						case 15:
							list = void 0;

							if (extra.base && extra.base.getPropertyValueMap) {
								list = extra.base.getPropertyValueMap();
							} else {
								list = scope.object.getPropertyValueMap();
							}

							extra.candidates = [];
							for (_k in list) {
								v = list[_k];

								if (v && v.isCallable) {
									extra.candidates.push(_k);
								}
							}
							return _context.abrupt('break', 21);

						case 20:
							return _context.abrupt('break', 21);

						case 21:
							if (this.native) {
								for (k in extra) {
									if (['ast', 'scope', 'candidates', 'targetAst'].indexOf(k) !== -1) {
										(0, _defineProperty2.default)(this.native, k, {
											value: extra[k],
											enumerable: false
										});
									} else {
										this.native[k] = extra[k];
									}
								}
							}
							this.extra = extra;

						case 23:
						case 'end':
							return _context.stop();
					}
				}
			}, addExtra, this);
		})
	}]);
	return ErrorInstance;
}(ObjectValue);

module.exports = ErrorInstance;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyValue = __webpack_require__(168);
var Value = __webpack_require__(105);

var UndefinedValue = function (_EmptyValue) {
	(0, _inherits3.default)(UndefinedValue, _EmptyValue);

	function UndefinedValue() {
		(0, _classCallCheck3.default)(this, UndefinedValue);
		return (0, _possibleConstructorReturn3.default)(this, (UndefinedValue.__proto__ || (0, _getPrototypeOf2.default)(UndefinedValue)).apply(this, arguments));
	}

	(0, _createClass3.default)(UndefinedValue, [{
		key: 'toNative',
		value: function toNative() {
			return undefined;
		}
	}, {
		key: 'tripleEquals',
		value: /*#__PURE__*/_regenerator2.default.mark(function tripleEquals(other, realm) {
			return _regenerator2.default.wrap(function tripleEquals$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', other instanceof UndefinedValue ? Value.true : Value.false);

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, tripleEquals, this);
		})
	}, {
		key: 'add',
		value: /*#__PURE__*/_regenerator2.default.mark(function add(other) {
			return _regenerator2.default.wrap(function add$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt('return', Value.fromNative(undefined + other.toNative()));

						case 1:
						case 'end':
							return _context2.stop();
					}
				}
			}, add, this);
		})
	}, {
		key: 'asString',
		value: /*#__PURE__*/_regenerator2.default.mark(function asString() {
			return _regenerator2.default.wrap(function asString$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							return _context3.abrupt('return', 'undefined');

						case 1:
						case 'end':
							return _context3.stop();
					}
				}
			}, asString, this);
		})
	}, {
		key: 'toPrimitiveValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toPrimitiveValue(preferedType) {
			return _regenerator2.default.wrap(function toPrimitiveValue$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							return _context4.abrupt('return', this);

						case 1:
						case 'end':
							return _context4.stop();
					}
				}
			}, toPrimitiveValue, this);
		})
	}, {
		key: 'toNumberValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toNumberValue() {
			return _regenerator2.default.wrap(function toNumberValue$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							return _context5.abrupt('return', Value.nan);

						case 1:
						case 'end':
							return _context5.stop();
					}
				}
			}, toNumberValue, this);
		})
	}, {
		key: 'toStringValue',
		value: /*#__PURE__*/_regenerator2.default.mark(function toStringValue() {
			return _regenerator2.default.wrap(function toStringValue$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							return _context6.abrupt('return', Value.fromNative('undefined'));

						case 1:
						case 'end':
							return _context6.stop();
					}
				}
			}, toStringValue, this);
		})
	}, {
		key: 'jsTypeName',
		get: function get() {
			return 'undefined';
		}
	}, {
		key: 'debugString',
		get: function get() {
			return 'undefined';
		}
	}]);
	return UndefinedValue;
}(EmptyValue);

module.exports = UndefinedValue;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

var _regenerator = __webpack_require__(3);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(83);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = __webpack_require__(105);
var ObjectValue = __webpack_require__(158);
var CompletionRecord = __webpack_require__(149);

var EasyNativeFunction = function (_ObjectValue) {
	(0, _inherits3.default)(EasyNativeFunction, _ObjectValue);

	function EasyNativeFunction(realm) {
		(0, _classCallCheck3.default)(this, EasyNativeFunction);
		return (0, _possibleConstructorReturn3.default)(this, (EasyNativeFunction.__proto__ || (0, _getPrototypeOf2.default)(EasyNativeFunction)).call(this, realm, realm.FunctionPrototype));
	}

	(0, _createClass3.default)(EasyNativeFunction, [{
		key: 'call',
		value: /*#__PURE__*/_regenerator2.default.mark(function call(thiz, argz, scope, extra) {
			var profile,
			    start,
			    s,
			    o,
			    _args = arguments;
			return _regenerator2.default.wrap(function call$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							profile = false;
							start = 0;
							_context.prev = 2;

							if (extra && extra.evaluator && extra.evaluator.debug) {
								profile = true;
								start = Date.now();
							}
							s = scope ? scope.createChild() : scope;

							if (s) s.strict = true;
							return _context.delegateYield(this.fn.apply(this.binding, _args, s, extra), 't0', 7);

						case 7:
							o = _context.t0;

							if (!(o instanceof CompletionRecord)) {
								_context.next = 10;
								break;
							}

							return _context.abrupt('return', o);

						case 10:
							if (!(o instanceof Value)) o = scope.realm.makeForForeignObject(o);
							if (profile) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
							return _context.abrupt('return', new CompletionRecord(CompletionRecord.NORMAL, o));

						case 15:
							_context.prev = 15;
							_context.t1 = _context['catch'](2);

							if (profile) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
							return _context.abrupt('return', new CompletionRecord(CompletionRecord.THROW, scope.realm.makeForForeignObject(_context.t1)));

						case 19:
						case 'end':
							return _context.stop();
					}
				}
			}, call, this, [[2, 15]]);
		})
	}, {
		key: 'makeThisForNew',
		value: /*#__PURE__*/_regenerator2.default.mark(function makeThisForNew(realm) {
			return _regenerator2.default.wrap(function makeThisForNew$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return CompletionRecord.typeError('function is not a constructor');

						case 2:
							return _context2.abrupt('return', _context2.sent);

						case 3:
						case 'end':
							return _context2.stop();
					}
				}
			}, makeThisForNew, this);
		})
	}, {
		key: 'debugString',
		get: function get() {
			return 'function() { [Native Code] }';
		}
	}], [{
		key: 'make',
		value: function make(realm, fx, binding) {
			var out = new EasyNativeFunction(realm);
			out.fn = fx;
			out.binding = binding;
			return out;
		}
	}, {
		key: 'makeForNative',
		value: function makeForNative(realm, fx) {
			var out = new EasyNativeFunction(realm);
			out.fn = /*#__PURE__*/_regenerator2.default.mark(function _callee(thiz, args) {
				var rargs, i, nt, nr;
				return _regenerator2.default.wrap(function _callee$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								rargs = new Array(args.length);

								for (i = 0; i < args.length; ++i) {
									rargs[i] = args[i].toNative();
								}
								nt = thiz.toNative();
								nr = fx.apply(nt, rargs);
								return _context3.abrupt('return', Value.fromNative(nr));

							case 5:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee, this);
			});
			return out;
		}
	}]);
	return EasyNativeFunction;
}(ObjectValue);

EasyNativeFunction.prototype.clazz = 'Function';

module.exports = EasyNativeFunction;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var fs = __webpack_require__(182);
var path = __webpack_require__(183);

var str = void 0;

if (fs.readFileSync) str = fs.readFileSync(path.join(__dirname, 'node_modules', 'skulpty', 'lib', 'stdlib.js'), 'utf8');else str = __webpack_require__(185);

module.exports = str.replace(/^var pythonRuntime = module.exports/, 'var __pythonRuntime');
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 182 */
/***/ (function(module, exports) {



/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(184)))

/***/ }),
/* 184 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = "(function (root, factory) {\n  'use strict';\n  if(typeof exports === 'object' && typeof module === 'object')\n    module.exports = factory();\n  else if(typeof define === 'function' && define.amd)\n    define([], factory);\n  else if(typeof exports === 'object')\n    exports[\"__pythonRuntime\"] = factory();\n  else\n    root[\"__pythonRuntime\"] = factory();\n}(this, function() {\n  'use strict';\n  var pythonRuntime = {\n    internal: {\n      // Only used within runtime\n      isSeq: function (a) { return a && (a._type === \"list\" || a._type === \"tuple\"); },\n      slice: function (obj, start, end, step) {\n        var slice;\n        if ( typeof obj === 'string' ) slice = function(x,y) { return obj.substring(x,y); }\n        else slice = obj.slice.bind(obj);\n\n        if (step == null || step === 0) step = 1; // TODO: step === 0 is a runtime error\n        if (start == null) {\n          if (step < 0) start = obj.length - 1;\n          else start = 0;\n        } else if (start < 0) start += obj.length;\n        if (end == null) {\n          if (step < 0) end = -1;\n          else end = obj.length;\n        } else if (end < 0) end += obj.length;\n\n        var ret = new pythonRuntime.objects.list(), tmp, i;\n        if (step < 0) {\n          tmp = slice(end + 1, start + 1);\n          for (i = tmp.length - 1; i >= 0; i += step) ret.append(tmp[i]);\n        } else {\n          tmp = slice(start, end);\n          if (step === 1 && typeof tmp !== 'string') ret = pythonRuntime.utils.createList(tmp);\n          else for (i = 0; i < tmp.length; i += step) ret.append(tmp[i]);\n        }\n        if ( typeof obj === 'string' ) return ret.join('');\n        return ret;\n      },\n      isJSArray: Array.isArray || function(obj) {\n        return toString.call(obj) === '[object Array]';\n      }\n    },\n\n    utils: {\n      createDict: function () {\n        var ret = new pythonRuntime.objects.dict();\n        if (arguments.length === 1 && arguments[0] instanceof Object)\n          for (var k in arguments[0]) ret[k] = arguments[0][k];\n        else\n          throw TypeError(\"createDict expects a single JavaScript object\");\n        return ret;\n      },\n      createParamsObj: function () {\n        // In: expr, expr, ..., {id:expr, __kwp:true}, {id:expr, __kwp:true}, ...\n        // Out: {formals:[expr, expr, ...], keywords:{id:expr, id:expr, ...}}\n        var params = { formals: new pythonRuntime.objects.list(), keywords: new PythonDict() };\n        for (var i = 0; i < arguments.length; i++) {\n          if (arguments[i] && arguments[i].__kwp === true) {\n            for (var k in arguments[i])\n              if (k !== '__kwp') params.keywords[k] = arguments[i][k];\n          }\n          else params.formals.push(arguments[i]);\n        }\n        return params;\n      },\n      convertToList: function (list) {\n        Object.defineProperties(list, pythonRuntime.utils.listPropertyDescriptor);\n        return list;\n      },\n      convertToDict: function (dict) {\n        Object.defineProperties(dict, pythonRuntime.utils.dictPropertyDescriptor);\n        return dict;\n      }, \n      listPropertyDescriptor: {\n          \"_type\": {\n            value: 'list',\n            writable: false,\n            enumerable: false\n          },\n          \"_isPython\": {\n            value: true,\n            writable: false,\n            enumerable: false\n          },\n          \"append\": {\n            value: function (x) {\n              this.push(x);\n            },\n            enumerable: false\n          },\n          \"clear\": {\n            value: function () {\n              this.splice(0, this.length);\n            },\n            enumerable: false\n          },\n          \"copy\": {\n            value: function () {\n              return this.slice(0);\n            },\n            enumerable: false\n          },\n          \"count\": {\n            value: function (x) {\n              var c = 0;\n              for (var i = 0; i < this.length; i++)\n                if (this[i] === x) c++;\n              return c;\n            },\n            enumerable: false\n          },\n          \"equals\": {\n            value: function (x) {\n              try {\n                if (this.length !== x.length) return false;\n                for (var i = 0; i < this.length; i++) {\n                  if (this[i].hasOwnProperty(\"equals\")) {\n                    if (!this[i].equals(x[i])) return false;\n                  } else if (this[i] !== x[i]) return false;\n                }\n                return true;\n              }\n              catch (e) { }\n              return false;\n            },\n            enumerable: false\n          },\n          \"extend\": {\n            value: function (L) {\n              for (var i = 0; i < L.length; i++) this.push(L[i]);\n            },\n            enumerable: false\n          },\n          \"index\": {\n            value: function (x) {\n              return this.indexOf(x);\n            },\n            enumerable: false\n          },\n          \"indexOf\": {\n            value: function (x, fromIndex) {\n              try {\n                for (var i = fromIndex ? fromIndex : 0; i < this.length; i++) {\n                  if (this[i].hasOwnProperty(\"equals\")) {\n                    if (this[i].equals(x)) return i;\n                  } else if (this[i] === x) return i;\n                }\n              }\n              catch (e) { }\n              return -1;\n            },\n            enumerable: false\n          },\n          \"insert\": {\n            value: function (i, x) {\n              this.splice(i, 0, x);\n            },\n            enumerable: false\n          },\n          \"pop\": {\n            value: function (i) {\n              if (arguments.length<1) i = this.length - 1;\n              var item = this[i];\n              this.splice(i, 1);\n              return item;\n            },\n            enumerable: false\n          },\n          \"_pySlice\": {\n            value: function (start, end, step) {\n              return pythonRuntime.internal.slice(this, start, end, step);\n            },\n            enumerable: false\n          },\n          \"remove\": {\n            value: function (x) {\n              this.splice(this.indexOf(x), 1);\n            },\n            enumerable: false\n          },\n          \"sort\": {\n            value: function(x, reverse) {\n              var list2 = this.slice(0);\n              var apply_key = function(a, numerical) {\n                var list3 = list2.map(x);\n                // construct a dict that maps the listay before and after the map\n                var mapping = {};\n                for(var i in list3) mapping[list3[i]] = list2[i];\n                if(numerical)\n                  list3.sort(function(a, b) { return a - b; });\n                else\n                  list3.sort();\n                for(var i in a) a[i] = mapping[list3[i]];\n              };\n              for(var i in this) {\n                if(typeof this[i] !== 'number' || !isFinite(this[i])) {\n                  if(typeof x != 'undefined') {\n                    apply_key(this, false);\n                  }\n                  else {\n                    list2.sort();\n                    for (var j in this) this[j] = list2[j];\n                  }\n                  if(reverse)\n                    this.reverse();\n                  return;\n                }\n              }\n              if(typeof x != 'undefined') {\n                apply_key(this, true);\n              }\n              else {\n                list2.sort(function(a, b) { return a - b; });\n                for(var i in this) this[i] = list2[i];\n              }\n              if(reverse)\n                this.reverse();\n            },\n            enumerable: false\n          },\n          \"toString\": {\n            value: function () {\n              return '[' + this.join(', ') + ']';\n            },\n            enumerable: false\n          }\n      },\n      createList: function () {\n        var ret = new pythonRuntime.objects.list();\n        if (arguments.length === 1 && arguments[0] instanceof Array)\n          for (var i in arguments[0]) ret.push(arguments[0][i]);\n        else\n          for (var i in arguments) ret.push(arguments[i]);\n        return ret;\n      },\n      dictPropertyDescriptor: {\n        \"_type\": {\n          value: 'dict',\n          writable: false\n        },\n        \"_isPython\": {\n          value: true,\n          enumerable: false\n        },\n        \"items\": {\n          value: function () {\n            var items = new pythonRuntime.objects.list();\n            for (var k in this) items.append(new pythonRuntime.objects.tuple(k, this[k]));\n            return items;\n          },\n          enumerable: false\n        },\n        \"length\": {\n          get: function () {\n            return Object.keys(this).length;\n          },\n          enumerable: false\n        },\n        \"clear\": {\n          value: function () {\n            for (var i in this) delete this[i];\n          },\n          enumerable: false\n        },\n        \"get\": {\n          value: function (key, def) {\n            if (key in this) return this[key];\n            else if (def !== undefined) return def;\n            return null;\n          },\n          enumerable: false\n        },\n        \"keys\": {\n          value: function () {\n            return Object.keys(this);\n          },\n          enumerable: false\n        },\n        \"pop\": {\n          value: function (key, def) {\n            var value;\n            if (key in this) {\n              value = this[key];\n              delete this[key];\n            } else if (def !== undefined) value = def;\n            else return new Error(\"KeyError\");\n            return value;\n          },\n          enumerable: false\n        }, \"values\": {\n          value: function () {\n            var values = new pythonRuntime.objects.list();\n            for (var key in this) values.append(this[key]);\n            return values;\n          },\n          enumerable: false\n        }\n      }\n    },\n    ops: {\n      add: function (a, b) {\n        if (typeof a === 'object' && pythonRuntime.internal.isSeq(a) && pythonRuntime.internal.isSeq(b)) {\n          if (a._type !== b._type)\n            throw TypeError(\"can only concatenate \" + a._type + \" (not '\" + b._type + \"') to \" + a._type);\n          var ret;\n          if (a._type === 'list') ret = new pythonRuntime.objects.list();\n          else if (a._type === 'tuple') ret = new pythonRuntime.objects.tuple();\n          if (ret) {\n            for (var i = 0; i < a.length; i++) ret.push(a[i]);\n            for (var i = 0; i < b.length; i++) ret.push(b[i]);\n            return ret;\n          }\n        }\n        return a + b;\n      },\n      in: function (a, b, n) {\n        var r = b.hasOwnProperty('indexOf') ? b.indexOf(a) >= 0 : a in b;\n        return n ? !r : r;\n      },\n      multiply: function (a, b) {\n        // TODO: non-sequence operand must be an integer\n        if ( typeof a === 'object' ) {\n          if (pythonRuntime.internal.isSeq(a) && !isNaN(parseInt(b))) {\n            var ret;\n            if (a._type === 'list') ret = new pythonRuntime.objects.list();\n            else if (a._type === 'tuple') ret = new pythonRuntime.objects.tuple();\n            if (ret) {\n              for (var i = 0; i < b; i++)\n                for (var j = 0; j < a.length; j++) ret.push(a[j]);\n              return ret;\n            }\n          } else if (pythonRuntime.internal.isSeq(b) && !isNaN(parseInt(a))) {\n            var ret;\n            if (b._type === 'list') ret = new pythonRuntime.objects.list();\n            else if (b._type === 'tuple') ret = new pythonRuntime.objects.tuple();\n            if (ret) {\n              for (var i = 0; i < a; i++)\n                for (var j = 0; j < b.length; j++) ret.push(b[j]);\n              return ret;\n            }\n          }\n        }\n        return a * b;\n      },\n      subscriptIndex: function (o, i) {\n        if ( i >= 0 ) return i;\n        if ( pythonRuntime.internal.isSeq(o) ) return o.length + i;\n        if ( pythonRuntime.internal.isJSArray(o) ) return o.length + i;\n        if ( typeof o === \"string\" ) return o.length + i;\n        return i;\n      }\n    },\n\n    objects: {\n      dict: function () {\n        var obj = new PythonDict();\n        for (var i = 0; i < arguments.length; ++i ) obj[arguments[i][0]] = arguments[i][1];\n        return obj;\n      },\n      list: function () {\n        var arr = [];\n        arr.push.apply(arr, arguments);\n        pythonRuntime.utils.convertToList(arr);\n        return arr;\n      },\n      tuple: function () {\n        var arr = [];\n        arr.push.apply(arr, arguments);\n        Object.defineProperty(arr, \"_type\",\n        {\n          get: function () { return 'tuple'; },\n          enumerable: false\n        });\n        Object.defineProperty(arr, \"_isPython\",\n        {\n          get: function () { return true; },\n          enumerable: false\n        });\n        Object.defineProperty(arr, \"count\",\n        {\n          value: function (x) {\n            var c = 0;\n            for (var i = 0; i < this.length; i++)\n              if (this[i] === x) c++;\n            return c;\n          },\n          enumerable: false\n        });\n        Object.defineProperty(arr, \"equals\",\n        {\n          value: function (x) {\n            try {\n              if (this.length !== x.length) return false;\n              for (var i = 0; i < this.length; i++) {\n                if (this[i].hasOwnProperty(\"equals\")) {\n                  if (!this[i].equals(x[i])) return false;\n                } else if (this[i] !== x[i]) return false;\n              }\n              return true;\n            }\n            catch (e) { }\n            return false;\n          },\n          enumerable: false\n        });\n        Object.defineProperty(arr, \"index\",\n        {\n          value: function (x) {\n            return this.indexOf(x);\n          },\n          enumerable: false\n        });\n        Object.defineProperty(arr, \"indexOf\",\n        {\n          value: function (x, fromIndex) {\n            try {\n              for (var i = fromIndex ? fromIndex : 0; i < this.length; i++) {\n                if (this[i].hasOwnProperty(\"equals\")) {\n                  if (this[i].equals(x)) return i;\n                } else if (this[i] === x) return i;\n              }\n            }\n            catch (e) { }\n            return -1;\n          },\n          enumerable: false\n        });\n        Object.defineProperty(arr, \"_pySlice\",\n        {\n          value: function (start, end, step) { \n            return pythonRuntime.internal.slice(this, start, end, step);\n          },\n            enumerable: false\n        });\n        Object.defineProperty(arr, \"toString\",\n        {\n          value: function () {\n            var s = '(' + this.join(', ');\n            if (this.length === 1) s += ',';\n            s += ')';\n            return s;\n          },\n          enumerable: false\n        });\n        return arr;\n      }\n    },\n\n    // Python built-in functions\n\n    functions: {\n      abs: function(x) {\n        return Math.abs(x);\n      },\n      all: function(iterable) {\n        for (var i in iterable) if (pythonRuntime.functions.bool(iterable[i]) !== true) return false;\n        return true;\n      },\n      any: function(iterable) {\n        for (var i in iterable) if (pythonRuntime.functions.bool(iterable[i]) === true) return true;\n        return false;\n      },\n      ascii: function(obj) {\n        var s = pythonRuntime.functions.repr(obj),\n            asc = \"\",\n            code;\n        for (var i = 0; i < s.length; i++) {\n          code = s.charCodeAt(i);\n          if (code <= 127) asc += s[i];\n          else if (code <= 0xFF) asc += \"\\\\x\" + code.toString(16);\n          else if (0xD800 <= code && code <= 0xDBFF) { // UCS-2 for the astral chars\n            // if (i+1 >= s.length) throw \"High surrogate not followed by low surrogate\"; // Is this needed?\n            code = ((code-0xD800)*0x400)+(s.charCodeAt(++i)-0xDC00)+0x10000;\n            asc += \"\\\\U\" + (\"000\"+code.toString(16)).slice(-8);\n          } else if (code <= 0xFFFF) asc += \"\\\\u\" + (\"0\"+code.toString(16)).slice(-4);\n          else if (code <= 0x10FFFF) asc += \"\\\\U\" + (\"000\"+code.toString(16)).slice(-8);\n          else; // Invalid value, should probably throw something. It should never get here though as strings shouldn't contain them in the first place\n        }\n        return asc;\n      },\n      bool: function(x) {\n        return !(x === undefined || // No argument\n                 x === null || // None\n                 x === false || // False\n                 x === 0 || // Zero\n                 x.length === 0 || // Empty Sequence\n                 // TODO: Empty Mapping, needs more support for python mappings first\n                 (x.__bool__ !== undefined && x.__bool__() === false) || // If it has bool conversion defined\n                 (x.__len__ !== undefined && (x.__len__() === false || x.__len__() === 0))); // If it has length conversion defined\n      },\n      chr: function(i) {\n        return String.fromCharCode(i); // TODO: Error code for not 0 <= i <= 1114111\n      },\n      divmod: function(a, b) {\n        return pythonRuntime.objects.tuple(Math.floor(a/b), a%b);\n      },\n      enumerate: function(iterable, start) {\n        start = start || 0;\n        var ret = new pythonRuntime.objects.list();\n        for (var i in iterable) ret.push(new pythonRuntime.objects.tuple(start++, iterable[i]));\n        return ret;\n      },\n      filter: function(fn, iterable) {\n        fn = fn || function () { return true; };\n        var ret = new pythonRuntime.objects.list();\n        for (var i in iterable) if (fn(iterable[i])) ret.push(iterable[i]);\n        return ret;\n      },\n      float: function(x) {\n        if (x === undefined) return 0.0;\n        else if (typeof x == \"string\") { // TODO: Fix type check\n          x = x.trim().toLowerCase();\n          if ((/^[+-]?inf(inity)?$/i).exec(x) !== null) return Infinity*(x[0]===\"-\"?-1:1);\n          else if ((/^nan$/i).exec(x) !== null) return NaN;\n          else return parseFloat(x);\n        } else if (typeof x == \"number\") { // TODO: Fix type check\n          return x; // TODO: Get python types working right so we can return an actual float\n        } else {\n          if (x.__float__ !== undefined) return x.__float__();\n          else return null; // TODO: Throw TypeError: float() argument must be a string or a number, not '<type of x>'\n        }\n      },\n      hex: function(x) {\n        return x.toString(16);\n      },\n      int: function (s) {\n        return parseInt(s);\n      },\n      len: function (o) {\n        return o.length;\n      },\n      list: function (iterable) {\n        var ret = new pythonRuntime.objects.list();\n        if ( arguments.length == 0 ) return ret;\n        if ( arguments.length > 1 ) throw new TypeError('list() takes at most 1 argument (' + arguments.length + ' given)');\n        if (iterable instanceof Array) for (var i in iterable) ret.push(iterable[i]);\n        else for (var i in iterable) ret.push(i);\n        return ret;\n      },\n      map: function(fn, iterable) {\n        // TODO: support additional iterables passed\n        var ret = new pythonRuntime.objects.list();\n        for (var i in iterable) ret.push(fn(iterable[i]));\n        return ret;\n      },\n      max: function(arg1, arg2) {\n        // TODO: support optional keyword-only arguments\n        // TODO: empty iterable raises Python ValueError\n        if (!arg2) { // iterable\n          var max = null;\n          for (var i in arg1) if (max === null || arg1[i] > max) max = arg1[i];\n          return max;\n        } else return arg1 >= arg2 ? arg1 : arg2;\n      },\n      min: function(arg1, arg2) {\n        // TODO: support optional keyword-only arguments\n        // TODO: empty iterable raises Python ValueError\n        if (!arg2) { // iterable\n          var max = null;\n          for (var i in arg1) if (max === null || arg1[i] < max) max = arg1[i];\n          return max;\n        } else return arg1 <= arg2 ? arg1 : arg2;\n      },\n      oct: function(x) {\n        return x.toString(8);\n      },\n      ord: function(c) {\n        return c.charCodeAt(0);\n      },\n      pow: function(x, y, z) {\n        return z ? Math.pow(x, y) % z : Math.pow(x, y);\n      },\n      print: function () {\n        var s = \"\";\n        for (var i = 0; i < arguments.length; i++)\n          s += i === 0 ? arguments[i] : \" \" + arguments[i];\n        console.log(s);\n      },\n      range: function (start, stop, step) {\n        if (stop === undefined) {\n          stop = start;\n          start = 0;\n          step = 1;\n        }\n        else if (step === undefined) step = 1;\n        var len = ~~((stop - start) / step); //~~ is a fast floor\n        if ( len < 0 ) return pythonRuntime.utils.convertToList([]);\n        var r = new Array(len);\n        var element = 0;\n\n        var i = start;\n        while (i < stop && step > 0 || i > stop && step < 0) {\n          r[element++] = i;\n          i += step;\n        }\n\n        pythonRuntime.utils.convertToList(r);\n        return r;\n      },\n      repr: function (obj) {\n        if (typeof obj === 'string') return \"'\" + obj + \"'\"; // TODO: Patch until typesystem comes up.\n        if (obj.__repr__ !== undefined) return obj.__repr__();\n        else if (obj.__class__ !== undefined && obj.__class__.module !== undefined && obj.__class__.__name__) {\n          return '<'+obj.__class__.__module__+'.'+obj.__class__.__name__+' object>';\n        } else return obj.toString(); // Raise a please report warning here, we should never reach this piece of code\n      },\n      reversed: function (seq) {\n        var ret = new pythonRuntime.objects.list();\n        for (var i in seq) ret.push(seq[i]);\n        return ret.reverse();\n      },\n      round: function (num, ndigits) {\n        if (ndigits) {\n          var scale = Math.pow(10, ndigits);\n          return Math.round(num * scale) / scale;\n        }\n        return Math.round(num);\n      },\n      sorted: function (iterable, key, reverse) {\n        var ret = new pythonRuntime.objects.list();\n        for (var i in iterable) ret.push(iterable[i]);\n        if(key) ret.sort(key); else ret.sort();\n        if (reverse) ret.reverse();\n        return ret;\n      },\n      str: function (obj) {\n        return obj.toString();\n      },\n      sum: function (iterable, start) {\n        // TODO: start can't be a string\n        var ret = start || 0;\n        for (var i in iterable) ret += iterable[i];\n        return ret;\n      },\n      tuple: function (iterable) {\n        var ret = new pythonRuntime.objects.tuple();\n        for (var i in iterable) ret.push(iterable[i]);\n        return ret;\n      }\n    },\n\n    // Python imports\n    // TODO: from x import y, z\n\n    imports: {\n      random: {\n        random: function () { return Math.random(); }\n      }\n    }\n  };\n\n  function PythonDict() {\n\n  }\n\n  Object.defineProperties(PythonDict.prototype, pythonRuntime.utils.dictPropertyDescriptor);\n  return pythonRuntime;\n}));\n\n"

/***/ })
/******/ ]);
});