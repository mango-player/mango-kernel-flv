(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mangoKernelFlv"] = factory();
	else
		root["mangoKernelFlv"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["mango-helper"] = factory();else root["mango-helper"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/
                };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/
                    });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 3);
            /******/
        }([
        /* 0 */
        /***/function (module, exports, __webpack_require__) {
            /**
             * toxic-predicate-functions v0.1.5
             * (c) 2017 toxic-johann
             * Released under MIT
             */
            (function (global, factory) {
                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicPredicateFunctions = {});
            })(this, function (exports) {
                'use strict';

                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                };
                var asyncGenerator = function () {
                    function AwaitValue(value) {
                        this.value = value;
                    }
                    function AsyncGenerator(gen) {
                        var front, back;
                        function send(key, arg) {
                            return new Promise(function (resolve, reject) {
                                var request = {
                                    key: key,
                                    arg: arg,
                                    resolve: resolve,
                                    reject: reject,
                                    next: null
                                };
                                if (back) {
                                    back = back.next = request;
                                } else {
                                    front = back = request;
                                    resume(key, arg);
                                }
                            });
                        }
                        function resume(key, arg) {
                            try {
                                var result = gen[key](arg);
                                var value = result.value;
                                if (value instanceof AwaitValue) {
                                    Promise.resolve(value.value).then(function (arg) {
                                        resume("next", arg);
                                    }, function (arg) {
                                        resume("throw", arg);
                                    });
                                } else {
                                    settle(result.done ? "return" : "normal", result.value);
                                }
                            } catch (err) {
                                settle("throw", err);
                            }
                        }
                        function settle(type, value) {
                            switch (type) {
                                case "return":
                                    front.resolve({
                                        value: value,
                                        done: true
                                    });
                                    break;
                                case "throw":
                                    front.reject(value);
                                    break;
                                default:
                                    front.resolve({
                                        value: value,
                                        done: false
                                    });
                                    break;
                            }
                            front = front.next;
                            if (front) {
                                resume(front.key, front.arg);
                            } else {
                                back = null;
                            }
                        }
                        this._invoke = send;
                        if (typeof gen.return !== "function") {
                            this.return = undefined;
                        }
                    }
                    if (typeof Symbol === "function" && Symbol.asyncIterator) {
                        AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
                            return this;
                        };
                    }
                    AsyncGenerator.prototype.next = function (arg) {
                        return this._invoke("next", arg);
                    };
                    AsyncGenerator.prototype.throw = function (arg) {
                        return this._invoke("throw", arg);
                    };
                    AsyncGenerator.prototype.return = function (arg) {
                        return this._invoke("return", arg);
                    };
                    return {
                        wrap: function wrap(fn) {
                            return function () {
                                return new AsyncGenerator(fn.apply(this, arguments));
                            };
                        },
                        await: function _await(value) {
                            return new AwaitValue(value);
                        }
                    };
                }();
                /**
                 * to check whether the object is defined or not
                 */
                function defined(obj) {
                    return typeof obj !== 'undefined';
                }
                /**
                 * is void element or not ? Means it will return true when val is undefined or null
                 */
                function isVoid(obj) {
                    return obj === undefined || obj === null;
                }
                /**
                 * to check whether a variable is array
                 */
                function isArray(arr) {
                    return Array.isArray(arr);
                }
                /**
                 * is it a function or not
                 */
                function isFunction(obj) {
                    return typeof obj === 'function';
                }
                /**
                 * is it an object or not
                 */
                function isObject(obj) {
                    // incase of arrow function and array
                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                }
                /**
                 * to tell you if it's a real number
                 */
                function isNumber(obj) {
                    return typeof obj === 'number';
                }
                /**
                 * to tell you if the val can be transfer into number
                 */
                function isNumeric(obj) {
                    return !isArray(obj) && obj - Number.parseFloat(obj) + 1 >= 0;
                }
                /**
                 * is it an interget or not
                 */
                function isInteger(num) {
                    return Number.isInteger(num);
                }
                /**
                 * return true when the value is "", {}, [], 0, null, undefined, false.
                 */
                function isEmpty(obj) {
                    if (isArray(obj)) {
                        return obj.length === 0;
                    } else if (isObject(obj)) {
                        return Object.keys(obj).length === 0;
                    } else {
                        return !obj;
                    }
                }
                /**
                 * is it an event or not
                 */
                function isEvent(obj) {
                    return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
                }
                /**
                 * is it a blob
                 */
                function isBlob(obj) {
                    return obj instanceof Blob;
                }
                /**
                 * is it a file uploaded by user through file inpue
                 */
                function isFile(obj) {
                    return isBlob(obj) && isString(obj.name);
                }
                /**
                 * is it a date
                 */
                function isDate(obj) {
                    return Object.prototype.toString.call(obj) === '[object Date]';
                }
                /**
                 * is it a string
                 */
                function isString(str) {
                    return typeof str === 'string' || str instanceof String;
                }
                /**
                 * is Boolean or not
                 */
                function isBoolean(bool) {
                    return typeof bool === 'boolean';
                }
                /**
                 * is a promise or not
                 */
                function isPromise(obj) {
                    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
                }
                /**
                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                 */
                function isPrimitive(val) {
                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                }
                /**
                 * is it an url, but this test require the url to have an protocol
                 */
                function isUrl(str) {
                    return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
                }
                /**
                 * to test if a HTML node
                 */
                function isNode(obj) {
                    return !!((typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string');
                }
                /**
                 * to test if a HTML element
                 */
                function isElement(obj) {
                    return !!((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string');
                }
                /**
                 * check if node A is node B's parent or not
                 */
                function isChildNode(parent, child) {
                    if (!isNode(parent) || !isNode(child)) {
                        return false;
                    }
                    return child.parentNode === parent;
                }
                /**
                 * check if node B is node A's posterrity or not
                 */
                function isPosterityNode(parent, child) {
                    if (!isNode(parent) || !isNode(child)) {
                        return false;
                    }
                    while (child.parentNode) {
                        child = child.parentNode;
                        if (child === parent) {
                            return true;
                        }
                    }
                    return false;
                }
                /**
                 * check if the string is an HTMLString
                 */
                function isHTMLString(str) {
                    return (/<[^>]+?>/.test(str)
                    );
                }
                /**
                 * check if is an error
                 */
                function isError(val) {
                    return val instanceof Error;
                }
                /**
                 * check if is an RegExp
                 */
                function isRegExp(val) {
                    return val instanceof RegExp;
                }
                exports.defined = defined;
                exports.isVoid = isVoid;
                exports.isArray = isArray;
                exports.isFunction = isFunction;
                exports.isObject = isObject;
                exports.isNumber = isNumber;
                exports.isNumeric = isNumeric;
                exports.isInteger = isInteger;
                exports.isEmpty = isEmpty;
                exports.isEvent = isEvent;
                exports.isBlob = isBlob;
                exports.isFile = isFile;
                exports.isDate = isDate;
                exports.isString = isString;
                exports.isBoolean = isBoolean;
                exports.isPromise = isPromise;
                exports.isPrimitive = isPrimitive;
                exports.isUrl = isUrl;
                exports.isNode = isNode;
                exports.isElement = isElement;
                exports.isChildNode = isChildNode;
                exports.isPosterityNode = isPosterityNode;
                exports.isHTMLString = isHTMLString;
                exports.isError = isError;
                exports.isRegExp = isRegExp;
                Object.defineProperty(exports, '__esModule', { value: true });
            });
            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.caf = exports.raf = exports.inBrowser = undefined;
            exports.makeArray = makeArray;
            exports.transObjectAttrIntoArray = transObjectAttrIntoArray;
            exports.runRejectableQueue = runRejectableQueue;
            exports.runStoppableQueue = runStoppableQueue;
            exports.decodeUTF8 = decodeUTF8;
            exports.debounce = debounce;
            exports.throttle = throttle;
            exports.strRepeat = strRepeat;
            exports.formatTime = formatTime;
            exports.appendCSS = appendCSS;
            exports.formatDate = formatDate;
            exports.getLocalStorage = getLocalStorage;
            exports.setLocalStorage = setLocalStorage;
            var _toxicPredicateFunctions = __webpack_require__(0);
            // **********************  judgement   ************************
            /**
             * check if the code running in browser environment (not include worker env)
             * @returns {Boolean}
             */
            var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
            // **********************  对象操作  ************************
            /**
             * 转变一个类数组对象为数组
             */
            // @flow
            function makeArray(obj) {
                return Array.from(obj);
            }
            /**
             * sort Object attributes by function
             * and transfer them into array
             * @param  {Object} obj Object form from numric
             * @param  {Function} fn sort function
             * @return {Array} the sorted attirbutes array
             */
            function transObjectAttrIntoArray(obj, fn) {
                if (fn === void 0) {
                    fn = function fn(a, b) {
                        return +a - +b;
                    };
                }
                return Object.keys(obj).sort(fn).reduce(function (order, key) {
                    return order.concat(obj[key]);
                }, []);
            }
            /**
             * run a queue one by one.If include function reject or return false it will stop
             * @param  {Array} queue the queue which we want to run one by one
             * @return {Promise}    tell us whether a queue run finished
             */
            function runRejectableQueue(queue) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return new Promise(function (resolve, reject) {
                    var step = function step(index) {
                        if (index >= queue.length) {
                            resolve();
                            return;
                        }
                        var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                        if (result === false) return reject('stop');
                        return Promise.resolve(result).then(function () {
                            return step(index + 1);
                        }).catch(function (err) {
                            return reject(err || 'stop');
                        });
                    };
                    step(0);
                });
            }
            /**
             * run a queue one by one.If include function return false it will stop
             * @param  {Array} queue the queue which we want to run one by one
             * @return {boolean} tell the user if the queue run finished
             */
            function runStoppableQueue(queue) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var step = function step(index) {
                    if (index >= queue.length) {
                        return true;
                    }
                    var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                    if (result === false) return false;
                    return step(++index);
                };
                return step(0);
            }
            function checkContinuation(uint8array, start, checkLength) {
                var array = uint8array;
                if (start + checkLength < array.length) {
                    while (checkLength--) {
                        if ((array[++start] & 0xC0) !== 0x80) {
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            }
            // decodeUTF8
            function decodeUTF8(uint8array) {
                var out = [];
                var input = uint8array;
                var i = 0;
                var length = uint8array.length;
                while (i < length) {
                    if (input[i] < 0x80) {
                        out.push(String.fromCharCode(input[i]));
                        ++i;
                        continue;
                    } else if (input[i] < 0xC0) {
                        // fallthrough
                    } else if (input[i] < 0xE0) {
                        if (checkContinuation(input, i, 1)) {
                            var ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
                            if (ucs4 >= 0x80) {
                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                i += 2;
                                continue;
                            }
                        }
                    } else if (input[i] < 0xF0) {
                        if (checkContinuation(input, i, 2)) {
                            var ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
                            if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                i += 3;
                                continue;
                            }
                        }
                    } else if (input[i] < 0xF8) {
                        if (checkContinuation(input, i, 3)) {
                            var ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
                            if (ucs4 > 0x10000 && ucs4 < 0x110000) {
                                ucs4 -= 0x10000;
                                out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
                                out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
                                i += 4;
                                continue;
                            }
                        }
                    }
                    out.push(String.fromCharCode(0xFFFD));
                    ++i;
                }
                return out.join('');
            }
            function debounce(func, wait, immediate) {
                // immediate默认为false
                var timeout, args, context, timestamp, result;
                var later = function later() {
                    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
                    var last = new Date() - timestamp;
                    if (last < wait && last >= 0) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                            if (!timeout) context = args = null;
                        }
                    }
                };
                return function () {
                    context = this;
                    args = arguments;
                    timestamp = new Date();
                    // 第一次调用该方法时，且immediate为true，则调用func函数
                    var callNow = immediate && !timeout;
                    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
                    if (!timeout) timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                        context = args = null;
                    }
                    return result;
                };
            }
            /**
             * 函数节流（控制函数执行频率）
             * @param  {Function} func 要节流控制的函数，必填
             * @return {Number}   wait 等待时长
             * @return {Object}   options {
             *                      leading<是否首次调用立即执行，否：则按wait设定等待到期后调用才执行>:false,
             *                      trailing<是否在调用并未到期时启用定时器，以保证一定执行>:true
             *                    }
             * @return {Object}   cxt 上下文对象
             * @return {Function}
             */
            function throttle(func, wait, options, cxt) {
                /* options的默认值
                 *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
                 *  options.leading = true;
                 * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
                 *  options.trailing = true;
                 * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
                 */
                var context, args, result;
                var timeout = null;
                var previous = 0;
                if (!options) options = {};
                var later = function later() {
                    previous = options.leading === false ? 0 : new Date() - 0;
                    timeout = null;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                };
                wait = wait || 0;
                return function () {
                    var now = new Date();
                    if (!previous && options.leading === false) previous = now;
                    // 计算剩余时间
                    var remaining = wait - (now - previous);
                    if (cxt) {
                        context = cxt;
                    } else {
                        context = this;
                    }
                    args = arguments;
                    // 当到达wait指定的时间间隔，则调用func函数
                    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
                    if (remaining <= 0 || remaining > wait) {
                        // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
                        if (timeout) {
                            clearTimeout(timeout);
                            timeout = null;
                        }
                        previous = now;
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    } else if (!timeout && options.trailing !== false) {
                        // options.trailing=true时，延时执行func函数
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            }
            // requestAnimationFrame
            var raf = exports.raf = inBrowser && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame) || function (cb) {
                return setTimeout(cb, 17);
            };
            // cancelAnimationFrame
            var caf = exports.caf = inBrowser && (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame) || function (id) {
                clearTimeout(id);
            };
            // 根据要求的位数，将9格式化为 09\009\0009...
            function strRepeat(num, bit) {
                var pBit = bit;
                num = "" + (num || '');
                var numLen = num.length;
                bit = (bit || numLen) - numLen;
                var paddingStr = bit > 0 ? num.repeat ? '0'.repeat(bit) : new Array(bit + 1).join('0') : '';
                return (paddingStr + num).slice(0, pBit);
            }
            // video 时间格式化
            function formatTime(time) {
                var hh = Math.floor(time / 3600);
                time = Math.floor(time % 3600);
                var mm = strRepeat(Math.floor(time / 60), 2);
                time = Math.floor(time % 60);
                var ss = strRepeat(time, 2);
                return hh >= 1 ? hh + ":" + mm + ":" + ss : mm + ":" + ss;
            }
            /**
             * 追加样式代码到head的style标签，不存在则创建
             * @param {String} cssText 样式文本
             * @return {HTMLElement}
             */
            function appendCSS(cssText) {
                var doc = document;
                var styleEl = doc.querySelector('style');
                if (!styleEl) {
                    styleEl = doc.createElement('style');
                    var header = doc.querySelector('head');
                    header && header.appendChild(styleEl);
                }
                styleEl.appendChild(doc.createTextNode(cssText));
                return styleEl;
            }
            /**
             * 格式化日期对象为：年-月-日 时:分:秒.毫秒
             * @param {Date} date Date日期对象
             * @param {String} pattern 要输出的日期格式，默认：`yyyy-MM-dd hh:mm:ss.i`
             * @return {String}
             */
            function formatDate(date, pattern) {
                if (date === void 0) {
                    date = new Date();
                }
                if (pattern === void 0) {
                    pattern = 'yyyy-MM-dd hh:mm:ss.i';
                }
                var year = date.getFullYear().toString();
                var fields = {
                    M: date.getMonth() + 1,
                    d: date.getDate(),
                    h: date.getHours(),
                    m: date.getMinutes(),
                    s: date.getSeconds(),
                    i: date.getMilliseconds()
                };
                pattern = pattern.replace(/(y+)/ig, function (_, yearPattern) {
                    return year.substr(4 - Math.min(4, yearPattern.length));
                });
                var _loop_1 = function _loop_1(i) {
                    pattern = pattern.replace(new RegExp('(' + i + '+)', 'g'), function (_, pattStr) {
                        return (fields[i] < 10 && pattStr.length > 1 ? '0' : '') + fields[i];
                    });
                };
                for (var i in fields) {
                    _loop_1(i);
                }
                return pattern;
            }
            /**
             * 读取本地存储的值（不支持localStorage则降级到cookie）
             * @param {String} key 目标数据key
             * @return {String}
             */
            function getLocalStorage(key) {
                try {
                    return window.localStorage.getItem(key);
                } catch (e) {
                    try {
                        var regRt = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
                        return (0, _toxicPredicateFunctions.isArray)(regRt) ? unescape(regRt[2]) : '';
                    } catch (e) {
                        return '';
                    }
                }
            }
            /**
             * 将指定key对应值写入本地存储（不支持localStorage则降级到cookie）
             * @param {String} key
             * @param {String} val
             * @return {String}
             */
            function setLocalStorage(key, val) {
                try {
                    window.localStorage.setItem(key, val);
                } catch (e) {
                    var expires = new Date();
                    // 默认存储300天
                    expires.setTime(expires.getTime() + 24 * 3600 * 1000 * 300);
                    try {
                        document.cookie = key + '=' + escape(val) + ';expires=' + expires.toUTCString() + ';path=/;';
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CustEvent = undefined;
            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };
            exports.emitEventCache = emitEventCache;
            exports.addEventCache = addEventCache;
            exports.removeEventCache = removeEventCache;
            var _toxicPredicateFunctions = __webpack_require__(0);
            /**
            * @module event
            * @author huzunjie
            * @description 自定义事件基础类
            */
            /* 缓存事件监听方法及包装，内部数据格式：
             * targetIndex_<type:'click|mouseup|done'>: [ [
             *   function(){ ... handler ... },
             *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
             *   isOnce
             * ]]
             */
            var _evtListenerCache = Object.create(null);
            _evtListenerCache.count = 0;
            /**
             * 得到某对象的某事件类型对应的监听队列数组
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
             * @return {Array}
             */
            function getEvtTypeCache(target, type) {
                var evtId = target.__evt_id;
                if (!evtId) {
                    /* 设置__evt_id不可枚举 */
                    Object.defineProperty(target, '__evt_id', {
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                    /* 空对象初始化绑定索引 */
                    evtId = target.__evt_id = ++_evtListenerCache.count;
                }
                var typeCacheKey = evtId + '_' + type;
                var evtTypeCache = _evtListenerCache[typeCacheKey];
                if (!evtTypeCache) {
                    evtTypeCache = _evtListenerCache[typeCacheKey] = [];
                }
                return evtTypeCache;
            }
            /**
             * 触发事件监听方法
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Object} eventObj 触发事件时要传回的event对象
             * @return {undefined}
             */
            function emitEventCache(target, type, eventObj) {
                var evt = Object.create(null);
                evt.type = type;
                evt.target = target;
                if (eventObj) {
                    Object.assign(evt, (0, _toxicPredicateFunctions.isObject)(eventObj) ? eventObj : { data: eventObj });
                }
                getEvtTypeCache(target, type).forEach(function (item) {
                    (item[1] || item[0]).apply(target, [evt]);
                });
            }
            /**
             * 添加事件监听到缓存
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Function} handler 监听函数
             * @param {Boolean} isOnce 是否单次执行
             * @param {Function} handlerWrap
             * @return {undefined}
             */
            function addEventCache(target, type, handler, isOnce, handlerWrap) {
                if (isOnce === void 0) {
                    isOnce = false;
                }
                if ((0, _toxicPredicateFunctions.isFunction)(isOnce) && !handlerWrap) {
                    handlerWrap = isOnce;
                    isOnce = undefined;
                }
                var handlers = [handler, undefined, isOnce];
                if (isOnce && !handlerWrap) {
                    handlerWrap = function handlerWrap() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        removeEventCache(target, type, handler, isOnce);
                        handler.apply(target, args);
                    };
                }
                if (handlerWrap) {
                    handlers[1] = handlerWrap;
                }
                getEvtTypeCache(target, type).push(handlers);
            }
            /**
             * 移除事件监听
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Function} handler 监听函数
             * @return {undefined}
             */
            function removeEventCache(target, type, handler, isOnce) {
                if (isOnce === void 0) {
                    isOnce = false;
                }
                var typeCache = getEvtTypeCache(target, type);
                if (handler || isOnce) {
                    /* 有指定 handler 则清除对应监听 */
                    var handlerId_1 = -1;
                    var handlerWrap_1;
                    typeCache.find(function (item, i) {
                        if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
                            handlerId_1 = i;
                            handlerWrap_1 = item[1];
                            return true;
                        }
                    });
                    if (handlerId_1 !== -1) {
                        typeCache.splice(handlerId_1, 1);
                    }
                    return handlerWrap_1;
                } else {
                    /* 未指定 handler 则清除type对应的所有监听 */
                    typeCache.length = 0;
                }
            }
            /**
             * @class CustEvent
             * @description
             * Event 自定义事件类
             * 1. 可以使用不传参得到的实例作为eventBus使用
             * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
             * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
             * @param  {Object}  target 发生事件的对象（空则默认为event实例）
             * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
             * @return {event}
             */
            var CustEvent = /** @class */function () {
                function CustEvent(target, assign) {
                    var _this = this;
                    /* 设置__target不可枚举 */
                    Object.defineProperty(this, '__target', {
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                    this.__target = this;
                    if (target) {
                        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
                            throw new Error('CusEvent target are not object');
                        }
                        this.__target = target;
                        /* 为target实现on\once\off\emit */
                        if (assign) {
                            ['on', 'once', 'off', 'emit'].forEach(function (mth) {
                                target[mth] = _this[mth];
                            });
                        }
                    }
                }
                /**
                 * 添加事件监听
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数
                 * @param {Boolean} isOnce 单次监听类型
                 * @return {event}
                 */
                CustEvent.prototype.on = function (type, handler, isOnce) {
                    if (isOnce === void 0) {
                        isOnce = false;
                    }
                    addEventCache(this.__target, type, handler, isOnce);
                    return this;
                };
                /**
                 * 添加事件监听,并且只执行一次
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数
                 * @return {event}
                 */
                CustEvent.prototype.once = function (type, handler) {
                    return this.on(type, handler, true);
                };
                /**
                 * 移除事件监听
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
                 * @param {Boolean} isOnce 单次监听类型
                 * @return {event}
                 */
                CustEvent.prototype.off = function (type, handler, isOnce) {
                    if (isOnce === void 0) {
                        isOnce = false;
                    }
                    removeEventCache(this.__target, type, handler, isOnce);
                    return this;
                };
                /**
                 * 触发事件监听函数
                 * @param {String} type 事件类型
                 * @return {event}
                 */
                CustEvent.prototype.emit = function (type, data) {
                    emitEventCache(this.__target, type, { data: data });
                    return this;
                };
                return CustEvent;
            }();
            exports.CustEvent = CustEvent;
            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(4);
            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.UAParser = exports.Log = undefined;
            var _toxicUtils = __webpack_require__(5);
            Object.keys(_toxicUtils).forEach(function (key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _toxicUtils[key];
                    }
                });
            });
            var _toxicPredicateFunctions = __webpack_require__(0);
            Object.keys(_toxicPredicateFunctions).forEach(function (key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _toxicPredicateFunctions[key];
                    }
                });
            });
            var _utils = __webpack_require__(1);
            Object.keys(_utils).forEach(function (key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _utils[key];
                    }
                });
            });
            var _events = __webpack_require__(2);
            Object.keys(_events).forEach(function (key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _events[key];
                    }
                });
            });
            var _dom = __webpack_require__(6);
            Object.keys(_dom).forEach(function (key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _dom[key];
                    }
                });
            });
            var _log = __webpack_require__(7);
            var _log2 = _interopRequireDefault(_log);
            var _uaParserJs = __webpack_require__(8);
            var _uaParserJs2 = _interopRequireDefault(_uaParserJs);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }
            exports.Log = _log2.default;
            exports.UAParser = _uaParserJs2.default; // @flow
            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {
            /**
             * toxic-utils v0.2.0
             * (c) 2017 toxic-johann
             * Released under MIT
             */
            (function (global, factory) {
                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicUtils = {});
            })(this, function (exports) {
                'use strict';

                function unwrapExports(x) {
                    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
                }
                function createCommonjsModule(fn, module) {
                    return module = { exports: {} }, fn(module, module.exports), module.exports;
                }
                // 7.1.4 ToInteger
                var ceil = Math.ceil;
                var floor = Math.floor;
                var _toInteger = function _toInteger(it) {
                    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
                };
                // 7.2.1 RequireObjectCoercible(argument)
                var _defined = function _defined(it) {
                    if (it == undefined) throw TypeError("Can't call method on  " + it);
                    return it;
                };
                // true  -> String#at
                // false -> String#codePointAt
                var _stringAt = function _stringAt(TO_STRING) {
                    return function (that, pos) {
                        var s = String(_defined(that));
                        var i = _toInteger(pos);
                        var l = s.length;
                        var a, b;
                        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                        a = s.charCodeAt(i);
                        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                    };
                };
                var _library = true;
                var _global = createCommonjsModule(function (module) {
                    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
                    // eslint-disable-next-line no-new-func
                    : Function('return this')();
                    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
                });
                var _core = createCommonjsModule(function (module) {
                    var core = module.exports = { version: '2.5.1' };
                    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
                });
                var _core_1 = _core.version;
                var _aFunction = function _aFunction(it) {
                    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                    return it;
                };
                // optional / simple context binding
                var _ctx = function _ctx(fn, that, length) {
                    _aFunction(fn);
                    if (that === undefined) return fn;
                    switch (length) {
                        case 1:
                            return function (a) {
                                return fn.call(that, a);
                            };
                        case 2:
                            return function (a, b) {
                                return fn.call(that, a, b);
                            };
                        case 3:
                            return function (a, b, c) {
                                return fn.call(that, a, b, c);
                            };
                    }
                    return function () /* ...args */{
                        return fn.apply(that, arguments);
                    };
                };
                var _isObject = function _isObject(it) {
                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) === 'object' ? it !== null : typeof it === 'function';
                };
                var _anObject = function _anObject(it) {
                    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
                    return it;
                };
                var _fails = function _fails(exec) {
                    try {
                        return !!exec();
                    } catch (e) {
                        return true;
                    }
                };
                // Thank's IE8 for his funny defineProperty
                var _descriptors = !_fails(function () {
                    return Object.defineProperty({}, 'a', { get: function get() {
                            return 7;
                        } }).a != 7;
                });
                var document = _global.document;
                // typeof document.createElement is 'object' in old IE
                var is = _isObject(document) && _isObject(document.createElement);
                var _domCreate = function _domCreate(it) {
                    return is ? document.createElement(it) : {};
                };
                var _ie8DomDefine = !_descriptors && !_fails(function () {
                    return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
                            return 7;
                        } }).a != 7;
                });
                // 7.1.1 ToPrimitive(input [, PreferredType])
                // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                // and the second argument - flag - preferred type is a string
                var _toPrimitive = function _toPrimitive(it, S) {
                    if (!_isObject(it)) return it;
                    var fn, val;
                    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
                    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                    throw TypeError("Can't convert object to primitive value");
                };
                var dP = Object.defineProperty;
                var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                    _anObject(O);
                    P = _toPrimitive(P, true);
                    _anObject(Attributes);
                    if (_ie8DomDefine) try {
                        return dP(O, P, Attributes);
                    } catch (e) {/* empty */}
                    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                    if ('value' in Attributes) O[P] = Attributes.value;
                    return O;
                };
                var _objectDp = {
                    f: f
                };
                var _propertyDesc = function _propertyDesc(bitmap, value) {
                    return {
                        enumerable: !(bitmap & 1),
                        configurable: !(bitmap & 2),
                        writable: !(bitmap & 4),
                        value: value
                    };
                };
                var _hide = _descriptors ? function (object, key, value) {
                    return _objectDp.f(object, key, _propertyDesc(1, value));
                } : function (object, key, value) {
                    object[key] = value;
                    return object;
                };
                var PROTOTYPE = 'prototype';
                var $export = function $export(type, name, source) {
                    var IS_FORCED = type & $export.F;
                    var IS_GLOBAL = type & $export.G;
                    var IS_STATIC = type & $export.S;
                    var IS_PROTO = type & $export.P;
                    var IS_BIND = type & $export.B;
                    var IS_WRAP = type & $export.W;
                    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
                    var expProto = exports[PROTOTYPE];
                    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
                    var key, own, out;
                    if (IS_GLOBAL) source = name;
                    for (key in source) {
                        // contains in native
                        own = !IS_FORCED && target && target[key] !== undefined;
                        if (own && key in exports) continue;
                        // export native or passed
                        out = own ? target[key] : source[key];
                        // prevent global pollution for namespaces
                        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                        // bind timers to global for call from export context
                        : IS_BIND && own ? _ctx(out, _global)
                        // wrap global constructors for prevent change them in library
                        : IS_WRAP && target[key] == out ? function (C) {
                            var F = function F(a, b, c) {
                                if (this instanceof C) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new C();
                                        case 1:
                                            return new C(a);
                                        case 2:
                                            return new C(a, b);
                                    }
                                    return new C(a, b, c);
                                }
                                return C.apply(this, arguments);
                            };
                            F[PROTOTYPE] = C[PROTOTYPE];
                            return F;
                            // make static versions for prototype methods
                        }(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
                        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                        if (IS_PROTO) {
                            (exports.virtual || (exports.virtual = {}))[key] = out;
                            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                            if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
                        }
                    }
                };
                // type bitmap
                $export.F = 1; // forced
                $export.G = 2; // global
                $export.S = 4; // static
                $export.P = 8; // proto
                $export.B = 16; // bind
                $export.W = 32; // wrap
                $export.U = 64; // safe
                $export.R = 128; // real proto method for `library`
                var _export = $export;
                var _redefine = _hide;
                var hasOwnProperty = {}.hasOwnProperty;
                var _has = function _has(it, key) {
                    return hasOwnProperty.call(it, key);
                };
                var _iterators = {};
                var toString = {}.toString;
                var _cof = function _cof(it) {
                    return toString.call(it).slice(8, -1);
                };
                // fallback for non-array-like ES3 and non-enumerable old V8 strings
                // eslint-disable-next-line no-prototype-builtins
                var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                    return _cof(it) == 'String' ? it.split('') : Object(it);
                };
                // to indexed object, toObject with fallback for non-array-like ES3 strings
                var _toIobject = function _toIobject(it) {
                    return _iobject(_defined(it));
                };
                // 7.1.15 ToLength
                var min = Math.min;
                var _toLength = function _toLength(it) {
                    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
                };
                var max = Math.max;
                var min$1 = Math.min;
                var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
                    index = _toInteger(index);
                    return index < 0 ? max(index + length, 0) : min$1(index, length);
                };
                // false -> Array#indexOf
                // true  -> Array#includes
                var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
                    return function ($this, el, fromIndex) {
                        var O = _toIobject($this);
                        var length = _toLength(O.length);
                        var index = _toAbsoluteIndex(fromIndex, length);
                        var value;
                        // Array#includes uses SameValueZero equality algorithm
                        // eslint-disable-next-line no-self-compare
                        if (IS_INCLUDES && el != el) while (length > index) {
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare
                            if (value != value) return true;
                            // Array#indexOf ignores holes, Array#includes - not
                        } else for (; length > index; index++) {
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el) return IS_INCLUDES || index || 0;
                            }
                        }return !IS_INCLUDES && -1;
                    };
                };
                var SHARED = '__core-js_shared__';
                var store = _global[SHARED] || (_global[SHARED] = {});
                var _shared = function _shared(key) {
                    return store[key] || (store[key] = {});
                };
                var id = 0;
                var px = Math.random();
                var _uid = function _uid(key) {
                    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
                };
                var shared = _shared('keys');
                var _sharedKey = function _sharedKey(key) {
                    return shared[key] || (shared[key] = _uid(key));
                };
                var arrayIndexOf = _arrayIncludes(false);
                var IE_PROTO$1 = _sharedKey('IE_PROTO');
                var _objectKeysInternal = function _objectKeysInternal(object, names) {
                    var O = _toIobject(object);
                    var i = 0;
                    var result = [];
                    var key;
                    for (key in O) {
                        if (key != IE_PROTO$1) _has(O, key) && result.push(key);
                    } // Don't enum bug & hidden keys
                    while (names.length > i) {
                        if (_has(O, key = names[i++])) {
                            ~arrayIndexOf(result, key) || result.push(key);
                        }
                    }return result;
                };
                // IE 8- don't enum bug keys
                var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
                // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                var _objectKeys = Object.keys || function keys(O) {
                    return _objectKeysInternal(O, _enumBugKeys);
                };
                var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
                    _anObject(O);
                    var keys = _objectKeys(Properties);
                    var length = keys.length;
                    var i = 0;
                    var P;
                    while (length > i) {
                        _objectDp.f(O, P = keys[i++], Properties[P]);
                    }return O;
                };
                var document$1 = _global.document;
                var _html = document$1 && document$1.documentElement;
                // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                var IE_PROTO = _sharedKey('IE_PROTO');
                var Empty = function Empty() {};
                var PROTOTYPE$1 = 'prototype';
                // Create object with fake `null` prototype: use iframe Object with cleared prototype
                var _createDict = function createDict() {
                    // Thrash, waste and sodomy: IE GC bug
                    var iframe = _domCreate('iframe');
                    var i = _enumBugKeys.length;
                    var lt = '<';
                    var gt = '>';
                    var iframeDocument;
                    iframe.style.display = 'none';
                    _html.appendChild(iframe);
                    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                    // createDict = iframe.contentWindow.Object;
                    // html.removeChild(iframe);
                    iframeDocument = iframe.contentWindow.document;
                    iframeDocument.open();
                    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                    iframeDocument.close();
                    _createDict = iframeDocument.F;
                    while (i--) {
                        delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
                    }return _createDict();
                };
                var _objectCreate = Object.create || function create(O, Properties) {
                    var result;
                    if (O !== null) {
                        Empty[PROTOTYPE$1] = _anObject(O);
                        result = new Empty();
                        Empty[PROTOTYPE$1] = null;
                        // add "__proto__" for Object.getPrototypeOf polyfill
                        result[IE_PROTO] = O;
                    } else result = _createDict();
                    return Properties === undefined ? result : _objectDps(result, Properties);
                };
                var _wks = createCommonjsModule(function (module) {
                    var store = _shared('wks');
                    var _Symbol = _global.Symbol;
                    var USE_SYMBOL = typeof _Symbol == 'function';
                    var $exports = module.exports = function (name) {
                        return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
                    };
                    $exports.store = store;
                });
                var def = _objectDp.f;
                var TAG = _wks('toStringTag');
                var _setToStringTag = function _setToStringTag(it, tag, stat) {
                    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
                };
                var IteratorPrototype = {};
                // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                _hide(IteratorPrototype, _wks('iterator'), function () {
                    return this;
                });
                var _iterCreate = function _iterCreate(Constructor, NAME, next) {
                    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
                    _setToStringTag(Constructor, NAME + ' Iterator');
                };
                // 7.1.13 ToObject(argument)
                var _toObject = function _toObject(it) {
                    return Object(_defined(it));
                };
                // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                var IE_PROTO$2 = _sharedKey('IE_PROTO');
                var ObjectProto = Object.prototype;
                var _objectGpo = Object.getPrototypeOf || function (O) {
                    O = _toObject(O);
                    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
                    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                        return O.constructor.prototype;
                    }
                    return O instanceof Object ? ObjectProto : null;
                };
                var ITERATOR = _wks('iterator');
                var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
                var FF_ITERATOR = '@@iterator';
                var KEYS = 'keys';
                var VALUES = 'values';
                var returnThis = function returnThis() {
                    return this;
                };
                var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                    _iterCreate(Constructor, NAME, next);
                    var getMethod = function getMethod(kind) {
                        if (!BUGGY && kind in proto) return proto[kind];
                        switch (kind) {
                            case KEYS:
                                return function keys() {
                                    return new Constructor(this, kind);
                                };
                            case VALUES:
                                return function values() {
                                    return new Constructor(this, kind);
                                };
                        }
                        return function entries() {
                            return new Constructor(this, kind);
                        };
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
                        IteratorPrototype = _objectGpo($anyNative.call(new Base()));
                        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                            // Set @@toStringTag to native iterators
                            _setToStringTag(IteratorPrototype, TAG, true);
                            // fix for some old engines
                            if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
                        }
                    }
                    // fix Array#{values, @@iterator}.name in V8 / FF
                    if (DEF_VALUES && $native && $native.name !== VALUES) {
                        VALUES_BUG = true;
                        $default = function values() {
                            return $native.call(this);
                        };
                    }
                    // Define iterator
                    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                        _hide(proto, ITERATOR, $default);
                    }
                    // Plug for library
                    _iterators[NAME] = $default;
                    _iterators[TAG] = returnThis;
                    if (DEFAULT) {
                        methods = {
                            values: DEF_VALUES ? $default : getMethod(VALUES),
                            keys: IS_SET ? $default : getMethod(KEYS),
                            entries: $entries
                        };
                        if (FORCED) for (key in methods) {
                            if (!(key in proto)) _redefine(proto, key, methods[key]);
                        } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
                    }
                    return methods;
                };
                var $at = _stringAt(true);
                // 21.1.3.27 String.prototype[@@iterator]()
                _iterDefine(String, 'String', function (iterated) {
                    this._t = String(iterated); // target
                    this._i = 0; // next index
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
                // call something on iterator step with safe closing on error
                var _iterCall = function _iterCall(iterator, fn, value, entries) {
                    try {
                        return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
                        // 7.4.6 IteratorClose(iterator, completion)
                    } catch (e) {
                        var ret = iterator['return'];
                        if (ret !== undefined) _anObject(ret.call(iterator));
                        throw e;
                    }
                };
                // check on default Array iterator
                var ITERATOR$1 = _wks('iterator');
                var ArrayProto = Array.prototype;
                var _isArrayIter = function _isArrayIter(it) {
                    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
                };
                var _createProperty = function _createProperty(object, index, value) {
                    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
                };
                // getting tag from 19.1.3.6 Object.prototype.toString()
                var TAG$1 = _wks('toStringTag');
                // ES3 wrong here
                var ARG = _cof(function () {
                    return arguments;
                }()) == 'Arguments';
                // fallback for IE11 Script Access Denied error
                var tryGet = function tryGet(it, key) {
                    try {
                        return it[key];
                    } catch (e) {/* empty */}
                };
                var _classof = function _classof(it) {
                    var O, T, B;
                    return it === undefined ? 'Undefined' : it === null ? 'Null'
                    // @@toStringTag case
                    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
                    // builtinTag case
                    : ARG ? _cof(O)
                    // ES3 arguments fallback
                    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
                };
                var ITERATOR$2 = _wks('iterator');
                var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
                    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
                };
                var ITERATOR$3 = _wks('iterator');
                var SAFE_CLOSING = false;
                try {
                    var riter = [7][ITERATOR$3]();
                    riter['return'] = function () {
                        SAFE_CLOSING = true;
                    };
                    // eslint-disable-next-line no-throw-literal
                } catch (e) {/* empty */}
                var _iterDetect = function _iterDetect(exec, skipClosing) {
                    if (!skipClosing && !SAFE_CLOSING) return false;
                    var safe = false;
                    try {
                        var arr = [7];
                        var iter = arr[ITERATOR$3]();
                        iter.next = function () {
                            return { done: safe = true };
                        };
                        arr[ITERATOR$3] = function () {
                            return iter;
                        };
                        exec(arr);
                    } catch (e) {/* empty */}
                    return safe;
                };
                _export(_export.S + _export.F * !_iterDetect(function (iter) {}), 'Array', {
                    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
                        var O = _toObject(arrayLike);
                        var C = typeof this == 'function' ? this : Array;
                        var aLen = arguments.length;
                        var mapfn = aLen > 1 ? arguments[1] : undefined;
                        var mapping = mapfn !== undefined;
                        var index = 0;
                        var iterFn = core_getIteratorMethod(O);
                        var length, result, step, iterator;
                        if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                        // if object isn't iterable or it's array with default iterator - use simple case
                        if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
                            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                                _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
                            }
                        } else {
                            length = _toLength(O.length);
                            for (result = new C(length); length > index; index++) {
                                _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                            }
                        }
                        result.length = index;
                        return result;
                    }
                });
                var from$2 = _core.Array.from;
                var from = createCommonjsModule(function (module) {
                    module.exports = { "default": from$2, __esModule: true };
                });
                unwrapExports(from);
                var toConsumableArray = createCommonjsModule(function (module, exports) {
                    exports.__esModule = true;
                    var _from2 = _interopRequireDefault(from);
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    exports.default = function (arr) {
                        if (Array.isArray(arr)) {
                            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                                arr2[i] = arr[i];
                            }
                            return arr2;
                        } else {
                            return (0, _from2.default)(arr);
                        }
                    };
                });
                var _toConsumableArray = unwrapExports(toConsumableArray);
                var _iterStep = function _iterStep(done, value) {
                    return { value: value, done: !!done };
                };
                // 22.1.3.4 Array.prototype.entries()
                // 22.1.3.13 Array.prototype.keys()
                // 22.1.3.29 Array.prototype.values()
                // 22.1.3.30 Array.prototype[@@iterator]()
                var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
                    this._t = _toIobject(iterated); // target
                    this._i = 0; // next index
                    this._k = kind; // kind
                    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                }, function () {
                    var O = this._t;
                    var kind = this._k;
                    var index = this._i++;
                    if (!O || index >= O.length) {
                        this._t = undefined;
                        return _iterStep(1);
                    }
                    if (kind == 'keys') return _iterStep(0, index);
                    if (kind == 'values') return _iterStep(0, O[index]);
                    return _iterStep(0, [index, O[index]]);
                }, 'values');
                // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                _iterators.Arguments = _iterators.Array;
                var TO_STRING_TAG = _wks('toStringTag');
                var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
                for (var i = 0; i < DOMIterables.length; i++) {
                    var NAME = DOMIterables[i];
                    var Collection = _global[NAME];
                    var proto = Collection && Collection.prototype;
                    if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
                    _iterators[NAME] = _iterators.Array;
                }
                var f$1 = _wks;
                var _wksExt = {
                    f: f$1
                };
                var iterator$2 = _wksExt.f('iterator');
                var iterator = createCommonjsModule(function (module) {
                    module.exports = { "default": iterator$2, __esModule: true };
                });
                unwrapExports(iterator);
                var _meta = createCommonjsModule(function (module) {
                    var META = _uid('meta');
                    var setDesc = _objectDp.f;
                    var id = 0;
                    var isExtensible = Object.isExtensible || function () {
                        return true;
                    };
                    var FREEZE = !_fails(function () {
                        return isExtensible(Object.preventExtensions({}));
                    });
                    var setMeta = function setMeta(it) {
                        setDesc(it, META, { value: {
                                i: 'O' + ++id,
                                w: {} // weak collections IDs
                            } });
                    };
                    var fastKey = function fastKey(it, create) {
                        // return primitive with prefix
                        if (!_isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                        if (!_has(it, META)) {
                            // can't set metadata to uncaught frozen object
                            if (!isExtensible(it)) return 'F';
                            // not necessary to add metadata
                            if (!create) return 'E';
                            // add missing metadata
                            setMeta(it);
                            // return object ID
                        }
                        return it[META].i;
                    };
                    var getWeak = function getWeak(it, create) {
                        if (!_has(it, META)) {
                            // can't set metadata to uncaught frozen object
                            if (!isExtensible(it)) return true;
                            // not necessary to add metadata
                            if (!create) return false;
                            // add missing metadata
                            setMeta(it);
                            // return hash weak collections IDs
                        }
                        return it[META].w;
                    };
                    // add metadata on freeze-family methods calling
                    var onFreeze = function onFreeze(it) {
                        if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
                        return it;
                    };
                    var meta = module.exports = {
                        KEY: META,
                        NEED: false,
                        fastKey: fastKey,
                        getWeak: getWeak,
                        onFreeze: onFreeze
                    };
                });
                var _meta_1 = _meta.KEY;
                var _meta_2 = _meta.NEED;
                var _meta_3 = _meta.fastKey;
                var _meta_4 = _meta.getWeak;
                var _meta_5 = _meta.onFreeze;
                var defineProperty = _objectDp.f;
                var _wksDefine = function _wksDefine(name) {
                    var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
                    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
                };
                var f$2 = Object.getOwnPropertySymbols;
                var _objectGops = {
                    f: f$2
                };
                var f$3 = {}.propertyIsEnumerable;
                var _objectPie = {
                    f: f$3
                };
                // all enumerable object keys, includes symbols
                var _enumKeys = function _enumKeys(it) {
                    var result = _objectKeys(it);
                    var getSymbols = _objectGops.f;
                    if (getSymbols) {
                        var symbols = getSymbols(it);
                        var isEnum = _objectPie.f;
                        var i = 0;
                        var key;
                        while (symbols.length > i) {
                            if (isEnum.call(it, key = symbols[i++])) result.push(key);
                        }
                    }
                    return result;
                };
                // 7.2.2 IsArray(argument)
                var _isArray = Array.isArray || function isArray(arg) {
                    return _cof(arg) == 'Array';
                };
                // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
                var hiddenKeys = _enumBugKeys.concat('length', 'prototype');
                var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                    return _objectKeysInternal(O, hiddenKeys);
                };
                var _objectGopn = {
                    f: f$5
                };
                // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
                var gOPN$1 = _objectGopn.f;
                var toString$1 = {}.toString;
                var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                var getWindowNames = function getWindowNames(it) {
                    try {
                        return gOPN$1(it);
                    } catch (e) {
                        return windowNames.slice();
                    }
                };
                var f$4 = function getOwnPropertyNames(it) {
                    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
                };
                var _objectGopnExt = {
                    f: f$4
                };
                var gOPD$1 = Object.getOwnPropertyDescriptor;
                var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
                    O = _toIobject(O);
                    P = _toPrimitive(P, true);
                    if (_ie8DomDefine) try {
                        return gOPD$1(O, P);
                    } catch (e) {/* empty */}
                    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
                };
                var _objectGopd = {
                    f: f$6
                };
                // ECMAScript 6 symbols shim
                var META = _meta.KEY;
                var gOPD = _objectGopd.f;
                var dP$1 = _objectDp.f;
                var gOPN = _objectGopnExt.f;
                var $Symbol = _global.Symbol;
                var $JSON = _global.JSON;
                var _stringify = $JSON && $JSON.stringify;
                var PROTOTYPE$2 = 'prototype';
                var HIDDEN = _wks('_hidden');
                var TO_PRIMITIVE = _wks('toPrimitive');
                var isEnum = {}.propertyIsEnumerable;
                var SymbolRegistry = _shared('symbol-registry');
                var AllSymbols = _shared('symbols');
                var OPSymbols = _shared('op-symbols');
                var ObjectProto$1 = Object[PROTOTYPE$2];
                var USE_NATIVE = typeof $Symbol == 'function';
                var QObject = _global.QObject;
                // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
                var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;
                // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
                var setSymbolDesc = _descriptors && _fails(function () {
                    return _objectCreate(dP$1({}, 'a', {
                        get: function get() {
                            return dP$1(this, 'a', { value: 7 }).a;
                        }
                    })).a != 7;
                }) ? function (it, key, D) {
                    var protoDesc = gOPD(ObjectProto$1, key);
                    if (protoDesc) delete ObjectProto$1[key];
                    dP$1(it, key, D);
                    if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
                } : dP$1;
                var wrap = function wrap(tag) {
                    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
                    sym._k = tag;
                    return sym;
                };
                var isSymbol = USE_NATIVE && _typeof2($Symbol.iterator) == 'symbol' ? function (it) {
                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol';
                } : function (it) {
                    return it instanceof $Symbol;
                };
                var $defineProperty = function defineProperty(it, key, D) {
                    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
                    _anObject(it);
                    key = _toPrimitive(key, true);
                    _anObject(D);
                    if (_has(AllSymbols, key)) {
                        if (!D.enumerable) {
                            if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
                            it[HIDDEN][key] = true;
                        } else {
                            if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                            D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
                        }
                        return setSymbolDesc(it, key, D);
                    }
                    return dP$1(it, key, D);
                };
                var $defineProperties = function defineProperties(it, P) {
                    _anObject(it);
                    var keys = _enumKeys(P = _toIobject(P));
                    var i = 0;
                    var l = keys.length;
                    var key;
                    while (l > i) {
                        $defineProperty(it, key = keys[i++], P[key]);
                    }return it;
                };
                var $create = function create(it, P) {
                    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
                };
                var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                    var E = isEnum.call(this, key = _toPrimitive(key, true));
                    if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
                    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
                };
                var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                    it = _toIobject(it);
                    key = _toPrimitive(key, true);
                    if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
                    var D = gOPD(it, key);
                    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                    return D;
                };
                var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                    var names = gOPN(_toIobject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
                    }
                    return result;
                };
                var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                    var IS_OP = it === ObjectProto$1;
                    var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
                    }
                    return result;
                };
                // 19.4.1.1 Symbol([description])
                if (!USE_NATIVE) {
                    $Symbol = function _Symbol2() {
                        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                        var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
                        var $set = function $set(value) {
                            if (this === ObjectProto$1) $set.call(OPSymbols, value);
                            if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                            setSymbolDesc(this, tag, _propertyDesc(1, value));
                        };
                        if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
                        return wrap(tag);
                    };
                    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
                        return this._k;
                    });
                    _objectGopd.f = $getOwnPropertyDescriptor;
                    _objectDp.f = $defineProperty;
                    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
                    _objectPie.f = $propertyIsEnumerable;
                    _objectGops.f = $getOwnPropertySymbols;
                    if (_descriptors && !_library) {
                        _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                    }
                    _wksExt.f = function (name) {
                        return wrap(_wks(name));
                    };
                }
                _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });
                for (var es6Symbols =
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
                    _wks(es6Symbols[j++]);
                }for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
                    _wksDefine(wellKnownSymbols[k++]);
                }_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
                    // 19.4.2.1 Symbol.for(key)
                    'for': function _for(key) {
                        return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
                    },
                    // 19.4.2.5 Symbol.keyFor(sym)
                    keyFor: function keyFor(sym) {
                        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                        for (var key in SymbolRegistry) {
                            if (SymbolRegistry[key] === sym) return key;
                        }
                    },
                    useSetter: function useSetter() {
                        setter = true;
                    },
                    useSimple: function useSimple() {
                        setter = false;
                    }
                });
                _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
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
                // 24.3.2 JSON.stringify(value [, replacer [, space]])
                $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
                    var S = $Symbol();
                    // MS Edge converts symbol values to JSON as {}
                    // WebKit converts symbol values to JSON as null
                    // V8 throws on boxed symbols
                    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
                })), 'JSON', {
                    stringify: function stringify(it) {
                        if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                        var args = [it];
                        var i = 1;
                        var replacer, $replacer;
                        while (arguments.length > i) {
                            args.push(arguments[i++]);
                        }replacer = args[1];
                        if (typeof replacer == 'function') $replacer = replacer;
                        if ($replacer || !_isArray(replacer)) replacer = function replacer(key, value) {
                            if ($replacer) value = $replacer.call(this, key, value);
                            if (!isSymbol(value)) return value;
                        };
                        args[1] = replacer;
                        return _stringify.apply($JSON, args);
                    }
                });
                // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
                $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
                // 19.4.3.5 Symbol.prototype[@@toStringTag]
                _setToStringTag($Symbol, 'Symbol');
                // 20.2.1.9 Math[@@toStringTag]
                _setToStringTag(Math, 'Math', true);
                // 24.3.3 JSON[@@toStringTag]
                _setToStringTag(_global.JSON, 'JSON', true);
                _wksDefine('asyncIterator');
                _wksDefine('observable');
                var symbol$2 = _core.Symbol;
                var symbol = createCommonjsModule(function (module) {
                    module.exports = { "default": symbol$2, __esModule: true };
                });
                unwrapExports(symbol);
                var _typeof_1 = createCommonjsModule(function (module, exports) {
                    exports.__esModule = true;
                    var _iterator2 = _interopRequireDefault(iterator);
                    var _symbol2 = _interopRequireDefault(symbol);
                    var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
                        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                    } : function (obj) {
                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                    };
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
                        return typeof obj === "undefined" ? "undefined" : _typeof(obj);
                    } : function (obj) {
                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
                    };
                });
                unwrapExports(_typeof_1);
                // most Object methods by ES6 should accept primitives
                var _objectSap = function _objectSap(KEY, exec) {
                    var fn = (_core.Object || {})[KEY] || Object[KEY];
                    var exp = {};
                    exp[KEY] = exec(fn);
                    _export(_export.S + _export.F * _fails(function () {
                        fn(1);
                    }), 'Object', exp);
                };
                // 19.1.2.14 Object.keys(O)
                _objectSap('keys', function () {
                    return function keys(it) {
                        return _objectKeys(_toObject(it));
                    };
                });
                var keys$1 = _core.Object.keys;
                var keys = createCommonjsModule(function (module) {
                    module.exports = { "default": keys$1, __esModule: true };
                });
                unwrapExports(keys);
                // 20.1.2.3 Number.isInteger(number)
                var floor$1 = Math.floor;
                var _isInteger = function isInteger(it) {
                    return !_isObject(it) && isFinite(it) && floor$1(it) === it;
                };
                // 20.1.2.3 Number.isInteger(number)
                _export(_export.S, 'Number', { isInteger: _isInteger });
                var isInteger$2 = _core.Number.isInteger;
                var isInteger$1 = createCommonjsModule(function (module) {
                    module.exports = { "default": isInteger$2, __esModule: true };
                });
                unwrapExports(isInteger$1);
                var _stringWs = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
                var space = '[' + _stringWs + ']';
                var non = '\u200B\x85';
                var ltrim = RegExp('^' + space + space + '*');
                var rtrim = RegExp(space + space + '*$');
                var exporter = function exporter(KEY, exec, ALIAS) {
                    var exp = {};
                    var FORCE = _fails(function () {
                        return !!_stringWs[KEY]() || non[KEY]() != non;
                    });
                    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
                    if (ALIAS) exp[ALIAS] = fn;
                    _export(_export.P + _export.F * FORCE, 'String', exp);
                };
                // 1 -> String#trimLeft
                // 2 -> String#trimRight
                // 3 -> String#trim
                var trim = exporter.trim = function (string, TYPE) {
                    string = String(_defined(string));
                    if (TYPE & 1) string = string.replace(ltrim, '');
                    if (TYPE & 2) string = string.replace(rtrim, '');
                    return string;
                };
                var _stringTrim = exporter;
                var $parseFloat = _global.parseFloat;
                var $trim = _stringTrim.trim;
                var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
                    var string = $trim(String(str), 3);
                    var result = $parseFloat(string);
                    return result === 0 && string.charAt(0) == '-' ? -0 : result;
                } : $parseFloat;
                // 20.1.2.12 Number.parseFloat(string)
                _export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', { parseFloat: _parseFloat$3 });
                var _parseFloat$1 = parseFloat;
                var _parseFloat = createCommonjsModule(function (module) {
                    module.exports = { "default": _parseFloat$1, __esModule: true };
                });
                unwrapExports(_parseFloat);
                /**
                 * toxic-predicate-functions v0.1.5
                 * (c) 2017 toxic-johann
                 * Released under MIT
                 */
                /**
                 * is void element or not ? Means it will return true when val is undefined or null
                 */
                function isVoid(obj) {
                    return obj === undefined || obj === null;
                }
                /**
                 * to check whether a variable is array
                 */
                function isArray(arr) {
                    return Array.isArray(arr);
                }
                /**
                 * is it a function or not
                 */
                function isFunction(obj) {
                    return typeof obj === 'function';
                }
                /**
                 * is it an object or not
                 */
                function isObject$1(obj) {
                    // incase of arrow function and array
                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                }
                /**
                 * to tell you if it's a real number
                 */
                function isNumber(obj) {
                    return typeof obj === 'number';
                }
                /**
                 * is it a string
                 */
                function isString(str) {
                    return typeof str === 'string' || str instanceof String;
                }
                /**
                 * is Boolean or not
                 */
                function isBoolean(bool) {
                    return typeof bool === 'boolean';
                }
                /**
                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                 */
                function isPrimitive(val) {
                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                }
                /**
                 * the handler to generate an deep traversal handler
                 * @param  {Function} fn the function you wanna run when you reach in the deep property
                 * @return {Function}    the handler
                 */
                function genTraversalHandler(fn) {
                    var setter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (target, key, value) {
                        target[key] = value;
                    };
                    // use recursive to move what in source to the target
                    // if you do not provide a target, we will create a new target
                    function recursiveFn(source, target, key) {
                        if (isArray(source) || isObject$1(source)) {
                            target = isPrimitive(target) ? isObject$1(source) ? {} : [] : target;
                            for (var _key in source) {
                                // $FlowFixMe: support computed key here
                                setter(target, _key, recursiveFn(source[_key], target[_key], _key));
                                // target[key] = recursiveFn(source[key], target[key], key);
                            }
                            return target;
                        }
                        return fn(source, target, key);
                    }
                    return recursiveFn;
                }
                var _deepAssign = genTraversalHandler(function (val) {
                    return val;
                });
                /**
                 * deeply clone an object
                 * @param  {Array|Object} source if you pass in other type, it will throw an error
                 * @return {clone-target}        the new Object
                 */
                function deepClone(source) {
                    if (isPrimitive(source)) {
                        throw new TypeError('deepClone only accept non primitive type');
                    }
                    return _deepAssign(source);
                }
                /**
                 * merge multiple objects
                 * @param  {...Object} args [description]
                 * @return {merge-object}         [description]
                 */
                function deepAssign() {
                    for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                        args[_key2] = arguments[_key2];
                    }
                    if (args.length < 2) {
                        throw new Error('deepAssign accept two and more argument');
                    }
                    for (var i = args.length - 1; i > -1; i--) {
                        if (isPrimitive(args[i])) {
                            throw new TypeError('deepAssign only accept non primitive type');
                        }
                    }
                    var target = args.shift();
                    args.forEach(function (source) {
                        return _deepAssign(source, target);
                    });
                    return target;
                }
                /**
                 * camelize any string, e.g hello world -> helloWorld
                 * @param  {string} str only accept string!
                 * @return {string}     camelize string
                 */
                function camelize(str, isBig) {
                    return str.replace(/(^|[^a-zA-Z]+)([a-zA-Z])/g, function (match, spilt, initials, index) {
                        return !isBig && index === 0 ? initials.toLowerCase() : initials.toUpperCase();
                    });
                }
                /**
                 * hypenate any string e.g hello world -> hello-world
                 * @param  {string} str only accept string
                 * @return {string}
                 */
                function hypenate(str) {
                    return camelize(str).replace(/([A-Z])/g, function (match) {
                        return '-' + match.toLowerCase();
                    });
                }
                /**
                 * bind the function with some context. we have some fallback strategy here
                 * @param {function} fn the function which we need to bind the context on
                 * @param {any} context the context object
                 */
                function bind(fn, context) {
                    if (fn.bind) {
                        return fn.bind(context);
                    } else if (fn.apply) {
                        return function __autobind__() {
                            for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                                args[_key3] = arguments[_key3];
                            }
                            return fn.apply(context, args);
                        };
                    } else {
                        return function __autobind__() {
                            for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
                                args[_key4] = arguments[_key4];
                            }
                            return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
                        };
                    }
                }
                /**
                 * generate an uuid
                 */
                function uuid() {
                    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
                }
                /**
                 * generate an random number which length is 4
                 */
                function S4() {
                    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
                }
                /**
                 * generate an random number with specific length
                 */
                function rand(length) {
                    var str = '';
                    while (str.length < length) {
                        str += S4();
                    }
                    return str.slice(0, length);
                }
                /**
                 * get an deep property
                 */
                function getDeepProperty(obj, keys) {
                    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                        _ref$throwError = _ref.throwError,
                        throwError = _ref$throwError === undefined ? false : _ref$throwError,
                        backup = _ref.backup;
                    if (isString(keys)) {
                        keys = keys.split('.');
                    }
                    if (!isArray(keys)) {
                        throw new TypeError('keys of getDeepProperty must be string or Array<string>');
                    }
                    var read = [];
                    var target = obj;
                    for (var i = 0, len = keys.length; i < len; i++) {
                        var key = keys[i];
                        if (isVoid(target)) {
                            if (throwError) {
                                throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
                            } else {
                                return backup;
                            }
                        }
                        target = target[key];
                        read.push(key);
                    }
                    return target;
                }
                exports.genTraversalHandler = genTraversalHandler;
                exports.deepClone = deepClone;
                exports.deepAssign = deepAssign;
                exports.camelize = camelize;
                exports.hypenate = hypenate;
                exports.bind = bind;
                exports.uuid = uuid;
                exports.S4 = S4;
                exports.rand = rand;
                exports.getDeepProperty = getDeepProperty;
                Object.defineProperty(exports, '__esModule', { value: true });
            });
            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.NodeWrap = exports.supportsPassive = undefined;
            exports.getAttr = getAttr;
            exports.setAttr = setAttr;
            exports.addClassName = addClassName;
            exports.removeClassName = removeClassName;
            exports.hasClassName = hasClassName;
            exports.removeEvent = removeEvent;
            exports.addEvent = addEvent;
            exports.addDelegate = addDelegate;
            exports.removeDelegate = removeDelegate;
            exports.getStyle = getStyle;
            exports.setStyle = setStyle;
            exports.query = query;
            exports.removeEl = removeEl;
            exports.findParents = findParents;
            exports.$ = $;
            var _toxicPredicateFunctions = __webpack_require__(0);
            var _events = __webpack_require__(2);
            var _utils = __webpack_require__(1);
            /**
             * @module dom
             * @author huzunjie
             * @description 一些常用的DOM判断及操作方法，可以使用dom.$('*')包装DOM，实现类jQuery的链式操作；当然这里的静态方法也可以直接使用。
             */
            var _divEl = _utils.inBrowser ? document.createElement('div') : {};
            var _textAttrName = 'innerText';
            'textContent' in _divEl && (_textAttrName = 'textContent');
            var _arrPrototype = Array.prototype;
            /**
             * 读取HTML元素属性值
             * @param {HTMLElement} el 目标元素
             * @param {String} attrName 目标属性名称
             * @return {String}
             */
            function getAttr(el, attrName) {
                return el.getAttribute(attrName);
            }
            /**
             * 设置HTML元素属性值
             * @param {HTMLElement} el 目标元素
             * @param {String} attrName 目标属性名称
             * @param {String} attrVal 目标属性值
             */
            function setAttr(el, attrName, attrVal) {
                if (attrVal === undefined) {
                    el.removeAttribute(attrName);
                } else {
                    el.setAttribute(attrName, attrVal);
                }
            }
            /**
             * 为HTML元素添加className
             * @param {HTMLElement} el 目标元素
             * @param {String} cls 要添加的className（多个以空格分割）
             */
            function addClassName(el, cls) {
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                var clsArr = cls.split(/\s+/);
                if (el.classList) {
                    clsArr.forEach(function (c) {
                        return el.classList.add(c);
                    });
                } else {
                    var curCls_1 = " " + (el.className || '') + " ";
                    clsArr.forEach(function (c) {
                        curCls_1.indexOf(" " + c + " ") === -1 && (curCls_1 += ' ' + c);
                    });
                    el.className = curCls_1.trim();
                }
            }
            /**
             * 为HTML元素移除className
             * @param {HTMLElement} el 目标元素
             * @param {String} cls 要移除的className（多个以空格分割）
             */
            function removeClassName(el, cls) {
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                var clsArr = cls.split(/\s+/);
                if (el.classList) {
                    clsArr.forEach(function (c) {
                        return el.classList.remove(c);
                    });
                } else {
                    var curCls_2 = " " + el.className + " ";
                    clsArr.forEach(function (c) {
                        var tar = ' ' + c + ' ';
                        while (curCls_2.indexOf(tar) !== -1) {
                            curCls_2 = curCls_2.replace(tar, ' ');
                        }
                    });
                    el.className = curCls_2.trim();
                }
            }
            /**
             * 检查HTML元素是否已设置className
             * @param {HTMLElement} el 目标元素
             * @param {String} className 要检查的className
             * @return {Boolean}
             */
            function hasClassName(el, className) {
                return new RegExp('(?:^|\\s)' + className + '(?=\\s|$)').test(el.className);
            }
            /**
             * addEventListener 是否已支持 passive
             * @return {Boolean}
             */
            var supportsPassive = exports.supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function get() {
                        exports.supportsPassive = supportsPassive = true;
                    }
                });
                if (_utils.inBrowser) window.addEventListener('test', null, opts);
            } catch (e) {
                console.error(e);
            }
            /**
             * 为HTML元素移除事件监听
             * @param {HTMLElement} el 目标元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} once 是否只监听一次
             * @param {Boolean} capture 是否在捕获阶段的监听
             */
            function removeEvent(el, type, handler, once, capture) {
                if (once === void 0) {
                    once = false;
                }
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                if (once) {
                    /* 尝试从缓存中读取包装后的方法 */
                    var handlerWrap = (0, _events.removeEventCache)(el, type + '_once', handler);
                    if (handlerWrap) {
                        handler = handlerWrap;
                    }
                }
                el.removeEventListener(type, handler, capture);
            }
            /**
             * 为HTML元素添加事件监听
             * @param {HTMLElement} el 目标元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} once 是否只监听一次
             * @param {Boolean|Object} capture 是否在捕获阶段监听，这里也可以传入 { passive: true } 表示被动模式
             */
            function addEvent(el, type, handler, once, capture) {
                if (once === void 0) {
                    once = false;
                }
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                if (once) {
                    var oldHandler_1 = handler;
                    handler = function () {
                        return function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            oldHandler_1.apply(this, args);
                            removeEvent(el, type, handler, once, capture);
                        };
                    }();
                    /* 将包装后的方法记录到缓存中 */
                    (0, _events.addEventCache)(el, type + '_once', oldHandler_1, handler);
                }
                el.addEventListener(type, handler, capture);
            }
            /**
             * 为HTML元素添加事件代理
             * @param {HTMLElement} el 目标元素
             * @param {String} selector 要被代理的元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} capture 是否在捕获阶段监听
             */
            function addDelegate(el, selector, type, handler, capture) {
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                var handlerWrap = function handlerWrap(e) {
                    var targetElsArr = findParents(e.target || e.srcElement, el, true);
                    var targetElArr = query(selector, el, true);
                    var retEl;
                    if (targetElArr.find) {
                        retEl = targetElArr.find(function (seEl) {
                            return targetElsArr.find(function (tgEl) {
                                return seEl === tgEl;
                            });
                        });
                    } else {
                        // Fixed IE11 Array.find not defined bug
                        targetElArr.forEach(function (seEl) {
                            return !retEl && targetElsArr.forEach(function (tgEl) {
                                if (!retEl && seEl === tgEl) {
                                    retEl = tgEl;
                                }
                            });
                        });
                    }
                    retEl && handler.apply(retEl, arguments);
                };
                /* 将包装后的方法记录到缓存中 */
                (0, _events.addEventCache)(el, type + '_delegate_' + selector, handler, handlerWrap);
                el.addEventListener(type, handlerWrap, capture);
            }
            /**
             * 为HTML元素移除事件代理
             * @param {HTMLElement} el 目标元素
             * @param {String} selector 要被代理的元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} capture 是否在捕获阶段监听
             */
            function removeDelegate(el, selector, type, handler, capture) {
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                /* 尝试从缓存中读取包装后的方法 */
                var handlerWrap = (0, _events.removeEventCache)(el, type + '_delegate_' + selector, handler);
                handlerWrap && el.removeEventListener(type, handlerWrap, capture);
            }
            /**
             * 读取HTML元素样式值
             * @param {HTMLElement} el 目标元素
             * @param {String} key 样式key
             * @return {String}
             */
            function getStyle(el, key) {
                return (el.currentStyle || document.defaultView.getComputedStyle(el, null))[key] || el.style[key];
            }
            /**
             * 设置HTML元素样式值
             * @param {HTMLElement} el 目标元素
             * @param {String} key 样式key
             * @param {String} val 样式值
             */
            function setStyle(el, key, val) {
                if ((0, _toxicPredicateFunctions.isObject)(key)) {
                    for (var k in key) {
                        setStyle(el, k, key[k]);
                    }
                } else {
                    el.style[key] = val;
                }
            }
            /**
             * 根据选择器查询目标元素
             * @param {String} selector 选择器,用于 querySelectorAll
             * @param {HTMLElement} container 父容器
             * @param {Boolean} toArray 强制输出为数组
             * @return {NodeList|Array}
             */
            function query(selector, container, toArray) {
                if (container === void 0) {
                    container = document;
                }
                var retNodeList = container.querySelectorAll(selector);
                return toArray ? Array.from(retNodeList) : retNodeList;
            }
            /**
             * 从DOM树中移除el
             * @param {HTMLElement} el 目标元素
             */
            function removeEl(el) {
                el.parentNode.removeChild(el);
            }
            /**
             * 查找元素的父节点们
             * @param {HTMLElement} el 目标元素
             * @param {HTMLElement} endEl 最大父容器（不指定则找到html）
             * @param {Boolean} haveEl 包含当前元素
             * @param {Boolean} haveEndEl 包含设定的最大父容器
             */
            function findParents(el, endEl, haveEl, haveEndEl) {
                if (endEl === void 0) {
                    endEl = null;
                }
                var retEls = [];
                if (haveEl) {
                    retEls.push(el);
                }
                while (el && el.parentNode !== endEl) {
                    el = el.parentNode;
                    el && retEls.push(el);
                }
                if (haveEndEl) {
                    retEls.push(endEl);
                }
                return retEls;
            }
            /**
             * @class NodeWrap
             * @description
             * NodeWrap DOM包装器，用以实现基本的链式操作
             * new dom.NodeWrap('*') 相当于 dom.$('*')
             * 这里面用于DOM操作的属性方法都是基于上面静态方法实现，有需要可以随时修改补充
             * @param {String} selector 选择器(兼容 String||HTMLString||NodeList||NodeArray||HTMLElement)
             * @param {HTMLElement} container 父容器（默认为document）
             */
            var NodeWrap = /** @class */function () {
                function NodeWrap(selector, container) {
                    if (container === void 0) {
                        container = document;
                    }
                    var _this = this;
                    _this.selector = selector;
                    /* String||NodeList||HTMLElement 识别处理 */
                    var elsArr;
                    if (selector && selector.constructor === NodeList) {
                        /* 支持直接传入NodeList来构建包装器 */
                        elsArr = (0, _utils.makeArray)(selector);
                    } else if ((0, _toxicPredicateFunctions.isArray)(selector)) {
                        /* 支持直接传入Node数组来构建包装器 */
                        elsArr = selector;
                    } else if ((0, _toxicPredicateFunctions.isString)(selector)) {
                        if (selector.indexOf('<') === 0) {
                            /* 支持直接传入HTML字符串来新建DOM并构建包装器 */
                            _divEl.innerHTML = selector;
                            elsArr = query('*', _divEl, true);
                        } else {
                            /* 支持直接传入字符串选择器来查找DOM并构建包装器 */
                            elsArr = query(selector, container, true);
                        }
                    } else {
                        /* 其他任意对象直接构建包装器 */
                        elsArr = [selector];
                    }
                    Object.assign(_this, elsArr);
                    /* NodeWrap本意可以 extends Array省略构造方法中下面这部分代码，但目前编译不支持 */
                    _this.length = elsArr.length;
                }
                /**
                 * 循环遍历DOM集合
                 * @param {Function} fn 遍历函数 fn(item, i)
                 * @return {Object}
                 */
                NodeWrap.prototype.each = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _arrPrototype.forEach.apply(this, args);
                    return this;
                };
                /**
                 * 添加元素到DOM集合
                 * @param {HTMLElement} el 要加入的元素
                 * @return {this}
                 */
                NodeWrap.prototype.push = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _arrPrototype.push.apply(this, args);
                    return this;
                };
                /**
                 * 截取DOM集合片段，并得到新的包装器splice
                 * @param {Nubmer} start
                 * @param {Nubmer} count
                 * @return {NodeWrap} 新的DOM集合包装器
                 */
                NodeWrap.prototype.splice = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return $(_arrPrototype.splice.apply(this, args));
                };
                /**
                 * 查找子元素
                 * @param {String} selector 选择器
                 * @return {NodeWrap} 新的DOM集合包装器
                 */
                NodeWrap.prototype.find = function (selector) {
                    var childs = [];
                    this.each(function (el) {
                        childs = childs.concat(query(selector, el, true));
                    });
                    var childsWrap = $(childs);
                    childsWrap.parent = this;
                    childsWrap.selector = selector;
                    return childsWrap;
                };
                /**
                 * 添加子元素
                 * @param {HTMLElement} childEls 要添加的HTML元素
                 * @return {this}
                 */
                NodeWrap.prototype.append = function (childEls) {
                    var childsWrap = $(childEls);
                    var firstEl = this[0];
                    childsWrap.each(function (newEl) {
                        return firstEl.appendChild(newEl);
                    });
                    return this;
                };
                /**
                 * 将元素集合添加到指定容器
                 * @param {HTMLElement} parentEl 要添加到父容器
                 * @return {this}
                 */
                NodeWrap.prototype.appendTo = function (parentEl) {
                    $(parentEl).append(this);
                    return this;
                };
                /**
                 * DOM集合text内容读写操作
                 * @param {String} val 文本内容（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.text = function (val) {
                    if (arguments.length === 0) {
                        return this[0][_textAttrName];
                    }
                    return this.each(function (el) {
                        el[_textAttrName] = val;
                    });
                };
                /**
                 * DOM集合HTML内容读写操作
                 * @param {String} html html内容（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.html = function (html) {
                    if (arguments.length === 0) {
                        return this[0].innerHTML;
                    }
                    return this.each(function (el) {
                        el.innerHTML = html;
                    });
                };
                /**
                 * DOM集合属性读写操作
                 * @param {String} name 属性名称
                 * @param {String} val 属性值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.attr = function (name, val) {
                    if (arguments.length === 1) {
                        return getAttr(this[0], name);
                    }
                    return this.each(function (el) {
                        return setAttr(el, name, val);
                    });
                };
                /**
                 * DOM集合dataset读写操作
                 * @param {String} key 键名
                 * @param {Any} val 键值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.data = function (key, val) {
                    if (arguments.length === 0) {
                        return this[0].dataset || {};
                    }
                    if (arguments.length === 1) {
                        return (this[0].dataset || {})[key];
                    }
                    return this.each(function (el) {
                        (el.dataset || (el.dataset = {}))[key] = val;
                    });
                };
                /**
                 * DOM集合样式读写操作
                 * @param {String} key 样式key
                 * @param {String} val 样式值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.css = function (key, val) {
                    if (arguments.length === 1 && !(0, _toxicPredicateFunctions.isObject)(key)) {
                        return getStyle(this[0], key);
                    }
                    return this.each(function (el) {
                        return setStyle(el, key, val);
                    });
                };
                /**
                 * 为DOM集合增加className
                 * @param {String} cls 要增加的className
                 * @return {this}
                 */
                NodeWrap.prototype.addClass = function (cls) {
                    return this.each(function (el) {
                        return addClassName(el, cls);
                    });
                };
                /**
                 * 移除当前DOM集合的className
                 * @param {String} cls 要移除的className
                 * @return {this}
                 */
                NodeWrap.prototype.removeClass = function (cls) {
                    return this.each(function (el) {
                        return removeClassName(el, cls);
                    });
                };
                /**
                 * 检查索引0的DOM是否有className
                 * @param {String} cls 要检查的className
                 * @return {this}
                 */
                NodeWrap.prototype.hasClass = function (cls) {
                    return hasClassName(this[0], cls);
                };
                /**
                 * 为DOM集合添加事件监听
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} once 是否只监听一次
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.on = function (type, handler, once, capture) {
                    if (once === void 0) {
                        once = false;
                    }
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return addEvent(el, type, handler, once, capture);
                    });
                };
                /**
                 * 为DOM集合解除事件监听
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} once 是否只监听一次
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.off = function (type, handler, once, capture) {
                    if (once === void 0) {
                        once = false;
                    }
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return removeEvent(el, type, handler, once, capture);
                    });
                };
                /**
                 * 为DOM集合绑定事件代理
                 * @param {String} selector 目标子元素选择器
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.delegate = function (selector, type, handler, capture) {
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return addDelegate(el, selector, type, handler, capture);
                    });
                };
                /**
                 * 为DOM集合解绑事件代理
                 * @param {String} selector 目标子元素选择器
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.undelegate = function (selector, type, handler, capture) {
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return removeDelegate(el, selector, type, handler, capture);
                    });
                };
                /**
                 * 从DOM树中移除
                 * @return {this}
                 */
                NodeWrap.prototype.remove = function () {
                    return this.each(function (el) {
                        return removeEl(el);
                    });
                };
                return NodeWrap;
            }();
            exports.NodeWrap = NodeWrap;
            /**
             * 根据选择器查询并得到目标元素的wrap包装器
             * @param {String} selector 选择器,另外支持 HTMLString||NodeList||NodeArray||HTMLElement
             * @param {HTMLElement} container 父容器
             * @return {Object}
             */
            function $(selector, container) {
                return selector.constructor === NodeWrap ? selector : new NodeWrap(selector, container);
            }
            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            }; // @flow
            var _toxicPredicateFunctions = __webpack_require__(0);
            function formatter(tag, msg) {
                if (!(0, _toxicPredicateFunctions.isString)(tag)) throw new TypeError("Log's method only acccept string as argument, but not " + tag + " in " + (typeof tag === "undefined" ? "undefined" : _typeof(tag)));
                if (!(0, _toxicPredicateFunctions.isString)(msg)) return "[" + Log.GLOBAL_TAG + "] > " + tag;
                tag = Log.FORCE_GLOBAL_TAG ? Log.GLOBAL_TAG : tag || Log.GLOBAL_TAG;
                return "[" + tag + "] > " + msg;
            }
            /**
             * Log Object
             */
            var Log = /** @class */function () {
                function Log() {}
                /**
                 * equal to console.error, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.error = function (tag, msg) {
                    if (!Log.ENABLE_ERROR) {
                        return;
                    }
                    (console.error || console.warn || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.info, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.info = function (tag, msg) {
                    if (!Log.ENABLE_INFO) {
                        return;
                    }
                    (console.info || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.warn, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.warn = function (tag, msg) {
                    if (!Log.ENABLE_WARN) {
                        return;
                    }
                    (console.warn || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.debug, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.debug = function (tag, msg) {
                    if (!Log.ENABLE_DEBUG) {
                        return;
                    }
                    (console.debug || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.verbose, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.verbose = function (tag, msg) {
                    if (!Log.ENABLE_VERBOSE) {
                        return;
                    }
                    console.log(formatter(tag, msg));
                };
                /**
                 * @member {string}
                 */
                Log.GLOBAL_TAG = 'chimee';
                /**
                 * @member {boolean}
                 */
                Log.FORCE_GLOBAL_TAG = false;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_ERROR = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_INFO = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_WARN = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_DEBUG = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_VERBOSE = true;
                return Log;
            }();
            exports.default = Log;
            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__; /**
                                               * UAParser.js v0.7.17
                                               * Lightweight JavaScript-based User-Agent string parser
                                               * https://github.com/faisalman/ua-parser-js
                                               *
                                               * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
                                               * Dual licensed under GPLv2 & MIT
                                               */
            (function (window, undefined) {
                'use strict';
                //////////////
                // Constants
                /////////////

                var LIBVERSION = '0.7.17',
                    EMPTY = '',
                    UNKNOWN = '?',
                    FUNC_TYPE = 'function',
                    UNDEF_TYPE = 'undefined',
                    OBJ_TYPE = 'object',
                    STR_TYPE = 'string',
                    MAJOR = 'major',
                    // deprecated
                MODEL = 'model',
                    NAME = 'name',
                    TYPE = 'type',
                    VENDOR = 'vendor',
                    VERSION = 'version',
                    ARCHITECTURE = 'architecture',
                    CONSOLE = 'console',
                    MOBILE = 'mobile',
                    TABLET = 'tablet',
                    SMARTTV = 'smarttv',
                    WEARABLE = 'wearable',
                    EMBEDDED = 'embedded';
                ///////////
                // Helper
                //////////
                var util = {
                    extend: function extend(regexes, extensions) {
                        var margedRegexes = {};
                        for (var i in regexes) {
                            if (extensions[i] && extensions[i].length % 2 === 0) {
                                margedRegexes[i] = extensions[i].concat(regexes[i]);
                            } else {
                                margedRegexes[i] = regexes[i];
                            }
                        }
                        return margedRegexes;
                    },
                    has: function has(str1, str2) {
                        if (typeof str1 === "string") {
                            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
                        } else {
                            return false;
                        }
                    },
                    lowerize: function lowerize(str) {
                        return str.toLowerCase();
                    },
                    major: function major(version) {
                        return (typeof version === 'undefined' ? 'undefined' : _typeof2(version)) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined;
                    },
                    trim: function trim(str) {
                        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                    }
                };
                ///////////////
                // Map helper
                //////////////
                var mapper = {
                    rgx: function rgx(ua, arrays) {
                        //var result = {},
                        var i = 0,
                            j,
                            k,
                            p,
                            q,
                            matches,
                            match; //, args = arguments;
                        /*// construct object barebones
                        for (p = 0; p < args[1].length; p++) {
                            q = args[1][p];
                            result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
                        }*/
                        // loop through all regexes maps
                        while (i < arrays.length && !matches) {
                            var regex = arrays[i],
                                // even sequence (0,2,4,..)
                            props = arrays[i + 1]; // odd sequence (1,3,5,..)
                            j = k = 0;
                            // try matching uastring with regexes
                            while (j < regex.length && !matches) {
                                matches = regex[j++].exec(ua);
                                if (!!matches) {
                                    for (p = 0; p < props.length; p++) {
                                        match = matches[++k];
                                        q = props[p];
                                        // check if given property is actually array
                                        if ((typeof q === 'undefined' ? 'undefined' : _typeof2(q)) === OBJ_TYPE && q.length > 0) {
                                            if (q.length == 2) {
                                                if (_typeof2(q[1]) == FUNC_TYPE) {
                                                    // assign modified match
                                                    this[q[0]] = q[1].call(this, match);
                                                } else {
                                                    // assign given value, ignore regex match
                                                    this[q[0]] = q[1];
                                                }
                                            } else if (q.length == 3) {
                                                // check whether function or regex
                                                if (_typeof2(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                                    // call function (usually string mapper)
                                                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                                } else {
                                                    // sanitize match using given regex
                                                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                                }
                                            } else if (q.length == 4) {
                                                this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                            }
                                        } else {
                                            this[q] = match ? match : undefined;
                                        }
                                    }
                                }
                            }
                            i += 2;
                        }
                        // console.log(this);
                        //return this;
                    },
                    str: function str(_str, map) {
                        for (var i in map) {
                            // check if array
                            if (_typeof2(map[i]) === OBJ_TYPE && map[i].length > 0) {
                                for (var j = 0; j < map[i].length; j++) {
                                    if (util.has(map[i][j], _str)) {
                                        return i === UNKNOWN ? undefined : i;
                                    }
                                }
                            } else if (util.has(map[i], _str)) {
                                return i === UNKNOWN ? undefined : i;
                            }
                        }
                        return _str;
                    }
                };
                ///////////////
                // String map
                //////////////
                var maps = {
                    browser: {
                        oldsafari: {
                            version: {
                                '1.0': '/8',
                                '1.2': '/1',
                                '1.3': '/3',
                                '2.0': '/412',
                                '2.0.2': '/416',
                                '2.0.3': '/417',
                                '2.0.4': '/419',
                                '?': '/'
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                'Fire Phone': ['SD', 'KF']
                            }
                        },
                        sprint: {
                            model: {
                                'Evo Shift 4G': '7373KT'
                            },
                            vendor: {
                                'HTC': 'APA',
                                'Sprint': 'Sprint'
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                'ME': '4.90',
                                'NT 3.11': 'NT3.51',
                                'NT 4.0': 'NT4.0',
                                '2000': 'NT 5.0',
                                'XP': ['NT 5.1', 'NT 5.2'],
                                'Vista': 'NT 6.0',
                                '7': 'NT 6.1',
                                '8': 'NT 6.2',
                                '8.1': 'NT 6.3',
                                '10': ['NT 6.4', 'NT 10.0'],
                                'RT': 'ARM'
                            }
                        }
                    }
                };
                //////////////
                // Regex map
                /////////////
                var regexes = {
                    browser: [[
                    // Presto based
                    /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
                    ], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
                    ], [[NAME, 'Opera Mini'], VERSION], [/\s(opr)\/([\w\.]+)/i // Opera Webkit
                    ], [[NAME, 'Opera'], VERSION], [
                    // Mixed
                    /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                    // Lunascape/Maxthon/Netfront/Jasmine/Blazer
                    // Trident based
                    /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                    // Avant/IEMobile/SlimBrowser/Baidu
                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                    // Webkit/KHTML based
                    /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                    // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
                    ], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
                    ], [[NAME, 'IE'], VERSION], [/(edge)\/((\d+)?[\w\.]+)/i // Microsoft Edge
                    ], [NAME, VERSION], [/(yabrowser)\/([\w\.]+)/i // Yandex
                    ], [[NAME, 'Yandex'], VERSION], [/(puffin)\/([\w\.]+)/i // Puffin
                    ], [[NAME, 'Puffin'], VERSION], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
                    // UCBrowser
                    ], [[NAME, 'UCBrowser'], VERSION], [/(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
                    ], [[NAME, /_/g, ' '], VERSION], [/(micromessenger)\/([\w\.]+)/i // WeChat
                    ], [[NAME, 'WeChat'], VERSION], [/(QQ)\/([\d\.]+)/i // QQ, aka ShouQ
                    ], [NAME, VERSION], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i // QQBrowser
                    ], [NAME, VERSION], [/xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
                    ], [VERSION, [NAME, 'MIUI Browser']], [/;fbav\/([\w\.]+);/i // Facebook App for iOS & Android
                    ], [VERSION, [NAME, 'Facebook']], [/headlesschrome(?:\/([\w\.]+)|\s)/i // Chrome Headless
                    ], [VERSION, [NAME, 'Chrome Headless']], [/\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
                    ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
                    ], [VERSION, [NAME, 'Android Browser']], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                    // Chrome/OmniWeb/Arora/Tizen/Nokia
                    ], [NAME, VERSION], [/(dolfin)\/([\w\.]+)/i // Dolphin
                    ], [[NAME, 'Dolphin'], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
                    ], [[NAME, 'Chrome'], VERSION], [/(coast)\/([\w\.]+)/i // Opera Coast
                    ], [[NAME, 'Opera Coast'], VERSION], [/fxios\/([\w\.-]+)/i // Firefox for iOS
                    ], [VERSION, [NAME, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
                    ], [VERSION, [NAME, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
                    ], [VERSION, NAME], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Google Search Appliance on iOS
                    ], [[NAME, 'GSA'], VERSION], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
                    ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [
                    // Gecko based
                    /(navigator|netscape)\/([\w\.-]+)/i // Netscape
                    ], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                    // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                    // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                    // Other
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                    // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                    /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
                    ], [NAME, VERSION]
                    /* /////////////////////
                    // Media players BEGIN
                    ////////////////////////
                                 , [
                                 /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
                    /(coremedia) v((\d+)[\w\._]+)/i
                    ], [NAME, VERSION], [
                                 /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
                    ], [NAME, VERSION], [
                                 /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
                    ], [NAME, VERSION], [
                                 /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                        // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                        // NSPlayer/PSP-InternetRadioPlayer/Videos
                    /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
                    /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
                    /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
                    ], [NAME, VERSION], [
                    /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
                    ], [NAME, VERSION], [
                                 /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
                    ], [[NAME, 'Flip Player'], VERSION], [
                                 /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                        // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
                    ], [NAME], [
                                 /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                        // Gstreamer
                    ], [NAME, VERSION], [
                                 /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
                    /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                        // Java/urllib/requests/wget/cURL
                    /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
                    ], [NAME, VERSION], [
                                 /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
                    ], [[NAME, /_/g, ' '], VERSION], [
                                 /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                        // MPlayer SVN
                    ], [NAME, VERSION], [
                                 /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
                    ], [NAME, VERSION], [
                                 /(mplayer)/i,                                                       // MPlayer (no other info)
                    /(yourmuze)/i,                                                      // YourMuze
                    /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
                    ], [NAME], [
                                 /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
                    ], [NAME, VERSION], [
                                 /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
                    ], [NAME, VERSION], [
                                 /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
                    ], [NAME, VERSION], [
                                 /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
                    /(winamp)\s((\d+)[\w\.-]+)/i,
                    /(winamp)mpeg\/((\d+)[\w\.-]+)/i
                    ], [NAME, VERSION], [
                                 /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                        // inlight radio
                    ], [NAME], [
                                 /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                        // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                        // SoundTap/Totem/Stagefright/Streamium
                    ], [NAME, VERSION], [
                                 /(smp)((\d+)[\d\.]+)/i                                              // SMP
                    ], [NAME, VERSION], [
                                 /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
                    /(vlc)\/((\d+)[\w\.-]+)/i,
                    /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
                    /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
                    /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
                    ], [NAME, VERSION], [
                                 /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
                    /(windows-media-player)\/((\d+)[\w\.-]+)/i
                    ], [[NAME, /-/g, ' '], VERSION], [
                                 /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                        // Windows Media Server
                    ], [VERSION, [NAME, 'Windows']], [
                                 /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
                    ], [NAME, VERSION], [
                                 /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
                    /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
                    ], [[NAME, 'rad.io'], VERSION]
                                 //////////////////////
                    // Media players END
                    ////////////////////*/
                    ],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
                    ], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i // IA32 (quicktime)
                    ], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i // IA32
                    ], [[ARCHITECTURE, 'ia32']], [
                    // PocketPC mistakenly identified as PowerPC
                    /windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
                    ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\w)[;\)]/i // SPARC
                    ], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                    // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
                    ], [[ARCHITECTURE, util.lowerize]]],
                    device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i // iPad/PlayBook
                    ], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/ // iPad
                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i // Apple TV
                    ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i // Kindle Fire HD
                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i // Fire Phone
                    ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
                    ], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i // iPod/iPhone
                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                    // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                    /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i // Asus
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i // BlackBerry 10
                    ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                    // Asus Tablets
                    /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i // Nintendo
                    ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i // Nvidia
                    ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i // Playstation
                    ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i // Sprint Phones
                    ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i // Lenovo tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                    // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
                    ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\s9)/i // HTC Nexus 9
                    ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i // Huawei
                    ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
                    ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i // Microsoft Kin
                    ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
                    // Motorola
                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
                    ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i // Sharp
                    ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/sie-(\w+)*/i // Siemens
                    ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i // Acer
                    ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android.+([vl]k\-?\d{3})\s+build/i // LG Tablet
                    ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
                    ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i // LG SmartTV
                    ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
                    ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/linux;.+((jolla));/i // Jolla
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i // Pebble
                    ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i // OPPO
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i // Google Chromecast
                    ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [/android.+;\s(glass)\s\d/i // Google Glass
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+;\s(pixel c)\s/i // Google Pixel C
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [/android.+;\s(pixel xl|pixel)\s/i // Google Pixel
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i // Redmi Phones
                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i // Mi Pad tablets
                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [/android.+;\s(m[1-5]\snote)\sbuild/i // Meizu Tablet
                    ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [/android.+a000(1)\s+build/i // OnePlus
                    ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i // RCA Tablets
                    ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i // Dell Venue Tablets
                    ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i // Verizon Tablet
                    ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i // Barnes & Noble Tablet
                    ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i // Barnes & Noble Tablet
                    ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i // ZTE K Series Tablet
                    ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i // Swiss GEN Mobile
                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [/android.+[;\/]\s*(zur\d{3})\s+build/i // Swiss ZUR Tablet
                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i // Zeki Tablets
                    ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i // Dragon Touch Tablet
                    ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(NS-?.+)\s+build/i // Insignia Tablets
                    ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i // NextBook Tablets
                    ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i // LvTel Phones
                    ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i // Envizen Tablets
                    ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i // Le Pan Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i // MachSpeed Tablets
                    ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i // Trinity Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*TU_(1491)\s+build/i // Rotor Tablets
                    ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [/android.+(KS(.+))\s+build/i // Amazon Kindle Tablets
                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i // Gigaset Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
                    ], [[TYPE, util.lowerize], VENDOR, MODEL], [/(android.+)[;\/].+build/i // Generic Android Device
                    ], [MODEL, [VENDOR, 'Generic']]
                    /*//////////////////////////
                        // TODO: move to string map
                        ////////////////////////////
                                         /(C6603)/i                                                          // Sony Xperia Z C6603
                        ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                        /(C6903)/i                                                          // Sony Xperia Z 1
                        ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                                         /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
                        ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
                        ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
                        ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G313HZ)/i                                                      // Samsung Galaxy V
                        ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
                        ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                        /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
                        ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
                        ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                                         /(T3C)/i                                                            // Advan Vandroid T3C
                        ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
                        ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
                        ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
                                         /(V972M)/i                                                          // ZTE V972M
                        ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
                                         /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
                        ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                        /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
                        ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                                         /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
                        ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
                                         /////////////
                        // END TODO
                        ///////////*/
                    ],
                    engine: [[/windows.+\sedge\/([\w\.]+)/i // EdgeHTML
                    ], [VERSION, [NAME, 'EdgeHTML']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
                    ], [NAME, VERSION], [/rv\:([\w\.]+).*(gecko)/i // Gecko
                    ], [VERSION, NAME]],
                    os: [[
                    // Windows based
                    /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
                    ], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
                    // Mobile/Embedded OS
                    /\((bb)(10);/i // BlackBerry 10
                    ], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                    // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
                    /linux;.+(sailfish);/i // Sailfish OS
                    ], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i // Symbian
                    ], [[NAME, 'Symbian'], VERSION], [/\((series40);/i // Series 40
                    ], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
                    ], [[NAME, 'Firefox OS'], VERSION], [
                    // Console
                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                    // GNU/Linux based
                    /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                    // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                    // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                    /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i // GNU
                    ], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
                    ], [[NAME, 'Chromium OS'], VERSION], [
                    // Solaris
                    /(sunos)\s?([\w\.]+\d)*/i // Solaris
                    ], [[NAME, 'Solaris'], VERSION], [
                    // BSD based
                    /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                    ], [NAME, VERSION], [/(haiku)\s(\w+)/i // Haiku
                    ], [NAME, VERSION], [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i // iOS
                    ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
                    ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [
                    // Other
                    /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                    // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
                    /(unix)\s?([\w\.]+)*/i // UNIX
                    ], [NAME, VERSION]]
                };
                /////////////////
                // Constructor
                ////////////////
                /*
                var Browser = function (name, version) {
                    this[NAME] = name;
                    this[VERSION] = version;
                };
                var CPU = function (arch) {
                    this[ARCHITECTURE] = arch;
                };
                var Device = function (vendor, model, type) {
                    this[VENDOR] = vendor;
                    this[MODEL] = model;
                    this[TYPE] = type;
                };
                var Engine = Browser;
                var OS = Browser;
                */
                var UAParser = function UAParser(uastring, extensions) {
                    if ((typeof uastring === 'undefined' ? 'undefined' : _typeof2(uastring)) === 'object') {
                        extensions = uastring;
                        uastring = undefined;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(uastring, extensions).getResult();
                    }
                    var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
                    var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
                    //var browser = new Browser();
                    //var cpu = new CPU();
                    //var device = new Device();
                    //var engine = new Engine();
                    //var os = new OS();
                    this.getBrowser = function () {
                        var browser = { name: undefined, version: undefined };
                        mapper.rgx.call(browser, ua, rgxmap.browser);
                        browser.major = util.major(browser.version); // deprecated
                        return browser;
                    };
                    this.getCPU = function () {
                        var cpu = { architecture: undefined };
                        mapper.rgx.call(cpu, ua, rgxmap.cpu);
                        return cpu;
                    };
                    this.getDevice = function () {
                        var device = { vendor: undefined, model: undefined, type: undefined };
                        mapper.rgx.call(device, ua, rgxmap.device);
                        return device;
                    };
                    this.getEngine = function () {
                        var engine = { name: undefined, version: undefined };
                        mapper.rgx.call(engine, ua, rgxmap.engine);
                        return engine;
                    };
                    this.getOS = function () {
                        var os = { name: undefined, version: undefined };
                        mapper.rgx.call(os, ua, rgxmap.os);
                        return os;
                    };
                    this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function () {
                        return ua;
                    };
                    this.setUA = function (uastring) {
                        ua = uastring;
                        //browser = new Browser();
                        //cpu = new CPU();
                        //device = new Device();
                        //engine = new Engine();
                        //os = new OS();
                        return this;
                    };
                    return this;
                };
                UAParser.VERSION = LIBVERSION;
                UAParser.BROWSER = {
                    NAME: NAME,
                    MAJOR: MAJOR,
                    VERSION: VERSION
                };
                UAParser.CPU = {
                    ARCHITECTURE: ARCHITECTURE
                };
                UAParser.DEVICE = {
                    MODEL: MODEL,
                    VENDOR: VENDOR,
                    TYPE: TYPE,
                    CONSOLE: CONSOLE,
                    MOBILE: MOBILE,
                    SMARTTV: SMARTTV,
                    TABLET: TABLET,
                    WEARABLE: WEARABLE,
                    EMBEDDED: EMBEDDED
                };
                UAParser.ENGINE = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                UAParser.OS = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                //UAParser.Utils = util;
                ///////////
                // Export
                //////////
                // check js environment
                if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) !== UNDEF_TYPE) {
                    // nodejs env
                    if ((typeof module === 'undefined' ? 'undefined' : _typeof2(module)) !== UNDEF_TYPE && module.exports) {
                        exports = module.exports = UAParser;
                    }
                    // TODO: test!!!!!!!!
                    /*
                    if (require && require.main === module && process) {
                        // cli
                        var jsonize = function (arr) {
                            var res = [];
                            for (var i in arr) {
                                res.push(new UAParser(arr[i]).getResult());
                            }
                            process.stdout.write(JSON.stringify(res, null, 2) + '\n');
                        };
                        if (process.stdin.isTTY) {
                            // via args
                            jsonize(process.argv.slice(2));
                        } else {
                            // via pipe
                            var str = '';
                            process.stdin.on('readable', function() {
                                var read = process.stdin.read();
                                if (read !== null) {
                                    str += read;
                                }
                            });
                            process.stdin.on('end', function () {
                                jsonize(str.replace(/\n$/, '').split('\n'));
                            });
                        }
                    }
                    */
                    exports.UAParser = UAParser;
                } else {
                    // requirejs env (optional)
                    if ("function" === FUNC_TYPE && __webpack_require__(9)) {
                        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                            return UAParser;
                        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else if (window) {
                        // browser env
                        window.UAParser = UAParser;
                    }
                }
                // jQuery/Zepto specific (optional)
                // Note:
                //   In AMD env the global scope should be kept clean, but jQuery is an exception.
                //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
                //   and we should catch that.
                var $ = window && (window.jQuery || window.Zepto);
                if ((typeof $ === 'undefined' ? 'undefined' : _typeof2($)) !== UNDEF_TYPE) {
                    var parser = new UAParser();
                    $.ua = parser.getResult();
                    $.ua.get = function () {
                        return parser.getUA();
                    };
                    $.ua.set = function (uastring) {
                        parser.setUA(uastring);
                        var result = parser.getResult();
                        for (var prop in result) {
                            $.ua[prop] = result[prop];
                        }
                    };
                }
            })((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' ? window : this);
            /***/
        },
        /* 9 */
        /***/function (module, exports) {
            /* WEBPACK VAR INJECTION */(function (__webpack_amd_options__) {
                module.exports = __webpack_amd_options__;
                /* WEBPACK VAR INJECTION */
            }).call(exports, {});
            /***/
        }]
        /******/
        )["default"]
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ERRORNO = exports.ERRORNO = {
    NET_ERROR: 100,
    CODEC_ERROR: 101,
    CANNOT_SEEK: 102,
    ENDOFSTREAM_ERROR: 103,
    MEDIASOURCE_ERROR: 104,
    SOURCEBUFFER_ERROR: 105,
    SBABORT_ERROR: 106,
    APPENDBUFFER_ERROR: 107
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fetch = __webpack_require__(13);

var _fetch2 = _interopRequireDefault(_fetch);

var _xhrRange = __webpack_require__(15);

var _xhrRange2 = _interopRequireDefault(_xhrRange);

var _websocket = __webpack_require__(16);

var _websocket2 = _interopRequireDefault(_websocket);

var _xhrMozChunk = __webpack_require__(17);

var _xhrMozChunk2 = _interopRequireDefault(_xhrMozChunk);

var _mangoHelper = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* 处理range的静态函数
* author songguangyu
* email 522963130@qq.com
*/
var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * Ioloader 处理io的调用器 缓存多余数据
 * @class Ioloader
 * @param  {object} video config
 */
var Ioloader = /** @class */function (_super) {
    __extends(Ioloader, _super);
    function Ioloader(config) {
        var _this = _super.call(this) || this;
        _this.loader = null;
        _this.config = {};
        _this.config = config || {};
        _this.bufferSize = 1024 * 1024 * 3; // initial size: 3MB
        _this.cacheBuffer = new ArrayBuffer(_this.bufferSize);
        _this.cacheRemain = 0;
        _this.stashByteStart = 0;
        _this.enableStash = true;
        _this.stashSize = _this.config.stashSize || 1024 * 384;
        _this.resumeFrom = 0;
        _this.currentRange = {};
        _this.totalReceive = 0;
        _this.seekPonit = undefined;
        _this.timer = null;
        _this.heartBeatInterval = null;
        _this.preTotalReceive = 0;
        _this.seekLock = false;
        _this.webSocketURLReg = /wss?:\/\/(.+?)/;
        _this.selectLoader();
        _this.bindEvent();
        return _this;
    }
    /**
    * 自动选择io处理器
    */
    Ioloader.prototype.selectLoader = function () {
        var config = this.config;
        var url = this.config.src;
        if (this.webSocketURLReg.test(url)) {
            this.loader = new _websocket2.default(url, config, this.queryHandle);
        } else if (_fetch2.default.isSupport()) {
            this.loader = new _fetch2.default(url, config, this.queryHandle);
        } else if (_xhrMozChunk2.default.isSupport()) {
            this.loader = new _xhrMozChunk2.default(url, config, this.queryHandle);
        } else if (_xhrRange2.default.isSupport()) {
            this.loader = new _xhrRange2.default(url, config, this.queryHandle);
        }
        this.loader.arrivalDataCallback = this.onLoaderChunkArrival.bind(this);
    };
    /**
    * 绑定事件
    */
    Ioloader.prototype.bindEvent = function () {
        var _this = this;
        this.loader.on('end', function () {
            var buffer = _this.cacheBuffer.slice(0, _this.cacheRemain);
            _this.arrivalDataCallback(buffer, _this.stashByteStart);
            _this.emit('end');
        });
        this.loader.on('error', function (handle) {
            _this.emit('error', handle.data);
        });
    };
    /**
    * 数据接收器
    * @param  {arrayBuffer} chunk data
    * @param  {number} chunk byte postion
    */
    Ioloader.prototype.onLoaderChunkArrival = function (chunk, byteStart, keyframePoint) {
        if (this.seekLock && keyframePoint === undefined) {
            return;
        }
        if (keyframePoint !== undefined) {
            this.seekPonit = keyframePoint;
            this.seekLock = false;
        }
        if (this.arrivalDataCallback) {
            this.totalReceive += chunk.byteLength;
            if (this.cacheRemain === 0 && this.stashByteStart === 0) {
                // This is the first chunk after seek action
                this.stashByteStart = byteStart;
            }
            if (this.cacheRemain + chunk.byteLength <= this.stashSize) {
                // 小于cache大小 则看做数据太小 进行缓存 不进行下发
                var stashArray = new Uint8Array(this.cacheBuffer, 0, this.stashSize);
                stashArray.set(new Uint8Array(chunk), this.cacheRemain);
                this.cacheRemain += chunk.byteLength;
            } else {
                // 大于cache大小的 则把数据放入播放器 溢出数据进行缓存
                var stashArray = new Uint8Array(this.cacheBuffer, 0, this.bufferSize);
                if (this.cacheRemain > 0) {
                    var buffer = this.cacheBuffer.slice(0, this.cacheRemain);
                    var consumed = 0;
                    if (this.seekPonit !== undefined) {
                        consumed = this.arrivalDataCallback(buffer, this.stashByteStart, this.seekPonit);
                        this.seekPonit = undefined;
                    } else {
                        consumed = this.arrivalDataCallback(buffer, this.stashByteStart);
                    }
                    if (consumed < buffer.byteLength) {
                        if (consumed > 0) {
                            var remainArray = new Uint8Array(buffer, consumed);
                            stashArray.set(remainArray, 0);
                            this.cacheRemain = remainArray.byteLength;
                            this.stashByteStart += consumed;
                        }
                    } else {
                        this.cacheRemain = 0;
                        this.stashByteStart += consumed;
                    }
                    if (this.cacheRemain + chunk.byteLength > this.bufferSize) {
                        this.expandBuffer(this.cacheRemain + chunk.byteLength);
                        stashArray = new Uint8Array(this.cacheBuffer, 0, this.bufferSize);
                    }
                    stashArray.set(new Uint8Array(chunk), this.cacheRemain);
                    this.cacheRemain += chunk.byteLength;
                } else {
                    var consumed = 0;
                    if (this.seekPonit !== undefined) {
                        consumed = this.arrivalDataCallback(chunk, byteStart, this.seekPonit);
                        this.seekPonit = undefined;
                    } else {
                        consumed = this.arrivalDataCallback(chunk, byteStart);
                    }
                    if (consumed < chunk.byteLength) {
                        var remain = chunk.byteLength - consumed;
                        if (remain > this.bufferSize) {
                            this.expandBuffer(remain);
                            stashArray = new Uint8Array(this.cacheBuffer, 0, this.bufferSize);
                        }
                        stashArray.set(new Uint8Array(chunk, consumed), 0);
                        this.cacheRemain += remain;
                        this.stashByteStart = byteStart + consumed;
                    }
                }
            }
        }
    };
    /**
    * 清空缓存buffer
    */
    Ioloader.prototype.initCacheBuffer = function () {
        this.cacheRemain = 0;
        this.totalReceive = 0;
        this.cacheBuffer = new ArrayBuffer(this.bufferSize);
    };
    /**
    * 动态扩展buffer存储器大小
    * @param  {number} chunk byte size
    */
    Ioloader.prototype.expandBuffer = function (expectedBytes) {
        var bufferNewSize = this.bufferSize;
        // while (bufferNewSize < expectedBytes) {
        //   bufferNewSize *= 2;
        // }
        if (bufferNewSize < expectedBytes) {
            bufferNewSize = expectedBytes;
        }
        this.cacheBuffer = new ArrayBuffer(bufferNewSize);
        this.bufferSize = bufferNewSize;
    };
    /**
    * 暂停
    */
    Ioloader.prototype.pause = function () {
        this.loader.pause();
    };
    /**
    * 打开连接
    */
    Ioloader.prototype.open = function (startBytes, keyframePoint) {
        this.loader.open({ from: startBytes || 0, to: -1 }, keyframePoint);
        this.heartbeat();
    };
    /**
    * 心跳
    */
    Ioloader.prototype.heartbeat = function () {
        var _this = this;
        window.clearInterval(this.heartBeatInterval);
        this.heartBeatInterval = setInterval(function () {
            _this.emit('heartbeat', {
                speed: _this.totalReceive - _this.preTotalReceive,
                totalReceive: _this.totalReceive
            });
            _this.preTotalReceive = _this.totalReceive;
        }, 1000);
    };
    /**
    * 重新播放
    */
    Ioloader.prototype.resume = function () {
        this.paused = false;
        var bytes = this.totalReceive;
        this.open(bytes);
    };
    /**
      * seek
      */
    Ioloader.prototype.seek = function (bytes, dropCache, keyframePoint) {
        this.seekLock = true;
        this.totalReceive = bytes;
        this.preTotalReceive = bytes;
        this.initCacheBuffer();
        this.cacheRemain = 0;
        this.stashByteStart = 0;
        this.open(bytes, keyframePoint);
    };
    /**
    * destory
    */
    Ioloader.prototype.destroy = function () {
        this.pause();
        this.initCacheBuffer();
        window.clearInterval(this.heartBeatInterval);
        this.heartBeatInterval = null;
    };
    return Ioloader;
}(_mangoHelper.CustEvent);
exports.default = Ioloader;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (range) {
    var headers = {};
    var param;
    if (range.to !== -1) {
        param = "bytes=" + range.from.toString() + "-" + range.to.toString();
    } else {
        param = "bytes=" + range.from.toString() + "-";
    }
    headers['Range'] = param;
    return {
        headers: headers
    };
};

; /**
  * 处理range的静态函数
  * author songguangyu
  * email 522963130@qq.com
  */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flvParse = __webpack_require__(19);

var _flvParse2 = _interopRequireDefault(_flvParse);

var _tagdemux = __webpack_require__(5);

var _tagdemux2 = _interopRequireDefault(_tagdemux);

var _mp4remux = __webpack_require__(7);

var _mp4remux2 = _interopRequireDefault(_mp4remux);

var _mp4moof = __webpack_require__(26);

var _mp4moof2 = _interopRequireDefault(_mp4moof);

var _mangoHelper = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/* eslint-disable */

var flv2fmp4 = /** @class */function () {
    /**
     * Creates an instance of flv2fmp4.
     * config 里面有_isLive属性,是否是直播
     * @param {any} config
     *
     * @memberof flv2fmp4
     */
    function flv2fmp4(config) {
        _mp4remux2.default.init();
        this._config = { _isLive: false };
        Object.assign(this._config, config);
        // 外部方法赋值
        this.onInitSegment = null;
        this.onMediaSegment = null;
        this.onMediaInfo = null;
        this.seekCallBack = null;
        // 内部使用
        this.loadmetadata = false;
        this.ftyp_moov = null; //单路
        this._tagdemux = new _tagdemux2.default();
        this._flvparse = new _flvParse2.default();
        this.ftyp_moov_v = null; //双路视频
        this.ftyp_moov_a = null; //双路音频
        this.metaSuccRun = false;
        this.metas = [];
        this.parseChunk = null;
        this.hasVideo = false;
        this.hasAudio = false;
        this._error = null;
        // 临时记录seek时间
        this._pendingResolveSeekPoint = -1;
        // 临时记录flv数据起始时间
        this._tempBaseTime = 0;
        // 处理flv数据入口
        this.setflvBase = this.setflvBasefrist;
        this._tagdemux._onTrackMetadata = this.Metadata.bind(this);
        this._tagdemux._onMediaInfo = this.metaSucc.bind(this);
        this._tagdemux._onDataAvailable = this.onDataAvailable.bind(this);
        this._tagdemux._onError = this.error.bind(this);
        this.m4mof = new _mp4moof2.default(this._config);
        this.m4mof.onMediaSegment = this.onMdiaSegment.bind(this);
    }
    flv2fmp4.prototype.seek = function (baseTime) {
        this._flvparse.dispose();
        this.setflvBase = this.setflvBasefrist;
        if (baseTime == undefined || baseTime == 0) {
            baseTime = 0;
            this._pendingResolveSeekPoint = -1;
        }
        if (this._tempBaseTime != baseTime) {
            this._tempBaseTime = baseTime;
            this._tagdemux._timestampBase = baseTime;
            this.m4mof.seek(baseTime);
            this.m4mof.insertDiscontinuity();
            this._pendingResolveSeekPoint = baseTime;
        }
    };
    /**
     * 不要主动调用这个接口!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     * 第一次接受数据,和seek时候接受数据入口,
     *
     * @param {any} arraybuff
     * @param {any} baseTime
     * @returns
     *
     * @memberof flv2fmp4
     */
    flv2fmp4.prototype.setflvBasefrist = function (arraybuff, baseTime) {
        var offset = 0;
        try {
            offset = this._flvparse.setFlv(new Uint8Array(arraybuff));
        } catch (error) {
            this.error(error);
        }
        if (this._flvparse.arrTag.length == 0) return offset;
        // if(this._flvparse.arrTag[0].tagType!=18){
        //     if(this.error)this.error(new Error('without metadata tag'));
        // }
        if (this._flvparse.arrTag.length > 0) {
            this._tagdemux.hasAudio = this.hasAudio = this._flvparse._hasAudio;
            this._tagdemux.hasVideo = this.hasVideo = this._flvparse._hasVideo;
            if (this._tempBaseTime != 0 && this._tempBaseTime == this._flvparse.arrTag[0].getTime()) {
                this._tagdemux._timestampBase = 0;
            }
            try {
                this._tagdemux.moofTag(this._flvparse.arrTag);
            } catch (error) {
                this.error(error);
            }
            this.setflvBase = this.setflvBaseUsually;
        }
        return offset;
    };
    /**
     * 不要主动调用这个接口!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     * 后续接受数据接口
     * @param {any} arraybuff
     * @param {any} baseTime
     * @returns
     *
     * @memberof flv2fmp4
     */
    flv2fmp4.prototype.setflvBaseUsually = function (arraybuff, baseTime) {
        var offset = 0;
        try {
            offset = this._flvparse.setFlv(new Uint8Array(arraybuff));
        } catch (error) {
            this.error(error);
        }
        if (this._flvparse.arrTag.length > 0) {
            try {
                this._tagdemux.moofTag(this._flvparse.arrTag);
            } catch (error) {
                this.error(error);
            }
        }
        return offset;
    };
    /**
     * 不要主动调用这个接口!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     * moof回调
     *
     * @param {any} track
     * @param {any} value
     *
     * @memberof flv2fmp4
     */
    flv2fmp4.prototype.onMdiaSegment = function (track, value) {
        if (this.onMediaSegment) {
            this.onMediaSegment(track, new Uint8Array(value.data));
        }
        if (this._pendingResolveSeekPoint != -1 && track == 'video') {
            var seekpoint = this._pendingResolveSeekPoint;
            this._pendingResolveSeekPoint = -1;
            if (this.seekCallBack) {
                this.seekCallBack(seekpoint);
            }
        }
    };
    /**
     *
     * 音频和视频的初始化tag
     *
     * @param {any} type
     * @param {any} meta
     *
     * @memberof flv2fmp4
     */
    flv2fmp4.prototype.Metadata = function (type, meta) {
        switch (type) {
            case 'video':
                this.metas.push(['video', meta]);
                this.m4mof._videoMeta = meta;
                if (this.hasVideo && !this.hasAudio) {
                    this.metaSucc();
                    return;
                }
                break;
            case 'audio':
                this.metas.push(['audio', meta]);
                this.m4mof._audioMeta = meta;
                if (!this.hasVideo && this.hasAudio) {
                    this.metaSucc();
                    return;
                }
                break;
        }
        if (this.hasVideo && this.hasAudio && this.m4mof._videoMeta && this.m4mof._audioMeta) {
            this.metaSucc();
        }
    };
    /**
     * metadata解读成功后触发及第一个视频tag和第一个音频tag
     *
     * @param {any} mi
     * @returns
     *
     * @memberof flv2fmp4
     */
    flv2fmp4.prototype.metaSucc = function (mi) {
        var _this = this;
        if (this.onMediaInfo && mi) {
            this.onMediaInfo(mi || this._tagdemux._mediaInfo, { hasAudio: this.hasAudio, hasVideo: this.hasVideo });
        }
        // 获取ftyp和moov
        if (this.metas.length == 0) {
            this.metaSuccRun = true;
            return;
        }
        if (mi) return;
        if (this.metas.length > 1) {
            // this.ftyp_moov_v=
            this.metas.map(function (item) {
                if (item[0] == 'video') {
                    _this.ftyp_moov_v = _mp4remux2.default.generateInitSegment([item[1]]);
                } else {
                    _this.ftyp_moov_a = _mp4remux2.default.generateInitSegment([item[1]]);
                }
            });
        } else {
            this.ftyp_moov = _mp4remux2.default.generateInitSegment([this.metas[0][1]]);
        }
        if (this.onInitSegment && this.loadmetadata == false) {
            if (this.ftyp_moov) {
                this.onInitSegment(this.ftyp_moov);
            } else {
                this.onInitSegment(this.ftyp_moov_v, this.ftyp_moov_a);
            }
            this.loadmetadata = true;
        }
    };
    flv2fmp4.prototype.onDataAvailable = function (audiotrack, videotrack) {
        // this.m4mof.remux(audiotrack, videotrack);
        try {
            this.m4mof.remux(audiotrack, videotrack);
        } catch (e) {
            this.error(e);
        }
    };
    /**
     * 传入flv的二进制数据
     * 统一入口
     * @param {any} arraybuff
     * @param {any} baseTime flv数据开始时间
     * @returns
     *
     * @memberof flv2fmp4
     */
    flv2fmp4.prototype.setflv = function (arraybuff, baseTime) {
        return this.setflvBase(arraybuff, baseTime);
    };
    /**
     *
     * 本地调试代码,不用理会
     * @param {any} arraybuff
     * @returns
     *
     * @memberof flv2fmp4
     */
    flv2fmp4.prototype.setflvloc = function (arraybuff) {
        var offset = _flvParse2.default.setFlv(new Uint8Array(arraybuff));
        if (_flvParse2.default.arrTag.length > 0) {
            return _flvParse2.default.arrTag;
        }
    };
    /**
     *
     *  异常抛出处理
     * @param {any} e
     * @memberof flv2fmp4
     */
    flv2fmp4.prototype.error = function (e) {
        if (this._error) {
            this._error(e);
        }
    };
    return flv2fmp4;
}();
/**
 * 封装的对外类,有些方法不想对外暴露,所以封装这么一个类
 *
 * @class foreign
 */
var foreign = /** @class */function (_super) {
    __extends(foreign, _super);
    function foreign(config) {
        var _this = _super.call(this) || this;
        _this.f2m = new flv2fmp4(config);
        _this.f2m._error = _this.error.bind(_this);
        // 外部方法赋值
        _this._onInitSegment = null;
        _this._onMediaSegment = null;
        _this._onMediaInfo = null;
        _this._seekCallBack = null;
        return _this;
    }
    foreign.prototype.error = function (e) {
        this.emit('error', e.type);
    };
    /**
     *
     * 跳转
     * @param {any} basetime  跳转时间
     *
     * @memberof foreign
     */
    foreign.prototype.seek = function (basetime) {
        this.f2m.seek(basetime);
    };
    /**
     * 传入flv的二进制数据
     * 统一入口
     * @param {any} arraybuff
     * @returns
     *
     * @memberof flv2fmp4
     */
    foreign.prototype.setflv = function (arraybuff) {
        return this.f2m.setflv(arraybuff, 0);
    };
    /**
     *
     * 本地调试代码,不用理会
     * @param {any} arraybuff
     * @returns
     *
     * @memberof flv2fmp4
     */
    foreign.prototype.setflvloc = function (arraybuff) {
        return this.f2m.setflvloc(arraybuff);
    };
    Object.defineProperty(foreign.prototype, "onInitSegment", {
        /**
         * 赋值初始化seg接受方法
         *
         *
         * @memberof foreign
         */
        set: function set(fun) {
            this._onInitSegment = fun;
            this.f2m.onInitSegment = fun;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foreign.prototype, "onMediaSegment", {
        /**
         * 赋值moof接受方法
         *
         *
         * @memberof foreign
         */
        set: function set(fun) {
            this._onMediaSegment = fun;
            this.f2m.onMediaSegment = fun;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foreign.prototype, "onMediaInfo", {
        /**
         * 赋值metadata接受方法
         *
         *
         * @memberof foreign
         */
        set: function set(fun) {
            this._onMediaInfo = fun;
            this.f2m.onMediaInfo = fun;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foreign.prototype, "seekCallBack", {
        /**
         * 赋值是否跳转回调接受方法
         *
         *
         * @memberof foreign
         */
        set: function set(fun) {
            this._seekCallBack = fun;
            this.f2m.seekCallBack = fun;
        },
        enumerable: true,
        configurable: true
    });
    return foreign;
}(_mangoHelper.CustEvent);
exports.default = foreign;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable */


var _flvdemux = __webpack_require__(21);

var _flvdemux2 = _interopRequireDefault(_flvdemux);

var _mediaInfo = __webpack_require__(23);

var _mediaInfo2 = _interopRequireDefault(_mediaInfo);

var _spsParser = __webpack_require__(24);

var _spsParser2 = _interopRequireDefault(_spsParser);

var _error = __webpack_require__(6);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tagDemux = /** @class */function () {
    function tagDemux() {
        this.TAG = this.constructor.name;
        this._config = {};
        this._onError = null;
        this._onMediaInfo = null;
        this._onTrackMetadata = null;
        this._onDataAvailable = null;
        this._dataOffset = 0;
        this._firstParse = true;
        this._dispatch = false;
        this._hasAudio = false;
        this._hasVideo = false;
        this._audioInitialMetadataDispatched = false;
        this._videoInitialMetadataDispatched = false;
        this._mediaInfo = new _mediaInfo2.default();
        this._mediaInfo.hasAudio = this._hasAudio;
        this._mediaInfo.hasVideo = this._hasVideo;
        this._metadata = null;
        this._audioMetadata = null;
        this._videoMetadata = null;
        this._naluLengthSize = 4;
        this._timestampBase = 0; // int32, in milliseconds
        this._timescale = 1000;
        this._duration = 0; // int32, in milliseconds
        this._durationOverrided = false;
        this._referenceFrameRate = {
            fixed: true,
            fps: 23.976,
            fps_num: 23976,
            fps_den: 1000
        };
        this._videoTrack = { type: 'video', id: 1, sequenceNumber: 0, addcoefficient: 2, samples: [], length: 0 };
        this._audioTrack = { type: 'audio', id: 2, sequenceNumber: 0, addcoefficient: 2, samples: [], length: 0 };
        this._littleEndian = function () {
            var buf = new ArrayBuffer(2);
            new DataView(buf).setInt16(0, 256, true); // little-endian write
            return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
        }();
    }
    Object.defineProperty(tagDemux.prototype, "hasAudio", {
        set: function set(s) {
            this._mediaInfo.hasAudio = this._hasAudio = s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(tagDemux.prototype, "hasVideo", {
        set: function set(s) {
            this._mediaInfo.hasVideo = this._hasVideo = s;
        },
        enumerable: true,
        configurable: true
    });
    tagDemux.prototype.onMediaInfo = function (callback) {
        this._onMediaInfo = callback;
    };
    tagDemux.prototype.parseMetadata = function (arr) {
        var data = _flvdemux2.default.parseMetadata(arr);
        this._parseScriptData(data);
        // console.log(this._mediaInfo, this._mediaInfo.isComplete());
    };
    tagDemux.prototype._parseScriptData = function (obj) {
        var scriptData = obj;
        if (scriptData.hasOwnProperty('onMetaData')) {
            if (this._metadata) {
                // console.log(this.TAG, 'Found another onMetaData tag!');
            }
            this._metadata = scriptData;
            var onMetaData = this._metadata.onMetaData;
            if (typeof onMetaData.hasAudio === 'boolean') {
                // hasAudio
                this._hasAudio = onMetaData.hasAudio;
                this._mediaInfo.hasAudio = this._hasAudio;
            }
            if (typeof onMetaData.hasVideo === 'boolean') {
                // hasVideo
                this._hasVideo = onMetaData.hasVideo;
                this._mediaInfo.hasVideo = this._hasVideo;
            }
            if (typeof onMetaData.audiodatarate === 'number') {
                // audiodatarate
                this._mediaInfo.audioDataRate = onMetaData.audiodatarate;
            }
            if (typeof onMetaData.videodatarate === 'number') {
                // videodatarate
                this._mediaInfo.videoDataRate = onMetaData.videodatarate;
            }
            if (typeof onMetaData.width === 'number') {
                // width
                this._mediaInfo.width = onMetaData.width;
            }
            if (typeof onMetaData.height === 'number') {
                // height
                this._mediaInfo.height = onMetaData.height;
            }
            if (typeof onMetaData.duration === 'number') {
                // duration
                if (!this._durationOverrided) {
                    var duration = Math.floor(onMetaData.duration * this._timescale);
                    this._duration = duration;
                    this._mediaInfo.duration = duration;
                }
            } else {
                this._mediaInfo.duration = 0;
            }
            if (typeof onMetaData.framerate === 'number') {
                // framerate
                var fps_num = Math.floor(onMetaData.framerate * 1000);
                if (fps_num > 0) {
                    var fps = fps_num / 1000;
                    this._referenceFrameRate.fixed = true;
                    this._referenceFrameRate.fps = fps;
                    this._referenceFrameRate.fps_num = fps_num;
                    this._referenceFrameRate.fps_den = 1000;
                    this._mediaInfo.fps = fps;
                }
            }
            if (_typeof(onMetaData.keyframes) === 'object') {
                // keyframes
                this._mediaInfo.hasKeyframesIndex = true;
                var keyframes = onMetaData.keyframes;
                keyframes.times = onMetaData.times;
                keyframes.filepositions = onMetaData.filepositions;
                this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(keyframes);
                onMetaData.keyframes = null; // keyframes has been extracted, remove it
            } else {
                this._mediaInfo.hasKeyframesIndex = false;
            }
            this._dispatch = false;
            this._mediaInfo.metadata = onMetaData;
            console.log(this.TAG, 'Parsed onMetaData');
            // if (this._mediaInfo.isComplete()) {
            // this._onMediaInfo(this._mediaInfo);
            // }
            return this._mediaInfo;
        }
    };
    tagDemux.prototype._parseKeyframesIndex = function (keyframes) {
        var times = [];
        var filepositions = [];
        // ignore first keyframe which is actually AVC Sequence Header (AVCDecoderConfigurationRecord)
        for (var i = 1; i < keyframes.times.length; i++) {
            var time = this._timestampBase + Math.floor(keyframes.times[i] * 1000);
            times.push(time);
            filepositions.push(keyframes.filepositions[i]);
        }
        return {
            times: times,
            filepositions: filepositions
        };
    };
    /**
     * 传入tags输出moof和mdat
     *
     * @param {any} tags
     *
     * @memberof tagDemux
     */
    tagDemux.prototype.moofTag = function (tags) {
        for (var i = 0; i < tags.length; i++) {
            this._dispatch = true;
            this.parseChunks(tags[i]);
            // console.log("tagTimestamp", tags[i].getTime(), tags[i]);
        }
        if (this._isInitialMetadataDispatched()) {
            if (this._dispatch && (this._audioTrack.length || this._videoTrack.length)) {
                this._onDataAvailable(this._audioTrack, this._videoTrack);
            }
        }
    };
    tagDemux.prototype.parseChunks = function (flvtag) {
        switch (flvtag.tagType) {
            case 8:
                // Audio
                this._parseAudioData(flvtag.body.buffer, 0, flvtag.body.length, flvtag.getTime());
                break;
            case 9:
                // Video
                this._parseVideoData(flvtag.body.buffer, 0, flvtag.body.length, flvtag.getTime(), 0);
                break;
            case 18:
                // ScriptDataObject
                this.parseMetadata(flvtag.body);
                break;
        }
    };
    tagDemux.prototype._parseVideoData = function (arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition) {
        if (tagTimestamp == this._timestampBase && this._timestampBase != 0) {
            throw new _error2.default(tagTimestamp, this._timestampBase, '夭寿啦这个视频不是从0开始');
            // this.timestampBase(0);
        }
        if (dataSize <= 1) {
            console.log(this.TAG, 'Flv: Invalid video packet, missing VideoData payload!');
            return;
        }
        // 获取 video tag body 第一字节
        var spec = new Uint8Array(arrayBuffer, dataOffset, dataSize)[0];
        // 获取是否是关键帧
        var frameType = (spec & 240) >>> 4;
        // 获取编码格式
        var codecId = spec & 15;
        if (codecId !== 7) {
            if (this._onError) this._onError("Flv: Unsupported codec in video frame: " + codecId);
            return;
        }
        this._parseAVCVideoPacket(arrayBuffer, dataOffset + 1, dataSize - 1, tagTimestamp, tagPosition, frameType);
    };
    tagDemux.prototype._parseAVCVideoPacket = function (arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition, frameType) {
        if (dataSize < 4) {
            console.log(this.TAG, 'Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime');
            return;
        }
        var le = this._littleEndian;
        // 获取 video tag body 第2字节到结尾
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        // IF CodecID == 7  AVCPacketType
        // 0 = AVC sequence header
        // 1 = AVC NALU
        // 2 = AVC end of sequence (lower level NALU sequence ender is not required or supported)
        var packetType = v.getUint8(0);
        // 3字节
        // IF AVCPacketType == 1
        //  Composition time offset
        // ELSE
        //  0
        var cts = v.getUint32(0, !le) & 0x00FFFFFF;
        // IF AVCPacketType == 0 AVCDecoderConfigurationRecord（AVC sequence header）
        // IF AVCPacketType == 1 One or more NALUs (Full frames are required)
        /**
         *AVCDecoderConfigurationRecord.包含着是H.264解码相关比较重要的sps和pps信息，
         *再给AVC解码器送数据 流之前一定要把sps和pps信息送出，否则的话解码器不能正常解码。
         *而且在解码器stop之后再次start之前，如seek、快进快退状态切换等，
         *都 需要重新送一遍sps和pps的信息.AVCDecoderConfigurationRecord在FLV文件中一般情况也是出现1次，
         *也就是第一个 video tag.
         */
        if (packetType === 0) {
            // AVCDecoderConfigurationRecord
            this._parseAVCDecoderConfigurationRecord(arrayBuffer, dataOffset + 4, dataSize - 4);
        } else if (packetType === 1) {
            // One or more Nalus
            this._parseAVCVideoData(arrayBuffer, dataOffset + 4, dataSize - 4, tagTimestamp, tagPosition, frameType, cts);
        } else if (packetType === 2) {
            // empty, AVC end of sequence
        } else {
            this._onError("Flv: Invalid video packet type " + packetType);
            return;
        }
    };
    /**
     * AVC 初始化
     */
    tagDemux.prototype._parseAVCDecoderConfigurationRecord = function (arrayBuffer, dataOffset, dataSize) {
        if (dataSize < 7) {
            console.log(this.TAG, 'Flv: Invalid AVCDecoderConfigurationRecord, lack of data!');
            return;
        }
        var meta = this._videoMetadata;
        var track = this._videoTrack;
        var le = this._littleEndian;
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        if (!meta) {
            meta = this._videoMetadata = {};
            meta.type = 'video';
            meta.id = track.id;
            meta.timescale = this._timescale;
            meta.duration = this._duration;
        } else {
            if (typeof meta.avcc !== 'undefined') {
                console.log(this.TAG, 'Found another AVCDecoderConfigurationRecord!');
            }
        }
        var version = v.getUint8(0); // configurationVersion
        var avcProfile = v.getUint8(1); // avcProfileIndication
        var profileCompatibility = v.getUint8(2); // profile_compatibility
        var avcLevel = v.getUint8(3); // AVCLevelIndication
        if (version !== 1 || avcProfile === 0) {
            this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord');
            return;
        }
        this._naluLengthSize = (v.getUint8(4) & 3) + 1; // lengthSizeMinusOne
        if (this._naluLengthSize !== 3 && this._naluLengthSize !== 4) {
            // holy shit!!!
            this._onError(DemuxErrors.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
            return;
        }
        var spsCount = v.getUint8(5) & 31; // numOfSequenceParameterSets
        if (spsCount === 0 || spsCount > 1) {
            this._onError(DemuxErrors.FORMAT_ERROR, "Flv: Invalid H264 SPS count: " + spsCount);
            return;
        }
        var offset = 6;
        for (var i = 0; i < spsCount; i++) {
            var len = v.getUint16(offset, !le); // sequenceParameterSetLength
            offset += 2;
            if (len === 0) {
                continue;
            }
            // Notice: Nalu without startcode header (00 00 00 01)
            var sps = new Uint8Array(arrayBuffer, dataOffset + offset, len);
            offset += len;
            var config = _spsParser2.default.parseSPS(sps);
            meta.codecWidth = config.codec_size.width;
            meta.codecHeight = config.codec_size.height;
            meta.presentWidth = config.present_size.width;
            meta.presentHeight = config.present_size.height;
            meta.config = config;
            meta.profile = config.profile_string;
            meta.level = config.level_string;
            meta.bitDepth = config.bit_depth;
            meta.chromaFormat = config.chroma_format;
            meta.sarRatio = config.sar_ratio;
            meta.frameRate = config.frame_rate;
            if (config.frame_rate.fixed === false || config.frame_rate.fps_num === 0 || config.frame_rate.fps_den === 0) {
                meta.frameRate = this._referenceFrameRate;
            }
            var fps_den = meta.frameRate.fps_den;
            var fps_num = meta.frameRate.fps_num;
            meta.refSampleDuration = Math.floor(meta.timescale * (fps_den / fps_num));
            var codecArray = sps.subarray(1, 4);
            var codecString = 'avc1.';
            for (var j = 0; j < 3; j++) {
                var h = codecArray[j].toString(16);
                if (h.length < 2) {
                    h = '0' + h;
                }
                codecString += h;
            }
            meta.codec = codecString;
            var mi = this._mediaInfo;
            mi.width = meta.codecWidth;
            mi.height = meta.codecHeight;
            mi.fps = meta.frameRate.fps;
            mi.profile = meta.profile;
            mi.level = meta.level;
            mi.chromaFormat = config.chroma_format_string;
            mi.sarNum = meta.sarRatio.width;
            mi.sarDen = meta.sarRatio.height;
            mi.videoCodec = codecString;
            mi.meta = meta;
            if (mi.hasAudio) {
                if (mi.audioCodec != null) {
                    mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + ',' + mi.audioCodec + '"';
                }
            } else {
                mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + '"';
            }
            if (mi.isComplete()) {
                this._onMediaInfo(mi);
            }
        }
        var ppsCount = v.getUint8(offset); // numOfPictureParameterSets
        if (ppsCount === 0 || ppsCount > 1) {
            this._onError(DemuxErrors.FORMAT_ERROR, "Flv: Invalid H264 PPS count: " + ppsCount);
            return;
        }
        offset++;
        for (var i = 0; i < ppsCount; i++) {
            var len = v.getUint16(offset, !le); // pictureParameterSetLength
            offset += 2;
            if (len === 0) {
                continue;
            }
            // pps is useless for extracting video information
            offset += len;
        }
        meta.avcc = new Uint8Array(dataSize);
        meta.avcc.set(new Uint8Array(arrayBuffer, dataOffset, dataSize), 0);
        console.log(this.TAG, 'Parsed AVCDecoderConfigurationRecord');
        if (this._isInitialMetadataDispatched()) {
            // flush parsed frames
            if (this._dispatch && (this._audioTrack.length || this._videoTrack.length)) {
                this._onDataAvailable(this._audioTrack, this._videoTrack);
            }
        } else {
            this._videoInitialMetadataDispatched = true;
        }
        // notify new metadata
        this._dispatch = false;
        // if (this._onTrackMetadata) {
        //     this._onTrackMetadata.call(null, meta);
        // }
        this._onTrackMetadata('video', meta);
    };
    tagDemux.prototype.timestampBase = function (i) {
        this._timestampBase = i;
    };
    /**
     * 普通的AVC 片段
     */
    tagDemux.prototype._parseAVCVideoData = function (arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition, frameType, cts) {
        var le = this._littleEndian;
        var v = new DataView(arrayBuffer, dataOffset, dataSize);
        var units = [],
            length = 0;
        var offset = 0;
        var lengthSize = this._naluLengthSize;
        var dts = this._timestampBase + tagTimestamp;
        var keyframe = frameType === 1; // from FLV Frame Type constants
        while (offset < dataSize) {
            if (offset + 4 >= dataSize) {
                console.log(this.TAG, "Malformed Nalu near timestamp " + dts + ", offset = " + offset + ", dataSize = " + dataSize);
                break; // data not enough for next Nalu
            }
            // Nalu with length-header (AVC1)
            var naluSize = v.getUint32(offset, !le); // Big-Endian read
            if (lengthSize === 3) {
                naluSize >>>= 8;
            }
            if (naluSize > dataSize - lengthSize) {
                console.log(this.TAG, "Malformed Nalus near timestamp " + dts + ", NaluSize > DataSize!");
                return;
            }
            var unitType = v.getUint8(offset + lengthSize) & 0x1F;
            if (unitType === 5) {
                // IDR
                keyframe = true;
            }
            var data = new Uint8Array(arrayBuffer, dataOffset + offset, lengthSize + naluSize);
            var unit = { type: unitType, data: data };
            units.push(unit);
            length += data.byteLength;
            offset += lengthSize + naluSize;
        }
        if (units.length) {
            var track = this._videoTrack;
            var avcSample = {
                units: units,
                length: length,
                isKeyframe: keyframe,
                dts: dts,
                cts: cts,
                pts: dts + cts
            };
            if (keyframe) {
                avcSample.fileposition = tagPosition;
            }
            track.samples.push(avcSample);
            track.length += length;
        }
    };
    tagDemux.prototype._parseAudioData = function (arrayBuffer, dataOffset, dataSize, tagTimestamp) {
        if (tagTimestamp == this._timestampBase && this._timestampBase != 0) {
            console.log(tagTimestamp, this._timestampBase, '夭寿啦这个视频不是从0开始');
            // timestampBase(0);
        }
        if (dataSize <= 1) {
            console.log(this.TAG, 'Flv: Invalid audio packet, missing SoundData payload!');
            return;
        }
        var meta = this._audioMetadata;
        var track = this._audioTrack;
        if (!meta || !meta.codec) {
            // initial metadata
            meta = this._audioMetadata = {};
            meta.type = 'audio';
            meta.id = track.id;
            meta.timescale = this._timescale;
            meta.duration = this._duration;
            var le = this._littleEndian;
            var v = new DataView(arrayBuffer, dataOffset, dataSize);
            var soundSpec = v.getUint8(0);
            var soundFormat = soundSpec >>> 4;
            if (soundFormat !== 10) {
                // AAC
                // TODO: support MP3 audio codec
                this._onError(DemuxErrors.CODEC_UNSUPPORTED, 'Flv: Unsupported audio codec idx: ' + soundFormat);
                return;
            }
            var soundRate = 0;
            var soundRateIndex = (soundSpec & 12) >>> 2;
            var soundRateTable = [5500, 11025, 22050, 44100, 48000];
            if (soundRateIndex < soundRateTable.length) {
                soundRate = soundRateTable[soundRateIndex];
            } else {
                this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: Invalid audio sample rate idx: ' + soundRateIndex);
                return;
            }
            var soundSize = (soundSpec & 2) >>> 1; // unused
            var soundType = soundSpec & 1;
            meta.audioSampleRate = soundRate;
            meta.channelCount = soundType === 0 ? 1 : 2;
            meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);
            meta.codec = 'mp4a.40.5';
        }
        var aacData = this._parseAACAudioData(arrayBuffer, dataOffset + 1, dataSize - 1);
        if (aacData == undefined) {
            return;
        }
        if (aacData.packetType === 0) {
            // AAC sequence header (AudioSpecificConfig)
            if (meta.config) {
                console.log(this.TAG, 'Found another AudioSpecificConfig!');
            }
            var misc = aacData.data;
            meta.audioSampleRate = misc.samplingRate;
            meta.channelCount = misc.channelCount;
            meta.codec = misc.codec;
            meta.config = misc.config;
            // The decode result of an aac sample is 1024 PCM samples
            meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);
            console.log(this.TAG, 'Parsed AudioSpecificConfig');
            if (this._isInitialMetadataDispatched()) {
                // Non-initial metadata, force dispatch (or flush) parsed frames to remuxer
                if (this._dispatch && (this._audioTrack.length || this._videoTrack.length)) {
                    this._onDataAvailable(this._audioTrack, this._videoTrack);
                }
            } else {
                this._audioInitialMetadataDispatched = true;
            }
            // then notify new metadata
            this._dispatch = false;
            var mi = this._mediaInfo;
            mi.audioCodec = 'mp4a.40.' + misc.originalAudioObjectType;
            mi.audioSampleRate = meta.audioSampleRate;
            mi.audioChannelCount = meta.channelCount;
            if (mi.hasVideo) {
                if (mi.videoCodec != null) {
                    mi.mimeType = 'video/x-flv; codecs="' + mi.videoCodec + ',' + mi.audioCodec + '"';
                }
            } else {
                mi.mimeType = 'video/x-flv; codecs="' + mi.audioCodec + '"';
            }
            this._onTrackMetadata('audio', meta);
            if (mi.isComplete()) {
                this._onMediaInfo(mi);
            }
            return;
        } else if (aacData.packetType === 1) {
            // AAC raw frame data
            var dts = this._timestampBase + tagTimestamp;
            var aacSample = { unit: aacData.data, dts: dts, pts: dts };
            track.samples.push(aacSample);
            track.length += aacData.data.length;
        } else {
            console.log(this.TAG, "Flv: Unsupported AAC data type " + aacData.packetType);
        }
    };
    tagDemux.prototype._parseAACAudioData = function (arrayBuffer, dataOffset, dataSize) {
        if (dataSize <= 1) {
            console.log(this.TAG, 'Flv: Invalid AAC packet, missing AACPacketType or/and Data!');
            return;
        }
        var result = {};
        var array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
        result.packetType = array[0];
        if (array[0] === 0) {
            result.data = this._parseAACAudioSpecificConfig(arrayBuffer, dataOffset + 1, dataSize - 1);
        } else {
            result.data = array.subarray(1);
        }
        return result;
    };
    tagDemux.prototype._parseAACAudioSpecificConfig = function (arrayBuffer, dataOffset, dataSize) {
        var array = new Uint8Array(arrayBuffer, dataOffset, dataSize);
        var config = null;
        var mpegSamplingRates = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
        /* Audio Object Type:
           0: Null
           1: AAC Main
           2: AAC LC
           3: AAC SSR (Scalable Sample Rate)
           4: AAC LTP (Long Term Prediction)
           5: HE-AAC / SBR (Spectral Band Replication)
           6: AAC Scalable
        */
        var audioObjectType = 0;
        var originalAudioObjectType = 0;
        var audioExtensionObjectType = null;
        var samplingIndex = 0;
        var extensionSamplingIndex = null;
        // debugger;
        // 5 bits
        audioObjectType = originalAudioObjectType = array[0] >>> 3;
        // 4 bits
        samplingIndex = (array[0] & 0x07) << 1 | array[1] >>> 7;
        if (samplingIndex < 0 || samplingIndex >= mpegSamplingRates.length) {
            this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: AAC invalid sampling frequency index!');
            return;
        }
        var samplingFrequence = mpegSamplingRates[samplingIndex];
        // 4 bits
        var channelConfig = (array[1] & 0x78) >>> 3;
        if (channelConfig < 0 || channelConfig >= 8) {
            this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: AAC invalid channel configuration');
            return;
        }
        if (audioObjectType === 5) {
            // HE-AAC?
            // 4 bits
            extensionSamplingIndex = (array[1] & 0x07) << 1 | array[2] >>> 7;
            // 5 bits
            audioExtensionObjectType = (array[2] & 0x7C) >>> 2;
        }
        // workarounds for various browsers
        var userAgent = self.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('firefox') !== -1) {
            // firefox: use SBR (HE-AAC) if freq less than 24kHz
            if (samplingIndex >= 6) {
                audioObjectType = 5;
                config = new Array(4);
                extensionSamplingIndex = samplingIndex - 3;
            } else {
                // use LC-AAC
                audioObjectType = 2;
                config = new Array(2);
                extensionSamplingIndex = samplingIndex;
            }
        } else if (userAgent.indexOf('android') !== -1) {
            // android: always use LC-AAC
            audioObjectType = 2;
            config = new Array(2);
            extensionSamplingIndex = samplingIndex;
        } else {
            // for other browsers, e.g. chrome...
            // Always use HE-AAC to make it easier to switch aac codec profile
            audioObjectType = 5;
            extensionSamplingIndex = samplingIndex;
            config = new Array(4);
            if (samplingIndex >= 6) {
                extensionSamplingIndex = samplingIndex - 3;
            } else if (channelConfig === 1) {
                // Mono channel
                audioObjectType = 2;
                config = new Array(2);
                extensionSamplingIndex = samplingIndex;
            }
        }
        config[0] = audioObjectType << 3;
        config[0] |= (samplingIndex & 0x0F) >>> 1;
        config[1] = (samplingIndex & 0x0F) << 7;
        config[1] |= (channelConfig & 0x0F) << 3;
        if (audioObjectType === 5) {
            config[1] |= (extensionSamplingIndex & 0x0F) >>> 1;
            config[2] = (extensionSamplingIndex & 0x01) << 7;
            // extended audio object type: force to 2 (LC-AAC)
            config[2] |= 2 << 2;
            config[3] = 0;
        }
        return {
            config: config,
            samplingRate: samplingFrequence,
            channelCount: channelConfig,
            codec: 'mp4a.40.' + audioObjectType,
            originalAudioObjectType: originalAudioObjectType
        };
    };
    tagDemux.prototype._isInitialMetadataDispatched = function () {
        if (this._hasAudio && this._hasVideo) {
            // both audio & video
            return this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched;
        }
        if (this._hasAudio && !this._hasVideo) {
            // audio only
            return this._audioInitialMetadataDispatched;
        }
        if (!this._hasAudio && this._hasVideo) {
            // video only
            return this._videoInitialMetadataDispatched;
        }
    };
    return tagDemux;
}();
exports.default = tagDemux;
// export default new tagDemux();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Error = /** @class */function () {
    function Error(type) {
        this.type = type;
    }
    return Error;
}();
exports.default = Error;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 代码借鉴了flv.js
 * 增加了自己的注释和写法
 */
/* eslint-disable */
var MP4 = /** @class */function () {
    function MP4() {}
    MP4.init = function () {
        MP4.types = {
            avc1: [],
            avcC: [],
            btrt: [],
            dinf: [],
            dref: [],
            esds: [],
            ftyp: [],
            hdlr: [],
            mdat: [],
            mdhd: [],
            mdia: [],
            mfhd: [],
            minf: [],
            moof: [],
            moov: [],
            mp4a: [],
            mvex: [],
            mvhd: [],
            sdtp: [],
            stbl: [],
            stco: [],
            stsc: [],
            stsd: [],
            stsz: [],
            stts: [],
            tfdt: [],
            tfhd: [],
            traf: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: [],
            smhd: []
        };
        for (var name_1 in MP4.types) {
            if (MP4.types.hasOwnProperty(name_1)) {
                MP4.types[name_1] = [name_1.charCodeAt(0), name_1.charCodeAt(1), name_1.charCodeAt(2), name_1.charCodeAt(3)];
            }
        }
        var constants = MP4.constants = {};
        constants.FTYP = new Uint8Array([0x69, 0x73, 0x6F, 0x6D, 0x0, 0x0, 0x0, 0x1, 0x69, 0x73, 0x6F, 0x6D, 0x61, 0x76, 0x63, 0x31 // avc1
        ]);
        constants.STSD_PREFIX = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01 // entry_count	根据entry的个数，每个entry会有type信息，如“vide”、“sund”等，根据type不同sample description会提供不同的信息，例如对于video track，会有“VisualSampleEntry”类型信息，对于audio track会有“AudioSampleEntry”类型信息。
        ]);
        constants.STTS = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // entry_count     0个索引
        ]);
        constants.STSC = constants.STCO = constants.STTS;
        constants.STSZ = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // sample_count
        ]);
        constants.HDLR_VIDEO = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x76, 0x69, 0x64, 0x65, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x69, 0x64, 0x65, 0x6F, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x72, 0x00 // name: VideoHandler 长度不定		track type name，以‘\0’结尾的字符串
        ]);
        constants.HDLR_AUDIO = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x73, 0x6F, 0x75, 0x6E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x53, 0x6F, 0x75, 0x6E, 0x64, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x72, 0x00 // name: SoundHandler 长度不定		track type name，以‘\0’结尾的字符串
        ]);
        constants.DREF = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
        // url	box开始
        0x00, 0x00, 0x00, 0x0C, 0x75, 0x72, 0x6C, 0x20, 0x00, 0x00, 0x00, 0x01 // version(0) + flags 当“url”或“urn”的box flag为1时，字符串均为空。
        ]);
        // Sound media header
        constants.SMHD = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // balance(2) + reserved(2) 立体声平衡，[8.8] 格式值，一般为0，-1.0表示全部左声道，1.0表示全部右声道+2位保留位
        ]);
        // video media header
        constants.VMHD = new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
    };
    /**
     * 封装box
     */
    MP4.box = function (type) {
        var size = 8;
        var result = null;
        var datas = Array.prototype.slice.call(arguments, 1);
        var arrayCount = datas.length;
        for (var i = 0; i < arrayCount; i++) {
            size += datas[i].byteLength;
        }
        // box头部大小
        result = new Uint8Array(size);
        result[0] = size >>> 24 & 0xFF; // size
        result[1] = size >>> 16 & 0xFF;
        result[2] = size >>> 8 & 0xFF;
        result[3] = size & 0xFF;
        // 写入box的type
        result.set(type, 4); // type
        var offset = 8;
        for (var i = 0; i < arrayCount; i++) {
            // data body
            result.set(datas[i], offset);
            offset += datas[i].byteLength;
        }
        return result;
    };
    // 创建ftyp&moov
    MP4.generateInitSegment = function (meta) {
        if (meta.constructor != Array) {
            meta = [meta];
        }
        var ftyp = MP4.box(MP4.types.ftyp, MP4.constants.FTYP);
        var moov = MP4.moov(meta);
        var result = new Uint8Array(ftyp.byteLength + moov.byteLength);
        result.set(ftyp, 0);
        result.set(moov, ftyp.byteLength);
        return result;
    };
    // Movie metadata box
    MP4.moov = function (meta) {
        var mvhd = MP4.mvhd(meta[0].timescale, meta[0].duration); // /moov里面的第一个box
        var vtrak = MP4.trak(meta[0]);
        var atrak;
        if (meta.length > 1) {
            atrak = MP4.trak(meta[1]);
        }
        var mvex = MP4.mvex(meta);
        if (meta.length > 1) {
            return MP4.box(MP4.types.moov, mvhd, vtrak, atrak, mvex);
        } else {
            return MP4.box(MP4.types.moov, mvhd, vtrak, mvex);
        }
    };
    // Movie header box
    MP4.mvhd = function (timescale, duration) {
        return MP4.box(MP4.types.mvhd, new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, timescale >>> 24 & 0xFF, timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF, duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x01, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0xFF // next_track_ID 下一个track使用的id号
        ]));
    };
    // Track box
    MP4.trak = function (meta) {
        return MP4.box(MP4.types.trak, MP4.tkhd(meta), MP4.mdia(meta));
    };
    // Track header box
    MP4.tkhd = function (meta) {
        var trackId = meta.id,
            duration = meta.duration;
        var width = meta.presentWidth,
            height = meta.presentHeight;
        return MP4.box(MP4.types.tkhd, new Uint8Array([0x00, 0x00, 0x00, 0x07,
        // 0x000001 track_enabled，否则该track不被播放；
        // 0x000002 track_in_movie，表示该track在播放中被引用；
        // 0x000004 track_in_preview，表示该track在预览时被引用。
        // 一般该值为7，1+2+4 如果一个媒体所有track均未设置track_in_movie和track_in_preview，将被理解为所有track均设置了这两项；对于hint track，该值为0
        // hint track  这个特殊的track并不包含媒体数据，而是包含了一些将其他数据track打包成流媒体的指示信息。
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, trackId >>> 24 & 0xFF, trackId >>> 16 & 0xFF, trackId >>> 8 & 0xFF, trackId & 0xFF, 0x00, 0x00, 0x00, 0x00, duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, width >>> 8 & 0xFF, width & 0xFF, 0x00, 0x00, height >>> 8 & 0xFF, height & 0xFF, 0x00, 0x00]));
    };
    /**
     * “mdia”也是个container box，其子box的结构和种类还是比较复杂的。先来看一个“mdia”的实例结构树图。
     * 总体来说，“mdia”定义了track媒体类型以及sample数据，描述sample信息。一般“mdia”包含一个“mdhd”，
     * 一个“hdlr”和一个“minf”，其中“mdhd”为media header box，“hdlr”为handler reference box，
     * “minf”为media information box。
     *
     * mdia
     * 		mdhd
     * 		hdlr
     * 		minf
     * 			smhd
     * 			dinf
     * 				dref
     * 					url
     * 			stbl
     * 				stsd
     * 					mp4a
     * 						esds
     * 				stts
     * 				stsc
     * 				stsz
     * 				stco
     */
    MP4.mdia = function (meta) {
        return MP4.box(MP4.types.mdia, MP4.mdhd(meta), MP4.hdlr(meta), MP4.minf(meta));
    };
    // Media header box
    MP4.mdhd = function (meta) {
        var timescale = meta.timescale;
        var duration = meta.duration;
        return MP4.box(MP4.types.mdhd, new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, timescale >>> 24 & 0xFF, timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF, duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x55, 0xC4, 0x00, 0x00 // pre_defined = 0
        ]));
    };
    // Media handler reference box
    MP4.hdlr = function (meta) {
        var data = null;
        if (meta.type === 'audio') {
            data = MP4.constants.HDLR_AUDIO;
        } else {
            data = MP4.constants.HDLR_VIDEO;
        }
        return MP4.box(MP4.types.hdlr, data);
    };
    /**
         * “minf”存储了解释track媒体数据的handler-specific信息，media handler用这些信息将媒体时间映射到媒体数据并进行处理。“minf”中的信息格式和内容与媒体类型以及解释媒体数据的media handler密切相关，其他media handler不知道如何解释这些信息。“minf”是一个container box，其实际内容由子box说明。
    一般情况下，“minf”包含一个header box，一个“dinf”和一个“stbl”，其中，header box根据track type（即media handler type）分为“vmhd”、“smhd”、“hmhd”和“nmhd”，“dinf”为data information box，“stbl”为sample table box。下面分别介绍。
          *
         */
    // Media infomation box
    MP4.minf = function (meta) {
        // header box根据track type（即media handler type）分为“vmhd”、“smhd”、“hmhd”和“nmhd”
        var xmhd = null;
        if (meta.type === 'audio') {
            xmhd = MP4.box(MP4.types.smhd, MP4.constants.SMHD);
        } else {
            xmhd = MP4.box(MP4.types.vmhd, MP4.constants.VMHD);
        }
        return MP4.box(MP4.types.minf, xmhd, MP4.dinf(), MP4.stbl(meta));
    };
    /**
     * Data Information Box
     * “dinf”解释如何定位媒体信息，是一个container box。“dinf”一般包含一个“dref”，即data reference box；
     * “dref”下会包含若干个“url”或“urn”，这些box组成一个表，用来定位track数据。
     * 简单的说，track可以被分成若干段，每一段都可以根据“url”或“urn”指向的地址来获取数据，
     * sample描述中会用这些片段的序号将这些片段组成一个完整的track。
     * 一般情况下，当数据被完全包含在文件中时，“url”或“urn”中的定位字符串是空的。
     */
    MP4.dinf = function () {
        var result = MP4.box(MP4.types.dinf, MP4.box(MP4.types.dref, MP4.constants.DREF));
        return result;
    };
    /**
         * Sample Table Box（stbl）
        *	“stbl”几乎是普通的MP4文件中最复杂的一个box了，首先需要回忆一下sample的概念。
        * 	sample是媒体数据存储的单位，存储在media的chunk中，chunk和sample的长度均可互不相同，如下图所示。
            “stbl”是一个container box，其子box包括：sample description box（stsd）、
             * time to sample box（stts）、sample size box（stsz或stz2）、
             * sample to chunk box（stsc）、chunk offset box（stco或co64）、
             * composition time to sample box（ctts）、sync sample box（stss）
             * stsd”必不可少，且至少包含一个条目，该box包含了data reference box进行sample数据检索的信息。
             * 没有“stsd”就无法计算media sample的存储位置。“stsd”包含了编码的信息，其存储的信息随媒体类型不同而不同。
             * 			stbl
             * 				stsd
             * 					avc1
             * 						avcC
             * 				stts
             * 				stsc
             * 				stsz
             * 				stco
         */
    MP4.stbl = function (meta) {
        var result = MP4.box(MP4.types.stbl, // type: stbl
        MP4.stsd(meta), // Sample Description Table
        MP4.box(MP4.types.stts, MP4.constants.STTS), // Time-To-Sample    因为stts的entry count 为0
        // 所以没有关键帧index 的stss
        // 也没有CTTS box CTTS是记录偏移量
        MP4.box(MP4.types.stsc, MP4.constants.STSC), // Sample-To-Chunk
        MP4.box(MP4.types.stsz, MP4.constants.STSZ), // Sample size
        MP4.box(MP4.types.stco, MP4.constants.STCO) // Chunk offset
        );
        return result;
    };
    /**
         * Sample Description Box（stsd）
            box header和version字段后会有一个entry count字段，
    * 			根据entry的个数，每个entry会有type信息，如“vide”、“sund”等，
    * 		根据type不同sample description会提供不同的信息，例如对于video track，
    * 会有“VisualSampleEntry”类型信息，对于audio track会有“AudioSampleEntry”类型信息。
          * * 				stsd
            * 					mp4a
            * 						esds
             *
             *
             *
             *
             * 		 4 bytes - length in total
                     4 bytes - 4 char code of sample description table (stsd)
                     4 bytes - version & flags
                     4 bytes - number of sample entries (num_sample_entries)
                         [
                            4 bytes - length of sample entry (len_sample_entry)
                            4 bytes - 4 char code of sample entry
                            ('len_sample_entry' - 8) bytes of data
                         ] (repeated 'num_sample_entries' times)
                    (4 bytes - optional 0x00000000 as end of box marker )
         */
    MP4.stsd = function (meta) {
        if (meta.type === 'audio') {
            return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.mp4a(meta));
        } else {
            return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.avc1(meta));
        }
    };
    MP4.mp4a = function (meta) {
        var channelCount = meta.channelCount;
        var sampleRate = meta.audioSampleRate;
        var data = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, channelCount, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, sampleRate >>> 8 & 0xFF, sampleRate & 0xFF, 0x00, 0x00]);
        return MP4.box(MP4.types.mp4a, data, MP4.esds(meta));
    };
    MP4.esds = function (meta) {
        var config = meta.config;
        var configSize = config.length;
        var data = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x03, 0x17 + configSize, 0x00, 0x01, 0x00, 0x04, 0x0F + configSize, 0x40,
        /**
         *当objectTypeIndication为0x40时，为MPEG-4 Audio（MPEG-4 Audio generally is thought of as AAC
         * but there is a whole framework of audio codecs that can Go in MPEG-4 Audio including AAC, BSAC, ALS, CELP,
         * and something called MP3On4），如果想更细分format为aac还是mp3，
         * 可以读取MP4DecSpecificDescr层data[0]的前五位
         */
        0x15, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05 // descriptor_type MP4DecSpecificDescrTag
        ].concat([configSize]).concat(config).concat([0x06, 0x01, 0x02 // GASpecificConfig
        ]));
        return MP4.box(MP4.types.esds, data);
    };
    /**
     * 改版
     *stsd下的avc1视频解析
     */
    MP4.avc1 = function (meta) {
        var avcc = meta.avcc;
        var width = meta.codecWidth,
            height = meta.codecHeight;
        var data = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, width >>> 8 & 0xFF, width & 0xFF, height >>> 8 & 0xFF, height & 0xFF, 0x00, 0x48, 0x00, 0x00, 0x00, 0x48, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
        // frame_count表明多少帧压缩视频存储在每个样本。默认是1,每样一帧;它可能超过1每个样本的多个帧数
        0x04,
        // 32个8 bit    第一个8bit表示长度,剩下31个8bit表示内容
        0x67, 0x31, 0x31, 0x31, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0xFF, 0xFF // pre_defined = -1
        ]);
        return MP4.box(MP4.types.avc1, data, MP4.box(MP4.types.avcC, avcc));
    };
    // Movie Extends box
    MP4.mvex = function (meta) {
        if (meta.length > 1) {
            return MP4.box(MP4.types.mvex, MP4.trex(meta[0]), MP4.trex(meta[1]));
        } else {
            return MP4.box(MP4.types.mvex, MP4.trex(meta[0]));
        }
    };
    // Track Extends box
    MP4.trex = function (meta) {
        var trackId = meta.id;
        var data = new Uint8Array([0x00, 0x00, 0x00, 0x00, trackId >>> 24 & 0xFF, trackId >>> 16 & 0xFF, trackId >>> 8 & 0xFF, trackId & 0xFF, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01 // default_sample_flags
        ]);
        // if (meta.type !== 'video') {
        //     data[data.length - 1] = 0x00;
        // }
        return MP4.box(MP4.types.trex, data);
    };
    // Movie fragment box
    MP4.moof = function (track, baseMediaDecodeTime) {
        return MP4.box(MP4.types.moof, MP4.mfhd(track.sequenceNumber), MP4.traf(track, baseMediaDecodeTime));
    };
    MP4.mfhd = function (sequenceNumber) {
        var data = new Uint8Array([0x00, 0x00, 0x00, 0x00, sequenceNumber >>> 24 & 0xFF, sequenceNumber >>> 16 & 0xFF, sequenceNumber >>> 8 & 0xFF, sequenceNumber & 0xFF]);
        return MP4.box(MP4.types.mfhd, data);
    };
    // Track fragment box
    MP4.traf = function (track, baseMediaDecodeTime) {
        var trackId = track.id;
        // Track fragment header box
        var tfhd = MP4.box(MP4.types.tfhd, new Uint8Array([0x00, 0x00, 0x00, 0x00, trackId >>> 24 & 0xFF, trackId >>> 16 & 0xFF, trackId >>> 8 & 0xFF, trackId & 0xFF]));
        // Track Fragment Decode Time
        var tfdt = MP4.box(MP4.types.tfdt, new Uint8Array([0x00, 0x00, 0x00, 0x00, baseMediaDecodeTime >>> 24 & 0xFF, baseMediaDecodeTime >>> 16 & 0xFF, baseMediaDecodeTime >>> 8 & 0xFF, baseMediaDecodeTime & 0xFF]));
        var sdtp = MP4.sdtp(track);
        var trun = MP4.trun(track, sdtp.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
        return MP4.box(MP4.types.traf, tfhd, tfdt, trun, sdtp);
    };
    // Sample Dependency Type box
    MP4.sdtp = function (track) {
        var samples = track.samples || [];
        var sampleCount = samples.length;
        var data = new Uint8Array(4 + sampleCount);
        // 0~4 bytes: version(0) & flags
        for (var i = 0; i < sampleCount; i++) {
            var flags = samples[i].flags;
            data[i + 4] = flags.isLeading << 6 | // is_leading: 2 (bit)
            flags.dependsOn << 4 // sample_depends_on
            | flags.isDependedOn << 2 // sample_is_depended_on
            | flags.hasRedundancy; // sample_has_redundancy
        }
        return MP4.box(MP4.types.sdtp, data);
    };
    // Track fragment run box
    MP4.trun = function (track, offset) {
        var samples = track.samples || [];
        var sampleCount = samples.length;
        var dataSize = 12 + 16 * sampleCount;
        var data = new Uint8Array(dataSize);
        offset += 8 + dataSize;
        data.set([0x00, 0x00, 0x0F, 0x01, sampleCount >>> 24 & 0xFF, sampleCount >>> 16 & 0xFF, sampleCount >>> 8 & 0xFF, sampleCount & 0xFF, offset >>> 24 & 0xFF, offset >>> 16 & 0xFF, offset >>> 8 & 0xFF, offset & 0xFF], 0);
        for (var i = 0; i < sampleCount; i++) {
            var duration = samples[i].duration;
            var size = samples[i].size;
            var flags = samples[i].flags;
            var cts = samples[i].cts;
            data.set([duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, size >>> 24 & 0xFF, size >>> 16 & 0xFF, size >>> 8 & 0xFF, size & 0xFF, flags.isLeading << 2 | flags.dependsOn, flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.isNonSync, 0x00, 0x00, cts >>> 24 & 0xFF, cts >>> 16 & 0xFF, cts >>> 8 & 0xFF, cts & 0xFF], 12 + 16 * i);
        }
        return MP4.box(MP4.types.trun, data);
    };
    MP4.mdat = function (data) {
        return MP4.box(MP4.types.mdat, data);
    };
    return MP4;
}();
exports.default = MP4;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mseController = __webpack_require__(10);

