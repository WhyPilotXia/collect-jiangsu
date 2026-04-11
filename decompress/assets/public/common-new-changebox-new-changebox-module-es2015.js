(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-new-changebox-new-changebox-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/new-changebox/new-changebox.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/new-changebox/new-changebox.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--页面头部-->\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"header-icon\">\n        <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n      </div>\n      <div class=\"header-font\" (click)=\"routeBack()\">\n        <span>返回</span>\n      </div>\n      <span class=\"header-title\">标本转箱</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!--页面内容-->\n<ion-content>\n  <div class=\"home-spec\">\n    <ng-container *ngIf=\"type == '1'\">\n      <div style=\"position: relative; height: 30%; width: 100%\">\n        <img src=\"../../../assets/imgs/closeBoxMin.svg\" class=\"oldCloseBoxMin\">\n        <div class=\"odlUpFont\"><span>新箱</span></div>\n      </div>\n      <div style=\"position: relative; height: 20%; width: 100%\">\n        <div class=\"oldImp\">点击下方\"扫描原箱码\"按钮后对 装有标本的原箱码进行扫描</div>\n      </div>\n      <div style=\"position: relative; height: 50%; width: 100%\">\n        <img src=\"../../../assets/imgs/openBox.svg\" class=\"oldOpenBox\">\n        <img src=\"../../../assets/imgs/tube.svg\" class=\"oldTube\" (click)=\"hover()\">\n        <div class=\"oldFont\"><span>原箱</span></div>\n        <img src=\"../../../assets/imgs/phone.svg\" class=\"oldPhone\">\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"type == '2'\">\n      <div style=\"position: relative; height: 50%; width: 100%\">\n        <div class=\"oldImp\">\n          <p style=\"font-size: 22px; font-weight: 400\">原箱条码：{{barcodeOld}}</p>\n          <p  style=\"font-size: 22px;\">标本管数：<span style=\"font-weight: bold\">{{tubeCountOld}}</span> 管</p>\n          <p>采集人数：{{patientCountOld}}</p>\n          <p>采集地点：{{censusAddressNameOld}}</p>\n          <p>开箱时间：{{openTimeOld | date: 'yyyy-MM-dd HH:mm:ss'}}</p>\n          <p>开箱人员：{{openBoxUserNameOld}} </p>\n        </div>\n        <div class=\"oldIonic\">\n          <span>原</span>\n        </div>\n      </div>\n      <div style=\"position: relative; height: 50%; width: 100%\">\n        <img src=\"../../../assets/imgs/openBox.svg\" class=\"oldOpenBox\">\n        <img src=\"../../../assets/imgs/tube.svg\" class=\"oldTube\">\n        <div class=\"oldFont\"><span>原箱</span></div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"type == '3'\">\n      <div style=\"position: relative; height: 25%; width: 100%\">\n        <img src=\"../../../assets/imgs/openBox.svg\" class=\"newCloseBoxMin\">\n        <div class=\"newUpFont\"><span>新箱</span></div>\n      </div>\n      <div style=\"position: relative; height: 30%; width: 100%\">\n        <div class=\"newImp\">点击下方\"扫描新箱码\"按钮后对 新箱码进行扫描</div>\n        <img src=\"../../../assets/imgs/arrow.svg\" class=\"newArrow\">\n      </div>\n      <div style=\"position: relative; height: 45%; width: 100%\">\n        <img src=\"../../../assets/imgs/openBox.svg\" class=\"newOpenBox\">\n        <img src=\"../../../assets/imgs/tube.svg\" class=\"newTube\">\n        <img src=\"../../../assets/imgs/phone.svg\" class=\"newPhone\">\n        <div class=\"newFont\"><span>原箱</span></div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"type == '4'\">\n      <div style=\"position: relative; height: 49%; width: 100%\">\n        <div class=\"oldImp\">\n          <p style=\"font-size: 22px; font-weight: 400\">原箱条码：{{barcodeNew}}</p>\n          <p  style=\"font-size: 22px;\">标本管数：<span style=\"font-weight: bold\">{{tubeCountNew}}</span> 管</p>\n          <p>采集人数：{{patientCountNew}}</p>\n          <p>采集地点：{{censusAddressNameNew}}</p>\n          <p>开箱时间：{{openTimeNew | date: 'yyyy-MM-dd HH:mm:ss'}}</p>\n          <p>开箱人员：{{openBoxUserNameNew}} </p>\n        </div>\n        <div class=\"oldIonic\">\n          <span>新</span>\n        </div>\n      </div>\n      <div style=\"position: relative; height: 10%; width: 100%\">\n        <img src=\"../../../assets/imgs/arrow.svg\" class=\"changeArrow\">\n      </div>\n      <div style=\"position: relative; height: 49%; width: 100%;padding-bottom:10px\">\n        <div class=\"oldImp\">\n          <p style=\"font-size: 22px; font-weight: 400\">原箱条码：{{barcodeOld}}</p>\n          <p  style=\"font-size: 22px;\">标本管数：<span style=\"font-weight: bold\">{{tubeCountOld}}</span> 管</p>\n          <p>采集人数：{{patientCountOld}}</p>\n          <p>采集地点：{{censusAddressNameOld}}</p>\n          <p>开箱时间：{{openTimeOld | date: 'yyyy-MM-dd HH:mm:ss'}}</p>\n          <p>开箱人员：{{openBoxUserNameOld}} </p>\n        </div>\n        <div class=\"oldIonic\">\n          <span>原</span>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"type == '5'\">\n      <div style=\"position: relative; height: 49%; width: 100%\">\n        <div class=\"oldImp\">\n          <p style=\"font-size: 22px; font-weight: 400\">原箱条码：{{barcodeNew}}</p>\n          <p  style=\"font-size: 22px;\">标本管数：<span style=\"font-weight: bold\">{{tubeCountNew + tubeCountOld}}</span> 管</p>\n          <p>采集人数：{{patientCountOld + patientCountNew}}</p>\n          <p>采集地点：{{censusAddressNameOld}}</p>\n          <p>开箱时间：{{openTimeOld | date: 'yyyy-MM-dd HH:mm:ss'}}</p>\n          <p>开箱人员：{{openBoxUserNameOld}} </p>\n        </div>\n        <div class=\"oldIonic\">\n          <span>新</span>\n        </div>\n      </div>\n      <div class=\"changeSuccess\">\n        <span>转箱成功！</span>\n      </div>\n      <div style=\"position: relative; height: 49%; width: 100%;padding-bottom:10px\">\n        <div class=\"oldImp\">\n          <p style=\"font-size: 22px; font-weight: 400\">原箱条码：{{barcodeOld}}</p>\n          <p  style=\"font-size: 22px;\">标本管数：<span style=\"font-weight: bold\">0</span> 管</p>\n          <p>采集人数：0</p>\n          <p>采集地点：{{censusAddressNameOld}}</p>\n          <p>开箱时间：{{openTimeOld | date: 'yyyy-MM-dd HH:mm:ss'}}</p>\n          <p>开箱人员：{{openBoxUserNameOld}} </p>\n        </div>\n        <div class=\"oldIonic\">\n          <span>原</span>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"bar-footer\">\n    <div class=\"bar-footer-tube\" (click) = \"confirmTubeClick()\">{{buttonText}}</div>\n  </div>\n</ion-footer>\n\n\n\n<div class=\"tab-load-model-oldeBar\">\n  <div class=\"load-model-con-oldeBar\">\n    <div class=\"load-model-title\">输入原转运箱码</div>\n    <input type=\"tel\" class=\"tab-load-model-input-oldeBar\" [(ngModel)]=\"barcodeOld\" />\n    <div class=\"load-model-button\">\n      <div class=\"load-model-delete\" (click)=\"showCustom(false)\">取消</div>\n      <div class=\"load-model-ok\" (click)=\"ScanBoxOperate(barcodeOld)\">确定</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"tab-load-model-newBar\">\n  <div class=\"load-model-con-newBar\">\n    <div class=\"load-model-title\">输入新转运箱码</div>\n    <input\n            type=\"tel\"\n            class=\"tab-load-model-input-newbar\"\n            [(ngModel)]=\"barcodeNew\"\n    />\n    <div class=\"load-model-button\">\n      <div class=\"load-model-delete\" (click)=\"showCustomNewBar(false)\">\n        取消\n      </div>\n      <div class=\"load-model-ok\" (click)=\"ScanBoxOperateNewBar(barcodeNew)\">\n        确定\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/scanner/dist/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/scanner/dist/esm/index.js ***!
  \************************************************/
/*! exports provided: ScannerWeb, Scanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ "./node_modules/scanner/dist/esm/web.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScannerWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["ScannerWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scanner", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["Scanner"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/scanner/dist/esm/web.js":
/*!**********************************************!*\
  !*** ./node_modules/scanner/dist/esm/web.js ***!
  \**********************************************/
/*! exports provided: ScannerWeb, Scanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerWeb", function() { return ScannerWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scanner", function() { return Scanner; });
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

class ScannerWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'Scanner',
            platforms: ['web'],
        });
    }
    openScanner() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    closeScanner() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
}
const Scanner = new ScannerWeb();


Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(Scanner);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./src/app/common/new-changebox/new-changebox.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/new-changebox/new-changebox.module.ts ***!
  \**************************************************************/
/*! exports provided: NewChangeboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChangeboxModule", function() { return NewChangeboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _new_changebox_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-changebox.page */ "./src/app/common/new-changebox/new-changebox.page.ts");
/* harmony import */ var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/serviceCommon.module */ "./src/app/service/serviceCommon.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










