"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var tt = [["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"], ["11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"], ["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"], ["10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"], ["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "16:00", "16:30", "17:00", "17:30", "18:00"], ["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"], ["9:30", "10:00", "10:30", "11:00", "12:00", "12:30", "13:00", "13:30", "14:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]];
var time_select = "";

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

      var findTrueIndex = function findTrueIndex(element) {
        return element == true;
      };

      var ind = this.props.info.days.findIndex(findTrueIndex);
      var timing = this.props.info.timetable[ind];
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react.default.createElement("table", {
        className: "grid"
      }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, timing.map(function (row) {
        return /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
          color: "primary",
          onClick: function onClick() {
            return _this.props.handleClick(row);
          }
        }, row));
      })))));
    }
  }]);

  return TimeTable;
}(_react.default.Component);

function Detail(props) {
  var location = (0, _reactRouterDom.useLocation)();
  var ind_curr = parseInt(location.state.ind_curr);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    class: "text_left"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Address: ", location.state.result.address[ind_curr])), /*#__PURE__*/_react.default.createElement("div", {
    class: "text_right"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Distance: ", location.state.result.distance[ind_curr], " km")), /*#__PURE__*/_react.default.createElement("h2", {
    class: "price"
  }, "Price: S$ ", props.price, "/hour"));
}

function Submission(props) {
  var history = (0, _reactRouterDom.useHistory)();
  var location = (0, _reactRouterDom.useLocation)();
  var ind_curr = parseInt(location.state.ind_curr);
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    onClick: function onClick() {
      return props.handlePush(history, location, ind_curr);
    }
  }, "Submit");
}

var InfoDetail = /*#__PURE__*/function (_React$Component2) {
  _inherits(InfoDetail, _React$Component2);

  var _super2 = _createSuper(InfoDetail);

  function InfoDetail() {
    var _this2;

    _classCallCheck(this, InfoDetail);

    _this2 = _super2.call(this);
    _this2.state = {
      info: {
        timetable: tt,
        days: [true, false, false, false, false, false, false]
      },
      time_sel: " ",
      price: 20,
      date_sel: false
    };
    _this2.show = _this2.show.bind(_assertThisInitialized(_this2));
    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));
    _this2.handleChange = _this2.handleChange.bind(_assertThisInitialized(_this2));
    _this2.handlePush = _this2.handlePush.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(InfoDetail, [{
    key: "show",
    value: function show(addition) {
      var now = new Date();
      var target = new Date(now.getTime() + addition * 24 * 60 * 60 * 1000);
      var date = target.getDate() + '/' + (target.getMonth() + 1) + '/' + target.getFullYear();
      var days_init = [false, false, false, false, false, false, false];
      var day_of_week = (now.getDay() + addition) % 7;
      days_init[day_of_week] = true;

      var new_info = _objectSpread(_objectSpread({}, this.state.info), {}, {
        days: days_init
      });

      this.setState({
        info: new_info,
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
      var now = new Date();
      var date_now = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
      history.push({
        pathname: "/summary",
        state: {
          address: location.state.result.address[ind_curr],
          price: this.state.price,
          timing: this.state.time_sel,
          duration: this.state.duration,
          date: !this.state.date_sel ? date_now : this.state.date_sel
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var now = new Date();
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Detail, {
        price: this.state.price
      }), /*#__PURE__*/_react.default.createElement("h2", null, "Vancant Timing"), /*#__PURE__*/_react.default.createElement("div", {
        id: "nav_div"
      }, /*#__PURE__*/_react.default.createElement("ul", {
        id: "nav"
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        onClick: function onClick() {
          return _this3.show(0);
        }
      }, "Today")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        onClick: function onClick() {
          return _this3.show(1);
        }
      }, days[(now.getDay() + 1) % 7])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        onClick: function onClick() {
          return _this3.show(2);
        }
      }, days[(now.getDay() + 2) % 7])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        onClick: function onClick() {
          return _this3.show(3);
        }
      }, days[(now.getDay() + 3) % 7])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        onClick: function onClick() {
          return _this3.show(4);
        }
      }, days[(now.getDay() + 4) % 7])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        onClick: function onClick() {
          return _this3.show(5);
        }
      }, days[(now.getDay() + 5) % 7])), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        onClick: function onClick() {
          return _this3.show(6);
        }
      }, days[(now.getDay() + 6) % 7])))), /*#__PURE__*/_react.default.createElement(TimeTable, {
        info: this.state.info,
        handleClick: this.handleClick
      }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, {
        row: true
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Your Selected Time: ", this.state.time_sel)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, {
        row: true
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ControlLabel, null, "Your Charging Duration: "), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormControl, {
        componentClass: "select",
        onChange: this.handleChange
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: 0
      }, "0"), /*#__PURE__*/_react.default.createElement("option", {
        value: 1
      }, "1"), /*#__PURE__*/_react.default.createElement("option", {
        value: 2
      }, "2"), /*#__PURE__*/_react.default.createElement("option", {
        value: 3
      }, "3"), /*#__PURE__*/_react.default.createElement("option", {
        value: 4
      }, "4"), /*#__PURE__*/_react.default.createElement("option", {
        value: 5
      }, "5"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, {
        check: true,
        row: true
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, {
        sm: {
          offset: 2,
          size: 10
        }
      }, /*#__PURE__*/_react.default.createElement(Submission, {
        handlePush: this.handlePush
      })))));
    }
  }]);

  return InfoDetail;
}(_react.default.Component);

exports.default = InfoDetail;