(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回</span>\n            </div>\n            <span class=\"header-title\">{{titleInfo}}</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-info\">\n\n    <div class=\"user-step\">\n\n        <div class=\"step\" [class.current]=\"step == 1\">\n            <div class=\"kv pure\">\n                <div class=\"k strong\">第一步</div>\n                <div class=\"v\">{{titleInfo1}}</div>\n            </div>\n            <div class=\"kv btn-row jcc\">\n                <span class=\"ibtn\" (click)=\"scan()\">扫描身份证</span>\n            </div>\n            <div class=\"kv\">\n                <div class=\"k\">\n                    <span class=\"req\">*</span>\n                    <span>姓名</span>\n                </div>\n                <div class=\"v\">\n                    <input type=\"text\" [(ngModel)]=\"patientInfo.name\" class=\"w100\">\n                </div>\n            </div>\n            <div class=\"kv\">\n                <div class=\"k\">\n                    <span class=\"req\">*</span>\n                    <span>身份证号</span>\n                </div>\n                <div class=\"v\">\n                    <input type=\"text\" maxlength=\"18\" [(ngModel)]=\"patientInfo.identity\" (keyup.enter)=\"getRegisterInfo()\" class=\"w100\">\n                </div>\n            </div>\n            <div class=\"kv\">\n                <div class=\"k\">\n                    <span class=\"req\">*</span>\n                    <span>手机号</span>\n                </div>\n                <div class=\"v\">\n                    <input type=\"tel\" maxlength=\"11\" placeholder=\"请填写手机号\"  [(ngModel)]=\"patientInfo.mobile\" class=\"w100\">\n                </div>\n            </div>\n            <div class=\"kv\">\n                <div class=\"k\">\n                    <span class=\"req\">*</span>\n                    <span>验证码</span>\n                </div>\n                <div class=\"v v-verify-code\"> \n                    <input type=\"tel\"  placeholder=\"验证码\"  [(ngModel)]=\"patientInfo.verifyCode\" class=\"w100\">\n                    <img [src]=\"verifyCodeJpg\" (click)=\"getVerifyCode()\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"step\" [class.current]=\"step == 2\">\n\n            <div class=\"kv pure\">\n                <div class=\"k strong\">第二步</div>\n                <div class=\"v\">{{titleInfo2}}</div>\n            </div>\n \n            <div class=\"kv btn-row jcc\">\n                <div (click)=\"changePersonType('志愿者')\" [ngClass]=\"selectPersonnelType === '志愿者'? 'tab-current': 'tab-none'\">志愿者</div>\n                <div (click)=\"changePersonType('医院护士')\" [ngClass]=\"selectPersonnelType === '医院护士'? 'tab-free': 'tab-none'\">医院护士</div>\n            </div>\n\n            <div class=\"kv\">\n                <div class=\"k\">\n                    <span class=\"req\">*</span>\n                    <span>所属省</span>\n                </div>\n                <div class=\"v\">\n                    <select [(ngModel)]=\"patientInfo.provinceId\" (ngModelChange)=\"changeProvince($event)\" class=\"w100\">\n                        <ng-container *ngFor=\"let province of ProvinceList\">\n                            <option [value]=\"province.provinceId\" >{{province.province}}</option>\n                        </ng-container>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"kv\">\n                <div class=\"k\">\n                    <span class=\"req\">*</span>\n                    <span>所属市</span>\n                </div>\n                <div class=\"v\">\n                    <select [(ngModel)]=\"patientInfo.cityId\" (ngModelChange)=\"changeCity($event)\" class=\"w100\">\n                        <ng-container *ngFor=\"let city of cityList\">\n                            <option [value]=\"city.cityId\" >{{city.city}}</option>\n                        </ng-container>\n                    </select>\n                </div>\n            </div>\n    \n            <ng-container *ngIf=\"selectPersonnelType === '志愿者';else selectStep\">\n\n                <div class=\"kv\">\n                    <div class=\"k\">\n                        <span class=\"req\">*</span>\n                        <span>所属区</span>\n                    </div>\n                    <div class=\"v\">\n                        <select [(ngModel)]=\"patientInfo.areaId\" (ngModelChange)=\"changAreaId($event)\" class=\"w100\">\n                            <option [value]=\"'ALL'\" >全部</option>\n                            <ng-container *ngFor=\"let area of areaList\">\n                                <option [value]=\"area.areaId\" >{{area.area}}</option>\n                            </ng-container>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"kv\">\n                    <div class=\"k\">\n                        <span class=\"req\">*</span>\n                        <span>所属街道</span>\n                    </div>\n                    <div class=\"v\">\n                        <select [(ngModel)]=\"patientInfo.laboratoryId\" (ngModelChange)=\"changeStreet($event)\" class=\"w100\">\n                            <option [value]=\"'ALL'\" >全部</option>\n                            <ng-container *ngFor=\"let street of streetList\">\n                                <option [value]=\"street.countryId\" >{{street.country}}</option>\n                            </ng-container>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"kv\">\n                    <div class=\"k\">\n                        <span class=\"req\">*</span>\n                        <span>所属社区</span>\n                    </div>\n                    <div class=\"v\">\n                        <select [(ngModel)]=\"patientInfo.hospital\" class=\"w100\">\n                            <option [value]=\"'ALL'\" >全部</option>\n                            <ng-container *ngFor=\"let community of communityList\">\n                                <option [value]=\"community.communityId\" >{{community.community}}</option>\n                            </ng-container>\n                        </select>\n                    </div>\n                </div>\n                \n            </ng-container>\n            <ng-template #selectStep>\n                <ng-container *ngIf=\"this.isSelectArea === 'true'\">\n\n                    <div class=\"kv\">\n                        <div class=\"k\">\n                            <span class=\"req\">*</span>\n                            <span>所属区</span>\n                        </div>\n                        <div class=\"v\">\n                            <select [(ngModel)]=\"patientInfo.areaId\" class=\"w100\">\n                                <option [value]=\"'ALL'\" >全部</option>\n                                <ng-container *ngFor=\"let area of areaList\">\n                                    <option [value]=\"area.areaId\" >{{area.area}}</option>\n                                </ng-container>\n                            </select>\n                        </div>\n                    </div>\n                </ng-container>\n\n                <div class=\"kv\">\n                    <div class=\"k\">\n                        <span class=\"req\">*</span>\n                        <span>医院/机构</span>\n                    </div>\n                    <div class=\"v\">\n                        <input type=\"text\"  [(ngModel)]=\"patientInfo.laboratoryName\" (focus)=\"routeSelect()\" class=\"w100\">\n                    </div>\n                </div>\n\n                <div class=\"kv\">\n                    <div class=\"k\">\n                        <span class=\"vh req\">*</span>\n                        <span>所属科室</span>\n                    </div>\n                    <div class=\"v\">\n                        <input type=\"text\"  [(ngModel)]=\"patientInfo.hospital\" class=\"w100\">\n                    </div>\n                </div>\n \n            </ng-template>\n        </div>\n        \n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class=\"bar-footer\">\n        <ng-container *ngIf=\"step === '1';else submitStep\">\n            <div class=\"bar-footer-end\" (click) = \"checkPhoneSave()\">下一步</div>\n        </ng-container>\n        <ng-template #submitStep>\n            <div class=\"bar-footer-end\" (click) = \"submit()\">提交</div>\n        </ng-template>\n    </div>\n</ion-footer>\n\n    <div  class=\"write-load-bar\">\n        <ion-spinner icon=\"android\" class=\"load-css\"></ion-spinner>\n    </div>\n");

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/serviceCommon.module */ "./src/app/service/serviceCommon.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");










