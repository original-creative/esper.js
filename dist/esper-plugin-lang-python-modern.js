/*!
 * esper.js
 * 
 * Compiled: Mon Dec 27 2021 15:08:10 GMT+0800 (China Standard Time)
 * Target  : web (umd)
 * Profile : modern
 * Version : 8fea03d-dirty
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


const skulpty = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'skulpty'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const PythonRuntime = __webpack_require__(3);
let esper;

function parser(code, options) {
	options = options || {};
	let opts = { locations: true, ranges: true };
	let ast = skulpty.parse(code, opts);
	let fixThis = {
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

const startupCode = __webpack_require__(26);
let startupCodeAST;

let plugin = module.exports = {
	name: 'lang-python',
	skulpty: skulpty,
	parser: parser,
	init: function (e) {
		esper = e;
		esper.languages.python = plugin;
		startupCodeAST = esper.languages.javascript.parser(startupCode);
	},
	setupRealm: function (realm) {
		realm.PythonString = class PythonString extends esper.StringValue {
			derivePrototype(realm) {
				return realm.pythonStringBaseInstance;
			}
		};

		class PythonStringBase extends esper.EasyObjectValue {
			static *join$e(thiz, args, s) {
				if (args.length != 1) return esper.CompletionRecord.makeTypeError(s.realm, `join() takes exactly one argument (${args.length} given)`);
				let j = yield* s.realm.ArrayPrototype.get('join', s);

				return yield* j.call(args[0], [thiz], s);
			}
		}

		realm.pythonStringBaseInstance = new PythonStringBase(realm);

		//Copy JS string functions for python that are pretty close.
		let map = {
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
		for (let k in map) {
			realm.pythonStringBaseInstance.properties[k] = realm.StringPrototype.properties[map[k]];
		}
		realm.loadLangaugeStartupCode(startupCodeAST);
		realm.PythonRuntime = new PythonRuntime.PythonRuntime(realm);
		realm.PythonListProto = new PythonRuntime.PythonListProto(realm);
		realm.PythonList = new PythonRuntime.PythonList(realm);
		let pr = realm.globalScope.get("__pythonRuntime");
		let copy = (x, y, z) => pr.getImmediate(x).setImmediate(y, realm.PythonRuntime.getImmediate(z));
		//copy("ops","subscriptIndex", "subscriptIndex");
		copy("functions", "str", "str");
	},
	startupCode: () => startupCodeAST,
	makeLiteralValue: function (v, realm, n) {
		if (n.nonUserCode) return;
		if (typeof v !== 'string') return;
		return new realm.PythonString(v, realm);
	}
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EasyObjectValue = __webpack_require__(4);
const ObjectValue = __webpack_require__(12);
const ArrayValue = __webpack_require__(19);
const PrimitiveValue = __webpack_require__(13);
const CompletionRecord = __webpack_require__(6);
const Value = __webpack_require__(5);
const _g = __webpack_require__(7);

class PythonRuntime extends EasyObjectValue {
	constructor(realm) {
		super(realm);

		let functions = new ObjectValue(realm);
		functions.setImmediate("str", this.getImmediate("str"));
		functions.setImmediate("range", this.getImmediate("range"));
		functions.setImmediate("round", this.getImmediate("round"));
		functions.setImmediate("abs", realm.Math.getImmediate("abs"));

		this.setImmediate("functions", functions);

		let objects = new ObjectValue(realm);
		objects.setImmediate("list", new PythonList(realm));
		objects.setImmediate("tuple", new PythonList(realm));
		this.setImmediate("objects", objects);

		let ops = new ObjectValue(realm);
		ops.setImmediate("multiply", this.getImmediate("multiply"));
		ops.setImmediate("add", this.getImmediate("add"));
		ops.setImmediate("subscriptIndex", this.getImmediate("subscriptIndex"));
		ops.setImmediate("in", this.getImmediate("in"));
		this.setImmediate("ops", ops);
	}
	static *list$e(thiz, args, s) {
		return new PythonList(s.realm);
	}

	static *makeList$e(thiz, args, s) {
		return new PythonList(s.realm);
	}

	static *str$e(thiz, args, s) {
		return yield* args[0].toStringValue();
	}

	static *range(thiz, args, s) {
		let result = [];
		let start = 0;
		let step = 1;
		let end = yield* args[0].toIntNative();
		if (args.length > 1) {
			start = end;
			end = yield* args[1].toIntNative();
		}
		if (args.length > 2) {
			step = yield* args[2].toIntNative();
		}
		console.log(start, step, end);

		let i = start;
		while (i < end && step > 0 || i > end && step < 0) {
			result.push(Value.fromNative(i));
			i += step;
		}

		return yield* s.realm.PythonList.call(null, result, s);
	}

	static *round$e(thiz, args, s) {
		if (args.length > 0) {
			let n = yield* args[0].toNumberNative();
			let digits = yield* args[1].toIntNative();
			let extra = Math.pow(10, digits);
			return Value.fromNative(Math.round(n * extra) / extra);
		}
		return Value.fromNative(Math.round((yield* args[0].toNumberNative())));
	}

	static *in$e(thiz, args, s) {
		let t = args[0];
		let o = args[1];
		if (o.has("indexOf")) {
			let result = yield* (yield* o.get("indexOf")).call(Value.undef, [t], s);
			return yiled * result.toBoolean();
		}
		return yield* o.inOperator(t);
	}

	//Ops

	static *add$e(thiz, args, s) {
		return yield* args[0].add(args[1]);
	}

	static *multiply$e(thiz, args, s) {
		return yield* args[0].multiply(args[1]);
	}

	static *subscriptIndex$e(thiz, args, s) {
		return yield* args[0].get(args[1].toNative());
	}
}

class PythonList extends EasyObjectValue {
	*call(thiz, args, s) {
		let result = new ArrayValue(s.realm);
		result.setPrototype(s.realm.PythonListProto);

		result.setImmediate('length', Value.fromNative(args.length));
		result.properties.length.enumerable = false;

		for (let i = 0; i < args.length; ++i) {
			let v = args[i];
			if (!(v instanceof Value)) v = realm.fromNative(v);
			result.setImmediate(i, v);
		}
		console.log(result.debugString);
		return result;
	}

	callPrototype(realm) {
		return realm.PythonListProto;
	}
	constructorFor(realm) {
		return realm.PythonListProto;
	}
	//objPrototype(realm) { return realm.Function; }
}

class PythonListProto extends EasyObjectValue {
	constructor(realm) {
		super(realm);
		this.setImmediate("push", realm.ArrayPrototype.getImmediate("push"));
		this.setImmediate("pop", realm.ArrayPrototype.getImmediate("pop"));
		this.setImmediate("sort", realm.ArrayPrototype.getImmediate("sort"));
	}

}
PythonListProto.prototype.wellKnownName = '%PythonList%';

module.exports = { PythonRuntime, PythonList, PythonListProto };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(5);
const PropertyDescriptor = __webpack_require__(10);
const ObjectValue = __webpack_require__(12);
const CompletionRecord = __webpack_require__(6);
const EasyNativeFunction = __webpack_require__(25);

class EasyObjectValue extends ObjectValue {
	constructor(realm) {
		super(realm);

		let objProto = realm.ObjectPrototype;
		if (typeof this.objPrototype === 'function') {
			objProto = this.objPrototype(realm);
		} else if (typeof this.call === 'function') {
			objProto = realm.FunctionPrototype;
		}
		if (this.call == 'function') this.clazz = 'Function';
		this.setPrototype(objProto);

		this._init(realm);
		this.easyRef = Object.getPrototypeOf(this).constructor;
	}

	_init(realm) {
		var clazz = Object.getPrototypeOf(this);
		for (let p of Object.getOwnPropertyNames(clazz.constructor)) {
			if (p === 'length') continue;
			if (p === 'name') continue;
			if (p === 'prototype') continue;
			if (p === 'constructor') continue;
			if (p === 'caller') continue;
			if (p === 'callee') continue;
			if (p === 'arguments') continue;
			let parts = p.split(/\$/);
			let flags = parts.length > 1 ? parts.pop() : '';
			let name = parts.join('');

			let d = Object.getOwnPropertyDescriptor(clazz.constructor, p);
			let v = new PropertyDescriptor();
			let length = 1;

			if (d.get) {
				//Its a property
				let val = d.get();
				if (val instanceof Value) v.value = val;else v.value = realm.fromNative(val);
			} else {
				if (d.value.esperLength !== undefined) length = d.value.esperLength;
				let rb = EasyNativeFunction.make(realm, d.value, this);

				let rblen = new PropertyDescriptor(Value.fromNative(length));
				rblen.configurable = false;
				rblen.writable = false;
				rblen.enumerable = false;
				rb.properties['length'] = rblen;

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
			let pt = new PropertyDescriptor(this.callPrototype(realm));
			pt.configurable = false;
			pt.enumerable = false;
			pt.writable = false;
			this.properties['prototype'] = pt;
		}

		if (this.callLength !== undefined) {
			let rblen = new PropertyDescriptor(Value.fromNative(this.callLength));
			rblen.configurable = false;
			rblen.writable = false;
			rblen.enumerable = false;
			this.properties['length'] = rblen;
		}

		if (this.constructorFor) {
			let target = this.constructorFor(realm);
			if (target) {
				let cs = new PropertyDescriptor(this);
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

	get jsTypeName() {
		return typeof this.call === 'function' ? 'function' : 'object';
	}
}

EasyObjectValue.EasyNativeFunction = EasyNativeFunction;

module.exports = EasyObjectValue;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const CompletionRecord = __webpack_require__(6);
const GenDash = __webpack_require__(7);

let undef, nil, tru, fals, nan, emptyString, zero, one, negone, negzero, smallIntValues;
let cache = new WeakMap();
let bookmarks = new WeakMap();
let ObjectValue, PrimitiveValue, StringValue, NumberValue, BridgeValue, Evaluator;

let serial = 0;
/**
 * Represents a value a variable could take.
 */
