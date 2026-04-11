(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-bottle-list-bottle-list-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/bottle-list/bottle-list.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/bottle-list/bottle-list.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回</span>\n            </div>\n            <span class=\"header-title\">试管列表</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"tabContentCss\">\n\n    <div class=\"tab-top\">\n        <div  class=\"bar-sample-number\">\n            <span>{{titleInfo}}箱内试管数量</span>\n            <span class=\"number\">{{bottleList.length}}</span>\n        </div>\n        <ng-container *ngIf=\"isCloseBox == '0'\">\n            <div class=\"bar-button\" (click) = \"confirmBox()\">\n                封箱\n            </div>\n        </ng-container>\n    </div>\n\n    <div class=\"am-demo-page\">\n        <ng-container *ngIf=\"bottleList.length >0;else showEmpty\">\n            <List [className]=\"'my-list'\">\n                <ng-container *ngFor=\"let info of bottleList;let i = index\">\n                    <SwipeAction style=\"background-color: gray\" [right]=\"isCloseBox === '0'? right: false\" (onOpen)=\"openDelete(info.tubeBarId,info.tubeBarcode)\">\n                        <ListItem [extra]=\"info.patientCount.toString()\" [arrow]=\"'horizontal'\" (onClick)=\"onClick(info,i)\">\n                            <span style=\"color: #535353\">{{i+1}}.</span>{{info.tubeBarcode}}\n                            <!--<ng-container *ngIf=\"!info.closedTube\">-->\n                                <!--<span class=\"closeBoxBtn\" (click)=\"confirmTube(info.tubeBarcode,info.tubeBarId, $event)\">封管</span>-->\n                            <!--</ng-container>-->\n                        </ListItem>\n                    </SwipeAction>\n                </ng-container>\n            </List>\n        </ng-container>\n        <ng-template #showEmpty>\n            <img src=\"../../../assets/icon/empty.svg\" width=\"150\" height=\"150\" style=\"margin-top: 100px;align-items: center;width: 100%;\">\n        </ng-template>\n    </div>\n\n</ion-content>\n\n<ng-container *ngIf=\"isCloseBox == '0'\">\n    <ion-footer>\n        <div class=\"bar-footer\">\n            <div class=\"bar-footer-scan\" (click) = \"clickScan()\">扫描新试管码</div>\n        </div>\n    </ion-footer>\n</ng-container>");

/***/ }),

/***/ "./src/app/common/bottle-list/bottle-list.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/bottle-list/bottle-list.module.ts ***!
  \**********************************************************/
/*! exports provided: BottleListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleListModule", function() { return BottleListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _bottle_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bottle-list.page */ "./src/app/common/bottle-list/bottle-list.page.ts");
/* harmony import */ var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/serviceCommon.module */ "./src/app/service/serviceCommon.module.ts");










let BottleListModule = class BottleListModule {
};
BottleListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_9__["ServiceCommonModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _bottle_list_page__WEBPACK_IMPORTED_MODULE_8__["BottleListPage"] }])
        ],
        declarations: [_bottle_list_page__WEBPACK_IMPORTED_MODULE_8__["BottleListPage"]]
    })
], BottleListModule);



/***/ }),