var _mseController2 = _interopRequireDefault(_mseController);

var _transmuxer = __webpack_require__(12);

var _transmuxer2 = _interopRequireDefault(_transmuxer);

var _config = __webpack_require__(31);

var _config2 = _interopRequireDefault(_config);

var _mangoHelper = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * flv controller
 * @export
 * @class Flv
 */
var Flv = /** @class */function (_super) {
    __extends(Flv, _super);
    /**
       * flv Wrapper
       * @param {any} wrap videoElement
       * @param {any} option
       * @class Flv
       */
    function Flv(videodom, config) {
        var _this = _super.call(this) || this;
        _this.tag = 'flv-player';
        _this.video = videodom;
        _this.box = 'flv';
        _this.timer = null;
        _this.seekTimer = null;
        _this.config = (0, _mangoHelper.deepAssign)({}, _config2.default, config);
        _this.requestSetTime = false;
        _this.throttle = null;
        _this.bindEvents();
        _this.attachMedia();
        return _this;
    }
    Flv.isSupport = function () {
        var parser = new _mangoHelper.UAParser();
        var info = parser.getBrowser();
        if (info.name === 'Safari' && parseInt(info.major) < 10) {
            return false;
        }
        if (window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.640020,mp4a.40.2"')) {
            return true;
        } else {
            return false;
        }
    };
    Object.defineProperty(Flv, "version", {
        get: function get() {
            return "1.0.0";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * internal set currentTime
     * @memberof Flv
     */
    Flv.prototype.internalPropertyHandle = function () {
        if (!Object.getOwnPropertyDescriptor) {
            return;
        }
        var _this = this;
        var time = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime');
        Object.defineProperty(this.video, 'currentTime', {
            get: function get() {
                return time.get.call(_this.video);
            },
            set: function set(t) {
                if (!_this.currentTimeLock) {
                    throw new Error('can not set currentTime by youself');
                } else {
                    return time.set.call(_this.video, t);
                }
            }
        });
    };
    /**
     * bind events
     * @memberof Flv
     */
    Flv.prototype.bindEvents = function () {
        var _this = this;
        if (this.video) {
            this.video.addEventListener('canplay', function () {
                if (_this.config.isLive) {
                    _this.video.play();
                }
                if (_this.config.lockInternalProperty) {
                    _this.internalPropertyHandle();
                }
            });
        }
    };
    /**
     * new mediaSource
     * @memberof Flv
     */
    Flv.prototype.attachMedia = function () {
        var _this = this;
        this.mediaSource = new _mseController2.default(this.video, this.config);
        this.mediaSource.on('error', function (errorMessage) {
            _this.emit('error', errorMessage.data);
            if (_this.transmuxer) {
                _this.transmuxer.pause();
            }
        });
        this.mediaSource.on('bufferFull', function () {
            _this.pauseTransmuxer();
        });
        this.mediaSource.on('updateend', function () {
            _this.onmseUpdateEnd();
        });
    };
    /**
     * load
     * @param {string} video url
     * @memberof Flv
     */
    Flv.prototype.load = function (src) {
        if (src) {
            this.config.src = src;
        }
        this.transmuxer = new _transmuxer2.default(this.mediaSource, this.config, this.globalEvent);
        this.transmuxerEvent(this.transmuxer);
        this.transmuxer.loadSource();
    };
    Flv.prototype.transmuxerEvent = function (transmuxer) {
        var _this = this;
        var mediaSource = this.mediaSource;
        transmuxer.on('mediaSegment', function (handle) {
            mediaSource.emit('mediaSegment', handle.data);
        });
        transmuxer.on('mediaSegmentInit', function (handle) {
            mediaSource.emit('mediaSegmentInit', handle.data);
        });
        transmuxer.on('error', function (errorMessage) {
            _this.emit('error', errorMessage.data);
            transmuxer.pause();
            mediaSource.pause();
        });
        transmuxer.on('end', function (handle) {
            mediaSource.endOfStream();
        });
        transmuxer.on('heartbeat', function (handle) {
            _this.emit('heartbeat', handle.data);
        });
        transmuxer.on('mediaInfo', function (mediaInfo) {
            if (!_this.mediaInfo) {
                _this.mediaInfo = mediaInfo;
                _this.emit('mediaInfo', mediaInfo.data);
                mediaSource.init(mediaInfo.data);
                _this.video.src = URL.createObjectURL(mediaSource.mediaSource);
                _this.video.addEventListener('seeking', _this._throttle.call(_this));
            }
        });
    };
    Flv.prototype._throttle = function () {
        this.throttle = (0, _mangoHelper.throttle)(this._seek.bind(this), 200, { leading: false });
        return this.throttle;
    };
    /**
     * seek in buffered
     * @param {number} seek time
     * @memberof Flv
     */
    Flv.prototype.isTimeinBuffered = function (seconds) {
        var buffered = this.video.buffered;
        for (var i = 0; i < buffered.length; i++) {
            var from = buffered.start(i);
            var to = buffered.end(i);
            if (seconds >= from && seconds < to) {
                return true;
            }
        }
        return false;
    };
    /**
     * get current buffer end
     * @memberof Flv
     */
    Flv.prototype.getCurrentBufferEnd = function () {
        var buffered = this.video.buffered;
        var currentTime = this.video.currentTime;
        var currentRangeEnd = 0;
        for (var i = 0; i < buffered.length; i++) {
            var start = buffered.start(i);
            var end = buffered.end(i);
            if (start <= currentTime && currentTime < end) {
                currentRangeEnd = end;
                return currentRangeEnd;
            }
        }
    };
    /**
     * _seek
     * @param {number} seek time
     * @memberof Flv
     */
    Flv.prototype._seek = function (seconds) {
        var _this = this;
        this.currentTimeLock = true;
        var currentTime = (0, _mangoHelper.isNumber)(seconds) && !isNaN(seconds) ? seconds : this.video.currentTime;
        if (this.requestSetTime) {
            this.requestSetTime = false;
            this.currentTimeLock = false;
            return;
        }
        if (this.isTimeinBuffered(currentTime)) {
            if (this.config.alwaysSeekKeyframe) {
                var nearlestkeyframe = this.transmuxer.getNearestKeyframe(Math.floor(currentTime * 1000));
                if (nearlestkeyframe) {
                    this.requestSetTime = true;
                    this.video.currentTime = nearlestkeyframe.keyframetime / 1000;
                }
            }
        } else {
            _mangoHelper.Log.verbose(this.tag, 'do seek');
            this.transmuxer.pause();
            var nearlestkeyframe_1 = this.transmuxer.getNearestKeyframe(Math.floor(currentTime * 1000));
            currentTime = nearlestkeyframe_1.keyframetime / 1000;
            this.seekTimer = setTimeout(function () {
                _this.mediaSource.seek(currentTime);
                _this.transmuxer.seek(nearlestkeyframe_1);
            }, 100);
            this.requestSetTime = true;
            this.video.currentTime = currentTime;
            window.clearInterval(this.timer);
            this.timer = null;
        }
        this.currentTimeLock = false;
        return currentTime;
    };
    /**
     * mediaSource updateend
     * @memberof Flv
     */
    Flv.prototype.onmseUpdateEnd = function () {
        if (this.config.isLive) {
            return;
        }
        var currentBufferEnd = this.getCurrentBufferEnd();
        var currentTime = this.video.currentTime;
        if (currentBufferEnd >= currentTime + this.config.lazyLoadMaxDuration && this.timer === null) {
            _mangoHelper.Log.verbose(this.tag, 'Maximum buffering duration exceeded, suspend transmuxing task');
            this.pauseTransmuxer();
        }
    };
    /**
     * heartbeat
     * @memberof Flv
     */
    Flv.prototype.heartbeat = function () {
        var currentTime = this.video.currentTime;
        var buffered = this.video.buffered;
        var needResume = false;
        for (var i = 0; i < buffered.length; i++) {
            var from = buffered.start(i);
            var to = buffered.end(i);
            if (currentTime >= from && currentTime < to) {
                if (currentTime >= to - this.config.lazyLoadRecoverDuration) {
                    needResume = true;
                }
                break;
            }
        }
        if (needResume) {
            window.clearInterval(this.timer);
            this.timer = null;
            _mangoHelper.Log.verbose(this.tag, 'Continue loading from paused position');
            this.transmuxer.resume();
            this.mediaSource.resume();
        }
    };
    /**
     * pause transmuxer
     * @memberof Flv
     */
    Flv.prototype.pauseTransmuxer = function () {
        this.transmuxer.pause();
        this.mediaSource.pause();
        if (!this.timer) {
            this.timer = setInterval(this.heartbeat.bind(this), 1000);
        }
    };
    Flv.prototype.resume = function () {
        this._seek(0);
    };
    /**
     * destroy
     * @memberof Flv
     */
    Flv.prototype.destroy = function () {
        window.clearInterval(this.timer);
        window.clearInterval(this.seekTimer);
        this.video.removeEventListener('seeking', this.throttle);
        if (this.video) {
            URL.revokeObjectURL(this.video.src);
            this.video.src = '';
            this.video.removeAttribute('src');
            if (this.transmuxer) {
                this.transmuxer.pause();
                this.transmuxer.destroy();
                this.transmuxer = null;
            }
            if (this.mediaSource) {
                this.mediaSource.destroy();
                this.mediaSource = null;
            }
        }
    };
    Flv.prototype.seek = function (seconds) {
        return this._seek(seconds);
    };
    Flv.prototype.play = function () {
        return this.video.play();
    };
    Flv.prototype.pause = function () {
        return this.video.pause();
    };
    Flv.prototype.refresh = function () {
        if (this.transmuxer && this.mediaSource) {
            this._seek(0);
        } else {
            _mangoHelper.Log.verbose(this.tag, 'transmuxer & mediaSource not ready');
        }
    };
    /**
     * stop stream load
     * @memberof Flv
     */
    Flv.prototype.stopLoad = function () {
        this.transmuxer && this.transmuxer.pause();
        this.mediaSource && this.mediaSource.pause();
    };
    return Flv;
}(_mangoHelper.CustEvent);
exports.default = Flv;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mangoHelper = __webpack_require__(0);

var _$const = __webpack_require__(1);

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var MSEController = /** @class */function (_super) {
    __extends(MSEController, _super);
    /**
     * Mediasource 控制层
     * @class Mediasource
     * @param {Element} videoElement
     * @param {object} config
     */
    function MSEController(videoElement, config) {
        var _this = _super.call(this) || this;
        _this.video = videoElement;
        _this.config = config;
        _this.tag = 'mse-controller';
        _this.e = {
            onSourceOpen: _this.onSourceOpen.bind(_this),
            onSourceEnded: _this.onSourceEnded.bind(_this),
            onSourceClose: _this.onSourceClose.bind(_this),
            onSourceBufferError: _this.onSourceBufferError.bind(_this)
        };
        _this.hasVideo = true;
        _this.hasAudio = true;
        _this.removeRangesList = {
            video: [],
            audio: []
        };
        _this.removeBucketing = false;
        _this.timer = {
            video: null,
            audio: null
        };
        _this.queue = {
            video: [],
            audio: []
        };
        _this.sourceBuffer = {
            video: null,
            audio: null
        };
        _this.mimeCodec = {
            video: null,
            audio: null
        };
        _this.sourceBufferEvent();
        _this.complete = false;
        return _this;
    }
    /**
     * mediaSource init
     * @param {Object} mediaInfo
     */
    MSEController.prototype.init = function (mediaInfo) {
        if (this.mediaSource) {
            _mangoHelper.Log.Error(this.tag, 'MediaSource has been attached to an HTMLMediaElement!');
            this.emit('error', { errno: _$const.ERRORNO.MEDIASOURCE_ERROR, errmsg: 'MediaSource has been attached to an HTMLMediaElement!' });
            return;
        }
        if (mediaInfo.hasAudio) {
            this.mimeCodec['audio'] = "audio/mp4; codecs=\"" + mediaInfo.audioCodec + "\"";
        } else {
            this.hasAudio = false;
        }
        if (mediaInfo.hasVideo) {
            this.mimeCodec['video'] = "video/mp4; codecs=\"" + mediaInfo.videoCodec + "\"";
        } else {
            this.hasVideo = false;
        }
        var ms = this.mediaSource = new window.MediaSource();
        ms.addEventListener('sourceopen', this.e.onSourceOpen);
        ms.addEventListener('sourceended', this.e.onSourceEnded);
        ms.addEventListener('sourceclose', this.e.onSourceClose);
    };
    /**
     * mediaSource open
     */
    MSEController.prototype.onSourceOpen = function () {
        _mangoHelper.Log.verbose(this.tag, 'MediaSource onSourceOpen');
        this.mediaSource.removeEventListener('sourceopen', this.e.onSourceOpen);
        if (this.hasAudio) {
            this.addSourceBuffer('audio');
        }
        if (this.hasVideo) {
            this.addSourceBuffer('video');
        }
        if (this.hasQueueList()) {
            this.doUpdate();
        }
        this.emit('source_open');
    };
    /**
     * addSourceBuffer
     * @param {String} tag type
     */
    MSEController.prototype.addSourceBuffer = function (type) {
        var _this = this;
        this.sourceBuffer[type] = this.mediaSource.addSourceBuffer(this.mimeCodec[type]);
        _mangoHelper.Log.verbose(this.tag, 'add sourcebuffer ' + type);
        var sb = this.sourceBuffer[type];
        sb.addEventListener('error', this.e.onSourceBufferError);
        sb.addEventListener('abort', function () {
            return _mangoHelper.Log.verbose(_this.tag, 'sourceBuffer: abort');
        });
        sb.addEventListener('updateend', function () {
            if (!_this.sourceBuffer) {
                return;
            }
            if (_this.hasRemoveList()) {
                if (_this.removeRangesList.video.length) {
                    _this.cleanRangesList('video');
                }
                if (_this.removeRangesList.audio.length) {
                    _this.cleanRangesList('audio');
                }
            } else if (_this.hasQueueList()) {
                _this.doUpdate();
            } else if (_this.complete && !_this.sourceBuffer[type].updating) {
                _this.endOfStream();
            }
            _this.emit('updateend');
        });
    };
    MSEController.prototype.hasRemoveList = function () {
        return this.removeRangesList.video.length || this.removeRangesList.audio.length;
    };
    MSEController.prototype.hasQueueList = function () {
        return this.queue.video.length || this.queue.audio.length;
    };
    /**
    * addSourceBuffer
    */
    MSEController.prototype.doUpdate = function () {
        for (var type in this.queue) {
            if (this.queue[type].length > 0 && !this.sourceBuffer[type].updating) {
                var data = this.queue[type].shift();
                this.appendBuffer(data, type);
            }
        }
    };
    /**
     * sourceBuffer event
     */
    MSEController.prototype.sourceBufferEvent = function () {
        var _this = this;
        this.on('mediaSegment', function (handler) {
            var data = handler.data;
            var type = data.type;
            if (_this.needCleanupSourceBuffer(type)) {
                _this.doCleanupSourceBuffer(type);
            }
            // if(!this.sourceBuffer[type] || (this.sourceBuffer[type].updating || this.queue[type].length > 0)) {
            //   this.queue[type].push(data.data);
            // } else {
            //   this.appendBuffer(data.data, type);
            // }
            _this.queue[type].push(data.data);
            if (_this.sourceBuffer[type] && !_this.hasRemoveList()) {
                _this.doUpdate();
            }
        });
        this.on('mediaSegmentInit', function (handler) {
            var data = handler.data;
            var type = data.type;
            // if (!this.sourceBuffer[type] || (this.sourceBuffer[type].updating || this.queue[type].length > 0)) {
            //   this.queue[type].push(data.data);
            // } else {
            //  this.appendBuffer(data.data, type);
            // }
            _this.queue[type].push(data.data);
        });
    };
    /**
     * need clean sourcebuffer
     * @param {String} tag type
     */
    MSEController.prototype.needCleanupSourceBuffer = function (type) {
        var currentTime = this.video.currentTime;
        // const sb = this.sourceBuffer[type];
        // const buffered = sb.buffered;
        var buffered = this.video.buffered;
        if (buffered.length >= 1) {
            if (currentTime - buffered.start(0) >= this.config.autoCleanupMaxBackwardDuration) {
                return true;
            }
        }
        return false;
    };
    /**
     * clean buffer
     * @param {String} tag type
     */
    MSEController.prototype.doCleanupSourceBuffer = function (type) {
        var currentTime = this.video.currentTime;
        var sb = this.sourceBuffer[type];
        var buffered = sb.buffered;
        var doRemove = false;
        for (var i = 0; i < buffered.length; i++) {
            var start = buffered.start(i);
            var end = buffered.end(i);
            if (start <= currentTime && currentTime < end + 3) {
                if (currentTime - start >= this.config.autoCleanupMaxBackwardDuration) {
                    doRemove = true;
                    var removeEnd = currentTime - this.config.autoCleanupMinBackwardDuration;
                    this.removeRangesList[type].push({ start: start, end: removeEnd });
                }
            }
        }
        if (doRemove && !this.sourceBuffer[type].updating) {
            this.cleanRangesList(type);
        }
    };
    /**
     * clean bufferlist
     * @param {String} tag type
     */
    MSEController.prototype.cleanRangesList = function (type) {
        if (this.sourceBuffer[type].updating) {
            return;
        }
        var sb = this.sourceBuffer[type];
        while (this.removeRangesList[type].length && !sb.updating) {
            var ranges = this.removeRangesList[type].shift();
            sb.remove(ranges.start, ranges.end);
        }
    };
    /**
     * appendBuffer
     * @param {Object} data
     * @param {String} tag type
     */
    MSEController.prototype.appendBuffer = function (data, type) {
        if (!this.sourceBuffer[type]) {
            return;
        }
        try {
            this.sourceBuffer[type].appendBuffer(data.buffer);
        } catch (e) {
            this.queue[type].unshift(data);
            if (e.code === 22) {
                // chrome can cache about 350M
                _mangoHelper.Log.verbose(this.tag, 'MediaSource bufferFull');
                this.emit('bufferFull');
            } else {
                // this.emit('error', {errno: ERRORNO.APPENDBUFFER_ERROR, errmsg: e});
            }
        }
    };
    /**
     * sourcebuffer end
     */
    MSEController.prototype.onSourceEnded = function () {
        _mangoHelper.Log.verbose(this.tag, 'MediaSource onSourceEnded');
    };
    /**
     * sourcebuffer close
     */
    MSEController.prototype.onSourceClose = function () {
        _mangoHelper.Log.verbose(this.tag, 'MediaSource onSourceClose');
        if (this.mediaSource && this.e !== null) {
            this.mediaSource.removeEventListener('sourceopen', this.e.onSourceOpen);
            this.mediaSource.removeEventListener('sourceended', this.e.onSourceEnded);
            this.mediaSource.removeEventListener('sourceclose', this.e.onSourceClose);
        }
    };
    /**
    * sourcebuffer error
    * @param {Object} evnet
    */
    MSEController.prototype.onSourceBufferError = function (e) {
        this.emit('error', { errnono: _$const.ERRORNO.SOURCEBUFFER_ERROR, errmsg: e });
        _mangoHelper.Log.error(this.tag, "SourceBuffer Error: " + e);
    };
    /**
     * seek
     */
    MSEController.prototype.seek = function () {
        for (var type in this.sourceBuffer) {
            var sb = this.sourceBuffer[type];
            if (!sb) {
                continue;
            }
            if (this.mediaSource.readyState === 'open') {
                try {
                    sb.abort();
                } catch (e) {
                    this.emit('error', { errno: _$const.ERRORNO.SBABORT_ERROR, errmsg: e });
                    _mangoHelper.Log.error(this.tag, e.message);
                }
            }
            this.queue[type] = [];
            for (var i = 0; i < sb.buffered.length; i++) {
                var start = sb.buffered.start(i);
                var end = sb.buffered.end(i);
                this.removeRangesList[type].push({ start: start, end: end });
            }
            if (!sb.updating) {
                this.cleanRangesList(type);
            }
        }
    };
    /**
     * resume
     */
    MSEController.prototype.resume = function () {
        this.doUpdate();
    };
    /**
     * pause
     */
    MSEController.prototype.pause = function () {
        // this.endOfStream();
    };
    MSEController.prototype.endOfStream = function () {
        if (this.mediaSource) {
            var ms = this.mediaSource;
            this.complete = true;
            var sb = this.sourceBuffer;
            if (sb.video && sb.video.updating || sb.audio && sb.audio.updating) {
                return;
            } else {
                if (ms.readyState === 'open') {
                    try {
                        ms.endOfStream();
                        this.complete = false;
                    } catch (error) {
                        _mangoHelper.Log.verbose(this.tag, error);
                        this.emit('error', { errno: _$const.ERRORNO.ENDOFSTREAM_ERROR, errmsg: error });
                    }
                }
            }
        }
    };
    /**
     * destroy
     */
    MSEController.prototype.destroy = function () {
        if (this.mediaSource) {
            var ms = this.mediaSource;
            // pending segments should be discard
            this.queue = {
                video: [],
                audio: []
            };
            this.sourceBuffer = {
                video: null,
                audio: null
            };
            this.mimeCodec = {
                video: null,
                audio: null
            };
            // remove all sourcebuffers
            var sb = this.sourceBuffer;
            this.complete = false;
            this.endOfStream();
            if (sb) {
                if (ms.readyState !== 'closed') {
                    ms.removeSourceBuffer(sb);
                    sb.removeEventListener('error', this.e.onSourceBufferError);
                    sb.removeEventListener('updateend', this.e.onSourceBufferUpdateEnd);
                }
                this.sourceBuffer = null;
            }
            ms.removeEventListener('sourceopen', this.e.onSourceOpen);
            ms.removeEventListener('sourceended', this.e.onSourceEnded);
            ms.removeEventListener('sourceclose', this.e.onSourceClose);
            this.mediaSource = null;
        }
    };
    return MSEController;
}(_mangoHelper.CustEvent);
exports.default = MSEController;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ioLoader = __webpack_require__(2);

var _ioLoader2 = _interopRequireDefault(_ioLoader);

var _mangoHelper = __webpack_require__(0);

var _webworkifyWebpack = __webpack_require__(18);

var _webworkifyWebpack2 = _interopRequireDefault(_webworkifyWebpack);

var _flv2fmp = __webpack_require__(4);

var _flv2fmp2 = _interopRequireDefault(_flv2fmp);

var _$const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * Transmuxer controller
 * @class Transmuxer
 * @param {mediaSource} mediaSource
 * @param {object} config
 */
var Transmuxer = /** @class */function (_super) {
    __extends(Transmuxer, _super);
    function Transmuxer(mediaSource, config, globalEvent) {
        var _this = _super.call(this) || this;
        _this.config = config || {};
        _this.tag = 'transmuxer';
        _this.loader = null;
        _this.CPU = null;
        _this.keyframePoint = false;
        _this.w = null;
        if (_this.config.webWorker) {
            _this.w = (0, _webworkifyWebpack2.default)(/*require.resolve*/(30));
            _this.w.addEventListener('message', function (e) {
                _this.parseCallback.call(_this, e.data);
            });
            _this.w.postMessage({ cmd: 'init', data: config });
        }
        _this.lock = 0;
        return _this;
    }
    /**
    * instance ioloader
    */
    Transmuxer.prototype.loadSource = function () {
        if (this.config.webWorker) {
            this.w.postMessage({ cmd: 'loadSource' });
        } else {
            this.loader = new _ioLoader2.default(this.config);
            this.loader.arrivalDataCallback = this.arrivalDataCallback.bind(this);
            this.loader.open();
            this.loaderBindEvent(this.loader);
        }
    };
    /**
     * bindEvent
     */
    Transmuxer.prototype.loaderBindEvent = function (loader) {
        var _this = this;
        loader.on('end', function () {
            _this.emit('end');
        });
        loader.on('error', function (handle) {
            _this.emit('error', handle.data);
        });
        loader.on('heartbeat', function (handle) {
            _this.emit('heartbeat', handle.data);
        });
    };
    /**
    * loader data callback
    * @param {arraybuffer} data
    * @param {number} bytestart
    * @param {keyframePoint} keyframe
    */
    Transmuxer.prototype.arrivalDataCallback = function (data, byteStart, keyframePoint) {
        var _this = this;
        if (!this.CPU) {
            this.config.isLive ? this.config._isLive = true : this.config._isLive = false;
            this.CPU = new _flv2fmp2.default(this.config);
            this.CPU.onInitSegment = this.onRemuxerInitSegmentArrival.bind(this);
            this.CPU.onMediaSegment = this.onRemuxerMediaSegmentArrival.bind(this);
            this.CPU.onMediaInfo = this.onMediaInfo.bind(this);
            this.CPU.on('error', function (handle) {
                _this.emit('error', { errno: _$const.ERRORNO.CODEC_ERROR, errmsg: handle.data });
            });
        }
        if (keyframePoint !== undefined) {
            this.CPU.seek(keyframePoint);
        }
        var consumed = this.CPU.setflv(data);
        return consumed;
    };
    /**
     * loader data callback
     * @param {arraybuffer} data
     */
    Transmuxer.prototype.parseCallback = function (data) {
        switch (data.cmd) {
            case 'mediaSegmentInit':
                this.emit('mediaSegmentInit', data.source);
                break;
            case 'mediaSegment':
                this.emit('mediaSegment', data.source);
                break;
            case 'mediainfo':
                this.mediaInfo = data.source;
                this.emit('mediaInfo', data.source);
                break;
            case 'error':
                this.emit('error', data.source);
                break;
        }
    };
    /**
     * Demux mediaInfo
     *  @param {object} video message info
     */
    Transmuxer.prototype.onMediaInfo = function (mediaInfo) {
        this.mediaInfo = mediaInfo;
        this.emit('mediaInfo', mediaInfo);
    };
    /**
     * remuxer init segment arrival
     * @param {arraybuffer} video data
     */
    Transmuxer.prototype.onRemuxerInitSegmentArrival = function (video, audio) {
        this.emit('mediaSegmentInit', {
            type: 'video',
            data: video
        });
        if (audio) {
            this.emit('mediaSegmentInit', {
                type: 'audio',
                data: audio
            });
        }
    };
    /**
     * remuxer  segment arrival
     * @param {String} tag type
     * @param {arraybuffer} video data
     */
    Transmuxer.prototype.onRemuxerMediaSegmentArrival = function (type, data) {
        this.emit('mediaSegment', { type: type, data: data });
    };
    /**
     * get video mediaInfo
     */
    Transmuxer.prototype.getMediaInfo = function () {
        return this.mediaInfo;
    };
    /**
    * stop loader
    */
    Transmuxer.prototype.pause = function () {
        if (this.config.webWorker) {
            this.w.postMessage({ cmd: 'pause' });
        } else {
            this.loader.pause();
        }
    };
    /**
     * resume loader
     */
    Transmuxer.prototype.resume = function () {
        if (this.config.webWorker) {
            this.w.postMessage({ cmd: 'resume' });
        } else {
            this.loader.resume();
        }
    };
    /**
    * flv can seek
    */
    Transmuxer.prototype.isSeekable = function () {
        return this.mediaInfo.hasKeyframesIndex;
    };
    /**
     * video seek
     * @param {object} 关键帧集合
     */
    Transmuxer.prototype.seek = function (keyframe) {
        if (!this.isSeekable()) {
            this.emit('error', { errno: _$const.ERRORNO.CANNOT_SEEK, errmsg: '这个flv视频不支持seek' });
            return false;
        }
        if (this.config.webWorker) {
            this.w.postMessage({ cmd: 'seek', keyframe: keyframe });
        } else {
            this.loader.seek(keyframe.keyframePoint, false, keyframe.keyframetime);
        }
    };
    /**
     * destroy
     */
    Transmuxer.prototype.destroy = function () {
        if (this.config.webWorker) {
            this.w.postMessage({ cmd: 'destroy' });
        } else {
            this.loader.destroy();
            this.loader = null;
            this.CPU = null;
        }
    };
    /**
     * get nearlest keyframe binary search
     * @param {Number} video time
     */
    Transmuxer.prototype.getNearestKeyframe = function (times) {
        if (this.mediaInfo && this.mediaInfo.keyframesIndex) {
            var keyframesList_1 = this.mediaInfo.keyframesIndex.times;
            var keyframesPositions_1 = this.mediaInfo.keyframesIndex.filepositions;
            var binarySearch_1 = function binarySearch_1(list, val) {
                var length = list.length;
                var index = Math.floor(length / 2);
                if (length === 1) {
                    var position = keyframesList_1.indexOf(list[0]);
                    return {
                        keyframetime: list[0],
                        keyframePoint: keyframesPositions_1[position]
                    };
                } else if (list[index] > val) {
                    return binarySearch_1(list.slice(0, index), val);
                } else if (list[index] < val) {
                    return binarySearch_1(list.slice(index), val);
                } else {
                    var position = keyframesList_1.indexOf(list[0]);
                    return {
                        keyframetime: list[0],
                        keyframePoint: keyframesPositions_1[position]
                    };
                }
            };
            return binarySearch_1(keyframesList_1, times);
        } else {
            return 0;
        }
    };
    return Transmuxer;
}(_mangoHelper.CustEvent);
exports.default = Transmuxer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleQuery = __webpack_require__(14);

var _handleQuery2 = _interopRequireDefault(_handleQuery);

var _mangoHelper = __webpack_require__(0);

var _$const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
* fetch firfox 直播 点播
* author songguangyu
* email 522963130@qq.com
*/

/**
 * FetchLoader
 * @class FetchLoader
 * @param {string} video url
 * @param  {object} range.from range.to
 */
var FetchLoader = /** @class */function (_super) {
    __extends(FetchLoader, _super);
    function FetchLoader(src, config) {
        var _this = _super.call(this) || this;
        _this.tag = 'fetch';
        _this.fetching = false;
        _this.config = config;
        _this.range = {
            from: 0,
            to: 524288
        };
        _this.src = src;
        _this.totalRange = null;
        _this.block = 524288;
        _this.reader = null;
        _this.requestAbort = false;
        _this.arrivalDataCallback = null;
        _this.bytesStart = 0;
        _this.heartbeat = null;
        return _this;
    }
    /**
    * broswer is support moz-chunk
    */
    FetchLoader.isSupport = function () {
        if (self.fetch && self.ReadableStream) {
            return true;
        } else {
            return false;
        }
    };
    /**
    * if don't need range don't set
    * @param  {object} range.from range.to
    */
    FetchLoader.prototype.open = function (range, keyframePoint) {
        var _this = this;
        this.requestAbort = false;
        var reqHeaders = new Headers();
        var r = range || { from: 0, to: -1 };
        if (!this.config.isLive) {
            this.range.from = r.from;
            this.range.to = r.to;
            var queryResult = (0, _handleQuery2.default)(r, this.config);
            if (typeof queryResult === 'string') {
                this.src = this.config.src + queryResult;
            } else {
                for (var i in queryResult) {
                    reqHeaders.append(i, queryResult[i]);
                }
            }
        }
        if (keyframePoint) {
            this.bytesStart = 0;
        }
        this.bytesStart = range.from;
        var params = {
            method: 'GET',
            headers: reqHeaders,
            mode: 'cors',
            cache: 'default',
            referrerPolicy: 'no-referrer-when-downgrade'
        };
        fetch(this.src, params).then(function (res) {
            if (res.ok) {
                var reader = res.body.getReader();
                return _this.pump(reader, keyframePoint);
            }
        }).catch(function (e) {
            _this.emit('error', { errno: _$const.ERRORNO.NET_ERROR, errmsg: e });
        });
    };
    /**
    * pause video
    */
    FetchLoader.prototype.pause = function () {
        this.requestAbort = true;
    };
    /**
    * pump data
    */
    FetchLoader.prototype.pump = function (reader, keyframePoint) {
        var _this = this;
        return reader.read().then(function (result) {
            if (result.done) {
                _this.emit('end');
                _mangoHelper.Log.verbose(_this.tag, 'load end');
            } else {
                if (_this.requestAbort === true) {
                    _this.requestAbort = false;
                    return reader.cancel();
                }
                var chunk = result.value.buffer;
                if (_this.arrivalDataCallback) {
                    _this.arrivalDataCallback(chunk, _this.bytesStart, keyframePoint);
                    _this.bytesStart += chunk.byteLength;
                }
                return _this.pump(reader);
            }
        }).catch(function (e) {
            _this.emit('error', { errno: _$const.ERRORNO.NET_ERROR, errmsg: e.message });
        });
    };
    return FetchLoader;
}(_mangoHelper.CustEvent);
exports.default = FetchLoader;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (range, config) {
    if (config.seekType === 'range') {
        var headers = {};
        var param = void 0;
        if (range.to !== -1) {
            param = "bytes=" + range.from.toString() + "-" + range.to.toString();
        } else {
            param = "bytes=" + range.from.toString() + "-";
        }
        headers['Range'] = param;
        return headers;
    } else {
        var param = void 0;
        if (range.to !== -1) {
            param = "?start=" + range.from.toString() + "&end=" + range.to.toString();
        } else {
            param = "?start=" + range.from.toString();
        }
        return param;
    }
};

; /**
  * 处理query的静态函数
  * author songguangyu
  * email 522963130@qq.com
  */

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleRange = __webpack_require__(3);

var _handleRange2 = _interopRequireDefault(_handleRange);

var _mangoHelper = __webpack_require__(0);

var _$const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
* XHR 点播
* author songguangyu
* email 522963130@qq.com
*/
// import Log from 'helper/log';

/**
 * MozChunkLoader
 * @class MozChunkLoader
 * @param {string} video url
 * @param  {object} range.from range.to
 */
var RangeLoader = /** @class */function (_super) {
    __extends(RangeLoader, _super);
    function RangeLoader(src, config) {
        var _this = _super.call(this) || this;
        _this.tag = 'RangeLoader';
        _this.xhr = null;
        _this.src = src;
        _this.totalLength = null;
        _this.chunkSizeKB = 524288;
        _this.range = {};
        _this.bytesStart = 0;
        _this.needSeek = false;
        _this.keyframePoint = null;
        return _this;
    }
    /**
    * broswer is support XMLHttpRequest
    */
    RangeLoader.isSupport = function () {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://example.com', true);
            xhr.responseType = 'arraybuffer';
            return xhr.responseType === 'arraybuffer';
        } catch (e) {
            return false;
        }
    };
    /**
     * if don't need range don't set
     * @param  {object} range.from range.to
     */
    RangeLoader.prototype.open = function (range, keyframePoint) {
        var xhr = this.xhr = new XMLHttpRequest();
        xhr.open('GET', this.src, true);
        xhr.responseType = 'arraybuffer';
        xhr.onreadystatechange = this.onReadyStateChange.bind(this);
        xhr.onprogress = this.onProgress.bind(this);
        xhr.onload = this.onLoad.bind(this);
        xhr.onerror = this.onXhrError.bind(this);
        var r = range || { from: 0, to: -1 };
        this.range.from = r.from;
        if (r.to === -1) {
            r.to = r.from + this.chunkSizeKB;
        }
        if (keyframePoint) {
            this.bytesStart = range.from;
            this.needSeek = true;
            this.keyframePoint = keyframePoint;
        }
        this.range.to = r.to;
        var headers = (0, _handleRange2.default)(r).headers;
        for (var i in headers) {
            xhr.setRequestHeader(i, headers[i]);
        }
        xhr.send();
    };
    /**
     * pause
     */
    RangeLoader.prototype.pause = function () {
        this.abort();
    };
    /**
     * abort request
     */
    RangeLoader.prototype.abort = function () {
        if (this.xhr) {
            this.xhr.onreadystatechange = null;
            this.xhr.onprogress = null;
            this.xhr.onload = null;
            this.xhr.onerror = null;
            this.xhr.abort();
            this.xhr = null;
        }
    };
    /**
     * destroy xhr Object clean cache
     */
    RangeLoader.prototype.destroy = function () {
        if (this.xhr) {
            this.abort();
            this.xhr.onreadystatechange = null;
            this.xhr.onprogress = null;
            this.xhr.onload = null;
            this.xhr.onerror = null;
            this.xhr = null;
        }
        this.totalLength = null;
        this.bytesStart = null;
        this.range = {};
    };
    /**
     * xhr onReadyStateChange
     */
    RangeLoader.prototype.onReadyStateChange = function (e) {
        var xhr = this.xhr;
        if (xhr.readyState === 2) {
            if (xhr.status < 200 && xhr.status > 299) {
                var info = {
                    from: this.range.from,
                    to: this.range.to,
                    url: this.src,
                    msg: 'http Error: http code ' + xhr.status
                };
                this.emit('error', { errno: _$const.ERRORNO.NET_ERROR, errmsg: info });
            }
        }
    };
    /**
     * xhr onProgress
     */
    RangeLoader.prototype.onProgress = function (e) {
        if (!this.totalLength) {
            this.totalLength = e.total;
            this.abort();
            this.open();
        }
    };
    /**
     * xhr onLoad
     */
    RangeLoader.prototype.onLoad = function (e) {
        if (!this.totalLength) {
            return;
        }
        if (this.arrivalDataCallback) {
            var chunk = e.target.response;
            if (this.needSeek) {
                this.needSeek = false;
                this.arrivalDataCallback(chunk, this.bytesStart, this.keyframePoint);
            } else {
                this.arrivalDataCallback(chunk, this.bytesStart);
            }
            this.bytesStart += chunk.byteLength;
            this.open({ from: this.bytesStart, to: -1 });
        }
    };
    /**
     * xhr onXhrError
     */
    RangeLoader.prototype.onXhrError = function (e) {
        var info = {
            from: this.range.from,
            to: this.range.to,
            url: this.src,
            msg: e.constructor.name + ' ' + e.type
        };
        this.emit('error', { errno: _$const.ERRORNO.NET_ERROR, errmsg: info });
    };
    return RangeLoader;
}(_mangoHelper.CustEvent);
exports.default = RangeLoader;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mangoHelper = __webpack_require__(0);

var _$const = __webpack_require__(1);

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var WebSocketLoader = /** @class */function (_super) {
    __extends(WebSocketLoader, _super);
    function WebSocketLoader(src, config) {
        var _this = _super.call(this) || this;
        _this.tag = 'WebSocket';
        _this.src = src;
        _this._ws = null;
        _this._requestAbort = false;
        _this._receivedLength = 0;
        return _this;
    }
    WebSocketLoader.isSupported = function () {
        try {
            return typeof window.WebSocket !== 'undefined';
        } catch (e) {
            return false;
        }
    };
    WebSocketLoader.prototype.open = function (range, keyframePoint) {
        try {
            var ws = this._ws = new self.WebSocket(this.src);
            ws.binaryType = 'arraybuffer';
            ws.onopen = this.onWebSocketOpen.bind(this);
            ws.onclose = this.onWebSocketClose.bind(this);
            ws.onmessage = this.onWebSocketMessage.bind(this);
            ws.onerror = this.onWebSocketError.bind(this);
        } catch (e) {
            var info = {
                code: e.code,
                msg: e.message
            };
            this.emit('error', { errno: _$const.ERRORNO.NET_ERROR, errmsg: info });
        }
    };
    WebSocketLoader.prototype.pause = function () {
        var ws = this._ws;
        if (ws && (ws.readyState === 0 || ws.readyState === 1)) {
            this._requestAbort = true;
            ws.close();
        }
        this._ws = null;
    };
    WebSocketLoader.prototype.onWebSocketClose = function (e) {
        if (this._requestAbort === true) {
            this._requestAbort = false;
            return;
        }
        this.emit('end');
    };
    WebSocketLoader.prototype.onWebSocketOpen = function () {};
    WebSocketLoader.prototype.onWebSocketMessage = function (e) {
        var _this = this;
        if (e.data instanceof ArrayBuffer) {
            this.dispatchArrayBuffer(e.data);
        } else if (e.data instanceof Blob) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                _this.dispatchArrayBuffer(reader_1.result);
            };
            reader_1.readAsArrayBuffer(e.data);
        } else {
            var info = { code: -1, msg: 'Unsupported WebSocket message type: ' + e.data.constructor.name };
            this.emit('error', { errno: _$const.ERRORNO.NET_ERROR, errmsg: info });
        }
    };
    WebSocketLoader.prototype.dispatchArrayBuffer = function (arraybuffer) {
        var chunk = arraybuffer;
        var byteStart = this.receivedLength;
        this.receivedLength += chunk.byteLength;
        if (this.arrivalDataCallback) {
            this.arrivalDataCallback(chunk, byteStart);
        }
    };
    WebSocketLoader.prototype.onWebSocketError = function (e) {
        var info = {
            code: e.code,
            msg: e.message
        };
        this.emit('error', { errno: _$const.ERRORNO.NET_ERROR, errmsg: info });
    };
    return WebSocketLoader;
}(_mangoHelper.CustEvent);
exports.default = WebSocketLoader;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleRange = __webpack_require__(3);

