"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import NavigationBar from './Navibar.jsx';
var Headler = /*#__PURE__*/function (_React$Component) {
  _inherits(Headler, _React$Component);

  var _super = _createSuper(Headler);

  function Headler() {
    _classCallCheck(this, Headler);

    return _super.apply(this, arguments);
  }

  _createClass(Headler, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("h1", null, "Intercontinental Railway Reservation System");
    }
  }]);

  return Headler;
}(React.Component);

var NavigationBar = /*#__PURE__*/function (_React$Component2) {
  _inherits(NavigationBar, _React$Component2);

  var _super2 = _createSuper(NavigationBar);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _super2.apply(this, arguments);
  }

  _createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
        src: "logo.png",
        alt: "railway",
        width: "135",
        height: "50"
      })), this.props.navList.map(function (item, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: item.id,
          style: {
            backgroundColor: item.active ? "rgb(180, 6, 180)" : ""
          },
          onClick: function onClick(e) {
            var navList1 = _toConsumableArray(_this.props.navList);

            navList1.map(function (item, idx) {
              if (idx == index) {
                navList1[idx].active = true;
              } else {
                navList1[idx].active = false;
              }
            });

            _this.props.setNavList(navList1);
          }
        }, /*#__PURE__*/React.createElement("a", null, item.navName));
      }))));
    }
  }]);

  return NavigationBar;
}(React.Component);

var SideBar = /*#__PURE__*/function (_React$Component3) {
  _inherits(SideBar, _React$Component3);

  var _super3 = _createSuper(SideBar);

  function SideBar() {
    _classCallCheck(this, SideBar);

    return _super3.apply(this, arguments);
  }

  _createClass(SideBar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "first"
      }, /*#__PURE__*/React.createElement("div", {
        id: "firsta",
        className: "news"
      }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Relative Information"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Latest News")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Customer Service")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "App download")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Help"))))), /*#__PURE__*/React.createElement("div", {
        id: "firstb",
        className: "news"
      }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        id: "mode"
      }, "Day Mode")))))));
    }
  }]);

  return SideBar;
}(React.Component);

var DisplayHomepage = /*#__PURE__*/function (_React$Component4) {
  _inherits(DisplayHomepage, _React$Component4);

  var _super4 = _createSuper(DisplayHomepage);

  function DisplayHomepage() {
    _classCallCheck(this, DisplayHomepage);

    return _super4.apply(this, arguments);
  }

  _createClass(DisplayHomepage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "homePage",
        className: "page",
        style: {
          visibility: this.props.navList[0].active ? "visible" : "hidden"
        }
      }, /*#__PURE__*/React.createElement("h3", null, "This is a reservation system for Singapore High-Speed Intercontinental railway system connecting Singapore, all the way to Thailand."), /*#__PURE__*/React.createElement("h3", null, " This offline web application can be used to maintain the waiting list through book, cancel, and disply button."), /*#__PURE__*/React.createElement("label", {
        id: "availableSlotsLabel"
      }, "ALL available Slots"), /*#__PURE__*/React.createElement("table", {
        id: "availableSlots",
        className: "reservationList"
      }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(DisplayFreeSeats, {
        reservationList: this.props.reservationList
      })))));
    }
  }]);

  return DisplayHomepage;
}(React.Component);

var DisplayFreeSeats = /*#__PURE__*/function (_React$Component5) {
  _inherits(DisplayFreeSeats, _React$Component5);

  var _super5 = _createSuper(DisplayFreeSeats);

  function DisplayFreeSeats() {
    _classCallCheck(this, DisplayFreeSeats);

    return _super5.apply(this, arguments);
  }

  _createClass(DisplayFreeSeats, [{
    key: "render",
    value: function render() {
      var reservationList = _toConsumableArray(this.props.reservationList);

      var rows = [0, 1, 2, 3, 4];
      var cols = [0, 1, 2, 3, 4];
      return /*#__PURE__*/React.createElement(React.Fragment, null, rows.map(function (row) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
          key: row
        }, cols.map(function (col) {
          var reservation = reservationList[row * 5 + col];
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
            key: row * 5 + col,
            style: {
              backgroundColor: reservation.reserved ? "rgb(233, 125, 75)" : "rgb(91, 224, 91)"
            }
          }, reservation.serialsNo));
        })));
      }));
    }
  }]);

  return DisplayFreeSeats;
}(React.Component);

