/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AboutUs.jsx":
/*!*************************!*\
  !*** ./src/AboutUs.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutUs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // import URLSearchParams from 'url-search-params';



var AboutUs = /*#__PURE__*/function (_React$Component) {
  _inherits(AboutUs, _React$Component);

  var _super = _createSuper(AboutUs);

  function AboutUs() {
    _classCallCheck(this, AboutUs);

    return _super.apply(this, arguments);
  }

  _createClass(AboutUs, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "aboutUs_content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u2003Welcome to CharingDoor, a convenient platform for shared charging piles of electric vehicles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "What We have:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u2003\u2666Show the information of charging piles and indicate vacant time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u2003\u2666Quickly set up your own charging pile information and update it at any time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u2003\u2666Search available private charging piles nearby or at specific place and make a booking."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u2003\u2666Offers secure transactions with various coupons."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u2003\u2666Automatically add schedules, prompting you to pick up the car in time.")));
    }
  }]);

  return AboutUs;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Page_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Page.jsx */ "./src/Page.jsx");




var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(element, document.getElementById('contents'));

/***/ }),

/***/ "./src/Content.jsx":
/*!*************************!*\
  !*** ./src/Content.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _Home_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.jsx */ "./src/Home.jsx");
/* harmony import */ var _Results_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Results.jsx */ "./src/Results.jsx");
/* harmony import */ var _Info_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Info.jsx */ "./src/Info.jsx");
/* harmony import */ var _Summary_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Summary.jsx */ "./src/Summary.jsx");
/* harmony import */ var _AboutUs_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AboutUs.jsx */ "./src/AboutUs.jsx");
/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Login.jsx */ "./src/Login.jsx");
/* harmony import */ var _Register_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Register.jsx */ "./src/Register.jsx");
/* harmony import */ var _Profile_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Profile.jsx */ "./src/Profile.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Page Not Found");
};

var Content = /*#__PURE__*/function (_React$Component) {
  _inherits(Content, _React$Component);

  var _super = _createSuper(Content);

  function Content() {
    _classCallCheck(this, Content);

    return _super.apply(this, arguments);
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        exact: true,
        from: "/",
        to: "/home"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/home",
        component: _Home_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/results",
        component: _Results_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/info",
        component: _Info_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/summary",
        component: _Summary_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],
        render: function render(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Summary_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
            isLogined: _this.props.isLogined
          }));
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/aboutUs",
        component: _AboutUs_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/login",
        render: function render(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, props, {
            isLogined: _this.props.isLogined,
            setLoginInfo: _this.props.setLoginInfo,
            setLoginStatus: _this.props.setLoginStatus,
            checkUserIsExisted: _this.props.checkUserIsExisted
          }));
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/register",
        render: function render(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
            isLogined: _this.props.isLogined,
            setLoginStatus: _this.props.setLoginStatus,
            setLoginInfo: _this.props.setLoginInfo,
            addNewUser: _this.props.addNewUser,
            addNewUserCharger: _this.props.addNewUserCharger
          }));
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/profile",
        render: function render(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
            LoginedUser: _this.props.LoginedUser,
            isLogined: _this.props.isLogined,
            setLoginStatus: _this.props.setLoginStatus,
            clearLoginedUserInfo: _this.props.clearLoginedUserInfo
          }));
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        component: NotFound
      }));
    }
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/Home.jsx":
/*!**********************!*\
  !*** ./src/Home.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-geocode */ "./node_modules/react-geocode/lib/index.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-autocomplete */ "./node_modules/react-google-autocomplete/index.js");
/* harmony import */ var react_google_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








react_geocode__WEBPACK_IMPORTED_MODULE_4___default.a.setApiKey('AIzaSyBKEEQ4HcGDKPwClXap5h9Cjqf7S2yfp9o');
react_geocode__WEBPACK_IMPORTED_MODULE_4___default.a.enableDebug();

function ResultMap() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  function handlePush() {
    history.push({
      pathname: "/results"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    onClick: handlePush,
    className: "searchButton"
  }, "Search");
}