let NewChangeboxModule = class NewChangeboxModule {
};
NewChangeboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdMobileModule"],
            _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild([{ path: '', component: _new_changebox_page__WEBPACK_IMPORTED_MODULE_7__["NewChangeboxPage"] }])
        ],
        declarations: [_new_changebox_page__WEBPACK_IMPORTED_MODULE_7__["NewChangeboxPage"]]
    })
], NewChangeboxModule);



/***/ }),

/***/ "./src/app/common/new-changebox/new-changebox.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/common/new-changebox/new-changebox.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-spec {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  height: calc(100vh - 112px);\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  align-items: center;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -12px;\n}\n\n.header-font {\n  float: left;\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 8px;\n  white-space: nowrap;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n}\n\n.header-number {\n  float: right;\n  text-align: center;\n  margin-top: 6px;\n  font-size: 1rem;\n}\n\n.bar-footer {\n  border-top: 1px solid #cccccc;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  color: white;\n}\n\n.bar-footer-tube {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n  border-right: 1px solid #bcbcbc;\n  background-color: #005BAC;\n  color: white;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n\n.tab-load-model-oldeBar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(39, 60, 125, 0.5);\n  z-index: 9;\n  display: none;\n}\n\n.tab-load-model-newBar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(39, 60, 125, 0.5);\n  z-index: 9;\n  display: none;\n}\n\n.load-model-con-oldeBar {\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 40vh;\n  height: 11rem;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px 5px;\n  padding: 10px 10px 10px 10px;\n}\n\n.load-model-con-newBar {\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 40vh;\n  height: 11rem;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px 5px;\n  padding: 10px 10px 10px 10px;\n}\n\n.load-model-title {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n  color: #aaa;\n}\n\n.tab-load-model-input-oldeBar {\n  height: 2.8rem;\n  width: 100%;\n  border: 1px solid #aaa;\n  border-radius: 3px;\n}\n\n.tab-load-model-input-newbar {\n  height: 2.8rem;\n  width: 100%;\n  border: 1px solid #aaa;\n  border-radius: 3px;\n}\n\n.load-model-button {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  margin-top: 1.2rem;\n}\n\n.load-model-delete {\n  width: 30%;\n  font-size: 1.2rem;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  text-align: center;\n  background-color: white;\n  color: #bcbcbc;\n  padding: 0.6rem;\n  margin-right: 8px;\n}\n\n.load-model-ok {\n  width: 70%;\n  font-size: 1.2rem;\n  text-align: center;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  background-color: #005bac;\n  color: white;\n  padding: 0.6rem;\n}\n\n.oldOpenBox {\n  position: absolute;\n  left: 10%;\n  width: 80%;\n  height: 98%;\n}\n\n.oldTube {\n  position: absolute;\n  left: 25%;\n  width: 50%;\n  height: 50%;\n  top: 10%;\n  transition: 0.5s linear;\n}\n\n.oldTube-hover {\n  transform: translateY(-250px);\n}\n\n.oldFont {\n  position: absolute;\n  top: 70%;\n  left: 25%;\n  font-size: 24px;\n}\n\n.oldPhone {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 200px;\n  height: 150px;\n}\n\n.oldCloseBoxMin {\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  height: 85%;\n}\n\n.odlUpFont {\n  position: absolute;\n  top: 68%;\n  left: 34%;\n  font-size: 18px;\n  color: #444444;\n  opacity: 0.49;\n}\n\n.oldImp {\n  position: absolute;\n  top: 7%;\n  left: 10%;\n  width: 80%;\n  background: #E0F0FA;\n  opacity: 1;\n  border-radius: 12px;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 24px;\n  color: #444444;\n  padding: 15px;\n  height: 85%;\n  overflow-y: auto;\n}\n\n.oldImp > p {\n  margin-bottom: 0.3rem;\n}\n\n.oldIonic {\n  position: absolute;\n  top: 10%;\n  right: 11%;\n  width: 50px;\n  height: 50px;\n  background: #59ACFA;\n  border-radius: 50%;\n  opacity: 1;\n}\n\n.oldIonic > span {\n  width: 36px;\n  height: 47px;\n  font-size: 26px;\n  font-weight: bold;\n  color: #FFFFFF;\n  opacity: 1;\n  line-height: 47px;\n  margin-left: 11px;\n}\n\n.newImp {\n  position: absolute;\n  bottom: 7%;\n  left: 10%;\n  width: 80%;\n  background: #E0F0FA;\n  opacity: 1;\n  border-radius: 12px;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 24px;\n  color: #444444;\n  padding: 15px;\n  overflow-y: auto;\n  z-index: 1;\n}\n\n.newArrow {\n  position: absolute;\n  left: 30%;\n  z-index: 0;\n}\n\n.newCloseBoxMin {\n  position: absolute;\n  top: 10%;\n  left: 5%;\n  width: 90%;\n  height: 90%;\n}\n\n.newUpFont {\n  position: absolute;\n  top: 73%;\n  left: 37%;\n  font-size: 18px;\n  color: #444444;\n}\n\n.newPhone {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 200px;\n  height: 150px;\n  transition: 0.5s linear;\n}\n\n.newPhone-hover {\n  position: absolute;\n  right: 0;\n  width: 200px;\n  height: 150px;\n  transform: translateY(-51vh);\n}\n\n.newTube {\n  position: absolute;\n  left: 25%;\n  width: 50%;\n  height: 50%;\n  top: 10%;\n  transition: 0.5s linear;\n}\n\n.newTube-hover {\n  transform: translateY(-51vh);\n  width: 25%;\n  left: 37%;\n}\n\n.newOpenBox {\n  position: absolute;\n  left: 10%;\n  width: 80%;\n  height: 98%;\n  opacity: 0.5;\n}\n\n.newFont {\n  position: absolute;\n  top: 70%;\n  left: 25%;\n  font-size: 24px;\n  color: #444444;\n  opacity: 0.49;\n}\n\n.changeArrow {\n  position: absolute;\n  left: 40%;\n  z-index: 0;\n  height: 15vh;\n  margin-top: -30px;\n}\n\n.changeSuccess {\n  position: relative;\n  height: 10%;\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL25ldy1jaGFuZ2Vib3gvbmV3LWNoYW5nZWJveC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBRkE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFNRjs7QUFK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QUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQStCRjs7QUE3QkE7RUFDRSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBZ0NGOztBQTlCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWlDRjs7QUEvQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBa0NGOztBQWhDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFtQ0Y7O0FBakNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBb0NGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL25ldy1jaGFuZ2Vib3gvbmV3LWNoYW5nZWJveC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1zcGVjIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwICAudG9vbGJhci10aXRsZS1kZWZhdWx0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLmhlYWRlci1pY29ue1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogLTEycHhcclxufVxyXG4uaGVhZGVyLWZvbnR7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmhlYWRlci1udW1iZXJ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYmFyLWZvb3RlcntcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJhci1mb290ZXItdHViZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JjYmNiYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QkFDO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjdyZW07XHJcbn1cclxuLnRhYi1sb2FkLW1vZGVsLW9sZGVCYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCA2MCwgMTI1LCAwLjUpO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udGFiLWxvYWQtbW9kZWwtbmV3QmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgNjAsIDEyNSwgMC41KTtcclxuICB6LWluZGV4OiA5O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvYWQtbW9kZWwtY29uLW9sZGVCYXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiA0MHZoO1xyXG4gIGhlaWdodDogMTFyZW07XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG4ubG9hZC1tb2RlbC1jb24tbmV3QmFye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDogNDB2aDtcclxuICBoZWlnaHQ6IDExcmVtO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLmxvYWQtbW9kZWwtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcbi50YWItbG9hZC1tb2RlbC1pbnB1dC1vbGRlQmFyIHtcclxuICBoZWlnaHQ6IDIuOHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4udGFiLWxvYWQtbW9kZWwtaW5wdXQtbmV3YmFyIHtcclxuICBoZWlnaHQ6IDIuOHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4ubG9hZC1tb2RlbC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW4tdG9wOiAxLjJyZW07XHJcbn1cclxuLmxvYWQtbW9kZWwtZGVsZXRlIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiY2JjYmM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogI2JjYmNiYztcclxuICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmxvYWQtbW9kZWwtb2sge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiY2JjYmM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDViYWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNnJlbTtcclxufVxyXG4ub2xkT3BlbkJveHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbn1cclxuLm9sZFR1YmV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHRvcDogMTAlO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgbGluZWFyO1xyXG59XHJcbi5vbGRUdWJlLWhvdmVye1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUwcHgpO1xyXG59XHJcbi5vbGRGb250e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcwJTtcclxuICBsZWZ0OiAyNSU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5vbGRQaG9uZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5vbGRDbG9zZUJveE1pbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuLm9kbFVwRm9udHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2OCU7XHJcbiAgbGVmdDogMzQlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzQ0NDQ0NDtcclxuICBvcGFjaXR5OiAwLjQ5O1xyXG59XHJcbi5vbGRJbXB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNyU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dyb3VuZDogI0UwRjBGQTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBoZWlnaHQ6IDg1JTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5vbGRJbXAgPiBwe1xyXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxufVxyXG4ub2xkSW9uaWN7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIHJpZ2h0OiAxMSU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICM1OUFDRkE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLm9sZElvbmljID4gc3BhbntcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XHJcbn1cclxuLm5ld0ltcHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA3JTtcclxuICBsZWZ0OiAxMCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ3JvdW5kOiAjRTBGMEZBO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzQ0NDQ0NDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4ubmV3QXJyb3d7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi5uZXdDbG9zZUJveE1pbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgbGVmdDogNSU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG4ubmV3VXBGb250e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDczJTtcclxuICBsZWZ0OiAzNyU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNDQ0NDQ0O1xyXG59XHJcbi5uZXdQaG9uZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgbGluZWFyO1xyXG59XHJcbi5uZXdQaG9uZS1ob3ZlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MXZoKTtcclxufVxyXG4ubmV3VHViZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjUlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXI7XHJcbn1cclxuLm5ld1R1YmUtaG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MXZoKTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGxlZnQ6IDM3JTtcclxufVxyXG4ubmV3T3BlbkJveHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA5OCU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5uZXdGb250e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcwJTtcclxuICBsZWZ0OiAyNSU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gIG9wYWNpdHk6IDAuNDk7XHJcbn1cclxuLmNoYW5nZUFycm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA0MCU7XHJcbiAgei1pbmRleDogMDtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbn1cclxuLmNoYW5nZVN1Y2Nlc3N7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/common/new-changebox/new-changebox.page.ts":
/*!************************************************************!*\
  !*** ./src/app/common/new-changebox/new-changebox.page.ts ***!
  \************************************************************/
