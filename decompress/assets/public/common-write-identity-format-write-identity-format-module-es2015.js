(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-write-identity-format-write-identity-format-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/write-identity-format/write-identity-format.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/write-identity-format/write-identity-format.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\" size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <!--<div class=\"header-font\" (click)=\"routeBack()\">-->\n                <!--<span>返回</span>-->\n            <!--</div>-->\n            <span class=\"header-title\">身份信息详情</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"tabContentCss\">\n\n    <div class=\"top-number\">\n        本试管中，第 <span>{{personListLength}}</span> 人/总 <span>{{model}}</span> 人\n    </div>\n    <div class=\"list\">\n        <div class=\"list-item\">\n            <span><span class=\"star-icon\">*</span>姓名</span>\n            <div>\n                <input type=\"text\" class=\"input-not-barcode\" [(ngModel)]=\"patientInfo.name\">\n            </div>\n        </div>\n        <div class=\"list-item\">\n            <span><span class=\"star-icon\">*</span>证件类型</span>\n            <div style=\"display: flex; flex-direction: row-reverse;\">\n                <ion-select [(ngModel)]=\"patientInfo.certificateType\" interface=\"popover\" style=\"margin-top: -10px\">\n                    <ion-select-option value=\"身份证\">身份证</ion-select-option>\n                    <ion-select-option value=\"港澳通行证\">港澳通行证</ion-select-option>\n                    <ion-select-option value=\"护照\">护照</ion-select-option>\n                    <ion-select-option value=\"军官证\">军官证</ion-select-option>\n                    <ion-select-option value=\"其他\">其他</ion-select-option>\n                </ion-select>\n            </div>\n        </div>\n        <div class=\"list-item-textarea\">\n            <span>\n                <span><span class=\"star-icon\">*</span>证件号</span>\n            </span>\n            <div>\n                <input type=\"tel\" class=\"input-not-barcode\" [(ngModel)]=\"patientInfo.identity\" (blur)=\"checkIdCard(false,false)\">\n                <div class=\"write-icon\" (click)=\"checkIdCard(true,true)\"><ion-icon name=\"search-outline\" style=\"color: #155297\"></ion-icon></div>\n            </div>\n        </div>\n        <div class=\"list-item\">\n            <span><span class=\"star-icon\">*</span>采集对象</span>\n            <div style=\"display: flex; flex-direction: row-reverse;\">\n                <ion-select [(ngModel)]=\"patientInfo.relationship\" interface=\"popover\" style=\"margin-top: -10px\" (ngModelChange)=\"changeMemo($event)\">\n                    <ion-select-option value=\"本人\">本人</ion-select-option>\n                    <ion-select-option value=\"之子\">之子</ion-select-option>\n                    <ion-select-option value=\"之女\">之女</ion-select-option>\n                    <ion-select-option value=\"之母\">之母</ion-select-option>\n                    <ion-select-option value=\"之女\">之父</ion-select-option>\n                    <ion-select-option value=\"孙子\">孙子</ion-select-option>\n                    <ion-select-option value=\"孙女\">孙女</ion-select-option>\n                    <ion-select-option value=\"其他\">其他</ion-select-option>\n                </ion-select>\n                <input type=\"text\" class=\"input-not-barcode-select\" [(ngModel)]=\"patientInfo.relationship\">\n            </div>\n        </div>\n        <ng-container *ngIf=\"patientType_switch === 'open'\">\n            <div class=\"list-item\">\n                <span>人员类别</span>\n                <div style=\"display: flex; flex-direction: row-reverse;\">\n                    <ion-select interface=\"popover\" style=\"margin-top: -10px\" [(ngModel)]=\"patientInfo.patientType\">\n                        <ion-select-option value=\"\"></ion-select-option>\n                        <ion-select-option *ngFor=\"let option of patientTypeList\" [value]=\"option.dicId\">{{option.dicName}}</ion-select-option>\n                    </ion-select>\n                </div>\n            </div>\n        </ng-container>\n        <div class=\"list-item mt\" [ngStyle]=\"{'background-color': isExit? '#f2f2f4': '#fff'}\">\n            <span>性别</span>\n            <div style=\"display: flex; flex-direction: row-reverse;\">\n                <ion-select interface=\"popover\" style=\"margin-top: -6px;height: 1.7rem\" [(ngModel)]=\"patientInfo.sex\" [disabled]=\"isExit\" [ngStyle]=\"{'background-color': isExit? '#f2f2f4': '#fff'}\">\n                    <ion-select-option value=\"男\">男</ion-select-option>\n                    <ion-select-option value=\"女\">女</ion-select-option>\n                </ion-select>\n            </div>\n        </div>\n        <div class=\"list-item\" [ngStyle]=\"{'background-color': isExit? '#f2f2f4': '#fff'}\">\n            <span>年龄</span>\n            <div style=\"display: flex; flex-direction: row;\">\n                <input type=\"number\" class=\"input-not-barcode\" [(ngModel)]=\"patientInfo.age\" [disabled]=\"isExit\" [ngStyle]=\"{'background-color': isExit? '#f2f2f4': '#fff'}\">\n                <span class=\"input-select-age\">岁</span>\n            </div>\n        </div>\n        <div class=\"list-item\">\n            <span>国籍</span>\n            <div>\n                <input type=\"text\" class=\"input-not-barcode\" [(ngModel)]=\"patientInfo.nationality\">\n            </div>\n        </div>\n        <div class=\"list-item\">\n            <span>联系电话</span>\n            <div>\n                <input type=\"tel\" class=\"input-not-barcode\" [(ngModel)]=\"patientInfo.mobile\">\n            </div>\n        </div>\n        <div class=\"list-item-textarea\">\n            <span [ngClass]=\"isShowAreaAddress? 'list-item-address': ''\">\n                <span>住址</span>\n            </span>\n            <div>\n                <ng-container *ngIf=\"isShowAreaAddress; else notShowAreaAddress\">\n                    <textarea class=\"input-not-textarea\" [(ngModel)]=\"patientInfo.address\" (keyup)=\"addressKey(true)\" #AddressArea></textarea>\n                    <div class=\"write-icon-close\"(click)=\"cleanAddress()\"> <ion-icon name=\"close-circle-outline\"></ion-icon></div>\n                </ng-container>\n                <ng-template #notShowAreaAddress>\n                    <input type=\"text\" class=\"input-not-barcode-address\" [(ngModel)]=\"patientInfo.address\" (keyup)=\"addressKey(true)\"  #AddressInput>\n                    <div class=\"write-icon-close-input\" (click)=\"cleanAddress()\"><ion-icon name=\"close-circle-outline\"></ion-icon></div>\n                </ng-template>\n            </div>\n        </div>\n        <div class=\"list-item\">\n            <span>\n              <span>备注</span>\n            <br>\n            </span>\n            <div>\n                <input type=\"text\" class=\"input-not-barcode\" [(ngModel)]=\"patientInfo.remark\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"bar-footer\">\n        <ng-container *ngIf=\"titleId == '1'\">\n            <div class=\"bar-footer-end\" (click)=\"clickIdentity()\">重扫</div>\n        </ng-container>\n        <ng-container *ngIf=\"isClosedTube === '0'\">\n            <div class=\"bar-footer-scan\" (click)=\"submit()\">保存</div>\n        </ng-container>\n    </div>\n</ion-content>\n\n<div class=\"write-load-bar\">\n    <ion-spinner icon=\"android\" class=\"load-css\"></ion-spinner>\n</div>\n\n\n<div class=\"write-load-model\">\n    <div class=\"load-model-con\">\n        <div class=\"load-model-title\">选择被检验者</div>\n        <List class=\"load-model-list\">\n            <RadioItemGroup [(ngModel)]=\"cheackRegisterOne.idenno\">\n                <ng-container *ngFor=\"let item of cheackRegisterList; let i = index\">\n                    <RadioItem [name]=\"item.patientName\" [value]=\"item.idenno\" class=\"radio{{i}} load-model-radio\" (click)=\"selectCheackRegister(i, item)\">\n                        <span>{{item.patientName}}</span> <span class=\"idenno\">{{item.idenno}}</span>\n                        <Brief>{{ item.relationship}} <span class=\"idenno\">{{item.mobile}}</span></Brief>\n                    </RadioItem>\n                </ng-container>\n            </RadioItemGroup>\n        </List>\n        <div style=\"display: flex;flex-direction: row; justify-content: space-around\">\n            <div class=\"load-model-button\" (click)=\"okLoadModel()\">\n                确定\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/common/write-identity-format/write-identity-format.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/common/write-identity-format/write-identity-format.module.ts ***!
  \******************************************************************************/
/*! exports provided: WriteIdentityFormatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteIdentityFormatModule", function() { return WriteIdentityFormatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _write_identity_format_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./write-identity-format.page */ "./src/app/common/write-identity-format/write-identity-format.page.ts");
/* harmony import */ var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/serviceCommon.module */ "./src/app/service/serviceCommon.module.ts");










