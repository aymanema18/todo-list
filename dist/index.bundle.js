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

.dl-btns-div-proj, .dl-btns-div-task, .dl-btns-div-task-edit {
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

.proj-add, .task-add, .task-add-edit {
    font-weight: bold;
}

.task-add, .proj-add, .task-add-edit {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAAmD;AACvD;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,kDAAkD;AACtD;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,8CAA8C;IAC9C,eAAe;IACf,yCAAyC;IACzC,UAAU;AACd;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,yCAAyC;IACzC;AACJ;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,yCAAyC;IACzC,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,iBAAiB;IACjB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kDAAkD;IAClD,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kDAAkD;IAClD,8BAA8B;IAC9B,mBAAmB;IACnB,cAAc;IACd,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: \"inter\";\n    src: url(./fonts/Inter-VariableFont_slnt\\,wght.ttf);\n}\n\n* {\n    box-sizing: border-box;\n}\n\n:root {\n    --light-pink: #ffeded;\n    --dark-pink: #EED8DA;\n    --dark-gray: #4F4F33;\n}\n\nbody {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    height: 100vh;\n    color: var(--dark-gray);\n    font-family: \"inter\", Arial, Helvetica, sans-serif;\n}\n\nsection {\n    background-color: var(--light-pink);\n    display: grid;\n    grid-template-rows: repeat(2, min-content) 1fr;\n    padding: 0 16px;\n    box-shadow: 3px 0px 5px rgb(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.logo {\n    padding: 35px 0;\n    text-align: start;\n    font-size: 26px;\n    font-weight: bold;\n}\n\n.heading-and-btn-div {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    font-size: 18px;\n    font-weight: bold;\n    margin-bottom: 5px;\n}\n\n.add-project-btn {\n    justify-self: end;\n}\n\n.nav {\n    align-self: end;\n}\n\nul {\n    list-style-type: none;\n    padding: 0;\n}\n\nmain {\n    background-color: var(--dark-pink);\n    padding: 60px 30px;\n}\n\n.tasks-div {\n    background-color: var(--light-pink);\n    min-height: 60%;\n    max-height: 800px;\n    padding: 25px;\n    box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.2);\n    border-radius: 15px\n}\n\np {\n    margin: 0;\n}\n\n.projects-title, h1 {\n    font-size: 26px;\n    font-weight: bold;\n}\n\n.add-task-btn {\n    margin-top: 15px;\n}\n\n.btn {\n    cursor: pointer;\n}\n\ndialog {\n    color: var(--dark-gray);\n    padding: 25px;\n    background-color: var(--light-pink);\n    border: none;\n    box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.2);\n    border-radius: 15px;\n    width: 300px;\n}\n\n.dl-btns-div-proj, .dl-btns-div-task, .dl-btns-div-task-edit {\n    display: flex;\n    justify-content: end;\n    padding-top: 15px;\n    gap: 15px;\n    font-size: 15px;\n}\n\ninput[type=\"text\"] {\n    padding: 0.4em;\n}\n\n.input-div {\n    display: flex;\n    flex-direction: column;\n    font-weight: bold;\n}\n\n.proj-cancel, .task-cancel, .task-cancel-edit {\n    font-weight: 400;\n}\n\n.proj-add, .task-add, .task-add-edit {\n    font-weight: bold;\n}\n\n.task-add, .proj-add, .task-add-edit {\n    font-family: 'inter', Arial, Helvetica, sans-serif;\n    border: none;\n    background: none;\n    font-size: 15px;\n    color: var(--dark-gray);\n}\n\n.project {\n    display: flex;\n    padding-left: 10px;\n    justify-content: space-between;\n}\n\n.title-desc-div, .date-dl-edit-div {\n    display: flex;\n    gap: 25px;\n}\n\n.title-desc-div {\n    padding-left: 7px;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: min-content 1fr max-content;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 0;\n    border-bottom: 1px solid var(--dark-gray);\n}\n\n.check-btn {\n    height: 20px;\n    width: 20px;\n    background-color: white;\n    font-size: 20px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
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


const projects = [];

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
/* harmony export */   initDisplay: () => (/* binding */ initDisplay)
/* harmony export */ });
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");
/* harmony import */ var _create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-todo */ "./src/create-todo.js");
/* harmony import */ var _id_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./id-generator */ "./src/id-generator.js");
/* harmony import */ var _delete_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-todo */ "./src/delete-todo.js");
/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-project */ "./src/delete-project.js");
/* harmony import */ var _complete_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complete-task */ "./src/complete-task.js");
/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-task */ "./src/edit-task.js");








