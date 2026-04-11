(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/about/about.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/about/about.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <div class=\"header-wrap\">\n        <span class=\"header-icon\">\n          <ion-icon class=\"header-i\" name=\"arrow-back-outline\" (click)=\"routeBack()\"></ion-icon>\n        </span>\n        <span class=\"header-title\">{{aboutTitle}}</span>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"h100\" #intro>\n    \n    <!-- 关于/首页 -->\n    <div class=\"h100 bgw\" *ngIf=\"currentView == 'home'\">\n      <div class=\"main\">\n        <div class=\"chief\">\n          <div class=\"tac\" style=\"padding-top:80px;\">\n            <img src=\"/assets/icon/icon_sys.png\" alt=\"\" width=\"100\" height=\"100\" class=\"mgb10\" />\n            <p class=\"fs16 mgb10\">东软常态化疫情病原体<br />检测系统</p>\n            <p>Version {{checkVersion}}</p>\n          </div>\n          <ul class=\"about-nav\">\n              <li (click)=\"switchTo('update')\"><span>系统更新</span></li>\n              <li (click)=\"switchTo('feature')\"><span>功能介绍</span></li>\n              <li><a class=\"db text-black\" target=\"_blank\" href=\"{{sozaiServer + '/manual/12.AppSendManual.pdf'}}\">操作手册</a></li>\n              \n          </ul>\n        </div>\n        <div class=\"ft\"> 东软集团股份有限公司 版权所有 </div>\n      </div>\n    </div>\n    <!-- 关于/首页 -->\n\n    <!-- 关于/功能介绍 -->\n    <div class=\"h100 bgw oa\" *ngIf=\"currentView == 'feature'\">\n      <div class=\"intro\">\n        <div class=\"mgb10 tal\">\n          <span class=\"btn-play\" [class.now]=\"videoPlayingIndex==0\" title=\"{{sozaiServer + '/feature/app_sample.mp4'}}\">采集App</span>\n          <span class=\"btn-play\" [class.now]=\"videoPlayingIndex==1\" title=\"{{sozaiServer + '/feature/app_sample_register.mp4'}}\">采集App注册</span>\n        </div>\n        <video id=\"video\" src=\"{{sozaiServer + '/feature/app_sample.mp4'}}\" controls preload=\"auto\"></video>\n      </div>\n    </div>\n    <!-- 关于/功能介绍 -->\n\n    <!-- 关于/系统更新 -->\n    <div class=\"h100 bgw oa\" *ngIf=\"currentView == 'update'\">\n      <div class=\"update-blk\" *ngFor=\"let item of updateList\" (click)=\"switchTo('updateDetail', item.version)\">\n        <p>{{item.version}}主要更新</p>\n        <p class=\"date\">{{item.date}}</p>\n      </div>\n    </div>\n    <!-- 关于/系统更新 -->\n\n    <!-- 关于/系统更新明细 -->\n    <div class=\"h100 bgw intro oa\" *ngIf=\"currentView == 'updateDetail'\" [innerHTML]=\"updateDetailItem\">\n      \n    </div>\n    <!-- 关于/系统更新明细 -->\n\n  </div>\n  \n</ion-content>");

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

/***/ "./src/app/common/about/about.module.ts":
/*!**********************************************!*\
  !*** ./src/app/common/about/about.module.ts ***!
  \**********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/serviceCommon.module */ "./src/app/service/serviceCommon.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about.page */ "./src/app/common/about/about.page.ts");










let AboutModule = class AboutModule {
};
AboutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
            _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _about_page__WEBPACK_IMPORTED_MODULE_9__["AboutPage"] }])
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_9__["AboutPage"]]
    })
], AboutModule);



/***/ }),

