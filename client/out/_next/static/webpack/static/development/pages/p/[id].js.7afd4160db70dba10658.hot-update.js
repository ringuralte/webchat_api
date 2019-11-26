webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./components/Store.js":
/*!*****************************!*\
  !*** ./components/Store.js ***!
  \*****************************/
/*! exports provided: storeCTX, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCTX", function() { return storeCTX; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/home/ringu/Projects/web-chat/components/Store.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


var storeCTX = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext();
var socket;
var initState = {};

function reducer(state, action) {
  //might not be the right way for react
  var prevState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state);

  var length = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(prevState).length;

  prevState[length + 1] = action.payload;

  switch (action.type) {
    case "RECEIVE MESSAGE":
      {
        console.log(action.payload.topic);

        if (action.payload.topic === JSON.parse(window.localStorage.getItem("topic"))) {
          return prevState;
        } else {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state);
        }
      }

    case "FETCH MESSAGE":
      return action.payload;

    default:
      return state;
  }
}

function sendChatAction(value) {
  console.log(value);
  socket.emit("chat message", value);
}

var Store = function Store(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({}),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      newLink = _React$useState2[0],
      setNewLink = _React$useState2[1];

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_3___default.a.useReducer(reducer, initState),
      _React$useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      allChats = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      user = _React$useState4[0],
      setUser = _React$useState4[1]; //topic should not be confused with newLink, newLink fetches data from server
  //while topic is just used for UI stuffs in header component


  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      topic = _React$useState6[0],
      setTopic = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    fetch("/api/topics", {
      credentials: "include"
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      if (json.code === 200) {
        setNewLink(json.topics);
      }
    });
  }, []);

  if (!socket) {
    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()(":5000");
    socket.on("chat message", function (msg) {
      dispatch({
        type: "RECEIVE MESSAGE",
        payload: msg
      });
    });
  }

  return __jsx(storeCTX.Provider, {
    value: {
      allChats: allChats,
      dispatch: dispatch,
      sendChatAction: sendChatAction,
      newLink: newLink,
      user: user,
      setUser: setUser,
      topic: topic,
      setTopic: setTopic
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ })

})
//# sourceMappingURL=[id].js.7afd4160db70dba10658.hot-update.js.map