let WriteIdentityFormatModule = class WriteIdentityFormatModule {
};
WriteIdentityFormatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_9__["ServiceCommonModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _write_identity_format_page__WEBPACK_IMPORTED_MODULE_8__["WriteIdentityFormatPage"] }])
        ],
        declarations: [_write_identity_format_page__WEBPACK_IMPORTED_MODULE_8__["WriteIdentityFormatPage"]]
    })
], WriteIdentityFormatModule);



/***/ }),

/***/ "./src/app/common/write-identity-format/write-identity-format.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/common/write-identity-format/write-identity-format.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabContentCss {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #EDEDED;\n}\n\n.top-number {\n  font-size: 0.8rem;\n  padding: 0.1rem 0 0.1rem 1rem;\n  color: #4d4d4d;\n}\n\n.top-number > span {\n  font-size: 0.8rem;\n  display: inline-block;\n  color: black;\n}\n\n.bar-footer {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n}\n\n.bar-footer-end {\n  width: 30%;\n  font-size: 1.2rem;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  text-align: center;\n  background-color: white;\n  color: red;\n  padding: 0.6rem;\n  margin-right: 8px;\n}\n\n.bar-footer-clean {\n  font-size: 1.2rem;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  text-align: center;\n  background-color: white;\n  color: red;\n  padding: 0.6rem;\n  margin-right: 8px;\n}\n\n.bar-footer-scan {\n  width: 60%;\n  font-size: 1.2rem;\n  text-align: center;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  background-color: #005BAC;\n  color: white;\n  padding: 0.6rem;\n}\n\n.bar-footer-scan:active {\n  background-color: rgba(46, 103, 222, 0.13);\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0;\n  margin: 0;\n}\n\n.list-item {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 1.2rem;\n  background-color: white;\n  padding: 0.4rem 0 0.4rem 1rem;\n  border-bottom: 1px solid #e4e4e4;\n}\n\n.list-item > span {\n  width: 95px;\n  font-size: 0.9rem;\n  color: #4d4d4d;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.list-item > div {\n  position: absolute;\n  left: 100px;\n  right: 10px;\n  font-size: 1rem;\n}\n\n.clean-button {\n  display: inline-block;\n  color: #1f80ef;\n  text-decoration: underline;\n}\n\n.list-item-textarea {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 1.2rem;\n  background-color: white;\n  padding: 0.4rem 0 0.4rem 1rem;\n  border-bottom: 1px solid #e4e4e4;\n}\n\n.list-item-textarea > span {\n  width: 95px;\n  font-size: 0.9rem;\n  color: #4d4d4d;\n  text-overflow: ellipsis;\n}\n\n.list-item-textarea > div {\n  position: absolute;\n  left: 100px;\n  right: 10px;\n  font-size: 1rem;\n}\n\n.mt {\n  margin-top: 10px;\n}\n\n.mb {\n  margin-bottom: 10px;\n}\n\n.display-bar {\n  display: none;\n}\n\n.input-not-barcode {\n  border: 0;\n  width: 100%;\n  text-align: right;\n  padding-right: 20px;\n}\n\n.input-not-textarea {\n  border: 0;\n  width: 100%;\n  text-align: right;\n  padding-right: 20px;\n}\n\n.input-not-barcode-address {\n  border: 0;\n  width: 100%;\n  text-align: right;\n  padding-right: 20px;\n}\n\n.write-icon-close {\n  display: none;\n}\n\n.write-icon-close-input {\n  display: none;\n}\n\n.input-not-textarea:focus + .write-icon-close {\n  display: inline-block;\n  height: 2.6rem;\n  line-height: 2.6rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n}\n\n.input-not-barcode-address:focus + .write-icon-close-input {\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n}\n\n.write-icon-close:hover {\n  display: inline-block;\n  height: 2.6rem;\n  line-height: 2.6rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n}\n\n.write-icon-close-input:hover {\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n}\n\n.input-not-barcode-select {\n  border: 0;\n  width: 100%;\n  text-align: right;\n  height: 1.8rem;\n  margin-top: -6px;\n  margin-right: -45px;\n  z-index: 5;\n}\n\n.input-select {\n  width: 20px;\n  border: 0;\n  background-color: white;\n}\n\n.input-select-age {\n  width: 40px;\n  border: 0;\n}\n\n.item-button {\n  float: right;\n  padding: 0px 5px;\n  font-size: 1.2rem;\n  height: 40px;\n  color: black;\n  border-radius: 2px;\n  line-height: 30px;\n  background-color: #f5f5f9;\n}\n\n.write-load-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 99;\n  display: none;\n}\n\n.load-css {\n  position: absolute;\n  left: 40%;\n  top: 40%;\n  color: #1095FF;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 1rem;\n  margin-top: 6px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n}\n\n:host ::ng-deep .am-radio-inner {\n  display: none;\n}\n\n:host ::ng-deep .radioshow .am-radio-inner {\n  display: inline-block;\n}\n\n:host ::ng-deep .am-list-item {\n  background-color: #f5f5f4;\n}\n\n:host ::ng-deep .radioshow .am-list-item {\n  background-color: #ebfbff;\n}\n\n.write-load-model {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(39, 60, 125, 0.5);\n  z-index: 9;\n  display: none;\n}\n\n.load-model-con {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  top: 20vh;\n  height: 53vh;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px 5px;\n  padding: 10px 10px 10px 10px;\n}\n\n.load-model-button {\n  background-color: #1890ff;\n  color: white;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n  width: 40%;\n  text-align: center;\n  margin-top: 20px;\n  border-radius: 5px;\n}\n\n.load-model-add {\n  background-color: #28ba62;\n  color: white;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n  width: 40%;\n  text-align: center;\n  margin-top: 20px;\n  border-radius: 5px;\n}\n\n.idenno {\n  display: inline-block;\n  margin-left: 1.5rem;\n  font-size: 0.8rem;\n}\n\n.load-model-radio {\n  margin-bottom: 15px;\n}\n\n.load-model-list {\n  height: 26vh;\n  overflow-y: auto;\n}\n\n.load-model-title {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n  color: #aaa;\n}\n\n.display-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.list-item-down {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  margin-left: 5px;\n  font-size: 1.2rem;\n}\n\n.list-item-down > span {\n  width: 100px;\n}\n\n.list-item-down > div {\n  border-bottom: 2px solid #b8b8b8;\n  position: absolute;\n  left: 100px;\n  right: 10px;\n}\n\n:host {\n  --padding-top: 0;\n  /* --padding-end: 0; */\n  /* --padding-bottom: 11px; */\n  /* --padding-start: 16px; */\n}\n\n.star-icon {\n  color: #155297;\n}\n\n.write-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n}\n\n.list-item-address {\n  height: 2.6rem;\n  line-height: 2.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3dyaXRlLWlkZW50aXR5LWZvcm1hdC93cml0ZS1pZGVudGl0eS1mb3JtYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBRUUsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLDBDQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFNRjs7QUFKQTtFQUNHLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDRCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBVUY7O0FBUkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVEE7RUFDRSxnQkFBQTtBQVlGOztBQVZBO0VBQ0UsbUJBQUE7QUFhRjs7QUFUQTtFQUNFLGFBQUE7QUFZRjs7QUFUQTtFQUNHLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVlIOztBQVZBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBYUY7O0FBWEE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFjRjs7QUFaQTtFQUNFLGFBQUE7QUFlRjs7QUFiQTtFQUNFLGFBQUE7QUFnQkY7O0FBZEE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FBaUJGOztBQWZBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtBQWtCRjs7QUFoQkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0FBbUJGOztBQWpCQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQXFCRjs7QUFqQkE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBb0JGOztBQWpCQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FBb0JGOztBQWhCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFtQkY7O0FBYkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQWdCRjs7QUFkQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBaUJGOztBQWRBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQWlCRjs7QUFmQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFtQkY7O0FBakJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBb0JGOztBQWZBO0VBQ0UsYUFBQTtBQWtCRjs7QUFmQTtFQUNFLHFCQUFBO0FBa0JGOztBQWZBO0VBQ0cseUJBQUE7QUFrQkg7O0FBZkE7RUFDRSx5QkFBQTtBQWtCRjs7QUFmQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFpQkY7O0FBZkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBa0JGOztBQWZBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBbUJGOztBQWZBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBa0JGOztBQWZBO0VBQ0UsbUJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBbUJGOztBQWpCQTtFQUNHLGtCQUFBO0VBQ0QsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFvQkY7O0FBZEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBaUJGOztBQWZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBa0JGOztBQWZBO0VBQ0UsWUFBQTtBQWtCRjs7QUFoQkE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFtQkY7O0FBakJBO0VBQ0csZ0JBQUE7RUFDRCxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFvQkY7O0FBakJBO0VBQ0UsY0FBQTtBQW9CRjs7QUFsQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtBQXFCRjs7QUFuQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFzQkYiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vd3JpdGUtaWRlbnRpdHktZm9ybWF0L3dyaXRlLWlkZW50aXR5LWZvcm1hdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiQ29udGVudENzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFREVEO1xufVxuXG4udG9wLW51bWJlcntcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiAwLjFyZW0gMCAwLjFyZW0gMXJlbTtcbiAgICBjb2xvcjogIzRkNGQ0ZDtcbn1cbi50b3AtbnVtYmVyID4gc3BhbntcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYmFyLWZvb3RlcntcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFyLWZvb3Rlci1lbmR7XG4gIHdpZHRoOiAzMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uYmFyLWZvb3Rlci1jbGVhbntcbiAgLy93aWR0aDogNDAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmNiYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nOiAwLjZyZW07XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmJhci1mb290ZXItc2NhbntcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmNiYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QkFDO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbn1cbi5iYXItZm9vdGVyLXNjYW46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgMTAzLCAyMjIsIDAuMTMpO1xufVxuLmxpc3R7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ubGlzdC1pdGVte1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjRyZW0gMCAwLjRyZW0gMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG59XG4ubGlzdC1pdGVtID5zcGFue1xuICAgd2lkdGg6IDk1cHg7XG4gICBmb250LXNpemU6IDAuOXJlbTtcbiAgIGNvbG9yOiAjNGQ0ZDRkO1xuICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbn1cbi5saXN0LWl0ZW0gPmRpdntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5jbGVhbi1idXR0b257XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMxZjgwZWY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmxpc3QtaXRlbS10ZXh0YXJlYXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC40cmVtIDAgMC40cmVtIDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xufVxuLmxpc3QtaXRlbS10ZXh0YXJlYSA+c3BhbntcbiAgd2lkdGg6IDk1cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbn1cbi5saXN0LWl0ZW0tdGV4dGFyZWEgPmRpdntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm10e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1ie1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cbi5kaXNwbGF5LWJhcntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlucHV0LW5vdC1iYXJjb2Rle1xuICAgYm9yZGVyOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICB0ZXh0LWFsaWduOiByaWdodDtcbiAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uaW5wdXQtbm90LXRleHRhcmVhe1xuICBib3JkZXI6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5pbnB1dC1ub3QtYmFyY29kZS1hZGRyZXNze1xuICBib3JkZXI6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi53cml0ZS1pY29uLWNsb3Nle1xuICBkaXNwbGF5OiBub25lO1xufVxuLndyaXRlLWljb24tY2xvc2UtaW5wdXR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW5wdXQtbm90LXRleHRhcmVhOmZvY3VzICsgLndyaXRlLWljb24tY2xvc2V7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyLjZyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjZyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlucHV0LW5vdC1iYXJjb2RlLWFkZHJlc3M6Zm9jdXMgKyAud3JpdGUtaWNvbi1jbG9zZS1pbnB1dHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi53cml0ZS1pY29uLWNsb3NlOmhvdmVye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMi42cmVtO1xuICBsaW5lLWhlaWdodDogMi42cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi53cml0ZS1pY29uLWNsb3NlLWlucHV0OmhvdmVye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlucHV0LW5vdC1iYXJjb2RlLXNlbGVjdHtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGhlaWdodDogMS44cmVtO1xuICBtYXJnaW4tdG9wOiAtNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC00NXB4O1xuICB6LWluZGV4OiA1O1xufVxuXG5cbi5pbnB1dC1zZWxlY3R7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQtc2VsZWN0LWFnZXtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlcjogMDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLml0ZW0tYnV0dG9ue1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmOTtcbn1cblxuXG5cblxuLndyaXRlLWxvYWQtYmFye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNDtcbiAgei1pbmRleDogOTk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9hZC1jc3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICB0b3A6IDQwJTtcbiAgY29sb3I6ICMxMDk1RkY7XG4gIHdpZHRoOiA1MHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjpob3N0IDo6bmctZGVlcCAgLnRvb2xiYXItdGl0bGUtZGVmYXVsdHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uaGVhZGVyLWljb257XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4uaGVhZGVyLWZvbnR7XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6IDZweFxufVxuLmhlYWRlci10aXRsZXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cblxuXG46aG9zdCA6Om5nLWRlZXAgLmFtLXJhZGlvLWlubmVye1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJhZGlvc2hvdyAuYW0tcmFkaW8taW5uZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbS1saXN0LWl0ZW17XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJhZGlvc2hvdyAuYW0tbGlzdC1pdGVte1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmYmZmO1xufVxuXG4ud3JpdGUtbG9hZC1tb2RlbHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzksNjAsMTI1LDAuNSk7XG4gIHotaW5kZXg6IDk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9hZC1tb2RlbC1jb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMjB2aDtcbiAgaGVpZ2h0OiA1M3ZoO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ubG9hZC1tb2RlbC1idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubG9hZC1tb2RlbC1hZGR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGJhNjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vYm9yZGVyOiAxcHggZG90dGVkICMxODkwZmY7XG59XG5cbi5pZGVubm97XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5sb2FkLW1vZGVsLXJhZGlve1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmxvYWQtbW9kZWwtbGlzdHtcbiAgaGVpZ2h0OiAyNnZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmxvYWQtbW9kZWwtdGl0bGV7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogI2FhYTtcbn1cblxuXG5cbi8vIOaaguaXtuWOu+aOiVxuLmRpc3BsYXktbGlzdHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubGlzdC1pdGVtLWRvd257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubGlzdC1pdGVtLWRvd24gPnNwYW57XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5saXN0LWl0ZW0tZG93biA+ZGl2e1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I4YjhiODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG46aG9zdCB7XG4gICAtLXBhZGRpbmctdG9wOiAwO1xuICAvKiAtLXBhZGRpbmctZW5kOiAwOyAqL1xuICAvKiAtLXBhZGRpbmctYm90dG9tOiAxMXB4OyAqL1xuICAvKiAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7ICovXG59XG5cbi5zdGFyLWljb257XG4gIGNvbG9yOiAjMTU1Mjk3O1xufVxuLndyaXRlLWljb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpc3QtaXRlbS1hZGRyZXNze1xuICBoZWlnaHQ6IDIuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNnJlbVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/write-identity-format/write-identity-format.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/common/write-identity-format/write-identity-format.page.ts ***!
  \****************************************************************************/
