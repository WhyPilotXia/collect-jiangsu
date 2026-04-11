(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-select-census-address-tree-select-census-address-tree-module"],{

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
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

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

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
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
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
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
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
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

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
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

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

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
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
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
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
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-census-address-tree/select-census-address-tree.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-census-address-tree/select-census-address-tree.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"header-icon\">\n        <Icon type=\"left\" size=\"lg\" (click)=\"routeBack()\"></Icon>\n      </div>\n      <div class=\"header-font\" (click)=\"routeBack()\">\n        <span>返回</span>\n      </div>\n      <span class=\"header-title\">选择采集点</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"select-census-address-bar\">\n    <div class=\"select\">\n      <div>\n        <input\n          type=\"text\"\n          placeholder=\"请输入地点\"\n          [(ngModel)]=\"addressInput\"\n          (keyup)=\"searchRealTime($event)\"\n        />\n      </div>\n      <span (click)=\"search()\"> 搜索 </span>\n    </div>\n    <div class=\"select-list\">\n      <ng-container *ngFor=\"let one of addressList;\">\n        <div class=\"menu-item has-child\" (click)=\"showBox($event, one)\">\n          <span *ngIf=\"one.children == null || one.isSpread == false\" class=\"arrow\">+</span>\n          <span *ngIf=\"one.children != null && (one.isSpread == null || one.isSpread == true)\" class=\"arrow\">-</span>\n          <span style=\"display: inline-block; margin-left: 10px\" [innerHTML]=\"one.name | bypassSecurityTrustHtml: addressInput\"></span>\n        </div>\n        <div  [ngClass]=\"one.children && one.children.length >0 ? 'box': 'box collapsed'\">\n          <ng-container *ngFor=\"let two of one.children;\">\n            <div  class=\"menu-item has-child\" (click)=\"showBox($event, two)\">\n              <span *ngIf=\"two.children == null || two.isSpread == false\" class=\"arrow\">+</span>\n              <span *ngIf=\"two.children != null && (two.isSpread == null || two.isSpread == true) \" class=\"arrow\">-</span>\n              <span style=\"display: inline-block; margin-left: 10px\" [innerHTML]=\"two.name | bypassSecurityTrustHtml : addressInput\"></span>\n            </div>\n            <div  [ngClass]=\"two.children && two.children.length >0 ? 'box': 'box collapsed'\">\n              <ng-container *ngFor=\"let thr of two.children;\">\n                <div  class=\"menu-item has-child\" (click)=\"showBox($event, thr)\">\n                  <span *ngIf=\"thr.children == null || thr.isSpread == false\" class=\"arrow\">+</span>\n                  <span *ngIf=\"thr.children != null &&(thr.isSpread == null || thr.isSpread == true)\" class=\"arrow\">-</span>\n                  <span style=\"display: inline-block;margin-left: 10px\" [innerHTML]=\"thr.name | bypassSecurityTrustHtml : addressInput\"></span>\n                </div>\n                <div [ngClass]=\"thr.children && thr.children.length >0 ? 'box': 'box collapsed'\">\n                  <ng-container *ngFor=\"let four of thr.children;\">\n                <div  class=\"menu-item menu{{four.id}}\" (click)=\"skipPage(four)\">\n                  <span style=\"display: inline-block;margin-left: 10px\" [innerHTML]=\"four.name | bypassSecurityTrustHtml : addressInput\"></span>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n      </ng-container>\n    </div>\n    <div class=\"okButton\" (click)=\"okButton()\">\n      <div>确定</div>\n    </div>\n  </div>\n</ion-content>\n\n<div class=\"census-address-load-bar\">\n  <ion-spinner icon=\"android\" class=\"load-css\"></ion-spinner>\n</div>\n\n<div class=\"strong-pwd-prompt\" *ngIf=\"showStrongPwdPrompt\">\n  <div class=\"in\">\n    <p>系统启用强密码验证，必须先修改为强密码，才能继续操作。请点击“修改密码”按钮。</p>\n    <button (click)=\"navTo('/ModifyPwd')\">修改密码</button>\n  </div>\n</div>\n\n<div class=\"forced-pwd-prompt\" *ngIf=\"showForcedPwdPrompt\">\n  <div class=\"in\">\n\n    <div class=\"mgb30\" *ngIf=\"pwdForced;else elseBlock\">您的密码已过期，请修改密码。</div>\n    <ng-template #elseBlock>\n      <div class=\"mgb30\">您的密码还有 </div>\n        <div><strong>{{pwdCountdown}}</strong> 失效，</div>\n        <div>请及时修改密码。</div>\n    </ng-template>\n\n    <div class=\"btn-row df\">\n        <button class=\"mgr5\" (click)=\"navTo('/ModifyPwd');this.showForcedPwdPrompt=true;\">修改密码</button>\n        <button *ngIf=\"pwdForced;else elseBlock2\" (click)=\"quit()\" class=\"b-default\">退出</button>\n        <ng-template #elseBlock2>\n            <button class=\"b-default\" (click)=\"later()\">以后再说</button>\n        </ng-template>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/common/select-census-address-tree/pipe/bypass-security-trust-html.pipe.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/common/select-census-address-tree/pipe/bypass-security-trust-html.pipe.ts ***!
  \*******************************************************************************************/
/*! exports provided: BypassSecurityTrustHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BypassSecurityTrustHtmlPipe", function() { return BypassSecurityTrustHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



let BypassSecurityTrustHtmlPipe = class BypassSecurityTrustHtmlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(html, args) {
        const htmlS = html.split(args);
        let newHtml = '';
        if (htmlS.length > 1) {
            for (let i = 0; i < htmlS.length; i++) {
                if (i === htmlS.length - 1) {
                    newHtml = newHtml + htmlS[i];
                }
                else {
                    newHtml = newHtml + htmlS[i] + `<span style="color: red">${args}</span>`;
                }
            }
        }
        else {
            newHtml = html;
        }
        return this.domSanitizer.bypassSecurityTrustHtml(newHtml);
    }
};
BypassSecurityTrustHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
BypassSecurityTrustHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'bypassSecurityTrustHtml'
    })
], BypassSecurityTrustHtmlPipe);



/***/ }),

