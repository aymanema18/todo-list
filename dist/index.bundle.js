"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Inter-VariableFont_slnt,wght.ttf */ "./src/fonts/Inter-VariableFont_slnt,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "inter";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
    box-sizing: border-box;
}

:root {
    --light-pink: #ffeded;
    --dark-pink: #EED8DA;
    --dark-gray: #4F4F33;
}

body {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100vh;
    color: var(--dark-gray);
    font-family: "inter", Arial, Helvetica, sans-serif;
}

section {
    background-color: var(--light-pink);
    display: grid;
    grid-template-rows: repeat(2, min-content) 1fr;
    padding: 0 16px;
    box-shadow: 3px 0px 5px rgb(0, 0, 0, 0.2);
    z-index: 1;
}

.logo {
    padding: 35px 0;
    text-align: start;
    font-size: 26px;
    font-weight: bold;
}

.heading-and-btn-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}

.add-project-btn {
    justify-self: end;
}

.nav {
    align-self: end;
}

ul {
    list-style-type: none;
    padding: 0;
}

main {
    background-color: var(--dark-pink);
    padding: 60px 30px;
}

.tasks-div {
    background-color: var(--light-pink);
    min-height: 60%;
    max-height: 800px;
    padding: 25px;
    box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.2);
    border-radius: 15px
}

p {
    margin: 0;
}

.projects-title, h1 {
    font-size: 26px;
    font-weight: bold;
}

.add-task-btn {
    margin-top: 15px;
}

.btn {
    cursor: pointer;
}

dialog {
    color: var(--dark-gray);
    padding: 25px;
    background-color: var(--light-pink);
    border: none;
    box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.2);
    border-radius: 15px;
    width: 300px;
}

.dl-btns-div-proj, .dl-btns-div-task, .dl-btns-div-task-edit, .dl-btns-div-proj-edit {
    display: flex;
    justify-content: end;
    padding-top: 15px;
    gap: 15px;
    font-size: 15px;
}

input[type="text"] {
    padding: 0.4em;
}

.input-div {
    display: flex;
    flex-direction: column;
    font-weight: bold;
}

.proj-cancel, .task-cancel, .task-cancel-edit {
    font-weight: 400;
}

.proj-add, .task-add, .task-add-edit, .proj-add-edit {
    font-weight: bold;
}

.task-add, .proj-add, .task-add-edit, .proj-add-edit {
    font-family: 'inter', Arial, Helvetica, sans-serif;
    border: none;
    background: none;
    font-size: 15px;
    color: var(--dark-gray);
}

.project {
    display: flex;
    padding-left: 10px;
    justify-content: space-between;
}

.pj-dl-ed-container {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 5px;
}

.title-desc-div, .date-dl-edit-div {
    display: flex;
    gap: 25px;
}

.title-desc-div {
    padding-left: 7px;
}

.task {
    display: grid;
    grid-template-columns: min-content 1fr max-content;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid var(--dark-gray);
}

.check-btn {
    height: 20px;
    width: 20px;
    background-color: white;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}

.trash-can, .edit-pen {
    height: 18px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAAmD;AACvD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,kDAAkD;AACtD;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,8CAA8C;IAC9C,eAAe;IACf,yCAAyC;IACzC,UAAU;AACd;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,yCAAyC;IACzC;AACJ;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,yCAAyC;IACzC,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,iBAAiB;IACjB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kDAAkD;IAClD,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kDAAkD;IAClD,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;IACd,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: \"inter\";\n    src: url(./fonts/Inter-VariableFont_slnt\\,wght.ttf);\n}\n\n* {\n    box-sizing: border-box;\n}\n\n:root {\n    --light-pink: #ffeded;\n    --dark-pink: #EED8DA;\n    --dark-gray: #4F4F33;\n}\n\nbody {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100vh;\n    color: var(--dark-gray);\n    font-family: \"inter\", Arial, Helvetica, sans-serif;\n}\n\nsection {\n    background-color: var(--light-pink);\n    display: grid;\n    grid-template-rows: repeat(2, min-content) 1fr;\n    padding: 0 16px;\n    box-shadow: 3px 0px 5px rgb(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.logo {\n    padding: 35px 0;\n    text-align: start;\n    font-size: 26px;\n    font-weight: bold;\n}\n\n.heading-and-btn-div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 5px;\n}\n\n.add-project-btn {\n    justify-self: end;\n}\n\n.nav {\n    align-self: end;\n}\n\nul {\n    list-style-type: none;\n    padding: 0;\n}\n\nmain {\n    background-color: var(--dark-pink);\n    padding: 60px 30px;\n}\n\n.tasks-div {\n    background-color: var(--light-pink);\n    min-height: 60%;\n    max-height: 800px;\n    padding: 25px;\n    box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.2);\n    border-radius: 15px\n}\n\np {\n    margin: 0;\n}\n\n.projects-title, h1 {\n    font-size: 26px;\n    font-weight: bold;\n}\n\n.add-task-btn {\n    margin-top: 15px;\n}\n\n.btn {\n    cursor: pointer;\n}\n\ndialog {\n    color: var(--dark-gray);\n    padding: 25px;\n    background-color: var(--light-pink);\n    border: none;\n    box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.2);\n    border-radius: 15px;\n    width: 300px;\n}\n\n.dl-btns-div-proj, .dl-btns-div-task, .dl-btns-div-task-edit, .dl-btns-div-proj-edit {\n    display: flex;\n    justify-content: end;\n    padding-top: 15px;\n    gap: 15px;\n    font-size: 15px;\n}\n\ninput[type=\"text\"] {\n    padding: 0.4em;\n}\n\n.input-div {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n}\n\n.proj-cancel, .task-cancel, .task-cancel-edit {\n    font-weight: 400;\n}\n\n.proj-add, .task-add, .task-add-edit, .proj-add-edit {\n    font-weight: bold;\n}\n\n.task-add, .proj-add, .task-add-edit, .proj-add-edit {\n    font-family: 'inter', Arial, Helvetica, sans-serif;\n    border: none;\n    background: none;\n    font-size: 15px;\n    color: var(--dark-gray);\n}\n\n.project {\n    display: flex;\n    padding-left: 10px;\n    justify-content: space-between;\n}\n\n.pj-dl-ed-container {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 5px;\n}\n\n.title-desc-div, .date-dl-edit-div {\n    display: flex;\n    gap: 25px;\n}\n\n.title-desc-div {\n    padding-left: 7px;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: min-content 1fr max-content;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 0;\n    border-bottom: 1px solid var(--dark-gray);\n}\n\n.check-btn {\n    height: 20px;\n    width: 20px;\n    background-color: white;\n    font-size: 20px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.trash-can, .edit-pen {\n    height: 18px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/complete-task.js":
/*!******************************!*\
  !*** ./src/complete-task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isComplete: () => (/* binding */ isComplete)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");


function isComplete(projectIndex, taskIndex) {
    if (_create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos[taskIndex].complete === false) {
        _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos[taskIndex].complete = true;
    } else {
        _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos[taskIndex].complete = false;
    }
}



/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _id_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id-generator */ "./src/id-generator.js");


let projects = [];

function createProject(name){
    projects.push({name, id: (0,_id_generator__WEBPACK_IMPORTED_MODULE_0__.idGenerator)(), todos: []});
}



/***/ }),

/***/ "./src/create-todo.js":
/*!****************************!*\
  !*** ./src/create-todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");



class Todo {
    constructor(title, dateInput, index, description = '', deleteId, priority, complete = false) {
        this.title = title;
        this.description = description;
        this.date = dateInput;
        this.id = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].id;
        this.deleteId = deleteId;
        this.priority = priority;
        this.complete = complete;
    }
}

function createTodo(title, dateInput, index, description = '', deleteId, priority, complete = false) {
    _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos.push(new Todo(title, dateInput, index, description, deleteId, priority, complete));
}




/***/ }),

/***/ "./src/delete-project.js":
/*!*******************************!*\
  !*** ./src/delete-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");


function deleteProject(projectIndex) {
    _create_project__WEBPACK_IMPORTED_MODULE_0__.projects.splice(projectIndex, 1);
}



/***/ }),

