(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-collection-statistics-collection-statistics-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common/collection-statistics/collection-statistics.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/collection-statistics/collection-statistics.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonCollectionStatisticsCollectionStatisticsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回</span>\n            </div>\n            <span class=\"header-title\">采集量统计</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"tabContentCss\">\n\n    <div class=\"tab-top\">\n        <div  class=\"bar-sample-number\">\n            <div>\n                <select [(ngModel)]=\"SelectTime\" (ngModelChange)=\"changeTime()\" class=\"select-time\">\n                    <ng-container *ngFor=\"let time of timeList\">\n                        <option [value]=\"time.id\" >{{time.name}}</option>\n                    </ng-container>\n                </select>\n            </div>\n            <div class=\"time-range\">{{beginDate | date: 'yyyy年MM月dd日'}} - {{endDate | date: 'yyyy年MM月dd日'}}</div>\n        </div>\n    </div>\n\n    <div class=\"list-item-button\">\n        <div (click)=\"changePersonType('个人')\" [ngClass]=\"selectPersonnelType === '个人'? 'selectButton': 'notSelectButton'\">个人</div>\n        <div (click)=\"changePersonType('采集点')\" [ngClass]=\"selectPersonnelType === '采集点'? 'selectButton1': 'notSelectButton'\">采集点</div>\n    </div>\n\n    <div *ngIf=\"selectPersonnelType === '个人'\" class=\"list-css\">\n        <div class=\"total\">\n            <div>{{beginDate | date: 'yyyy-MM-dd'}} 至 {{endDate | date: 'yyyy-MM-dd'}}</div>\n            <div>采集管数：{{totalTubeNum}}</div>\n            <div>采集人数：{{totalPatientNum}}</div>\n        </div>\n        <div class=\"am-demo-page\">\n            <ng-container *ngIf=\"collectNumByUseList.length >0\">\n                <List [className]=\"'my-list'\">\n                    <ng-container *ngFor=\"let info of collectNumByUseList;let i = index\">\n                        <SwipeAction style=\"background-color: gray\">\n                            <ListItem>\n                                <div>{{info.collectDate | date : 'yyyy-MM-dd HH:mm:ss'}}</div>\n                                <div>采集管数：{{info.tubeNum}}</div>\n                                <div>采集人数：{{info.patientNum}}</div>\n                            </ListItem>\n                        </SwipeAction>\n                    </ng-container>\n                </List>\n            </ng-container>\n        </div>\n    </div>\n\n    <div *ngIf=\"selectPersonnelType === '采集点'\" class=\"list-css\">\n        <div class=\"am-demo-page\">\n            <ng-container *ngIf=\"userCollectDayNumList.length >0\">\n                <List [className]=\"'my-list'\">\n                    <ng-container *ngFor=\"let info of userCollectDayNumList;let i = index\">\n                        <SwipeAction style=\"background-color: gray\">\n                            <ListItem>\n                                <div>{{info.collectDate | date : 'yyyy-MM-dd HH:mm:ss'}} ({{info.censusAddress}})</div>\n                                <div>采集管数：{{info.tubeNum}}</div>\n                                <div>采集人数：{{info.patientNum}}</div>\n                            </ListItem>\n                        </SwipeAction>\n                    </ng-container>\n                </List>\n            </ng-container>\n        </div>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/common/collection-statistics/collection-statistics.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/common/collection-statistics/collection-statistics.module.ts ***!
      \******************************************************************************/

    /*! exports provided: CollectionStatisticsModule */

    /***/
    function srcAppCommonCollectionStatisticsCollectionStatisticsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionStatisticsModule", function () {
        return CollectionStatisticsModule;
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


      var _collection_statistics_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./collection-statistics.page */
      "./src/app/common/collection-statistics/collection-statistics.page.ts");

      var CollectionStatisticsModule = function CollectionStatisticsModule() {
        _classCallCheck(this, CollectionStatisticsModule);
      };

      CollectionStatisticsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _collection_statistics_page__WEBPACK_IMPORTED_MODULE_9__["CollectionStatisticsPage"]
        }])],
        declarations: [_collection_statistics_page__WEBPACK_IMPORTED_MODULE_9__["CollectionStatisticsPage"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]]
      })], CollectionStatisticsModule);
      /***/
    },

    /***/
    "./src/app/common/collection-statistics/collection-statistics.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/common/collection-statistics/collection-statistics.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonCollectionStatisticsCollectionStatisticsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tabContentCss {\n  height: calc(100vh - 56px);\n  overflow: auto;\n}\n\n.tab-top {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n.bar-sample-number {\n  padding: 10px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: 73px;\n  background: #91D5FF;\n  border: 1px solid #707070;\n  opacity: 1;\n}\n\n.select-time {\n  height: 27px;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 27px;\n  color: #707070;\n  opacity: 1;\n  border: 0;\n  background: #91D5FF;\n}\n\n.time-range {\n  height: 21px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 21px;\n  color: #707070;\n  opacity: 1;\n  margin-top: 5px;\n  padding-left: 5px;\n}\n\n.bar-button {\n  padding: 4px;\n  font-size: 1rem;\n  text-align: center;\n  color: #005BAC;\n  border: 1px solid #bcbcbc;\n  width: 30%;\n  border-radius: 3px;\n  background-color: white;\n}\n\n.my-list .spe .am-list-extra {\n  flex-basis: initial;\n}\n\n.title {\n  padding-right: 10px;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-extra {\n  overflow: visible;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-content {\n  font-size: 0.9rem;\n}\n\n:host ::ng-deep .am-list-body .am-list-item {\n  border-bottom: 3px solid #EFEFEF;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-extra {\n  flex-basis: 10%;\n}\n\n.bar-footer {\n  border-top: 1px solid #bcbcbc;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.bar-footer-end {\n  width: 30%;\n  font-size: 1.4rem;\n  border-right: 1px solid #bcbcbc;\n  text-align: center;\n  background-color: #1095FF;\n  color: white;\n  padding-top: 0.9rem;\n  padding-bottom: 0.9rem;\n}\n\n.bar-footer-scan {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n  background-color: #005BAC;\n  color: white;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 8px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n  margin-left: -5px;\n}\n\n.header-number {\n  float: right;\n  text-align: center;\n  margin-top: 6px;\n  font-size: 1rem;\n}\n\n.closeBoxBtn {\n  float: right;\n  background-color: #005BAC;\n  color: white;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 0.8rem;\n}\n\n.am-demo-page {\n  display: flex;\n  flex-direction: column;\n}\n\n.list-item-button {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  background-color: white;\n  padding: 0.3rem 1rem 0.3rem 0.5rem;\n  border-bottom: 1px solid #e4e4e4;\n}\n\n.list-item-button > span {\n  font-size: 1rem;\n  color: white;\n  background-color: #005BAC;\n  border-bottom: 1px solid #e4e4e4;\n  border-radius: 4px;\n  padding: 5px 10px 5px 10px;\n}\n\n.selectButton {\n  font-size: 1rem;\n  color: white;\n  background-color: #1890FF;\n  border-bottom: 1px solid #e4e4e4;\n  border-radius: 4px 0 0 4px;\n  padding: 5px 10px 5px 10px;\n}\n\n.selectButton1 {\n  font-size: 1rem;\n  color: white;\n  background-color: #1890FF;\n  border-bottom: 1px solid #e4e4e4;\n  border-radius: 0 4px 4px 0;\n  padding: 5px 10px 5px 10px;\n}\n\n.notSelectButton {\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.65);\n  background: rgba(0, 0, 0, 0.02);\n  border-bottom: 1px solid #e4e4e4;\n  padding: 5px 10px 5px 10px;\n}\n\n.list-css {\n  background: white;\n  height: calc(100vh - 184px);\n}\n\n.total {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 21px;\n  border-bottom: 1px solid #e4e4e4;\n  padding: 5px 10px 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbGxlY3Rpb24tc3RhdGlzdGljcy9jb2xsZWN0aW9uLXN0YXRpc3RpY3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBSUY7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtBQUdGOztBQURBO0VBQ0UsZ0NBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjs7QUFGQTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFPRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVFGOztBQU5BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFTRjs7QUFQQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUEE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFVRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUFVRjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFXRjs7QUFUQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFZRjs7QUFWQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtBQWFGOztBQVhBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQWNGOztBQVpBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0FBZUYiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29sbGVjdGlvbi1zdGF0aXN0aWNzL2NvbGxlY3Rpb24tc3RhdGlzdGljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiQ29udGVudENzcyB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRhYi10b3B7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYmFyLXNhbXBsZS1udW1iZXJ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDczcHg7XG4gIGJhY2tncm91bmQ6ICM5MUQ1RkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWxlY3QtdGltZXtcbiAgaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogIzkxRDVGRjtcbn1cbi50aW1lLXJhbmdle1xuICBoZWlnaHQ6IDIxcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmJhci1idXR0b257XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiMwMDVCQUM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiY2JjYmM7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cblxuXG4ubXktbGlzdCAuc3BlIC5hbS1saXN0LWV4dHJhIHtcbiAgZmxleC1iYXNpczogaW5pdGlhbDtcbn1cblxuLnRpdGxle1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lIC5hbS1saXN0LWV4dHJhe1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtY29udGVudHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgIC5hbS1saXN0LWJvZHkgLmFtLWxpc3QtaXRlbXtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNFRkVGRUY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lIC5hbS1saXN0LWV4dHJhe1xuICBmbGV4LWJhc2lzOiAxMCU7XG59XG5cbi5iYXItZm9vdGVye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2JjYmNiYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmFyLWZvb3Rlci1lbmR7XG4gIHdpZHRoOiAzMCU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmNiY2JjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDk1RkY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDAuOXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuOXJlbTtcbn1cbi5iYXItZm9vdGVyLXNjYW57XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QkFDO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwLjdyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjdyZW07XG59XG5cblxuOmhvc3QgOjpuZy1kZWVwICAudG9vbGJhci10aXRsZS1kZWZhdWx0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5oZWFkZXItaWNvbntcbiAgd2lkdGg6IDMwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweFxufVxuLmhlYWRlci1mb250e1xuICB3aWR0aDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi10b3A6IDhweFxufVxuLmhlYWRlci10aXRsZXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuLmhlYWRlci1udW1iZXJ7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmNsb3NlQm94QnRue1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmFtLWRlbW8tcGFnZXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxpc3QtaXRlbS1idXR0b257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW0gMC4zcmVtIDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG59XG5cbi5saXN0LWl0ZW0tYnV0dG9uID5zcGFue1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG59XG4uc2VsZWN0QnV0dG9ue1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTBGRjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbn1cbi5zZWxlY3RCdXR0b24xe1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTBGRjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbn1cbi5ub3RTZWxlY3RCdXR0b257XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbn1cbi5saXN0LWNzc3tcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE4NHB4KTtcbn1cbi50b3RhbHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNGU0O1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/common/collection-statistics/collection-statistics.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/common/collection-statistics/collection-statistics.page.ts ***!
      \****************************************************************************/

    /*! exports provided: CollectionStatisticsPage */

    /***/
    function srcAppCommonCollectionStatisticsCollectionStatisticsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionStatisticsPage", function () {
        return CollectionStatisticsPage;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var Ocr = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Ocr;

      var CollectionStatisticsPage = /*#__PURE__*/function () {
        function CollectionStatisticsPage(router, navCtrl, http, platform, datePipe, deleteModal) {
          var _this = this;

          _classCallCheck(this, CollectionStatisticsPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.http = http;
          this.platform = platform;
          this.datePipe = datePipe;
          this.deleteModal = deleteModal;
          this.collectNumByUseList = [];
          this.SelectTime = 5;
          this.beginDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])(new Date(), 4));
          this.endDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(new Date());
          this.timeList = [{
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
          }, {
            id: 11,
            name: '11日内记录 '
          }, {
            id: 12,
            name: '12日内记录 '
          }, {
            id: 13,
            name: '13日内记录 '
          }, {
            id: 14,
            name: '14日内记录 '
          }, {
            id: 15,
            name: '15日内记录 '
          }];
          this.selectPersonnelType = '个人';
          this.userCollectDayNumList = []; // 控制app返回按钮

          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.routeBack();
          });
        }

        _createClass(CollectionStatisticsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.selectPersonnelType = '个人';
            this.getCollectNumByUser();
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

            if (this.selectPersonnelType === '个人') {
              this.getCollectNumByUser();
            } else {
              this.listUserCollectDayNum();
            }
          }
        }, {
          key: "changePersonType",
          value: function changePersonType(value) {
            this.selectPersonnelType = value;

            if (value === '个人') {
              this.getCollectNumByUser();
            } else {
              this.listUserCollectDayNum();
            }
          } // 调用后台接口
          // 根据采集员查询采集相关数量

        }, {
          key: "getCollectNumByUser",
          value: function getCollectNumByUser() {
            var _this2 = this;

            this.collectNumByUseList = [];
            var condition = {
              "beginDate": this.beginDate,
              "endDate": this.endDate
            };
            this.http.post("rcp/api/box/operate/getCollectNumByUser", condition, '根据采集员查询采集相关数量', '根据采集员查询采集相关数量失败', {
              load: true
            }).subscribe(function (data) {
              if (data['isSuccess']) {
                _this2.collectNumByUseList = data['data']['dayCollects'];
                _this2.totalTubeNum = data['data']['totalTubeNum'];
                _this2.totalPatientNum = data['data']['totalPatientNum'];
              }
            });
          } // 查询采集员不同采集点的相关采集数量

        }, {
          key: "listUserCollectDayNum",
          value: function listUserCollectDayNum() {
            var _this3 = this;

            this.userCollectDayNumList = [];
            var condition = {
              "beginDate": this.beginDate,
              "endDate": this.endDate
            };
            this.http.post("rcp/api/box/operate/listUserCollectDayNum", condition, '查询采集员不同采集点的相关采集数量', '查询采集员不同采集点的相关采集数量失败', {
              load: true
            }).subscribe(function (data) {
              if (data['isSuccess']) {
                _this3.userCollectDayNumList = data['data'];
              }
            });
          }
        }]);

        return CollectionStatisticsPage;
      }();

      CollectionStatisticsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]
        }, {
          type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__["ModalService"]
        }];
      };

      CollectionStatisticsPage.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@routeAnimation']
        }]
      };
      CollectionStatisticsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collection-statistics',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./collection-statistics.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common/collection-statistics/collection-statistics.page.html"))["default"],
        animations: [_shared__WEBPACK_IMPORTED_MODULE_5__["routeAnimation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./collection-statistics.page.scss */
        "./src/app/common/collection-statistics/collection-statistics.page.scss"))["default"]]
      })], CollectionStatisticsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-collection-statistics-collection-statistics-module-es5.js.map