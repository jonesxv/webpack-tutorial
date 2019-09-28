(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("async function getComponent() {\n\n  const element = document.createElement('div');\n\n  const { default: _ } = await __webpack_require__.e(/*! import() | lodash */ \"vendors\").then(__webpack_require__.t.bind(null, /*! lodash */ \"./node_modules/lodash/lodash.js\", 7));\n\n  element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n  return element;\n  \n}\n\ngetComponent().then(component => {\n  document.body.appendChild(component);\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["./src/index.js","runtime"]]]);