"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Home = _interopRequireDefault(require("./Home.jsx"));

var _Results = _interopRequireDefault(require("./Results.jsx"));

var _Info = _interopRequireDefault(require("./Info.jsx"));

var _Summary = _interopRequireDefault(require("./Summary.jsx"));

var _AboutUs = _interopRequireDefault(require("./AboutUs.jsx"));

var _Login = _interopRequireDefault(require("./Login.jsx"));

var _Register = _interopRequireDefault(require("./Register.jsx"));

var _Profile = _interopRequireDefault(require("./Profile.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return /*#__PURE__*/_react.default.createElement("h1", null, "Page Not Found");
};

function Content() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "/home"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/home",
    component: _Home.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/results",
    component: _Results.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/info",
    component: _Info.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/summary",
    component: _Summary.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/aboutUs",
    component: _AboutUs.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/login",
    component: _Login.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/register",
    component: _Register.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/profile",
    component: _Profile.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: NotFound
  }));
}

var _default = (0, _reactRouterDom.withRouter)(Content);

exports.default = _default;