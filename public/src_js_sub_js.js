(self["webpackChunkwebpack_test"] = self["webpackChunkwebpack_test"] || []).push([["src_js_sub_js"],{

/***/ "./src/js/sub.js":
/*!***********************!*\
  !*** ./src/js/sub.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var utils = __webpack_require__(/*! ./src/js/utils */ "./src/js/utils/index.js")["default"];
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
console.log("this is a sub js file.");
utils.log('hello from sub.js');
jQuery();

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  log: function (str) {
    console.log(str);
  }
});

/***/ })

}]);
//# sourceMappingURL=src_js_sub_js.js.map