/***/ "./src/delete-todo.js":
/*!****************************!*\
  !*** ./src/delete-todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");


function deleteTodo(todoIndex, projectIndex) {
    _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos.splice(todoIndex, 1);
}



/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProject: () => (/* binding */ displayProject),
/* harmony export */   initDisplay: () => (/* binding */ initDisplay),
/* harmony export */   showProjects: () => (/* binding */ showProjects)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-todo */ "./src/create-todo.js");
/* harmony import */ var _id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./id-generator */ "./src/id-generator.js");
/* harmony import */ var _delete_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-todo */ "./src/delete-todo.js");
/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-project */ "./src/delete-project.js");
/* harmony import */ var _complete_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complete-task */ "./src/complete-task.js");
/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-task */ "./src/edit-task.js");
/* harmony import */ var _store_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store-project */ "./src/store-project.js");
/* harmony import */ var _edit_project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-project */ "./src/edit-project.js");










const today = new Date().toISOString().split('T')[0];
document.querySelector('#task-date').setAttribute('min', today);
document.querySelector('#task-date-edit').setAttribute('min', today);

function initDisplay() {
    window.addEventListener('DOMContentLoaded', () => {
        const homeBtn = document.querySelector('.home');
        const aboutBtn = document.querySelector('.about');
        const tasksDiv = document.querySelector('.tasks-div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const q = document.createElement('q');
        const span = document.createElement('span');
        tasksDiv.innerHTML = '';
        h1.textContent = 'yeah science!';
        q.textContent = 'Some people have a way with words, and other people...oh, uh, not have way.';
        span.textContent = ' - Steve Martin';
        p.appendChild(q);
        p.appendChild(span);
        tasksDiv.appendChild(h1);
        tasksDiv.appendChild(p);

        
        homeBtn.addEventListener('click', () => {
            const tasksDiv = document.querySelector('.tasks-div');
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            const q = document.createElement('q');
            const span = document.createElement('span');
            tasksDiv.innerHTML = '';
            h1.textContent = 'yeah science!';
            q.textContent = 'Some people have a way with words, and other people...oh, uh, not have way.';
            span.textContent = ' - Steve Martin';
            p.appendChild(q);
            p.appendChild(span);
            tasksDiv.appendChild(h1);
            tasksDiv.appendChild(p);
        })
        showProjects();
        displayProject();
        aboutBtn.addEventListener('click', () => {
            const tasksDiv = document.querySelector('.tasks-div');
            tasksDiv.innerHTML = `<h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione delectus perspiciatis. Accusantium rerum officia atque harum possimus! Quisquam, facere eum magni quasi sapiente doloremque officia. Exercitationem itaque debitis quibusdam. Quisquam quod in labore aperiam enim veniam excepturi laboriosam at.</p> <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione delectus perspiciatis. Accusantium rerum officia atque harum possimus! Quisquam, facere eum magni quasi sapiente doloremque officia. Exercitationem itaque debitis quibusdam. Quisquam quod in labore aperiam enim veniam excepturi laboriosam at.</p>`;
        })
    })

}

function showProjects() {
    const projectsData = JSON.parse(localStorage.getItem('projects'));
    const projectsContainer = document.querySelector('.projects-div');
    console.log(projectsData);
    for (let proj of projectsData) {
            _create_project__WEBPACK_IMPORTED_MODULE_0__.projects.push(proj);
            const project = document.createElement('div');
            const projectEditBtn = document.createElement('div');
            const projectDlBtn = document.createElement('div');
            const projTitle = document.createElement('p');
            const edDlContainer = document.createElement('div');
            projectEditBtn.setAttribute('data-id', proj.id);
            projectDlBtn.setAttribute('data-id', proj.id);
            project.setAttribute('data-id', proj.id);
            projTitle.classList.add('btn');
            projTitle.classList.add('project-title');
            edDlContainer.classList.add('pj-dl-ed-container');
            projectDlBtn.classList.add('btn');
            projectDlBtn.classList.add('proj-delete-btn');
            projectEditBtn.classList.add('btn');
            projectEditBtn.classList.add('project-edit-btn');
            project.classList.add('project');
            projTitle.textContent = proj.name;
            projectDlBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="trash-can" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
            projectEditBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="edit-pen" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
            
            project.appendChild(projTitle);
            edDlContainer.appendChild(projectEditBtn);
            edDlContainer.appendChild(projectDlBtn);
            project.appendChild(edDlContainer);
            projectsContainer.appendChild(project);

            displayEditProject(projectEditBtn);
            displayDeleteProject(projectDlBtn);
            clickingOnProject(projTitle);
        }
}

function displayProject() {
    const addProjDl = document.querySelector('.proj-add');
    const dialogPr = document.querySelector('.project-dialog');
    const cnlProjDlBtn = document.querySelector('.proj-cancel');
    const dialogTask = document.querySelector('.task-dialog');
    const cnlTaskBtn = document.querySelector('.task-cancel');
    const projectsDiv = document.querySelector('.projects-div');
    const addProjBtn = document.querySelector('.add-project-btn');


    addProjBtn.addEventListener('click', () => {
        dialogPr.showModal();
    })

    cnlProjDlBtn.addEventListener('click', () => {
        const projName = document.querySelector('#project-name');
        projName.value = '';
        dialogPr.close();
    })

    cnlTaskBtn.addEventListener('click', () => {
        const taskTitle = document.querySelector('#task-name');
        const taskDesc = document.querySelector('#task-description');
        const taskDate = document.querySelector('#task-date');
        const taskPriority = document.querySelector('#task-priority');
        taskPriority.value = 'priority1';
        taskDate.value = '';
        taskDesc.value = ''; 
        taskTitle.value = '';
        dialogTask.close();
    })


    addProjDl.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#project-name').value;
        if (name.length !== 0 && name.length < 11) {
            const project = document.createElement('div');
            const title = document.createElement('p');
            const tasks = document.createElement('div');
            const oldTasks = document.querySelector('.tasks');
            const deleteDiv = document.createElement('div');
            const addTask = document.createElement('div');
            const tasksDiv = document.querySelector('.tasks-div');
            const oldPjTl = document.querySelector('.projects-title');
            const oldAddTask = document.querySelector('.add-task-btn');
            const projTitle = document.createElement('p');
            const projName = document.querySelector('#project-name');
            const edDlContainer = document.createElement('div');
            const projectEditBtn = document.createElement('div');
            let id;
            projectEditBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="edit-pen" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
            deleteDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="trash-can" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
            projectEditBtn.classList.add('btn');
            projectEditBtn.classList.add('project-edit-btn');
            deleteDiv.classList.add('btn');
            deleteDiv.classList.add('proj-delete-btn');
            
            if (oldTasks) {
                oldTasks.remove();
            }
            
            if (oldAddTask) {
                oldAddTask.remove();
            }
    
            if (oldPjTl) {
                oldPjTl.remove();
            }
    
            addTask.addEventListener('click', () => {
                dialogTask.showModal();
            })
            displayEditProject(projectEditBtn);
            (0,_create_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);
            addTask.classList.add('btn');
            addTask.classList.add('add-task-btn');
            edDlContainer.classList.add('pj-dl-ed-container');
            projTitle.classList.add('projects-title');
            tasks.classList.add('tasks');
            projTitle.textContent = name;
            addTask.textContent = '+ Add task';
            title.textContent = name;
            title.classList.add('project-title');
            for (let obj of _create_project__WEBPACK_IMPORTED_MODULE_0__.projects) {
                id = obj.id; 
            }
            tasksDiv.innerHTML = '';
            project.setAttribute('data-id', id);
            projTitle.setAttribute('data-id', id);
            addTask.setAttribute('data-id', id);
            tasksDiv.appendChild(projTitle);
            tasksDiv.appendChild(tasks);
            tasksDiv.appendChild(addTask);
            project.classList.add('btn');
            project.classList.add('project');
            project.appendChild(title);
            edDlContainer.appendChild(projectEditBtn);
            edDlContainer.appendChild(deleteDiv);
            project.appendChild(edDlContainer);
            projectsDiv.appendChild(project);
            displayTodo(id);
            displayDeleteProject(deleteDiv);
            clickingOnProject(title);
            projName.value = '';
            dialogPr.close();
            (0,_store_project__WEBPACK_IMPORTED_MODULE_7__.storeProjects)();

        }
    })
}