/***/ "./src/app/common/select-census-address-tree/select-census-address-tree.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/common/select-census-address-tree/select-census-address-tree.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SelectCensusAddressTreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCensusAddressTreeModule", function() { return SelectCensusAddressTreeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/__ivy_ngcc__/fesm2015/ng-zorro-antd-mobile.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/serviceCommon.module */ "./src/app/service/serviceCommon.module.ts");
/* harmony import */ var _select_census_address_tree_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select-census-address-tree.page */ "./src/app/common/select-census-address-tree/select-census-address-tree.page.ts");
/* harmony import */ var _pipe_bypass_security_trust_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/bypass-security-trust-html.pipe */ "./src/app/common/select-census-address-tree/pipe/bypass-security-trust-html.pipe.ts");











let SelectCensusAddressTreeModule = class SelectCensusAddressTreeModule {
};
SelectCensusAddressTreeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
            _service_serviceCommon_module__WEBPACK_IMPORTED_MODULE_8__["ServiceCommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _select_census_address_tree_page__WEBPACK_IMPORTED_MODULE_9__["SelectCensusAddressTreePage"] }])
        ],
        declarations: [_select_census_address_tree_page__WEBPACK_IMPORTED_MODULE_9__["SelectCensusAddressTreePage"], _pipe_bypass_security_trust_html_pipe__WEBPACK_IMPORTED_MODULE_10__["BypassSecurityTrustHtmlPipe"]]
    })
], SelectCensusAddressTreeModule);



/***/ }),