var AddTraveller = /*#__PURE__*/function (_React$Component6) {
  _inherits(AddTraveller, _React$Component6);

  var _super6 = _createSuper(AddTraveller);

  function AddTraveller() {
    var _this2;

    _classCallCheck(this, AddTraveller);

    _this2 = _super6.call(this);
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    _this2.resultInfo = "";
    _this2.resultColor = "green";
    _this2.resultVisible = false;
    _this2.addReservation = {
      serialsNo: 0,
      reserved: false,
      name: "",
      phoneNumber: 0,
      timestamp: ""
    };
    _this2.addReservationVisibility = false;
    return _this2;
  }

  _createClass(AddTraveller, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      var reservationList = _toConsumableArray(this.props.reservationList);

      var form = document.forms.travellerAdd;
      var name = form.Name.value;
      var phoneNumber = form.PhoneNumber.value;
      var timestamp = new Date().toLocaleString();
      var flag = false;
      var pos = 0;

      for (var i = 0; i < reservationList.length; i++) {
        if (!reservationList[i].reserved) {
          var pos = i;
          flag = true;
          break;
        }
      }

      if (!flag) {
        this.resultInfo = "Sorry! All seats are already reserved.";
        this.resultVisible = true;
        this.resultColor = "red";
        this.addReservationVisibility = false;
      } else if (!/^[-\sa-zA-Z]+$/.test(name)) {
        this.resultInfo = "Please enter alphabets in Name input.";
        this.resultColor = "red";
        this.addReservationVisibility = false;
      } else if (!/^\d+(\d+)?$/.test(phoneNumber)) {
        this.resultInfo = "Please enter digits in Phone Number input.";
        this.resultColor = "red";
        this.addReservationVisibility = false;
      } else {
        this.resultInfo = "the reservation is confirmed.";
        this.resultColor = "green";
        reservationList[pos] = {
          serialsNo: pos + 1,
          reserved: true,
          name: name,
          phoneNumber: phoneNumber,
          timestamp: timestamp
        };
        this.addReservation = reservationList[pos];
        this.addReservationVisibility = true;
        form.Name.value = "";
        form.PhoneNumber.value = "";
      }

      this.resultVisible = true;
      this.props.setReservationList(reservationList);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.navList[1].active) {
        this.resultVisible = false;
        this.addReservationVisibility = false;
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "bookTicketPage",
        className: "page",
        style: {
          visibility: this.props.navList[1].active ? "visible" : "hidden"
        }
      }, /*#__PURE__*/React.createElement("h3", null, "Please enter the relevant information below to make a reservation."), /*#__PURE__*/React.createElement("form", {
        name: "travellerAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("label", {
        style: {
          width: "150px",
          textAlign: "left",
          display: "inline-block"
        }
      }, "Name:"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "Name",
        placeholder: "Please enter traveller name"
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
        style: {
          width: "150px",
          textAlign: "left",
          display: "inline-block"
        }
      }, "Phone Number: "), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "PhoneNumber",
        placeholder: "Please enter traveller Phone Number"
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", null, "Submit Reservation")), /*#__PURE__*/React.createElement("div", {
        className: "resultParas",
        style: {
          visibility: this.resultVisible ? "visible" : "hidden"
        }
      }, /*#__PURE__*/React.createElement("p", {
        className: "AddResult",
        style: {
          backgroundColor: this.resultColor
        }
      }, this.resultInfo), /*#__PURE__*/React.createElement("table", {
        id: "reservationInfo",
        className: "reservationList",
        style: {
          visibility: this.addReservationVisibility ? "visible" : "hidden"
        }
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Serial No."), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone Number"), /*#__PURE__*/React.createElement("th", null, "Timestamp"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, this.addReservation.serialsNo), /*#__PURE__*/React.createElement("td", null, this.addReservation.name), /*#__PURE__*/React.createElement("td", null, this.addReservation.phoneNumber), /*#__PURE__*/React.createElement("td", null, this.addReservation.timestamp)))))));
    }
  }]);

  return AddTraveller;
}(React.Component);