/***/ "./src/app/common/bottle-list/bottle-list.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/common/bottle-list/bottle-list.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabContentCss {\n  max-height: 90vh;\n  overflow: auto;\n}\n\n.tab-top {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n.bar-sample-number {\n  padding: 4px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  width: 68%;\n}\n\n.bar-sample-number > .number {\n  margin-left: 10px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.bar-button {\n  padding: 4px;\n  font-size: 1rem;\n  text-align: center;\n  color: #005BAC;\n  border: 1px solid #bcbcbc;\n  width: 30%;\n  border-radius: 3px;\n  background-color: white;\n}\n\n.my-list .spe .am-list-extra {\n  flex-basis: initial;\n}\n\n.title {\n  padding-right: 10px;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-extra {\n  overflow: visible;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-content {\n  font-size: 0.9rem;\n}\n\n:host ::ng-deep .am-list-body .am-list-item {\n  border-bottom: 1px solid #EFEFEF;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-extra {\n  flex-basis: 10%;\n}\n\n.bar-footer {\n  border-top: 1px solid #bcbcbc;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.bar-footer-end {\n  width: 30%;\n  font-size: 1.4rem;\n  border-right: 1px solid #bcbcbc;\n  text-align: center;\n  background-color: #1095FF;\n  color: white;\n  padding-top: 0.9rem;\n  padding-bottom: 0.9rem;\n}\n\n.bar-footer-scan {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n  background-color: #005BAC;\n  color: white;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 8px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n  margin-left: -5px;\n}\n\n.header-number {\n  float: right;\n  text-align: center;\n  margin-top: 6px;\n  font-size: 1rem;\n}\n\n.closeBoxBtn {\n  float: right;\n  background-color: #005BAC;\n  color: white;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 0.8rem;\n}\n\n.am-demo-page {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2JvdHRsZS1saXN0L2JvdHRsZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGdDQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVFGOztBQUxBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVFGOztBQUxBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBUUYiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vYm90dGxlLWxpc3QvYm90dGxlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYkNvbnRlbnRDc3Mge1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRhYi10b3B7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5iYXItc2FtcGxlLW51bWJlcntcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNjglO1xufVxuXG4uYmFyLXNhbXBsZS1udW1iZXIgPiAubnVtYmVye1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFyLWJ1dHRvbntcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IzAwNUJBQztcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmNiYztcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi5teS1saXN0IC5zcGUgLmFtLWxpc3QtZXh0cmEge1xuICBmbGV4LWJhc2lzOiBpbml0aWFsO1xufVxuXG4udGl0bGV7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtZXh0cmF7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtbGluZSAuYW0tbGlzdC1jb250ZW50e1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAgLmFtLWxpc3QtYm9keSAuYW0tbGlzdC1pdGVte1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRUZFRjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtZXh0cmF7XG4gIGZsZXgtYmFzaXM6IDEwJTtcbn1cblxuLmJhci1mb290ZXJ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmNiY2JjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5iYXItZm9vdGVyLWVuZHtcbiAgd2lkdGg6IDMwJTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiY2JjYmM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOTVGRjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMC45cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC45cmVtO1xufVxuLmJhci1mb290ZXItc2NhbntcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDAuN3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuN3JlbTtcbn1cblxuXG46aG9zdCA6Om5nLWRlZXAgIC50b29sYmFyLXRpdGxlLWRlZmF1bHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmhlYWRlci1pY29ue1xuICB3aWR0aDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4XG59XG4uaGVhZGVyLWZvbnR7XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLXRvcDogOHB4XG59XG4uaGVhZGVyLXRpdGxle1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG4uaGVhZGVyLW51bWJlcntcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY2xvc2VCb3hCdG57XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uYW0tZGVtby1wYWdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/bottle-list/bottle-list.page.ts":
/*!********************************************************!*\
  !*** ./src/app/common/bottle-list/bottle-list.page.ts ***!
  \********************************************************/
/*! exports provided: BottleListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottleListPage", function() { return BottleListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var ocr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ocr */ "./node_modules/ocr/dist/esm/index.js");
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/http-client.service */ "./src/app/shared/http-client.service.ts");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");











