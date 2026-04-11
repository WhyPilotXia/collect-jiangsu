(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-box-list-box-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common/box-list/box-list.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/box-list/box-list.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonBoxListBoxListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回首页</span>\n            </div>\n            <span class=\"header-title\">箱列表</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"tabContentCss\">\n\n    <div class=\"tab-top\">\n        <div  class=\"bar-sample-number\">\n            <span>正在采集</span>\n        </div>\n    </div>\n    <div>\n        <List [className]=\"'my-list'\">\n            <ng-container *ngFor=\"let info of BoxListList;let i = index\">\n                <ng-container *ngIf=\"i == 1\">\n                    <div style=\"background-color: #EFEFEF; padding: 4px 10px\">\n                        <span style=\"color: #A19F9D;\">历史采集 <span style=\"color: #323130;padding-left: 12px\">总：{{BoxListList.length-1}}箱</span></span>\n                    </div>\n                </ng-container>\n                <SwipeAction style=\"background-color: gray\">\n                    <ListItem (onClick)=\"routeFont(info.boxBarcode,info.boxBarId, info.boxState, i)\">\n                        <div class=\"patient-info\">\n                            <div>\n                                <div class=\"num-info\" style=\"margin-bottom: 5px\">\n                                    <span>{{info.boxBarcode}}</span>\n                                </div>\n                                <div class=\"num-info\">\n                                    <span>开箱时间：</span>\n                                    <span class=\"time\">\n                                        {{info.openTime}}\n                                    </span>\n                                </div>\n                                <div class=\"num-info\">\n                                    <span>封箱时间：</span>\n                                    <span class=\"time\">\n                                       {{info.closeTime}}\n                                    </span>\n                                </div>\n                            </div>\n                            <div style=\"position: relative; width: 100px\">\n                                <div class=\"state\" [ngStyle]=\"{'color': i==0 ? '#323130': '#A19F9D'}\">\n                                        <ng-container [ngSwitch]=\"info.boxState\">\n                                            <span *ngSwitchCase=\"'Incept'\">\n                                                已接收\n                                            </span>\n                                            <span *ngSwitchCase=\"'Send'\">\n                                                已送检\n                                            </span>\n                                            <span *ngSwitchDefault>\n                                                未送检\n                                            </span>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"i==0\">\n                                            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                                        </ng-container>\n                                </div>\n                                <div style=\"position: absolute;bottom: 4px; right: 0;\">标本数：{{info.tubeNum}}</div>\n                            </div>\n                        </div>\n                    </ListItem>\n                </SwipeAction>\n            </ng-container>\n        </List>\n    </div>\n\n</ion-content>\n<ng-container>\n    <ion-footer>\n        <div class=\"bar-footer\">\n            <div class=\"bar-footer-scan\" (click) = \"clickScan()\">扫描新箱码</div>\n        </div>\n    </ion-footer>\n</ng-container>\n\n<div  class=\"box-load-bar\">\n    <ion-spinner icon=\"android\" class=\"load-css\"></ion-spinner>\n</div>";
      /***/
    },

    /***/
    "./node_modules/scanner/dist/esm/index.js":
    /*!************************************************!*\
      !*** ./node_modules/scanner/dist/esm/index.js ***!
      \************************************************/

    /*! exports provided: ScannerWeb, Scanner */

    /***/
    function node_modulesScannerDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./web */
      "./node_modules/scanner/dist/esm/web.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ScannerWeb", function () {
        return _web__WEBPACK_IMPORTED_MODULE_0__["ScannerWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Scanner", function () {
        return _web__WEBPACK_IMPORTED_MODULE_0__["Scanner"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/scanner/dist/esm/web.js":
    /*!**********************************************!*\
      !*** ./node_modules/scanner/dist/esm/web.js ***!
      \**********************************************/

    /*! exports provided: ScannerWeb, Scanner */

    /***/
    function node_modulesScannerDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScannerWeb", function () {
        return ScannerWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Scanner", function () {
        return Scanner;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var ScannerWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(ScannerWeb, _capacitor_core__WEBP);

        var _super = _createSuper(ScannerWeb);

        function ScannerWeb() {
          _classCallCheck(this, ScannerWeb);

          return _super.call(this, {
            name: 'Scanner',
            platforms: ['web']
          });
        }

        _createClass(ScannerWeb, [{
          key: "openScanner",
          value: function openScanner() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      throw new Error('Method not implemented.');

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "closeScanner",
          value: function closeScanner() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      throw new Error('Method not implemented.');

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }]);

        return ScannerWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var Scanner = new ScannerWeb();
      Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(Scanner); //# sourceMappingURL=web.js.map

      /***/
    },

    /***/
    "./src/app/common/box-list/box-list.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/common/box-list/box-list.module.ts ***!
      \****************************************************/

    /*! exports provided: BoxListModule */

    /***/
    function srcAppCommonBoxListBoxListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoxListModule", function () {
        return BoxListModule;
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


      var _box_list_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./box-list.page */
      "./src/app/common/box-list/box-list.page.ts");

      var BoxListModule = function BoxListModule() {
        _classCallCheck(this, BoxListModule);
      };

      BoxListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"], _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _box_list_page__WEBPACK_IMPORTED_MODULE_9__["BoxListPage"]
        }])],
        declarations: [_box_list_page__WEBPACK_IMPORTED_MODULE_9__["BoxListPage"]]
      })], BoxListModule);
      /***/
    },

    /***/
    "./src/app/common/box-list/box-list.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/common/box-list/box-list.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonBoxListBoxListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tabContentCss {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n}\n\n.tab-top {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n.bar-sample-number {\n  padding: 4px 10px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  width: 45%;\n  color: #FF8C00;\n}\n\n.bar-sample-number > .number {\n  margin-left: 10px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.bar-button {\n  padding: 4px;\n  font-size: 1rem;\n  text-align: center;\n  color: #005BAC;\n  border: 1px solid #bcbcbc;\n  width: 45%;\n  border-radius: 3px;\n  background-color: white;\n}\n\n.my-list .spe .am-list-extra {\n  flex-basis: initial;\n}\n\n.title {\n  padding-right: 10px;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-extra {\n  overflow: visible;\n}\n\n:host ::ng-deep .my-list .am-list-item {\n  border-bottom: 1px solid #EFEFEF;\n}\n\n:host ::ng-deep .my-list .am-list-body .am-list-item:last-child {\n  border-bottom: 1px solid #EFEFEF;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-brief {\n  margin-top: 0;\n}\n\n:host ::ng-deep .am-list-item .am-list-line .am-list-content {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.my-list {\n  font-size: 0.9rem;\n}\n\n.my-list .num-info {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n\n.my-list .patient-info {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n.my-list .closeBoxBtn {\n  display: inline-block;\n  margin-top: 5px;\n  margin-left: 15px;\n  background-color: #005BAC;\n  color: white;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 0.9rem;\n}\n\n.my-list .no {\n  font-size: 0.8rem;\n  color: #888888;\n  width: 1.6rem;\n}\n\n.my-list .state {\n  font-size: 0.9rem;\n  text-align: right;\n}\n\n.my-list .time {\n  display: inline-block;\n  font-size: 0.9rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.my-list .personNum {\n  display: inline-block;\n  margin-left: 15px;\n  font-size: 0.8rem;\n  color: #888888;\n}\n\n.my-list .tubeNum {\n  display: inline-block;\n  font-size: 0.8rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.bar-footer {\n  border-top: 1px solid #cccccc;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  color: white;\n}\n\n.bar-footer-scan {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n  background-color: #005BAC;\n}\n\n.bar-footer-tube {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n  border-right: 1px solid #bcbcbc;\n  background-color: #005BAC;\n  color: white;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n  white-space: nowrap;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 8px;\n  white-space: nowrap;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n}\n\n.header-number {\n  float: right;\n  text-align: center;\n  margin-top: 6px;\n  font-size: 1rem;\n}\n\n.box-load-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 99;\n  display: none;\n}\n\n.load-css {\n  position: absolute;\n  left: 40%;\n  top: 40%;\n  color: #1095FF;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n\n:host ::ng-deep .am-radio-inner {\n  display: none;\n}\n\n:host ::ng-deep .listradioshow .am-radio-inner {\n  display: inline-block;\n}\n\n:host ::ng-deep .load-model-list .am-list-item {\n  background-color: #f5f5f4;\n}\n\n:host ::ng-deep .listradioshow .am-list-item {\n  background-color: #ebfbff;\n}\n\n:host ::ng-deep .my-list .am-list-body .am-list-item:last-child {\n  border-bottom: 5px solid #EFEFEF;\n}\n\n.list-load-model {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(39, 60, 125, 0.5);\n  z-index: 9;\n  display: none;\n}\n\n.load-model-con {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  top: 20vh;\n  height: 60vh;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px 5px;\n  padding: 10px 10px 10px 10px;\n}\n\n.load-model-button {\n  background-color: #1890ff;\n  color: white;\n  font-size: 1.2rem;\n  padding: 0.6rem;\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n  border-radius: 5px;\n}\n\n.load-model-add {\n  font-size: 1rem;\n  padding: 0.5rem;\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n  border-radius: 5px;\n  border: 1px dotted #1890ff;\n}\n\n.load-model-radio {\n  margin-bottom: 15px;\n}\n\n.load-model-list {\n  height: 26vh;\n  overflow-y: auto;\n}\n\n.load-model-title {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n  color: #aaa;\n}\n\n.mobile {\n  display: inline-block;\n  margin-left: 1.5rem;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2JveC1saXN0L2JveC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQUE7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFHSDs7QUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFEQTtFQUNHLG1CQUFBO0FBSUg7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsZ0NBQUE7QUFJRjs7QUFGQTtFQUNFLGdDQUFBO0FBS0Y7O0FBSEE7RUFDRyxhQUFBO0FBTUg7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxpQkFBQTtBQVFGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFTRjs7QUFQQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFVRjs7QUFSQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBV0Y7O0FBVEE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBWUY7O0FBVkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBYUY7O0FBWEE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBY0Y7O0FBWkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZUY7O0FBYkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBZ0JGOztBQWJBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFlBQUE7QUFlRjs7QUFiQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFpQkY7O0FBYkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBaUJGOztBQWZBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBa0JGOztBQWhCQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQW1CRjs7QUFqQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQW9CRjs7QUFoQkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQW1CRjs7QUFqQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFvQkY7O0FBZkE7RUFDRSxhQUFBO0FBa0JGOztBQWZBO0VBQ0UscUJBQUE7QUFrQkY7O0FBZkE7RUFDRSx5QkFBQTtBQWtCRjs7QUFmQTtFQUNFLHlCQUFBO0FBa0JGOztBQWhCQTtFQUNFLGdDQUFBO0FBbUJGOztBQWpCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFtQkY7O0FBakJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQW9CRjs7QUFqQkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBb0JGOztBQWpCQTtFQUdFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBa0JGOztBQWZBO0VBQ0UsbUJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBbUJGOztBQWpCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFvQkY7O0FBbEJBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBcUJGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2JveC1saXN0L2JveC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJDb250ZW50Q3NzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGFiLXRvcHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5iYXItc2FtcGxlLW51bWJlcntcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0NSU7XG4gIGNvbG9yOiAjRkY4QzAwO1xufVxuXG4uYmFyLXNhbXBsZS1udW1iZXIgPiAubnVtYmVye1xuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICBmb250LXNpemU6IDEuMnJlbTtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFyLWJ1dHRvbntcbiAgcGFkZGluZzogNHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IzAwNUJBQztcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmNiYztcbiAgd2lkdGg6IDQ1JTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5teS1saXN0IC5zcGUgLmFtLWxpc3QtZXh0cmEge1xuICBmbGV4LWJhc2lzOiBpbml0aWFsO1xufVxuXG4udGl0bGV7XG4gICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lIC5hbS1saXN0LWV4dHJhe1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5teS1saXN0IC5hbS1saXN0LWl0ZW17XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZFRkVGO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5teS1saXN0IC5hbS1saXN0LWJvZHkgLmFtLWxpc3QtaXRlbTpsYXN0LWNoaWxke1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRUZFRjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtYnJpZWZ7XG4gICBtYXJnaW4tdG9wOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hbS1saXN0LWl0ZW0gLmFtLWxpc3QtbGluZSAuYW0tbGlzdC1jb250ZW50e1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuLm15LWxpc3R7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLm15LWxpc3QgLm51bS1pbmZve1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5teS1saXN0IC5wYXRpZW50LWluZm97XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubXktbGlzdCAuY2xvc2VCb3hCdG57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLm15LWxpc3QgLm5ve1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIHdpZHRoOiAxLjZyZW07XG59XG4ubXktbGlzdCAuc3RhdGV7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5teS1saXN0IC50aW1le1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5teS1saXN0ICAucGVyc29uTnVte1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG4ubXktbGlzdCAudHViZU51bXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYXItZm9vdGVye1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJhci1mb290ZXItc2NhbntcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAwLjdyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG59XG4uYmFyLWZvb3Rlci10dWJle1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JjYmNiYztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMC43cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43cmVtO1xufVxuXG5cbjpob3N0IDo6bmctZGVlcCAgLnRvb2xiYXItdGl0bGUtZGVmYXVsdHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGVhZGVyLWljb257XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlci1mb250e1xuICB3aWR0aDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5oZWFkZXItdGl0bGV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmhlYWRlci1udW1iZXJ7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuXG4uYm94LWxvYWQtYmFye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNDtcbiAgei1pbmRleDogOTk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubG9hZC1jc3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICB0b3A6IDQwJTtcbiAgY29sb3I6ICMxMDk1RkY7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuXG5cbjpob3N0IDo6bmctZGVlcCAuYW0tcmFkaW8taW5uZXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGlzdHJhZGlvc2hvdyAuYW0tcmFkaW8taW5uZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5sb2FkLW1vZGVsLWxpc3QgLmFtLWxpc3QtaXRlbXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saXN0cmFkaW9zaG93IC5hbS1saXN0LWl0ZW17XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmZiZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWxpc3QgLmFtLWxpc3QtYm9keSAuYW0tbGlzdC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI0VGRUZFRjtcbn1cbi5saXN0LWxvYWQtbW9kZWx7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICAvL2JhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LDYwLDEyNSwwLjUpO1xuICB6LWluZGV4OiA5O1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvYWQtbW9kZWwtY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDIwdmg7XG4gIGhlaWdodDogNjB2aDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLmxvYWQtbW9kZWwtYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAwLjZyZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxvYWQtbW9kZWwtYWRke1xuICAvL2JhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG4gIC8vY29sb3I6ICMxODkwZmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCAjMTg5MGZmO1xufVxuXG4ubG9hZC1tb2RlbC1yYWRpb3tcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5sb2FkLW1vZGVsLWxpc3R7XG4gIGhlaWdodDogMjZ2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5sb2FkLW1vZGVsLXRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogI2FhYTtcbn1cbi5tb2JpbGV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/common/box-list/box-list.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/common/box-list/box-list.page.ts ***!
      \**************************************************/

    /*! exports provided: BoxListPage */

    /***/
    function srcAppCommonBoxListBoxListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoxListPage", function () {
        return BoxListPage;
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


      var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/http-client.service */
      "./src/app/shared/http-client.service.ts");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! codelyzer/util/isNotNullOrUndefined */
      "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var scanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! scanner */
      "./node_modules/scanner/dist/esm/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd-mobile */
      "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js"); // 扫描码


      var Scanner = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Scanner;

      var BoxListPage = /*#__PURE__*/function () {
        function BoxListPage(router, navCtrl, http, route, platform, alertModal) {
          var _this = this;

          _classCallCheck(this, BoxListPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.http = http;
          this.route = route;
          this.platform = platform;
          this.alertModal = alertModal;
          this.BoxListList = []; // 控制app返回按钮

          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.routeBack();
          });
        }

        _createClass(BoxListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load = document.getElementsByClassName('box-load-bar')[0];
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // 获取箱列表
            this.GetBoxList();
          } // 路由返回

        }, {
          key: "routeBack",
          value: function routeBack() {
            this.router.navigate(['/tabs/tab1']);
          } // 路由跳转

        }, {
          key: "routeFont",
          value: function routeFont(barcode, boxBarId, boxState, index) {
            var _this2 = this;

            sessionStorage.setItem('boxBarcode', barcode);
            sessionStorage.setItem('boxBarId', boxBarId);

            if (index === 0) {
              if (boxState === 'OpenBox') {
                sessionStorage.setItem('isCloseBox', '0');
              } else {
                if (boxState === 'CloseBox') {
                  this.alertModal.alert('封箱状态', '该箱处于封箱状态，是否确认开箱?', [{
                    text: '取消',
                    onPress: function onPress() {
                      sessionStorage.setItem('isCloseBox', '1');

                      _this2.router.navigate(['/BottleList']);
                    }
                  }, {
                    text: '确定',
                    onPress: function onPress() {
                      var condition = {
                        boxBarcode: barcode,
                        boxState: 'OpenBox'
                      };

                      _this2.http.get("rcp/api/box/operate/scan", condition, '扫描转运箱条码', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].FailMessage.openBox, {
                        load: true
                      }).subscribe(function (data) {
                        if (data['isSuccess']) {
                          sessionStorage.setItem('isCloseBox', '0');
                          sessionStorage.setItem('boxBarcode', data['data']['boxBarcode']);
                          sessionStorage.setItem('boxBarId', data['data']['boxBarId']);

                          _this2.router.navigate(['/BottleList']);
                        }
                      });
                    }
                  }]);
                  return;
                }
              }
            } else {
              sessionStorage.setItem('isCloseBox', '1');
            }

            this.router.navigate(['/BottleList']);
          }
        }, {
          key: "clickScan",
          value: function clickScan() {
            this.router.navigate(['/tabs/tab1']);
          } // 调用后台接口
          // 1. 获取当前箱列表

        }, {
          key: "GetBoxList",
          value: function GetBoxList() {
            var _this3 = this;

            this.BoxListList = [];
            this.http.get("rcp/api/box/operate/getBoxListByUser", {}, '获取当前箱列表', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].FailMessage.getBoxList, {
              load: true
            }).subscribe(function (data) {
              if (data['isSuccess']) {
                _this3.BoxListList = data['data'];

                _this3.BoxListList.forEach(function (w) {
                  w.openTime = _this3.transDate(w.openTime);
                  w.closeTime = _this3.transDate(w.closeTime);
                });
              }
            });
          }
        }, {
          key: "transDate",
          value: function transDate(date) {
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(date)) {
              var tt = new Date(parseInt(date)); // @ts-ignore

              var days = parseInt((new Date().getTime() - date) / 86400000);
              var today = new Date().getDate();
              var year = tt.getFullYear();
              var mouth = tt.getMonth() + 1;
              var day = tt.getDate();
              var time = tt.getHours() < 10 ? '0' + tt.getHours() : tt.getHours();
              var min = tt.getMinutes() < 10 ? '0' + tt.getMinutes() : tt.getMinutes();
              var result, offset;
              offset = Math.abs(today - day);

              if (days < 3 && offset < 3) {
                if (offset === 0) {
                  result = '今天' + ' ' + time + ':' + min;
                } else if (offset === 1) {
                  result = '昨天' + ' ' + time + ':' + min;
                } else if (offset === 2) {
                  result = '前天' + ' ' + time + ':' + min;
                }
              } else {
                result = year + '-' + mouth + '-' + day + ' ' + time + ':' + min;
              }

              return result;
            } else {
              return '暂无';
            }
          } // 封箱操作

        }, {
          key: "confirmBox",
          value: function confirmBox(barcode, $event) {
            var _this4 = this;

            $event.stopPropagation();
            var condition = {
              boxBarcode: barcode,
              boxState: 'CloseBox'
            };
            this.http.get("rcp/api/box/operate/scan", condition, '扫描转运箱条码', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].FailMessage.confirmBox, {
              load: true
            }).subscribe(function (data) {
              if (data['isSuccess']) {
                _this4.GetBoxList();
              }
            });
          }
        }, {
          key: "OpenBoxOperate",
          value: function OpenBoxOperate(barcode) {
            var _this5 = this;

            var condition = {
              boxBarcode: barcode,
              boxState: 'OpenBox'
            };
            this.http.get("rcp/api/box/operate/scan", condition, '扫描转运箱条码', _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].FailMessage.openBox, {
              load: true
            }).subscribe(function (data) {
              if (data['isSuccess']) {
                sessionStorage.setItem('isCloseBox', '0');
                sessionStorage.setItem('boxBarcode', data['data']['boxBarcode']);
                sessionStorage.setItem('boxBarId', data['data']['boxBarId']);

                _this5.router.navigate(['/BottleBarcode']);
              }
            });
          }
        }]);

        return BoxListPage;
      }();

      BoxListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_10__["ModalService"]
        }];
      };

      BoxListPage.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@routeAnimation']
        }]
      };
      BoxListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-box-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./box-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common/box-list/box-list.page.html"))["default"],
        animations: [_shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./box-list.page.scss */
        "./src/app/common/box-list/box-list.page.scss"))["default"]]
      })], BoxListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-box-list-box-list-module-es5.js.map