var DeleteTraveller = /*#__PURE__*/function (_React$Component7) {
  _inherits(DeleteTraveller, _React$Component7);

  var _super7 = _createSuper(DeleteTraveller);

  function DeleteTraveller() {
    var _this3;

    _classCallCheck(this, DeleteTraveller);

    _this3 = _super7.call(this);
    _this3.handleSubmit = _this3.handleSubmit.bind(_assertThisInitialized(_this3));
    _this3.resultInfo = "";
    _this3.resultColor = "green";
    _this3.resultVisible = false;
    _this3.deleteReservation = {
      serialsNo: 0,
      reserved: false,
      name: "",
      phoneNumber: 0,
      timestamp: ""
    };
    _this3.deleteReservationVisibility = false;
    return _this3;
  }

  _createClass(DeleteTraveller, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      var reservationList = _toConsumableArray(this.props.reservationList);

      var form = document.forms.travellerDelete;

      if (!/^\d+(\d+)?$/.test(form.SerialsNo.value)) {
        this.resultInfo = "Please enter digits in Serial Number input.";
        this.resultColor = "red";
        this.deleteReservationVisibility = false;
      } else {
        var pos = form.SerialsNo.value - 1;

        if (pos <= -1 || pos >= 25) {
          this.resultInfo = "Please enter Serial Number between 1 - 25.";
          this.resultColor = "red";
          this.deleteReservationVisibility = false;
        } else if (reservationList[pos].reserved) {
          this.deleteReservation = reservationList[pos];
          reservationList[pos] = {
            serialsNo: pos + 1,
            reserved: false,
            name: "",
            phoneNumber: 0,
            timestamp: ""
          };
          this.resultInfo = "The reservation has been canceled.";
          this.resultColor = "green";
          this.deleteReservationVisibility = true;
          form.SerialsNo.value = "";
        } else {
          this.resultInfo = "Please enter correct reservation serials number.";
          this.resultColor = "red";
          this.deleteReservationVisibility = false;
        }
      }

      this.props.setReservationList(reservationList);
      this.resultVisible = true;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.navList[2].active) {
        this.resultVisible = false;
        this.deleteReservationVisibility = false;
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "cancelTicketPage",
        className: "page",
        style: {
          visibility: this.props.navList[2].active ? "visible" : "hidden"
        }
      }, /*#__PURE__*/React.createElement("h3", null, "Please enter the relevant information below to cancel a reservation."), /*#__PURE__*/React.createElement("form", {
        name: "travellerDelete",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("label", {
        style: {
          width: "150px",
          textAlign: "left",
          display: "inline-block"
        }
      }, "Serial No. :"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "SerialsNo",
        placeholder: "Please enter serial number"
      }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", null, "Cancel Reservation")), /*#__PURE__*/React.createElement("div", {
        className: "resultParas",
        style: {
          visibility: this.resultVisible ? "visible" : "hidden"
        }
      }, /*#__PURE__*/React.createElement("p", {
        className: "cancelResult",
        style: {
          backgroundColor: this.resultColor
        }
      }, this.resultInfo), /*#__PURE__*/React.createElement("table", {
        id: "reservationInfo",
        className: "reservationList",
        style: {
          visibility: this.deleteReservationVisibility ? "visible" : "hidden"
        }
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Serial No."), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone Number"), /*#__PURE__*/React.createElement("th", null, "Timestamp"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, this.deleteReservation.serialsNo), /*#__PURE__*/React.createElement("td", null, this.deleteReservation.name), /*#__PURE__*/React.createElement("td", null, this.deleteReservation.phoneNumber), /*#__PURE__*/React.createElement("td", null, this.deleteReservation.timestamp)))))));
    }
  }]);

  return DeleteTraveller;
}(React.Component);

var TravellerRow = /*#__PURE__*/function (_React$Component8) {
  _inherits(TravellerRow, _React$Component8);

  var _super8 = _createSuper(TravellerRow);

  function TravellerRow() {
    _classCallCheck(this, TravellerRow);

    return _super8.apply(this, arguments);
  }

  _createClass(TravellerRow, [{
    key: "render",
    value: function render() {
      var traveller = this.props.traveller;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, traveller.serialsNo), /*#__PURE__*/React.createElement("td", null, traveller.name), /*#__PURE__*/React.createElement("td", null, traveller.phoneNumber), /*#__PURE__*/React.createElement("td", null, traveller.timestamp));
    }
  }]);

  return TravellerRow;
}(React.Component);

