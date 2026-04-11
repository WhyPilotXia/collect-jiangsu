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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-bottle-barcode-bottle-barcode-module"], {
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
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common/bottle-barcode/bottle-barcode.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/bottle-barcode/bottle-barcode.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonBottleBarcodeBottleBarcodePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            <div class=\"header-icon\">\n                <Icon type=\"left\"  size=\"lg\" (click)=\"routeBack()\"></Icon>\n            </div>\n            <div class=\"header-font\" (click)=\"routeBack()\">\n                <span>返回封箱</span>\n            </div>\n            <span class=\"header-title\">试管码</span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"bottle-barcode-css\">\n\n        <div class=\"person-bar\">\n            <div class=\"person-bar-user\">\n                <span>转运箱码  {{titleInfo}}</span>\n                <br>\n                <span class=\"sample\">{{censusAddress}}</span>\n            </div>\n        </div>\n        <div class=\"person-bar-bottom\">\n        </div>\n\n        <div class=\"model-label-css\">\n            <div class=\"model-font\">选择标本类型 与 采集模式</div>\n            <div class=\"model-label-div\">\n                <ng-container *ngFor=\"let label of specimensList\">\n                    <label [ngClass]=\"label.checked? 'labelSelect' : 'labelNotSelect'\" (click)=\"sampleChange(label)\">\n                        <span [ngClass]=\"label.checked? 'labelSpanSelect' : label.disabled ? 'labelSpanNot':'labelSpanNotSelect'\">{{label.dicName}}</span>\n                        <input type=\"radio\" name=\"model\" value=\"ten\" [disabled]=\"label.disabled\" [checked]=\"label.checked\">\n                    </label>\n                </ng-container>\n                <!--<label class=\"labelSelect\">-->\n                    <!--<span class=\"labelSpanSelect\">咽拭子</span>-->\n                    <!--<input type=\"radio\" name=\"model\" value=\"ten\" [checked]=\"modelChecked.model10\" (click)=\"sampleChange('10')\">-->\n                <!--</label>-->\n                <!--<label class=\"labelNotSelect\">-->\n                    <!--<span class=\"labelSpanNotSelect\">鼻咽拭子</span>-->\n                    <!--<input type=\"radio\" name=\"model\" value=\"ten\" [checked]=\"modelChecked.model10\" (click)=\"sampleChange('10')\">-->\n                <!--</label>-->\n                <!--<label class=\"labelNotSelect\">-->\n                    <!--<span class=\"labelSpanNot\">血清</span>-->\n                    <!--<input type=\"radio\" name=\"model\" value=\"ten\" disabled [checked]=\"modelChecked.model10\" (click)=\"sampleChange('10')\">-->\n                <!--</label>-->\n            </div>\n            <div class=\"model-button-bar\">\n                <ng-container *ngFor=\"let model of collectList\">\n                    <div [ngClass]=\"model.checked? 'buttonSelect' : model.disabled ? 'buttonNot':'buttonNotSelect'\" (click)=\"modelChange(model)\">\n                        <div>\n                            {{model.memo1}}\n                        </div>\n                        <span>{{model.dicName}}</span>\n                    </div>\n                </ng-container>\n                <!--<div [ngClass]=\"modelChecked.model10? 'buttonSelect' : 'buttonNotSelect'\" (click)=\"modelChange('10')\">-->\n                    <!--<div>-->\n                        <!--十-->\n                    <!--</div>-->\n                    <!--<span>十合一混采</span>-->\n                <!--</div>-->\n                <!--<div [ngClass]=\"modelChecked.model5? 'buttonSelect' : 'buttonNotSelect'\" (click)=\"modelChange('5')\">-->\n                    <!--<div>-->\n                        <!--五-->\n                    <!--</div>-->\n                    <!--<span>五合一混采</span>-->\n                <!--</div>-->\n                <!--<div [ngClass]=\"modelChecked.model1? 'buttonSelect' : 'buttonNotSelect'\" (click)=\"modelChange('1')\">-->\n                    <!--<div>-->\n                        <!--单-->\n                    <!--</div>-->\n                    <!--<span>单采</span>-->\n                <!--</div>-->\n            </div>\n        </div>\n\n        <div class=\"scan-button-css\">\n            <div class=\"scan-button-css-long\" (click)=\"clickScan()\">\n                <img src=\"../../../assets/icon/scan-barcode.svg\">\n                <span>扫试管码</span>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n<div  class=\"bottle-load-model\">\n    <div class=\"bottle-load-model-con\">\n        <div class=\"load-model-title\">输入试管码</div>\n        <input type=\"text\"  class=\"bottle-load-model-input\"  [(ngModel)]=\"barcode\">\n        <div class=\"load-model-button\">\n            <div class=\"load-model-delete\" (click)=\"showCustom(false)\">\n                取消\n            </div>\n            <div class=\"load-model-ok\" (click)=\"ScanTubeOperate(barcode)\">\n                确定\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #tubeInfo>\n    <div class=\"tubeInfoCss\">\n        <p *ngFor=\"let closeTube of closeTubeInfo\">{{closeTube}}</p>\n    </div>\n    <!--{{closeTubeInfo}}-->\n</ng-template>";
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

      var ScannerWeb = /*#__PURE__*/function (_capacitor_core__WEBP2) {
        _inherits(ScannerWeb, _capacitor_core__WEBP2);

        var _super2 = _createSuper(ScannerWeb);

        function ScannerWeb() {
          _classCallCheck(this, ScannerWeb);

          return _super2.call(this, {
            name: 'Scanner',
            platforms: ['web']
          });
        }

        _createClass(ScannerWeb, [{
          key: "openScanner",
          value: function openScanner() {
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
        }, {
          key: "closeScanner",
          value: function closeScanner() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      throw new Error('Method not implemented.');

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
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
    "./src/app/common/bottle-barcode/bottle-barcode.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/common/bottle-barcode/bottle-barcode.module.ts ***!
      \****************************************************************/

    /*! exports provided: BottleBarcodeModule */

    /***/
    function srcAppCommonBottleBarcodeBottleBarcodeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BottleBarcodeModule", function () {
        return BottleBarcodeModule;
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


      var _bottle_barcode_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./bottle-barcode.page */
      "./src/app/common/bottle-barcode/bottle-barcode.page.ts");
      /* harmony import */


      var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../service/serviceCommon.module */
      "./src/app/service/serviceCommon.module.ts");

      var BottleBarcodeModule = function BottleBarcodeModule() {
        _classCallCheck(this, BottleBarcodeModule);
      };

      BottleBarcodeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"], _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_9__["ServiceCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _bottle_barcode_page__WEBPACK_IMPORTED_MODULE_8__["BottleBarcodePage"]
        }])],
        declarations: [_bottle_barcode_page__WEBPACK_IMPORTED_MODULE_8__["BottleBarcodePage"]]
      })], BottleBarcodeModule);
      /***/
    },

    /***/
    "./src/app/common/bottle-barcode/bottle-barcode.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/common/bottle-barcode/bottle-barcode.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonBottleBarcodeBottleBarcodePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bottle-barcode-css {\n  display: flex;\n  flex-direction: column;\n  background-color: #F1F1F1;\n  text-align: center;\n  height: calc(100vh - 56px);\n}\n\n.person-bar {\n  width: 100vw;\n  height: 18vh;\n  background-color: #0077FF;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.person-bar-user {\n  font-size: 1.2rem;\n  color: white;\n  z-index: 10;\n}\n\n.person-bar-user > .sample {\n  font-size: 0.9rem;\n}\n\n.person-bar-bottom {\n  width: 100vm;\n  height: 8vh;\n  background-color: #0077FF;\n  border-radius: 0 0 50% 50%;\n  margin-top: -4vh;\n}\n\n.scan-button-css {\n  height: 28vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.scan-button-css-long {\n  width: 25vh;\n  height: 25vh;\n  background-image: linear-gradient(0deg, #044590, #1F80EF);\n  color: white;\n  border: 1px solid #bcbcbc;\n  box-shadow: 1px 1px 5px #bcbcbc;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50% 50%;\n}\n\n.scan-button-css-long > span {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n\n.scan-button-css-long > img {\n  height: 3rem;\n  width: 3rem;\n  margin-bottom: 5px;\n}\n\n.model-label-css {\n  height: 40vh;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 10px;\n  margin: 10px;\n}\n\n.model-font {\n  font-size: 1rem;\n  font-weight: bold;\n  margin-bottom: 5vh;\n  width: 12rem;\n  height: 19px;\n  line-height: 19px;\n  color: #000000;\n  opacity: 1;\n}\n\n.model-label-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.labelSelect {\n  width: 83px;\n  height: 36px;\n  background: rgba(2, 120, 254, 0.2);\n  border: 1px solid #0278FE;\n  opacity: 0.65;\n  border-radius: 4px;\n  line-height: 36px;\n  margin-right: 1rem;\n}\n\n.labelNotSelect {\n  width: 83px;\n  height: 36px;\n  background: rgba(0, 0, 0, 0.08);\n  opacity: 0.65;\n  border-radius: 4px;\n  line-height: 36px;\n  margin-right: 1rem;\n}\n\n.labelSpanSelect {\n  display: inline-block;\n  margin-right: 5px;\n  color: #0278FE;\n  min-width: 3rem;\n}\n\n.labelSpanNotSelect {\n  display: inline-block;\n  margin-right: 5px;\n  color: #000000;\n  min-width: 3rem;\n}\n\n.labelSpanNot {\n  display: inline-block;\n  margin-right: 5px;\n  color: rgba(0, 0, 0, 0.35);\n  min-width: 3rem;\n}\n\n.model-button-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-top: 1.2rem;\n  border-top: 1px solid rgba(112, 112, 112, 0.3294117647);\n  padding-top: 1rem;\n}\n\n.buttonSelect {\n  cursor: pointer;\n}\n\n.buttonNotSelect > div {\n  width: 60px;\n  height: 60px;\n  background: #F2F2F2;\n  opacity: 1;\n  border-radius: 50%;\n  color: #000000;\n  line-height: 60px;\n  font-size: 26px;\n  font-weight: bold;\n}\n\n.buttonNotSelect > span {\n  display: inline-block;\n  margin-top: 5px;\n  color: #000000;\n}\n\n.buttonNot > div {\n  width: 60px;\n  height: 60px;\n  background: #F2F2F2;\n  opacity: 1;\n  border-radius: 50%;\n  color: rgba(0, 0, 0, 0.35);\n  line-height: 60px;\n  font-size: 26px;\n  font-weight: bold;\n}\n\n.buttonNot > span {\n  display: inline-block;\n  margin-top: 5px;\n  color: rgba(0, 0, 0, 0.35);\n}\n\n.buttonSelect > div {\n  width: 60px;\n  height: 60px;\n  background: #DEEDFF;\n  border: 1px solid #7AB8FE;\n  opacity: 1;\n  border-radius: 50%;\n  color: #0278FE;\n  line-height: 60px;\n  font-size: 26px;\n  font-weight: bold;\n}\n\n.buttonSelect > span {\n  display: inline-block;\n  margin-top: 5px;\n  color: #0278FE;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 1rem;\n  margin-top: 6px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n  margin-left: -5px;\n}\n\n.bottle-load-model {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(39, 60, 125, 0.5);\n  z-index: 9;\n  display: none;\n}\n\n.bottle-load-model-con {\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 40vh;\n  height: 11rem;\n  z-index: 100;\n  background-color: white;\n  border-radius: 5px 5px;\n  padding: 10px 10px 10px 10px;\n}\n\n.load-model-title {\n  text-align: center;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n  color: #aaa;\n}\n\n.bottle-load-model-input {\n  height: 2.8rem;\n  width: 100%;\n  border: 1px solid #aaa;\n  border-radius: 3px;\n}\n\n.load-model-button {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  margin-top: 1.2rem;\n}\n\n.load-model-delete {\n  width: 30%;\n  font-size: 1.2rem;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  text-align: center;\n  background-color: white;\n  color: #bcbcbc;\n  padding: 0.6rem;\n  margin-right: 8px;\n}\n\n.load-model-ok {\n  width: 70%;\n  font-size: 1.2rem;\n  text-align: center;\n  border: 1px solid #bcbcbc;\n  border-radius: 5px;\n  background-color: #005BAC;\n  color: white;\n  padding: 0.6rem;\n}\n\n.tubeInfoCss {\n  padding: 0 0px 0px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2JvdHRsZS1iYXJjb2RlL2JvdHRsZS1iYXJjb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseURBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUhBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFPRjs7QUFMQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVlGOztBQVZBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFhRjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWNGOztBQVpBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWVGOztBQWJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQWdCRjs7QUFkQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWlCRjs7QUFmQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWtCRjs7QUFoQkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQW1CRjs7QUFmQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFpQkY7O0FBZkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBa0JGOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFtQkY7O0FBakJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBb0JGOztBQWxCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBc0JGOztBQXBCQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF1QkY7O0FBcEJBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBdUJKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2JvdHRsZS1iYXJjb2RlL2JvdHRsZS1iYXJjb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0bGUtYmFyY29kZS1jc3N7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG59XG5cbi5wZXJzb24tYmFye1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTh2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdGRjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLnBlcnNvbi1iYXItdXNlcntcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG59XG4ucGVyc29uLWJhci11c2VyID4gLnNhbXBsZXtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5wZXJzb24tYmFyLWJvdHRvbXtcbiAgd2lkdGg6IDEwMHZtO1xuICBoZWlnaHQ6IDh2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdGRjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XG4gIG1hcmdpbi10b3A6IC00dmg7XG59XG5cblxuLnNjYW4tYnV0dG9uLWNzc3tcbiAgaGVpZ2h0OiAyOHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNjYW4tYnV0dG9uLWNzcy1sb25ne1xuICB3aWR0aDogMjV2aDtcbiAgaGVpZ2h0OiAyNXZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KDBkZWcsICMwNDQ1OTAsICMxRjgwRUYpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiY2JjYmM7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNiY2JjYmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlO1xufVxuLnNjYW4tYnV0dG9uLWNzcy1sb25nID4gc3BhbntcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNjYW4tYnV0dG9uLWNzcy1sb25nID4gaW1ne1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAgM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubW9kZWwtbGFiZWwtY3Nze1xuICBoZWlnaHQ6IDQwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4ubW9kZWwtZm9udHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICB3aWR0aDogIDEycmVtO1xuICBoZWlnaHQ6IDE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5tb2RlbC1sYWJlbC1kaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmxhYmVsU2VsZWN0e1xuICB3aWR0aDogODNweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIsIDEyMCwgMjU0LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDI3OEZFO1xuICBvcGFjaXR5OiAwLjY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4ubGFiZWxOb3RTZWxlY3R7XG4gIHdpZHRoOiA4M3B4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG9wYWNpdHk6IDAuNjU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmxhYmVsU3BhblNlbGVjdHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICMwMjc4RkU7XG4gIG1pbi13aWR0aDogM3JlbTtcbn1cbi5sYWJlbFNwYW5Ob3RTZWxlY3R7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtaW4td2lkdGg6IDNyZW07XG59XG4ubGFiZWxTcGFuTm90e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgbWluLXdpZHRoOiAzcmVtO1xufVxuXG4ubW9kZWwtYnV0dG9uLWJhcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcbiAgYm9yZGVyLXRvcDogIDFweCBzb2xpZCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMzI5NDExNzY0NzA1ODgyMyk7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLmJ1dHRvblNlbGVjdHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ1dHRvbk5vdFNlbGVjdCA+ZGl2e1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idXR0b25Ob3RTZWxlY3QgPiBzcGFue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uYnV0dG9uTm90ID4gZGl2e1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5idXR0b25Ob3QgPiBzcGFue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG4uYnV0dG9uU2VsZWN0ID5kaXZ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNERUVERkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3QUI4RkU7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICMwMjc4RkU7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ1dHRvblNlbGVjdCA+IHNwYW57XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogIzAyNzhGRTtcbn1cbjpob3N0IDo6bmctZGVlcCAgLnRvb2xiYXItdGl0bGUtZGVmYXVsdHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uaGVhZGVyLWljb257XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4uaGVhZGVyLWZvbnR7XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6IDZweFxufVxuLmhlYWRlci10aXRsZXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG5cbi5ib3R0bGUtbG9hZC1tb2RlbHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzksNjAsMTI1LDAuNSk7XG4gIHotaW5kZXg6IDk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYm90dGxlLWxvYWQtbW9kZWwtY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDQwdmg7XG4gIGhlaWdodDogMTFyZW07XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG4ubG9hZC1tb2RlbC10aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICNhYWE7XG59XG4uYm90dGxlLWxvYWQtbW9kZWwtaW5wdXR7XG4gIGhlaWdodDogMi44cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmxvYWQtbW9kZWwtYnV0dG9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xufVxuLmxvYWQtbW9kZWwtZGVsZXRle1xuICB3aWR0aDogMzAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmNiYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogI2JjYmNiYztcbiAgcGFkZGluZzogMC42cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5sb2FkLW1vZGVsLW9re1xuICB3aWR0aDogNzAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmNiY2JjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC42cmVtO1xufVxuXG4udHViZUluZm9Dc3N7XG4gICAgcGFkZGluZzogMCAwcHggMHB4IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/common/bottle-barcode/bottle-barcode.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/common/bottle-barcode/bottle-barcode.page.ts ***!
      \**************************************************************/

    /*! exports provided: BottleBarcodePage */

    /***/
    function srcAppCommonBottleBarcodeBottleBarcodePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BottleBarcodePage", function () {
        return BottleBarcodePage;
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


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! codelyzer/util/isNotNullOrUndefined */
      "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
      /* harmony import */


      var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd-mobile */
      "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
      /* harmony import */


      var ocr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ocr */
      "./node_modules/ocr/dist/esm/index.js");
      /* harmony import */


      var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/http-client.service */
      "./src/app/shared/http-client.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var scanner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! scanner */
      "./node_modules/scanner/dist/esm/index.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"); // 扫描身份证


      var Ocr = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Ocr; // 扫描码

      var Scanner = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Scanner;

      var BottleBarcodePage = /*#__PURE__*/function () {
        function BottleBarcodePage(router, navCtrl, http, route, platform, eleRef, alertModal, domSanitizer) {
          var _this = this;

          _classCallCheck(this, BottleBarcodePage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.http = http;
          this.route = route;
          this.platform = platform;
          this.eleRef = eleRef;
          this.alertModal = alertModal;
          this.domSanitizer = domSanitizer;
          this.titleInfo = '';
          this.model = '10';
          this.modelChecked = {
            model10: true,
            model5: false,
            model1: false
          };
          this.mapping = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
          this.specimensList = [];
          this.collectList = []; // 控制app返回按钮

          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.routeBack();
          });
        }

        _createClass(BottleBarcodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_5__["isNotNullOrUndefined"])(sessionStorage.getItem('specimensList'))) {
              this.specimensList = JSON.parse(sessionStorage.getItem('specimensList'));
              this.sampleType = this.specimensList.filter(function (w) {
                return w.checked;
              })[0]['dicId'];
              this.collectList = JSON.parse(sessionStorage.getItem('collectList'));
              this.model = this.collectList.filter(function (w) {
                return w.checked;
              })[0]['dicId'];
            } else {
              this.getSpecimensAndCollect();
            }

            this.init();
            this.modelDisplay = document.getElementsByClassName('bottle-load-model')[0];
            this.censusAddress = sessionStorage.getItem('censusAddress');
          }
        }, {
          key: "init",
          value: function init() {
            var _this2 = this;

            this.route.queryParams.subscribe(function (data) {
              _this2.titleInfo = sessionStorage.getItem('boxBarcode');
            });

            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_5__["isNotNullOrUndefined"])(sessionStorage.getItem('modelValue'))) {
              this.model = sessionStorage.getItem('modelValue');
              this.modelChecked = {
                model10: false,
                model5: false,
                model1: false
              };
              this.modelChecked['model' + this.model] = true;
            } else {
              sessionStorage.setItem('modelValue', '10');
            }
          } // 路由返回

        }, {
          key: "routeBack",
          value: function routeBack() {
            this.showCustom(false);
            this.router.navigate(['/BottleList']);
          }
        }, {
          key: "clickScan",
          value: function clickScan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var result;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      _context4.next = 3;
                      return Scanner.openScanner();

                    case 3:
                      result = _context4.sent;
                      _context4.t0 = result['operation'];
                      _context4.next = _context4.t0 === 'SCAN' ? 7 : _context4.t0 === 'MANUAL' ? 9 : _context4.t0 === 'CANCEL' ? 11 : 12;
                      break;

                    case 7:
                      this.ScanTubeOperate(result['result']);
                      return _context4.abrupt("break", 12);

                    case 9:
                      this.showCustom(true);
                      return _context4.abrupt("break", 12);

                    case 11:
                      return _context4.abrupt("break", 12);

                    case 12:
                      _context4.next = 17;
                      break;

                    case 14:
                      _context4.prev = 14;
                      _context4.t1 = _context4["catch"](0);
                      this.showCustom(true);

                    case 17:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 14]]);
            }));
          } // 改变标本类型

        }, {
          key: "sampleChange",
          value: function sampleChange(value) {
            if (!value.disabled) {
              this.sampleType = value.dicId;
              this.specimensList.forEach(function (w) {
                w['checked'] = false;
              });
              value['checked'] = true;

              if (value.dicName === '血清') {
                this.collectList.forEach(function (w) {
                  w['checked'] = false;
                  w['disabled'] = true;

                  if (w.dicId === '1') {
                    w['checked'] = true;
                    w['disabled'] = false;
                  }
                });
              } else {
                this.collectList.forEach(function (w) {
                  w['disabled'] = false;
                });
              }

              sessionStorage.setItem('specimensList', JSON.stringify(this.specimensList));
              sessionStorage.setItem('collectList', JSON.stringify(this.collectList));
            }
          } // 改变模式

        }, {
          key: "modelChange",
          value: function modelChange(value) {
            if (!value.disabled) {
              this.model = value.dicId;
              sessionStorage.setItem('modelValue', value.dicId);
              this.collectList.forEach(function (w) {
                w['checked'] = false;
              });
              value['checked'] = true;

              if (this.model === '1') {
                this.specimensList.forEach(function (w) {
                  w['disabled'] = false;
                });
              } else {
                for (var i = 0; i < this.specimensList.length; i++) {
                  if (this.specimensList[i]['dicName'].indexOf('血清') > -1) {
                    this.specimensList[i]['disabled'] = true;
                    this.specimensList[i]['checked'] = false;
                  }
                }
              }

              sessionStorage.setItem('specimensList', JSON.stringify(this.specimensList));
              sessionStorage.setItem('collectList', JSON.stringify(this.collectList));
            }
          }
        }, {
          key: "showAlert",
          value: function showAlert(barcode) {
            this.alertModal.alert('试管码位数不正确', '请重新扫描试管码，或粘贴新试管码。', [{
              text: '确定',
              onPress: function onPress() {}
            }]);
          }
        }, {
          key: "showAlertBarcode",
          value: function showAlertBarcode() {
            this.alertModal.alert('试管码不正确', '请重新扫描试管码，或粘贴新试管码。', [{
              text: '确定',
              onPress: function onPress() {}
            }]);
          } // 调用后台接口
          // 扫描采集管

        }, {
          key: "ScanTubeOperate",
          value: function ScanTubeOperate(barcode) {
            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_5__["isNotNullOrUndefined"])(barcode) && barcode !== '') {
              if (!this.http.CheckNumberAndEnglish(barcode)) {
                this.http.showToast('条码中存在除数字和大写字母外的字符，请重新扫描或输入！');
                return;
              }
            } else {
              this.http.showToast('条码值为空，请重新扫描或输入！');
              return;
            }

            this.showCustom(false);

            if (barcode.length === 16) {
              var delBarcode = barcode.substring(2, 16);
              this.dealBarcode(delBarcode, barcode);
              return;
            }

            if (barcode.length >= 12 && barcode.length < 16) {
              this.dealBarcode(barcode, barcode);
            } else {
              if (this.http.generateBarcode(barcode)) {
                this.checkTube(barcode);
              } else {
                this.showAlert(barcode);
              } // this.showAlert(barcode);

            }
          }
        }, {
          key: "dealBarcode",
          value: function dealBarcode(delBarcode, barcode) {
            // 判断新的规则
            if (this.http.generateBarcode(barcode)) {
              this.checkTube(barcode);
            } else {
              // 判断旧的规则
              var code = delBarcode.substring(0, 8);
              var checkBarcode = this.generateBarcode(code);

              if (delBarcode === checkBarcode) {
                this.checkTube(barcode);
              } else {
                this.showAlertBarcode();
              }
            }
          }
        }, {
          key: "generateBarcode",
          value: function generateBarcode(num) {
            var h = 0;
            var l = 0;
            var odd = 0;
            var eve = 0;
            var sum1 = 0; // index 0,1  高位

            var sum2 = 0; // index 4,5  低位

            for (var i = 0; i < num.length; i++) {
              var c = num.charAt(i);
              var number = Number(c);

              if (i < 4) {
                h += number;
              } else {
                l += number;
              }

              if (i % 2 === 1) {
                odd += number;
              } else {
                eve += number;
              }

              if (i === 0 || i === 1) {
                sum1 += number;
              }

              if (i === 4 || i === 5) {
                sum2 += number;
              }
            }

            h = h % 10;
            l = l % 10;
            odd = odd / 10;
            odd = Math.floor(odd);
            eve = eve / 10;
            eve = Math.floor(eve);
            var barcode = num + h + l + odd + eve + this.mapping[sum1] + this.mapping[sum2];
            return barcode;
          }
        }, {
          key: "operateTube",
          value: function operateTube(barcode) {
            var _this3 = this;

            var condition = {
              tubeBarcode: barcode,
              boxBarId: sessionStorage.getItem('boxBarId'),
              tubeState: 'OpenTube',
              tubeType: Number(this.model),
              speciType: this.sampleType
            };
            this.http.get("rcp/api/tube/operate/scan", condition, '扫描采集管', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.openTube).subscribe(function (data) {
              // 全局保存采集管码uuid
              if (data['isSuccess']) {
                sessionStorage.setItem('isClosedTube', '0');
                sessionStorage.setItem('tubeBarId', data['data']['tubeId']);
                sessionStorage.setItem('tubeBarcode', data['data']['tubeBarcode']);

                _this3.GetPatientTube();
              }
            });
          }
        }, {
          key: "checkTube",
          value: function checkTube(barcode) {
            var _this4 = this;

            var condition = {
              tubeBarcode: barcode
            };
            this.http.get("rcp/api/tube/operate/check", condition, '校验采集管是否被使用', 'false').subscribe(function (data) {
              // 全局保存采集管码uuid
              if (data['code'] === '0') {
                _this4.operateTube(barcode);
              } else {
                if (data['code'] === '-2') {
                  _this4.closeTubeInfo = data['message'].split(/\n/);
                  console.log(_this4.closeTubeInfo);

                  _this4.showTubeInfoAlert(barcode);
                } else {
                  if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_5__["isNotNullOrUndefined"])(data['message'])) {
                    _this4.http.showToast(data['message']);
                  } else {
                    _this4.http.showToast(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.openTube);
                  }
                }
              }
            });
          }
        }, {
          key: "showTubeInfoAlert",
          value: function showTubeInfoAlert(barcode) {
            var _this5 = this;

            this.alertModal.alert('试管码:' + barcode, this.tubeInfo, [{
              text: '取消',
              onPress: function onPress() {}
            }, {
              text: '开管',
              onPress: function onPress() {
                _this5.operateTube(barcode);
              }
            }]);
          } //  获取当前管里的标本

        }, {
          key: "GetPatientTube",
          value: function GetPatientTube() {
            var _this6 = this;

            var condition = {
              tubeId: sessionStorage.getItem('tubeBarId')
            };
            this.http.post("rcp/api/get/tube/patient" + this.http.getParamsString(condition), {}, '获取当前管里的标本', _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].FailMessage.getTubeSample).subscribe(function (data) {
              if (data['isSuccess']) {
                if (data['data'].length >= Number(_this6.model)) {
                  _this6.router.navigate(['/PersonList']);
                } else {
                  // 扫试管码后，扫身份证, 跳转界面
                  // this.scanIdentity();
                  // 扫试管码后，跳转界面，扫身份证
                  var navigationExtras = {
                    queryParams: {
                      num: '1'
                    }
                  };

                  _this6.router.navigate(['/PersonList'], navigationExtras);
                }
              }
            });
          }
        }, {
          key: "scanIdentity",
          value: function scanIdentity() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var navigationExtras;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return Ocr.scan();

                    case 3:
                      this.result = _context5.sent;
                      this.result.imageData = '';
                      navigationExtras = {
                        queryParams: this.result
                      };
                      this.router.navigate(['/PersonList'], navigationExtras);
                      _context5.next = 12;
                      break;

                    case 9:
                      _context5.prev = 9;
                      _context5.t0 = _context5["catch"](0);
                      this.router.navigate(['/PersonList']);

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 9]]);
            }));
          } //  弹框

        }, {
          key: "showCustom",
          value: function showCustom(value) {
            this.barcode = undefined;

            if (value) {
              this.modelDisplay['style']['display'] = 'inline-block';
              this.eleRef.nativeElement.querySelector('.bottle-load-model-input').focus();
              var keyboard = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Keyboard;
              keyboard.show();
            } else {
              this.modelDisplay['style']['display'] = 'none';
            }
          }
          /**
           * 查询所有标本类型及采集类型
           */

        }, {
          key: "getSpecimensAndCollect",
          value: function getSpecimensAndCollect() {
            var _this7 = this;

            this.collectList = [];
            this.http.get('rcp/api/tube/operate/getSpecimensAndCollect', {}, '查询所有标本类型及采集类型', '查询所有标本类型及采集类型失败', {
              load: true
            }).subscribe(function (data) {
              if (data['isSuccess']) {
                _this7.collectList = data['data'].collect;
                _this7.specimensList = data['data'].specimens;

                for (var i = 0; i < _this7.collectList.length; i++) {
                  if (i === 0) {
                    _this7.collectList[i]['checked'] = true;
                    _this7.collectList[i]['disabled'] = false;
                    _this7.model = _this7.collectList[i]['dicId'];
                    sessionStorage.setItem('modelValue', _this7.model);
                  } else {
                    _this7.collectList[i]['checked'] = false;
                    _this7.collectList[i]['disabled'] = false;
                  }
                }

                for (var _i = 0; _i < _this7.specimensList.length; _i++) {
                  if (_i === 0) {
                    _this7.specimensList[_i]['checked'] = true;
                    _this7.specimensList[_i]['disabled'] = false;
                    _this7.sampleType = _this7.specimensList[_i]['dicId'];
                  } else {
                    _this7.specimensList[_i]['checked'] = false;
                    _this7.specimensList[_i]['disabled'] = false;
                  }

                  if (_this7.specimensList[_i]['dicName'].indexOf('血清') > -1) {
                    _this7.specimensList[_i]['disabled'] = true;
                  }
                }

                sessionStorage.setItem('specimensList', JSON.stringify(_this7.specimensList));
                sessionStorage.setItem('collectList', JSON.stringify(_this7.collectList));
              }
            });
          }
        }]);

        return BottleBarcodePage;
      }();

      BottleBarcodePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_9__["HttpClientService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]
        }];
      };

      BottleBarcodePage.propDecorators = {
        tubeInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['tubeInfo', {
            "static": false
          }]
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@routeAnimation']
        }]
      };
      BottleBarcodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottle-barcode',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bottle-barcode.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common/bottle-barcode/bottle-barcode.page.html"))["default"],
        animations: [_shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bottle-barcode.page.scss */
        "./src/app/common/bottle-barcode/bottle-barcode.page.scss"))["default"]]
      })], BottleBarcodePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-bottle-barcode-bottle-barcode-module-es5.js.map