var SearchMap = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchMap, _React$Component);

  var _super = _createSuper(SearchMap);

  function SearchMap(props) {
    var _this;

    _classCallCheck(this, SearchMap);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getCity", function (addressArray) {
      var city = '';

      for (var i = 0; i < addressArray.length; i++) {
        if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
          city = addressArray[i].long_name;
          return city;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getArea", function (addressArray) {
      var area = '';

      for (var i = 0; i < addressArray.length; i++) {
        if (addressArray[i].types[0]) {
          for (var j = 0; j < addressArray[i].types.length; j++) {
            if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
              area = addressArray[i].long_name;
              return area;
            }
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getState", function (addressArray) {
      var state = '';

      for (var i = 0; i < addressArray.length; i++) {
        for (var _i = 0; _i < addressArray.length; _i++) {
          if (addressArray[_i].types[0] && 'administrative_area_level_1' === addressArray[_i].types[0]) {
            state = addressArray[_i].long_name;
            return state;
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "onInfoWindowClose", function (event) {});

    _defineProperty(_assertThisInitialized(_this), "onMarkerDragEnd", function (event) {
      var newLat = event.latLng.lat(),
          newLng = event.latLng.lng();
      react_geocode__WEBPACK_IMPORTED_MODULE_4___default.a.fromLatLng(newLat, newLng).then(function (response) {
        var address = response.results[0].formatted_address,
            addressArray = response.results[0].address_components,
            city = _this.getCity(addressArray),
            area = _this.getArea(addressArray),
            state = _this.getState(addressArray);

        _this.setState({
          address: address ? address : '',
          area: area ? area : '',
          city: city ? city : '',
          state: state ? state : '',
          markerPosition: {
            lat: newLat,
            lng: newLng
          },
          mapPosition: {
            lat: newLat,
            lng: newLng
          }
        });
      }, function (error) {
        console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPlaceSelected", function (place) {
      console.log('plc', place);

      var addr = place.formatted_address,
          addressArray = place.address_components,
          city = _this.getCity(addressArray),
          area = _this.getArea(addressArray),
          state = _this.getState(addressArray),
          latValue = place.geometry.location.lat(),
          lngValue = place.geometry.location.lng();

      var target = {
        address: addr,
        lat: latValue,
        lon: lngValue
      };

      _this.uploadTarget(target); // Set these values in the state.


      _this.setState({
        address: addr ? addr : '',
        area: area ? area : '',
        city: city ? city : '',
        state: state ? state : '',
        markerPosition: {
          lat: latValue,
          lng: lngValue
        },
        mapPosition: {
          lat: latValue,
          lng: lngValue
        }
      });
    });

    _this.state = {
      address: '',
      city: '',
      area: '',
      state: '',
      mapPosition: {
        lat: _this.props.center.lat,
        lng: _this.props.center.lng
      },
      markerPosition: {
        lat: _this.props.center.lat,
        lng: _this.props.center.lng
      }
    };
    return _this;
  }

  _createClass(SearchMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      react_geocode__WEBPACK_IMPORTED_MODULE_4___default.a.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(function (response) {
        console.log(response);

        var address = response.results[0].formatted_address,
            addressArray = response.results[0].address_components,
            city = _this2.getCity(addressArray),
            area = _this2.getArea(addressArray),
            state = _this2.getState(addressArray);

        _this2.setState({
          address: address ? address : '',
          area: area ? area : '',
          city: city ? city : '',
          state: state ? state : ''
        });
      }, function (error) {
        console.log(error);
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.markerPosition.lat !== this.props.center.lat || this.state.address !== nextState.address || this.state.city !== nextState.city || this.state.area !== nextState.area || this.state.state !== nextState.state) {
        return true;
      } else if (this.props.center.lat === nextProps.center.lat) {
        return false;
      }
    }
  }, {
    key: "uploadTarget",
    value: function () {
      var _uploadTarget = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(target) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "mutation targetAdd($target: TargetInputs!) {\n            targetAdd(target: $target) {\n                id\n            }\n        }";
                _context.next = 3;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_6__["default"])(query, {
                  target: target
                });

              case 3:
                data = _context.sent;

                if (data) {
                  console.log("Successful");
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function uploadTarget(_x) {
        return _uploadTarget.apply(this, arguments);
      }

      return uploadTarget;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var AsyncMap = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withGoogleMap"])(function (props) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMap"], {
          google: _this3.props.google,
          defaultZoom: _this3.props.zoom,
          defaultCenter: {
            lat: _this3.state.mapPosition.lat,
            lng: _this3.state.mapPosition.lng
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          id: "text_home"
        }, "Where to Charge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "form_home"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_autocomplete__WEBPACK_IMPORTED_MODULE_5___default.a, {
          style: {
            width: '50%',
            height: '40px',
            paddingLeft: '16px',
            margin: 'auto'
          },
          onPlaceSelected: _this3.onPlaceSelected,
          placeholder: _this3.state.address,
          options: {
            types: ["geocode", "establishment"]
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResultMap, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["InfoWindow"], {
          onClose: _this3.onInfoWindowClose,
          position: {
            lat: _this3.state.markerPosition.lat + 0.0018,
            lng: _this3.state.markerPosition.lng
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            padding: 0,
            margin: 0
          }
        }, _this3.state.address))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["Marker"], {
          google: _this3.props.google,
          name: 'Dolores park',
          draggable: true,
          onDragEnd: _this3.onMarkerDragEnd,
          position: {
            lat: _this3.state.markerPosition.lat,
            lng: _this3.state.markerPosition.lng
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_3__["Marker"], null));
      }));
      var map;

      if (this.props.center.lat !== undefined) {
        map = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AsyncMap, {
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBKEEQ4HcGDKPwClXap5h9Cjqf7S2yfp9o&language=en&libraries=places",
          loadingElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              height: "100%"
            }
          }),
          containerElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              height: this.props.height
            }
          }),
          mapElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              height: "100%"
            }
          })
        }));
      } else {
        map = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: this.props.height
          }
        });
      }

      return map;
    }
  }]);

  return SearchMap;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super2 = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super2.apply(this, arguments);
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchMap, {
        google: this.props.google,
        center: {
          lat: 1.2966,
          lng: 103.7764
        },
        height: "500px",
        zoom: 12
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/Info.jsx":
/*!**********************!*\
  !*** ./src/Info.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var tt = [["9:30"], ["9:30"], ["9:30"], ["9:30"], ["9:30"], ["9:30"], ["9:30"]];
var ind_from_result = 0;

var TimeTable = /*#__PURE__*/function (_React$Component) {
  _inherits(TimeTable, _React$Component);

  var _super = _createSuper(TimeTable);

  function TimeTable() {
    _classCallCheck(this, TimeTable);

    return _super.call(this);
  }

  _createClass(TimeTable, [{
    key: "render",
    value: function render() {
      var _this = this;

      var timing = [];

      if (this.props.users.length > 1) {
        timing = this.props.users[ind_from_result].availableTimeTable[this.props.days_index];
      } else {
        timing = this.props.users[0].availableTimeTable[this.props.days_index];
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "grid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, timing.map(function (row) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          color: "primary",
          onClick: function onClick() {
            return _this.props.handleClick(row);
          }
        }, row));
      })))));
    }
  }]);

  return TimeTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function Detail(props) {
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])();
  var ind_curr = parseInt(location.state.ind_curr);
  ind_from_result = ind_curr;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text_left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Address: ", location.state.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text_right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Distance: ", location.state.dist, " km")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "price"
  }, "Price: S$ ", location.state.price, "/hour"));
}