var _handleRange2 = _interopRequireDefault(_handleRange);

var _mangoHelper = __webpack_require__(0);

var _$const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
* XHR firfox 直播 点播
* author songguangyu
* email 522963130@qq.com
*/
// import Log from 'helper/log';

/**
 * MozChunkLoader
 * @class MozChunkLoader
 * @param {string} video url
 * @param  {object} range.from range.to
 */
var MozChunkLoader = /** @class */function (_super) {
    __extends(MozChunkLoader, _super);
    function MozChunkLoader(src, config) {
        var _this = _super.call(this) || this;
        _this.tag = 'mozChunkLoader';
        _this.xhr = null;
        _this.src = src;
        _this.config = config;
        _this.totalLength = null;
        _this.chunkSizeKB = 393216;
        _this.range = {};
        _this.bytesStart = 0;
        _this.keyframePoint = null;
        return _this;
    }
    /**
     * broswer is support moz-chunk
     */
    MozChunkLoader.isSupport = function () {
        try {
            var xhr = new XMLHttpRequest();
            // Firefox 37- requires .open() to be called before setting responseType
            xhr.open('GET', 'https://example.com', true);
            xhr.responseType = 'moz-chunked-arraybuffer';
            return xhr.responseType === 'moz-chunked-arraybuffer';
        } catch (e) {
            return false;
        }
    };
    /**
     * if don't need range don't set
     * @param  {object} range.from range.to
     */
    MozChunkLoader.prototype.open = function (range, keyframePoint) {
        var xhr = this.xhr = new XMLHttpRequest();
        xhr.open('GET', this.src, true);
        xhr.responseType = 'moz-chunked-arraybuffer';
        xhr.onreadystatechange = this.onReadyStateChange.bind(this);
        xhr.onprogress = this.onProgress.bind(this);
        xhr.onload = this.onLoadEnd.bind(this);
        xhr.onerror = this.onXhrError.bind(this);
        if (!this.config.isLive) {
            var r = range || { from: 0, to: -1 };
            this.range.from = r.from;
            this.range.to = r.to;
            if (keyframePoint) {
                this.needSeek = true;
                this.keyframePoint = keyframePoint;
            }
            var headers = (0, _handleRange2.default)(r).headers;
            for (var i in headers) {
                xhr.setRequestHeader(i, headers[i]);
            }
        }
        xhr.send();
    };
    /**
     * pause
     */
    MozChunkLoader.prototype.pause = function () {
        this.abort();
    };
    /**
     * abort request
     */
    MozChunkLoader.prototype.abort = function () {
        if (this.xhr) {
            this.xhr.onreadystatechange = null;
            this.xhr.onprogress = null;
            this.xhr.onload = null;
            this.xhr.onerror = null;
            this.xhr.abort();
            this.xhr = null;
        }
    };
    /**
     * destroy xhr Object clean cache
     */
    MozChunkLoader.prototype.destroy = function () {
        if (this.xhr) {
            this.abort();
            this.xhr.onreadystatechange = null;
            this.xhr.onprogress = null;
            this.xhr.onload = null;
            this.xhr.onerror = null;
            this.xhr = null;
        }
        this.totalLength = null;
        this.bytesStart = null;
        this.range = {};
    };
    /**
     * xhr onReadyStateChange
     */
    MozChunkLoader.prototype.onReadyStateChange = function (e) {
        var xhr = this.xhr;
        if (xhr.readyState === 2) {
            if (xhr.status < 200 && xhr.status > 299) {
                var info = {
                    from: this.range.from,
                    to: this.range.to,
                    url: this.src,
                    msg: 'http Error: http code ' + xhr.status
                };
                this.emit('error', { errno: _$const.ERRORNO.NET_ERROR, errmsg: info });
            }
        }
    };
    /**
     * xhr onProgress
     */
    MozChunkLoader.prototype.onProgress = function (e) {
        if (!this.totalLength) {
            this.totalLength = e.total;
            if (e.total !== null && e.total !== 0) {
                this.totalLength = e.total;
            }
        }
        var chunk = e.target.response;
        if (this.needSeek) {
            this.needSeek = false;
            this.arrivalDataCallback(chunk, this.bytesStart, this.keyframePoint);
        } else {
            this.arrivalDataCallback(chunk, this.bytesStart);
        }
        this.bytesStart += chunk.byteLength;
    };
    /**
     * xhr onLoadEnd
     */
    MozChunkLoader.prototype.onLoadEnd = function (e) {
        this.emit(this.tag, 'video load end');
    };
    /**
     * xhr onXhrError
     */
    MozChunkLoader.prototype.onXhrError = function (e) {
        var info = {
            from: this.range.from,
            to: this.range.to,
            url: this.src,
            msg: e.constructor.name + ' ' + e.type
        };
        this.emit('error', { errno: _$const.ERRORNO.NET_ERROR, errmsg: info });
    };
    return MozChunkLoader;
}(_mangoHelper.CustEvent);
exports.default = MozChunkLoader;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

