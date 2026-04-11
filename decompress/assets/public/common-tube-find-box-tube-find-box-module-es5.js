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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-tube-find-box-tube-find-box-module"], {
    /***/
    "./node_modules/ocr/dist/esm/definitions.js":
    /*!**************************************************!*\
      !*** ./node_modules/ocr/dist/esm/definitions.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesOcrDistEsmDefinitionsJs(module, exports) {//# sourceMappingURL=definitions.js.map

      /***/
    },

    /***/
    "./node_modules/ocr/dist/esm/index.js":
    /*!********************************************!*\
      !*** ./node_modules/ocr/dist/esm/index.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function node_modulesOcrDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./definitions */
      "./node_modules/ocr/dist/esm/definitions.js");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_definitions__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony reexport (unknown) */


      for (var __WEBPACK_IMPORT_KEY__ in _definitions__WEBPACK_IMPORTED_MODULE_0__) {
        if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
          __webpack_require__.d(__webpack_exports__, key, function () {
            return _definitions__WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
      }
      /* harmony import */


      var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./web */
      "./node_modules/ocr/dist/esm/web.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OcrWeb", function () {
        return _web__WEBPACK_IMPORTED_MODULE_1__["OcrWeb"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Ocr", function () {
        return _web__WEBPACK_IMPORTED_MODULE_1__["Ocr"];
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "./node_modules/ocr/dist/esm/web.js":
    /*!******************************************!*\
      !*** ./node_modules/ocr/dist/esm/web.js ***!
      \******************************************/

    /*! exports provided: OcrWeb, Ocr */

    /***/
    function node_modulesOcrDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OcrWeb", function () {
        return OcrWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ocr", function () {
        return Ocr;
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

      var OcrWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(OcrWeb, _capacitor_core__WEBP);

        var _super = _createSuper(OcrWeb);

        function OcrWeb() {
          _classCallCheck(this, OcrWeb);

          return _super.call(this, {
            name: 'Ocr',
            platforms: ['web']
          });
        }

        _createClass(OcrWeb, [{
          key: "scan",
          value: function scan() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      throw new Error("Method scan not implemented.");

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }]);

        return OcrWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var Ocr = new OcrWeb();
      Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(Ocr); //# sourceMappingURL=web.js.map

      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common/tube-find-box/tube-find-box.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/tube-find-box/tube-find-box.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonTubeFindBoxTubeFindBoxPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回</span>\n            </div>\n            <span class=\"header-title\">试管查转运箱</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"tabContentCss\">\n\n    <div class=\"tab-top\">\n        <div class=\"select\">\n            <div>\n                <input\n                        type=\"text\"\n                        placeholder=\"请输入搜索试管码\"\n                        #barcode\n                />\n            </div>\n            <span (click)=\"search(barcode.value)\"> 搜索 </span>\n        </div>\n    </div>\n\n    <div class=\"am-demo-page\">\n        <p style=\"font-weight: bold;font-size: 20px\">转运箱信息</p>\n        <p>箱码：{{boxInfo.boxBarcode}}</p>\n        <p>状态：\n            <span *ngIf=\"boxInfo.boxState === 'OpenBox'\">已开箱</span>\n            <span *ngIf=\"boxInfo.boxState === 'CloseBox'\">已封箱</span>\n            <span *ngIf=\"boxInfo.boxState === 'Send'\">已送检</span>\n            <span *ngIf=\"boxInfo.boxState === 'Incept'\">已接收</span>\n        </p>\n        <p>试管数：{{boxInfo.tubeNum}}</p>\n        <p>被采样人数：{{boxInfo.patientNum}}</p>\n        <p>采集地址：{{boxInfo.censusAddress}}</p>\n        <p>开箱人：{{boxInfo.openUser}}</p>\n        <p>开箱时间：{{boxInfo.openTime | date : 'yyyy-MM-dd HH:mm:ss'}}</p>\n        <p>封箱人：{{boxInfo.closeUser}}</p>\n        <p>封箱时间：{{boxInfo.closeTime | date : 'yyyy-MM-dd HH:mm:ss'}}</p>\n        <p>送检人：{{boxInfo.sendUser}}</p>\n        <p>送检时间：{{boxInfo.sendTime | date : 'yyyy-MM-dd HH:mm:ss'}}</p>\n        <p>接收人：{{boxInfo.inceptUser}}</p>\n        <p>接收时间：{{boxInfo.inceptTime | date : 'yyyy-MM-dd HH:mm:ss'}}</p>\n    </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/common/tube-find-box/tube-find-box.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/common/tube-find-box/tube-find-box.module.ts ***!
      \**************************************************************/

    /*! exports provided: TubeFindBoxModule */

    /***/
    function srcAppCommonTubeFindBoxTubeFindBoxModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TubeFindBoxModule", function () {
        return TubeFindBoxModule;
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


      var _tube_find_box_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./tube-find-box.page */
      "./src/app/common/tube-find-box/tube-find-box.page.ts");

      var TubeFindBoxModule = function TubeFindBoxModule() {
        _classCallCheck(this, TubeFindBoxModule);
      };

      TubeFindBoxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tube_find_box_page__WEBPACK_IMPORTED_MODULE_9__["TubeFindBoxPage"]
        }])],
        declarations: [_tube_find_box_page__WEBPACK_IMPORTED_MODULE_9__["TubeFindBoxPage"]]
      })], TubeFindBoxModule);
      /***/
    },

    /***/
    "./src/app/common/tube-find-box/tube-find-box.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/common/tube-find-box/tube-find-box.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonTubeFindBoxTubeFindBoxPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tabContentCss {\n  height: calc(100vh - 56px);\n  overflow: auto;\n}\n\n.tab-top {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n\n.select {\n  height: 70px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.select > div > input {\n  width: 65vw;\n  height: 46px;\n  padding-left: 6px;\n}\n\n.select > span {\n  display: flex;\n  flex-direction: row;\n  background-color: #005BAC;\n  color: white;\n  width: 15vw;\n  height: 45px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 3px 3px 0;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n:host ::ng-deep .header-md::after {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 8px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n  margin-left: -5px;\n}\n\n.header-number {\n  float: right;\n  text-align: center;\n  margin-top: 6px;\n  font-size: 1rem;\n}\n\n.closeBoxBtn {\n  float: right;\n  background-color: #005BAC;\n  color: white;\n  padding: 1px 6px;\n  border-radius: 3px;\n  font-size: 0.8rem;\n}\n\n.am-demo-page {\n  height: calc(100vh - 130px);\n  overflow: auto;\n  background-color: white;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 30px;\n  color: #707070;\n  padding: 12px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3R1YmUtZmluZC1ib3gvdHViZS1maW5kLWJveC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQUlGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFRRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFRRjs7QUFMQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFRRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi90dWJlLWZpbmQtYm94L3R1YmUtZmluZC1ib3gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYkNvbnRlbnRDc3Mge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50YWItdG9we1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2VsZWN0e1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlbGVjdCA+IGRpdiA+aW5wdXR7XG4gIHdpZHRoOiA2NXZ3O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuLnNlbGVjdCA+IHNwYW57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDE1dnc7XG4gIGhlaWdodDogNDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xufVxuXG5cbjpob3N0IDo6bmctZGVlcCAgLnRvb2xiYXItdGl0bGUtZGVmYXVsdHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgIC5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4uaGVhZGVyLWljb257XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEwcHhcbn1cbi5oZWFkZXItZm9udHtcbiAgd2lkdGg6IDMwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tdG9wOiA4cHhcbn1cbi5oZWFkZXItdGl0bGV7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cbi5oZWFkZXItbnVtYmVye1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jbG9zZUJveEJ0bntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QkFDO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5hbS1kZW1vLXBhZ2V7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEzMHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzcwNzA3MDtcbiAgcGFkZGluZzogMTJweCAyNXB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/common/tube-find-box/tube-find-box.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/common/tube-find-box/tube-find-box.page.ts ***!
      \************************************************************/

    /*! exports provided: TubeFindBoxPage */

    /***/
    function srcAppCommonTubeFindBoxTubeFindBoxPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TubeFindBoxPage", function () {
        return TubeFindBoxPage;
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


      var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/http-client.service */
      "./src/app/shared/http-client.service.ts");
      /* harmony import */


      var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd-mobile */
      "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! codelyzer/util/isNotNullOrUndefined */
      "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9__);

      var Ocr = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Ocr;

      var TubeFindBoxPage = /*#__PURE__*/function () {
        function TubeFindBoxPage(router, navCtrl, http, platform, deleteModal) {
          var _this = this;

          _classCallCheck(this, TubeFindBoxPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.http = http;
          this.platform = platform;
          this.deleteModal = deleteModal;
          this.boxInfo = {
            boxBarcode: '',
            boxId: '',
            boxState: '',
            censusAddress: '',
            closeTime: '',
            closeUser: '',
            inceptTime: '',
            inceptUser: '',
            openTime: '',
            openUser: '',
            patientNum: 0,
            sendTime: '',
            sendUser: '',
            tubeNum: 0
          }; // 控制app返回按钮

          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.routeBack();
          });
        }

        _createClass(TubeFindBoxPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {} // 路由返回

        }, {
          key: "routeBack",
          value: function routeBack() {
            // this.router.navigate(['/BoxList']);
            this.router.navigate(['/tabs/tab1']);
          }
        }, {
          key: "search",
          value: function search(barcode) {
            this.ListBoxTube(barcode);
          } // 调用后台接口
          // 根据箱查询所有管

        }, {
          key: "ListBoxTube",
          value: function ListBoxTube(barcode) {
            var _this2 = this;

            this.boxInfo = {
              boxBarcode: '',
              boxId: '',
              boxState: '',
              censusAddress: '',
              closeTime: '',
              closeUser: '',
              inceptTime: '',
              inceptUser: '',
              openTime: '',
              openUser: '',
              patientNum: 0,
              sendTime: '',
              sendUser: '',
              tubeNum: 0
            };

            if (!Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_9__["isNotNullOrUndefined"])(barcode) || barcode.trim() === '') {
              this.http.showToast('管码为空，请输入管码');
              return;
            }

            var condition = {
              boxBarcode: barcode
            };
            this.http.get("rcp/api/box/operate/getBoxInfoByTubeBarcode", condition, '根据管查箱信息', '根据管查箱信息失败', {
              load: true
            }).subscribe(function (data) {
              if (data['isSuccess']) {
                _this2.boxInfo = data['data'];
              }
            });
          }
        }]);

        return TubeFindBoxPage;
      }();

      TubeFindBoxPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_7__["HttpClientService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_8__["ModalService"]
        }];
      };

      TubeFindBoxPage.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@routeAnimation']
        }]
      };
      TubeFindBoxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tube-find-box',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tube-find-box.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common/tube-find-box/tube-find-box.page.html"))["default"],
        animations: [_shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tube-find-box.page.scss */
        "./src/app/common/tube-find-box/tube-find-box.page.scss"))["default"]]
      })], TubeFindBoxPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-tube-find-box-tube-find-box-module-es5.js.map