function displayEditProject(editBtn) {
    const projectDL = document.querySelector('.project-dialog-edit');
    
    editBtn.addEventListener('click', () => {
        projectDL.showModal();
        const editBtnContainer = document.querySelector('.dl-btns-div-proj-edit');
        const oldEdBtnDl = document.querySelector('.proj-add-edit');
        const edBtnDl = document.createElement('button');
        const clProjEdBtn = document.querySelector('.proj-cancel-edit');

        if (oldEdBtnDl) {
            oldEdBtnDl.remove();
        }
        edBtnDl.classList.add('btn');
        edBtnDl.classList.add('proj-add-edit');
        edBtnDl.setAttribute('data-id', editBtn.parentElement.parentElement.getAttribute('data-id'));
        edBtnDl.textContent = 'Edit';
        editBtnContainer.appendChild(edBtnDl);

        edBtnDl.addEventListener('click', (event) => {
            const name = document.querySelector('#project-name-edit').value;
            event.preventDefault();
            if (name.length !== 0 && name.length < 11) {
                const projDiv = document.querySelectorAll('.project');
                const projIndex = Array.prototype.slice.call(projDiv).findIndex((obj) => {
                    return obj.getAttribute('data-id') === edBtnDl.getAttribute('data-id');
                })
                const projTitle = projDiv[projIndex].querySelector('p');
                const index = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => {
                    return obj.id === edBtnDl.getAttribute('data-id');
                })
                ;(0,_edit_project__WEBPACK_IMPORTED_MODULE_8__.editProject)(index, name);
                (0,_store_project__WEBPACK_IMPORTED_MODULE_7__.storeProjects)();
                projTitle.textContent = name;
                document.querySelector('#project-name-edit').value = '';
                projectDL.close();

            }
        })

        clProjEdBtn.addEventListener('click', () => {
            document.querySelector('#project-name-edit').value = '';
            projectDL.close();
        })

        
        
    })
}


function displayTodo(id) {
    const formBtnsContainer = document.querySelector('.dl-btns-div-task');
    const oldAddTaskBtn = document.querySelector('.task-add');
    const addTaskDlBtn = document.createElement('button');
    const dialogTask = document.querySelector('.task-dialog');

    if (oldAddTaskBtn) {
        oldAddTaskBtn.remove();
    }

    addTaskDlBtn.classList.add('btn')
    addTaskDlBtn.classList.add('task-add')
    addTaskDlBtn.textContent = 'Add task';
    formBtnsContainer.appendChild(addTaskDlBtn);
    addTaskDlBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // const projectsDOM = document.querySelectorAll('.project');
        const name = document.querySelector('#task-name').value;
        const dateInput = document.querySelector('#task-date').value;
        const description = document.querySelector('#task-description').value;
        const priority = document.querySelector('#task-priority').value;
        if (name.length !== 0 && name.length < 53 && dateInput !== '' && description.length < 55) {
            const dlId = (0,_id_generator__WEBPACK_IMPORTED_MODULE_2__.idGenerator)();
            const taskTitle = document.querySelector('#task-name');
            const taskDesc = document.querySelector('#task-description');
            const taskDate = document.querySelector('#task-date');
            const taskPriority = document.querySelector('#task-priority');
            // let project;
            const index = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => obj.id === id);
            // const index = projects.findIndex((obj) => obj.id === addTask.parentElement.getAttribute("data-id"));
            (0,_create_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(name, dateInput, index, description, dlId, priority);
            // for (let proj of projectsDOM) {
                //     if (proj.getAttribute('data-id') === addTask.getAttribute('data-id')) {
                    //         project = proj;
                    //     }
            // }
            
            showTasks(index, id, dlId);
            taskPriority.value = 'priority1';
            taskDate.value = '';
            taskDesc.value = ''; 
            taskTitle.value = '';
            dialogTask.close();
            (0,_store_project__WEBPACK_IMPORTED_MODULE_7__.storeProjects)();

        }
    });
    
}


function showTasks(index, id, dlId, counter) {
    const tasksDiv = document.querySelector('.tasks');
    const taskDiv = document.createElement('div');
    const dateDlEditDiv = document.createElement('div');
    const titleDescDiv = document.createElement('div');
    const checkBtn = document.createElement('div')
    const title = document.createElement('p');
    const description = document.createElement('p');
    const editBtn = document.createElement('div');
    const theDate = document.createElement('p');
    const deleteTaskDiv = document.createElement('div');
    let todo;
    if (typeof counter === 'number') {
        todo =  _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos[counter];
    } else {
        todo =  _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos[_create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos.length - 1];
    }
    title.textContent = todo.title;
    theDate.textContent = todo.date;
    description.textContent = todo.description;
    editBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="edit-pen" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
    deleteTaskDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="trash-can" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
    taskDiv.classList.add('task');
    checkBtn.classList.add('btn');
    checkBtn.classList.add('check-btn');
    title.classList.add('task-title');
    description.classList.add('task-desc');
    theDate.classList.add('date-task');
    editBtn.classList.add('btn');
    editBtn.classList.add('edit-btn');
    deleteTaskDiv.classList.add('btn');
    deleteTaskDiv.classList.add('dl-task-div');
    titleDescDiv.classList.add('title-desc-div');
    dateDlEditDiv.classList.add('date-dl-edit-div');
    titleDescDiv.appendChild(title);
    titleDescDiv.appendChild(description);
    dateDlEditDiv.appendChild(theDate);
    dateDlEditDiv.appendChild(editBtn);
    dateDlEditDiv.appendChild(deleteTaskDiv);
    taskDiv.appendChild(checkBtn);
    taskDiv.appendChild(titleDescDiv);
    taskDiv.appendChild(dateDlEditDiv);
    deleteTaskDiv.setAttribute('data-dl-id', dlId);
    taskDiv.setAttribute('data-id', id);
    taskDiv.setAttribute('data-dl-id', dlId);
    tasksDiv.appendChild(taskDiv);
    
    const taskIndex = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos.findIndex((obj) => {
        return obj.deleteId === dlId;
    })
    if(_create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos[taskIndex].complete === false) {
        checkBtn.textContent = '';
    } else {
        checkBtn.textContent = '✓';
    }
    checkBtn.addEventListener('click', () => {
        isChecked(checkBtn, index, dlId);
    })
    
    
    editCheckButtonColor(todo, checkBtn);
    displayEdit(editBtn, index, todo, checkBtn, title, description, theDate);
    displayDeleteTodo(deleteTaskDiv, index, dlId);
}

function isChecked(checkBtn, index, dlId) {
    const taskIndex = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos.findIndex((obj) => {
        return obj.deleteId === dlId;
    })
    if(_create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos[taskIndex].complete === false) {
            checkBtn.textContent = '✓';
            (0,_complete_task__WEBPACK_IMPORTED_MODULE_5__.isComplete)(index, taskIndex)
    } else {
        checkBtn.textContent = '';
        (0,_complete_task__WEBPACK_IMPORTED_MODULE_5__.isComplete)(index, taskIndex)
    }
}


function editCheckButtonColor(todo, checkBtn) {
    if (todo.priority === 'priority1') {
        checkBtn.style.border = '3px solid #EE5859';
    } else if (todo.priority === 'priority2') {
        checkBtn.style.border = '3px solid #7FED58';
    } else {
        checkBtn.style.border = '3px solid #57C0ED';
    }
}


function displayDeleteTodo(deleteDiv, index, deleteId) {
    deleteDiv.addEventListener('click', () => {
        const todosIndex = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos.findIndex((obj) => {
            return obj.deleteId === deleteId;
        })
        const task = document.querySelector(`div[data-dl-id="${deleteId}"]`);
        task.remove();
        (0,_delete_todo__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(todosIndex, index);
        (0,_store_project__WEBPACK_IMPORTED_MODULE_7__.storeProjects)();
    })
}

function displayDeleteProject(deleteDiv) {
    deleteDiv.addEventListener('click', (event) => {
        const projectIndex = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => {
            return obj.id === event.target.parentElement.parentElement.getAttribute('data-id');
        })
        event.target.parentElement.parentElement.remove();
        deleteTasks(projectIndex);
        (0,_delete_project__WEBPACK_IMPORTED_MODULE_4__.deleteProject)(projectIndex);
        (0,_store_project__WEBPACK_IMPORTED_MODULE_7__.storeProjects)();
        
    })
}