function webpackBootstrapFunc (modules) {
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.l = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }

/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // identity function for calling harmony imports with the correct context
/******/  __webpack_require__.i = function(value) { return value; };

/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, {
/******/        configurable: false,
/******/        enumerable: true,
/******/        get: getter
/******/      });
/******/    }
/******/  };

/******/  // define __esModule on exports
/******/  __webpack_require__.r = function(exports) {
/******/    Object.defineProperty(exports, '__esModule', { value: true });
/******/  };

/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };

/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "/";

/******/  // on error function for async loading
/******/  __webpack_require__.oe = function(err) { console.error(err); throw err; };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE)
  return f.default || f // try to call default if defined to also support babel esmodule exports
}

var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+'
var dependencyRegExp = '\\((\/\\*.*?\\*\/)?\s?.*?(' + moduleNameReqExp + ').*?\\)' // additional chars when output.pathinfo is true

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp (str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
}

function getModuleDependencies (sources, module, queueName) {
  var retval = {}
  retval[queueName] = []

  var fnString = module.toString()
  var wrapperSignature = fnString.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/)
  if (!wrapperSignature) return retval
  var webpackRequireName = wrapperSignature[1]

  // main bundle deps
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g')
  var match
  while ((match = re.exec(fnString))) {
    if (match[3] === 'dll-reference') continue
    retval[queueName].push(match[3])
  }

  // dll deps
  re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g')
  while ((match = re.exec(fnString))) {
    if (!sources[match[2]]) {
      retval[queueName].push(match[1])
      sources[match[2]] = __webpack_require__(match[1]).m
    }
    retval[match[2]] = retval[match[2]] || []
    retval[match[2]].push(match[4])
  }

  return retval
}

