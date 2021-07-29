"use strict";
(self["webpackChunkappDos"] = self["webpackChunkappDos"] || []).push([["src_ItemList_tsx"],{

/***/ "./src/ItemList.tsx":
/*!**************************!*\
  !*** ./src/ItemList.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?024c");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");


//@ts-ignore
const ItemList = () => {
    const [List, setList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [In, setIn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__.default, { value: In, onChange: (e) => setIn(e.target.value) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__.default, { type: "primary", onClick: () => {
                setList([...List, In]);
                setIn("");
            } }, "add item"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, List.map((l) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: l + Math.random() }, l))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemList);


/***/ })

}]);
//# sourceMappingURL=src_ItemList_tsx.js.map