function Submission(props) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])();
  var ind_curr = parseInt(location.state.ind_curr);

  if (props.time_sel != " ") {
    var selected_time = props.time_sel;
    var tt_selected = props.users[ind_curr].availableTimeTable[props.days_index];
    var time_index = tt_selected.indexOf(selected_time);
    var selectionOK = true;
    var hours = [];
    var dt = props.duration;

    for (var i = 0; i - 1 < dt; i++) {
      if (time_index + i >= tt_selected.length) {
        console.log("duration too long", i);
        selectionOK = false;
        break;
      }

      var colon_ind = tt_selected[time_index + i].indexOf(':');
      var temp_hour = parseInt(tt_selected[time_index + i].slice(0, colon_ind));

      if (i > 0 && temp_hour - 1 > hours[i - 1]) {
        console.log("gap !!!");
        selectionOK = false;
        break;
      }

      hours.push(temp_hour);
    }

    console.log(selectionOK);

    if (!selectionOK) {
      // alert("Your selection either exceeds owner's available time range or overlap booked timing, please select again");
      refresh(history, location);
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    onClick: function onClick() {
      return props.handlePush(history, location, ind_curr);
    }
  }, "Submit");
}

function refresh(hist, loc) {
  hist.replace('/reload');
  setTimeout(function () {
    hist.replace({
      pathname: '/info',
      state: {
        address: loc.state.address,
        price: loc.state.price,
        dist: loc.state.dist,
        ind_curr: loc.state.ind_curr
      }
    });
  });
}

var InfoDetail = /*#__PURE__*/function (_React$Component2) {
  _inherits(InfoDetail, _React$Component2);

  var _super2 = _createSuper(InfoDetail);

  function InfoDetail() {
    var _this2;

    _classCallCheck(this, InfoDetail);

    _this2 = _super2.call(this);
    _this2.state = {
      users: [{
        availableTimeTable: tt
      }],
      days: [true, false, false, false, false, false, false],
      days_index: 0,
      time_sel: " ",
      duration: 1,
      date_sel: false
    };
    _this2.show = _this2.show.bind(_assertThisInitialized(_this2));
    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));
    _this2.handleChange = _this2.handleChange.bind(_assertThisInitialized(_this2));
    _this2.handlePush = _this2.handlePush.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(InfoDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n          userChargerList {\n            id addressOfPile price availableTimeDisplay availableTimeTable\n          }\n        }";
                _context.next = 3;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__["default"])(query);

              case 3:
                data = _context.sent;

                if (data.userChargerList.length > 0) {
                  this.setState({
                    users: data.userChargerList
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "show",
    value: function show(addition) {
      var now = new Date();
      var target = new Date(now.getTime() + addition * 24 * 60 * 60 * 1000);
      var date = target.getDate() + '/' + (target.getMonth() + 1) + '/' + target.getFullYear();
      var days_init = [false, false, false, false, false, false, false];
      var day_of_week = (now.getDay() + addition) % 7;
      days_init[day_of_week] = true;
      this.setState({
        days: days_init,
        days_index: addition,
        date_sel: date
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(t) {
      this.setState({
        time_sel: t
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        duration: e.target.value
      });
    }
  }, {
    key: "handlePush",
    value: function handlePush(history, location, ind_curr) {
      console.log("no prob");

      if (this.state.time_sel != " ") {
        var now = new Date();
        var date_now = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
        history.push({
          pathname: "/summary",
          state: {
            address: this.state.users[ind_curr].addressOfPile,
            price: this.state.users[ind_curr].price,
            timing: this.state.time_sel,
            duration: this.state.duration,
            date: !this.state.date_sel ? date_now : this.state.date_sel,
            index: ind_curr,
            days_index: this.state.days_index
          }
        });
      } else {
        alert("You MUST select a charging time");
        refresh(history, location);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var days = [];
      var now = new Date();

      for (var i = 0; i < 7; i++) {
        var temp = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
        var date = temp.getDate() + '/' + (temp.getMonth() + 1);
        days.push(date);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Detail, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "nav_div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          textAlign: 'center'
        }
      }, "Vancant Timing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        id: "nav"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.show(0);
        }
      }, "Today")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.show(1);
        }
      }, days[1])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.show(2);
        }
      }, days[2])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.show(3);
        }
      }, days[3])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.show(4);
        }
      }, days[4])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.show(5);
        }
      }, days[5])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this3.show(6);
        }
      }, days[6]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeTable, {
        users: this.state.users,
        days_index: this.state.days_index,
        handleClick: this.handleClick
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        horizontal: true,
        className: "info_form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Your Selected Time:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, this.state.time_sel))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Your Charging Duration:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
        componentClass: "select",
        onChange: this.handleChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 1
      }, "1 hour"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 2
      }, "2 hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 3
      }, "3 hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 4
      }, "4 hours"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: 5
      }, "5 hours")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        smOffset: 4,
        sm: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Submission, {
        handlePush: this.handlePush,
        users: this.state.users,
        time_sel: this.state.time_sel,
        days_index: this.state.days_index,
        duration: this.state.duration
      })))));
    }
  }]);

  return InfoDetail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/Login.jsx":