function hasValuesInQueues (queues) {
  var keys = Object.keys(queues)
  return keys.reduce(function (hasValues, key) {
    return hasValues || queues[key].length > 0
  }, false)
}

function getRequiredModules (sources, moduleId) {
  var modulesQueue = {
    main: [moduleId]
  }
  var requiredModules = {
    main: []
  }
  var seenModules = {
    main: {}
  }

  while (hasValuesInQueues(modulesQueue)) {
    var queues = Object.keys(modulesQueue)
    for (var i = 0; i < queues.length; i++) {
      var queueName = queues[i]
      var queue = modulesQueue[queueName]
      var moduleToCheck = queue.pop()
      seenModules[queueName] = seenModules[queueName] || {}
      if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue
      seenModules[queueName][moduleToCheck] = true
      requiredModules[queueName] = requiredModules[queueName] || []
      requiredModules[queueName].push(moduleToCheck)
      var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName)
      var newModulesKeys = Object.keys(newModules)
      for (var j = 0; j < newModulesKeys.length; j++) {
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || []
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]])
      }
    }
  }

  return requiredModules
}

module.exports = function (moduleId, options) {
  options = options || {}
  var sources = {
    main: __webpack_require__.m
  }

  var requiredModules = options.all ? { main: Object.keys(sources) } : getRequiredModules(sources, moduleId)

  var src = ''

  Object.keys(requiredModules).filter(function (m) { return m !== 'main' }).forEach(function (module) {
    var entryModule = 0
    while (requiredModules[module][entryModule]) {
      entryModule++
    }
    requiredModules[module].push(entryModule)
    sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'
    src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) { return '' + JSON.stringify(id) + ': ' + sources[module][id].toString() }).join(',') + '});\n'
  })

  src = src + '(' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) { return '' + JSON.stringify(id) + ': ' + sources.main[id].toString() }).join(',') + '})(self);'

  var blob = new window.Blob([src], { type: 'text/javascript' })
  if (options.bare) { return blob }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL

  var workerUrl = URL.createObjectURL(blob)
  var worker = new window.Worker(workerUrl)
  worker.objectURL = workerUrl

  return worker
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flvTag = __webpack_require__(20);