const today = new Date().toISOString().split('T')[0];
document.querySelector('#task-date').setAttribute('min', today);
document.querySelector('#task-date-edit').setAttribute('min', today);

function initDisplay() {
    window.addEventListener('DOMContentLoaded', () => {
        const homeBtn = document.querySelector('.home');
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
    })
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


    addProjDl.addEventListener('click', (event) => {
        event.preventDefault();
        const name = document.querySelector('#project-name').value;
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
        let id;
        deleteDiv.textContent = 'X';
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
        
        ;(0,_create_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);
        addTask.classList.add('btn');
        addTask.classList.add('add-task-btn');
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
        project.appendChild(deleteDiv);
        projectsDiv.appendChild(project);
        displayTodo(id);
        displayDeleteProject(deleteDiv);
        clickingOnProject(title);
        projName.value = '';
        dialogPr.close();
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
    editBtn.textContent = 'E';
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
    })
}

function displayDeleteProject(deleteDiv) {
    deleteDiv.addEventListener('click', (event) => {
        const projectIndex = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => {
            return obj.id === event.target.parentElement.getAttribute('data-id');
        })
        event.target.parentElement.remove();
        deleteTasks(projectIndex);
        (0,_delete_project__WEBPACK_IMPORTED_MODULE_4__.deleteProject)(projectIndex);
        
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
    if (_create_project__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].id === addTask.getAttribute('data-id')) {
        addTask.remove();
    }

}


