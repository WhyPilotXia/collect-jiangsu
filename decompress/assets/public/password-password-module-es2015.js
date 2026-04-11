(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-password-module"],{

/***/ "./node_modules/ocr/dist/esm/definitions.js":
/*!**************************************************!*\
  !*** ./node_modules/ocr/dist/esm/definitions.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "./node_modules/ocr/dist/esm/index.js":
/*!********************************************!*\
  !*** ./node_modules/ocr/dist/esm/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ "./node_modules/ocr/dist/esm/definitions.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_definitions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _definitions__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _definitions__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ "./node_modules/ocr/dist/esm/web.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OcrWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_1__["OcrWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ocr", function() { return _web__WEBPACK_IMPORTED_MODULE_1__["Ocr"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ocr/dist/esm/web.js":
/*!******************************************!*\
  !*** ./node_modules/ocr/dist/esm/web.js ***!
  \******************************************/
/*! exports provided: OcrWeb, Ocr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcrWeb", function() { return OcrWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ocr", function() { return Ocr; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class OcrWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'Ocr',
            platforms: ['web'],
        });
    }
    scan() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method scan not implemented.");
        });
    }
}
const Ocr = new OcrWeb();


Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(Ocr);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/password/password.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password/password.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回</span>\n            </div>\n            <span class=\"header-title\">修改密码</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"tabContentCss\">\n\n    <div class=\"list\">\n        <div class=\"list-item-title\">\n            <span>第一步</span>\n            <div>\n                <span>扫描您的身份证并填写手机号</span>\n            </div>\n        </div>\n        <div class=\"list-item-button\">\n            <span (click)=\"scan()\">扫描身份证</span>\n        </div>\n        <div class=\"list-item\">\n            <span><span style=\"color: red\">*</span>姓名</span>\n            <div class=\"list-item-select\">\n                <input type=\"text\"  [(ngModel)]=\"patientInfo.name\">\n            </div>\n        </div>\n        <div class=\"list-item\">\n            <span><span style=\"color: red\">*</span>身份证号</span>\n            <div class=\"list-item-select\">\n                <input type=\"text\"   [(ngModel)]=\"patientInfo.identity\"  (keyup.enter)=\"getRegisterInfo()\" disabled>\n            </div>\n        </div>\n        <div class=\"list-item\">\n            <span><span style=\"color: red\">*</span>手机号</span>\n            <div class=\"list-item-select\">\n                <input type=\"tel\"  placeholder=\"请填写手机号\"  [(ngModel)]=\"patientInfo.mobile\">\n            </div>\n        </div>\n        <div class=\"list-item\">\n            <span><span style=\"color: red\">*</span>验证码</span>\n            <div class=\"list-item-verification-Code\">\n                <img [src]=\"verifyCodeJpg\" (click)=\"getVerifyCode()\">\n                <input type=\"tel\"  placeholder=\"验证码\"  [(ngModel)]=\"patientInfo.verifyCode\">\n            </div>\n        </div>\n        <div [ngClass]=\"step === '1'? 'downNone': 'upNone'\">\n        </div>\n        <div class=\"list-item-title mt\">\n            <span>第二步</span>\n            <div>\n               <span>填写新密码</span>\n            </div>\n        </div>\n        <div class=\"list-item\">\n            <span><span style=\"color: red\">*</span>新密码</span>\n            <div class=\"list-item-select\">\n                <input type=\"text\"  [(ngModel)]=\"patientInfo.newPassword\">\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class=\"bar-footer\">\n        <ng-container *ngIf=\"step === '1';else submitStep\">\n            <div class=\"bar-footer-end\" (click) = \"checkPhoneSave()\">下一步</div>\n        </ng-container>\n        <ng-template #submitStep>\n            <div class=\"bar-footer-end\" (click) = \"submit()\">提交</div>\n        </ng-template>\n    </div>\n</ion-footer>\n\n    <div  class=\"write-load-bar\">\n        <ion-spinner icon=\"android\" class=\"load-css\"></ion-spinner>\n    </div>\n");

/***/ }),

/***/ "./src/app/password/password.module.ts":
/*!*********************************************!*\
  !*** ./src/app/password/password.module.ts ***!
  \*********************************************/
/*! exports provided: PasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModule", function() { return PasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/serviceCommon.module */ "./src/app/service/serviceCommon.module.ts");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password.page */ "./src/app/password/password.page.ts");