let RegisterModule = class RegisterModule {
};
RegisterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _register_page__WEBPACK_IMPORTED_MODULE_9__["RegisterPage"] }])
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_9__["RegisterPage"]]
    })
], RegisterModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 1rem;\n  margin-top: 6px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n}\n\n.bar-footer {\n  border-top: 1px solid #cccccc;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  color: white;\n}\n\n.bar-footer-end {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n  border-right: 1px solid #bcbcbc;\n  background-color: #005BAC;\n  color: white;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n\n.write-load-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 99;\n  display: none;\n}\n\n.load-css {\n  position: absolute;\n  left: 40%;\n  top: 40%;\n  color: #1095FF;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n\n:host::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n:host::ng-deep .am-radio-inner {\n  display: none;\n}\n\n:host::ng-deep .radioshow .am-radio-inner {\n  display: inline-block;\n}\n\n:host::ng-deep .am-list-item {\n  background-color: #f5f5f4;\n}\n\n:host::ng-deep .radioshow .am-list-item {\n  background-color: #ebfbff;\n}\n\n.idenno {\n  display: inline-block;\n  margin-left: 1.5rem;\n  font-size: 0.8rem;\n}\n\n.load-model-radio {\n  margin-bottom: 15px;\n}\n\n.load-model-list {\n  height: 26vh;\n  overflow-y: auto;\n}\n\n.load-model-title {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n  color: #aaa;\n}\n\n.user-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #EDEDED;\n}\n\n.user-step {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\n\n.user-step .step {\n  position: relative;\n  background: #fff;\n  font-size: 1rem;\n}\n\n.user-step .step:first-child {\n  margin-bottom: 15px;\n}\n\n.user-step .step:not(.current):after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n}\n\n.kv {\n  display: flex;\n  align-items: center;\n  padding: 2px 10px;\n  border-bottom: 1px solid #e4e4e4;\n  font-size: 0.9rem;\n}\n\n.k {\n  width: 120px;\n  flex-shrink: 0;\n  padding-left: 0 10px;\n  color: #666;\n}\n\n.k.strong {\n  font-weight: bold;\n}\n\n.v {\n  flex-grow: 1;\n}\n\n.tac {\n  text-align: center;\n}\n\n.jcc {\n  justify-content: center;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.vh {\n  visibility: hidden;\n}\n\n.pure {\n  padding: 2px 10px;\n  line-height: 40px;\n}\n\n.btn-row {\n  padding: 8px 10px;\n}\n\n.ibtn {\n  font-size: 1rem;\n  color: white;\n  background-color: #005BAC;\n  border-bottom: 1px solid #e4e4e4;\n  border-radius: 4px;\n  padding: 5px 10px 5px 10px;\n}\n\n.req {\n  color: #f00;\n  margin-right: 2px;\n}\n\n.kv select {\n  border: 0;\n  background-color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 40px;\n}\n\n.kv input {\n  background: #fff;\n  padding: 4px;\n  height: 40px;\n  border: 0 none;\n}\n\n.kv .text {\n  border: 0;\n  width: 13rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.v-verify-code {\n  display: flex;\n}\n\n.tab-current {\n  font-size: 1rem;\n  color: white;\n  background-color: #1890FF;\n  border-bottom: 1px solid #e4e4e4;\n  border-radius: 4px 0 0 4px;\n  padding: 5px 10px 5px 10px;\n}\n\n.tab-free {\n  font-size: 1rem;\n  color: white;\n  background-color: #1890FF;\n  border-bottom: 1px solid #e4e4e4;\n  border-radius: 0 4px 4px 0;\n  padding: 5px 10px 5px 10px;\n}\n\n.tab-none {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.65);\n  background: rgba(0, 0, 0, 0.02);\n  border-bottom: 1px solid #e4e4e4;\n  padding: 5px 10px 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQWEsV0FBQTtFQUFXLFdBQUE7RUFBVyxrQkFBQTtFQUFrQixrQkFBQTtBQUlyRDs7QUFIQTtFQUFhLFdBQUE7RUFBVyxXQUFBO0VBQVcsa0JBQUE7RUFBa0IsZUFBQTtFQUFlLGVBQUE7QUFXcEU7O0FBVkE7RUFBYyxxQkFBQTtFQUFxQixlQUFBO0VBQWUsaUJBQUE7RUFBaUIsWUFBQTtBQWlCbkU7O0FBZkE7RUFBWSw2QkFBQTtFQUE2QixhQUFBO0VBQWEsbUJBQUE7RUFBbUIsdUJBQUE7RUFBdUIsWUFBQTtBQXVCaEc7O0FBdEJBO0VBQWdCLFdBQUE7RUFBVyxpQkFBQTtFQUFpQixrQkFBQTtFQUFrQiwrQkFBQTtFQUErQix5QkFBQTtFQUF5QixZQUFBO0VBQVksbUJBQUE7RUFBbUIsc0JBQUE7QUFpQ3JKOztBQS9CQTtFQUFnQixrQkFBQTtFQUFrQixNQUFBO0VBQU0sT0FBQTtFQUFPLFNBQUE7RUFBUyxRQUFBO0VBQVEsdUJBQUE7RUFBdUIsWUFBQTtFQUFZLFdBQUE7RUFBVyxhQUFBO0FBMkM5Rzs7QUExQ0E7RUFBVSxrQkFBQTtFQUFrQixTQUFBO0VBQVMsUUFBQTtFQUFRLGNBQUE7RUFBYyxZQUFBO0VBQVksV0FBQTtFQUFXLFlBQUE7RUFBWSxVQUFBO0FBcUQ5Rjs7QUFsREE7RUFBc0Msa0JBQUE7RUFBa0Isa0JBQUE7QUF1RHhEOztBQXREQTtFQUErQixhQUFBO0FBMEQvQjs7QUF6REE7RUFBMEMscUJBQUE7QUE2RDFDOztBQTVEQTtFQUE2Qix5QkFBQTtBQWdFN0I7O0FBL0RBO0VBQXdDLHlCQUFBO0FBbUV4Qzs7QUFsRUE7RUFBUSxxQkFBQTtFQUFxQixtQkFBQTtFQUFtQixpQkFBQTtBQXdFaEQ7O0FBdkVBO0VBQWtCLG1CQUFBO0FBMkVsQjs7QUExRUE7RUFBaUIsWUFBQTtFQUFZLGdCQUFBO0FBK0U3Qjs7QUE5RUE7RUFBa0Isa0JBQUE7RUFBa0IsbUJBQUE7RUFBbUIsaUJBQUE7RUFBaUIsV0FBQTtBQXFGeEU7O0FBakZBO0VBQVcsYUFBQTtFQUFhLHNCQUFBO0VBQXNCLHVCQUFBO0VBQXVCLG1CQUFBO0VBQW1CLHlCQUFBO0FBeUZ4Rjs7QUF2RkE7RUFBVyxhQUFBO0VBQWEsc0JBQUE7RUFBc0IsdUJBQUE7RUFBdUIsVUFBQTtFQUFVLFNBQUE7QUErRi9FOztBQTlGQTtFQUFpQixrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixlQUFBO0FBb0duRDs7QUFuR0E7RUFBNkIsbUJBQUE7QUF1RzdCOztBQXRHQTtFQUFxQyxXQUFBO0VBQVcsa0JBQUE7RUFBa0IsV0FBQTtFQUFXLFlBQUE7RUFBWSxXQUFBO0VBQVcsOEJBQUE7RUFBMkIsTUFBQTtFQUFNLE9BQUE7QUFpSHJJOztBQWhIQTtFQUFJLGFBQUE7RUFBYSxtQkFBQTtFQUFtQixpQkFBQTtFQUFpQixnQ0FBQTtFQUFnQyxpQkFBQTtBQXdIckY7O0FBdkhBO0VBQUcsWUFBQTtFQUFZLGNBQUE7RUFBYyxvQkFBQTtFQUFvQixXQUFBO0FBOEhqRDs7QUE3SEE7RUFBVSxpQkFBQTtBQWlJVjs7QUFoSUE7RUFBRyxZQUFBO0FBb0lIOztBQWxJQTtFQUFLLGtCQUFBO0FBc0lMOztBQXJJQTtFQUFLLHVCQUFBO0FBeUlMOztBQXhJQTtFQUFNLFdBQUE7QUE0SU47O0FBM0lBO0VBQUksa0JBQUE7QUErSUo7O0FBN0lBO0VBQU0saUJBQUE7RUFBaUIsaUJBQUE7QUFrSnZCOztBQWpKQTtFQUFTLGlCQUFBO0FBcUpUOztBQW5KQTtFQUFNLGVBQUE7RUFBZSxZQUFBO0VBQVkseUJBQUE7RUFBeUIsZ0NBQUE7RUFBZ0Msa0JBQUE7RUFBa0IsMEJBQUE7QUE0SjVHOztBQTNKQTtFQUFLLFdBQUE7RUFBVyxpQkFBQTtBQWdLaEI7O0FBOUpBO0VBQVcsU0FBQTtFQUFTLHVCQUFBO0VBQXVCLG1CQUFBO0VBQW1CLGdCQUFBO0VBQWdCLHVCQUFBO0VBQXVCLFlBQUE7QUF1S3JHOztBQXRLQTtFQUFVLGdCQUFBO0VBQWdCLFlBQUE7RUFBWSxZQUFBO0VBQVksY0FBQTtBQTZLbEQ7O0FBNUtBO0VBQVUsU0FBQTtFQUFTLFlBQUE7RUFBWSxtQkFBQTtFQUFtQixnQkFBQTtFQUFnQix1QkFBQTtBQW9MbEU7O0FBbkxBO0VBQWUsYUFBQTtBQXVMZjs7QUFyTEE7RUFBYSxlQUFBO0VBQWUsWUFBQTtFQUFZLHlCQUFBO0VBQXlCLGdDQUFBO0VBQWdDLDBCQUFBO0VBQTBCLDBCQUFBO0FBOEwzSDs7QUE3TEE7RUFBVSxlQUFBO0VBQWUsWUFBQTtFQUFZLHlCQUFBO0VBQXlCLGdDQUFBO0VBQWdDLDBCQUFBO0VBQTBCLDBCQUFBO0FBc014SDs7QUFyTUE7RUFBVSxlQUFBO0VBQWUsMEJBQUE7RUFBdUIsK0JBQUE7RUFBNEIsZ0NBQUE7RUFBZ0MsMEJBQUE7QUE2TTVHIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVhZGVyLWljb257d2lkdGg6MzBweDtmbG9hdDpsZWZ0O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1sZWZ0Oi0xMHB4O31cbi5oZWFkZXItZm9udHt3aWR0aDozMHB4O2Zsb2F0OmxlZnQ7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjFyZW07bWFyZ2luLXRvcDo2cHh9XG4uaGVhZGVyLXRpdGxle2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi10b3A6OHB4O2ZvbnQtc2l6ZTowLjlyZW07Y29sb3I6YmxhY2s7fVxuXG4uYmFyLWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjY2NjO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OmNlbnRlcjtjb2xvcjp3aGl0ZTt9XG4uYmFyLWZvb3Rlci1lbmR7d2lkdGg6MTAwJTtmb250LXNpemU6MS4ycmVtO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yaWdodDoxcHggc29saWQgI2JjYmNiYztiYWNrZ3JvdW5kLWNvbG9yOiMwMDVCQUM7Y29sb3I6d2hpdGU7cGFkZGluZy10b3A6MC43cmVtO3BhZGRpbmctYm90dG9tOjAuN3JlbTt9XG5cbi53cml0ZS1sb2FkLWJhcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7Ym90dG9tOjA7cmlnaHQ6MDtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6MC40O3otaW5kZXg6OTk7ZGlzcGxheTpub25lO31cbi5sb2FkLWNzc3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjQwJTt0b3A6NDAlO2NvbG9yOiMxMDk1RkY7aGVpZ2h0OjUwcHg7d2lkdGg6NTBweDt6LWluZGV4OjEwMDtvcGFjaXR5OjE7fVxuXG4vLyBTUyBtYXliZSBub3QgdXNlZFxuOmhvc3Q6Om5nLWRlZXAgLnRvb2xiYXItdGl0bGUtZGVmYXVsdHt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItcmFkaXVzOjJweDt9XG46aG9zdDo6bmctZGVlcCAuYW0tcmFkaW8taW5uZXJ7ZGlzcGxheTpub25lO31cbjpob3N0OjpuZy1kZWVwIC5yYWRpb3Nob3cgLmFtLXJhZGlvLWlubmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO31cbjpob3N0OjpuZy1kZWVwIC5hbS1saXN0LWl0ZW17YmFja2dyb3VuZC1jb2xvcjojZjVmNWY0O31cbjpob3N0OjpuZy1kZWVwIC5yYWRpb3Nob3cgLmFtLWxpc3QtaXRlbXtiYWNrZ3JvdW5kLWNvbG9yOiNlYmZiZmY7fVxuLmlkZW5ub3tkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tbGVmdDoxLjVyZW07Zm9udC1zaXplOjAuOHJlbTt9XG4ubG9hZC1tb2RlbC1yYWRpb3ttYXJnaW4tYm90dG9tOjE1cHg7fVxuLmxvYWQtbW9kZWwtbGlzdHtoZWlnaHQ6MjZ2aDtvdmVyZmxvdy15OmF1dG87fVxuLmxvYWQtbW9kZWwtdGl0bGV7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMHB4O2ZvbnQtc2l6ZToxLjFyZW07Y29sb3I6I2FhYTt9XG4vLyBFRSBtYXliZSBub3QgdXNlZFxuXG4vL1xuLnVzZXItaW5mb3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I0VERURFRDt9XG5cbi51c2VyLXN0ZXB7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MDttYXJnaW46MDt9XG4udXNlci1zdGVwIC5zdGVwe3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6I2ZmZjtmb250LXNpemU6MXJlbTt9XG4udXNlci1zdGVwIC5zdGVwOmZpcnN0LWNoaWxke21hcmdpbi1ib3R0b206MTVweDt9XG4udXNlci1zdGVwIC5zdGVwOm5vdCguY3VycmVudCk6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MTA7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMyk7dG9wOjA7bGVmdDowO31cbi5rdntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6MnB4IDEwcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U0ZTRlNDtmb250LXNpemU6MC45cmVtO31cbi5re3dpZHRoOjEyMHB4O2ZsZXgtc2hyaW5rOjA7cGFkZGluZy1sZWZ0OjAgMTBweDtjb2xvcjojNjY2O31cbi5rLnN0cm9uZ3tmb250LXdlaWdodDpib2xkO31cbi52e2ZsZXgtZ3JvdzoxO31cblxuLnRhY3t0ZXh0LWFsaWduOmNlbnRlcjt9XG4uamNje2p1c3RpZnktY29udGVudDpjZW50ZXI7fVxuLncxMDB7d2lkdGg6MTAwJTt9XG4udmh7dmlzaWJpbGl0eTpoaWRkZW47fSBcblxuLnB1cmV7cGFkZGluZzoycHggMTBweDtsaW5lLWhlaWdodDo0MHB4O31cbi5idG4tcm93e3BhZGRpbmc6OHB4IDEwcHg7fVxuXG4uaWJ0bntmb250LXNpemU6MXJlbTtjb2xvcjp3aGl0ZTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDVCQUM7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U0ZTRlNDtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjVweCAxMHB4IDVweCAxMHB4O31cbi5yZXF7Y29sb3I6I2YwMDttYXJnaW4tcmlnaHQ6MnB4O31cblxuLmt2IHNlbGVjdHtib3JkZXI6MDtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztoZWlnaHQ6NDBweDt9XG4ua3YgaW5wdXR7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6NHB4O2hlaWdodDo0MHB4O2JvcmRlcjowIG5vbmU7fVxuLmt2IC50ZXh0e2JvcmRlcjowO3dpZHRoOjEzcmVtO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt9XG4udi12ZXJpZnktY29kZXtkaXNwbGF5OmZsZXg7fVxuXG4udGFiLWN1cnJlbnR7Zm9udC1zaXplOjFyZW07Y29sb3I6d2hpdGU7YmFja2dyb3VuZC1jb2xvcjojMTg5MEZGO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNGU0ZTQ7Ym9yZGVyLXJhZGl1czo0cHggMCAwIDRweDtwYWRkaW5nOjVweCAxMHB4IDVweCAxMHB4O31cbi50YWItZnJlZXtmb250LXNpemU6MXJlbTtjb2xvcjp3aGl0ZTtiYWNrZ3JvdW5kLWNvbG9yOiMxODkwRkY7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U0ZTRlNDtib3JkZXItcmFkaXVzOjAgNHB4IDRweCAwO3BhZGRpbmc6NXB4IDEwcHggNXB4IDEwcHg7fVxuLnRhYi1ub25le2ZvbnQtc2l6ZToxcmVtO2NvbG9yOnJnYmEoMCwwLDAsMC42NSk7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMDIpO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNGU0ZTQ7cGFkZGluZzo1cHggMTBweCA1cHggMTBweDt9XG4iXX0= */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
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
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");












const { Ocr } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let RegisterPage = class RegisterPage {
    constructor(router, navCtrl, http, route, ref, platform, deleteModal, sanitizer, device) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.route = route;
        this.ref = ref;
        this.platform = platform;
        this.deleteModal = deleteModal;
        this.sanitizer = sanitizer;
        this.device = device;
        this.titleInfo = '注册';
        this.titleInfo1 = '扫描您的身份证并填写手机号';
        this.titleInfo2 = '填写您所在医院/机构的信息';
        this.titleId = '1';
        // 信息
        this.patientInfo = {
            id: '',
            name: undefined,
            identity: undefined,
            mobile: undefined,
            areaId: undefined,
            cityId: undefined,
            provinceId: undefined,
            hospital: undefined,
            laboratoryId: undefined,
            laboratoryName: undefined,
            verifyCode: undefined
        };
        this.ProvinceList = [];
        this.cityList = [];
        this.areaList = [];
        this.streetList = [];
        this.communityList = [];
        this.laboratoryList = [];
        this.isReplaceProvince = false;
        this.isReplaceCity = false;
        this.isReplaceLaboratory = false;
        this.isSelectArea = 'false';
        this.step = '1';
        this.selectPersonnelType = '志愿者'; //  志愿者 ; 医院护士
        this.primeArr = [1307, 2797, 3823, 4241, 5081, 6427, 7583, 8693, 9931, 7703];
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.routeBack();
        });
        this.uuid = this.device.uuid;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            this.titleId = data.titleId;
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(data.patientInfo)) {
                this.patientInfo = JSON.parse(data.patientInfo);
                this.imageData = sessionStorage.getItem('registerFullStr');
            }
        });
        this.isReplaceProvince = false;
        this.isReplaceCity = false;
        this.getProvince();
        this.getVerifyCode();
    }
    ionViewWillEnter() {
        setTimeout(() => {
            if (this.titleId === '1') {
                this.titleInfo = '注册';
                this.titleInfo1 = '扫描您的身份证并填写手机号';
                this.titleInfo2 = '填写您所在医院/机构的信息';
            }
            else {
                this.titleInfo = '修改用户信息';
                this.titleInfo1 = '扫描您的身份证并核对手机号';
                this.titleInfo2 = '修改您所在医院/机构的信息';
            }
        }, 100);
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(sessionStorage.getItem('isSelectArea'))) {
            this.isSelectArea = sessionStorage.getItem('isSelectArea');
        }
    }
    getRan(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    changePersonType(value) {
        this.selectPersonnelType = value;
        this.patientInfo.hospital = undefined;
        this.patientInfo.laboratoryId = undefined;
        this.patientInfo.laboratoryName = undefined;
        if (value === '志愿者') {
            this.getStreet(this.patientInfo.areaId);
        }
    }
    changeProvince(value) {
        this.isReplaceProvince = true;
        this.getCity(value);
    }
    changeCity(value) {
        this.isReplaceCity = true;
        this.getArea(value);
    }
    changAreaId(value) {
        this.getStreet(value);
    }
    changeStreet(value) {
        this.getCommunity(value);
    }
    // 清除信息
    clean() {
        this.patientInfo = {
            id: '',
            name: undefined,
            identity: undefined,
            mobile: undefined,
            areaId: undefined,
            cityId: undefined,
            provinceId: undefined,
            hospital: undefined,
            laboratoryId: undefined,
            laboratoryName: undefined,
            verifyCode: undefined
        };
        this.imageData = '';
        this.step = '1';
    }
    // 路由返回
    routeBack() {
        this.clean();
        this.router.navigate(['/login']);
    }
    routeSelect() {
        // 判断所属省
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.provinceId)) {
            this.http.showToast('请选择省！');
            return;
        }
        // 判断所属市
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.cityId)) {
            this.http.showToast('请选择市！');
            return;
        }
        // 判断所属区
        if (this.isSelectArea === 'true' && !Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.cityId)) {
            this.http.showToast('请选择区！');
            return;
        }
        sessionStorage.setItem('registerFullStr', this.imageData);
        const navigationExtras = {
            queryParams: {
                titleId: this.titleId,
                patientInfo: JSON.stringify(this.patientInfo),
            }
        };
        this.router.navigate(['/SelectCensusLaboratory'], navigationExtras);
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
        // 判断所属省
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.provinceId)) {
            this.http.showToast('请选择省！');
            return;
        }
        // 判断所属市
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.cityId)) {
            this.http.showToast('请选择市！');
            return;
        }
        // 判断所属区
        if (this.isSelectArea === 'true' && !Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.cityId)) {
            this.http.showToast('请选择区！');
            return;
        }
        // 判断医疗机构
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.laboratoryId)) {
            this.http.showToast('请选择医院/机构！');
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
            auth: {
                areaId: Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.patientInfo.areaId) ? this.patientInfo.areaId : 'ALL',
                cityId: this.patientInfo.cityId,
                provinceId: this.patientInfo.provinceId,
            },
            fullStr: this.imageData,
            hospital: this.patientInfo.hospital,
            idenno: this.patientInfo.identity,
            laboratoryId: this.patientInfo.laboratoryId,
            mobile: this.patientInfo.mobile,
            name: this.patientInfo.name,
            userId: this.patientInfo.id,
            classify: this.selectPersonnelType,
            uuid: this.uuid === null ? null : this.primeArr[this.getRan(0, 9)] + this.uuid + this.primeArr[this.getRan(0, 9)]
        };
        if (this.titleId === '1') {
            this.getKey(cond);
        }
        else {
            this.updateRegister(cond);
        }
    }
    // 加密
    getKey(condition) {
        this.http
            .getNotHeard(`rcp/open/api/key?_allow_anonymous=true`)
            .subscribe(data => {
            if (data['code'] === '0') {
                this.encodeKey = data['data']['encode_key'];
                condition.name = window['encryptByDES'](condition.name, data['data']['encode_key']);
                condition.idenno = window['encryptByDES'](condition.idenno, data['data']['encode_key']);
                condition.mobile = window['encryptByDES'](condition.mobile, data['data']['encode_key']);
                condition.fullStr = window['encryptByDES'](condition.fullStr, data['data']['encode_key']);
                condition['key'] = data['data']['key'];
                condition['uuid'] = this.uuid === null ? null : this.primeArr[this.getRan(0, 9)] + this.uuid + this.primeArr[this.getRan(0, 9)];
                this.saveRegister(condition);
            }
            else {
                this.http.showFail(data, '加密信息失败！');
            }
        });
    }
    // 1. 采集员注册
    saveRegister(condition) {
        this.http
            .getNotHeardPost(`rcp/register/sysuser/register`, condition, '采集员注册', 'false', { load: true })
            .subscribe(data => {
            if (data['code'] === '0') {
                this.http.showToast('注册成功');
                this.routeBack();
            }
            else {
                this.deleteModal.alert('注册失败提示', data['message'], [
                    { text: '确定', onPress: () => { } }
                ]);
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
                    areaId: data['data']['areaId'],
                    cityId: data['data']['cityId'],
                    provinceId: data['data']['provinceId'],
                    hospital: data['data']['hospital'],
                    laboratoryId: data['data']['laboratoryId'],
                    laboratoryName: data['data']['laboratoryName'],
                    verifyCode: this.patientInfo.verifyCode
                };
                this.selectPersonnelType = data['data']['classify'] === null ? '医院护士' : data['data']['classify'];
                this.step = '2';
                this.isReplaceProvince = false;
                this.isReplaceCity = false;
                this.getCity(this.patientInfo.provinceId);
            }
        });
    }
    // 修改采集员注册
    updateRegister(condition) {
        this.http
            .getNotHeardPost(`rcp/register/sysuser/register/update`, condition, '修改采集员注册信息', '修改采集员注册信息失败', { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.http.showToast('修改成功');
                this.routeBack();
            }
        });
    }
    // 获取省列表
    getProvince() {
        this.ProvinceList = [];
        this.http
            .getNotHeardPost(`rcp/register/sysuser/province`, {}, '获取省列表', '获取省失败', { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.ProvinceList = data['data'];
                if (!this.isReplaceProvince) {
                    this.getCity(this.patientInfo.provinceId);
                }
            }
        });
    }
    // 获取市
    getCity(cond) {
        this.cityList = [];
        console.log('this.isReplaceProvince', this.isReplaceProvince);
        if (this.isReplaceProvince) {
            this.patientInfo.cityId = undefined;
            this.patientInfo.areaId = undefined;
            this.patientInfo.laboratoryId = undefined;
            this.patientInfo.laboratoryName = undefined;
        }
        this.http
            .getNotHeardPost(`rcp/register/sysuser/city` + this.http.getParamsString({ provinceId: cond }), {}, '获取市列表', '获取市失败', { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.cityList = data['data'];
                if (!this.isReplaceCity) {
                    this.getArea(this.patientInfo.cityId);
                }
                this.ionViewWillEnter();
            }
        });
    }
    // 获取区
    getArea(cond) {
        this.areaList = [];
        console.log('this.isReplaceCity', this.isReplaceCity);
        if (this.isReplaceCity) {
            this.patientInfo.areaId = undefined;
            this.patientInfo.laboratoryId = undefined;
            this.patientInfo.laboratoryName = undefined;
        }
        this.http
            .getNotHeardPost(`rcp/register/sysuser/area` + this.http.getParamsString({ cityId: cond }), {}, '获取区列表', '获取区失败', { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.areaList = data['data'];
                this.ionViewWillEnter();
            }
        });
    }
    // 获取街道
    getStreet(cond) {
        this.streetList = [];
        this.patientInfo.laboratoryId = undefined;
        this.patientInfo.hospital = undefined;
        this.http
            .getNotHeard(`rcp/open/api/getCountryList` + this.http.getParamsString({ areaId: cond }))
            .subscribe(data => {
            if (data['code'] === '0') {
                this.streetList = data['data'];
                this.ionViewWillEnter();
            }
        });
    }
    // 获取社区
    getCommunity(cond) {
        this.communityList = [];
        this.patientInfo.hospital = undefined;
        this.http
            .getNotHeard(`rcp/open/api/getCommunityList` + this.http.getParamsString({ countryId: cond }))
            .subscribe(data => {
            if (data['code'] === '0') {
                this.communityList = data['data'];
                this.ionViewWillEnter();
            }
        });
    }
    // 获取验证码
    getVerifyCode() {
        this.http
            .getNotHeardBlob(`rcp/open/api/verifyCode?uuid=` + (this.uuid === null ? null : this.primeArr[this.getRan(0, 9)] + this.uuid + this.primeArr[this.getRan(0, 9)]))
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
        if (this.titleId === '2') {
            this.getRegisterInfo();
        }
        else {
            this.http
                .getNotHeard(`rcp/register/sysuser/registerCheckMobile` + this.http.getParamsString({ mobile: this.patientInfo.mobile, uuid: this.uuid === null ? null : this.primeArr[this.getRan(0, 9)] + this.uuid + this.primeArr[this.getRan(0, 9)] }))
                .subscribe(data => {
                console.log('#########', data);
                if (data['code'] === '0') {
                    this.step = '2';
                }
                else {
                    this.http.showToast(data['message']);
                }
            });
        }
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
        if (this.titleId === '2') {
            // 修改注册信息--通过身份证号获取信息
            //  this.getRegisterInfo();
        }
        this.ref.detectChanges();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_9__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] }
];
RegisterPage.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@routeAnimation',] }]
};
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        animations: [
            _shared__WEBPACK_IMPORTED_MODULE_8__["routeAnimation"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map