var _flvTag2 = _interopRequireDefault(_flvTag);

var _tagdemux = __webpack_require__(5);

var _tagdemux2 = _interopRequireDefault(_tagdemux);

var _error = __webpack_require__(6);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlvParse = /** @class */function () {
    function FlvParse() {
        this.tempUint8 = new Uint8Array();
        this.arrTag = [];
        this.index = 0;
        this.tempArr = [];
        this.stop = false;
        this.offset = 0;
        this.frist = true;
        this._hasAudio = false;
        this._hasVideo = false;
        this._dispose = false;
        this.busy = false;
        this.busyArr = [];
    }
    /**
     * 接受 外部的flv二进制数据
     */
    FlvParse.prototype.setFlv = function (uint8) {
        // this.stop = true;
        this.busy = true;
        this._dispose = false;
        this.stop = false;
        this.arrTag = [];
        this.index = 0;
        this.tempUint8 = uint8;
        if (this.tempUint8.length > 13 && this.tempUint8[0] == 70 && this.tempUint8[1] == 76 && this.tempUint8[2] == 86) {
            this.probe(this.tempUint8.buffer);
            this.read(9); // 略掉9个字节的flv header tag
            this.read(4); // 略掉第一个4字节的 tag size
            this.parse();
            this.frist = false;
            this.busy = false;
            return this.offset;
        } else if (!this.frist) {
            this.parse();
            return this.offset;
        } else {
            return this.offset;
        }
    };
    FlvParse.prototype.probe = function (buffer) {
        var data = new Uint8Array(buffer);
        var mismatch = { match: false };
        if (data[0] !== 0x46 || data[1] !== 0x4C || data[2] !== 0x56 || data[3] !== 0x01) {
            return mismatch;
        }
        var hasAudio = (data[4] & 4) >>> 2 !== 0;
        var hasVideo = (data[4] & 1) !== 0;
        if (!hasAudio && !hasVideo) {
            return mismatch;
        }
        this._hasAudio = _tagdemux2.default._hasAudio = hasAudio;
        this._hasVideo = _tagdemux2.default._hasVideo = hasVideo;
        return {
            match: true,
            hasAudioTrack: hasAudio,
            hasVideoTrack: hasVideo
        };
    };
    FlvParse.prototype.dispose = function () {};
    /**
     * 开始解析
     */
    FlvParse.prototype.parse = function () {
        while (this.index < this.tempUint8.length && !this.stop) {
            this.offset = this.index;
            var t = new _flvTag2.default();
            if (this.tempUint8.length - this.index >= 11) {
                t.tagType = this.read(1)[0]; // 取出tag类型
                t.dataSize = this.read(3); // 取出包体大小
                t.Timestamp = this.read(4); // 取出解码时间
                t.StreamID = this.read(3); // 取出stream id
            } else {
                this.stop = true;
                continue;
            }
            if (t.tagType == 18 || t.tagType == 8 || t.tagType == 9) {} else {
                throw new _error2.default('wrong tagType' + t.tagType);
            }
            if (this.tempUint8.length - this.index >= this.getBodySum(t.dataSize) + 4) {
                t.body = this.read(this.getBodySum(t.dataSize)); // 取出body
                if (t.tagType == 9 && this._hasVideo) {
                    this.arrTag.push(t);
                }
                if (t.tagType == 8 && this._hasAudio) {
                    this.arrTag.push(t);
                }
                if (t.tagType == 18) {
                    if (this.arrTag.length == 0) this.arrTag.push(t);else {
                        // console.log('这是截获的自定义数据',t);
                    }
                }
                t.size = this.read(4);
            } else {
                this.stop = true;
                continue;
            }
            this.offset = this.index;
        }
        return this.offset;
    };
    FlvParse.prototype.read = function (length) {
        // let u8a = new Uint8Array(length);
        // u8a.set(this.tempUint8.subarray(this.index, this.index + length), 0);
        var u8a = this.tempUint8.slice(this.index, this.index + length);
        this.index += length;
        return u8a;
    };
    /**
     * 计算tag包体大小
     */
    FlvParse.prototype.getBodySum = function (arr) {
        var _str = '';
        _str += arr[0].toString(16).length == 1 ? '0' + arr[0].toString(16) : arr[0].toString(16);
        _str += arr[1].toString(16).length == 1 ? '0' + arr[1].toString(16) : arr[1].toString(16);
        _str += arr[2].toString(16).length == 1 ? '0' + arr[2].toString(16) : arr[2].toString(16);
        return parseInt(_str, 16);
    };
    return FlvParse;
}(); /* eslint-disable */
exports.default = FlvParse;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable */
var FlvTag = /** @class */function () {
    function FlvTag() {
        this.tagType = -1;
        this.dataSize = -1;
        this.Timestamp = -1;
        this.StreamID = -1;
        this.body = -1;
        this.time = -1;
        this.arr = [];
        this.size = -1;
    }
    FlvTag.prototype.getTime = function () {
        // this.Timestamp.pop();
        this.arr = [];
        for (var i = 0; i < this.Timestamp.length; i++) {
            this.arr.push(this.Timestamp[i].toString(16).length == 1 ? '0' + this.Timestamp[i].toString(16) : this.Timestamp[i].toString(16));
        }
        this.arr.pop();
        var time = this.arr.join('');
        this.time = parseInt(time, 16);
        return parseInt(time, 16);
    };
    return FlvTag;
}();
exports.default = FlvTag;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _decodeUTF = __webpack_require__(22);