let PasswordModule = class PasswordModule {
};
PasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _password_page__WEBPACK_IMPORTED_MODULE_9__["PasswordPage"] }])
        ],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_9__["PasswordPage"]]
    })
], PasswordModule);



/***/ }),

/***/ "./src/app/password/password.page.scss":
/*!*********************************************!*\
  !*** ./src/app/password/password.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabContentCss {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #EDEDED;\n}\n\n.top-number {\n  font-size: 0.9rem;\n  padding: 0.3rem 0 0.3rem 1rem;\n  color: #4d4d4d;\n}\n\n.top-number > span {\n  font-size: 1rem;\n  display: inline-block;\n  margin-left: 8px;\n  color: black;\n}\n\n.bar-footer {\n  border-top: 1px solid #cccccc;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  color: white;\n}\n\n.bar-footer-end {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n  border-right: 1px solid #bcbcbc;\n  background-color: #005BAC;\n  color: white;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\n\n.list-item {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  background-color: white;\n  padding: 0.6rem 0 0.6rem 1rem;\n  border-bottom: 1px solid #e4e4e4;\n}\n\n.list-item > span {\n  width: 100px;\n  font-size: 0.9rem;\n  color: #4d4d4d;\n}\n\n.list-item > div {\n  position: absolute;\n  left: 100px;\n  right: 10px;\n  font-size: 1rem;\n}\n\n.list-item-title {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  background-color: white;\n  padding: 0.6rem 0 0.6rem 1rem;\n  border-bottom: 1px solid #e4e4e4;\n}\n\n.list-item-title > span {\n  width: 90px;\n  font-size: 1rem;\n  color: #4d4d4d;\n}\n\n.list-item-title > div {\n  position: absolute;\n  left: 100px;\n  right: 10px;\n  font-size: 0.9rem;\n}\n\n.list-item-button {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  background-color: white;\n  padding: 0.3rem 1rem 0.3rem 0;\n  border-bottom: 1px solid #e4e4e4;\n  justify-content: center;\n}\n\n.list-item-button > span {\n  font-size: 1rem;\n  color: white;\n  background-color: #005BAC;\n  border-bottom: 1px solid #e4e4e4;\n  border-radius: 4px;\n  padding: 5px 10px 5px 10px;\n}\n\n.selectButton {\n  font-size: 1rem;\n  color: white;\n  background-color: #1890FF;\n  border-bottom: 1px solid #e4e4e4;\n  border-radius: 4px 0 0 4px;\n  padding: 5px 10px 5px 10px;\n}\n\n.selectButton1 {\n  font-size: 1rem;\n  color: white;\n  background-color: #1890FF;\n  border-bottom: 1px solid #e4e4e4;\n  border-radius: 0 4px 4px 0;\n  padding: 5px 10px 5px 10px;\n}\n\n.notSelectButton {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.65);\n  background: rgba(0, 0, 0, 0.02);\n  border-bottom: 1px solid #e4e4e4;\n  padding: 5px 10px 5px 10px;\n}\n\n.list-item-select {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.list-item-select > select {\n  border: 0;\n  background-color: white;\n  width: 13rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.list-item-select > input {\n  border: 0;\n  width: 13rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.list-item-verification-Code {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.list-item-verification-Code > input {\n  border: 0;\n  width: 6rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.list-item-verification-Code > img {\n  height: 30px;\n  width: 7rem;\n}\n\n.mt {\n  margin-top: 10px;\n}\n\n.mb {\n  margin-bottom: 10px;\n}\n\n.display-bar {\n  display: none;\n}\n\n.input-not-barcode {\n  border: 0;\n  width: 93vw;\n  padding-right: 20px;\n}\n\n.input-not-barcode-select {\n  border: 0;\n  width: 100%;\n  text-align: right;\n}\n\n.input-select {\n  width: 20px;\n  border: 0;\n  background-color: white;\n}\n\n.item-button {\n  float: right;\n  padding: 0px 5px;\n  font-size: 1.2rem;\n  height: 40px;\n  color: black;\n  border-radius: 2px;\n  line-height: 30px;\n  background-color: #f5f5f9;\n}\n\n.write-load-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 99;\n  display: none;\n}\n\n.load-css {\n  position: absolute;\n  left: 40%;\n  top: 40%;\n  color: #1095FF;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 1rem;\n  margin-top: 6px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n}\n\n:host ::ng-deep .am-radio-inner {\n  display: none;\n}\n\n:host ::ng-deep .radioshow .am-radio-inner {\n  display: inline-block;\n}\n\n:host ::ng-deep .am-list-item {\n  background-color: #f5f5f4;\n}\n\n:host ::ng-deep .radioshow .am-list-item {\n  background-color: #ebfbff;\n}\n\n.idenno {\n  display: inline-block;\n  margin-left: 1.5rem;\n  font-size: 0.8rem;\n}\n\n.load-model-radio {\n  margin-bottom: 15px;\n}\n\n.load-model-list {\n  height: 26vh;\n  overflow-y: auto;\n}\n\n.load-model-title {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n  color: #aaa;\n}\n\n.display-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.list-item-down {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  margin-left: 5px;\n  font-size: 1.2rem;\n}\n\n.list-item-down > span {\n  width: 100px;\n}\n\n.list-item-down > div {\n  border-bottom: 2px solid #b8b8b8;\n  position: absolute;\n  left: 100px;\n  right: 10px;\n}\n\n.downNone {\n  background-color: #EFEFEF;\n  z-index: 9;\n  height: 17.5rem;\n  position: absolute;\n  bottom: 0;\n  top: 15rem;\n  left: 0;\n  right: 0;\n  opacity: 0.5;\n}\n\n.upNone {\n  background-color: #EFEFEF;\n  z-index: 9;\n  height: 15rem;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQvcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFFRjs7QUFBQTtFQUNHLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHSDs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FBTUY7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QUFTRjs7QUFOQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQVNGOztBQVBBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQVVGOztBQVJBO0VBQ0UsU0FBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtBQVdGOztBQVRBO0VBQ0UsU0FBQTtFQUVBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFXRjs7QUFUQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBWUY7O0FBVkE7RUFDRSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7QUFjRjs7QUFWQTtFQUNFLGFBQUE7QUFhRjs7QUFWQTtFQUNHLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFhSDs7QUFYQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFjRjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFjRjs7QUFWQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFhRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBVUY7O0FBUkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFXRjs7QUFSQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFXRjs7QUFUQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVlGOztBQVZBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBYUY7O0FBWEE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFjRjs7QUFUQTtFQUNFLGFBQUE7QUFZRjs7QUFUQTtFQUNFLHFCQUFBO0FBWUY7O0FBVEE7RUFDRyx5QkFBQTtBQVlIOztBQVRBO0VBQ0UseUJBQUE7QUFZRjs7QUFUQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVlGOztBQVRBO0VBQ0UsbUJBQUE7QUFZRjs7QUFWQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0csa0JBQUE7RUFDRCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWNGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVdGOztBQVRBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWUY7O0FBVEE7RUFDRSxZQUFBO0FBWUY7O0FBVkE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFhRjs7QUFYQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBY0Y7O0FBWkE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQWVGIiwiZmlsZSI6InNyYy9hcHAvcGFzc3dvcmQvcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYkNvbnRlbnRDc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbn1cblxuLnRvcC1udW1iZXJ7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgcGFkZGluZzogMC4zcmVtIDAgMC4zcmVtIDFyZW07XG4gICAgY29sb3I6ICM0ZDRkNGQ7XG59XG4udG9wLW51bWJlciA+IHNwYW57XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5iYXItZm9vdGVye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhci1mb290ZXItZW5ke1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JjYmNiYztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMC43cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43cmVtO1xufVxuXG4ubGlzdHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5saXN0LWl0ZW17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC42cmVtIDAgMC42cmVtIDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xufVxuLmxpc3QtaXRlbSA+c3BhbntcbiAgIHdpZHRoOiAxMDBweDtcbiAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgY29sb3I6ICM0ZDRkNGQ7XG59XG4ubGlzdC1pdGVtID5kaXZ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5saXN0LWl0ZW0tdGl0bGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC42cmVtIDAgMC42cmVtIDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xufVxuXG4ubGlzdC1pdGVtLXRpdGxlID5zcGFue1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzRkNGQ0ZDtcbn1cbi5saXN0LWl0ZW0tdGl0bGUgPmRpdntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmxpc3QtaXRlbS1idXR0b257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW0gMC4zcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxpc3QtaXRlbS1idXR0b24gPnNwYW57XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QkFDO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbn1cbi5zZWxlY3RCdXR0b257XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MEZGO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xufVxuLnNlbGVjdEJ1dHRvbjF7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MEZGO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xufVxuLm5vdFNlbGVjdEJ1dHRvbntcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xufVxuXG4ubGlzdC1pdGVtLXNlbGVjdHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmxpc3QtaXRlbS1zZWxlY3QgPnNlbGVjdHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEzcmVtO1xuICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbn1cbi5saXN0LWl0ZW0tc2VsZWN0ID5pbnB1dHtcbiAgYm9yZGVyOiAwO1xuICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTNyZW07XG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xufVxuLmxpc3QtaXRlbS12ZXJpZmljYXRpb24tQ29kZXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmxpc3QtaXRlbS12ZXJpZmljYXRpb24tQ29kZSA+aW5wdXR7XG4gIGJvcmRlcjogMDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDZyZW07XG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xufVxuLmxpc3QtaXRlbS12ZXJpZmljYXRpb24tQ29kZSA+IGltZ3tcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogN3JlbTtcbn1cbi5tdHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYntcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG4uZGlzcGxheS1iYXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnB1dC1ub3QtYmFyY29kZXtcbiAgIGJvcmRlcjogMDtcbiAgIHdpZHRoOiA5M3Z3O1xuICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5pbnB1dC1ub3QtYmFyY29kZS1zZWxlY3R7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW5wdXQtc2VsZWN0e1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uaXRlbS1idXR0b257XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY5O1xufVxuXG5cblxuXG4ud3JpdGUtbG9hZC1iYXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC40O1xuICB6LWluZGV4OiA5OTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2FkLWNzc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MCU7XG4gIHRvcDogNDAlO1xuICBjb2xvcjogIzEwOTVGRjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgei1pbmRleDogMTAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgIC50b29sYmFyLXRpdGxlLWRlZmF1bHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmhlYWRlci1pY29ue1xuICB3aWR0aDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLmhlYWRlci1mb250e1xuICB3aWR0aDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tdG9wOiA2cHhcbn1cbi5oZWFkZXItdGl0bGV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5cblxuOmhvc3QgOjpuZy1kZWVwIC5hbS1yYWRpby1pbm5lcntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yYWRpb3Nob3cgLmFtLXJhZGlvLWlubmVye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW0tbGlzdC1pdGVte1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yYWRpb3Nob3cgLmFtLWxpc3QtaXRlbXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZmJmZjtcbn1cblxuLmlkZW5ub3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMS41cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmxvYWQtbW9kZWwtcmFkaW97XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubG9hZC1tb2RlbC1saXN0e1xuICBoZWlnaHQ6IDI2dmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubG9hZC1tb2RlbC10aXRsZXtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjYWFhO1xufVxuXG5cblxuLy8g5pqC5pe25Y675o6JXG4uZGlzcGxheS1saXN0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5saXN0LWl0ZW0tZG93bntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5saXN0LWl0ZW0tZG93biA+c3BhbntcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmxpc3QtaXRlbS1kb3duID5kaXZ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjhiOGI4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwMHB4O1xuICByaWdodDogMTBweDtcbn1cbi5kb3duTm9uZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjtcbiAgei1pbmRleDogOTtcbiAgaGVpZ2h0OiAxNy41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAxNXJlbTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi51cE5vbmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XG4gIHotaW5kZXg6IDk7XG4gIGhlaWdodDogMTVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/password/password.page.ts":
/*!*******************************************!*\
  !*** ./src/app/password/password.page.ts ***!
  \*******************************************/