/*!***********************!*\
  !*** ./src/Login.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




 // import URLSearchParams from 'url-search-params';



var Login = /*#__PURE__*/function (_React$Component) {
  _inherits(Login, _React$Component);

  var _super = _createSuper(Login);

  function Login() {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var form = document.forms.loginForm;
      var emialOrPhone = form.EmailOrTelephone.value;
      var password = form.Password.value;
      var loginInfo = [];

      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emialOrPhone)) {
        loginInfo = {
          email: emialOrPhone,
          password: password
        };
      } else if (/^\d{8}$/.test(emialOrPhone)) {
        loginInfo = {
          phoneNumber: emialOrPhone,
          password: password
        };
      } else {
        alert("error user information or password");
      }

      var login = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var isExisted;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this2.props.checkUserIsExisted(loginInfo);

                case 2:
                  isExisted = _context.sent;
                  console.log(isExisted);

                  if (isExisted) {
                    _this2.props.setLoginInfo(loginInfo);

                    _this2.props.setLoginStatus(true);
                  } else {
                    alert("We could not find your account");
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function login() {
          return _ref.apply(this, arguments);
        };
      }();

      if (loginInfo.length != 0) {
        login();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.isLogined) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Hi! You has logged in. Welcome to Charging Door! :) "));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "login_content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          name: "loginForm",
          onSubmit: this.handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Email/Phone Number:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "EmailOrTelephone",
          placeholder: "Please enter Email/ Phone Number"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Password: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "password",
          name: "Password",
          placeholder: "Please enter password"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Login"))));
      }
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.jsx */ "./src/Content.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var NavBar = /*#__PURE__*/function (_React$Component) {
  _inherits(NavBar, _React$Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _super.apply(this, arguments);
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      if (this.props.isLogined) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "logo.png",
          alt: "logo",
          width: "80",
          height: "60"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Charging Door")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          exact: true,
          to: "/home"
        }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: "/aboutUs"
        }, "About Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: "/profile"
        }, "Profile"))));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "logo.png",
          alt: "logo",
          width: "80",
          height: "60"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Charging Door")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          exact: true,
          to: "/home"
        }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: "/aboutUs"
        }, "About Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: "/login"
        }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: "/register"
        }, "Register"))));
      }
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Page = /*#__PURE__*/function (_React$Component2) {
  _inherits(Page, _React$Component2);

  var _super2 = _createSuper(Page);

  function Page() {
    var _this;

    _classCallCheck(this, Page);

    _this = _super2.call(this);
    _this.state = {
      isLogined: false,
      loginInfo: [],
      LoginedUser: []
    };
    _this.loadUserInfo = _this.loadUserInfo.bind(_assertThisInitialized(_this));
    _this.loadUserInfoLogin = _this.loadUserInfoLogin.bind(_assertThisInitialized(_this));
    _this.setLoginInfo = _this.setLoginInfo.bind(_assertThisInitialized(_this));
    _this.setLoginStatus = _this.setLoginStatus.bind(_assertThisInitialized(_this));
    _this.checkUserIsExisted = _this.checkUserIsExisted.bind(_assertThisInitialized(_this));
    _this.clearLoginedUserInfo = _this.clearLoginedUserInfo.bind(_assertThisInitialized(_this));
    _this.addNewUser = _this.addNewUser.bind(_assertThisInitialized(_this));
    _this.addNewUserCharger = _this.addNewUserCharger.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Page, [{
    key: "checkUserIsExisted",
    value: function () {
      var _checkUserIsExisted = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userInput) {
        var query, data, query1, data1;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query getUser ($userInput:userLoginInput!){\n        getUser(userInput:$userInput){\n          name email phoneNumber isOwnerOfEVCharger\n      }\n    }";
                _context.next = 3;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  userInput: userInput
                });

              case 3:
                data = _context.sent;

                if (!data.getUser) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", true);

              case 8:
                query1 = "query getUserCharger ($userInput:userLoginInput!){\n        getUserCharger (userInput:$userInput){\n          name email phoneNumber isOwnerOfEVCharger\n        }\n      }";
                _context.next = 11;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query1, {
                  userInput: userInput
                });

              case 11:
                data1 = _context.sent;

                if (!data1.getUserCharger) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return", true);

              case 16:
                return _context.abrupt("return", false);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkUserIsExisted(_x) {
        return _checkUserIsExisted.apply(this, arguments);
      }

      return checkUserIsExisted;
    }() //save user infomation

  }, {
    key: "loadUserInfo",
    value: function () {
      var _loadUserInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userInput) {
        var query, data, _data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!userInput.isOwnerOfEVCharger) {
                  _context2.next = 9;
                  break;
                }

                query = "query getUser ($userInput:userLoginInput!){\n        getUserCharger(userInput:$userInput){\n          name email phoneNumber isOwnerOfEVCharger addressOfPile price availableTime availableTimeTable\n        }\n      }";
                delete userInput['isOwnerOfEVCharger'];
                _context2.next = 5;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  userInput: userInput
                });

              case 5:
                data = _context2.sent;
                this.setState({
                  LoginedUser: data.getUserCharger
                });
                _context2.next = 15;
                break;

              case 9:
                query = "query getUser ($userInput:userLoginInput!){\n              getUser(userInput:$userInput){\n                name email phoneNumber isOwnerOfEVCharger\n            }\n        }";
                delete userInput['isOwnerOfEVCharger'];
                _context2.next = 13;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  userInput: userInput
                });

              case 13:
                _data = _context2.sent;
                this.setState({
                  LoginedUser: _data.getUser
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadUserInfo(_x2) {
        return _loadUserInfo.apply(this, arguments);
      }

      return loadUserInfo;
    }()
  }, {
    key: "loadUserInfoLogin",
    value: function () {
      var _loadUserInfoLogin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(userInput) {
        var query, data, _data2;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "query getUser ($userInput:userLoginInput!){\n        getUser(userInput:$userInput){\n          name email phoneNumber isOwnerOfEVCharger\n        }\n    }";
                _context3.next = 3;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  userInput: userInput
                });

              case 3:
                data = _context3.sent;

                if (!data.getUser) {
                  _context3.next = 8;
                  break;
                }

                this.setState({
                  LoginedUser: data.getUser
                });
                _context3.next = 13;
                break;

              case 8:
                query = "query getUserCharger ($userInput:userLoginInput!){\n              getUserCharger (userInput:$userInput){\n                name email phoneNumber isOwnerOfEVCharger addressOfPile price availableTime availableTimeTable\n            }\n        }";
                _context3.next = 11;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  userInput: userInput
                });

              case 11:
                _data2 = _context3.sent;
                this.setState({
                  LoginedUser: _data2.getUserCharger
                });

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadUserInfoLogin(_x3) {
        return _loadUserInfoLogin.apply(this, arguments);
      }

      return loadUserInfoLogin;
    }() //add new user infomation

  }, {
    key: "addNewUser",
    value: function () {
      var _addNewUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(userInput) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = "mutation registerNewUser ($userInput:userRegisterInput!){\n        registerNewUser(userInput:$userInput){\n        name email phoneNumber isOwnerOfEVCharger\n      }\n    }";
                _context4.next = 3;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  userInput: userInput
                });

              case 3:
                data = _context4.sent;

                if (data) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", null);

              case 8:
                return _context4.abrupt("return", data.registerNewUser);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function addNewUser(_x4) {
        return _addNewUser.apply(this, arguments);
      }

      return addNewUser;
    }()
  }, {
    key: "addNewUserCharger",
    value: function () {
      var _addNewUserCharger = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(userChargerInput) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = "mutation registerNewUserCharger ($userChargerInput:userChargerRegisterInput!){\n        registerNewUserCharger(userChargerInput:$userChargerInput){\n        name email phoneNumber isOwnerOfEVCharger addressOfPile\n      }\n    }";
                _context5.next = 3;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  userChargerInput: userChargerInput
                });

              case 3:
                data = _context5.sent;

                if (data) {
                  _context5.next = 8;
                  break;
                }

                return _context5.abrupt("return", null);

              case 8:
                return _context5.abrupt("return", data.registerNewUserCharger);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function addNewUserCharger(_x5) {
        return _addNewUserCharger.apply(this, arguments);
      }

      return addNewUserCharger;
    }() //save login information(email,phoneNumber,password)

  }, {
    key: "setLoginInfo",
    value: function setLoginInfo(loginInfo) {
      this.setState({
        loginInfo: loginInfo
      });
      console.log(loginInfo);

      if ("isOwnerOfEVCharger" in loginInfo) {
        this.loadUserInfo(loginInfo);
      } else {
        this.loadUserInfoLogin(loginInfo);
      }
    }
  }, {
    key: "setLoginStatus",
    value: function setLoginStatus(status) {
      this.setState({
        isLogined: status
      });
    }
  }, {
    key: "clearLoginedUserInfo",
    value: function clearLoginedUserInfo() {
      this.setState({
        LoginedUser: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBar, {
        isLogined: this.state.isLogined
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isLogined: this.state.isLogined,
        LoginedUser: this.state.LoginedUser,
        setLoginInfo: this.setLoginInfo,
        setLoginStatus: this.setLoginStatus,
        checkUserIsExisted: this.checkUserIsExisted,
        loadUserInfo: this.loadUserInfo,
        loadUserInfoLogin: this.loadUserInfoLogin,
        clearLoginedUserInfo: this.clearLoginedUserInfo,
        addNewUser: this.addNewUser,
        addNewUserCharger: this.addNewUserCharger
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Copyright \xA9 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "ChargingDoor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:Charging@Door.com"
      }, "Charging@Door")))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/Profile.jsx":
/*!*************************!*\
  !*** ./src/Profile.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // import URLSearchParams from 'url-search-params';



var Register = /*#__PURE__*/function (_React$Component) {
  _inherits(Register, _React$Component);

  var _super = _createSuper(Register);

  function Register() {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this);
    _this.logout = _this.logout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Register, [{
    key: "logout",
    value: function logout() {
      this.props.setLoginStatus(false);
      this.props.clearLoginedUserInfo();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.isLogined === false) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          style: {
            color: "red"
          }
        }, "You have logged out. "));
      } else if (this.props.LoginedUser.isOwnerOfEVCharger) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "profile_content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          name: "registerForm",
          onSubmit: this.handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.LoginedUser.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.LoginedUser.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Phone Number: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.LoginedUser.phoneNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Is a Owner of EV Charger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "checkbox",
          checked: this.props.LoginedUser.isOwnerOfEVCharger,
          style: {
            width: "15px",
            height: "15px"
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Address of Pile: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.LoginedUser.addressOfPile), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Price: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "S$ ", this.props.LoginedUser.price, " /hour"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Available Time: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.LoginedUser.availableTime.map(function (t) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t);
        }).reduce(function (prev, curr) {
          return [prev, ', ', curr];
        }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "logoutButtom",
          onClick: this.logout
        }, "Logout")));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "profile_content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          name: "registerForm",
          onSubmit: this.handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.LoginedUser.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.LoginedUser.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "150px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Phone Number: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, this.props.LoginedUser.phoneNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "logoutButtom",
          onClick: this.logout
        }, "Logout")));
      }
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/Register.jsx":
/*!**************************!*\
  !*** ./src/Register.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-geocode */ "./node_modules/react-geocode/lib/index.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // import URLSearchParams from 'url-search-params';



