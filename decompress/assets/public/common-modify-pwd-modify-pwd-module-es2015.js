(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-modify-pwd-modify-pwd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/modify-pwd/modify-pwd.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/modify-pwd/modify-pwd.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <div class=\"header-wrap\">\n        <span class=\"header-icon\" *ngIf=\"!pwdForced && (!strongPwdPolicy || (strongPwdPolicy && isStrongPwd))\" (click)=\"routeBack()\">\n          <ion-icon class=\"header-i\" name=\"arrow-back-outline\"></ion-icon>\n        </span>\n        <span class=\"header-title\">修改密码</span>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\" (click)=\"logout()\">\n      <ion-button>\n        <ion-icon class=\"header-i\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"main h100 bgw\">\n    <div class=\"chief\">\n      <div class=\"kv\">\n        <span class=\"k\"><span class=\"req\">*</span> 新密码</span>\n        <span class=\"v\"><input type=\"password\" [(ngModel)]=\"pwdObj.newPwd\"/></span>\n      </div>\n      <div class=\"kv\">\n        <span class=\"k\"><span class=\"req\">*</span> 确认密码</span>\n        <span class=\"v\"><input type=\"password\" [(ngModel)]=\"pwdObj.againPwd\" /></span>\n      </div>\n      <div class=\"result\">{{validResult}}</div>\n      <div class=\"rule-list\" *ngIf=\"strongPwdPolicy\">\n        <h3>强密码规则</h3>\n        <ul>\n          <li *ngFor=\"let item of ruleList;\"> {{item}} </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"ft\"> \n      <button class=\"btn-submit\" (click)=\"getKey()\" [disabled]=\"isSuccess\">提交</button>\n    </div>\n  </div>\n  \n</ion-content>");

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

/***/ "./src/app/common/modify-pwd/modify-pwd.module.ts":
/*!********************************************************!*\
  !*** ./src/app/common/modify-pwd/modify-pwd.module.ts ***!
  \********************************************************/
/*! exports provided: ModifyPwdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPwdModule", function() { return ModifyPwdModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/serviceCommon.module */ "./src/app/service/serviceCommon.module.ts");
/* harmony import */ var _modify_pwd_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modify-pwd.page */ "./src/app/common/modify-pwd/modify-pwd.page.ts");










let ModifyPwdModule = class ModifyPwdModule {
};
ModifyPwdModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
            _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _modify_pwd_page__WEBPACK_IMPORTED_MODULE_9__["ModifyPwdPage"] }])
        ],
        declarations: [_modify_pwd_page__WEBPACK_IMPORTED_MODULE_9__["ModifyPwdPage"]]
    })
], ModifyPwdModule);



/***/ }),