/*! exports provided: PasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function() { return PasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var ocr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ocr */ "./node_modules/ocr/dist/esm/index.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/http-client.service */ "./src/app/shared/http-client.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");











const { Ocr } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let PasswordPage = class PasswordPage {
    constructor(router, navCtrl, http, route, ref, platform, deleteModal, sanitizer) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.route = route;
        this.ref = ref;
        this.platform = platform;
        this.deleteModal = deleteModal;
        this.sanitizer = sanitizer;
        // 信息
        this.patientInfo = {
            id: '',
            name: undefined,
            identity: undefined,
            mobile: undefined,
            verifyCode: undefined,
            newPassword: undefined
        };
        this.step = '1';
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.routeBack();
        });
    }
    ngOnInit() {
        this.getVerifyCode();
    }
    ionViewWillEnter() {
    }
    // 清除信息
    clean() {
        this.patientInfo = {
            id: '',
            name: undefined,
            identity: undefined,
            mobile: undefined,
            verifyCode: undefined,
            newPassword: undefined
        };
        this.imageData = '';
        this.step = '1';
    }
    // 路由返回
    routeBack() {
        this.clean();
        this.router.navigate(['/login']);
    }
    checkPhone(phone) {
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(phone)) {
            this.http.showToast('手机号为空，请修改！');
            return false;
        }
        // 通过正则表达式判断手机号码格式是否正确,根据电信，联通、移动手机号码规则可以到以下正则
        // 手机号码第一位是[1]开头，第二位[3-9]中的一位，第三位到第十一位则是[0-9]中的数字；
        // ^1表示开头为1
        // [3|4|5|7|8] 表示3、4、5、7、8中的一位数值
        // [0-9]{9} 匹配包含0-9的数字
        const reg = /^1[3-9][0-9]{9}/;
        if (reg.test(phone) && phone.length === 11) {
            return true; // 手机号码正确
        }
        else {
            this.http.showToast('手机号填写有误，请修改！');
            return false;
        }
    }
    submit() {
        // 判断姓名
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.name) || this.patientInfo.name === '' || this.patientInfo.name.trim() === '') {
            this.http.showToast('姓名为空，请输入姓名！');
            return;
        }
        // 判断身份证号
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.identity)) {
            this.http.showToast('请扫描身份证！');
            return;
        }
        // 判断手机号
        if (!this.checkPhone(this.patientInfo.mobile)) {
            return;
        }
        // 判断密码
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.newPassword)) {
            this.http.showToast('密码为空，请输入密码！');
            return;
        }
        let bool = false;
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.Date)) {
            if ((new Date().getTime() - this.Date.getTime()) / 1000 > 2) {
                bool = true;
            }
            else {
                bool = false;
            }
        }
        else {
            bool = true;
        }
        if (!bool) {
            this.http.showToast('正在保存信息，请稍等');
            return;
        }
        this.Date = new Date();
        const cond = {
            password: this.patientInfo.newPassword,
            userId: this.patientInfo.id,
        };
        this.http.post('rcp/api/user/modifyPassword', cond, '', '', { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.http.showToast('密码修改成功');
            }
        });
    }
    // 通过身份证号，获取用户信息
    getRegisterInfo() {
        this.http
            .getNotHeardPost(`rcp/register/sysuser/detail` + this.http.getParamsString({ idenno: this.patientInfo.identity }), {}, '通过身份证号，获取用户信息', '通过身份证号，获取用户信息失败', { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.patientInfo = {
                    id: data['data']['userId'],
                    name: data['data']['userName'],
                    identity: data['data']['idenno'],
                    mobile: data['data']['mobile'],
                    verifyCode: this.patientInfo.verifyCode,
                    newPassword: undefined
                };
                this.step = '2';
            }
        });
    }
    // 获取验证码
    getVerifyCode() {
        this.http
            .getNotHeardBlob(`rcp/open/api/verifyCode`)
            .subscribe(data => {
            this.verifyCodeJpg = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(data.body));
            this.verifyCode = data.headers.get('verifyCode');
        });
    }
    // 校验手机号
    checkPhoneSave() {
        // 判断姓名
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.name) || this.patientInfo.name === '' || this.patientInfo.name.trim() === '') {
            this.http.showToast('姓名为空，请输入姓名！');
            return;
        }
        // 判断身份证号
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.identity)) {
            this.http.showToast('请扫描身份证！');
            return;
        }
        // 判断手机号
        if (!this.checkPhone(this.patientInfo.mobile)) {
            return;
        }
        // 判断验证码
        if (this.verifyCode.toUpperCase() !== this.patientInfo.verifyCode.toUpperCase()) {
            this.http.showToast('验证码不正确，请重新输入！');
            return;
        }
        this.getRegisterInfo();
    }
    // 扫描身份证
    scan() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.result = (yield Ocr.scan());
            if (this.http.IdentityCodeValid(this.result.num, '请重新扫描')) {
                this.dealScanResult();
            }
        });
    }
    // 处理扫描出的信息
    dealScanResult() {
        this.patientInfo.name = this.result.name;
        this.patientInfo.identity = this.result.num;
        this.patientInfo.mobile = '';
        this.imageData = this.result.imageData;
        this.ref.detectChanges();
    }
};
PasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_9__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
];
PasswordPage.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@routeAnimation',] }]
};
PasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/password/password.page.html")).default,
        animations: [
            _shared__WEBPACK_IMPORTED_MODULE_8__["routeAnimation"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./password.page.scss */ "./src/app/password/password.page.scss")).default]
    })
], PasswordPage);



/***/ })

}]);
//# sourceMappingURL=password-password-module-es2015.js.map