react_geocode__WEBPACK_IMPORTED_MODULE_2___default.a.setApiKey('AIzaSyBKEEQ4HcGDKPwClXap5h9Cjqf7S2yfp9o');
react_geocode__WEBPACK_IMPORTED_MODULE_2___default.a.enableDebug();

var Register = /*#__PURE__*/function (_React$Component) {
  _inherits(Register, _React$Component);

  var _super = _createSuper(Register);

  function Register() {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this);
    _this.state = {
      lat: 0.0,
      lon: 0.0
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.getcoor = _this.getcoor.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Register, [{
    key: "getcoor",
    value: function getcoor() {
      var _this2 = this;

      var address = document.forms.registerForm.PileAddress.value;
      react_geocode__WEBPACK_IMPORTED_MODULE_2___default.a.fromAddress(address).then(function (response) {
        var lat_new = response.results[0].geometry.location.lat;
        var lng = response.results[0].geometry.location.lng;

        _this2.setState({
          lat: lat_new,
          lon: lng
        });
      }, function (error) {
        console.error(error);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      var form = document.forms.registerForm;
      var name = form.Name.value;
      var email = form.Email.value;
      var phoneNumber = form.PhoneNumber.value;
      var password = form.Password.value;
      var isOwnerOfEVCharger = form.IsOwnerOfEVCharger.checked;
      var pileAddress = isOwnerOfEVCharger ? form.PileAddress.value : "";

      if (isOwnerOfEVCharger) {
        this.getcoor(pileAddress);
      }

      var price = isOwnerOfEVCharger ? parseFloat(form.Price.value) : 0;
      var start = parseInt(form.TimeStart.value);
      var end = parseInt(form.TimeEnd.value);

      if (!/^([a-zA-Z ]){2,30}$/.test(name)) {
        alert("Name can only accept alphabets and space character (2 - 30 characters) ");
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter correctly formatted email ");
      } else if (!/^\d{8}$/.test(phoneNumber)) {
        alert("Please enter 8-digit phoneNumber ");
      } else if (!/^\w\w{7,11}$/.test(password)) {
        alert("Password should be 8-12 alphabets or digits");
      } else {
        if (isOwnerOfEVCharger) {
          if (!pileAddress) {
            alert("pileAddress can not be empty ");
          } else if (!price) {
            alert("price should be number ");
          } else if (start >= end) {
            alert("Please fill in correct available time format ");
          } else {
            console.log(this.state.lat);
            var _registerUserCharger = {
              name: name,
              email: email,
              phoneNumber: phoneNumber,
              password: password,
              isOwnerOfEVCharger: isOwnerOfEVCharger,
              addressOfPile: pileAddress,
              price: price,
              startTime: start,
              endTime: end,
              lat: this.state.lat,
              lon: this.state.lon
            };

            var register = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var registedUserCharger;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this3.props.addNewUserCharger(_registerUserCharger);

                      case 2:
                        registedUserCharger = _context.sent;

                        if (!registedUserCharger) {
                          alert("The email or phoneNumber has been registered.");
                        } else {
                          _this3.props.setLoginInfo({
                            email: _registerUserCharger.email,
                            password: _registerUserCharger.password,
                            isOwnerOfEVCharger: _registerUserCharger.isOwnerOfEVCharger
                          });

                          _this3.props.setLoginStatus(true);
                        }

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function register() {
                return _ref.apply(this, arguments);
              };
            }();

            register();
          }
        } else {
          var registerUser = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            isOwnerOfEVCharger: isOwnerOfEVCharger
          };
          console.log(registerUser);

          var _register = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var registedUser;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _this3.props.addNewUser(registerUser);

                    case 2:
                      registedUser = _context2.sent;

                      if (!registedUser) {
                        alert("The email or phoneNumber has been registered.");
                      } else {
                        _this3.props.setLoginInfo({
                          email: registerUser.email,
                          password: registerUser.password,
                          isOwnerOfEVCharger: registerUserCharger.isOwnerOfEVCharger
                        });

                        _this3.props.setLoginStatus(true);
                      }

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function _register() {
              return _ref2.apply(this, arguments);
            };
          }();

          _register();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.isLogined) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Hi! You has registered a new account. Welcome to Charging Door! :) "));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "register_content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          name: "registerForm",
          onSubmit: this.handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "200px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "Name",
          placeholder: "name"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            color: "red",
            fontSize: 18
          }
        }, "*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "200px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "Email",
          placeholder: "email with correct format"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            color: "red",
            fontSize: 18
          }
        }, "*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "200px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Phone Number: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "PhoneNumber",
          placeholder: "8-digit phone number"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            color: "red",
            fontSize: 18
          }
        }, "*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "200px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Password: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "Password",
          placeholder: "password"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            color: "red",
            fontSize: 18
          }
        }, "*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "200px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Is a Owner of EV Charger "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "checkbox",
          name: "IsOwnerOfEVCharger",
          style: {
            width: "15px",
            height: "15px"
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            color: "red",
            fontSize: 18
          }
        }, "*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "200px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Address of Pile: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "PileAddress",
          placeholder: "Please enter the address"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: this.getcoor,
          style: {
            width: "auto",
            marginRight: "10px"
          }
        }, "Obtain Coordinates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "auto",
            textAlign: "left",
            display: "inline-block",
            color: "red"
          }
        }, "Coordinates: (", this.state.lat, ", ", this.state.lon, ") "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "200px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Price: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "Price",
          placeholder: "S$ price /hour"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "200px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Time Available - Start (Everyday): "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          name: "TimeStart"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "0"
        }, "00:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "1"
        }, "01:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "2"
        }, "02:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "3"
        }, "03:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "4"
        }, "04:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "5"
        }, "05:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "6"
        }, "06:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "7"
        }, "07:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "8"
        }, "08:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "9"
        }, "09:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "10"
        }, "10:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "11"
        }, "11:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "12"
        }, "12:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "13"
        }, "13:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "14"
        }, "14:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "15"
        }, "15:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "16"
        }, "16:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "17"
        }, "17:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "18"
        }, "18:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "19"
        }, "19:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "20"
        }, "20:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "21"
        }, "21:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "22"
        }, "22:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "23"
        }, "23:00")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          style: {
            width: "200px",
            textAlign: "left",
            display: "inline-block"
          }
        }, "Time Available - End (Everyday): "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          name: "TimeEnd"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "0"
        }, "00:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "1"
        }, "01:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "2"
        }, "02:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "3"
        }, "03:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "4"
        }, "04:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "5"
        }, "05:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "6"
        }, "06:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "7"
        }, "07:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "8"
        }, "08:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "9"
        }, "09:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "10"
        }, "10:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "11"
        }, "11:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "12"
        }, "12:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "13"
        }, "13:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "14"
        }, "14:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "15"
        }, "15:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "16"
        }, "16:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "17"
        }, "17:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "18"
        }, "18:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "19"
        }, "19:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "20"
        }, "20:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "21"
        }, "21:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "22"
        }, "22:00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "23"
        }, "23:00")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Sign up"))));
      }
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/Results.jsx":
/*!*************************!*\
  !*** ./src/Results.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Results; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var initAddress = ["Jurong Gateway", "Pandan Garden", "31 Jurong East Avenue"];
var initDistance = [0.5, 1.2, 1.7];
var initVacancy = [['Today', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'], ['Today', 'Wednesday', 'Thursday', 'Saturday', 'Sunday', 'Monday'], ['Today', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']];

function Result(props) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  function handlePush() {
    history.push({
      pathname: "/info",
      state: {
        address: props.users[props.ind].addressOfPile,
        price: props.users[props.ind].price,
        dist: props.dist,
        ind_curr: props.ind
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "result",
    onClick: handlePush
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text_left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Address: ", props.users[props.ind].addressOfPile)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text_right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Distance: ", props.dist, "km")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "vacant_time"
  }, "Vacant Time: ", props.users[props.ind].availableTimeDisplay.map(function (t) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t);
  }).reduce(function (prev, curr) {
    return [prev, ', ', curr];
  })));
}

var Results = /*#__PURE__*/function (_React$Component) {
  _inherits(Results, _React$Component);

  var _super = _createSuper(Results);

  function Results() {
    var _this;

    _classCallCheck(this, Results);

    _this = _super.call(this);
    _this.state = {
      target: [],
      users: [],
      result: {
        address: initAddress,
        distance: initDistance,
        vacancy: initVacancy
      }
    };
    return _this;
  }

  _createClass(Results, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n      resultTarget {\n        id address lat lon\n      }\n      userChargerList {\n        id addressOfPile lat lon price availableTimeDisplay\n      }\n    }";
                _context.next = 3;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query);

              case 3:
                data = _context.sent;

                if (data) {
                  this.setState({
                    target: data.resultTarget,
                    users: data.userChargerList
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "distance",
    value: function distance(lat1, lat2, lon1, lon2) {
      var R = 6371;
      var latDistance = (lat2 - lat1) * Math.PI / 180.0;
      var lonDistance = (lon2 - lon1) * Math.PI / 180.0;
      var a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2) + Math.cos(lat1 * Math.PI / 180.0) * Math.cos(lat2 * Math.PI / 180.0) * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var distance = R * c;
      var height = 0;
      distance = Math.pow(distance, 2) + Math.pow(height, 2);
      return Math.sqrt(distance);
    }
  }, {
    key: "render",
    value: function render() {
      var user_lst = this.state.users;
      var temp_dist = [];

      for (var i = 0; i < user_lst.length; i++) {
        var temp = this.distance(this.state.target.lat, this.state.users[i].lat, this.state.target.lon, this.state.users[i].lon);
        temp_dist.push([temp.toFixed(2), i]);
      }

      temp_dist.sort();
      var results = [];

      for (var j = 0; j < temp_dist.length; j++) {
        results.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Result, {
          users: this.state.users,
          dist: temp_dist[j][0],
          ind: j
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "result_content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        style: {
          color: "#283292"
        }
      }, "Charging at: ", this.state.target.address), results));
    }
  }]);

  return Results;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/Summary.jsx":