var _decodeUTF2 = _interopRequireDefault(_decodeUTF);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var le = null; /* eslint-disable */

var flvDemux = /** @class */function () {
    function flvDemux() {}
    flvDemux.parseObject = function (arrayBuffer, dataOffset, dataSize) {
        var name = flvDemux.parseString(arrayBuffer, dataOffset, dataSize);
        var value = flvDemux.parseScript(arrayBuffer, dataOffset + name.size);
        var isObjectEnd = value.objectEnd;
        return {
            data: {
                name: name.data,
                value: value.data
            },
            size: value.size,
            objectEnd: isObjectEnd
        };
    };
    flvDemux.parseVariable = function (arrayBuffer, dataOffset, dataSize) {
        return flvDemux.parseObject(arrayBuffer, dataOffset, dataSize);
    };
    flvDemux.parseLongString = function (arrayBuffer, dataOffset, dataSize) {
        var v = new DataView(arrayBuffer, dataOffset);
        var length = v.getUint32(0, !le);
        var str;
        if (length > 0) {
            str = (0, _decodeUTF2.default)(new Uint8Array(arrayBuffer, dataOffset + 4, length));
        } else {
            str = '';
        }
        return {
            data: str,
            size: 4 + length
        };
    };
    flvDemux.parseDate = function (arrayBuffer, dataOffset, dataSize) {
        var v = new DataView(arrayBuffer, dataOffset);
        var timestamp = v.getFloat64(0, !le);
        var localTimeOffset = v.getInt16(8, !le);
        timestamp += localTimeOffset * 60 * 1000; // get UTC time
        return {
            data: new Date(timestamp),
            size: 8 + 2
        };
    };
    flvDemux.parseString = function (arrayBuffer, dataOffset, dataSize) {
        var v = new DataView(arrayBuffer, dataOffset);
        var length = v.getUint16(0, !le);
        var str;
        if (length > 0) {
            str = (0, _decodeUTF2.default)(new Uint8Array(arrayBuffer, dataOffset + 2, length));
        } else {
            str = '';
        }
        return {
            data: str,
            size: 2 + length
        };
    };
    /**
     * 解析metadata
     */
    flvDemux.parseMetadata = function (arr) {
        le = function () {
            var buf = new ArrayBuffer(2);
            new DataView(buf).setInt16(0, 256, true); // little-endian write
            return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
        }();
        var name = flvDemux.parseScript(arr, 0);
        var value = flvDemux.parseScript(arr, name.size, arr.length - name.size);
        // return {}
        var data = {};
        data[name.data] = value.data;
        return data;
    };
    flvDemux.parseScript = function (arr, offset, dataSize) {
        var dataOffset = offset;
        var object = {};
        var uint8 = new Uint8Array(arr);
        var buffer = uint8.buffer;
        var dv = new DataView(buffer, 0, dataSize);
        var value = null;
        var objectEnd = false;
        var type = dv.getUint8(dataOffset);
        dataOffset += 1;
        switch (type) {
            case 0:
                // Number(Double) type
                value = dv.getFloat64(dataOffset, !le);
                dataOffset += 8;
                break;
            case 1:
                {
                    // Boolean type
                    var b = dv.getUint8(dataOffset);
                    value = !!b;
                    dataOffset += 1;
                    break;
                }
            case 2:
                {
                    // String type
                    // dataOffset += 1;
                    var amfstr = flvDemux.parseString(buffer, dataOffset);
                    value = amfstr.data;
                    dataOffset += amfstr.size;
                    break;
                }
            case 3:
                {
                    // Object(s) type
                    value = {};
                    var terminal = 0; // workaround for malformed Objects which has missing ScriptDataObjectEnd
                    if ((dv.getUint32(dataSize - 4, !le) & 0x00FFFFFF) === 9) {
                        terminal = 3;
                    }
                    while (dataOffset < dataSize - 4) {
                        // 4 === type(UI8) + ScriptDataObjectEnd(UI24)
                        var amfobj = flvDemux.parseObject(buffer, dataOffset, dataSize - offset - terminal);
                        if (amfobj.objectEnd) {
                            break;
                        }
                        value[amfobj.data.name] = amfobj.data.value;
                        // dataOffset += amfobj.size;
                        dataOffset = amfobj.size;
                    }
                    if (dataOffset <= dataSize - 3) {
                        var marker = v.getUint32(dataOffset - 1, !le) & 0x00FFFFFF;
                        if (marker === 9) {
                            dataOffset += 3;
                        }
                    }
                    break;
                }
            case 8:
                {
                    // ECMA array type (Mixed array)
                    value = {};
                    // dataOffset += 1;
                    dataOffset += 4; // ECMAArrayLength(UI32)
                    var terminal = 0; // workaround for malformed MixedArrays which has missing ScriptDataObjectEnd
                    if ((dv.getUint32(dataSize - 4, !le) & 0x00FFFFFF) === 9) {
                        terminal = 3;
                    }
                    while (dataOffset < dataSize - 8) {
                        // 8 === type(UI8) + ECMAArrayLength(UI32) + ScriptDataVariableEnd(UI24)
                        var amfvar = flvDemux.parseVariable(buffer, dataOffset);
                        if (amfvar.objectEnd) {
                            break;
                        }
                        value[amfvar.data.name] = amfvar.data.value;
                        dataOffset = amfvar.size;
                    }
                    if (dataOffset <= dataSize - 3) {
                        var marker = dv.getUint32(dataOffset - 1, !le) & 0x00FFFFFF;
                        if (marker === 9) {
                            dataOffset += 3;
                        }
                    }
                    break;
                }
            case 9:
                // ScriptDataObjectEnd
                value = undefined;
                dataOffset = 1;
                objectEnd = true;
                break;
            case 10:
                {
                    // Strict array type
                    // ScriptDataValue[n]. NOTE: according to video_file_format_spec_v10_1.pdf
                    value = [];
                    var strictArrayLength = dv.getUint32(dataOffset, !le);
                    dataOffset += 4;
                    for (var i = 0; i < strictArrayLength; i++) {
                        var val = flvDemux.parseScript(buffer, dataOffset);
                        value.push(val.data);
                        dataOffset = val.size;
                    }
                    break;
                }
            case 11:
                {
                    // Date type
                    var date = flvDemux.parseDate(buffer, dataOffset + 1, dataSize - 1);
                    value = date.data;
                    dataOffset += date.size;
                    break;
                }
            case 12:
                {
                    // Long string type
                    var amfLongStr = flvDemux.parseString(buffer, dataOffset + 1, dataSize - 1);
                    value = amfLongStr.data;
                    dataOffset += amfLongStr.size;
                    break;
                }
            default:
                // ignore and skip
                dataOffset = dataSize;
                console.log('AMF', 'Unsupported AMF value type ' + type);
        }
        return {
            data: value,
            size: dataOffset
        };
    };
    return flvDemux;
}();
exports.default = flvDemux;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable */
function decodeUTF8(uint8array) {
    var out = [];
    var input = uint8array;
    var i = 0;
    var length = uint8array.length;
    while (i < length) {
        if (input[i] < 0x80) {
            out.push(String.fromCharCode(input[i]));
            ++i;
            continue;
        } else if (input[i] < 0xC0) {
            // fallthrough
        } else if (input[i] < 0xE0) {
            if (checkContinuation(input, i, 1)) {
                var ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
                if (ucs4 >= 0x80) {
                    out.push(String.fromCharCode(ucs4 & 0xFFFF));
                    i += 2;
                    continue;
                }
            }
        } else if (input[i] < 0xF0) {
            if (checkContinuation(input, i, 2)) {
                var ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
                if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
                    out.push(String.fromCharCode(ucs4 & 0xFFFF));
                    i += 3;
                    continue;
                }
            }
        } else if (input[i] < 0xF8) {
            if (checkContinuation(input, i, 3)) {
                var ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
                if (ucs4 > 0x10000 && ucs4 < 0x110000) {
                    ucs4 -= 0x10000;
                    out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
                    out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
                    i += 4;
                    continue;
                }
            }
        }
        out.push(String.fromCharCode(0xFFFD));
        ++i;
    }
    return out.join('');
}
function checkContinuation(uint8array, start, checkLength) {
    var array = uint8array;
    if (start + checkLength < array.length) {
        while (checkLength--) {
            if ((array[++start] & 0xC0) !== 0x80) return false;
        }
        return true;
    } else {
        return false;
    }
}
exports.default = decodeUTF8;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable */
var MediaInfo = /** @class */function () {
    function MediaInfo() {
        this.mimeType = null;
        this.duration = null;
        this.hasAudio = null;
        this.hasVideo = null;
        this.audioCodec = null;
        this.videoCodec = null;
        this.audioDataRate = null;
        this.videoDataRate = null;
        this.audioSampleRate = null;
        this.audioChannelCount = null;
        this.width = null;
        this.height = null;
        this.fps = null;
        this.profile = null;
        this.level = null;
        this.chromaFormat = null;
        this.sarNum = null;
        this.sarDen = null;
        this.metadata = null;
        this.segments = null; // MediaInfo[]
        this.segmentCount = null;
        this.hasKeyframesIndex = null;
        this.keyframesIndex = null;
    }
    MediaInfo.prototype.isComplete = function () {
        var audioInfoComplete = this.hasAudio === false || this.hasAudio === true && this.audioCodec != null && this.audioSampleRate != null && this.audioChannelCount != null;
        var videoInfoComplete = this.hasVideo === false || this.hasVideo === true && this.videoCodec != null && this.width != null && this.height != null && this.fps != null && this.profile != null && this.level != null && this.chromaFormat != null && this.sarNum != null && this.sarDen != null;
        // keyframesIndex may not be present
        return this.mimeType != null && this.duration != null && this.metadata != null && this.hasKeyframesIndex != null && audioInfoComplete && videoInfoComplete;
    };
    MediaInfo.prototype.isSeekable = function () {
        return this.hasKeyframesIndex === true;
    };
    return MediaInfo;
}();
exports.default = MediaInfo;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _expGolomb = __webpack_require__(25);

var _expGolomb2 = _interopRequireDefault(_expGolomb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPSParser = /** @class */function () {
    function SPSParser() {}
    SPSParser._ebsp2rbsp = function (uint8array) {
        var src = uint8array;
        var src_length = src.byteLength;
        var dst = new Uint8Array(src_length);
        var dst_idx = 0;
        for (var i = 0; i < src_length; i++) {
            if (i >= 2) {
                // Unescape: Skip 0x03 after 00 00
                if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
                    continue;
                }
            }
            dst[dst_idx] = src[i];
            dst_idx++;
        }
        return new Uint8Array(dst.buffer, 0, dst_idx);
    };
    SPSParser.parseSPS = function (uint8array) {
        var rbsp = SPSParser._ebsp2rbsp(uint8array);
        var gb = new _expGolomb2.default(rbsp);
        gb.readByte();
        var profile_idc = gb.readByte(); // profile_idc
        gb.readByte(); // constraint_set_flags[5] + reserved_zero[3]
        var level_idc = gb.readByte(); // level_idc
        gb.readUEG(); // seq_parameter_set_id
        var profile_string = SPSParser.getProfileString(profile_idc);
        var level_string = SPSParser.getLevelString(level_idc);
        var chroma_format_idc = 1;
        var chroma_format = 420;
        var chroma_format_table = [0, 420, 422, 444];
        var bit_depth = 8;
        if (profile_idc === 100 || profile_idc === 110 || profile_idc === 122 || profile_idc === 244 || profile_idc === 44 || profile_idc === 83 || profile_idc === 86 || profile_idc === 118 || profile_idc === 128 || profile_idc === 138 || profile_idc === 144) {
            chroma_format_idc = gb.readUEG();
            if (chroma_format_idc === 3) {
                gb.readBits(1); // separate_colour_plane_flag
            }
            if (chroma_format_idc <= 3) {
                chroma_format = chroma_format_table[chroma_format_idc];
            }
            bit_depth = gb.readUEG() + 8; // bit_depth_luma_minus8
            gb.readUEG(); // bit_depth_chroma_minus8
            gb.readBits(1); // qpprime_y_zero_transform_bypass_flag
            if (gb.readBool()) {
                // seq_scaling_matrix_present_flag
                var scaling_list_count = chroma_format_idc !== 3 ? 8 : 12;
                for (var i = 0; i < scaling_list_count; i++) {
                    if (gb.readBool()) {
                        // seq_scaling_list_present_flag
                        if (i < 6) {
                            SPSParser._skipScalingList(gb, 16);
                        } else {
                            SPSParser._skipScalingList(gb, 64);
                        }
                    }
                }
            }
        }
        gb.readUEG(); // log2_max_frame_num_minus4
        var pic_order_cnt_type = gb.readUEG();
        if (pic_order_cnt_type === 0) {
            gb.readUEG(); // log2_max_pic_order_cnt_lsb_minus_4
        } else if (pic_order_cnt_type === 1) {
            gb.readBits(1); // delta_pic_order_always_zero_flag
            gb.readSEG(); // offset_for_non_ref_pic
            gb.readSEG(); // offset_for_top_to_bottom_field
            var num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
            for (var i = 0; i < num_ref_frames_in_pic_order_cnt_cycle; i++) {
                gb.readSEG(); // offset_for_ref_frame
            }
        }
        gb.readUEG(); // max_num_ref_frames
        gb.readBits(1); // gaps_in_frame_num_value_allowed_flag
        var pic_width_in_mbs_minus1 = gb.readUEG();
        var pic_height_in_map_units_minus1 = gb.readUEG();
        var frame_mbs_only_flag = gb.readBits(1);
        if (frame_mbs_only_flag === 0) {
            gb.readBits(1); // mb_adaptive_frame_field_flag
        }
        gb.readBits(1); // direct_8x8_inference_flag
        var frame_crop_left_offset = 0;
        var frame_crop_right_offset = 0;
        var frame_crop_top_offset = 0;
        var frame_crop_bottom_offset = 0;
        var frame_cropping_flag = gb.readBool();
        if (frame_cropping_flag) {
            frame_crop_left_offset = gb.readUEG();
            frame_crop_right_offset = gb.readUEG();
            frame_crop_top_offset = gb.readUEG();
            frame_crop_bottom_offset = gb.readUEG();
        }
        var sar_width = 1,
            sar_height = 1;
        var fps = 0,
            fps_fixed = true,
            fps_num = 0,
            fps_den = 0;
        var vui_parameters_present_flag = gb.readBool();
        if (vui_parameters_present_flag) {
            if (gb.readBool()) {
                // aspect_ratio_info_present_flag
                var aspect_ratio_idc = gb.readByte();
                var sar_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
                var sar_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
                if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
                    sar_width = sar_w_table[aspect_ratio_idc - 1];
                    sar_height = sar_h_table[aspect_ratio_idc - 1];
                } else if (aspect_ratio_idc === 255) {
                    sar_width = gb.readByte() << 8 | gb.readByte();
                    sar_height = gb.readByte() << 8 | gb.readByte();
                }
            }
            if (gb.readBool()) {
                // overscan_info_present_flag
                gb.readBool(); // overscan_appropriate_flag
            }
            if (gb.readBool()) {
                // video_signal_type_present_flag
                gb.readBits(4); // video_format & video_full_range_flag
                if (gb.readBool()) {
                    // colour_description_present_flag
                    gb.readBits(24); // colour_primaries & transfer_characteristics & matrix_coefficients
                }
            }
            if (gb.readBool()) {
                // chroma_loc_info_present_flag
                gb.readUEG(); // chroma_sample_loc_type_top_field
                gb.readUEG(); // chroma_sample_loc_type_bottom_field
            }
            if (gb.readBool()) {
                // timing_info_present_flag
                var num_units_in_tick = gb.readBits(32);
                var time_scale = gb.readBits(32);
                fps_fixed = gb.readBool(); // fixed_frame_rate_flag
                fps_num = time_scale;
                fps_den = num_units_in_tick * 2;
                fps = fps_num / fps_den;
            }
        }
        var sarScale = 1;
        if (sar_width !== 1 || sar_height !== 1) {
            sarScale = sar_width / sar_height;
        }
        var crop_unit_x = 0,
            crop_unit_y = 0;
        if (chroma_format_idc === 0) {
            crop_unit_x = 1;
            crop_unit_y = 2 - frame_mbs_only_flag;
        } else {
            var sub_wc = chroma_format_idc === 3 ? 1 : 2;
            var sub_hc = chroma_format_idc === 1 ? 2 : 1;
            crop_unit_x = sub_wc;
            crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
        }
        var codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
        var codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);
        codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
        codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;
        var present_width = Math.ceil(codec_width * sarScale);
        gb.destroy();
        gb = null;
        return {
            profile_string: profile_string,
            level_string: level_string,
            bit_depth: bit_depth,
            chroma_format: chroma_format,
            chroma_format_string: SPSParser.getChromaFormatString(chroma_format),
            frame_rate: {
                fixed: fps_fixed,
                fps: fps,
                fps_den: fps_den,
                fps_num: fps_num
            },
            sar_ratio: {
                width: sar_width,
                height: sar_height
            },
            codec_size: {
                width: codec_width,
                height: codec_height
            },
            present_size: {
                width: present_width,
                height: codec_height
            }
        };
    };
    SPSParser._skipScalingList = function (gb, count) {
        var last_scale = 8,
            next_scale = 8;
        var delta_scale = 0;
        for (var i = 0; i < count; i++) {
            if (next_scale !== 0) {
                delta_scale = gb.readSEG();
                next_scale = (last_scale + delta_scale + 256) % 256;
            }
            last_scale = next_scale === 0 ? last_scale : next_scale;
        }
    };
    SPSParser.getProfileString = function (profile_idc) {
        switch (profile_idc) {
            case 66:
                return 'Baseline';
            case 77:
                return 'Main';
            case 88:
                return 'Extended';
            case 100:
                return 'High';
            case 110:
                return 'High10';
            case 122:
                return 'High422';
            case 244:
                return 'High444';
            default:
                return 'Unknown';
        }
    };
    SPSParser.getLevelString = function (level_idc) {
        return (level_idc / 10).toFixed(1);
    };
    SPSParser.getChromaFormatString = function (chroma) {
        switch (chroma) {
            case 420:
                return '4:2:0';
            case 422:
                return '4:2:2';
            case 444:
                return '4:4:4';
            default:
                return 'Unknown';
        }
    };
    return SPSParser;
}(); /*
      * Copyright (C) 2016 Bilibili. All Rights Reserved.
      *
      * @author zheng qian <xqq@xqq.im>
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
/* eslint-disable */
exports.default = SPSParser;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable */
// Exponential-Golomb buffer decoder
var ExpGolomb = /** @class */function () {
    function ExpGolomb(uint8array) {
        this.TAG = this.constructor.name;
        this._buffer = uint8array;
        this._buffer_index = 0;
        this._total_bytes = uint8array.byteLength;
        this._total_bits = uint8array.byteLength * 8;
        this._current_word = 0;
        this._current_word_bits_left = 0;
    }
    ExpGolomb.prototype.destroy = function () {
        this._buffer = null;
    };
    ExpGolomb.prototype._fillCurrentWord = function () {
        var buffer_bytes_left = this._total_bytes - this._buffer_index;
        if (buffer_bytes_left <= 0) {
            throw new IllegalStateException('ExpGolomb: _fillCurrentWord() but no bytes available');
        }
        var bytes_read = Math.min(4, buffer_bytes_left);
        var word = new Uint8Array(4);
        word.set(this._buffer.subarray(this._buffer_index, this._buffer_index + bytes_read));
        this._current_word = new DataView(word.buffer).getUint32(0, false);
        this._buffer_index += bytes_read;
        this._current_word_bits_left = bytes_read * 8;
    };
    ExpGolomb.prototype.readBits = function (bits) {
        if (bits > 32) {
            throw new InvalidArgumentException('ExpGolomb: readBits() bits exceeded max 32bits!');
        }
        if (bits <= this._current_word_bits_left) {
            var result_1 = this._current_word >>> 32 - bits;
            this._current_word <<= bits;
            this._current_word_bits_left -= bits;
            return result_1;
        }
        var result = this._current_word_bits_left ? this._current_word : 0;
        result = result >>> 32 - this._current_word_bits_left;
        var bits_need_left = bits - this._current_word_bits_left;
        this._fillCurrentWord();
        var bits_read_next = Math.min(bits_need_left, this._current_word_bits_left);
        var result2 = this._current_word >>> 32 - bits_read_next;
        this._current_word <<= bits_read_next;
        this._current_word_bits_left -= bits_read_next;
        result = result << bits_read_next | result2;
        return result;
    };
    ExpGolomb.prototype.readBool = function () {
        return this.readBits(1) === 1;
    };
    ExpGolomb.prototype.readByte = function () {
        return this.readBits(8);
    };
    ExpGolomb.prototype._skipLeadingZero = function () {
        var zero_count;
        for (zero_count = 0; zero_count < this._current_word_bits_left; zero_count++) {
            if ((this._current_word & 0x80000000 >>> zero_count) !== 0) {
                this._current_word <<= zero_count;
                this._current_word_bits_left -= zero_count;
                return zero_count;
            }
        }
        this._fillCurrentWord();
        return zero_count + this._skipLeadingZero();
    };
    ExpGolomb.prototype.readUEG = function () {
        var leading_zeros = this._skipLeadingZero();
        return this.readBits(leading_zeros + 1) - 1;
    };
    ExpGolomb.prototype.readSEG = function () {
        var value = this.readUEG();
        if (value & 0x01) {
            return value + 1 >>> 1;
        } else {
            return -1 * (value >>> 1);
        }
    };
    return ExpGolomb;
}();
exports.default = ExpGolomb;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _aacSilent = __webpack_require__(27);

var _aacSilent2 = _interopRequireDefault(_aacSilent);