const { Ocr } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let BottleListPage = class BottleListPage {
    constructor(router, navCtrl, http, platform, route, deleteModal) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.platform = platform;
        this.route = route;
        this.deleteModal = deleteModal;
        this.titleInfo = '';
        this.contentInfo = '';
        this.bottleList = [];
        this.isCloseBox = '0'; // 0 开箱 1 封箱
        this.right = [
            {
                text: '删除',
                onPress: () => {
                    this.showDelete();
                },
                className: 'btnClass'
            }
        ];
        // 控制app返回按钮
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.routeBack();
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.titleInfo = sessionStorage.getItem('boxBarcode');
        this.isCloseBox = sessionStorage.getItem('isCloseBox');
        // 获取管列表
        this.ListBoxTube(sessionStorage.getItem('boxBarId'));
    }
    // 路由返回
    routeBack() {
        this.router.navigate(['/BoxList']);
        //   this.router.navigate(['/tabs/tab1']);
    }
    onClick(value, i) {
        sessionStorage.setItem('tubeBarcode', value.tubeBarcode);
        sessionStorage.setItem('tubeBarId', value.tubeBarId);
        if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_8__["isNotNullOrUndefined"])(value.closedTube) || !value.closedTube) {
            if (this.isCloseBox === '1') {
                sessionStorage.setItem('isClosedTube', '1');
            }
            else {
                sessionStorage.setItem('isClosedTube', '0');
            }
        }
        else {
            sessionStorage.setItem('isClosedTube', '1');
        }
        this.router.navigate(['/PersonList']);
    }
    // 打开删除按钮时，获取当前管子的UUID
    openDelete(uuid, tubeBarcode) {
        this.tubeUuid = uuid;
        this.tubeBarcode = tubeBarcode;
    }
    // 删除采集管
    showDelete() {
        this.deleteModal.alert('', '确认删除?', [
            { text: '取消', onPress: () => { } },
            { text: '删除', onPress: () => {
                    this.deleteTube();
                } }
        ]);
    }
    clickScan() {
        this.router.navigate(['/BottleBarcode']);
    }
    // 调用后台接口
    // 根据箱查询所有管
    ListBoxTube(uuid) {
        this.bottleList = [];
        const condition = {
            boxBarId: uuid,
        };
        this.http
            .get(`rcp/api/tube/operate/listBoxTube`, condition, '根据箱查询所有管', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.getBoxTube)
            .subscribe(data => {
            if (data['isSuccess']) {
                this.bottleList = data['data'];
            }
        });
    }
    // 封箱
    confirmBox() {
        const condition = {
            boxBarcode: sessionStorage.getItem('boxBarcode'),
            boxState: 'CloseBox'
        };
        this.http
            .get(`rcp/api/box/operate/scan`, condition, '扫描转运箱条码', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.confirmBox)
            .subscribe(data => {
            if (data['isSuccess']) {
                const successNavigationExtras = {
                    queryParams: {
                        ContentId: '1',
                        Barcode: sessionStorage.getItem('boxBarcode')
                    }
                };
                this.router.navigate(['/Success'], successNavigationExtras);
            }
        });
    }
    // 封管操作
    confirmTube(tubebarcode, tubebarcodeId, $event) {
        $event.stopPropagation();
        const condition = {
            boxBarId: sessionStorage.getItem('boxBarId'),
            tubeBarId: tubebarcodeId,
            tubeBarcode: tubebarcode,
            tubeState: 'CloseBar'
        };
        this.http
            .get(`rcp/api/tube/operate/confirmTube`, condition, '确认采集管', 'false')
            .subscribe(data => {
            if (data['code'] === '0') {
                if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_8__["isNotNullOrUndefined"])(data['message'])) {
                    this.http.showToast(data['message']);
                    // 封管时已封箱-扫码新箱
                    // const navigationExtras: NavigationExtras = {
                    //     queryParams: { boxBarcode: sessionStorage.getItem('boxBarcode')}
                    // };
                    // this.router.navigate(['/tabs/tab1'], navigationExtras);
                }
                else {
                    this.http.showToast('封管成功');
                    // 封管后刷新界面
                    this.ionViewWillEnter();
                }
            }
        });
    }
    deleteTube() {
        const condition = {
            boxBarId: sessionStorage.getItem('boxBarId'),
            tubeBarId: this.tubeUuid,
            tubeBarcode: this.tubeBarcode
        };
        this.http
            .get(`rcp/api/tube/operate/deleteTube`, condition, '删除采集管', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.deleteSample)
            .subscribe(data => {
            // 删除成功后，重新获取当前管子里的标本列表
            if (data['isSuccess']) {
                this.http.showToast('删管成功');
                this.ListBoxTube(sessionStorage.getItem('boxBarId'));
            }
        });
    }
};
BottleListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_7__["HttpClientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__["ModalService"] }
];
BottleListPage.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@routeAnimation',] }]
};
BottleListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottle-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bottle-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/bottle-list/bottle-list.page.html")).default,
        animations: [
            _shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bottle-list.page.scss */ "./src/app/common/bottle-list/bottle-list.page.scss")).default]
    })
], BottleListPage);



/***/ })

}]);
//# sourceMappingURL=common-bottle-list-bottle-list-module-es2015.js.map