function deleteTasks(projectIndex) {
    const tasks = document.querySelectorAll('.task');
    const addTask = document.querySelector('.add-task-btn');
    for (let task of tasks) {
        if (_create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].id === task.getAttribute('data-id')) {
            task.remove();
        }
    }
    if (addTask) {
        if (_create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].id === addTask.getAttribute('data-id')) {
            addTask.remove();
        }
    }

}


function clickingOnProject(project, id) {
    const index = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => {
        console.log(obj.id);
        console.log(project.parentElement.getAttribute('data-id'));
        return obj.id === project.parentElement.getAttribute('data-id');
    });

    
    project.addEventListener('click', () => {
        const oldAddTaskBtn = document.querySelector('.add-task-btn');
        // console.log(oldAddTaskBtn);
        const addTaskBtn = document.createElement('div');
        // console.log(addTaskBtn);
        const tasks = document.querySelectorAll('.task');
        const projectTitle = document.createElement('p');
        let tasksDiv = document.querySelector('.tasks');
        const oldPjTl = document.querySelector('.projects-title');
        const tasksBoxDiv = document.querySelector('.tasks-div');
        const dialogTask = document.querySelector('.task-dialog');
        
        if (tasksDiv) {
            tasksDiv.remove();
        }
        tasksDiv = document.createElement('div');
        tasksDiv.classList.add('tasks');

        if (oldAddTaskBtn) {
            oldAddTaskBtn.remove();
        }
        
        if (oldPjTl) {
            // console.log(oldPjTl);
            oldPjTl.remove();
        }

        tasksBoxDiv.innerHTML = '';
        tasksBoxDiv.appendChild(projectTitle);
        tasksBoxDiv.appendChild(tasksDiv);
        tasksBoxDiv.appendChild(addTaskBtn);

        addTaskBtn.addEventListener('click', () => {
            dialogTask.showModal();
        })

        
        addTaskBtn.classList.add('btn');
        addTaskBtn.classList.add('add-task-btn');
        projectTitle.classList.add('projects-title');
        projectTitle.textContent = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].name;
        addTaskBtn.textContent = '+ Add task';
        addTaskBtn.setAttribute('data-id', project.parentElement.getAttribute('data-id'))
        projectTitle.setAttribute('data-id', _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].id);
        
        for (let task of tasks) {
            task.remove();
        }
        let counter = 0;
        for (let task of _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos) {
            showTasks(index, task.id, task.deleteId, counter);
            counter++;
        }
        displayTodo(project.parentElement.getAttribute('data-id'));

    })
}

function displayEdit(editBtn, index, todo, checkBtn, title, description, theDate) {
    const cnlTaskEditBtn = document.querySelector('.task-cancel-edit');
    const dialogTaskEdit = document.querySelector('.task-dialog-edit');
    const titleEdit = document.querySelector('#task-name-edit');
    const descEdit = document.querySelector('#task-description-edit');
    const dateEdit = document.querySelector('#task-date-edit');
    const priorityEdit = document.querySelector('#task-priority-edit');
    
    editBtn.addEventListener('click', () => {
        const formEditBtnsContainer = document.querySelector('.dl-btns-div-task-edit');
        let addTaskDlEditBtn;
        const oldAddTaskDlEditBtn = document.querySelector('.task-add-edit');
        if(oldAddTaskDlEditBtn) {
            oldAddTaskDlEditBtn.remove();
        }
        addTaskDlEditBtn = document.createElement('button');
        addTaskDlEditBtn.classList.add('task-add-edit');
        addTaskDlEditBtn.textContent = 'Add';
        formEditBtnsContainer.appendChild(addTaskDlEditBtn);
        dialogTaskEdit.showModal();
        titleEdit.value = todo.title;
        descEdit.value = todo.description;
        dateEdit.value = todo.date;
        priorityEdit.value = todo.priority;

        addTaskDlEditBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const titleEdit = document.querySelector('#task-name-edit');
            const descEdit = document.querySelector('#task-description-edit');
            const dateEdit = document.querySelector('#task-date-edit');
            const priorityEdit = document.querySelector('#task-priority-edit');
            if (titleEdit.length !== 0 && titleEdit.length < 53 && dateEdit !== '' && descEdit.length < 55) {
                const taskIndex = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos.findIndex((obj) => {
                    return obj.deleteId === todo.deleteId;
                })
                ;(0,_edit_task__WEBPACK_IMPORTED_MODULE_6__.editTask)(index, taskIndex, titleEdit.value, descEdit.value,  dateEdit.value, priorityEdit.value);
                updateTask(todo, checkBtn, title, description, theDate, titleEdit, descEdit,  dateEdit);
                dialogTaskEdit.close();

            }
        })
    })
    
    
    cnlTaskEditBtn.addEventListener('click', () => {
        dialogTaskEdit.close();
        titleEdit.value = '';
        descEdit.value = '';
        dateEdit.value = '';
        priorityEdit.value = '';
    })
}

function updateTask(todo, checkBtn, title, description, theDate, titleEdit, descEdit,  dateEdit) {
        editCheckButtonColor(todo, checkBtn);
        title.textContent = titleEdit.value;
        description.textContent = descEdit.value;
        theDate.textContent = dateEdit.value;


}



/***/ }),

/***/ "./src/edit-project.js":
/*!*****************************!*\
  !*** ./src/edit-project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProject: () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");


function editProject(projectIndex, name) {
    _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].name = name;

}



/***/ }),

/***/ "./src/edit-task.js":
/*!**************************!*\
  !*** ./src/edit-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");


function editTask(projectIndex, taskIndex, title, description, date, priority) {
    _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos[taskIndex].title = title;
    _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos[taskIndex].description = description;
    _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos[taskIndex].date = date;
    _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].todos[taskIndex].priority = priority;

}



/***/ }),

/***/ "./src/id-generator.js":
/*!*****************************!*\
  !*** ./src/id-generator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   idGenerator: () => (/* binding */ idGenerator)
/* harmony export */ });
function idGenerator() {
    const S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-todo */ "./src/create-todo.js");
/* harmony import */ var _delete_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-todo */ "./src/delete-todo.js");
/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-project */ "./src/delete-project.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


 




window.projects = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects;


(0,_display__WEBPACK_IMPORTED_MODULE_4__.initDisplay)();




/***/ }),

/***/ "./src/store-project.js":
/*!******************************!*\
  !*** ./src/store-project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storeProjects: () => (/* binding */ storeProjects)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");


function storeProjects() {
    localStorage.setItem('projects', JSON.stringify(_create_project__WEBPACK_IMPORTED_MODULE_0__.projects));
}



/***/ }),