/*! exports provided: NewChangeboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChangeboxPage", function() { return NewChangeboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var scanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scanner */ "./node_modules/scanner/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/http-client.service */ "./src/app/shared/http-client.service.ts");





// 扫描码




const { Scanner } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
//
// import {Keyboard} from '@ionic-native/keyboard';
let NewChangeboxPage = class NewChangeboxPage {
    constructor(router, http, platform, eleRef, alertModal, route) {
        this.router = router;
        this.http = http;
        this.platform = platform;
        this.eleRef = eleRef;
        this.alertModal = alertModal;
        this.route = route;
        this.tubeCountOld = 0;
        this.patientCountOld = 0;
        this.tubeCountNew = 0;
        this.patientCountNew = 0;
        // 下方按钮
        this.type = '1';
        this.buttonText = '扫描原箱码';
    }
    ngOnInit() {
        this.modelDisplayOldBar = document.getElementsByClassName('tab-load-model-oldeBar')[0];
        this.modelDisplayNewBar = document.getElementsByClassName('tab-load-model-newBar')[0];
    }
    ionViewWillEnter() {
        this.SetType('1');
    }
    // 路由返回
    routeBack() {
        this.router.navigate(['/tab1']);
    }
    SetType(value) {
        switch (value) {
            case '1':
                this.type = '1';
                this.buttonText = '扫描原箱码';
                break;
            case '2':
                this.type = '2';
                this.buttonText = '确认标本数量';
                break;
            case '3':
                this.type = '3';
                this.buttonText = '扫描新箱码';
                break;
            case '4':
                this.type = '4';
                this.buttonText = '转箱';
                break;
            case '5':
                this.type = '5';
                this.buttonText = '完成';
                break;
        }
    }
    SetBarOldUndefined() {
        this.barcodeOld = undefined;
        this.tubeCountOld = 0;
        this.patientCountOld = 0;
        this.censusAddressNameOld = undefined;
        this.openBoxUserNameOld = undefined;
        this.openTimeOld = undefined;
    }
    SetBarNewUndefined() {
        this.barcodeNew = undefined;
        this.tubeCountNew = 0;
        this.patientCountNew = 0;
        this.censusAddressNameNew = undefined;
        this.openTimeNew = undefined;
        this.openBoxUserNameNew = undefined;
    }
    confirmTubeClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            switch (this.type) {
                case '1':
                    try {
                        const result = yield Scanner.openScanner();
                        switch (result['operation']) {
                            case 'SCAN':
                                this.ScanBoxOperate(result['result']);
                                break;
                            case 'MANUAL':
                                this.showCustom(true);
                                break;
                            case 'CANCEL':
                                break;
                        }
                    }
                    catch (e) {
                        this.showCustom(true);
                    }
                    break;
                case '2':
                    this.SetType('3');
                    setTimeout(() => { this.hover(); }, 200);
                    break;
                case '3':
                    try {
                        const result = yield Scanner.openScanner();
                        switch (result['operation']) {
                            case 'SCAN':
                                this.ScanBoxOperateNewBar(result['result']);
                                break;
                            case 'MANUAL':
                                this.showCustomNewBar(true);
                                break;
                            case 'CANCEL':
                                break;
                        }
                    }
                    catch (e) {
                        this.showCustomNewBar(true);
                    }
                    break;
                case '4':
                    this.confirmChange();
                    break;
                case '5':
                    this.SetType('1');
                    break;
            }
        });
    }
    // 原箱码页操作
    // 箱码
    ScanBoxOperate(barcode) {
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__["isNotNullOrUndefined"])(barcode) && barcode.trim() !== '') {
        }
        else {
            this.http.showToast('条码值为空，请重新输入！');
            return;
        }
        this.showCustom(false);
        this.OpenBoxOperate(barcode);
    }
    //  弹框
    showCustom(value) {
        this.SetBarOldUndefined();
        if (value) {
            this.modelDisplayOldBar['style']['display'] = 'inline-block';
            this.eleRef.nativeElement.querySelector('.tab-load-model-input-oldeBar').focus();
            const keyboard = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Keyboard;
            keyboard.show();
        }
        else {
            this.modelDisplayOldBar['style']['display'] = 'none';
        }
    }
    OpenBoxOperate(barcode) {
        const condition = {
            boxBarcode: barcode
        };
        this.http
            .get(`rcp/api/box/operate/queryCurrentBoxTubInfo`, condition, '查询当前采集箱中管信息', '', { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.barcodeOld = data['data']['boxBarcode'];
                this.tubeCountOld = Number(data['data']['tubeCount']);
                this.patientCountOld = Number(data['data']['patientCount']);
                this.censusAddressNameOld = data['data']['censusAddressName'];
                this.openBoxUserNameOld = data['data']['openBoxUserName'];
                this.openTimeOld = data['data']['openTime'];
                this.SetType('2');
            }
            else {
                this.SetBarOldUndefined();
            }
        });
    }
    // 新箱码操作
    showCustomNewBar(value) {
        this.SetBarNewUndefined();
        if (value) {
            this.modelDisplayNewBar['style']['display'] = 'inline-block';
            this.eleRef.nativeElement.querySelector('.tab-load-model-input-newbar').focus();
            const keyboard = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Keyboard;
            keyboard.show();
        }
        else {
            this.modelDisplayNewBar['style']['display'] = 'none';
        }
    }
    ScanBoxOperateNewBar(barcode) {
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__["isNotNullOrUndefined"])(barcode) && barcode.trim() !== '') {
        }
        else {
            this.http.showToast('条码值为空，请重新输入！');
            return;
        }
        this.showCustomNewBar(false);
        this.OpenBoxOperateNewBar(barcode);
    }
    OpenBoxOperateNewBar(barcode) {
        const condition = {
            boxBarcode: barcode
        };
        this.http
            .get(`rcp/api/box/operate/queryCurrentBoxTubInfo`, condition, '查询当前采集箱中管信息', '', { load: true })
            .subscribe(data => {
            if (data['isSuccess']) {
                this.barcodeNew = data['data']['boxBarcode'];
                this.tubeCountNew = Number(data['data']['tubeCount']);
                this.patientCountNew = Number(data['data']['patientCount']);
                this.censusAddressNameNew = data['data']['censusAddressName'];
                this.openBoxUserNameNew = data['data']['openBoxUserName'];
                this.openTimeNew = data['data']['openTime'];
                this.SetType('4');
            }
            else {
                this.SetBarNewUndefined();
            }
        });
    }
    // 转箱操作
    /**
     * 转换操作
     */
    confirmChange() {
        const condition = {
            newBoxBarcode: this.barcodeNew,
            oldBoxBarcode: this.barcodeOld
        };
        this.http
            .get('rcp/api/box/operate/transferBox', condition, '旧箱标本放入新转运箱', 'false', { load: true })
            .subscribe(data => {
            if (data['code'] === '0') {
                this.SetType('5');
            }
            else {
                if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__["isNotNullOrUndefined"])(data['message']) && data['message'] !== '') {
                    this.http.showToast(data['message']);
                }
                else {
                    this.http.showToast('换箱失败，请重试！' + data['message']);
                }
            }
        });
    }
    // 动画
    hover() {
        document.getElementsByClassName("newTube")[0].classList.add("newTube-hover");
        document.getElementsByClassName("newPhone")[0].classList.add("newPhone-hover");
    }
};
NewChangeboxPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
NewChangeboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-changebox',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-changebox.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/new-changebox/new-changebox.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-changebox.page.scss */ "./src/app/common/new-changebox/new-changebox.page.scss")).default]
    })
], NewChangeboxPage);



/***/ })

}]);
//# sourceMappingURL=common-new-changebox-new-changebox-module-es2015.js.map