/*! exports provided: WriteIdentityFormatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteIdentityFormatPage", function() { return WriteIdentityFormatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/http-client.service */ "./src/app/shared/http-client.service.ts");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ocr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ocr */ "./node_modules/ocr/dist/esm/index.js");
/* harmony import */ var scanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! scanner */ "./node_modules/scanner/dist/esm/index.js");
/* harmony import */ var id_card_reader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! id-card-reader */ "./node_modules/id-card-reader/dist/esm/index.js");











const { Ocr } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
// 扫描码

const { Scanner } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];

const { IdCardReader } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let WriteIdentityFormatPage = class WriteIdentityFormatPage {
    constructor(router, navCtrl, http, route, ref, platform, deleteModal, changeRef) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.route = route;
        this.ref = ref;
        this.platform = platform;
        this.deleteModal = deleteModal;
        this.changeRef = changeRef;
        this.titleInfo = '';
        this.titleId = '0';
        this.personListLength = 0;
        this.isExit = true;
        // 信息
        this.patientInfo = {
            id: '',
            name: undefined,
            identity: undefined,
            certificateType: '身份证',
            relationship: '本人',
            nationality: '中国',
            mobile: undefined,
            address: undefined,
            sex: '',
            birthday: '',
            nation: '',
            age: '',
            ageUnit: '岁',
            patientType: '',
            remark: ''
        };
        this.patientTypeList = []; // 人员类别
        this.patientType_switch = 'close'; // 标本采集时，是否显示填写人员类别open显示填写，close不显示
        this.patientTypeStorage = ''; // 存储上一次保存的人员类别
        this.telFocus = { focus: false, date: new Date() };
        this.autoFocus = { focus: false, date: new Date() };
        this.singleSexArea = [
            '男',
            '女',
        ];
        this.maxDate = new Date();
        this.minDate = new Date(1880, 1, 1, 1, 1, 1, 1);
        this.singleNationArea = [
            '汉',
            '蒙古',
            '回',
            '藏',
            '维吾尔',
            '苗',
            '彝', '壮', '布依', '朝鲜', '满', '侗',
            '瑶', '白', '土家', '哈尼', '哈萨克',
            '傣', '黎', '傈僳', '佤', '畲', '高山',
            '拉祜', '水', '东乡', '纳西', '景颇',
            '柯尔克孜', '土', '达斡尔', '仫佬', '羌',
            '布朗', '撒拉', '毛南', '仡佬', '锡伯', '阿昌',
            '普米', '塔吉克', '怒', '乌孜别克', '俄罗斯',
            '鄂温克', '德昂', '保安', '裕固', '京', '塔塔尔',
            '独龙', '鄂伦春', '赫哲', '门巴', '珞巴', '基诺'
        ];
        this.isShowInfo = false;
        this.showBtnCon = '显示详细信息';
        this.model = 10;
        this.isClosedTube = '0';
        this.isLoad = false;
        // 流调--选择被检验者
        this.cheackRegisterOne = {
            idenno: 0,
            patientName: '',
            memo: ''
        };
        this.cheackRegisterList = [];
        this.SelectButtonPattern = '1'; // 判断读取身份证信息模式
        this.isShowAreaAddress = false;
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.routeBack();
        });
    }
    ngOnInit() {
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(sessionStorage.getItem('modelValue'))) {
            this.model = Number(sessionStorage.getItem('modelValue'));
        }
        else {
            this.model = 10;
        }
        // 获取是否封管
        this.isClosedTube = sessionStorage.getItem('isClosedTube');
        this.getDictionaryByIdAndEnabled('PatientType');
        this.getconfSingle('patientType_switch');
        this.patientTypeStorage = sessionStorage.getItem('patientTypeDicId');
        if (this.patientTypeStorage !== undefined) {
            this.patientInfo.patientType = this.patientTypeStorage;
        }
        // ? '' :this.patientTypeStorage
        this.route.queryParams.subscribe(data => {
            this.oldData = Object.assign({}, data);
            this.titleInfo = sessionStorage.getItem('tubeBarcode') + '管';
            this.titleId = data.titleId;
            this.index = data.index;
            // 身份信息
            this.patientInfo.nation = data.nation;
            this.patientInfo.birthday = data.birthday;
            this.patientInfo.sex = data.sex;
            this.patientInfo.identity = data.identity;
            this.patientInfo.name = data.name;
            this.patientInfo.mobile = data.phone;
            this.patientInfo.address = data.address;
            this.patientInfo.relationship = data.memo;
            this.patientInfo.id = data.id;
            this.patientInfo.patientType = this.patientTypeStorage;
            this.patientInfo.remark = data.remark;
            switch (this.titleId) {
                case '1':
                    this.patientInfo.certificateType = '身份证';
                    this.patientInfo.nationality = '中国';
                    this.isExit = true;
                    this.SelectButtonPattern = data.SelectButtonPattern;
                    this.checkIdCard(true, false);
                    break;
                case '2':
                    this.patientInfo.certificateType = '身份证';
                    this.patientInfo.nationality = '中国';
                    this.patientInfo.age = '';
                    this.patientInfo.sex = '男';
                    this.isExit = false;
                    break;
                case '3':
                    this.isExit = false;
                    this.patientInfo.age = data.age;
                    this.patientInfo.sex = data.sex;
                    this.patientInfo.certificateType = data.certificateType;
                    this.patientInfo.nationality = data.nationality;
                    this.patientInfo.patientType = data.patientType;
                    this.changeRef.markForCheck();
                    break;
            }
            this.imageData = sessionStorage.getItem('fullInfoStr');
            this.personListLength = Number(this.index) + 1;
        });
        this.modelDisplay = document.getElementsByClassName('write-load-model')[0];
        this.getKey();
        this.addressKey(false);
    }
    changeMemo(value) {
        this.patientInfo.relationship = value;
        if (this.titleId === '1') {
            if (value === '本人') {
                this.patientInfo.name = this.oldData.name;
            }
            else {
                this.isExit = false;
                if (this.patientInfo.name === this.oldData.name) {
                    this.patientInfo.name = this.oldData.name + value;
                }
                else {
                    if (this.patientInfo.name.indexOf('之子') > -1
                        || this.patientInfo.name.indexOf('之女') > -1
                        || this.patientInfo.name.indexOf('之母') > -1
                        || this.patientInfo.name.indexOf('之父') > -1
                        || this.patientInfo.name.indexOf('孙子') > -1
                        || this.patientInfo.name.indexOf('孙女') > -1
                        || this.patientInfo.name.indexOf('其他') > -1) {
                        this.patientInfo.name = this.oldData.name + value;
                    }
                }
            }
        }
    }
    // 清除信息
    clean() {
        this.patientInfo = {
            id: '',
            name: undefined,
            identity: undefined,
            certificateType: '身份证',
            relationship: '本人',
            nationality: '中国',
            mobile: undefined,
            address: undefined,
            sex: '男',
            birthday: '',
            nation: '汉',
            age: '',
            ageUnit: '岁',
            patientType: '',
            remark: ''
        };
        this.imageData = '';
        this.titleId = '0';
    }
    // 路由返回
    routeBack() {
        this.router.navigate(['/PersonList']);
    }
    submit() {
        switch (this.titleId) {
            case '1':
                this.saveCard();
                break;
            case '2':
                // 手动添加
                this.saveCard();
                break;
            case '3':
                this.updatePatient();
                break;
            case '4':
                // 新增亲属
                // 判断是否修改患者姓名
                if (this.patientInfo.name === this.oldData['name']) {
                    this.http.showToast('您选择的是新增亲属，请修改为亲属姓名');
                    return;
                }
                this.saveCard();
                break;
        }
    }
    checkIdCard(isNeedQuery, isQuery) {
        this.addressKey(false);
        if (this.patientInfo.certificateType === '身份证') {
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(this.patientInfo.identity)) {
                this.patientInfo.identity = this.patientInfo.identity.trim();
            }
            if (this.http.IdentityCodeValid(this.patientInfo.identity, '')) {
                this.patientInfo.sex = Number(this.patientInfo.identity.substr(16, 1)) % 2 === 0 ? '女' : '男';
                const info = this.http.GetAge(this.patientInfo.identity);
                this.patientInfo.age = info['age'];
                this.patientInfo.birthday = info['birthday'];
                if (isNeedQuery) {
                    this.getHasCurrent(isQuery);
                }
            }
        }
        else {
            this.isExit = false;
            if (isNeedQuery) {
                this.getHasCurrent(isQuery);
            }
        }
    }
    okLoadModel() {
        this.modelDisplay['style']['display'] = 'none';
    }
    // 注册选择对号按钮
    selectCheackRegister(value, item) {
        const str = 'radio' + value;
        const radio = document.getElementsByClassName(str)[0];
        // 清除所有对号
        for (let z = 0; z < this.cheackRegisterList.length; z++) {
            const radioRem = document.getElementsByClassName('radio' + z)[0];
            radioRem.className = this.removeClass(radioRem, 'radioshow');
        }
        // 显示当前对号
        radio.className = radio.className + ' radioshow';
        this.assignmentValue(item);
    }
    removeClass(dom, clzName) {
        let clzNewName = dom['className'];
        let classname = '';
        if (clzNewName && clzNewName.length > 0) {
            clzNewName = clzNewName.split(' ');
            for (let i = clzNewName.length; i--;) {
                if (clzNewName[i] === clzName) {
                    clzNewName.splice(i, 1);
                    classname = clzNewName.join(' ');
                    return classname;
                }
            }
        }
        return clzNewName.join(' ');
    }
    assignmentValue(item) {
        // 身份信息
        // 流调信息中没有生日和名字先去掉
        // this.patientInfo.nation = item.nation;
        // this.patientInfo.birthday = item.birthday;
        this.patientInfo.sex = item.sex;
        this.patientInfo.identity = item.idenno;
        this.patientInfo.name = item.patientName;
        this.patientInfo.mobile = item.mobile;
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(item.certificateType) && item.certificateType !== '') {
            this.patientInfo.certificateType = item.certificateType;
        }
        else {
            this.patientInfo.certificateType = '身份证';
        }
        if (this.patientInfo.certificateType === '身份证') {
            this.patientInfo.nationality = '中国';
        }
        else {
            this.patientInfo.nationality = item.nationality;
        }
        this.patientInfo.relationship = item.relationship;
        this.patientInfo.id = item.id;
        this.patientInfo.address = item['address'];
    }
    // 调用后台接口
    // 获取保存的条件
    getSaveCond() {
        const condition = {
            address: this.patientInfo.address,
            barcode: sessionStorage.getItem('tubeBarcode'),
            birthday: this.patientInfo.birthday,
            createTime: new Date(),
            fullInfoStr: this.imageData,
            id: this.patientInfo.id,
            identity: this.patientInfo.identity,
            name: this.patientInfo.name,
            nation: this.patientInfo.nation,
            opuser: '',
            phone: this.patientInfo.mobile,
            sex: this.patientInfo.sex,
            tubeId: sessionStorage.getItem('tubeBarId'),
            memo: this.patientInfo.relationship,
            nationality: this.patientInfo.nationality,
            certificateType: this.patientInfo.certificateType,
            age: this.patientInfo.age,
            patientType: this.patientInfo.patientType,
            remark: this.patientInfo.remark
        };
        return condition;
    }
    // 1. 获取当前管里的标本
    GetPatientTube(message) {
        const condition = {
            tubeId: sessionStorage.getItem('tubeBarId')
        };
        this.http
            .post(`rcp/api/get/tube/patient` + this.http.getParamsString(condition), {}, '获取当前管里的标本', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].FailMessage.getTubeSample, { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.personListLength = data['data'].length;
                const list = data['data'].filter(w => w.name === this.patientInfo.name && w.identity === this.patientInfo.identity && w.memo === this.patientInfo.relationship);
                if (this.personListLength > this.model || list.length > 0) {
                    this.routeBack();
                }
                else {
                    if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(message)) {
                        if (message.indexOf('Error') !== -1
                            || message.indexOf('SQL') !== -1
                            || message.indexOf('exception') !== -1) {
                            this.http.showToast('保存失败，程序异常');
                        }
                        else {
                            if (message === '请求不合法') {
                                this.http.showToast('保存失败，请求不合法！');
                                this.getKey();
                            }
                            else {
                                this.http.showToast(message);
                            }
                        }
                    }
                    else {
                        this.http.showToast('保存失败');
                    }
                }
            }
        });
    }
    // 加密
    getKey() {
        this.http
            .getNotHeard(`rcp/open/api/key?_allow_anonymous=true`)
            .subscribe(data => {
            if (data['code'] === '0') {
                this.encodeKey = data['data']['encode_key'];
                this.key = data['data']['key'];
            }
            else {
                this.http.showFail(data, '获取加密信息失败！');
            }
        });
    }
    // 修改当前标本信息
    updatePatient() {
        const condition = this.getSaveCond();
        let bool = false;
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(this.isSaveDate)) {
            if ((new Date().getTime() - this.isSaveDate.getTime()) / 1000 > 1) {
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
        this.isSaveDate = new Date();
        if (condition.identity === undefined || condition.identity === '') {
            this.http.showToast('身份证号为空，请填写后再保存！');
            return;
        }
        if (this.patientInfo.certificateType === '身份证') {
            if (!this.http.IdentityCodeValid(this.patientInfo.identity, '')) {
                return;
            }
        }
        condition['key'] = this.key;
        condition.identity = window['encryptByDES'](condition.identity, this.encodeKey);
        condition.fullInfoStr = window['encryptByDES'](condition.fullInfoStr, this.encodeKey);
        condition.name = window['encryptByDES'](condition.name, this.encodeKey);
        condition.phone = window['encryptByDES'](condition.phone, this.encodeKey);
        this.http
            .post(`rcp/api/update/patient`, condition, '修改当前标本信息', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].FailMessage.updateSampleInfo, { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                if (this.patientTypeStorage !== condition.patientType) {
                    sessionStorage.setItem('patientTypeDicId', condition.patientType);
                    this.patientTypeStorage = condition.patientType;
                }
                this.routeBack();
            }
        });
    }
    showDelete() {
        this.deleteModal.alert('', '确认删除?', [
            { text: '取消', onPress: () => { } },
            {
                text: '删除', onPress: () => {
                    this.deletePatirnt();
                }
            }
        ]);
    }
    showIdentity(condition) {
        this.deleteModal.alert('身份证号确认', '身份证号为15位，是否确认保存?', [
            {
                text: '确定', onPress: () => {
                    this.http
                        .post(`rcp/api/scan/idcard`, condition, '存当前标本信息', 'false', { load: true })
                        .subscribe(data => {
                        if (data['code'] === '0') {
                            this.clean();
                            this.routeBack();
                        }
                        else {
                            this.GetPatientTube(data['message']);
                        }
                    });
                }
            },
            { text: '取消', onPress: () => { } },
        ]);
    }
    addressKey(value) {
        if (this.patientInfo.address.length > 14) {
            this.isShowAreaAddress = true;
            if (value) {
                setTimeout(() => {
                    this.AddressArea.nativeElement.focus();
                }, 50);
            }
        }
        else {
            this.isShowAreaAddress = false;
            if (value) {
                setTimeout(() => {
                    this.AddressInput.nativeElement.focus();
                }, 50);
            }
        }
    }
    cleanAddress() {
        this.deleteModal.alert('清空操作', '是否清空地址?', [
            {
                text: '清空', onPress: () => {
                    this.patientInfo.address = '';
                }
            },
            { text: '取消', onPress: () => { } },
        ]);
    }
    deletePatirnt() {
        const condition = {
            tubePatientId: this.patientInfo.id,
        };
        this.http
            .post(`rcp/api/delete/tube/patient` + this.http.getParamsString(condition), {}, '删除标本信息', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].FailMessage.deleteSample, { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.routeBack();
            }
        });
    }
    saveCard() {
        let bool = false;
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(this.isSaveDate)) {
            if ((new Date().getTime() - this.isSaveDate.getTime()) / 1000 > 1) {
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
        this.isSaveDate = new Date();
        const condition = this.getSaveCond();
        if (condition.name === undefined || condition.name.trim() === '') {
            this.http.showToast('姓名为空，请填写后再保存！');
            return;
        }
        if (condition.identity === undefined || condition.identity.trim() === '') {
            this.http.showToast('证件信息为空，请填写后再保存！');
            return;
        }
        if (this.patientInfo.certificateType === '身份证') {
            if (!this.http.IdentityCodeValid(this.patientInfo.identity, '')) {
                return;
            }
        }
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(condition['birthday']) && condition['birthday'].indexOf('年') > -1) {
            condition['birthday'] = condition['birthday'].replace('年', '-').replace('月', '-').replace('日', '');
        }
        condition['key'] = this.key;
        if (condition.identity.length === 15) {
            this.showIdentity(condition);
            return;
        }
        // this.http
        //       .getNotHeard(`rcp/open/api/key?_allow_anonymous=true`)
        //       .subscribe(keyData => {
        //           if (keyData['code'] === '0') {
        //               const encodeKey = keyData['data']['encode_key'];
        //               const key = keyData['data']['key'];
        //               condition.identity = window['encryptByDES'](condition.identity, encodeKey );
        //               condition.fullInfoStr = window['encryptByDES'](condition.fullInfoStr, encodeKey );
        //               condition.name = window['encryptByDES'](condition.name, encodeKey );
        //               condition.phone = window['encryptByDES'](condition.phone, encodeKey );
        //               condition['key'] = key;
        condition.identity = window['encryptByDES'](condition.identity, this.encodeKey);
        condition.fullInfoStr = window['encryptByDES'](condition.fullInfoStr, this.encodeKey);
        condition.name = window['encryptByDES'](condition.name, this.encodeKey);
        condition.phone = window['encryptByDES'](condition.phone, this.encodeKey);
        this.http
            .post(`rcp/api/scan/idcard`, condition, '存当前标本信息', 'false', { load: true })
            .subscribe(data => {
            if (data['code'] === '0') {
                this.clean();
                if (this.patientTypeStorage !== condition.patientType) {
                    sessionStorage.setItem('patientTypeDicId', condition.patientType);
                    this.patientTypeStorage = condition.patientType;
                }
                this.routeBack();
            }
            else {
                this.GetPatientTube(data['message']);
            }
        });
        //     } else {
        //         this.http.showFail(keyData, '获取加密信息失败！');
        //     }
        // });
    }
    /**
     * 查询字典通过类型编码+字典编码+是否启用，字典编码为空返回全部
     */
    getDictionaryByIdAndEnabled(dicTypeId) {
        this.patientTypeList = [];
        const cond = {
            dicId: '',
            enabled: 1,
            typeId: dicTypeId,
        };
        this.http.get('rcp/api/sysdictionary/getDictionaryByIdAndEnabled', cond, '查询字典通过类型编码+字典编码+是否启用，字典编码为空返回全部', 'false', { load: true })
            .subscribe((data) => {
            if (data['code'] === '0') {
                this.patientTypeList = data['data'];
                const a = this.patientInfo.patientType;
                this.patientInfo.patientType = '';
                setTimeout(() => { this.patientInfo.patientType = a; }, 10);
                this.changeRef.detectChanges();
                this.changeRef.markForCheck();
            }
            else {
                // this.http.showToast("查询字典内容失败!" + (data['message'] === null ? "" : data['message']));
            }
        });
    }
    /**
     * 查询单个系统配置
     * @param key
     */
    getconfSingle(key) {
        this.http.get('rcp/api/sysConfig/getSysConfig', { configKey: key }, '查询某个配置', 'false', { load: true })
            .subscribe((data) => {
            this.patientType_switch = '';
            if (data['code'] === '0') {
                this.patientType_switch = data['data']['configValue'];
            }
            else {
                // this.http.showToast(data['message']);
            }
        });
    }
    getHasCurrent(isQuery) {
        if (sessionStorage.getItem('isHasCurrent') === 'true') {
            this.getCheackKey(this.patientInfo, isQuery);
        }
        else {
            this.getPatientInfo(isQuery);
        }
    }
    /**
     * 根据身份证号和姓名获取患者信息
     */
    getPatientInfo(isQuery) {
        const cond = {
            identity: this.patientInfo.identity,
            patientName: this.patientInfo.name
        };
        this.http.get('rcp/api/scan/getPatientInfo', cond, '根据身份证号和姓名获取患者信息', 'false', { load: true })
            .subscribe((data) => {
            if (data['code'] === '0') {
                if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(data['data']['idenno'])) {
                    this.patientInfo.mobile
                        = Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(data['data']['mobile']) ? data['data']['mobile'] : this.patientInfo.mobile;
                    this.patientInfo.address
                        = Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(data['data']['address']) ? data['data']['address'] : this.patientInfo.address;
                    this.addressKey(false);
                }
                else {
                    if (isQuery) {
                        this.http.showToast('没有查到相关信息');
                    }
                }
            }
            else {
                if (isQuery) {
                    this.http.showToast('没有查到相关信息');
                }
            }
        });
    }
    // 加密
    getCheackKey(condition, isQuery) {
        this.http
            .getNotHeard(`rcp/open/api/key`)
            .subscribe(data => {
            if (data['code'] === '0') {
                const value = window['encryptByDES'](condition.identity, data['data']['encode_key']);
                const cond = {
                    identity: value,
                    key: data['data']['key']
                };
                this.cheackRegister(cond, data['data']['encode_key'], isQuery);
            }
        });
    }
    // 验证是否注册过
    cheackRegister(cond, encodeKey, isQuery) {
        this.cheackRegisterList = [];
        this.http.post(`rcp/api/get/patient`, cond, '判断被检验者注册', 'false', { load: true })
            .subscribe(data => {
            if (data['code'] === '0' && data['data'].length > 0) {
                data['data'].forEach(e => {
                    e['idenno'] = window['decryptByDES'](e.certificateNo, encodeKey);
                    if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(e.mobile)) {
                        e.mobile = window['decryptByDES'](e.mobile, encodeKey);
                    }
                    if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(e.personName)) {
                        e['patientName'] = window['decryptByDES'](e.personName, encodeKey);
                    }
                    e['address'] = e.residenceAddress;
                });
                this.cheackRegisterList = data['data'];
                this.cheackRegisterOne = this.cheackRegisterList[0];
                if (data['data'].length > 1) {
                    this.modelDisplay['style']['display'] = 'inline-block';
                    setTimeout(() => { this.selectCheackRegister(0, this.cheackRegisterOne); }, 100);
                }
                else {
                    this.assignmentValue(this.cheackRegisterOne);
                }
            }
            else {
                this.getPatientInfo(isQuery);
            }
        });
    }
    clickIdentity() {
        switch (this.SelectButtonPattern) {
            case '1':
                this.scanIdentity();
                break;
            case '2':
                this.scanHealthCode();
                break;
            case '3':
                this.readIdentity();
                break;
        }
    }
    // 重扫
    // 扫描身份证
    scanIdentity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.result = (yield Ocr.scan());
            this.getScanCondition();
        });
    }
    getScanCondition() {
        this.oldData = Object.assign({}, this.result);
        // 身份信息
        this.patientInfo.nation = this.result.folk;
        this.patientInfo.birthday = this.result.birthday;
        this.patientInfo.sex = this.result.sex;
        this.patientInfo.identity = this.result.num;
        this.patientInfo.name = this.result.name;
        this.patientInfo.mobile = '';
        this.patientInfo.address = this.result.address;
        this.patientInfo.relationship = '本人';
        this.patientInfo.patientType = this.patientTypeStorage;
        this.patientInfo.remark = '';
        this.patientInfo.certificateType = '身份证';
        this.patientInfo.nationality = '中国';
        this.isExit = true;
        this.imageData = this.result.imageData;
        this.checkIdCard(true, false);
    }
    // 扫描健康码
    scanHealthCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield Scanner.openScanner();
                switch (result['operation']) {
                    case 'SCAN':
                        this.scanCode(result['result']);
                        break;
                    case 'MANUAL':
                        break;
                    case 'CANCEL':
                        break;
                }
            }
            catch (e) {
                this.http.showToast('扫描失败，请重新扫描！');
            }
        });
    }
    // 扫描身份证
    scanCode(value) {
        const condition = {
            ehealthCode: value,
        };
        this.http
            .post(`lstrcp/api/scan` + this.http.getParamsString(condition), {}, '扫描健康码', 'false')
            .subscribe(data => {
            if (data['code'] === '0') {
                if (data['data']['ret_code'] === '0000') {
                    const cond = data['data']['biz_content'];
                    const condJson = JSON.parse(cond);
                    let birthdayStr = '';
                    if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(condJson['birthday']) && condJson['birthday'] !== '') {
                        birthdayStr = condJson['birthday'].substr(0, 4) + '年' + condJson['birthday'].substr(4, 2)
                            + '月' + condJson['birthday'].substr(6, 2) + '日';
                    }
                    this.patientInfo.name = condJson['user_name'];
                    this.patientInfo.sex = condJson['user_sex'] === '1' ? '男' : '女';
                    this.patientInfo.nation = condJson['nation'];
                    this.patientInfo.birthday = birthdayStr;
                    this.patientInfo.address = condJson['address'] + condJson['detail_address'];
                    this.patientInfo.identity = condJson['id_no'];
                    this.patientInfo.mobile = condJson['mobile_phone'];
                    this.imageData = '';
                    this.patientInfo.id = '';
                    this.patientInfo.relationship = '本人';
                    this.patientInfo.patientType = this.patientTypeStorage;
                    this.patientInfo.remark = '';
                    this.patientInfo.certificateType = '身份证';
                    this.patientInfo.nationality = '中国';
                    this.isExit = true;
                    this.checkIdCard(true, false);
                }
                else {
                    this.http.showToast(data['data']['ret_msg']);
                }
            }
            else {
                this.http.showToast('扫描失败，请重新扫描！');
            }
        });
    }
    // 读卡
    readIdentity() {
        // 判断连接成功状态
        // this.load.style.display = 'inline-block';
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(sessionStorage.getItem('readConnectState')) ||
            sessionStorage.getItem('readConnectState') === 'false') {
            this.connectRead();
        }
        else {
            this.read();
        }
    }
    // 连接读卡器
    connectRead() {
        // 调方法
        // 打开OPEN，关闭CLOSED
        try {
            IdCardReader.addListener('onBluetoothStateChange', (bluetoothState) => {
                console.log('onBluetoothStateChange', bluetoothState);
                if (bluetoothState === 'OPEN') {
                    // 记录连接成功状态
                    sessionStorage.setItem('readConnectState', 'true');
                }
                else {
                    // 记录连接失败状态
                    sessionStorage.setItem('readConnectState', 'false');
                }
            });
            // 连接成功CONNECTED 、 失败 NOT_CONNECTED 、 断开连接 DISCONNECT
            IdCardReader.addListener('onBluetoothConnectStateChange', (connectState) => {
                console.log('onBluetoothConnectStateChange', connectState);
                if (connectState['connectState'] === 'CONNECTED') {
                    // 记录连接成功状态
                    sessionStorage.setItem('readConnectState', 'true');
                    this.http.showToast('读卡器连接成功，请放置身份证');
                }
                else {
                    // 记录连接失败状态
                    sessionStorage.setItem('readConnectState', 'false');
                    this.http.showToast('蓝牙读卡器连接失败！');
                }
            });
            IdCardReader.connect();
        }
        catch (e) {
            this.http.showToast('蓝牙读卡器连接失败！');
        }
    }
    read() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data;
            try {
                data = (yield IdCardReader.read());
                if (data['code'] === 'SUCCESS') {
                    this.patientInfo.address = data['address'];
                    this.patientInfo.birthday = data['birthday'];
                    this.patientInfo.nation = data['folk'];
                    this.patientInfo.name = data['name'];
                    this.patientInfo.identity = data['num'];
                    this.patientInfo.sex = data['sex'];
                    this.imageData = '';
                    this.patientInfo.id = '';
                    this.patientInfo.relationship = '本人';
                    this.patientInfo.patientType = this.patientTypeStorage;
                    this.patientInfo.remark = '';
                    this.patientInfo.certificateType = '身份证';
                    this.patientInfo.nationality = '中国';
                    this.isExit = true;
                    this.checkIdCard(true, false);
                }
                else {
                    if (data['code'] === 'FIND_CARD_FAILED') {
                        this.http.showToast('请重新放置身份证');
                    }
                }
            }
            catch (e) {
                this.http.showToast('读卡失败，请重新放置身份证');
            }
        });
    }
};
WriteIdentityFormatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_8__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
WriteIdentityFormatPage.propDecorators = {
    AddressArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['AddressArea', { static: false },] }],
    AddressInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['AddressInput', { static: false },] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@routeAnimation',] }]
};
WriteIdentityFormatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-write-identity-format',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./write-identity-format.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/write-identity-format/write-identity-format.page.html")).default,
        animations: [
            _shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./write-identity-format.page.scss */ "./src/app/common/write-identity-format/write-identity-format.page.scss")).default]
    })
], WriteIdentityFormatPage);



/***/ })

}]);
//# sourceMappingURL=common-write-identity-format-write-identity-format-module-es2015.js.map