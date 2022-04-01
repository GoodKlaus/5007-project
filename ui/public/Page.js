"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Content = _interopRequireDefault(require("./Content.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavBar() {
  return /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "logo.png",
    alt: "logo",
    width: "100",
    height: "50"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("h3", null, "Charging Door")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "/home"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/aboutUs"
  }, "About Us")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/login"
  }, "Login")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/register"
  }, "Register")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/profile"
  }, "Profile"))));
}

function Page() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(NavBar, null), /*#__PURE__*/_react.default.createElement(_Content.default, null));
}

var _default = (0, _reactRouterDom.withRouter)(Page);

exports.default = _default;