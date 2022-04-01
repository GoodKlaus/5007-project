"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function Searching() {
  var location = (0, _reactRouterDom.useLocation)();
  return /*#__PURE__*/_react.default.createElement("h1", null, "Charging at: ", location.state.area);
}

function Result(props) {
  var history = (0, _reactRouterDom.useHistory)();

  function handlePush() {
    history.push({
      pathname: "/info",
      state: {
        result: props.result,
        ind_curr: props.ind
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    class: "result",
    onClick: handlePush
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "text_left"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Address: ", props.result.address[props.ind])), /*#__PURE__*/_react.default.createElement("div", {
    class: "text_right"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Distance: ", props.result.distance[props.ind], "km")), /*#__PURE__*/_react.default.createElement("p", {
    class: "vacant_time"
  }, "Vacant Time: ", props.result.vacancy[props.ind].map(function (t) {
    return /*#__PURE__*/_react.default.createElement("span", null, t);
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
      result: {
        address: initAddress,
        distance: initDistance,
        vacancy: initVacancy
      }
    };
    return _this;
  }

  _createClass(Results, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Searching, null), /*#__PURE__*/_react.default.createElement(Result, {
        result: this.state.result,
        ind: 0
      }), /*#__PURE__*/_react.default.createElement(Result, {
        result: this.state.result,
        ind: 1
      }), /*#__PURE__*/_react.default.createElement(Result, {
        result: this.state.result,
        ind: 2
      }));
    }
  }]);

  return Results;
}(_react.default.Component);

exports.default = Results;