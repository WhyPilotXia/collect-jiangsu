(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <span style=\"font-size: 0.9rem\">{{loginTitle}}</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"tabContentCss\">\n\n      <div class=\"login-font-bar\">\n          <div class=\"login-font\">\n              标本采集\n              <!-- <ng-container *ngIf=\"isSelectIp == 'true'\">\n                  <select #selectIp [(ngModel)]=\"SelectIp\" (ngModelChange)=\"changeIp($event,selectIp.selectedIndex)\" class=\"select-ip\">\n                      <ng-container *ngFor=\"let ip of ipList\">\n                          <option [value]=\"ip.ip\" >{{ip.name}}</option>\n                      </ng-container>\n                  </select>\n              </ng-container> -->\n          </div>\n          <div class=\"oblique-left\">\n\n          </div>\n          <div class=\"oblique-right\">\n\n          </div>\n      </div>\n\n      <div class=\"user-bar\">\n        <div class=\"list\">\n            <div class=\"list-item\">\n                <span>\n                    <img src=\"../../assets/icon/name.svg\">\n                </span>\n                <div class=\"w100 item-login\">\n                    <input type=\"text\" class=\"input-not-barcode\" placeholder=\"账号/手机号\" [(ngModel)]=\"name\">\n                </div>\n            </div>\n            <div class=\"list-item\">\n                <span>\n                    <img src=\"../../assets/icon/password.svg\">\n                </span>\n                <div class=\"w100 item-login\">\n                    <input type=\"password\"  class=\"input-not-barcode\" placeholder=\"首次登录密码为身份证后六位\" [(ngModel)]=\"password\">\n                </div>\n                <!--<span>密码</span>-->\n            </div>\n            <!--<div class=\"list-item\">-->\n                  <!--<span>-->\n                    <!--<img src=\"../../assets/icon/activity.svg\">-->\n                <!--</span>-->\n                <!--<div>-->\n                    <!--<input type=\"password\"  class=\"input-not-barcode\" placeholder=\"请输入活动码\" [(ngModel)]=\"password\">-->\n                <!--</div>-->\n            <!--</div>-->\n        </div>\n        </div>\n        <ng-container>\n            <div class=\"ok-Lock-button\" *ngIf=\"isLocking; else Lock\">已锁定</div>\n        </ng-container>\n        <ng-template #Lock>\n             <div class=\"ok-button\" (click) = \"getRcpName(true)\">\n                 <ng-container *ngIf=\"!isLoad;else load\">\n                     登录\n                 </ng-container>\n                 <ng-template #load>\n                     <ion-spinner icon=\"android\" style=\"color: white\"></ion-spinner>\n                 </ng-template>\n             </div>\n        </ng-template>\n        <div class=\"not-pass\">\n            <span (click)=\"registerClick()\">注册</span>\n            <span (click)=\"updateRegisterClick()\">修改用户信息</span>\n        </div>\n\n        <div class=\"\" style=\"text-align:center;margin-top:30px;\" *ngIf=\"isOpenOfflineButton && isUseOfflineMode\">\n            <p style=\"margin-bottom:10px;font-size:0.8rem;color:#999;\">如果您网络不通，可使用离线模式</p>\n            <button (click)=\"toggleOffline()\" style=\"background:#fff;font-size:0.8rem;color:#349EEC;border:1px solid #349EEC; padding:10px 20px;border-radius:3px;\">进入离线模式</button>\n        </div>\n\n</ion-content>\n\n<ion-footer>\n    <div style=\"text-align: center\">\n        <span style=\"color: #c4c4c4\">{{city}}-{{checkVersion}}</span>\n    </div>\n</ion-footer>\n\n\n<div class=\"progress-model\">\n\n    <div class=\"progress-container\">\n        <div style=\"height: 18px\">请稍等，正在下载升级包</div>\n        <div class=\"show-info\">\n            <div class=\"progress\">\n                <Progress [percent]=\"'10'\" [position]=\"'normal'\" id=\"progressSlip\"></Progress>\n            </div>\n            <div aria-hidden=\"true\"><span id=\"progressNumber\">0</span>%</div>\n        </div>\n        <WhiteSpace [size]=\"'xl'\"></WhiteSpace>\n    </div>\n\n</div>\n\n<ng-container *ngIf=\"city == '登录提示'\">\n<div class=\"login-load-model\">\n    <div class=\"load-model-con\">\n        <div class=\"load-model-title\">重要提示</div>\n        <div class=\"load-model-div\">\n            <ng-container *ngIf=\"city == '哈尔滨'\">\n                <div>此版本为“哈尔滨市专用版”，其它城市禁止使用。</div>\n            </ng-container>\n            <ng-container *ngIf=\"city == '绥化'\">\n                <div>此版本为“绥化市专用版”，其它城市禁止使用。</div>\n            </ng-container>\n            <ng-container *ngIf=\"city == '黑龙江'\">\n                <div style=\"margin-bottom: 20px\">此版本为除哈尔滨市、绥化市以外的“通用版”。</div>\n                <div>哈尔滨市、绥化市禁止使用，需下载对应的专用版本。</div>\n            </ng-container>\n        </div>\n        <div class=\"load-model-button\">\n            <ng-container *ngIf=\"isClick; else NotClick\">\n                <div class=\"load-model-ok\" (click)=\"notShow()\">确定</div>\n            </ng-container>\n            <ng-template #NotClick>\n                <div class=\"load-model-notok\">{{bottonCon}}</div>\n            </ng-template>\n        </div>\n    </div>\n</div>\n</ng-container>\n\n\n<div class=\"self-unlock-prompt\" *ngIf=\"showSelfUnlock\">\n    <div class=\"in\">\n\n        <div class=\"\" *ngIf=\"noMobile\">\n            <p class=\"mgb10\">您的帐号长时间未使用，已经锁定。</p>\n            <p class=\"mgb10\">您的帐号没有关联手机号，无法自行解锁，请联系管理员解锁</p>\n            <br />\n            <button (click)=\"logout()\">退出</button>\n        </div>\n\n        <div class=\"\" *ngIf=\"!noMobile\">\n            <p class=\"tac mgb10\">您的帐号长时间未使用，已经锁定。</p>\n            <p class=\"tac mgb10\">可验证手机号后自行解锁。</p>\n            <div class=\"mgb15\">\n                <input type=\"text\" [value]=\"userMobile\" disabled>\n            </div>\n\n            <div class=\"\" *ngIf=\"unlockStep == 0\">\n                <div class=\"df mgb15\">\n                    <input type=\"text\" placeholder=\"输入图形验证码\"  [(ngModel)]=\"verifyCodeUser\" />\n                    <img [src]=\"verifyCodeJpg\" (click)=\"getVerifyCode()\" width=\"100\" height=\"48\" />\n                </div>\n                <button (click)=\"send()\">发送验证码</button>\n            </div>\n            \n            <div class=\"\" *ngIf=\"unlockStep == 1\">\n                <div class=\"df mgb15\">\n                    <input type=\"text\" placeholder=\"输入短信验证码\" [(ngModel)]=\"sms\" />\n                    <button class=\"resend-btn\" (click)=\"resend()\" [disabled]=\"countdown > 0\">重新发送<span class=\"countdown\" [class.zero]=\"countdown == 0\">{{countdown}}</span></button>\n                </div>\n                <button (click)=\"unlock()\" [disabled]=\"sms.trim().length == 0\">解锁</button>\n            </div>\n        </div>\n    \n    </div>\n</div>\n\n<div class=\"offline-prompt\" *ngIf=\"showOffline\">\n    <div class=\"in\">\n        <span class=\"close-offline\" (click)=\"showOffline = false\">关闭</span>\n        <h2>被采集人信息</h2>\n        <div class=\"kv\">\n            <div class=\"k\">姓名</div>\n            <div class=\"v\"><input type=\"text\" [(ngModel)]=\"offlineObj.patientName\" /></div>\n        </div>\n        <div class=\"kv\">\n            <div class=\"k\">手机号</div>\n            <div class=\"v\"><input type=\"text\" [(ngModel)]=\"offlineObj.patientMobile\" /></div>\n        </div>\n        <div class=\"kv\">\n            <div class=\"k\">身份证号</div>\n            <div class=\"v\"><input type=\"text\" [(ngModel)]=\"offlineObj.patientIdenno\" /></div>\n        </div>\n        <div class=\"kv\">\n            <div class=\"k\">试管码</div>\n            <div class=\"v\"><input type=\"text\" [(ngModel)]=\"offlineObj.tubeCode\" /></div>\n        </div>\n        <h2>采集相关信息</h2>\n        <div class=\"kv\">\n            <div class=\"k\">采集人</div>\n            <div class=\"v\"><input type=\"text\" [(ngModel)]=\"offlineObj.gatherPerson\" /></div>\n        </div>\n        <div class=\"kv\">\n            <div class=\"k\">采集点</div>\n            <div class=\"v\"><input type=\"text\" [(ngModel)]=\"offlineObj.gatherPoint\" /></div>\n        </div>\n        <div class=\"tip\" [class]=\"status\">{{tip}}</div>\n        <button (click)=\"saveOfflineData()\">提交</button>\n    </div>\n</div>\n\n<div class=\"net-choose-prompt\" *ngIf=\"showNetChoose\">\n    <div class=\"in\">\n        <h2>请选择您的网络类型</h2>\n        <button (click)=\"chooseNetwork(0)\" class=\"inter\">我是外网用户</button>\n        <button (click)=\"chooseNetwork(1)\" class=\"intra\">我是内网用户</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/version-updater/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/version-updater/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: IonicVersionUpdaterWeb, IonicVersionUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ "./node_modules/version-updater/dist/esm/web.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicVersionUpdaterWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["IonicVersionUpdaterWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicVersionUpdater", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["IonicVersionUpdater"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/version-updater/dist/esm/web.js":
/*!******************************************************!*\
  !*** ./node_modules/version-updater/dist/esm/web.js ***!
  \******************************************************/
/*! exports provided: IonicVersionUpdaterWeb, IonicVersionUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicVersionUpdaterWeb", function() { return IonicVersionUpdaterWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicVersionUpdater", function() { return IonicVersionUpdater; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");

class IonicVersionUpdaterWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'IonicVersionUpdater',
            platforms: ['web'],
        });
    }
    download(options) {
        console.log('IonicVersionUpdater download', options);
        throw new Error('Download method not implemented.');
    }
    addListener(eventName, listenerFunc) {
        console.log('IonicVersionUpdater addProgressListener', eventName);
        console.log('IonicVersionUpdater addProgressListener', listenerFunc);
        throw new Error('AddProgressListener method not implemented.');
    }
}
const IonicVersionUpdater = new IonicVersionUpdaterWeb();


Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(IonicVersionUpdater);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/serviceCommon.module */ "./src/app/service/serviceCommon.module.ts");











let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
            _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_10__["ServiceCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"] }])
        ],
        providers: [
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Keyboard"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabContentCss {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n}\n\n.login-font-bar {\n  width: 100%;\n  height: 200px;\n  background-color: #1095FF;\n  display: flex;\n  flex-direction: column;\n}\n\n.login-font {\n  font-size: 32px;\n  color: white;\n  margin-left: 40px;\n  line-height: 150px;\n  height: 42px;\n  font-family: Microsoft YaHei;\n  font-weight: bold;\n  opacity: 1;\n}\n\n.user-bar {\n  display: flex;\n  flex-direction: column;\n  margin-top: -70px;\n  margin-left: 30px;\n  margin-right: 30px;\n  background-color: white;\n  z-index: 100;\n  border: 1px solid #bcbcbc;\n  border-radius: 10px;\n}\n\n.not-pass {\n  color: #349EEC;\n  font-size: 0.9rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 0 1rem 12px 1rem;\n}\n\n.not-pass > span {\n  font-size: 0.9rem;\n}\n\n.list {\n  margin-top: 30px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.list-item {\n  margin-left: 10px;\n  margin-bottom: 20px;\n  font-size: 1rem;\n  border-bottom: 1px solid #bcbcbc;\n  display: flex;\n  flex-direction: row;\n}\n\n.list-item > span {\n  margin-right: 8px;\n}\n\n.input-not-barcode {\n  font-size: 0.9rem;\n  border: 0;\n  width: 100%;\n  background-color: white;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.item-login {\n  flex-grow: 1;\n}\n\n.ok-Lock-button {\n  margin: 50px 10px 10px 10px;\n  font-size: 1.5rem;\n  padding: 8px;\n  height: 52px;\n  text-align: center;\n  background-color: #bcbcbc;\n  border-radius: 5px;\n  color: white;\n  z-index: 100;\n}\n\n.ok-button {\n  margin: 50px 10px 10px 10px;\n  font-size: 1.5rem;\n  padding: 8px;\n  height: 52px;\n  text-align: center;\n  background-color: #1095FF;\n  border-radius: 5px;\n  color: white;\n  z-index: 100;\n}\n\n.oblique-left {\n  background-color: #EDEDED;\n  width: 30px;\n  height: 40px;\n  transform: skewY(30deg);\n  position: absolute;\n  top: 170px;\n  left: 0;\n}\n\n.oblique-right {\n  background-color: #EDEDED;\n  width: 30px;\n  height: 40px;\n  transform: skewY(-30deg);\n  position: absolute;\n  top: 170px;\n  right: 0px;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  --ion-background-color: #1095FF;\n  text-align: center;\n  color: white;\n  border-radius: 2px;\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 1.2rem;\n  margin-top: 6px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 5px;\n  margin-left: -40px;\n}\n\n.show-info {\n  margin-top: 18px;\n  display: flex;\n  align-items: center;\n}\n\n.show-info .progress {\n  margin-right: 5px;\n  width: 100%;\n}\n\n.progress-model {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(39, 60, 125, 0.5);\n  z-index: 9;\n  display: none;\n}\n\n.progress-container {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  top: 40vh;\n  height: 25vh;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px 5px;\n  padding: 10px 10px 10px 10px;\n}\n\n.login-load-model {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  background: #273c7d;\n  display: inline-block;\n}\n\n.load-model-con {\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 30vh;\n  height: 50vh;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px 5px;\n  padding: 15px 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.load-model-title {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n  color: #aaa;\n}\n\n.load-model-button {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n  margin-top: 1.2rem;\n}\n\n.load-model-ok {\n  width: 70%;\n  font-size: 1rem;\n  text-align: center;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  background-color: #005bac;\n  color: white;\n  padding: 0.6rem;\n}\n\n.load-model-notok {\n  width: 70%;\n  font-size: 1rem;\n  text-align: center;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  background-color: #bcbcbc;\n  color: white;\n  padding: 0.6rem;\n}\n\n.tab-load-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 99;\n  display: none;\n}\n\n.load-css {\n  position: absolute;\n  left: 40%;\n  top: 40%;\n  color: #1095ff;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n\n.select-ip {\n  background-color: #1095FF;\n  height: 2rem;\n  display: inline-block;\n  font-size: 1rem;\n  float: right;\n  margin-right: 30px;\n  margin-top: 58px;\n  color: #EDEDED;\n  border: 0;\n  padding-right: 5px;\n}\n\n.mgb15 {\n  margin-bottom: 15px;\n}\n\n.mgb10 {\n  margin-bottom: 10px;\n}\n\n.df {\n  display: flex;\n}\n\n.tac {\n  text-align: center;\n}\n\n.self-unlock-prompt {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-size: 0.9rem;\n  background: rgba(32, 32, 32, 0.9);\n  z-index: 1024;\n  line-height: 1.8;\n}\n\n.self-unlock-prompt .in {\n  width: 85%;\n  padding: 20px;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 10px;\n  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.8);\n  margin-top: -50%;\n}\n\n.self-unlock-prompt button {\n  background: #3880FF;\n  text-align: center;\n  color: #fff;\n  width: 100%;\n  padding: 15px 10px;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n\n.self-unlock-prompt button[disabled] {\n  background: #d5d5d5;\n  color: #999;\n}\n\n.self-unlock-prompt input {\n  height: 48px;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  padding: 5px;\n  background: #fff;\n}\n\n.self-unlock-prompt input[disabled] {\n  color: #999;\n  background: #d5d5d5;\n}\n\n.self-unlock-prompt img {\n  width: 130px;\n  height: 48px;\n  margin-left: 10px;\n  border-radius: 5px;\n  flex-shrink: 0;\n}\n\n.self-unlock-prompt .resend-btn {\n  width: 130px;\n  height: 48px;\n  margin-left: 10px;\n  flex-shrink: 0;\n}\n\n.self-unlock-prompt .countdown::after {\n  content: \")\";\n}\n\n.self-unlock-prompt .countdown::before {\n  content: \"(\";\n}\n\n.self-unlock-prompt .countdown.zero {\n  display: none;\n}\n\n.offline-prompt {\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-size: 0.9rem;\n  background: rgba(32, 32, 32, 0.9);\n  z-index: 1024;\n  line-height: 1.8;\n}\n\n.offline-prompt .in {\n  width: 85%;\n  padding: 10px 15px;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 10px;\n  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.8);\n  height: 420px;\n}\n\n.offline-prompt button {\n  background: #3880FF;\n  text-align: center;\n  color: #fff;\n  width: 100%;\n  padding: 10px 10px;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n\n.offline-prompt button[disabled] {\n  background: #d5d5d5;\n  color: #999;\n}\n\n.offline-prompt input {\n  height: 32px;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #eee;\n  padding: 5px;\n  background: #fff;\n}\n\n.offline-prompt input[disabled] {\n  color: #999;\n  background: #d5d5d5;\n}\n\n.offline-prompt h2 {\n  font-size: 1rem;\n  margin-bottom: 15px;\n  margin-top: 8px;\n}\n\n.offline-prompt .kv {\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n  margin-bottom: 10px;\n}\n\n.offline-prompt .k {\n  width: 80px;\n  flex-shrink: 0;\n  text-align: right;\n  padding-right: 10px;\n  color: #999;\n}\n\n.offline-prompt .v {\n  flex-grow: 1;\n}\n\n.offline-prompt .tip {\n  height: 20px;\n  margin-bottom: 5px;\n  text-align: center;\n}\n\n.offline-prompt .success {\n  color: #0c0;\n  font-size: 0.7rem;\n}\n\n.offline-prompt .fail {\n  color: #c00;\n  font-size: 0.7rem;\n}\n\n.offline-prompt .close-offline {\n  float: right;\n  margin-top: 0px;\n  color: #349EEC;\n}\n\n.net-choose-prompt {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-size: 0.9rem;\n  background: rgba(32, 32, 32, 0.9);\n  z-index: 1024;\n  line-height: 1.8;\n}\n\n.net-choose-prompt h2 {\n  margin-top: 0;\n  margin-bottom: 20px;\n  color: #666;\n  font-size: 1.2rem;\n}\n\n.net-choose-prompt .in {\n  width: 85%;\n  padding: 20px;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 10px;\n  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.8);\n}\n\n.net-choose-prompt button {\n  background: #3880FF;\n  border: 1px solid #3880FF;\n  text-align: center;\n  color: #fff;\n  width: 100%;\n  padding: 20px;\n  border-radius: 5px;\n  font-size: 1rem;\n  margin-bottom: 20px;\n}\n\n.net-choose-prompt button + button {\n  margin-bottom: 0;\n}\n\n.net-choose-prompt .intra {\n  border: 1px solid #ccc;\n  background: #fff;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxpQkFBQTtBQVFGOztBQUpBO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBT0Y7O0FBTEE7RUFBTSxXQUFBO0FBU047O0FBUkE7RUFBWSxZQUFBO0FBWVo7O0FBWEE7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUFhLFlBQUE7RUFFYixrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWNGOztBQVpBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFBYSxZQUFBO0VBRWIs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O0VBQWtCLGVBQUE7RUFBZSxtQkFBQTtBQWdMNUk7O0FBL0tFO0VBQWdCLGdCQUFBO0FBa0xsQjs7QUFqTEU7RUFBTyxzQkFBQTtFQUFzQixnQkFBQTtFQUFnQixXQUFBO0FBc0wvQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJDb250ZW50Q3NzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tZm9udC1iYXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5NUZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxvZ2luLWZvbnR7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnQgWWFIZWk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAxO1xufVxuLnVzZXItYmFye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmNiYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ub3QtcGFzc3tcbiAgY29sb3I6ICMzNDlFRUM7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCAxcmVtIDEycHggMXJlbTtcbn1cbi5ub3QtcGFzcyA+c3BhbntcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ubGlzdHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5saXN0LWl0ZW17XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmNiY2JjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmxpc3QtaXRlbSA+c3BhbntcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cblxuLmlucHV0LW5vdC1iYXJjb2Rle1xuICBmb250LXNpemU6MC45cmVtO1xuICBib3JkZXI6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi53MTAwe3dpZHRoOjEwMCU7fVxuLml0ZW0tbG9naW57ZmxleC1ncm93OjE7fVxuLm9rLUxvY2stYnV0dG9ue1xuICBtYXJnaW46IDUwcHggMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwYWRkaW5nOiA4cHg7aGVpZ2h0OjUycHg7XG4gIC8vcGFkZGluZy1ib3R0b206IDAuOXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiY2JjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTAwO1xufVxuLm9rLWJ1dHRvbntcbiAgbWFyZ2luOiA1MHB4IDEwcHggMTBweCAxMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogOHB4O2hlaWdodDo1MnB4O1xuICAvL3BhZGRpbmctYm90dG9tOiAwLjlyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOTVGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLm9ibGlxdWUtbGVmdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdHJhbnNmb3JtOnNrZXdZKDMwZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3MHB4O1xuICBsZWZ0OiAwO1xufVxuXG4ub2JsaXF1ZS1yaWdodHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdHJhbnNmb3JtOnNrZXdZKC0zMGRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNzBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwICAudG9vbGJhci10aXRsZS1kZWZhdWx0e1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTA5NUZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGVyLWljb257XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlci1mb250e1xuICB3aWR0aDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi10b3A6IDZweFxufVxuLmhlYWRlci10aXRsZXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweFxufVxuXG5cbi5zaG93LWluZm8ge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNob3ctaW5mbyAucHJvZ3Jlc3Mge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9ncmVzcy1tb2RlbHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzksNjAsMTI1LDAuNSk7XG4gIHotaW5kZXg6IDk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucHJvZ3Jlc3MtY29udGFpbmVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDQwdmg7XG4gIGhlaWdodDogMjV2aDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuXG4ubG9naW4tbG9hZC1tb2RlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgNjAsIDEyNSwgMSk7XG4gIC8vei1pbmRleDogOTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmxvYWQtbW9kZWwtY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgdG9wOiAzMHZoO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmxvYWQtbW9kZWwtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogI2FhYTtcbn1cbi5sb2FkLW1vZGVsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcbn1cblxuLmxvYWQtbW9kZWwtb2sge1xuICB3aWR0aDogNzAlO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmNiYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YmFjO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbn1cbi5sb2FkLW1vZGVsLW5vdG9re1xuICB3aWR0aDogNzAlO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmNiYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiY2JjO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNnJlbTtcbn1cbi50YWItbG9hZC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNDtcbiAgei1pbmRleDogOTk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9hZC1jc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwJTtcbiAgdG9wOiA0MCU7XG4gIGNvbG9yOiAjMTA5NWZmO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2VsZWN0LWlwe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5NUZGO1xuICBoZWlnaHQ6IDJyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogNThweDtcbiAgY29sb3I6ICNFREVERUQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG5cblxuLm1nYjE1e21hcmdpbi1ib3R0b206MTVweDt9XG4ubWdiMTB7bWFyZ2luLWJvdHRvbToxMHB4O31cbi5kZntkaXNwbGF5OmZsZXg7fVxuLnRhY3t0ZXh0LWFsaWduOmNlbnRlcjt9XG4uc2VsZi11bmxvY2stcHJvbXB0e1xuICBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIHBvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2ZvbnQtc2l6ZTowLjlyZW07XG4gIGJhY2tncm91bmQ6cmdiYSgzMiwzMiwzMiwuOSk7ei1pbmRleDoxMDI0O2xpbmUtaGVpZ2h0OjEuODtcbiAgLmlue3dpZHRoOjg1JTtwYWRkaW5nOjIwcHg7ZmlsdGVyOmJsdXIoMHB4KTtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjk1KTtib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgYm94LXNoYWRvdzowIDAgMTBweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwuOCk7bWFyZ2luLXRvcDotNTAlO1xuICB9XG4gIGJ1dHRvbntiYWNrZ3JvdW5kOiMzODgwRkY7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2ZmZjt3aWR0aDoxMDAlO3BhZGRpbmc6MTVweCAxMHB4O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxcmVtO31cbiAgYnV0dG9uW2Rpc2FibGVkXXtiYWNrZ3JvdW5kOiNkNWQ1ZDU7Y29sb3I6Izk5OTt9XG5cbiAgaW5wdXR7aGVpZ2h0OjQ4cHg7d2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOjVweDtib3JkZXI6MXB4IHNvbGlkICNlZWU7cGFkZGluZzo1cHg7YmFja2dyb3VuZDojZmZmO31cbiAgaW5wdXRbZGlzYWJsZWRde2NvbG9yOiM5OTk7YmFja2dyb3VuZDojZDVkNWQ1O31cbiAgaW1ne3dpZHRoOjEzMHB4O2hlaWdodDo0OHB4O21hcmdpbi1sZWZ0OjEwcHg7Ym9yZGVyLXJhZGl1czo1cHg7ZmxleC1zaHJpbms6MDt9XG4gIC5yZXNlbmQtYnRue3dpZHRoOjEzMHB4O2hlaWdodDo0OHB4O21hcmdpbi1sZWZ0OjEwcHg7ZmxleC1zaHJpbms6MDt9XG4gIC5jb3VudGRvd246OmFmdGVye2NvbnRlbnQ6JyknfVxuICAuY291bnRkb3duOjpiZWZvcmV7Y29udGVudDonKCd9XG4gIC5jb3VudGRvd24uemVyb3tkaXNwbGF5Om5vbmU7fVxufVxuXG4ub2ZmbGluZS1wcm9tcHR7XG4gIGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmctdG9wOjE1cHg7XG4gIHBvc2l0aW9uOmZpeGVkO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO2ZvbnQtc2l6ZTowLjlyZW07XG4gIGJhY2tncm91bmQ6cmdiYSgzMiwzMiwzMiwuOSk7ei1pbmRleDoxMDI0O2xpbmUtaGVpZ2h0OjEuODtcblxuICAuaW57d2lkdGg6ODUlO3BhZGRpbmc6MTBweCAxNXB4O2ZpbHRlcjpibHVyKDBweCk7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC45NSk7Ym9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGJveC1zaGFkb3c6MCAwIDEwcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsLjgpO2hlaWdodDo0MjBweDtcbiAgfVxuICBidXR0b257YmFja2dyb3VuZDojMzg4MEZGO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNmZmY7d2lkdGg6MTAwJTtwYWRkaW5nOjEwcHggMTBweDtib3JkZXItcmFkaXVzOjVweDtmb250LXNpemU6MXJlbTt9XG4gIGJ1dHRvbltkaXNhYmxlZF17YmFja2dyb3VuZDojZDVkNWQ1O2NvbG9yOiM5OTk7fVxuXG4gIGlucHV0e2hlaWdodDozMnB4O3dpZHRoOjEwMCU7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZWVlO3BhZGRpbmc6NXB4O2JhY2tncm91bmQ6I2ZmZjt9XG4gIGlucHV0W2Rpc2FibGVkXXtjb2xvcjojOTk5O2JhY2tncm91bmQ6I2Q1ZDVkNTt9XG5cbiAgaDJ7Zm9udC1zaXplOjFyZW07bWFyZ2luLWJvdHRvbToxNXB4O21hcmdpbi10b3A6OHB4O31cbiAgLmt2e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjAuOHJlbTttYXJnaW4tYm90dG9tOjEwcHg7fVxuICAua3t3aWR0aDo4MHB4O2ZsZXgtc2hyaW5rOjA7dGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjEwcHg7Y29sb3I6Izk5OX1cbiAgLnZ7ZmxleC1ncm93OjE7fVxuXG4gIC50aXB7aGVpZ2h0OjIwcHg7bWFyZ2luLWJvdHRvbTo1cHg7dGV4dC1hbGlnbjpjZW50ZXI7fVxuICAuc3VjY2Vzc3tjb2xvcjojMGMwO2ZvbnQtc2l6ZTowLjdyZW07fVxuICAuZmFpbHtjb2xvcjojYzAwO2ZvbnQtc2l6ZTowLjdyZW07fVxuXG4gIC5jbG9zZS1vZmZsaW5le2Zsb2F0OnJpZ2h0O21hcmdpbi10b3A6MHB4O2NvbG9yOiMzNDlFRUM7fVxufVxuXG4ubmV0LWNob29zZS1wcm9tcHR7XG4gIGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtcbiAgcG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7Zm9udC1zaXplOjAuOXJlbTtcbiAgYmFja2dyb3VuZDpyZ2JhKDMyLDMyLDMyLC45KTt6LWluZGV4OjEwMjQ7bGluZS1oZWlnaHQ6MS44O1xuICBoMnttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToyMHB4O2NvbG9yOiM2NjY7Zm9udC1zaXplOjEuMnJlbTt9XG4gIC5pbnt3aWR0aDo4NSU7cGFkZGluZzoyMHB4O2ZpbHRlcjpibHVyKDBweCk7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC45NSk7Ym9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGJveC1zaGFkb3c6MCAwIDEwcHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xuICB9XG4gIGJ1dHRvbntiYWNrZ3JvdW5kOiMzODgwRkY7Ym9yZGVyOjFweCBzb2xpZCAjMzg4MEZGOyB0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmO3dpZHRoOjEwMCU7cGFkZGluZzoyMHB4O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxcmVtO21hcmdpbi1ib3R0b206MjBweDt9XG4gIGJ1dHRvbiArIGJ1dHRvbnttYXJnaW4tYm90dG9tOjA7fVxuICAuaW50cmF7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjojNjY2O31cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/http-client.service */ "./src/app/shared/http-client.service.ts");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var version_updater__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! version-updater */ "./node_modules/version-updater/dist/esm/index.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");












const { IonicVersionUpdater } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
const { Filesystem } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
const { SecurityChecker } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let LoginPage = class LoginPage {
    constructor(router, navCtrl, http, platform, alertModal, sanitizer, changeRef, device) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.platform = platform;
        this.alertModal = alertModal;
        this.sanitizer = sanitizer;
        this.changeRef = changeRef;
        this.device = device;
        this.name = '';
        this.loginTitle = '核酸检测平台';
        this.isLoad = false;
        this.isLocking = false;
        this.percent = 0;
        this.number = 0;
        this.barStyleDemo = {
            border: '2px solid #108ee9'
        };
        this.bottonCon = "(5)";
        this.time = 5;
        this.isClick = false;
        this.primeArr = [1307, 2797, 3823, 4241, 5081, 6427, 7583, 8693, 9931, 7703];
        this.strongPwdPolicy = '';
        this.strongPwdRegExp = '';
        this.isStrongPwd = false;
        this.isUseOfflineMode = false;
        this.isOpenOfflineButton = true;
        this.showNetChoose = false;
        this.isIntranetEnv = false;
        this.showSelfUnlock = false;
        this.noMobile = false;
        this.userMobile = '';
        this.verifyCodeUser = '';
        this.verifyCode = '';
        this.unlockStep = 0; // 0.图形验证码阶段 1. sms阶段
        this.countdown = 60;
        this.sms = '';
        //// offline
        //isOffline;
        this.showOffline = false;
        this.offlineObj = {
            patientName: '',
            patientMobile: '',
            patientIdenno: '',
            tubeCode: '',
            gatherPerson: '',
            gatherPoint: '',
        };
        this.platform.backButton.subscribe(() => {
            if (this.router.url.indexOf('login') > -1) {
                sessionStorage.clear();
                navigator['app'].exitApp();
            }
        });
    }
    ngOnInit() {
        this.uuid = this.device.uuid;
        //////this.uuid = '1cd732203cfc2d9e'; //////
        this.isLoad = false;
        this.modelDisplay = document.getElementsByClassName('progress-model')[0];
        var interval = setInterval(() => {
            if (this.time > 0) {
                this.time--;
                if (this.time == 0) {
                    this.isClick = true;
                    this.bottonCon = "(5)";
                }
                else {
                    this.bottonCon = "(" + this.time + ")";
                }
            }
            else {
                clearInterval(interval);
                this.time = 5; //重新初始化time
            }
        }, 1000);
    }
    ionViewWillEnter() {
        /* this.showNetChoose = sessionStorage.getItem('network') === null;
        if(!this.showNetChoose) {
            this.getConfig(sessionStorage.getItem('network') === '1'); // 0为外网 1为内网
        } */
        this.getConfig(false); //非苏州此处触发
        this.fileRead();
        this.isSecure();
    }
    chooseNetwork(idx) {
        let isIntranet = idx == 1;
        if (isIntranet) {
            this.isIntranetEnv = true;
        }
        sessionStorage.setItem('network', isIntranet ? '1' : '0');
        this.showNetChoose = false;
        this.getConfig(isIntranet);
    }
    getConfig(isIntranet) {
        //// SS config
        let config = {
            "city": "江苏 标本采集",
            "name": "全场景疫情病原体检测信息系统",
            "checkVersion": "V1.6.5.1",
            "isShowLog": "false",
            "isDirectScan": "false",
            "isHasCurrent": "true",
            "isSelectArea": "true",
            "isSelectIp": "true",
            "validateUpdateUrl": "false",
            //"useHttps": "false",
            //"useHttps": "true",
            "useOfflineMode": "false",
            //"ip": "211.143.239.188:10001", //nat.szswjw.gov.cn:10001
            //"ip": "nat.szswjw.gov.cn:8095", //nat.szswjw.gov.cn:10001
            "ipList": [
                {
                    "name": "外网",
                    "useHttps": "false",
                    // "useHttps": "true",
                    // "ip": "nat.szswjw.gov.cn:8095", //nat.szswjw.gov.cn:10001
                    // "ip": "211.143.239.188:10001" //10.9.102.70:8095 nat.szswjw.gov.cn:8095 nat.szswjw.gov.cn:10001
                    // "ip": "nat.szswjw.gov.cn:10002", //10.9.102.70:8095 nat.szswjw.gov.cn:8095 nat.szswjw.gov.cn:10001
                    // "ip": "58.213.111.52:8095" // 南京
                    "ip": "36.137.214.221:8095" // 无锡
                },
                {
                    "name": "内网",
                    "useHttps": "false",
                    "ip": "172.18.13.87:8095"
                },
            ]
        };
        //// EE config
        //// SS getRcpName
        this.loginTitle = config['name'];
        this.checkVersion = config['checkVersion'];
        //sessionStorage.setItem('useHttps', config['useHttps']);
        sessionStorage.setItem('useOfflineMode', config['useOfflineMode']);
        this.isUseOfflineMode = config['useOfflineMode'] === 'true';
        this.city = config['city'];
        this.validateUpdateUrl = config['validateUpdateUrl'] === 'true';
        sessionStorage.setItem('isShowLog', config['isShowLog']);
        sessionStorage.setItem('isDirectScan', config['isDirectScan']);
        sessionStorage.setItem('isHasCurrent', config['isHasCurrent']);
        sessionStorage.setItem('isSelectArea', config['isSelectArea']);
        sessionStorage.setItem('ip', config['ipList'][+isIntranet]['ip']);
        sessionStorage.setItem('useHttps', config['ipList'][+isIntranet]['useHttps']);
        /* this.isSelectIp =  config['isSelectIp'];

        if (this.isSelectIp === 'true'){
            if (isNotNullOrUndefined(this.SelectIp)){
                sessionStorage.setItem('ip', this.SelectIp);
            } else {
                this.ipList = config['ipList'];
                this.SelectIp = config['ipList'][0]['ip'];
                sessionStorage.setItem('ip', this.SelectIp);
            }
        } else {
            sessionStorage.setItem('ip', config['ip']);
        } */
        // console.log('uuid', Device.uuid);
        // console.log('model', Device.model);
        // console.log('version', Device.version );
        // console.log('cordova', Device.cordova);
        // console.log('platform', Device.platform);
        // console.log('uuid', Device);
        this.getCheckVersion(false, isIntranet);
        this.getImei();
        //// EE getRcpName
        //// SS 原getRcpName
        this.isLoad = false;
        this.getConfigName('rcp_open_pw_level_verification_switch', (value) => {
            this.strongPwdPolicy = value;
        }); ////
        this.getConfigName('rcp_open_pwd_reg', (value) => {
            this.strongPwdRegExp = value;
        }); ////
        this.getConfigName('rcp_open_pwd_rule'); ////
        // 获取开关，是否使用定期强制修改密码 rcp_open_pwd_forced_switch [true|false]
        this.getConfigName('rcp_open_pwd_forced_switch', (value) => {
            if (value === 'true') {
                this.isForcedPWD = true;
            }
        });
        this.getConfigName('rcp_open_pwd_forced_frequence');
        //
        this.getConfigName('rcp_open_offline_mode_switch', (value) => {
            if (value === 'close') {
                this.isOpenOfflineButton = false;
            }
        });
        //this.getRcpName(false, () => {});
        //// EE 原getRcpName
    }
    getRan(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    clean() {
        this.name = '';
        this.password = undefined;
    }
    // 路由返回
    routeBack() {
        // this.navCtrl.back();
    }
    notShow() {
        const display = document.getElementsByClassName('login-load-model')[0];
        display['style']['display'] = 'none';
    }
    clickOk() {
        const value = window['encryptByDES'](this.password, this.encodeKey);
        const condition = {
            username: this.name,
            password: value,
            key: this.key,
            source: 'app'
        };
        this.http.loginResponse(condition).subscribe(data => {
            this.isLoad = false;
            sessionStorage.setItem('Authorization', data.headers.get('Authorization'));
            sessionStorage.setItem('Authorization-Refresh', data.headers.get('Authorization-Refresh'));
            sessionStorage.setItem('isRefreshingToken', '1');
            if (data['body']['code'] === '0') {
                sessionStorage.setItem('loginUserName', data['body']['data']['user']['name']);
                sessionStorage.setItem('loginUserId', data['body']['data']['user']['userId']);
                //// // 校验是否符合强密码规则
                if (this.strongPwdPolicy === 'true') {
                    let flag = new RegExp(this.strongPwdRegExp).test(this.password) && !/\s/.test(this.password);
                    this.isStrongPwd = flag;
                    sessionStorage.setItem('isStrongPwd', flag ? '1' : '0');
                }
                if (this.isForcedPWD) { // 记录密码更新时间
                    sessionStorage.setItem('pwdUpdateTime', data['body']['data']['user']['updateTime']);
                }
                //this.password = '';
                //// 
                this.http.getNoDeal('rcp/api/user/checkUserLock', {}, '', '', false).subscribe(data => {
                    //console.warn(data)
                    //console.warn(data.message)
                    if (data['data'] == 1) { // 1未锁定
                        this.router.navigate(['/SelectCensusAddressTree']);
                        // this.saveCensusAddress();
                    }
                    else { //2
                        let mobileReg = /^1[3-9]\d{9}$/;
                        if (mobileReg.test(data.message)) {
                            this.noMobile = false;
                        }
                        else {
                            this.noMobile = true;
                        }
                        this.userMobile = data.message;
                        this.getVerifyCode();
                        this.showSelfUnlock = true;
                    }
                });
            }
            else {
                this.http.showToast(data['body']['message']);
                if (data['body']['message'].indexOf('锁定') > -1) {
                    this.isLocking = true;
                    // 获取锁定时间
                    this.http.getNotHeard('rcp/api/sysConfig/open/getOpenConfig?configKey=rcp_open_account_lock_time&_allow_anonymous=true').subscribe(timeData => {
                        const num = Number(timeData['data']['configValue']) * 60 * 1000;
                        setTimeout(() => { this.isLocking = false; }, num);
                        this.fileWrite(num);
                    });
                }
            }
        });
    }
    registerClick() {
        const navigationExtras = {
            queryParams: { titleId: '1' }
        };
        this.router.navigate(['/register'], navigationExtras);
    }
    updateRegisterClick() {
        const navigationExtras = {
            queryParams: { titleId: '2' }
        };
        this.router.navigate(['/register'], navigationExtras);
    }
    // 调用后台接口
    getKey() {
        this.isLoad = true;
        this.http
            .getNotHeard(`rcp/open/api/key`)
            .subscribe(data => {
            if (data['code'] === '0') {
                this.encodeKey = data['data']['encode_key'];
                this.key = data['data']['key'];
                this.clickOk();
            }
        });
    }
    // 获取版本号
    getCheckVersion(isLogin, isIntranet) {
        if (isLogin) {
            if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9__["isNotNullOrUndefined"])(this.name) || this.name === '') {
                this.http.showToast('登录账号为空，请填写您的手机号或登录账号');
                return;
            }
            if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9__["isNotNullOrUndefined"])(this.password) || this.password === '') {
                this.http.showToast('登录密码为空，请填写您的登录密码');
                return;
            }
        }
        if (isLogin) {
            this.isLoad = true;
        }
        const condition = {
            app: 'sample_app',
            checkVersion: this.checkVersion,
            inOrOut: +isIntranet,
            uuid: this.uuid === null ? null : this.primeArr[this.getRan(0, 9)] + this.uuid + this.primeArr[this.getRan(0, 9)]
        };
        this.http
            .getNotHeardPost(`rcp/open/api/checkversion` + this.http.getParamsString(condition), {}, '检测app是否为最新版本', '检测app是否为最新版本失败')
            .subscribe(data => {
            this.isLoad = false;
            if (data['isSuccess']) {
                this.downloadURL = data['data']['downloadURL'];
                //this.downloadURL = 'http://10.9.102.131:10086/data/sjcs1450[Bh811dB].apk';
                if (data['data']['update'] === true) {
                    if (this.validateUpdateUrl) {
                        // checkUrl
                        let str = this.downloadURL, hash = str.match(/(\[.+\])/g), //url里提供的校验码
                        urlStr = this.downloadURL.replace(/(\[.+\])/g, ''), //去除校验码的待hash的字符串
                        hashed = this.hashString(urlStr); // 计算出来的校验码
                        if (hash !== null) {
                            hash = hash[0].replace(/(\[|\])/g, '');
                            if (hash != hashed) {
                                this.http.showToast('发现新版本，但升级地址未通过校验，请稍后再试');
                                return false;
                            }
                        }
                        else {
                            this.http.showToast('发现新版本，但升级地址未通过校验，请稍后再试');
                            return false;
                        }
                    }
                    if (data['data']['forceUpdate'] === true) {
                        this.showAlertForceUpdate(data['data']['message']);
                    }
                    else {
                        this.showAlertUpdate(data['data']['message']);
                    }
                }
                else {
                    if (isLogin) {
                        this.getKey();
                    }
                }
            }
            else {
                if (isLogin) {
                    this.getKey();
                }
            }
        });
    }
    showAlertUpdate(message) {
        this.alertModal.alert('版本升级', message, [
            { text: '取消', onPress: () => { } },
            { text: '升级', onPress: () => {
                    this.promote();
                } }
        ]);
    }
    showAlertForceUpdate(message) {
        this.alertModal.alert('版本升级', message, [
            { text: '退出', onPress: () => {
                    sessionStorage.clear();
                    navigator['app'].exitApp();
                } },
            { text: '升级', onPress: () => {
                    this.promote();
                } }
        ]);
    }
    promote() {
        document.getElementById('progressNumber').innerText = '0';
        document.getElementById('progressSlip')['value'] = '0';
        this.modelDisplay['style']['display'] = 'inline-block';
        //console.warn(this.downloadURL)
        const condition = {
            app: 'sample_app',
            url: encodeURIComponent(this.downloadURL),
            inOrOut: +this.isIntranetEnv,
            uuid: this.uuid === null ? null : this.primeArr[this.getRan(0, 9)] + this.uuid + this.primeArr[this.getRan(0, 9)]
        };
        this.http.getNotHeardPost(`rcp/open/api/checkUpdate` + this.http.getParamsString(condition), {}, '校验下载地址', '校验下载地址')
            .subscribe(data => {
            if (data['isSuccess'] && data['data'] == 1) {
                IonicVersionUpdater.download({ url: this.downloadURL });
            }
            else {
                this.http.showToast(data['message']);
            }
        });
        IonicVersionUpdater.addListener('onDownloadProgress', (status) => {
            if (status.status === 'running') {
                document.getElementById('progressNumber').innerText = status.progress;
                document.getElementById('progressSlip')['value'] = status.progress;
            }
            if (status.status === 'successful' || status.status === 'failed') {
                document.getElementById('progressNumber').innerText = '100';
                document.getElementById('progressSlip')['value'] = '100';
                this.modelDisplay['style']['display'] = 'none';
                IonicVersionUpdater.removeAllListeners();
                sessionStorage.clear();
                navigator['app'].exitApp();
            }
        });
    }
    getRcpName(isLogin, callback) {
        /* // json置入本文件
        this.http.getNotUrl('assets/rcp-send.json')
            .subscribe(data => {
                this.loginTitle =  data['name'];
                this.checkVersion = data['checkVersion'];
                this.city =  data['city'];
               
                sessionStorage.setItem('isSuzhou', data['isSuzhou']);
                sessionStorage.setItem('checkVersion', data['checkVersion']);
                this.isSuzhou = data['isSuzhou'] === 'true';
                this.validateUpdateUrl = data['validateUpdateUrl'] === 'true';
               
                sessionStorage.setItem('isShowLog', data['isShowLog']);
                sessionStorage.setItem('isSelectArea', data['isSelectArea']);
                if(isNotNullOrUndefined(this.SelectIp)){
                    sessionStorage.setItem('ip', this.SelectIp);
                } else {
                    this.ipList = data['ipList'];
                    this.SelectIp = data['ipList'][0]['ip'];
                    sessionStorage.setItem('ip', this.SelectIp);
                }
                // this.getCheckVersion(isLogin);

                callback && callback();
            });
      */
        this.getCheckVersion(isLogin, this.isIntranetEnv);
    }
    changeIp(value, idx) {
        sessionStorage.setItem('ip', value);
        //sessionStorage.setItem('useHttps', idx == 0 ? 'true': 'false');
    }
    getImei() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const { hasPermission } = await this.androidPermissions.checkPermission(
            //     this.androidPermissions.PERMISSION.READ_PHONE_STATE
            // );
            //
            // if (!hasPermission) {
            //     const result = await this.androidPermissions.requestPermission(
            //         this.androidPermissions.PERMISSION.READ_PHONE_STATE
            //     );
            //
            //     if (!result.hasPermission) {
            //         throw new Error('Permissions required');
            //     }
            //
            //     // ok, a user gave us permission, we can get him identifiers after restart app
            //     return;
            // }
        });
    }
    /**
    * 查询系统配置
    * @param configKeyName
    */
    getConfigName(configKeyName, callback) {
        this.http.getNotHeard('rcp/api/sysConfig/open/getOpenConfig?configKey=' + configKeyName + '&_allow_anonymous=true').subscribe((data) => {
            //console.warn(data)
            if (data['code'] == '0') {
                //console.log('系统配置---', data['data']['configValue']);
                let configValue;
                if (data['data'] != null) {
                    configValue = data['data']['configValue'];
                    sessionStorage.setItem(configKeyName, configValue);
                }
                callback && callback(configValue);
            }
            else {
                this.http.showToast(data['message']);
            }
        });
    }
    hashString(input) {
        let I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-:/.'.split('');
        var hash = 997;
        var i = input.length - 1;
        if (typeof input == 'string') {
            for (; i > -1; i--)
                hash += (hash << 5) + input.charCodeAt(i);
        }
        else {
            for (; i > -1; i--)
                hash += (hash << 5) + input[i];
        }
        var value = hash & 0x7FFFFFFF;
        var retValue = '';
        do {
            retValue += I64BIT_TABLE[value & 0x3F];
        } while (value >>= 6);
        return retValue;
    }
    fileRead() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const contents = yield Filesystem.readFile({
                    path: 'time.txt',
                    directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["FilesystemDirectory"].Data,
                    encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["FilesystemEncoding"].UTF8
                });
                if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9__["isNotNullOrUndefined"])(contents)) {
                    // @ts-ignore
                    const cond = JSON.parse(contents['data']);
                    console.log(cond['date'], cond['lockTime'], new Date().getTime() - Number(cond['date']));
                    if (new Date().getTime() - Number(cond['date']) >= Number(cond['lockTime'])) {
                        this.isLocking = false;
                    }
                    else {
                        this.isLocking = true;
                        setTimeout(() => { this.isLocking = false; }, Number(cond['lockTime']) - (new Date().getTime() - Number(cond['date'])));
                    }
                }
            }
            catch (e) {
                this.isLocking = false;
            }
        });
    }
    fileWrite(time) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cond = {
                date: new Date().getTime(),
                lockTime: time
            };
            try {
                const result = yield Filesystem.writeFile({
                    path: 'time.txt',
                    data: JSON.stringify(cond),
                    directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["FilesystemDirectory"].Data,
                    encoding: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["FilesystemEncoding"].UTF8
                });
            }
            catch (e) {
                console.error('Unable to write file', e);
            }
        });
    }
    // 系统不安全
    isSecure() {
        SecurityChecker.isSecure().then((result) => {
            console.log('isSecure: ' + result.isSecure);
            if (!result.isSecure) {
                this.showNotAlert();
            }
        });
    }
    showNotAlert() {
        this.alertModal.alert('运行环境不安全', 'ROOT的设备是不安全环境。', [
            { text: '继续', onPress: () => { } },
            { text: '退出', onPress: () => {
                    sessionStorage.clear();
                    navigator['app'].exitApp();
                } },
        ]);
    }
    startCountdown() {
        let flag = setInterval(() => {
            if (this.countdown > 0) {
                this.countdown--;
            }
            else {
                clearInterval(flag);
            }
        }, 1000);
    }
    resend() {
        this.countdown = 60;
        this.startCountdown();
        this.sendSms();
    }
    send() {
        // 判断验证码
        if (this.verifyCodeUser.toUpperCase().trim().length == 0) {
            this.http.showToast('验证码不能为空，请输入');
            return;
        }
        if (this.verifyCode.toUpperCase() !== this.verifyCodeUser.toUpperCase()) {
            this.http.showToast('验证码不正确，请重新输入');
            return;
        }
        this.unlockStep = 1;
        this.startCountdown();
        this.sendSms();
    }
    sendSms() {
        this.http.getNotHeard(`rcp/open/api/getSmsVerifyCode?mobile=` + this.userMobile).subscribe(data => {
            //console.warn(data);
            if (data['code'] == '0') {
                //alert(data['data']); ////REMOVE
                //console.warn(data['data']);
            }
        });
    }
    unlock() {
        /*
        if(this.sms.trim().length == 0){
            this.http.showToast('短信验证码不能为空');
            return;
        }
        */
        let cond = {
            mobile: this.userMobile,
            smsVerifyCode: this.sms
        };
        this.http.get(`rcp/api/user/unlockSmsUser`, cond, '', '').subscribe(data => {
            if (data['data'] == 1) {
                this.http.showToast('您的帐号已解除锁定，请重新登录');
                setTimeout(() => {
                    var ip = sessionStorage.getItem('ip');
                    sessionStorage.clear();
                    sessionStorage.setItem('ip', ip);
                    //this.router.navigate(['/login']);
                    location.reload();
                }, 3000);
            }
            else {
                this.http.showToast('解除锁定失败请稍后再试或者联系管理员');
            }
        });
    }
    // 获取验证码
    getVerifyCode() {
        this.verifyCodeJpg = 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
        this.http.getNotHeardBlob(`rcp/open/api/verifyCode?uuid=` + (this.uuid === null ? null : this.primeArr[this.getRan(0, 9)] + this.uuid + this.primeArr[this.getRan(0, 9)])).subscribe(data => {
            this.verifyCodeJpg = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(data.body));
            this.verifyCode = data.headers.get('verifyCode');
        });
    }
    logout() {
        this.showSelfUnlock = false;
        var ip = sessionStorage.getItem('ip');
        sessionStorage.clear();
        sessionStorage.setItem('ip', ip);
        location.reload();
        //this.router.navigate(['/login']);
    }
    toggleOffline() {
        this.showOffline = true;
        if (localStorage.getItem('offlineData') !== null) {
            this.offlineDataObj = JSON.parse(localStorage.getItem('offlineData'));
        }
        else {
            this.offlineDataObj = [];
        }
    }
    saveOfflineData() {
        let flag = true;
        for (let item in this.offlineObj) {
            if (this.offlineObj[item].trim() == '') {
                flag = false;
                break;
            }
        }
        if (!flag) {
            this.status = 'fail';
            this.tip = '所有字段都需要填写';
            return false;
        }
        else {
            console.warn(this.offlineDataObj);
            this.offlineDataObj.push(this.offlineObj);
            localStorage.setItem('offlineData', JSON.stringify(this.offlineDataObj));
            this.tip = '已保存';
            this.status = 'success';
            this.offlineObj = {
                patientName: '',
                patientMobile: '',
                patientIdenno: '',
                tubeCode: '',
                gatherPerson: '',
                gatherPoint: '',
            };
            setTimeout(() => {
                this.status = '';
                this.tip = '';
            }, 2000);
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["ModalService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_10__["Device"] }
];
LoginPage.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@routeAnimation',] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        animations: [
            _shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map