/***/ "./src/app/common/about/about.page.scss":
/*!**********************************************!*\
  !*** ./src/app/common/about/about.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.flr {\n  float: right;\n}\n\n.shadow-1 {\n  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.1);\n}\n\n.h100 {\n  height: 100%;\n}\n\n.oa {\n  overflow: auto;\n}\n\n.db {\n  display: block;\n}\n\n.tac {\n  text-align: center;\n}\n\n.tal {\n  text-align: left;\n}\n\n.fs16 {\n  font-size: 16px;\n}\n\n.fs12 {\n  font-size: 12px;\n}\n\n.mgb10 {\n  margin-bottom: 10px;\n}\n\n.bgw {\n  background: #fff;\n}\n\n.text-black {\n  color: #000;\n}\n\n.header-wrap {\n  color: #fff;\n}\n\n.header-icon,\n.header-title {\n  float: left;\n}\n\n.header-title {\n  margin-left: 20px;\n}\n\n.header-i {\n  font-size: 24px;\n  margin-top: 2px;\n}\n\n.loading-bar {\n  position: absolute;\n  top: 56px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 99;\n  background: #000;\n  opacity: 0.4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loading-spin {\n  color: #1095FF;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n\n.intro {\n  padding: 10px;\n  text-align: center;\n}\n\n:host ::ng-deep .intro p {\n  margin-bottom: 10px;\n  text-align: left;\n}\n\n:host ::ng-deep .intro img {\n  max-width: 100%;\n  margin-bottom: 10px;\n}\n\n:host ::ng-deep .intro video {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.about-nav {\n  padding: 40px 60px;\n}\n\n.about-nav li {\n  border-bottom: 1px solid #eee;\n  padding: 10px 0;\n  background: url(\"/assets/icon/kb-arrow-right.svg\") no-repeat center right;\n  background-size: 24px 24px;\n}\n\n.about-nav li:first-child {\n  border-top: 1px solid #eee;\n}\n\n.update-blk {\n  border-bottom: 1px solid #eee;\n  margin-bottom: 8px;\n  padding: 8px;\n  color: #323130;\n  background: url(\"/assets/icon/kb-arrow-right.svg\") no-repeat center right;\n  background-size: 24px 24px;\n}\n\n.update-blk .date {\n  font-size: 12px;\n  color: #000;\n  margin-top: 5px;\n}\n\n.main {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.chief {\n  padding: 0;\n  background: #fff;\n  flex: auto;\n}\n\n.ft {\n  text-align: center;\n  padding: 20px 10px;\n  color: #A19F9D;\n  font-size: 12px;\n}\n\n.btn-play {\n  display: inline-block;\n  margin-right: 5px;\n  padding: 10px 15px;\n  background: #eee;\n}\n\n.btn-play.now {\n  background: #1095FF;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUFLLFlBQUE7QUFFTDs7QUFEQTtFQUFVLDBDQUFBO0FBS1Y7O0FBSkE7RUFBTSxZQUFBO0FBUU47O0FBUEE7RUFBSSxjQUFBO0FBV0o7O0FBVkE7RUFBSSxjQUFBO0FBY0o7O0FBYkE7RUFBSyxrQkFBQTtBQWlCTDs7QUFoQkE7RUFBSyxnQkFBQTtBQW9CTDs7QUFuQkE7RUFBTSxlQUFBO0FBdUJOOztBQXRCQTtFQUFNLGVBQUE7QUEwQk47O0FBekJBO0VBQU8sbUJBQUE7QUE2QlA7O0FBNUJBO0VBQUssZ0JBQUE7QUFnQ0w7O0FBL0JBO0VBQVksV0FBQTtBQW1DWjs7QUFqQ0E7RUFBYSxXQUFBO0FBcUNiOztBQXBDQTs7RUFDYyxXQUFBO0FBd0NkOztBQXZDQTtFQUFjLGlCQUFBO0FBMkNkOztBQTFDQTtFQUFVLGVBQUE7RUFBZSxlQUFBO0FBK0N6Qjs7QUE3Q0E7RUFBYSxrQkFBQTtFQUFrQixTQUFBO0VBQVMsT0FBQTtFQUFPLFNBQUE7RUFBUyxRQUFBO0VBQVEsV0FBQTtFQUM5RCxnQkFBQTtFQUFnQixZQUFBO0VBQ2hCLGFBQUE7RUFBYSx1QkFBQTtFQUF1QixtQkFBQTtBQXlEdEM7O0FBeERBO0VBQWMsY0FBQTtFQUFjLFlBQUE7RUFBWSxXQUFBO0VBQVcsWUFBQTtFQUFZLFVBQUE7QUFnRS9EOztBQTlEQTtFQUFPLGFBQUE7RUFBYSxrQkFBQTtBQW1FcEI7O0FBbEVBO0VBQXlCLG1CQUFBO0VBQW1CLGdCQUFBO0FBdUU1Qzs7QUF0RUE7RUFBMkIsZUFBQTtFQUFlLG1CQUFBO0FBMkUxQzs7QUExRUE7RUFBNkIsY0FBQTtFQUFjLFdBQUE7RUFBVyxtQkFBQTtBQWdGdEQ7O0FBOUVBO0VBQVksa0JBQUE7QUFrRlo7O0FBakZBO0VBQWMsNkJBQUE7RUFBNkIsZUFBQTtFQUN6Qyx5RUFBQTtFQUNBLDBCQUFBO0FBc0ZGOztBQXBGQTtFQUEwQiwwQkFBQTtBQXdGMUI7O0FBdEZBO0VBQVksNkJBQUE7RUFBNkIsa0JBQUE7RUFBa0IsWUFBQTtFQUFZLGNBQUE7RUFDckUseUVBQUE7RUFDQSwwQkFBQTtBQTZGRjs7QUEzRkE7RUFBa0IsZUFBQTtFQUFlLFdBQUE7RUFBVyxlQUFBO0FBaUc1Qzs7QUE5RkE7RUFBTSxZQUFBO0VBQVksYUFBQTtFQUFhLHNCQUFBO0FBb0cvQjs7QUFuR0E7RUFBTyxVQUFBO0VBQVUsZ0JBQUE7RUFBZ0IsVUFBQTtBQXlHakM7O0FBeEdBO0VBQUksa0JBQUE7RUFBa0Isa0JBQUE7RUFBa0IsY0FBQTtFQUFjLGVBQUE7QUErR3REOztBQTdHQTtFQUFVLHFCQUFBO0VBQXFCLGlCQUFBO0VBQWlCLGtCQUFBO0VBQWtCLGdCQUFBO0FBb0hsRTs7QUFuSEE7RUFBYyxtQkFBQTtFQUFtQixXQUFBO0FBd0hqQyIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgIC50b29sYmFyLXRpdGxlLWRlZmF1bHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZmxye2Zsb2F0OnJpZ2h0O31cbi5zaGFkb3ctMXtib3gtc2hhZG93OjAgMCA0cHggMHB4IHJnYmEoMCwwLDAsMC4xKTt9XG4uaDEwMHtoZWlnaHQ6MTAwJTt9XG4ub2F7b3ZlcmZsb3c6YXV0bzt9XG4uZGJ7ZGlzcGxheTpibG9jazt9XG4udGFje3RleHQtYWxpZ246Y2VudGVyO31cbi50YWx7dGV4dC1hbGlnbjpsZWZ0O31cbi5mczE2e2ZvbnQtc2l6ZToxNnB4O31cbi5mczEye2ZvbnQtc2l6ZToxMnB4O31cbi5tZ2IxMHttYXJnaW4tYm90dG9tOjEwcHg7fVxuLmJnd3tiYWNrZ3JvdW5kOiNmZmY7fVxuLnRleHQtYmxhY2t7Y29sb3I6IzAwMDt9XG5cbi5oZWFkZXItd3JhcHtjb2xvcjojZmZmO31cbi5oZWFkZXItaWNvbixcbi5oZWFkZXItdGl0bGV7ZmxvYXQ6bGVmdDt9XG4uaGVhZGVyLXRpdGxle21hcmdpbi1sZWZ0OjIwcHg7fVxuLmhlYWRlci1pe2ZvbnQtc2l6ZToyNHB4O21hcmdpbi10b3A6MnB4O31cblxuLmxvYWRpbmctYmFye3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1NnB4O2xlZnQ6MDtib3R0b206MDtyaWdodDowO3otaW5kZXg6OTk7XG4gIGJhY2tncm91bmQ6IzAwMDtvcGFjaXR5OjAuNDtcbiAgZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO31cbi5sb2FkaW5nLXNwaW57Y29sb3I6IzEwOTVGRjtoZWlnaHQ6NTBweDt3aWR0aDo1MHB4O3otaW5kZXg6MTAwO29wYWNpdHk6MTt9XG5cbi5pbnRyb3twYWRkaW5nOjEwcHg7dGV4dC1hbGlnbjpjZW50ZXI7fVxuOmhvc3QgOjpuZy1kZWVwIC5pbnRybyBwe21hcmdpbi1ib3R0b206MTBweDt0ZXh0LWFsaWduOmxlZnQ7fVxuOmhvc3QgOjpuZy1kZWVwIC5pbnRybyBpbWd7bWF4LXdpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbToxMHB4O31cbjpob3N0IDo6bmctZGVlcCAuaW50cm8gdmlkZW97ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21hcmdpbi1ib3R0b206MTBweDt9XG5cbi5hYm91dC1uYXYge3BhZGRpbmc6NDBweCA2MHB4O31cbi5hYm91dC1uYXYgbGl7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtwYWRkaW5nOjEwcHggMDtcbiAgYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaWNvbi9rYi1hcnJvdy1yaWdodC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXNpemU6MjRweCAyNHB4O1xufVxuLmFib3V0LW5hdiBsaTpmaXJzdC1jaGlsZHtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlOyB9XG5cbi51cGRhdGUtYmxre2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWU7bWFyZ2luLWJvdHRvbTo4cHg7cGFkZGluZzo4cHg7Y29sb3I6IzMyMzEzMDtcbiAgYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaWNvbi9rYi1hcnJvdy1yaWdodC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0OyBcbiAgYmFja2dyb3VuZC1zaXplOjI0cHggMjRweDtcbn1cbi51cGRhdGUtYmxrIC5kYXRle2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiMwMDA7bWFyZ2luLXRvcDo1cHg7fVxuXG5cbi5tYWlue2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47fVxuLmNoaWVme3BhZGRpbmc6MDtiYWNrZ3JvdW5kOiNmZmY7ZmxleDphdXRvO31cbi5mdHt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHggMTBweDtjb2xvcjojQTE5RjlEO2ZvbnQtc2l6ZToxMnB4O31cblxuLmJ0bi1wbGF5e2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDo1cHg7cGFkZGluZzoxMHB4IDE1cHg7YmFja2dyb3VuZDojZWVlO31cbi5idG4tcGxheS5ub3d7YmFja2dyb3VuZDojMTA5NUZGO2NvbG9yOiNmZmY7fVxuIl19 */");