/***/ "./src/app/common/select-census-address-tree/select-census-address-tree.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/common/select-census-address-tree/select-census-address-tree.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.select-census-address-bar {\n  background-color: white;\n  height: calc(100vh - 56px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.select {\n  height: 15vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.select > div > input {\n  width: 65vw;\n  height: 7vh;\n  padding-left: 6px;\n}\n.select > span {\n  display: flex;\n  flex-direction: row;\n  background-color: #005BAC;\n  color: white;\n  width: 15vw;\n  height: 7vh;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 3px 3px 0;\n}\n.select-list {\n  width: 80vw;\n  height: 60vh;\n  overflow-y: auto;\n}\n.select-list .menu-item {\n  position: relative;\n  border-bottom: 1px solid rgba(0, 112, 192, 0.1);\n  padding: 8px 10px;\n  cursor: pointer;\n  transition: background-color 300ms;\n}\n.select-list .menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.select-list .menu-item > .arrow {\n  color: black;\n  transition: transform 300ms;\n  font-size: 1rem;\n  /* height: 20px; */\n  display: inline-block;\n  text-align: center;\n  /* font-size: 16px; */\n}\n.select-list .box {\n  box-sizing: content-box;\n  border-top: 1px solid rgba(0, 112, 192, 0.3);\n  background-color: rgba(255, 255, 255, 0.5);\n  transition: 300ms;\n}\n.select-list .box.collapsed {\n  max-height: 0;\n  opacity: 0;\n  overflow: hidden;\n}\n/* 通过级联特性来控制缩进顶是`(*>﹏<*)′ */\n.select-list > .box > .menu-item {\n  padding-left: 30px;\n}\n.select-list > .box > .box > .menu-item {\n  padding-left: 40px;\n}\n.select-list > .box > .box > .box > .menu-item {\n  padding-left: 50px;\n}\n.select-list > .box > .box > .box > .box > .menu-item {\n  padding-left: 76px;\n}\n.select-list .selected {\n  color: #0070c0;\n  font-weight: bold;\n  background-color: rgba(0, 112, 192, 0.3) !important;\n}\n.colorRed {\n  color: red;\n}\n.okButton {\n  height: 15vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.okButton > div {\n  width: 80vw;\n  font-size: 1rem;\n  padding: 0.5rem;\n  background-color: #005BAC;\n  text-align: center;\n  color: white;\n  border-radius: 4px;\n}\n:host ::ng-deep .selectAddresShow .am-list-item {\n  background-color: #ebfbff;\n}\n:host ::ng-deep .toolbar-title-default {\n  text-align: center;\n  border-radius: 2px;\n}\n.header-icon {\n  width: 30px;\n  float: left;\n  text-align: center;\n  margin-left: -10px;\n}\n.header-font {\n  width: 30px;\n  float: left;\n  text-align: center;\n  font-size: 1rem;\n  margin-top: 6px;\n}\n.header-title {\n  display: inline-block;\n  margin-top: 8px;\n  font-size: 0.9rem;\n  color: black;\n  margin-left: -10px;\n}\n.census-address-load-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.4;\n  z-index: 99;\n  display: none;\n}\n.load-css {\n  position: absolute;\n  left: 40%;\n  top: 40%;\n  color: #1095FF;\n  height: 50px;\n  width: 50px;\n  z-index: 100;\n  opacity: 1;\n}\n.strong-pwd-prompt {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-size: 0.9rem;\n  background: rgba(32, 32, 32, 0.9);\n  z-index: 1024;\n  line-height: 1.8;\n}\n.strong-pwd-prompt .in {\n  width: 74%;\n  padding: 30px;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.8);\n}\n.strong-pwd-prompt button {\n  background: #3880FF;\n  text-align: center;\n  letter-spacing: 2px;\n  color: #fff;\n  width: 100%;\n  padding: 15px;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n.strong-pwd-prompt p {\n  margin-bottom: 20px;\n}\n.forced-pwd-prompt {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-size: 0.9rem;\n  background: rgba(32, 32, 32, 0.9);\n  z-index: 1024;\n  line-height: 1.8;\n}\n.forced-pwd-prompt .in {\n  width: 74%;\n  padding: 30px;\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  text-align: center;\n  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.8);\n}\n.forced-pwd-prompt .btn-row {\n  justify-content: space-between;\n  display: flex;\n  margin-top: 20px;\n}\n.forced-pwd-prompt button {\n  background: #3880FF;\n  text-align: center;\n  letter-spacing: 2px;\n  color: #fff;\n  padding: 15px;\n  border-radius: 5px;\n  font-size: 1rem;\n  width: 48%;\n}\n.forced-pwd-prompt .b-default {\n  background: #fff;\n  border: 1px solid #eee;\n  color: #999;\n}\n.forced-pwd-prompt p {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NlbGVjdC1jZW5zdXMtYWRkcmVzcy10cmVlL3NlbGVjdC1jZW5zdXMtYWRkcmVzcy10cmVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVGO0FBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUdGO0FBREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSUY7QUFGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBS0Y7QUFIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFNRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSwrQ0FBQTtFQUVBLGlCQUFBO0VBR0EsZUFBQTtFQUNBLGtDQUFBO0FBQUY7QUFHQTtFQUNFLDBDQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURGO0FBSUE7RUFDRSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtBQURGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQSwyQkFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7QUFBRjtBQUtBO0VBQ0UsVUFBQTtBQUZGO0FBYUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVZGO0FBWUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVEY7QUFhQTtFQUNFLHlCQUFBO0FBVkY7QUFjQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFYRjtBQWFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVkY7QUFZQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVRGO0FBV0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVJGO0FBVUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVBGO0FBU0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFORjtBQVdBO0VBQW1CLGFBQUE7RUFBYSxtQkFBQTtFQUFtQix1QkFBQTtFQUNqRCxlQUFBO0VBQWUsTUFBQTtFQUFNLFFBQUE7RUFBUSxTQUFBO0VBQVMsT0FBQTtFQUFPLGlCQUFBO0VBQzdDLGlDQUFBO0VBQTZCLGFBQUE7RUFBYSxnQkFBQTtBQUU1QztBQURFO0VBQUksVUFBQTtFQUFVLGFBQUE7RUFBYSx5QkFBQTtVQUFBLGlCQUFBO0VBQWlCLG9DQUFBO0VBQWdDLG1CQUFBO0VBQzFFLGlEQUFBO0FBUUo7QUFORTtFQUFPLG1CQUFBO0VBQW1CLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW1CLFdBQUE7RUFBVyxXQUFBO0VBQVcsYUFBQTtFQUFhLGtCQUFBO0VBQWtCLGVBQUE7QUFnQnRIO0FBZkU7RUFBRSxtQkFBQTtBQWtCSjtBQWZBO0VBQW1CLGFBQUE7RUFBYSxtQkFBQTtFQUFtQix1QkFBQTtFQUNqRCxlQUFBO0VBQWUsTUFBQTtFQUFNLFFBQUE7RUFBUSxTQUFBO0VBQVMsT0FBQTtFQUFPLGlCQUFBO0VBQzdDLGlDQUFBO0VBQTZCLGFBQUE7RUFBYSxnQkFBQTtBQTRCNUM7QUEzQkU7RUFBSSxVQUFBO0VBQVUsYUFBQTtFQUFhLHlCQUFBO1VBQUEsaUJBQUE7RUFBaUIsb0NBQUE7RUFBZ0MsbUJBQUE7RUFBbUIsa0JBQUE7RUFDN0YsaURBQUE7QUFtQ0o7QUFqQ0U7RUFBUyw4QkFBQTtFQUE4QixhQUFBO0VBQWEsZ0JBQUE7QUFzQ3REO0FBckNFO0VBQU8sbUJBQUE7RUFBbUIsa0JBQUE7RUFBa0IsbUJBQUE7RUFBbUIsV0FBQTtFQUFXLGFBQUE7RUFBYSxrQkFBQTtFQUFrQixlQUFBO0VBQWUsVUFBQTtBQStDMUg7QUE5Q0U7RUFBVyxnQkFBQTtFQUFnQixzQkFBQTtFQUFzQixXQUFBO0FBbURuRDtBQWxERTtFQUFFLG1CQUFBO0FBcURKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NlbGVjdC1jZW5zdXMtYWRkcmVzcy10cmVlL3NlbGVjdC1jZW5zdXMtYWRkcmVzcy10cmVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZWxlY3QtY2Vuc3VzLWFkZHJlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlbGVjdCB7XG4gIGhlaWdodDogMTV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWxlY3QgPiBkaXYgPiBpbnB1dCB7XG4gIHdpZHRoOiA2NXZ3O1xuICBoZWlnaHQ6IDd2aDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5zZWxlY3QgPiBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUJBQztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTV2dztcbiAgaGVpZ2h0OiA3dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbn1cblxuLnNlbGVjdC1saXN0IHtcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogNjB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNlbGVjdC1saXN0IC5tZW51LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDExMiwgMTkyLCAwLjEpO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xufVxuXG4uc2VsZWN0LWxpc3QgLm1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLnNlbGVjdC1saXN0IC5tZW51LWl0ZW0gPiAuYXJyb3cge1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbiAgZm9udC1zaXplOiAxcmVtO1xuICAvKiBoZWlnaHQ6IDIwcHg7ICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBmb250LXNpemU6IDE2cHg7ICovXG59XG5cbi5zZWxlY3QtbGlzdCAuYm94IHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDExMiwgMTkyLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xufVxuXG4uc2VsZWN0LWxpc3QgLmJveC5jb2xsYXBzZWQge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiDpgJrov4fnuqfogZTnibnmgKfmnaXmjqfliLbnvKnov5vpobbmmK9gKCo+77mPPCop4oCyICovXG4uc2VsZWN0LWxpc3QgPiAuYm94ID4gLm1lbnUtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnNlbGVjdC1saXN0ID4gLmJveCA+IC5ib3ggPiAubWVudS1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4uc2VsZWN0LWxpc3QgPiAuYm94ID4gLmJveCA+IC5ib3ggPiAubWVudS1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4uc2VsZWN0LWxpc3QgPiAuYm94ID4gLmJveCA+IC5ib3ggPiAuYm94ID4gLm1lbnUtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogNzZweDtcbn1cblxuLnNlbGVjdC1saXN0IC5zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMDA3MGMwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTIsIDE5MiwgMC4zKSAhaW1wb3J0YW50O1xufVxuXG4uY29sb3JSZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ub2tCdXR0b24ge1xuICBoZWlnaHQ6IDE1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ub2tCdXR0b24gPiBkaXYge1xuICB3aWR0aDogODB2dztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVCQUM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2VsZWN0QWRkcmVzU2hvdyAuYW0tbGlzdC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZmJmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyLXRpdGxlLWRlZmF1bHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLmhlYWRlci1mb250IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLmNlbnN1cy1hZGRyZXNzLWxvYWQtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjQ7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9hZC1jc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwJTtcbiAgdG9wOiA0MCU7XG4gIGNvbG9yOiAjMTA5NUZGO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zdHJvbmctcHdkLXByb21wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDMyLCAzMiwgMC45KTtcbiAgei1pbmRleDogMTAyNDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cbi5zdHJvbmctcHdkLXByb21wdCAuaW4ge1xuICB3aWR0aDogNzQlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuLnN0cm9uZy1wd2QtcHJvbXB0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzODgwRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5zdHJvbmctcHdkLXByb21wdCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcmNlZC1wd2QtcHJvbXB0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgzMiwgMzIsIDMyLCAwLjkpO1xuICB6LWluZGV4OiAxMDI0O1xuICBsaW5lLWhlaWdodDogMS44O1xufVxuLmZvcmNlZC1wd2QtcHJvbXB0IC5pbiB7XG4gIHdpZHRoOiA3NCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZpbHRlcjogYmx1cigwcHgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbi5mb3JjZWQtcHdkLXByb21wdCAuYnRuLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5mb3JjZWQtcHdkLXByb21wdCBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMzg4MEZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDQ4JTtcbn1cbi5mb3JjZWQtcHdkLXByb21wdCAuYi1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgY29sb3I6ICM5OTk7XG59XG4uZm9yY2VkLXB3ZC1wcm9tcHQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/common/select-census-address-tree/select-census-address-tree.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/common/select-census-address-tree/select-census-address-tree.page.ts ***!
  \**************************************************************************************/
