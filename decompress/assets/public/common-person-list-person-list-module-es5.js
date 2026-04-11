(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-person-list-person-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common/person-list/person-list.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/person-list/person-list.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonPersonListPersonListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回试管列表</span>\n            </div>\n            <span class=\"header-title\">管码 {{titleInfo}}</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"tabContentCss\">\n\n    <ng-container *ngIf=\"isScanModel == 'true'\">\n        <div class=\"tab-top\">\n            <div  class=\"bar-sample-number\">\n                <span>标本数量</span>\n                <span class=\"number\">{{personListLength}}</span>\n            </div>\n            <ng-container *ngIf=\"isClosedTube == '0'\">\n                <div  class=\"bar-button\" (click) = \"confirmTubeClick()\">\n                    封管\n                </div>\n            </ng-container>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"isScanModel == 'false'\">\n        <div class=\"tab-read-top\">\n            <div  class=\"bar-sample-read-number\">\n                <span>标本数量</span>\n                <span class=\"number\">{{personListLength}}</span>\n            </div>\n            <ng-container *ngIf=\"isClosedTube == '0'\">\n                <div  class=\"bar-read-button\" (click) = \"confirmTubeClick()\">\n                    封管\n                </div>\n                <ng-container *ngIf=\"personListLength < this.model;\">\n                    <select [(ngModel)]=\"SelectButtonPattern\"  (ngModelChange)=\"changePattern($event)\"\n                            style=\"border: 1px solid #bcbcbc;background-color: white; margin-left: 5px; border-radius: 5px\">\n                        <option value=\"1\" >扫描身份证</option>\n                        <option value=\"2\">扫描健康码</option>\n                        <option value=\"3\">证件读卡器</option>\n                    </select>\n                </ng-container>\n            </ng-container>\n        </div>\n    </ng-container>\n\n        <div class=\"am-demo-page\">\n            <ng-container *ngIf=\"personList.length >0;else showEmpty\">\n                <List [className]=\"'my-list'\">\n                    <ng-container *ngFor=\"let info of personList;let i = index\">\n                        <SwipeAction style=\"background-color: gray\" [right]=\"isClosedTube === '0' ? right : false\" (onOpen)=\"openDelete(info.id)\">\n                            <ListItem  [arrow]=\"'horizontal'\"\n                                       (onClick)=\"onClick(info,i)\">\n                                <div class=\"patient-info\">\n                                    <span class=\"no\">{{i+1}}.</span> <span class=\"name\">{{info.name}}</span> <span class=\"idenno\">{{info.identity}}</span>\n                                </div>\n                                <Brief>\n                                    <div class=\"patient-info\">\n                                        <span class=\"no\"></span>\n                                        <span class=\"memo\">{{info.memo}}</span>\n                                        <span class=\"idenno\">{{info.phone}}</span>\n                                    </div>\n                                </Brief>\n                            </ListItem>\n                        </SwipeAction>\n                    </ng-container>\n                </List>\n            </ng-container>\n            <ng-template #showEmpty>\n                <img src=\"../../../assets/icon/emptyTube.svg\" width=\"150\" height=\"150\" style=\"margin-top: 100px;align-items: center;width: 100%;\">\n            </ng-template>\n        </div>\n\n</ion-content>\n\n<ng-container *ngIf=\"isClosedTube == '0' && isScanModel == 'true'\">\n    <ion-footer>\n        <div class=\"bar-footer\">\n            <ng-container *ngIf=\"personListLength < this.model; else Tube\">\n                <div class=\"bar-footer-end\" (click) = \"notScan('2')\">手录</div>\n                <div class=\"bar-footer-scan\" (click) = \"scanIdentity()\">扫描身份证</div>\n            </ng-container>\n            <ng-template #Tube>\n                <div class=\"bar-footer-tube\" (click) = \"confirmTubeClick()\">封管</div>\n            </ng-template>\n        </div>\n    </ion-footer>\n</ng-container>\n\n<!--读卡器模式-->\n<ng-container *ngIf=\"isClosedTube == '0' && isScanModel == 'false'\">\n    <ion-footer>\n        <div class=\"bar-footer\">\n            <ng-container *ngIf=\"personListLength < this.model; else Tube\">\n                <div class=\"bar-footer-end\" (click) = \"notScan('2')\">手录</div>\n                <div class=\"bar-footer-scan\" (click) = \"clickIdentity()\">{{ButtonName}}</div>\n            </ng-container>\n            <ng-template #Tube>\n                <div class=\"bar-footer-tube\" (click) = \"confirmTubeClick()\">封管</div>\n            </ng-template>\n        </div>\n    </ion-footer>\n</ng-container>\n\n<div  class=\"person-load-bar\">\n    <ion-spinner icon=\"android\" class=\"load-css\"></ion-spinner>\n</div>";
      /***/
    },

    /***/
    "./src/app/common/person-list/person-list.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/common/person-list/person-list.module.ts ***!
      \**********************************************************/

    /*! exports provided: PersonListModule */

    /***/
    function srcAppCommonPersonListPersonListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonListModule", function () {
        return PersonListModule;
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


      var _person_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./person-list.page */
      "./src/app/common/person-list/person-list.page.ts");
      /* harmony import */


      var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../service/serviceCommon.module */
      "./src/app/service/serviceCommon.module.ts");

      var PersonListModule = function PersonListModule() {
        _classCallCheck(this, PersonListModule);
      };

      PersonListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"], _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_9__["ServiceCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _person_list_page__WEBPACK_IMPORTED_MODULE_8__["PersonListPage"]
        }])],
        declarations: [_person_list_page__WEBPACK_IMPORTED_MODULE_8__["PersonListPage"]]
      })], PersonListModule);
      /***/
    },

    /***/
    "./src/app/common/person-list/person-list.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/common/person-list/person-list.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonPersonListPersonListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tabContentCss {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n\n.tab-top {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n.bar-sample-number {\n  padding: 4px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  width: 45%;\n}\n\n.bar-sample-number > .number {\n  margin-left: 10px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.bar-button {\n  padding: 4px;\n  font-size: 1rem;\n  text-align: center;\n  color: #005BAC;\n  border: 1px solid #bcbcbc;\n  width: 45%;\n  border-radius: 3px;\n  background-color: white;\n}\n\n.tab-read-top {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 8px;\n}\n\n.bar-sample-read-number {\n  padding: 4px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  width: 45%;\n}\n\n.bar-sample-read-number > .number {\n  margin-left: 10px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.bar-read-button {\n  padding: 4px;\n  font-size: 1rem;\n  text-align: center;\n  color: #005BAC;\n  border: 1px solid #bcbcbc;\n  width: 4.5rem;\n  border-radius: 3px;\n  background-color: white;\n}\n\n.my-list .spe .am-list-extra {\n  flex-basis: initial;\n}\n\n.title {\n  padding-right: 10px;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-extra {\n  overflow: visible;\n}\n\n:host ::ng-deep .my-list .am-list-item {\n  border-bottom: 1px solid #EFEFEF;\n}\n\n:host ::ng-deep .my-list .am-list-body .am-list-item:last-child {\n  border-bottom: 1px solid #EFEFEF;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-brief {\n  margin-top: 0;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-content {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.my-list {\n  font-size: 0.9rem;\n}\n\n.my-list .patient-info {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\n.my-list .no {\n  font-size: 0.8rem;\n  color: #888888;\n  width: 1.6rem;\n}\n\n.my-list .name {\n  display: inline-block;\n  font-size: 0.9rem;\n  width: 4.3rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.my-list .idenno {\n  margin-left: 5px;\n  font-size: 0.8rem;\n  color: #888888;\n}\n\n.my-list .memo {\n  display: inline-block;\n  font-size: 0.8rem;\n  width: 4.3rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.bar-footer {\n  border-top: 1px solid #cccccc;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  color: white;\n}\n\n.bar-footer-end {\n  width: 30%;\n  font-size: 1.2rem;\n  text-align: center;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n  background-color: white;\n  color: #005BAC;\n}\n\n.bar-footer-scan {\n  width: 70%;\n  font-size: 1.2rem;\n  text-align: center;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n  background-color: #005BAC;\n}\n\n.bar-footer-tube {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n  border-right: 1px solid #bcbcbc;\n  background-color: #005BAC;\n  color: white;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n\n.bar-footer-read-end {\n  width: 36%;\n  font-size: 1rem;\n  text-align: center;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n  background-color: white;\n  color: #005BAC;\n}\n\n.bar-footer-read-scan {\n  width: 64%;\n  font-size: 1.2rem;\n  text-align: center;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n  background-color: #005BAC;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -12px;\n}\n\n.header-font {\n  width: 100px;\n  float: left;\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 8px;\n  white-space: nowrap;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n}\n\n.header-number {\n  float: right;\n  text-align: center;\n  margin-top: 6px;\n  font-size: 1rem;\n}\n\n.person-load-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 99;\n  display: none;\n}\n\n.load-css {\n  position: absolute;\n  left: 40%;\n  top: 40%;\n  color: #1095FF;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n\n:host ::ng-deep .am-radio-inner {\n  display: none;\n}\n\n:host ::ng-deep .listradioshow .am-radio-inner {\n  display: inline-block;\n}\n\n:host ::ng-deep .load-model-list .am-list-item {\n  background-color: #f5f5f4;\n}\n\n:host ::ng-deep .listradioshow .am-list-item {\n  background-color: #ebfbff;\n}\n\n.list-load-model {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(39, 60, 125, 0.5);\n  z-index: 9;\n  display: none;\n}\n\n.load-model-con {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  top: 20vh;\n  height: 60vh;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px 5px;\n  padding: 10px 10px 10px 10px;\n}\n\n.load-model-button {\n  background-color: #1890ff;\n  color: white;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n  width: 40%;\n  text-align: center;\n  margin-top: 20px;\n  border-radius: 5px;\n}\n\n.load-model-add {\n  background-color: #28ba62;\n  color: white;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n  width: 40%;\n  text-align: center;\n  margin-top: 20px;\n  border-radius: 5px;\n}\n\n.load-model-radio {\n  margin-bottom: 15px;\n}\n\n.load-model-list {\n  height: 26vh;\n  overflow-y: auto;\n}\n\n.load-model-title {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n  color: #aaa;\n}\n\n.mobile {\n  display: inline-block;\n  margin-left: 1.5rem;\n  font-size: 0.8rem;\n}\n\n.am-demo-page {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3BlcnNvbi1saXN0L3BlcnNvbi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNHLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUdIOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0csbUJBQUE7QUFDSDs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0NBQUE7QUFFRjs7QUFBQTtFQUNHLGFBQUE7QUFHSDs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0FB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QSxXQUFBO0FBZUY7O0FBYkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFpQkYiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vcGVyc29uLWxpc3QvcGVyc29uLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYkNvbnRlbnRDc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi50YWItdG9we1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA4cHg7XG59XG4uYmFyLXNhbXBsZS1udW1iZXJ7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLmJhci1zYW1wbGUtbnVtYmVyID4gLm51bWJlcntcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgZm9udC1zaXplOiAxLjJyZW07XG4gICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJhci1idXR0b257XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiMwMDVCQUM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiY2JjYmM7XG4gIHdpZHRoOiA0NSU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cblxuLnRhYi1yZWFkLXRvcHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOHB4O1xufVxuLmJhci1zYW1wbGUtcmVhZC1udW1iZXJ7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLmJhci1zYW1wbGUtcmVhZC1udW1iZXIgPiAubnVtYmVye1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFyLXJlYWQtYnV0dG9ue1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjojMDA1QkFDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xuICB3aWR0aDogNC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5cblxuLm15LWxpc3QgLnNwZSAuYW0tbGlzdC1leHRyYSB7XG4gIGZsZXgtYmFzaXM6IGluaXRpYWw7XG59XG5cbi50aXRsZXtcbiAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtZXh0cmF7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm15LWxpc3QgLmFtLWxpc3QtaXRlbXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVGRUY7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWxpc3QgLmFtLWxpc3QtYm9keSAuYW0tbGlzdC1pdGVtOmxhc3QtY2hpbGR7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZFRkVGO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtbGluZSAuYW0tbGlzdC1icmllZntcbiAgIG1hcmdpbi10b3A6IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lIC5hbS1saXN0LWNvbnRlbnR7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4ubXktbGlzdHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ubXktbGlzdCAucGF0aWVudC1pbmZve1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5teS1saXN0IC5ub3tcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjODg4ODg4O1xuICB3aWR0aDogMS42cmVtO1xufVxuLm15LWxpc3QgLm5hbWV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHdpZHRoOiAgNC4zcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5teS1saXN0ICAuaWRlbm5ve1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG4ubXktbGlzdCAubWVtb3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgd2lkdGg6ICA0LjNyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFyLWZvb3RlcntcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5iYXItZm9vdGVyLWVuZHtcbiAgd2lkdGg6IDMwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIC8vYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JjYmNiYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMC43cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDVCQUM7XG59XG4uYmFyLWZvb3Rlci1zY2Fue1xuICB3aWR0aDogNzAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMC43cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QkFDO1xufVxuLmJhci1mb290ZXItdHViZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiY2JjYmM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDAuN3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuN3JlbTtcbn1cblxuLmJhci1mb290ZXItcmVhZC1lbmR7XG4gIHdpZHRoOiAzNiU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmNiY2JjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwLjdyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAwNUJBQztcbn1cbi5iYXItZm9vdGVyLXJlYWQtc2NhbntcbiAgd2lkdGg6IDY0JTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDAuN3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuN3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcbn1cblxuOmhvc3QgOjpuZy1kZWVwICAudG9vbGJhci10aXRsZS1kZWZhdWx0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5oZWFkZXItaWNvbntcbiAgd2lkdGg6IDMwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtMTJweFxufVxuLmhlYWRlci1mb250e1xuICB3aWR0aDogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGVhZGVyLXRpdGxle1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cbi5oZWFkZXItbnVtYmVye1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cblxuLnBlcnNvbi1sb2FkLWJhcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjQ7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvYWQtY3Nze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwJTtcbiAgdG9wOiA0MCU7XG4gIGNvbG9yOiAjMTA5NUZGO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuXG46aG9zdCA6Om5nLWRlZXAgLmFtLXJhZGlvLWlubmVye1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpc3RyYWRpb3Nob3cgLmFtLXJhZGlvLWlubmVye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubG9hZC1tb2RlbC1saXN0IC5hbS1saXN0LWl0ZW17XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGlzdHJhZGlvc2hvdyAuYW0tbGlzdC1pdGVte1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmYmZmO1xufVxuXG4ubGlzdC1sb2FkLW1vZGVse1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogcmdiYSgzOSw2MCwxMjUsMC41KTtcbiAgei1pbmRleDogOTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sb2FkLW1vZGVsLWNvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyMHZoO1xuICBoZWlnaHQ6IDYwdmg7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi5sb2FkLW1vZGVsLWJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTBmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5sb2FkLW1vZGVsLWFkZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YmE2MjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy9ib3JkZXI6IDFweCBkb3R0ZWQgIzE4OTBmZjtcbn1cblxuLmxvYWQtbW9kZWwtcmFkaW97XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubG9hZC1tb2RlbC1saXN0e1xuICBoZWlnaHQ6IDI2dmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubG9hZC1tb2RlbC10aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICNhYWE7XG59XG4ubW9iaWxle1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmFtLWRlbW8tcGFnZXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/common/person-list/person-list.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/common/person-list/person-list.page.ts ***!
      \********************************************************/

    /*! exports provided: PersonListPage */

    /***/
    function srcAppCommonPersonListPersonListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonListPage", function () {
        return PersonListPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared */
      "./src/app/shared/index.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var ocr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ocr */
      "./node_modules/ocr/dist/esm/index.js");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! codelyzer/util/isNotNullOrUndefined */
      "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__);
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


      var id_card_reader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! id-card-reader */
      "./node_modules/id-card-reader/dist/esm/index.js");
      /* harmony import */


      var scanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! scanner */
      "./node_modules/scanner/dist/esm/index.js");

      var Ocr = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Ocr;
      var IdCardReader = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].IdCardReader; // 扫描码

      var Scanner = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Scanner;

      var PersonListPage = /*#__PURE__*/function () {
        function PersonListPage(router, navCtrl, http, route, platform, deleteModal) {
          var _this = this;

          _classCallCheck(this, PersonListPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.http = http;
          this.route = route;
          this.platform = platform;
          this.deleteModal = deleteModal;
          this.titleInfo = '';
          this.contentInfo = '';
          this.personList = [];
          this.personListLength = 0;
          this.model = 10;
          this.right = [{
            text: '删除',
            onPress: function onPress() {
              _this.showDelete();
            },
            className: 'btnClass'
          }];
          this.view = '1';
          this.isClosedTube = '0'; // 0 开管 1 封管

          this.isScanModel = 'false';
          this.SelectButtonPattern = '1'; // 1 扫描身份证 2 扫描健康码 3 读卡

          this.ButtonName = '扫描身份证'; // 控制app返回按钮

          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.routeBack();
          });
        }

        _createClass(PersonListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.queryParams.subscribe(function (data) {
              _this2.load = document.getElementsByClassName('person-load-bar')[0];

              if (data['num'] !== undefined) {// 扫试管码后，跳转界面，扫身份证
                //  this.scanIdentity();
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.titleInfo = sessionStorage.getItem('tubeBarcode'); // 模式

            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(sessionStorage.getItem('modelValue'))) {
              this.model = Number(sessionStorage.getItem('modelValue'));
            } else {
              this.model = 10;
            } // 获取是否封管


            this.isClosedTube = sessionStorage.getItem('isClosedTube'); // 是否直接扫描

            this.isScanModel = sessionStorage.getItem('isDirectScan');

            if (this.isScanModel === 'false') {
              // 默认选择第一个
              if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(sessionStorage.getItem('SelectButtonPattern'))) {
                this.SelectButtonPattern = '1';
                sessionStorage.setItem('SelectButtonPattern', '1');
              } else {
                this.SelectButtonPattern = sessionStorage.getItem('SelectButtonPattern');
                this.changePattern(this.SelectButtonPattern);
              }
            } else {
              this.SelectButtonPattern = '1';
              sessionStorage.setItem('SelectButtonPattern', '1');
            }

            this.GetPatientTube();
          } // 路由返回

        }, {
          key: "routeBack",
          value: function routeBack() {
            this.router.navigate(['/BottleList']);
          } // 路由跳转

        }, {
          key: "routeFont",
          value: function routeFont(value) {
            if (value === 'false') {
              this.router.navigate(['/WriteIdentityFormat']);
            } else {
              sessionStorage.setItem('fullInfoStr', value['fullInfoStr']);
              value['fullInfoStr'] = '';
              value['SelectButtonPattern'] = this.SelectButtonPattern;
              var navigationExtras = {
                queryParams: value
              };
              this.router.navigate(['/WriteIdentityFormat'], navigationExtras);
            }
          } // 点击列表，跳转到身份证录入界面
          // 修改

        }, {
          key: "onClick",
          value: function onClick(value, i) {
            value.index = i;
            value.titleId = '3';
            this.routeFont(value);
          } // 打开删除按钮时，获取当前管子的UUID

        }, {
          key: "openDelete",
          value: function openDelete(uuid) {
            this.tubePatientId = uuid;
          }
        }, {
          key: "notScan",
          value: function notScan(value) {
            var condition = {
              name: '',
              sex: '男',
              nation: '汉',
              birthday: '',
              address: '',
              identity: '',
              phone: '',
              fullInfoStr: '',
              index: this.personListLength,
              id: '',
              memo: '本人',
              age: '',
              titleId: value
            };
            this.routeFont(condition);
          } // 封管操作

        }, {
          key: "confirmTubeClick",
          value: function confirmTubeClick() {
            this.confirmTube();
          }
        }, {
          key: "getScanCondition",
          value: function getScanCondition(phone) {
            var condition = {
              name: this.result.name,
              sex: this.result.sex,
              nation: this.result.folk,
              birthday: this.result.birthday,
              address: this.result.address,
              identity: this.result.num,
              phone: phone,
              fullInfoStr: this.result.imageData,
              id: '',
              index: this.personListLength,
              barcode: sessionStorage.getItem('tubeBarcode'),
              tubeId: sessionStorage.getItem('tubeBarId')
            };
            return condition;
          }
        }, {
          key: "changePattern",
          value: function changePattern(value) {
            sessionStorage.setItem('SelectButtonPattern', value);

            switch (value) {
              case '1':
                this.ButtonName = '扫描身份证';
                break;

              case '2':
                this.ButtonName = '扫描健康码';
                break;

              case '3':
                this.ButtonName = '证件读卡器';
                this.readIdentity();
                break;
            }
          }
        }, {
          key: "clickIdentity",
          value: function clickIdentity() {
            var bool = false;

            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(this.date)) {
              if ((new Date().getTime() - this.date.getTime()) / 1000 > 1) {
                bool = true;
              } else {
                bool = false;
                this.http.showToast('正在读取身份信息，请稍等');
              }
            } else {
              bool = true;
            }

            if (bool) {
              this.date = new Date();

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
          } // 扫描身份证

        }, {
          key: "scanIdentity",
          value: function scanIdentity() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var condition;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Ocr.scan();

                    case 2:
                      this.result = _context.sent;
                      condition = this.getScanCondition(''); // 未注册, 跳转填写页面

                      condition['memo'] = '本人';
                      condition['titleId'] = '1';
                      this.routeFont(condition);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // 扫描健康码

        }, {
          key: "scanHealthCode",
          value: function scanHealthCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var result;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return Scanner.openScanner();

                    case 3:
                      result = _context2.sent;
                      _context2.t0 = result['operation'];
                      _context2.next = _context2.t0 === 'SCAN' ? 7 : _context2.t0 === 'MANUAL' ? 10 : _context2.t0 === 'CANCEL' ? 11 : 12;
                      break;

                    case 7:
                      console.log('扫描健康码结果', result['result']);
                      this.scanCode(result['result']);
                      return _context2.abrupt("break", 12);

                    case 10:
                      return _context2.abrupt("break", 12);

                    case 11:
                      return _context2.abrupt("break", 12);

                    case 12:
                      _context2.next = 17;
                      break;

                    case 14:
                      _context2.prev = 14;
                      _context2.t1 = _context2["catch"](0);
                      this.http.showToast('扫描失败，请重新扫描！'); // this.scanCode('qwe');

                    case 17:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 14]]);
            }));
          } // 读卡

        }, {
          key: "readIdentity",
          value: function readIdentity() {
            // 判断连接成功状态
            // this.load.style.display = 'inline-block';
            if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(sessionStorage.getItem('readConnectState')) || sessionStorage.getItem('readConnectState') === 'false') {
              this.connectRead();
            } else {
              this.read();
            }
          }
        }, {
          key: "read",
          value: function read() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var data, condition;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return IdCardReader.read();

                    case 3:
                      data = _context3.sent;
                      this.load.style.display = 'none';

                      if (data['code'] === 'SUCCESS') {
                        this.result = {
                          address: data['address'],
                          birthday: data['birthday'],
                          folk: data['folk'],
                          name: data['name'],
                          num: data['num'],
                          sex: data['sex'],
                          imageData: ''
                        };
                        condition = this.getScanCondition(''); // 未注册, 跳转填写页面

                        condition['memo'] = '本人';
                        condition['titleId'] = '1';
                        this.routeFont(condition);
                      } else {
                        this.load.style.display = 'none';

                        if (data['code'] === 'FIND_CARD_FAILED') {
                          this.http.showToast('请重新放置身份证');
                        }
                      }

                      _context3.next = 11;
                      break;

                    case 8:
                      _context3.prev = 8;
                      _context3.t0 = _context3["catch"](0);
                      this.http.showToast('读卡失败，请重新放置身份证');

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 8]]);
            }));
          } // 连接读卡器

        }, {
          key: "connectRead",
          value: function connectRead() {
            var _this3 = this;

            // 调方法
            // 打开OPEN，关闭CLOSED
            try {
              IdCardReader.addListener('onBluetoothStateChange', function (bluetoothState) {
                console.log('onBluetoothStateChange', bluetoothState);

                if (bluetoothState === 'OPEN') {
                  // 记录连接成功状态
                  sessionStorage.setItem('readConnectState', 'true');
                  _this3.load.style.display = 'none';
                } else {
                  // 记录连接失败状态
                  sessionStorage.setItem('readConnectState', 'false');
                  _this3.load.style.display = 'none';
                }
              }); // 连接成功CONNECTED 、 失败 NOT_CONNECTED 、 断开连接 DISCONNECT

              IdCardReader.addListener('onBluetoothConnectStateChange', function (connectState) {
                console.log('onBluetoothConnectStateChange', connectState);

                if (connectState['connectState'] === 'CONNECTED') {
                  // 记录连接成功状态
                  sessionStorage.setItem('readConnectState', 'true');

                  _this3.http.showToast('读卡器连接成功，请放置身份证');

                  _this3.load.style.display = 'none';
                } else {
                  // 记录连接失败状态
                  sessionStorage.setItem('readConnectState', 'false');
                  _this3.load.style.display = 'none';

                  _this3.http.showToast('蓝牙读卡器连接失败！');
                }
              });
              IdCardReader.connect();
            } catch (e) {
              this.http.showToast('蓝牙读卡器连接失败！');
              this.load.style.display = 'none';
            }
          } // 调用后台接口
          // 1. 获取当前管里的标本

        }, {
          key: "GetPatientTube",
          value: function GetPatientTube() {
            var _this4 = this;

            var condition = {
              tubeId: sessionStorage.getItem('tubeBarId')
            };
            this.load['style']['display'] = 'inline-block';
            this.http.post("rcp/api/get/tube/patient" + this.http.getParamsString(condition), {}, '获取当前管里的标本', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.getTubeSample).subscribe(function (data) {
              _this4.load['style']['display'] = 'none';

              if (data['isSuccess']) {
                _this4.personList = data['data'];
                _this4.personListLength = _this4.personList.length;
              }
            });
          } // 删除采集管

        }, {
          key: "showDelete",
          value: function showDelete() {
            var _this5 = this;

            this.deleteModal.alert('', '确认删除?', [{
              text: '取消',
              onPress: function onPress() {}
            }, {
              text: '删除',
              onPress: function onPress() {
                _this5.deleteTube();
              }
            }]);
          }
        }, {
          key: "deleteTube",
          value: function deleteTube() {
            var _this6 = this;

            var condition = {
              tubePatientId: this.tubePatientId
            };
            this.http.post("rcp/api/delete/tube/patient" + this.http.getParamsString(condition), {}, '删除采集患者', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.deleteSample).subscribe(function (data) {
              // 删除成功后，重新获取当前管子里的标本列表
              if (data['isSuccess']) {
                _this6.GetPatientTube();
              }
            });
          } // 封管操作

        }, {
          key: "confirmTube",
          value: function confirmTube() {
            var _this7 = this;

            var condition = {
              boxBarId: sessionStorage.getItem('boxBarId'),
              tubeBarId: sessionStorage.getItem('tubeBarId'),
              tubeBarcode: sessionStorage.getItem('tubeBarcode'),
              tubeState: 'CloseBar'
            };
            this.http.get("rcp/api/tube/operate/confirmTube", condition, '确认采集管', 'false').subscribe(function (data) {
              if (data['code'] === '0') {
                if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(data['message'])) {
                  _this7.http.showToast(data['message']);
                } else {
                  _this7.router.navigate(['/BottleBarcode']);
                } // if (isNotNullOrUndefined(data['message'])) {
                //     // 封管时已封箱-扫码新箱
                //     const navigationExtras: NavigationExtras = {
                //         queryParams: { boxBarcode: sessionStorage.getItem('boxBarcode')}
                //     };
                //     this.router.navigate(['/tabs/tab1'], navigationExtras);
                // } else {
                //     // 封管后跳转到扫采集管界面
                //     this.router.navigate(['/BottleBarcode']);
                // }

              }
            });
          }
        }, {
          key: "assignmentValue",
          value: function assignmentValue(condition, item) {
            // 身份信息
            condition.nation = item.nation;
            condition.birthday = item.birthday;
            condition.sex = item.sex;
            condition.identity = item.idenno;
            condition.name = item.patientName;
            condition.phone = item.mobile;
            condition.address = item.address;
            condition.memo = item.relationship;
            condition.id = item.id;
            return condition;
          } // 扫描身份证

        }, {
          key: "scanCode",
          value: function scanCode(value) {
            var _this8 = this;

            var condition = {
              ehealthCode: value
            };
            this.http.post("lstrcp/api/scan" + this.http.getParamsString(condition), {}, '扫描健康码', 'false').subscribe(function (data) {
              if (data['code'] === '0') {
                if (data['data']['ret_code'] === '0000') {
                  var cond = data['data']['biz_content'];
                  var condJson = JSON.parse(cond);
                  var birthdayStr = '';

                  if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_7__["isNotNullOrUndefined"])(condJson['birthday']) && condJson['birthday'] !== '') {
                    birthdayStr = condJson['birthday'].substr(0, 4) + '年' + condJson['birthday'].substr(4, 2) + '月' + condJson['birthday'].substr(6, 2) + '日';
                  }

                  var conditionJson = {
                    name: condJson['user_name'],
                    sex: condJson['user_sex'] === '1' ? '男' : '女',
                    nation: condJson['nation'],
                    birthday: birthdayStr,
                    address: condJson['address'] + condJson['detail_address'],
                    identity: condJson['id_no'],
                    phone: condJson['mobile_phone'],
                    fullInfoStr: '',
                    id: '',
                    index: _this8.personListLength,
                    barcode: sessionStorage.getItem('tubeBarcode'),
                    tubeId: sessionStorage.getItem('tubeBarId')
                  }; // 未注册, 跳转填写页面

                  conditionJson['memo'] = '本人';
                  conditionJson['titleId'] = '1';

                  _this8.routeFont(conditionJson);
                } else {
                  _this8.http.showToast(data['data']['ret_msg']);
                }
              } else {
                _this8.http.showToast('扫描失败，请重新扫描！');
              }
            });
          }
        }]);

        return PersonListPage;
      }();

      PersonListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__["ModalService"]
        }];
      };

      PersonListPage.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@routeAnimation']
        }]
      };
      PersonListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-person-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./person-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common/person-list/person-list.page.html"))["default"],
        animations: [_shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./person-list.page.scss */
        "./src/app/common/person-list/person-list.page.scss"))["default"]]
      })], PersonListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-person-list-person-list-module-es5.js.map