/***/ }),

/***/ "./src/app/common/about/about.page.ts":
/*!********************************************!*\
  !*** ./src/app/common/about/about.page.ts ***!
  \********************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
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
let AboutPage = class AboutPage {
    constructor(router, navCtrl, http, route, eleRef, alertModal, platform) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.route = route;
        this.eleRef = eleRef;
        this.alertModal = alertModal;
        this.platform = platform;
        this.showLoading = false;
        this.checkVersion = sessionStorage.getItem('checkVersion');
        ////
        this.viewTitleMaps = [
            { view: 'home', title: '关于系统' },
            { view: 'feature', title: '功能介绍' },
            { view: 'update', title: '系统通知' },
            { view: 'updateDetail', title: '系统通知-明细' },
        ];
        this.currentView = this.viewTitleMaps[0].view;
        this.aboutTitle = this.viewTitleMaps[0].title;
        this.updateList = [
            {
                version: '1.5.1.0',
                date: '2021年4月14日',
                content: `修复采集APP人员类别随机不显示||
            修复采集APP选择采集点菜单多空值选项||
            修复采集送检接收app，当用户30分钟不操作时，应给予用户提示并退出到登录界面||
            修复转运箱查患者 ，根据箱出的信息不全||
            修复采集app转运箱列表三级菜单应该返回二级菜单，而不是一级菜单||
            修复采集app注册医疗机构列表||
            修复app转运箱列表 管码显示为null||
            采集APP和采集PC，两个帐号扫描同一个试管时，增加提示||
            采集APP输入数字的地方弹出数字键盘||
            采集APP扫描转运箱码后能显示此箱是否被其它人使用过||
            采集APP第二次来检测时，能将手机号带出||
            送检、接收APP的界面与采集进行区分||
            采集APP注册时增加身份证强校验||
            增加被采样人员的人员分类||
            采集APP扫描试管码是出现特殊字符引发问题||
            被采样人信息识别添加手工录入备注||
            采集人员注册注册时目前只能选择市，增加区的选择||
            采集时证件类型为其他填写相关信息||
            `
            },
            {
                version: '1.4.1.0',
                date: '2021年2月24日',
                content: `APP端登录时选择内外网||
                采集APP身份证扫描时增加校验||
                修复15位身份证没有校验||
                修复采集App采集地址和PC端显示对不上||
                修复采集APP选择采集点频发不能展开收回||
                修复采集APP长时间不操作，扫码开箱后只记录操作时间||
                增加采集APP/PC中不显示已经停用的采集点
            `
            }
        ];
        this.videoPlayingIndex = -1;
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(sessionStorage.getItem('loginUserName'))) {
            this.loginUserName = sessionStorage.getItem('loginUserName');
        }
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.init();
    }
    init() {
        if (sessionStorage.getItem('sozaiServer') === null) {
            this.http
                .getNotHeard(`rcp/api/sysConfig/open/getOpenConfig?configKey=rcp_open_query_URL`)
                .subscribe(data => {
                if (data['code'] === '0') {
                    sessionStorage.setItem('sozaiServer', data['data']['configValue']);
                    this.sozaiServer = data['data']['configValue'] + '/assets/about';
                }
            });
        }
        else {
            this.sozaiServer = sessionStorage.getItem('sozaiServer') + '/assets/about';
        }
    }
    navTo(dest) {
        this.router.navigate([dest]);
    }
    // 路由返回
    routeBack() {
        if (this.currentView == 'home') {
            this.router.navigate(['/tabs/tab1']);
        }
        else if (this.currentView == 'updateDetail') {
            this.switchTo('update');
        }
        else {
            this.switchTo('home');
        }
    }
    // logout
    showLogoutAlert() {
        this.alertModal.alert('', '确认退出?', [
            { text: '取消', onPress: () => { } },
            {
                text: '退出', onPress: () => {
                    sessionStorage.clear();
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
    ////
    switchTo(view, params = '') {
        let filtedTarget = this.viewTitleMaps.filter((item, idx) => {
            return item.view == view;
        });
        this.currentView = view;
        this.aboutTitle = filtedTarget[0].title;
        if (view == 'updateDetail') {
            let output = '';
            let updateContent = this.updateList.filter((item, idx) => {
                return item.version == params;
            });
            let arr = updateContent[0].content.split('||');
            arr.forEach((item) => {
                if (item.indexOf('/version/') > -1) {
                    output += '<img  src="' + this.sozaiServer + item + '" />';
                }
                else {
                    output += '<p>' + item + '</p>';
                }
            });
            this.updateDetailItem = output;
        }
        if (view == 'feature') {
            setTimeout(() => {
                let arr = this.intro.nativeElement.getElementsByClassName('btn-play');
                if (arr.length) {
                    this.videoPlayingIndex = 0;
                    let video = this.intro.nativeElement.getElementsByTagName('video')[0];
                    for (let i = 0; i < arr.length; i++) {
                        let src = arr[i].getAttribute('title');
                        arr[i].onclick = () => {
                            this.videoPlayingIndex = i;
                            video.src = src;
                            video.play();
                        };
                    }
                }
            }, 100);
        }
    }
};
AboutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["ModalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
AboutPage.propDecorators = {
    intro: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['intro',] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@routeAnimation',] }]
};
AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/about/about.page.html")).default,
        animations: [
            _shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.page.scss */ "./src/app/common/about/about.page.scss")).default]
    })
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=common-about-about-module-es2015.js.map