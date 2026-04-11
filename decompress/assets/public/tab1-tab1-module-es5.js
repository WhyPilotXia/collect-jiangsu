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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--页面头部-->\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <!--<div class=\"header-font\" (click)=\"routeBack()\">-->\n      <!--<span>退出登录</span>-->\n      <!--</div>-->\n      <span class=\"header-title\">{{loginTitle}}</span>\n      <div class=\"header-icon\" (click)=\"routeBack()\">\n        <img src=\"../../assets/icon/退出.svg\" />\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!--页面内容-->\n<ion-content>\n <!--  <div class=\"home-spec dn\">\n    <div class=\"person-bar\">\n      <div style=\"font-size: 1rem;\">{{UserName}}，您好！</div>\n      <div style=\"margin: 0.3rem 1rem\">{{censusAddress}}</div>\n      <div (click)=\"clickTransferBoxListChange(1)\">换箱列表</div>\n      <div (click)=\"clickTransferBoxListChange(2)\">试管查转运箱</div>\n      <div (click)=\"clickTransferBoxListChange(3)\">修改密码</div>\n      <div (click)=\"clickTransferBoxListChange(4)\">试管查被采集人</div>\n      <div (click)=\"clickTransferBoxListChange(5)\">采集量统计</div>\n    </div>\n    <div class=\"scan-button\">\n      <div class=\"scan-button-css\">\n        <div class=\"scan-button-css-change\" (click)=\"clickChange()\">\n          <ion-icon name=\"repeat-outline\"></ion-icon>\n          <span>换箱</span>\n        </div>\n        <div class=\"scan-button-css-long\" (click)=\"clickScan()\">\n          <img src=\"../../assets/icon/scan-barcode.svg\" />\n          <span>扫码开箱</span>\n        </div>\n        <div class=\"scan-button-css-list\" (click)=\"boxListClick()\">\n          <ion-icon name=\"list-outline\"></ion-icon>\n          <span>转运箱列表</span>\n        </div>\n      </div>\n      <div>\n        <img src=\"assets/imgs/neusoft.png\" style=\"width: 120px\">\n      </div>\n    </div>\n  </div> -->\n\n  <div class=\"landing\">\n    <div class=\"profile\">\n      <img src=\"/assets/imgs/slogan.png\" alt=\"\">\n      <p class=\"welcome\">{{UserName}}，您好</p>\n      <p class=\"loc\">{{ censusAddress }}</p> \n    </div>\n    <div class=\"func\"> \n      <strong class=\"b-open\" (click)=\"clickScan()\">\n        <i><b></b></i>\n        <span>开箱</span>\n      </strong>\n      <strong class=\"b-change\" (click)=\"clickChange()\">\n        <i><b></b></i>\n        <span>换箱</span>\n      </strong>\n      <strong class=\"b-list\" (click)=\"boxListClick()\">\n        <i><b></b></i>\n        <span>列表</span> \n      </strong>\n      \n    </div>\n    <div class=\"quick-link\">\n      <div (click)=\"clickTransferBoxListChange(2)\"><ion-icon class=\"arrow-r\" name=\"chevron-forward-outline\"></ion-icon>按试管查转运箱</div>\n      <div (click)=\"clickTransferBoxListChange(4)\"><ion-icon class=\"arrow-r\" name=\"chevron-forward-outline\"></ion-icon>按试管查找被采集人</div>\n      <div (click)=\"clickTransferBoxListChange(1)\"><ion-icon class=\"arrow-r\" name=\"chevron-forward-outline\"></ion-icon>查找换箱记录</div>\n      <div (click)=\"clickTransferBoxListChange(5)\"><ion-icon class=\"arrow-r\" name=\"chevron-forward-outline\"></ion-icon>采集量统计</div>\n\n      <div (click)=\"navTo('/About')\"><ion-icon class=\"arrow-r\" name=\"chevron-forward-outline\"></ion-icon>关于系统</div>\n      <div (click)=\"clickTransferBoxListChange(3)\"><ion-icon class=\"arrow-r\" name=\"chevron-forward-outline\"></ion-icon>修改密码</div>\n    </div>\n    <div class=\"ft\">\n      <img src=\"assets/imgs/neusoft.png\" style=\"width: 120px\">\n    </div>\n  </div>\n</ion-content>\n\n<div class=\"tab1-load-model\">\n  <div class=\"tab1-load-model-con\">\n    <div class=\"tab1-load-model-title\">输入转运箱码</div>\n    <input type=\"tel\" class=\"tab1-load-model-input\" [(ngModel)]=\"barcode\" />\n    <div class=\"tab1-load-model-button\">\n      <div class=\"tab1-load-model-delete\" (click)=\"showCustom(false)\">取消</div>\n      <div class=\"tab1-load-model-ok\" (click)=\"ScanBoxOperate(barcode)\">确定</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"tab1-load-bar\">\n  <ion-spinner icon=\"android\" class=\"load-css\"></ion-spinner>\n</div>\n\n<ng-template #boxInfo>\n  <p>箱内标本数：{{closeBoxInfo.tubeNum}}</p>\n  <p>被采样人数：{{closeBoxInfo.patientNum}}</p>\n  <p>采集点：{{closeBoxInfo.censusAddress}}</p>\n</ng-template>\n";
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
    "./src/app/app.config.ts":
    /*!*******************************!*\
      !*** ./src/app/app.config.ts ***!
      \*******************************/

    /*! exports provided: AppConfig */

    /***/
    function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConfig", function () {
        return AppConfig;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AppConfig_1;

      var AppConfig = AppConfig_1 = function AppConfig() {
        _classCallCheck(this, AppConfig);
      };

      AppConfig.configFileUrl = 'assets/config/config.json';
      AppConfig.baseApi = ''; // 后台数据基础地址，例如/cpacs

      AppConfig.devConfig = {
        i18n: {
          'defaultLang': 'zh-CN',
          'langsList': ['zh-CN', 'en-US', 'zh-MO'],
          'langsDetail': [{
            'value': 'zh-CN',
            'label': '简体中文'
          }, {
            'value': 'en-US',
            'label': 'English'
          }, {
            'value': 'zh-MO',
            'label': '繁體中文'
          }]
        },
        url: {
          // 请求公用数据的url，请在setUrl方法中设置
          menuUrl: AppConfig_1.baseApi + '/menu',
          dataDictUrl: AppConfig_1.baseApi + '/data-dictionary',
          authServerUrl: AppConfig_1.baseApi + '/auth/oauth/token',
          setDefaultRoleUrl: AppConfig_1.baseApi + '/common/defaultRole/saveDefaultRole',
          setColsURL: AppConfig_1.baseApi + '/cols/config',
          setFormConfigURL: AppConfig_1.baseApi + '/form/config',
          commonConfigUrl: AppConfig_1.baseApi + '/common/config',
          commonBusinessDataUrls: [{
            url: AppConfig_1.baseApi + '/business/datalist1',
            key: 'datalist1'
          }, {
            url: AppConfig_1.baseApi + '/business/datalist2',
            key: 'datalist2'
          }] // app自用的通用业务数据，缓存进localStorage，方便用于下拉选择，例如设备类型、检查类型、检查部位等

        },
        auth: {
          // 请求头信息，固定格式，不需要修改
          authHeaderOptions: {
            'Content-type': 'application/json',
            'authorization': ''
          },
          authPrefix: 'Bearer ',
          authServerClientId: 'demo-id',
          authServerPassword: 'demo-secret',
          ignoreList: [AppConfig_1.baseApi + '/register']
        },
        date: {
          dateFormat: 'yy/mm/dd',
          dateFormatTemp: 'yyyy/MM/dd',
          dateTimeFormatTemp1: 'yyyy/MM/dd hh:mm',
          dateTimeFormatTemp2: 'yyyy/MM/dd hh:mm:ss'
        },
        time: {
          debounceTime: 300 // 毫秒防抖

        },
        errorMessages: {
          // 请求失败的错误提示，项目组自行修改和补充
          // 注意：内容已做国际化，请到assets/i18n/zh.json中修改相关内容
          httpErrorTitle: '',
          httpErrorMessages: {},
          // angular常用表单验证的提示信息
          // 注意：内容已做国际化，请到assets/i18n/zh.json中修改相关内容
          validatorError: {}
        },
        other: {
          ifUseTenantId: false,
          ifChooseRoleOnLogin: false,
          // 登录和权限配置
          ifUseToken: true,
          ifLogin: true,
          indexUrl: '/dashboard/admin',
          ifUseTopBar: true,
          ifUseMenu: true,
          // 日期控件的中文显示
          calendarZH: {
            firstDayOfWeek: 0,
            dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: '今天',
            clear: '清空'
          },
          // 多选控件的中文显示
          multiSelectZH: '已选 {0} 项'
        }
      };

      AppConfig.ctorParameters = function () {
        return [];
      };

      AppConfig = AppConfig_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppConfig);
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");
      /* harmony import */


      var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd-mobile */
      "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../service/serviceCommon.module */
      "./src/app/service/serviceCommon.module.ts");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_10__["ServiceCommonModule"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdMobileModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".home-spec {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  height: calc(100vh - 56px);\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-image: url('homebg.png');\n}\n\n.person-bar {\n  height: calc(100vh - 266px);\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  color: white;\n  padding-top: 1rem;\n  font-size: 0.8rem;\n}\n\n.person-bar-head {\n  width: 3.5rem;\n  height: 3.5rem;\n  background-color: white;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem;\n  margin-left: 1rem;\n}\n\n.person-bar-head > img {\n  width: 3rem;\n  height: 3rem;\n}\n\n.person-bar-user {\n  font-size: 1.2rem;\n  color: white;\n  z-index: 999;\n}\n\n.person-bar-user > .sample {\n  font-size: 0.9rem;\n}\n\n.box-button {\n  font-size: 0.9rem;\n  text-decoration: underline;\n  font-style: italic;\n  color: aquamarine;\n}\n\n.person-bar-bottom {\n  width: 100vm;\n  height: 8vh;\n  background-color: #0077ff;\n  border-radius: 0 0 50% 50%;\n  margin-top: -4vh;\n}\n\n.middle-info-bar {\n  width: 100vw;\n  height: 40vh;\n  padding: 2rem 3vw;\n  background-color: white;\n  overflow-y: auto;\n}\n\n.middle-info-bar > p {\n  color: #3881d5;\n  text-align: center;\n  line-height: 50px;\n  font-size: 40px;\n  font-weight: bolder;\n  margin-bottom: 18px;\n  background-image: -webkit-linear-gradient(bottom, #005BAC, #3881d5, #06aea3);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.middle-info-bar > div {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: white;\n  min-width: 25vw;\n  background-color: #3881d5;\n  margin-left: 5vw;\n  margin-bottom: 0.8rem;\n  text-align: center;\n  border-radius: 4px;\n  padding: 0.4rem;\n}\n\n.middle-info-bar > div > .two {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.middle-info-bar > .div-one {\n  background-color: #3881d5;\n}\n\n.middle-info-bar > .div-two {\n  background-color: #06aea3;\n}\n\n.middle-info-bar > .div-thr {\n  background-color: #36a85c;\n}\n\n.middle-info-bar > .div-Space {\n  background-color: #fff;\n}\n\n.fontsize {\n  font-size: 0.7rem;\n}\n\n.scan-button {\n  height: 210px;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.scan-button-css {\n  height: 210px;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  width: 100vw;\n}\n\n.div-change {\n  align-items: flex-start;\n  color: #3393d4;\n  font-size: 1rem;\n  text-decoration: underline;\n  margin-top: 1vh;\n}\n\n.scan-button-css-long {\n  width: 150px;\n  height: 150px;\n  background-image: linear-gradient(0deg, #044590, #1f80ef);\n  color: white;\n  border: 1px solid #bcbcbc;\n  box-shadow: 1px 1px 5px #bcbcbc;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50% 50%;\n  margin-bottom: 10px;\n}\n\n.scan-button-css-long > span {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n\n.scan-button-css-long > img {\n  height: 3rem;\n  width: 3rem;\n  margin-bottom: 5px;\n}\n\n.scan-button-css-change {\n  width: 75px;\n  height: 75px;\n  background-image: linear-gradient(0deg, #044590, #1f80ef);\n  color: white;\n  border: 1px solid #bcbcbc;\n  box-shadow: 1px 1px 5px #bcbcbc;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50% 50%;\n  margin-bottom: 10px;\n}\n\n.scan-button-css-change > span {\n  font-size: 0.7rem;\n  white-space: nowrap;\n  margin-top: -5px;\n}\n\n.scan-button-css-change > ion-icon {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-bottom: 5px;\n}\n\n.scan-button-css-list {\n  width: 75px;\n  height: 75px;\n  background-image: linear-gradient(0deg, #044590, #1f80ef);\n  color: white;\n  border: 1px solid #bcbcbc;\n  box-shadow: 1px 1px 5px #bcbcbc;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50% 50%;\n  margin-bottom: 10px;\n}\n\n.scan-button-css-list > span {\n  font-size: 0.7rem;\n  white-space: nowrap;\n  margin-top: -5px;\n}\n\n.scan-button-css-list > ion-icon {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-bottom: 5px;\n}\n\n.notscan-button-css {\n  margin-top: 20px;\n  padding: 2px 8px;\n  border-radius: 5px;\n  font-size: 1.3rem;\n  color: black;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n\n.notscan-button-icon {\n  position: relative;\n  top: 3px;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: right;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 1rem;\n}\n\n.header-title {\n  display: inline-block;\n  font-size: 0.9rem;\n  color: black;\n  margin-left: -1px;\n}\n\n.tab1-load-model {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 100;\n  display: none;\n}\n\n.tab1-load-model-con {\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 40vh;\n  height: 11rem;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px 5px;\n  padding: 10px 10px 10px 10px;\n}\n\n.tab1-load-model-title {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n  color: #aaa;\n}\n\n.tab1-load-model-input {\n  height: 2.8rem;\n  width: 100%;\n  border: 1px solid #aaa;\n  border-radius: 3px;\n}\n\n.tab1-load-model-button {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  margin-top: 1.2rem;\n}\n\n.tab1-load-model-delete {\n  width: 30%;\n  font-size: 1.2rem;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  text-align: center;\n  background-color: white;\n  color: #bcbcbc;\n  padding: 0.6rem;\n  margin-right: 8px;\n}\n\n.tab1-load-model-ok {\n  width: 70%;\n  font-size: 1.2rem;\n  text-align: center;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  background-color: #005bac;\n  color: white;\n  padding: 0.6rem;\n}\n\n.tab1-load-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 99;\n  display: none;\n}\n\n.load-css {\n  position: absolute;\n  left: 40%;\n  top: 40%;\n  color: #1095ff;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n\n.dn {\n  display: none;\n}\n\n.quick-link {\n  padding-bottom: 30px;\n}\n\n.quick-link > div {\n  background: #fff;\n  border-bottom: 1px solid #eee;\n  padding: 15px;\n  font-size: 16px;\n}\n\n.quick-link div:first-child, .quick-link div:last-child {\n  margin-top: 15px;\n}\n\n.profile {\n  background-image: linear-gradient(to bottom, #106FC3 0%, #054B89 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#FF106FC3\", endColorstr=\"#FF054B89\", GradientType=0);\n  padding: 25px 0;\n  text-align: center;\n}\n\n.profile .welcome {\n  font-size: 20px;\n  color: #fff;\n}\n\n.profile .loc {\n  font-size: 16px;\n  margin: 10px 0 0;\n  color: #fff;\n  opacity: 0.8;\n}\n\n.profile img {\n  height: 180px;\n  max-width: 100%;\n  opacity: 0.8;\n  margin-bottom: 20px;\n}\n\n.func {\n  display: flex;\n  justify-content: space-around;\n  color: #fff;\n  padding: 25px 0;\n  background-image: linear-gradient(to bottom, #06559A 0%, #143B62 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#FF06559A\", endColorstr=\"#FF143B62\", GradientType=0);\n}\n\n.func strong {\n  width: 64px;\n  text-align: center;\n  font-weight: normal;\n}\n\n.func i {\n  display: block;\n  width: 64px;\n  height: 64px;\n  border-radius: 6px;\n  position: relative;\n  padding: 12px 0;\n}\n\n.func b {\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  top: 0;\n  left: 0;\n}\n\n.func i::before, .func b::before, .func b::after, .func i::after {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  content: \"\";\n}\n\n.func i::before {\n  top: 0;\n  left: 0;\n  border-top: 4px solid #4B85B7;\n  border-left: 4px solid #4B85B7;\n  border-top-left-radius: 6px;\n}\n\n.func b::before {\n  top: 0;\n  right: 0;\n  border-top: 4px solid #4B85B7;\n  border-right: 4px solid #4B85B7;\n  border-top-right-radius: 6px;\n}\n\n.func b::after {\n  bottom: 0;\n  left: 0;\n  border-bottom: 4px solid #4B85B7;\n  border-left: 4px solid #4B85B7;\n  border-bottom-left-radius: 6px;\n}\n\n.func i::after {\n  bottom: 0;\n  right: 0;\n  border-bottom: 4px solid #4B85B7;\n  border-right: 4px solid #4B85B7;\n  border-bottom-right-radius: 6px;\n}\n\n.func span {\n  margin-top: 15px;\n  display: block;\n  font-size: 16px;\n}\n\n.func .b-open b {\n  background: url(\"/assets/imgs/i_barcode.png\") no-repeat center center;\n  background-size: 75%;\n}\n\n.func .b-change b {\n  background: url(\"/assets/imgs/i_change.png\") no-repeat center center;\n  background-size: 75%;\n}\n\n.func .b-list b {\n  background: url(\"/assets/imgs/i_list.png\") no-repeat center center;\n  background-size: 75%;\n}\n\n.arrow-r {\n  font-size: 16px;\n  float: right;\n  color: #ddd;\n}\n\n.ft {\n  text-align: center;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRFQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQUlGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtB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TSxPQUFBO0FBa0VuRDs7QUFoRUU7RUFBc0MsV0FBQTtFQUFXLFlBQUE7RUFBWSxrQkFBQTtFQUFrQixXQUFBO0FBc0VqRjs7QUFwRUU7RUFBVSxNQUFBO0VBQU0sT0FBQTtFQUFPLDZCQUFBO0VBQTZCLDhCQUFBO0VBQThCLDJCQUFBO0FBMkVwRjs7QUExRUU7RUFBVSxNQUFBO0VBQU0sUUFBQTtFQUFRLDZCQUFBO0VBQTZCLCtCQUFBO0VBQStCLDRCQUFBO0FBaUZ0Rjs7QUFoRkU7RUFBUyxTQUFBO0VBQVMsT0FBQTtFQUFPLGdDQUFBO0VBQWdDLDhCQUFBO0VBQThCLDhCQUFBO0FBdUZ6Rjs7QUF0RkU7RUFBUyxTQUFBO0VBQVMsUUFBQTtFQUFRLGdDQUFBO0VBQWdDLCtCQUFBO0VBQStCLCtCQUFBO0FBNkYzRjs7QUE1RkU7RUFBSyxnQkFBQTtFQUFnQixjQUFBO0VBQWMsZUFBQTtBQWlHckM7O0FBaEdFO0VBQVUscUVBQUE7RUFBcUUsb0JBQUE7QUFvR2pGOztBQW5HRTtFQUFZLG9FQUFBO0VBQW9FLG9CQUFBO0FBdUdsRjs7QUF0R0U7RUFBVSxrRUFBQTtFQUFrRSxvQkFBQTtBQTBHOUU7O0FBdkdDO0VBQVMsZUFBQTtFQUFnQixZQUFBO0VBQWEsV0FBQTtBQTZHdkM7O0FBNUdDO0VBQUksa0JBQUE7RUFBa0Isb0JBQUE7QUFpSHZCIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXNwZWMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi9hc3NldHMvaW1ncy9ob21lYmcucG5nJyk7XHJcbn1cclxuLnBlcnNvbi1iYXIge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI2NnB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLnBlcnNvbi1iYXItaGVhZCB7XHJcbiAgd2lkdGg6IDMuNXJlbTtcclxuICBoZWlnaHQ6IDMuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbi5wZXJzb24tYmFyLWhlYWQgPiBpbWcge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxufVxyXG5cclxuLnBlcnNvbi1iYXItdXNlciB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG4ucGVyc29uLWJhci11c2VyID4gLnNhbXBsZSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLmJveC1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogYXF1YW1hcmluZTtcclxufVxyXG5cclxuLnBlcnNvbi1iYXItYm90dG9tIHtcclxuICB3aWR0aDogMTAwdm07XHJcbiAgaGVpZ2h0OiA4dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdmZjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNTAlIDUwJTtcclxuICBtYXJnaW4tdG9wOiAtNHZoO1xyXG59XHJcblxyXG4ubWlkZGxlLWluZm8tYmFyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIHBhZGRpbmc6IDJyZW0gM3Z3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5taWRkbGUtaW5mby1iYXIgPiBwIHtcclxuICBjb2xvcjogICMzODgxZDU7XHJcbiAgLy90ZXh0LWluZGVudDozMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6NDBweDtcclxuICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwjMDA1QkFDLCMzODgxZDUsIzA2YWVhMyk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6dGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1pZGRsZS1pbmZvLWJhciA+IGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDI1dnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODFkNTtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxufVxyXG4ubWlkZGxlLWluZm8tYmFyID4gZGl2ID4gLnR3byB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5taWRkbGUtaW5mby1iYXIgPiAuZGl2LW9uZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODFkNTtcclxufVxyXG4ubWlkZGxlLWluZm8tYmFyID4gLmRpdi10d28ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmFlYTM7XHJcbn1cclxuLm1pZGRsZS1pbmZvLWJhciA+IC5kaXYtdGhyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZhODVjO1xyXG59XHJcbi5taWRkbGUtaW5mby1iYXIgPiAuZGl2LVNwYWNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9udHNpemUge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcbi5zY2FuLWJ1dHRvbntcclxuICBoZWlnaHQ6IDIxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNjYW4tYnV0dG9uLWNzcyB7XHJcbiAgaGVpZ2h0OiAyMTBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuLmRpdi1jaGFuZ2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGNvbG9yOiAjMzM5M2Q0O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuXHJcbi5zY2FuLWJ1dHRvbi1jc3MtbG9uZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwNDQ1OTAsICMxZjgwZWYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNiY2JjYmM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zY2FuLWJ1dHRvbi1jc3MtbG9uZyA+IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5zY2FuLWJ1dHRvbi1jc3MtbG9uZyA+IGltZyB7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uc2Nhbi1idXR0b24tY3NzLWNoYW5nZXtcclxuICB3aWR0aDogNzVweDtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwNDQ1OTAsICMxZjgwZWYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNiY2JjYmM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zY2FuLWJ1dHRvbi1jc3MtY2hhbmdlID4gc3BhbiB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBtYXJnaW4tdG9wOiAtNXB4XHJcbn1cclxuLnNjYW4tYnV0dG9uLWNzcy1jaGFuZ2UgPiBpb24taWNvbiB7XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5zY2FuLWJ1dHRvbi1jc3MtbGlzdHtcclxuICB3aWR0aDogNzVweDtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwNDQ1OTAsICMxZjgwZWYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNiY2JjYmM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zY2FuLWJ1dHRvbi1jc3MtbGlzdCA+IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWFyZ2luLXRvcDogLTVweFxyXG59XHJcbi5zY2FuLWJ1dHRvbi1jc3MtbGlzdCA+IGlvbi1pY29uIHtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbi5ub3RzY2FuLWJ1dHRvbi1jc3Mge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogMnB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5vdHNjYW4tYnV0dG9uLWljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDNweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyLXRpdGxlLWRlZmF1bHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLmhlYWRlci1pY29uIHtcclxuICB3aWR0aDogMzBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxufVxyXG4uaGVhZGVyLWZvbnQge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgLy8gbWFyZ2luLXRvcDogNnB4XHJcbn1cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8vbWFyZ2luLXRvcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tbGVmdDogLTFweDtcclxufVxyXG5cclxuLnRhYjEtbG9hZC1tb2RlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIC8vYmFja2dyb3VuZDogcmdiYSgzOSwgNjAsIDEyNSwgMC41KTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udGFiMS1sb2FkLW1vZGVsLWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiA0MHZoO1xyXG4gIGhlaWdodDogMTFyZW07XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG4udGFiMS1sb2FkLW1vZGVsLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG4udGFiMS1sb2FkLW1vZGVsLWlucHV0IHtcclxuICBoZWlnaHQ6IDIuOHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4udGFiMS1sb2FkLW1vZGVsLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcclxufVxyXG4udGFiMS1sb2FkLW1vZGVsLWRlbGV0ZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICNiY2JjYmM7XHJcbiAgcGFkZGluZzogMC42cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi50YWIxLWxvYWQtbW9kZWwtb2sge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiY2JjYmM7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDViYWM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNnJlbTtcclxufVxyXG4udGFiMS1sb2FkLWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjQ7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubG9hZC1jc3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA0MCU7XHJcbiAgdG9wOiA0MCU7XHJcbiAgY29sb3I6ICMxMDk1ZmY7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAgLy8gU2FmYXJpIDUuMS02LCBDaHJvbWUgMTArXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7ICAvLyBPcGVyYSAxMlxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpOyAvLyBTdGFuZGFyZCwgSUUxMCwgRmlyZWZveCAxNissIE9wZXJhIDEyLjEwKywgU2FmYXJpIDcrLCBDaHJvbWUgMjYrXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd25cclxufVxyXG5cclxuLy8vL1xyXG4uZG57ZGlzcGxheTpub25lO31cclxuXHJcbi5xdWljay1saW5re3BhZGRpbmctYm90dG9tOjMwcHg7XHJcbiAgPmRpdntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtwYWRkaW5nOjE1cHg7Zm9udC1zaXplOjE2cHg7fVxyXG4gIGRpdjpmaXJzdC1jaGlsZCxkaXY6bGFzdC1jaGlsZHttYXJnaW4tdG9wOjE1cHg7fVxyXG59XHJcblxyXG4ucHJvZmlsZXtcclxuICBAaW5jbHVkZSBncmFkaWVudC12ZXJ0aWNhbCgjMTA2RkMzLCAjMDU0Qjg5KTtcclxuICBwYWRkaW5nOjI1cHggMDt0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAud2VsY29tZXtmb250LXNpemU6MjBweDtjb2xvcjojZmZmO31cclxuICAubG9je2ZvbnQtc2l6ZToxNnB4O21hcmdpbjoxMHB4IDAgMDtjb2xvcjojZmZmO29wYWNpdHk6MC44O31cclxuICBpbWd7aGVpZ2h0OjE4MHB4O21heC13aWR0aDoxMDAlO29wYWNpdHk6MC44O21hcmdpbi1ib3R0b206MjBweDt9XHJcbn1cclxuXHJcbi5mdW5je1xyXG4gIGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2NvbG9yOiNmZmY7cGFkZGluZzoyNXB4IDA7XHJcbiAgQGluY2x1ZGUgZ3JhZGllbnQtdmVydGljYWwoIzA2NTU5QSwgIzE0M0I2Mik7XHJcbiAgXHJcbiAgc3Ryb25ne3dpZHRoOjY0cHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC13ZWlnaHQ6bm9ybWFsO31cclxuICBcclxuICBpe2Rpc3BsYXk6YmxvY2s7d2lkdGg6NjRweDtoZWlnaHQ6NjRweDtib3JkZXItcmFkaXVzOjZweDtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjEycHggMDt9XHJcbiAgYntwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo2NHB4O2hlaWdodDo2NHB4O3RvcDowO2xlZnQ6MDt9XHJcbiAgXHJcbiAgaTo6YmVmb3JlLGI6OmJlZm9yZSxiOjphZnRlcixpOjphZnRlcnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6Jyc7fVxyXG5cclxuICBpOjpiZWZvcmV7dG9wOjA7bGVmdDowO2JvcmRlci10b3A6NHB4IHNvbGlkICM0Qjg1Qjc7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkICM0Qjg1Qjc7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo2cHg7fSAvL3RsXHJcbiAgYjo6YmVmb3Jle3RvcDowO3JpZ2h0OjA7Ym9yZGVyLXRvcDo0cHggc29saWQgIzRCODVCNztib3JkZXItcmlnaHQ6NHB4IHNvbGlkICM0Qjg1Qjc7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NnB4O30gLy90clxyXG4gIGI6OmFmdGVye2JvdHRvbTowO2xlZnQ6MDtib3JkZXItYm90dG9tOjRweCBzb2xpZCAjNEI4NUI3O2JvcmRlci1sZWZ0OjRweCBzb2xpZCAjNEI4NUI3O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NnB4O30gLy9ibFxyXG4gIGk6OmFmdGVye2JvdHRvbTowO3JpZ2h0OjA7Ym9yZGVyLWJvdHRvbTo0cHggc29saWQgIzRCODVCNztib3JkZXItcmlnaHQ6NHB4IHNvbGlkICM0Qjg1Qjc7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NnB4O30gLy9iclxyXG4gIHNwYW57bWFyZ2luLXRvcDoxNXB4O2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjE2cHg7fVxyXG4gIC5iLW9wZW4gYntiYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWdzL2lfYmFyY29kZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6NzUlO31cclxuICAuYi1jaGFuZ2UgYntiYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWdzL2lfY2hhbmdlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO2JhY2tncm91bmQtc2l6ZTo3NSU7fVxyXG4gIC5iLWxpc3QgYntiYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWdzL2lfbGlzdC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6NzUlO31cclxufVxyXG5cclxuIC5hcnJvdy1ye2ZvbnQtc2l6ZToxNnB4OyBmbG9hdDpyaWdodDsgY29sb3I6I2RkZDt9IC8vaW9uLWljb25cclxuIC5mdHt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nLWJvdHRvbToxNXB4O31cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
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


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! codelyzer/util/isNotNullOrUndefined */
      "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var scanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! scanner */
      "./node_modules/scanner/dist/esm/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../app.config */
      "./src/app/app.config.ts");
      /* harmony import */


      var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/http-client.service */
      "./src/app/shared/http-client.service.ts");
      /* harmony import */


      var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd-mobile */
      "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts"); // 扫描码


      var Scanner = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Scanner; //
      // import {Keyboard} from '@ionic-native/keyboard';

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(router, http, platform, eleRef, alertModal, route, changeRef) {
          var _this = this;

          _classCallCheck(this, Tab1Page);

          this.router = router;
          this.http = http;
          this.platform = platform;
          this.eleRef = eleRef;
          this.alertModal = alertModal;
          this.route = route;
          this.changeRef = changeRef;
          this.UserName = '';
          this.modelShow = false;
          this.loginTitle = '核酸检测平台-采集';
          this.isMove = false;
          this.sampleInfo = {
            dayUserCollectPatientNum: '---',
            dayUserCollectTubeNum: '---',
            totalUserCollectPatientNum: '---',
            totalUserCollectTubeNum: '---'
          };
          this.selectRegisterType = '0'; // 0 自愿者 1 护士

          this.state = {
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            imgHeight: '184px'
          };
          this.platform.backButton.subscribe(function () {
            if (_this.router.url.indexOf('tab1') > -1) {
              _this.router.navigate(['/login']);
            }
          });
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.tab1ModelDisplay = document.getElementsByClassName('tab1-load-model')[0];
            this.load = document.getElementsByClassName('tab1-load-bar')[0];
            this.route.queryParams.subscribe(function (data) {
              if (data['boxBarcode'] !== undefined) {
                _this2.http.showToast('封管失败，' + data['boxBarcode'] + '箱子已满，请扫码新的箱码，该试管会自动封管并关联到新的箱子中。');

                _this2.isMove = true;
              } else {
                _this2.isMove = false;
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.UserName = sessionStorage.getItem('loginUserName');
            this.censusAddress = sessionStorage.getItem('censusAddress');
            this.changeRef.markForCheck();
            this.changeRef.detectChanges();
            console.log('1111');
            this.tab1ModelDisplay = document.getElementsByClassName('tab1-load-model')[0];
            this.getRcpName(); // this.getSampleByUser();
          } // 路由返回

        }, {
          key: "showAlert",
          value: function showAlert() {
            var _this3 = this;

            this.alertModal.alert('', '确认退出?', [{
              text: '取消',
              onPress: function onPress() {}
            }, {
              text: '退出',
              onPress: function onPress() {
                sessionStorage.clear();

                _this3.router.navigate(['/login']);
              }
            }]);
          }
        }, {
          key: "routeBack",
          value: function routeBack() {
            this.showCustom(false);
            this.showAlert();
          }
        }, {
          key: "navTo",
          value: function navTo(dest) {
            this.router.navigate([dest]);
          }
        }, {
          key: "boxListClick",
          value: function boxListClick() {
            this.showCustom(false);
            this.router.navigate(['/BoxList']);
          }
        }, {
          key: "clickScan",
          value: function clickScan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var result;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return Scanner.openScanner();

                    case 3:
                      result = _context3.sent;
                      _context3.t0 = result['operation'];
                      _context3.next = _context3.t0 === 'SCAN' ? 7 : _context3.t0 === 'MANUAL' ? 9 : _context3.t0 === 'CANCEL' ? 11 : 12;
                      break;

                    case 7:
                      this.ScanBoxOperate(result['result']);
                      return _context3.abrupt("break", 12);

                    case 9:
                      this.showCustom(true);
                      return _context3.abrupt("break", 12);

                    case 11:
                      return _context3.abrupt("break", 12);

                    case 12:
                      _context3.next = 17;
                      break;

                    case 14:
                      _context3.prev = 14;
                      _context3.t1 = _context3["catch"](0);
                      this.showCustom(true);

                    case 17:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 14]]);
            }));
          }
        }, {
          key: "showBoxInfoAlert",
          value: function showBoxInfoAlert(data) {
            var _this4 = this;

            this.closeBoxInfo = data;
            this.alertModal.alert('转运箱:' + data['boxBarcode'], this.boxInfo, [{
              text: '开箱',
              onPress: function onPress() {
                _this4.OpenBoxOperate(data['boxBarcode']);
              }
            }, {
              text: '取消',
              onPress: function onPress() {}
            }]);
          } //  弹框

        }, {
          key: "showCustom",
          value: function showCustom(value) {
            this.barcode = undefined;

            if (value) {
              this.eleRef.nativeElement.querySelector('.tab1-load-model')['style']['display'] = 'inline-block';
              this.changeRef.markForCheck();
              this.changeRef.detectChanges();
              this.eleRef.nativeElement.querySelector('.tab1-load-model-input').focus();
              var keyboard = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Keyboard;
              keyboard.show();
            } else {
              this.eleRef.nativeElement.querySelector('.tab1-load-model')['style']['display'] = 'none';
            }
          } // 保存箱码

        }, {
          key: "ScanBoxOperate",
          value: function ScanBoxOperate(barcode) {
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__["isNotNullOrUndefined"])(barcode) && barcode.trim() !== '') {
              if (!this.http.CheckNumberAndEnglish(barcode)) {
                this.http.showToast('箱码中存在除数字和大写字母外的字符，请重新扫描或输入！');
                return;
              }

              if (barcode.length !== 6) {
                if (!this.http.generateBarcode(barcode) || barcode.length < 8) {
                  this.http.showToast('箱码校验失败，请重新扫描或输入！');
                  return;
                }
              }
            } else {
              this.http.showToast('箱码为空，请重新扫描或输入！');
              return;
            }

            this.showCustom(false);
            this.OpenBoxOperate(barcode); // 查询后台箱信息
            // this.getBoxInfoById(barcode);
          }
        }, {
          key: "OpenBoxOperate",
          value: function OpenBoxOperate(barcode) {
            var _this5 = this;

            var condition = {
              boxBarcode: barcode,
              boxState: 'OpenBox'
            };
            this.load['style']['display'] = 'inline-block';
            this.http.get("rcp/api/box/operate/scan", condition, '扫描转运箱条码', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.openBox).subscribe(function (data) {
              _this5.load['style']['display'] = 'none';

              if (data['isSuccess']) {
                sessionStorage.setItem('isCloseBox', '0');
                sessionStorage.setItem('boxBarcode', data['data']['boxBarcode']);
                sessionStorage.setItem('boxBarId', data['data']['boxBarId']); // 判断是否是移管

                if (_this5.isMove) {
                  _this5.confirmTube();
                } else {
                  _this5.router.navigate(['/BottleList']); //   this.router.navigate(['/BottleBarcode']);

                }
              }
            });
          } // 封管操作

        }, {
          key: "confirmTube",
          value: function confirmTube() {
            var _this6 = this;

            var condition = {
              boxBarId: sessionStorage.getItem('boxBarId'),
              tubeBarId: sessionStorage.getItem('tubeBarId'),
              tubeBarcode: sessionStorage.getItem('tubeBarcode'),
              tubeState: 'CloseBar'
            };
            this.http.get("rcp/api/tube/operate/confirmTube", condition, '确认采集管', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.confirmTube).subscribe(function (data) {
              _this6.load['style']['display'] = 'none';

              if (data['isSuccess']) {
                _this6.router.navigate(['/BottleList']);
              }
            });
          }
        }, {
          key: "getRcpName",
          value: function getRcpName() {
            var config = {
              "name": "全场景疫情病原体检测信息系统"
            };
            this.loginTitle = config['name'];
          } // 根据用户查当前信息

        }, {
          key: "getSampleByUser",
          value: function getSampleByUser() {
            var _this7 = this;

            this.load['style']['display'] = 'inline-block';
            var condition = null;
            this.http.get("rcp/api/box/operate/getCollectNumByUser", condition, '根据采集员查询采集相关数量', '').subscribe(function (data) {
              _this7.load['style']['display'] = 'none';

              if (data['isSuccess']) {
                _this7.sampleInfo = data['data'];
              }
            });
          } // 根据用户查管

        }, {
          key: "getTubeByUser",
          value: function getTubeByUser() {
            var _this8 = this;

            var condition = {
              boxBarId: sessionStorage.getItem('boxBarId')
            };
            this.http.get(_app_config__WEBPACK_IMPORTED_MODULE_7__["AppConfig"].baseApi + "rcp/api/tube/operate/getTubeByUser", condition, '根据用户查管', '').subscribe(function (data) {
              // 判断是否有管
              if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_3__["isNotNullOrUndefined"])(data['data']['tubeId'])) {
                // 有管, 存管信息
                sessionStorage.setItem('tubeBarId', data['data']['tubeId']);
                sessionStorage.setItem('tubeBarcode', data['data']['tubeBarcode']);
                sessionStorage.setItem('tubeCapacity', data['data']['tubeCapacity']); //  跳转到扫描身份证界面

                _this8.router.navigate(['/PersonList']);
              } else {
                // 无管， 跳转到扫采集管界面
                _this8.router.navigate(['/BottleBarcode']);
              }
            });
          } // 根据箱编码查询箱信息

        }, {
          key: "getBoxInfoById",
          value: function getBoxInfoById(barcode) {
            var _this9 = this;

            this.load['style']['display'] = 'inline-block';
            var condition = {
              boxBarcode: barcode
            };
            this.http.get("rcp/api/box/operate/getBoxInfoByBarcode", condition, '根据箱编码查询箱信息', '查询箱信息失败').subscribe(function (data) {
              _this9.load['style']['display'] = 'none';

              if (data['isSuccess']) {
                switch (data['data']['boxState']) {
                  case 'OpenBox':
                    _this9.OpenBoxOperate(barcode);

                    break;

                  case 'CloseBox':
                    _this9.showBoxInfoAlert(data['data']);

                    break;

                  case 'Send':
                    _this9.http.showToast('该转运箱已送检');

                    break;

                  case 'Incept':
                    _this9.http.showToast('该转运箱已接收');

                    break;

                  default:
                    _this9.showBoxInfoAlert(data['data']);

                    break;
                }
              }
            });
          }
          /**
           * 换箱
           */

        }, {
          key: "clickChange",
          value: function clickChange() {
            this.router.navigate(['/changebox']);
          }
          /**
           * 换箱列表
           */

        }, {
          key: "clickTransferBoxListChange",
          value: function clickTransferBoxListChange(value) {
            switch (value) {
              case 1:
                this.router.navigate(['/TransferBoxList']);
                break;

              case 2:
                this.router.navigate(['/TubeFindBox']);
                break;

              case 3:
                this.router.navigate(['/ModifyPwd']);
                break;

              case 4:
                this.router.navigate(['/TubeFindPeople']);
                break;

              case 5:
                this.router.navigate(['/CollectionStatistics']);
                break;
            }
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_9__["ModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      Tab1Page.propDecorators = {
        boxInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['boxInfo', {
            "static": false
          }]
        }]
      };
      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map