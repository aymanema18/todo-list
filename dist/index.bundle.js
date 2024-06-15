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
    if (projectsData) {
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
                projectDlBtn.textContent = 'X';
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
            deleteDiv.textContent = 'X';
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
    deleteTaskDiv.textContent = 'X';
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
        (0,_store_project__WEBPACK_IMPORTED_MODULE_7__.storeProjects)();
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
        if (_create_project__WEBPACK_IMPORTED_MODULE_0__.projects.length !== 0) {
            if (_create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].id === addTask.getAttribute('data-id')) {
                addTask.remove();
            }

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
        addTaskDlEditBtn.classList.add('btn');
        addTaskDlEditBtn.classList.add('task-add-edit');
        addTaskDlEditBtn.textContent = 'Edit';
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
            if (titleEdit.value.length !== 0 && titleEdit.value.length < 53 && dateEdit.value !== '' && descEdit.value.length < 55) {
                const taskIndex = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos.findIndex((obj) => {
                    return obj.deleteId === todo.deleteId;
                })
                ;(0,_edit_task__WEBPACK_IMPORTED_MODULE_6__.editTask)(index, taskIndex, titleEdit.value, descEdit.value,  dateEdit.value, priorityEdit.value);
                updateTask(todo, checkBtn, title, description, theDate, titleEdit, descEdit,  dateEdit);
                dialogTaskEdit.close();
                (0,_store_project__WEBPACK_IMPORTED_MODULE_7__.storeProjects)();

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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




window.projects = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects;


(0,_display__WEBPACK_IMPORTED_MODULE_1__.initDisplay)();




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxxREFBUTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjJEOztBQUUzRDtBQUNBLElBQUkscURBQVE7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMkQ7O0FBRTNEO0FBQ0EsSUFBSSxxREFBUTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMkQ7QUFDaEI7QUFDRTtBQUNGO0FBQ007QUFDSjtBQUNOO0FBQ1M7QUFDSDs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFEQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSxJQUFJLHFEQUFRO0FBQ1osSUFBSSxxREFBUTtBQUNaLElBQUkscURBQVE7QUFDWixJQUFJLHFEQUFROztBQUVaOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTDRDO0FBQ0o7QUFDbkI7O0FBRXJCLGtCQUFrQixxREFBUTs7O0FBRzFCLHFEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQaUM7O0FBRTVDO0FBQ0Esb0RBQW9ELHFEQUFRO0FBQzVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBsZXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS10b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXQtdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaWQtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmUtcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiaW50ZXJcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAgIC0tbGlnaHQtcGluazogI2ZmZWRlZDtcbiAgICAtLWRhcmstcGluazogI0VFRDhEQTtcbiAgICAtLWRhcmstZ3JheTogIzRGNEYzMztcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgZm9udC1mYW1pbHk6IFwiaW50ZXJcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcGluayk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW4tY29udGVudCkgMWZyO1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDVweCByZ2IoMCwgMCwgMCwgMC4yKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubG9nbyB7XG4gICAgcGFkZGluZzogMzVweCAwO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRpbmctYW5kLWJ0bi1kaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5hZGQtcHJvamVjdC1idG4ge1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4ubmF2IHtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbn1cblxubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1waW5rKTtcbiAgICBwYWRkaW5nOiA2MHB4IDMwcHg7XG59XG5cbi50YXNrcy1kaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXBpbmspO1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYigwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHhcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucHJvamVjdHMtdGl0bGUsIGgxIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGlhbG9nIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXBpbmspO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2IoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuLmRsLWJ0bnMtZGl2LXByb2osIC5kbC1idG5zLWRpdi10YXNrLCAuZGwtYnRucy1kaXYtdGFzay1lZGl0LCAuZGwtYnRucy1kaXYtcHJvai1lZGl0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGdhcDogMTVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICBwYWRkaW5nOiAwLjRlbTtcbn1cblxuLmlucHV0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvai1jYW5jZWwsIC50YXNrLWNhbmNlbCwgLnRhc2stY2FuY2VsLWVkaXQge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5wcm9qLWFkZCwgLnRhc2stYWRkLCAudGFzay1hZGQtZWRpdCwgLnByb2otYWRkLWVkaXQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGFzay1hZGQsIC5wcm9qLWFkZCwgLnRhc2stYWRkLWVkaXQsIC5wcm9qLWFkZC1lZGl0IHtcbiAgICBmb250LWZhbWlseTogJ2ludGVyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG59XG5cbi5wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wai1kbC1lZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxuLnRpdGxlLWRlc2MtZGl2LCAuZGF0ZS1kbC1lZGl0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi50aXRsZS1kZXNjLWRpdiB7XG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyYXkpO1xufVxuXG4uY2hlY2stYnRuIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRyYXNoLWNhbiwgLmVkaXQtcGVuIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcImludGVyXFxcIjtcXG4gICAgc3JjOiB1cmwoLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudFxcXFwsd2dodC50dGYpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LXBpbms6ICNmZmVkZWQ7XFxuICAgIC0tZGFyay1waW5rOiAjRUVEOERBO1xcbiAgICAtLWRhcmstZ3JheTogIzRGNEYzMztcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJpbnRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1waW5rKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWluLWNvbnRlbnQpIDFmcjtcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDVweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBwYWRkaW5nOiAzNXB4IDA7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGVhZGluZy1hbmQtYnRuLWRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5uYXYge1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1waW5rKTtcXG4gICAgcGFkZGluZzogNjBweCAzMHB4O1xcbn1cXG5cXG4udGFza3MtZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcGluayk7XFxuICAgIG1pbi1oZWlnaHQ6IDYwJTtcXG4gICAgbWF4LWhlaWdodDogODAwcHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4XFxufVxcblxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSwgaDEge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXBpbmspO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5kbC1idG5zLWRpdi1wcm9qLCAuZGwtYnRucy1kaXYtdGFzaywgLmRsLWJ0bnMtZGl2LXRhc2stZWRpdCwgLmRsLWJ0bnMtZGl2LXByb2otZWRpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcbn1cXG5cXG4uaW5wdXQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qLWNhbmNlbCwgLnRhc2stY2FuY2VsLCAudGFzay1jYW5jZWwtZWRpdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcm9qLWFkZCwgLnRhc2stYWRkLCAudGFzay1hZGQtZWRpdCwgLnByb2otYWRkLWVkaXQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stYWRkLCAucHJvai1hZGQsIC50YXNrLWFkZC1lZGl0LCAucHJvai1hZGQtZWRpdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnaW50ZXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wai1kbC1lZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50aXRsZS1kZXNjLWRpdiwgLmRhdGUtZGwtZWRpdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi50aXRsZS1kZXNjLWRpdiB7XFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuLmNoZWNrLWJ0biB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRyYXNoLWNhbiwgLmVkaXQtcGVuIHtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGUocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpIHtcbiAgICBpZiAocHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0YXNrSW5kZXhdLmNvbXBsZXRlID09PSBmYWxzZSkge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0uY29tcGxldGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbdGFza0luZGV4XS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgaXNDb21wbGV0ZSB9OyIsImltcG9ydCB7IGlkR2VuZXJhdG9yIH0gZnJvbSBcIi4vaWQtZ2VuZXJhdG9yXCI7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpe1xuICAgIHByb2plY3RzLnB1c2goe25hbWUsIGlkOiBpZEdlbmVyYXRvcigpLCB0b2RvczogW119KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRhdGVJbnB1dCwgaW5kZXgsIGRlc2NyaXB0aW9uID0gJycsIGRlbGV0ZUlkLCBwcmlvcml0eSwgY29tcGxldGUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZUlucHV0O1xuICAgICAgICB0aGlzLmlkID0gcHJvamVjdHNbaW5kZXhdLmlkO1xuICAgICAgICB0aGlzLmRlbGV0ZUlkID0gZGVsZXRlSWQ7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGF0ZUlucHV0LCBpbmRleCwgZGVzY3JpcHRpb24gPSAnJywgZGVsZXRlSWQsIHByaW9yaXR5LCBjb21wbGV0ZSA9IGZhbHNlKSB7XG4gICAgcHJvamVjdHNbaW5kZXhdLnRvZG9zLnB1c2gobmV3IFRvZG8odGl0bGUsIGRhdGVJbnB1dCwgaW5kZXgsIGRlc2NyaXB0aW9uLCBkZWxldGVJZCwgcHJpb3JpdHksIGNvbXBsZXRlKSk7XG59XG5cblxuZXhwb3J0IHsgY3JlYXRlVG9kbyB9OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbn1cblxuZXhwb3J0IHtkZWxldGVQcm9qZWN0fTsiLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kb0luZGV4LCBwcm9qZWN0SW5kZXgpIHtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xufVxuXG5leHBvcnQge2RlbGV0ZVRvZG99OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi9jcmVhdGUtdG9kb1wiO1xuaW1wb3J0IHsgaWRHZW5lcmF0b3IgfSBmcm9tIFwiLi9pZC1nZW5lcmF0b3JcIjtcbmltcG9ydCB7IGRlbGV0ZVRvZG8gfSBmcm9tIFwiLi9kZWxldGUtdG9kb1wiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL2RlbGV0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBpc0NvbXBsZXRlIH0gZnJvbSBcIi4vY29tcGxldGUtdGFza1wiO1xuaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tIFwiLi9lZGl0LXRhc2tcIjtcbmltcG9ydCB7IHN0b3JlUHJvamVjdHMgfSBmcm9tIFwiLi9zdG9yZS1wcm9qZWN0XCI7XG5pbXBvcnQgeyBlZGl0UHJvamVjdCB9IGZyb20gXCIuL2VkaXQtcHJvamVjdFwiO1xuXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZScpLnNldEF0dHJpYnV0ZSgnbWluJywgdG9kYXkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZS1lZGl0Jykuc2V0QXR0cmlidXRlKCdtaW4nLCB0b2RheSk7XG5cbmZ1bmN0aW9uIGluaXREaXNwbGF5KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICAgICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICAgICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3EnKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGFza3NEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gJ3llYWggc2NpZW5jZSEnO1xuICAgICAgICBxLnRleHRDb250ZW50ID0gJ1NvbWUgcGVvcGxlIGhhdmUgYSB3YXkgd2l0aCB3b3JkcywgYW5kIG90aGVyIHBlb3BsZS4uLm9oLCB1aCwgbm90IGhhdmUgd2F5Lic7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSAnIC0gU3RldmUgTWFydGluJztcbiAgICAgICAgcC5hcHBlbmRDaGlsZChxKTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChwKTtcblxuICAgICAgICBcbiAgICAgICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWRpdicpO1xuICAgICAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IHEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdxJyk7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGFza3NEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBoMS50ZXh0Q29udGVudCA9ICd5ZWFoIHNjaWVuY2UhJztcbiAgICAgICAgICAgIHEudGV4dENvbnRlbnQgPSAnU29tZSBwZW9wbGUgaGF2ZSBhIHdheSB3aXRoIHdvcmRzLCBhbmQgb3RoZXIgcGVvcGxlLi4ub2gsIHVoLCBub3QgaGF2ZSB3YXkuJztcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSAnIC0gU3RldmUgTWFydGluJztcbiAgICAgICAgICAgIHAuYXBwZW5kQ2hpbGQocSk7XG4gICAgICAgICAgICBwLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgICAgICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIH0pXG4gICAgICAgIHNob3dQcm9qZWN0cygpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdCgpO1xuICAgICAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWRpdicpO1xuICAgICAgICAgICAgdGFza3NEaXYuaW5uZXJIVE1MID0gYDxoMj5BYm91dDwvaDI+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGYWNlcmUgcmF0aW9uZSBkZWxlY3R1cyBwZXJzcGljaWF0aXMuIEFjY3VzYW50aXVtIHJlcnVtIG9mZmljaWEgYXRxdWUgaGFydW0gcG9zc2ltdXMhIFF1aXNxdWFtLCBmYWNlcmUgZXVtIG1hZ25pIHF1YXNpIHNhcGllbnRlIGRvbG9yZW1xdWUgb2ZmaWNpYS4gRXhlcmNpdGF0aW9uZW0gaXRhcXVlIGRlYml0aXMgcXVpYnVzZGFtLiBRdWlzcXVhbSBxdW9kIGluIGxhYm9yZSBhcGVyaWFtIGVuaW0gdmVuaWFtIGV4Y2VwdHVyaSBsYWJvcmlvc2FtIGF0LjwvcD4gPGJyPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRmFjZXJlIHJhdGlvbmUgZGVsZWN0dXMgcGVyc3BpY2lhdGlzLiBBY2N1c2FudGl1bSByZXJ1bSBvZmZpY2lhIGF0cXVlIGhhcnVtIHBvc3NpbXVzISBRdWlzcXVhbSwgZmFjZXJlIGV1bSBtYWduaSBxdWFzaSBzYXBpZW50ZSBkb2xvcmVtcXVlIG9mZmljaWEuIEV4ZXJjaXRhdGlvbmVtIGl0YXF1ZSBkZWJpdGlzIHF1aWJ1c2RhbS4gUXVpc3F1YW0gcXVvZCBpbiBsYWJvcmUgYXBlcmlhbSBlbmltIHZlbmlhbSBleGNlcHR1cmkgbGFib3Jpb3NhbSBhdC48L3A+YDtcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1kaXYnKTtcbiAgICBpZiAocHJvamVjdHNEYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzRGF0YSk7XG4gICAgICAgIGZvciAobGV0IHByb2ogb2YgcHJvamVjdHNEYXRhKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWREbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RFZGl0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2ouaWQpO1xuICAgICAgICAgICAgICAgIHByb2plY3REbEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qLmlkKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2ouaWQpO1xuICAgICAgICAgICAgICAgIHByb2pUaXRsZS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgICAgICBwcm9qVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgICAgIGVkRGxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGotZGwtZWQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdERsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICAgICAgICAgIHByb2plY3REbEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qLWRlbGV0ZS1idG4nKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVkaXQtYnRuJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gcHJvai5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3REbEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWRpdEJ0bi5pbm5lckhUTUwgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJlZGl0LXBlblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTIwLjcxLDcuMDRDMjEuMSw2LjY1IDIxLjEsNiAyMC43MSw1LjYzTDE4LjM3LDMuMjlDMTgsMi45IDE3LjM1LDIuOSAxNi45NiwzLjI5TDE1LjEyLDUuMTJMMTguODcsOC44N00zLDE3LjI1VjIxSDYuNzVMMTcuODEsOS45M0wxNC4wNiw2LjE4TDMsMTcuMjVaXCIgLz48L3N2Zz4nO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbiAgICAgICAgICAgICAgICBlZERsQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnRuKTtcbiAgICAgICAgICAgICAgICBlZERsQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REbEJ0bik7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChlZERsQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXNwbGF5RWRpdFByb2plY3QocHJvamVjdEVkaXRCdG4pO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlEZWxldGVQcm9qZWN0KHByb2plY3REbEJ0bik7XG4gICAgICAgICAgICAgICAgY2xpY2tpbmdPblByb2plY3QocHJvalRpdGxlKTtcbiAgICAgICAgICAgIH1cblxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XG4gICAgY29uc3QgYWRkUHJvakRsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYWRkJyk7XG4gICAgY29uc3QgZGlhbG9nUHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1kaWFsb2cnKTtcbiAgICBjb25zdCBjbmxQcm9qRGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1jYW5jZWwnKTtcbiAgICBjb25zdCBkaWFsb2dUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlhbG9nJyk7XG4gICAgY29uc3QgY25sVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNhbmNlbCcpO1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWRpdicpO1xuICAgIGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5cblxuICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpYWxvZ1ByLnNob3dNb2RhbCgpO1xuICAgIH0pXG5cbiAgICBjbmxQcm9qRGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgICAgICBwcm9qTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBkaWFsb2dQci5jbG9zZSgpO1xuICAgIH0pXG5cbiAgICBjbmxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5Jyk7XG4gICAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9ICdwcmlvcml0eTEnO1xuICAgICAgICB0YXNrRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICB0YXNrRGVzYy52YWx1ZSA9ICcnOyBcbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gJyc7XG4gICAgICAgIGRpYWxvZ1Rhc2suY2xvc2UoKTtcbiAgICB9KVxuXG5cbiAgICBhZGRQcm9qRGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoICE9PSAwICYmIG5hbWUubGVuZ3RoIDwgMTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWRpdicpO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGpUbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy10aXRsZScpO1xuICAgICAgICAgICAgY29uc3Qgb2xkQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgZWREbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBpZDtcbiAgICAgICAgICAgIHByb2plY3RFZGl0QnRuLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImVkaXQtcGVuXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIiAvPjwvc3ZnPic7XG4gICAgICAgICAgICBkZWxldGVEaXYudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBwcm9qZWN0RWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgIHByb2plY3RFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdC1idG4nKTtcbiAgICAgICAgICAgIGRlbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgIGRlbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qLWRlbGV0ZS1idG4nKTtcblxuICAgICAgICAgICAgaWYgKG9sZFRhc2tzKSB7XG4gICAgICAgICAgICAgICAgb2xkVGFza3MucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvbGRBZGRUYXNrKSB7XG4gICAgICAgICAgICAgICAgb2xkQWRkVGFzay5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmIChvbGRQalRsKSB7XG4gICAgICAgICAgICAgICAgb2xkUGpUbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlhbG9nVGFzay5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBkaXNwbGF5RWRpdFByb2plY3QocHJvamVjdEVkaXRCdG4pO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgICAgICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgICAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICAgICAgZWREbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwai1kbC1lZC1jb250YWluZXInKTtcbiAgICAgICAgICAgIHByb2pUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy10aXRsZScpO1xuICAgICAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcbiAgICAgICAgICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJysgQWRkIHRhc2snO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIHByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgaWQgPSBvYmouaWQ7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFza3NEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgICAgIHByb2pUaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgICAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICAgICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gICAgICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gICAgICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrKTtcbiAgICAgICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgZWREbENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ0bik7XG4gICAgICAgICAgICBlZERsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZURpdik7XG4gICAgICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGVkRGxDb250YWluZXIpO1xuICAgICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgICAgICBkaXNwbGF5VG9kbyhpZCk7XG4gICAgICAgICAgICBkaXNwbGF5RGVsZXRlUHJvamVjdChkZWxldGVEaXYpO1xuICAgICAgICAgICAgY2xpY2tpbmdPblByb2plY3QodGl0bGUpO1xuICAgICAgICAgICAgcHJvak5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGRpYWxvZ1ByLmNsb3NlKCk7XG4gICAgICAgICAgICBzdG9yZVByb2plY3RzKCk7XG5cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0UHJvamVjdChlZGl0QnRuKSB7XG4gICAgY29uc3QgcHJvamVjdERMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGlhbG9nLWVkaXQnKTtcbiAgICBcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0REwuc2hvd01vZGFsKCk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGwtYnRucy1kaXYtcHJvai1lZGl0Jyk7XG4gICAgICAgIGNvbnN0IG9sZEVkQnRuRGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1hZGQtZWRpdCcpO1xuICAgICAgICBjb25zdCBlZEJ0bkRsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNsUHJvakVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otY2FuY2VsLWVkaXQnKTtcblxuICAgICAgICBpZiAob2xkRWRCdG5EbCkge1xuICAgICAgICAgICAgb2xkRWRCdG5EbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlZEJ0bkRsLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICBlZEJ0bkRsLmNsYXNzTGlzdC5hZGQoJ3Byb2otYWRkLWVkaXQnKTtcbiAgICAgICAgZWRCdG5EbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBlZGl0QnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgIGVkQnRuRGwudGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgIGVkaXRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRCdG5EbCk7XG5cbiAgICAgICAgZWRCdG5EbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZWRpdCcpLnZhbHVlO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChuYW1lLmxlbmd0aCAhPT0gMCAmJiBuYW1lLmxlbmd0aCA8IDExKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvakluZGV4ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocHJvakRpdikuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gZWRCdG5EbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IHByb2pEaXZbcHJvakluZGV4XS5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmlkID09PSBlZEJ0bkRsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWRpdFByb2plY3QoaW5kZXgsIG5hbWUpO1xuICAgICAgICAgICAgICAgIHN0b3JlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZWRpdCcpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgcHJvamVjdERMLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjbFByb2pFZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZWRpdCcpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBwcm9qZWN0REwuY2xvc2UoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kbyhpZCkge1xuICAgIGNvbnN0IGZvcm1CdG5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRsLWJ0bnMtZGl2LXRhc2snKTtcbiAgICBjb25zdCBvbGRBZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYWRkJyk7XG4gICAgY29uc3QgYWRkVGFza0RsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZGlhbG9nVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpYWxvZycpO1xuXG4gICAgaWYgKG9sZEFkZFRhc2tCdG4pIHtcbiAgICAgICAgb2xkQWRkVGFza0J0bi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrRGxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICBhZGRUYXNrRGxCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1hZGQnKVxuICAgIGFkZFRhc2tEbEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgdGFzayc7XG4gICAgZm9ybUJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0RsQnRuKTtcbiAgICBhZGRUYXNrRGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY29uc3QgcHJvamVjdHNET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggIT09IDAgJiYgbmFtZS5sZW5ndGggPCA1MyAmJiBkYXRlSW5wdXQgIT09ICcnICYmIGRlc2NyaXB0aW9uLmxlbmd0aCA8IDU1KSB7XG4gICAgICAgICAgICBjb25zdCBkbElkID0gaWRHZW5lcmF0b3IoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZScpO1xuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgICAgIC8vIGxldCBwcm9qZWN0O1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4gb2JqLmlkID09PSBpZCk7XG4gICAgICAgICAgICAvLyBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IGFkZFRhc2sucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG8obmFtZSwgZGF0ZUlucHV0LCBpbmRleCwgZGVzY3JpcHRpb24sIGRsSWQsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IHByb2ogb2YgcHJvamVjdHNET00pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHByb2ouZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IGFkZFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0ID0gcHJvajtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2hvd1Rhc2tzKGluZGV4LCBpZCwgZGxJZCk7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSAncHJpb3JpdHkxJztcbiAgICAgICAgICAgIHRhc2tEYXRlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0YXNrRGVzYy52YWx1ZSA9ICcnOyBcbiAgICAgICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgZGlhbG9nVGFzay5jbG9zZSgpO1xuICAgICAgICAgICAgc3RvcmVQcm9qZWN0cygpO1xuXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbn1cblxuXG5mdW5jdGlvbiBzaG93VGFza3MoaW5kZXgsIGlkLCBkbElkLCBjb3VudGVyKSB7XG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF0ZURsRWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNoZWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGhlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkZWxldGVUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRvZG87XG4gICAgaWYgKHR5cGVvZiBjb3VudGVyID09PSAnbnVtYmVyJykge1xuICAgICAgICB0b2RvID0gIHByb2plY3RzW2luZGV4XS50b2Rvc1tjb3VudGVyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvID0gIHByb2plY3RzW2luZGV4XS50b2Rvc1twcm9qZWN0c1tpbmRleF0udG9kb3MubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICB0aGVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kYXRlO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBlZGl0QnRuLmlubmVySFRNTCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImVkaXQtcGVuXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIiAvPjwvc3ZnPic7XG4gICAgZGVsZXRlVGFza0Rpdi50ZXh0Q29udGVudCA9ICdYJztcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdjaGVjay1idG4nKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgdGhlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlLXRhc2snKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICBkZWxldGVUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGRlbGV0ZVRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnZGwtdGFzay1kaXYnKTtcbiAgICB0aXRsZURlc2NEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtZGVzYy1kaXYnKTtcbiAgICBkYXRlRGxFZGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtZGwtZWRpdC1kaXYnKTtcbiAgICB0aXRsZURlc2NEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRpdGxlRGVzY0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGF0ZURsRWRpdERpdi5hcHBlbmRDaGlsZCh0aGVEYXRlKTtcbiAgICBkYXRlRGxFZGl0RGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIGRhdGVEbEVkaXREaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0Rpdik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja0J0bik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZURlc2NEaXYpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0ZURsRWRpdERpdik7XG4gICAgZGVsZXRlVGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGwtaWQnLCBkbElkKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1kbC1pZCcsIGRsSWQpO1xuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW2luZGV4XS50b2Rvcy5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmRlbGV0ZUlkID09PSBkbElkO1xuICAgIH0pXG4gICAgaWYocHJvamVjdHNbaW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0uY29tcGxldGUgPT09IGZhbHNlKSB7XG4gICAgICAgIGNoZWNrQnRuLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tCdG4udGV4dENvbnRlbnQgPSAn4pyTJztcbiAgICB9XG4gICAgY2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlzQ2hlY2tlZChjaGVja0J0biwgaW5kZXgsIGRsSWQpO1xuICAgICAgICBzdG9yZVByb2plY3RzKCk7XG4gICAgfSlcbiAgICBcbiAgICBcbiAgICBlZGl0Q2hlY2tCdXR0b25Db2xvcih0b2RvLCBjaGVja0J0bik7XG4gICAgZGlzcGxheUVkaXQoZWRpdEJ0biwgaW5kZXgsIHRvZG8sIGNoZWNrQnRuLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRoZURhdGUpO1xuICAgIGRpc3BsYXlEZWxldGVUb2RvKGRlbGV0ZVRhc2tEaXYsIGluZGV4LCBkbElkKTtcbn1cblxuZnVuY3Rpb24gaXNDaGVja2VkKGNoZWNrQnRuLCBpbmRleCwgZGxJZCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW2luZGV4XS50b2Rvcy5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmRlbGV0ZUlkID09PSBkbElkO1xuICAgIH0pXG4gICAgaWYocHJvamVjdHNbaW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0uY29tcGxldGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjaGVja0J0bi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgICAgICAgaXNDb21wbGV0ZShpbmRleCwgdGFza0luZGV4KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrQnRuLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGlzQ29tcGxldGUoaW5kZXgsIHRhc2tJbmRleClcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZWRpdENoZWNrQnV0dG9uQ29sb3IodG9kbywgY2hlY2tCdG4pIHtcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gJ3ByaW9yaXR5MScpIHtcbiAgICAgICAgY2hlY2tCdG4uc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCAjRUU1ODU5JztcbiAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdwcmlvcml0eTInKSB7XG4gICAgICAgIGNoZWNrQnRuLnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgIzdGRUQ1OCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tCdG4uc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCAjNTdDMEVEJztcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheURlbGV0ZVRvZG8oZGVsZXRlRGl2LCBpbmRleCwgZGVsZXRlSWQpIHtcbiAgICBkZWxldGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zSW5kZXggPSBwcm9qZWN0c1tpbmRleF0udG9kb3MuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmouZGVsZXRlSWQgPT09IGRlbGV0ZUlkO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtZGwtaWQ9XCIke2RlbGV0ZUlkfVwiXWApO1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGVUb2RvKHRvZG9zSW5kZXgsIGluZGV4KTtcbiAgICAgICAgc3RvcmVQcm9qZWN0cygpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZWxldGVQcm9qZWN0KGRlbGV0ZURpdikge1xuICAgIGRlbGV0ZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5pZCA9PT0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgfSlcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlVGFza3MocHJvamVjdEluZGV4KTtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpO1xuICAgICAgICBzdG9yZVByb2plY3RzKCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrcyhwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmlkID09PSB0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XG4gICAgICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChhZGRUYXNrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmlkID09PSBhZGRUYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XG4gICAgICAgICAgICAgICAgYWRkVGFzay5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gY2xpY2tpbmdPblByb2plY3QocHJvamVjdCwgaWQpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9iai5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgIHJldHVybiBvYmouaWQgPT09IHByb2plY3QucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICB9KTtcblxuICAgIFxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZEFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9sZEFkZFRhc2tCdG4pO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFkZFRhc2tCdG4pO1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgICAgIGNvbnN0IG9sZFBqVGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFza3NCb3hEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaWFsb2cnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0YXNrc0Rpdikge1xuICAgICAgICAgICAgdGFza3NEaXYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcblxuICAgICAgICBpZiAob2xkQWRkVGFza0J0bikge1xuICAgICAgICAgICAgb2xkQWRkVGFza0J0bi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG9sZFBqVGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9sZFBqVGwpO1xuICAgICAgICAgICAgb2xkUGpUbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tzQm94RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0YXNrc0JveERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICB0YXNrc0JveERpdi5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG4gICAgICAgIHRhc2tzQm94RGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkaWFsb2dUYXNrLnNob3dNb2RhbCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ0bicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtdGl0bGUnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNbaW5kZXhdLm5hbWU7XG4gICAgICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnKyBBZGQgdGFzayc7XG4gICAgICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKVxuICAgICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdHNbaW5kZXhdLmlkKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgICAgIHRhc2sucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3RzW2luZGV4XS50b2Rvcykge1xuICAgICAgICAgICAgc2hvd1Rhc2tzKGluZGV4LCB0YXNrLmlkLCB0YXNrLmRlbGV0ZUlkLCBjb3VudGVyKTtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5VG9kbyhwcm9qZWN0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVkaXQoZWRpdEJ0biwgaW5kZXgsIHRvZG8sIGNoZWNrQnRuLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRoZURhdGUpIHtcbiAgICBjb25zdCBjbmxUYXNrRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNhbmNlbC1lZGl0Jyk7XG4gICAgY29uc3QgZGlhbG9nVGFza0VkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaWFsb2ctZWRpdCcpO1xuICAgIGNvbnN0IHRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtZWRpdCcpO1xuICAgIGNvbnN0IGRlc2NFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24tZWRpdCcpO1xuICAgIGNvbnN0IGRhdGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZS1lZGl0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHktZWRpdCcpO1xuICAgIFxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1FZGl0QnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kbC1idG5zLWRpdi10YXNrLWVkaXQnKTtcbiAgICAgICAgbGV0IGFkZFRhc2tEbEVkaXRCdG47XG4gICAgICAgIGNvbnN0IG9sZEFkZFRhc2tEbEVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1hZGQtZWRpdCcpO1xuICAgICAgICBpZihvbGRBZGRUYXNrRGxFZGl0QnRuKSB7XG4gICAgICAgICAgICBvbGRBZGRUYXNrRGxFZGl0QnRuLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGFkZFRhc2tEbEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVGFza0RsRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgYWRkVGFza0RsRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWFkZC1lZGl0Jyk7XG4gICAgICAgIGFkZFRhc2tEbEVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICAgIGZvcm1FZGl0QnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRGxFZGl0QnRuKTtcbiAgICAgICAgZGlhbG9nVGFza0VkaXQuc2hvd01vZGFsKCk7XG4gICAgICAgIHRpdGxlRWRpdC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICAgIGRlc2NFZGl0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGF0ZUVkaXQudmFsdWUgPSB0b2RvLmRhdGU7XG4gICAgICAgIHByaW9yaXR5RWRpdC52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG5cbiAgICAgICAgYWRkVGFza0RsRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUtZWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgZGVzY0VkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1lZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCBkYXRlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUtZWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHktZWRpdCcpO1xuICAgICAgICAgICAgaWYgKHRpdGxlRWRpdC52YWx1ZS5sZW5ndGggIT09IDAgJiYgdGl0bGVFZGl0LnZhbHVlLmxlbmd0aCA8IDUzICYmIGRhdGVFZGl0LnZhbHVlICE9PSAnJyAmJiBkZXNjRWRpdC52YWx1ZS5sZW5ndGggPCA1NSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW2luZGV4XS50b2Rvcy5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLmRlbGV0ZUlkID09PSB0b2RvLmRlbGV0ZUlkO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZWRpdFRhc2soaW5kZXgsIHRhc2tJbmRleCwgdGl0bGVFZGl0LnZhbHVlLCBkZXNjRWRpdC52YWx1ZSwgIGRhdGVFZGl0LnZhbHVlLCBwcmlvcml0eUVkaXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRhc2sodG9kbywgY2hlY2tCdG4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgdGhlRGF0ZSwgdGl0bGVFZGl0LCBkZXNjRWRpdCwgIGRhdGVFZGl0KTtcbiAgICAgICAgICAgICAgICBkaWFsb2dUYXNrRWRpdC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHN0b3JlUHJvamVjdHMoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgXG4gICAgXG4gICAgY25sVGFza0VkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpYWxvZ1Rhc2tFZGl0LmNsb3NlKCk7XG4gICAgICAgIHRpdGxlRWRpdC52YWx1ZSA9ICcnO1xuICAgICAgICBkZXNjRWRpdC52YWx1ZSA9ICcnO1xuICAgICAgICBkYXRlRWRpdC52YWx1ZSA9ICcnO1xuICAgICAgICBwcmlvcml0eUVkaXQudmFsdWUgPSAnJztcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrKHRvZG8sIGNoZWNrQnRuLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRoZURhdGUsIHRpdGxlRWRpdCwgZGVzY0VkaXQsICBkYXRlRWRpdCkge1xuICAgICAgICBlZGl0Q2hlY2tCdXR0b25Db2xvcih0b2RvLCBjaGVja0J0bik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVFZGl0LnZhbHVlO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NFZGl0LnZhbHVlO1xuICAgICAgICB0aGVEYXRlLnRleHRDb250ZW50ID0gZGF0ZUVkaXQudmFsdWU7XG5cblxufVxuXG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdCwgaW5pdERpc3BsYXksIHNob3dQcm9qZWN0cyB9OyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcblxuZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdEluZGV4LCBuYW1lKSB7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lID0gbmFtZTtcblxufVxuXG5leHBvcnQgeyBlZGl0UHJvamVjdCB9OyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcblxuZnVuY3Rpb24gZWRpdFRhc2socHJvamVjdEluZGV4LCB0YXNrSW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0udGl0bGUgPSB0aXRsZTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0uZGF0ZSA9IGRhdGU7XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0YXNrSW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbn1cblxuZXhwb3J0IHsgZWRpdFRhc2sgfTsiLCJmdW5jdGlvbiBpZEdlbmVyYXRvcigpIHtcbiAgICBjb25zdCBTNCA9IGZ1bmN0aW9uKCkge1xuICAgICAgIHJldHVybiAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDApfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFM0KCkrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1M0KCkrUzQoKSk7XG59XG5cbmV4cG9ydCB7aWRHZW5lcmF0b3J9OyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcbmltcG9ydCB7IGluaXREaXNwbGF5IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxud2luZG93LnByb2plY3RzID0gcHJvamVjdHM7XG5cblxuaW5pdERpc3BsYXkoKTtcblxuXG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIHN0b3JlUHJvamVjdHMoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IHsgc3RvcmVQcm9qZWN0cyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9