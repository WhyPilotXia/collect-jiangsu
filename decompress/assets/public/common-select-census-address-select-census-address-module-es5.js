(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-select-census-address-select-census-address-module"], {
    /***/
    "./node_modules/eventemitter3/index.js":
    /*!*********************************************!*\
      !*** ./node_modules/eventemitter3/index.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function node_modulesEventemitter3IndexJs(module, exports, __webpack_require__) {
      "use strict";

      var has = Object.prototype.hasOwnProperty,
          prefix = '~';
      /**
       * Constructor to create a storage for our `EE` objects.
       * An `Events` instance is a plain object whose properties are event names.
       *
       * @constructor
       * @private
       */

      function Events() {} //
      // We try to not inherit from `Object.prototype`. In some engines creating an
      // instance in this way is faster than calling `Object.create(null)` directly.
      // If `Object.create(null)` is not supported we prefix the event names with a
      // character to make sure that the built-in object properties are not
      // overridden or used as an attack vector.
      //


      if (Object.create) {
        Events.prototype = Object.create(null); //
        // This hack is needed because the `__proto__` property is still inherited in
        // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
        //

        if (!new Events().__proto__) prefix = false;
      }
      /**
       * Representation of a single event listener.
       *
       * @param {Function} fn The listener function.
       * @param {*} context The context to invoke the listener with.
       * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
       * @constructor
       * @private
       */


      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      /**
       * Add a listener for a given event.
       *
       * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
       * @param {(String|Symbol)} event The event name.
       * @param {Function} fn The listener function.
       * @param {*} context The context to invoke the listener with.
       * @param {Boolean} once Specify if the listener is a one-time listener.
       * @returns {EventEmitter}
       * @private
       */


      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== 'function') {
          throw new TypeError('The listener must be a function');
        }

        var listener = new EE(fn, context || emitter, once),
            evt = prefix ? prefix + event : event;
        if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      /**
       * Clear event by name.
       *
       * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
       * @param {(String|Symbol)} evt The Event name.
       * @private
       */


      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
      }
      /**
       * Minimal `EventEmitter` interface that is molded against the Node.js
       * `EventEmitter` interface.
       *
       * @constructor
       * @public
       */


      function EventEmitter() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      /**
       * Return an array listing the events for which the emitter has registered
       * listeners.
       *
       * @returns {Array}
       * @public
       */


      EventEmitter.prototype.eventNames = function eventNames() {
        var names = [],
            events,
            name;
        if (this._eventsCount === 0) return names;

        for (name in events = this._events) {
          if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
        }

        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }

        return names;
      };
      /**
       * Return the listeners registered for a given event.
       *
       * @param {(String|Symbol)} event The event name.
       * @returns {Array} The registered listeners.
       * @public
       */


      EventEmitter.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event,
            handlers = this._events[evt];
        if (!handlers) return [];
        if (handlers.fn) return [handlers.fn];

        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
          ee[i] = handlers[i].fn;
        }

        return ee;
      };
      /**
       * Return the number of listeners listening to a given event.
       *
       * @param {(String|Symbol)} event The event name.
       * @returns {Number} The number of listeners.
       * @public
       */


      EventEmitter.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event,
            listeners = this._events[evt];
        if (!listeners) return 0;
        if (listeners.fn) return 1;
        return listeners.length;
      };
      /**
       * Calls each of the listeners registered for a given event.
       *
       * @param {(String|Symbol)} event The event name.
       * @returns {Boolean} `true` if the event had listeners, else `false`.
       * @public
       */


      EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return false;
        var listeners = this._events[evt],
            len = arguments.length,
            args,
            i;

        if (listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;

            case 2:
              return listeners.fn.call(listeners.context, a1), true;

            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;

            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;

            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }

          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }

          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length,
              j;

          for (i = 0; i < length; i++) {
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;

              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;

              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;

              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;

              default:
                if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }

        return true;
      };
      /**
       * Add a listener for a given event.
       *
       * @param {(String|Symbol)} event The event name.
       * @param {Function} fn The listener function.
       * @param {*} [context=this] The context to invoke the listener with.
       * @returns {EventEmitter} `this`.
       * @public
       */


      EventEmitter.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      /**
       * Add a one-time listener for a given event.
       *
       * @param {(String|Symbol)} event The event name.
       * @param {Function} fn The listener function.
       * @param {*} [context=this] The context to invoke the listener with.
       * @returns {EventEmitter} `this`.
       * @public
       */


      EventEmitter.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      /**
       * Remove the listeners of a given event.
       *
       * @param {(String|Symbol)} event The event name.
       * @param {Function} fn Only remove the listeners that match this function.
       * @param {*} context Only remove the listeners that have this context.
       * @param {Boolean} once Only remove one-time listeners.
       * @returns {EventEmitter} `this`.
       * @public
       */


      EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return this;

        if (!fn) {
          clearEvent(this, evt);
          return this;
        }

        var listeners = this._events[evt];

        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          } //
          // Reset the array, or remove it completely if we have no more listeners.
          //


          if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
        }

        return this;
      };
      /**
       * Remove all listeners, or those of the specified event.
       *
       * @param {(String|Symbol)} [event] The event name.
       * @returns {EventEmitter} `this`.
       * @public
       */


      EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;

        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt]) clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }

        return this;
      }; //
      // Alias methods names because people roll like that.
      //


      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.addListener = EventEmitter.prototype.on; //
      // Expose the prefix.
      //

      EventEmitter.prefixed = prefix; //
      // Allow `EventEmitter` to be imported as module namespace.
      //

      EventEmitter.EventEmitter = EventEmitter; //
      // Expose the module.
      //

      if (true) {
        module.exports = EventEmitter;
      }
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-census-address/select-census-address.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-census-address/select-census-address.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonSelectCensusAddressSelectCensusAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"header-icon\">\n        <Icon type=\"left\" size=\"lg\" (click)=\"routeBack()\"></Icon>\n      </div>\n      <div class=\"header-font\" (click)=\"routeBack()\">\n        <span>返回</span>\n      </div>\n      <span class=\"header-title\">选择采集点</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"select-census-address-bar\">\n    <div class=\"select\">\n      <div>\n        <input\n          type=\"text\"\n          placeholder=\"请输入地点\"\n          [(ngModel)]=\"addressInput\"\n          (keyup)=\"searchRealTime($event)\"\n        />\n      </div>\n      <span (click)=\"search()\"> 搜索 </span>\n    </div>\n    <List class=\"select-list\">\n      <RadioItemGroup [(ngModel)]=\"censusAddress.id\">\n        <ng-container *ngFor=\"let item of addressList; let i = index\">\n          <RadioItem\n            [name]=\"item.address\"\n            [value]=\"item.id\"\n            class=\"selectAddress{{i}} load-model-radio\"\n            (click)=\"selectCheackRegister(i, item)\"\n            [wrap]=\"true\"\n          >\n            <span>{{(item.area == null || item.area == ''?'': item.area+'-') +\n            (item.street == null || item.street == ''?'': item.street+'-') +item.address}}</span>\n          </RadioItem>\n        </ng-container>\n      </RadioItemGroup>\n    </List>\n    <div class=\"okButton\" (click)=\"okButton()\">\n      <div>确定</div>\n    </div>\n  </div>\n</ion-content>\n\n<div class=\"census-address-load-bar\">\n  <ion-spinner icon=\"android\" class=\"load-css\"></ion-spinner>\n</div>\n";
      /***/
    },

    /***/
    "./src/app/common/select-census-address/select-census-address.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/common/select-census-address/select-census-address.module.ts ***!
      \******************************************************************************/

    /*! exports provided: SelectCensusAddressModule */

    /***/
    function srcAppCommonSelectCensusAddressSelectCensusAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectCensusAddressModule", function () {
        return SelectCensusAddressModule;
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


      var _select_census_address_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./select-census-address.page */
      "./src/app/common/select-census-address/select-census-address.page.ts");

      var SelectCensusAddressModule = function SelectCensusAddressModule() {
        _classCallCheck(this, SelectCensusAddressModule);
      };

      SelectCensusAddressModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"], _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _select_census_address_page__WEBPACK_IMPORTED_MODULE_9__["SelectCensusAddressPage"]
        }])],
        declarations: [_select_census_address_page__WEBPACK_IMPORTED_MODULE_9__["SelectCensusAddressPage"]]
      })], SelectCensusAddressModule);
      /***/
    },

    /***/
    "./src/app/common/select-census-address/select-census-address.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/common/select-census-address/select-census-address.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonSelectCensusAddressSelectCensusAddressPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".select-census-address-bar {\n  background-color: white;\n  height: calc(100vh - 56px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.select {\n  height: 15vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.select > div > input {\n  width: 65vw;\n  height: 7vh;\n  padding-left: 6px;\n}\n\n.select > span {\n  display: flex;\n  flex-direction: row;\n  background-color: #005BAC;\n  color: white;\n  width: 15vw;\n  height: 7vh;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 3px 3px 0;\n}\n\n.select-list {\n  width: 80vw;\n  height: 60vh;\n  overflow-y: auto;\n}\n\n.okButton {\n  height: 15vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.okButton > div {\n  width: 80vw;\n  font-size: 1rem;\n  padding: 0.5rem;\n  background-color: #005BAC;\n  text-align: center;\n  color: white;\n  border-radius: 4px;\n}\n\n:host ::ng-deep .selectAddresShow .am-list-item {\n  background-color: #ebfbff;\n}\n\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 1rem;\n  margin-top: 6px;\n}\n\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n  margin-left: -10px;\n}\n\n.census-address-load-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 99;\n  display: none;\n}\n\n.load-css {\n  position: absolute;\n  left: 40%;\n  top: 40%;\n  color: #1095FF;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NlbGVjdC1jZW5zdXMtYWRkcmVzcy9zZWxlY3QtY2Vuc3VzLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFTRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zZWxlY3QtY2Vuc3VzLWFkZHJlc3Mvc2VsZWN0LWNlbnN1cy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3QtY2Vuc3VzLWFkZHJlc3MtYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlbGVjdHtcbiAgaGVpZ2h0OiAxNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWxlY3QgPiBkaXYgPmlucHV0e1xuICB3aWR0aDogNjV2dztcbiAgaGVpZ2h0OiA3dmg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuLnNlbGVjdCA+IHNwYW57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDE1dnc7XG4gIGhlaWdodDogN3ZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG59XG4uc2VsZWN0LWxpc3R7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5va0J1dHRvbntcbiAgaGVpZ2h0OiAxNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5va0J1dHRvbiA+IGRpdntcbiAgd2lkdGg6IDgwdnc7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1QkFDO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5cbjpob3N0IDo6bmctZGVlcCAuc2VsZWN0QWRkcmVzU2hvdyAuYW0tbGlzdC1pdGVte1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmYmZmO1xufVxuXG5cbjpob3N0IDo6bmctZGVlcCAgLnRvb2xiYXItdGl0bGUtZGVmYXVsdHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uaGVhZGVyLWljb257XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4uaGVhZGVyLWZvbnR7XG4gIHdpZHRoOiAzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6IDZweFxufVxuLmhlYWRlci10aXRsZXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cbi5jZW5zdXMtYWRkcmVzcy1sb2FkLWJhcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjQ7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxvYWQtY3Nze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwJTtcbiAgdG9wOiA0MCU7XG4gIGNvbG9yOiAjMTA5NUZGO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIG9wYWNpdHk6IDE7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/common/select-census-address/select-census-address.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/common/select-census-address/select-census-address.page.ts ***!
      \****************************************************************************/

    /*! exports provided: SelectCensusAddressPage */

    /***/
    function srcAppCommonSelectCensusAddressSelectCensusAddressPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectCensusAddressPage", function () {
        return SelectCensusAddressPage;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");

      var SelectCensusAddressPage = /*#__PURE__*/function () {
        function SelectCensusAddressPage(router, navCtrl, http, route, platform) {
          var _this = this;

          _classCallCheck(this, SelectCensusAddressPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.http = http;
          this.route = route;
          this.platform = platform;
          this.addressList = [];
          /**
           * 存储初始化的所有采集点信息
           */

          this.addressAllList = [];
          this.censusAddress = {
            address: undefined,
            contact: undefined,
            contactNumber: undefined,
            description: undefined,
            id: 0,
            lat: undefined,
            lng: undefined,
            mapName: undefined
          };
          this.addressInput = '';
          this.AllAddressList = []; // 控制app返回按钮

          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.routeBack();
          });
        }

        _createClass(SelectCensusAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load = document.getElementsByClassName('census-address-load-bar')[0];
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // 获取采集点
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            var condition = {
              address: '',
              pageNum: 1,
              pageSize: 50
            };
            this.censusaddress(condition);
          } // 路由返回

        }, {
          key: "routeBack",
          value: function routeBack() {
            this.router.navigate(['/login']);
          } // 选择对号按钮

        }, {
          key: "selectCheackRegister",
          value: function selectCheackRegister(value, item) {
            var str = 'selectAddress' + value;
            var radio = document.getElementsByClassName(str)[0]; // 清除所有对号

            for (var z = 0; z < this.addressList.length; z++) {
              var radioRem = document.getElementsByClassName('selectAddress' + z)[0];
              radioRem.className = this.removeClass(radioRem, 'selectAddresShow');
            } // 显示当前对号


            radio.className = radio.className + ' selectAddresShow';
            this.address = (item.area == null || item.area == '' ? '' : item.area + '-') + (item.street == null || item.street == '' ? '' : item.street + '-') + item.address;
            this.censusId = item.id;
          }
        }, {
          key: "removeClass",
          value: function removeClass(dom, clzName) {
            var clzNewName = dom['className'];
            var classname = '';

            if (clzNewName && clzNewName.length > 0) {
              clzNewName = clzNewName.split(' ');

              for (var i = clzNewName.length; i--;) {
                if (clzNewName[i] === clzName) {
                  clzNewName.splice(i, 1);
                  classname = clzNewName.join(' ');
                  return classname;
                }
              }
            }

            return clzNewName.join(' ');
          }
        }, {
          key: "search",
          value: function search() {
            // this.addressList = this.AllAddressList.filter( w => w['address'].indexOf(this.addressInput) > -1);
            this.address = '';
            var condition = {
              address: this.addressInput,
              pageNum: 1,
              pageSize: 50
            };
            this.censusaddress(condition);
          }
          /**
           *
           * @param value 实时过滤搜索显示匹配的采集点
           */

        }, {
          key: "searchRealTime",
          value: function searchRealTime(KeyEvent) {
            // if (KeyEvent.code === 'Space' || KeyEvent.code === 'Enter' || KeyEvent.code === 'Backspace' || KeyEvent.code === 'Delete') {
            var txtAdd = this.addressInput.trim();
            var tmpAddressList = [];

            if (this.addressAllList !== undefined && this.addressAllList.length > 0) {
              var _iterator = _createForOfIteratorHelper(this.addressAllList),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var keyAddr = _step.value;

                  if (keyAddr['address'].includes(txtAdd)) {
                    tmpAddressList.push(keyAddr);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } // 因为后台每次只返回50条记录，所以需要到数据库中再次查询，才准确


            var isSearch = false;

            if (txtAdd.length > 0) {
              var tmpAdd = txtAdd.substring(txtAdd.length - 1);
              var numTmpCHN = this.GetCHNum(tmpAdd);

              if (numTmpCHN > 0) {
                isSearch = true;
              }
            } // 如果最后输入的是汉字，则到数据库中查询


            if (isSearch) {
              this.search();
            } else {
              this.addressList = this.addressAllList;
            } // }

          }
          /**
           *
           * @param value 获取字符串中的汉字数量
           */

        }, {
          key: "GetCHNum",
          value: function GetCHNum(value) {
            var num = 0;

            for (var i = 0; i < value.length; i++) {
              if (value.charCodeAt(i) < 0 || value.charCodeAt(i) > 255) {
                num += 1;
              }
            }

            return num;
          }
        }, {
          key: "okButton",
          value: function okButton() {
            sessionStorage.setItem('censusAddress', this.address);

            if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.address) && this.address !== '') {
              this.saveCensusAddress();
            } else {
              this.http.showToast('采集点为空，请选择采集点！');
            }
          } // 调用后台接口
          // 获取采集点

        }, {
          key: "censusaddress",
          value: function censusaddress(condition) {
            var _this2 = this;

            this.addressList = [];
            this.censusAddress = {
              address: undefined,
              contact: undefined,
              contactNumber: undefined,
              description: undefined,
              id: 0,
              lat: undefined,
              lng: undefined,
              mapName: undefined
            };
            this.load['style']['display'] = 'inline-block';
            this.http.post("rcp/api/censusaddress/select", condition, '获取采集点', _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].FailMessage.getCensusAddress).subscribe(function (data) {
              _this2.load['style']['display'] = 'none';

              if (data['isSuccess']) {
                _this2.addressList = data['data'];

                if (data['data'].length > _this2.addressAllList.length) {
                  _this2.addressAllList = data['data'];
                }
              }
            });
          }
        }, {
          key: "saveCensusAddress",
          value: function saveCensusAddress() {
            var _this3 = this;

            var censusAddress = {
              censusId: this.censusId
            };
            this.load['style']['display'] = 'inline-block';
            this.http.post("rcp/api/user/census/address" + this.http.getParamsString(censusAddress), {}, '保存采集点', _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].FailMessage.saveCensusAddress).subscribe(function (data) {
              _this3.load['style']['display'] = 'none';

              if (data['isSuccess']) {
                _this3.router.navigate(['/tabs/tab1']);
              }
            });
          }
        }]);

        return SelectCensusAddressPage;
      }();

      SelectCensusAddressPage.ctorParameters = function () {
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
        }];
      };

      SelectCensusAddressPage.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['@routeAnimation']
        }]
      };
      SelectCensusAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-census-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./select-census-address.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-census-address/select-census-address.page.html"))["default"],
        animations: [_shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./select-census-address.page.scss */
        "./src/app/common/select-census-address/select-census-address.page.scss"))["default"]]
      })], SelectCensusAddressPage);
      /***/
    },

    /***/
    "./src/app/service/event.service.ts":
    /*!******************************************!*\
      !*** ./src/app/service/event.service.ts ***!
      \******************************************/

    /*! exports provided: EventService */

    /***/
    function srcAppServiceEventServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
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


      var eventemitter3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! eventemitter3 */
      "./node_modules/eventemitter3/index.js");
      /* harmony import */


      var eventemitter3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_2__);

      var EventService = function EventService() {
        _classCallCheck(this, EventService);

        this.eventEmitter = new eventemitter3__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // 这个实例就会被多个组件共享  来实现不同页面的数据通信
      };

      EventService.ctorParameters = function () {
        return [];
      };

      EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EventService);
      /***/
    },

    /***/
    "./src/app/service/serviceCommon.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/service/serviceCommon.module.ts ***!
      \*************************************************/

    /*! exports provided: ServiceCommonModule */

    /***/
    function srcAppServiceServiceCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceCommonModule", function () {
        return ServiceCommonModule;
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


      var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event.service */
      "./src/app/service/event.service.ts");

      var ServiceCommonModule = function ServiceCommonModule() {
        _classCallCheck(this, ServiceCommonModule);
      };

      ServiceCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]]
      })], ServiceCommonModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-select-census-address-select-census-address-module-es5.js.map