/***/ "./src/fonts/Inter-VariableFont_slnt,wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_slnt,wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "853e01975d2783d9fa29.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxxREFBUTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjJEOztBQUUzRDtBQUNBLElBQUkscURBQVE7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMkQ7O0FBRTNEO0FBQ0EsSUFBSSxxREFBUTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMkQ7QUFDaEI7QUFDRTtBQUNGO0FBQ007QUFDSjtBQUNOO0FBQ1M7QUFDSDs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDJEO0FBQ2hCO0FBQ0E7QUFDTTtBQUNPO0FBQ25DOztBQUVyQixrQkFBa0IscURBQVE7OztBQUcxQixxREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmlDOztBQUU1QztBQUNBLG9EQUFvRCxxREFBUTtBQUM1RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wbGV0ZS10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWxldGUtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2lkLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JlLXByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcImludGVyXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgICAtLWxpZ2h0LXBpbms6ICNmZmVkZWQ7XG4gICAgLS1kYXJrLXBpbms6ICNFRUQ4REE7XG4gICAgLS1kYXJrLWdyYXk6ICM0RjRGMzM7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgIGZvbnQtZmFtaWx5OiBcImludGVyXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbnNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXBpbmspO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWluLWNvbnRlbnQpIDFmcjtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDBweCA1cHggcmdiKDAsIDAsIDAsIDAuMik7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmxvZ28ge1xuICAgIHBhZGRpbmc6IDM1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkaW5nLWFuZC1idG4tZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLm5hdiB7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbm1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcGluayk7XG4gICAgcGFkZGluZzogNjBweCAzMHB4O1xufVxuXG4udGFza3MtZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1waW5rKTtcbiAgICBtaW4taGVpZ2h0OiA2MCU7XG4gICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2IoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4XG59XG5cbnAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnByb2plY3RzLXRpdGxlLCBoMSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWRkLXRhc2stYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpYWxvZyB7XG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1waW5rKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbi5kbC1idG5zLWRpdi1wcm9qLCAuZGwtYnRucy1kaXYtdGFzaywgLmRsLWJ0bnMtZGl2LXRhc2stZWRpdCwgLmRsLWJ0bnMtZGl2LXByb2otZWRpdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBnYXA6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgcGFkZGluZzogMC40ZW07XG59XG5cbi5pbnB1dC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2otY2FuY2VsLCAudGFzay1jYW5jZWwsIC50YXNrLWNhbmNlbC1lZGl0IHtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucHJvai1hZGQsIC50YXNrLWFkZCwgLnRhc2stYWRkLWVkaXQsIC5wcm9qLWFkZC1lZGl0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2stYWRkLCAucHJvai1hZGQsIC50YXNrLWFkZC1lZGl0LCAucHJvai1hZGQtZWRpdCB7XG4gICAgZm9udC1mYW1pbHk6ICdpbnRlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xufVxuXG4ucHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGotZGwtZWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi50aXRsZS1kZXNjLWRpdiwgLmRhdGUtZGwtZWRpdC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4udGl0bGUtZGVzYy1kaXYge1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xufVxuXG4udGFzayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtYXgtY29udGVudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmF5KTtcbn1cblxuLmNoZWNrLWJ0biB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50cmFzaC1jYW4sIC5lZGl0LXBlbiB7XG4gICAgaGVpZ2h0OiAxOHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHlDQUF5QztJQUN6QztBQUNKOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJpbnRlclxcXCI7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnRcXFxcLHdnaHQudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1waW5rOiAjZmZlZGVkO1xcbiAgICAtLWRhcmstcGluazogI0VFRDhEQTtcXG4gICAgLS1kYXJrLWdyYXk6ICM0RjRGMzM7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiaW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcGluayk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbi1jb250ZW50KSAxZnI7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDBweCA1cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgcGFkZGluZzogMzVweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlYWRpbmctYW5kLWJ0bi1kaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcGluayk7XFxuICAgIHBhZGRpbmc6IDYwcHggMzBweDtcXG59XFxuXFxuLnRhc2tzLWRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXBpbmspO1xcbiAgICBtaW4taGVpZ2h0OiA2MCU7XFxuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweFxcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUsIGgxIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1waW5rKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uZGwtYnRucy1kaXYtcHJvaiwgLmRsLWJ0bnMtZGl2LXRhc2ssIC5kbC1idG5zLWRpdi10YXNrLWVkaXQsIC5kbC1idG5zLWRpdi1wcm9qLWVkaXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG59XFxuXFxuLmlucHV0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvai1jYW5jZWwsIC50YXNrLWNhbmNlbCwgLnRhc2stY2FuY2VsLWVkaXQge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJvai1hZGQsIC50YXNrLWFkZCwgLnRhc2stYWRkLWVkaXQsIC5wcm9qLWFkZC1lZGl0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrLWFkZCwgLnByb2otYWRkLCAudGFzay1hZGQtZWRpdCwgLnByb2otYWRkLWVkaXQge1xcbiAgICBmb250LWZhbWlseTogJ2ludGVyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucGotZGwtZWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udGl0bGUtZGVzYy1kaXYsIC5kYXRlLWRsLWVkaXQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4udGl0bGUtZGVzYy1kaXYge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtYXgtY29udGVudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi5jaGVjay1idG4ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50cmFzaC1jYW4sIC5lZGl0LXBlbiB7XFxuICAgIGhlaWdodDogMThweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBpc0NvbXBsZXRlKHByb2plY3RJbmRleCwgdGFza0luZGV4KSB7XG4gICAgaWYgKHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbdGFza0luZGV4XS5jb21wbGV0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0YXNrSW5kZXhdLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0uY29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGlzQ29tcGxldGUgfTsiLCJpbXBvcnQgeyBpZEdlbmVyYXRvciB9IGZyb20gXCIuL2lkLWdlbmVyYXRvclwiO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICBwcm9qZWN0cy5wdXNoKHtuYW1lLCBpZDogaWRHZW5lcmF0b3IoKSwgdG9kb3M6IFtdfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzIH07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlSW5wdXQsIGluZGV4LCBkZXNjcmlwdGlvbiA9ICcnLCBkZWxldGVJZCwgcHJpb3JpdHksIGNvbXBsZXRlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVJbnB1dDtcbiAgICAgICAgdGhpcy5pZCA9IHByb2plY3RzW2luZGV4XS5pZDtcbiAgICAgICAgdGhpcy5kZWxldGVJZCA9IGRlbGV0ZUlkO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRhdGVJbnB1dCwgaW5kZXgsIGRlc2NyaXB0aW9uID0gJycsIGRlbGV0ZUlkLCBwcmlvcml0eSwgY29tcGxldGUgPSBmYWxzZSkge1xuICAgIHByb2plY3RzW2luZGV4XS50b2Rvcy5wdXNoKG5ldyBUb2RvKHRpdGxlLCBkYXRlSW5wdXQsIGluZGV4LCBkZXNjcmlwdGlvbiwgZGVsZXRlSWQsIHByaW9yaXR5LCBjb21wbGV0ZSkpO1xufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8gfTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KSB7XG4gICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG59XG5cbmV4cG9ydCB7ZGVsZXRlUHJvamVjdH07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBkZWxldGVUb2RvKHRvZG9JbmRleCwgcHJvamVjdEluZGV4KSB7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcbn1cblxuZXhwb3J0IHtkZWxldGVUb2RvfTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vY3JlYXRlLXRvZG9cIjtcbmltcG9ydCB7IGlkR2VuZXJhdG9yIH0gZnJvbSBcIi4vaWQtZ2VuZXJhdG9yXCI7XG5pbXBvcnQgeyBkZWxldGVUb2RvIH0gZnJvbSBcIi4vZGVsZXRlLXRvZG9cIjtcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9kZWxldGUtcHJvamVjdFwiO1xuaW1wb3J0IHsgaXNDb21wbGV0ZSB9IGZyb20gXCIuL2NvbXBsZXRlLXRhc2tcIjtcbmltcG9ydCB7IGVkaXRUYXNrIH0gZnJvbSBcIi4vZWRpdC10YXNrXCI7XG5pbXBvcnQgeyBzdG9yZVByb2plY3RzIH0gZnJvbSBcIi4vc3RvcmUtcHJvamVjdFwiO1xuaW1wb3J0IHsgZWRpdFByb2plY3QgfSBmcm9tIFwiLi9lZGl0LXByb2plY3RcIjtcblxuY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKS5zZXRBdHRyaWJ1dGUoJ21pbicsIHRvZGF5KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUtZWRpdCcpLnNldEF0dHJpYnV0ZSgnbWluJywgdG9kYXkpO1xuXG5mdW5jdGlvbiBpbml0RGlzcGxheSgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWRpdicpO1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdxJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRhc2tzRGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBoMS50ZXh0Q29udGVudCA9ICd5ZWFoIHNjaWVuY2UhJztcbiAgICAgICAgcS50ZXh0Q29udGVudCA9ICdTb21lIHBlb3BsZSBoYXZlIGEgd2F5IHdpdGggd29yZHMsIGFuZCBvdGhlciBwZW9wbGUuLi5vaCwgdWgsIG5vdCBoYXZlIHdheS4nO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJyAtIFN0ZXZlIE1hcnRpbic7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQocSk7XG4gICAgICAgIHAuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgXG4gICAgICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1kaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncScpO1xuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRhc2tzRGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgaDEudGV4dENvbnRlbnQgPSAneWVhaCBzY2llbmNlISc7XG4gICAgICAgICAgICBxLnRleHRDb250ZW50ID0gJ1NvbWUgcGVvcGxlIGhhdmUgYSB3YXkgd2l0aCB3b3JkcywgYW5kIG90aGVyIHBlb3BsZS4uLm9oLCB1aCwgbm90IGhhdmUgd2F5Lic7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJyAtIFN0ZXZlIE1hcnRpbic7XG4gICAgICAgICAgICBwLmFwcGVuZENoaWxkKHEpO1xuICAgICAgICAgICAgcC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICB9KVxuICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgICAgZGlzcGxheVByb2plY3QoKTtcbiAgICAgICAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1kaXYnKTtcbiAgICAgICAgICAgIHRhc2tzRGl2LmlubmVySFRNTCA9IGA8aDI+QWJvdXQ8L2gyPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRmFjZXJlIHJhdGlvbmUgZGVsZWN0dXMgcGVyc3BpY2lhdGlzLiBBY2N1c2FudGl1bSByZXJ1bSBvZmZpY2lhIGF0cXVlIGhhcnVtIHBvc3NpbXVzISBRdWlzcXVhbSwgZmFjZXJlIGV1bSBtYWduaSBxdWFzaSBzYXBpZW50ZSBkb2xvcmVtcXVlIG9mZmljaWEuIEV4ZXJjaXRhdGlvbmVtIGl0YXF1ZSBkZWJpdGlzIHF1aWJ1c2RhbS4gUXVpc3F1YW0gcXVvZCBpbiBsYWJvcmUgYXBlcmlhbSBlbmltIHZlbmlhbSBleGNlcHR1cmkgbGFib3Jpb3NhbSBhdC48L3A+IDxicj5cbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZhY2VyZSByYXRpb25lIGRlbGVjdHVzIHBlcnNwaWNpYXRpcy4gQWNjdXNhbnRpdW0gcmVydW0gb2ZmaWNpYSBhdHF1ZSBoYXJ1bSBwb3NzaW11cyEgUXVpc3F1YW0sIGZhY2VyZSBldW0gbWFnbmkgcXVhc2kgc2FwaWVudGUgZG9sb3JlbXF1ZSBvZmZpY2lhLiBFeGVyY2l0YXRpb25lbSBpdGFxdWUgZGViaXRpcyBxdWlidXNkYW0uIFF1aXNxdWFtIHF1b2QgaW4gbGFib3JlIGFwZXJpYW0gZW5pbSB2ZW5pYW0gZXhjZXB0dXJpIGxhYm9yaW9zYW0gYXQuPC9wPmA7XG4gICAgICAgIH0pXG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdHNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtZGl2Jyk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNEYXRhKTtcbiAgICBmb3IgKGxldCBwcm9qIG9mIHByb2plY3RzRGF0YSkge1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkRGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RFZGl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2ouaWQpO1xuICAgICAgICAgICAgcHJvamVjdERsQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2ouaWQpO1xuICAgICAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qLmlkKTtcbiAgICAgICAgICAgIHByb2pUaXRsZS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgIHByb2pUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgICAgICBlZERsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BqLWRsLWVkLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgcHJvamVjdERsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICAgICAgcHJvamVjdERsQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2otZGVsZXRlLWJ0bicpO1xuICAgICAgICAgICAgcHJvamVjdEVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgICAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVkaXQtYnRuJyk7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IHByb2oubmFtZTtcbiAgICAgICAgICAgIHByb2plY3REbEJ0bi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJ0cmFzaC1jYW5cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU03LDZIMTdWMTlIN1Y2TTksOFYxN0gxMVY4SDlNMTMsOFYxN0gxNVY4SDEzWlwiIC8+PC9zdmc+JztcbiAgICAgICAgICAgIHByb2plY3RFZGl0QnRuLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImVkaXQtcGVuXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIiAvPjwvc3ZnPic7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbiAgICAgICAgICAgIGVkRGxDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRCdG4pO1xuICAgICAgICAgICAgZWREbENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGxCdG4pO1xuICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChlZERsQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gICAgICAgICAgICBkaXNwbGF5RWRpdFByb2plY3QocHJvamVjdEVkaXRCdG4pO1xuICAgICAgICAgICAgZGlzcGxheURlbGV0ZVByb2plY3QocHJvamVjdERsQnRuKTtcbiAgICAgICAgICAgIGNsaWNraW5nT25Qcm9qZWN0KHByb2pUaXRsZSk7XG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XG4gICAgY29uc3QgYWRkUHJvakRsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYWRkJyk7XG4gICAgY29uc3QgZGlhbG9nUHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kaWFsb2cnKTtcbiAgICBjb25zdCBjbmxQcm9qRGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1jYW5jZWwnKTtcbiAgICBjb25zdCBkaWFsb2dUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlhbG9nJyk7XG4gICAgY29uc3QgY25sVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNhbmNlbCcpO1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWRpdicpO1xuICAgIGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5cblxuICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpYWxvZ1ByLnNob3dNb2RhbCgpO1xuICAgIH0pXG5cbiAgICBjbmxQcm9qRGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgICAgICBwcm9qTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBkaWFsb2dQci5jbG9zZSgpO1xuICAgIH0pXG5cbiAgICBjbmxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5Jyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9ICdwcmlvcml0eTEnO1xuICAgICAgICB0YXNrRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICB0YXNrRGVzYy52YWx1ZSA9ICcnOyBcbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIGRpYWxvZ1Rhc2suY2xvc2UoKTtcbiAgICB9KVxuXG5cbiAgICBhZGRQcm9qRGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoICE9PSAwICYmIG5hbWUubGVuZ3RoIDwgMTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWRpdicpO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGpUbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy10aXRsZScpO1xuICAgICAgICAgICAgY29uc3Qgb2xkQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgZWREbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBpZDtcbiAgICAgICAgICAgIHByb2plY3RFZGl0QnRuLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImVkaXQtcGVuXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIiAvPjwvc3ZnPic7XG4gICAgICAgICAgICBkZWxldGVEaXYuaW5uZXJIVE1MID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzPVwidHJhc2gtY2FuXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNNyw2SDE3VjE5SDdWNk05LDhWMTdIMTFWOEg5TTEzLDhWMTdIMTVWOEgxM1pcIiAvPjwvc3ZnPic7XG4gICAgICAgICAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdC1idG4nKTtcbiAgICAgICAgICAgIGRlbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgIGRlbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qLWRlbGV0ZS1idG4nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG9sZFRhc2tzKSB7XG4gICAgICAgICAgICAgICAgb2xkVGFza3MucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvbGRBZGRUYXNrKSB7XG4gICAgICAgICAgICAgICAgb2xkQWRkVGFzay5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmIChvbGRQalRsKSB7XG4gICAgICAgICAgICAgICAgb2xkUGpUbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlhbG9nVGFzay5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkaXNwbGF5RWRpdFByb2plY3QocHJvamVjdEVkaXRCdG4pO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgICAgICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgICAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICAgICAgZWREbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwai1kbC1lZC1jb250YWluZXInKTtcbiAgICAgICAgICAgIHByb2pUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy10aXRsZScpO1xuICAgICAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcbiAgICAgICAgICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJysgQWRkIHRhc2snO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgaWQgPSBvYmouaWQ7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFza3NEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgICAgIHByb2pUaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgICAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gICAgICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gICAgICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgZWREbENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ0bik7XG4gICAgICAgICAgICBlZERsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZURpdik7XG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGVkRGxDb250YWluZXIpO1xuICAgICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kbyhpZCk7XG4gICAgICAgICAgICBkaXNwbGF5RGVsZXRlUHJvamVjdChkZWxldGVEaXYpO1xuICAgICAgICAgICAgY2xpY2tpbmdPblByb2plY3QodGl0bGUpO1xuICAgICAgICAgICAgcHJvak5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGRpYWxvZ1ByLmNsb3NlKCk7XG4gICAgICAgICAgICBzdG9yZVByb2plY3RzKCk7XG5cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0UHJvamVjdChlZGl0QnRuKSB7XG4gICAgY29uc3QgcHJvamVjdERMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGlhbG9nLWVkaXQnKTtcbiAgICBcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0REwuc2hvd01vZGFsKCk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGwtYnRucy1kaXYtcHJvai1lZGl0Jyk7XG4gICAgICAgIGNvbnN0IG9sZEVkQnRuRGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1hZGQtZWRpdCcpO1xuICAgICAgICBjb25zdCBlZEJ0bkRsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNsUHJvakVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otY2FuY2VsLWVkaXQnKTtcblxuICAgICAgICBpZiAob2xkRWRCdG5EbCkge1xuICAgICAgICAgICAgb2xkRWRCdG5EbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlZEJ0bkRsLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICBlZEJ0bkRsLmNsYXNzTGlzdC5hZGQoJ3Byb2otYWRkLWVkaXQnKTtcbiAgICAgICAgZWRCdG5EbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBlZGl0QnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgIGVkQnRuRGwudGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgIGVkaXRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRCdG5EbCk7XG5cbiAgICAgICAgZWRCdG5EbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZWRpdCcpLnZhbHVlO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChuYW1lLmxlbmd0aCAhPT0gMCAmJiBuYW1lLmxlbmd0aCA8IDExKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvakluZGV4ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocHJvakRpdikuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gZWRCdG5EbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IHByb2pEaXZbcHJvakluZGV4XS5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmlkID09PSBlZEJ0bkRsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWRpdFByb2plY3QoaW5kZXgsIG5hbWUpO1xuICAgICAgICAgICAgICAgIHN0b3JlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZWRpdCcpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgcHJvamVjdERMLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjbFByb2pFZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZWRpdCcpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBwcm9qZWN0REwuY2xvc2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kbyhpZCkge1xuICAgIGNvbnN0IGZvcm1CdG5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRsLWJ0bnMtZGl2LXRhc2snKTtcbiAgICBjb25zdCBvbGRBZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJyk7XG4gICAgY29uc3QgYWRkVGFza0RsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGlhbG9nVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpYWxvZycpO1xuXG4gICAgaWYgKG9sZEFkZFRhc2tCdG4pIHtcbiAgICAgICAgb2xkQWRkVGFza0J0bi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrRGxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBhZGRUYXNrRGxCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1hZGQnKVxuICAgIGFkZFRhc2tEbEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgdGFzayc7XG4gICAgZm9ybUJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0RsQnRuKTtcbiAgICBhZGRUYXNrRGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY29uc3QgcHJvamVjdHNET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggIT09IDAgJiYgbmFtZS5sZW5ndGggPCA1MyAmJiBkYXRlSW5wdXQgIT09ICcnICYmIGRlc2NyaXB0aW9uLmxlbmd0aCA8IDU1KSB7XG4gICAgICAgICAgICBjb25zdCBkbElkID0gaWRHZW5lcmF0b3IoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZScpO1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgICAgIC8vIGxldCBwcm9qZWN0O1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBpZCk7XG4gICAgICAgICAgICAvLyBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IGFkZFRhc2sucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG8obmFtZSwgZGF0ZUlucHV0LCBpbmRleCwgZGVzY3JpcHRpb24sIGRsSWQsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IHByb2ogb2YgcHJvamVjdHNET00pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHByb2ouZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IGFkZFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0ID0gcHJvajtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2hvd1Rhc2tzKGluZGV4LCBpZCwgZGxJZCk7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSAncHJpb3JpdHkxJztcbiAgICAgICAgICAgIHRhc2tEYXRlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0YXNrRGVzYy52YWx1ZSA9ICcnOyBcbiAgICAgICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgZGlhbG9nVGFzay5jbG9zZSgpO1xuICAgICAgICAgICAgc3RvcmVQcm9qZWN0cygpO1xuXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbn1cblxuXG5mdW5jdGlvbiBzaG93VGFza3MoaW5kZXgsIGlkLCBkbElkLCBjb3VudGVyKSB7XG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0ZURsRWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoZWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGhlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkZWxldGVUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRvZG87XG4gICAgaWYgKHR5cGVvZiBjb3VudGVyID09PSAnbnVtYmVyJykge1xuICAgICAgICB0b2RvID0gIHByb2plY3RzW2luZGV4XS50b2Rvc1tjb3VudGVyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvID0gIHByb2plY3RzW2luZGV4XS50b2Rvc1twcm9qZWN0c1tpbmRleF0udG9kb3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICB0aGVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBlZGl0QnRuLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImVkaXQtcGVuXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIiAvPjwvc3ZnPic7XG4gICAgZGVsZXRlVGFza0Rpdi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJ0cmFzaC1jYW5cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU03LDZIMTdWMTlIN1Y2TTksOFYxN0gxMVY4SDlNMTMsOFYxN0gxNVY4SDEzWlwiIC8+PC9zdmc+JztcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdjaGVjay1idG4nKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgdGhlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlLXRhc2snKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICBkZWxldGVUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGRlbGV0ZVRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnZGwtdGFzay1kaXYnKTtcbiAgICB0aXRsZURlc2NEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtZGVzYy1kaXYnKTtcbiAgICBkYXRlRGxFZGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGwtZWRpdC1kaXYnKTtcbiAgICB0aXRsZURlc2NEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRpdGxlRGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGF0ZURsRWRpdERpdi5hcHBlbmRDaGlsZCh0aGVEYXRlKTtcbiAgICBkYXRlRGxFZGl0RGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGRhdGVEbEVkaXREaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0Rpdik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja0J0bik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZURlc2NEaXYpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0ZURsRWRpdERpdik7XG4gICAgZGVsZXRlVGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGwtaWQnLCBkbElkKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1kbC1pZCcsIGRsSWQpO1xuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW2luZGV4XS50b2Rvcy5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmRlbGV0ZUlkID09PSBkbElkO1xuICAgIH0pXG4gICAgaWYocHJvamVjdHNbaW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0uY29tcGxldGUgPT09IGZhbHNlKSB7XG4gICAgICAgIGNoZWNrQnRuLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICB9XG4gICAgY2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlzQ2hlY2tlZChjaGVja0J0biwgaW5kZXgsIGRsSWQpO1xuICAgIH0pXG4gICAgXG4gICAgXG4gICAgZWRpdENoZWNrQnV0dG9uQ29sb3IodG9kbywgY2hlY2tCdG4pO1xuICAgIGRpc3BsYXlFZGl0KGVkaXRCdG4sIGluZGV4LCB0b2RvLCBjaGVja0J0biwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0aGVEYXRlKTtcbiAgICBkaXNwbGF5RGVsZXRlVG9kbyhkZWxldGVUYXNrRGl2LCBpbmRleCwgZGxJZCk7XG59XG5cbmZ1bmN0aW9uIGlzQ2hlY2tlZChjaGVja0J0biwgaW5kZXgsIGRsSWQpIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0c1tpbmRleF0udG9kb3MuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5kZWxldGVJZCA9PT0gZGxJZDtcbiAgICB9KVxuICAgIGlmKHByb2plY3RzW2luZGV4XS50b2Rvc1t0YXNrSW5kZXhdLmNvbXBsZXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY2hlY2tCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICAgICAgICAgIGlzQ29tcGxldGUoaW5kZXgsIHRhc2tJbmRleClcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja0J0bi50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBpc0NvbXBsZXRlKGluZGV4LCB0YXNrSW5kZXgpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGVkaXRDaGVja0J1dHRvbkNvbG9yKHRvZG8sIGNoZWNrQnRuKSB7XG4gICAgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdwcmlvcml0eTEnKSB7XG4gICAgICAgIGNoZWNrQnRuLnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgI0VFNTg1OSc7XG4gICAgfSBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09PSAncHJpb3JpdHkyJykge1xuICAgICAgICBjaGVja0J0bi5zdHlsZS5ib3JkZXIgPSAnM3B4IHNvbGlkICM3RkVENTgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrQnRuLnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgIzU3QzBFRCc7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlEZWxldGVUb2RvKGRlbGV0ZURpdiwgaW5kZXgsIGRlbGV0ZUlkKSB7XG4gICAgZGVsZXRlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2Rvc0luZGV4ID0gcHJvamVjdHNbaW5kZXhdLnRvZG9zLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLmRlbGV0ZUlkID09PSBkZWxldGVJZDtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLWRsLWlkPVwiJHtkZWxldGVJZH1cIl1gKTtcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlVG9kbyh0b2Rvc0luZGV4LCBpbmRleCk7XG4gICAgICAgIHN0b3JlUHJvamVjdHMoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RGVsZXRlUHJvamVjdChkZWxldGVEaXYpIHtcbiAgICBkZWxldGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmouaWQgPT09IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIH0pXG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZVRhc2tzKHByb2plY3RJbmRleCk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KTtcbiAgICAgICAgc3RvcmVQcm9qZWN0cygpO1xuICAgICAgICBcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrcyhwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmlkID09PSB0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XG4gICAgICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChhZGRUYXNrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmlkID09PSBhZGRUYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XG4gICAgICAgICAgICBhZGRUYXNrLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gY2xpY2tpbmdPblByb2plY3QocHJvamVjdCwgaWQpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9iai5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgIHJldHVybiBvYmouaWQgPT09IHByb2plY3QucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICB9KTtcblxuICAgIFxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZEFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9sZEFkZFRhc2tCdG4pO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFkZFRhc2tCdG4pO1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgICAgIGNvbnN0IG9sZFBqVGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFza3NCb3hEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaWFsb2cnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0YXNrc0Rpdikge1xuICAgICAgICAgICAgdGFza3NEaXYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcblxuICAgICAgICBpZiAob2xkQWRkVGFza0J0bikge1xuICAgICAgICAgICAgb2xkQWRkVGFza0J0bi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG9sZFBqVGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9sZFBqVGwpO1xuICAgICAgICAgICAgb2xkUGpUbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tzQm94RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YXNrc0JveERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICB0YXNrc0JveERpdi5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG4gICAgICAgIHRhc2tzQm94RGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkaWFsb2dUYXNrLnNob3dNb2RhbCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtdGl0bGUnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbaW5kZXhdLm5hbWU7XG4gICAgICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnKyBBZGQgdGFzayc7XG4gICAgICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKVxuICAgICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdHNbaW5kZXhdLmlkKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3RzW2luZGV4XS50b2Rvcykge1xuICAgICAgICAgICAgc2hvd1Rhc2tzKGluZGV4LCB0YXNrLmlkLCB0YXNrLmRlbGV0ZUlkLCBjb3VudGVyKTtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5VG9kbyhwcm9qZWN0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXQoZWRpdEJ0biwgaW5kZXgsIHRvZG8sIGNoZWNrQnRuLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRoZURhdGUpIHtcbiAgICBjb25zdCBjbmxUYXNrRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNhbmNlbC1lZGl0Jyk7XG4gICAgY29uc3QgZGlhbG9nVGFza0VkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaWFsb2ctZWRpdCcpO1xuICAgIGNvbnN0IHRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtZWRpdCcpO1xuICAgIGNvbnN0IGRlc2NFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24tZWRpdCcpO1xuICAgIGNvbnN0IGRhdGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZS1lZGl0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHktZWRpdCcpO1xuICAgIFxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1FZGl0QnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kbC1idG5zLWRpdi10YXNrLWVkaXQnKTtcbiAgICAgICAgbGV0IGFkZFRhc2tEbEVkaXRCdG47XG4gICAgICAgIGNvbnN0IG9sZEFkZFRhc2tEbEVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQtZWRpdCcpO1xuICAgICAgICBpZihvbGRBZGRUYXNrRGxFZGl0QnRuKSB7XG4gICAgICAgICAgICBvbGRBZGRUYXNrRGxFZGl0QnRuLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGFkZFRhc2tEbEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVGFza0RsRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWFkZC1lZGl0Jyk7XG4gICAgICAgIGFkZFRhc2tEbEVkaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICAgICAgZm9ybUVkaXRCdG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEbEVkaXRCdG4pO1xuICAgICAgICBkaWFsb2dUYXNrRWRpdC5zaG93TW9kYWwoKTtcbiAgICAgICAgdGl0bGVFZGl0LnZhbHVlID0gdG9kby50aXRsZTtcbiAgICAgICAgZGVzY0VkaXQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBkYXRlRWRpdC52YWx1ZSA9IHRvZG8uZGF0ZTtcbiAgICAgICAgcHJpb3JpdHlFZGl0LnZhbHVlID0gdG9kby5wcmlvcml0eTtcblxuICAgICAgICBhZGRUYXNrRGxFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZS1lZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uLWVkaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZS1lZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1lZGl0Jyk7XG4gICAgICAgICAgICBpZiAodGl0bGVFZGl0Lmxlbmd0aCAhPT0gMCAmJiB0aXRsZUVkaXQubGVuZ3RoIDwgNTMgJiYgZGF0ZUVkaXQgIT09ICcnICYmIGRlc2NFZGl0Lmxlbmd0aCA8IDU1KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNbaW5kZXhdLnRvZG9zLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmouZGVsZXRlSWQgPT09IHRvZG8uZGVsZXRlSWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBlZGl0VGFzayhpbmRleCwgdGFza0luZGV4LCB0aXRsZUVkaXQudmFsdWUsIGRlc2NFZGl0LnZhbHVlLCAgZGF0ZUVkaXQudmFsdWUsIHByaW9yaXR5RWRpdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlVGFzayh0b2RvLCBjaGVja0J0biwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0aGVEYXRlLCB0aXRsZUVkaXQsIGRlc2NFZGl0LCAgZGF0ZUVkaXQpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ1Rhc2tFZGl0LmNsb3NlKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuICAgIFxuICAgIFxuICAgIGNubFRhc2tFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaWFsb2dUYXNrRWRpdC5jbG9zZSgpO1xuICAgICAgICB0aXRsZUVkaXQudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY0VkaXQudmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZUVkaXQudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHlFZGl0LnZhbHVlID0gJyc7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFzayh0b2RvLCBjaGVja0J0biwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0aGVEYXRlLCB0aXRsZUVkaXQsIGRlc2NFZGl0LCAgZGF0ZUVkaXQpIHtcbiAgICAgICAgZWRpdENoZWNrQnV0dG9uQ29sb3IodG9kbywgY2hlY2tCdG4pO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlRWRpdC52YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjRWRpdC52YWx1ZTtcbiAgICAgICAgdGhlRGF0ZS50ZXh0Q29udGVudCA9IGRhdGVFZGl0LnZhbHVlO1xuXG5cbn1cblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3QsIGluaXREaXNwbGF5LCBzaG93UHJvamVjdHMgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3RJbmRleCwgbmFtZSkge1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZSA9IG5hbWU7XG5cbn1cblxuZXhwb3J0IHsgZWRpdFByb2plY3QgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHByb2plY3RJbmRleCwgdGFza0luZGV4LCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0YXNrSW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0YXNrSW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0YXNrSW5kZXhdLmRhdGUgPSBkYXRlO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbdGFza0luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG59XG5cbmV4cG9ydCB7IGVkaXRUYXNrIH07IiwiZnVuY3Rpb24gaWRHZW5lcmF0b3IoKSB7XG4gICAgY29uc3QgUzQgPSBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4gKCgoMStNYXRoLnJhbmRvbSgpKSoweDEwMDAwKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICAgIH07XG4gICAgcmV0dXJuIChTNCgpK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStTNCgpK1M0KCkpO1xufVxuXG5leHBvcnQge2lkR2VuZXJhdG9yfTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vY3JlYXRlLXRvZG9cIjtcbmltcG9ydCB7IGRlbGV0ZVRvZG8gfSBmcm9tIFwiLi9kZWxldGUtdG9kb1wiOyBcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9kZWxldGUtcHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QsIGluaXREaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxud2luZG93LnByb2plY3RzID0gcHJvamVjdHM7XG5cblxuaW5pdERpc3BsYXkoKTtcblxuXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIHN0b3JlUHJvamVjdHMoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IHsgc3RvcmVQcm9qZWN0cyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9