/*!*************************!*\
  !*** ./src/Summary.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Summary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var id = 0;
var day_ind = 0;
var start = "9:30";
var inter = 0;

function BookingSum() {
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  var time_start = location.state.timing;
  var duration = location.state.duration;
  var time_end = parseInt(time_start.split(':')[0]) + parseInt(duration) + ':' + time_start.split(':')[1];
  var cost = parseInt(location.state.price) * parseInt(duration);
  var ind = parseInt(location.state.index);
  var days_index = parseInt(location.state.days_index);
  id = ind + 1;
  day_ind = days_index;
  start = time_start;
  inter = parseInt(duration);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    hover: true,
    className: "table_sum"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, location.state.address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "S$ ", location.state.price, "/hour")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, time_start, " - ", time_end, " ", location.state.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, "Cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "S$ ", cost))));
}

var Summary = /*#__PURE__*/function (_React$Component) {
  _inherits(Summary, _React$Component);

  var _super = _createSuper(Summary);

  function Summary() {
    var _this;

    _classCallCheck(this, Summary);

    _this = _super.call(this);
    _this.updateTime = _this.updateTime.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Summary, [{
    key: "updateTime",
    value: function () {
      var _updateTime = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, changes, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.props.isLogined === false)) {
                  _context.next = 4;
                  break;
                }

                alert("You have not logged in, please log in before procedding!");
                _context.next = 10;
                break;

              case 4:
                query = "mutation userTimeChange($changes: TimeChangeInputs!) {\n                userTimeChange(changes: $changes) {\n                    id\n                }\n            }";
                changes = {
                  id: id,
                  days_index: day_ind,
                  selectedTime: start,
                  duration: inter
                };
                _context.next = 8;
                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_3__["default"])(query, {
                  changes: changes
                });

              case 8:
                data = _context.sent;

                if (data) {
                  console.log("Successful");
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateTime() {
        return _updateTime.apply(this, arguments);
      }

      return updateTime;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        style: {
          textAlign: "center"
        }
      }, "Your Booking Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BookingSum, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button_pay"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "pay",
        onClick: this.updateTime
      }, "Proceed to Pay")));
    }
  }]);

  return Summary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return graphQLFetch; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}

function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
    var variables,
        response,
        body,
        result,
        error,
        details,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.prev = 1;
            _context.next = 4;
            return fetch("http://localhost:3000/graphql", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.text();

          case 7:
            body = _context.sent;
            result = JSON.parse(body, jsonDateReviver);

            if (result.errors) {
              error = result.errors[0];

              if (error.extensions.code === 'BAD_USER_INPUT') {
                details = error.extensions.exception.errors.join('\n ');
                alert("".concat(error.message, ":\n ").concat(details));
              } else {
                alert("".concat(error.extensions.code, ": ").concat(error.message));
              }
            }

            return _context.abrupt("return", result.data);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            alert("Error in sending data to server: ".concat(_context.t0.message));
            return _context.abrupt("return", null);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/App.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/App.jsx */"./src/App.jsx");


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map