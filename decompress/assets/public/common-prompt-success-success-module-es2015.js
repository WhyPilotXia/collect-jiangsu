(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-prompt-success-success-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/prompt/success/success.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/prompt/success/success.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回</span>\n            </div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"tabContentCss\">\n\n    <div style=\"background-color: white; padding-top: 10px\">\n        <Result [img]=\"img2\" [title]=\"title\" [message]=\"message\">\n            <ng-template #img2>\n                <!--<Icon id=\"spe\" [type]=\"'check-circle'\" [color]=\"'#1095FF'\"></Icon>-->\n                <ion-icon name=\"checkmark-circle-outline\" class=\"spe\"></ion-icon>\n            </ng-template>\n        </Result>\n\n        <div class=\"button\" (click)=\"click()\">\n            <span>{{btnCon}}</span>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/common/prompt/success/success.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/prompt/success/success.module.ts ***!
  \*********************************************************/
/*! exports provided: SuccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessModule", function() { return SuccessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./success.page */ "./src/app/common/prompt/success/success.page.ts");










let SuccessModule = class SuccessModule {
};
SuccessModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _success_page__WEBPACK_IMPORTED_MODULE_9__["SuccessPage"] }])
        ],
        providers: [
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Keyboard"]
        ],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_9__["SuccessPage"]]
    })
], SuccessModule);



/***/ }),

/***/ "./src/app/common/prompt/success/success.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/common/prompt/success/success.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button {\n  background-color: #005BAC;\n  text-align: center;\n  color: white;\n  border-radius: 5px;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n  width: 100vw;\n}\n\n.spe {\n  width: 100px;\n  height: 100px;\n  margin-top: -30px;\n  margin-left: -20px;\n  color: #005BAC;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 1rem;\n  margin-top: 6px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3Byb21wdC9zdWNjZXNzL3N1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9wcm9tcHQvc3VjY2Vzcy9zdWNjZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHdpZHRoOiAxMDB2dztcbn1cbi5zcGV7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgY29sb3I6ICMwMDVCQUM7XG59XG46aG9zdCA6Om5nLWRlZXAgIC50b29sYmFyLXRpdGxlLWRlZmF1bHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmhlYWRlci1pY29ue1xuICB3aWR0aDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuLmhlYWRlci1mb250e1xuICB3aWR0aDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tdG9wOiA2cHhcbn1cbi5oZWFkZXItdGl0bGV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/prompt/success/success.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/prompt/success/success.page.ts ***!
  \*******************************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");





let SuccessPage = class SuccessPage {
    constructor(router, navCtrl, route, platform) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.platform = platform;
        // 控制app返回按钮
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.routeBack();
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            this.ContentId = data.ContentId;
            this.Barcode = data.Barcode;
            switch (this.ContentId) {
                case '1':
                    this.message = this.Barcode + '箱已成功封箱';
                    this.title = '封箱成功';
                    this.btnCon = '继续扫描新的箱码';
                    break;
                case '2':
                    this.message = this.Barcode + '管已成功封管';
                    this.title = '封管成功';
                    this.btnCon = '继续扫描新的预置码';
                    break;
            }
        });
    }
    ionViewWillEnter() {
        switch (this.ContentId) {
            case '1':
                this.message = this.Barcode + '箱已成功封箱';
                this.title = '封箱成功';
                this.btnCon = '继续扫描新的箱码';
                break;
            case '2':
                this.message = this.Barcode + '管已成功封管';
                this.title = '封管成功';
                this.btnCon = '继续扫描新的预置码';
                break;
        }
    }
    clean() {
        this.title = '';
        this.message = '';
        this.ContentId = undefined;
        this.Barcode = undefined;
    }
    // 路由返回
    routeBack() {
        // this.navCtrl.back();
        this.click();
    }
    click() {
        switch (this.ContentId) {
            case '1':
                this.clean();
                this.router.navigate(['/tabs/tab1']);
                break;
            case '2':
                this.clean();
                this.router.navigate(['/BottleBarcode']);
                break;
        }
    }
};
SuccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
SuccessPage.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@routeAnimation',] }]
};
SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/prompt/success/success.page.html")).default,
        animations: [
            _shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./success.page.scss */ "./src/app/common/prompt/success/success.page.scss")).default]
    })
], SuccessPage);



/***/ })

}]);
//# sourceMappingURL=common-prompt-success-success-module-es2015.js.map