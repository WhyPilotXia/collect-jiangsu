(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-transfer-box-list-transfer-box-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common/transfer-box-list/transfer-box-list.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/transfer-box-list/transfer-box-list.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonTransferBoxListTransferBoxListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回</span>\n            </div>\n            <span class=\"header-title\">转箱记录</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"tabContentCss\">\n\n    <div class=\"tab-top\">\n        <div  class=\"bar-sample-number\">\n            <div>\n                <select [(ngModel)]=\"SelectTime\" (ngModelChange)=\"changeTime()\" class=\"select-time\">\n                    <ng-container *ngFor=\"let time of timeList\">\n                        <option [value]=\"time.id\" >{{time.name}}</option>\n                    </ng-container>\n                </select>\n            </div>\n            <div class=\"time-range\">{{beginDate | date: 'yyyy年MM月dd日'}} - {{endDate | date: 'yyyy年MM月dd日'}}</div>\n        </div>\n    </div>\n\n    <div class=\"am-demo-page\">\n        <ng-container *ngIf=\"bottleList.length >0;else showEmpty\">\n            <List [className]=\"'my-list'\">\n                <ng-container *ngFor=\"let info of bottleList;let i = index\">\n                    <SwipeAction style=\"background-color: gray\">\n                        <ListItem>\n                            <div>{{info.transferTime | date : 'yyyy-MM-dd HH:mm:ss'}}</div>\n                            <div>原箱：{{info.oldBoxBarcode}}(-{{info.oldTubeCount}}管)</div>\n                            <div>新箱：{{info.newBoxBarcode}}({{info.newTubeCount}}+{{info.oldTubeCount}}={{info.newTubeTotalCount}}管）</div>\n                        </ListItem>\n                    </SwipeAction>\n                </ng-container>\n            </List>\n        </ng-container>\n        <ng-template #showEmpty>\n            <img src=\"../../../assets/icon/empty.svg\" width=\"150\" height=\"150\" style=\"margin-top: 100px;align-items: center;width: 100%;\">\n        </ng-template>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/common/transfer-box-list/transfer-box-list.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/common/transfer-box-list/transfer-box-list.module.ts ***!
      \**********************************************************************/

    /*! exports provided: TransferBoxListModule */

    /***/
    function srcAppCommonTransferBoxListTransferBoxListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransferBoxListModule", function () {
        return TransferBoxListModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd-mobile */
      "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../service/serviceCommon.module */
      "./src/app/service/serviceCommon.module.ts");
      /* harmony import */


      var _transfer_box_list_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./transfer-box-list.page */
      "./src/app/common/transfer-box-list/transfer-box-list.page.ts");

      var TransferBoxListModule = function TransferBoxListModule() {
        _classCallCheck(this, TransferBoxListModule);
      };

      TransferBoxListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _transfer_box_list_page__WEBPACK_IMPORTED_MODULE_9__["TransferBoxListPage"]
        }])],
        declarations: [_transfer_box_list_page__WEBPACK_IMPORTED_MODULE_9__["TransferBoxListPage"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]]
      })], TransferBoxListModule);
      /***/
    },

    /***/
    "./src/app/common/transfer-box-list/transfer-box-list.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/common/transfer-box-list/transfer-box-list.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonTransferBoxListTransferBoxListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tabContentCss {\n  height: calc(100vh - 56px);\n  overflow: auto;\n}\n\n.tab-top {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n.bar-sample-number {\n  padding: 10px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: 73px;\n  background: #91D5FF;\n  border: 1px solid #707070;\n  opacity: 1;\n}\n\n.select-time {\n  height: 27px;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 27px;\n  color: #707070;\n  opacity: 1;\n  border: 0;\n  background: #91D5FF;\n}\n\n.time-range {\n  height: 21px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 21px;\n  color: #707070;\n  opacity: 1;\n  margin-top: 5px;\n  padding-left: 5px;\n}\n\n.bar-button {\n  padding: 4px;\n  font-size: 1rem;\n  text-align: center;\n  color: #005BAC;\n  border: 1px solid #bcbcbc;\n  width: 30%;\n  border-radius: 3px;\n  background-color: white;\n}\n\n.my-list .spe .am-list-extra {\n  flex-basis: initial;\n}\n\n.title {\n  padding-right: 10px;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-extra {\n  overflow: visible;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-content {\n  font-size: 0.9rem;\n}\n\n:host ::ng-deep .am-list-body .am-list-item {\n  border-bottom: 3px solid #EFEFEF;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-extra {\n  flex-basis: 10%;\n}\n\n.bar-footer {\n  border-top: 1px solid #bcbcbc;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.bar-footer-end {\n  width: 30%;\n  font-size: 1.4rem;\n  border-right: 1px solid #bcbcbc;\n  text-align: center;\n  background-color: #1095FF;\n  color: white;\n  padding-top: 0.9rem;\n  padding-bottom: 0.9rem;\n}\n\n.bar-footer-scan {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n  background-color: #005BAC;\n  color: white;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 8px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n  margin-left: -5px;\n}\n\n.header-number {\n  float: right;\n  text-align: center;\n  margin-top: 6px;\n  font-size: 1rem;\n}\n\n.closeBoxBtn {\n  float: right;\n  background-color: #005BAC;\n  color: white;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 0.8rem;\n}\n\n.am-demo-page {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3RyYW5zZmVyLWJveC1saXN0L3RyYW5zZmVyLWJveC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUlGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGdDQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBRkE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBT0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFOQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBU0Y7O0FBUEE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVBBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVVGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBVUYiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vdHJhbnNmZXItYm94LWxpc3QvdHJhbnNmZXItYm94LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYkNvbnRlbnRDc3Mge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YWItdG9we1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJhci1zYW1wbGUtbnVtYmVye1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3M3B4O1xuICBiYWNrZ3JvdW5kOiAjOTFENUZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2VsZWN0LXRpbWV7XG4gIGhlaWdodDogMjdweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICM5MUQ1RkY7XG59XG4udGltZS1yYW5nZXtcbiAgaGVpZ2h0OiAyMXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5iYXItYnV0dG9ue1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjojMDA1QkFDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xuICB3aWR0aDogMzAlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLm15LWxpc3QgLnNwZSAuYW0tbGlzdC1leHRyYSB7XG4gIGZsZXgtYmFzaXM6IGluaXRpYWw7XG59XG5cbi50aXRsZXtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtbGluZSAuYW0tbGlzdC1leHRyYXtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lIC5hbS1saXN0LWNvbnRlbnR7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwICAuYW0tbGlzdC1ib2R5IC5hbS1saXN0LWl0ZW17XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRUZFRkVGO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtbGluZSAuYW0tbGlzdC1leHRyYXtcbiAgZmxleC1iYXNpczogMTAlO1xufVxuXG4uYmFyLWZvb3RlcntcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiY2JjYmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJhci1mb290ZXItZW5ke1xuICB3aWR0aDogMzAlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JjYmNiYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5NUZGO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwLjlyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjlyZW07XG59XG4uYmFyLWZvb3Rlci1zY2Fue1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMC43cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43cmVtO1xufVxuXG5cbjpob3N0IDo6bmctZGVlcCAgLnRvb2xiYXItdGl0bGUtZGVmYXVsdHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uaGVhZGVyLWljb257XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEwcHhcbn1cbi5oZWFkZXItZm9udHtcbiAgd2lkdGg6IDMwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tdG9wOiA4cHhcbn1cbi5oZWFkZXItdGl0bGV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cbi5oZWFkZXItbnVtYmVye1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jbG9zZUJveEJ0bntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QkFDO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5hbS1kZW1vLXBhZ2V7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/common/transfer-box-list/transfer-box-list.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/common/transfer-box-list/transfer-box-list.page.ts ***!
      \********************************************************************/

    /*! exports provided: TransferBoxListPage */

    /***/
    function srcAppCommonTransferBoxListTransferBoxListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransferBoxListPage", function () {
        return TransferBoxListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      "./node_modules/date-fns/esm/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared */
      "./src/app/shared/index.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var ocr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ocr */
      "./node_modules/ocr/dist/esm/index.js");
      /* harmony import */


      var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/http-client.service */
      "./src/app/shared/http-client.service.ts");
      /* harmony import */


      var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd-mobile */
      "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var Ocr = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Ocr;

      var TransferBoxListPage = /*#__PURE__*/function () {
        function TransferBoxListPage(router, navCtrl, http, platform, datePipe, deleteModal) {
          var _this = this;

          _classCallCheck(this, TransferBoxListPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.http = http;
          this.platform = platform;
          this.datePipe = datePipe;
          this.deleteModal = deleteModal;
          this.bottleList = [];
          this.SelectTime = 2;
          this.beginDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 1));
          this.endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(new Date());
          this.timeList = [{
            id: 2,
            name: '2日内记录 '
          }, {
            id: 3,
            name: '3日内记录 '
          }, {
            id: 4,
            name: '4日内记录 '
          }, {
            id: 5,
            name: '5日内记录 '
          }, {
            id: 6,
            name: '6日内记录 '
          }, {
            id: 7,
            name: '7日内记录 '
          }, {
            id: 8,
            name: '8日内记录 '
          }, {
            id: 9,
            name: '9日内记录 '
          }, {
            id: 10,
            name: '10日内记录 '
          }]; // 控制app返回按钮

          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.routeBack();
          });
        }

        _createClass(TransferBoxListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // 获取管列表
            this.ListBoxTube();
          } // 路由返回

        }, {
          key: "routeBack",
          value: function routeBack() {
            // this.router.navigate(['/BoxList']);
            this.router.navigate(['/tabs/tab1']);
          }
        }, {
          key: "changeTime",
          value: function changeTime() {
            this.beginDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), this.SelectTime - 1));
            this.ListBoxTube();
          } // 调用后台接口
          // 根据箱查询所有管

        }, {
          key: "ListBoxTube",
          value: function ListBoxTube() {
            var _this2 = this;

            this.bottleList = []; // const condition = {
            //     "beginDate": this.datePipe.transform(this.beginDate, 'yyyy-MM-dd HH:mm:ss'),
            //     "endDate": this.datePipe.transform(this.endDate, 'yyyy-MM-dd HH:mm:ss'),
            // };

            var condition = {
              "beginDate": this.beginDate,
              "endDate": this.endDate
            };
            this.http.post("rcp/api/box/operate/listBoxTransferLog", condition, '根据箱查询所有管', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.getBoxTube).subscribe(function (data) {
              if (data['isSuccess']) {
                _this2.bottleList = data['data'];
              }
            });
          }
        }]);

        return TransferBoxListPage;
      }();

      TransferBoxListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]
        }, {
          type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__["ModalService"]
        }];
      };

      TransferBoxListPage.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@routeAnimation']
        }]
      };
      TransferBoxListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transfer-box-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./transfer-box-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common/transfer-box-list/transfer-box-list.page.html"))["default"],
        animations: [_shared__WEBPACK_IMPORTED_MODULE_5__["routeAnimation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./transfer-box-list.page.scss */
        "./src/app/common/transfer-box-list/transfer-box-list.page.scss"))["default"]]
      })], TransferBoxListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-transfer-box-list-transfer-box-list-module-es5.js.map