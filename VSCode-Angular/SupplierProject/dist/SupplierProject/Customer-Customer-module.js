(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Customer-Customer-module"],{

/***/ "./src/app/Customer/Customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/Customer/Customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
        this.page = 'Customer Page';
    }
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./Customer.view.html */ "./src/app/Customer/Customer.view.html")
        })
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/Customer/Customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Customer/Customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Customer.component */ "./src/app/Customer/Customer.component.ts");
/* harmony import */ var _Routing_CustomerRouting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Routing/CustomerRouting */ "./src/app/Routing/CustomerRouting.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _Customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_Routing_CustomerRouting__WEBPACK_IMPORTED_MODULE_5__["CustomerRouting"]),
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_Customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"]]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/Customer/Customer.view.html":
/*!*********************************************!*\
  !*** ./src/app/Customer/Customer.view.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h2> {{page}}</h2>\n\nCustomer Page\n\n\n"

/***/ }),

/***/ "./src/app/Routing/CustomerRouting.ts":
/*!********************************************!*\
  !*** ./src/app/Routing/CustomerRouting.ts ***!
  \********************************************/
/*! exports provided: CustomerRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRouting", function() { return CustomerRouting; });
/* harmony import */ var _Customer_Customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Customer/Customer.component */ "./src/app/Customer/Customer.component.ts");

var CustomerRouting = [
    { path: 'Add', component: _Customer_Customer_component__WEBPACK_IMPORTED_MODULE_0__["CustomerComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=Customer-Customer-module.js.map