class Value {
	/**
  * Convert a native javascript primative value to a Value
  * @param {any} value - The value to convert
  */
	static fromPrimativeNative(value) {
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
				let snv = smallIntValues[value + 1];
				if (snv) return snv;
			}
			return new NumberValue(value);
		}
		if (typeof value === 'string') return new StringValue(value);
		if (typeof value === 'boolean') return tru;
	}

	static hasBookmark(native) {
		return bookmarks.has(native);
	}
	static getBookmark(native) {
		return bookmarks.get(native);
	}

	/**
  * Convert a native javascript value to a Value
  *
  * @param {any} value - The value to convert
  * @param {Realm} realm - The realm of the new value.
  */
	static fromNative(value, realm) {
		if (value instanceof Value) return value;
		let prim = Value.fromPrimativeNative(value);
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

		throw new TypeError('Tried to load an unsafe native value into the interperter:' + typeof value + ' / ' + value);
		//TODO: Is this cache dangerous?
		if (!cache.has(value)) {
			let nue = new BridgeValue(realm, value);
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
	static get undef() {
		return undef;
	}

	/**
  * Holds a value representing `null`
  *
  * @returns {NullValue}
  */
	static get null() {
		return nil;
	}

	/**
  * Holds a value representing `true`
  *
  * @returns {BooleanValue} true
  */
	static get true() {
		return tru;
	}

	/**
  * Holds a value representing `fasle`
  *
  * @returns {BooleanValue} false
  */
	static get false() {
		return fals;
	}

	/**
  * Holds a value representing `NaN`
  *
  * @returns {NumberValue} NaN
  */
	static get nan() {
		return nan;
	}

	/**
  * Holds a value representing `''`
  *
  * @returns {StringValue} ''
  */
	static get emptyString() {
		return emptyString;
	}

	/**
  * Holds a value representing `0`
  *
  * @returns {NumberValue} 0
  */
	static get zero() {
		return zero;
	}

	/**
  * Holds a value representing `1`
  *
  * @returns {NumberValue} 1
  */
	static get one() {
		return one;
	}

	static createNativeBookmark(v, realm) {
		var out;
		let thiz = this;
		if (typeof v.call === 'function') {
			switch (realm ? realm.options.bookmarkInvocationMode : '') {
				case 'async':
					out = function Bookmark() {
						let Evaluator = __webpack_require__(8);
						let cthis = realm.makeForForeignObject(this);
						let c = v.call(cthis, Array.from(arguments).map(v => realm.makeForForeignObject(v)), realm.globalScope);
						let evalu = new Evaluator(realm, null, realm.globalScope);
						evalu.pushFrame({ type: 'program', generator: c, scope: realm.globalScope });
						let gen = evalu.generator();
						let result;
						do {
							result = gen.next();
						} while (!result.done);
						return result.value.toNative();
					};
					break;
				case 'loop':
					out = function BookmarkAsync() {
						let Evaluator = __webpack_require__(8);
						let cthis = realm.makeForForeignObject(this);
						let c = v.call(cthis, Array.from(arguments).map(v => realm.makeForForeignObject(v)), realm.globalScope);
						let evalu = new Evaluator(realm, null, realm.globalScope);
						evalu.pushFrame({ type: 'program', generator: c, scope: realm.globalScope });
						let gen = evalu.generator();
						function handler(value) {
							while (!value.done) {
								value = gen.next();
								if (value.value && value.value.then) {
									return value.value.then(v => {
										return handler({ done: false, value: v });
									});
								}
							}
							return value;
						}
						return new Promise(function (resolve, reject) {
							try {
								let value = gen.next();
								resolve(value);
							} catch (e) {
								reject(e);
							}
						}).then(handler).then(v => {
							return v.value;
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
		Object.defineProperties(out, {
			toString: { value: function () {
					return v.debugString;
				}, writable: true },
			inspect: { value: function () {
					return v.debugString;
				}, writable: true },
			esperValue: { get: function () {
					return v;
				} }
		});
		bookmarks.set(out, v);
		return out;
	}

	constructor() {
		this.serial = serial++;
	}

	/**
  * Converts this value to a native javascript value.
  *
  * @abstract
  * @returns {*}
  */
	toNative() {
		throw new Error('Unimplemented: Value#toNative');
	}

	/**
  * Deep copy this value to a native javascript value.
  *
  * @returns {*}
  */
	toJS() {
		return this.toNative();
	}

	/**
  * A string representation of this Value suitable for display when
  * debugging.
  * @abstract
  * @returns {string}
  */
	get debugString() {
		let native = this.toNative();
		return native ? native.toString() : '???';
	}

	inspect() {
		return this.debugString;
	}

	/**
  * Indexes the value to get the value of a property.
  * i.e. `value[name]`
  * @param {String} name
  * @abstract
  * @returns {Value}
  */
	*get(name) {
		let err = "Can't access get " + name + ' of that type.';
		return yield CompletionRecord.typeError(err);
	}

	getImmediate(name) {
		return GenDash.syncGenHelper(this.get(name));
	}

	/**
  * Computes the javascript expression `!value`
  * @returns {Value}
  */
	*not() {
		return !this.truthy ? Value.true : Value.false;
	}

	/**
  * Computes the javascript expression `+value`
  * @returns {Value}
  */
	*unaryPlus() {
		return Value.fromNative(+(yield* this.toNumberValue()).toNative());
	}

	/**
  * Computes the javascript expression `-value`
  * @returns {Value}
  */
	*unaryMinus() {
		return Value.fromNative(-(yield* this.toNumberValue()).toNative());
	}

	/**
  * Computes the javascript expression `typeof value`
  * @returns {Value}
  */
	*typeOf() {
		return Value.fromNative(this.jsTypeName);
	}

	/**
  * Computes the javascript expression `!(value == other)`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*notEquals(other) {
		var result = yield* this.doubleEquals(other);
		return yield* result.not();
	}

	/**
  * Computes the javascript expression `!(value === other)`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*doubleNotEquals(other) {
		var result = yield* this.tripleEquals(other);
		return yield* result.not();
	}

	/**
  * Computes the javascript expression `value === other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*tripleEquals(other) {
		return other === this ? Value.true : Value.false;
	}

	getPrototypeProperty() {
		let p = this.properties['prototype'];
		if (!p) return;
		return p.value;
	}

	*makeThisForNew(realm) {
		var nue = new ObjectValue(realm);
		var p = this.getPrototypeProperty();
		if (p) nue.setPrototype(p);
		return nue;
	}

	/**
  * Computes the javascript expression `value > other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*gt(other) {
		return Value.fromNative((yield* this.toPrimitiveNative()) > (yield* other.toPrimitiveNative()));
	}

	/**
  * Computes the javascript expression `value < other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*lt(other) {
		return Value.fromNative((yield* this.toPrimitiveNative()) < (yield* other.toPrimitiveNative()));
	}

	/**
  * Computes the javascript expression `value >= other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*gte(other) {
		return Value.fromNative((yield* this.toPrimitiveNative()) >= (yield* other.toPrimitiveNative()));
	}

	/**
  * Computes the javascript expression `value <= other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*lte(other) {
		return Value.fromNative((yield* this.toPrimitiveNative()) <= (yield* other.toPrimitiveNative()));
	}

	/**
  * Computes the javascript expression `value - other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*subtract(other) {
		return Value.fromNative((yield* this.toNumberNative()) - (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value / other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*divide(other) {
		return Value.fromNative((yield* this.toNumberNative()) / (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value * other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*multiply(other) {
		return Value.fromNative((yield* this.toNumberNative()) * (yield* other.toNumberNative()));
	}

	/**
  * Computes the javascript expression `value % other`
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*mod(other) {
		return Value.fromNative((yield* this.toNumberNative()) % (yield* other.toNumberNative()));
	}

	*bitNot() {
		return Value.fromNative(~(yield* this.toNumberNative()));
	}

	*shiftLeft(other) {
		return Value.fromNative((yield* this.toNumberNative()) << (yield* other.toNumberNative()));
	}
	*shiftRight(other) {
		return Value.fromNative((yield* this.toNumberNative()) >> (yield* other.toNumberNative()));
	}
	*shiftRightZF(other) {
		return Value.fromNative((yield* this.toNumberNative()) >>> (yield* other.toNumberNative()));
	}

	*bitAnd(other) {
		return Value.fromNative((yield* this.toNumberNative()) & (yield* other.toNumberNative()));
	}
	*bitOr(other) {
		return Value.fromNative((yield* this.toNumberNative()) | (yield* other.toNumberNative()));
	}
	*bitXor(other) {
		return Value.fromNative((yield* this.toNumberNative()) ^ (yield* other.toNumberNative()));
	}

	/**
  * Computes the `value` raised to the `other` power (`value ** other`)
  * @param {Value} other - The other value
  * @returns {Value}
  */
	*pow(other) {
		return Value.fromNative(Math.pow((yield* this.toNumberNative()), (yield* other.toNumberNative())));
	}

	*inOperator(other) {
		let err = "Cannot use 'in' operator to search for 'thing' in 'thing'";
		return new CompletionRecord(CompletionRecord.THROW, {
			type: "TypeError",
			message: err
		});
	}

	/**
  * Is the value is truthy, i.e. `!!value`
  *
  * @abstract
  * @type {boolean}
  */
	get truthy() {
		throw new Error('Unimplemented: Value#truthy');
	}

	get jsTypeName() {
		throw new Error('Unimplemented: Value#jsTypeName');
	}

	get specTypeName() {
		return this.jsTypeName;
	}

	get isCallable() {
		return typeof this.call === 'function';
	}

	*toNumberValue() {
		throw new Error('Unimplemented: Value#toNumberValue');
	}
	*toStringValue() {
		throw new Error('Unimplemented: Value#StringValue');
	}
	*toStringNative() {
		return (yield* this.toStringValue()).native;
	}

	*toBooleanValue() {
		return this.truthy ? tru : fals;
	}

	*toUIntNative() {
		let nv = yield* this.toNumberValue();
		return Math.floor(nv.native);
	}

	*toIntNative() {
		let nv = yield* this.toNumberValue();
		return Math.floor(nv.native);
	}

	*toNumberNative() {
		let nv = yield* this.toNumberValue();
		return nv.native;
	}

	*toPrimitiveValue(preferedType) {
		throw new Error('Unimplemented: Value#toPrimitiveValue');
	}
	*toPrimitiveNative(preferedType) {
		return (yield* this.toPrimitiveValue(preferedType)).native;
	}

	/**
  * Quickly make a generator for this value
  */
	*fastGen() {
		return this;
	}

	/**
  * Garentee this value can never change
  *
  * @abstract
  * @returns bool
  */
	makeImmutable() {
		throw new Error('Unimplemented: Value#makeImmutable');
	}

}
module.exports = Value;

if (Symbol) {
	Value.prototype[Symbol.for('nodejs.util.inspect.custom')] = Value.prototype.inspect;
}

ObjectValue = __webpack_require__(12);
PrimitiveValue = __webpack_require__(13);
StringValue = __webpack_require__(16);
NumberValue = __webpack_require__(17);
const UndefinedValue = __webpack_require__(24);
const NullValue = __webpack_require__(18);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let Value = __webpack_require__(5);

class CompletionRecord {
	constructor(type, value, target) {
		if (value === undefined) {
			value = type;
			type = CompletionRecord.NORMAL;
		}

		this.type = type;
		this.value = value;
		this.target = target;
	}

	get abrupt() {
		return this.type !== CompletionRecord.NORMAL;
	}

	static makeTypeError(realm, msg) {
		let err;
		if (msg instanceof Error) err = realm.TypeError.makeFrom(msg);else err = realm.TypeError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static makeReferenceError(realm, msg) {
		let err;
		if (msg instanceof Error) err = realm.ReferenceError.makeFrom(msg);else err = realm.ReferenceError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static makeSyntaxError(realm, msg) {
		let err;
		if (msg instanceof Error) err = realm.SyntaxError.makeFrom(msg);else err = realm.SyntaxError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static makeRangeError(realm, msg) {
		let err;
		if (msg instanceof Error) err = realm.RangeError.makeFrom(msg);else err = realm.RangeError.make(msg);
		return new CompletionRecord(CompletionRecord.THROW, err);
	}

	static typeError(msg) {
		return new CompletionRecord(CompletionRecord.THROW_STD, ['TypeError', msg]);
	}

	static referenceError(msg) {
		return new CompletionRecord(CompletionRecord.THROW_STD, ['ReferenceError', msg]);
	}

	static syntaxError(msg) {
		return new CompletionRecord(CompletionRecord.THROW_STD, ['SyntaxError', msg]);
	}

	static rangeError(msg) {
		return new CompletionRecord(CompletionRecord.THROW_STD, ['RangeError', msg]);
	}

	/**
  * Easy access to value.addExtra.
  * Note: Returns a generator.
  * @param {Object} obj - Extra properties
  */
	addExtra(obj) {
		return this.value.addExtra(obj);
	}

}
module.exports = CompletionRecord;

CompletionRecord.NORMAL = 0;
CompletionRecord.BREAK = 1;
CompletionRecord.CONTINUE = 2;
CompletionRecord.RETURN = 3;
CompletionRecord.THROW = 4;
CompletionRecord.THROW_STD = 5;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function* sortValArray(arr, comp) {
	if (arr.length < 2) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = yield* sortValArray(arr.slice(0, mid), comp);
	let right = yield* sortValArray(arr.slice(mid, arr.length), comp);
	return yield* mergeValArray(left, right, comp);
}

function* mergeValArray(l, r, comp) {
	var result = [];
	while (l.length && r.length) {
		if (yield* comp(l[0], r[0])) result.push(l.shift());else result.push(r.shift());
	}

	while (l.length) result.push(l.shift());
	while (r.length) result.push(r.shift());
	return result;
}

class GenDash {
	static *identify(value) {
		return value;
	}

	static *map(what, fx) {
		fx = fx || GenDash.identify;
		var out = new Array(what.length);
		for (let i = 0; i < what.length; ++i) {
			out[i] = yield* fx(what[i], i, what);
		}
		return out;
	}

	static *each(what, fx) {
		if (what == null) return what;
		for (let i = 0; i < what.length; ++i) {
			if (false === (yield* fx(what[i], i, what))) break;
		}
		return what;
	}

	static *noop() {}

	static *sort(what, comp) {
		comp = comp || function* (left, right) {
			return left < right;
		};
		return yield* sortValArray(what, comp);
	}

	static *values(what) {
		var out = [];
		for (let o in what) {
			if (!Object.hasOwnProperty(o)) continue;
			out.push(what[o]);
		}
		return out;
	}

	static *keys(what) {
		var out = [];
		for (let o in what) {
			if (!Object.hasOwnProperty(o)) continue;
			out.push(o);
		}
		return out;
	}

	static *identity(value) {
		return value;
	}

	static syncGenHelper(gen) {
		var val = gen.next();
		if (!val.done) {
			console.log('This code path uses a helper, but the actual method yielded...');
			throw new Error('This code path uses a helper, but the actual method yielded...');
		}
		return val.value;
	}
}

module.exports = GenDash;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(5);
const CompletionRecord = __webpack_require__(6);
const ClosureValue = __webpack_require__(9);
const ObjectValue = __webpack_require__(12);
const FutureValue = __webpack_require__(21);
const RegExpValue = __webpack_require__(22);
const PropertyDescriptor = __webpack_require__(10);
const ErrorValue = __webpack_require__(23);
const ArrayValue = __webpack_require__(19);
const EvaluatorInstruction = __webpack_require__(11);

class Frame {
	constructor(type, o) {
		this.type = type;
		for (var k in o) this[k] = o[k];
	}
}

class Evaluator {
	constructor(realm, n, s) {
		this.realm = realm;
		let that = this;
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

	pushAST(n, s) {
		let that = this;
		let gen = n ? this.branch(n, s) : function* () {
			return yield EvaluatorInstruction.stepMinor;
		}();
		this.pushFrame({ generator: gen, type: 'program', scope: s, ast: n });
	}
	processLostFrames(frames) {
		for (let f of frames) {
			if (f.profileName) {
				this.incrCtr('fxTime', f.profileName, Date.now() - f.entered);
			}
		}
	}
	unwindStack(target, canCrossFxBounds, label) {
		let finallyFrames = [];
		for (let i = 0; i < this.frames.length; ++i) {
			let t = this.frames[i].type;
			let match = t == target || target == 'return' && t == 'function';
			if (match && label) {
				match = this.frames[i].labels && this.frames[i].labels.indexOf(label) !== -1;
			}

			if (match) {
				let j = i + 1;
				for (; j < this.frames.length; ++j) if (this.frames[j].type != 'finally') break;
				let fr = this.frames[j];
				this.processLostFrames(this.frames.splice(0, i + 1));
				this.saveFrameShortcuts();
				Array.prototype.unshift.apply(this.frames, finallyFrames);
				return fr;
			} else if (target == 'return' && this.frames[i].retValue) {
				let fr = this.frames[i];
				this.processLostFrames(this.frames.splice(0, i));
				this.saveFrameShortcuts();
				Array.prototype.unshift.apply(this.frames, finallyFrames);
				return fr;
			} else if (!canCrossFxBounds && this.frames[i].type == 'function') {
				break;
			} else if (t == 'finally') {
				finallyFrames.push(this.frames[i]);
			}
		}
		return false;
	}

	next(lastValueOveride) {
		let frames = this.frames;

		//Implement proper tailcalls by hand.
		do {
			let top = frames[0];
			let result;
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
			let val = result.value;

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
						for (let i = 0; i < frames.length; ++i) if (frames[i].scope) return this.next(frames[i].scope);
						throw new Error('No scope');
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
				let lastFrame = this.popFrame();

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

	processCompletionValueMeaning(val) {
		if (val.type === CompletionRecord.THROW_STD) {
			let msg = val.value[1];
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
				let rfr = this.unwindStack('return', false);
				if (!rfr) throw new Error('Cant find function bounds.');
				rfr.retValue = val.value;
				return true;
			case CompletionRecord.THROW:
				//TODO: Fix this nonsense:
				let e = val.value.toNative();
				//val.value.native = e;

				let smallStack;
				if (e && e.stack) smallStack = e.stack.split(/\n/).slice(0, 4).join('\n');
				let stk = this.buildStacktrace(e).join('\n    ');
				let bestFrame;
				for (let i = 0; i < this.frames.length; ++i) {
					if (this.frames[i].ast) {
						bestFrame = this.frames[i];
						break;
					}
				}

				if (val.value instanceof ErrorValue) {
					if (this.realm.options.addExtraErrorInfoToStacks && val.value.extra) {
						stk += '\n-------------';
						for (let key in val.value.extra) {
							let vv = val.value.extra[key];
							if (vv instanceof Value) stk += `
${key} => ${vv.debugString}`;else stk += `
${key} => ${vv}`;
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

				let tfr = this.unwindStack('catch', true);
				if (tfr) {
					tfr.exception = val;
					this.lastValue = val;
					return true;
				}
				let line = -1;
				if (this.topFrame.ast && this.topFrame.ast.attr) {
					line = this.topFrame.ast.attr.pos.start_line;
				}
				//console.log(this.buildStacktrace(val.value.toNative()));
				let v = val.value.toNative();
				if (this.onError) this.onError(v);
				throw v;
			case CompletionRecord.NORMAL:
				return false;
		}
	}

	buildStacktrace(e) {
		let lines = e ? [e.toString()] : [];
		for (var f of this.frames) {
			//if ( f.type !== 'function' ) continue;
			if (f.ast) {
				let line = 'at ' + (f.ast.srcName || f.ast.type) + ' ';
				if (f.ast.loc) line += '(<src>:' + f.ast.loc.start.line + ':' + f.ast.loc.start.column + ')';
				lines.push(line);
			}
		}
		return lines;
	}
	pushFrame(frame) {
		frame.srcAst = frame.ast;
		if (frame.yieldPower === undefined) frame.yieldPower = this.defaultYieldPower;
		this.frames.unshift(new Frame(frame.type, frame));
		this.saveFrameShortcuts();
	}

	pushAwaitFrame(val) {
		this.pushFrame({
			generator: function* (f) {
				while (!f.resolved) yield f;
				if (f.successful) {
					return f.value;
				} else {
					return new CompletionRecord(CompletionRecord.THROW, f.value);
				}
			}(val),
			type: 'await'
		});
	}

	popFrame() {
		let frame = this.frames.shift();
		this.saveFrameShortcuts();
		return frame;
	}

	saveFrameShortcuts() {
		let prev = this.yieldPower;
		if (this.frames.length == 0) {
			this.topFrame = undefined;
			this.yieldPower = this.defaultYieldPower;
		} else {
			this.topFrame = this.frames[0];
			this.yieldPower = this.topFrame.yieldPower;
		}
	}

	fromNative(native, x) {
		return this.realm.fromNative(native, x);
	}

	generator() {
		return {
			next: this.next.bind(this),
			throw: e => {
				throw e;
			},
			evaluator: this
		};
	}

	breakFrames() {}

	*resolveRef(n, s, create) {
		let oldAST = this.topFrame.ast;
		this.topFrame.ast = n;
		let r = yield* Evaluator.doResolveRef(n, s, create, this.branch.bind(this));
		this.topFrame.ast = oldAST;
		return r;
	}

	*partialMemberExpression(left, n, s) {
		if (n.computed) {
			let right = yield* this.branch(n.property, s);
			return yield* left.get(right.toNative());
		} else if (n.property.type == 'Identifier') {
			if (!left) throw `Cant index ${n.property.name} of undefined`;
			return yield* left.get(n.property.name);
		} else {
			if (!left) throw `Cant index ${n.property.value.toString()} of undefined`;
			return yield* left.get(n.property.value.toString());
		}
	}

	//NOTE: Returns generator, fast return yield *;
	doBinaryEvaluation(operator, left, right) {
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
					return function* () {
						yield CompletionRecord.typeError("Right-hand side of 'instanceof' is not callable");
					}();
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

	branchFrame(type, n, s, extra) {
		let frame = { generator: this.branch(n, s), type: type, scope: s, ast: n };

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

	beforeNode(n) {
		let tf = this.topFrame;
		let state = { top: tf, ast: tf.ast, node: n };
		this.lastASTNodeProcessed = n;
		if (this.debug) this.incrCtr('astInvocationCount', n.type);
		tf.ast = n;
		return state;
	}

	afterNode(state, r) {
		let tf = this.topFrame;
		tf.value = r;
		tf.ast = state.ast;
	}

	/**
  * @private
  * @param {object} n - AST Node to dispatch
  * @param {Scope} s - Current evaluation scope
  */
	branch(n, s) {
		if (!n.dispatch) {
			let nextStep = this.findNextStep(n.type);

			n.dispatch = function* (that, n, s) {
				let state = that.beforeNode(n);

				let result = yield* nextStep(that, n, s);
				if (result instanceof CompletionRecord) result = yield result;
				if (result && result.then) result = yield result;

				that.afterNode(state, result);

				return result;
			};
		}
		return n.dispatch(this, n, s);
	}

	incrCtr(n, c, v) {
		if (v === undefined) v = 1;
		if (!this.profile) this.profile = {};
		let o = this.profile[n];
		if (!o) {
			o = {};
			this.profile[n] = o;
		}
		c = c || '???';
		if (c in o) o[c] += v;else o[c] = v;
	}

	dumpProfilingInformation() {
		function lpad(s, l) {
			return s + new Array(Math.max(l - s.length, 1)).join(' ');
		}

		if (!this.profile) {
			console.log('===== Profile: None collected =====');
			return;
		}

		console.log('===== Profile =====');
		for (let sec in this.profile) {
			console.log(sec + ' Stats:');
			let o = this.profile[sec];
			let okeys = Object.keys(o).sort((a, b) => o[b] - o[a]);
			for (let name of okeys) {
				console.log(`  ${lpad(name, 20)}: ${o[name]}`);
			}
		}
		console.log('=================');
	}

	get insterment() {
		return this.instrument;
	}
	set insterment(v) {
		this.instrument = v;
	}
}

Evaluator.doResolveRef = __webpack_require__(20).doResolveRef;
Evaluator.prototype.findNextStep = __webpack_require__(20).findNextStep;

module.exports = Evaluator;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(5);
const PropertyDescriptor = __webpack_require__(10);
const ObjectValue = __webpack_require__(12);
const ArrayValue = __webpack_require__(19);
const EvaluatorInstruction = __webpack_require__(11);
let EvaluatorHandlers;

/**
 * Represents a value that maps directly to an untrusted local value.
 */
class ClosureValue extends ObjectValue {

	/**
  * @param {object} func - AST Node for function
  * @param {Scope} scope - Functions up-values.
  */
	constructor(func, scope) {
		let realm = scope.realm;
		super(realm, realm.FunctionPrototype);
		this.func = func;
		this.funcSourceAST = func;
		this.scope = scope;
		this.returnLastValue = false;
		this.properties['prototype'] = new PropertyDescriptor(new ObjectValue(realm), false);
		this.properties['name'] = new PropertyDescriptor(realm.fromNative(func.id ? func.id.name : undefined), false);
		this.properties['length'] = new PropertyDescriptor(realm.fromNative(func.params.length), false);
	}

	toNative() {
		return Value.createNativeBookmark(this, this.scope.realm);
	}

	get debugString() {
		if (this.func && this.func.id) return `[Function ${this.func.id.name}]`;
		return '[Function]';
	}

	get truthy() {
		return true;
	}

	*doubleEquals(other) {
		return other === this ? Value.true : Value.false;
	}

	/**
  *
  * @param {Value} thiz
  * @param {Value[]} args
  * @param {Scope} scope
  */
	*call(thiz, args, scope, extra) {
		//TODO: This way of scoping is entirelly wrong.
		if (!scope) scope = this.scope;
		let invokeScope;
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

		let obj = this.scope.object;
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
			for (let v in this.func.vars) {
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
			for (let fn in this.func.funcs) {
				let n = this.func.funcs[fn];
				invokeScope.add(n.id.name, Value.undef);
			}
		}

		let argn = Math.max(args.length, this.func.params.length);
		let argvars = new Array(argn);
		let argsObj = new ObjectValue(invokeScope.realm);
		argsObj.clazz = 'Arguments';

		for (let i = 0; i < argn; ++i) {
			let vv = Value.undef;
			if (i < args.length) vv = args[i];

			let v = new PropertyDescriptor(vv);
			argvars[i] = v;

			if (invokeScope.strict) {
				yield* argsObj.set(i, vv);
			} else {
				argsObj.rawSetProperty(i, v);
			}
		}

		if (!invokeScope.strict) {
			let calleeProp = new PropertyDescriptor(invokeScope.realm.fromNative(args.length));
			calleeProp.enumerable = false;
			argsObj.rawSetProperty('callee', calleeProp);
			yield* argsObj.set('callee', this);
		}

		let lengthProp = new PropertyDescriptor(invokeScope.realm.fromNative(args.length));
		lengthProp.enumerable = false;
		argsObj.rawSetProperty('length', lengthProp);

		invokeScope.add('arguments', argsObj);

		for (let i = 0; i < this.func.params.length; ++i) {
			let p = this.func.params[i];
			if (p.type === "AssignmentPattern") {
				p = p.left;
				//TODO: Calculate default value
			}
			if (p.type === 'RestElement') {
				let name = this.func.params[i].argument.name;
				let rest = args.slice(i);
				invokeScope.add(name, ArrayValue.make(rest, scope.realm));
			} else {
				let def = Value.undef;
				if (p.type === "Identifier") {
					p = { id: p };
					if (!p.id) console.log("Wrong P", Object.keys(this.func.vars), p);
					let name = p.id ? p.id.name : undefined;

					if (scope.strict) {
						//Scope is strict, so we make a copy for the args variable
						invokeScope.add(name, i < args.length ? args[i] : def);
					} else {
						//Scope isnt strict, magic happens.
						invokeScope.object.rawSetProperty(name, argvars[i]);
					}
				} else {
					let ref = yield* EvaluatorHandlers.doResolveRef(p, invokeScope);
					yield* ref.setValue(args.length ? args[i] : def);
				}
			}
		}
		let opts = { returnLastValue: this.returnLastValue, creator: this };
		if (extra && extra.evaluator && extra.evaluator.debug) {
			opts['profileName'] = extra.callNode.callee.srcName;
		}
		if (extra && extra.callee) {
			opts.callee = extra.callee;
		}
		if (this.func.nonUserCode) {
			opts.yieldPower = -1;
		}

		var result = yield EvaluatorInstruction.branch('function', this.func.body, invokeScope, opts);
		return result;
	}

	get jsTypeName() {
		return 'function';
	}
	get specTypeName() {
		return 'object';
	}

}
ClosureValue.prototype.clazz = 'Function';

module.exports = ClosureValue;

EvaluatorHandlers = __webpack_require__(20);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(5);
const CompletionRecord = __webpack_require__(6);
const EvaluatorInstruction = __webpack_require__(11);
const GenDash = __webpack_require__(7);

let serial = 0;

//TODO: We should call this a PropertyDescriptor, not a variable.

class PropertyDescriptor {
	constructor(value, enumerable) {
		this.value = value;
		this.serial = serial++;
		this.configurable = true;
		this.enumerable = enumerable !== undefined ? !!enumerable : true;
		this.writable = true;
		this.getter = undefined;
		this.setter = undefined;
		this.variable = false;
	}

	get direct() {
		return !this.getter && !this.setter && this.writable;
	}

	*getValue(thiz) {
		thiz = thiz || Value.null;
		if (this.getter) {
			let s = yield EvaluatorInstruction.getScope;
			return yield* this.getter.call(thiz, [], s);
		}
		return this.value;
	}

	*setValue(thiz, to, s) {
		thiz = thiz || Value.null;

		if (this.setter) {
			s = s || (yield EvaluatorInstruction.getScope);
			return yield* this.setter.call(thiz, [to], s);
		}
		if (!this.writable) {
			if (!s || !s.strict) {
				return this.value;
			}
			return yield CompletionRecord.typeError("Can't write to non-writable value.");
		}
		this.value = to;
		return this.value;
	}

	setValueImmediate(thiz, to, s) {
		return GenDash.syncGenHelper(this.setValue(thiz, to, s));
	}
}

module.exports = PropertyDescriptor;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class EvaluatorInstruction {
	static branch(kind, ast, scope, extra) {
		let ei = new EvaluatorInstruction('branch');
		ei.kind = kind;
		ei.ast = ast;
		ei.scope = scope;
		ei.extra = extra;
		return ei;
	}

	constructor(type) {
		this.type = type;
	}

	mark(o) {
		for (let k in o) this[k] = o[k];
		return this;
	}
}

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(5);
const PropertyDescriptor = __webpack_require__(10);
const CompletionRecord = __webpack_require__(6);
const PrimitiveValue = __webpack_require__(13);
const NullValue = __webpack_require__(18);
const GenDash = __webpack_require__(7);
const EvaluatorInstruction = __webpack_require__(11);

let alwaysFalse = () => false;
let undefinedReturningGenerator = function* () {
	return Value.undef;
};

class ObjRefrence {
	constructor(object, name, ctxthis) {
		this.object = object;
		this.name = name;
		this.ctxthis = ctxthis;
	}
	del(s) {
		if (s.strict) return this.object.deleteStrict(this.name);else return this.object.delete(this.name);
	}
	getValue() {
		return this.object.get(this.name, this.ctxthis || this.object);
	}
	setValue(value, s) {
		return this.object.set(this.name, value);
	}
}

/**
 * Represents an Object.
 */
class ObjectValue extends Value {

	constructor(realm, proto) {
		super();
		this.extensable = true;
		this.proto = null;
		if (proto) this.eraseAndSetPrototype(proto);else if (realm) this.eraseAndSetPrototype(realm.ObjectPrototype);else this.properties = Object.create(null);
	}

	ref(name, ctxthis) {
		var existing = this.properties[name];
		let thiz = this;

		let get;
		if (existing) {
			return new ObjRefrence(this, name, ctxthis);
		} else {
			return {
				name: name,
				object: thiz,
				isVariable: false,
				del: alwaysFalse,
				getValue: undefinedReturningGenerator,
				setValue: function (to, s) {
					return this.object.set(this.name, to);
				}
			};
		}
	}

	//Note: Returns generator by tailcall.
	set(name, value, extra) {
		let thiz = this;
		extra = extra || {};

		if (!Object.prototype.hasOwnProperty.call(this.properties, name)) {
			if (this.properties[name] && this.properties[name].setter) {
				return this.properties[name].setValue(this, value);
			}
			if (!this.extensable) {
				//TODO: Should we throw here in strict mode?
				return Value.undef.fastGen();
			}
			let v = new PropertyDescriptor(value);
			v.enumerable = 'enumerable' in extra ? extra.enumerable : true;
			this.properties[name] = v;

			return v.setValue(this, value);
		}

		return this.properties[name].setValue(this, value);
	}

	rawSetProperty(name, value) {
		this.properties[name] = value;
	}

	setImmediate(name, value) {
		if (name in this.properties) {
			if (Object.prototype.hasOwnProperty.call(this.properties, name)) {
				if (this.properties[name].direct) {
					this.properties[name].value = value;
					return;
				}
			}
		} else if (this.extensable) {
			let v = new PropertyDescriptor(value);
			v.del = this.delete.bind(this, name);
			this.properties[name] = v;
			return;
		}
		return GenDash.syncGenHelper(this.set(name, value));
	}

	has(name) {
		return name in this.properties;
	}

	delete(name) {
		let po = this.properties[name];
		if (!po.configurable) {
			return false;
		}
		return delete this.properties[name];
	}

	deleteStrict(name) {
		let po = this.properties[name];
		if (!po.configurable) {
			return CompletionRecord.typeError("Can't delete nonconfigurable object");
		}
		return delete this.properties[name];
	}

	toNative(realm) {

		//TODO: This is really a mess and should maybe be somewhere else.
		var bk = Value.createNativeBookmark(this, realm);
		if (this.jsTypeName === 'function') return bk;

		for (let p in this.properties) {
			let name = p; //work around bug in FF where the scope of p is incorrect
			let po = this.properties[name];
			if (Object.prototype.hasOwnProperty.call(bk, name)) continue;
			if (bk[p] !== undefined) continue;

			Object.defineProperty(bk, p, {
				get: () => {
					var c = this.properties[name].value;
					return c === undefined ? undefined : c.toNative();
				},
				set: v => {
					this.properties[name].value = Value.fromNative(v, realm);
				},
				enumerable: po.enumerable,
				configurable: po.configurable
			});
		}
		return bk;
	}

	toJS() {
		let out = {};
		for (let p in this.properties) {
			let name = p; //work around bug in FF where the scope of p is incorrect
			let po = this.properties[name];
			if (!po.enumerable) continue;
			out[name] = po.value.toJS();
		}
		return out;
	}

	*add(other) {
		return yield* (yield* this.toPrimitiveValue()).add(other);
	}
	*doubleEquals(other) {
		if (other === this) return Value.true;
		if (other instanceof ObjectValue) {
			return Value.false;
		}
		if (other instanceof PrimitiveValue) {
			let hint = other.jsTypeName == 'string' ? 'string' : 'number';
			let pv = yield* this.toPrimitiveValue(hint);
			return yield* pv.doubleEquals(other);
		}
		let pthis = yield* this.toPrimitiveValue('string');
		return yield* pthis.doubleEquals(other);
	}
	*inOperator(str) {
		let svalue = yield* str.toStringValue();
		return this.has(svalue.toNative()) ? Value.true : Value.false;
	}

	*get(name, ctxthis) {
		var existing = this.properties[name];
		if (!existing) {
			// Fast proto lookup can fail if aLinkValue or Proxy
			// is in the prototype chain.
			// TODO: Cache if this is needed for speed.
			if (this.proto) return yield* this.proto.get(name, ctxthis || this);else return Value.undef;
		}
		if (existing.direct) return existing.value;
		return yield* existing.getValue(ctxthis || this);
	}

	getImmediate(name, ctxthis) {
		var existing = this.properties[name];
		if (!existing) return Value.undef;
		if (existing.direct) return existing.value;
		return GenDash.syncGenHelper(existing.getValue(ctxthis || this));
	}

	*instanceOf(other) {
		if (!other.constructorOf) return Value.false;
		return yield* other.constructorOf(this);
	}

	*constructorOf(what) {
		let target = yield* this.get('prototype');
		let realm = yield EvaluatorInstruction.getRealm;
		let pt = what.getPrototype(realm);
		let checked = [];

		while (pt) {
			if (pt === target) return Value.true;
			checked.push(pt);
			pt = pt.getPrototype(realm);
			if (checked.indexOf(pt) !== -1) return Value.false;
		}
		return Value.false;
	}

	*observableProperties(realm) {
		for (let p in this.properties) {
			if (!this.properties[p].enumerable) continue;
			yield realm.fromNative(p);
		}
		return;
	}

	getPropertyValueMap() {
		let list = {};
		for (let p in this.properties) {
			let v = this.properties[p];
			if (v.value) {
				list[p] = v.value;
			}
		}
		return list;
	}

	hasOwnProperty(name) {
		return Object.prototype.hasOwnProperty.call(this.properties, name);
	}

	setPrototype(val) {
		if (!this.properties) return this.eraseAndSetPrototype(val);
		if (val === null || val === undefined || val instanceof NullValue) {
			Object.setPrototypeOf(this.properties, null);
			this.proto = null;
			return;
		}
		this.proto = val;
		if (val.properties) Object.setPrototypeOf(this.properties, val.properties);
	}

	eraseAndSetPrototype(val) {
		if (val === null || val === undefined || val instanceof NullValue) {
			this.proto = null;
			this.properties = Object.create(null);
		} else {
			this.proto = val;
			this.properties = Object.create(val.properties);
		}
	}

	getPrototype() {
		return this.proto;
	}

	get debugString() {
		let strProps = ['{', '[', this.clazz, ']'];
		let delim = [];
		if (this.wellKnownName) {
			strProps.push('(', this.wellKnownName, ')');
		}
		if (this.proto) {
			delim.push('[[Prototype]]: ' + (this.proto.wellKnownName || this.proto.clazz || this.proto.jsTypeName));
		}
		for (let n in this.properties) {
			if (!Object.prototype.hasOwnProperty.call(this.properties, n)) continue;
			let val = this.properties[n].value;
			if (this.properties[n].getter || this.properties[n].setter) delim.push(n + ': [Getter/Setter]');else if (val.specTypeName === 'object') delim.push(n + ': [Object]');else if (val.specTypeName === 'function') delim.push(n + ': [Function]');else delim.push(n + ': ' + val.specTypeName);
		}
		strProps.push(delim.join(', '));
		strProps.push('] }');
		return strProps.join(' ');
	}

	*toPrimitiveValue(preferedType) {
		let methodNames;
		let realm;
		if (preferedType == 'string') {
			methodNames = ['toString', 'valueOf'];
		} else {
			methodNames = ['valueOf', 'toString'];
		}

		for (let name of methodNames) {
			let method = yield* this.get(name);
			if (method && method.call) {
				if (!realm) realm = yield EvaluatorInstruction.getRealm;
				let rescr = yield yield* method.call(this, [], realm.globalScope); //TODO: There should be more aruments here
				let res = Value.undef;
				if (!(rescr instanceof CompletionRecord)) res = rescr;else if (rescr.type == CompletionRecord.RETURN) res = rescr.value;else if (rescr.type != CompletionRecord.NORMAL) continue;
				if (res.specTypeName !== 'object') return res;
			}
		}
		return yield CompletionRecord.typeError('Cannot convert object to primitive value');
	}

	*toNumberValue() {
		let prim = yield* this.toPrimitiveValue('number');
		return yield* prim.toNumberValue();
	}

	*toObjectValue(realm) {
		return this;
	}

	*toStringValue() {
		let prim = yield* this.toPrimitiveValue('string');
		let gen = prim.toStringValue();
		return yield* gen;
	}

	get truthy() {
		return true;
	}

	get jsTypeName() {
		if (typeof this.call !== 'function') return 'object';
		return 'function';
	}

	get specTypeName() {
		return 'object';
	}

	makeImmutable() {
		for (let p of Object.getOwnPropertyNames(this.properties)) {
			let o = this.properties[p];
			if (o.value && o.writable) o.writable = false;
			if (o.configurable) o.configurable = false;
			Object.freeze(o);
		}
		if (this.extensable) this.extensable = false;
		Object.seal(this.properties);
		Object.freeze(this);
	}
}

ObjectValue.prototype.clazz = 'Object';

module.exports = ObjectValue;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(5);
const CompletionRecord = __webpack_require__(6);
const EvaluatorInstruction = __webpack_require__(11);
const EmptyValue = __webpack_require__(14);
let StringValue;

function* convert(other) {
	if (other instanceof PrimitiveValue) return other.toNative();
	return yield* other.toPrimitiveNative();
}

/**
 * Represents a primitive value.
 */
class PrimitiveValue extends Value {

	constructor(value) {
		super(null);
		this.native = value;
		//Object.defineProperty(this, 'native', {
		//	'value': value,
		//	'enumerable': true
		//});
	}

	ref(name) {
		var that = this;
		let out = Object.create(null);
		out.getValue = function* () {
			return yield* that.get(name);
		};
		out.setValue = function* (to) {
			yield* that.set(name, to);
		};
		return out;
	}

	*get(name) {
		let realm = yield EvaluatorInstruction.getRealm;
		return yield* this.derivePrototype(realm).get(name, this);
	}

	*set(name, to) {
		//Can't set primative properties.
	}

	derivePrototype(realm) {
		switch (typeof this.native) {
			case 'string':
				return realm.StringPrototype;
			case 'number':
				return realm.NumberPrototype;
			case 'boolean':
				return realm.BooleanPrototype;
		}
	}

	toNative() {
		return this.native;
	}

	get debugString() {
		if (typeof this.native === 'object') return '[native object]';else if (typeof this.native === 'function') return '[native function]';else if (typeof this.native === 'string') return JSON.stringify(this.native);else return '' + this.native;
	}

	*asString() {
		return this.native.toString();
	}

	*doubleEquals(other) {
		let native = this.native;
		if (other instanceof PrimitiveValue) {
			return Value.fromNative(this.native == other.native);
		} else if (typeof native === 'number') {
			if (other instanceof StringValue) {
				let num = yield* other.toNumberValue();
				return Value.from(native === num.toNative());
			} else {
				return Value.false;
			}
		} else if (typeof native == 'boolean') {
			let num = yield* this.toNumberValue();
			return yield* num.doubleEquals(other);
		}

		return Value.false;
	}
	*tripleEquals(other) {
		return this.native === other.toNative() ? Value.true : Value.false;
	}

	*add(other) {
		return Value.fromNative(this.native + (yield* other.toPrimitiveNative('number')));
	}

	*instanceOf(other) {
		return Value.false;
	}

	*unaryPlus() {
		return Value.fromNative(+this.native);
	}
	*unaryMinus() {
		return Value.fromNative(-this.native);
	}
	*not() {
		return Value.fromNative(!this.native);
	}

	*gt(other) {
		return Value.fromNative(this.native > (yield* convert(other)));
	}
	*lt(other) {
		return Value.fromNative(this.native < (yield* convert(other)));
	}
	*gte(other) {
		return Value.fromNative(this.native >= (yield* convert(other)));
	}
	*lte(other) {
		return Value.fromNative(this.native <= (yield* convert(other)));
	}

	*observableProperties(realm) {
		yield* this.derivePrototype(realm).observableProperties(realm);
	}

	*makeThisForNew() {
		throw new Error('primative value is not a constructor');
	}

	getPrototype(realm) {
		return this.derivePrototype(realm);
	}

	get truthy() {
		return !!this.native;
	}

	get jsTypeName() {
		return typeof this.native;
	}

	*toPrimitiveValue(preferedType) {
		return this;
	}
	*toStringValue() {
		if (typeof this.native === 'string') return this;
		return Value.fromNative(String(this.native));
	}

	*toNumberValue() {
		if (typeof this.native === 'number') return this;
		return Value.fromNative(Number(this.native));
	}

	makeImmutable() {
		return true;
	}

}
module.exports = PrimitiveValue;

StringValue = __webpack_require__(16);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(5);
const BridgeValue = __webpack_require__(15);
const CompletionRecord = __webpack_require__(6);
const EvaluatorInstruction = __webpack_require__(11);

class EmptyValue extends Value {
	constructor() {
		super(null);
	}

	get truthy() {
		return false;
	}

	*not() {
		return Value.fromNative(true);
	}

	*doubleEquals(other) {
		if (other instanceof EmptyValue) return Value.true;else if (other instanceof BridgeValue) return Value.fromNative(this.toNative() == other.toNative());else return Value.false;
	}

	*observableProperties(realm) {
		return;
	}

	*instanceOf() {
		return Value.false;
	}

	/**
  * @param {String} name
  * @param {Realm} realm
  * @returns {CompletionRecord} Indexing empty values is a type error.
  */
	*get(name) {
		let str = 'Cannot read property \'' + name + '\' of ' + this.specTypeName;
		let realm = yield EvaluatorInstruction.getRealm;
		let err = CompletionRecord.makeTypeError(realm, str);
		yield* err.addExtra({ code: 'IndexEmpty', target: this, prop: name });
		return err;
	}

	makeImmutable() {
		return true;
	}

}

module.exports = EmptyValue;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(5);
const CompletionRecord = __webpack_require__(6);
/**
 * Represents a value that maps directly to an untrusted local value.
 */
class BridgeValue extends Value {

	constructor(value) {
		super();
		this.native = value;
	}

	makeBridge(value) {
		return BridgeValue.make(value);
	}

	static make(native) {
		if (native === undefined) return Value.undef;
		let prim = Value.fromPrimativeNative(native);
		if (prim) return prim;

		if (Value.hasBookmark(native)) {
			return Value.getBookmark(native);
		}

		return new BridgeValue(native);
	}

	ref(name, s) {
		let that = this;
		let out = Object.create(null);
		let doset = value => that.native[name] = value.toNative();
		out.getValue = function* () {
			return Value.fromNative(that.native[name]);
		};
		out.setValue = function* (to) {
			doset(to);
		};

		return out;
	}

	toNative() {
		return this.native;
	}

	*asString() {
		return this.native.toString();
	}

	*doubleEquals(other) {
		return this.makeBridge(this.native == other.toNative());
	}
	*tripleEquals(other) {
		return this.makeBridge(this.native === other.toNative());
	}

	*add(other) {
		return this.makeBridge(this.native + other.toNative());
	}
	*subtract(other) {
		return this.makeBridge(this.native - other.toNative());
	}
	*multiply(other) {
		return this.makeBridge(this.native * other.toNative());
	}
	*divide(other) {
		return this.makeBridge(this.native / other.toNative());
	}
	*mod(other) {
		return this.makeBridge(this.native % other.toNative());
	}

	*shiftLeft(other) {
		return this.makeBridge(this.native << other.toNative());
	}
	*shiftRight(other) {
		return this.makeBridge(this.native >> other.toNative());
	}
	*shiftRightZF(other) {
		return this.makeBridge(this.native >>> other.toNative());
	}

	*bitAnd(other) {
		return this.makeBridge(this.native & other.toNative());
	}
	*bitOr(other) {
		return this.makeBridge(this.native | other.toNative());
	}
	*bitXor(other) {
		return this.makeBridge(this.native ^ other.toNative());
	}

	*gt(other) {
		return this.makeBridge(this.native > other.toNative());
	}
	*lt(other) {
		return this.makeBridge(this.native < other.toNative());
	}
	*gte(other) {
		return this.makeBridge(this.native >= other.toNative());
	}
	*lte(other) {
		return this.makeBridge(this.native <= other.toNative());
	}

	*inOperator(other) {
		return this.makeBridge(other.toNative() in this.native);
	}
	*instanceOf(other) {
		return this.makeBridge(this.native instanceof other.toNative());
	}

	*unaryPlus() {
		return this.makeBridge(+this.native);
	}
	*unaryMinus() {
		return this.makeBridge(-this.native);
	}
	*not() {
		return this.makeBridge(!this.native);
	}

	*get(name) {
		return this.makeBridge(this.native[name]);
	}

	*set(name, value) {
		this.native[name] = value.toNative();
	}

	*observableProperties(realm) {
		for (let p in this.native) {
			yield this.makeBridge(p);
		}
		return;
	}

	/**
  *
  * @param {Value} thiz
  * @param {Value[]} args
  */
	*call(thiz, args) {
		let realArgs = new Array(args.length);
		for (let i = 0; i < args.length; ++i) {
			realArgs[i] = args[i].toNative();
		}
		try {
			let result = this.native.apply(thiz ? thiz.toNative() : undefined, realArgs);
			return this.makeBridge(result);
		} catch (e) {
			let result = this.makeBridge(e);
			return new CompletionRecord(CompletionRecord.THROW, result);
		}
	}

	*makeThisForNew() {
		return this.makeBridge(Object.create(this.native.prototype));
	}

	*toStringValue() {
		return Value.fromNative(this.native.toString());
	}

	get debugString() {
		return '[Bridge: ' + this.native + ']';
	}

	get truthy() {
		return !!this.native;
	}

	get jsTypeName() {
		return typeof this.native;
	}
}

module.exports = BridgeValue;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(13);
const Value = __webpack_require__(5);
let NumberValue;

class StringValue extends PrimitiveValue {
	*get(name, realm) {
		let idx = Number(name);
		if (!isNaN(idx)) {
			return StringValue.fromNative(this.native[idx]);
		}
		if (name === 'length') return StringValue.fromNative(this.native.length);
		return yield* super.get(name, realm);
	}

	*doubleEquals(other) {

		if (other instanceof StringValue) {
			return Value.fromNative(this.native == other.native);
		} else if (other instanceof NumberValue) {
			let rv = yield* this.toNumberValue();
			return yield* rv.doubleEquals(other);
		}

		if (other.jsTypeName == "object") {
			let os = yield* other.toStringValue();
			if (os.jsTypeName == "string") {
				return Value.fromNative(this.native == os.native);
			}
		}

		return yield* super.doubleEquals(other);
	}

	*add(other) {
		return Value.fromNative(this.native + (yield* other.toPrimitiveNative('string')));
	}

	*observableProperties(realm) {
		for (let p in this.native) {
			yield Value.fromNative(p);
		}
		return;
	}

	has(name) {
		let idx = Number(name);
		if (!isNaN(idx)) {
			return idx >= 0 && idx < this.native.length;
		}
		return false;
	}

	*iterateAll() {
		let len = this.native.length;
		let idx = 0;
		let result = new Array(len);
		for (let ii = 0; ii < len; ++ii) {
			result[idx++] = Value.fromNative(this.native[ii]);
		}
		return result;
	}

}

module.exports = StringValue;

NumberValue = __webpack_require__(17);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(13);
const Value = __webpack_require__(5);
let StringValue;

class NumberValue extends PrimitiveValue {

	*doubleEquals(other) {
		let on;
		if (other instanceof NumberValue) {
			return Value.fromNative(this.native == other.native);
		} else if (other instanceof StringValue) {
			on = yield* other.toNumberValue();
		} else if (other.specTypeName == 'object') {
			on = yield* other.toPrimitiveValue();
		}
		if (!on) return yield* super.doubleEquals(other);
		return yield* this.doubleEquals(on);
	}

	*add(other) {
		return Value.fromNative(this.native + (yield* other.toPrimitiveNative('number')));
	}
}

module.exports = NumberValue;

StringValue = __webpack_require__(16);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EmptyValue = __webpack_require__(14);
const Value = __webpack_require__(5);

class NullValue extends EmptyValue {
	toNative() {
		return null;
	}

	get jsTypeName() {
		return 'object';
	}
	get specTypeName() {
		return 'null';
	}

	*tripleEquals(other, realm) {
		return other instanceof NullValue ? Value.true : Value.false;
	}

	*asString() {
		return 'null';
	}

	*add(other) {
		switch (other.specTypeName) {
			case "null":
				return Value.zero;
			case "boolean":
				return other.native ? Value.one : Value.zero;
			case "number":
				return yield* Value.zero.add(other);
			case "undefined":
				return Value.nan;
			default:
				return yield* Value.fromNative("null").add(other);
		}
	}

	*toPrimitiveValue(preferedType) {
		switch (preferedType) {
			case "number":
				return Value.zero;
			default:
				return Value.fromNative("null");
		}
	}
	*toNumberValue() {
		return Value.zero;
	}
	*toStringValue() {
		return Value.fromNative('null');
	}

	get debugString() {
		return 'null';
	}
}

module.exports = NullValue;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(13);
const ObjectValue = __webpack_require__(12);
const Value = __webpack_require__(5);
const GenDash = __webpack_require__(7);
let NumberValue;

class ArrayValue extends ObjectValue {

	constructor(realm) {
		super(realm, realm.ArrayPrototype);
	}

	*get(name, realm) {
		return yield* super.get(name, realm);
	}

	adjustLength(name, value) {
		if (name == 'length' && this.properties.length) {
			//TODO: 15.4.5.2 specifies more complex behavior here.
			let target = GenDash.syncGenHelper(value.toIntNative());
			let length = this.getLengthSync();
			if (target < length) {
				for (let i = length - 1; i >= target; --i) {
					delete this.properties[i];
				}
			}
		}

		if (!isNaN(parseInt(name))) {
			let length = this.getLengthSync();
			if (name >= length) {
				this.properties.length.value = Value.fromNative(name + 1);
			}
		}
	}

	getLengthSync() {
		return this.properties.length.value.native;
	}

	set(name, v) {
		this.adjustLength(name, v);
		return super.set(name, v);
	}

	setImmediate(name, v) {
		this.adjustLength(name, v);
		return super.setImmediate(name, v);
	}

	toNative() {
		let out = new Array(this.getLengthSync());
		for (let i of Object.keys(this.properties)) {
			if (i === 'length') continue;
			let po = this.properties[i];
			if (po && po.value) {
				if (!po.direct) {
					Object.defineProperty(out, i, {
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

	toJS() {
		let out = new Array(this.getLengthSync());
		for (let i of Object.keys(this.properties)) {
			if (i === 'length') continue;
			let po = this.properties[i];
			out[i] = po.value.toJS();
		}
		return out;
	}

	static make(vals, realm) {

		let av = new ArrayValue(realm);

		av.setImmediate('length', Value.fromNative(0));
		av.properties.length.enumerable = false;

		for (let i = 0; i < vals.length; ++i) {
			let v = vals[i];
			if (!(v instanceof Value)) v = realm.fromNative(v);
			av.setImmediate(i, v);
		}
		return av;
	}

	get debugString() {
		if (!this.properties.length) return super.debugString;
		let length = this.properties.length.value.native;

		let loop = Math.min(length, 20);
		let r = new Array(loop);
		for (let i = 0; i < loop; ++i) {
			let po = this.properties[i];
			if (po && po.value) r[i] = po.value.debugString;else r[i] = '';
		}
		return '[' + r.join(', ') + (loop < length ? '...' : '') + ']';
	}

	*iterateAll() {
		let len = this.getLengthSync();
		let idx = 0;
		let result = new Array(len);
		for (let ii = 0; ii < len; ++ii) {
			result[idx++] = yield* this.get(ii);
		}
		return result;
	}
}

ArrayValue.prototype.clazz = 'Array';

module.exports = ArrayValue;

NumberValue = __webpack_require__(17);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Value = __webpack_require__(5);
const CompletionRecord = __webpack_require__(6);
const ClosureValue = __webpack_require__(9);
const ObjectValue = __webpack_require__(12);
const FutureValue = __webpack_require__(21);
const RegExpValue = __webpack_require__(22);
const PropertyDescriptor = __webpack_require__(10);
const ErrorValue = __webpack_require__(23);
const ArrayValue = __webpack_require__(19);
const EvaluatorInstruction = __webpack_require__(11);

function* evaluateArrayExpression(e, n, s) {
	//let result = new ObjectValue();
	let result = new Array(n.elements.length);
	let idx = 0;
	for (let i = 0; i < n.elements.length; ++i) {
		if (n.elements[i]) {
			if (n.elements[i].type === 'SpreadElement') {
				let val = yield* e.branch(n.elements[i].argument, s);
				if (!val.iterateAll) {
					return CompletionRecord.makeTypeError(s.realm, `${n.elements[i].argument.srcName} is not iterable.`);
				}
				let itr = yield* val.iterateAll();
				for (let e of itr) result[idx++] = e;
			} else {
				result[idx++] = yield* e.branch(n.elements[i], s);
			}
		} else {
			++idx;
		}
	}
	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMinor;
	return ArrayValue.make(result, s.realm);
}

function* evaluateAssignmentExpression(e, n, s) {
	//TODO: Account for not-strict mode
	var realm = s.realm;
	let ref = yield* e.resolveRef(n.left, s, n.operator === '=');

	if (!ref && s.strict) {
		return CompletionRecord.makeReferenceError(s.realm, `Invalid refrence in assignment.`);
	}

	let cur = n.operator == '=' ? Value.undef : yield* ref.getValue();
	let argument = yield* e.branch(n.right, s);
	let value;

	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMinor;
	switch (n.operator) {
		case '=':
			value = argument;
			break;
		case '+=':
			value = yield* cur.add(argument, realm);
			break;
		case '-=':
			value = yield* cur.subtract(argument, realm);
			break;
		case '*=':
			value = yield* cur.multiply(argument, realm);
			break;
		case '/=':
			value = yield* cur.divide(argument, realm);
			break;
		case '%=':
			value = yield* cur.mod(argument, realm);
			break;
		case '<<=':
			value = yield* cur.shiftLeft(argument, realm);
			break;
		case '>>=':
			value = yield* cur.shiftRight(argument, realm);
			break;
		case '>>>=':
			value = yield* cur.shiftRightZF(argument, realm);
			break;
		case '|=':
			value = yield* cur.bitOr(argument, realm);
			break;
		case '&=':
			value = yield* cur.bitAnd(argument, realm);
			break;
		case '^=':
			value = yield* cur.bitXor(argument, realm);
			break;
		case '**=':
			value = yield* cur.pow(argument, realm);
			break;
		default:
			throw new Error('Unknown assignment operator: ' + n.operator);
	}

	if (ref) {
		yield* ref.setValue(value, s);
	} else {
		yield* s.put(n.left.name, value, s);
	}

	return value;
}

function* evaluateBinaryExpression(e, n, s) {
	if (n.operator == '&&' || n.operator == '||') {
		return yield* evaluateLogicalExpression(e, n, s);
	}
	let left = yield* e.branch(n.left, s);
	let right = yield* e.branch(n.right, s);
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMinor;
	return yield* e.doBinaryEvaluation(n.operator, left, right, s);
}

function* evaluateBlockStatement(e, n, s) {
	let result = Value.undef;
	let ss = s.createBlockChild();
	for (let statement of n.body) {
		if (statement.type != "FunctionDeclaration") continue;
		result = yield* e.branch(statement, ss);
	}

	for (let statement of n.body) {
		if (statement.type == "FunctionDeclaration") continue;
		result = yield* e.branch(statement, ss);
	}
	return result;
}

function* evaluateBreakStatement(e, n, s) {
	let label = n.label ? n.label.name : undefined;
	if (e.yieldPower >= 1) yield EvaluatorInstruction.stepMinor;
	return new CompletionRecord(CompletionRecord.BREAK, Value.undef, label);
}

function* evaluateCallExpression(e, n, s) {
	return yield* doCall(e, n, n.callee, s, function* () {
		let args = new Array(n.arguments.length);
		let idx = 0;
		for (let i = 0; i < n.arguments.length; ++i) {
			if (n.arguments[i].type === 'SpreadElement') {
				let val = yield* e.branch(n.arguments[i].argument, s);
				if (!val.iterateAll) {
					return CompletionRecord.makeTypeError(s.realm, `${n.arguments[i].argument.srcName} is not iterable.`);
				}
				let itr = yield* val.iterateAll();
				for (let e of itr) args[idx++] = e;
			} else {
				args[idx++] = yield* e.branch(n.arguments[i], s);
			}
		}
		return args;
	});
}

function* doCall(e, n, c, s, argProvider) {
	let thiz = s.strict ? Value.undef : s.global.thiz;

	let callee, base;

	if (c.type == 'Super') {
		callee = yield* e.branch(c, s);
		thiz = s.thiz;
	} else if (c.type === 'MemberExpression') {
		thiz = base = yield* e.branch(c.object, s);
		callee = yield* e.partialMemberExpression(thiz, c, s);
		if (c.object.type == "Super") thiz = s.thiz;
		if (callee instanceof CompletionRecord) {
			if (callee.type == CompletionRecord.THROW) return callee;
			callee = callee.value;
		}
	} else {
		callee = yield* e.branch(c, s);
	}

	if (n.type === 'NewExpression') {
		thiz = yield* callee.makeThisForNew(s.realm);
		if (thiz instanceof CompletionRecord) {
			if (thiz.type == CompletionRecord.THROW) return thiz;
			thiz = thiz.value;
		}
	}

	if (typeof callee.rawCall === 'function') {
		return yield* callee.rawCall(n, e, s);
	}

	//console.log("Calling", callee, callee.call);

	let args = yield* argProvider();

	let name = c.srcName || c.source() || callee.jsTypeName;

	if (e.yieldPower >= 1) yield EvaluatorInstruction.stepMajor;

	if (!callee.isCallable) {
		let err = CompletionRecord.makeTypeError(e.realm, '' + name + ' is not a function');
		yield* err.addExtra({
			code: 'CallNonFunction',
			target: callee,
			targetAst: c,
			targetName: name,
			base: base
		});
		return err;
	}

	if (e.debug) {
		e.incrCtr('fxInvocationCount', c.srcName);
	}

	let callResult = callee.call(thiz, args, s, {
		asConstructor: n.type === 'NewExpression',
		callNode: n,
		evaluator: e,
		callee: callee
	});

	if (callResult instanceof CompletionRecord) return callResult;

	if (typeof callResult.next !== 'function') {
		console.log('Generator Failure', callResult);
		return CompletionRecord.makeTypeError(e.realm, '' + name + ' didnt make a generator');
	}

	let result = yield* callResult;
	if (n.type === 'NewExpression') {
		//TODO: If a constructor returns, you actually use that value
		if (result instanceof Value) {
			if (result.specTypeName === 'undefined') return thiz;
			return result;
		}
		return thiz;
	} else {
		return result;
	}
}

let classFeatures = {};
function* addMethodFnToClass(fx, clazz, proto, e, m, s) {
	if (m.kind == 'constructor') {
		//Special handling for this below.
	} else {
		let ks;
		fx.funcSourceAST = m;
		if (m.computed) {
			let k = yield* e.branch(m.key, s);
			ks = yield* k.toStringNative(e.realm);
		} else {
			ks = m.key.name;
		}

		let pd;

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
		switch (m.kind) {
			case 'set':
				pd.setter = fx;
				break;
			case 'get':
				pd.getter = fx;
				break;
			case 'method':
				pd.value = fx;
				break;
		}
	}
	return Value.undef;
}
classFeatures.MethodDefinition = function* (clazz, proto, e, m, s) {
	yield* addMethodFnToClass((yield* e.branch(m.value, s)), clazz, proto, e, m, s);
};
classFeatures.ClassMethod = function* (clazz, proto, e, m, s) {
	let fx = yield* evaluateFunctionExpression(e, m, s);
	return yield* addMethodFnToClass(fx, clazz, proto, e, {
		kind: m.kind,
		static: m.static,
		key: m.key
	}, s);
};
classFeatures.EmptyStatement = function* () {
	return Value.undef;
};

function* evaluateClassExpression(e, n, s) {
	let clazz = undefined;
	for (let m of n.body.body) {
		if (m.type == "MethodDefinition" && m.kind == "constructor") {
			clazz = yield* e.branch(m.value, s);
			clazz.superTarget = clazz;
			clazz.funcSourceAST = n;
			break;
		}
	}

	let sc;
	if (n.superClass) {
		sc = yield* e.branch(n.superClass, s);
	}

	if (!clazz) {
		clazz = new ObjectValue(e.realm);
		if (sc) {
			clazz.call = function* (thiz, args, scope, extra) {
				yield* sc.call(thiz, args, scope, extra);
				return Value.undef;
			};
		} else {
			clazz.call = function* () {
				return Value.undef;
			};
		}
	}

	let proto = new ObjectValue(e.realm);
	yield* clazz.set('prototype', proto);
	yield* clazz.set('name', Value.fromNative(n.id.name));
	yield* proto.set('constructor', clazz);

	if (sc) {
		clazz.setPrototype(sc);
		proto.setPrototype(sc.getPrototypeProperty());
		clazz.parentClassInstance = sc;
	}
	clazz.superTarget = clazz.getPrototype();

	s.add(n.id.name, clazz);

	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMinor;
	for (let m of n.body.body) {
		if (!module.exports.classFeatures[m.type]) throw new Error("Unsuported Class Feature " + m.type);
		yield* module.exports.classFeatures[m.type](clazz, proto, e, m, s);
		//TODO: Support getters and setters
	}
	return clazz;
}

function* evaluateClassDeclaration(e, n, s) {
	let clazz = yield* evaluateClassExpression(e, n, s);
	yield* s.put(n.id.name, clazz);
	return clazz;
}

function* evaluateConditionalExpression(e, n, s) {
	let test = yield* e.branch(n.test, s);
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMinor;
	if (test.truthy) {
		return yield* e.branch(n.consequent, s);
	} else {
		if (n.alternate) {
			return yield* e.branch(n.alternate, s);
		}
	}
	return Value.undef;
}

function* evaluateContinueStatement(e, n, s) {
	let label = n.label ? n.label.name : undefined;
	let val = new CompletionRecord(CompletionRecord.CONTINUE, Value.undef, label);
	if (e.yieldPower >= 1) yield EvaluatorInstruction.stepMinor;
	return val;
}

function* evaluateDoWhileStatement(e, n, s) {
	let last = Value.undef;
	let that = e;
	var gen = function* () {
		do {
			last = yield that.branchFrame('continue', n.body, s, { labels: n.labels });
		} while ((yield* that.branch(n.test, s)).truthy);
	};
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMinor;
	e.pushFrame({ generator: gen(), type: 'loop', labels: n.labels, ast: n });

	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function* evaluateEmptyStatement(e, n, s) {
	if (e.yieldPower >= 5) yield EvaluatorInstruction.stepMinor;
	return Value.undef;
}

function* evaluateExpressionStatement(e, n, s) {
	if (e.yieldPower > 4) yield EvaluatorInstruction.stepMinor;
	return yield* e.branch(n.expression, s);
}

function* evaluateIdentifier(e, n, s) {
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMinor;
	if (n.name === 'undefined') return Value.undef;
	if (!s.has(n.name)) {
		// Allow undeclared varibles to be null?
		if (false) {}
		let err = CompletionRecord.makeReferenceError(e.realm, `${n.name} is not defined`);
		yield* err.addExtra({ code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict });
		return yield err;
	}
	let r = s.ref(n.name);
	return yield* r.getValue();
}

function* evaluateIfStatement(e, n, s) {
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepStatement;
	let test = yield* e.branch(n.test, s);
	if (test.truthy) {
		return yield* e.branch(n.consequent, s);
	} else {
		if (n.alternate) {
			return yield* e.branch(n.alternate, s);
		}
	}
	return Value.undef;
}

function* evaluateImportDeclaration(e, n, s) {
	return Value.undef;
}

function* genForLoop(e, n, s) {
	let test = Value.true;

	let createPerIterationEnvironment = n.init && n.init.kind == 'let' ? p => {
		let is = s.createChild();
		for (let dec of n.init.declarations) {
			is.addBlock(dec.id.name, p.get(dec.id.name));
		}
		return is;
	} : p => p;

	let is = createPerIterationEnvironment(s);
	if (n.test) test = yield* e.branch(n.test, s);
	let last = Value.undef;
	while (test.truthy) {
		e.topFrame.ast = n;
		if (e.yieldPower > 0) yield EvaluatorInstruction.eventLoopBodyStart;
		last = yield e.branchFrame('continue', n.body, is, { labels: n.labels });
		is = createPerIterationEnvironment(is);
		if (n.update) yield* e.branch(n.update, is);
		if (n.test) test = yield* e.branch(n.test, is);
	}
};

function* evaluateForStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepStatement;
	if (n.init) yield* e.branch(n.init, s);

	e.pushFrame({ generator: genForLoop(e, n, s), type: 'loop', labels: n.labels, ast: n });

	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function* evaluateForInStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepStatement;
	let last = Value.undef;
	let object = yield* e.branch(n.right, s);
	let names = object.observableProperties(s.realm);
	let that = e;
	let ref;
	s = s.createBlockChild();

	if (n.left.type === 'VariableDeclaration') {
		let decl = n.left.declarations[0];
		if (n.left.kind != 'var') s.addBlock(decl.id.name, Value.undef);
		ref = s.ref(decl.id.name, s);
	} else {
		ref = s.ref(n.left.name, s);
	}
	if (!ref) {
		if (s.strict) return CompletionRecord.makeReferenceError(s.realm, `${n.left.name} is not defined`);
		//Create an var in global scope if varialbe doesnt exist and not in strict mode.
		s.global.add(n.left.name, Value.undef);
		ref = s.ref(n.left.name);
	}
	var gen = function* () {
		for (let name of names) {
			yield* ref.setValue(name, s);
			last = yield that.branchFrame('continue', n.body, s, { labels: n.labels });
		}
	};
	e.pushFrame({ generator: gen(), type: 'loop', labels: n.labels, ast: n });

	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

//TODO: For of does more crazy Symbol iterator stuff
function* evaluateForOfStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepStatement;
	let last = Value.undef;
	let object = yield* e.branch(n.right, s);
	let names = object.observableProperties(s.realm);
	let that = e;
	let ref;
	s = s.createBlockChild();
	if (n.left.type === 'VariableDeclaration') {
		let decl = n.left.declarations[0];
		if (decl.kind == 'var') s.add(decl.id.name, Value.undef);else s.addBlock(decl.id.name, Value.undef);
		//yield * s.put(n.left.declarations[0].id.name, Value.undef);
		ref = s.ref(n.left.declarations[0].id.name, s.realm);
	} else {
		ref = s.ref(n.left.name, s.realm);
	}

	var gen = function* () {
		for (let name of names) {
			yield* ref.setValue((yield* object.get((yield* name.toStringNative()))), s);
			last = yield that.branchFrame('continue', n.body, s, { labels: n.labels });
		}
	};
	e.pushFrame({ generator: gen(), type: 'loop', labels: n.labels });

	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function* evaluateFunctionDeclaration(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	let closure = new ClosureValue(n, s);
	s.add(n.id.name, closure);
	return Value.undef;
}

function* evaluateFunctionExpression(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	let value = new ClosureValue(n, s);
	if (n.type === 'ArrowFunctionExpression') {
		value.thiz = s.thiz;
		if (n.expression) value.returnLastValue = true;
	}
	return value;
}

function* evaluateLabeledStatement(e, n, s) {
	if (e.yieldPower >= 5) yield EvaluatorInstruction.stepMinor;
	return yield* e.branch(n.body, s);
}

function* evaluateLiteral(e, n, s) {
	if (e.yieldPower >= 5) yield EvaluatorInstruction.stepMinor;
	if (n.regex) {
		return RegExpValue.make(new RegExp(n.regex.pattern, n.regex.flags), s.realm);
	} else if (n.value === null) {
		if (e.raw === 'null') return Value.null;

		//Work around Esprima turning Infinity into null. =\
		let tryFloat = parseFloat(n.raw);
		if (!isNaN(tryFloat)) return e.fromNative(tryFloat, n);
		return e.fromNative(null, n);
	} else {
		return e.realm.makeLiteralValue(n.value, n);
	}
}

function* evaluateLogicalExpression(e, n, s) {
	let left = yield* e.branch(n.left, s);
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	switch (n.operator) {
		case '&&':
			if (left.truthy) return yield* e.branch(n.right, s);
			return left;
		case '||':
			if (left.truthy) return left;
			return yield* e.branch(n.right, s);
		default:
			throw new Error('Unknown logical operator: ' + n.operator);
	}
}

function* evaluateMemberExpression(e, n, s) {
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMinor;
	let left = yield* e.branch(n.object, s);
	return yield* e.partialMemberExpression(left, n, s);
}

function* evaluateMetaProperty(e, n, s) {
	for (let i = 0; i < e.frames.length - 1; ++i) {
		let t = e.frames[i].type;
		if (t === "function") {
			if (e.frames[i + 1].ast.type == "NewExpression") {
				return e.frames[i].callee;
			} else {
				return Value.undef;
			}
		}
	}
	return Value.undef;
}

function* evaluateObjectExpression(e, n, s) {
	//TODO: Need to wire up native prototype
	var nat = new ObjectValue(s.realm);
	for (let i = 0; i < n.properties.length; ++i) {
		let prop = n.properties[i];
		let key;
		if (n.computed) {
			key = (yield* e.branch(prop.key, s)).toNative().toString();
		} else if (prop.key.type == 'Identifier') {
			key = prop.key.name;
		} else if (prop.key.type == 'Literal') {
			key = prop.key.value.toString();
		}

		let value = yield* e.branch(prop.value, s);
		let pd;

		if (Object.prototype.hasOwnProperty.call(nat.properties, key)) {
			pd = nat.properties[key];
		} else {
			pd = new PropertyDescriptor(Value.undef);
			nat.rawSetProperty(key, pd);
		}

		switch (prop.kind) {
			case 'init':
			default:
				pd.value = value;
				break;
			case 'get':
				pd.getter = value;
				break;
			case 'set':
				pd.setter = value;
				break;
		}
	}
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	return nat;
}

function* evaluateProgram(e, n, s) {
	let result = Value.undef;
	if (n.vars) for (var v in n.vars) {
		s.add(v, Value.undef);
	}
	if (n.strict === true) s.strict = true;
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	for (let statement of n.body) {
		result = yield* e.branch(statement, s);
	}
	return result;
}

function* evaluateReturnStatement(e, n, s) {
	let retVal = Value.undef;
	if (n.argument) retVal = yield* e.branch(n.argument, s);
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepMajor;
	return new CompletionRecord(CompletionRecord.RETURN, retVal);
}

function* evaluateSequenceExpression(e, n, s) {
	let last = Value.undef;
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	for (let expr of n.expressions) {
		last = yield* e.branch(expr, s);
	}
	return last;
}

function* evaluateSuperExpression(e, n, s) {
	let fr;
	for (let i = 0; i < e.frames.length; ++i) {
		fr = e.frames[i];
		if (fr.creator) break;
	}
	let result = fr.creator.superTarget;
	return result;
}

function* evaluateSwitchStatement(e, n, s) {
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepMajor;
	let discriminant = yield* e.branch(n.discriminant, s);
	let last = Value.undef;
	let matches = 0;
	let matchVals = new Array(n.cases.length);
	let matched = false;

	for (let i = 0; i < n.cases.length; ++i) {
		let cas = n.cases[i];
		if (cas.test) {
			let testval = yield* e.branch(cas.test, s);
			let equality = yield* testval.tripleEquals(discriminant);
			if (equality.truthy) ++matches;
			matchVals[i] = equality.truthy;
		}
	}

	let genSwitch = function* (e, n) {

		for (let i = 0; i < n.cases.length; ++i) {
			let cas = n.cases[i];
			if (!matched) {
				if (cas.test) {
					if (!matchVals[i]) continue;
				} else {
					if (matches !== 0) continue;
				}
				matched = true;
			}
			for (let statement of cas.consequent) {
				last = yield* e.branch(statement, s);
			}
		}
	};

	e.pushFrame({ generator: genSwitch(e, n), type: 'loop', labels: n.labels });
	let finished = yield EvaluatorInstruction.waitForFramePop;

	return last;
}

function* evaluateTaggedTemplateExpression(e, n, s) {
	let quasis = n.quasi.quasis;
	let expressions = n.quasi.expressions;
	let value = Value.fromNative(quasis[0].value.cooked);
	let fn = yield* e.branch(n.tag, s);

	let strings = [];
	let rawStrings = [];
	for (let i = 0; i < quasis.length; ++i) {
		strings.push(e.realm.fromNative(quasis[i].value.cooked));
		rawStrings.push(e.realm.fromNative(quasis[i].value.raw));
	}
	let sv = ArrayValue.make(strings, e.realm);
	let rv = ArrayValue.make(rawStrings, e.realm);
	sv.rawSetProperty('raw', new PropertyDescriptor(rv, false));

	let args = [sv];

	for (let i = 0; i < expressions.length; ++i) {
		args.push((yield* e.branch(expressions[i], s)));
	}

	return yield* doCall(e, n, n.tag, s, function* () {
		return args;
	});
}

function* evaluateTemplateLiteral(e, n, s) {
	let value = Value.fromNative(n.quasis[0].value.cooked);
	for (let i = 0; i < n.expressions.length; ++i) {
		value = yield* value.add((yield* e.branch(n.expressions[i], s)));
		value = yield* value.add(Value.fromNative(n.quasis[i + 1].value.cooked));
	}
	return value;
}

function* evaluateThisExpression(e, n, s) {
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	if (s.thiz) return s.thiz;else return Value.undef;
}

function* evaluateThrowStatement(e, n, s) {
	let value = yield* e.branch(n.argument, s);
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepMajor;
	return new CompletionRecord(CompletionRecord.THROW, value);
}

function* evaluateTryStatement(e, n, s) {
	if (e.yieldPower >= 2) yield EvaluatorInstruction.stepMajor;
	if (n.finalizer) e.pushFrame({ generator: e.branch(n.finalizer, s), type: 'finally', scope: s });
	let result = yield e.branchFrame('catch', n.block, s);
	if (result instanceof CompletionRecord && result.type == CompletionRecord.THROW) {
		if (!n.handler) {
			//console.log("No catch..., throwing", result.obj);
			return result;
		}
		let handlerScope = s.createChild();
		handlerScope.add(n.handler.param.name, result.value);
		return yield* e.branch(n.handler.body, handlerScope);
	}
	return result;
}

function* evaluateUpdateExpression(e, n, s) {
	//TODO: Need to support something like ++x[1];
	let nue;
	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMajor;
	let ref = yield* e.resolveRef(n.argument, s, true);
	let old = Value.nan;

	if (ref) old = yield* ref.getValue();
	if (old === undefined) old = Value.nan;
	switch (n.operator) {
		case '++':
			nue = yield* old.add(e.fromNative(1));break;
		case '--':
			nue = yield* old.subtract(e.fromNative(1));break;
		default:
			throw new Error('Unknown update expression type: ' + n.operator);
	}
	if (ref) yield* ref.setValue(nue, s);

	if (n.prefix) return nue;
	return old;
}

function* evaluateUnaryExpression(e, n, s) {
	if (e.yieldPower >= 4) yield EvaluatorInstruction.stepMajor;
	if (n.operator === 'delete') {
		if (n.argument.type !== 'MemberExpression' && n.argument.type !== 'Identifier') {
			//e isnt something you can delete?
			return Value.true;
		}
		let ref = yield* e.resolveRef(n.argument, s);
		if (!ref) return Value.false;
		if (ref.isVariable || !ref.del) {
			return Value.false;
		}
		let worked = ref.del(s);
		if (worked instanceof CompletionRecord) return yield worked;
		return Value.fromNative(worked);
	}

	if (n.operator === 'typeof') {
		if (n.argument.type == 'Identifier') {
			if (!s.has(n.argument.name)) return yield* Value.undef.typeOf();
		}
	}

	let left = yield* e.branch(n.argument, s);
	switch (n.operator) {
		case '-':
			return yield* left.unaryMinus();
		case '+':
			return yield* left.unaryPlus();
		case '!':
			return yield* left.not();
		case '~':
			return yield* left.bitNot();
		case 'typeof':
			return yield* left.typeOf();
		case 'void':
			return Value.undef;
		default:
			throw new Error('Unknown binary operator: ' + n.operator);
	}
}

function* evaluateVariableDeclaration(e, n, s) {
	let kind = n.kind;
	if (e.yieldPower >= 3) yield EvaluatorInstruction.stepMajor;
	let add = (name, decl, value) => {
		if (kind === 'const') {
			if (s.has(name)) {
				return CompletionRecord.makeSyntaxError(e.realm, `Identifier '${name}' has already been declared`);
			}
			s.addConst(name, value);
		} else if (kind == 'let') {
			if (s.blockHas(name)) {
				return CompletionRecord.makeSyntaxError(e.realm, `Identifier '${name}' has already been declared`);
			}
			s.addBlock(name, value);
		} else {
			if (!decl.init && s.has(name)) {} else {
				s.add(name, value);
			}
		}
		return false;
	};

	for (let decl of n.declarations) {
		if (decl.id.type == 'Identifier') {
			let value = Value.undef;
			let name = decl.id.name;
			if (decl.init) value = yield* e.branch(decl.init, s);

			let r = add(name, decl, value);
			if (r) return r;
		} else if (decl.id.type == 'ObjectPattern') {
			let value = Value.undef;
			if (decl.init) value = yield* e.branch(decl.init, s);
			for (let prop of decl.id.properties) {
				let r = add(prop.value.name, decl, (yield* value.get(prop.key.name)));
				if (r) return r;
			}
		} else if (decl.id.type == 'ArrayPattern') {
			let value = Value.undef;
			if (decl.init) value = yield* e.branch(decl.init, s);
			let idx = 0;
			for (let prop of decl.id.elements) {
				if (prop.type === 'RestElement') {
					let len = (yield* value.get('length')).toNative();
					let rest = [];
					while (idx < len) rest.push((yield* value.get(idx++)));

					return add(prop.argument.name, decl, ArrayValue.make(rest, s.realm));
				} else {
					let r = add(prop.name, decl, (yield* value.get(idx)));
					if (r) return r;
					++idx;
				}
			}
		} else {
			return yield CompletionRecord.typeError(`Couldnt resolve declarations component: ${decl.id.type}`);
		}
	}
	return Value.undef;
}

function* genWhileLoop(e, n, s) {
	let last = Value.undef;
	while ((yield* e.branch(n.test, s)).truthy) {
		e.topFrame.ast = n;
		if (e.yieldPower > 0) yield EvaluatorInstruction.eventLoopBodyStart;
		last = yield e.branchFrame('continue', n.body, s);
	}
}

function* evaluateWhileStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	e.pushFrame({ generator: genWhileLoop(e, n, s), type: 'loop', labels: n.labels, ast: n });
	let finished = yield EvaluatorInstruction.waitForFramePop;
	return Value.undef;
}

function* evaluateWithStatement(e, n, s) {
	if (e.yieldPower > 0) yield EvaluatorInstruction.stepMajor;
	if (s.strict) return CompletionRecord.makeSyntaxError(e.realm, 'Strict mode code may not include a with statement');
	let o = yield* e.branch(n.object, s);
	let ns = s.createBlockChild();
	if (o instanceof ObjectValue) {
		let pairs = o.getPropertyValueMap();
		for (let p in pairs) {
			ns.set(p, pairs[p]);
		}
	}
	return yield* e.branch(n.body, ns);
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

function* doResolveRef(n, s, create, branch) {
	switch (n.type) {
		case 'Identifier':
			let iref = s.ref(n.name, s.realm);
			if (!iref) {
				iref = {
					getValue: function* () {
						let err = CompletionRecord.makeReferenceError(s.realm, `${n.name} is not defined`);
						yield* err.addExtra({ code: 'UndefinedVariable', when: 'read', ident: n.name, strict: s.strict });
						return yield err;
					},
					del: function () {
						return true;
					}
				};
				if (!create || s.strict) {
					iref.setValue = function* () {
						let err = CompletionRecord.makeReferenceError(s.realm, `${n.name} is not defined`);
						yield* err.addExtra({ code: 'UndefinedVariable', when: 'write', ident: n.name, strict: s.strict });
						return yield err;
					};
				} else {
					iref.setValue = function* (value) {
						s.global.set(n.name, value, s);
						let aref = s.global.ref(n.name, s);
						this.setValue = aref.setValue;
						this.getValue = aref.getValue;
						this.del = s.strict ? aref.deleteStrict : aref.delete;
					};
				}
			}

			return iref;
		case 'MemberExpression':
			let idx;
			let ref = yield* branch(n.object, s);
			if (n.computed) {
				idx = (yield* branch(n.property, s)).toNative();
			} else {
				idx = n.property.name;
			}

			if (!ref) {
				return yield CompletionRecord.typeError(`Can't write property of undefined: ${idx}`);
			}

			if (!ref.ref) {
				return yield CompletionRecord.typeError(`Can't write property of non-object type: ${idx}`);
			}
			return ref.ref(idx, s);
		case 'ArrayPattern':
			let refs = [];
			//TODO: This should take an iterable
			for (let e of n.elements) refs.push((yield* doResolveRef(e, s, false, branch)));
			return {
				setValue: function* (v) {
					let idx = 0;
					for (let r of refs) {
						if (!v.has(idx)) break;
						yield* r.setValue((yield* v.get(idx)));
						++idx;
					}
				}
			};
		case 'ObjectPattern':
			let orefs = {};
			for (let e of n.properties) {
				orefs[e.key.name] = yield* doResolveRef(e.value, s, false, branch);
			}
			return {
				setValue: function* (v) {
					for (let k in orefs) {
						if (!v.has(k)) break;
						yield* orefs[k].setValue((yield* v.get(k)));
					}
				}
			};
		case 'AssignmentPattern':
			let rref = yield* doResolveRef(n.left, s, false, branch);
			let def = yield* branch(n.right, s);
			//TODO: This assignemnt should be elided
			yield* rref.setValue(def);
			return rref;
		case 'VariableDeclarator':
			// Wrapped in type definition apparelty. -- TODO Move?
			return yield* doResolveRef(n.id, s, create, branch);
		default:
			return yield CompletionRecord.typeError(`Couldnt resolve ref component: ${n.type}`);
	}
}

module.exports = {
	evaluateIdentifier,
	findNextStep,
	classFeatures,
	doResolveRef
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EmptyValue = __webpack_require__(14);
const Value = __webpack_require__(5);

function defer() {
	var resolve, reject;
	var promise = new Promise(function (a, b) {
		resolve = a;
		reject = b;
	});
	return {
		resolve: resolve,
		reject: reject,
		promise: promise
	};
}

class FutureValue extends Value {

	constructor(realm) {
		super(realm);
		this.resolved = false;
		this.successful = undefined;
		this.value = undefined;
		this.defered = defer();
	}

	/**
  * Creates a new future value wraping the promise p.
  * @param {Promise} promise
  */
	static make(promise) {
		var fv = new FutureValue(null);
		promise.then(function (resolved) {
			fv.resolve(Value.fromNative(resolved));
		}, function (caught) {
			fv.reject(Value.fromNative(caught));
		});
		return fv;
	}

	resolve(value) {
		this.value = value;
		this.resolved = true;
		this.successful = true;
		this.defered.resolve(value);
	}

	reject(value) {
		this.value = value;
		this.resolved = true;
		this.successful = false;
		this.defered.resolve(value);
	}

	then() {
		var p = this.defered.promise;
		return p.then.apply(p, arguments);
	}

	get jsTypeName() {
		return 'internal:future';
	}
	get debugString() {
		return '[Future]';
	}
}

module.exports = FutureValue;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(13);
const ObjectValue = __webpack_require__(12);
const Value = __webpack_require__(5);

class RegExpValue extends ObjectValue {

	constructor(realm) {
		super(realm, realm.RegExpPrototype);
	}

	static make(regexp, realm) {

		let av = new RegExpValue(realm);
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

	toNative() {
		return this.regexp;
	}

	get debugString() {
		return this.regexp.toString();
	}
}

RegExpValue.prototype.clazz = 'RegExp';

module.exports = RegExpValue;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PrimitiveValue = __webpack_require__(13);
const ObjectValue = __webpack_require__(12);
const Value = __webpack_require__(5);
const EvaluatorInstruction = __webpack_require__(11);

class ErrorInstance extends ObjectValue {
	constructor(realm, proto) {
		super(realm, proto);
		this.realm = realm;
	}
	createNativeAnalog() {
		if (!this.native) {
			let stack;
			let NativeClass = this.proto.nativeClass || Error;
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

			let frames = stack ? stack.split(/\n/) : [];
			if (stack.length > 1) {
				let header = frames.shift();
				while (/at (ErrorInstance.createNativeAnalog|ErrorObject.make|Function.makeTypeError)/.test(frames[0])) {
					frames.shift();
				}
				this.native.stack = header + '\n' + frames.join('\n');
			}
			for (var k in this.extra) this.native[k] = this.extra[k];
		}
		return this.native;
	}
	toNative() {
		let out = this.createNativeAnalog();
		let msg = this.properties['message'].value;
		if (msg) out.message = msg.toNative();

		if (this.properties['stack']) {
			msg.stack = this.properties['stack'].value.native;
		}

		out.value = this;

		return out;
	}

	*addExtra(extra) {
		if (!this.realm.options.extraErrorInfo) return;
		let evaluator = yield EvaluatorInstruction.getEvaluator;
		if (evaluator) {
			let scope = evaluator.topFrame.scope;
			let ast = extra.ast = evaluator.topFrame.ast;
			extra.scope = scope;
			//TODO: Sometiems scope is undefined, figure out why.
			if (extra.ast.loc) {
				extra.line = extra.ast.loc.start.line;
			}

			switch (extra.code) {
				case 'UndefinedVariable':
				case 'SmartAccessDenied':
					if (scope) extra.candidates = scope.getVariableNames();
					break;
				case 'CallNonFunction':
					let list;
					if (extra.base && extra.base.getPropertyValueMap) {
						list = extra.base.getPropertyValueMap();
					} else {
						list = scope.object.getPropertyValueMap();
					}

					extra.candidates = [];
					for (let k in list) {
						let v = list[k];
						if (v && v.isCallable) {
							extra.candidates.push(k);
						}
					}
					break;
				case 'IndexEmpty':
					break;
			}
		}
		if (this.native) {
			for (var k in extra) {
				if (['ast', 'scope', 'candidates', 'targetAst'].indexOf(k) !== -1) {
					Object.defineProperty(this.native, k, {
						value: extra[k],
						enumerable: false
					});
				} else {
					this.native[k] = extra[k];
				}
			}
		}
		this.extra = extra;
	}
}

module.exports = ErrorInstance;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const EmptyValue = __webpack_require__(14);
const Value = __webpack_require__(5);

class UndefinedValue extends EmptyValue {
	toNative() {
		return undefined;
	}
	get jsTypeName() {
		return 'undefined';
	}
	*tripleEquals(other, realm) {
		return other instanceof UndefinedValue ? Value.true : Value.false;
	}

	*add(other) {
		return Value.fromNative(undefined + other.toNative());
	}

	*asString() {
		return 'undefined';
	}

	*toPrimitiveValue(preferedType) {
		return this;
	}
	*toNumberValue() {
		return Value.nan;
	}
	*toStringValue() {
		return Value.fromNative('undefined');
	}

	get debugString() {
		return 'undefined';
	}
}

module.exports = UndefinedValue;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* @flow */

const Value = __webpack_require__(5);
const ObjectValue = __webpack_require__(12);
const CompletionRecord = __webpack_require__(6);

class EasyNativeFunction extends ObjectValue {
	constructor(realm) {
		super(realm, realm.FunctionPrototype);
	}

	static make(realm, fx, binding) {
		let out = new EasyNativeFunction(realm);
		out.fn = fx;
		out.binding = binding;
		return out;
	}

	static makeForNative(realm, fx) {
		let out = new EasyNativeFunction(realm);
		out.fn = function* (thiz, args) {
			let rargs = new Array(args.length);
			for (let i = 0; i < args.length; ++i) {
				rargs[i] = args[i].toNative();
			}
			let nt = thiz.toNative();
			let nr = fx.apply(nt, rargs);
			return Value.fromNative(nr);
		};
		return out;
	}

	*call(thiz, argz, scope, extra) {
		let profile = false;
		let start = 0;
		try {
			if (extra && extra.evaluator && extra.evaluator.debug) {
				profile = true;
				start = Date.now();
			}
			let s = scope ? scope.createChild() : scope;
			if (s) s.strict = true;
			let o = yield* this.fn.apply(this.binding, arguments, s, extra);
			if (o instanceof CompletionRecord) return o;
			if (!(o instanceof Value)) o = scope.realm.makeForForeignObject(o);
			if (profile) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
			return new CompletionRecord(CompletionRecord.NORMAL, o);
		} catch (e) {
			if (profile) extra.evaluator.incrCtr('fxTime', extra.callNode.callee.srcName, Date.now() - start);
			return new CompletionRecord(CompletionRecord.THROW, scope.realm.makeForForeignObject(e));
		}
	}

	*makeThisForNew(realm) {
		return yield CompletionRecord.typeError('function is not a constructor');
	}

	get debugString() {
		return 'function() { [Native Code] }';
	}
}
EasyNativeFunction.prototype.clazz = 'Function';

module.exports = EasyNativeFunction;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

const fs = __webpack_require__(27);
const path = __webpack_require__(28);

let str;

if (fs.readFileSync) str = fs.readFileSync(path.join(__dirname, 'node_modules', 'skulpty', 'lib', 'stdlib.js'), 'utf8');else str = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'raw-loader!./node_modules/skulpty/lib/stdlib.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

module.exports = str.replace(/^var pythonRuntime = module.exports/, 'var __pythonRuntime');
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 27 */
/***/ (function(module, exports) {



/***/ }),
/* 28 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(29)))

/***/ }),
/* 29 */
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


/***/ })
/******/ ]);
});