/***/ "./src/app/common/modify-pwd/modify-pwd.page.scss":
/*!********************************************************!*\
  !*** ./src/app/common/modify-pwd/modify-pwd.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.flr {\n  float: right;\n}\n\n.shadow-1 {\n  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.1);\n}\n\n.h100 {\n  height: 100%;\n}\n\n.oa {\n  overflow: auto;\n}\n\n.db {\n  display: block;\n}\n\n.tac {\n  text-align: center;\n}\n\n.tal {\n  text-align: left;\n}\n\n.fs16 {\n  font-size: 16px;\n}\n\n.fs12 {\n  font-size: 12px;\n}\n\n.mgb10 {\n  margin-bottom: 10px;\n}\n\n.bgw {\n  background: #fff;\n}\n\n.text-black {\n  color: #000;\n}\n\n.header-wrap {\n  color: #fff;\n}\n\n.header-icon,\n.header-title {\n  float: left;\n}\n\n.header-title {\n  margin-left: 20px;\n}\n\n.header-i {\n  font-size: 24px;\n  margin-top: 2px;\n}\n\n.loading-bar {\n  position: absolute;\n  top: 56px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 99;\n  background: #000;\n  opacity: 0.4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loading-spin {\n  color: #1095FF;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n\n.main {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.chief {\n  padding: 30px;\n  flex: auto;\n}\n\n.ft {\n  text-align: center;\n  padding: 10px;\n}\n\n.btn-submit {\n  background: #3880FF;\n  text-align: center;\n  letter-spacing: 2px;\n  color: #fff;\n  width: 100%;\n  padding: 15px;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n\n.btn-submit[disabled] {\n  background: #ccc;\n}\n\n.rule-list {\n  color: #999;\n}\n\n.rule-list h3 {\n  font-size: 0.9rem;\n  margin-bottom: 15px;\n}\n\n.rule-list ul {\n  list-style: decimal outside;\n  padding-left: 1.5em;\n}\n\n.rule-list li {\n  margin-bottom: 10px;\n}\n\n.kv {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.k {\n  white-space: nowrap;\n  width: 90px;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n}\n\n.v {\n  color: #999;\n  width: 100%;\n}\n\n.req {\n  color: #e00;\n}\n\ninput[type=password] {\n  padding: 4px;\n  border: 1px solid #ccc;\n  width: 100%;\n  font-size: 1rem;\n  border-radius: 5px;\n}\n\n.result {\n  height: 20px;\n  margin-bottom: 10px;\n  color: #FAAD14;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL21vZGlmeS1wd2QvbW9kaWZ5LXB3ZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFBSyxZQUFBO0FBRUw7O0FBREE7RUFBVSwwQ0FBQTtBQUtWOztBQUpBO0VBQU0sWUFBQTtBQVFOOztBQVBBO0VBQUksY0FBQTtBQVdKOztBQVZBO0VBQUksY0FBQTtBQWNKOztBQWJBO0VBQUssa0JBQUE7QUFpQkw7O0FBaEJBO0VBQUssZ0JBQUE7QUFvQkw7O0FBbkJBO0VBQU0sZUFBQTtBQXVCTjs7QUF0QkE7RUFBTSxlQUFBO0FBMEJOOztBQXpCQTtFQUFPLG1CQUFBO0FBNkJQOztBQTVCQTtFQUFLLGdCQUFBO0FBZ0NMOztBQS9CQTtFQUFZLFdBQUE7QUFtQ1o7O0FBakNBO0VBQWEsV0FBQTtBQXFDYjs7QUFwQ0E7O0VBQ2MsV0FBQTtBQXdDZDs7QUF2Q0E7RUFBYyxpQkFBQTtBQTJDZDs7QUExQ0E7RUFBVSxlQUFBO0VBQWUsZUFBQTtBQStDekI7O0FBN0NBO0VBQWEsa0JBQUE7RUFBa0IsU0FBQTtFQUFTLE9BQUE7RUFBTyxTQUFBO0VBQVMsUUFBQTtFQUFRLFdBQUE7RUFDOUQsZ0JBQUE7RUFBZ0IsWUFBQTtFQUNoQixhQUFBO0VBQWEsdUJBQUE7RUFBdUIsbUJBQUE7QUF5RHRDOztBQXhEQTtFQUFjLGNBQUE7RUFBYyxZQUFBO0VBQVksV0FBQTtFQUFXLFlBQUE7RUFBWSxVQUFBO0FBZ0UvRDs7QUE3REE7RUFBTSxZQUFBO0VBQVksYUFBQTtFQUFhLHNCQUFBO0FBbUUvQjs7QUFsRUE7RUFBTyxhQUFBO0VBQWEsVUFBQTtBQXVFcEI7O0FBdEVBO0VBQUksa0JBQUE7RUFBa0IsYUFBQTtBQTJFdEI7O0FBekVBO0VBQVksbUJBQUE7RUFBbUIsa0JBQUE7RUFBa0IsbUJBQUE7RUFBbUIsV0FBQTtFQUFXLFdBQUE7RUFBVyxhQUFBO0VBQWEsa0JBQUE7RUFBa0IsZUFBQTtBQW9Gekg7O0FBbkZBO0VBQXNCLGdCQUFBO0FBdUZ0Qjs7QUFyRkE7RUFBVyxXQUFBO0FBeUZYOztBQXhGRTtFQUFHLGlCQUFBO0VBQWlCLG1CQUFBO0FBNEZ0Qjs7QUEzRkU7RUFBRywyQkFBQTtFQUEyQixtQkFBQTtBQStGaEM7O0FBOUZFO0VBQUcsbUJBQUE7QUFpR0w7O0FBL0ZBO0VBQUksYUFBQTtFQUFhLG1CQUFBO0VBQW1CLG1CQUFBO0FBcUdwQzs7QUFwR0E7RUFBRyxtQkFBQTtFQUFtQixXQUFBO0VBQVcsY0FBQTtFQUFjLGlCQUFBO0FBMkcvQzs7QUExR0E7RUFBRyxXQUFBO0VBQVcsV0FBQTtBQStHZDs7QUE5R0E7RUFBSyxXQUFBO0FBa0hMOztBQWpIQTtFQUFxQixZQUFBO0VBQVksc0JBQUE7RUFBc0IsV0FBQTtFQUFXLGVBQUE7RUFBZSxrQkFBQTtBQXlIakY7O0FBdkhBO0VBQVEsWUFBQTtFQUFZLG1CQUFBO0VBQW1CLGNBQUE7QUE2SHZDIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL21vZGlmeS1wd2QvbW9kaWZ5LXB3ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgIC50b29sYmFyLXRpdGxlLWRlZmF1bHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZmxye2Zsb2F0OnJpZ2h0O31cbi5zaGFkb3ctMXtib3gtc2hhZG93OjAgMCA0cHggMHB4IHJnYmEoMCwwLDAsMC4xKTt9XG4uaDEwMHtoZWlnaHQ6MTAwJTt9XG4ub2F7b3ZlcmZsb3c6YXV0bzt9XG4uZGJ7ZGlzcGxheTpibG9jazt9XG4udGFje3RleHQtYWxpZ246Y2VudGVyO31cbi50YWx7dGV4dC1hbGlnbjpsZWZ0O31cbi5mczE2e2ZvbnQtc2l6ZToxNnB4O31cbi5mczEye2ZvbnQtc2l6ZToxMnB4O31cbi5tZ2IxMHttYXJnaW4tYm90dG9tOjEwcHg7fVxuLmJnd3tiYWNrZ3JvdW5kOiNmZmY7fVxuLnRleHQtYmxhY2t7Y29sb3I6IzAwMDt9XG5cbi5oZWFkZXItd3JhcHtjb2xvcjojZmZmO31cbi5oZWFkZXItaWNvbixcbi5oZWFkZXItdGl0bGV7ZmxvYXQ6bGVmdDt9XG4uaGVhZGVyLXRpdGxle21hcmdpbi1sZWZ0OjIwcHg7fVxuLmhlYWRlci1pe2ZvbnQtc2l6ZToyNHB4O21hcmdpbi10b3A6MnB4O31cblxuLmxvYWRpbmctYmFye3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1NnB4O2xlZnQ6MDtib3R0b206MDtyaWdodDowO3otaW5kZXg6OTk7XG4gIGJhY2tncm91bmQ6IzAwMDtvcGFjaXR5OjAuNDtcbiAgZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO31cbi5sb2FkaW5nLXNwaW57Y29sb3I6IzEwOTVGRjtoZWlnaHQ6NTBweDt3aWR0aDo1MHB4O3otaW5kZXg6MTAwO29wYWNpdHk6MTt9XG5cblxuLm1haW57aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt9XG4uY2hpZWZ7cGFkZGluZzozMHB4O2ZsZXg6YXV0bzt9XG4uZnR7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoxMHB4O31cblxuLmJ0bi1zdWJtaXR7YmFja2dyb3VuZDojMzg4MEZGO3RleHQtYWxpZ246Y2VudGVyO2xldHRlci1zcGFjaW5nOjJweDtjb2xvcjojZmZmO3dpZHRoOjEwMCU7cGFkZGluZzoxNXB4O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxcmVtO31cbi5idG4tc3VibWl0W2Rpc2FibGVkXXtiYWNrZ3JvdW5kOiNjY2M7fVxuXG4ucnVsZS1saXN0e2NvbG9yOiM5OTk7XG4gIGgze2ZvbnQtc2l6ZTowLjlyZW07bWFyZ2luLWJvdHRvbToxNXB4O31cbiAgdWx7bGlzdC1zdHlsZTpkZWNpbWFsIG91dHNpZGU7cGFkZGluZy1sZWZ0OjEuNWVtO31cbiAgbGl7bWFyZ2luLWJvdHRvbToxMHB4O31cbn1cbi5rdntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1ib3R0b206MTVweDt9XG4ua3t3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6OTBweDtmbGV4LXNocmluazowO2ZvbnQtc2l6ZTowLjlyZW07fVxuLnZ7Y29sb3I6Izk5OTt3aWR0aDoxMDAlO31cbi5yZXF7Y29sb3I6I2UwMDt9XG5pbnB1dFt0eXBlPXBhc3N3b3JkXXtwYWRkaW5nOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7d2lkdGg6MTAwJTtmb250LXNpemU6MXJlbTtib3JkZXItcmFkaXVzOjVweDt9XG5cbi5yZXN1bHR7aGVpZ2h0OjIwcHg7bWFyZ2luLWJvdHRvbToxMHB4O2NvbG9yOiNGQUFEMTQ7fVxuIl19 */");