var _browser = __webpack_require__(28);

var _browser2 = _interopRequireDefault(_browser);

var _mp4remux = __webpack_require__(7);

var _mp4remux2 = _interopRequireDefault(_mp4remux);

var _mediaSegmentInfo = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Fragmented mp4 remuxer
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// import Log from '../utils/logger.js';
var MP4Remuxer = /** @class */function () {
    function MP4Remuxer(config) {
        this.TAG = 'MP4Remuxer';
        this._config = config;
        this._isLive = config.isLive === true ? true : false;
        this._dtsBase = -1;
        this._dtsBaseInited = false;
        this._audioDtsBase = Infinity;
        this._videoDtsBase = Infinity;
        this._audioNextDts = undefined;
        this._videoNextDts = undefined;
        this._audioMeta = null;
        this._videoMeta = null;
        this._audioSegmentInfoList = new _mediaSegmentInfo.MediaSegmentInfoList('audio');
        this._videoSegmentInfoList = new _mediaSegmentInfo.MediaSegmentInfoList('video');
        this._onInitSegment = null;
        this._onMediaSegment = null;
        // Workaround for chrome < 50: Always force first sample as a Random Access Point in media segment
        // see https://bugs.chromium.org/p/chromium/issues/detail?id=229412
        this._forceFirstIDR = _browser2.default.chrome && (_browser2.default.version.major < 50 || _browser2.default.version.major === 50 && _browser2.default.version.build < 2661) ? true : false;
        // Workaround for IE11/Edge: Fill silent aac frame after keyframe-seeking
        // Make audio beginDts equals with video beginDts, in order to fix seek freeze
        this._fillSilentAfterSeek = _browser2.default.msedge || _browser2.default.msie;
        // While only FireFox supports 'audio/mp4, codecs="mp3"', use 'audio/mpeg' for chrome, safari, ...
        this._mp3UseMpegAudio = !_browser2.default.firefox;
    }
    MP4Remuxer.prototype.destroy = function () {
        this._dtsBase = -1;
        this._dtsBaseInited = false;
        this._audioMeta = null;
        this._videoMeta = null;
        this._audioSegmentInfoList.clear();
        this._audioSegmentInfoList = null;
        this._videoSegmentInfoList.clear();
        this._videoSegmentInfoList = null;
        this._onInitSegment = null;
        this._onMediaSegment = null;
    };
    MP4Remuxer.prototype.bindDataSource = function (producer) {
        producer.onDataAvailable = this.remux.bind(this);
        producer.onTrackMetadata = this._onTrackMetadataReceived.bind(this);
        return this;
    };
    Object.defineProperty(MP4Remuxer.prototype, "onInitSegment", {
        /* prototype: function onInitSegment(type: string, initSegment: ArrayBuffer): void
           InitSegment: {
               type: string,
               data: ArrayBuffer,
               codec: string,
               container: string
           }
        */
        get: function get() {
            return this._onInitSegment;
        },
        set: function set(callback) {
            this._onInitSegment = callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MP4Remuxer.prototype, "onMediaSegment", {
        /* prototype: function onMediaSegment(type: string, mediaSegment: MediaSegment): void
           MediaSegment: {
               type: string,
               data: ArrayBuffer,
               sampleCount: int32
               info: MediaSegmentInfo
           }
        */
        get: function get() {
            return this._onMediaSegment;
        },
        set: function set(callback) {
            this._onMediaSegment = callback;
        },
        enumerable: true,
        configurable: true
    });
    MP4Remuxer.prototype.insertDiscontinuity = function () {
        this._audioNextDts = this._videoNextDts = undefined;
    };
    MP4Remuxer.prototype.seek = function (originalDts) {
        this._videoSegmentInfoList.clear();
        this._audioSegmentInfoList.clear();
    };
    MP4Remuxer.prototype.remux = function (audioTrack, videoTrack) {
        if (!this._onMediaSegment) {
            throw new IllegalStateException('MP4Remuxer: onMediaSegment callback must be specificed!');
        }
        if (!this._dtsBaseInited) {
            this._calculateDtsBase(audioTrack, videoTrack);
        }
        this._remuxVideo(videoTrack);
        this._remuxAudio(audioTrack);
    };
    MP4Remuxer.prototype._onTrackMetadataReceived = function (type, metadata) {
        var metabox = null;
        var container = 'mp4';
        var codec = metadata.codec;
        if (type === 'audio') {
            this._audioMeta = metadata;
            if (metadata.codec === 'mp3' && this._mp3UseMpegAudio) {
                // 'audio/mpeg' for MP3 audio track
                container = 'mpeg';
                codec = '';
                metabox = new Uint8Array();
            } else {
                // 'audio/mp4, codecs="codec"'
                metabox = _mp4remux2.default.generateInitSegment(metadata);
            }
        } else if (type === 'video') {
            this._videoMeta = metadata;
            metabox = _mp4remux2.default.generateInitSegment(metadata);
        } else {
            return;
        }
        // dispatch metabox (Initialization Segment)
        if (!this._onInitSegment) {
            throw new IllegalStateException('MP4Remuxer: onInitSegment callback must be specified!');
        }
        this._onInitSegment(type, {
            type: type,
            data: metabox.buffer,
            codec: codec,
            container: type + "/" + container,
            mediaDuration: metadata.duration // in timescale 1000 (milliseconds)
        });
    };
    MP4Remuxer.prototype._calculateDtsBase = function (audioTrack, videoTrack) {
        if (this._dtsBaseInited) {
            return;
        }
        if (audioTrack.samples && audioTrack.samples.length) {
            this._audioDtsBase = audioTrack.samples[0].dts;
        }
        if (videoTrack.samples && videoTrack.samples.length) {
            this._videoDtsBase = videoTrack.samples[0].dts;
        }
        this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase);
        this._dtsBaseInited = true;
    };
    MP4Remuxer.prototype._remuxAudio = function (audioTrack) {
        if (this._audioMeta == null) {
            return;
        }
        var track = audioTrack;
        var samples = track.samples;
        var dtsCorrection = undefined;
        var firstDts = -1,
            lastDts = -1,
            lastPts = -1;
        var refSampleDuration = this._audioMeta.refSampleDuration;
        var mpegRawTrack = this._audioMeta.codec === 'mp3' && this._mp3UseMpegAudio;
        var firstSegmentAfterSeek = this._dtsBaseInited && this._audioNextDts === undefined;
        var insertPrefixSilentFrame = false;
        if (!samples || samples.length <= 1) {
            return;
        }
        var offset = 0;
        var mdatbox = null;
        var mdatBytes = 0;
        // calculate initial mdat size
        if (mpegRawTrack) {
            // for raw mpeg buffer
            offset = 0;
            mdatBytes = track.length;
        } else {
            // for fmp4 mdat box
            offset = 8; // size + type
            mdatBytes = 8 + track.length;
        }
        var firstSampleOriginalDts = samples[0].dts - this._dtsBase;
        // calculate dtsCorrection
        if (this._audioNextDts) {
            dtsCorrection = firstSampleOriginalDts - this._audioNextDts;
        } else {
            // this._audioNextDts == undefined
            if (this._audioSegmentInfoList.isEmpty()) {
                dtsCorrection = 0;
                if (this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty()) {
                    if (this._audioMeta.originalCodec !== 'mp3') {
                        insertPrefixSilentFrame = true;
                    }
                }
            } else {
                var lastSample = this._audioSegmentInfoList.getLastSampleBefore(firstSampleOriginalDts);
                if (lastSample != null) {
                    var distance = firstSampleOriginalDts - (lastSample.originalDts + lastSample.duration);
                    if (distance <= 3) {
                        distance = 0;
                    }
                    var expectedDts = lastSample.dts + lastSample.duration + distance;
                    dtsCorrection = firstSampleOriginalDts - expectedDts;
                } else {
                    // lastSample == null, cannot found
                    dtsCorrection = 0;
                }
            }
        }
        if (insertPrefixSilentFrame) {
            // align audio segment beginDts to match with current video segment's beginDts
            var firstSampleDts = firstSampleOriginalDts - dtsCorrection;
            var videoSegment = this._videoSegmentInfoList.getLastSegmentBefore(firstSampleOriginalDts);
            if (videoSegment != null && videoSegment.beginDts < firstSampleDts) {
                var silentUnit = _aacSilent2.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                if (silentUnit) {
                    var dts = videoSegment.beginDts;
                    var silentFrameDuration = firstSampleDts - videoSegment.beginDts;
                    Log.v(this.TAG, "InsertPrefixSilentAudio: dts: " + dts + ", duration: " + silentFrameDuration);
                    samples.unshift({ unit: silentUnit, dts: dts, pts: dts });
                    mdatBytes += silentUnit.byteLength;
                } // silentUnit == null: Cannot generate, skip
            } else {
                insertPrefixSilentFrame = false;
            }
        }
        var mp4Samples = [];
        dtsCorrection = 0;
        // Correct dts for each sample, and calculate sample duration. Then output to mp4Samples
        for (var i = 0; i + 1 < samples.length; i++) {
            var sample = samples[i];
            var unit = sample.unit;
            var originalDts = sample.dts - this._dtsBase;
            var dts = originalDts - dtsCorrection;
            if (firstDts === -1) {
                firstDts = dts;
            }
            var sampleDuration = 0;
            if (i !== samples.length - 1) {
                var nextDts = samples[i + 1].dts - this._dtsBase - dtsCorrection;
                sampleDuration = nextDts - dts;
            } else {
                // the last sample
                if (mp4Samples.length >= 1) {
                    // use second last sample duration
                    sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
                } else {
                    // the only one sample, use reference sample duration
                    sampleDuration = Math.floor(refSampleDuration);
                }
            }
            var needFillSilentFrames = false;
            var silentFrames = null;
            // // Silent frame generation, if large timestamp gap detected
            // if (sampleDuration > refSampleDuration * 1.5 && this._audioMeta.codec !== 'mp3') {
            //     // We need to insert silent frames to fill timestamp gap
            //     needFillSilentFrames = true;
            //     let delta = Math.abs(sampleDuration - refSampleDuration);
            //     let frameCount = Math.ceil(delta / refSampleDuration);
            //     let currentDts = dts + refSampleDuration;  // Notice: in float
            //     // console.log(this.TAG, 'Large audio timestamp gap detected, may cause AV sync to drift. ' +
            //     //                 'Silent frames will be generated to avoid unsync.\n' +
            //     //                 `dts: ${dts + sampleDuration} ms, expected: ${dts + Math.round(refSampleDuration)} ms, ` +
            //     //                 `delta: ${Math.round(delta)} ms, generate: ${frameCount} frames`);
            //     let silentUnit = AAC.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
            //     if (silentUnit == null) {
            //         // console.log(this.TAG, 'Unable to generate silent frame for ' +
            //         //                 `${this._audioMeta.originalCodec} with ${this._audioMeta.channelCount} channels, repeat last frame`);
            //         // Repeat last frame
            //         silentUnit = unit;
            //     }
            //     silentFrames = [];
            //     for (let j = 0; j < frameCount; j++) {
            //         let intDts = Math.round(currentDts);  // round to integer
            //         if (silentFrames.length > 0) {
            //             // Set previous frame sample duration
            //             let previousFrame = silentFrames[silentFrames.length - 1];
            //             previousFrame.duration = intDts - previousFrame.dts;
            //         }
            //         let frame = {
            //             dts: intDts,
            //             pts: intDts,
            //             cts: 0,
            //             unit: silentUnit,
            //             size: silentUnit.byteLength,
            //             duration: 0,  // wait for next sample
            //             originalDts: originalDts,
            //             flags: {
            //                 isLeading: 0,
            //                 dependsOn: 1,
            //                 isDependedOn: 0,
            //                 hasRedundancy: 0
            //             }
            //         };
            //         silentFrames.push(frame);
            //         mdatBytes += unit.byteLength;
            //         currentDts += refSampleDuration;
            //     }
            //     // last frame: align end time to next frame dts
            //     let lastFrame = silentFrames[silentFrames.length - 1];
            //     lastFrame.duration = dts + sampleDuration - lastFrame.dts;
            //     // silentFrames.forEach((frame) => {
            //     //     Log.w(this.TAG, `SilentAudio: dts: ${frame.dts}, duration: ${frame.duration}`);
            //     // });
            //     // Set correct sample duration for current frame
            //     sampleDuration = Math.round(refSampleDuration);
            // }
            mp4Samples.push({
                dts: dts,
                pts: dts,
                cts: 0,
                unit: sample.unit,
                size: sample.unit.byteLength,
                duration: sampleDuration,
                originalDts: originalDts,
                flags: {
                    isLeading: 0,
                    dependsOn: 1,
                    isDependedOn: 0,
                    hasRedundancy: 0
                }
            });
            if (needFillSilentFrames) {
                // Silent frames should be inserted after wrong-duration frame
                mp4Samples.push.apply(mp4Samples, silentFrames);
            }
        }
        // allocate mdatbox
        if (mpegRawTrack) {
            // allocate for raw mpeg buffer
            mdatbox = new Uint8Array(mdatBytes);
        } else {
            // allocate for fmp4 mdat box
            var offset_1 = 8;
            var mdatBytes_1 = 8; // + videoTrack.length;
            for (var i = 0; i < mp4Samples.length; ++i) {
                mdatBytes_1 += mp4Samples[i].size;
            }
            mdatbox = new Uint8Array(mdatBytes_1);
            // size field
            mdatbox[0] = mdatBytes_1 >>> 24 & 0xFF;
            mdatbox[1] = mdatBytes_1 >>> 16 & 0xFF;
            mdatbox[2] = mdatBytes_1 >>> 8 & 0xFF;
            mdatbox[3] = mdatBytes_1 & 0xFF;
            // type field (fourCC)
            mdatbox.set(_mp4remux2.default.types.mdat, 4);
        }
        // Write samples into mdatbox
        for (var i = 0; i < mp4Samples.length; i++) {
            var unit = mp4Samples[i].unit;
            mdatbox.set(unit, offset);
            offset += unit.byteLength;
        }
        var latest = mp4Samples[mp4Samples.length - 1];
        lastDts = latest.dts + latest.duration;
        // console.log(latest.dts,latest.originalDts);
        // lastDts = latest.originalDts + latest.duration;
        this._audioNextDts = lastDts;
        // console.log('dtsCorrection',dtsCorrection,'firstSampleOriginalDts',firstSampleOriginalDts,'_dtsBase',this._dtsBase,'this._audioNextDts',this._audioNextDts,'latest.dts',latest.dts,latest.originalDts)
        // fill media segment info & add to info list
        var info = new _mediaSegmentInfo.MediaSegmentInfo();
        info.beginDts = firstDts;
        info.endDts = lastDts;
        info.beginPts = firstDts;
        info.endPts = lastDts;
        info.originalBeginDts = mp4Samples[0].originalDts;
        info.originalEndDts = latest.originalDts + latest.duration;
        info.firstSample = new _mediaSegmentInfo.SampleInfo(mp4Samples[0].dts, mp4Samples[0].pts, mp4Samples[0].duration, mp4Samples[0].originalDts, false);
        info.lastSample = new _mediaSegmentInfo.SampleInfo(latest.dts, latest.pts, latest.duration, latest.originalDts, false);
        if (!this._isLive) {
            this._audioSegmentInfoList.append(info);
        }
        track.samples = mp4Samples;
        track.sequenceNumber++;
        // track.sequenceNumber += track.addcoefficient;
        var moofbox = null;
        if (mpegRawTrack) {
            // Generate empty buffer, because useless for raw mpeg
            moofbox = new Uint8Array();
        } else {
            // Generate moof for fmp4 segment
            moofbox = _mp4remux2.default.moof(track, firstDts);
        }
        track.samples = [samples[samples.length - 1]];
        track.length = 0;
        var segment = {
            type: 'audio',
            data: this._mergeBoxes(moofbox, mdatbox).buffer,
            sampleCount: mp4Samples.length,
            info: info
        };
        if (mpegRawTrack && firstSegmentAfterSeek) {
            // For MPEG audio stream in MSE, if seeking occurred, before appending new buffer
            // We need explicitly set timestampOffset to the desired point in timeline for mpeg SourceBuffer.
            segment.timestampOffset = firstDts;
        }
        this._onMediaSegment('audio', segment);
    };
    MP4Remuxer.prototype._remuxVideo = function (videoTrack) {
        if (this._videoMeta == null) {
            return;
        }
        var track = videoTrack;
        var samples = track.samples;
        var dtsCorrection = undefined;
        var firstDts = -1,
            lastDts = -1;
        var firstPts = -1,
            lastPts = -1;
        if (!samples || samples.length <= 1) {
            return;
        }
        var firstSampleOriginalDts = samples[0].dts - this._dtsBase;
        // calculate dtsCorrection
        if (this._videoNextDts) {
            dtsCorrection = Math.max(firstSampleOriginalDts - this._videoNextDts, 0);
        } else {
            // this._videoNextDts == undefined
            if (this._videoSegmentInfoList.isEmpty()) {
                dtsCorrection = 0;
            } else {
                var lastSample = this._videoSegmentInfoList.getLastSampleBefore(firstSampleOriginalDts);
                if (lastSample != null) {
                    var distance = firstSampleOriginalDts - (lastSample.originalDts + lastSample.duration);
                    if (distance <= 3) {
                        distance = 0;
                    }
                    var expectedDts = lastSample.dts + lastSample.duration + distance;
                    dtsCorrection = firstSampleOriginalDts - expectedDts;
                } else {
                    // lastSample == null, cannot found
                    dtsCorrection = 0;
                }
            }
        }
        var info = new _mediaSegmentInfo.MediaSegmentInfo();
        var mp4Samples = [];
        var firstFrameDtsCorrection = dtsCorrection;
        dtsCorrection = 0;
        // Correct dts for each sample, and calculate sample duration. Then output to mp4Samples
        for (var i = 0; i + 1 < samples.length; i++) {
            var sample = samples[i];
            var originalDts = sample.dts - this._dtsBase - (i == 0 ? firstFrameDtsCorrection : 0);
            var isKeyframe = sample.isKeyframe;
            var dts = originalDts - dtsCorrection;
            var cts = sample.cts;
            var pts = dts + cts;
            if (firstDts === -1) {
                firstDts = dts;
                firstPts = pts;
            }
            var sampleDuration = 0;
            if (i !== samples.length - 1) {
                var nextDts = samples[i + 1].dts - this._dtsBase - dtsCorrection;
                sampleDuration = nextDts - dts;
            } else {
                // the last sample
                if (mp4Samples.length >= 1) {
                    // use second last sample duration
                    sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
                } else {
                    // the only one sample, use reference sample duration
                    sampleDuration = Math.floor(this._videoMeta.refSampleDuration);
                }
            }
            if (isKeyframe) {
                var syncPoint = new _mediaSegmentInfo.SampleInfo(dts, pts, sampleDuration, sample.dts, true);
                syncPoint.fileposition = sample.fileposition;
                info.appendSyncPoint(syncPoint);
            }
            mp4Samples.push({
                dts: dts,
                pts: pts,
                cts: cts,
                units: sample.units,
                size: sample.length,
                isKeyframe: isKeyframe,
                duration: sampleDuration,
                originalDts: originalDts,
                flags: {
                    isLeading: 0,
                    dependsOn: isKeyframe ? 2 : 1,
                    isDependedOn: isKeyframe ? 1 : 0,
                    hasRedundancy: 0,
                    isNonSync: isKeyframe ? 0 : 1
                }
            });
        }
        var offset = 8;
        var mdatBytes = 8; // + videoTrack.length;
        for (var i = 0; i < mp4Samples.length; ++i) {
            mdatBytes += mp4Samples[i].size;
        }
        var mdatbox = new Uint8Array(mdatBytes);
        mdatbox[0] = mdatBytes >>> 24 & 0xFF;
        mdatbox[1] = mdatBytes >>> 16 & 0xFF;
        mdatbox[2] = mdatBytes >>> 8 & 0xFF;
        mdatbox[3] = mdatBytes & 0xFF;
        mdatbox.set(_mp4remux2.default.types.mdat, 4);
        // Write samples into mdatbox
        for (var i = 0; i < mp4Samples.length; i++) {
            var units = mp4Samples[i].units;
            while (units.length) {
                var unit = units.shift();
                var data = unit.data;
                mdatbox.set(data, offset);
                offset += data.byteLength;
            }
        }
        var latest = mp4Samples[mp4Samples.length - 1];
        lastDts = latest.dts + latest.duration;
        // lastDts = latest.originalDts + latest.duration;
        lastPts = latest.pts + latest.duration;
        this._videoNextDts = lastDts;
        // fill media segment info & add to info list
        info.beginDts = firstDts;
        info.endDts = lastDts;
        info.beginPts = firstPts;
        info.endPts = lastPts;
        info.originalBeginDts = mp4Samples[0].originalDts;
        info.originalEndDts = latest.originalDts + latest.duration;
        info.firstSample = new _mediaSegmentInfo.SampleInfo(mp4Samples[0].dts, mp4Samples[0].pts, mp4Samples[0].duration, mp4Samples[0].originalDts, mp4Samples[0].isKeyframe);
        info.lastSample = new _mediaSegmentInfo.SampleInfo(latest.dts, latest.pts, latest.duration, latest.originalDts, latest.isKeyframe);
        if (!this._isLive) {
            this._videoSegmentInfoList.append(info);
        }
        track.samples = mp4Samples;
        track.sequenceNumber++;
        // track.sequenceNumber += track.addcoefficient;
        // workaround for chrome < 50: force first sample as a random access point
        // see https://bugs.chromium.org/p/chromium/issues/detail?id=229412
        if (this._forceFirstIDR) {
            var flags = mp4Samples[0].flags;
            flags.dependsOn = 2;
            flags.isNonSync = 0;
        }
        var moofbox = _mp4remux2.default.moof(track, firstDts);
        track.samples = [samples[samples.length - 1]];
        track.length = 0;
        this._onMediaSegment('video', {
            type: 'video',
            data: this._mergeBoxes(moofbox, mdatbox).buffer,
            sampleCount: mp4Samples.length,
            info: info
        });
    };
    MP4Remuxer.prototype._mergeBoxes = function (moof, mdat) {
        var result = new Uint8Array(moof.byteLength + mdat.byteLength);
        result.set(moof, 0);
        result.set(mdat, moof.byteLength);
        return result;
    };
    return MP4Remuxer;
}();
exports.default = MP4Remuxer;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * This file is modified from dailymotion's hls.js library (hls.js/src/helper/aac.js)
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable */
var AAC = /** @class */function () {
    function AAC() {}
    AAC.getSilentFrame = function (channelCount) {
        if (channelCount === 1) {
            return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
        } else if (channelCount === 2) {
            return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
        } else if (channelCount === 3) {
            return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
        } else if (channelCount === 4) {
            return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
        } else if (channelCount === 5) {
            return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
        } else if (channelCount === 6) {
            return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
        }
        return null;
    };
    return AAC;
}();
exports.default = AAC;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable */
var Browser = {};
function detect() {
    // modified from jquery-browser-plugin
    var ua = self.navigator.userAgent.toLowerCase();
    var match = /(edge)\/([\w.]+)/.exec(ua) || /(opr)[\/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(iemobile)[\/]([\w.]+)/.exec(ua) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    var platform_match = /(ipad)/.exec(ua) || /(ipod)/.exec(ua) || /(windows phone)/.exec(ua) || /(iphone)/.exec(ua) || /(kindle)/.exec(ua) || /(android)/.exec(ua) || /(windows)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua) || /(cros)/.exec(ua) || [];
    var matched = {
        browser: match[5] || match[3] || match[1] || '',
        version: match[2] || match[4] || '0',
        majorVersion: match[4] || match[2] || '0',
        platform: platform_match[0] || ''
    };
    var browser = {};
    if (matched.browser) {
        browser[matched.browser] = true;
        var versionArray = matched.majorVersion.split('.');
        browser.version = {
            major: parseInt(matched.majorVersion, 10),
            string: matched.version
        };
        if (versionArray.length > 1) {
            browser.version.minor = parseInt(versionArray[1], 10);
        }
        if (versionArray.length > 2) {
            browser.version.build = parseInt(versionArray[2], 10);
        }
    }
    if (matched.platform) {
        browser[matched.platform] = true;
    }
    if (browser.chrome || browser.opr || browser.safari) {
        browser.webkit = true;
    }
    // MSIE. IE11 has 'rv' identifer
    if (browser.rv || browser.iemobile) {
        if (browser.rv) {
            delete browser.rv;
        }
        var msie = 'msie';
        matched.browser = msie;
        browser[msie] = true;
    }
    // Microsoft Edge
    if (browser.edge) {
        delete browser.edge;
        var msedge = 'msedge';
        matched.browser = msedge;
        browser[msedge] = true;
    }
    // Opera 15+
    if (browser.opr) {
        var opera = 'opera';
        matched.browser = opera;
        browser[opera] = true;
    }
    // Stock android browsers are marked as Safari
    if (browser.safari && browser.android) {
        var android = 'android';
        matched.browser = android;
        browser[android] = true;
    }
    browser.name = matched.browser;
    browser.platform = matched.platform;
    for (var key in Browser) {
        if (Browser.hasOwnProperty(key)) {
            delete Browser[key];
        }
    }
    Browser = browser;
    // Object.assign(Browser, browser);
}
detect();
exports.default = Browser;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable */
// Represents an media sample (audio / video)
var SampleInfo = /** @class */function () {
    function SampleInfo(dts, pts, duration, originalDts, isSync) {
        this.dts = dts;
        this.pts = pts;
        this.duration = duration;
        this.originalDts = originalDts;
        this.isSyncPoint = isSync;
        this.fileposition = null;
    }
    return SampleInfo;
}();
exports.SampleInfo = SampleInfo;
// Media Segment concept is defined in Media Source Extensions spec.
// Particularly in ISO BMFF format, an Media Segment contains a moof box followed by a mdat box.

var MediaSegmentInfo = /** @class */function () {
    function MediaSegmentInfo() {
        this.beginDts = 0;
        this.endDts = 0;
        this.beginPts = 0;
        this.endPts = 0;
        this.originalBeginDts = 0;
        this.originalEndDts = 0;
        this.syncPoints = []; // SampleInfo[n], for video IDR frames only
        this.firstSample = null; // SampleInfo
        this.lastSample = null; // SampleInfo
    }
    MediaSegmentInfo.prototype.appendSyncPoint = function (sampleInfo) {
        sampleInfo.isSyncPoint = true;
        this.syncPoints.push(sampleInfo);
    };
    return MediaSegmentInfo;
}();
exports.MediaSegmentInfo = MediaSegmentInfo;
// Ordered list for recording video IDR frames, sorted by originalDts

var IDRSampleList = /** @class */function () {
    function IDRSampleList() {
        this._list = [];
    }
    IDRSampleList.prototype.clear = function () {
        this._list = [];
    };
    IDRSampleList.prototype.appendArray = function (syncPoints) {
        var list = this._list;
        if (syncPoints.length === 0) {
            return;
        }
        if (list.length > 0 && syncPoints[0].originalDts < list[list.length - 1].originalDts) {
            this.clear();
        }
        Array.prototype.push.apply(list, syncPoints);
    };
    IDRSampleList.prototype.getLastSyncPointBeforeDts = function (dts) {
        if (this._list.length == 0) {
            return null;
        }
        var list = this._list;
        var idx = 0;
        var last = list.length - 1;
        var mid = 0;
        var lbound = 0;
        var ubound = last;
        if (dts < list[0].dts) {
            idx = 0;
            lbound = ubound + 1;
        }
        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || dts >= list[mid].dts && dts < list[mid + 1].dts) {
                idx = mid;
                break;
            } else if (list[mid].dts < dts) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
        return this._list[idx];
    };
    return IDRSampleList;
}();
exports.IDRSampleList = IDRSampleList;
// Data structure for recording information of media segments in single track.

var MediaSegmentInfoList = /** @class */function () {
    function MediaSegmentInfoList(type) {
        this._type = type;
        this._list = [];
        this._lastAppendLocation = -1; // cached last insert location
    }
    Object.defineProperty(MediaSegmentInfoList.prototype, "type", {
        get: function get() {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaSegmentInfoList.prototype, "length", {
        get: function get() {
            return this._list.length;
        },
        enumerable: true,
        configurable: true
    });
    MediaSegmentInfoList.prototype.isEmpty = function () {
        return this._list.length === 0;
    };
    MediaSegmentInfoList.prototype.clear = function () {
        this._list = [];
        this._lastAppendLocation = -1;
    };
    MediaSegmentInfoList.prototype._searchNearestSegmentBefore = function (originalBeginDts) {
        var list = this._list;
        if (list.length === 0) {
            return -2;
        }
        var last = list.length - 1;
        var mid = 0;
        var lbound = 0;
        var ubound = last;
        var idx = 0;
        if (originalBeginDts < list[0].originalBeginDts) {
            idx = -1;
            return idx;
        }
        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || originalBeginDts > list[mid].lastSample.originalDts && originalBeginDts < list[mid + 1].originalBeginDts) {
                idx = mid;
                break;
            } else if (list[mid].originalBeginDts < originalBeginDts) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
        return idx;
    };
    MediaSegmentInfoList.prototype._searchNearestSegmentAfter = function (originalBeginDts) {
        return this._searchNearestSegmentBefore(originalBeginDts) + 1;
    };
    MediaSegmentInfoList.prototype.append = function (mediaSegmentInfo) {
        var list = this._list;
        var msi = mediaSegmentInfo;
        var lastAppendIdx = this._lastAppendLocation;
        var insertIdx = 0;
        if (lastAppendIdx !== -1 && lastAppendIdx < list.length && msi.originalBeginDts >= list[lastAppendIdx].lastSample.originalDts && (lastAppendIdx === list.length - 1 || lastAppendIdx < list.length - 1 && msi.originalBeginDts < list[lastAppendIdx + 1].originalBeginDts)) {
            insertIdx = lastAppendIdx + 1; // use cached location idx
        } else {
            if (list.length > 0) {
                insertIdx = this._searchNearestSegmentBefore(msi.originalBeginDts) + 1;
            }
        }
        this._lastAppendLocation = insertIdx;
        this._list.splice(insertIdx, 0, msi);
    };
    MediaSegmentInfoList.prototype.getLastSegmentBefore = function (originalBeginDts) {
        var idx = this._searchNearestSegmentBefore(originalBeginDts);
        if (idx >= 0) {
            return this._list[idx];
        } else {
            // -1
            return null;
        }
    };
    MediaSegmentInfoList.prototype.getLastSampleBefore = function (originalBeginDts) {
        var segment = this.getLastSegmentBefore(originalBeginDts);
        if (segment != null) {
            return segment.lastSample;
        } else {
            return null;
        }
    };
    MediaSegmentInfoList.prototype.getLastSyncPointBefore = function (originalBeginDts) {
        var segmentIdx = this._searchNearestSegmentBefore(originalBeginDts);
        var syncPoints = this._list[segmentIdx].syncPoints;
        while (syncPoints.length === 0 && segmentIdx > 0) {
            segmentIdx--;
            syncPoints = this._list[segmentIdx].syncPoints;
        }
        if (syncPoints.length > 0) {
            return syncPoints[syncPoints.length - 1];
        } else {
            return null;
        }
    };
    return MediaSegmentInfoList;
}();
exports.MediaSegmentInfoList = MediaSegmentInfoList;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (ctx) {
    var CPU = null;
    var loader = null;
    var config = {};
    ctx.addEventListener('message', function (e) {
        switch (e.data.cmd) {
            case 'init':
                config = e.data.data;
                break;
            case 'loadSource':
                loader = new _ioLoader2.default(config);
                loader.arrivalDataCallback = arrivalDataCallbackWorker;
                loader.open();
                break;
            case 'pause':
                loader.pause();
                break;
            case 'seek':
                seek(e.data.keyframe);
                break;
            case 'resume':
                loader.resume();
                break;
            case 'destroy':
                destroy();
                break;
        }
        ;
    });
    function init() {
        CPU = new _flv2fmp2.default();
        CPU.onInitSegment = onRemuxerInitSegmentArrival;
        CPU.onMediaSegment = onRemuxerMediaSegmentArrival;
        CPU.onError = onCPUError;
        CPU.onMediaInfo = onMediaInfo;
        CPU.on('error', function (handle) {
            self.postMessage({ cmd: 'error', source: handle.data });
        });
    }
    function onRemuxerInitSegmentArrival(video, audio) {
        self.postMessage({
            cmd: 'mediaSegmentInit',
            source: {
                type: 'video',
                data: video
            }
        });
        if (audio) {
            self.postMessage({
                cmd: 'mediaSegmentInit',
                source: {
                    type: 'audio',
                    data: audio
                }
            });
        }
    }
    function onRemuxerMediaSegmentArrival(type, data) {
        self.postMessage({ cmd: 'mediaSegment', source: { type: type, data: data } });
    }
    function onCPUError(error) {
        self.postMessage({ cmd: 'error', source: error });
    }
    function onMediaInfo(mediainfo) {
        self.postMessage({ cmd: 'mediainfo', source: mediainfo });
    }
    function seek(keyframe) {
        loader.pause();
        loader = new _ioLoader2.default(config);
        loader.arrivalDataCallback = arrivalDataCallbackWorker;
        loader.seek(keyframe.keyframePoint, false, keyframe.keyframetime);
    }
    function destroy() {
        loader.destroy();
        loader = null;
        CPU = null;
    }
    function arrivalDataCallbackWorker(data, byteStart, keyframePoint) {
        if (!CPU) {
            init();
        }
        if (keyframePoint) {
            CPU.seek(keyframePoint);
        }
        var consumed = CPU.setflv(data);
        return consumed;
    }
};

var _flv2fmp = __webpack_require__(4);

var _flv2fmp2 = _interopRequireDefault(_flv2fmp);

var _ioLoader = __webpack_require__(2);

var _ioLoader2 = _interopRequireDefault(_ioLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    isLive: false,
    box: 'flv',
    seekInKeyframe: true,
    alwaysSeekKeyframe: true,
    lazyLoadMaxDuration: 2 * 60,
    lazyLoadRecoverDuration: 30,
    lockInternalProperty: false,
    debug: true,
    webWorker: false,
    autoCleanupSourceBuffer: true,
    autoCleanupMaxBackwardDuration: 30,
    autoCleanupMinBackwardDuration: 30,
    stashSize: 1024 * 384,
    seekType: 'range' // seek请求的方式 是range 还是 query
};

/***/ })
/******/ ])["default"];
});