/*! exports provided: SelectCensusAddressTreePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCensusAddressTreePage", function() { return SelectCensusAddressTreePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/http-client.service */ "./src/app/shared/http-client.service.ts");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codelyzer/util/isNotNullOrUndefined */ "./node_modules/codelyzer/util/isNotNullOrUndefined.js");
/* harmony import */ var codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








let SelectCensusAddressTreePage = class SelectCensusAddressTreePage {
    constructor(router, navCtrl, http, route, el, platform) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.route = route;
        this.el = el;
        this.platform = platform;
        this.addressList = [];
        /**
         * 存储初始化的所有采集点信息
         */
        this.addressAllList = [];
        this.addressInput = '';
        this.AllAddressList = [];
        this.showStrongPwdPrompt = false;
        this.showForcedPwdPrompt = false;
        this.pwdForced = false; // 是否到期了必须改
        // 控制app返回按钮
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.routeBack();
        });
    }
    ngOnInit() {
        this.load = document.getElementsByClassName('census-address-load-bar')[0];
    }
    ionViewWillEnter() {
        // 获取采集点
        this.init();
    }
    init() {
        if (localStorage.getItem('offlineData') !== null) {
            if (confirm('检测到您之前使用过离线模式并产生数据未上传，是否上传？')) {
                let cond = { 'offdata': localStorage.getItem('offlineData') };
                //console.warn(cond)
                this.http.post(`rcp/api/suzhou/saveOffData`, cond, '', '').subscribe(data => {
                    //console.warn(data)
                    if (data['isSuccess']) {
                        localStorage.removeItem('offlineData');
                        this.http.showToast('已提交');
                    }
                });
            }
        }
        this.showStrongPwdPrompt = false; // 修改密码后重新进入会读取缓存，该值不刷新，强制false一下。
        this.initCensusAddress();
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(sessionStorage.getItem('loginUserName'))) {
            this.loginUserName = sessionStorage.getItem('loginUserName');
        }
        //强密码检验
        // this.isStrongPWD = sessionStorage.getItem('isStrongPwd') !== '0';
        // this.isCheckPWD = sessionStorage.getItem('rcp_open_pw_level_verification_switch') === 'true';
        // 只有开启强密码策略，且非强密码弹出强密码修改提示
        if (sessionStorage.getItem('rcp_open_pw_level_verification_switch') === 'true' && sessionStorage.getItem('isStrongPwd') === '0') {
            this.showStrongPwdPrompt = true;
        }
        else {
            if (sessionStorage.getItem('rcp_open_pwd_forced_switch') === 'true') {
                const aDayMM = 1000 * 60 * 60 * 24;
                const warningDay = 15;
                let updateTime = sessionStorage.getItem('pwdUpdateTime'), frequence = sessionStorage.getItem('rcp_open_pwd_forced_frequence'), currentMM = +new Date(), updateTimeMM = +new Date(updateTime), deadlineMM = updateTimeMM + +frequence * aDayMM, duration = deadlineMM - currentMM;
                if (duration <= 0) { // 已过期
                    this.showForcedPwdPrompt = true;
                    this.pwdForced = true;
                }
                else if (duration > 0 && duration <= warningDay * aDayMM) { // warningDay内
                    if (sessionStorage.getItem('later') !== 'true') {
                        this.showForcedPwdPrompt = true;
                    }
                    this.pwdForced = false;
                    this.pwdCountdown = this.formatDuration(duration);
                }
                else {
                    console.warn('pass through!');
                }
                sessionStorage.setItem('pwdForced', String(this.pwdForced));
            }
        }
    }
    navTo(dest) {
        this.router.navigate([dest]);
    }
    quit() {
        let ip = sessionStorage.getItem('ip');
        sessionStorage.clear();
        sessionStorage.setItem('ip', ip);
        this.router.navigate(['/']);
    }
    later() {
        this.showForcedPwdPrompt = false;
        sessionStorage.setItem('later', 'true');
    }
    // 路由返回
    routeBack() {
        this.router.navigate(['/login']);
    }
    removeClass(dom, clzName) {
        let clzNewName = dom['className'];
        let classname = '';
        if (clzNewName && clzNewName.length > 0) {
            clzNewName = clzNewName.split(' ');
            for (let i = clzNewName.length; i--;) {
                if (clzNewName[i] === clzName) {
                    clzNewName.splice(i, 1);
                    classname = clzNewName.join(' ');
                    return classname;
                }
            }
        }
        return clzNewName.join(' ');
    }
    search() {
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.addressInput) && this.addressInput.trim() !== '') {
            this.selectCensusTree();
        }
        else {
            this.initCensusAddress();
        }
    }
    // 跳转页面
    skipPage(menu) {
        const menuItem = this.el.nativeElement.getElementsByClassName('selected');
        for (let i = menuItem.length; i--;) {
            const isShow = this.IshasClass(menuItem[i], 'selected');
            if (isShow) {
                menuItem[i].className = this.removeClass(menuItem[i], 'selected');
            }
        }
        const nowmenu = this.el.nativeElement.getElementsByClassName('menu' + menu.id);
        nowmenu[0].className += ' selected';
        this.censusId = menu['id'];
        this.address = menu['name'];
    }
    // 显示和隐藏
    showBox(event, oneMenu) {
        this.censusaddress(event, oneMenu);
    }
    // ----app页面部分----结束
    // 菜单显示操作
    menuShow(dom, oneMenu) {
        if (dom.nodeName === 'SPAN') {
            dom = dom.offsetParent;
        }
        oneMenu['isSpread'] = !oneMenu['isSpread'];
        const nextElementSibling = dom.nextElementSibling;
        const isShow = this.IshasClass(dom, 'collapsed');
        if (isShow) {
            nextElementSibling.className += ' collapsed';
            dom.className = this.removeClass(dom, 'collapsed');
        }
        else {
            nextElementSibling.className = this.removeClass(nextElementSibling, 'collapsed');
            dom.className += ' collapsed';
        }
    }
    // 判断是否有类名
    IshasClass(dom, clzName) {
        let _clzName = dom.className;
        if (_clzName && _clzName.length > 0) {
            _clzName = _clzName.split(' ');
            for (let i = _clzName.length; i--;) {
                if (_clzName[i] === clzName) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     *
     * @param value 实时过滤搜索显示匹配的采集点
     */
    searchRealTime(KeyEvent) {
        let txtAdd = this.addressInput.trim();
        let isSearch = false;
        if (txtAdd.length > 0) {
            let tmpAdd = txtAdd.substring(txtAdd.length - 1);
            let numTmpCHN = this.GetCHNum(tmpAdd);
            if (numTmpCHN > 0) {
                isSearch = true;
            }
        }
        else {
            this.initCensusAddress();
        }
        // 如果最后输入的是汉字，则到数据库中查询
        if (isSearch) {
            this.search();
        }
    }
    /**
     *
     * @param value 获取字符串中的汉字数量
     */
    GetCHNum(value) {
        let num = 0;
        for (var i = 0; i < value.length; i++) {
            if ((value.charCodeAt(i) < 0) || (value.charCodeAt(i) > 255)) {
                num += 1;
            }
        }
        return num;
    }
    okButton() {
        sessionStorage.setItem('censusAddress', this.address);
        if (Object(codelyzer_util_isNotNullOrUndefined__WEBPACK_IMPORTED_MODULE_6__["isNotNullOrUndefined"])(this.address) && this.address !== '') {
            this.saveCensusAddress();
        }
        else {
            this.http.showToast('采集点为空，请选择采集点！');
        }
    }
    // 调用后台接口
    // 获取采集点
    initCensusAddress() {
        this.addressList = [];
        this.load['style']['display'] = 'inline-block';
        const condition = {
            "address": '',
            "id": '',
            "name": '',
            "pageNum": 1,
            "pageSize": 50,
            "parentId": '',
            "treelevel": ''
        };
        this.http
            .post(`rcp/api/censusaddress/selectCensusTree`, condition, '获取采集点', _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].FailMessage.getCensusAddress)
            .subscribe(data => {
            this.load['style']['display'] = 'none';
            if (data['isSuccess']) {
                data['data'].forEach(w => {
                    w['children'] = [];
                    w['isSpread'] = false;
                });
                this.addressList = data['data'];
                if (data['data'].length > this.addressAllList.length) {
                    this.addressAllList = data['data'];
                }
            }
        });
    }
    // 获取采集点
    censusaddress(event, clickAddress) {
        this.load['style']['display'] = 'inline-block';
        const condition = {
            "address": "",
            "id": clickAddress.id,
            "name": "",
            "pageNum": 1,
            "pageSize": 50,
            "parentId": "",
            "treelevel": clickAddress.treelevel
        };
        this.http
            .post(`rcp/api/censusaddress/selectCensusTree`, condition, '获取采集点', _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].FailMessage.getCensusAddress)
            .subscribe(data => {
            this.load['style']['display'] = 'none';
            if (data['isSuccess']) {
                data['data'].forEach(w => {
                    w['children'] = [];
                    w['isSpread'] = false;
                });
                clickAddress.children = data['data'];
                this.menuShow(event.srcElement, clickAddress);
            }
        });
    }
    selectCensusTree() {
        this.addressList = [];
        const censusAddress = {
            "address": this.addressInput,
            "id": "",
            "name": "",
            "pageNum": 1,
            "pageSize": 50,
            "parentId": "",
            "treelevel": ""
        };
        this.load['style']['display'] = 'inline-block';
        this.http
            .post(`rcp/api/censusaddress/selectTreeByWhere`, censusAddress, '逐级查询采集点树形数据', _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].FailMessage.getCensusAddress)
            .subscribe(data => {
            this.load['style']['display'] = 'none';
            if (data['isSuccess']) {
                this.addressList = data['data'];
            }
        });
    }
    saveCensusAddress() {
        const censusAddress = {
            censusId: this.censusId,
        };
        this.load['style']['display'] = 'inline-block';
        this.http
            .post(`rcp/api/user/census/address` + this.http.getParamsString(censusAddress), {}, '保存采集点', _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].FailMessage.saveCensusAddress)
            .subscribe(data => {
            this.load['style']['display'] = 'none';
            if (data['isSuccess']) {
                this.router.navigate(['/tabs/tab1']);
            }
        });
    }
    //
    formatDuration(duration) {
        var s = Math.floor(duration / 1000);
        var str = '';
        //s = s >= 0 ? s : s * -1;  // mm必然小于currentMM
        var day = Math.floor(s / (60 * 60 * 24));
        var totalHour = Math.floor(s / (60 * 60));
        var totalMinute = Math.floor(s / 60);
        //
        var hour = totalHour - day * 24;
        var minute = totalMinute - totalHour * 60;
        var second = s - totalMinute * 60;
        //
        if (0 != day) {
            str = day + '天' + hour + '小时' + minute + '分钟';
        }
        else if (0 == hour && 0 == minute) {
            str = minute + '分钟'; // + second + '秒';
        }
        else {
            str = (hour > 0 ? hour + '小时' : '') + minute + '分钟';
        }
        return str;
    }
};
SelectCensusAddressTreePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _shared_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
SelectCensusAddressTreePage.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@routeAnimation',] }]
};
SelectCensusAddressTreePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-census-address-tree',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-census-address-tree.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/select-census-address-tree/select-census-address-tree.page.html")).default,
        animations: [
            _shared__WEBPACK_IMPORTED_MODULE_4__["routeAnimation"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-census-address-tree.page.scss */ "./src/app/common/select-census-address-tree/select-census-address-tree.page.scss")).default]
    })
], SelectCensusAddressTreePage);



/***/ }),

/***/ "./src/app/service/event.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/event.service.ts ***!
  \******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_2__);



let EventService = class EventService {
    constructor() {
        this.eventEmitter = new eventemitter3__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // 这个实例就会被多个组件共享  来实现不同页面的数据通信
    }
};
EventService.ctorParameters = () => [];
EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventService);



/***/ }),

/***/ "./src/app/service/serviceCommon.module.ts":
/*!*************************************************!*\
  !*** ./src/app/service/serviceCommon.module.ts ***!
  \*************************************************/
/*! exports provided: ServiceCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCommonModule", function() { return ServiceCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.service */ "./src/app/service/event.service.ts");



let ServiceCommonModule = class ServiceCommonModule {
};
ServiceCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            _event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
        ],
    })
], ServiceCommonModule);



/***/ })

}]);
//# sourceMappingURL=common-select-census-address-tree-select-census-address-tree-module-es2015.js.map