var ReservationTable = /*#__PURE__*/function (_React$Component9) {
  _inherits(ReservationTable, _React$Component9);

  var _super9 = _createSuper(ReservationTable);

  function ReservationTable() {
    _classCallCheck(this, ReservationTable);

    return _super9.apply(this, arguments);
  }

  _createClass(ReservationTable, [{
    key: "render",
    value: function render() {
      var travellerRows = this.props.reservationList.map(function (traveller) {
        if (traveller.reserved) {
          return /*#__PURE__*/React.createElement(TravellerRow, {
            key: traveller.serialsNo,
            traveller: traveller
          });
        }
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "reservationList"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Serial No."), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone Number"), /*#__PURE__*/React.createElement("th", null, "Timestamp"))), /*#__PURE__*/React.createElement("tbody", null, travellerRows));
    }
  }]);

  return ReservationTable;
}(React.Component);

var DisplayTraveller = /*#__PURE__*/function (_React$Component10) {
  _inherits(DisplayTraveller, _React$Component10);

  var _super10 = _createSuper(DisplayTraveller);

  function DisplayTraveller() {
    _classCallCheck(this, DisplayTraveller);

    return _super10.apply(this, arguments);
  }

  _createClass(DisplayTraveller, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        id: "displayReservationPage",
        className: "page",
        style: {
          visibility: this.props.navList[3].active ? "visible" : "hidden"
        }
      }, /*#__PURE__*/React.createElement("h3", null, "The traveller information list is shown below"), /*#__PURE__*/React.createElement(ReservationTable, {
        reservationList: this.props.reservationList
      })));
    }
  }]);

  return DisplayTraveller;
}(React.Component);

var WholeBody = /*#__PURE__*/function (_React$Component11) {
  _inherits(WholeBody, _React$Component11);

  var _super11 = _createSuper(WholeBody);

  function WholeBody() {
    var _this4;

    _classCallCheck(this, WholeBody);

    _this4 = _super11.call(this);
    var numberOfslot = 25;
    var reservationList = [];

    for (var i = 0; i < numberOfslot; i++) {
      reservationList[i] = {
        reserved: false,
        serialsNo: i + 1,
        name: "",
        phoneNumber: 0,
        timestamp: ""
      };
    }

    _this4.state = {
      navList: [{
        id: 0,
        navName: "Home",
        active: true
      }, {
        id: 1,
        navName: "Book Tickets",
        active: false
      }, {
        id: 2,
        navName: "Cancel Tickets",
        active: false
      }, {
        id: 3,
        navName: "Display Reservation List",
        active: false
      }],
      reservationList: reservationList
    };
    _this4.setNavList = _this4.setNavList.bind(_assertThisInitialized(_this4));
    _this4.setReservationList = _this4.setReservationList.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(WholeBody, [{
    key: "setNavList",
    value: function setNavList(navIssues) {
      this.setState({
        navList: navIssues
      });
    }
  }, {
    key: "setReservationList",
    value: function setReservationList(Reservations) {
      this.setState({
        reservationList: Reservations
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavigationBar, {
        navList: this.state.navList,
        setNavList: this.setNavList
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
        id: "container"
      }, /*#__PURE__*/React.createElement(SideBar, null), /*#__PURE__*/React.createElement("div", {
        id: "mainPage"
      }, /*#__PURE__*/React.createElement(DisplayHomepage, {
        navList: this.state.navList,
        reservationList: this.state.reservationList
      }), /*#__PURE__*/React.createElement(AddTraveller, {
        navList: this.state.navList,
        reservationList: this.state.reservationList,
        setReservationList: this.setReservationList
      }), /*#__PURE__*/React.createElement(DeleteTraveller, {
        navList: this.state.navList,
        reservationList: this.state.reservationList,
        setReservationList: this.setReservationList
      }), /*#__PURE__*/React.createElement(DisplayTraveller, {
        navList: this.state.navList,
        reservationList: this.state.reservationList
      }))));
    }
  }]);

  return WholeBody;
}(React.Component);

var element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Headler, null), /*#__PURE__*/React.createElement(WholeBody, null));
ReactDOM.render(element, document.getElementById('contents'));