function clickingOnProject(project) {
    const index = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((obj) => {
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
            const taskIndex = _create_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].todos.findIndex((obj) => {
                return obj.deleteId === todo.deleteId;
            })
            ;(0,_edit_task__WEBPACK_IMPORTED_MODULE_6__.editTask)(index, taskIndex, titleEdit.value, descEdit.value,  dateEdit.value, priorityEdit.value);
            updateTask(todo, checkBtn, title, description, theDate, titleEdit, descEdit,  dateEdit);
            dialogTaskEdit.close();
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
(0,_display__WEBPACK_IMPORTED_MODULE_4__.displayProject)();




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0U7QUFDRjtBQUNNO0FBQ0o7QUFDTjs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVEsK0RBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwREFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFR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Ozs7Ozs7Ozs7Ozs7OztBQ0wyRDtBQUNoQjtBQUNBO0FBQ007QUFDTztBQUNuQzs7QUFFckIsa0JBQWtCLHFEQUFROzs7QUFHMUIscURBQVc7QUFDWCx3REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wbGV0ZS10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWxldGUtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdC10YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pZC1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0ludGVyLVZhcmlhYmxlRm9udF9zbG50LHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJpbnRlclwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgLS1saWdodC1waW5rOiAjZmZlZGVkO1xuICAgIC0tZGFyay1waW5rOiAjRUVEOERBO1xuICAgIC0tZGFyay1ncmF5OiAjNEY0RjMzO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICBmb250LWZhbWlseTogXCJpbnRlclwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1waW5rKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbi1jb250ZW50KSAxZnI7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAwcHggNXB4IHJnYigwLCAwLCAwLCAwLjIpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5sb2dvIHtcbiAgICBwYWRkaW5nOiAzNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGluZy1hbmQtYnRuLWRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmFkZC1wcm9qZWN0LWJ0biB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5uYXYge1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXBpbmspO1xuICAgIHBhZGRpbmc6IDYwcHggMzBweDtcbn1cblxuLnRhc2tzLWRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcGluayk7XG4gICAgbWluLWhlaWdodDogNjAlO1xuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweFxufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wcm9qZWN0cy10aXRsZSwgaDEge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFkZC10YXNrLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaWFsb2cge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcGluayk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYigwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uZGwtYnRucy1kaXYtcHJvaiwgLmRsLWJ0bnMtZGl2LXRhc2ssIC5kbC1idG5zLWRpdi10YXNrLWVkaXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIHBhZGRpbmc6IDAuNGVtO1xufVxuXG4uaW5wdXQtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9qLWNhbmNlbCwgLnRhc2stY2FuY2VsLCAudGFzay1jYW5jZWwtZWRpdCB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnByb2otYWRkLCAudGFzay1hZGQsIC50YXNrLWFkZC1lZGl0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2stYWRkLCAucHJvai1hZGQsIC50YXNrLWFkZC1lZGl0IHtcbiAgICBmb250LWZhbWlseTogJ2ludGVyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG59XG5cbi5wcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aXRsZS1kZXNjLWRpdiwgLmRhdGUtZGwtZWRpdC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4udGl0bGUtZGVzYy1kaXYge1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xufVxuXG4udGFzayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBtYXgtY29udGVudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmF5KTtcbn1cblxuLmNoZWNrLWJ0biB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix5Q0FBeUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJpbnRlclxcXCI7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnRcXFxcLHdnaHQudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1waW5rOiAjZmZlZGVkO1xcbiAgICAtLWRhcmstcGluazogI0VFRDhEQTtcXG4gICAgLS1kYXJrLWdyYXk6ICM0RjRGMzM7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiaW50ZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcGluayk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbi1jb250ZW50KSAxZnI7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDBweCA1cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgcGFkZGluZzogMzVweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlYWRpbmctYW5kLWJ0bi1kaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcGluayk7XFxuICAgIHBhZGRpbmc6IDYwcHggMzBweDtcXG59XFxuXFxuLnRhc2tzLWRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXBpbmspO1xcbiAgICBtaW4taGVpZ2h0OiA2MCU7XFxuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweFxcbn1cXG5cXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdHMtdGl0bGUsIGgxIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpYWxvZyB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1waW5rKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uZGwtYnRucy1kaXYtcHJvaiwgLmRsLWJ0bnMtZGl2LXRhc2ssIC5kbC1idG5zLWRpdi10YXNrLWVkaXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG59XFxuXFxuLmlucHV0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvai1jYW5jZWwsIC50YXNrLWNhbmNlbCwgLnRhc2stY2FuY2VsLWVkaXQge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJvai1hZGQsIC50YXNrLWFkZCwgLnRhc2stYWRkLWVkaXQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2stYWRkLCAucHJvai1hZGQsIC50YXNrLWFkZC1lZGl0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdpbnRlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRpdGxlLWRlc2MtZGl2LCAuZGF0ZS1kbC1lZGl0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLnRpdGxlLWRlc2MtZGl2IHtcXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgbWF4LWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyYXkpO1xcbn1cXG5cXG4uY2hlY2stYnRuIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGUocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpIHtcbiAgICBpZiAocHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0YXNrSW5kZXhdLmNvbXBsZXRlID09PSBmYWxzZSkge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0uY29tcGxldGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbdGFza0luZGV4XS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgaXNDb21wbGV0ZSB9OyIsImltcG9ydCB7IGlkR2VuZXJhdG9yIH0gZnJvbSBcIi4vaWQtZ2VuZXJhdG9yXCI7XG5cbmNvbnN0IHByb2plY3RzID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgcHJvamVjdHMucHVzaCh7bmFtZSwgaWQ6IGlkR2VuZXJhdG9yKCksIHRvZG9zOiBbXX0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cyB9OyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZUlucHV0LCBpbmRleCwgZGVzY3JpcHRpb24gPSAnJywgZGVsZXRlSWQsIHByaW9yaXR5LCBjb21wbGV0ZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlSW5wdXQ7XG4gICAgICAgIHRoaXMuaWQgPSBwcm9qZWN0c1tpbmRleF0uaWQ7XG4gICAgICAgIHRoaXMuZGVsZXRlSWQgPSBkZWxldGVJZDtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkYXRlSW5wdXQsIGluZGV4LCBkZXNjcmlwdGlvbiA9ICcnLCBkZWxldGVJZCwgcHJpb3JpdHksIGNvbXBsZXRlID0gZmFsc2UpIHtcbiAgICBwcm9qZWN0c1tpbmRleF0udG9kb3MucHVzaChuZXcgVG9kbyh0aXRsZSwgZGF0ZUlucHV0LCBpbmRleCwgZGVzY3JpcHRpb24sIGRlbGV0ZUlkLCBwcmlvcml0eSwgY29tcGxldGUpKTtcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVUb2RvIH07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xufVxuXG5leHBvcnQge2RlbGV0ZVByb2plY3R9OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcblxuZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvSW5kZXgsIHByb2plY3RJbmRleCkge1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG59XG5cbmV4cG9ydCB7ZGVsZXRlVG9kb307IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL2NyZWF0ZS10b2RvXCI7XG5pbXBvcnQgeyBpZEdlbmVyYXRvciB9IGZyb20gXCIuL2lkLWdlbmVyYXRvclwiO1xuaW1wb3J0IHsgZGVsZXRlVG9kbyB9IGZyb20gXCIuL2RlbGV0ZS10b2RvXCI7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vZGVsZXRlLXByb2plY3RcIjtcbmltcG9ydCB7IGlzQ29tcGxldGUgfSBmcm9tIFwiLi9jb21wbGV0ZS10YXNrXCI7XG5pbXBvcnQgeyBlZGl0VGFzayB9IGZyb20gXCIuL2VkaXQtdGFza1wiO1xuXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZScpLnNldEF0dHJpYnV0ZSgnbWluJywgdG9kYXkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZS1lZGl0Jykuc2V0QXR0cmlidXRlKCdtaW4nLCB0b2RheSk7XG5cbmZ1bmN0aW9uIGluaXREaXNwbGF5KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICAgICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3EnKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGFza3NEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gJ3llYWggc2NpZW5jZSEnO1xuICAgICAgICBxLnRleHRDb250ZW50ID0gJ1NvbWUgcGVvcGxlIGhhdmUgYSB3YXkgd2l0aCB3b3JkcywgYW5kIG90aGVyIHBlb3BsZS4uLm9oLCB1aCwgbm90IGhhdmUgd2F5Lic7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSAnIC0gU3RldmUgTWFydGluJztcbiAgICAgICAgcC5hcHBlbmRDaGlsZChxKTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChwKTtcblxuICAgICAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uc3QgcSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3EnKTtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0YXNrc0Rpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGgxLnRleHRDb250ZW50ID0gJ3llYWggc2NpZW5jZSEnO1xuICAgICAgICAgICAgcS50ZXh0Q29udGVudCA9ICdTb21lIHBlb3BsZSBoYXZlIGEgd2F5IHdpdGggd29yZHMsIGFuZCBvdGhlciBwZW9wbGUuLi5vaCwgdWgsIG5vdCBoYXZlIHdheS4nO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICcgLSBTdGV2ZSBNYXJ0aW4nO1xuICAgICAgICAgICAgcC5hcHBlbmRDaGlsZChxKTtcbiAgICAgICAgICAgIHAuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KCkge1xuICAgIGNvbnN0IGFkZFByb2pEbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qLWFkZCcpO1xuICAgIGNvbnN0IGRpYWxvZ1ByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGlhbG9nJyk7XG4gICAgY29uc3QgY25sUHJvakRsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otY2FuY2VsJyk7XG4gICAgY29uc3QgZGlhbG9nVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpYWxvZycpO1xuICAgIGNvbnN0IGNubFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jYW5jZWwnKTtcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1kaXYnKTtcbiAgICBjb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuXG5cbiAgICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaWFsb2dQci5zaG93TW9kYWwoKTtcbiAgICB9KVxuXG4gICAgY25sUHJvakRsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgcHJvak5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgZGlhbG9nUHIuY2xvc2UoKTtcbiAgICB9KVxuXG5cbiAgICBhZGRQcm9qRGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgb2xkVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICAgICAgY29uc3QgZGVsZXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtZGl2Jyk7XG4gICAgICAgIGNvbnN0IG9sZFBqVGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtdGl0bGUnKTtcbiAgICAgICAgY29uc3Qgb2xkQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICAgICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgbGV0IGlkO1xuICAgICAgICBkZWxldGVEaXYudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGRlbGV0ZURpdi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgZGVsZXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2otZGVsZXRlLWJ0bicpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG9sZFRhc2tzKSB7XG4gICAgICAgICAgICBvbGRUYXNrcy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG9sZEFkZFRhc2spIHtcbiAgICAgICAgICAgIG9sZEFkZFRhc2sucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2xkUGpUbCkge1xuICAgICAgICAgICAgb2xkUGpUbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkaWFsb2dUYXNrLnNob3dNb2RhbCgpO1xuICAgICAgICB9KVxuICAgICAgXG4gICAgICAgIGNubFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSAncHJpb3JpdHkxJztcbiAgICAgICAgICAgIHRhc2tEYXRlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0YXNrRGVzYy52YWx1ZSA9ICcnOyBcbiAgICAgICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgZGlhbG9nVGFzay5jbG9zZSgpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKTtcbiAgICAgICAgcHJvalRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLXRpdGxlJyk7XG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzJyk7XG4gICAgICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnKyBBZGQgdGFzayc7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBmb3IgKGxldCBvYmogb2YgcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGlkID0gb2JqLmlkOyBcbiAgICAgICAgfVxuICAgICAgICB0YXNrc0Rpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIHByb2pUaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZCk7XG4gICAgICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChwcm9qVGl0bGUpO1xuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gICAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlRGl2KTtcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlUb2RvKGlkKTtcbiAgICAgICAgZGlzcGxheURlbGV0ZVByb2plY3QoZGVsZXRlRGl2KTtcbiAgICAgICAgY2xpY2tpbmdPblByb2plY3QodGl0bGUpO1xuICAgICAgICBwcm9qTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBkaWFsb2dQci5jbG9zZSgpO1xuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVRvZG8oaWQpIHtcbiAgICBjb25zdCBmb3JtQnRuc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kbC1idG5zLWRpdi10YXNrJyk7XG4gICAgY29uc3Qgb2xkQWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZCcpO1xuICAgIGNvbnN0IGFkZFRhc2tEbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGRpYWxvZ1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaWFsb2cnKTtcblxuICAgIGlmIChvbGRBZGRUYXNrQnRuKSB7XG4gICAgICAgIG9sZEFkZFRhc2tCdG4ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgYWRkVGFza0RsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgYWRkVGFza0RsQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYWRkJylcbiAgICBhZGRUYXNrRGxCdG4udGV4dENvbnRlbnQgPSAnQWRkIHRhc2snO1xuICAgIGZvcm1CdG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEbEJ0bik7XG4gICAgYWRkVGFza0RsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGNvbnN0IHByb2plY3RzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGxJZCA9IGlkR2VuZXJhdG9yKCk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW5hbWUnKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgLy8gbGV0IHByb2plY3Q7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IG9iai5pZCA9PT0gaWQpO1xuICAgICAgICAvLyBjb25zdCBpbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgob2JqKSA9PiBvYmouaWQgPT09IGFkZFRhc2sucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgICAgICAgY3JlYXRlVG9kbyhuYW1lLCBkYXRlSW5wdXQsIGluZGV4LCBkZXNjcmlwdGlvbiwgZGxJZCwgcHJpb3JpdHkpO1xuICAgICAgICAvLyBmb3IgKGxldCBwcm9qIG9mIHByb2plY3RzRE9NKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKHByb2ouZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IGFkZFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3QgPSBwcm9qO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIHNob3dUYXNrcyhpbmRleCwgaWQsIGRsSWQpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSAncHJpb3JpdHkxJztcbiAgICAgICAgdGFza0RhdGUudmFsdWUgPSAnJztcbiAgICAgICAgdGFza0Rlc2MudmFsdWUgPSAnJzsgXG4gICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICAgICAgICBkaWFsb2dUYXNrLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgXG59XG5cblxuZnVuY3Rpb24gc2hvd1Rhc2tzKGluZGV4LCBpZCwgZGxJZCwgY291bnRlcikge1xuICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGVEbEVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZURlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRoZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZGVsZXRlVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0b2RvO1xuICAgIGlmICh0eXBlb2YgY291bnRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdG9kbyA9ICBwcm9qZWN0c1tpbmRleF0udG9kb3NbY291bnRlcl07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9kbyA9ICBwcm9qZWN0c1tpbmRleF0udG9kb3NbcHJvamVjdHNbaW5kZXhdLnRvZG9zLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgdGhlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZGF0ZTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFJztcbiAgICBkZWxldGVUYXNrRGl2LnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWJ0bicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2MnKTtcbiAgICB0aGVEYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUtdGFzaycpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ0bicpO1xuICAgIGRlbGV0ZVRhc2tEaXYuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgZGVsZXRlVGFza0Rpdi5jbGFzc0xpc3QuYWRkKCdkbC10YXNrLWRpdicpO1xuICAgIHRpdGxlRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1kZXNjLWRpdicpO1xuICAgIGRhdGVEbEVkaXREaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZS1kbC1lZGl0LWRpdicpO1xuICAgIHRpdGxlRGVzY0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGVEZXNjRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkYXRlRGxFZGl0RGl2LmFwcGVuZENoaWxkKHRoZURhdGUpO1xuICAgIGRhdGVEbEVkaXREaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgZGF0ZURsRWRpdERpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrRGl2KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrQnRuKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlRGVzY0Rpdik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlRGxFZGl0RGl2KTtcbiAgICBkZWxldGVUYXNrRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1kbC1pZCcsIGRsSWQpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdkYXRhLWRsLWlkJywgZGxJZCk7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgXG4gICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNbaW5kZXhdLnRvZG9zLmZpbmRJbmRleCgob2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmouZGVsZXRlSWQgPT09IGRsSWQ7XG4gICAgfSlcbiAgICBpZihwcm9qZWN0c1tpbmRleF0udG9kb3NbdGFza0luZGV4XS5jb21wbGV0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2hlY2tCdG4udGV4dENvbnRlbnQgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja0J0bi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgIH1cbiAgICBjaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaXNDaGVja2VkKGNoZWNrQnRuLCBpbmRleCwgZGxJZCk7XG4gICAgfSlcbiAgICBcbiAgICBcbiAgICBlZGl0Q2hlY2tCdXR0b25Db2xvcih0b2RvLCBjaGVja0J0bik7XG4gICAgZGlzcGxheUVkaXQoZWRpdEJ0biwgaW5kZXgsIHRvZG8sIGNoZWNrQnRuLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRoZURhdGUpO1xuICAgIGRpc3BsYXlEZWxldGVUb2RvKGRlbGV0ZVRhc2tEaXYsIGluZGV4LCBkbElkKTtcbn1cblxuZnVuY3Rpb24gaXNDaGVja2VkKGNoZWNrQnRuLCBpbmRleCwgZGxJZCkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW2luZGV4XS50b2Rvcy5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLmRlbGV0ZUlkID09PSBkbElkO1xuICAgIH0pXG4gICAgaWYocHJvamVjdHNbaW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0uY29tcGxldGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjaGVja0J0bi50ZXh0Q29udGVudCA9ICfinJMnO1xuICAgICAgICAgICAgaXNDb21wbGV0ZShpbmRleCwgdGFza0luZGV4KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrQnRuLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGlzQ29tcGxldGUoaW5kZXgsIHRhc2tJbmRleClcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZWRpdENoZWNrQnV0dG9uQ29sb3IodG9kbywgY2hlY2tCdG4pIHtcbiAgICBpZiAodG9kby5wcmlvcml0eSA9PT0gJ3ByaW9yaXR5MScpIHtcbiAgICAgICAgY2hlY2tCdG4uc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCAjRUU1ODU5JztcbiAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdwcmlvcml0eTInKSB7XG4gICAgICAgIGNoZWNrQnRuLnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgIzdGRUQ1OCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tCdG4uc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCAjNTdDMEVEJztcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheURlbGV0ZVRvZG8oZGVsZXRlRGl2LCBpbmRleCwgZGVsZXRlSWQpIHtcbiAgICBkZWxldGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zSW5kZXggPSBwcm9qZWN0c1tpbmRleF0udG9kb3MuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmouZGVsZXRlSWQgPT09IGRlbGV0ZUlkO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtZGwtaWQ9XCIke2RlbGV0ZUlkfVwiXWApO1xuICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGVUb2RvKHRvZG9zSW5kZXgsIGluZGV4KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RGVsZXRlUHJvamVjdChkZWxldGVEaXYpIHtcbiAgICBkZWxldGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmouaWQgPT09IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICB9KVxuICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlVGFza3MocHJvamVjdEluZGV4KTtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpO1xuICAgICAgICBcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrcyhwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmlkID09PSB0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XG4gICAgICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmlkID09PSBhZGRUYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XG4gICAgICAgIGFkZFRhc2sucmVtb3ZlKCk7XG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gY2xpY2tpbmdPblByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5pZCA9PT0gcHJvamVjdC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIH0pO1xuXG4gICAgXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkQWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cob2xkQWRkVGFza0J0bik7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWRkVGFza0J0bik7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbiAgICAgICAgY29uc3Qgb2xkUGpUbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy10aXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrc0JveERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1kaXYnKTtcbiAgICAgICAgY29uc3QgZGlhbG9nVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpYWxvZycpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhc2tzRGl2KSB7XG4gICAgICAgICAgICB0YXNrc0Rpdi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrcycpO1xuXG4gICAgICAgIGlmIChvbGRBZGRUYXNrQnRuKSB7XG4gICAgICAgICAgICBvbGRBZGRUYXNrQnRuLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAob2xkUGpUbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2xkUGpUbCk7XG4gICAgICAgICAgICBvbGRQalRsLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFza3NCb3hEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2tzQm94RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHRhc2tzQm94RGl2LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcbiAgICAgICAgdGFza3NCb3hEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRpYWxvZ1Rhc2suc2hvd01vZGFsKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy10aXRsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpbmRleF0ubmFtZTtcbiAgICAgICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICcrIEFkZCB0YXNrJztcbiAgICAgICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpXG4gICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwcm9qZWN0c1tpbmRleF0uaWQpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdHNbaW5kZXhdLnRvZG9zKSB7XG4gICAgICAgICAgICBzaG93VGFza3MoaW5kZXgsIHRhc2suaWQsIHRhc2suZGVsZXRlSWQsIGNvdW50ZXIpO1xuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlUb2RvKHByb2plY3QucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG5cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdChlZGl0QnRuLCBpbmRleCwgdG9kbywgY2hlY2tCdG4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgdGhlRGF0ZSkge1xuICAgIGNvbnN0IGNubFRhc2tFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2FuY2VsLWVkaXQnKTtcbiAgICBjb25zdCBkaWFsb2dUYXNrRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpYWxvZy1lZGl0Jyk7XG4gICAgY29uc3QgdGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbmFtZS1lZGl0Jyk7XG4gICAgY29uc3QgZGVzY0VkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1lZGl0Jyk7XG4gICAgY29uc3QgZGF0ZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlLWVkaXQnKTtcbiAgICBjb25zdCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1lZGl0Jyk7XG4gICAgXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybUVkaXRCdG5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRsLWJ0bnMtZGl2LXRhc2stZWRpdCcpO1xuICAgICAgICBsZXQgYWRkVGFza0RsRWRpdEJ0bjtcbiAgICAgICAgY29uc3Qgb2xkQWRkVGFza0RsRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWFkZC1lZGl0Jyk7XG4gICAgICAgIGlmKG9sZEFkZFRhc2tEbEVkaXRCdG4pIHtcbiAgICAgICAgICAgIG9sZEFkZFRhc2tEbEVkaXRCdG4ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkVGFza0RsRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrRGxFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYWRkLWVkaXQnKTtcbiAgICAgICAgYWRkVGFza0RsRWRpdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICAgICAgICBmb3JtRWRpdEJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0RsRWRpdEJ0bik7XG4gICAgICAgIGRpYWxvZ1Rhc2tFZGl0LnNob3dNb2RhbCgpO1xuICAgICAgICB0aXRsZUVkaXQudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgICAgICBkZXNjRWRpdC52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGRhdGVFZGl0LnZhbHVlID0gdG9kby5kYXRlO1xuICAgICAgICBwcmlvcml0eUVkaXQudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuXG4gICAgICAgIGFkZFRhc2tEbEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lLWVkaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24tZWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlLWVkaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWVkaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW2luZGV4XS50b2Rvcy5maW5kSW5kZXgoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmouZGVsZXRlSWQgPT09IHRvZG8uZGVsZXRlSWQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZWRpdFRhc2soaW5kZXgsIHRhc2tJbmRleCwgdGl0bGVFZGl0LnZhbHVlLCBkZXNjRWRpdC52YWx1ZSwgIGRhdGVFZGl0LnZhbHVlLCBwcmlvcml0eUVkaXQudmFsdWUpO1xuICAgICAgICAgICAgdXBkYXRlVGFzayh0b2RvLCBjaGVja0J0biwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0aGVEYXRlLCB0aXRsZUVkaXQsIGRlc2NFZGl0LCAgZGF0ZUVkaXQpO1xuICAgICAgICAgICAgZGlhbG9nVGFza0VkaXQuY2xvc2UoKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIFxuICAgIFxuICAgIGNubFRhc2tFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaWFsb2dUYXNrRWRpdC5jbG9zZSgpO1xuICAgICAgICB0aXRsZUVkaXQudmFsdWUgPSAnJztcbiAgICAgICAgZGVzY0VkaXQudmFsdWUgPSAnJztcbiAgICAgICAgZGF0ZUVkaXQudmFsdWUgPSAnJztcbiAgICAgICAgcHJpb3JpdHlFZGl0LnZhbHVlID0gJyc7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFzayh0b2RvLCBjaGVja0J0biwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0aGVEYXRlLCB0aXRsZUVkaXQsIGRlc2NFZGl0LCAgZGF0ZUVkaXQpIHtcbiAgICAgICAgZWRpdENoZWNrQnV0dG9uQ29sb3IodG9kbywgY2hlY2tCdG4pO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlRWRpdC52YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjRWRpdC52YWx1ZTtcbiAgICAgICAgdGhlRGF0ZS50ZXh0Q29udGVudCA9IGRhdGVFZGl0LnZhbHVlO1xuXG5cbn1cblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3QsIGluaXREaXNwbGF5IH07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBlZGl0VGFzayhwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbdGFza0luZGV4XS50aXRsZSA9IHRpdGxlO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udG9kb3NbdGFza0luZGV4XS5kYXRlID0gZGF0ZTtcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcblxufVxuXG5leHBvcnQgeyBlZGl0VGFzayB9OyIsImZ1bmN0aW9uIGlkR2VuZXJhdG9yKCkge1xuICAgIGNvbnN0IFM0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgcmV0dXJuICgoKDErTWF0aC5yYW5kb20oKSkqMHgxMDAwMCl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICB9O1xuICAgIHJldHVybiAoUzQoKStTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrUzQoKStTNCgpKTtcbn1cblxuZXhwb3J0IHtpZEdlbmVyYXRvcn07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuL2NyZWF0ZS10b2RvXCI7XG5pbXBvcnQgeyBkZWxldGVUb2RvIH0gZnJvbSBcIi4vZGVsZXRlLXRvZG9cIjsgXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vZGVsZXRlLXByb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBpbml0RGlzcGxheSB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbndpbmRvdy5wcm9qZWN0cyA9IHByb2plY3RzO1xuXG5cbmluaXREaXNwbGF5KCk7XG5kaXNwbGF5UHJvamVjdCgpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==