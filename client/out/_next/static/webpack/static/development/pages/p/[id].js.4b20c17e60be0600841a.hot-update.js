webpackHotUpdate("static/development/pages/p/[id].js",{

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Textbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Textbox */ "./components/Textbox.js");
/* harmony import */ var _components_Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Store */ "./components/Store.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "/home/ringu/Projects/web-chat/pages/p/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// !Need to use allChats from the Store and not a react state













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createStyles"])({
    root: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      paddingBottom: 50
    },
    chatContainer: {
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      minHeight: "85vh",
      background: "#292d3e"
    },
    chatItems: {
      paddingLeft: 0,
      paddingRight: "25vw",
      color: "#ffcb6b"
    },
    chatItemsUser: {
      paddingLeft: "25vw",
      paddingRight: 0,
      textAlign: "right",
      color: "#84ffff"
    },
    senderName: {
      color: "#f07178"
    },
    chat: {
      flexGrow: 1
    },
    text: {
      padding: theme.spacing(2, 2, 0)
    }
  });
});

var ChatRooms = function ChatRooms() {
  var classes = useStyles();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_components_Store__WEBPACK_IMPORTED_MODULE_7__["storeCTX"]),
      allChats = _React$useContext.allChats,
      dispatch = _React$useContext.dispatch,
      topic = _React$useContext.topic,
      setTopic = _React$useContext.setTopic; // const [loggedInStatus, setLoggedInStatus] = React.useState(false);


  var user = js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get("user");
  var scrollRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      isLoading = _React$useState2[0],
      setIsLoading = _React$useState2[1]; //!TODO the pages load to scroll bottom even when there is not enough
  //chat items and since the container have min-height of 100vh


  var scrollViewOnSend = function scrollViewOnSend() {
    scrollRef.current.scrollIntoView();
  };

  var scrollViewOnLoad = function scrollViewOnLoad() {
    scrollRef.current.scrollIntoView();
  }; //when component mounts


  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(scrollViewOnLoad); //when component is updated

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(scrollViewOnSend, [allChats]); //ran when going to a new group by clicking on header topics

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default()("http://localhost:5000/api/getChats/".concat(window.localStorage.getItem("topic")), {
      credentials: "include"
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      if (json.code === 200) {
        dispatch({
          type: "FETCH MESSAGE",
          payload: json.chats
        });
        setIsLoading(false);
      } else {
        setTopic("");
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/signin");
      }
    });
  }, [topic]);
  var chats;

  if (!isLoading) {
    return (// user chats goes right aligned
      __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: classes.chatContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(allChats).map(function (key) {
        if (user === allChats[key].sender) {
          return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.chatItemsUser,
            key: allChats[key].id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
            primary: "".concat(allChats[key].msg),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }));
        } else {
          // other users appear on left
          return __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.chatItems,
            key: allChats[key].id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
            primary: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              },
              __self: this
            }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
              className: classes.senderName,
              component: "span",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            }, "".concat(allChats[key].sender) + " : "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
              component: "span",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 139
              },
              __self: this
            }, "".concat(allChats[key].msg))),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            },
            __self: this
          }));
        }
      })), __jsx("div", {
        ref: scrollRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), __jsx(_components_Textbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })))
    );
  } else {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ChatRooms);

/***/ })

})
//# sourceMappingURL=[id].js.4b20c17e60be0600841a.hot-update.js.map