/***/ }),

/***/ "./src/app/common/modify-pwd/modify-pwd.page.ts":
/*!******************************************************!*\
  !*** ./src/app/common/modify-pwd/modify-pwd.page.ts ***!
  \******************************************************/
/*! exports provided: ModifyPwdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPwdPage", function() { return ModifyPwdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/http-client.service */ "./src/app/shared/http-client.service.ts");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var scanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! scanner */ "./node_modules/scanner/dist/esm/index.js");








// 扫描码


const { Scanner } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let ModifyPwdPage = class ModifyPwdPage {
    constructor(router, navCtrl, http, route, eleRef, alertModal, platform) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.route = route;
        this.eleRef = eleRef;
        this.alertModal = alertModal;
        this.platform = platform;
        this.pwdObj = {
            newPwd: undefined,
            againPwd: undefined
        };
        this.showLoading = false;
        this.strongPwdPolicy = false;
        this.isStrongPwd = false; // 判断参数是否为强密码
        this.ruleList = [];
        this.isSuccess = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.init();
    }
    init() {
        this.pwdForced = sessionStorage.getItem('pwdForced') === 'true';
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(sessionStorage.getItem('loginUserId'))) {
            this.loginUserId = sessionStorage.getItem('loginUserId');
        }
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(sessionStorage.getItem('rcp_open_pw_level_verification_switch'))) {
            this.strongPwdPolicy = sessionStorage.getItem('rcp_open_pw_level_verification_switch') === 'true';
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(sessionStorage.getItem('isStrongPwd'))) {
                this.isStrongPwd = sessionStorage.getItem('isStrongPwd') === '1';
            }
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(sessionStorage.getItem('rcp_open_pwd_rule'))) {
                this.ruleList = sessionStorage.getItem('rcp_open_pwd_rule').split('||');
            }
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(sessionStorage.getItem('rcp_open_pwd_reg'))) {
                this.strongPwdRegExp = sessionStorage.getItem('rcp_open_pwd_reg');
            }
        }
    }
    navTo(dest) {
        this.router.navigate([dest]);
    }
    // 路由返回
    routeBack() {
        //this.router.navigate(['/SelectCensusAddressTree']);
        this.router.navigate(['/tabs/tab1']);
    }
    // logout
    showLogoutAlert() {
        this.alertModal.alert('', '确认退出?', [
            { text: '取消', onPress: () => { } },
            {
                text: '退出', onPress: () => {
                    var ip = sessionStorage.getItem('ip');
                    sessionStorage.clear();
                    sessionStorage.setItem('ip', ip);
                    this.router.navigate(['/login']);
                }
            }
        ]);
    }
    logout() {
        this.showCustom(false);
        this.showLogoutAlert();
    }
    // 弹框
    showCustom(value) {
        if (value) {
            setTimeout(() => {
                this.eleRef.nativeElement.querySelector('.tab-load-model-input').focus();
            }, 10);
            const keyboard = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Keyboard;
            keyboard.show();
        }
        else {
        }
    }
    getKey() {
        this.http
            .getNotHeard(`rcp/open/api/key`)
            .subscribe(data => {
            if (data['code'] === '0') {
                this.encodeKey = data['data']['encode_key'];
                this.key = data['data']['key'];
                this.modifyPwd();
            }
        });
    }
    modifyPwd() {
        let flag;
        if (!this.pwdObj.newPwd || !this.pwdObj.againPwd) {
            this.validResult = '密码不能为空';
            return false;
        }
        if (/\s/.test(this.pwdObj.newPwd) || /\s/.test(this.pwdObj.newPwd)) {
            this.validResult = '密码不能包含空格';
            return false;
        }
        if (this.pwdObj.newPwd != this.pwdObj.againPwd) {
            this.validResult = '新密码与确认密码不同，请重新输入';
            return false;
        }
        if (this.strongPwdPolicy) {
            if (!new RegExp(this.strongPwdRegExp).test(this.pwdObj.newPwd)) {
                this.validResult = '新密码不符合强密码规则，请重新输入';
                return false;
            }
        }
        this.validResult = '';
        const newPwd = window['encryptByDES'](this.pwdObj.newPwd, this.encodeKey);
        const cond = {
            password: newPwd,
            //userId: this.loginUserId,
            key: this.key
        };
        this.http.post('rcp/api/user/modifyPassword', cond, '修改密码', '修改密码')
            .subscribe(data => {
            if (data['isSuccess']) {
                this.validResult = '密码修改成功，请重新登录';
                this.isSuccess = true;
                this.pwdObj.newPwd = undefined;
                this.pwdObj.againPwd = undefined;
                setTimeout(() => {
                    let ip = sessionStorage.getItem('ip');
                    sessionStorage.clear();
                    sessionStorage.setItem('ip', ip);
                    this.isSuccess = false;
                    this.validResult = '';
                    this.router.navigate(['/']);
                }, 2000);
            }
            else {
                this.validResult = '密码修改失败，请稍后再试';
            }
        });
    }
};
ModifyPwdPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
ModifyPwdPage.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@routeAnimation',] }]
};
ModifyPwdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-pwd',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modify-pwd.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/modify-pwd/modify-pwd.page.html")).default,
        animations: [
            _shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modify-pwd.page.scss */ "./src/app/common/modify-pwd/modify-pwd.page.scss")).default]
    })
], ModifyPwdPage);



/***/ })

}]);
//# sourceMappingURL=common-modify-pwd-modify-pwd-module-es2015.js.map