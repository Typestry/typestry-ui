function l0(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var R1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(p) {
  (function() {
    var E = {}.hasOwnProperty;
    function m() {
      for (var C = [], D = 0; D < arguments.length; D++) {
        var x = arguments[D];
        if (x) {
          var S = typeof x;
          if (S === "string" || S === "number")
            C.push(x);
          else if (Array.isArray(x)) {
            if (x.length) {
              var ne = m.apply(null, x);
              ne && C.push(ne);
            }
          } else if (S === "object") {
            if (x.toString !== Object.prototype.toString && !x.toString.toString().includes("[native code]")) {
              C.push(x.toString());
              continue;
            }
            for (var Y in x)
              E.call(x, Y) && x[Y] && C.push(Y);
          }
        }
      }
      return C.join(" ");
    }
    p.exports ? (m.default = m, p.exports = m) : window.classNames = m;
  })();
})(R1);
var DD = R1.exports;
const ii = /* @__PURE__ */ l0(DD);
var KE = { exports: {} }, Wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function OD() {
  if (KR)
    return Wt;
  KR = 1;
  var p = Symbol.for("react.element"), E = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), S = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), G = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Q = Symbol.iterator;
  function ee(R) {
    return R === null || typeof R != "object" ? null : (R = Q && R[Q] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Oe = Object.assign, Ke = {};
  function et(R, z, re) {
    this.props = R, this.context = z, this.refs = Ke, this.updater = re || ae;
  }
  et.prototype.isReactComponent = {}, et.prototype.setState = function(R, z) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, z, "setState");
  }, et.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function Dt() {
  }
  Dt.prototype = et.prototype;
  function Re(R, z, re) {
    this.props = R, this.context = z, this.refs = Ke, this.updater = re || ae;
  }
  var Le = Re.prototype = new Dt();
  Le.constructor = Re, Oe(Le, et.prototype), Le.isPureReactComponent = !0;
  var Ie = Array.isArray, W = Object.prototype.hasOwnProperty, st = { current: null }, tt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Kt(R, z, re) {
    var ge, de = {}, ze = null, Ce = null;
    if (z != null)
      for (ge in z.ref !== void 0 && (Ce = z.ref), z.key !== void 0 && (ze = "" + z.key), z)
        W.call(z, ge) && !tt.hasOwnProperty(ge) && (de[ge] = z[ge]);
    var we = arguments.length - 2;
    if (we === 1)
      de.children = re;
    else if (1 < we) {
      for (var ke = Array(we), Ge = 0; Ge < we; Ge++)
        ke[Ge] = arguments[Ge + 2];
      de.children = ke;
    }
    if (R && R.defaultProps)
      for (ge in we = R.defaultProps, we)
        de[ge] === void 0 && (de[ge] = we[ge]);
    return { $$typeof: p, type: R, key: ze, ref: Ce, props: de, _owner: st.current };
  }
  function Ft(R, z) {
    return { $$typeof: p, type: R.type, key: z, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function Ot(R) {
    return typeof R == "object" && R !== null && R.$$typeof === p;
  }
  function Et(R) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(re) {
      return z[re];
    });
  }
  var at = /\/+/g;
  function he(R, z) {
    return typeof R == "object" && R !== null && R.key != null ? Et("" + R.key) : z.toString(36);
  }
  function Ne(R, z, re, ge, de) {
    var ze = typeof R;
    (ze === "undefined" || ze === "boolean") && (R = null);
    var Ce = !1;
    if (R === null)
      Ce = !0;
    else
      switch (ze) {
        case "string":
        case "number":
          Ce = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case p:
            case E:
              Ce = !0;
          }
      }
    if (Ce)
      return Ce = R, de = de(Ce), R = ge === "" ? "." + he(Ce, 0) : ge, Ie(de) ? (re = "", R != null && (re = R.replace(at, "$&/") + "/"), Ne(de, z, re, "", function(Ge) {
        return Ge;
      })) : de != null && (Ot(de) && (de = Ft(de, re + (!de.key || Ce && Ce.key === de.key ? "" : ("" + de.key).replace(at, "$&/") + "/") + R)), z.push(de)), 1;
    if (Ce = 0, ge = ge === "" ? "." : ge + ":", Ie(R))
      for (var we = 0; we < R.length; we++) {
        ze = R[we];
        var ke = ge + he(ze, we);
        Ce += Ne(ze, z, re, ke, de);
      }
    else if (ke = ee(R), typeof ke == "function")
      for (R = ke.call(R), we = 0; !(ze = R.next()).done; )
        ze = ze.value, ke = ge + he(ze, we++), Ce += Ne(ze, z, re, ke, de);
    else if (ze === "object")
      throw z = String(R), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return Ce;
  }
  function ht(R, z, re) {
    if (R == null)
      return R;
    var ge = [], de = 0;
    return Ne(R, ge, "", "", function(ze) {
      return z.call(re, ze, de++);
    }), ge;
  }
  function rt(R) {
    if (R._status === -1) {
      var z = R._result;
      z = z(), z.then(function(re) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = re);
      }, function(re) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = re);
      }), R._status === -1 && (R._status = 0, R._result = z);
    }
    if (R._status === 1)
      return R._result.default;
    throw R._result;
  }
  var Ee = { current: null }, oe = { transition: null }, He = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: oe, ReactCurrentOwner: st };
  return Wt.Children = { map: ht, forEach: function(R, z, re) {
    ht(R, function() {
      z.apply(this, arguments);
    }, re);
  }, count: function(R) {
    var z = 0;
    return ht(R, function() {
      z++;
    }), z;
  }, toArray: function(R) {
    return ht(R, function(z) {
      return z;
    }) || [];
  }, only: function(R) {
    if (!Ot(R))
      throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, Wt.Component = et, Wt.Fragment = m, Wt.Profiler = D, Wt.PureComponent = Re, Wt.StrictMode = C, Wt.Suspense = Y, Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, Wt.cloneElement = function(R, z, re) {
    if (R == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var ge = Oe({}, R.props), de = R.key, ze = R.ref, Ce = R._owner;
    if (z != null) {
      if (z.ref !== void 0 && (ze = z.ref, Ce = st.current), z.key !== void 0 && (de = "" + z.key), R.type && R.type.defaultProps)
        var we = R.type.defaultProps;
      for (ke in z)
        W.call(z, ke) && !tt.hasOwnProperty(ke) && (ge[ke] = z[ke] === void 0 && we !== void 0 ? we[ke] : z[ke]);
    }
    var ke = arguments.length - 2;
    if (ke === 1)
      ge.children = re;
    else if (1 < ke) {
      we = Array(ke);
      for (var Ge = 0; Ge < ke; Ge++)
        we[Ge] = arguments[Ge + 2];
      ge.children = we;
    }
    return { $$typeof: p, type: R.type, key: de, ref: ze, props: ge, _owner: Ce };
  }, Wt.createContext = function(R) {
    return R = { $$typeof: S, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: x, _context: R }, R.Consumer = R;
  }, Wt.createElement = Kt, Wt.createFactory = function(R) {
    var z = Kt.bind(null, R);
    return z.type = R, z;
  }, Wt.createRef = function() {
    return { current: null };
  }, Wt.forwardRef = function(R) {
    return { $$typeof: ne, render: R };
  }, Wt.isValidElement = Ot, Wt.lazy = function(R) {
    return { $$typeof: pe, _payload: { _status: -1, _result: R }, _init: rt };
  }, Wt.memo = function(R, z) {
    return { $$typeof: G, type: R, compare: z === void 0 ? null : z };
  }, Wt.startTransition = function(R) {
    var z = oe.transition;
    oe.transition = {};
    try {
      R();
    } finally {
      oe.transition = z;
    }
  }, Wt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Wt.useCallback = function(R, z) {
    return Ee.current.useCallback(R, z);
  }, Wt.useContext = function(R) {
    return Ee.current.useContext(R);
  }, Wt.useDebugValue = function() {
  }, Wt.useDeferredValue = function(R) {
    return Ee.current.useDeferredValue(R);
  }, Wt.useEffect = function(R, z) {
    return Ee.current.useEffect(R, z);
  }, Wt.useId = function() {
    return Ee.current.useId();
  }, Wt.useImperativeHandle = function(R, z, re) {
    return Ee.current.useImperativeHandle(R, z, re);
  }, Wt.useInsertionEffect = function(R, z) {
    return Ee.current.useInsertionEffect(R, z);
  }, Wt.useLayoutEffect = function(R, z) {
    return Ee.current.useLayoutEffect(R, z);
  }, Wt.useMemo = function(R, z) {
    return Ee.current.useMemo(R, z);
  }, Wt.useReducer = function(R, z, re) {
    return Ee.current.useReducer(R, z, re);
  }, Wt.useRef = function(R) {
    return Ee.current.useRef(R);
  }, Wt.useState = function(R) {
    return Ee.current.useState(R);
  }, Wt.useSyncExternalStore = function(R, z, re) {
    return Ee.current.useSyncExternalStore(R, z, re);
  }, Wt.useTransition = function() {
    return Ee.current.useTransition();
  }, Wt.version = "18.2.0", Wt;
}
var yv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
yv.exports;
var ZR;
function LD() {
  return ZR || (ZR = 1, function(p, E) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.2.0", C = Symbol.for("react.element"), D = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), G = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), Ke = Symbol.for("react.offscreen"), et = Symbol.iterator, Dt = "@@iterator";
      function Re(y) {
        if (y === null || typeof y != "object")
          return null;
        var _ = et && y[et] || y[Dt];
        return typeof _ == "function" ? _ : null;
      }
      var Le = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ie = {
        transition: null
      }, W = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, st = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, tt = {}, Kt = null;
      function Ft(y) {
        Kt = y;
      }
      tt.setExtraStackFrame = function(y) {
        Kt = y;
      }, tt.getCurrentStack = null, tt.getStackAddendum = function() {
        var y = "";
        Kt && (y += Kt);
        var _ = tt.getCurrentStack;
        return _ && (y += _() || ""), y;
      };
      var Ot = !1, Et = !1, at = !1, he = !1, Ne = !1, ht = {
        ReactCurrentDispatcher: Le,
        ReactCurrentBatchConfig: Ie,
        ReactCurrentOwner: st
      };
      ht.ReactDebugCurrentFrame = tt, ht.ReactCurrentActQueue = W;
      function rt(y) {
        {
          for (var _ = arguments.length, H = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
            H[q - 1] = arguments[q];
          oe("warn", y, H);
        }
      }
      function Ee(y) {
        {
          for (var _ = arguments.length, H = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
            H[q - 1] = arguments[q];
          oe("error", y, H);
        }
      }
      function oe(y, _, H) {
        {
          var q = ht.ReactDebugCurrentFrame, ve = q.getStackAddendum();
          ve !== "" && (_ += "%s", H = H.concat([ve]));
          var dt = H.map(function(De) {
            return String(De);
          });
          dt.unshift("Warning: " + _), Function.prototype.apply.call(console[y], console, dt);
        }
      }
      var He = {};
      function R(y, _) {
        {
          var H = y.constructor, q = H && (H.displayName || H.name) || "ReactClass", ve = q + "." + _;
          if (He[ve])
            return;
          Ee("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", _, q), He[ve] = !0;
        }
      }
      var z = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(y) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(y, _, H) {
          R(y, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(y, _, H, q) {
          R(y, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(y, _, H, q) {
          R(y, "setState");
        }
      }, re = Object.assign, ge = {};
      Object.freeze(ge);
      function de(y, _, H) {
        this.props = y, this.context = _, this.refs = ge, this.updater = H || z;
      }
      de.prototype.isReactComponent = {}, de.prototype.setState = function(y, _) {
        if (typeof y != "object" && typeof y != "function" && y != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, y, _, "setState");
      }, de.prototype.forceUpdate = function(y) {
        this.updater.enqueueForceUpdate(this, y, "forceUpdate");
      };
      {
        var ze = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ce = function(y, _) {
          Object.defineProperty(de.prototype, y, {
            get: function() {
              rt("%s(...) is deprecated in plain JavaScript React classes. %s", _[0], _[1]);
            }
          });
        };
        for (var we in ze)
          ze.hasOwnProperty(we) && Ce(we, ze[we]);
      }
      function ke() {
      }
      ke.prototype = de.prototype;
      function Ge(y, _, H) {
        this.props = y, this.context = _, this.refs = ge, this.updater = H || z;
      }
      var mt = Ge.prototype = new ke();
      mt.constructor = Ge, re(mt, de.prototype), mt.isPureReactComponent = !0;
      function Qt() {
        var y = {
          current: null
        };
        return Object.seal(y), y;
      }
      var Se = Array.isArray;
      function Pt(y) {
        return Se(y);
      }
      function Mn(y) {
        {
          var _ = typeof Symbol == "function" && Symbol.toStringTag, H = _ && y[Symbol.toStringTag] || y.constructor.name || "Object";
          return H;
        }
      }
      function Fn(y) {
        try {
          return L(y), !1;
        } catch {
          return !0;
        }
      }
      function L(y) {
        return "" + y;
      }
      function I(y) {
        if (Fn(y))
          return Ee("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Mn(y)), L(y);
      }
      function Z(y, _, H) {
        var q = y.displayName;
        if (q)
          return q;
        var ve = _.displayName || _.name || "";
        return ve !== "" ? H + "(" + ve + ")" : H;
      }
      function Me(y) {
        return y.displayName || "Context";
      }
      function ye(y) {
        if (y == null)
          return null;
        if (typeof y.tag == "number" && Ee("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
          return y.displayName || y.name || null;
        if (typeof y == "string")
          return y;
        switch (y) {
          case x:
            return "Fragment";
          case D:
            return "Portal";
          case ne:
            return "Profiler";
          case S:
            return "StrictMode";
          case Q:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof y == "object")
          switch (y.$$typeof) {
            case G:
              var _ = y;
              return Me(_) + ".Consumer";
            case Y:
              var H = y;
              return Me(H._context) + ".Provider";
            case pe:
              return Z(y, y.render, "ForwardRef");
            case ae:
              var q = y.displayName || null;
              return q !== null ? q : ye(y.type) || "Memo";
            case Oe: {
              var ve = y, dt = ve._payload, De = ve._init;
              try {
                return ye(De(dt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var se = Object.prototype.hasOwnProperty, $e = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Lt, Ht, Nn;
      Nn = {};
      function Mr(y) {
        if (se.call(y, "ref")) {
          var _ = Object.getOwnPropertyDescriptor(y, "ref").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return y.ref !== void 0;
      }
      function gn(y) {
        if (se.call(y, "key")) {
          var _ = Object.getOwnPropertyDescriptor(y, "key").get;
          if (_ && _.isReactWarning)
            return !1;
        }
        return y.key !== void 0;
      }
      function rr(y, _) {
        var H = function() {
          Lt || (Lt = !0, Ee("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        H.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: H,
          configurable: !0
        });
      }
      function Ua(y, _) {
        var H = function() {
          Ht || (Ht = !0, Ee("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        H.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: H,
          configurable: !0
        });
      }
      function Nr(y) {
        if (typeof y.ref == "string" && st.current && y.__self && st.current.stateNode !== y.__self) {
          var _ = ye(st.current.type);
          Nn[_] || (Ee('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _, y.ref), Nn[_] = !0);
        }
      }
      var Te = function(y, _, H, q, ve, dt, De) {
        var ct = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: C,
          // Built-in properties that belong on the element
          type: y,
          key: _,
          ref: H,
          props: De,
          // Record the component responsible for creating this element.
          _owner: dt
        };
        return ct._store = {}, Object.defineProperty(ct._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ct, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(ct, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ve
        }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
      };
      function Ze(y, _, H) {
        var q, ve = {}, dt = null, De = null, ct = null, Nt = null;
        if (_ != null) {
          Mr(_) && (De = _.ref, Nr(_)), gn(_) && (I(_.key), dt = "" + _.key), ct = _.__self === void 0 ? null : _.__self, Nt = _.__source === void 0 ? null : _.__source;
          for (q in _)
            se.call(_, q) && !$e.hasOwnProperty(q) && (ve[q] = _[q]);
        }
        var Xt = arguments.length - 2;
        if (Xt === 1)
          ve.children = H;
        else if (Xt > 1) {
          for (var Sn = Array(Xt), pn = 0; pn < Xt; pn++)
            Sn[pn] = arguments[pn + 2];
          Object.freeze && Object.freeze(Sn), ve.children = Sn;
        }
        if (y && y.defaultProps) {
          var En = y.defaultProps;
          for (q in En)
            ve[q] === void 0 && (ve[q] = En[q]);
        }
        if (dt || De) {
          var wn = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          dt && rr(ve, wn), De && Ua(ve, wn);
        }
        return Te(y, dt, De, ct, Nt, st.current, ve);
      }
      function kt(y, _) {
        var H = Te(y.type, _, y.ref, y._self, y._source, y._owner, y.props);
        return H;
      }
      function nn(y, _, H) {
        if (y == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + y + ".");
        var q, ve = re({}, y.props), dt = y.key, De = y.ref, ct = y._self, Nt = y._source, Xt = y._owner;
        if (_ != null) {
          Mr(_) && (De = _.ref, Xt = st.current), gn(_) && (I(_.key), dt = "" + _.key);
          var Sn;
          y.type && y.type.defaultProps && (Sn = y.type.defaultProps);
          for (q in _)
            se.call(_, q) && !$e.hasOwnProperty(q) && (_[q] === void 0 && Sn !== void 0 ? ve[q] = Sn[q] : ve[q] = _[q]);
        }
        var pn = arguments.length - 2;
        if (pn === 1)
          ve.children = H;
        else if (pn > 1) {
          for (var En = Array(pn), wn = 0; wn < pn; wn++)
            En[wn] = arguments[wn + 2];
          ve.children = En;
        }
        return Te(y.type, dt, De, ct, Nt, Xt, ve);
      }
      function an(y) {
        return typeof y == "object" && y !== null && y.$$typeof === C;
      }
      var qn = ".", jn = ":";
      function Ar(y) {
        var _ = /[=:]/g, H = {
          "=": "=0",
          ":": "=2"
        }, q = y.replace(_, function(ve) {
          return H[ve];
        });
        return "$" + q;
      }
      var dn = !1, Br = /\/+/g;
      function ln(y) {
        return y.replace(Br, "$&/");
      }
      function un(y, _) {
        return typeof y == "object" && y !== null && y.key != null ? (I(y.key), Ar("" + y.key)) : _.toString(36);
      }
      function li(y, _, H, q, ve) {
        var dt = typeof y;
        (dt === "undefined" || dt === "boolean") && (y = null);
        var De = !1;
        if (y === null)
          De = !0;
        else
          switch (dt) {
            case "string":
            case "number":
              De = !0;
              break;
            case "object":
              switch (y.$$typeof) {
                case C:
                case D:
                  De = !0;
              }
          }
        if (De) {
          var ct = y, Nt = ve(ct), Xt = q === "" ? qn + un(ct, 0) : q;
          if (Pt(Nt)) {
            var Sn = "";
            Xt != null && (Sn = ln(Xt) + "/"), li(Nt, _, Sn, "", function(od) {
              return od;
            });
          } else
            Nt != null && (an(Nt) && (Nt.key && (!ct || ct.key !== Nt.key) && I(Nt.key), Nt = kt(
              Nt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              H + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (Nt.key && (!ct || ct.key !== Nt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ln("" + Nt.key) + "/"
              ) : "") + Xt
            )), _.push(Nt));
          return 1;
        }
        var pn, En, wn = 0, jt = q === "" ? qn : q + jn;
        if (Pt(y))
          for (var Yi = 0; Yi < y.length; Yi++)
            pn = y[Yi], En = jt + un(pn, Yi), wn += li(pn, _, H, En, ve);
        else {
          var ho = Re(y);
          if (typeof ho == "function") {
            var vs = y;
            ho === vs.entries && (dn || rt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), dn = !0);
            for (var ud = ho.call(vs), ci, hs = 0; !(ci = ud.next()).done; )
              pn = ci.value, En = jt + un(pn, hs++), wn += li(pn, _, H, En, ve);
          } else if (dt === "object") {
            var ms = String(y);
            throw new Error("Objects are not valid as a React child (found: " + (ms === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : ms) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return wn;
      }
      function Fa(y, _, H) {
        if (y == null)
          return y;
        var q = [], ve = 0;
        return li(y, q, "", "", function(dt) {
          return _.call(H, dt, ve++);
        }), q;
      }
      function Sl(y) {
        var _ = 0;
        return Fa(y, function() {
          _++;
        }), _;
      }
      function fu(y, _, H) {
        Fa(y, function() {
          _.apply(this, arguments);
        }, H);
      }
      function no(y) {
        return Fa(y, function(_) {
          return _;
        }) || [];
      }
      function Bi(y) {
        if (!an(y))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return y;
      }
      function El(y) {
        var _ = {
          $$typeof: G,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: y,
          _currentValue2: y,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        _.Provider = {
          $$typeof: Y,
          _context: _
        };
        var H = !1, q = !1, ve = !1;
        {
          var dt = {
            $$typeof: G,
            _context: _
          };
          Object.defineProperties(dt, {
            Provider: {
              get: function() {
                return q || (q = !0, Ee("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), _.Provider;
              },
              set: function(De) {
                _.Provider = De;
              }
            },
            _currentValue: {
              get: function() {
                return _._currentValue;
              },
              set: function(De) {
                _._currentValue = De;
              }
            },
            _currentValue2: {
              get: function() {
                return _._currentValue2;
              },
              set: function(De) {
                _._currentValue2 = De;
              }
            },
            _threadCount: {
              get: function() {
                return _._threadCount;
              },
              set: function(De) {
                _._threadCount = De;
              }
            },
            Consumer: {
              get: function() {
                return H || (H = !0, Ee("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), _.Consumer;
              }
            },
            displayName: {
              get: function() {
                return _.displayName;
              },
              set: function(De) {
                ve || (rt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", De), ve = !0);
              }
            }
          }), _.Consumer = dt;
        }
        return _._currentRenderer = null, _._currentRenderer2 = null, _;
      }
      var Ca = -1, Si = 0, Ta = 1, Ei = 2;
      function $r(y) {
        if (y._status === Ca) {
          var _ = y._result, H = _();
          if (H.then(function(dt) {
            if (y._status === Si || y._status === Ca) {
              var De = y;
              De._status = Ta, De._result = dt;
            }
          }, function(dt) {
            if (y._status === Si || y._status === Ca) {
              var De = y;
              De._status = Ei, De._result = dt;
            }
          }), y._status === Ca) {
            var q = y;
            q._status = Si, q._result = H;
          }
        }
        if (y._status === Ta) {
          var ve = y._result;
          return ve === void 0 && Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ve), "default" in ve || Ee(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ve), ve.default;
        } else
          throw y._result;
      }
      function Ra(y) {
        var _ = {
          // We use these fields to store the result.
          _status: Ca,
          _result: y
        }, H = {
          $$typeof: Oe,
          _payload: _,
          _init: $r
        };
        {
          var q, ve;
          Object.defineProperties(H, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(dt) {
                Ee("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = dt, Object.defineProperty(H, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ve;
              },
              set: function(dt) {
                Ee("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ve = dt, Object.defineProperty(H, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return H;
      }
      function Ci(y) {
        y != null && y.$$typeof === ae ? Ee("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof y != "function" ? Ee("forwardRef requires a render function but was given %s.", y === null ? "null" : typeof y) : y.length !== 0 && y.length !== 2 && Ee("forwardRef render functions accept exactly two parameters: props and ref. %s", y.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), y != null && (y.defaultProps != null || y.propTypes != null) && Ee("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var _ = {
          $$typeof: pe,
          render: y
        };
        {
          var H;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(q) {
              H = q, !y.name && !y.displayName && (y.displayName = q);
            }
          });
        }
        return _;
      }
      var k;
      k = Symbol.for("react.module.reference");
      function ie(y) {
        return !!(typeof y == "string" || typeof y == "function" || y === x || y === ne || Ne || y === S || y === Q || y === ee || he || y === Ke || Ot || Et || at || typeof y == "object" && y !== null && (y.$$typeof === Oe || y.$$typeof === ae || y.$$typeof === Y || y.$$typeof === G || y.$$typeof === pe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        y.$$typeof === k || y.getModuleId !== void 0));
      }
      function be(y, _) {
        ie(y) || Ee("memo: The first argument must be a component. Instead received: %s", y === null ? "null" : typeof y);
        var H = {
          $$typeof: ae,
          type: y,
          compare: _ === void 0 ? null : _
        };
        {
          var q;
          Object.defineProperty(H, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(ve) {
              q = ve, !y.name && !y.displayName && (y.displayName = ve);
            }
          });
        }
        return H;
      }
      function je() {
        var y = Le.current;
        return y === null && Ee(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), y;
      }
      function bt(y) {
        var _ = je();
        if (y._context !== void 0) {
          var H = y._context;
          H.Consumer === y ? Ee("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : H.Provider === y && Ee("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return _.useContext(y);
      }
      function Bt(y) {
        var _ = je();
        return _.useState(y);
      }
      function wt(y, _, H) {
        var q = je();
        return q.useReducer(y, _, H);
      }
      function ut(y) {
        var _ = je();
        return _.useRef(y);
      }
      function Zn(y, _) {
        var H = je();
        return H.useEffect(y, _);
      }
      function Rn(y, _) {
        var H = je();
        return H.useInsertionEffect(y, _);
      }
      function bn(y, _) {
        var H = je();
        return H.useLayoutEffect(y, _);
      }
      function Sr(y, _) {
        var H = je();
        return H.useCallback(y, _);
      }
      function Ti(y, _) {
        var H = je();
        return H.useMemo(y, _);
      }
      function ro(y, _, H) {
        var q = je();
        return q.useImperativeHandle(y, _, H);
      }
      function qt(y, _) {
        {
          var H = je();
          return H.useDebugValue(y, _);
        }
      }
      function id() {
        var y = je();
        return y.useTransition();
      }
      function ui(y) {
        var _ = je();
        return _.useDeferredValue(y);
      }
      function Mt() {
        var y = je();
        return y.useId();
      }
      function Ri(y, _, H) {
        var q = je();
        return q.useSyncExternalStore(y, _, H);
      }
      var Cl = 0, ao, Tl, aa, cs, Ir, fs, ds;
      function hc() {
      }
      hc.__reactDisabledLog = !0;
      function io() {
        {
          if (Cl === 0) {
            ao = console.log, Tl = console.info, aa = console.warn, cs = console.error, Ir = console.group, fs = console.groupCollapsed, ds = console.groupEnd;
            var y = {
              configurable: !0,
              enumerable: !0,
              value: hc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: y,
              log: y,
              warn: y,
              error: y,
              group: y,
              groupCollapsed: y,
              groupEnd: y
            });
          }
          Cl++;
        }
      }
      function Rl() {
        {
          if (Cl--, Cl === 0) {
            var y = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: re({}, y, {
                value: ao
              }),
              info: re({}, y, {
                value: Tl
              }),
              warn: re({}, y, {
                value: aa
              }),
              error: re({}, y, {
                value: cs
              }),
              group: re({}, y, {
                value: Ir
              }),
              groupCollapsed: re({}, y, {
                value: fs
              }),
              groupEnd: re({}, y, {
                value: ds
              })
            });
          }
          Cl < 0 && Ee("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var oi = ht.ReactCurrentDispatcher, Yr;
      function bl(y, _, H) {
        {
          if (Yr === void 0)
            try {
              throw Error();
            } catch (ve) {
              var q = ve.stack.trim().match(/\n( *(at )?)/);
              Yr = q && q[1] || "";
            }
          return `
` + Yr + y;
        }
      }
      var wl = !1, xl;
      {
        var lo = typeof WeakMap == "function" ? WeakMap : Map;
        xl = new lo();
      }
      function uo(y, _) {
        if (!y || wl)
          return "";
        {
          var H = xl.get(y);
          if (H !== void 0)
            return H;
        }
        var q;
        wl = !0;
        var ve = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var dt;
        dt = oi.current, oi.current = null, io();
        try {
          if (_) {
            var De = function() {
              throw Error();
            };
            if (Object.defineProperty(De.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(De, []);
              } catch (jt) {
                q = jt;
              }
              Reflect.construct(y, [], De);
            } else {
              try {
                De.call();
              } catch (jt) {
                q = jt;
              }
              y.call(De.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (jt) {
              q = jt;
            }
            y();
          }
        } catch (jt) {
          if (jt && q && typeof jt.stack == "string") {
            for (var ct = jt.stack.split(`
`), Nt = q.stack.split(`
`), Xt = ct.length - 1, Sn = Nt.length - 1; Xt >= 1 && Sn >= 0 && ct[Xt] !== Nt[Sn]; )
              Sn--;
            for (; Xt >= 1 && Sn >= 0; Xt--, Sn--)
              if (ct[Xt] !== Nt[Sn]) {
                if (Xt !== 1 || Sn !== 1)
                  do
                    if (Xt--, Sn--, Sn < 0 || ct[Xt] !== Nt[Sn]) {
                      var pn = `
` + ct[Xt].replace(" at new ", " at ");
                      return y.displayName && pn.includes("<anonymous>") && (pn = pn.replace("<anonymous>", y.displayName)), typeof y == "function" && xl.set(y, pn), pn;
                    }
                  while (Xt >= 1 && Sn >= 0);
                break;
              }
          }
        } finally {
          wl = !1, oi.current = dt, Rl(), Error.prepareStackTrace = ve;
        }
        var En = y ? y.displayName || y.name : "", wn = En ? bl(En) : "";
        return typeof y == "function" && xl.set(y, wn), wn;
      }
      function $i(y, _, H) {
        return uo(y, !1);
      }
      function ld(y) {
        var _ = y.prototype;
        return !!(_ && _.isReactComponent);
      }
      function bi(y, _, H) {
        if (y == null)
          return "";
        if (typeof y == "function")
          return uo(y, ld(y));
        if (typeof y == "string")
          return bl(y);
        switch (y) {
          case Q:
            return bl("Suspense");
          case ee:
            return bl("SuspenseList");
        }
        if (typeof y == "object")
          switch (y.$$typeof) {
            case pe:
              return $i(y.render);
            case ae:
              return bi(y.type, _, H);
            case Oe: {
              var q = y, ve = q._payload, dt = q._init;
              try {
                return bi(dt(ve), _, H);
              } catch {
              }
            }
          }
        return "";
      }
      var Jt = {}, oo = ht.ReactDebugCurrentFrame;
      function du(y) {
        if (y) {
          var _ = y._owner, H = bi(y.type, y._source, _ ? _.type : null);
          oo.setExtraStackFrame(H);
        } else
          oo.setExtraStackFrame(null);
      }
      function so(y, _, H, q, ve) {
        {
          var dt = Function.call.bind(se);
          for (var De in y)
            if (dt(y, De)) {
              var ct = void 0;
              try {
                if (typeof y[De] != "function") {
                  var Nt = Error((q || "React class") + ": " + H + " type `" + De + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[De] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Nt.name = "Invariant Violation", Nt;
                }
                ct = y[De](_, De, q, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Xt) {
                ct = Xt;
              }
              ct && !(ct instanceof Error) && (du(ve), Ee("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", H, De, typeof ct), du(null)), ct instanceof Error && !(ct.message in Jt) && (Jt[ct.message] = !0, du(ve), Ee("Failed %s type: %s", H, ct.message), du(null));
            }
        }
      }
      function Gt(y) {
        if (y) {
          var _ = y._owner, H = bi(y.type, y._source, _ ? _.type : null);
          Ft(H);
        } else
          Ft(null);
      }
      var co;
      co = !1;
      function fo() {
        if (st.current) {
          var y = ye(st.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
      function Ct(y) {
        if (y !== void 0) {
          var _ = y.fileName.replace(/^.*[\\\/]/, ""), H = y.lineNumber;
          return `

Check your code at ` + _ + ":" + H + ".";
        }
        return "";
      }
      function pu(y) {
        return y != null ? Ct(y.__source) : "";
      }
      var Vn = {};
      function ia(y) {
        var _ = fo();
        if (!_) {
          var H = typeof y == "string" ? y : y.displayName || y.name;
          H && (_ = `

Check the top-level render call using <` + H + ">.");
        }
        return _;
      }
      function Wr(y, _) {
        if (!(!y._store || y._store.validated || y.key != null)) {
          y._store.validated = !0;
          var H = ia(_);
          if (!Vn[H]) {
            Vn[H] = !0;
            var q = "";
            y && y._owner && y._owner !== st.current && (q = " It was passed a child from " + ye(y._owner.type) + "."), Gt(y), Ee('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, q), Gt(null);
          }
        }
      }
      function _l(y, _) {
        if (typeof y == "object") {
          if (Pt(y))
            for (var H = 0; H < y.length; H++) {
              var q = y[H];
              an(q) && Wr(q, _);
            }
          else if (an(y))
            y._store && (y._store.validated = !0);
          else if (y) {
            var ve = Re(y);
            if (typeof ve == "function" && ve !== y.entries)
              for (var dt = ve.call(y), De; !(De = dt.next()).done; )
                an(De.value) && Wr(De.value, _);
          }
        }
      }
      function In(y) {
        {
          var _ = y.type;
          if (_ == null || typeof _ == "string")
            return;
          var H;
          if (typeof _ == "function")
            H = _.propTypes;
          else if (typeof _ == "object" && (_.$$typeof === pe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          _.$$typeof === ae))
            H = _.propTypes;
          else
            return;
          if (H) {
            var q = ye(_);
            so(H, y.props, "prop", q, y);
          } else if (_.PropTypes !== void 0 && !co) {
            co = !0;
            var ve = ye(_);
            Ee("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ve || "Unknown");
          }
          typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && Ee("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function on(y) {
        {
          for (var _ = Object.keys(y.props), H = 0; H < _.length; H++) {
            var q = _[H];
            if (q !== "children" && q !== "key") {
              Gt(y), Ee("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Gt(null);
              break;
            }
          }
          y.ref !== null && (Gt(y), Ee("Invalid attribute `ref` supplied to `React.Fragment`."), Gt(null));
        }
      }
      function mc(y, _, H) {
        var q = ie(y);
        if (!q) {
          var ve = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var dt = pu(_);
          dt ? ve += dt : ve += fo();
          var De;
          y === null ? De = "null" : Pt(y) ? De = "array" : y !== void 0 && y.$$typeof === C ? (De = "<" + (ye(y.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : De = typeof y, Ee("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", De, ve);
        }
        var ct = Ze.apply(this, arguments);
        if (ct == null)
          return ct;
        if (q)
          for (var Nt = 2; Nt < arguments.length; Nt++)
            _l(arguments[Nt], y);
        return y === x ? on(ct) : In(ct), ct;
      }
      var la = !1;
      function fr(y) {
        var _ = mc.bind(null, y);
        return _.type = y, la || (la = !0, rt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(_, "type", {
          enumerable: !1,
          get: function() {
            return rt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: y
            }), y;
          }
        }), _;
      }
      function wi(y, _, H) {
        for (var q = nn.apply(this, arguments), ve = 2; ve < arguments.length; ve++)
          _l(arguments[ve], q.type);
        return In(q), q;
      }
      function yc(y, _) {
        var H = Ie.transition;
        Ie.transition = {};
        var q = Ie.transition;
        Ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          y();
        } finally {
          if (Ie.transition = H, H === null && q._updatedFibers) {
            var ve = q._updatedFibers.size;
            ve > 10 && rt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var Ii = !1, kl = null;
      function gc(y) {
        if (kl === null)
          try {
            var _ = ("require" + Math.random()).slice(0, 7), H = p && p[_];
            kl = H.call(p, "timers").setImmediate;
          } catch {
            kl = function(ve) {
              Ii === !1 && (Ii = !0, typeof MessageChannel > "u" && Ee("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var dt = new MessageChannel();
              dt.port1.onmessage = ve, dt.port2.postMessage(void 0);
            };
          }
        return kl(y);
      }
      var ja = 0, Dl = !1;
      function Ol(y) {
        {
          var _ = ja;
          ja++, W.current === null && (W.current = []);
          var H = W.isBatchingLegacy, q;
          try {
            if (W.isBatchingLegacy = !0, q = y(), !H && W.didScheduleLegacyUpdate) {
              var ve = W.current;
              ve !== null && (W.didScheduleLegacyUpdate = !1, Ml(ve));
            }
          } catch (En) {
            throw Va(_), En;
          } finally {
            W.isBatchingLegacy = H;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var dt = q, De = !1, ct = {
              then: function(En, wn) {
                De = !0, dt.then(function(jt) {
                  Va(_), ja === 0 ? po(jt, En, wn) : En(jt);
                }, function(jt) {
                  Va(_), wn(jt);
                });
              }
            };
            return !Dl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              De || (Dl = !0, Ee("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ct;
          } else {
            var Nt = q;
            if (Va(_), ja === 0) {
              var Xt = W.current;
              Xt !== null && (Ml(Xt), W.current = null);
              var Sn = {
                then: function(En, wn) {
                  W.current === null ? (W.current = [], po(Nt, En, wn)) : En(Nt);
                }
              };
              return Sn;
            } else {
              var pn = {
                then: function(En, wn) {
                  En(Nt);
                }
              };
              return pn;
            }
          }
        }
      }
      function Va(y) {
        y !== ja - 1 && Ee("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ja = y;
      }
      function po(y, _, H) {
        {
          var q = W.current;
          if (q !== null)
            try {
              Ml(q), gc(function() {
                q.length === 0 ? (W.current = null, _(y)) : po(y, _, H);
              });
            } catch (ve) {
              H(ve);
            }
          else
            _(y);
        }
      }
      var Ll = !1;
      function Ml(y) {
        if (!Ll) {
          Ll = !0;
          var _ = 0;
          try {
            for (; _ < y.length; _++) {
              var H = y[_];
              do
                H = H(!0);
              while (H !== null);
            }
            y.length = 0;
          } catch (q) {
            throw y = y.slice(_ + 1), q;
          } finally {
            Ll = !1;
          }
        }
      }
      var vu = mc, vo = wi, ps = fr, si = {
        map: Fa,
        forEach: fu,
        count: Sl,
        toArray: no,
        only: Bi
      };
      E.Children = si, E.Component = de, E.Fragment = x, E.Profiler = ne, E.PureComponent = Ge, E.StrictMode = S, E.Suspense = Q, E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht, E.cloneElement = vo, E.createContext = El, E.createElement = vu, E.createFactory = ps, E.createRef = Qt, E.forwardRef = Ci, E.isValidElement = an, E.lazy = Ra, E.memo = be, E.startTransition = yc, E.unstable_act = Ol, E.useCallback = Sr, E.useContext = bt, E.useDebugValue = qt, E.useDeferredValue = ui, E.useEffect = Zn, E.useId = Mt, E.useImperativeHandle = ro, E.useInsertionEffect = Rn, E.useLayoutEffect = bn, E.useMemo = Ti, E.useReducer = wt, E.useRef = ut, E.useState = Bt, E.useSyncExternalStore = Ri, E.useTransition = id, E.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(yv, yv.exports)), yv.exports;
}
process.env.NODE_ENV === "production" ? KE.exports = OD() : KE.exports = LD();
var Vt = KE.exports;
const xn = /* @__PURE__ */ l0(Vt), MD = (p) => "href" in p, OO = Vt.forwardRef(
  function(E, m) {
    const C = ii("Tui-Button", E.className);
    return MD(E) ? Vt.createElement("a", { ...E, ref: m, className: C }, E.children) : Vt.createElement(
      "button",
      { ...E, ref: m, className: C },
      E.children
    );
  }
);
var ZE = { exports: {} }, vv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function ND() {
  if (JR)
    return vv;
  JR = 1;
  var p = Vt, E = Symbol.for("react.element"), m = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, D = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(ne, Y, G) {
    var pe, Q = {}, ee = null, ae = null;
    G !== void 0 && (ee = "" + G), Y.key !== void 0 && (ee = "" + Y.key), Y.ref !== void 0 && (ae = Y.ref);
    for (pe in Y)
      C.call(Y, pe) && !x.hasOwnProperty(pe) && (Q[pe] = Y[pe]);
    if (ne && ne.defaultProps)
      for (pe in Y = ne.defaultProps, Y)
        Q[pe] === void 0 && (Q[pe] = Y[pe]);
    return { $$typeof: E, type: ne, key: ee, ref: ae, props: Q, _owner: D.current };
  }
  return vv.Fragment = m, vv.jsx = S, vv.jsxs = S, vv;
}
var hv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e1;
function AD() {
  return e1 || (e1 = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Vt, E = Symbol.for("react.element"), m = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), ne = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), Oe = Symbol.iterator, Ke = "@@iterator";
    function et(k) {
      if (k === null || typeof k != "object")
        return null;
      var ie = Oe && k[Oe] || k[Ke];
      return typeof ie == "function" ? ie : null;
    }
    var Dt = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Re(k) {
      {
        for (var ie = arguments.length, be = new Array(ie > 1 ? ie - 1 : 0), je = 1; je < ie; je++)
          be[je - 1] = arguments[je];
        Le("error", k, be);
      }
    }
    function Le(k, ie, be) {
      {
        var je = Dt.ReactDebugCurrentFrame, bt = je.getStackAddendum();
        bt !== "" && (ie += "%s", be = be.concat([bt]));
        var Bt = be.map(function(wt) {
          return String(wt);
        });
        Bt.unshift("Warning: " + ie), Function.prototype.apply.call(console[k], console, Bt);
      }
    }
    var Ie = !1, W = !1, st = !1, tt = !1, Kt = !1, Ft;
    Ft = Symbol.for("react.module.reference");
    function Ot(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === C || k === x || Kt || k === D || k === G || k === pe || tt || k === ae || Ie || W || st || typeof k == "object" && k !== null && (k.$$typeof === ee || k.$$typeof === Q || k.$$typeof === S || k.$$typeof === ne || k.$$typeof === Y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === Ft || k.getModuleId !== void 0));
    }
    function Et(k, ie, be) {
      var je = k.displayName;
      if (je)
        return je;
      var bt = ie.displayName || ie.name || "";
      return bt !== "" ? be + "(" + bt + ")" : be;
    }
    function at(k) {
      return k.displayName || "Context";
    }
    function he(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case C:
          return "Fragment";
        case m:
          return "Portal";
        case x:
          return "Profiler";
        case D:
          return "StrictMode";
        case G:
          return "Suspense";
        case pe:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case ne:
            var ie = k;
            return at(ie) + ".Consumer";
          case S:
            var be = k;
            return at(be._context) + ".Provider";
          case Y:
            return Et(k, k.render, "ForwardRef");
          case Q:
            var je = k.displayName || null;
            return je !== null ? je : he(k.type) || "Memo";
          case ee: {
            var bt = k, Bt = bt._payload, wt = bt._init;
            try {
              return he(wt(Bt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ne = Object.assign, ht = 0, rt, Ee, oe, He, R, z, re;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function de() {
      {
        if (ht === 0) {
          rt = console.log, Ee = console.info, oe = console.warn, He = console.error, R = console.group, z = console.groupCollapsed, re = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        ht++;
      }
    }
    function ze() {
      {
        if (ht--, ht === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ne({}, k, {
              value: rt
            }),
            info: Ne({}, k, {
              value: Ee
            }),
            warn: Ne({}, k, {
              value: oe
            }),
            error: Ne({}, k, {
              value: He
            }),
            group: Ne({}, k, {
              value: R
            }),
            groupCollapsed: Ne({}, k, {
              value: z
            }),
            groupEnd: Ne({}, k, {
              value: re
            })
          });
        }
        ht < 0 && Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = Dt.ReactCurrentDispatcher, we;
    function ke(k, ie, be) {
      {
        if (we === void 0)
          try {
            throw Error();
          } catch (bt) {
            var je = bt.stack.trim().match(/\n( *(at )?)/);
            we = je && je[1] || "";
          }
        return `
` + we + k;
      }
    }
    var Ge = !1, mt;
    {
      var Qt = typeof WeakMap == "function" ? WeakMap : Map;
      mt = new Qt();
    }
    function Se(k, ie) {
      if (!k || Ge)
        return "";
      {
        var be = mt.get(k);
        if (be !== void 0)
          return be;
      }
      var je;
      Ge = !0;
      var bt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Bt;
      Bt = Ce.current, Ce.current = null, de();
      try {
        if (ie) {
          var wt = function() {
            throw Error();
          };
          if (Object.defineProperty(wt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(wt, []);
            } catch (qt) {
              je = qt;
            }
            Reflect.construct(k, [], wt);
          } else {
            try {
              wt.call();
            } catch (qt) {
              je = qt;
            }
            k.call(wt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qt) {
            je = qt;
          }
          k();
        }
      } catch (qt) {
        if (qt && je && typeof qt.stack == "string") {
          for (var ut = qt.stack.split(`
`), Zn = je.stack.split(`
`), Rn = ut.length - 1, bn = Zn.length - 1; Rn >= 1 && bn >= 0 && ut[Rn] !== Zn[bn]; )
            bn--;
          for (; Rn >= 1 && bn >= 0; Rn--, bn--)
            if (ut[Rn] !== Zn[bn]) {
              if (Rn !== 1 || bn !== 1)
                do
                  if (Rn--, bn--, bn < 0 || ut[Rn] !== Zn[bn]) {
                    var Sr = `
` + ut[Rn].replace(" at new ", " at ");
                    return k.displayName && Sr.includes("<anonymous>") && (Sr = Sr.replace("<anonymous>", k.displayName)), typeof k == "function" && mt.set(k, Sr), Sr;
                  }
                while (Rn >= 1 && bn >= 0);
              break;
            }
        }
      } finally {
        Ge = !1, Ce.current = Bt, ze(), Error.prepareStackTrace = bt;
      }
      var Ti = k ? k.displayName || k.name : "", ro = Ti ? ke(Ti) : "";
      return typeof k == "function" && mt.set(k, ro), ro;
    }
    function Pt(k, ie, be) {
      return Se(k, !1);
    }
    function Mn(k) {
      var ie = k.prototype;
      return !!(ie && ie.isReactComponent);
    }
    function Fn(k, ie, be) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return Se(k, Mn(k));
      if (typeof k == "string")
        return ke(k);
      switch (k) {
        case G:
          return ke("Suspense");
        case pe:
          return ke("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case Y:
            return Pt(k.render);
          case Q:
            return Fn(k.type, ie, be);
          case ee: {
            var je = k, bt = je._payload, Bt = je._init;
            try {
              return Fn(Bt(bt), ie, be);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, I = {}, Z = Dt.ReactDebugCurrentFrame;
    function Me(k) {
      if (k) {
        var ie = k._owner, be = Fn(k.type, k._source, ie ? ie.type : null);
        Z.setExtraStackFrame(be);
      } else
        Z.setExtraStackFrame(null);
    }
    function ye(k, ie, be, je, bt) {
      {
        var Bt = Function.call.bind(L);
        for (var wt in k)
          if (Bt(k, wt)) {
            var ut = void 0;
            try {
              if (typeof k[wt] != "function") {
                var Zn = Error((je || "React class") + ": " + be + " type `" + wt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[wt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Zn.name = "Invariant Violation", Zn;
              }
              ut = k[wt](ie, wt, je, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Rn) {
              ut = Rn;
            }
            ut && !(ut instanceof Error) && (Me(bt), Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", je || "React class", be, wt, typeof ut), Me(null)), ut instanceof Error && !(ut.message in I) && (I[ut.message] = !0, Me(bt), Re("Failed %s type: %s", be, ut.message), Me(null));
          }
      }
    }
    var se = Array.isArray;
    function $e(k) {
      return se(k);
    }
    function Lt(k) {
      {
        var ie = typeof Symbol == "function" && Symbol.toStringTag, be = ie && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return be;
      }
    }
    function Ht(k) {
      try {
        return Nn(k), !1;
      } catch {
        return !0;
      }
    }
    function Nn(k) {
      return "" + k;
    }
    function Mr(k) {
      if (Ht(k))
        return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lt(k)), Nn(k);
    }
    var gn = Dt.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ua, Nr, Te;
    Te = {};
    function Ze(k) {
      if (L.call(k, "ref")) {
        var ie = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function kt(k) {
      if (L.call(k, "key")) {
        var ie = Object.getOwnPropertyDescriptor(k, "key").get;
        if (ie && ie.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function nn(k, ie) {
      if (typeof k.ref == "string" && gn.current && ie && gn.current.stateNode !== ie) {
        var be = he(gn.current.type);
        Te[be] || (Re('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', he(gn.current.type), k.ref), Te[be] = !0);
      }
    }
    function an(k, ie) {
      {
        var be = function() {
          Ua || (Ua = !0, Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        be.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function qn(k, ie) {
      {
        var be = function() {
          Nr || (Nr = !0, Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ie));
        };
        be.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var jn = function(k, ie, be, je, bt, Bt, wt) {
      var ut = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: k,
        key: ie,
        ref: be,
        props: wt,
        // Record the component responsible for creating this element.
        _owner: Bt
      };
      return ut._store = {}, Object.defineProperty(ut._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ut, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.defineProperty(ut, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: bt
      }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
    };
    function Ar(k, ie, be, je, bt) {
      {
        var Bt, wt = {}, ut = null, Zn = null;
        be !== void 0 && (Mr(be), ut = "" + be), kt(ie) && (Mr(ie.key), ut = "" + ie.key), Ze(ie) && (Zn = ie.ref, nn(ie, bt));
        for (Bt in ie)
          L.call(ie, Bt) && !rr.hasOwnProperty(Bt) && (wt[Bt] = ie[Bt]);
        if (k && k.defaultProps) {
          var Rn = k.defaultProps;
          for (Bt in Rn)
            wt[Bt] === void 0 && (wt[Bt] = Rn[Bt]);
        }
        if (ut || Zn) {
          var bn = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          ut && an(wt, bn), Zn && qn(wt, bn);
        }
        return jn(k, ut, Zn, bt, je, gn.current, wt);
      }
    }
    var dn = Dt.ReactCurrentOwner, Br = Dt.ReactDebugCurrentFrame;
    function ln(k) {
      if (k) {
        var ie = k._owner, be = Fn(k.type, k._source, ie ? ie.type : null);
        Br.setExtraStackFrame(be);
      } else
        Br.setExtraStackFrame(null);
    }
    var un;
    un = !1;
    function li(k) {
      return typeof k == "object" && k !== null && k.$$typeof === E;
    }
    function Fa() {
      {
        if (dn.current) {
          var k = he(dn.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Sl(k) {
      {
        if (k !== void 0) {
          var ie = k.fileName.replace(/^.*[\\\/]/, ""), be = k.lineNumber;
          return `

Check your code at ` + ie + ":" + be + ".";
        }
        return "";
      }
    }
    var fu = {};
    function no(k) {
      {
        var ie = Fa();
        if (!ie) {
          var be = typeof k == "string" ? k : k.displayName || k.name;
          be && (ie = `

Check the top-level render call using <` + be + ">.");
        }
        return ie;
      }
    }
    function Bi(k, ie) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var be = no(ie);
        if (fu[be])
          return;
        fu[be] = !0;
        var je = "";
        k && k._owner && k._owner !== dn.current && (je = " It was passed a child from " + he(k._owner.type) + "."), ln(k), Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, je), ln(null);
      }
    }
    function El(k, ie) {
      {
        if (typeof k != "object")
          return;
        if ($e(k))
          for (var be = 0; be < k.length; be++) {
            var je = k[be];
            li(je) && Bi(je, ie);
          }
        else if (li(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var bt = et(k);
          if (typeof bt == "function" && bt !== k.entries)
            for (var Bt = bt.call(k), wt; !(wt = Bt.next()).done; )
              li(wt.value) && Bi(wt.value, ie);
        }
      }
    }
    function Ca(k) {
      {
        var ie = k.type;
        if (ie == null || typeof ie == "string")
          return;
        var be;
        if (typeof ie == "function")
          be = ie.propTypes;
        else if (typeof ie == "object" && (ie.$$typeof === Y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ie.$$typeof === Q))
          be = ie.propTypes;
        else
          return;
        if (be) {
          var je = he(ie);
          ye(be, k.props, "prop", je, k);
        } else if (ie.PropTypes !== void 0 && !un) {
          un = !0;
          var bt = he(ie);
          Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", bt || "Unknown");
        }
        typeof ie.getDefaultProps == "function" && !ie.getDefaultProps.isReactClassApproved && Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Si(k) {
      {
        for (var ie = Object.keys(k.props), be = 0; be < ie.length; be++) {
          var je = ie[be];
          if (je !== "children" && je !== "key") {
            ln(k), Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", je), ln(null);
            break;
          }
        }
        k.ref !== null && (ln(k), Re("Invalid attribute `ref` supplied to `React.Fragment`."), ln(null));
      }
    }
    function Ta(k, ie, be, je, bt, Bt) {
      {
        var wt = Ot(k);
        if (!wt) {
          var ut = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (ut += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Zn = Sl(bt);
          Zn ? ut += Zn : ut += Fa();
          var Rn;
          k === null ? Rn = "null" : $e(k) ? Rn = "array" : k !== void 0 && k.$$typeof === E ? (Rn = "<" + (he(k.type) || "Unknown") + " />", ut = " Did you accidentally export a JSX literal instead of a component?") : Rn = typeof k, Re("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Rn, ut);
        }
        var bn = Ar(k, ie, be, bt, Bt);
        if (bn == null)
          return bn;
        if (wt) {
          var Sr = ie.children;
          if (Sr !== void 0)
            if (je)
              if ($e(Sr)) {
                for (var Ti = 0; Ti < Sr.length; Ti++)
                  El(Sr[Ti], k);
                Object.freeze && Object.freeze(Sr);
              } else
                Re("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              El(Sr, k);
        }
        return k === C ? Si(bn) : Ca(bn), bn;
      }
    }
    function Ei(k, ie, be) {
      return Ta(k, ie, be, !0);
    }
    function $r(k, ie, be) {
      return Ta(k, ie, be, !1);
    }
    var Ra = $r, Ci = Ei;
    hv.Fragment = C, hv.jsx = Ra, hv.jsxs = Ci;
  }()), hv;
}
process.env.NODE_ENV === "production" ? ZE.exports = ND() : ZE.exports = AD();
var fn = ZE.exports;
function zD(p, E) {
  Vt.useEffect(() => {
    const m = (C) => {
      p.includes(C.code) && E(C);
    };
    return document.addEventListener("keydown", m), () => {
      document.removeEventListener("keydown", m);
    };
  }, [E, p]);
}
var JE = { exports: {} }, ri = {}, iy = { exports: {} }, VE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1;
function UD() {
  return t1 || (t1 = 1, function(p) {
    function E(oe, He) {
      var R = oe.length;
      oe.push(He);
      e:
        for (; 0 < R; ) {
          var z = R - 1 >>> 1, re = oe[z];
          if (0 < D(re, He))
            oe[z] = He, oe[R] = re, R = z;
          else
            break e;
        }
    }
    function m(oe) {
      return oe.length === 0 ? null : oe[0];
    }
    function C(oe) {
      if (oe.length === 0)
        return null;
      var He = oe[0], R = oe.pop();
      if (R !== He) {
        oe[0] = R;
        e:
          for (var z = 0, re = oe.length, ge = re >>> 1; z < ge; ) {
            var de = 2 * (z + 1) - 1, ze = oe[de], Ce = de + 1, we = oe[Ce];
            if (0 > D(ze, R))
              Ce < re && 0 > D(we, ze) ? (oe[z] = we, oe[Ce] = R, z = Ce) : (oe[z] = ze, oe[de] = R, z = de);
            else if (Ce < re && 0 > D(we, R))
              oe[z] = we, oe[Ce] = R, z = Ce;
            else
              break e;
          }
      }
      return He;
    }
    function D(oe, He) {
      var R = oe.sortIndex - He.sortIndex;
      return R !== 0 ? R : oe.id - He.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      p.unstable_now = function() {
        return x.now();
      };
    } else {
      var S = Date, ne = S.now();
      p.unstable_now = function() {
        return S.now() - ne;
      };
    }
    var Y = [], G = [], pe = 1, Q = null, ee = 3, ae = !1, Oe = !1, Ke = !1, et = typeof setTimeout == "function" ? setTimeout : null, Dt = typeof clearTimeout == "function" ? clearTimeout : null, Re = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Le(oe) {
      for (var He = m(G); He !== null; ) {
        if (He.callback === null)
          C(G);
        else if (He.startTime <= oe)
          C(G), He.sortIndex = He.expirationTime, E(Y, He);
        else
          break;
        He = m(G);
      }
    }
    function Ie(oe) {
      if (Ke = !1, Le(oe), !Oe)
        if (m(Y) !== null)
          Oe = !0, rt(W);
        else {
          var He = m(G);
          He !== null && Ee(Ie, He.startTime - oe);
        }
    }
    function W(oe, He) {
      Oe = !1, Ke && (Ke = !1, Dt(Kt), Kt = -1), ae = !0;
      var R = ee;
      try {
        for (Le(He), Q = m(Y); Q !== null && (!(Q.expirationTime > He) || oe && !Et()); ) {
          var z = Q.callback;
          if (typeof z == "function") {
            Q.callback = null, ee = Q.priorityLevel;
            var re = z(Q.expirationTime <= He);
            He = p.unstable_now(), typeof re == "function" ? Q.callback = re : Q === m(Y) && C(Y), Le(He);
          } else
            C(Y);
          Q = m(Y);
        }
        if (Q !== null)
          var ge = !0;
        else {
          var de = m(G);
          de !== null && Ee(Ie, de.startTime - He), ge = !1;
        }
        return ge;
      } finally {
        Q = null, ee = R, ae = !1;
      }
    }
    var st = !1, tt = null, Kt = -1, Ft = 5, Ot = -1;
    function Et() {
      return !(p.unstable_now() - Ot < Ft);
    }
    function at() {
      if (tt !== null) {
        var oe = p.unstable_now();
        Ot = oe;
        var He = !0;
        try {
          He = tt(!0, oe);
        } finally {
          He ? he() : (st = !1, tt = null);
        }
      } else
        st = !1;
    }
    var he;
    if (typeof Re == "function")
      he = function() {
        Re(at);
      };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), ht = Ne.port2;
      Ne.port1.onmessage = at, he = function() {
        ht.postMessage(null);
      };
    } else
      he = function() {
        et(at, 0);
      };
    function rt(oe) {
      tt = oe, st || (st = !0, he());
    }
    function Ee(oe, He) {
      Kt = et(function() {
        oe(p.unstable_now());
      }, He);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(oe) {
      oe.callback = null;
    }, p.unstable_continueExecution = function() {
      Oe || ae || (Oe = !0, rt(W));
    }, p.unstable_forceFrameRate = function(oe) {
      0 > oe || 125 < oe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ft = 0 < oe ? Math.floor(1e3 / oe) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return ee;
    }, p.unstable_getFirstCallbackNode = function() {
      return m(Y);
    }, p.unstable_next = function(oe) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
          var He = 3;
          break;
        default:
          He = ee;
      }
      var R = ee;
      ee = He;
      try {
        return oe();
      } finally {
        ee = R;
      }
    }, p.unstable_pauseExecution = function() {
    }, p.unstable_requestPaint = function() {
    }, p.unstable_runWithPriority = function(oe, He) {
      switch (oe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          oe = 3;
      }
      var R = ee;
      ee = oe;
      try {
        return He();
      } finally {
        ee = R;
      }
    }, p.unstable_scheduleCallback = function(oe, He, R) {
      var z = p.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? z + R : z) : R = z, oe) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = R + re, oe = { id: pe++, callback: He, priorityLevel: oe, startTime: R, expirationTime: re, sortIndex: -1 }, R > z ? (oe.sortIndex = R, E(G, oe), m(Y) === null && oe === m(G) && (Ke ? (Dt(Kt), Kt = -1) : Ke = !0, Ee(Ie, R - z))) : (oe.sortIndex = re, E(Y, oe), Oe || ae || (Oe = !0, rt(W))), oe;
    }, p.unstable_shouldYield = Et, p.unstable_wrapCallback = function(oe) {
      var He = ee;
      return function() {
        var R = ee;
        ee = He;
        try {
          return oe.apply(this, arguments);
        } finally {
          ee = R;
        }
      };
    };
  }(VE)), VE;
}
var PE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n1;
function FD() {
  return n1 || (n1 = 1, function(p) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = !1, m = !1, C = 5;
      function D(Te, Ze) {
        var kt = Te.length;
        Te.push(Ze), ne(Te, Ze, kt);
      }
      function x(Te) {
        return Te.length === 0 ? null : Te[0];
      }
      function S(Te) {
        if (Te.length === 0)
          return null;
        var Ze = Te[0], kt = Te.pop();
        return kt !== Ze && (Te[0] = kt, Y(Te, kt, 0)), Ze;
      }
      function ne(Te, Ze, kt) {
        for (var nn = kt; nn > 0; ) {
          var an = nn - 1 >>> 1, qn = Te[an];
          if (G(qn, Ze) > 0)
            Te[an] = Ze, Te[nn] = qn, nn = an;
          else
            return;
        }
      }
      function Y(Te, Ze, kt) {
        for (var nn = kt, an = Te.length, qn = an >>> 1; nn < qn; ) {
          var jn = (nn + 1) * 2 - 1, Ar = Te[jn], dn = jn + 1, Br = Te[dn];
          if (G(Ar, Ze) < 0)
            dn < an && G(Br, Ar) < 0 ? (Te[nn] = Br, Te[dn] = Ze, nn = dn) : (Te[nn] = Ar, Te[jn] = Ze, nn = jn);
          else if (dn < an && G(Br, Ze) < 0)
            Te[nn] = Br, Te[dn] = Ze, nn = dn;
          else
            return;
        }
      }
      function G(Te, Ze) {
        var kt = Te.sortIndex - Ze.sortIndex;
        return kt !== 0 ? kt : Te.id - Ze.id;
      }
      var pe = 1, Q = 2, ee = 3, ae = 4, Oe = 5;
      function Ke(Te, Ze) {
      }
      var et = typeof performance == "object" && typeof performance.now == "function";
      if (et) {
        var Dt = performance;
        p.unstable_now = function() {
          return Dt.now();
        };
      } else {
        var Re = Date, Le = Re.now();
        p.unstable_now = function() {
          return Re.now() - Le;
        };
      }
      var Ie = 1073741823, W = -1, st = 250, tt = 5e3, Kt = 1e4, Ft = Ie, Ot = [], Et = [], at = 1, he = null, Ne = ee, ht = !1, rt = !1, Ee = !1, oe = typeof setTimeout == "function" ? setTimeout : null, He = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function z(Te) {
        for (var Ze = x(Et); Ze !== null; ) {
          if (Ze.callback === null)
            S(Et);
          else if (Ze.startTime <= Te)
            S(Et), Ze.sortIndex = Ze.expirationTime, D(Ot, Ze);
          else
            return;
          Ze = x(Et);
        }
      }
      function re(Te) {
        if (Ee = !1, z(Te), !rt)
          if (x(Ot) !== null)
            rt = !0, Mr(ge);
          else {
            var Ze = x(Et);
            Ze !== null && gn(re, Ze.startTime - Te);
          }
      }
      function ge(Te, Ze) {
        rt = !1, Ee && (Ee = !1, rr()), ht = !0;
        var kt = Ne;
        try {
          var nn;
          if (!m)
            return de(Te, Ze);
        } finally {
          he = null, Ne = kt, ht = !1;
        }
      }
      function de(Te, Ze) {
        var kt = Ze;
        for (z(kt), he = x(Ot); he !== null && !E && !(he.expirationTime > kt && (!Te || Me())); ) {
          var nn = he.callback;
          if (typeof nn == "function") {
            he.callback = null, Ne = he.priorityLevel;
            var an = he.expirationTime <= kt, qn = nn(an);
            kt = p.unstable_now(), typeof qn == "function" ? he.callback = qn : he === x(Ot) && S(Ot), z(kt);
          } else
            S(Ot);
          he = x(Ot);
        }
        if (he !== null)
          return !0;
        var jn = x(Et);
        return jn !== null && gn(re, jn.startTime - kt), !1;
      }
      function ze(Te, Ze) {
        switch (Te) {
          case pe:
          case Q:
          case ee:
          case ae:
          case Oe:
            break;
          default:
            Te = ee;
        }
        var kt = Ne;
        Ne = Te;
        try {
          return Ze();
        } finally {
          Ne = kt;
        }
      }
      function Ce(Te) {
        var Ze;
        switch (Ne) {
          case pe:
          case Q:
          case ee:
            Ze = ee;
            break;
          default:
            Ze = Ne;
            break;
        }
        var kt = Ne;
        Ne = Ze;
        try {
          return Te();
        } finally {
          Ne = kt;
        }
      }
      function we(Te) {
        var Ze = Ne;
        return function() {
          var kt = Ne;
          Ne = Ze;
          try {
            return Te.apply(this, arguments);
          } finally {
            Ne = kt;
          }
        };
      }
      function ke(Te, Ze, kt) {
        var nn = p.unstable_now(), an;
        if (typeof kt == "object" && kt !== null) {
          var qn = kt.delay;
          typeof qn == "number" && qn > 0 ? an = nn + qn : an = nn;
        } else
          an = nn;
        var jn;
        switch (Te) {
          case pe:
            jn = W;
            break;
          case Q:
            jn = st;
            break;
          case Oe:
            jn = Ft;
            break;
          case ae:
            jn = Kt;
            break;
          case ee:
          default:
            jn = tt;
            break;
        }
        var Ar = an + jn, dn = {
          id: at++,
          callback: Ze,
          priorityLevel: Te,
          startTime: an,
          expirationTime: Ar,
          sortIndex: -1
        };
        return an > nn ? (dn.sortIndex = an, D(Et, dn), x(Ot) === null && dn === x(Et) && (Ee ? rr() : Ee = !0, gn(re, an - nn))) : (dn.sortIndex = Ar, D(Ot, dn), !rt && !ht && (rt = !0, Mr(ge))), dn;
      }
      function Ge() {
      }
      function mt() {
        !rt && !ht && (rt = !0, Mr(ge));
      }
      function Qt() {
        return x(Ot);
      }
      function Se(Te) {
        Te.callback = null;
      }
      function Pt() {
        return Ne;
      }
      var Mn = !1, Fn = null, L = -1, I = C, Z = -1;
      function Me() {
        var Te = p.unstable_now() - Z;
        return !(Te < I);
      }
      function ye() {
      }
      function se(Te) {
        if (Te < 0 || Te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Te > 0 ? I = Math.floor(1e3 / Te) : I = C;
      }
      var $e = function() {
        if (Fn !== null) {
          var Te = p.unstable_now();
          Z = Te;
          var Ze = !0, kt = !0;
          try {
            kt = Fn(Ze, Te);
          } finally {
            kt ? Lt() : (Mn = !1, Fn = null);
          }
        } else
          Mn = !1;
      }, Lt;
      if (typeof R == "function")
        Lt = function() {
          R($e);
        };
      else if (typeof MessageChannel < "u") {
        var Ht = new MessageChannel(), Nn = Ht.port2;
        Ht.port1.onmessage = $e, Lt = function() {
          Nn.postMessage(null);
        };
      } else
        Lt = function() {
          oe($e, 0);
        };
      function Mr(Te) {
        Fn = Te, Mn || (Mn = !0, Lt());
      }
      function gn(Te, Ze) {
        L = oe(function() {
          Te(p.unstable_now());
        }, Ze);
      }
      function rr() {
        He(L), L = -1;
      }
      var Ua = ye, Nr = null;
      p.unstable_IdlePriority = Oe, p.unstable_ImmediatePriority = pe, p.unstable_LowPriority = ae, p.unstable_NormalPriority = ee, p.unstable_Profiling = Nr, p.unstable_UserBlockingPriority = Q, p.unstable_cancelCallback = Se, p.unstable_continueExecution = mt, p.unstable_forceFrameRate = se, p.unstable_getCurrentPriorityLevel = Pt, p.unstable_getFirstCallbackNode = Qt, p.unstable_next = Ce, p.unstable_pauseExecution = Ge, p.unstable_requestPaint = Ua, p.unstable_runWithPriority = ze, p.unstable_scheduleCallback = ke, p.unstable_shouldYield = Me, p.unstable_wrapCallback = we, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(PE)), PE;
}
var r1;
function b1() {
  return r1 || (r1 = 1, process.env.NODE_ENV === "production" ? iy.exports = UD() : iy.exports = FD()), iy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a1;
function jD() {
  if (a1)
    return ri;
  a1 = 1;
  var p = Vt, E = b1();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), D = {};
  function x(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (D[n] = r, n = 0; n < r.length; n++)
      C.add(r[n]);
  }
  var ne = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Y = Object.prototype.hasOwnProperty, G = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, Q = {};
  function ee(n) {
    return Y.call(Q, n) ? !0 : Y.call(pe, n) ? !1 : G.test(n) ? Q[n] = !0 : (pe[n] = !0, !1);
  }
  function ae(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Oe(n, r, l, o) {
    if (r === null || typeof r > "u" || ae(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Ke(n, r, l, o, c, d, g) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = g;
  }
  var et = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    et[n] = new Ke(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    et[r] = new Ke(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    et[n] = new Ke(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    et[n] = new Ke(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    et[n] = new Ke(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    et[n] = new Ke(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    et[n] = new Ke(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    et[n] = new Ke(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    et[n] = new Ke(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Dt = /[\-:]([a-z])/g;
  function Re(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Dt,
      Re
    );
    et[r] = new Ke(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Dt, Re);
    et[r] = new Ke(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Dt, Re);
    et[r] = new Ke(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    et[n] = new Ke(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), et.xlinkHref = new Ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    et[n] = new Ke(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Le(n, r, l, o) {
    var c = et.hasOwnProperty(r) ? et[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Oe(r, l, c, o) && (l = null), o || c === null ? ee(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ie = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), st = Symbol.for("react.portal"), tt = Symbol.for("react.fragment"), Kt = Symbol.for("react.strict_mode"), Ft = Symbol.for("react.profiler"), Ot = Symbol.for("react.provider"), Et = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), oe = Symbol.iterator;
  function He(n) {
    return n === null || typeof n != "object" ? null : (n = oe && n[oe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var R = Object.assign, z;
  function re(n) {
    if (z === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        z = r && r[1] || "";
      }
    return `
` + z + n;
  }
  var ge = !1;
  function de(n, r) {
    if (!n || ge)
      return "";
    ge = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch ($) {
            var o = $;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch ($) {
            o = $;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch ($) {
          o = $;
        }
        n();
      }
    } catch ($) {
      if ($ && o && typeof $.stack == "string") {
        for (var c = $.stack.split(`
`), d = o.stack.split(`
`), g = c.length - 1, w = d.length - 1; 1 <= g && 0 <= w && c[g] !== d[w]; )
          w--;
        for (; 1 <= g && 0 <= w; g--, w--)
          if (c[g] !== d[w]) {
            if (g !== 1 || w !== 1)
              do
                if (g--, w--, 0 > w || c[g] !== d[w]) {
                  var O = `
` + c[g].replace(" at new ", " at ");
                  return n.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", n.displayName)), O;
                }
              while (1 <= g && 0 <= w);
            break;
          }
      }
    } finally {
      ge = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? re(n) : "";
  }
  function ze(n) {
    switch (n.tag) {
      case 5:
        return re(n.type);
      case 16:
        return re("Lazy");
      case 13:
        return re("Suspense");
      case 19:
        return re("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = de(n.type, !1), n;
      case 11:
        return n = de(n.type.render, !1), n;
      case 1:
        return n = de(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ce(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case tt:
        return "Fragment";
      case st:
        return "Portal";
      case Ft:
        return "Profiler";
      case Kt:
        return "StrictMode";
      case he:
        return "Suspense";
      case Ne:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Et:
          return (n.displayName || "Context") + ".Consumer";
        case Ot:
          return (n._context.displayName || "Context") + ".Provider";
        case at:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case ht:
          return r = n.displayName || null, r !== null ? r : Ce(n.type) || "Memo";
        case rt:
          r = n._payload, n = n._init;
          try {
            return Ce(n(r));
          } catch {
          }
      }
    return null;
  }
  function we(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ce(r);
      case 8:
        return r === Kt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function ke(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ge(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function mt(n) {
    var r = Ge(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(g) {
        o = "" + g, d.call(this, g);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(g) {
        o = "" + g;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Qt(n) {
    n._valueTracker || (n._valueTracker = mt(n));
  }
  function Se(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = Ge(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Pt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Mn(n, r) {
    var l = r.checked;
    return R({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Fn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ke(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function L(n, r) {
    r = r.checked, r != null && Le(n, "checked", r, !1);
  }
  function I(n, r) {
    L(n, r);
    var l = ke(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Me(n, r.type, l) : r.hasOwnProperty("defaultValue") && Me(n, r.type, ke(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Z(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Me(n, r, l) {
    (r !== "number" || Pt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ye = Array.isArray;
  function se(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ke(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $e(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return R({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Lt(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(m(92));
        if (ye(l)) {
          if (1 < l.length)
            throw Error(m(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ke(l) };
  }
  function Ht(n, r) {
    var l = ke(r.value), o = ke(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Nn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Mr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Mr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var rr, Ua = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (rr = rr || document.createElement("div"), rr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = rr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Nr(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Te = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ze = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Te).forEach(function(n) {
    Ze.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Te[r] = Te[n];
    });
  });
  function kt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Te.hasOwnProperty(n) && Te[n] ? ("" + r).trim() : r + "px";
  }
  function nn(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = kt(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var an = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function qn(n, r) {
    if (r) {
      if (an[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(m(62));
    }
  }
  function jn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ar = null;
  function dn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Br = null, ln = null, un = null;
  function li(n) {
    if (n = _s(n)) {
      if (typeof Br != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = lt(r), Br(n.stateNode, n.type, r));
    }
  }
  function Fa(n) {
    ln ? un ? un.push(n) : un = [n] : ln = n;
  }
  function Sl() {
    if (ln) {
      var n = ln, r = un;
      if (un = ln = null, li(n), r)
        for (n = 0; n < r.length; n++)
          li(r[n]);
    }
  }
  function fu(n, r) {
    return n(r);
  }
  function no() {
  }
  var Bi = !1;
  function El(n, r, l) {
    if (Bi)
      return n(r, l);
    Bi = !0;
    try {
      return fu(n, r, l);
    } finally {
      Bi = !1, (ln !== null || un !== null) && (no(), Sl());
    }
  }
  function Ca(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = lt(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(m(231, r, typeof l));
    return l;
  }
  var Si = !1;
  if (ne)
    try {
      var Ta = {};
      Object.defineProperty(Ta, "passive", { get: function() {
        Si = !0;
      } }), window.addEventListener("test", Ta, Ta), window.removeEventListener("test", Ta, Ta);
    } catch {
      Si = !1;
    }
  function Ei(n, r, l, o, c, d, g, w, O) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, $);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var $r = !1, Ra = null, Ci = !1, k = null, ie = { onError: function(n) {
    $r = !0, Ra = n;
  } };
  function be(n, r, l, o, c, d, g, w, O) {
    $r = !1, Ra = null, Ei.apply(ie, arguments);
  }
  function je(n, r, l, o, c, d, g, w, O) {
    if (be.apply(this, arguments), $r) {
      if ($r) {
        var $ = Ra;
        $r = !1, Ra = null;
      } else
        throw Error(m(198));
      Ci || (Ci = !0, k = $);
    }
  }
  function bt(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Bt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function wt(n) {
    if (bt(n) !== n)
      throw Error(m(188));
  }
  function ut(n) {
    var r = n.alternate;
    if (!r) {
      if (r = bt(n), r === null)
        throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return wt(c), n;
          if (d === o)
            return wt(c), r;
          d = d.sibling;
        }
        throw Error(m(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var g = !1, w = c.child; w; ) {
          if (w === l) {
            g = !0, l = c, o = d;
            break;
          }
          if (w === o) {
            g = !0, o = c, l = d;
            break;
          }
          w = w.sibling;
        }
        if (!g) {
          for (w = d.child; w; ) {
            if (w === l) {
              g = !0, l = d, o = c;
              break;
            }
            if (w === o) {
              g = !0, o = d, l = c;
              break;
            }
            w = w.sibling;
          }
          if (!g)
            throw Error(m(189));
        }
      }
      if (l.alternate !== o)
        throw Error(m(190));
    }
    if (l.tag !== 3)
      throw Error(m(188));
    return l.stateNode.current === l ? n : r;
  }
  function Zn(n) {
    return n = ut(n), n !== null ? Rn(n) : null;
  }
  function Rn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Rn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var bn = E.unstable_scheduleCallback, Sr = E.unstable_cancelCallback, Ti = E.unstable_shouldYield, ro = E.unstable_requestPaint, qt = E.unstable_now, id = E.unstable_getCurrentPriorityLevel, ui = E.unstable_ImmediatePriority, Mt = E.unstable_UserBlockingPriority, Ri = E.unstable_NormalPriority, Cl = E.unstable_LowPriority, ao = E.unstable_IdlePriority, Tl = null, aa = null;
  function cs(n) {
    if (aa && typeof aa.onCommitFiberRoot == "function")
      try {
        aa.onCommitFiberRoot(Tl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Ir = Math.clz32 ? Math.clz32 : hc, fs = Math.log, ds = Math.LN2;
  function hc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fs(n) / ds | 0) | 0;
  }
  var io = 64, Rl = 4194304;
  function oi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Yr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, g = l & 268435455;
    if (g !== 0) {
      var w = g & ~c;
      w !== 0 ? o = oi(w) : (d &= g, d !== 0 && (o = oi(d)));
    } else
      g = l & ~c, g !== 0 ? o = oi(g) : d !== 0 && (o = oi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Ir(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function bl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var g = 31 - Ir(d), w = 1 << g, O = c[g];
      O === -1 ? (!(w & l) || w & o) && (c[g] = bl(w, r)) : O <= r && (n.expiredLanes |= w), d &= ~w;
    }
  }
  function xl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function lo() {
    var n = io;
    return io <<= 1, !(io & 4194240) && (io = 64), n;
  }
  function uo(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function $i(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ir(r), n[r] = l;
  }
  function ld(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Ir(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function bi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Ir(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Jt = 0;
  function oo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var du, so, Gt, co, fo, Ct = !1, pu = [], Vn = null, ia = null, Wr = null, _l = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), on = [], mc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function la(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Vn = null;
        break;
      case "dragenter":
      case "dragleave":
        ia = null;
        break;
      case "mouseover":
      case "mouseout":
        Wr = null;
        break;
      case "pointerover":
      case "pointerout":
        _l.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        In.delete(r.pointerId);
    }
  }
  function fr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = _s(r), r !== null && so(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function wi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Vn = fr(Vn, n, r, l, o, c), !0;
      case "dragenter":
        return ia = fr(ia, n, r, l, o, c), !0;
      case "mouseover":
        return Wr = fr(Wr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return _l.set(d, fr(_l.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, In.set(d, fr(In.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function yc(n) {
    var r = Ha(n.target);
    if (r !== null) {
      var l = bt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Bt(l), r !== null) {
            n.blockedOn = r, fo(n.priority, function() {
              Gt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ii(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = vo(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Ar = o, l.target.dispatchEvent(o), Ar = null;
      } else
        return r = _s(l), r !== null && so(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function kl(n, r, l) {
    Ii(n) && l.delete(r);
  }
  function gc() {
    Ct = !1, Vn !== null && Ii(Vn) && (Vn = null), ia !== null && Ii(ia) && (ia = null), Wr !== null && Ii(Wr) && (Wr = null), _l.forEach(kl), In.forEach(kl);
  }
  function ja(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ct || (Ct = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, gc)));
  }
  function Dl(n) {
    function r(c) {
      return ja(c, n);
    }
    if (0 < pu.length) {
      ja(pu[0], n);
      for (var l = 1; l < pu.length; l++) {
        var o = pu[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Vn !== null && ja(Vn, n), ia !== null && ja(ia, n), Wr !== null && ja(Wr, n), _l.forEach(r), In.forEach(r), l = 0; l < on.length; l++)
      o = on[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < on.length && (l = on[0], l.blockedOn === null); )
      yc(l), l.blockedOn === null && on.shift();
  }
  var Ol = Ie.ReactCurrentBatchConfig, Va = !0;
  function po(n, r, l, o) {
    var c = Jt, d = Ol.transition;
    Ol.transition = null;
    try {
      Jt = 1, Ml(n, r, l, o);
    } finally {
      Jt = c, Ol.transition = d;
    }
  }
  function Ll(n, r, l, o) {
    var c = Jt, d = Ol.transition;
    Ol.transition = null;
    try {
      Jt = 4, Ml(n, r, l, o);
    } finally {
      Jt = c, Ol.transition = d;
    }
  }
  function Ml(n, r, l, o) {
    if (Va) {
      var c = vo(n, r, l, o);
      if (c === null)
        _c(n, r, o, vu, l), la(n, o);
      else if (wi(c, n, r, l, o))
        o.stopPropagation();
      else if (la(n, o), r & 4 && -1 < mc.indexOf(n)) {
        for (; c !== null; ) {
          var d = _s(c);
          if (d !== null && du(d), d = vo(n, r, l, o), d === null && _c(n, r, o, vu, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        _c(n, r, o, null, l);
    }
  }
  var vu = null;
  function vo(n, r, l, o) {
    if (vu = null, n = dn(o), n = Ha(n), n !== null)
      if (r = bt(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Bt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return vu = n, null;
  }
  function ps(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (id()) {
          case ui:
            return 1;
          case Mt:
            return 4;
          case Ri:
          case Cl:
            return 16;
          case ao:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var si = null, y = null, _ = null;
  function H() {
    if (_)
      return _;
    var n, r = y, l = r.length, o, c = "value" in si ? si.value : si.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var g = l - n;
    for (o = 1; o <= g && r[l - o] === c[d - o]; o++)
      ;
    return _ = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ve() {
    return !0;
  }
  function dt() {
    return !1;
  }
  function De(n) {
    function r(l, o, c, d, g) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = g, this.currentTarget = null;
      for (var w in n)
        n.hasOwnProperty(w) && (l = n[w], this[w] = l ? l(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ve : dt, this.isPropagationStopped = dt, this;
    }
    return R(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ve);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ve);
    }, persist: function() {
    }, isPersistent: ve }), r;
  }
  var ct = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Nt = De(ct), Xt = R({}, ct, { view: 0, detail: 0 }), Sn = De(Xt), pn, En, wn, jt = R({}, Xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== wn && (wn && n.type === "mousemove" ? (pn = n.screenX - wn.screenX, En = n.screenY - wn.screenY) : En = pn = 0, wn = n), pn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : En;
  } }), Yi = De(jt), ho = R({}, jt, { dataTransfer: 0 }), vs = De(ho), ud = R({}, Xt, { relatedTarget: 0 }), ci = De(ud), hs = R({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ms = De(hs), od = R({}, ct, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), vy = De(od), hy = R({}, ct, { data: 0 }), sd = De(hy), cd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ev = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Cv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Tv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Cv[n]) ? !!r[n] : !1;
  }
  function fd() {
    return Tv;
  }
  var Wi = R({}, Xt, { key: function(n) {
    if (n.key) {
      var r = cd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ev[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fd, charCode: function(n) {
    return n.type === "keypress" ? q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), my = De(Wi), dd = R({}, jt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sc = De(dd), pd = R({}, Xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fd }), yy = De(pd), Ec = R({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rv = De(Ec), ua = R({}, jt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qi = De(ua), Jn = [9, 13, 27, 32], fi = ne && "CompositionEvent" in window, hu = null;
  ne && "documentMode" in document && (hu = document.documentMode);
  var Cc = ne && "TextEvent" in window && !hu, bv = ne && (!fi || hu && 8 < hu && 11 >= hu), mo = String.fromCharCode(32), wv = !1;
  function xv(n, r) {
    switch (n) {
      case "keyup":
        return Jn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Tc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var yo = !1;
  function gy(n, r) {
    switch (n) {
      case "compositionend":
        return Tc(r);
      case "keypress":
        return r.which !== 32 ? null : (wv = !0, mo);
      case "textInput":
        return n = r.data, n === mo && wv ? null : n;
      default:
        return null;
    }
  }
  function Sy(n, r) {
    if (yo)
      return n === "compositionend" || !fi && xv(n, r) ? (n = H(), _ = y = si = null, yo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return bv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var _v = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function kv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!_v[n.type] : r === "textarea";
  }
  function Dv(n, r, l, o) {
    Fa(o), r = bs(r, "onChange"), 0 < r.length && (l = new Nt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ys = null, go = null;
  function So(n) {
    xc(n, 0);
  }
  function Eo(n) {
    var r = To(n);
    if (Se(r))
      return n;
  }
  function Ov(n, r) {
    if (n === "change")
      return r;
  }
  var vd = !1;
  if (ne) {
    var hd;
    if (ne) {
      var md = "oninput" in document;
      if (!md) {
        var Lv = document.createElement("div");
        Lv.setAttribute("oninput", "return;"), md = typeof Lv.oninput == "function";
      }
      hd = md;
    } else
      hd = !1;
    vd = hd && (!document.documentMode || 9 < document.documentMode);
  }
  function Mv() {
    ys && (ys.detachEvent("onpropertychange", Nv), go = ys = null);
  }
  function Nv(n) {
    if (n.propertyName === "value" && Eo(go)) {
      var r = [];
      Dv(r, go, n, dn(n)), El(So, r);
    }
  }
  function Ey(n, r, l) {
    n === "focusin" ? (Mv(), ys = r, go = l, ys.attachEvent("onpropertychange", Nv)) : n === "focusout" && Mv();
  }
  function Cy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Eo(go);
  }
  function Ty(n, r) {
    if (n === "click")
      return Eo(r);
  }
  function Av(n, r) {
    if (n === "input" || n === "change")
      return Eo(r);
  }
  function Ry(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Pa = typeof Object.is == "function" ? Object.is : Ry;
  function gs(n, r) {
    if (Pa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Y.call(r, c) || !Pa(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function zv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Uv(n, r) {
    var l = zv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = zv(l);
    }
  }
  function Fv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Fv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Rc() {
    for (var n = window, r = Pt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = Pt(n.document);
    }
    return r;
  }
  function qi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function bc(n) {
    var r = Rc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Fv(l.ownerDocument.documentElement, l)) {
      if (o !== null && qi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Uv(l, d);
          var g = Uv(
            l,
            o
          );
          c && g && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== g.node || n.focusOffset !== g.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(g.node, g.offset)) : (r.setEnd(g.node, g.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var jv = ne && "documentMode" in document && 11 >= document.documentMode, di = null, yd = null, Ss = null, gd = !1;
  function Vv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    gd || di == null || di !== Pt(o) || (o = di, "selectionStart" in o && qi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Ss && gs(Ss, o) || (Ss = o, o = bs(yd, "onSelect"), 0 < o.length && (r = new Nt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = di)));
  }
  function wc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var mu = { animationend: wc("Animation", "AnimationEnd"), animationiteration: wc("Animation", "AnimationIteration"), animationstart: wc("Animation", "AnimationStart"), transitionend: wc("Transition", "TransitionEnd") }, Sd = {}, Ed = {};
  ne && (Ed = document.createElement("div").style, "AnimationEvent" in window || (delete mu.animationend.animation, delete mu.animationiteration.animation, delete mu.animationstart.animation), "TransitionEvent" in window || delete mu.transitionend.transition);
  function dr(n) {
    if (Sd[n])
      return Sd[n];
    if (!mu[n])
      return n;
    var r = mu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Ed)
        return Sd[n] = r[l];
    return n;
  }
  var Cd = dr("animationend"), Pv = dr("animationiteration"), Hv = dr("animationstart"), Bv = dr("transitionend"), $v = /* @__PURE__ */ new Map(), Iv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gi(n, r) {
    $v.set(n, r), x(r, [n]);
  }
  for (var Es = 0; Es < Iv.length; Es++) {
    var yu = Iv[Es], by = yu.toLowerCase(), Cs = yu[0].toUpperCase() + yu.slice(1);
    Gi(by, "on" + Cs);
  }
  Gi(Cd, "onAnimationEnd"), Gi(Pv, "onAnimationIteration"), Gi(Hv, "onAnimationStart"), Gi("dblclick", "onDoubleClick"), Gi("focusin", "onFocus"), Gi("focusout", "onBlur"), Gi(Bv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));
  function Yv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, je(o, r, void 0, n), n.currentTarget = null;
  }
  function xc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var g = o.length - 1; 0 <= g; g--) {
            var w = o[g], O = w.instance, $ = w.currentTarget;
            if (w = w.listener, O !== d && c.isPropagationStopped())
              break e;
            Yv(c, w, $), d = O;
          }
        else
          for (g = 0; g < o.length; g++) {
            if (w = o[g], O = w.instance, $ = w.currentTarget, w = w.listener, O !== d && c.isPropagationStopped())
              break e;
            Yv(c, w, $), d = O;
          }
      }
    }
    if (Ci)
      throw n = k, Ci = !1, k = null, n;
  }
  function Cn(n, r) {
    var l = r[kd];
    l === void 0 && (l = r[kd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Wv(r, n, 2, !1), l.add(o));
  }
  function Nl(n, r, l) {
    var o = 0;
    r && (o |= 4), Wv(l, n, o, r);
  }
  var Xi = "_reactListening" + Math.random().toString(36).slice(2);
  function Co(n) {
    if (!n[Xi]) {
      n[Xi] = !0, C.forEach(function(l) {
        l !== "selectionchange" && (wy.has(l) || Nl(l, !1, n), Nl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Xi] || (r[Xi] = !0, Nl("selectionchange", !1, r));
    }
  }
  function Wv(n, r, l, o) {
    switch (ps(r)) {
      case 1:
        var c = po;
        break;
      case 4:
        c = Ll;
        break;
      default:
        c = Ml;
    }
    l = c.bind(null, r, l, n), c = void 0, !Si || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function _c(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var g = o.tag;
          if (g === 3 || g === 4) {
            var w = o.stateNode.containerInfo;
            if (w === c || w.nodeType === 8 && w.parentNode === c)
              break;
            if (g === 4)
              for (g = o.return; g !== null; ) {
                var O = g.tag;
                if ((O === 3 || O === 4) && (O = g.stateNode.containerInfo, O === c || O.nodeType === 8 && O.parentNode === c))
                  return;
                g = g.return;
              }
            for (; w !== null; ) {
              if (g = Ha(w), g === null)
                return;
              if (O = g.tag, O === 5 || O === 6) {
                o = d = g;
                continue e;
              }
              w = w.parentNode;
            }
          }
          o = o.return;
        }
    El(function() {
      var $ = d, ue = dn(l), ce = [];
      e: {
        var le = $v.get(n);
        if (le !== void 0) {
          var Ue = Nt, We = n;
          switch (n) {
            case "keypress":
              if (q(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Ue = my;
              break;
            case "focusin":
              We = "focus", Ue = ci;
              break;
            case "focusout":
              We = "blur", Ue = ci;
              break;
            case "beforeblur":
            case "afterblur":
              Ue = ci;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ue = Yi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ue = vs;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ue = yy;
              break;
            case Cd:
            case Pv:
            case Hv:
              Ue = ms;
              break;
            case Bv:
              Ue = Rv;
              break;
            case "scroll":
              Ue = Sn;
              break;
            case "wheel":
              Ue = Qi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ue = vy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ue = Sc;
          }
          var Xe = (r & 4) !== 0, Xn = !Xe && n === "scroll", U = Xe ? le !== null ? le + "Capture" : null : le;
          Xe = [];
          for (var N = $, V; N !== null; ) {
            V = N;
            var me = V.stateNode;
            if (V.tag === 5 && me !== null && (V = me, U !== null && (me = Ca(N, U), me != null && Xe.push(Rs(N, me, V)))), Xn)
              break;
            N = N.return;
          }
          0 < Xe.length && (le = new Ue(le, We, null, l, ue), ce.push({ event: le, listeners: Xe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Ue = n === "mouseout" || n === "pointerout", le && l !== Ar && (We = l.relatedTarget || l.fromElement) && (Ha(We) || We[Ki]))
            break e;
          if ((Ue || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, Ue ? (We = l.relatedTarget || l.toElement, Ue = $, We = We ? Ha(We) : null, We !== null && (Xn = bt(We), We !== Xn || We.tag !== 5 && We.tag !== 6) && (We = null)) : (Ue = null, We = $), Ue !== We)) {
            if (Xe = Yi, me = "onMouseLeave", U = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (Xe = Sc, me = "onPointerLeave", U = "onPointerEnter", N = "pointer"), Xn = Ue == null ? le : To(Ue), V = We == null ? le : To(We), le = new Xe(me, N + "leave", Ue, l, ue), le.target = Xn, le.relatedTarget = V, me = null, Ha(ue) === $ && (Xe = new Xe(U, N + "enter", We, l, ue), Xe.target = V, Xe.relatedTarget = Xn, me = Xe), Xn = me, Ue && We)
              t: {
                for (Xe = Ue, U = We, N = 0, V = Xe; V; V = gu(V))
                  N++;
                for (V = 0, me = U; me; me = gu(me))
                  V++;
                for (; 0 < N - V; )
                  Xe = gu(Xe), N--;
                for (; 0 < V - N; )
                  U = gu(U), V--;
                for (; N--; ) {
                  if (Xe === U || U !== null && Xe === U.alternate)
                    break t;
                  Xe = gu(Xe), U = gu(U);
                }
                Xe = null;
              }
            else
              Xe = null;
            Ue !== null && Td(ce, le, Ue, Xe, !1), We !== null && Xn !== null && Td(ce, Xn, We, Xe, !0);
          }
        }
        e: {
          if (le = $ ? To($) : window, Ue = le.nodeName && le.nodeName.toLowerCase(), Ue === "select" || Ue === "input" && le.type === "file")
            var Je = Ov;
          else if (kv(le))
            if (vd)
              Je = Av;
            else {
              Je = Cy;
              var Qe = Ey;
            }
          else
            (Ue = le.nodeName) && Ue.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Je = Ty);
          if (Je && (Je = Je(n, $))) {
            Dv(ce, Je, l, ue);
            break e;
          }
          Qe && Qe(n, le, $), n === "focusout" && (Qe = le._wrapperState) && Qe.controlled && le.type === "number" && Me(le, "number", le.value);
        }
        switch (Qe = $ ? To($) : window, n) {
          case "focusin":
            (kv(Qe) || Qe.contentEditable === "true") && (di = Qe, yd = $, Ss = null);
            break;
          case "focusout":
            Ss = yd = di = null;
            break;
          case "mousedown":
            gd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gd = !1, Vv(ce, l, ue);
            break;
          case "selectionchange":
            if (jv)
              break;
          case "keydown":
          case "keyup":
            Vv(ce, l, ue);
        }
        var it;
        if (fi)
          e: {
            switch (n) {
              case "compositionstart":
                var St = "onCompositionStart";
                break e;
              case "compositionend":
                St = "onCompositionEnd";
                break e;
              case "compositionupdate":
                St = "onCompositionUpdate";
                break e;
            }
            St = void 0;
          }
        else
          yo ? xv(n, l) && (St = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (St = "onCompositionStart");
        St && (bv && l.locale !== "ko" && (yo || St !== "onCompositionStart" ? St === "onCompositionEnd" && yo && (it = H()) : (si = ue, y = "value" in si ? si.value : si.textContent, yo = !0)), Qe = bs($, St), 0 < Qe.length && (St = new sd(St, n, null, l, ue), ce.push({ event: St, listeners: Qe }), it ? St.data = it : (it = Tc(l), it !== null && (St.data = it)))), (it = Cc ? gy(n, l) : Sy(n, l)) && ($ = bs($, "onBeforeInput"), 0 < $.length && (ue = new sd("onBeforeInput", "beforeinput", null, l, ue), ce.push({ event: ue, listeners: $ }), ue.data = it));
      }
      xc(ce, r);
    });
  }
  function Rs(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function bs(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ca(n, l), d != null && o.unshift(Rs(n, d, c)), d = Ca(n, r), d != null && o.push(Rs(n, d, c))), n = n.return;
    }
    return o;
  }
  function gu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Td(n, r, l, o, c) {
    for (var d = r._reactName, g = []; l !== null && l !== o; ) {
      var w = l, O = w.alternate, $ = w.stateNode;
      if (O !== null && O === o)
        break;
      w.tag === 5 && $ !== null && (w = $, c ? (O = Ca(l, d), O != null && g.unshift(Rs(l, O, w))) : c || (O = Ca(l, d), O != null && g.push(Rs(l, O, w)))), l = l.return;
    }
    g.length !== 0 && n.push({ event: r, listeners: g });
  }
  var Rd = /\r\n?/g, xy = /\u0000|\uFFFD/g;
  function bd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Rd, `
`).replace(xy, "");
  }
  function kc(n, r, l) {
    if (r = bd(r), bd(n) !== r && l)
      throw Error(m(425));
  }
  function Dc() {
  }
  var wd = null, Su = null;
  function ws(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Eu = typeof setTimeout == "function" ? setTimeout : void 0, Qv = typeof clearTimeout == "function" ? clearTimeout : void 0, xd = typeof Promise == "function" ? Promise : void 0, _d = typeof queueMicrotask == "function" ? queueMicrotask : typeof xd < "u" ? function(n) {
    return xd.resolve(null).then(n).catch(_y);
  } : Eu;
  function _y(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Al(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), Dl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Dl(r);
  }
  function pi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function xs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var zl = Math.random().toString(36).slice(2), xi = "__reactFiber$" + zl, Cu = "__reactProps$" + zl, Ki = "__reactContainer$" + zl, kd = "__reactEvents$" + zl, ky = "__reactListeners$" + zl, Dd = "__reactHandles$" + zl;
  function Ha(n) {
    var r = n[xi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ki] || l[xi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = xs(n); n !== null; ) {
            if (l = n[xi])
              return l;
            n = xs(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function _s(n) {
    return n = n[xi] || n[Ki], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function To(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(m(33));
  }
  function lt(n) {
    return n[Cu] || null;
  }
  var Ul = [], _n = -1;
  function xt(n) {
    return { current: n };
  }
  function rn(n) {
    0 > _n || (n.current = Ul[_n], Ul[_n] = null, _n--);
  }
  function sn(n, r) {
    _n++, Ul[_n] = n.current, n.current = r;
  }
  var _i = {}, gt = xt(_i), Yn = xt(!1), oa = _i;
  function Ba(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return _i;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function An(n) {
    return n = n.childContextTypes, n != null;
  }
  function $a() {
    rn(Yn), rn(gt);
  }
  function Fl(n, r, l) {
    if (gt.current !== _i)
      throw Error(m(168));
    sn(gt, r), sn(Yn, l);
  }
  function ks(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(m(108, we(n) || "Unknown", c));
    return R({}, l, o);
  }
  function Oc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _i, oa = gt.current, sn(gt, n), sn(Yn, Yn.current), !0;
  }
  function qv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(m(169));
    l ? (n = ks(n, r, oa), o.__reactInternalMemoizedMergedChildContext = n, rn(Yn), rn(gt), sn(gt, n)) : rn(Yn), sn(Yn, l);
  }
  var ba = null, pr = !1, Ds = !1;
  function Od(n) {
    ba === null ? ba = [n] : ba.push(n);
  }
  function Ld(n) {
    pr = !0, Od(n);
  }
  function sa() {
    if (!Ds && ba !== null) {
      Ds = !0;
      var n = 0, r = Jt;
      try {
        var l = ba;
        for (Jt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ba = null, pr = !1;
      } catch (c) {
        throw ba !== null && (ba = ba.slice(n + 1)), bn(ui, sa), c;
      } finally {
        Jt = r, Ds = !1;
      }
    }
    return null;
  }
  var jl = [], ca = 0, Tu = null, Ro = 0, fa = [], zr = 0, Ia = null, Er = 1, Zi = "";
  function wa(n, r) {
    jl[ca++] = Ro, jl[ca++] = Tu, Tu = n, Ro = r;
  }
  function Md(n, r, l) {
    fa[zr++] = Er, fa[zr++] = Zi, fa[zr++] = Ia, Ia = n;
    var o = Er;
    n = Zi;
    var c = 32 - Ir(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Ir(r) + c;
    if (30 < d) {
      var g = c - c % 5;
      d = (o & (1 << g) - 1).toString(32), o >>= g, c -= g, Er = 1 << 32 - Ir(r) + c | l << c | o, Zi = d + n;
    } else
      Er = 1 << d | l << c | o, Zi = n;
  }
  function Lc(n) {
    n.return !== null && (wa(n, 1), Md(n, 1, 0));
  }
  function Nd(n) {
    for (; n === Tu; )
      Tu = jl[--ca], jl[ca] = null, Ro = jl[--ca], jl[ca] = null;
    for (; n === Ia; )
      Ia = fa[--zr], fa[zr] = null, Zi = fa[--zr], fa[zr] = null, Er = fa[--zr], fa[zr] = null;
  }
  var xa = null, da = null, kn = !1, Ya = null;
  function Ad(n, r) {
    var l = Ka(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Gv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, xa = n, da = pi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, xa = n, da = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ia !== null ? { id: Er, overflow: Zi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ka(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, xa = n, da = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Mc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Nc(n) {
    if (kn) {
      var r = da;
      if (r) {
        var l = r;
        if (!Gv(n, r)) {
          if (Mc(n))
            throw Error(m(418));
          r = pi(l.nextSibling);
          var o = xa;
          r && Gv(n, r) ? Ad(o, l) : (n.flags = n.flags & -4097 | 2, kn = !1, xa = n);
        }
      } else {
        if (Mc(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, kn = !1, xa = n;
      }
    }
  }
  function Xv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    xa = n;
  }
  function Ac(n) {
    if (n !== xa)
      return !1;
    if (!kn)
      return Xv(n), kn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ws(n.type, n.memoizedProps)), r && (r = da)) {
      if (Mc(n))
        throw Kv(), Error(m(418));
      for (; r; )
        Ad(n, r), r = pi(r.nextSibling);
    }
    if (Xv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                da = pi(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        da = null;
      }
    } else
      da = xa ? pi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Kv() {
    for (var n = da; n; )
      n = pi(n.nextSibling);
  }
  function Pn() {
    da = xa = null, kn = !1;
  }
  function zd(n) {
    Ya === null ? Ya = [n] : Ya.push(n);
  }
  var zc = Ie.ReactCurrentBatchConfig;
  function _a(n, r) {
    if (n && n.defaultProps) {
      r = R({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ki = xt(null), Uc = null, Vl = null, Ud = null;
  function Fd() {
    Ud = Vl = Uc = null;
  }
  function Pl(n) {
    var r = ki.current;
    rn(ki), n._currentValue = r;
  }
  function vr(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function xe(n, r) {
    Uc = n, Ud = Vl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (er = !0), n.firstContext = null);
  }
  function Gn(n) {
    var r = n._currentValue;
    if (Ud !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Vl === null) {
        if (Uc === null)
          throw Error(m(308));
        Vl = n, Uc.dependencies = { lanes: 0, firstContext: n };
      } else
        Vl = Vl.next = n;
    return r;
  }
  var Cr = null;
  function jd(n) {
    Cr === null ? Cr = [n] : Cr.push(n);
  }
  function Zv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, jd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ji(n, o);
  }
  function Ji(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Hl = !1;
  function Vd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ar(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function el(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Bl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, zt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ji(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, jd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ji(n, l);
  }
  function Fc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, bi(n, l);
    }
  }
  function Pd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var g = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = g : d = d.next = g, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function $l(n, r, l, o) {
    var c = n.updateQueue;
    Hl = !1;
    var d = c.firstBaseUpdate, g = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var O = w, $ = O.next;
      O.next = null, g === null ? d = $ : g.next = $, g = O;
      var ue = n.alternate;
      ue !== null && (ue = ue.updateQueue, w = ue.lastBaseUpdate, w !== g && (w === null ? ue.firstBaseUpdate = $ : w.next = $, ue.lastBaseUpdate = O));
    }
    if (d !== null) {
      var ce = c.baseState;
      g = 0, ue = $ = O = null, w = d;
      do {
        var le = w.lane, Ue = w.eventTime;
        if ((o & le) === le) {
          ue !== null && (ue = ue.next = {
            eventTime: Ue,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var We = n, Xe = w;
            switch (le = r, Ue = l, Xe.tag) {
              case 1:
                if (We = Xe.payload, typeof We == "function") {
                  ce = We.call(Ue, ce, le);
                  break e;
                }
                ce = We;
                break e;
              case 3:
                We.flags = We.flags & -65537 | 128;
              case 0:
                if (We = Xe.payload, le = typeof We == "function" ? We.call(Ue, ce, le) : We, le == null)
                  break e;
                ce = R({}, ce, le);
                break e;
              case 2:
                Hl = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, le = c.effects, le === null ? c.effects = [w] : le.push(w));
        } else
          Ue = { eventTime: Ue, lane: le, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, ue === null ? ($ = ue = Ue, O = ce) : ue = ue.next = Ue, g |= le;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null)
            break;
          le = w, w = le.next, le.next = null, c.lastBaseUpdate = le, c.shared.pending = null;
        }
      } while (1);
      if (ue === null && (O = ce), c.baseState = O, c.firstBaseUpdate = $, c.lastBaseUpdate = ue, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          g |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      al |= g, n.lanes = g, n.memoizedState = ce;
    }
  }
  function Ru(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(m(191, c));
          c.call(o);
        }
      }
  }
  var Jv = new p.Component().refs;
  function Hd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : R({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var jc = { isMounted: function(n) {
    return (n = n._reactInternals) ? bt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Vr(), c = tr(n), d = el(o, c);
    d.payload = r, l != null && (d.callback = l), r = Bl(n, d, c), r !== null && (Pr(r, n, c, o), Fc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Vr(), c = tr(n), d = el(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Bl(n, d, c), r !== null && (Pr(r, n, c, o), Fc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Vr(), o = tr(n), c = el(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Bl(n, c, o), r !== null && (Pr(r, n, o, l), Fc(r, n, o));
  } };
  function eh(n, r, l, o, c, d, g) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, g) : r.prototype && r.prototype.isPureReactComponent ? !gs(l, o) || !gs(c, d) : !0;
  }
  function th(n, r, l) {
    var o = !1, c = _i, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Gn(d) : (c = An(r) ? oa : gt.current, o = r.contextTypes, d = (o = o != null) ? Ba(n, c) : _i), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = jc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function nh(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && jc.enqueueReplaceState(r, r.state, null);
  }
  function Vc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Jv, Vd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Gn(d) : (d = An(r) ? oa : gt.current, c.context = Ba(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Hd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && jc.enqueueReplaceState(c, c.state, null), $l(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function bo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(m(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(m(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(g) {
          var w = c.refs;
          w === Jv && (w = c.refs = {}), g === null ? delete w[d] : w[d] = g;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(m(284));
      if (!l._owner)
        throw Error(m(290, n));
    }
    return n;
  }
  function Pc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function rh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ah(n) {
    function r(U, N) {
      if (n) {
        var V = U.deletions;
        V === null ? (U.deletions = [N], U.flags |= 16) : V.push(N);
      }
    }
    function l(U, N) {
      if (!n)
        return null;
      for (; N !== null; )
        r(U, N), N = N.sibling;
      return null;
    }
    function o(U, N) {
      for (U = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? U.set(N.key, N) : U.set(N.index, N), N = N.sibling;
      return U;
    }
    function c(U, N) {
      return U = Kl(U, N), U.index = 0, U.sibling = null, U;
    }
    function d(U, N, V) {
      return U.index = V, n ? (V = U.alternate, V !== null ? (V = V.index, V < N ? (U.flags |= 2, N) : V) : (U.flags |= 2, N)) : (U.flags |= 1048576, N);
    }
    function g(U) {
      return n && U.alternate === null && (U.flags |= 2), U;
    }
    function w(U, N, V, me) {
      return N === null || N.tag !== 6 ? (N = qs(V, U.mode, me), N.return = U, N) : (N = c(N, V), N.return = U, N);
    }
    function O(U, N, V, me) {
      var Je = V.type;
      return Je === tt ? ue(U, N, V.props.children, me, V.key) : N !== null && (N.elementType === Je || typeof Je == "object" && Je !== null && Je.$$typeof === rt && rh(Je) === N.type) ? (me = c(N, V.props), me.ref = bo(U, N, V), me.return = U, me) : (me = Sf(V.type, V.key, V.props, null, U.mode, me), me.ref = bo(U, N, V), me.return = U, me);
    }
    function $(U, N, V, me) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== V.containerInfo || N.stateNode.implementation !== V.implementation ? (N = Bu(V, U.mode, me), N.return = U, N) : (N = c(N, V.children || []), N.return = U, N);
    }
    function ue(U, N, V, me, Je) {
      return N === null || N.tag !== 7 ? (N = Hu(V, U.mode, me, Je), N.return = U, N) : (N = c(N, V), N.return = U, N);
    }
    function ce(U, N, V) {
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return N = qs("" + N, U.mode, V), N.return = U, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case W:
            return V = Sf(N.type, N.key, N.props, null, U.mode, V), V.ref = bo(U, null, N), V.return = U, V;
          case st:
            return N = Bu(N, U.mode, V), N.return = U, N;
          case rt:
            var me = N._init;
            return ce(U, me(N._payload), V);
        }
        if (ye(N) || He(N))
          return N = Hu(N, U.mode, V, null), N.return = U, N;
        Pc(U, N);
      }
      return null;
    }
    function le(U, N, V, me) {
      var Je = N !== null ? N.key : null;
      if (typeof V == "string" && V !== "" || typeof V == "number")
        return Je !== null ? null : w(U, N, "" + V, me);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case W:
            return V.key === Je ? O(U, N, V, me) : null;
          case st:
            return V.key === Je ? $(U, N, V, me) : null;
          case rt:
            return Je = V._init, le(
              U,
              N,
              Je(V._payload),
              me
            );
        }
        if (ye(V) || He(V))
          return Je !== null ? null : ue(U, N, V, me, null);
        Pc(U, V);
      }
      return null;
    }
    function Ue(U, N, V, me, Je) {
      if (typeof me == "string" && me !== "" || typeof me == "number")
        return U = U.get(V) || null, w(N, U, "" + me, Je);
      if (typeof me == "object" && me !== null) {
        switch (me.$$typeof) {
          case W:
            return U = U.get(me.key === null ? V : me.key) || null, O(N, U, me, Je);
          case st:
            return U = U.get(me.key === null ? V : me.key) || null, $(N, U, me, Je);
          case rt:
            var Qe = me._init;
            return Ue(U, N, V, Qe(me._payload), Je);
        }
        if (ye(me) || He(me))
          return U = U.get(V) || null, ue(N, U, me, Je, null);
        Pc(N, me);
      }
      return null;
    }
    function We(U, N, V, me) {
      for (var Je = null, Qe = null, it = N, St = N = 0, yr = null; it !== null && St < V.length; St++) {
        it.index > St ? (yr = it, it = null) : yr = it.sibling;
        var Zt = le(U, it, V[St], me);
        if (Zt === null) {
          it === null && (it = yr);
          break;
        }
        n && it && Zt.alternate === null && r(U, it), N = d(Zt, N, St), Qe === null ? Je = Zt : Qe.sibling = Zt, Qe = Zt, it = yr;
      }
      if (St === V.length)
        return l(U, it), kn && wa(U, St), Je;
      if (it === null) {
        for (; St < V.length; St++)
          it = ce(U, V[St], me), it !== null && (N = d(it, N, St), Qe === null ? Je = it : Qe.sibling = it, Qe = it);
        return kn && wa(U, St), Je;
      }
      for (it = o(U, it); St < V.length; St++)
        yr = Ue(it, U, St, V[St], me), yr !== null && (n && yr.alternate !== null && it.delete(yr.key === null ? St : yr.key), N = d(yr, N, St), Qe === null ? Je = yr : Qe.sibling = yr, Qe = yr);
      return n && it.forEach(function(Zl) {
        return r(U, Zl);
      }), kn && wa(U, St), Je;
    }
    function Xe(U, N, V, me) {
      var Je = He(V);
      if (typeof Je != "function")
        throw Error(m(150));
      if (V = Je.call(V), V == null)
        throw Error(m(151));
      for (var Qe = Je = null, it = N, St = N = 0, yr = null, Zt = V.next(); it !== null && !Zt.done; St++, Zt = V.next()) {
        it.index > St ? (yr = it, it = null) : yr = it.sibling;
        var Zl = le(U, it, Zt.value, me);
        if (Zl === null) {
          it === null && (it = yr);
          break;
        }
        n && it && Zl.alternate === null && r(U, it), N = d(Zl, N, St), Qe === null ? Je = Zl : Qe.sibling = Zl, Qe = Zl, it = yr;
      }
      if (Zt.done)
        return l(
          U,
          it
        ), kn && wa(U, St), Je;
      if (it === null) {
        for (; !Zt.done; St++, Zt = V.next())
          Zt = ce(U, Zt.value, me), Zt !== null && (N = d(Zt, N, St), Qe === null ? Je = Zt : Qe.sibling = Zt, Qe = Zt);
        return kn && wa(U, St), Je;
      }
      for (it = o(U, it); !Zt.done; St++, Zt = V.next())
        Zt = Ue(it, U, St, Zt.value, me), Zt !== null && (n && Zt.alternate !== null && it.delete(Zt.key === null ? St : Zt.key), N = d(Zt, N, St), Qe === null ? Je = Zt : Qe.sibling = Zt, Qe = Zt);
      return n && it.forEach(function(qy) {
        return r(U, qy);
      }), kn && wa(U, St), Je;
    }
    function Xn(U, N, V, me) {
      if (typeof V == "object" && V !== null && V.type === tt && V.key === null && (V = V.props.children), typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case W:
            e: {
              for (var Je = V.key, Qe = N; Qe !== null; ) {
                if (Qe.key === Je) {
                  if (Je = V.type, Je === tt) {
                    if (Qe.tag === 7) {
                      l(U, Qe.sibling), N = c(Qe, V.props.children), N.return = U, U = N;
                      break e;
                    }
                  } else if (Qe.elementType === Je || typeof Je == "object" && Je !== null && Je.$$typeof === rt && rh(Je) === Qe.type) {
                    l(U, Qe.sibling), N = c(Qe, V.props), N.ref = bo(U, Qe, V), N.return = U, U = N;
                    break e;
                  }
                  l(U, Qe);
                  break;
                } else
                  r(U, Qe);
                Qe = Qe.sibling;
              }
              V.type === tt ? (N = Hu(V.props.children, U.mode, me, V.key), N.return = U, U = N) : (me = Sf(V.type, V.key, V.props, null, U.mode, me), me.ref = bo(U, N, V), me.return = U, U = me);
            }
            return g(U);
          case st:
            e: {
              for (Qe = V.key; N !== null; ) {
                if (N.key === Qe)
                  if (N.tag === 4 && N.stateNode.containerInfo === V.containerInfo && N.stateNode.implementation === V.implementation) {
                    l(U, N.sibling), N = c(N, V.children || []), N.return = U, U = N;
                    break e;
                  } else {
                    l(U, N);
                    break;
                  }
                else
                  r(U, N);
                N = N.sibling;
              }
              N = Bu(V, U.mode, me), N.return = U, U = N;
            }
            return g(U);
          case rt:
            return Qe = V._init, Xn(U, N, Qe(V._payload), me);
        }
        if (ye(V))
          return We(U, N, V, me);
        if (He(V))
          return Xe(U, N, V, me);
        Pc(U, V);
      }
      return typeof V == "string" && V !== "" || typeof V == "number" ? (V = "" + V, N !== null && N.tag === 6 ? (l(U, N.sibling), N = c(N, V), N.return = U, U = N) : (l(U, N), N = qs(V, U.mode, me), N.return = U, U = N), g(U)) : l(U, N);
    }
    return Xn;
  }
  var wo = ah(!0), ih = ah(!1), Os = {}, vi = xt(Os), Ls = xt(Os), xo = xt(Os);
  function bu(n) {
    if (n === Os)
      throw Error(m(174));
    return n;
  }
  function Bd(n, r) {
    switch (sn(xo, r), sn(Ls, n), sn(vi, Os), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gn(r, n);
    }
    rn(vi), sn(vi, r);
  }
  function Il() {
    rn(vi), rn(Ls), rn(xo);
  }
  function ft(n) {
    bu(xo.current);
    var r = bu(vi.current), l = gn(r, n.type);
    r !== l && (sn(Ls, n), sn(vi, l));
  }
  function At(n) {
    Ls.current === n && (rn(vi), rn(Ls));
  }
  var pt = xt(0);
  function Hn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Wa = [];
  function Hc() {
    for (var n = 0; n < Wa.length; n++)
      Wa[n]._workInProgressVersionPrimary = null;
    Wa.length = 0;
  }
  var Bc = Ie.ReactCurrentDispatcher, $d = Ie.ReactCurrentBatchConfig, wu = 0, Dn = null, J = null, $t = null, vt = !1, Di = !1, ka = 0, xu = 0;
  function On() {
    throw Error(m(321));
  }
  function _u(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Pa(n[l], r[l]))
        return !1;
    return !0;
  }
  function Yl(n, r, l, o, c, d) {
    if (wu = d, Dn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Bc.current = n === null || n.memoizedState === null ? Oy : Ly, n = l(o, c), Di) {
      d = 0;
      do {
        if (Di = !1, ka = 0, 25 <= d)
          throw Error(m(301));
        d += 1, $t = J = null, r.updateQueue = null, Bc.current = Yd, n = l(o, c);
      } while (Di);
    }
    if (Bc.current = af, r = J !== null && J.next !== null, wu = 0, $t = J = Dn = null, vt = !1, r)
      throw Error(m(300));
    return n;
  }
  function ku() {
    var n = ka !== 0;
    return ka = 0, n;
  }
  function Qa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return $t === null ? Dn.memoizedState = $t = n : $t = $t.next = n, $t;
  }
  function pa() {
    if (J === null) {
      var n = Dn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = J.next;
    var r = $t === null ? Dn.memoizedState : $t.next;
    if (r !== null)
      $t = r, J = n;
    else {
      if (n === null)
        throw Error(m(310));
      J = n, n = { memoizedState: J.memoizedState, baseState: J.baseState, baseQueue: J.baseQueue, queue: J.queue, next: null }, $t === null ? Dn.memoizedState = $t = n : $t = $t.next = n;
    }
    return $t;
  }
  function Du(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ms(n) {
    var r = pa(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var o = J, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = d.next, d.next = g;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var w = g = null, O = null, $ = d;
      do {
        var ue = $.lane;
        if ((wu & ue) === ue)
          O !== null && (O = O.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), o = $.hasEagerState ? $.eagerState : n(o, $.action);
        else {
          var ce = {
            lane: ue,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          O === null ? (w = O = ce, g = o) : O = O.next = ce, Dn.lanes |= ue, al |= ue;
        }
        $ = $.next;
      } while ($ !== null && $ !== d);
      O === null ? g = o : O.next = w, Pa(o, r.memoizedState) || (er = !0), r.memoizedState = o, r.baseState = g, r.baseQueue = O, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Dn.lanes |= d, al |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ns(n) {
    var r = pa(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var g = c = c.next;
      do
        d = n(d, g.action), g = g.next;
      while (g !== c);
      Pa(d, r.memoizedState) || (er = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function $c() {
  }
  function Ic(n, r) {
    var l = Dn, o = pa(), c = r(), d = !Pa(o.memoizedState, c);
    if (d && (o.memoizedState = c, er = !0), o = o.queue, As(Qc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || $t !== null && $t.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ou(9, Wc.bind(null, l, o, c, r), void 0, null), Bn === null)
        throw Error(m(349));
      wu & 30 || Yc(l, r, c);
    }
    return c;
  }
  function Yc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Dn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Dn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Wc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, qc(r) && Gc(n);
  }
  function Qc(n, r, l) {
    return l(function() {
      qc(r) && Gc(n);
    });
  }
  function qc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Pa(n, l);
    } catch {
      return !0;
    }
  }
  function Gc(n) {
    var r = Ji(n, 1);
    r !== null && Pr(r, n, 1, -1);
  }
  function Xc(n) {
    var r = Qa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Du, lastRenderedState: n }, r.queue = n, n = n.dispatch = rf.bind(null, Dn, n), [r.memoizedState, n];
  }
  function Ou(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Dn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Dn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Kc() {
    return pa().memoizedState;
  }
  function Lu(n, r, l, o) {
    var c = Qa();
    Dn.flags |= n, c.memoizedState = Ou(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function tl(n, r, l, o) {
    var c = pa();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (J !== null) {
      var g = J.memoizedState;
      if (d = g.destroy, o !== null && _u(o, g.deps)) {
        c.memoizedState = Ou(r, l, d, o);
        return;
      }
    }
    Dn.flags |= n, c.memoizedState = Ou(1 | r, l, d, o);
  }
  function Zc(n, r) {
    return Lu(8390656, 8, n, r);
  }
  function As(n, r) {
    return tl(2048, 8, n, r);
  }
  function Jc(n, r) {
    return tl(4, 2, n, r);
  }
  function ef(n, r) {
    return tl(4, 4, n, r);
  }
  function Id(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function _o(n, r, l) {
    return l = l != null ? l.concat([n]) : null, tl(4, 4, Id.bind(null, r, n), l);
  }
  function tf() {
  }
  function ko(n, r) {
    var l = pa();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && _u(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Wl(n, r) {
    var l = pa();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && _u(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function va(n, r, l) {
    return wu & 21 ? (Pa(l, r) || (l = lo(), Dn.lanes |= l, al |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, er = !0), n.memoizedState = l);
  }
  function Dy(n, r) {
    var l = Jt;
    Jt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = $d.transition;
    $d.transition = {};
    try {
      n(!1), r();
    } finally {
      Jt = l, $d.transition = o;
    }
  }
  function Tn() {
    return pa().memoizedState;
  }
  function nf(n, r, l) {
    var o = tr(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Do(n))
      zs(r, l);
    else if (l = Zv(n, r, l, o), l !== null) {
      var c = Vr();
      Pr(l, n, o, c), lh(l, r, o);
    }
  }
  function rf(n, r, l) {
    var o = tr(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Do(n))
      zs(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var g = r.lastRenderedState, w = d(g, l);
          if (c.hasEagerState = !0, c.eagerState = w, Pa(w, g)) {
            var O = r.interleaved;
            O === null ? (c.next = c, jd(r)) : (c.next = O.next, O.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Zv(n, r, c, o), l !== null && (c = Vr(), Pr(l, n, o, c), lh(l, r, o));
    }
  }
  function Do(n) {
    var r = n.alternate;
    return n === Dn || r !== null && r === Dn;
  }
  function zs(n, r) {
    Di = vt = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function lh(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, bi(n, l);
    }
  }
  var af = { readContext: Gn, useCallback: On, useContext: On, useEffect: On, useImperativeHandle: On, useInsertionEffect: On, useLayoutEffect: On, useMemo: On, useReducer: On, useRef: On, useState: On, useDebugValue: On, useDeferredValue: On, useTransition: On, useMutableSource: On, useSyncExternalStore: On, useId: On, unstable_isNewReconciler: !1 }, Oy = { readContext: Gn, useCallback: function(n, r) {
    return Qa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Gn, useEffect: Zc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Lu(
      4194308,
      4,
      Id.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Lu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Lu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Qa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Qa();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = nf.bind(null, Dn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Qa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Xc, useDebugValue: tf, useDeferredValue: function(n) {
    return Qa().memoizedState = n;
  }, useTransition: function() {
    var n = Xc(!1), r = n[0];
    return n = Dy.bind(null, n[1]), Qa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Dn, c = Qa();
    if (kn) {
      if (l === void 0)
        throw Error(m(407));
      l = l();
    } else {
      if (l = r(), Bn === null)
        throw Error(m(349));
      wu & 30 || Yc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Zc(Qc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ou(9, Wc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Qa(), r = Bn.identifierPrefix;
    if (kn) {
      var l = Zi, o = Er;
      l = (o & ~(1 << 32 - Ir(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ka++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = xu++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ly = {
    readContext: Gn,
    useCallback: ko,
    useContext: Gn,
    useEffect: As,
    useImperativeHandle: _o,
    useInsertionEffect: Jc,
    useLayoutEffect: ef,
    useMemo: Wl,
    useReducer: Ms,
    useRef: Kc,
    useState: function() {
      return Ms(Du);
    },
    useDebugValue: tf,
    useDeferredValue: function(n) {
      var r = pa();
      return va(r, J.memoizedState, n);
    },
    useTransition: function() {
      var n = Ms(Du)[0], r = pa().memoizedState;
      return [n, r];
    },
    useMutableSource: $c,
    useSyncExternalStore: Ic,
    useId: Tn,
    unstable_isNewReconciler: !1
  }, Yd = { readContext: Gn, useCallback: ko, useContext: Gn, useEffect: As, useImperativeHandle: _o, useInsertionEffect: Jc, useLayoutEffect: ef, useMemo: Wl, useReducer: Ns, useRef: Kc, useState: function() {
    return Ns(Du);
  }, useDebugValue: tf, useDeferredValue: function(n) {
    var r = pa();
    return J === null ? r.memoizedState = n : va(r, J.memoizedState, n);
  }, useTransition: function() {
    var n = Ns(Du)[0], r = pa().memoizedState;
    return [n, r];
  }, useMutableSource: $c, useSyncExternalStore: Ic, useId: Tn, unstable_isNewReconciler: !1 };
  function Oo(n, r) {
    try {
      var l = "", o = r;
      do
        l += ze(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Us(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function lf(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var My = typeof WeakMap == "function" ? WeakMap : Map;
  function uh(n, r, l) {
    l = el(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      pf || (pf = !0, Uu = o), lf(n, r);
    }, l;
  }
  function Fs(n, r, l) {
    l = el(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        lf(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      lf(n, r), typeof o != "function" && (Mi === null ? Mi = /* @__PURE__ */ new Set([this]) : Mi.add(this));
      var g = r.stack;
      this.componentDidCatch(r.value, { componentStack: g !== null ? g : "" });
    }), l;
  }
  function oh(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new My();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Vy.bind(null, n, r, l), r.then(n, n));
  }
  function Wd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = el(-1, 1), r.tag = 2, Bl(l, r, 1))), l.lanes |= 1), n);
  }
  var Ny = Ie.ReactCurrentOwner, er = !1;
  function ir(n, r, l, o) {
    r.child = n === null ? ih(r, null, l, o) : wo(r, n.child, l, o);
  }
  function Ql(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return xe(r, c), o = Yl(n, r, l, o, d, c), l = ku(), n !== null && !er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Tr(n, r, c)) : (kn && l && Lc(r), r.flags |= 1, ir(n, r, o, c), r.child);
  }
  function uf(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !dp(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, ha(n, r, d, o, c)) : (n = Sf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var g = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : gs, l(g, o) && n.ref === r.ref)
        return Tr(n, r, c);
    }
    return r.flags |= 1, n = Kl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ha(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (gs(d, o) && n.ref === r.ref)
        if (er = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (er = !0);
        else
          return r.lanes = n.lanes, Tr(n, r, c);
    }
    return Lo(n, r, l, o, c);
  }
  function Mu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, sn(Fo, Da), Da |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, sn(Fo, Da), Da |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, sn(Fo, Da), Da |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, sn(Fo, Da), Da |= o;
    return ir(n, r, c, l), r.child;
  }
  function _t(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Lo(n, r, l, o, c) {
    var d = An(l) ? oa : gt.current;
    return d = Ba(r, d), xe(r, c), l = Yl(n, r, l, o, d, c), o = ku(), n !== null && !er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Tr(n, r, c)) : (kn && o && Lc(r), r.flags |= 1, ir(n, r, l, c), r.child);
  }
  function qd(n, r, l, o, c) {
    if (An(l)) {
      var d = !0;
      Oc(r);
    } else
      d = !1;
    if (xe(r, c), r.stateNode === null)
      Ur(n, r), th(r, l, o), Vc(r, l, o, c), o = !0;
    else if (n === null) {
      var g = r.stateNode, w = r.memoizedProps;
      g.props = w;
      var O = g.context, $ = l.contextType;
      typeof $ == "object" && $ !== null ? $ = Gn($) : ($ = An(l) ? oa : gt.current, $ = Ba(r, $));
      var ue = l.getDerivedStateFromProps, ce = typeof ue == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      ce || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (w !== o || O !== $) && nh(r, g, o, $), Hl = !1;
      var le = r.memoizedState;
      g.state = le, $l(r, o, g, c), O = r.memoizedState, w !== o || le !== O || Yn.current || Hl ? (typeof ue == "function" && (Hd(r, l, ue, o), O = r.memoizedState), (w = Hl || eh(r, l, w, o, le, O, $)) ? (ce || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = O), g.props = o, g.state = O, g.context = $, o = w) : (typeof g.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      g = r.stateNode, ar(n, r), w = r.memoizedProps, $ = r.type === r.elementType ? w : _a(r.type, w), g.props = $, ce = r.pendingProps, le = g.context, O = l.contextType, typeof O == "object" && O !== null ? O = Gn(O) : (O = An(l) ? oa : gt.current, O = Ba(r, O));
      var Ue = l.getDerivedStateFromProps;
      (ue = typeof Ue == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (w !== ce || le !== O) && nh(r, g, o, O), Hl = !1, le = r.memoizedState, g.state = le, $l(r, o, g, c);
      var We = r.memoizedState;
      w !== ce || le !== We || Yn.current || Hl ? (typeof Ue == "function" && (Hd(r, l, Ue, o), We = r.memoizedState), ($ = Hl || eh(r, l, $, o, le, We, O) || !1) ? (ue || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(o, We, O), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(o, We, O)), typeof g.componentDidUpdate == "function" && (r.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || w === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = We), g.props = o, g.state = We, g.context = O, o = $) : (typeof g.componentDidUpdate != "function" || w === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return sh(n, r, l, o, d, c);
  }
  function sh(n, r, l, o, c, d) {
    _t(n, r);
    var g = (r.flags & 128) !== 0;
    if (!o && !g)
      return c && qv(r, l, !1), Tr(n, r, d);
    o = r.stateNode, Ny.current = r;
    var w = g && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && g ? (r.child = wo(r, n.child, null, d), r.child = wo(r, null, w, d)) : ir(n, r, w, d), r.memoizedState = o.state, c && qv(r, l, !0), r.child;
  }
  function ch(n) {
    var r = n.stateNode;
    r.pendingContext ? Fl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Fl(n, r.context, !1), Bd(n, r.containerInfo);
  }
  function of(n, r, l, o, c) {
    return Pn(), zd(c), r.flags |= 256, ir(n, r, l, o), r.child;
  }
  var Nu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Xd(n, r, l) {
    var o = r.pendingProps, c = pt.current, d = !1, g = (r.flags & 128) !== 0, w;
    if ((w = g) || (w = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), sn(pt, c & 1), n === null)
      return Nc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (g = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, g = { mode: "hidden", children: g }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = g) : d = Qs(g, o, 0, null), n = Hu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Gd(l), r.memoizedState = Nu, n) : Kd(r, g));
    if (c = n.memoizedState, c !== null && (w = c.dehydrated, w !== null))
      return Ay(n, r, g, o, w, c, l);
    if (d) {
      d = o.fallback, g = r.mode, c = n.child, w = c.sibling;
      var O = { mode: "hidden", children: o.children };
      return !(g & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = O, r.deletions = null) : (o = Kl(c, O), o.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = Kl(w, d) : (d = Hu(d, g, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, g = n.child.memoizedState, g = g === null ? Gd(l) : { baseLanes: g.baseLanes | l, cachePool: null, transitions: g.transitions }, d.memoizedState = g, d.childLanes = n.childLanes & ~l, r.memoizedState = Nu, o;
    }
    return d = n.child, n = d.sibling, o = Kl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Kd(n, r) {
    return r = Qs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Mo(n, r, l, o) {
    return o !== null && zd(o), wo(r, n.child, null, l), n = Kd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Ay(n, r, l, o, c, d, g) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Us(Error(m(422))), Mo(n, r, g, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Qs({ mode: "visible", children: o.children }, c, 0, null), d = Hu(d, c, g, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && wo(r, n.child, null, g), r.child.memoizedState = Gd(g), r.memoizedState = Nu, d);
    if (!(r.mode & 1))
      return Mo(n, r, g, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var w = o.dgst;
      return o = w, d = Error(m(419)), o = Us(d, o, void 0), Mo(n, r, g, o);
    }
    if (w = (g & n.childLanes) !== 0, er || w) {
      if (o = Bn, o !== null) {
        switch (g & -g) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | g) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ji(n, c), Pr(o, n, c, -1));
      }
      return sp(), o = Us(Error(m(421))), Mo(n, r, g, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Py.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, da = pi(c.nextSibling), xa = r, kn = !0, Ya = null, n !== null && (fa[zr++] = Er, fa[zr++] = Zi, fa[zr++] = Ia, Er = n.id, Zi = n.overflow, Ia = r), r = Kd(r, o.children), r.flags |= 4096, r);
  }
  function Zd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), vr(n.return, r, l);
  }
  function sf(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Jd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (ir(n, r, o.children, l), o = pt.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Zd(n, l, r);
            else if (n.tag === 19)
              Zd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (sn(pt, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Hn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), sf(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Hn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          sf(r, !0, l, null, d);
          break;
        case "together":
          sf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Ur(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Tr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), al |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, l = Kl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Kl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function nl(n, r, l) {
    switch (r.tag) {
      case 3:
        ch(r), Pn();
        break;
      case 5:
        ft(r);
        break;
      case 1:
        An(r.type) && Oc(r);
        break;
      case 4:
        Bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        sn(ki, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (sn(pt, pt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Xd(n, r, l) : (sn(pt, pt.current & 1), n = Tr(n, r, l), n !== null ? n.sibling : null);
        sn(pt, pt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Jd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), sn(pt, pt.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Mu(n, r, l);
    }
    return Tr(n, r, l);
  }
  var js, Au, qa, lr;
  js = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Au = function() {
  }, qa = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, bu(vi.current);
      var d = null;
      switch (l) {
        case "input":
          c = Mn(n, c), o = Mn(n, o), d = [];
          break;
        case "select":
          c = R({}, c, { value: void 0 }), o = R({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $e(n, c), o = $e(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Dc);
      }
      qn(l, o);
      var g;
      l = null;
      for ($ in c)
        if (!o.hasOwnProperty($) && c.hasOwnProperty($) && c[$] != null)
          if ($ === "style") {
            var w = c[$];
            for (g in w)
              w.hasOwnProperty(g) && (l || (l = {}), l[g] = "");
          } else
            $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (D.hasOwnProperty($) ? d || (d = []) : (d = d || []).push($, null));
      for ($ in o) {
        var O = o[$];
        if (w = c != null ? c[$] : void 0, o.hasOwnProperty($) && O !== w && (O != null || w != null))
          if ($ === "style")
            if (w) {
              for (g in w)
                !w.hasOwnProperty(g) || O && O.hasOwnProperty(g) || (l || (l = {}), l[g] = "");
              for (g in O)
                O.hasOwnProperty(g) && w[g] !== O[g] && (l || (l = {}), l[g] = O[g]);
            } else
              l || (d || (d = []), d.push(
                $,
                l
              )), l = O;
          else
            $ === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, w = w ? w.__html : void 0, O != null && w !== O && (d = d || []).push($, O)) : $ === "children" ? typeof O != "string" && typeof O != "number" || (d = d || []).push($, "" + O) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (D.hasOwnProperty($) ? (O != null && $ === "onScroll" && Cn("scroll", n), d || w === O || (d = [])) : (d = d || []).push($, O));
      }
      l && (d = d || []).push("style", l);
      var $ = d;
      (r.updateQueue = $) && (r.flags |= 4);
    }
  }, lr = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Vs(n, r) {
    if (!kn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Fr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function zy(n, r, l) {
    var o = r.pendingProps;
    switch (Nd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Fr(r), null;
      case 1:
        return An(r.type) && $a(), Fr(r), null;
      case 3:
        return o = r.stateNode, Il(), rn(Yn), rn(gt), Hc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ac(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ya !== null && (Ws(Ya), Ya = null))), Au(n, r), Fr(r), null;
      case 5:
        At(r);
        var c = bu(xo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          qa(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(m(166));
            return Fr(r), null;
          }
          if (n = bu(vi.current), Ac(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[xi] = r, o[Cu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Cn("cancel", o), Cn("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Cn("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ts.length; c++)
                  Cn(Ts[c], o);
                break;
              case "source":
                Cn("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Cn(
                  "error",
                  o
                ), Cn("load", o);
                break;
              case "details":
                Cn("toggle", o);
                break;
              case "input":
                Fn(o, d), Cn("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Cn("invalid", o);
                break;
              case "textarea":
                Lt(o, d), Cn("invalid", o);
            }
            qn(l, d), c = null;
            for (var g in d)
              if (d.hasOwnProperty(g)) {
                var w = d[g];
                g === "children" ? typeof w == "string" ? o.textContent !== w && (d.suppressHydrationWarning !== !0 && kc(o.textContent, w, n), c = ["children", w]) : typeof w == "number" && o.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && kc(
                  o.textContent,
                  w,
                  n
                ), c = ["children", "" + w]) : D.hasOwnProperty(g) && w != null && g === "onScroll" && Cn("scroll", o);
              }
            switch (l) {
              case "input":
                Qt(o), Z(o, d, !0);
                break;
              case "textarea":
                Qt(o), Nn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Dc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            g = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Mr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = g.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = g.createElement(l, { is: o.is }) : (n = g.createElement(l), l === "select" && (g = n, o.multiple ? g.multiple = !0 : o.size && (g.size = o.size))) : n = g.createElementNS(n, l), n[xi] = r, n[Cu] = o, js(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (g = jn(l, o), l) {
                case "dialog":
                  Cn("cancel", n), Cn("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Cn("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ts.length; c++)
                    Cn(Ts[c], n);
                  c = o;
                  break;
                case "source":
                  Cn("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Cn(
                    "error",
                    n
                  ), Cn("load", n), c = o;
                  break;
                case "details":
                  Cn("toggle", n), c = o;
                  break;
                case "input":
                  Fn(n, o), c = Mn(n, o), Cn("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = R({}, o, { value: void 0 }), Cn("invalid", n);
                  break;
                case "textarea":
                  Lt(n, o), c = $e(n, o), Cn("invalid", n);
                  break;
                default:
                  c = o;
              }
              qn(l, c), w = c;
              for (d in w)
                if (w.hasOwnProperty(d)) {
                  var O = w[d];
                  d === "style" ? nn(n, O) : d === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && Ua(n, O)) : d === "children" ? typeof O == "string" ? (l !== "textarea" || O !== "") && Nr(n, O) : typeof O == "number" && Nr(n, "" + O) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (D.hasOwnProperty(d) ? O != null && d === "onScroll" && Cn("scroll", n) : O != null && Le(n, d, O, g));
                }
              switch (l) {
                case "input":
                  Qt(n), Z(n, o, !1);
                  break;
                case "textarea":
                  Qt(n), Nn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ke(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? se(n, !!o.multiple, d, !1) : o.defaultValue != null && se(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Dc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Fr(r), null;
      case 6:
        if (n && r.stateNode != null)
          lr(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(m(166));
          if (l = bu(xo.current), bu(vi.current), Ac(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[xi] = r, (d = o.nodeValue !== l) && (n = xa, n !== null))
              switch (n.tag) {
                case 3:
                  kc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && kc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[xi] = r, r.stateNode = o;
        }
        return Fr(r), null;
      case 13:
        if (rn(pt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (kn && da !== null && r.mode & 1 && !(r.flags & 128))
            Kv(), Pn(), r.flags |= 98560, d = !1;
          else if (d = Ac(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(m(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(m(317));
              d[xi] = r;
            } else
              Pn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Fr(r), d = !1;
          } else
            Ya !== null && (Ws(Ya), Ya = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pt.current & 1 ? or === 0 && (or = 3) : sp())), r.updateQueue !== null && (r.flags |= 4), Fr(r), null);
      case 4:
        return Il(), Au(n, r), n === null && Co(r.stateNode.containerInfo), Fr(r), null;
      case 10:
        return Pl(r.type._context), Fr(r), null;
      case 17:
        return An(r.type) && $a(), Fr(r), null;
      case 19:
        if (rn(pt), d = r.memoizedState, d === null)
          return Fr(r), null;
        if (o = (r.flags & 128) !== 0, g = d.rendering, g === null)
          if (o)
            Vs(d, !1);
          else {
            if (or !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (g = Hn(n), g !== null) {
                  for (r.flags |= 128, Vs(d, !1), o = g.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, g = d.alternate, g === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = g.childLanes, d.lanes = g.lanes, d.child = g.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = g.memoizedProps, d.memoizedState = g.memoizedState, d.updateQueue = g.updateQueue, d.type = g.type, n = g.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return sn(pt, pt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && qt() > Vo && (r.flags |= 128, o = !0, Vs(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Hn(g), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Vs(d, !0), d.tail === null && d.tailMode === "hidden" && !g.alternate && !kn)
                return Fr(r), null;
            } else
              2 * qt() - d.renderingStartTime > Vo && l !== 1073741824 && (r.flags |= 128, o = !0, Vs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (g.sibling = r.child, r.child = g) : (l = d.last, l !== null ? l.sibling = g : r.child = g, d.last = g);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = qt(), r.sibling = null, l = pt.current, sn(pt, o ? l & 1 | 2 : l & 1), r) : (Fr(r), null);
      case 22:
      case 23:
        return op(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Da & 1073741824 && (Fr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Fr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function ep(n, r) {
    switch (Nd(r), r.tag) {
      case 1:
        return An(r.type) && $a(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Il(), rn(Yn), rn(gt), Hc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return At(r), null;
      case 13:
        if (rn(pt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          Pn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return rn(pt), null;
      case 4:
        return Il(), null;
      case 10:
        return Pl(r.type._context), null;
      case 22:
      case 23:
        return op(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ps = !1, ur = !1, fh = typeof WeakSet == "function" ? WeakSet : Set, Ye = null;
  function No(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Qn(n, r, o);
        }
      else
        l.current = null;
  }
  function Hs(n, r, l) {
    try {
      l();
    } catch (o) {
      Qn(n, r, o);
    }
  }
  var dh = !1;
  function ph(n, r) {
    if (wd = Va, n = Rc(), qi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var g = 0, w = -1, O = -1, $ = 0, ue = 0, ce = n, le = null;
            t:
              for (; ; ) {
                for (var Ue; ce !== l || c !== 0 && ce.nodeType !== 3 || (w = g + c), ce !== d || o !== 0 && ce.nodeType !== 3 || (O = g + o), ce.nodeType === 3 && (g += ce.nodeValue.length), (Ue = ce.firstChild) !== null; )
                  le = ce, ce = Ue;
                for (; ; ) {
                  if (ce === n)
                    break t;
                  if (le === l && ++$ === c && (w = g), le === d && ++ue === o && (O = g), (Ue = ce.nextSibling) !== null)
                    break;
                  ce = le, le = ce.parentNode;
                }
                ce = Ue;
              }
            l = w === -1 || O === -1 ? null : { start: w, end: O };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Su = { focusedElem: n, selectionRange: l }, Va = !1, Ye = r; Ye !== null; )
      if (r = Ye, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ye = n;
      else
        for (; Ye !== null; ) {
          r = Ye;
          try {
            var We = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (We !== null) {
                    var Xe = We.memoizedProps, Xn = We.memoizedState, U = r.stateNode, N = U.getSnapshotBeforeUpdate(r.elementType === r.type ? Xe : _a(r.type, Xe), Xn);
                    U.__reactInternalSnapshotBeforeUpdate = N;
                  }
                  break;
                case 3:
                  var V = r.stateNode.containerInfo;
                  V.nodeType === 1 ? V.textContent = "" : V.nodeType === 9 && V.documentElement && V.removeChild(V.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (me) {
            Qn(r, r.return, me);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ye = n;
            break;
          }
          Ye = r.return;
        }
    return We = dh, dh = !1, We;
  }
  function Bs(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Hs(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function $s(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function tp(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function np(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, np(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[xi], delete r[Cu], delete r[kd], delete r[ky], delete r[Dd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function vh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function cf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || vh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Ao(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Dc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ao(n, r, l), n = n.sibling; n !== null; )
        Ao(n, r, l), n = n.sibling;
  }
  function Oi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Oi(n, r, l), n = n.sibling; n !== null; )
        Oi(n, r, l), n = n.sibling;
  }
  var zn = null, hr = !1;
  function Ga(n, r, l) {
    for (l = l.child; l !== null; )
      zo(n, r, l), l = l.sibling;
  }
  function zo(n, r, l) {
    if (aa && typeof aa.onCommitFiberUnmount == "function")
      try {
        aa.onCommitFiberUnmount(Tl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        ur || No(l, r);
      case 6:
        var o = zn, c = hr;
        zn = null, Ga(n, r, l), zn = o, hr = c, zn !== null && (hr ? (n = zn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : zn.removeChild(l.stateNode));
        break;
      case 18:
        zn !== null && (hr ? (n = zn, l = l.stateNode, n.nodeType === 8 ? Al(n.parentNode, l) : n.nodeType === 1 && Al(n, l), Dl(n)) : Al(zn, l.stateNode));
        break;
      case 4:
        o = zn, c = hr, zn = l.stateNode.containerInfo, hr = !0, Ga(n, r, l), zn = o, hr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ur && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, g = d.destroy;
            d = d.tag, g !== void 0 && (d & 2 || d & 4) && Hs(l, r, g), c = c.next;
          } while (c !== o);
        }
        Ga(n, r, l);
        break;
      case 1:
        if (!ur && (No(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (w) {
            Qn(l, r, w);
          }
        Ga(n, r, l);
        break;
      case 21:
        Ga(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ur = (o = ur) || l.memoizedState !== null, Ga(n, r, l), ur = o) : Ga(n, r, l);
        break;
      default:
        Ga(n, r, l);
    }
  }
  function rl(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new fh()), r.forEach(function(o) {
        var c = Hy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function hi(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, g = r, w = g;
          e:
            for (; w !== null; ) {
              switch (w.tag) {
                case 5:
                  zn = w.stateNode, hr = !1;
                  break e;
                case 3:
                  zn = w.stateNode.containerInfo, hr = !0;
                  break e;
                case 4:
                  zn = w.stateNode.containerInfo, hr = !0;
                  break e;
              }
              w = w.return;
            }
          if (zn === null)
            throw Error(m(160));
          zo(d, g, c), zn = null, hr = !1;
          var O = c.alternate;
          O !== null && (O.return = null), c.return = null;
        } catch ($) {
          Qn(c, r, $);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        hh(r, n), r = r.sibling;
  }
  function hh(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (hi(r, n), Li(n), o & 4) {
          try {
            Bs(3, n, n.return), $s(3, n);
          } catch (Xe) {
            Qn(n, n.return, Xe);
          }
          try {
            Bs(5, n, n.return);
          } catch (Xe) {
            Qn(n, n.return, Xe);
          }
        }
        break;
      case 1:
        hi(r, n), Li(n), o & 512 && l !== null && No(l, l.return);
        break;
      case 5:
        if (hi(r, n), Li(n), o & 512 && l !== null && No(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Nr(c, "");
          } catch (Xe) {
            Qn(n, n.return, Xe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, g = l !== null ? l.memoizedProps : d, w = n.type, O = n.updateQueue;
          if (n.updateQueue = null, O !== null)
            try {
              w === "input" && d.type === "radio" && d.name != null && L(c, d), jn(w, g);
              var $ = jn(w, d);
              for (g = 0; g < O.length; g += 2) {
                var ue = O[g], ce = O[g + 1];
                ue === "style" ? nn(c, ce) : ue === "dangerouslySetInnerHTML" ? Ua(c, ce) : ue === "children" ? Nr(c, ce) : Le(c, ue, ce, $);
              }
              switch (w) {
                case "input":
                  I(c, d);
                  break;
                case "textarea":
                  Ht(c, d);
                  break;
                case "select":
                  var le = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var Ue = d.value;
                  Ue != null ? se(c, !!d.multiple, Ue, !1) : le !== !!d.multiple && (d.defaultValue != null ? se(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : se(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Cu] = d;
            } catch (Xe) {
              Qn(n, n.return, Xe);
            }
        }
        break;
      case 6:
        if (hi(r, n), Li(n), o & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Xe) {
            Qn(n, n.return, Xe);
          }
        }
        break;
      case 3:
        if (hi(r, n), Li(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Dl(r.containerInfo);
          } catch (Xe) {
            Qn(n, n.return, Xe);
          }
        break;
      case 4:
        hi(r, n), Li(n);
        break;
      case 13:
        hi(r, n), Li(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (ip = qt())), o & 4 && rl(n);
        break;
      case 22:
        if (ue = l !== null && l.memoizedState !== null, n.mode & 1 ? (ur = ($ = ur) || ue, hi(r, n), ur = $) : hi(r, n), Li(n), o & 8192) {
          if ($ = n.memoizedState !== null, (n.stateNode.isHidden = $) && !ue && n.mode & 1)
            for (Ye = n, ue = n.child; ue !== null; ) {
              for (ce = Ye = ue; Ye !== null; ) {
                switch (le = Ye, Ue = le.child, le.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Bs(4, le, le.return);
                    break;
                  case 1:
                    No(le, le.return);
                    var We = le.stateNode;
                    if (typeof We.componentWillUnmount == "function") {
                      o = le, l = le.return;
                      try {
                        r = o, We.props = r.memoizedProps, We.state = r.memoizedState, We.componentWillUnmount();
                      } catch (Xe) {
                        Qn(o, l, Xe);
                      }
                    }
                    break;
                  case 5:
                    No(le, le.return);
                    break;
                  case 22:
                    if (le.memoizedState !== null) {
                      rp(ce);
                      continue;
                    }
                }
                Ue !== null ? (Ue.return = le, Ye = Ue) : rp(ce);
              }
              ue = ue.sibling;
            }
          e:
            for (ue = null, ce = n; ; ) {
              if (ce.tag === 5) {
                if (ue === null) {
                  ue = ce;
                  try {
                    c = ce.stateNode, $ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = ce.stateNode, O = ce.memoizedProps.style, g = O != null && O.hasOwnProperty("display") ? O.display : null, w.style.display = kt("display", g));
                  } catch (Xe) {
                    Qn(n, n.return, Xe);
                  }
                }
              } else if (ce.tag === 6) {
                if (ue === null)
                  try {
                    ce.stateNode.nodeValue = $ ? "" : ce.memoizedProps;
                  } catch (Xe) {
                    Qn(n, n.return, Xe);
                  }
              } else if ((ce.tag !== 22 && ce.tag !== 23 || ce.memoizedState === null || ce === n) && ce.child !== null) {
                ce.child.return = ce, ce = ce.child;
                continue;
              }
              if (ce === n)
                break e;
              for (; ce.sibling === null; ) {
                if (ce.return === null || ce.return === n)
                  break e;
                ue === ce && (ue = null), ce = ce.return;
              }
              ue === ce && (ue = null), ce.sibling.return = ce.return, ce = ce.sibling;
            }
        }
        break;
      case 19:
        hi(r, n), Li(n), o & 4 && rl(n);
        break;
      case 21:
        break;
      default:
        hi(
          r,
          n
        ), Li(n);
    }
  }
  function Li(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (vh(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(m(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Nr(c, ""), o.flags &= -33);
            var d = cf(n);
            Oi(n, d, c);
            break;
          case 3:
          case 4:
            var g = o.stateNode.containerInfo, w = cf(n);
            Ao(n, w, g);
            break;
          default:
            throw Error(m(161));
        }
      } catch (O) {
        Qn(n, n.return, O);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function mh(n, r, l) {
    Ye = n, Uo(n);
  }
  function Uo(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Ye !== null; ) {
      var c = Ye, d = c.child;
      if (c.tag === 22 && o) {
        var g = c.memoizedState !== null || Ps;
        if (!g) {
          var w = c.alternate, O = w !== null && w.memoizedState !== null || ur;
          w = Ps;
          var $ = ur;
          if (Ps = g, (ur = O) && !$)
            for (Ye = c; Ye !== null; )
              g = Ye, O = g.child, g.tag === 22 && g.memoizedState !== null ? gh(c) : O !== null ? (O.return = g, Ye = O) : gh(c);
          for (; d !== null; )
            Ye = d, Uo(d), d = d.sibling;
          Ye = c, Ps = w, ur = $;
        }
        yh(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ye = d) : yh(n);
    }
  }
  function yh(n) {
    for (; Ye !== null; ) {
      var r = Ye;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ur || $s(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !ur)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : _a(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && Ru(r, d, o);
                break;
              case 3:
                var g = r.updateQueue;
                if (g !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  Ru(r, g, l);
                }
                break;
              case 5:
                var w = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = w;
                  var O = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      O.autoFocus && l.focus();
                      break;
                    case "img":
                      O.src && (l.src = O.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var $ = r.alternate;
                  if ($ !== null) {
                    var ue = $.memoizedState;
                    if (ue !== null) {
                      var ce = ue.dehydrated;
                      ce !== null && Dl(ce);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          ur || r.flags & 512 && tp(r);
        } catch (le) {
          Qn(r, r.return, le);
        }
      }
      if (r === n) {
        Ye = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ye = l;
        break;
      }
      Ye = r.return;
    }
  }
  function rp(n) {
    for (; Ye !== null; ) {
      var r = Ye;
      if (r === n) {
        Ye = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ye = l;
        break;
      }
      Ye = r.return;
    }
  }
  function gh(n) {
    for (; Ye !== null; ) {
      var r = Ye;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              $s(4, r);
            } catch (O) {
              Qn(r, l, O);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (O) {
                Qn(r, c, O);
              }
            }
            var d = r.return;
            try {
              tp(r);
            } catch (O) {
              Qn(r, d, O);
            }
            break;
          case 5:
            var g = r.return;
            try {
              tp(r);
            } catch (O) {
              Qn(r, g, O);
            }
        }
      } catch (O) {
        Qn(r, r.return, O);
      }
      if (r === n) {
        Ye = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, Ye = w;
        break;
      }
      Ye = r.return;
    }
  }
  var ff = Math.ceil, Is = Ie.ReactCurrentDispatcher, ap = Ie.ReactCurrentOwner, jr = Ie.ReactCurrentBatchConfig, zt = 0, Bn = null, Wn = null, mr = 0, Da = 0, Fo = xt(0), or = 0, Ys = null, al = 0, df = 0, jo = 0, zu = null, Qr = null, ip = 0, Vo = 1 / 0, il = null, pf = !1, Uu = null, Mi = null, ql = !1, Gl = null, vf = 0, Po = 0, hf = null, Fu = -1, ju = 0;
  function Vr() {
    return zt & 6 ? qt() : Fu !== -1 ? Fu : Fu = qt();
  }
  function tr(n) {
    return n.mode & 1 ? zt & 2 && mr !== 0 ? mr & -mr : zc.transition !== null ? (ju === 0 && (ju = lo()), ju) : (n = Jt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ps(n.type)), n) : 1;
  }
  function Pr(n, r, l, o) {
    if (50 < Po)
      throw Po = 0, hf = null, Error(m(185));
    $i(n, l, o), (!(zt & 2) || n !== Bn) && (n === Bn && (!(zt & 2) && (df |= l), or === 4 && Xa(n, mr)), Hr(n, o), l === 1 && zt === 0 && !(r.mode & 1) && (Vo = qt() + 500, pr && sa()));
  }
  function Hr(n, r) {
    var l = n.callbackNode;
    wl(n, r);
    var o = Yr(n, n === Bn ? mr : 0);
    if (o === 0)
      l !== null && Sr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Sr(l), r === 1)
        n.tag === 0 ? Ld(Sh.bind(null, n)) : Od(Sh.bind(null, n)), _d(function() {
          !(zt & 6) && sa();
        }), l = null;
      else {
        switch (oo(o)) {
          case 1:
            l = ui;
            break;
          case 4:
            l = Mt;
            break;
          case 16:
            l = Ri;
            break;
          case 536870912:
            l = ao;
            break;
          default:
            l = Ri;
        }
        l = fp(l, Ho.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Ho(n, r) {
    if (Fu = -1, ju = 0, zt & 6)
      throw Error(m(327));
    var l = n.callbackNode;
    if ($o() && n.callbackNode !== l)
      return null;
    var o = Yr(n, n === Bn ? mr : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = yf(n, o);
    else {
      r = o;
      var c = zt;
      zt |= 2;
      var d = mf();
      (Bn !== n || mr !== r) && (il = null, Vo = qt() + 500, Vu(n, r));
      do
        try {
          Fy();
          break;
        } catch (w) {
          Eh(n, w);
        }
      while (1);
      Fd(), Is.current = d, zt = c, Wn !== null ? r = 0 : (Bn = null, mr = 0, r = or);
    }
    if (r !== 0) {
      if (r === 2 && (c = xl(n), c !== 0 && (o = c, r = lp(n, c))), r === 1)
        throw l = Ys, Vu(n, 0), Xa(n, o), Hr(n, qt()), l;
      if (r === 6)
        Xa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !up(c) && (r = yf(n, o), r === 2 && (d = xl(n), d !== 0 && (o = d, r = lp(n, d))), r === 1))
          throw l = Ys, Vu(n, 0), Xa(n, o), Hr(n, qt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Pu(n, Qr, il);
            break;
          case 3:
            if (Xa(n, o), (o & 130023424) === o && (r = ip + 500 - qt(), 10 < r)) {
              if (Yr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Vr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Eu(Pu.bind(null, n, Qr, il), r);
              break;
            }
            Pu(n, Qr, il);
            break;
          case 4:
            if (Xa(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var g = 31 - Ir(o);
              d = 1 << g, g = r[g], g > c && (c = g), o &= ~d;
            }
            if (o = c, o = qt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ff(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Eu(Pu.bind(null, n, Qr, il), o);
              break;
            }
            Pu(n, Qr, il);
            break;
          case 5:
            Pu(n, Qr, il);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Hr(n, qt()), n.callbackNode === l ? Ho.bind(null, n) : null;
  }
  function lp(n, r) {
    var l = zu;
    return n.current.memoizedState.isDehydrated && (Vu(n, r).flags |= 256), n = yf(n, r), n !== 2 && (r = Qr, Qr = l, r !== null && Ws(r)), n;
  }
  function Ws(n) {
    Qr === null ? Qr = n : Qr.push.apply(Qr, n);
  }
  function up(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!Pa(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Xa(n, r) {
    for (r &= ~jo, r &= ~df, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Ir(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Sh(n) {
    if (zt & 6)
      throw Error(m(327));
    $o();
    var r = Yr(n, 0);
    if (!(r & 1))
      return Hr(n, qt()), null;
    var l = yf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = xl(n);
      o !== 0 && (r = o, l = lp(n, o));
    }
    if (l === 1)
      throw l = Ys, Vu(n, 0), Xa(n, r), Hr(n, qt()), l;
    if (l === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Pu(n, Qr, il), Hr(n, qt()), null;
  }
  function Bo(n, r) {
    var l = zt;
    zt |= 1;
    try {
      return n(r);
    } finally {
      zt = l, zt === 0 && (Vo = qt() + 500, pr && sa());
    }
  }
  function Xl(n) {
    Gl !== null && Gl.tag === 0 && !(zt & 6) && $o();
    var r = zt;
    zt |= 1;
    var l = jr.transition, o = Jt;
    try {
      if (jr.transition = null, Jt = 1, n)
        return n();
    } finally {
      Jt = o, jr.transition = l, zt = r, !(zt & 6) && sa();
    }
  }
  function op() {
    Da = Fo.current, rn(Fo);
  }
  function Vu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Qv(l)), Wn !== null)
      for (l = Wn.return; l !== null; ) {
        var o = l;
        switch (Nd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && $a();
            break;
          case 3:
            Il(), rn(Yn), rn(gt), Hc();
            break;
          case 5:
            At(o);
            break;
          case 4:
            Il();
            break;
          case 13:
            rn(pt);
            break;
          case 19:
            rn(pt);
            break;
          case 10:
            Pl(o.type._context);
            break;
          case 22:
          case 23:
            op();
        }
        l = l.return;
      }
    if (Bn = n, Wn = n = Kl(n.current, null), mr = Da = r, or = 0, Ys = null, jo = df = al = 0, Qr = zu = null, Cr !== null) {
      for (r = 0; r < Cr.length; r++)
        if (l = Cr[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var g = d.next;
            d.next = c, o.next = g;
          }
          l.pending = o;
        }
      Cr = null;
    }
    return n;
  }
  function Eh(n, r) {
    do {
      var l = Wn;
      try {
        if (Fd(), Bc.current = af, vt) {
          for (var o = Dn.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          vt = !1;
        }
        if (wu = 0, $t = J = Dn = null, Di = !1, ka = 0, ap.current = null, l === null || l.return === null) {
          or = 1, Ys = r, Wn = null;
          break;
        }
        e: {
          var d = n, g = l.return, w = l, O = r;
          if (r = mr, w.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
            var $ = O, ue = w, ce = ue.tag;
            if (!(ue.mode & 1) && (ce === 0 || ce === 11 || ce === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var Ue = Wd(g);
            if (Ue !== null) {
              Ue.flags &= -257, Qd(Ue, g, w, d, r), Ue.mode & 1 && oh(d, $, r), r = Ue, O = $;
              var We = r.updateQueue;
              if (We === null) {
                var Xe = /* @__PURE__ */ new Set();
                Xe.add(O), r.updateQueue = Xe;
              } else
                We.add(O);
              break e;
            } else {
              if (!(r & 1)) {
                oh(d, $, r), sp();
                break e;
              }
              O = Error(m(426));
            }
          } else if (kn && w.mode & 1) {
            var Xn = Wd(g);
            if (Xn !== null) {
              !(Xn.flags & 65536) && (Xn.flags |= 256), Qd(Xn, g, w, d, r), zd(Oo(O, w));
              break e;
            }
          }
          d = O = Oo(O, w), or !== 4 && (or = 2), zu === null ? zu = [d] : zu.push(d), d = g;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var U = uh(d, O, r);
                Pd(d, U);
                break e;
              case 1:
                w = O;
                var N = d.type, V = d.stateNode;
                if (!(d.flags & 128) && (typeof N.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && (Mi === null || !Mi.has(V)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var me = Fs(d, w, r);
                  Pd(d, me);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        cp(l);
      } catch (Je) {
        r = Je, Wn === l && l !== null && (Wn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function mf() {
    var n = Is.current;
    return Is.current = af, n === null ? af : n;
  }
  function sp() {
    (or === 0 || or === 3 || or === 2) && (or = 4), Bn === null || !(al & 268435455) && !(df & 268435455) || Xa(Bn, mr);
  }
  function yf(n, r) {
    var l = zt;
    zt |= 2;
    var o = mf();
    (Bn !== n || mr !== r) && (il = null, Vu(n, r));
    do
      try {
        Uy();
        break;
      } catch (c) {
        Eh(n, c);
      }
    while (1);
    if (Fd(), zt = l, Is.current = o, Wn !== null)
      throw Error(m(261));
    return Bn = null, mr = 0, or;
  }
  function Uy() {
    for (; Wn !== null; )
      Ch(Wn);
  }
  function Fy() {
    for (; Wn !== null && !Ti(); )
      Ch(Wn);
  }
  function Ch(n) {
    var r = Rh(n.alternate, n, Da);
    n.memoizedProps = n.pendingProps, r === null ? cp(n) : Wn = r, ap.current = null;
  }
  function cp(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ep(l, r), l !== null) {
          l.flags &= 32767, Wn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          or = 6, Wn = null;
          return;
        }
      } else if (l = zy(l, r, Da), l !== null) {
        Wn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Wn = r;
        return;
      }
      Wn = r = n;
    } while (r !== null);
    or === 0 && (or = 5);
  }
  function Pu(n, r, l) {
    var o = Jt, c = jr.transition;
    try {
      jr.transition = null, Jt = 1, jy(n, r, l, o);
    } finally {
      jr.transition = c, Jt = o;
    }
    return null;
  }
  function jy(n, r, l, o) {
    do
      $o();
    while (Gl !== null);
    if (zt & 6)
      throw Error(m(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (ld(n, d), n === Bn && (Wn = Bn = null, mr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ql || (ql = !0, fp(Ri, function() {
      return $o(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = jr.transition, jr.transition = null;
      var g = Jt;
      Jt = 1;
      var w = zt;
      zt |= 4, ap.current = null, ph(n, l), hh(l, n), bc(Su), Va = !!wd, Su = wd = null, n.current = l, mh(l), ro(), zt = w, Jt = g, jr.transition = d;
    } else
      n.current = l;
    if (ql && (ql = !1, Gl = n, vf = c), d = n.pendingLanes, d === 0 && (Mi = null), cs(l.stateNode), Hr(n, qt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (pf)
      throw pf = !1, n = Uu, Uu = null, n;
    return vf & 1 && n.tag !== 0 && $o(), d = n.pendingLanes, d & 1 ? n === hf ? Po++ : (Po = 0, hf = n) : Po = 0, sa(), null;
  }
  function $o() {
    if (Gl !== null) {
      var n = oo(vf), r = jr.transition, l = Jt;
      try {
        if (jr.transition = null, Jt = 16 > n ? 16 : n, Gl === null)
          var o = !1;
        else {
          if (n = Gl, Gl = null, vf = 0, zt & 6)
            throw Error(m(331));
          var c = zt;
          for (zt |= 4, Ye = n.current; Ye !== null; ) {
            var d = Ye, g = d.child;
            if (Ye.flags & 16) {
              var w = d.deletions;
              if (w !== null) {
                for (var O = 0; O < w.length; O++) {
                  var $ = w[O];
                  for (Ye = $; Ye !== null; ) {
                    var ue = Ye;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bs(8, ue, d);
                    }
                    var ce = ue.child;
                    if (ce !== null)
                      ce.return = ue, Ye = ce;
                    else
                      for (; Ye !== null; ) {
                        ue = Ye;
                        var le = ue.sibling, Ue = ue.return;
                        if (np(ue), ue === $) {
                          Ye = null;
                          break;
                        }
                        if (le !== null) {
                          le.return = Ue, Ye = le;
                          break;
                        }
                        Ye = Ue;
                      }
                  }
                }
                var We = d.alternate;
                if (We !== null) {
                  var Xe = We.child;
                  if (Xe !== null) {
                    We.child = null;
                    do {
                      var Xn = Xe.sibling;
                      Xe.sibling = null, Xe = Xn;
                    } while (Xe !== null);
                  }
                }
                Ye = d;
              }
            }
            if (d.subtreeFlags & 2064 && g !== null)
              g.return = d, Ye = g;
            else
              e:
                for (; Ye !== null; ) {
                  if (d = Ye, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bs(9, d, d.return);
                    }
                  var U = d.sibling;
                  if (U !== null) {
                    U.return = d.return, Ye = U;
                    break e;
                  }
                  Ye = d.return;
                }
          }
          var N = n.current;
          for (Ye = N; Ye !== null; ) {
            g = Ye;
            var V = g.child;
            if (g.subtreeFlags & 2064 && V !== null)
              V.return = g, Ye = V;
            else
              e:
                for (g = N; Ye !== null; ) {
                  if (w = Ye, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          $s(9, w);
                      }
                    } catch (Je) {
                      Qn(w, w.return, Je);
                    }
                  if (w === g) {
                    Ye = null;
                    break e;
                  }
                  var me = w.sibling;
                  if (me !== null) {
                    me.return = w.return, Ye = me;
                    break e;
                  }
                  Ye = w.return;
                }
          }
          if (zt = c, sa(), aa && typeof aa.onPostCommitFiberRoot == "function")
            try {
              aa.onPostCommitFiberRoot(Tl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Jt = l, jr.transition = r;
      }
    }
    return !1;
  }
  function Th(n, r, l) {
    r = Oo(l, r), r = uh(n, r, 1), n = Bl(n, r, 1), r = Vr(), n !== null && ($i(n, 1, r), Hr(n, r));
  }
  function Qn(n, r, l) {
    if (n.tag === 3)
      Th(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Th(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Mi === null || !Mi.has(o))) {
            n = Oo(l, n), n = Fs(r, n, 1), r = Bl(r, n, 1), n = Vr(), r !== null && ($i(r, 1, n), Hr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Vr(), n.pingedLanes |= n.suspendedLanes & l, Bn === n && (mr & l) === l && (or === 4 || or === 3 && (mr & 130023424) === mr && 500 > qt() - ip ? Vu(n, 0) : jo |= l), Hr(n, r);
  }
  function gf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Rl, Rl <<= 1, !(Rl & 130023424) && (Rl = 4194304)) : r = 1);
    var l = Vr();
    n = Ji(n, r), n !== null && ($i(n, r, l), Hr(n, l));
  }
  function Py(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), gf(n, l);
  }
  function Hy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    o !== null && o.delete(r), gf(n, l);
  }
  var Rh;
  Rh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Yn.current)
        er = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return er = !1, nl(n, r, l);
        er = !!(n.flags & 131072);
      }
    else
      er = !1, kn && r.flags & 1048576 && Md(r, Ro, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ur(n, r), n = r.pendingProps;
        var c = Ba(r, gt.current);
        xe(r, l), c = Yl(null, r, o, n, c, l);
        var d = ku();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, An(o) ? (d = !0, Oc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Vd(r), c.updater = jc, r.stateNode = c, c._reactInternals = r, Vc(r, o, n, l), r = sh(null, r, o, !0, d, l)) : (r.tag = 0, kn && d && Lc(r), ir(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ur(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = $y(o), n = _a(o, n), c) {
            case 0:
              r = Lo(null, r, o, n, l);
              break e;
            case 1:
              r = qd(null, r, o, n, l);
              break e;
            case 11:
              r = Ql(null, r, o, n, l);
              break e;
            case 14:
              r = uf(null, r, o, _a(o.type, n), l);
              break e;
          }
          throw Error(m(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : _a(o, c), Lo(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : _a(o, c), qd(n, r, o, c, l);
      case 3:
        e: {
          if (ch(r), n === null)
            throw Error(m(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, ar(n, r), $l(r, o, null, l);
          var g = r.memoizedState;
          if (o = g.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Oo(Error(m(423)), r), r = of(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Oo(Error(m(424)), r), r = of(n, r, o, l, c);
              break e;
            } else
              for (da = pi(r.stateNode.containerInfo.firstChild), xa = r, kn = !0, Ya = null, l = ih(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Pn(), o === c) {
              r = Tr(n, r, l);
              break e;
            }
            ir(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return ft(r), n === null && Nc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, g = c.children, ws(o, c) ? g = null : d !== null && ws(o, d) && (r.flags |= 32), _t(n, r), ir(n, r, g, l), r.child;
      case 6:
        return n === null && Nc(r), null;
      case 13:
        return Xd(n, r, l);
      case 4:
        return Bd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = wo(r, null, o, l) : ir(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : _a(o, c), Ql(n, r, o, c, l);
      case 7:
        return ir(n, r, r.pendingProps, l), r.child;
      case 8:
        return ir(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return ir(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, g = c.value, sn(ki, o._currentValue), o._currentValue = g, d !== null)
            if (Pa(d.value, g)) {
              if (d.children === c.children && !Yn.current) {
                r = Tr(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var w = d.dependencies;
                if (w !== null) {
                  g = d.child;
                  for (var O = w.firstContext; O !== null; ) {
                    if (O.context === o) {
                      if (d.tag === 1) {
                        O = el(-1, l & -l), O.tag = 2;
                        var $ = d.updateQueue;
                        if ($ !== null) {
                          $ = $.shared;
                          var ue = $.pending;
                          ue === null ? O.next = O : (O.next = ue.next, ue.next = O), $.pending = O;
                        }
                      }
                      d.lanes |= l, O = d.alternate, O !== null && (O.lanes |= l), vr(
                        d.return,
                        l,
                        r
                      ), w.lanes |= l;
                      break;
                    }
                    O = O.next;
                  }
                } else if (d.tag === 10)
                  g = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (g = d.return, g === null)
                    throw Error(m(341));
                  g.lanes |= l, w = g.alternate, w !== null && (w.lanes |= l), vr(g, l, r), g = d.sibling;
                } else
                  g = d.child;
                if (g !== null)
                  g.return = d;
                else
                  for (g = d; g !== null; ) {
                    if (g === r) {
                      g = null;
                      break;
                    }
                    if (d = g.sibling, d !== null) {
                      d.return = g.return, g = d;
                      break;
                    }
                    g = g.return;
                  }
                d = g;
              }
          ir(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, xe(r, l), c = Gn(c), o = o(c), r.flags |= 1, ir(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = _a(o, r.pendingProps), c = _a(o.type, c), uf(n, r, o, c, l);
      case 15:
        return ha(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : _a(o, c), Ur(n, r), r.tag = 1, An(o) ? (n = !0, Oc(r)) : n = !1, xe(r, l), th(r, o, c), Vc(r, o, c, l), sh(null, r, o, !0, n, l);
      case 19:
        return Jd(n, r, l);
      case 22:
        return Mu(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function fp(n, r) {
    return bn(n, r);
  }
  function By(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ka(n, r, l, o) {
    return new By(n, r, l, o);
  }
  function dp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function $y(n) {
    if (typeof n == "function")
      return dp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === at)
        return 11;
      if (n === ht)
        return 14;
    }
    return 2;
  }
  function Kl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ka(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Sf(n, r, l, o, c, d) {
    var g = 2;
    if (o = n, typeof n == "function")
      dp(n) && (g = 1);
    else if (typeof n == "string")
      g = 5;
    else
      e:
        switch (n) {
          case tt:
            return Hu(l.children, c, d, r);
          case Kt:
            g = 8, c |= 8;
            break;
          case Ft:
            return n = Ka(12, l, r, c | 2), n.elementType = Ft, n.lanes = d, n;
          case he:
            return n = Ka(13, l, r, c), n.elementType = he, n.lanes = d, n;
          case Ne:
            return n = Ka(19, l, r, c), n.elementType = Ne, n.lanes = d, n;
          case Ee:
            return Qs(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ot:
                  g = 10;
                  break e;
                case Et:
                  g = 9;
                  break e;
                case at:
                  g = 11;
                  break e;
                case ht:
                  g = 14;
                  break e;
                case rt:
                  g = 16, o = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = Ka(g, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Hu(n, r, l, o) {
    return n = Ka(7, n, o, r), n.lanes = l, n;
  }
  function Qs(n, r, l, o) {
    return n = Ka(22, n, o, r), n.elementType = Ee, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function qs(n, r, l) {
    return n = Ka(6, n, null, r), n.lanes = l, n;
  }
  function Bu(n, r, l) {
    return r = Ka(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Iy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uo(0), this.expirationTimes = uo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uo(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Ef(n, r, l, o, c, d, g, w, O) {
    return n = new Iy(n, r, l, w, O), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ka(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vd(d), n;
  }
  function bh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: st, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function pp(n) {
    if (!n)
      return _i;
    n = n._reactInternals;
    e: {
      if (bt(n) !== n || n.tag !== 1)
        throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (An(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (An(l))
        return ks(n, l, r);
    }
    return r;
  }
  function wh(n, r, l, o, c, d, g, w, O) {
    return n = Ef(l, o, !0, n, c, d, g, w, O), n.context = pp(null), l = n.current, o = Vr(), c = tr(l), d = el(o, c), d.callback = r ?? null, Bl(l, d, c), n.current.lanes = c, $i(n, c, o), Hr(n, o), n;
  }
  function Gs(n, r, l, o) {
    var c = r.current, d = Vr(), g = tr(c);
    return l = pp(l), r.context === null ? r.context = l : r.pendingContext = l, r = el(d, g), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Bl(c, r, g), n !== null && (Pr(n, c, g, d), Fc(n, c, g)), g;
  }
  function Cf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function xh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function vp(n, r) {
    xh(n, r), (n = n.alternate) && xh(n, r);
  }
  function _h() {
    return null;
  }
  var hp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Tf(n) {
    this._internalRoot = n;
  }
  ll.prototype.render = Tf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(m(409));
    Gs(n, r, null, null);
  }, ll.prototype.unmount = Tf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xl(function() {
        Gs(null, n, null, null);
      }), r[Ki] = null;
    }
  };
  function ll(n) {
    this._internalRoot = n;
  }
  ll.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = co();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < on.length && r !== 0 && r < on[l].priority; l++)
        ;
      on.splice(l, 0, n), l === 0 && yc(n);
    }
  };
  function mp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Rf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function kh() {
  }
  function Yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var $ = Cf(g);
          d.call($);
        };
      }
      var g = wh(r, o, n, 0, null, !1, !1, "", kh);
      return n._reactRootContainer = g, n[Ki] = g.current, Co(n.nodeType === 8 ? n.parentNode : n), Xl(), g;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var w = o;
      o = function() {
        var $ = Cf(O);
        w.call($);
      };
    }
    var O = Ef(n, 0, !1, null, null, !1, !1, "", kh);
    return n._reactRootContainer = O, n[Ki] = O.current, Co(n.nodeType === 8 ? n.parentNode : n), Xl(function() {
      Gs(r, O, l, o);
    }), O;
  }
  function bf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var g = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var O = Cf(g);
          w.call(O);
        };
      }
      Gs(r, g, n, c);
    } else
      g = Yy(l, r, n, c, o);
    return Cf(g);
  }
  du = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = oi(r.pendingLanes);
          l !== 0 && (bi(r, l | 1), Hr(r, qt()), !(zt & 6) && (Vo = qt() + 500, sa()));
        }
        break;
      case 13:
        Xl(function() {
          var o = Ji(n, 1);
          if (o !== null) {
            var c = Vr();
            Pr(o, n, 1, c);
          }
        }), vp(n, 1);
    }
  }, so = function(n) {
    if (n.tag === 13) {
      var r = Ji(n, 134217728);
      if (r !== null) {
        var l = Vr();
        Pr(r, n, 134217728, l);
      }
      vp(n, 134217728);
    }
  }, Gt = function(n) {
    if (n.tag === 13) {
      var r = tr(n), l = Ji(n, r);
      if (l !== null) {
        var o = Vr();
        Pr(l, n, r, o);
      }
      vp(n, r);
    }
  }, co = function() {
    return Jt;
  }, fo = function(n, r) {
    var l = Jt;
    try {
      return Jt = n, r();
    } finally {
      Jt = l;
    }
  }, Br = function(n, r, l) {
    switch (r) {
      case "input":
        if (I(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = lt(o);
              if (!c)
                throw Error(m(90));
              Se(o), I(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ht(n, l);
        break;
      case "select":
        r = l.value, r != null && se(n, !!l.multiple, r, !1);
    }
  }, fu = Bo, no = Xl;
  var Wy = { usingClientEntryPoint: !1, Events: [_s, To, lt, Fa, Sl, Bo] }, Io = { findFiberByHostInstance: Ha, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Qy = { bundleType: Io.bundleType, version: Io.version, rendererPackageName: Io.rendererPackageName, rendererConfig: Io.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ie.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Zn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Io.findFiberByHostInstance || _h, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wf.isDisabled && wf.supportsFiber)
      try {
        Tl = wf.inject(Qy), aa = wf;
      } catch {
      }
  }
  return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wy, ri.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!mp(r))
      throw Error(m(200));
    return bh(n, r, null, l);
  }, ri.createRoot = function(n, r) {
    if (!mp(n))
      throw Error(m(299));
    var l = !1, o = "", c = hp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Ef(n, 1, !1, null, null, l, !1, o, c), n[Ki] = r.current, Co(n.nodeType === 8 ? n.parentNode : n), new Tf(r);
  }, ri.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Zn(r), n = n === null ? null : n.stateNode, n;
  }, ri.flushSync = function(n) {
    return Xl(n);
  }, ri.hydrate = function(n, r, l) {
    if (!Rf(r))
      throw Error(m(200));
    return bf(null, n, r, !0, l);
  }, ri.hydrateRoot = function(n, r, l) {
    if (!mp(n))
      throw Error(m(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", g = hp;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (g = l.onRecoverableError)), r = wh(r, null, n, 1, l ?? null, c, !1, d, g), n[Ki] = r.current, Co(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new ll(r);
  }, ri.render = function(n, r, l) {
    if (!Rf(r))
      throw Error(m(200));
    return bf(null, n, r, !1, l);
  }, ri.unmountComponentAtNode = function(n) {
    if (!Rf(n))
      throw Error(m(40));
    return n._reactRootContainer ? (Xl(function() {
      bf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ki] = null;
      });
    }), !0) : !1;
  }, ri.unstable_batchedUpdates = Bo, ri.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Rf(l))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return bf(n, r, l, !1, o);
  }, ri.version = "18.2.0-next-9e3b772b8-20220608", ri;
}
var ai = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i1;
function VD() {
  return i1 || (i1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var p = Vt, E = b1(), m = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, C = !1;
    function D(e) {
      C = e;
    }
    function x(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ne("warn", e, a);
      }
    }
    function S(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ne("error", e, a);
      }
    }
    function ne(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Y = 0, G = 1, pe = 2, Q = 3, ee = 4, ae = 5, Oe = 6, Ke = 7, et = 8, Dt = 9, Re = 10, Le = 11, Ie = 12, W = 13, st = 14, tt = 15, Kt = 16, Ft = 17, Ot = 18, Et = 19, at = 21, he = 22, Ne = 23, ht = 24, rt = 25, Ee = !0, oe = !1, He = !1, R = !1, z = !1, re = !0, ge = !1, de = !1, ze = !0, Ce = !0, we = !0, ke = /* @__PURE__ */ new Set(), Ge = {}, mt = {};
    function Qt(e, t) {
      Se(e, t), Se(e + "Capture", t);
    }
    function Se(e, t) {
      Ge[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ge[e] = t;
      {
        var a = e.toLowerCase();
        mt[a] = e, e === "onDoubleClick" && (mt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ke.add(t[i]);
    }
    var Pt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mn = Object.prototype.hasOwnProperty;
    function Fn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function L(e) {
      try {
        return I(e), !1;
      } catch {
        return !0;
      }
    }
    function I(e) {
      return "" + e;
    }
    function Z(e, t) {
      if (L(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Fn(e)), I(e);
    }
    function Me(e) {
      if (L(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fn(e)), I(e);
    }
    function ye(e, t) {
      if (L(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Fn(e)), I(e);
    }
    function se(e, t) {
      if (L(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Fn(e)), I(e);
    }
    function $e(e) {
      if (L(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Fn(e)), I(e);
    }
    function Lt(e) {
      if (L(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Fn(e)), I(e);
    }
    var Ht = 0, Nn = 1, Mr = 2, gn = 3, rr = 4, Ua = 5, Nr = 6, Te = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ze = Te + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", kt = new RegExp("^[" + Te + "][" + Ze + "]*$"), nn = {}, an = {};
    function qn(e) {
      return Mn.call(an, e) ? !0 : Mn.call(nn, e) ? !1 : kt.test(e) ? (an[e] = !0, !0) : (nn[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function jn(e, t, a) {
      return t !== null ? t.type === Ht : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Ar(e, t, a, i) {
      if (a !== null && a.type === Ht)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function dn(e, t, a, i) {
      if (t === null || typeof t > "u" || Ar(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case gn:
            return !t;
          case rr:
            return t === !1;
          case Ua:
            return isNaN(t);
          case Nr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Br(e) {
      return un.hasOwnProperty(e) ? un[e] : null;
    }
    function ln(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Mr || t === gn || t === rr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var un = {}, li = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    li.forEach(function(e) {
      un[e] = new ln(
        e,
        Ht,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      un[t] = new ln(
        t,
        Nn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      un[e] = new ln(
        e,
        Mr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      un[e] = new ln(
        e,
        Mr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      un[e] = new ln(
        e,
        gn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      un[e] = new ln(
        e,
        gn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      un[e] = new ln(
        e,
        rr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      un[e] = new ln(
        e,
        Nr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      un[e] = new ln(
        e,
        Ua,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Fa = /[\-\:]([a-z])/g, Sl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Fa, Sl);
      un[t] = new ln(
        t,
        Nn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Fa, Sl);
      un[t] = new ln(
        t,
        Nn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Fa, Sl);
      un[t] = new ln(
        t,
        Nn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      un[e] = new ln(
        e,
        Nn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var fu = "xlinkHref";
    un[fu] = new ln(
      "xlinkHref",
      Nn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      un[e] = new ln(
        e,
        Nn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var no = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Bi = !1;
    function El(e) {
      !Bi && no.test(e) && (Bi = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ca(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Z(a, t), i.sanitizeURL && El("" + a);
        var s = i.attributeName, f = null;
        if (i.type === rr) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : dn(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (dn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === gn)
            return a;
          f = e.getAttribute(s);
        }
        return dn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Si(e, t, a, i) {
      {
        if (!qn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Z(a, t), u === "" + a ? a : u;
      }
    }
    function Ta(e, t, a, i) {
      var u = Br(t);
      if (!jn(t, u, i)) {
        if (dn(t, a, u, i) && (a = null), i || u === null) {
          if (qn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Z(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var v = u.propertyName;
          if (a === null) {
            var h = u.type;
            e[v] = h === gn ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var T = u.attributeName, b = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var A = u.type, M;
          A === gn || A === rr && a === !0 ? M = "" : (Z(a, T), M = "" + a, u.sanitizeURL && El(M.toString())), b ? e.setAttributeNS(b, T, M) : e.setAttribute(T, M);
        }
      }
    }
    var Ei = Symbol.for("react.element"), $r = Symbol.for("react.portal"), Ra = Symbol.for("react.fragment"), Ci = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), ie = Symbol.for("react.provider"), be = Symbol.for("react.context"), je = Symbol.for("react.forward_ref"), bt = Symbol.for("react.suspense"), Bt = Symbol.for("react.suspense_list"), wt = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), Zn = Symbol.for("react.scope"), Rn = Symbol.for("react.debug_trace_mode"), bn = Symbol.for("react.offscreen"), Sr = Symbol.for("react.legacy_hidden"), Ti = Symbol.for("react.cache"), ro = Symbol.for("react.tracing_marker"), qt = Symbol.iterator, id = "@@iterator";
    function ui(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qt && e[qt] || e[id];
      return typeof t == "function" ? t : null;
    }
    var Mt = Object.assign, Ri = 0, Cl, ao, Tl, aa, cs, Ir, fs;
    function ds() {
    }
    ds.__reactDisabledLog = !0;
    function hc() {
      {
        if (Ri === 0) {
          Cl = console.log, ao = console.info, Tl = console.warn, aa = console.error, cs = console.group, Ir = console.groupCollapsed, fs = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ds,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ri++;
      }
    }
    function io() {
      {
        if (Ri--, Ri === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Mt({}, e, {
              value: Cl
            }),
            info: Mt({}, e, {
              value: ao
            }),
            warn: Mt({}, e, {
              value: Tl
            }),
            error: Mt({}, e, {
              value: aa
            }),
            group: Mt({}, e, {
              value: cs
            }),
            groupCollapsed: Mt({}, e, {
              value: Ir
            }),
            groupEnd: Mt({}, e, {
              value: fs
            })
          });
        }
        Ri < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Rl = m.ReactCurrentDispatcher, oi;
    function Yr(e, t, a) {
      {
        if (oi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            oi = i && i[1] || "";
          }
        return `
` + oi + e;
      }
    }
    var bl = !1, wl;
    {
      var xl = typeof WeakMap == "function" ? WeakMap : Map;
      wl = new xl();
    }
    function lo(e, t) {
      if (!e || bl)
        return "";
      {
        var a = wl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      bl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Rl.current, Rl.current = null, hc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (B) {
              i = B;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (B) {
              i = B;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            i = B;
          }
          e();
        }
      } catch (B) {
        if (B && i && typeof B.stack == "string") {
          for (var v = B.stack.split(`
`), h = i.stack.split(`
`), T = v.length - 1, b = h.length - 1; T >= 1 && b >= 0 && v[T] !== h[b]; )
            b--;
          for (; T >= 1 && b >= 0; T--, b--)
            if (v[T] !== h[b]) {
              if (T !== 1 || b !== 1)
                do
                  if (T--, b--, b < 0 || v[T] !== h[b]) {
                    var A = `
` + v[T].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && wl.set(e, A), A;
                  }
                while (T >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        bl = !1, Rl.current = s, io(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", P = M ? Yr(M) : "";
      return typeof e == "function" && wl.set(e, P), P;
    }
    function uo(e, t, a) {
      return lo(e, !0);
    }
    function $i(e, t, a) {
      return lo(e, !1);
    }
    function ld(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function bi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return lo(e, ld(e));
      if (typeof e == "string")
        return Yr(e);
      switch (e) {
        case bt:
          return Yr("Suspense");
        case Bt:
          return Yr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case je:
            return $i(e.render);
          case wt:
            return bi(e.type, t, a);
          case ut: {
            var i = e, u = i._payload, s = i._init;
            try {
              return bi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Jt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ae:
          return Yr(e.type);
        case Kt:
          return Yr("Lazy");
        case W:
          return Yr("Suspense");
        case Et:
          return Yr("SuspenseList");
        case Y:
        case pe:
        case tt:
          return $i(e.type);
        case Le:
          return $i(e.type.render);
        case G:
          return uo(e.type);
        default:
          return "";
      }
    }
    function oo(e) {
      try {
        var t = "", a = e;
        do
          t += Jt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function du(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function so(e) {
      return e.displayName || "Context";
    }
    function Gt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ra:
          return "Fragment";
        case $r:
          return "Portal";
        case k:
          return "Profiler";
        case Ci:
          return "StrictMode";
        case bt:
          return "Suspense";
        case Bt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case be:
            var t = e;
            return so(t) + ".Consumer";
          case ie:
            var a = e;
            return so(a._context) + ".Provider";
          case je:
            return du(e, e.render, "ForwardRef");
          case wt:
            var i = e.displayName || null;
            return i !== null ? i : Gt(e.type) || "Memo";
          case ut: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Gt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function co(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function fo(e) {
      return e.displayName || "Context";
    }
    function Ct(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ht:
          return "Cache";
        case Dt:
          var i = a;
          return fo(i) + ".Consumer";
        case Re:
          var u = a;
          return fo(u._context) + ".Provider";
        case Ot:
          return "DehydratedFragment";
        case Le:
          return co(a, a.render, "ForwardRef");
        case Ke:
          return "Fragment";
        case ae:
          return a;
        case ee:
          return "Portal";
        case Q:
          return "Root";
        case Oe:
          return "Text";
        case Kt:
          return Gt(a);
        case et:
          return a === Ci ? "StrictMode" : "Mode";
        case he:
          return "Offscreen";
        case Ie:
          return "Profiler";
        case at:
          return "Scope";
        case W:
          return "Suspense";
        case Et:
          return "SuspenseList";
        case rt:
          return "TracingMarker";
        case G:
        case Y:
        case Ft:
        case pe:
        case st:
        case tt:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var pu = m.ReactDebugCurrentFrame, Vn = null, ia = !1;
    function Wr() {
      {
        if (Vn === null)
          return null;
        var e = Vn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ct(e);
      }
      return null;
    }
    function _l() {
      return Vn === null ? "" : oo(Vn);
    }
    function In() {
      pu.getCurrentStack = null, Vn = null, ia = !1;
    }
    function on(e) {
      pu.getCurrentStack = e === null ? null : _l, Vn = e, ia = !1;
    }
    function mc() {
      return Vn;
    }
    function la(e) {
      ia = e;
    }
    function fr(e) {
      return "" + e;
    }
    function wi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Lt(e), e;
        default:
          return "";
      }
    }
    var yc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ii(e, t) {
      yc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function kl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function gc(e) {
      return e._valueTracker;
    }
    function ja(e) {
      e._valueTracker = null;
    }
    function Dl(e) {
      var t = "";
      return e && (kl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ol(e) {
      var t = kl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Lt(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(v) {
            Lt(v), i = "" + v, s.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            Lt(v), i = "" + v;
          },
          stopTracking: function() {
            ja(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Va(e) {
      gc(e) || (e._valueTracker = Ol(e));
    }
    function po(e) {
      if (!e)
        return !1;
      var t = gc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Dl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ll(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ml = !1, vu = !1, vo = !1, ps = !1;
    function si(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function y(e, t) {
      var a = e, i = t.checked, u = Mt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function _(e, t) {
      Ii("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !vu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component", t.type), vu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ml && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component", t.type), Ml = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: wi(t.value != null ? t.value : i),
        controlled: si(t)
      };
    }
    function H(e, t) {
      var a = e, i = t.checked;
      i != null && Ta(a, "checked", i, !1);
    }
    function q(e, t) {
      var a = e;
      {
        var i = si(t);
        !a._wrapperState.controlled && i && !ps && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ps = !0), a._wrapperState.controlled && !i && !vo && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vo = !0);
      }
      H(e, t);
      var u = wi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = fr(u)) : a.value !== fr(u) && (a.value = fr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ct(a, t.type, u) : t.hasOwnProperty("defaultValue") && ct(a, t.type, wi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ve(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = fr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function dt(e, t) {
      var a = e;
      q(a, t), De(a, t);
    }
    function De(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Z(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var v = Yh(f);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            po(f), q(f, v);
          }
        }
      }
    }
    function ct(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ll(e.ownerDocument) !== e) && (a == null ? e.defaultValue = fr(e._wrapperState.initialValue) : e.defaultValue !== fr(a) && (e.defaultValue = fr(a)));
    }
    var Nt = !1, Xt = !1, Sn = !1;
    function pn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? p.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Xt || (Xt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Sn || (Sn = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Nt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Nt = !0);
    }
    function En(e, t) {
      t.value != null && e.setAttribute("value", fr(wi(t.value)));
    }
    var wn = Array.isArray;
    function jt(e) {
      return wn(e);
    }
    var Yi;
    Yi = !1;
    function ho() {
      var e = Wr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var vs = ["value", "defaultValue"];
    function ud(e) {
      {
        Ii("select", e);
        for (var t = 0; t < vs.length; t++) {
          var a = vs[t];
          if (e[a] != null) {
            var i = jt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ho()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ho());
          }
        }
      }
    }
    function ci(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, v = 0; v < s.length; v++)
          f["$" + s[v]] = !0;
        for (var h = 0; h < u.length; h++) {
          var T = f.hasOwnProperty("$" + u[h].value);
          u[h].selected !== T && (u[h].selected = T), T && i && (u[h].defaultSelected = !0);
        }
      } else {
        for (var b = fr(wi(a)), A = null, M = 0; M < u.length; M++) {
          if (u[M].value === b) {
            u[M].selected = !0, i && (u[M].defaultSelected = !0);
            return;
          }
          A === null && !u[M].disabled && (A = u[M]);
        }
        A !== null && (A.selected = !0);
      }
    }
    function hs(e, t) {
      return Mt({}, t, {
        value: void 0
      });
    }
    function ms(e, t) {
      var a = e;
      ud(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Yi && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Yi = !0);
    }
    function od(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ci(a, !!t.multiple, i, !1) : t.defaultValue != null && ci(a, !!t.multiple, t.defaultValue, !0);
    }
    function vy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ci(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ci(a, !!t.multiple, t.defaultValue, !0) : ci(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function hy(e, t) {
      var a = e, i = t.value;
      i != null && ci(a, !!t.multiple, i, !1);
    }
    var sd = !1;
    function cd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Mt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: fr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ev(e, t) {
      var a = e;
      Ii("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !sd && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Wr() || "A component"), sd = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (jt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: wi(i)
      };
    }
    function Cv(e, t) {
      var a = e, i = wi(t.value), u = wi(t.defaultValue);
      if (i != null) {
        var s = fr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = fr(u));
    }
    function Tv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function fd(e, t) {
      Cv(e, t);
    }
    var Wi = "http://www.w3.org/1999/xhtml", my = "http://www.w3.org/1998/Math/MathML", dd = "http://www.w3.org/2000/svg";
    function Sc(e) {
      switch (e) {
        case "svg":
          return dd;
        case "math":
          return my;
        default:
          return Wi;
      }
    }
    function pd(e, t) {
      return e == null || e === Wi ? Sc(t) : e === dd && t === "foreignObject" ? Wi : e;
    }
    var yy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Ec, Rv = yy(function(e, t) {
      if (e.namespaceURI === dd && !("innerHTML" in e)) {
        Ec = Ec || document.createElement("div"), Ec.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ec.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ua = 1, Qi = 3, Jn = 8, fi = 9, hu = 11, Cc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Qi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, bv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, mo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function wv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var xv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(mo).forEach(function(e) {
      xv.forEach(function(t) {
        mo[wv(t, e)] = mo[e];
      });
    });
    function Tc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(mo.hasOwnProperty(e) && mo[e]) ? t + "px" : (se(t, e), ("" + t).trim());
    }
    var yo = /([A-Z])/g, gy = /^ms-/;
    function Sy(e) {
      return e.replace(yo, "-$1").toLowerCase().replace(gy, "-ms-");
    }
    var _v = function() {
    };
    {
      var kv = /^(?:webkit|moz|o)[A-Z]/, Dv = /^-ms-/, ys = /-(.)/g, go = /;\s*$/, So = {}, Eo = {}, Ov = !1, vd = !1, hd = function(e) {
        return e.replace(ys, function(t, a) {
          return a.toUpperCase();
        });
      }, md = function(e) {
        So.hasOwnProperty(e) && So[e] || (So[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          hd(e.replace(Dv, "ms-"))
        ));
      }, Lv = function(e) {
        So.hasOwnProperty(e) && So[e] || (So[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Mv = function(e, t) {
        Eo.hasOwnProperty(t) && Eo[t] || (Eo[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(go, "")));
      }, Nv = function(e, t) {
        Ov || (Ov = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ey = function(e, t) {
        vd || (vd = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      _v = function(e, t) {
        e.indexOf("-") > -1 ? md(e) : kv.test(e) ? Lv(e) : go.test(t) && Mv(e, t), typeof t == "number" && (isNaN(t) ? Nv(e, t) : isFinite(t) || Ey(e, t));
      };
    }
    var Cy = _v;
    function Ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Sy(i)) + ":", t += Tc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Av(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Cy(i, t[i]);
          var s = Tc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ry(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Pa(e) {
      var t = {};
      for (var a in e)
        for (var i = bv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function gs(e, t) {
      {
        if (!t)
          return;
        var a = Pa(e), i = Pa(t), u = {};
        for (var s in a) {
          var f = a[s], v = i[s];
          if (v && f !== v) {
            var h = f + "," + v;
            if (u[h])
              continue;
            u[h] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ry(e[f]) ? "Removing" : "Updating", f, v);
          }
        }
      }
    }
    var zv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Uv = Mt({
      menuitem: !0
    }, zv), Fv = "__html";
    function Rc(e, t) {
      if (t) {
        if (Uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function qi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var bc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, jv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, di = {}, yd = new RegExp("^(aria)-[" + Ze + "]*$"), Ss = new RegExp("^(aria)[A-Z][" + Ze + "]*$");
    function gd(e, t) {
      {
        if (Mn.call(di, t) && di[t])
          return !0;
        if (Ss.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = jv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), di[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), di[t] = !0, !0;
        }
        if (yd.test(t)) {
          var u = t.toLowerCase(), s = jv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return di[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), di[t] = !0, !0;
        }
      }
      return !0;
    }
    function Vv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = gd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function wc(e, t) {
      qi(e, t) || Vv(e, t);
    }
    var mu = !1;
    function Sd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !mu && (mu = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ed = function() {
    };
    {
      var dr = {}, Cd = /^on./, Pv = /^on[^A-Z]/, Hv = new RegExp("^(aria)-[" + Ze + "]*$"), Bv = new RegExp("^(aria)[A-Z][" + Ze + "]*$");
      Ed = function(e, t, a, i) {
        if (Mn.call(dr, t) && dr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = f.hasOwnProperty(u) ? f[u] : null;
          if (v != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, v), dr[t] = !0, !0;
          if (Cd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (Cd.test(t))
          return Pv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (Hv.test(t) || Bv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), dr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var h = Br(t), T = h !== null && h.type === Ht;
        if (bc.hasOwnProperty(u)) {
          var b = bc[u];
          if (b !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, b), dr[t] = !0, !0;
        } else if (!T && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), dr[t] = !0, !0;
        return typeof a == "boolean" && Ar(t, a, h, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), dr[t] = !0, !0) : T ? !0 : Ar(t, a, h, !1) ? (dr[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === gn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), dr[t] = !0), !0);
      };
    }
    var $v = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Ed(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Iv(e, t, a) {
      qi(e, t) || $v(e, t, a);
    }
    var Gi = 1, Es = 2, yu = 4, by = Gi | Es | yu, Cs = null;
    function Ts(e) {
      Cs !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Cs = e;
    }
    function wy() {
      Cs === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Cs = null;
    }
    function Yv(e) {
      return e === Cs;
    }
    function xc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Qi ? t.parentNode : t;
    }
    var Cn = null, Nl = null, Xi = null;
    function Co(e) {
      var t = Qo(e);
      if (t) {
        if (typeof Cn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Yh(a);
          Cn(t.stateNode, t.type, i);
        }
      }
    }
    function Wv(e) {
      Cn = e;
    }
    function _c(e) {
      Nl ? Xi ? Xi.push(e) : Xi = [e] : Nl = e;
    }
    function Rs() {
      return Nl !== null || Xi !== null;
    }
    function bs() {
      if (Nl) {
        var e = Nl, t = Xi;
        if (Nl = null, Xi = null, Co(e), t)
          for (var a = 0; a < t.length; a++)
            Co(t[a]);
      }
    }
    var gu = function(e, t) {
      return e(t);
    }, Td = function() {
    }, Rd = !1;
    function xy() {
      var e = Rs();
      e && (Td(), bs());
    }
    function bd(e, t, a) {
      if (Rd)
        return e(t, a);
      Rd = !0;
      try {
        return gu(e, t, a);
      } finally {
        Rd = !1, xy();
      }
    }
    function kc(e, t, a) {
      gu = e, Td = a;
    }
    function Dc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function wd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Dc(t));
        default:
          return !1;
      }
    }
    function Su(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Yh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (wd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ws = !1;
    if (Pt)
      try {
        var Eu = {};
        Object.defineProperty(Eu, "passive", {
          get: function() {
            ws = !0;
          }
        }), window.addEventListener("test", Eu, Eu), window.removeEventListener("test", Eu, Eu);
      } catch {
        ws = !1;
      }
    function Qv(e, t, a, i, u, s, f, v, h) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (b) {
        this.onError(b);
      }
    }
    var xd = Qv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var _d = document.createElement("react");
      xd = function(t, a, i, u, s, f, v, h, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var b = document.createEvent("Event"), A = !1, M = !0, P = window.event, B = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          _d.removeEventListener(K, ot, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = P);
        }
        var Ve = Array.prototype.slice.call(arguments, 3);
        function ot() {
          A = !0, X(), a.apply(i, Ve), M = !1;
        }
        var nt, Yt = !1, Ut = !1;
        function F(j) {
          if (nt = j.error, Yt = !0, nt === null && j.colno === 0 && j.lineno === 0 && (Ut = !0), j.defaultPrevented && nt != null && typeof nt == "object")
            try {
              nt._suppressLogging = !0;
            } catch {
            }
        }
        var K = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), _d.addEventListener(K, ot, !1), b.initEvent(K, !1, !1), _d.dispatchEvent(b), B && Object.defineProperty(window, "event", B), A && M && (Yt ? Ut && (nt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : nt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(nt)), window.removeEventListener("error", F), !A)
          return X(), Qv.apply(this, arguments);
      };
    }
    var _y = xd, Al = !1, pi = null, xs = !1, zl = null, xi = {
      onError: function(e) {
        Al = !0, pi = e;
      }
    };
    function Cu(e, t, a, i, u, s, f, v, h) {
      Al = !1, pi = null, _y.apply(xi, arguments);
    }
    function Ki(e, t, a, i, u, s, f, v, h) {
      if (Cu.apply(this, arguments), Al) {
        var T = Dd();
        xs || (xs = !0, zl = T);
      }
    }
    function kd() {
      if (xs) {
        var e = zl;
        throw xs = !1, zl = null, e;
      }
    }
    function ky() {
      return Al;
    }
    function Dd() {
      if (Al) {
        var e = pi;
        return Al = !1, pi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ha(e) {
      return e._reactInternals;
    }
    function _s(e) {
      return e._reactInternals !== void 0;
    }
    function To(e, t) {
      e._reactInternals = t;
    }
    var lt = (
      /*                      */
      0
    ), Ul = (
      /*                */
      1
    ), _n = (
      /*                    */
      2
    ), xt = (
      /*                       */
      4
    ), rn = (
      /*                */
      16
    ), sn = (
      /*                 */
      32
    ), _i = (
      /*                     */
      64
    ), gt = (
      /*                   */
      128
    ), Yn = (
      /*            */
      256
    ), oa = (
      /*                          */
      512
    ), Ba = (
      /*                     */
      1024
    ), An = (
      /*                      */
      2048
    ), $a = (
      /*                    */
      4096
    ), Fl = (
      /*                   */
      8192
    ), ks = (
      /*             */
      16384
    ), Oc = An | xt | _i | oa | Ba | ks, qv = (
      /*               */
      32767
    ), ba = (
      /*                   */
      32768
    ), pr = (
      /*                */
      65536
    ), Ds = (
      /* */
      131072
    ), Od = (
      /*                       */
      1048576
    ), Ld = (
      /*                    */
      2097152
    ), sa = (
      /*                 */
      4194304
    ), jl = (
      /*                */
      8388608
    ), ca = (
      /*               */
      16777216
    ), Tu = (
      /*              */
      33554432
    ), Ro = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      xt | Ba | 0
    ), fa = _n | xt | rn | sn | oa | $a | Fl, zr = xt | _i | oa | Fl, Ia = An | rn, Er = sa | jl | Ld, Zi = m.ReactCurrentOwner;
    function wa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (_n | $a)) !== lt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Q ? a : null;
    }
    function Md(e) {
      if (e.tag === W) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Lc(e) {
      return e.tag === Q ? e.stateNode.containerInfo : null;
    }
    function Nd(e) {
      return wa(e) === e;
    }
    function xa(e) {
      {
        var t = Zi.current;
        if (t !== null && t.tag === G) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ct(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ha(e);
      return u ? wa(u) === u : !1;
    }
    function da(e) {
      if (wa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function kn(e) {
      var t = e.alternate;
      if (!t) {
        var a = wa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var v = s.return;
          if (v !== null) {
            i = u = v;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var h = s.child; h; ) {
            if (h === i)
              return da(s), e;
            if (h === u)
              return da(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var T = !1, b = s.child; b; ) {
            if (b === i) {
              T = !0, i = s, u = f;
              break;
            }
            if (b === u) {
              T = !0, u = s, i = f;
              break;
            }
            b = b.sibling;
          }
          if (!T) {
            for (b = f.child; b; ) {
              if (b === i) {
                T = !0, i = f, u = s;
                break;
              }
              if (b === u) {
                T = !0, u = f, i = s;
                break;
              }
              b = b.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Q)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ya(e) {
      var t = kn(e);
      return t !== null ? Ad(t) : null;
    }
    function Ad(e) {
      if (e.tag === ae || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Ad(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Gv(e) {
      var t = kn(e);
      return t !== null ? Mc(t) : null;
    }
    function Mc(e) {
      if (e.tag === ae || e.tag === Oe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ee) {
          var a = Mc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Nc = E.unstable_scheduleCallback, Xv = E.unstable_cancelCallback, Ac = E.unstable_shouldYield, Kv = E.unstable_requestPaint, Pn = E.unstable_now, zd = E.unstable_getCurrentPriorityLevel, zc = E.unstable_ImmediatePriority, _a = E.unstable_UserBlockingPriority, ki = E.unstable_NormalPriority, Uc = E.unstable_LowPriority, Vl = E.unstable_IdlePriority, Ud = E.unstable_yieldValue, Fd = E.unstable_setDisableYieldValue, Pl = null, vr = null, xe = null, Gn = !1, Cr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function jd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ze && (e = Mt({}, e, {
          getLaneLabelMap: Bl,
          injectProfilingHooks: el
        })), Pl = t.inject(e), vr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Zv(e, t) {
      if (vr && typeof vr.onScheduleFiberRoot == "function")
        try {
          vr.onScheduleFiberRoot(Pl, e, t);
        } catch (a) {
          Gn || (Gn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ji(e, t) {
      if (vr && typeof vr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & gt) === gt;
          if (Ce) {
            var i;
            switch (t) {
              case Ur:
                i = zc;
                break;
              case Tr:
                i = _a;
                break;
              case nl:
                i = ki;
                break;
              case js:
                i = Vl;
                break;
              default:
                i = ki;
                break;
            }
            vr.onCommitFiberRoot(Pl, e, i, a);
          }
        } catch (u) {
          Gn || (Gn = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Hl(e) {
      if (vr && typeof vr.onPostCommitFiberRoot == "function")
        try {
          vr.onPostCommitFiberRoot(Pl, e);
        } catch (t) {
          Gn || (Gn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vd(e) {
      if (vr && typeof vr.onCommitFiberUnmount == "function")
        try {
          vr.onCommitFiberUnmount(Pl, e);
        } catch (t) {
          Gn || (Gn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ar(e) {
      if (typeof Ud == "function" && (Fd(e), D(e)), vr && typeof vr.setStrictMode == "function")
        try {
          vr.setStrictMode(Pl, e);
        } catch (t) {
          Gn || (Gn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function el(e) {
      xe = e;
    }
    function Bl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Dn; a++) {
          var i = Dy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Fc(e) {
      xe !== null && typeof xe.markCommitStarted == "function" && xe.markCommitStarted(e);
    }
    function Pd() {
      xe !== null && typeof xe.markCommitStopped == "function" && xe.markCommitStopped();
    }
    function $l(e) {
      xe !== null && typeof xe.markComponentRenderStarted == "function" && xe.markComponentRenderStarted(e);
    }
    function Ru() {
      xe !== null && typeof xe.markComponentRenderStopped == "function" && xe.markComponentRenderStopped();
    }
    function Jv(e) {
      xe !== null && typeof xe.markComponentPassiveEffectMountStarted == "function" && xe.markComponentPassiveEffectMountStarted(e);
    }
    function Hd() {
      xe !== null && typeof xe.markComponentPassiveEffectMountStopped == "function" && xe.markComponentPassiveEffectMountStopped();
    }
    function jc(e) {
      xe !== null && typeof xe.markComponentPassiveEffectUnmountStarted == "function" && xe.markComponentPassiveEffectUnmountStarted(e);
    }
    function eh() {
      xe !== null && typeof xe.markComponentPassiveEffectUnmountStopped == "function" && xe.markComponentPassiveEffectUnmountStopped();
    }
    function th(e) {
      xe !== null && typeof xe.markComponentLayoutEffectMountStarted == "function" && xe.markComponentLayoutEffectMountStarted(e);
    }
    function nh() {
      xe !== null && typeof xe.markComponentLayoutEffectMountStopped == "function" && xe.markComponentLayoutEffectMountStopped();
    }
    function Vc(e) {
      xe !== null && typeof xe.markComponentLayoutEffectUnmountStarted == "function" && xe.markComponentLayoutEffectUnmountStarted(e);
    }
    function bo() {
      xe !== null && typeof xe.markComponentLayoutEffectUnmountStopped == "function" && xe.markComponentLayoutEffectUnmountStopped();
    }
    function Pc(e, t, a) {
      xe !== null && typeof xe.markComponentErrored == "function" && xe.markComponentErrored(e, t, a);
    }
    function rh(e, t, a) {
      xe !== null && typeof xe.markComponentSuspended == "function" && xe.markComponentSuspended(e, t, a);
    }
    function ah(e) {
      xe !== null && typeof xe.markLayoutEffectsStarted == "function" && xe.markLayoutEffectsStarted(e);
    }
    function wo() {
      xe !== null && typeof xe.markLayoutEffectsStopped == "function" && xe.markLayoutEffectsStopped();
    }
    function ih(e) {
      xe !== null && typeof xe.markPassiveEffectsStarted == "function" && xe.markPassiveEffectsStarted(e);
    }
    function Os() {
      xe !== null && typeof xe.markPassiveEffectsStopped == "function" && xe.markPassiveEffectsStopped();
    }
    function vi(e) {
      xe !== null && typeof xe.markRenderStarted == "function" && xe.markRenderStarted(e);
    }
    function Ls() {
      xe !== null && typeof xe.markRenderYielded == "function" && xe.markRenderYielded();
    }
    function xo() {
      xe !== null && typeof xe.markRenderStopped == "function" && xe.markRenderStopped();
    }
    function bu(e) {
      xe !== null && typeof xe.markRenderScheduled == "function" && xe.markRenderScheduled(e);
    }
    function Bd(e, t) {
      xe !== null && typeof xe.markForceUpdateScheduled == "function" && xe.markForceUpdateScheduled(e, t);
    }
    function Il(e, t) {
      xe !== null && typeof xe.markStateUpdateScheduled == "function" && xe.markStateUpdateScheduled(e, t);
    }
    var ft = (
      /*                         */
      0
    ), At = (
      /*                 */
      1
    ), pt = (
      /*                    */
      2
    ), Hn = (
      /*               */
      8
    ), Wa = (
      /*              */
      16
    ), Hc = Math.clz32 ? Math.clz32 : wu, Bc = Math.log, $d = Math.LN2;
    function wu(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Bc(t) / $d | 0) | 0;
    }
    var Dn = 31, J = (
      /*                        */
      0
    ), $t = (
      /*                          */
      0
    ), vt = (
      /*                        */
      1
    ), Di = (
      /*    */
      2
    ), ka = (
      /*             */
      4
    ), xu = (
      /*            */
      8
    ), On = (
      /*                     */
      16
    ), _u = (
      /*                */
      32
    ), Yl = (
      /*                       */
      4194240
    ), ku = (
      /*                        */
      64
    ), Qa = (
      /*                        */
      128
    ), pa = (
      /*                        */
      256
    ), Du = (
      /*                        */
      512
    ), Ms = (
      /*                        */
      1024
    ), Ns = (
      /*                        */
      2048
    ), $c = (
      /*                        */
      4096
    ), Ic = (
      /*                        */
      8192
    ), Yc = (
      /*                        */
      16384
    ), Wc = (
      /*                       */
      32768
    ), Qc = (
      /*                       */
      65536
    ), qc = (
      /*                       */
      131072
    ), Gc = (
      /*                       */
      262144
    ), Xc = (
      /*                       */
      524288
    ), Ou = (
      /*                       */
      1048576
    ), Kc = (
      /*                       */
      2097152
    ), Lu = (
      /*                            */
      130023424
    ), tl = (
      /*                             */
      4194304
    ), Zc = (
      /*                             */
      8388608
    ), As = (
      /*                             */
      16777216
    ), Jc = (
      /*                             */
      33554432
    ), ef = (
      /*                             */
      67108864
    ), Id = tl, _o = (
      /*          */
      134217728
    ), tf = (
      /*                          */
      268435455
    ), ko = (
      /*               */
      268435456
    ), Wl = (
      /*                        */
      536870912
    ), va = (
      /*                   */
      1073741824
    );
    function Dy(e) {
      {
        if (e & vt)
          return "Sync";
        if (e & Di)
          return "InputContinuousHydration";
        if (e & ka)
          return "InputContinuous";
        if (e & xu)
          return "DefaultHydration";
        if (e & On)
          return "Default";
        if (e & _u)
          return "TransitionHydration";
        if (e & Yl)
          return "Transition";
        if (e & Lu)
          return "Retry";
        if (e & _o)
          return "SelectiveHydration";
        if (e & ko)
          return "IdleHydration";
        if (e & Wl)
          return "Idle";
        if (e & va)
          return "Offscreen";
      }
    }
    var Tn = -1, nf = ku, rf = tl;
    function Do(e) {
      switch (er(e)) {
        case vt:
          return vt;
        case Di:
          return Di;
        case ka:
          return ka;
        case xu:
          return xu;
        case On:
          return On;
        case _u:
          return _u;
        case ku:
        case Qa:
        case pa:
        case Du:
        case Ms:
        case Ns:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case Qc:
        case qc:
        case Gc:
        case Xc:
        case Ou:
        case Kc:
          return e & Yl;
        case tl:
        case Zc:
        case As:
        case Jc:
        case ef:
          return e & Lu;
        case _o:
          return _o;
        case ko:
          return ko;
        case Wl:
          return Wl;
        case va:
          return va;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function zs(e, t) {
      var a = e.pendingLanes;
      if (a === J)
        return J;
      var i = J, u = e.suspendedLanes, s = e.pingedLanes, f = a & tf;
      if (f !== J) {
        var v = f & ~u;
        if (v !== J)
          i = Do(v);
        else {
          var h = f & s;
          h !== J && (i = Do(h));
        }
      } else {
        var T = a & ~u;
        T !== J ? i = Do(T) : s !== J && (i = Do(s));
      }
      if (i === J)
        return J;
      if (t !== J && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === J) {
        var b = er(i), A = er(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          b >= A || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          b === On && (A & Yl) !== J
        )
          return t;
      }
      (i & ka) !== J && (i |= a & On);
      var M = e.entangledLanes;
      if (M !== J)
        for (var P = e.entanglements, B = i & M; B > 0; ) {
          var X = Ql(B), Ve = 1 << X;
          i |= P[X], B &= ~Ve;
        }
      return i;
    }
    function lh(e, t) {
      for (var a = e.eventTimes, i = Tn; t > 0; ) {
        var u = Ql(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function af(e, t) {
      switch (e) {
        case vt:
        case Di:
        case ka:
          return t + 250;
        case xu:
        case On:
        case _u:
        case ku:
        case Qa:
        case pa:
        case Du:
        case Ms:
        case Ns:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case Qc:
        case qc:
        case Gc:
        case Xc:
        case Ou:
        case Kc:
          return t + 5e3;
        case tl:
        case Zc:
        case As:
        case Jc:
        case ef:
          return Tn;
        case _o:
        case ko:
        case Wl:
        case va:
          return Tn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Tn;
      }
    }
    function Oy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = Ql(f), h = 1 << v, T = s[v];
        T === Tn ? ((h & i) === J || (h & u) !== J) && (s[v] = af(h, t)) : T <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function Ly(e) {
      return Do(e.pendingLanes);
    }
    function Yd(e) {
      var t = e.pendingLanes & ~va;
      return t !== J ? t : t & va ? va : J;
    }
    function Oo(e) {
      return (e & vt) !== J;
    }
    function Us(e) {
      return (e & tf) !== J;
    }
    function lf(e) {
      return (e & Lu) === e;
    }
    function My(e) {
      var t = vt | ka | On;
      return (e & t) === J;
    }
    function uh(e) {
      return (e & Yl) === e;
    }
    function Fs(e, t) {
      var a = Di | ka | xu | On;
      return (t & a) !== J;
    }
    function oh(e, t) {
      return (t & e.expiredLanes) !== J;
    }
    function Wd(e) {
      return (e & Yl) !== J;
    }
    function Qd() {
      var e = nf;
      return nf <<= 1, (nf & Yl) === J && (nf = ku), e;
    }
    function Ny() {
      var e = rf;
      return rf <<= 1, (rf & Lu) === J && (rf = tl), e;
    }
    function er(e) {
      return e & -e;
    }
    function ir(e) {
      return er(e);
    }
    function Ql(e) {
      return 31 - Hc(e);
    }
    function uf(e) {
      return Ql(e);
    }
    function ha(e, t) {
      return (e & t) !== J;
    }
    function Mu(e, t) {
      return (e & t) === t;
    }
    function _t(e, t) {
      return e | t;
    }
    function Lo(e, t) {
      return e & ~t;
    }
    function qd(e, t) {
      return e & t;
    }
    function sh(e) {
      return e;
    }
    function ch(e, t) {
      return e !== $t && e < t ? e : t;
    }
    function of(e) {
      for (var t = [], a = 0; a < Dn; a++)
        t.push(e);
      return t;
    }
    function Nu(e, t, a) {
      e.pendingLanes |= t, t !== Wl && (e.suspendedLanes = J, e.pingedLanes = J);
      var i = e.eventTimes, u = uf(t);
      i[u] = a;
    }
    function Gd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ql(i), s = 1 << u;
        a[u] = Tn, i &= ~s;
      }
    }
    function Xd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Kd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = J, e.pingedLanes = J, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = Ql(f), h = 1 << v;
        i[v] = J, u[v] = Tn, s[v] = Tn, f &= ~h;
      }
    }
    function Mo(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ql(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ay(e, t) {
      var a = er(t), i;
      switch (a) {
        case ka:
          i = Di;
          break;
        case On:
          i = xu;
          break;
        case ku:
        case Qa:
        case pa:
        case Du:
        case Ms:
        case Ns:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case Qc:
        case qc:
        case Gc:
        case Xc:
        case Ou:
        case Kc:
        case tl:
        case Zc:
        case As:
        case Jc:
        case ef:
          i = _u;
          break;
        case Wl:
          i = ko;
          break;
        default:
          i = $t;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== $t ? $t : i;
    }
    function Zd(e, t, a) {
      if (Cr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = uf(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function sf(e, t) {
      if (Cr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = uf(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(v) {
            var h = v.alternate;
            (h === null || !i.has(h)) && i.add(v);
          }), f.clear()), t &= ~s;
        }
    }
    function Jd(e, t) {
      return null;
    }
    var Ur = vt, Tr = ka, nl = On, js = Wl, Au = $t;
    function qa() {
      return Au;
    }
    function lr(e) {
      Au = e;
    }
    function Vs(e, t) {
      var a = Au;
      try {
        return Au = e, t();
      } finally {
        Au = a;
      }
    }
    function Fr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function zy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function ep(e, t) {
      return e !== 0 && e < t;
    }
    function Ps(e) {
      var t = er(e);
      return ep(Ur, t) ? ep(Tr, t) ? Us(t) ? nl : js : Tr : Ur;
    }
    function ur(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fh;
    function Ye(e) {
      fh = e;
    }
    function No(e) {
      fh(e);
    }
    var Hs;
    function dh(e) {
      Hs = e;
    }
    var ph;
    function Bs(e) {
      ph = e;
    }
    var $s;
    function tp(e) {
      $s = e;
    }
    var np;
    function vh(e) {
      np = e;
    }
    var cf = !1, Ao = [], Oi = null, zn = null, hr = null, Ga = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new Map(), rl = [], hi = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function hh(e) {
      return hi.indexOf(e) > -1;
    }
    function Li(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function mh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Oi = null;
          break;
        case "dragenter":
        case "dragleave":
          zn = null;
          break;
        case "mouseover":
        case "mouseout":
          hr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ga.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zo.delete(i);
          break;
        }
      }
    }
    function Uo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Li(t, a, i, u, s);
        if (t !== null) {
          var v = Qo(t);
          v !== null && Hs(v);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return u !== null && h.indexOf(u) === -1 && h.push(u), e;
    }
    function yh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Oi = Uo(Oi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return zn = Uo(zn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var v = u;
          return hr = Uo(hr, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var h = u, T = h.pointerId;
          return Ga.set(T, Uo(Ga.get(T) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var b = u, A = b.pointerId;
          return zo.set(A, Uo(zo.get(A) || null, e, t, a, i, b)), !0;
        }
      }
      return !1;
    }
    function rp(e) {
      var t = Zs(e.target);
      if (t !== null) {
        var a = wa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === W) {
            var u = Md(a);
            if (u !== null) {
              e.blockedOn = u, np(e.priority, function() {
                ph(a);
              });
              return;
            }
          } else if (i === Q) {
            var s = a.stateNode;
            if (ur(s)) {
              e.blockedOn = Lc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function gh(e) {
      for (var t = $s(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < rl.length && ep(t, rl[i].priority); i++)
        ;
      rl.splice(i, 0, a), i === 0 && rp(a);
    }
    function ff(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = zu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ts(s), u.target.dispatchEvent(s), wy();
        } else {
          var f = Qo(i);
          return f !== null && Hs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Is(e, t, a) {
      ff(e) && a.delete(t);
    }
    function ap() {
      cf = !1, Oi !== null && ff(Oi) && (Oi = null), zn !== null && ff(zn) && (zn = null), hr !== null && ff(hr) && (hr = null), Ga.forEach(Is), zo.forEach(Is);
    }
    function jr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, cf || (cf = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, ap)));
    }
    function zt(e) {
      if (Ao.length > 0) {
        jr(Ao[0], e);
        for (var t = 1; t < Ao.length; t++) {
          var a = Ao[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Oi !== null && jr(Oi, e), zn !== null && jr(zn, e), hr !== null && jr(hr, e);
      var i = function(v) {
        return jr(v, e);
      };
      Ga.forEach(i), zo.forEach(i);
      for (var u = 0; u < rl.length; u++) {
        var s = rl[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; rl.length > 0; ) {
        var f = rl[0];
        if (f.blockedOn !== null)
          break;
        rp(f), f.blockedOn === null && rl.shift();
      }
    }
    var Bn = m.ReactCurrentBatchConfig, Wn = !0;
    function mr(e) {
      Wn = !!e;
    }
    function Da() {
      return Wn;
    }
    function Fo(e, t, a) {
      var i = Qr(t), u;
      switch (i) {
        case Ur:
          u = or;
          break;
        case Tr:
          u = Ys;
          break;
        case nl:
        default:
          u = al;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function or(e, t, a, i) {
      var u = qa(), s = Bn.transition;
      Bn.transition = null;
      try {
        lr(Ur), al(e, t, a, i);
      } finally {
        lr(u), Bn.transition = s;
      }
    }
    function Ys(e, t, a, i) {
      var u = qa(), s = Bn.transition;
      Bn.transition = null;
      try {
        lr(Tr), al(e, t, a, i);
      } finally {
        lr(u), Bn.transition = s;
      }
    }
    function al(e, t, a, i) {
      Wn && df(e, t, a, i);
    }
    function df(e, t, a, i) {
      var u = zu(e, t, a, i);
      if (u === null) {
        tg(e, t, i, jo, a), mh(e, i);
        return;
      }
      if (yh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (mh(e, i), t & yu && hh(e)) {
        for (; u !== null; ) {
          var s = Qo(u);
          s !== null && No(s);
          var f = zu(e, t, a, i);
          if (f === null && tg(e, t, i, jo, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      tg(e, t, i, null, a);
    }
    var jo = null;
    function zu(e, t, a, i) {
      jo = null;
      var u = xc(i), s = Zs(u);
      if (s !== null) {
        var f = wa(s);
        if (f === null)
          s = null;
        else {
          var v = f.tag;
          if (v === W) {
            var h = Md(f);
            if (h !== null)
              return h;
            s = null;
          } else if (v === Q) {
            var T = f.stateNode;
            if (ur(T))
              return Lc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return jo = s, null;
    }
    function Qr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ur;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Tr;
        case "message": {
          var t = zd();
          switch (t) {
            case zc:
              return Ur;
            case _a:
              return Tr;
            case ki:
            case Uc:
              return nl;
            case Vl:
              return js;
            default:
              return nl;
          }
        }
        default:
          return nl;
      }
    }
    function ip(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Vo(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function il(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function pf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Uu = null, Mi = null, ql = null;
    function Gl(e) {
      return Uu = e, Mi = hf(), !0;
    }
    function vf() {
      Uu = null, Mi = null, ql = null;
    }
    function Po() {
      if (ql)
        return ql;
      var e, t = Mi, a = t.length, i, u = hf(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return ql = u.slice(e, v), ql;
    }
    function hf() {
      return "value" in Uu ? Uu.value : Uu.textContent;
    }
    function Fu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ju() {
      return !0;
    }
    function Vr() {
      return !1;
    }
    function tr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var h = e[v];
            h ? this[v] = h(s) : this[v] = s[v];
          }
        var T = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return T ? this.isDefaultPrevented = ju : this.isDefaultPrevented = Vr, this.isPropagationStopped = Vr, this;
      }
      return Mt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ju);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ju);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ju
      }), t;
    }
    var Pr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Hr = tr(Pr), Ho = Mt({}, Pr, {
      view: 0,
      detail: 0
    }), lp = tr(Ho), Ws, up, Xa;
    function Sh(e) {
      e !== Xa && (Xa && e.type === "mousemove" ? (Ws = e.screenX - Xa.screenX, up = e.screenY - Xa.screenY) : (Ws = 0, up = 0), Xa = e);
    }
    var Bo = Mt({}, Ho, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: gf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Sh(e), Ws);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : up;
      }
    }), Xl = tr(Bo), op = Mt({}, Bo, {
      dataTransfer: 0
    }), Vu = tr(op), Eh = Mt({}, Ho, {
      relatedTarget: 0
    }), mf = tr(Eh), sp = Mt({}, Pr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), yf = tr(sp), Uy = Mt({}, Pr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Fy = tr(Uy), Ch = Mt({}, Pr, {
      data: 0
    }), cp = tr(Ch), Pu = cp, jy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, $o = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Th(e) {
      if (e.key) {
        var t = jy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? $o[e.keyCode] || "Unidentified" : "";
    }
    var Qn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Vy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Qn[e];
      return i ? !!a[i] : !1;
    }
    function gf(e) {
      return Vy;
    }
    var Py = Mt({}, Ho, {
      key: Th,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Hy = tr(Py), Rh = Mt({}, Bo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), fp = tr(Rh), By = Mt({}, Ho, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gf
    }), Ka = tr(By), dp = Mt({}, Pr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $y = tr(dp), Kl = Mt({}, Bo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Sf = tr(Kl), Hu = [9, 13, 27, 32], Qs = 229, qs = Pt && "CompositionEvent" in window, Bu = null;
    Pt && "documentMode" in document && (Bu = document.documentMode);
    var Iy = Pt && "TextEvent" in window && !Bu, Ef = Pt && (!qs || Bu && Bu > 8 && Bu <= 11), bh = 32, pp = String.fromCharCode(bh);
    function wh() {
      Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Qt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Qt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Qt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gs = !1;
    function Cf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function xh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function vp(e, t) {
      return e === "keydown" && t.keyCode === Qs;
    }
    function _h(e, t) {
      switch (e) {
        case "keyup":
          return Hu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Qs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function hp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Tf(e) {
      return e.locale === "ko";
    }
    var ll = !1;
    function mp(e, t, a, i, u) {
      var s, f;
      if (qs ? s = xh(t) : ll ? _h(t, i) && (s = "onCompositionEnd") : vp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ef && !Tf(i) && (!ll && s === "onCompositionStart" ? ll = Gl(u) : s === "onCompositionEnd" && ll && (f = Po()));
      var v = Mh(a, s);
      if (v.length > 0) {
        var h = new cp(s, t, null, i, u);
        if (e.push({
          event: h,
          listeners: v
        }), f)
          h.data = f;
        else {
          var T = hp(i);
          T !== null && (h.data = T);
        }
      }
    }
    function Rf(e, t) {
      switch (e) {
        case "compositionend":
          return hp(t);
        case "keypress":
          var a = t.which;
          return a !== bh ? null : (Gs = !0, pp);
        case "textInput":
          var i = t.data;
          return i === pp && Gs ? null : i;
        default:
          return null;
      }
    }
    function kh(e, t) {
      if (ll) {
        if (e === "compositionend" || !qs && _h(e, t)) {
          var a = Po();
          return vf(), ll = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Cf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ef && !Tf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Yy(e, t, a, i, u) {
      var s;
      if (Iy ? s = Rf(t, i) : s = kh(t, i), !s)
        return null;
      var f = Mh(a, "onBeforeInput");
      if (f.length > 0) {
        var v = new Pu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: v,
          listeners: f
        }), v.data = s;
      }
    }
    function bf(e, t, a, i, u, s, f) {
      mp(e, t, a, i, u), Yy(e, t, a, i, u);
    }
    var Wy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Io(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Wy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Qy(e) {
      if (!Pt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function wf() {
      Qt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      _c(i);
      var u = Mh(t, "onChange");
      if (u.length > 0) {
        var s = new Hr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, xc(e)), bd(d, t);
    }
    function d(e) {
      D0(e, 0);
    }
    function g(e) {
      var t = Lf(e);
      if (po(t))
        return e;
    }
    function w(e, t) {
      if (e === "change")
        return t;
    }
    var O = !1;
    Pt && (O = Qy("input") && (!document.documentMode || document.documentMode > 9));
    function $(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", ce);
    }
    function ue() {
      r && (r.detachEvent("onpropertychange", ce), r = null, l = null);
    }
    function ce(e) {
      e.propertyName === "value" && g(l) && c(e);
    }
    function le(e, t, a) {
      e === "focusin" ? (ue(), $(t, a)) : e === "focusout" && ue();
    }
    function Ue(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return g(l);
    }
    function We(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Xe(e, t) {
      if (e === "click")
        return g(t);
    }
    function Xn(e, t) {
      if (e === "input" || e === "change")
        return g(t);
    }
    function U(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ct(e, "number", e.value);
    }
    function N(e, t, a, i, u, s, f) {
      var v = a ? Lf(a) : window, h, T;
      if (o(v) ? h = w : Io(v) ? O ? h = Xn : (h = Ue, T = le) : We(v) && (h = Xe), h) {
        var b = h(t, a);
        if (b) {
          n(e, b, i, u);
          return;
        }
      }
      T && T(t, v, a), t === "focusout" && U(v);
    }
    function V() {
      Se("onMouseEnter", ["mouseout", "mouseover"]), Se("onMouseLeave", ["mouseout", "mouseover"]), Se("onPointerEnter", ["pointerout", "pointerover"]), Se("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function me(e, t, a, i, u, s, f) {
      var v = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (v && !Yv(i)) {
        var T = i.relatedTarget || i.fromElement;
        if (T && (Zs(T) || Op(T)))
          return;
      }
      if (!(!h && !v)) {
        var b;
        if (u.window === u)
          b = u;
        else {
          var A = u.ownerDocument;
          A ? b = A.defaultView || A.parentWindow : b = window;
        }
        var M, P;
        if (h) {
          var B = i.relatedTarget || i.toElement;
          if (M = a, P = B ? Zs(B) : null, P !== null) {
            var X = wa(P);
            (P !== X || P.tag !== ae && P.tag !== Oe) && (P = null);
          }
        } else
          M = null, P = a;
        if (M !== P) {
          var Ve = Xl, ot = "onMouseLeave", nt = "onMouseEnter", Yt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ve = fp, ot = "onPointerLeave", nt = "onPointerEnter", Yt = "pointer");
          var Ut = M == null ? b : Lf(M), F = P == null ? b : Lf(P), K = new Ve(ot, Yt + "leave", M, i, u);
          K.target = Ut, K.relatedTarget = F;
          var j = null, fe = Zs(u);
          if (fe === a) {
            var Pe = new Ve(nt, Yt + "enter", P, i, u);
            Pe.target = F, Pe.relatedTarget = Ut, j = Pe;
          }
          ob(e, K, j, M, P);
        }
      }
    }
    function Je(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Qe = typeof Object.is == "function" ? Object.is : Je;
    function it(e, t) {
      if (Qe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Mn.call(t, s) || !Qe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function St(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function yr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Zt(e, t) {
      for (var a = St(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Qi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = St(yr(a));
      }
    }
    function Zl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, v = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return qy(e, u, s, f, v);
    }
    function qy(e, t, a, i, u) {
      var s = 0, f = -1, v = -1, h = 0, T = 0, b = e, A = null;
      e:
        for (; ; ) {
          for (var M = null; b === t && (a === 0 || b.nodeType === Qi) && (f = s + a), b === i && (u === 0 || b.nodeType === Qi) && (v = s + u), b.nodeType === Qi && (s += b.nodeValue.length), (M = b.firstChild) !== null; )
            A = b, b = M;
          for (; ; ) {
            if (b === e)
              break e;
            if (A === t && ++h === a && (f = s), A === i && ++T === u && (v = s), (M = b.nextSibling) !== null)
              break;
            b = A, A = b.parentNode;
          }
          b = M;
        }
      return f === -1 || v === -1 ? null : {
        start: f,
        end: v
      };
    }
    function $1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > v) {
          var h = v;
          v = f, f = h;
        }
        var T = Zt(e, f), b = Zt(e, v);
        if (T && b) {
          if (u.rangeCount === 1 && u.anchorNode === T.node && u.anchorOffset === T.offset && u.focusNode === b.node && u.focusOffset === b.offset)
            return;
          var A = a.createRange();
          A.setStart(T.node, T.offset), u.removeAllRanges(), f > v ? (u.addRange(A), u.extend(b.node, b.offset)) : (A.setEnd(b.node, b.offset), u.addRange(A));
        }
      }
    }
    function y0(e) {
      return e && e.nodeType === Qi;
    }
    function g0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : y0(e) ? !1 : y0(t) ? g0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function I1(e) {
      return e && e.ownerDocument && g0(e.ownerDocument.documentElement, e);
    }
    function Y1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function S0() {
      for (var e = window, t = Ll(); t instanceof e.HTMLIFrameElement; ) {
        if (Y1(t))
          e = t.contentWindow;
        else
          return t;
        t = Ll(e.document);
      }
      return t;
    }
    function Gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function W1() {
      var e = S0();
      return {
        focusedElem: e,
        selectionRange: Gy(e) ? q1(e) : null
      };
    }
    function Q1(e) {
      var t = S0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && I1(a)) {
        i !== null && Gy(a) && G1(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === ua && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var v = u[f];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function q1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Zl(e), t || {
        start: 0,
        end: 0
      };
    }
    function G1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : $1(e, t);
    }
    var X1 = Pt && "documentMode" in document && document.documentMode <= 11;
    function K1() {
      Qt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var xf = null, Xy = null, yp = null, Ky = !1;
    function Z1(e) {
      if ("selectionStart" in e && Gy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function J1(e) {
      return e.window === e ? e.document : e.nodeType === fi ? e : e.ownerDocument;
    }
    function E0(e, t, a) {
      var i = J1(a);
      if (!(Ky || xf == null || xf !== Ll(i))) {
        var u = Z1(xf);
        if (!yp || !it(yp, u)) {
          yp = u;
          var s = Mh(Xy, "onSelect");
          if (s.length > 0) {
            var f = new Hr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = xf;
          }
        }
      }
    }
    function eb(e, t, a, i, u, s, f) {
      var v = a ? Lf(a) : window;
      switch (t) {
        case "focusin":
          (Io(v) || v.contentEditable === "true") && (xf = v, Xy = a, yp = null);
          break;
        case "focusout":
          xf = null, Xy = null, yp = null;
          break;
        case "mousedown":
          Ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ky = !1, E0(e, i, u);
          break;
        case "selectionchange":
          if (X1)
            break;
        case "keydown":
        case "keyup":
          E0(e, i, u);
      }
    }
    function Dh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var _f = {
      animationend: Dh("Animation", "AnimationEnd"),
      animationiteration: Dh("Animation", "AnimationIteration"),
      animationstart: Dh("Animation", "AnimationStart"),
      transitionend: Dh("Transition", "TransitionEnd")
    }, Zy = {}, C0 = {};
    Pt && (C0 = document.createElement("div").style, "AnimationEvent" in window || (delete _f.animationend.animation, delete _f.animationiteration.animation, delete _f.animationstart.animation), "TransitionEvent" in window || delete _f.transitionend.transition);
    function Oh(e) {
      if (Zy[e])
        return Zy[e];
      if (!_f[e])
        return e;
      var t = _f[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in C0)
          return Zy[e] = t[a];
      return e;
    }
    var T0 = Oh("animationend"), R0 = Oh("animationiteration"), b0 = Oh("animationstart"), w0 = Oh("transitionend"), x0 = /* @__PURE__ */ new Map(), _0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Yo(e, t) {
      x0.set(e, t), Qt(t, [e]);
    }
    function tb() {
      for (var e = 0; e < _0.length; e++) {
        var t = _0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Yo(a, "on" + i);
      }
      Yo(T0, "onAnimationEnd"), Yo(R0, "onAnimationIteration"), Yo(b0, "onAnimationStart"), Yo("dblclick", "onDoubleClick"), Yo("focusin", "onFocus"), Yo("focusout", "onBlur"), Yo(w0, "onTransitionEnd");
    }
    function nb(e, t, a, i, u, s, f) {
      var v = x0.get(t);
      if (v !== void 0) {
        var h = Hr, T = t;
        switch (t) {
          case "keypress":
            if (Fu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = Hy;
            break;
          case "focusin":
            T = "focus", h = mf;
            break;
          case "focusout":
            T = "blur", h = mf;
            break;
          case "beforeblur":
          case "afterblur":
            h = mf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Xl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Vu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Ka;
            break;
          case T0:
          case R0:
          case b0:
            h = yf;
            break;
          case w0:
            h = $y;
            break;
          case "scroll":
            h = lp;
            break;
          case "wheel":
            h = Sf;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Fy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = fp;
            break;
        }
        var b = (s & yu) !== 0;
        {
          var A = !b && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", M = lb(a, v, i.type, b, A);
          if (M.length > 0) {
            var P = new h(v, T, null, i, u);
            e.push({
              event: P,
              listeners: M
            });
          }
        }
      }
    }
    tb(), V(), wf(), K1(), wh();
    function rb(e, t, a, i, u, s, f) {
      nb(e, t, a, i, u, s);
      var v = (s & by) === 0;
      v && (me(e, t, a, i, u), N(e, t, a, i, u), eb(e, t, a, i, u), bf(e, t, a, i, u));
    }
    var gp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Jy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(gp));
    function k0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ki(i, t, void 0, e), e.currentTarget = null;
    }
    function ab(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, v = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          k0(e, h, v), i = f;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var b = t[T], A = b.instance, M = b.currentTarget, P = b.listener;
          if (A !== i && e.isPropagationStopped())
            return;
          k0(e, P, M), i = A;
        }
    }
    function D0(e, t) {
      for (var a = (t & yu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        ab(s, f, a);
      }
      kd();
    }
    function ib(e, t, a, i, u) {
      var s = xc(a), f = [];
      rb(f, e, i, a, s, t), D0(f, t);
    }
    function $n(e, t) {
      Jy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = zw(t), u = sb(e, a);
      i.has(u) || (O0(t, e, Es, a), i.add(u));
    }
    function eg(e, t, a) {
      Jy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= yu), O0(a, e, i, t);
    }
    var Lh = "_reactListening" + Math.random().toString(36).slice(2);
    function Sp(e) {
      if (!e[Lh]) {
        e[Lh] = !0, ke.forEach(function(a) {
          a !== "selectionchange" && (Jy.has(a) || eg(a, !1, e), eg(a, !0, e));
        });
        var t = e.nodeType === fi ? e : e.ownerDocument;
        t !== null && (t[Lh] || (t[Lh] = !0, eg("selectionchange", !1, t)));
      }
    }
    function O0(e, t, a, i, u) {
      var s = Fo(e, t, a), f = void 0;
      ws && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? il(e, t, s, f) : Vo(e, t, s) : f !== void 0 ? pf(e, t, s, f) : ip(e, t, s);
    }
    function L0(e, t) {
      return e === t || e.nodeType === Jn && e.parentNode === t;
    }
    function tg(e, t, a, i, u) {
      var s = i;
      if (!(t & Gi) && !(t & Es)) {
        var f = u;
        if (i !== null) {
          var v = i;
          e:
            for (; ; ) {
              if (v === null)
                return;
              var h = v.tag;
              if (h === Q || h === ee) {
                var T = v.stateNode.containerInfo;
                if (L0(T, f))
                  break;
                if (h === ee)
                  for (var b = v.return; b !== null; ) {
                    var A = b.tag;
                    if (A === Q || A === ee) {
                      var M = b.stateNode.containerInfo;
                      if (L0(M, f))
                        return;
                    }
                    b = b.return;
                  }
                for (; T !== null; ) {
                  var P = Zs(T);
                  if (P === null)
                    return;
                  var B = P.tag;
                  if (B === ae || B === Oe) {
                    v = s = P;
                    continue e;
                  }
                  T = T.parentNode;
                }
              }
              v = v.return;
            }
        }
      }
      bd(function() {
        return ib(e, t, a, s);
      });
    }
    function Ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function lb(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, h = [], T = e, b = null; T !== null; ) {
        var A = T, M = A.stateNode, P = A.tag;
        if (P === ae && M !== null && (b = M, v !== null)) {
          var B = Su(T, v);
          B != null && h.push(Ep(T, B, b));
        }
        if (u)
          break;
        T = T.return;
      }
      return h;
    }
    function Mh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, v = s.tag;
        if (v === ae && f !== null) {
          var h = f, T = Su(u, a);
          T != null && i.unshift(Ep(u, T, h));
          var b = Su(u, t);
          b != null && i.push(Ep(u, b, h));
        }
        u = u.return;
      }
      return i;
    }
    function kf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ae);
      return e || null;
    }
    function ub(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = kf(s))
        u++;
      for (var f = 0, v = i; v; v = kf(v))
        f++;
      for (; u - f > 0; )
        a = kf(a), u--;
      for (; f - u > 0; )
        i = kf(i), f--;
      for (var h = u; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = kf(a), i = kf(i);
      }
      return null;
    }
    function M0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], v = a; v !== null && v !== i; ) {
        var h = v, T = h.alternate, b = h.stateNode, A = h.tag;
        if (T !== null && T === i)
          break;
        if (A === ae && b !== null) {
          var M = b;
          if (u) {
            var P = Su(v, s);
            P != null && f.unshift(Ep(v, P, M));
          } else if (!u) {
            var B = Su(v, s);
            B != null && f.push(Ep(v, B, M));
          }
        }
        v = v.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function ob(e, t, a, i, u) {
      var s = i && u ? ub(i, u) : null;
      i !== null && M0(e, t, i, s, !1), u !== null && a !== null && M0(e, a, u, s, !0);
    }
    function sb(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Za = !1, Cp = "dangerouslySetInnerHTML", Nh = "suppressContentEditableWarning", Wo = "suppressHydrationWarning", N0 = "autoFocus", Xs = "children", Ks = "style", Ah = "__html", ng, zh, Tp, A0, Uh, z0, U0;
    ng = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, zh = function(e, t) {
      wc(e, t), Sd(e, t), Iv(e, t, {
        registrationNameDependencies: Ge,
        possibleRegistrationNames: mt
      });
    }, z0 = Pt && !document.documentMode, Tp = function(e, t, a) {
      if (!Za) {
        var i = Fh(a), u = Fh(t);
        u !== i && (Za = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, A0 = function(e) {
      if (!Za) {
        Za = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Uh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === Wi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var cb = /\r\n?/g, fb = /\u0000|\uFFFD/g;
    function Fh(e) {
      $e(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(cb, `
`).replace(fb, "");
    }
    function jh(e, t, a, i) {
      var u = Fh(t), s = Fh(e);
      if (s !== u && (i && (Za || (Za = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ee))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function F0(e) {
      return e.nodeType === fi ? e : e.ownerDocument;
    }
    function db() {
    }
    function Vh(e) {
      e.onclick = db;
    }
    function pb(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ks)
            f && Object.freeze(f), Av(t, f);
          else if (s === Cp) {
            var v = f ? f[Ah] : void 0;
            v != null && Rv(t, v);
          } else if (s === Xs)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && Cc(t, f);
            } else
              typeof f == "number" && Cc(t, "" + f);
          else
            s === Nh || s === Wo || s === N0 || (Ge.hasOwnProperty(s) ? f != null && (typeof f != "function" && Uh(s, f), s === "onScroll" && $n("scroll", t)) : f != null && Ta(t, s, f, u));
        }
    }
    function vb(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ks ? Av(e, f) : s === Cp ? Rv(e, f) : s === Xs ? Cc(e, f) : Ta(e, s, f, i);
      }
    }
    function hb(e, t, a, i) {
      var u, s = F0(a), f, v = i;
      if (v === Wi && (v = Sc(e)), v === Wi) {
        if (u = qi(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var T = h.firstChild;
          f = h.removeChild(T);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var b = f;
          t.multiple ? b.multiple = !0 : t.size && (b.size = t.size);
        }
      } else
        f = s.createElementNS(v, e);
      return v === Wi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Mn.call(ng, e) && (ng[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function mb(e, t) {
      return F0(t).createTextNode(e);
    }
    function yb(e, t, a, i) {
      var u = qi(t, a);
      zh(t, a);
      var s;
      switch (t) {
        case "dialog":
          $n("cancel", e), $n("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          $n("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < gp.length; f++)
            $n(gp[f], e);
          s = a;
          break;
        case "source":
          $n("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          $n("error", e), $n("load", e), s = a;
          break;
        case "details":
          $n("toggle", e), s = a;
          break;
        case "input":
          _(e, a), s = y(e, a), $n("invalid", e);
          break;
        case "option":
          pn(e, a), s = a;
          break;
        case "select":
          ms(e, a), s = hs(e, a), $n("invalid", e);
          break;
        case "textarea":
          Ev(e, a), s = cd(e, a), $n("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Rc(t, s), pb(t, e, i, s, u), t) {
        case "input":
          Va(e), ve(e, a, !1);
          break;
        case "textarea":
          Va(e), Tv(e);
          break;
        case "option":
          En(e, a);
          break;
        case "select":
          od(e, a);
          break;
        default:
          typeof s.onClick == "function" && Vh(e);
          break;
      }
    }
    function gb(e, t, a, i, u) {
      zh(t, i);
      var s = null, f, v;
      switch (t) {
        case "input":
          f = y(e, a), v = y(e, i), s = [];
          break;
        case "select":
          f = hs(e, a), v = hs(e, i), s = [];
          break;
        case "textarea":
          f = cd(e, a), v = cd(e, i), s = [];
          break;
        default:
          f = a, v = i, typeof f.onClick != "function" && typeof v.onClick == "function" && Vh(e);
          break;
      }
      Rc(t, v);
      var h, T, b = null;
      for (h in f)
        if (!(v.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === Ks) {
            var A = f[h];
            for (T in A)
              A.hasOwnProperty(T) && (b || (b = {}), b[T] = "");
          } else
            h === Cp || h === Xs || h === Nh || h === Wo || h === N0 || (Ge.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in v) {
        var M = v[h], P = f != null ? f[h] : void 0;
        if (!(!v.hasOwnProperty(h) || M === P || M == null && P == null))
          if (h === Ks)
            if (M && Object.freeze(M), P) {
              for (T in P)
                P.hasOwnProperty(T) && (!M || !M.hasOwnProperty(T)) && (b || (b = {}), b[T] = "");
              for (T in M)
                M.hasOwnProperty(T) && P[T] !== M[T] && (b || (b = {}), b[T] = M[T]);
            } else
              b || (s || (s = []), s.push(h, b)), b = M;
          else if (h === Cp) {
            var B = M ? M[Ah] : void 0, X = P ? P[Ah] : void 0;
            B != null && X !== B && (s = s || []).push(h, B);
          } else
            h === Xs ? (typeof M == "string" || typeof M == "number") && (s = s || []).push(h, "" + M) : h === Nh || h === Wo || (Ge.hasOwnProperty(h) ? (M != null && (typeof M != "function" && Uh(h, M), h === "onScroll" && $n("scroll", e)), !s && P !== M && (s = [])) : (s = s || []).push(h, M));
      }
      return b && (gs(b, v[Ks]), (s = s || []).push(Ks, b)), s;
    }
    function Sb(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && H(e, u);
      var s = qi(a, i), f = qi(a, u);
      switch (vb(e, t, s, f), a) {
        case "input":
          q(e, u);
          break;
        case "textarea":
          Cv(e, u);
          break;
        case "select":
          vy(e, u);
          break;
      }
    }
    function Eb(e) {
      {
        var t = e.toLowerCase();
        return bc.hasOwnProperty(t) && bc[t] || null;
      }
    }
    function Cb(e, t, a, i, u, s, f) {
      var v, h;
      switch (v = qi(t, a), zh(t, a), t) {
        case "dialog":
          $n("cancel", e), $n("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          $n("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < gp.length; T++)
            $n(gp[T], e);
          break;
        case "source":
          $n("error", e);
          break;
        case "img":
        case "image":
        case "link":
          $n("error", e), $n("load", e);
          break;
        case "details":
          $n("toggle", e);
          break;
        case "input":
          _(e, a), $n("invalid", e);
          break;
        case "option":
          pn(e, a);
          break;
        case "select":
          ms(e, a), $n("invalid", e);
          break;
        case "textarea":
          Ev(e, a), $n("invalid", e);
          break;
      }
      Rc(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var b = e.attributes, A = 0; A < b.length; A++) {
          var M = b[A].name.toLowerCase();
          switch (M) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(b[A].name);
          }
        }
      }
      var P = null;
      for (var B in a)
        if (a.hasOwnProperty(B)) {
          var X = a[B];
          if (B === Xs)
            typeof X == "string" ? e.textContent !== X && (a[Wo] !== !0 && jh(e.textContent, X, s, f), P = [Xs, X]) : typeof X == "number" && e.textContent !== "" + X && (a[Wo] !== !0 && jh(e.textContent, X, s, f), P = [Xs, "" + X]);
          else if (Ge.hasOwnProperty(B))
            X != null && (typeof X != "function" && Uh(B, X), B === "onScroll" && $n("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var Ve = void 0, ot = v && ge ? null : Br(B);
            if (a[Wo] !== !0) {
              if (!(B === Nh || B === Wo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              B === "value" || B === "checked" || B === "selected")) {
                if (B === Cp) {
                  var nt = e.innerHTML, Yt = X ? X[Ah] : void 0;
                  if (Yt != null) {
                    var Ut = U0(e, Yt);
                    Ut !== nt && Tp(B, nt, Ut);
                  }
                } else if (B === Ks) {
                  if (h.delete(B), z0) {
                    var F = Ty(X);
                    Ve = e.getAttribute("style"), F !== Ve && Tp(B, Ve, F);
                  }
                } else if (v && !ge)
                  h.delete(B.toLowerCase()), Ve = Si(e, B, X), X !== Ve && Tp(B, Ve, X);
                else if (!jn(B, ot, v) && !dn(B, X, ot, v)) {
                  var K = !1;
                  if (ot !== null)
                    h.delete(ot.attributeName), Ve = Ca(e, B, X, ot);
                  else {
                    var j = i;
                    if (j === Wi && (j = Sc(t)), j === Wi)
                      h.delete(B.toLowerCase());
                    else {
                      var fe = Eb(B);
                      fe !== null && fe !== B && (K = !0, h.delete(fe)), h.delete(B);
                    }
                    Ve = Si(e, B, X);
                  }
                  var Pe = ge;
                  !Pe && X !== Ve && !K && Tp(B, Ve, X);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[Wo] !== !0 && A0(h), t) {
        case "input":
          Va(e), ve(e, a, !0);
          break;
        case "textarea":
          Va(e), Tv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Vh(e);
          break;
      }
      return P;
    }
    function Tb(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function rg(e, t) {
      {
        if (Za)
          return;
        Za = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ag(e, t) {
      {
        if (Za)
          return;
        Za = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ig(e, t, a) {
      {
        if (Za)
          return;
        Za = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function lg(e, t) {
      {
        if (t === "" || Za)
          return;
        Za = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Rb(e, t, a) {
      switch (t) {
        case "input":
          dt(e, a);
          return;
        case "textarea":
          fd(e, a);
          return;
        case "select":
          hy(e, a);
          return;
      }
    }
    var Rp = function() {
    }, bp = function() {
    };
    {
      var bb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], wb = j0.concat(["button"]), xb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], V0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      bp = function(e, t) {
        var a = Mt({}, e || V0), i = {
          tag: t
        };
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), wb.indexOf(t) !== -1 && (a.pTagInButtonScope = null), bb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var _b = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return xb.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, kb = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, P0 = {};
      Rp = function(e, t, a) {
        a = a || V0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = _b(e, u) ? null : i, f = s ? null : kb(e, a), v = s || f;
        if (v) {
          var h = v.tag, T = !!s + "|" + e + "|" + h;
          if (!P0[T]) {
            P0[T] = !0;
            var b = e, A = "";
            if (e === "#text" ? /\S/.test(t) ? b = "Text nodes" : (b = "Whitespace text nodes", A = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : b = "<" + e + ">", s) {
              var M = "";
              h === "table" && e === "tr" && (M += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", b, h, A, M);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", b, h);
          }
        }
      };
    }
    var Ph = "suppressHydrationWarning", Hh = "$", Bh = "/$", wp = "$?", xp = "$!", Db = "style", ug = null, og = null;
    function Ob(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case fi:
        case hu: {
          t = i === fi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : pd(null, "");
          break;
        }
        default: {
          var s = i === Jn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = pd(f, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), h = bp(null, v);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function Lb(e, t, a) {
      {
        var i = e, u = pd(i.namespace, t), s = bp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function _O(e) {
      return e;
    }
    function Mb(e) {
      ug = Da(), og = W1();
      var t = null;
      return mr(!1), t;
    }
    function Nb(e) {
      Q1(og), mr(ug), ug = null, og = null;
    }
    function Ab(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, h = bp(f.ancestorInfo, e);
          Rp(null, v, h);
        }
        s = f.namespace;
      }
      var T = hb(e, t, a, s);
      return Dp(u, T), mg(T, t), T;
    }
    function zb(e, t) {
      e.appendChild(t);
    }
    function Ub(e, t, a, i, u) {
      switch (yb(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Fb(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, h = bp(f.ancestorInfo, t);
          Rp(null, v, h);
        }
      }
      return gb(e, t, a, i);
    }
    function sg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function jb(e, t, a, i) {
      {
        var u = a;
        Rp(null, e, u.ancestorInfo);
      }
      var s = mb(e, t);
      return Dp(i, s), s;
    }
    function Vb() {
      var e = window.event;
      return e === void 0 ? nl : Qr(e.type);
    }
    var cg = typeof setTimeout == "function" ? setTimeout : void 0, Pb = typeof clearTimeout == "function" ? clearTimeout : void 0, fg = -1, H0 = typeof Promise == "function" ? Promise : void 0, Hb = typeof queueMicrotask == "function" ? queueMicrotask : typeof H0 < "u" ? function(e) {
      return H0.resolve(null).then(e).catch(Bb);
    } : cg;
    function Bb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function $b(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function Ib(e, t, a, i, u, s) {
      Sb(e, t, a, i, u), mg(e, u);
    }
    function B0(e) {
      Cc(e, "");
    }
    function Yb(e, t, a) {
      e.nodeValue = a;
    }
    function Wb(e, t) {
      e.appendChild(t);
    }
    function Qb(e, t) {
      var a;
      e.nodeType === Jn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Vh(a);
    }
    function qb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Gb(e, t, a) {
      e.nodeType === Jn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Xb(e, t) {
      e.removeChild(t);
    }
    function Kb(e, t) {
      e.nodeType === Jn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function dg(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Jn) {
          var s = u.data;
          if (s === Bh)
            if (i === 0) {
              e.removeChild(u), zt(t);
              return;
            } else
              i--;
          else
            (s === Hh || s === wp || s === xp) && i++;
        }
        a = u;
      } while (a);
      zt(t);
    }
    function Zb(e, t) {
      e.nodeType === Jn ? dg(e.parentNode, t) : e.nodeType === ua && dg(e, t), zt(e);
    }
    function Jb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ew(e) {
      e.nodeValue = "";
    }
    function tw(e, t) {
      e = e;
      var a = t[Db], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Tc("display", i);
    }
    function nw(e, t) {
      e.nodeValue = t;
    }
    function rw(e) {
      e.nodeType === ua ? e.textContent = "" : e.nodeType === fi && e.documentElement && e.removeChild(e.documentElement);
    }
    function aw(e, t, a) {
      return e.nodeType !== ua || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function iw(e, t) {
      return t === "" || e.nodeType !== Qi ? null : e;
    }
    function lw(e) {
      return e.nodeType !== Jn ? null : e;
    }
    function $0(e) {
      return e.data === wp;
    }
    function pg(e) {
      return e.data === xp;
    }
    function uw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function ow(e, t) {
      e._reactRetry = t;
    }
    function $h(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ua || t === Qi)
          break;
        if (t === Jn) {
          var a = e.data;
          if (a === Hh || a === xp || a === wp)
            break;
          if (a === Bh)
            return null;
        }
      }
      return e;
    }
    function _p(e) {
      return $h(e.nextSibling);
    }
    function sw(e) {
      return $h(e.firstChild);
    }
    function cw(e) {
      return $h(e.firstChild);
    }
    function fw(e) {
      return $h(e.nextSibling);
    }
    function dw(e, t, a, i, u, s, f) {
      Dp(s, e), mg(e, a);
      var v;
      {
        var h = u;
        v = h.namespace;
      }
      var T = (s.mode & At) !== ft;
      return Cb(e, t, a, v, i, T, f);
    }
    function pw(e, t, a, i) {
      return Dp(a, e), a.mode & At, Tb(e, t);
    }
    function vw(e, t) {
      Dp(t, e);
    }
    function hw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Jn) {
          var i = t.data;
          if (i === Bh) {
            if (a === 0)
              return _p(t);
            a--;
          } else
            (i === Hh || i === xp || i === wp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function I0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Jn) {
          var i = t.data;
          if (i === Hh || i === xp || i === wp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Bh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function mw(e) {
      zt(e);
    }
    function yw(e) {
      zt(e);
    }
    function gw(e) {
      return e !== "head" && e !== "body";
    }
    function Sw(e, t, a, i) {
      var u = !0;
      jh(t.nodeValue, a, i, u);
    }
    function Ew(e, t, a, i, u, s) {
      if (t[Ph] !== !0) {
        var f = !0;
        jh(i.nodeValue, u, s, f);
      }
    }
    function Cw(e, t) {
      t.nodeType === ua ? rg(e, t) : t.nodeType === Jn || ag(e, t);
    }
    function Tw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ua ? rg(a, t) : t.nodeType === Jn || ag(a, t));
      }
    }
    function Rw(e, t, a, i, u) {
      (u || t[Ph] !== !0) && (i.nodeType === ua ? rg(a, i) : i.nodeType === Jn || ag(a, i));
    }
    function bw(e, t, a) {
      ig(e, t);
    }
    function ww(e, t) {
      lg(e, t);
    }
    function xw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ig(i, t);
      }
    }
    function _w(e, t) {
      {
        var a = e.parentNode;
        a !== null && lg(a, t);
      }
    }
    function kw(e, t, a, i, u, s) {
      (s || t[Ph] !== !0) && ig(a, i);
    }
    function Dw(e, t, a, i, u) {
      (u || t[Ph] !== !0) && lg(a, i);
    }
    function Ow(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Lw(e) {
      Sp(e);
    }
    var Df = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Df, vg = "__reactProps$" + Df, kp = "__reactContainer$" + Df, hg = "__reactEvents$" + Df, Mw = "__reactListeners$" + Df, Nw = "__reactHandles$" + Df;
    function Aw(e) {
      delete e[Of], delete e[vg], delete e[hg], delete e[Mw], delete e[Nw];
    }
    function Dp(e, t) {
      t[Of] = e;
    }
    function Ih(e, t) {
      t[kp] = e;
    }
    function Y0(e) {
      e[kp] = null;
    }
    function Op(e) {
      return !!e[kp];
    }
    function Zs(e) {
      var t = e[Of];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[kp] || a[Of], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = I0(e); u !== null; ) {
              var s = u[Of];
              if (s)
                return s;
              u = I0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Qo(e) {
      var t = e[Of] || e[kp];
      return t && (t.tag === ae || t.tag === Oe || t.tag === W || t.tag === Q) ? t : null;
    }
    function Lf(e) {
      if (e.tag === ae || e.tag === Oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Yh(e) {
      return e[vg] || null;
    }
    function mg(e, t) {
      e[vg] = t;
    }
    function zw(e) {
      var t = e[hg];
      return t === void 0 && (t = e[hg] = /* @__PURE__ */ new Set()), t;
    }
    var W0 = {}, Q0 = m.ReactDebugCurrentFrame;
    function Wh(e) {
      if (e) {
        var t = e._owner, a = bi(e.type, e._source, t ? t.type : null);
        Q0.setExtraStackFrame(a);
      } else
        Q0.setExtraStackFrame(null);
    }
    function ul(e, t, a, i, u) {
      {
        var s = Function.call.bind(Mn);
        for (var f in e)
          if (s(e, f)) {
            var v = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              v = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              v = T;
            }
            v && !(v instanceof Error) && (Wh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), Wh(null)), v instanceof Error && !(v.message in W0) && (W0[v.message] = !0, Wh(u), S("Failed %s type: %s", a, v.message), Wh(null));
          }
      }
    }
    var yg = [], Qh;
    Qh = [];
    var $u = -1;
    function qo(e) {
      return {
        current: e
      };
    }
    function ma(e, t) {
      if ($u < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Qh[$u] && S("Unexpected Fiber popped."), e.current = yg[$u], yg[$u] = null, Qh[$u] = null, $u--;
    }
    function ya(e, t, a) {
      $u++, yg[$u] = e.current, Qh[$u] = a, e.current = t;
    }
    var gg;
    gg = {};
    var mi = {};
    Object.freeze(mi);
    var Iu = qo(mi), Jl = qo(!1), Sg = mi;
    function Mf(e, t, a) {
      return a && eu(t) ? Sg : Iu.current;
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Nf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return mi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var v = Ct(e) || "Unknown";
          ul(i, s, "context", v);
        }
        return u && q0(e, t, s), s;
      }
    }
    function qh() {
      return Jl.current;
    }
    function eu(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Gh(e) {
      ma(Jl, e), ma(Iu, e);
    }
    function Eg(e) {
      ma(Jl, e), ma(Iu, e);
    }
    function G0(e, t, a) {
      {
        if (Iu.current !== mi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ya(Iu, t, e), ya(Jl, a, e);
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ct(e) || "Unknown";
            gg[s] || (gg[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var v in f)
          if (!(v in u))
            throw new Error((Ct(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var h = Ct(e) || "Unknown";
          ul(u, f, "child context", h);
        }
        return Mt({}, a, f);
      }
    }
    function Xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || mi;
        return Sg = Iu.current, ya(Iu, a, e), ya(Jl, Jl.current, e), !0;
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = X0(e, t, Sg);
          i.__reactInternalMemoizedMergedChildContext = u, ma(Jl, e), ma(Iu, e), ya(Iu, u, e), ya(Jl, a, e);
        } else
          ma(Jl, e), ya(Jl, a, e);
      }
    }
    function Uw(e) {
      {
        if (!Nd(e) || e.tag !== G)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Q:
              return t.stateNode.context;
            case G: {
              var a = t.type;
              if (eu(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Go = 0, Kh = 1, Yu = null, Cg = !1, Tg = !1;
    function Z0(e) {
      Yu === null ? Yu = [e] : Yu.push(e);
    }
    function Fw(e) {
      Cg = !0, Z0(e);
    }
    function J0() {
      Cg && Xo();
    }
    function Xo() {
      if (!Tg && Yu !== null) {
        Tg = !0;
        var e = 0, t = qa();
        try {
          var a = !0, i = Yu;
          for (lr(Ur); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Yu = null, Cg = !1;
        } catch (s) {
          throw Yu !== null && (Yu = Yu.slice(e + 1)), Nc(zc, Xo), s;
        } finally {
          lr(t), Tg = !1;
        }
      }
      return null;
    }
    var Af = [], zf = 0, Zh = null, Jh = 0, Ni = [], Ai = 0, Js = null, Wu = 1, Qu = "";
    function jw(e) {
      return tc(), (e.flags & Od) !== lt;
    }
    function Vw(e) {
      return tc(), Jh;
    }
    function Pw() {
      var e = Qu, t = Wu, a = t & ~Hw(t);
      return a.toString(32) + e;
    }
    function ec(e, t) {
      tc(), Af[zf++] = Jh, Af[zf++] = Zh, Zh = e, Jh = t;
    }
    function eC(e, t, a) {
      tc(), Ni[Ai++] = Wu, Ni[Ai++] = Qu, Ni[Ai++] = Js, Js = e;
      var i = Wu, u = Qu, s = em(i) - 1, f = i & ~(1 << s), v = a + 1, h = em(t) + s;
      if (h > 30) {
        var T = s - s % 5, b = (1 << T) - 1, A = (f & b).toString(32), M = f >> T, P = s - T, B = em(t) + P, X = v << P, Ve = X | M, ot = A + u;
        Wu = 1 << B | Ve, Qu = ot;
      } else {
        var nt = v << s, Yt = nt | f, Ut = u;
        Wu = 1 << h | Yt, Qu = Ut;
      }
    }
    function Rg(e) {
      tc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ec(e, a), eC(e, a, i);
      }
    }
    function em(e) {
      return 32 - Hc(e);
    }
    function Hw(e) {
      return 1 << em(e) - 1;
    }
    function bg(e) {
      for (; e === Zh; )
        Zh = Af[--zf], Af[zf] = null, Jh = Af[--zf], Af[zf] = null;
      for (; e === Js; )
        Js = Ni[--Ai], Ni[Ai] = null, Qu = Ni[--Ai], Ni[Ai] = null, Wu = Ni[--Ai], Ni[Ai] = null;
    }
    function Bw() {
      return tc(), Js !== null ? {
        id: Wu,
        overflow: Qu
      } : null;
    }
    function $w(e, t) {
      tc(), Ni[Ai++] = Wu, Ni[Ai++] = Qu, Ni[Ai++] = Js, Wu = t.id, Qu = t.overflow, Js = e;
    }
    function tc() {
      Gr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var qr = null, zi = null, ol = !1, nc = !1, Ko = null;
    function Iw() {
      ol && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tC() {
      nc = !0;
    }
    function Yw() {
      return nc;
    }
    function Ww(e) {
      var t = e.stateNode.containerInfo;
      return zi = cw(t), qr = e, ol = !0, Ko = null, nc = !1, !0;
    }
    function Qw(e, t, a) {
      return zi = fw(t), qr = e, ol = !0, Ko = null, nc = !1, a !== null && $w(e, a), !0;
    }
    function nC(e, t) {
      switch (e.tag) {
        case Q: {
          Cw(e.stateNode.containerInfo, t);
          break;
        }
        case ae: {
          var a = (e.mode & At) !== ft;
          Rw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case W: {
          var i = e.memoizedState;
          i.dehydrated !== null && Tw(i.dehydrated, t);
          break;
        }
      }
    }
    function rC(e, t) {
      nC(e, t);
      var a = Xk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= rn) : i.push(a);
    }
    function wg(e, t) {
      {
        if (nc)
          return;
        switch (e.tag) {
          case Q: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ae:
                var i = t.type;
                t.pendingProps, bw(a, i);
                break;
              case Oe:
                var u = t.pendingProps;
                ww(a, u);
                break;
            }
            break;
          }
          case ae: {
            var s = e.type, f = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case ae: {
                var h = t.type, T = t.pendingProps, b = (e.mode & At) !== ft;
                kw(
                  s,
                  f,
                  v,
                  h,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
              case Oe: {
                var A = t.pendingProps, M = (e.mode & At) !== ft;
                Dw(
                  s,
                  f,
                  v,
                  A,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
            }
            break;
          }
          case W: {
            var P = e.memoizedState, B = P.dehydrated;
            if (B !== null)
              switch (t.tag) {
                case ae:
                  var X = t.type;
                  t.pendingProps, xw(B, X);
                  break;
                case Oe:
                  var Ve = t.pendingProps;
                  _w(B, Ve);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function aC(e, t) {
      t.flags = t.flags & ~$a | _n, wg(e, t);
    }
    function iC(e, t) {
      switch (e.tag) {
        case ae: {
          var a = e.type;
          e.pendingProps;
          var i = aw(t, a);
          return i !== null ? (e.stateNode = i, qr = e, zi = sw(i), !0) : !1;
        }
        case Oe: {
          var u = e.pendingProps, s = iw(t, u);
          return s !== null ? (e.stateNode = s, qr = e, zi = null, !0) : !1;
        }
        case W: {
          var f = lw(t);
          if (f !== null) {
            var v = {
              dehydrated: f,
              treeContext: Bw(),
              retryLane: va
            };
            e.memoizedState = v;
            var h = Kk(f);
            return h.return = e, e.child = h, qr = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function xg(e) {
      return (e.mode & At) !== ft && (e.flags & gt) === lt;
    }
    function _g(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function kg(e) {
      if (ol) {
        var t = zi;
        if (!t) {
          xg(e) && (wg(qr, e), _g()), aC(qr, e), ol = !1, qr = e;
          return;
        }
        var a = t;
        if (!iC(e, t)) {
          xg(e) && (wg(qr, e), _g()), t = _p(a);
          var i = qr;
          if (!t || !iC(e, t)) {
            aC(qr, e), ol = !1, qr = e;
            return;
          }
          rC(i, a);
        }
      }
    }
    function qw(e, t, a) {
      var i = e.stateNode, u = !nc, s = dw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Gw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = pw(t, a, e);
      if (i) {
        var u = qr;
        if (u !== null)
          switch (u.tag) {
            case Q: {
              var s = u.stateNode.containerInfo, f = (u.mode & At) !== ft;
              Sw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ae: {
              var v = u.type, h = u.memoizedProps, T = u.stateNode, b = (u.mode & At) !== ft;
              Ew(
                v,
                h,
                T,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                b
              );
              break;
            }
          }
      }
      return i;
    }
    function Xw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      vw(a, e);
    }
    function Kw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return hw(a);
    }
    function lC(e) {
      for (var t = e.return; t !== null && t.tag !== ae && t.tag !== Q && t.tag !== W; )
        t = t.return;
      qr = t;
    }
    function tm(e) {
      if (e !== qr)
        return !1;
      if (!ol)
        return lC(e), ol = !0, !1;
      if (e.tag !== Q && (e.tag !== ae || gw(e.type) && !sg(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (xg(e))
            uC(e), _g();
          else
            for (; t; )
              rC(e, t), t = _p(t);
      }
      return lC(e), e.tag === W ? zi = Kw(e) : zi = qr ? _p(e.stateNode) : null, !0;
    }
    function Zw() {
      return ol && zi !== null;
    }
    function uC(e) {
      for (var t = zi; t; )
        nC(e, t), t = _p(t);
    }
    function Uf() {
      qr = null, zi = null, ol = !1, nc = !1;
    }
    function oC() {
      Ko !== null && (nR(Ko), Ko = null);
    }
    function Gr() {
      return ol;
    }
    function Dg(e) {
      Ko === null ? Ko = [e] : Ko.push(e);
    }
    var Jw = m.ReactCurrentBatchConfig, ex = null;
    function tx() {
      return Jw.transition;
    }
    var sl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var nx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Hn && (t = a), a = a.return;
        return t;
      }, rc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Lp = [], Mp = [], Np = [], Ap = [], zp = [], Up = [], ac = /* @__PURE__ */ new Set();
      sl.recordUnsafeLifecycleWarnings = function(e, t) {
        ac.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & Hn && typeof t.UNSAFE_componentWillMount == "function" && Mp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Np.push(e), e.mode & Hn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ap.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & Hn && typeof t.UNSAFE_componentWillUpdate == "function" && Up.push(e));
      }, sl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(M) {
          e.add(Ct(M) || "Component"), ac.add(M.type);
        }), Lp = []);
        var t = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(M) {
          t.add(Ct(M) || "Component"), ac.add(M.type);
        }), Mp = []);
        var a = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(M) {
          a.add(Ct(M) || "Component"), ac.add(M.type);
        }), Np = []);
        var i = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(M) {
          i.add(Ct(M) || "Component"), ac.add(M.type);
        }), Ap = []);
        var u = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(M) {
          u.add(Ct(M) || "Component"), ac.add(M.type);
        }), zp = []);
        var s = /* @__PURE__ */ new Set();
        if (Up.length > 0 && (Up.forEach(function(M) {
          s.add(Ct(M) || "Component"), ac.add(M.type);
        }), Up = []), t.size > 0) {
          var f = rc(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var v = rc(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (s.size > 0) {
          var h = rc(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var T = rc(e);
          x(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var b = rc(a);
          x(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (u.size > 0) {
          var A = rc(u);
          x(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
      };
      var nm = /* @__PURE__ */ new Map(), sC = /* @__PURE__ */ new Set();
      sl.recordLegacyContextWarning = function(e, t) {
        var a = nx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sC.has(e.type)) {
          var i = nm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], nm.set(a, i)), i.push(e));
        }
      }, sl.flushLegacyContextWarning = function() {
        nm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ct(s) || "Component"), sC.add(s.type);
            });
            var u = rc(i);
            try {
              on(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              In();
            }
          }
        });
      }, sl.discardPendingWarnings = function() {
        Lp = [], Mp = [], Np = [], Ap = [], zp = [], Up = [], nm = /* @__PURE__ */ new Map();
      };
    }
    function cl(e, t) {
      if (e && e.defaultProps) {
        var a = Mt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Og = qo(null), Lg;
    Lg = {};
    var rm = null, Ff = null, Mg = null, am = !1;
    function im() {
      rm = null, Ff = null, Mg = null, am = !1;
    }
    function cC() {
      am = !0;
    }
    function fC() {
      am = !1;
    }
    function dC(e, t, a) {
      ya(Og, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Lg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Lg;
    }
    function Ng(e, t) {
      var a = Og.current;
      ma(Og, t), e._currentValue = a;
    }
    function Ag(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Mu(i.childLanes, t) ? u !== null && !Mu(u.childLanes, t) && (u.childLanes = _t(u.childLanes, t)) : (i.childLanes = _t(i.childLanes, t), u !== null && (u.childLanes = _t(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function rx(e, t, a) {
      ax(e, t, a);
    }
    function ax(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === G) {
                var v = ir(a), h = qu(Tn, v);
                h.tag = um;
                var T = i.updateQueue;
                if (T !== null) {
                  var b = T.shared, A = b.pending;
                  A === null ? h.next = h : (h.next = A.next, A.next = h), b.pending = h;
                }
              }
              i.lanes = _t(i.lanes, a);
              var M = i.alternate;
              M !== null && (M.lanes = _t(M.lanes, a)), Ag(i.return, a, e), s.lanes = _t(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Re)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ot) {
          var P = i.return;
          if (P === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          P.lanes = _t(P.lanes, a);
          var B = P.alternate;
          B !== null && (B.lanes = _t(B.lanes, a)), Ag(P, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var X = u.sibling;
            if (X !== null) {
              X.return = u.return, u = X;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function jf(e, t) {
      rm = e, Ff = null, Mg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ha(a.lanes, t) && Xp(), a.firstContext = null);
      }
    }
    function gr(e) {
      am && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Mg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Ff === null) {
          if (rm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ff = a, rm.dependencies = {
            lanes: J,
            firstContext: a
          };
        } else
          Ff = Ff.next = a;
      }
      return t;
    }
    var ic = null;
    function zg(e) {
      ic === null ? ic = [e] : ic.push(e);
    }
    function ix() {
      if (ic !== null) {
        for (var e = 0; e < ic.length; e++) {
          var t = ic[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ic = null;
      }
    }
    function pC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, zg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, lm(e, i);
    }
    function lx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, zg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function ux(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, zg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, lm(e, i);
    }
    function Ja(e, t) {
      return lm(e, t);
    }
    var ox = lm;
    function lm(e, t) {
      e.lanes = _t(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = _t(a.lanes, t)), a === null && (e.flags & (_n | $a)) !== lt && vR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = _t(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = _t(a.childLanes, t) : (u.flags & (_n | $a)) !== lt && vR(e), i = u, u = u.return;
      if (i.tag === Q) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var vC = 0, hC = 1, um = 2, Ug = 3, om = !1, Fg, sm;
    Fg = !1, sm = null;
    function jg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: J
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function mC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function qu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: vC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (sm === u && !Fg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Fg = !0), ok()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, ox(e, a);
      } else
        return ux(e, u, t, a);
    }
    function cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Wd(a)) {
          var s = u.lanes;
          s = qd(s, e.pendingLanes);
          var f = _t(s, a);
          u.lanes = f, Mo(e, f);
        }
      }
    }
    function Vg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, v = a.firstBaseUpdate;
          if (v !== null) {
            var h = v;
            do {
              var T = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = T : (f.next = T, f = T), h = h.next;
            } while (h !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var b = a.lastBaseUpdate;
      b === null ? a.firstBaseUpdate = t : b.next = t, a.lastBaseUpdate = t;
    }
    function sx(e, t, a, i, u, s) {
      switch (a.tag) {
        case hC: {
          var f = a.payload;
          if (typeof f == "function") {
            cC();
            var v = f.call(s, i, u);
            {
              if (e.mode & Hn) {
                ar(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  ar(!1);
                }
              }
              fC();
            }
            return v;
          }
          return f;
        }
        case Ug:
          e.flags = e.flags & ~pr | gt;
        case vC: {
          var h = a.payload, T;
          if (typeof h == "function") {
            cC(), T = h.call(s, i, u);
            {
              if (e.mode & Hn) {
                ar(!0);
                try {
                  h.call(s, i, u);
                } finally {
                  ar(!1);
                }
              }
              fC();
            }
          } else
            T = h;
          return T == null ? i : Mt({}, i, T);
        }
        case um:
          return om = !0, i;
      }
      return i;
    }
    function fm(e, t, a, i) {
      var u = e.updateQueue;
      om = !1, sm = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, v = u.shared.pending;
      if (v !== null) {
        u.shared.pending = null;
        var h = v, T = h.next;
        h.next = null, f === null ? s = T : f.next = T, f = h;
        var b = e.alternate;
        if (b !== null) {
          var A = b.updateQueue, M = A.lastBaseUpdate;
          M !== f && (M === null ? A.firstBaseUpdate = T : M.next = T, A.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var P = u.baseState, B = J, X = null, Ve = null, ot = null, nt = s;
        do {
          var Yt = nt.lane, Ut = nt.eventTime;
          if (Mu(i, Yt)) {
            if (ot !== null) {
              var K = {
                eventTime: Ut,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $t,
                tag: nt.tag,
                payload: nt.payload,
                callback: nt.callback,
                next: null
              };
              ot = ot.next = K;
            }
            P = sx(e, u, nt, P, t, a);
            var j = nt.callback;
            if (j !== null && // If the update was already committed, we should not queue its
            // callback again.
            nt.lane !== $t) {
              e.flags |= _i;
              var fe = u.effects;
              fe === null ? u.effects = [nt] : fe.push(nt);
            }
          } else {
            var F = {
              eventTime: Ut,
              lane: Yt,
              tag: nt.tag,
              payload: nt.payload,
              callback: nt.callback,
              next: null
            };
            ot === null ? (Ve = ot = F, X = P) : ot = ot.next = F, B = _t(B, Yt);
          }
          if (nt = nt.next, nt === null) {
            if (v = u.shared.pending, v === null)
              break;
            var Pe = v, Ae = Pe.next;
            Pe.next = null, nt = Ae, u.lastBaseUpdate = Pe, u.shared.pending = null;
          }
        } while (!0);
        ot === null && (X = P), u.baseState = X, u.firstBaseUpdate = Ve, u.lastBaseUpdate = ot;
        var yt = u.shared.interleaved;
        if (yt !== null) {
          var Rt = yt;
          do
            B = _t(B, Rt.lane), Rt = Rt.next;
          while (Rt !== yt);
        } else
          s === null && (u.shared.lanes = J);
        ov(B), e.lanes = B, e.memoizedState = P;
      }
      sm = null;
    }
    function cx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function yC() {
      om = !1;
    }
    function dm() {
      return om;
    }
    function gC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, cx(f, a));
        }
    }
    var Pg = {}, SC = new p.Component().refs, Hg, Bg, $g, Ig, Yg, EC, pm, Wg, Qg, qg;
    {
      Hg = /* @__PURE__ */ new Set(), Bg = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), Ig = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set(), Qg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set();
      var CC = /* @__PURE__ */ new Set();
      pm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          CC.has(a) || (CC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, EC = function(e, t) {
        if (t === void 0) {
          var a = Gt(e) || "Component";
          Yg.has(a) || (Yg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Pg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Pg);
    }
    function Gg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Hn) {
          ar(!0);
          try {
            s = a(i, u);
          } finally {
            ar(!1);
          }
        }
        EC(t, s);
      }
      var f = s == null ? u : Mt({}, u, s);
      if (e.memoizedState = f, e.lanes === J) {
        var v = e.updateQueue;
        v.baseState = f;
      }
    }
    var Xg = {
      isMounted: xa,
      enqueueSetState: function(e, t, a) {
        var i = Ha(e), u = Ma(), s = ls(i), f = qu(u, s);
        f.payload = t, a != null && (pm(a, "setState"), f.callback = a);
        var v = Zo(i, f, s);
        v !== null && (Or(v, i, s, u), cm(v, i, s)), Il(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ha(e), u = Ma(), s = ls(i), f = qu(u, s);
        f.tag = hC, f.payload = t, a != null && (pm(a, "replaceState"), f.callback = a);
        var v = Zo(i, f, s);
        v !== null && (Or(v, i, s, u), cm(v, i, s)), Il(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ha(e), i = Ma(), u = ls(a), s = qu(i, u);
        s.tag = um, t != null && (pm(t, "forceUpdate"), s.callback = t);
        var f = Zo(a, s, u);
        f !== null && (Or(f, a, u, i), cm(f, a, u)), Bd(a, u);
      }
    };
    function TC(e, t, a, i, u, s, f) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var h = v.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Hn) {
            ar(!0);
            try {
              h = v.shouldComponentUpdate(i, s, f);
            } finally {
              ar(!1);
            }
          }
          h === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Gt(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !it(a, i) || !it(u, s) : !0;
    }
    function fx(e, t, a) {
      var i = e.stateNode;
      {
        var u = Gt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Qg.has(t) && (Qg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !$g.has(t) && ($g.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Gt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var v = i.state;
        v && (typeof v != "object" || jt(v)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function RC(e, t) {
      t.updater = Xg, e.stateNode = t, To(t, e), t._reactInternalInstance = Pg;
    }
    function bC(e, t, a) {
      var i = !1, u = mi, s = mi, f = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === be && f._context === void 0
        );
        if (!v && !qg.has(t)) {
          qg.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === ie ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Gt(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = gr(f);
      else {
        u = Mf(e, t, !0);
        var T = t.contextTypes;
        i = T != null, s = i ? Nf(e, u) : mi;
      }
      var b = new t(a, s);
      if (e.mode & Hn) {
        ar(!0);
        try {
          b = new t(a, s);
        } finally {
          ar(!1);
        }
      }
      var A = e.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      RC(e, b);
      {
        if (typeof t.getDerivedStateFromProps == "function" && A === null) {
          var M = Gt(t) || "Component";
          Bg.has(M) || (Bg.add(M), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, b.state === null ? "null" : "undefined", M));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var P = null, B = null, X = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? P = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && (P = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? B = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && (B = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), P !== null || B !== null || X !== null) {
            var Ve = Gt(t) || "Component", ot = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Ig.has(Ve) || (Ig.add(Ve), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ve, ot, P !== null ? `
  ` + P : "", B !== null ? `
  ` + B : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && q0(e, u, s), b;
    }
    function dx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ct(e) || "Component"), Xg.enqueueReplaceState(t, t.state, null));
    }
    function wC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ct(e) || "Component";
          Hg.has(s) || (Hg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Xg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Kg(e, t, a, i) {
      fx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = SC, jg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = gr(s);
      else {
        var f = Mf(e, t, !0);
        u.context = Nf(e, f);
      }
      {
        if (u.state === a) {
          var v = Gt(t) || "Component";
          Wg.has(v) || (Wg.add(v), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & Hn && sl.recordLegacyContextWarning(e, u), sl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (Gg(e, t, h, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (dx(e, u), fm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var T = xt;
        T |= sa, (e.mode & Wa) !== ft && (T |= ca), e.flags |= T;
      }
    }
    function px(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, v = t.contextType, h = mi;
      if (typeof v == "object" && v !== null)
        h = gr(v);
      else {
        var T = Mf(e, t, !0);
        h = Nf(e, T);
      }
      var b = t.getDerivedStateFromProps, A = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !A && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== h) && wC(e, u, a, h), yC();
      var M = e.memoizedState, P = u.state = M;
      if (fm(e, a, u, i), P = e.memoizedState, s === a && M === P && !qh() && !dm()) {
        if (typeof u.componentDidMount == "function") {
          var B = xt;
          B |= sa, (e.mode & Wa) !== ft && (B |= ca), e.flags |= B;
        }
        return !1;
      }
      typeof b == "function" && (Gg(e, t, b, a), P = e.memoizedState);
      var X = dm() || TC(e, t, s, a, M, P, h);
      if (X) {
        if (!A && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Ve = xt;
          Ve |= sa, (e.mode & Wa) !== ft && (Ve |= ca), e.flags |= Ve;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ot = xt;
          ot |= sa, (e.mode & Wa) !== ft && (ot |= ca), e.flags |= ot;
        }
        e.memoizedProps = a, e.memoizedState = P;
      }
      return u.props = a, u.state = P, u.context = h, X;
    }
    function vx(e, t, a, i, u) {
      var s = t.stateNode;
      mC(e, t);
      var f = t.memoizedProps, v = t.type === t.elementType ? f : cl(t.type, f);
      s.props = v;
      var h = t.pendingProps, T = s.context, b = a.contextType, A = mi;
      if (typeof b == "object" && b !== null)
        A = gr(b);
      else {
        var M = Mf(t, a, !0);
        A = Nf(t, M);
      }
      var P = a.getDerivedStateFromProps, B = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !B && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || T !== A) && wC(t, s, i, A), yC();
      var X = t.memoizedState, Ve = s.state = X;
      if (fm(t, i, s, u), Ve = t.memoizedState, f === h && X === Ve && !qh() && !dm() && !He)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Ba), !1;
      typeof P == "function" && (Gg(t, a, P, i), Ve = t.memoizedState);
      var ot = dm() || TC(t, a, v, i, X, Ve, A) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      He;
      return ot ? (!B && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ve, A), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ve, A)), typeof s.componentDidUpdate == "function" && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ba)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Ba), t.memoizedProps = i, t.memoizedState = Ve), s.props = i, s.state = Ve, s.context = A, ot;
    }
    var Zg, Jg, eS, tS, nS, xC = function(e, t) {
    };
    Zg = !1, Jg = !1, eS = {}, tS = {}, nS = {}, xC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ct(t) || "Component";
        tS[a] || (tS[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Fp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Hn || de) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ct(e) || "Component";
          eS[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), eS[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var v = s;
            if (v.tag !== G)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = v.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var h = f;
          ye(i, "ref");
          var T = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var b = function(A) {
            var M = h.refs;
            M === SC && (M = h.refs = {}), A === null ? delete M[T] : M[T] = A;
          };
          return b._stringRef = T, b;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function vm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function hm(e) {
      {
        var t = Ct(e) || "Component";
        if (nS[t])
          return;
        nS[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function _C(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function kC(e) {
      function t(F, K) {
        if (e) {
          var j = F.deletions;
          j === null ? (F.deletions = [K], F.flags |= rn) : j.push(K);
        }
      }
      function a(F, K) {
        if (!e)
          return null;
        for (var j = K; j !== null; )
          t(F, j), j = j.sibling;
        return null;
      }
      function i(F, K) {
        for (var j = /* @__PURE__ */ new Map(), fe = K; fe !== null; )
          fe.key !== null ? j.set(fe.key, fe) : j.set(fe.index, fe), fe = fe.sibling;
        return j;
      }
      function u(F, K) {
        var j = pc(F, K);
        return j.index = 0, j.sibling = null, j;
      }
      function s(F, K, j) {
        if (F.index = j, !e)
          return F.flags |= Od, K;
        var fe = F.alternate;
        if (fe !== null) {
          var Pe = fe.index;
          return Pe < K ? (F.flags |= _n, K) : Pe;
        } else
          return F.flags |= _n, K;
      }
      function f(F) {
        return e && F.alternate === null && (F.flags |= _n), F;
      }
      function v(F, K, j, fe) {
        if (K === null || K.tag !== Oe) {
          var Pe = DE(j, F.mode, fe);
          return Pe.return = F, Pe;
        } else {
          var Ae = u(K, j);
          return Ae.return = F, Ae;
        }
      }
      function h(F, K, j, fe) {
        var Pe = j.type;
        if (Pe === Ra)
          return b(F, K, j.props.children, fe, j.key);
        if (K !== null && (K.elementType === Pe || // Keep this check inline so it only runs on the false path:
        gR(K, j) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Pe == "object" && Pe !== null && Pe.$$typeof === ut && _C(Pe) === K.type)) {
          var Ae = u(K, j.props);
          return Ae.ref = Fp(F, K, j), Ae.return = F, Ae._debugSource = j._source, Ae._debugOwner = j._owner, Ae;
        }
        var yt = kE(j, F.mode, fe);
        return yt.ref = Fp(F, K, j), yt.return = F, yt;
      }
      function T(F, K, j, fe) {
        if (K === null || K.tag !== ee || K.stateNode.containerInfo !== j.containerInfo || K.stateNode.implementation !== j.implementation) {
          var Pe = OE(j, F.mode, fe);
          return Pe.return = F, Pe;
        } else {
          var Ae = u(K, j.children || []);
          return Ae.return = F, Ae;
        }
      }
      function b(F, K, j, fe, Pe) {
        if (K === null || K.tag !== Ke) {
          var Ae = os(j, F.mode, fe, Pe);
          return Ae.return = F, Ae;
        } else {
          var yt = u(K, j);
          return yt.return = F, yt;
        }
      }
      function A(F, K, j) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var fe = DE("" + K, F.mode, j);
          return fe.return = F, fe;
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Ei: {
              var Pe = kE(K, F.mode, j);
              return Pe.ref = Fp(F, null, K), Pe.return = F, Pe;
            }
            case $r: {
              var Ae = OE(K, F.mode, j);
              return Ae.return = F, Ae;
            }
            case ut: {
              var yt = K._payload, Rt = K._init;
              return A(F, Rt(yt), j);
            }
          }
          if (jt(K) || ui(K)) {
            var hn = os(K, F.mode, j, null);
            return hn.return = F, hn;
          }
          vm(F, K);
        }
        return typeof K == "function" && hm(F), null;
      }
      function M(F, K, j, fe) {
        var Pe = K !== null ? K.key : null;
        if (typeof j == "string" && j !== "" || typeof j == "number")
          return Pe !== null ? null : v(F, K, "" + j, fe);
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case Ei:
              return j.key === Pe ? h(F, K, j, fe) : null;
            case $r:
              return j.key === Pe ? T(F, K, j, fe) : null;
            case ut: {
              var Ae = j._payload, yt = j._init;
              return M(F, K, yt(Ae), fe);
            }
          }
          if (jt(j) || ui(j))
            return Pe !== null ? null : b(F, K, j, fe, null);
          vm(F, j);
        }
        return typeof j == "function" && hm(F), null;
      }
      function P(F, K, j, fe, Pe) {
        if (typeof fe == "string" && fe !== "" || typeof fe == "number") {
          var Ae = F.get(j) || null;
          return v(K, Ae, "" + fe, Pe);
        }
        if (typeof fe == "object" && fe !== null) {
          switch (fe.$$typeof) {
            case Ei: {
              var yt = F.get(fe.key === null ? j : fe.key) || null;
              return h(K, yt, fe, Pe);
            }
            case $r: {
              var Rt = F.get(fe.key === null ? j : fe.key) || null;
              return T(K, Rt, fe, Pe);
            }
            case ut:
              var hn = fe._payload, en = fe._init;
              return P(F, K, j, en(hn), Pe);
          }
          if (jt(fe) || ui(fe)) {
            var sr = F.get(j) || null;
            return b(K, sr, fe, Pe, null);
          }
          vm(K, fe);
        }
        return typeof fe == "function" && hm(K), null;
      }
      function B(F, K, j) {
        {
          if (typeof F != "object" || F === null)
            return K;
          switch (F.$$typeof) {
            case Ei:
            case $r:
              xC(F, j);
              var fe = F.key;
              if (typeof fe != "string")
                break;
              if (K === null) {
                K = /* @__PURE__ */ new Set(), K.add(fe);
                break;
              }
              if (!K.has(fe)) {
                K.add(fe);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", fe);
              break;
            case ut:
              var Pe = F._payload, Ae = F._init;
              B(Ae(Pe), K, j);
              break;
          }
        }
        return K;
      }
      function X(F, K, j, fe) {
        for (var Pe = null, Ae = 0; Ae < j.length; Ae++) {
          var yt = j[Ae];
          Pe = B(yt, Pe, F);
        }
        for (var Rt = null, hn = null, en = K, sr = 0, tn = 0, nr = null; en !== null && tn < j.length; tn++) {
          en.index > tn ? (nr = en, en = null) : nr = en.sibling;
          var Sa = M(F, en, j[tn], fe);
          if (Sa === null) {
            en === null && (en = nr);
            break;
          }
          e && en && Sa.alternate === null && t(F, en), sr = s(Sa, sr, tn), hn === null ? Rt = Sa : hn.sibling = Sa, hn = Sa, en = nr;
        }
        if (tn === j.length) {
          if (a(F, en), Gr()) {
            var na = tn;
            ec(F, na);
          }
          return Rt;
        }
        if (en === null) {
          for (; tn < j.length; tn++) {
            var gi = A(F, j[tn], fe);
            gi !== null && (sr = s(gi, sr, tn), hn === null ? Rt = gi : hn.sibling = gi, hn = gi);
          }
          if (Gr()) {
            var Na = tn;
            ec(F, Na);
          }
          return Rt;
        }
        for (var Aa = i(F, en); tn < j.length; tn++) {
          var Ea = P(Aa, F, tn, j[tn], fe);
          Ea !== null && (e && Ea.alternate !== null && Aa.delete(Ea.key === null ? tn : Ea.key), sr = s(Ea, sr, tn), hn === null ? Rt = Ea : hn.sibling = Ea, hn = Ea);
        }
        if (e && Aa.forEach(function(td) {
          return t(F, td);
        }), Gr()) {
          var eo = tn;
          ec(F, eo);
        }
        return Rt;
      }
      function Ve(F, K, j, fe) {
        var Pe = ui(j);
        if (typeof Pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          j[Symbol.toStringTag] === "Generator" && (Jg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Jg = !0), j.entries === Pe && (Zg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zg = !0);
          var Ae = Pe.call(j);
          if (Ae)
            for (var yt = null, Rt = Ae.next(); !Rt.done; Rt = Ae.next()) {
              var hn = Rt.value;
              yt = B(hn, yt, F);
            }
        }
        var en = Pe.call(j);
        if (en == null)
          throw new Error("An iterable object provided no iterator.");
        for (var sr = null, tn = null, nr = K, Sa = 0, na = 0, gi = null, Na = en.next(); nr !== null && !Na.done; na++, Na = en.next()) {
          nr.index > na ? (gi = nr, nr = null) : gi = nr.sibling;
          var Aa = M(F, nr, Na.value, fe);
          if (Aa === null) {
            nr === null && (nr = gi);
            break;
          }
          e && nr && Aa.alternate === null && t(F, nr), Sa = s(Aa, Sa, na), tn === null ? sr = Aa : tn.sibling = Aa, tn = Aa, nr = gi;
        }
        if (Na.done) {
          if (a(F, nr), Gr()) {
            var Ea = na;
            ec(F, Ea);
          }
          return sr;
        }
        if (nr === null) {
          for (; !Na.done; na++, Na = en.next()) {
            var eo = A(F, Na.value, fe);
            eo !== null && (Sa = s(eo, Sa, na), tn === null ? sr = eo : tn.sibling = eo, tn = eo);
          }
          if (Gr()) {
            var td = na;
            ec(F, td);
          }
          return sr;
        }
        for (var pv = i(F, nr); !Na.done; na++, Na = en.next()) {
          var ou = P(pv, F, na, Na.value, fe);
          ou !== null && (e && ou.alternate !== null && pv.delete(ou.key === null ? na : ou.key), Sa = s(ou, Sa, na), tn === null ? sr = ou : tn.sibling = ou, tn = ou);
        }
        if (e && pv.forEach(function(kD) {
          return t(F, kD);
        }), Gr()) {
          var _D = na;
          ec(F, _D);
        }
        return sr;
      }
      function ot(F, K, j, fe) {
        if (K !== null && K.tag === Oe) {
          a(F, K.sibling);
          var Pe = u(K, j);
          return Pe.return = F, Pe;
        }
        a(F, K);
        var Ae = DE(j, F.mode, fe);
        return Ae.return = F, Ae;
      }
      function nt(F, K, j, fe) {
        for (var Pe = j.key, Ae = K; Ae !== null; ) {
          if (Ae.key === Pe) {
            var yt = j.type;
            if (yt === Ra) {
              if (Ae.tag === Ke) {
                a(F, Ae.sibling);
                var Rt = u(Ae, j.props.children);
                return Rt.return = F, Rt._debugSource = j._source, Rt._debugOwner = j._owner, Rt;
              }
            } else if (Ae.elementType === yt || // Keep this check inline so it only runs on the false path:
            gR(Ae, j) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof yt == "object" && yt !== null && yt.$$typeof === ut && _C(yt) === Ae.type) {
              a(F, Ae.sibling);
              var hn = u(Ae, j.props);
              return hn.ref = Fp(F, Ae, j), hn.return = F, hn._debugSource = j._source, hn._debugOwner = j._owner, hn;
            }
            a(F, Ae);
            break;
          } else
            t(F, Ae);
          Ae = Ae.sibling;
        }
        if (j.type === Ra) {
          var en = os(j.props.children, F.mode, fe, j.key);
          return en.return = F, en;
        } else {
          var sr = kE(j, F.mode, fe);
          return sr.ref = Fp(F, K, j), sr.return = F, sr;
        }
      }
      function Yt(F, K, j, fe) {
        for (var Pe = j.key, Ae = K; Ae !== null; ) {
          if (Ae.key === Pe)
            if (Ae.tag === ee && Ae.stateNode.containerInfo === j.containerInfo && Ae.stateNode.implementation === j.implementation) {
              a(F, Ae.sibling);
              var yt = u(Ae, j.children || []);
              return yt.return = F, yt;
            } else {
              a(F, Ae);
              break;
            }
          else
            t(F, Ae);
          Ae = Ae.sibling;
        }
        var Rt = OE(j, F.mode, fe);
        return Rt.return = F, Rt;
      }
      function Ut(F, K, j, fe) {
        var Pe = typeof j == "object" && j !== null && j.type === Ra && j.key === null;
        if (Pe && (j = j.props.children), typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case Ei:
              return f(nt(F, K, j, fe));
            case $r:
              return f(Yt(F, K, j, fe));
            case ut:
              var Ae = j._payload, yt = j._init;
              return Ut(F, K, yt(Ae), fe);
          }
          if (jt(j))
            return X(F, K, j, fe);
          if (ui(j))
            return Ve(F, K, j, fe);
          vm(F, j);
        }
        return typeof j == "string" && j !== "" || typeof j == "number" ? f(ot(F, K, "" + j, fe)) : (typeof j == "function" && hm(F), a(F, K));
      }
      return Ut;
    }
    var Vf = kC(!0), DC = kC(!1);
    function hx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = pc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = pc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function mx(e, t) {
      for (var a = e.child; a !== null; )
        Yk(a, t), a = a.sibling;
    }
    var jp = {}, Jo = qo(jp), Vp = qo(jp), mm = qo(jp);
    function ym(e) {
      if (e === jp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function OC() {
      var e = ym(mm.current);
      return e;
    }
    function rS(e, t) {
      ya(mm, t, e), ya(Vp, e, e), ya(Jo, jp, e);
      var a = Ob(t);
      ma(Jo, e), ya(Jo, a, e);
    }
    function Pf(e) {
      ma(Jo, e), ma(Vp, e), ma(mm, e);
    }
    function aS() {
      var e = ym(Jo.current);
      return e;
    }
    function LC(e) {
      ym(mm.current);
      var t = ym(Jo.current), a = Lb(t, e.type);
      t !== a && (ya(Vp, e, e), ya(Jo, a, e));
    }
    function iS(e) {
      Vp.current === e && (ma(Jo, e), ma(Vp, e));
    }
    var yx = 0, MC = 1, NC = 1, Pp = 2, fl = qo(yx);
    function lS(e, t) {
      return (e & t) !== 0;
    }
    function Hf(e) {
      return e & MC;
    }
    function uS(e, t) {
      return e & MC | t;
    }
    function gx(e, t) {
      return e | t;
    }
    function es(e, t) {
      ya(fl, t, e);
    }
    function Bf(e) {
      ma(fl, e);
    }
    function Sx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function gm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === W) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || $0(i) || pg(i))
              return t;
          }
        } else if (t.tag === Et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & gt) !== lt;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ei = (
      /*   */
      0
    ), Rr = (
      /* */
      1
    ), tu = (
      /*  */
      2
    ), br = (
      /*    */
      4
    ), Xr = (
      /*   */
      8
    ), oS = [];
    function sS() {
      for (var e = 0; e < oS.length; e++) {
        var t = oS[e];
        t._workInProgressVersionPrimary = null;
      }
      oS.length = 0;
    }
    function Ex(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Fe = m.ReactCurrentDispatcher, Hp = m.ReactCurrentBatchConfig, cS, $f;
    cS = /* @__PURE__ */ new Set();
    var lc = J, vn = null, wr = null, xr = null, Sm = !1, Bp = !1, $p = 0, Cx = 0, Tx = 25, te = null, Ui = null, ts = -1, fS = !1;
    function cn() {
      {
        var e = te;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function _e() {
      {
        var e = te;
        Ui !== null && (ts++, Ui[ts] !== e && Rx(e));
      }
    }
    function If(e) {
      e != null && !jt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", te, typeof e);
    }
    function Rx(e) {
      {
        var t = Ct(vn);
        if (!cS.has(t) && (cS.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= ts; u++) {
            for (var s = Ui[u], f = u === ts ? e : s, v = u + 1 + ". " + s; v.length < i; )
              v += " ";
            v += f + `
`, a += v;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ga() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function dS(e, t) {
      if (fS)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", te), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, te, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Qe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Yf(e, t, a, i, u, s) {
      lc = s, vn = t, Ui = e !== null ? e._debugHookTypes : null, ts = -1, fS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = J, e !== null && e.memoizedState !== null ? Fe.current = tT : Ui !== null ? Fe.current = eT : Fe.current = JC;
      var f = a(i, u);
      if (Bp) {
        var v = 0;
        do {
          if (Bp = !1, $p = 0, v >= Tx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, fS = !1, wr = null, xr = null, t.updateQueue = null, ts = -1, Fe.current = nT, f = a(i, u);
        } while (Bp);
      }
      Fe.current = Mm, t._debugHookTypes = Ui;
      var h = wr !== null && wr.next !== null;
      if (lc = J, vn = null, wr = null, xr = null, te = null, Ui = null, ts = -1, e !== null && (e.flags & Er) !== (t.flags & Er) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & At) !== ft && S("Internal React error: Expected static flag was missing. Please notify the React team."), Sm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Wf() {
      var e = $p !== 0;
      return $p = 0, e;
    }
    function AC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Wa) !== ft ? t.flags &= ~(Tu | ca | An | xt) : t.flags &= ~(An | xt), e.lanes = Lo(e.lanes, a);
    }
    function zC() {
      if (Fe.current = Mm, Sm) {
        for (var e = vn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Sm = !1;
      }
      lc = J, vn = null, wr = null, xr = null, Ui = null, ts = -1, te = null, qC = !1, Bp = !1, $p = 0;
    }
    function nu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return xr === null ? vn.memoizedState = xr = e : xr = xr.next = e, xr;
    }
    function Fi() {
      var e;
      if (wr === null) {
        var t = vn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = wr.next;
      var a;
      if (xr === null ? a = vn.memoizedState : a = xr.next, a !== null)
        xr = a, a = xr.next, wr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        wr = e;
        var i = {
          memoizedState: wr.memoizedState,
          baseState: wr.baseState,
          baseQueue: wr.baseQueue,
          queue: wr.queue,
          next: null
        };
        xr === null ? vn.memoizedState = xr = i : xr = xr.next = i;
      }
      return xr;
    }
    function UC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function pS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function vS(e, t, a) {
      var i = nu(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = _x.bind(null, vn, s);
      return [i.memoizedState, f];
    }
    function hS(e, t, a) {
      var i = Fi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = wr, f = s.baseQueue, v = u.pending;
      if (v !== null) {
        if (f !== null) {
          var h = f.next, T = v.next;
          f.next = T, v.next = h;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = v, u.pending = null;
      }
      if (f !== null) {
        var b = f.next, A = s.baseState, M = null, P = null, B = null, X = b;
        do {
          var Ve = X.lane;
          if (Mu(lc, Ve)) {
            if (B !== null) {
              var nt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: $t,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              B = B.next = nt;
            }
            if (X.hasEagerState)
              A = X.eagerState;
            else {
              var Yt = X.action;
              A = e(A, Yt);
            }
          } else {
            var ot = {
              lane: Ve,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            B === null ? (P = B = ot, M = A) : B = B.next = ot, vn.lanes = _t(vn.lanes, Ve), ov(Ve);
          }
          X = X.next;
        } while (X !== null && X !== b);
        B === null ? M = A : B.next = P, Qe(A, i.memoizedState) || Xp(), i.memoizedState = A, i.baseState = M, i.baseQueue = B, u.lastRenderedState = A;
      }
      var Ut = u.interleaved;
      if (Ut !== null) {
        var F = Ut;
        do {
          var K = F.lane;
          vn.lanes = _t(vn.lanes, K), ov(K), F = F.next;
        } while (F !== Ut);
      } else
        f === null && (u.lanes = J);
      var j = u.dispatch;
      return [i.memoizedState, j];
    }
    function mS(e, t, a) {
      var i = Fi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, v = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var h = f.next, T = h;
        do {
          var b = T.action;
          v = e(v, b), T = T.next;
        } while (T !== h);
        Qe(v, i.memoizedState) || Xp(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), u.lastRenderedState = v;
      }
      return [v, s];
    }
    function kO(e, t, a) {
    }
    function DO(e, t, a) {
    }
    function yS(e, t, a) {
      var i = vn, u = nu(), s, f = Gr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), $f || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), $f = !0);
      } else {
        if (s = t(), !$f) {
          var v = t();
          Qe(s, v) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
        }
        var h = Xm();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fs(h, lc) || FC(i, t, s);
      }
      u.memoizedState = s;
      var T = {
        value: s,
        getSnapshot: t
      };
      return u.queue = T, bm(VC.bind(null, i, T, e), [e]), i.flags |= An, Ip(Rr | Xr, jC.bind(null, i, T, s, t), void 0, null), s;
    }
    function Em(e, t, a) {
      var i = vn, u = Fi(), s = t();
      if (!$f) {
        var f = t();
        Qe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), $f = !0);
      }
      var v = u.memoizedState, h = !Qe(v, s);
      h && (u.memoizedState = s, Xp());
      var T = u.queue;
      if (Wp(VC.bind(null, i, T, e), [e]), T.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      xr !== null && xr.memoizedState.tag & Rr) {
        i.flags |= An, Ip(Rr | Xr, jC.bind(null, i, T, s, t), void 0, null);
        var b = Xm();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fs(b, lc) || FC(i, t, s);
      }
      return s;
    }
    function FC(e, t, a) {
      e.flags |= ks;
      var i = {
        getSnapshot: t,
        value: a
      }, u = vn.updateQueue;
      if (u === null)
        u = UC(), vn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function jC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, PC(t) && HC(e);
    }
    function VC(e, t, a) {
      var i = function() {
        PC(t) && HC(e);
      };
      return a(i);
    }
    function PC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Qe(a, i);
      } catch {
        return !0;
      }
    }
    function HC(e) {
      var t = Ja(e, vt);
      t !== null && Or(t, e, vt, Tn);
    }
    function Cm(e) {
      var t = nu();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: J,
        dispatch: null,
        lastRenderedReducer: pS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = kx.bind(null, vn, a);
      return [t.memoizedState, i];
    }
    function gS(e) {
      return hS(pS);
    }
    function SS(e) {
      return mS(pS);
    }
    function Ip(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = vn.updateQueue;
      if (s === null)
        s = UC(), vn.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var v = f.next;
          f.next = u, u.next = v, s.lastEffect = u;
        }
      }
      return u;
    }
    function ES(e) {
      var t = nu();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Tm(e) {
      var t = Fi();
      return t.memoizedState;
    }
    function Yp(e, t, a, i) {
      var u = nu(), s = i === void 0 ? null : i;
      vn.flags |= e, u.memoizedState = Ip(Rr | t, a, void 0, s);
    }
    function Rm(e, t, a, i) {
      var u = Fi(), s = i === void 0 ? null : i, f = void 0;
      if (wr !== null) {
        var v = wr.memoizedState;
        if (f = v.destroy, s !== null) {
          var h = v.deps;
          if (dS(s, h)) {
            u.memoizedState = Ip(t, a, f, s);
            return;
          }
        }
      }
      vn.flags |= e, u.memoizedState = Ip(Rr | t, a, f, s);
    }
    function bm(e, t) {
      return (vn.mode & Wa) !== ft ? Yp(Tu | An | jl, Xr, e, t) : Yp(An | jl, Xr, e, t);
    }
    function Wp(e, t) {
      return Rm(An, Xr, e, t);
    }
    function CS(e, t) {
      return Yp(xt, tu, e, t);
    }
    function wm(e, t) {
      return Rm(xt, tu, e, t);
    }
    function TS(e, t) {
      var a = xt;
      return a |= sa, (vn.mode & Wa) !== ft && (a |= ca), Yp(a, br, e, t);
    }
    function xm(e, t) {
      return Rm(xt, br, e, t);
    }
    function BC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function RS(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = xt;
      return u |= sa, (vn.mode & Wa) !== ft && (u |= ca), Yp(u, br, BC.bind(null, t, e), i);
    }
    function _m(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Rm(xt, br, BC.bind(null, t, e), i);
    }
    function bx(e, t) {
    }
    var km = bx;
    function bS(e, t) {
      var a = nu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Dm(e, t) {
      var a = Fi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (dS(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function wS(e, t) {
      var a = nu(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Om(e, t) {
      var a = Fi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (dS(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function xS(e) {
      var t = nu();
      return t.memoizedState = e, e;
    }
    function $C(e) {
      var t = Fi(), a = wr, i = a.memoizedState;
      return YC(t, i, e);
    }
    function IC(e) {
      var t = Fi();
      if (wr === null)
        return t.memoizedState = e, e;
      var a = wr.memoizedState;
      return YC(t, a, e);
    }
    function YC(e, t, a) {
      var i = !My(lc);
      if (i) {
        if (!Qe(a, t)) {
          var u = Qd();
          vn.lanes = _t(vn.lanes, u), ov(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Xp()), e.memoizedState = a, a;
    }
    function wx(e, t, a) {
      var i = qa();
      lr(Fr(i, Tr)), e(!0);
      var u = Hp.transition;
      Hp.transition = {};
      var s = Hp.transition;
      Hp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (lr(i), Hp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && x("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function _S() {
      var e = Cm(!1), t = e[0], a = e[1], i = wx.bind(null, a), u = nu();
      return u.memoizedState = i, [t, i];
    }
    function WC() {
      var e = gS(), t = e[0], a = Fi(), i = a.memoizedState;
      return [t, i];
    }
    function QC() {
      var e = SS(), t = e[0], a = Fi(), i = a.memoizedState;
      return [t, i];
    }
    var qC = !1;
    function xx() {
      return qC;
    }
    function kS() {
      var e = nu(), t = Xm(), a = t.identifierPrefix, i;
      if (Gr()) {
        var u = Pw();
        i = ":" + a + "R" + u;
        var s = $p++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Cx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Lm() {
      var e = Fi(), t = e.memoizedState;
      return t;
    }
    function _x(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ls(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        XC(t, u);
      else {
        var s = pC(e, t, u, i);
        if (s !== null) {
          var f = Ma();
          Or(s, e, i, f), KC(s, t, i);
        }
      }
      ZC(e, i);
    }
    function kx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ls(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GC(e))
        XC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === J && (s === null || s.lanes === J)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var v;
            v = Fe.current, Fe.current = dl;
            try {
              var h = t.lastRenderedState, T = f(h, a);
              if (u.hasEagerState = !0, u.eagerState = T, Qe(T, h)) {
                lx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Fe.current = v;
            }
          }
        }
        var b = pC(e, t, u, i);
        if (b !== null) {
          var A = Ma();
          Or(b, e, i, A), KC(b, t, i);
        }
      }
      ZC(e, i);
    }
    function GC(e) {
      var t = e.alternate;
      return e === vn || t !== null && t === vn;
    }
    function XC(e, t) {
      Bp = Sm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function KC(e, t, a) {
      if (Wd(a)) {
        var i = t.lanes;
        i = qd(i, e.pendingLanes);
        var u = _t(i, a);
        t.lanes = u, Mo(e, u);
      }
    }
    function ZC(e, t, a) {
      Il(e, t);
    }
    var Mm = {
      readContext: gr,
      useCallback: ga,
      useContext: ga,
      useEffect: ga,
      useImperativeHandle: ga,
      useInsertionEffect: ga,
      useLayoutEffect: ga,
      useMemo: ga,
      useReducer: ga,
      useRef: ga,
      useState: ga,
      useDebugValue: ga,
      useDeferredValue: ga,
      useTransition: ga,
      useMutableSource: ga,
      useSyncExternalStore: ga,
      useId: ga,
      unstable_isNewReconciler: oe
    }, JC = null, eT = null, tT = null, nT = null, ru = null, dl = null, Nm = null;
    {
      var DS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Tt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      JC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", cn(), If(t), bS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", cn(), gr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", cn(), If(t), bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", cn(), If(a), RS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", cn(), If(t), CS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", cn(), If(t), TS(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", cn(), If(t);
          var a = Fe.current;
          Fe.current = ru;
          try {
            return wS(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", cn();
          var i = Fe.current;
          Fe.current = ru;
          try {
            return vS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", cn(), ES(e);
        },
        useState: function(e) {
          te = "useState", cn();
          var t = Fe.current;
          Fe.current = ru;
          try {
            return Cm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", cn(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", cn(), xS(e);
        },
        useTransition: function() {
          return te = "useTransition", cn(), _S();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", cn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", cn(), yS(e, t, a);
        },
        useId: function() {
          return te = "useId", cn(), kS();
        },
        unstable_isNewReconciler: oe
      }, eT = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", _e(), bS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", _e(), gr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", _e(), bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", _e(), RS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", _e(), CS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", _e(), TS(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", _e();
          var a = Fe.current;
          Fe.current = ru;
          try {
            return wS(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", _e();
          var i = Fe.current;
          Fe.current = ru;
          try {
            return vS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", _e(), ES(e);
        },
        useState: function(e) {
          te = "useState", _e();
          var t = Fe.current;
          Fe.current = ru;
          try {
            return Cm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", _e(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", _e(), xS(e);
        },
        useTransition: function() {
          return te = "useTransition", _e(), _S();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", _e(), yS(e, t, a);
        },
        useId: function() {
          return te = "useId", _e(), kS();
        },
        unstable_isNewReconciler: oe
      }, tT = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", _e(), Dm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", _e(), gr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", _e(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", _e(), _m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", _e(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", _e(), xm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", _e();
          var a = Fe.current;
          Fe.current = dl;
          try {
            return Om(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", _e();
          var i = Fe.current;
          Fe.current = dl;
          try {
            return hS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", _e(), Tm();
        },
        useState: function(e) {
          te = "useState", _e();
          var t = Fe.current;
          Fe.current = dl;
          try {
            return gS(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", _e(), km();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", _e(), $C(e);
        },
        useTransition: function() {
          return te = "useTransition", _e(), WC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", _e(), Em(e, t);
        },
        useId: function() {
          return te = "useId", _e(), Lm();
        },
        unstable_isNewReconciler: oe
      }, nT = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", _e(), Dm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", _e(), gr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", _e(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", _e(), _m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", _e(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", _e(), xm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", _e();
          var a = Fe.current;
          Fe.current = Nm;
          try {
            return Om(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", _e();
          var i = Fe.current;
          Fe.current = Nm;
          try {
            return mS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", _e(), Tm();
        },
        useState: function(e) {
          te = "useState", _e();
          var t = Fe.current;
          Fe.current = Nm;
          try {
            return SS(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", _e(), km();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", _e(), IC(e);
        },
        useTransition: function() {
          return te = "useTransition", _e(), QC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", _e(), Em(e, t);
        },
        useId: function() {
          return te = "useId", _e(), Lm();
        },
        unstable_isNewReconciler: oe
      }, ru = {
        readContext: function(e) {
          return DS(), gr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Tt(), cn(), bS(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Tt(), cn(), gr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Tt(), cn(), bm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Tt(), cn(), RS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Tt(), cn(), CS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Tt(), cn(), TS(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Tt(), cn();
          var a = Fe.current;
          Fe.current = ru;
          try {
            return wS(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Tt(), cn();
          var i = Fe.current;
          Fe.current = ru;
          try {
            return vS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Tt(), cn(), ES(e);
        },
        useState: function(e) {
          te = "useState", Tt(), cn();
          var t = Fe.current;
          Fe.current = ru;
          try {
            return Cm(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Tt(), cn(), void 0;
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Tt(), cn(), xS(e);
        },
        useTransition: function() {
          return te = "useTransition", Tt(), cn(), _S();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Tt(), cn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Tt(), cn(), yS(e, t, a);
        },
        useId: function() {
          return te = "useId", Tt(), cn(), kS();
        },
        unstable_isNewReconciler: oe
      }, dl = {
        readContext: function(e) {
          return DS(), gr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Tt(), _e(), Dm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Tt(), _e(), gr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Tt(), _e(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Tt(), _e(), _m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Tt(), _e(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Tt(), _e(), xm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Tt(), _e();
          var a = Fe.current;
          Fe.current = dl;
          try {
            return Om(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Tt(), _e();
          var i = Fe.current;
          Fe.current = dl;
          try {
            return hS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Tt(), _e(), Tm();
        },
        useState: function(e) {
          te = "useState", Tt(), _e();
          var t = Fe.current;
          Fe.current = dl;
          try {
            return gS(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Tt(), _e(), km();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Tt(), _e(), $C(e);
        },
        useTransition: function() {
          return te = "useTransition", Tt(), _e(), WC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Tt(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Tt(), _e(), Em(e, t);
        },
        useId: function() {
          return te = "useId", Tt(), _e(), Lm();
        },
        unstable_isNewReconciler: oe
      }, Nm = {
        readContext: function(e) {
          return DS(), gr(e);
        },
        useCallback: function(e, t) {
          return te = "useCallback", Tt(), _e(), Dm(e, t);
        },
        useContext: function(e) {
          return te = "useContext", Tt(), _e(), gr(e);
        },
        useEffect: function(e, t) {
          return te = "useEffect", Tt(), _e(), Wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return te = "useImperativeHandle", Tt(), _e(), _m(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return te = "useInsertionEffect", Tt(), _e(), wm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return te = "useLayoutEffect", Tt(), _e(), xm(e, t);
        },
        useMemo: function(e, t) {
          te = "useMemo", Tt(), _e();
          var a = Fe.current;
          Fe.current = dl;
          try {
            return Om(e, t);
          } finally {
            Fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          te = "useReducer", Tt(), _e();
          var i = Fe.current;
          Fe.current = dl;
          try {
            return mS(e, t, a);
          } finally {
            Fe.current = i;
          }
        },
        useRef: function(e) {
          return te = "useRef", Tt(), _e(), Tm();
        },
        useState: function(e) {
          te = "useState", Tt(), _e();
          var t = Fe.current;
          Fe.current = dl;
          try {
            return SS(e);
          } finally {
            Fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return te = "useDebugValue", Tt(), _e(), km();
        },
        useDeferredValue: function(e) {
          return te = "useDeferredValue", Tt(), _e(), IC(e);
        },
        useTransition: function() {
          return te = "useTransition", Tt(), _e(), QC();
        },
        useMutableSource: function(e, t, a) {
          return te = "useMutableSource", Tt(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return te = "useSyncExternalStore", Tt(), _e(), Em(e, t);
        },
        useId: function() {
          return te = "useId", Tt(), _e(), Lm();
        },
        unstable_isNewReconciler: oe
      };
    }
    var ns = E.unstable_now, rT = 0, Am = -1, Qp = -1, zm = -1, OS = !1, Um = !1;
    function aT() {
      return OS;
    }
    function Dx() {
      Um = !0;
    }
    function Ox() {
      OS = !1, Um = !1;
    }
    function Lx() {
      OS = Um, Um = !1;
    }
    function iT() {
      return rT;
    }
    function lT() {
      rT = ns();
    }
    function LS(e) {
      Qp = ns(), e.actualStartTime < 0 && (e.actualStartTime = ns());
    }
    function uT(e) {
      Qp = -1;
    }
    function Fm(e, t) {
      if (Qp >= 0) {
        var a = ns() - Qp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Qp = -1;
      }
    }
    function au(e) {
      if (Am >= 0) {
        var t = ns() - Am;
        Am = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Q:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ie:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function MS(e) {
      if (zm >= 0) {
        var t = ns() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Q:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ie:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function iu() {
      Am = ns();
    }
    function NS() {
      zm = ns();
    }
    function AS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function uc(e, t) {
      return {
        value: e,
        source: t,
        stack: oo(t),
        digest: null
      };
    }
    function zS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Mx(e, t) {
      return !0;
    }
    function US(e, t) {
      try {
        var a = Mx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === G)
            return;
          console.error(i);
        }
        var v = u ? Ct(u) : null, h = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === Q)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var b = Ct(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + b + ".");
        }
        var A = h + `
` + f + `

` + ("" + T);
        console.error(A);
      } catch (M) {
        setTimeout(function() {
          throw M;
        });
      }
    }
    var Nx = typeof WeakMap == "function" ? WeakMap : Map;
    function oT(e, t, a) {
      var i = qu(Tn, a);
      i.tag = Ug, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        wk(u), US(e, t);
      }, i;
    }
    function FS(e, t, a) {
      var i = qu(Tn, a);
      i.tag = Ug;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          SR(e), US(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        SR(e), US(e, t), typeof u != "function" && Rk(this);
        var h = t.value, T = t.stack;
        this.componentDidCatch(h, {
          componentStack: T !== null ? T : ""
        }), typeof u != "function" && (ha(e.lanes, vt) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ct(e) || "Unknown"));
      }), i;
    }
    function sT(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Nx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = xk.bind(null, e, t, a);
        Cr && sv(e, a), t.then(s, s);
      }
    }
    function Ax(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function zx(e, t) {
      var a = e.tag;
      if ((e.mode & At) === ft && (a === Y || a === Le || a === tt)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function cT(e) {
      var t = e;
      do {
        if (t.tag === W && Sx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function fT(e, t, a, i, u) {
      if ((e.mode & At) === ft) {
        if (e === t)
          e.flags |= pr;
        else {
          if (e.flags |= gt, a.flags |= Ds, a.flags &= ~(Oc | ba), a.tag === G) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ft;
            else {
              var f = qu(Tn, vt);
              f.tag = um, Zo(a, f, vt);
            }
          }
          a.lanes = _t(a.lanes, vt);
        }
        return e;
      }
      return e.flags |= pr, e.lanes = u, e;
    }
    function Ux(e, t, a, i, u) {
      if (a.flags |= ba, Cr && sv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        zx(a), Gr() && a.mode & At && tC();
        var f = cT(t);
        if (f !== null) {
          f.flags &= ~Yn, fT(f, t, a, e, u), f.mode & At && sT(e, s, u), Ax(f, e, s);
          return;
        } else {
          if (!Oo(u)) {
            sT(e, s, u), mE();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Gr() && a.mode & At) {
        tC();
        var h = cT(t);
        if (h !== null) {
          (h.flags & pr) === lt && (h.flags |= Yn), fT(h, t, a, e, u), Dg(uc(i, a));
          return;
        }
      }
      i = uc(i, a), hk(i);
      var T = t;
      do {
        switch (T.tag) {
          case Q: {
            var b = i;
            T.flags |= pr;
            var A = ir(u);
            T.lanes = _t(T.lanes, A);
            var M = oT(T, b, A);
            Vg(T, M);
            return;
          }
          case G:
            var P = i, B = T.type, X = T.stateNode;
            if ((T.flags & gt) === lt && (typeof B.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !cR(X))) {
              T.flags |= pr;
              var Ve = ir(u);
              T.lanes = _t(T.lanes, Ve);
              var ot = FS(T, P, Ve);
              Vg(T, ot);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function Fx() {
      return null;
    }
    var qp = m.ReactCurrentOwner, pl = !1, jS, Gp, VS, PS, HS, oc, BS, jm;
    jS = {}, Gp = {}, VS = {}, PS = {}, HS = {}, oc = !1, BS = {}, jm = {};
    function Oa(e, t, a, i) {
      e === null ? t.child = DC(t, null, a, i) : t.child = Vf(t, e.child, a, i);
    }
    function jx(e, t, a, i) {
      t.child = Vf(t, e.child, null, i), t.child = Vf(t, null, a, i);
    }
    function dT(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ul(
          s,
          i,
          // Resolved props
          "prop",
          Gt(a)
        );
      }
      var f = a.render, v = t.ref, h, T;
      jf(t, u), $l(t);
      {
        if (qp.current = t, la(!0), h = Yf(e, t, f, i, v, u), T = Wf(), t.mode & Hn) {
          ar(!0);
          try {
            h = Yf(e, t, f, i, v, u), T = Wf();
          } finally {
            ar(!1);
          }
        }
        la(!1);
      }
      return Ru(), e !== null && !pl ? (AC(e, t, u), Gu(e, t, u)) : (Gr() && T && Rg(t), t.flags |= Ul, Oa(e, t, h, u), t.child);
    }
    function pT(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if ($k(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = ed(s), t.tag = tt, t.type = f, YS(t, s), vT(e, t, f, i, u);
        }
        {
          var v = s.propTypes;
          v && ul(
            v,
            i,
            // Resolved props
            "prop",
            Gt(s)
          );
        }
        var h = _E(a.type, null, i, t, t.mode, u);
        return h.ref = t.ref, h.return = t, t.child = h, h;
      }
      {
        var T = a.type, b = T.propTypes;
        b && ul(
          b,
          i,
          // Resolved props
          "prop",
          Gt(T)
        );
      }
      var A = e.child, M = KS(e, u);
      if (!M) {
        var P = A.memoizedProps, B = a.compare;
        if (B = B !== null ? B : it, B(P, i) && e.ref === t.ref)
          return Gu(e, t, u);
      }
      t.flags |= Ul;
      var X = pc(A, i);
      return X.ref = t.ref, X.return = t, t.child = X, X;
    }
    function vT(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ut) {
          var f = s, v = f._payload, h = f._init;
          try {
            s = h(v);
          } catch {
            s = null;
          }
          var T = s && s.propTypes;
          T && ul(
            T,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Gt(s)
          );
        }
      }
      if (e !== null) {
        var b = e.memoizedProps;
        if (it(b, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (pl = !1, t.pendingProps = i = b, KS(e, u))
            (e.flags & Ds) !== lt && (pl = !0);
          else
            return t.lanes = e.lanes, Gu(e, t, u);
      }
      return $S(e, t, a, i, u);
    }
    function hT(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || R)
        if ((t.mode & At) === ft) {
          var f = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Km(t, a);
        } else if (ha(a, va)) {
          var A = {
            baseLanes: J,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = A;
          var M = s !== null ? s.baseLanes : a;
          Km(t, M);
        } else {
          var v = null, h;
          if (s !== null) {
            var T = s.baseLanes;
            h = _t(T, a);
          } else
            h = a;
          t.lanes = t.childLanes = va;
          var b = {
            baseLanes: h,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = b, t.updateQueue = null, Km(t, h), null;
        }
      else {
        var P;
        s !== null ? (P = _t(s.baseLanes, a), t.memoizedState = null) : P = a, Km(t, P);
      }
      return Oa(e, t, u, a), t.child;
    }
    function Vx(e, t, a) {
      var i = t.pendingProps;
      return Oa(e, t, i, a), t.child;
    }
    function Px(e, t, a) {
      var i = t.pendingProps.children;
      return Oa(e, t, i, a), t.child;
    }
    function Hx(e, t, a) {
      {
        t.flags |= xt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Oa(e, t, s, a), t.child;
    }
    function mT(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= oa, t.flags |= Ld);
    }
    function $S(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ul(
          s,
          i,
          // Resolved props
          "prop",
          Gt(a)
        );
      }
      var f;
      {
        var v = Mf(t, a, !0);
        f = Nf(t, v);
      }
      var h, T;
      jf(t, u), $l(t);
      {
        if (qp.current = t, la(!0), h = Yf(e, t, a, i, f, u), T = Wf(), t.mode & Hn) {
          ar(!0);
          try {
            h = Yf(e, t, a, i, f, u), T = Wf();
          } finally {
            ar(!1);
          }
        }
        la(!1);
      }
      return Ru(), e !== null && !pl ? (AC(e, t, u), Gu(e, t, u)) : (Gr() && T && Rg(t), t.flags |= Ul, Oa(e, t, h, u), t.child);
    }
    function yT(e, t, a, i, u) {
      {
        switch (aD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), h = v.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= gt, t.flags |= pr;
            var T = new Error("Simulated error coming from DevTools"), b = ir(u);
            t.lanes = _t(t.lanes, b);
            var A = FS(t, uc(T, t), b);
            Vg(t, A);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var M = a.propTypes;
          M && ul(
            M,
            i,
            // Resolved props
            "prop",
            Gt(a)
          );
        }
      }
      var P;
      eu(a) ? (P = !0, Xh(t)) : P = !1, jf(t, u);
      var B = t.stateNode, X;
      B === null ? (Pm(e, t), bC(t, a, i), Kg(t, a, i, u), X = !0) : e === null ? X = px(t, a, i, u) : X = vx(e, t, a, i, u);
      var Ve = IS(e, t, a, X, P, u);
      {
        var ot = t.stateNode;
        X && ot.props !== i && (oc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ct(t) || "a component"), oc = !0);
      }
      return Ve;
    }
    function IS(e, t, a, i, u, s) {
      mT(e, t);
      var f = (t.flags & gt) !== lt;
      if (!i && !f)
        return u && K0(t, a, !1), Gu(e, t, s);
      var v = t.stateNode;
      qp.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, uT();
      else {
        $l(t);
        {
          if (la(!0), h = v.render(), t.mode & Hn) {
            ar(!0);
            try {
              v.render();
            } finally {
              ar(!1);
            }
          }
          la(!1);
        }
        Ru();
      }
      return t.flags |= Ul, e !== null && f ? jx(e, t, h, s) : Oa(e, t, h, s), t.memoizedState = v.state, u && K0(t, a, !0), t.child;
    }
    function gT(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), rS(e, t.containerInfo);
    }
    function Bx(e, t, a) {
      if (gT(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      mC(e, t), fm(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var v = f.element;
      if (u.isDehydrated) {
        var h = {
          element: v,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, T = t.updateQueue;
        if (T.baseState = h, t.memoizedState = h, t.flags & Yn) {
          var b = uc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return ST(e, t, v, a, b);
        } else if (v !== s) {
          var A = uc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return ST(e, t, v, a, A);
        } else {
          Ww(t);
          var M = DC(t, null, v, a);
          t.child = M;
          for (var P = M; P; )
            P.flags = P.flags & ~_n | $a, P = P.sibling;
        }
      } else {
        if (Uf(), v === s)
          return Gu(e, t, a);
        Oa(e, t, v, a);
      }
      return t.child;
    }
    function ST(e, t, a, i, u) {
      return Uf(), Dg(u), t.flags |= Yn, Oa(e, t, a, i), t.child;
    }
    function $x(e, t, a) {
      LC(t), e === null && kg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, v = sg(i, u);
      return v ? f = null : s !== null && sg(i, s) && (t.flags |= sn), mT(e, t), Oa(e, t, f, a), t.child;
    }
    function Ix(e, t) {
      return e === null && kg(t), null;
    }
    function Yx(e, t, a, i) {
      Pm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, v = s._init, h = v(f);
      t.type = h;
      var T = t.tag = Ik(h), b = cl(h, u), A;
      switch (T) {
        case Y:
          return YS(t, h), t.type = h = ed(h), A = $S(null, t, h, b, i), A;
        case G:
          return t.type = h = CE(h), A = yT(null, t, h, b, i), A;
        case Le:
          return t.type = h = TE(h), A = dT(null, t, h, b, i), A;
        case st: {
          if (t.type !== t.elementType) {
            var M = h.propTypes;
            M && ul(
              M,
              b,
              // Resolved for outer only
              "prop",
              Gt(h)
            );
          }
          return A = pT(
            null,
            t,
            h,
            cl(h.type, b),
            // The inner type can have defaults too
            i
          ), A;
        }
      }
      var P = "";
      throw h !== null && typeof h == "object" && h.$$typeof === ut && (P = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + P));
    }
    function Wx(e, t, a, i, u) {
      Pm(e, t), t.tag = G;
      var s;
      return eu(a) ? (s = !0, Xh(t)) : s = !1, jf(t, u), bC(t, a, i), Kg(t, a, i, u), IS(null, t, a, !0, s, u);
    }
    function Qx(e, t, a, i) {
      Pm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Mf(t, a, !1);
        s = Nf(t, f);
      }
      jf(t, i);
      var v, h;
      $l(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = Gt(a) || "Unknown";
          jS[T] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), jS[T] = !0);
        }
        t.mode & Hn && sl.recordLegacyContextWarning(t, null), la(!0), qp.current = t, v = Yf(null, t, a, u, s, i), h = Wf(), la(!1);
      }
      if (Ru(), t.flags |= Ul, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var b = Gt(a) || "Unknown";
        Gp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Gp[b] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var A = Gt(a) || "Unknown";
          Gp[A] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), Gp[A] = !0);
        }
        t.tag = G, t.memoizedState = null, t.updateQueue = null;
        var M = !1;
        return eu(a) ? (M = !0, Xh(t)) : M = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, jg(t), RC(t, v), Kg(t, a, u, i), IS(null, t, a, !0, M, i);
      } else {
        if (t.tag = Y, t.mode & Hn) {
          ar(!0);
          try {
            v = Yf(null, t, a, u, s, i), h = Wf();
          } finally {
            ar(!1);
          }
        }
        return Gr() && h && Rg(t), Oa(null, t, v, i), YS(t, a), t.child;
      }
    }
    function YS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Wr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), HS[u] || (HS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Gt(t) || "Unknown";
          PS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), PS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Gt(t) || "Unknown";
          VS[v] || (S("%s: Function components do not support contextType.", v), VS[v] = !0);
        }
      }
    }
    var WS = {
      dehydrated: null,
      treeContext: null,
      retryLane: $t
    };
    function QS(e) {
      return {
        baseLanes: e,
        cachePool: Fx(),
        transitions: null
      };
    }
    function qx(e, t) {
      var a = null;
      return {
        baseLanes: _t(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Gx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return lS(e, Pp);
    }
    function Xx(e, t) {
      return Lo(e.childLanes, t);
    }
    function ET(e, t, a) {
      var i = t.pendingProps;
      iD(t) && (t.flags |= gt);
      var u = fl.current, s = !1, f = (t.flags & gt) !== lt;
      if (f || Gx(u, e) ? (s = !0, t.flags &= ~gt) : (e === null || e.memoizedState !== null) && (u = gx(u, NC)), u = Hf(u), es(t, u), e === null) {
        kg(t);
        var v = t.memoizedState;
        if (v !== null) {
          var h = v.dehydrated;
          if (h !== null)
            return t_(t, h);
        }
        var T = i.children, b = i.fallback;
        if (s) {
          var A = Kx(t, T, b, a), M = t.child;
          return M.memoizedState = QS(a), t.memoizedState = WS, A;
        } else
          return qS(t, T);
      } else {
        var P = e.memoizedState;
        if (P !== null) {
          var B = P.dehydrated;
          if (B !== null)
            return n_(e, t, f, i, B, P, a);
        }
        if (s) {
          var X = i.fallback, Ve = i.children, ot = Jx(e, t, Ve, X, a), nt = t.child, Yt = e.child.memoizedState;
          return nt.memoizedState = Yt === null ? QS(a) : qx(Yt, a), nt.childLanes = Xx(e, a), t.memoizedState = WS, ot;
        } else {
          var Ut = i.children, F = Zx(e, t, Ut, a);
          return t.memoizedState = null, F;
        }
      }
    }
    function qS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = GS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Kx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, v, h;
      return (u & At) === ft && s !== null ? (v = s, v.childLanes = J, v.pendingProps = f, e.mode & pt && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), h = os(a, u, i, null)) : (v = GS(f, u), h = os(a, u, i, null)), v.return = e, h.return = e, v.sibling = h, e.child = v, h;
    }
    function GS(e, t, a) {
      return CR(e, t, J, null);
    }
    function CT(e, t) {
      return pc(e, t);
    }
    function Zx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = CT(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & At) === ft && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= rn) : v.push(s);
      }
      return t.child = f, f;
    }
    function Jx(e, t, a, i, u) {
      var s = t.mode, f = e.child, v = f.sibling, h = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & At) === ft && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var b = t.child;
        T = b, T.childLanes = J, T.pendingProps = h, t.mode & pt && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = f.selfBaseDuration, T.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        T = CT(f, h), T.subtreeFlags = f.subtreeFlags & Er;
      var A;
      return v !== null ? A = pc(v, i) : (A = os(i, s, u, null), A.flags |= _n), A.return = t, T.return = t, T.sibling = A, t.child = T, A;
    }
    function Vm(e, t, a, i) {
      i !== null && Dg(i), Vf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = qS(t, s);
      return f.flags |= _n, t.memoizedState = null, f;
    }
    function e_(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, v = GS(f, s), h = os(i, s, u, null);
      return h.flags |= _n, v.return = t, h.return = t, v.sibling = h, t.child = v, (t.mode & At) !== ft && Vf(t, e.child, null, u), h;
    }
    function t_(e, t, a) {
      return (e.mode & At) === ft ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = vt) : pg(t) ? e.lanes = xu : e.lanes = va, null;
    }
    function n_(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Yn) {
          t.flags &= ~Yn;
          var F = zS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Vm(e, t, f, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= gt, null;
          var K = i.children, j = i.fallback, fe = e_(e, t, K, j, f), Pe = t.child;
          return Pe.memoizedState = QS(f), t.memoizedState = WS, fe;
        }
      else {
        if (Iw(), (t.mode & At) === ft)
          return Vm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (pg(u)) {
          var v, h, T;
          {
            var b = uw(u);
            v = b.digest, h = b.message, T = b.stack;
          }
          var A;
          h ? A = new Error(h) : A = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var M = zS(A, v, T);
          return Vm(e, t, f, M);
        }
        var P = ha(f, e.childLanes);
        if (pl || P) {
          var B = Xm();
          if (B !== null) {
            var X = Ay(B, f);
            if (X !== $t && X !== s.retryLane) {
              s.retryLane = X;
              var Ve = Tn;
              Ja(e, X), Or(B, e, X, Ve);
            }
          }
          mE();
          var ot = zS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Vm(e, t, f, ot);
        } else if ($0(u)) {
          t.flags |= gt, t.child = e.child;
          var nt = _k.bind(null, e);
          return ow(u, nt), null;
        } else {
          Qw(t, u, s.treeContext);
          var Yt = i.children, Ut = qS(t, Yt);
          return Ut.flags |= $a, Ut;
        }
      }
    }
    function TT(e, t, a) {
      e.lanes = _t(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = _t(i.lanes, t)), Ag(e.return, t, a);
    }
    function r_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === W) {
          var u = i.memoizedState;
          u !== null && TT(i, a, e);
        } else if (i.tag === Et)
          TT(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function a_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && gm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function i_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !BS[e])
        if (BS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function l_(e, t) {
      e !== void 0 && !jm[e] && (e !== "collapsed" && e !== "hidden" ? (jm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (jm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function RT(e, t) {
      {
        var a = jt(e), i = !a && typeof ui(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function u_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (jt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!RT(e[a], a))
              return;
        } else {
          var i = ui(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!RT(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function XS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function bT(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      i_(u), l_(s, u), u_(f, u), Oa(e, t, f, a);
      var v = fl.current, h = lS(v, Pp);
      if (h)
        v = uS(v, Pp), t.flags |= gt;
      else {
        var T = e !== null && (e.flags & gt) !== lt;
        T && r_(t, t.child, a), v = Hf(v);
      }
      if (es(t, v), (t.mode & At) === ft)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var b = a_(t.child), A;
            b === null ? (A = t.child, t.child = null) : (A = b.sibling, b.sibling = null), XS(
              t,
              !1,
              // isBackwards
              A,
              b,
              s
            );
            break;
          }
          case "backwards": {
            var M = null, P = t.child;
            for (t.child = null; P !== null; ) {
              var B = P.alternate;
              if (B !== null && gm(B) === null) {
                t.child = P;
                break;
              }
              var X = P.sibling;
              P.sibling = M, M = P, P = X;
            }
            XS(
              t,
              !0,
              // isBackwards
              M,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            XS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function o_(e, t, a) {
      rS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Vf(t, null, i, a) : Oa(e, t, i, a), t.child;
    }
    var wT = !1;
    function s_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
      {
        "value" in s || wT || (wT = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && ul(h, s, "prop", "Context.Provider");
      }
      if (dC(t, u, v), f !== null) {
        var T = f.value;
        if (Qe(T, v)) {
          if (f.children === s.children && !qh())
            return Gu(e, t, a);
        } else
          rx(t, u, a);
      }
      var b = s.children;
      return Oa(e, t, b, a), t.child;
    }
    var xT = !1;
    function c_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (xT || (xT = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), jf(t, a);
      var f = gr(i);
      $l(t);
      var v;
      return qp.current = t, la(!0), v = s(f), la(!1), Ru(), t.flags |= Ul, Oa(e, t, v, a), t.child;
    }
    function Xp() {
      pl = !0;
    }
    function Pm(e, t) {
      (t.mode & At) === ft && e !== null && (e.alternate = null, t.alternate = null, t.flags |= _n);
    }
    function Gu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), uT(), ov(t.lanes), ha(a, t.childLanes) ? (hx(e, t), t.child) : null;
    }
    function f_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= rn) : s.push(e), a.flags |= _n, a;
      }
    }
    function KS(e, t) {
      var a = e.lanes;
      return !!ha(a, t);
    }
    function d_(e, t, a) {
      switch (t.tag) {
        case Q:
          gT(t), t.stateNode, Uf();
          break;
        case ae:
          LC(t);
          break;
        case G: {
          var i = t.type;
          eu(i) && Xh(t);
          break;
        }
        case ee:
          rS(t, t.stateNode.containerInfo);
          break;
        case Re: {
          var u = t.memoizedProps.value, s = t.type._context;
          dC(t, s, u);
          break;
        }
        case Ie:
          {
            var f = ha(a, t.childLanes);
            f && (t.flags |= xt);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case W: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return es(t, Hf(fl.current)), t.flags |= gt, null;
            var T = t.child, b = T.childLanes;
            if (ha(a, b))
              return ET(e, t, a);
            es(t, Hf(fl.current));
            var A = Gu(e, t, a);
            return A !== null ? A.sibling : null;
          } else
            es(t, Hf(fl.current));
          break;
        }
        case Et: {
          var M = (e.flags & gt) !== lt, P = ha(a, t.childLanes);
          if (M) {
            if (P)
              return bT(e, t, a);
            t.flags |= gt;
          }
          var B = t.memoizedState;
          if (B !== null && (B.rendering = null, B.tail = null, B.lastEffect = null), es(t, fl.current), P)
            break;
          return null;
        }
        case he:
        case Ne:
          return t.lanes = J, hT(e, t, a);
      }
      return Gu(e, t, a);
    }
    function _T(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return f_(e, t, _E(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || qh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          pl = !0;
        else {
          var s = KS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & gt) === lt)
            return pl = !1, d_(e, t, a);
          (e.flags & Ds) !== lt ? pl = !0 : pl = !1;
        }
      } else if (pl = !1, Gr() && jw(t)) {
        var f = t.index, v = Vw();
        eC(t, v, f);
      }
      switch (t.lanes = J, t.tag) {
        case pe:
          return Qx(e, t, t.type, a);
        case Kt: {
          var h = t.elementType;
          return Yx(e, t, h, a);
        }
        case Y: {
          var T = t.type, b = t.pendingProps, A = t.elementType === T ? b : cl(T, b);
          return $S(e, t, T, A, a);
        }
        case G: {
          var M = t.type, P = t.pendingProps, B = t.elementType === M ? P : cl(M, P);
          return yT(e, t, M, B, a);
        }
        case Q:
          return Bx(e, t, a);
        case ae:
          return $x(e, t, a);
        case Oe:
          return Ix(e, t);
        case W:
          return ET(e, t, a);
        case ee:
          return o_(e, t, a);
        case Le: {
          var X = t.type, Ve = t.pendingProps, ot = t.elementType === X ? Ve : cl(X, Ve);
          return dT(e, t, X, ot, a);
        }
        case Ke:
          return Vx(e, t, a);
        case et:
          return Px(e, t, a);
        case Ie:
          return Hx(e, t, a);
        case Re:
          return s_(e, t, a);
        case Dt:
          return c_(e, t, a);
        case st: {
          var nt = t.type, Yt = t.pendingProps, Ut = cl(nt, Yt);
          if (t.type !== t.elementType) {
            var F = nt.propTypes;
            F && ul(
              F,
              Ut,
              // Resolved for outer only
              "prop",
              Gt(nt)
            );
          }
          return Ut = cl(nt.type, Ut), pT(e, t, nt, Ut, a);
        }
        case tt:
          return vT(e, t, t.type, t.pendingProps, a);
        case Ft: {
          var K = t.type, j = t.pendingProps, fe = t.elementType === K ? j : cl(K, j);
          return Wx(e, t, K, fe, a);
        }
        case Et:
          return bT(e, t, a);
        case at:
          break;
        case he:
          return hT(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qf(e) {
      e.flags |= xt;
    }
    function kT(e) {
      e.flags |= oa, e.flags |= Ld;
    }
    var DT, ZS, OT, LT;
    DT = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ae || u.tag === Oe)
          zb(e, u.stateNode);
        else if (u.tag !== ee) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, ZS = function(e, t) {
    }, OT = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, v = aS(), h = Fb(f, a, s, i, u, v);
        t.updateQueue = h, h && Qf(t);
      }
    }, LT = function(e, t, a, i) {
      a !== i && Qf(t);
    };
    function Kp(e, t) {
      if (!Gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Kr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = J, i = lt;
      if (t) {
        if ((e.mode & pt) !== ft) {
          for (var h = e.selfBaseDuration, T = e.child; T !== null; )
            a = _t(a, _t(T.lanes, T.childLanes)), i |= T.subtreeFlags & Er, i |= T.flags & Er, h += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = h;
        } else
          for (var b = e.child; b !== null; )
            a = _t(a, _t(b.lanes, b.childLanes)), i |= b.subtreeFlags & Er, i |= b.flags & Er, b.return = e, b = b.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & pt) !== ft) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = _t(a, _t(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = _t(a, _t(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function p_(e, t, a) {
      if (Zw() && (t.mode & At) !== ft && (t.flags & gt) === lt)
        return uC(t), Uf(), t.flags |= Yn | ba | pr, !1;
      var i = tm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Xw(t), Kr(t), (t.mode & pt) !== ft) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Uf(), (t.flags & gt) === lt && (t.memoizedState = null), t.flags |= xt, Kr(t), (t.mode & pt) !== ft) {
            var f = a !== null;
            if (f) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return oC(), !0;
    }
    function MT(e, t, a) {
      var i = t.pendingProps;
      switch (bg(t), t.tag) {
        case pe:
        case Kt:
        case tt:
        case Y:
        case Le:
        case Ke:
        case et:
        case Ie:
        case Dt:
        case st:
          return Kr(t), null;
        case G: {
          var u = t.type;
          return eu(u) && Gh(t), Kr(t), null;
        }
        case Q: {
          var s = t.stateNode;
          if (Pf(t), Eg(t), sS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = tm(t);
            if (f)
              Qf(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Yn) !== lt) && (t.flags |= Ba, oC());
            }
          }
          return ZS(e, t), Kr(t), null;
        }
        case ae: {
          iS(t);
          var h = OC(), T = t.type;
          if (e !== null && t.stateNode != null)
            OT(e, t, T, i, h), e.ref !== t.ref && kT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Kr(t), null;
            }
            var b = aS(), A = tm(t);
            if (A)
              qw(t, h, b) && Qf(t);
            else {
              var M = Ab(T, i, h, b, t);
              DT(M, t, !1, !1), t.stateNode = M, Ub(M, T, i, h) && Qf(t);
            }
            t.ref !== null && kT(t);
          }
          return Kr(t), null;
        }
        case Oe: {
          var P = i;
          if (e && t.stateNode != null) {
            var B = e.memoizedProps;
            LT(e, t, B, P);
          } else {
            if (typeof P != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = OC(), Ve = aS(), ot = tm(t);
            ot ? Gw(t) && Qf(t) : t.stateNode = jb(P, X, Ve, t);
          }
          return Kr(t), null;
        }
        case W: {
          Bf(t);
          var nt = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Yt = p_(e, t, nt);
            if (!Yt)
              return t.flags & pr ? t : null;
          }
          if ((t.flags & gt) !== lt)
            return t.lanes = a, (t.mode & pt) !== ft && AS(t), t;
          var Ut = nt !== null, F = e !== null && e.memoizedState !== null;
          if (Ut !== F && Ut) {
            var K = t.child;
            if (K.flags |= Fl, (t.mode & At) !== ft) {
              var j = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !z);
              j || lS(fl.current, NC) ? vk() : mE();
            }
          }
          var fe = t.updateQueue;
          if (fe !== null && (t.flags |= xt), Kr(t), (t.mode & pt) !== ft && Ut) {
            var Pe = t.child;
            Pe !== null && (t.treeBaseDuration -= Pe.treeBaseDuration);
          }
          return null;
        }
        case ee:
          return Pf(t), ZS(e, t), e === null && Lw(t.stateNode.containerInfo), Kr(t), null;
        case Re:
          var Ae = t.type._context;
          return Ng(Ae, t), Kr(t), null;
        case Ft: {
          var yt = t.type;
          return eu(yt) && Gh(t), Kr(t), null;
        }
        case Et: {
          Bf(t);
          var Rt = t.memoizedState;
          if (Rt === null)
            return Kr(t), null;
          var hn = (t.flags & gt) !== lt, en = Rt.rendering;
          if (en === null)
            if (hn)
              Kp(Rt, !1);
            else {
              var sr = mk() && (e === null || (e.flags & gt) === lt);
              if (!sr)
                for (var tn = t.child; tn !== null; ) {
                  var nr = gm(tn);
                  if (nr !== null) {
                    hn = !0, t.flags |= gt, Kp(Rt, !1);
                    var Sa = nr.updateQueue;
                    return Sa !== null && (t.updateQueue = Sa, t.flags |= xt), t.subtreeFlags = lt, mx(t, a), es(t, uS(fl.current, Pp)), t.child;
                  }
                  tn = tn.sibling;
                }
              Rt.tail !== null && Pn() > JT() && (t.flags |= gt, hn = !0, Kp(Rt, !1), t.lanes = Id);
            }
          else {
            if (!hn) {
              var na = gm(en);
              if (na !== null) {
                t.flags |= gt, hn = !0;
                var gi = na.updateQueue;
                if (gi !== null && (t.updateQueue = gi, t.flags |= xt), Kp(Rt, !0), Rt.tail === null && Rt.tailMode === "hidden" && !en.alternate && !Gr())
                  return Kr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Pn() * 2 - Rt.renderingStartTime > JT() && a !== va && (t.flags |= gt, hn = !0, Kp(Rt, !1), t.lanes = Id);
            }
            if (Rt.isBackwards)
              en.sibling = t.child, t.child = en;
            else {
              var Na = Rt.last;
              Na !== null ? Na.sibling = en : t.child = en, Rt.last = en;
            }
          }
          if (Rt.tail !== null) {
            var Aa = Rt.tail;
            Rt.rendering = Aa, Rt.tail = Aa.sibling, Rt.renderingStartTime = Pn(), Aa.sibling = null;
            var Ea = fl.current;
            return hn ? Ea = uS(Ea, Pp) : Ea = Hf(Ea), es(t, Ea), Aa;
          }
          return Kr(t), null;
        }
        case at:
          break;
        case he:
        case Ne: {
          hE(t);
          var eo = t.memoizedState, td = eo !== null;
          if (e !== null) {
            var pv = e.memoizedState, ou = pv !== null;
            ou !== td && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !R && (t.flags |= Fl);
          }
          return !td || (t.mode & At) === ft ? Kr(t) : ha(uu, va) && (Kr(t), t.subtreeFlags & (_n | xt) && (t.flags |= Fl)), null;
        }
        case ht:
          return null;
        case rt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function v_(e, t, a) {
      switch (bg(t), t.tag) {
        case G: {
          var i = t.type;
          eu(i) && Gh(t);
          var u = t.flags;
          return u & pr ? (t.flags = u & ~pr | gt, (t.mode & pt) !== ft && AS(t), t) : null;
        }
        case Q: {
          t.stateNode, Pf(t), Eg(t), sS();
          var s = t.flags;
          return (s & pr) !== lt && (s & gt) === lt ? (t.flags = s & ~pr | gt, t) : null;
        }
        case ae:
          return iS(t), null;
        case W: {
          Bf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Uf();
          }
          var v = t.flags;
          return v & pr ? (t.flags = v & ~pr | gt, (t.mode & pt) !== ft && AS(t), t) : null;
        }
        case Et:
          return Bf(t), null;
        case ee:
          return Pf(t), null;
        case Re:
          var h = t.type._context;
          return Ng(h, t), null;
        case he:
        case Ne:
          return hE(t), null;
        case ht:
          return null;
        default:
          return null;
      }
    }
    function NT(e, t, a) {
      switch (bg(t), t.tag) {
        case G: {
          var i = t.type.childContextTypes;
          i != null && Gh(t);
          break;
        }
        case Q: {
          t.stateNode, Pf(t), Eg(t), sS();
          break;
        }
        case ae: {
          iS(t);
          break;
        }
        case ee:
          Pf(t);
          break;
        case W:
          Bf(t);
          break;
        case Et:
          Bf(t);
          break;
        case Re:
          var u = t.type._context;
          Ng(u, t);
          break;
        case he:
        case Ne:
          hE(t);
          break;
      }
    }
    var AT = null;
    AT = /* @__PURE__ */ new Set();
    var Hm = !1, Zr = !1, h_ = typeof WeakSet == "function" ? WeakSet : Set, qe = null, qf = null, Gf = null;
    function m_(e) {
      Cu(null, function() {
        throw e;
      }), Dd();
    }
    var y_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & pt)
        try {
          iu(), t.componentWillUnmount();
        } finally {
          au(e);
        }
      else
        t.componentWillUnmount();
    };
    function zT(e, t) {
      try {
        rs(br, e);
      } catch (a) {
        Ln(e, t, a);
      }
    }
    function JS(e, t, a) {
      try {
        y_(e, a);
      } catch (i) {
        Ln(e, t, i);
      }
    }
    function g_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Ln(e, t, i);
      }
    }
    function UT(e, t) {
      try {
        jT(e);
      } catch (a) {
        Ln(e, t, a);
      }
    }
    function Xf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ce && we && e.mode & pt)
              try {
                iu(), i = a(null);
              } finally {
                au(e);
              }
            else
              i = a(null);
          } catch (u) {
            Ln(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ct(e));
        } else
          a.current = null;
    }
    function Bm(e, t, a) {
      try {
        a();
      } catch (i) {
        Ln(e, t, i);
      }
    }
    var FT = !1;
    function S_(e, t) {
      Mb(e.containerInfo), qe = t, E_();
      var a = FT;
      return FT = !1, a;
    }
    function E_() {
      for (; qe !== null; ) {
        var e = qe, t = e.child;
        (e.subtreeFlags & Ro) !== lt && t !== null ? (t.return = e, qe = t) : C_();
      }
    }
    function C_() {
      for (; qe !== null; ) {
        var e = qe;
        on(e);
        try {
          T_(e);
        } catch (a) {
          Ln(e, e.return, a);
        }
        In();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, qe = t;
          return;
        }
        qe = e.return;
      }
    }
    function T_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ba) !== lt) {
        switch (on(e), e.tag) {
          case Y:
          case Le:
          case tt:
            break;
          case G: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !oc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ct(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ct(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : cl(e.type, i), u);
              {
                var v = AT;
                f === void 0 && !v.has(e.type) && (v.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ct(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Q: {
            {
              var h = e.stateNode;
              rw(h.containerInfo);
            }
            break;
          }
          case ae:
          case Oe:
          case ee:
          case Ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        In();
      }
    }
    function vl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var v = f.destroy;
            f.destroy = void 0, v !== void 0 && ((e & Xr) !== ei ? jc(t) : (e & br) !== ei && Vc(t), (e & tu) !== ei && cv(!0), Bm(t, a, v), (e & tu) !== ei && cv(!1), (e & Xr) !== ei ? eh() : (e & br) !== ei && bo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function rs(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Xr) !== ei ? Jv(t) : (e & br) !== ei && th(t);
            var f = s.create;
            (e & tu) !== ei && cv(!0), s.destroy = f(), (e & tu) !== ei && cv(!1), (e & Xr) !== ei ? Hd() : (e & br) !== ei && nh();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var h = void 0;
                (s.tag & br) !== lt ? h = "useLayoutEffect" : (s.tag & tu) !== lt ? h = "useInsertionEffect" : h = "useEffect";
                var T = void 0;
                v === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? T = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + v, S("%s must not return anything besides a function, which is used for clean-up.%s", h, T);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function R_(e, t) {
      if ((t.flags & xt) !== lt)
        switch (t.tag) {
          case Ie: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = iT(), v = t.alternate === null ? "mount" : "update";
            aT() && (v = "nested-update"), typeof s == "function" && s(u, v, a, f);
            var h = t.return;
            e:
              for (; h !== null; ) {
                switch (h.tag) {
                  case Q:
                    var T = h.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                  case Ie:
                    var b = h.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                }
                h = h.return;
              }
            break;
          }
        }
    }
    function b_(e, t, a, i) {
      if ((a.flags & zr) !== lt)
        switch (a.tag) {
          case Y:
          case Le:
          case tt: {
            if (!Zr)
              if (a.mode & pt)
                try {
                  iu(), rs(br | Rr, a);
                } finally {
                  au(a);
                }
              else
                rs(br | Rr, a);
            break;
          }
          case G: {
            var u = a.stateNode;
            if (a.flags & xt && !Zr)
              if (t === null)
                if (a.type === a.elementType && !oc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ct(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ct(a) || "instance")), a.mode & pt)
                  try {
                    iu(), u.componentDidMount();
                  } finally {
                    au(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : cl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !oc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ct(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ct(a) || "instance")), a.mode & pt)
                  try {
                    iu(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    au(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !oc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ct(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ct(a) || "instance")), gC(a, v, u));
            break;
          }
          case Q: {
            var h = a.updateQueue;
            if (h !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ae:
                    T = a.child.stateNode;
                    break;
                  case G:
                    T = a.child.stateNode;
                    break;
                }
              gC(a, h, T);
            }
            break;
          }
          case ae: {
            var b = a.stateNode;
            if (t === null && a.flags & xt) {
              var A = a.type, M = a.memoizedProps;
              $b(b, A, M);
            }
            break;
          }
          case Oe:
            break;
          case ee:
            break;
          case Ie: {
            {
              var P = a.memoizedProps, B = P.onCommit, X = P.onRender, Ve = a.stateNode.effectDuration, ot = iT(), nt = t === null ? "mount" : "update";
              aT() && (nt = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, nt, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ot);
              {
                typeof B == "function" && B(a.memoizedProps.id, nt, Ve, ot), Ck(a);
                var Yt = a.return;
                e:
                  for (; Yt !== null; ) {
                    switch (Yt.tag) {
                      case Q:
                        var Ut = Yt.stateNode;
                        Ut.effectDuration += Ve;
                        break e;
                      case Ie:
                        var F = Yt.stateNode;
                        F.effectDuration += Ve;
                        break e;
                    }
                    Yt = Yt.return;
                  }
              }
            }
            break;
          }
          case W: {
            M_(e, a);
            break;
          }
          case Et:
          case Ft:
          case at:
          case he:
          case Ne:
          case rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Zr || a.flags & oa && jT(a);
    }
    function w_(e) {
      switch (e.tag) {
        case Y:
        case Le:
        case tt: {
          if (e.mode & pt)
            try {
              iu(), zT(e, e.return);
            } finally {
              au(e);
            }
          else
            zT(e, e.return);
          break;
        }
        case G: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && g_(e, e.return, t), UT(e, e.return);
          break;
        }
        case ae: {
          UT(e, e.return);
          break;
        }
      }
    }
    function x_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ae) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Jb(u) : tw(i.stateNode, i.memoizedProps);
            } catch (f) {
              Ln(e, e.return, f);
            }
          }
        } else if (i.tag === Oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ew(s) : nw(s, i.memoizedProps);
            } catch (f) {
              Ln(e, e.return, f);
            }
        } else if (!((i.tag === he || i.tag === Ne) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function jT(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ae:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & pt)
            try {
              iu(), u = t(i);
            } finally {
              au(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ct(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ct(e)), t.current = i;
      }
    }
    function __(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function VT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, VT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ae) {
          var a = e.stateNode;
          a !== null && Aw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function k_(e) {
      for (var t = e.return; t !== null; ) {
        if (PT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function PT(e) {
      return e.tag === ae || e.tag === Q || e.tag === ee;
    }
    function HT(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || PT(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ae && t.tag !== Oe && t.tag !== Ot; ) {
            if (t.flags & _n || t.child === null || t.tag === ee)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & _n))
            return t.stateNode;
        }
    }
    function D_(e) {
      var t = k_(e);
      switch (t.tag) {
        case ae: {
          var a = t.stateNode;
          t.flags & sn && (B0(a), t.flags &= ~sn);
          var i = HT(e);
          tE(e, i, a);
          break;
        }
        case Q:
        case ee: {
          var u = t.stateNode.containerInfo, s = HT(e);
          eE(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function eE(e, t, a) {
      var i = e.tag, u = i === ae || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? Gb(a, s, t) : Qb(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          eE(f, t, a);
          for (var v = f.sibling; v !== null; )
            eE(v, t, a), v = v.sibling;
        }
      }
    }
    function tE(e, t, a) {
      var i = e.tag, u = i === ae || i === Oe;
      if (u) {
        var s = e.stateNode;
        t ? qb(a, s, t) : Wb(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          tE(f, t, a);
          for (var v = f.sibling; v !== null; )
            tE(v, t, a), v = v.sibling;
        }
      }
    }
    var Jr = null, hl = !1;
    function O_(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ae: {
                Jr = i.stateNode, hl = !1;
                break e;
              }
              case Q: {
                Jr = i.stateNode.containerInfo, hl = !0;
                break e;
              }
              case ee: {
                Jr = i.stateNode.containerInfo, hl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Jr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        BT(e, t, a), Jr = null, hl = !1;
      }
      __(a);
    }
    function as(e, t, a) {
      for (var i = a.child; i !== null; )
        BT(e, t, i), i = i.sibling;
    }
    function BT(e, t, a) {
      switch (Vd(a), a.tag) {
        case ae:
          Zr || Xf(a, t);
        case Oe: {
          {
            var i = Jr, u = hl;
            Jr = null, as(e, t, a), Jr = i, hl = u, Jr !== null && (hl ? Kb(Jr, a.stateNode) : Xb(Jr, a.stateNode));
          }
          return;
        }
        case Ot: {
          Jr !== null && (hl ? Zb(Jr, a.stateNode) : dg(Jr, a.stateNode));
          return;
        }
        case ee: {
          {
            var s = Jr, f = hl;
            Jr = a.stateNode.containerInfo, hl = !0, as(e, t, a), Jr = s, hl = f;
          }
          return;
        }
        case Y:
        case Le:
        case st:
        case tt: {
          if (!Zr) {
            var v = a.updateQueue;
            if (v !== null) {
              var h = v.lastEffect;
              if (h !== null) {
                var T = h.next, b = T;
                do {
                  var A = b, M = A.destroy, P = A.tag;
                  M !== void 0 && ((P & tu) !== ei ? Bm(a, t, M) : (P & br) !== ei && (Vc(a), a.mode & pt ? (iu(), Bm(a, t, M), au(a)) : Bm(a, t, M), bo())), b = b.next;
                } while (b !== T);
              }
            }
          }
          as(e, t, a);
          return;
        }
        case G: {
          if (!Zr) {
            Xf(a, t);
            var B = a.stateNode;
            typeof B.componentWillUnmount == "function" && JS(a, t, B);
          }
          as(e, t, a);
          return;
        }
        case at: {
          as(e, t, a);
          return;
        }
        case he: {
          if (
            // TODO: Remove this dead flag
            a.mode & At
          ) {
            var X = Zr;
            Zr = X || a.memoizedState !== null, as(e, t, a), Zr = X;
          } else
            as(e, t, a);
          break;
        }
        default: {
          as(e, t, a);
          return;
        }
      }
    }
    function L_(e) {
      e.memoizedState;
    }
    function M_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && yw(s);
          }
        }
      }
    }
    function $T(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new h_()), t.forEach(function(i) {
          var u = kk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Cr)
              if (qf !== null && Gf !== null)
                sv(Gf, qf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function N_(e, t, a) {
      qf = a, Gf = e, on(t), IT(t, e), on(t), qf = null, Gf = null;
    }
    function ml(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            O_(e, t, s);
          } catch (h) {
            Ln(s, t, h);
          }
        }
      var f = mc();
      if (t.subtreeFlags & fa)
        for (var v = t.child; v !== null; )
          on(v), IT(v, e), v = v.sibling;
      on(f);
    }
    function IT(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Y:
        case Le:
        case st:
        case tt: {
          if (ml(t, e), lu(e), u & xt) {
            try {
              vl(tu | Rr, e, e.return), rs(tu | Rr, e);
            } catch (yt) {
              Ln(e, e.return, yt);
            }
            if (e.mode & pt) {
              try {
                iu(), vl(br | Rr, e, e.return);
              } catch (yt) {
                Ln(e, e.return, yt);
              }
              au(e);
            } else
              try {
                vl(br | Rr, e, e.return);
              } catch (yt) {
                Ln(e, e.return, yt);
              }
          }
          return;
        }
        case G: {
          ml(t, e), lu(e), u & oa && i !== null && Xf(i, i.return);
          return;
        }
        case ae: {
          ml(t, e), lu(e), u & oa && i !== null && Xf(i, i.return);
          {
            if (e.flags & sn) {
              var s = e.stateNode;
              try {
                B0(s);
              } catch (yt) {
                Ln(e, e.return, yt);
              }
            }
            if (u & xt) {
              var f = e.stateNode;
              if (f != null) {
                var v = e.memoizedProps, h = i !== null ? i.memoizedProps : v, T = e.type, b = e.updateQueue;
                if (e.updateQueue = null, b !== null)
                  try {
                    Ib(f, b, T, h, v, e);
                  } catch (yt) {
                    Ln(e, e.return, yt);
                  }
              }
            }
          }
          return;
        }
        case Oe: {
          if (ml(t, e), lu(e), u & xt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var A = e.stateNode, M = e.memoizedProps, P = i !== null ? i.memoizedProps : M;
            try {
              Yb(A, P, M);
            } catch (yt) {
              Ln(e, e.return, yt);
            }
          }
          return;
        }
        case Q: {
          if (ml(t, e), lu(e), u & xt && i !== null) {
            var B = i.memoizedState;
            if (B.isDehydrated)
              try {
                mw(t.containerInfo);
              } catch (yt) {
                Ln(e, e.return, yt);
              }
          }
          return;
        }
        case ee: {
          ml(t, e), lu(e);
          return;
        }
        case W: {
          ml(t, e), lu(e);
          var X = e.child;
          if (X.flags & Fl) {
            var Ve = X.stateNode, ot = X.memoizedState, nt = ot !== null;
            if (Ve.isHidden = nt, nt) {
              var Yt = X.alternate !== null && X.alternate.memoizedState !== null;
              Yt || pk();
            }
          }
          if (u & xt) {
            try {
              L_(e);
            } catch (yt) {
              Ln(e, e.return, yt);
            }
            $T(e);
          }
          return;
        }
        case he: {
          var Ut = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & At
          ) {
            var F = Zr;
            Zr = F || Ut, ml(t, e), Zr = F;
          } else
            ml(t, e);
          if (lu(e), u & Fl) {
            var K = e.stateNode, j = e.memoizedState, fe = j !== null, Pe = e;
            if (K.isHidden = fe, fe && !Ut && (Pe.mode & At) !== ft) {
              qe = Pe;
              for (var Ae = Pe.child; Ae !== null; )
                qe = Ae, z_(Ae), Ae = Ae.sibling;
            }
            x_(Pe, fe);
          }
          return;
        }
        case Et: {
          ml(t, e), lu(e), u & xt && $T(e);
          return;
        }
        case at:
          return;
        default: {
          ml(t, e), lu(e);
          return;
        }
      }
    }
    function lu(e) {
      var t = e.flags;
      if (t & _n) {
        try {
          D_(e);
        } catch (a) {
          Ln(e, e.return, a);
        }
        e.flags &= ~_n;
      }
      t & $a && (e.flags &= ~$a);
    }
    function A_(e, t, a) {
      qf = a, Gf = t, qe = e, YT(e, t, a), qf = null, Gf = null;
    }
    function YT(e, t, a) {
      for (var i = (e.mode & At) !== ft; qe !== null; ) {
        var u = qe, s = u.child;
        if (u.tag === he && i) {
          var f = u.memoizedState !== null, v = f || Hm;
          if (v) {
            nE(e, t, a);
            continue;
          } else {
            var h = u.alternate, T = h !== null && h.memoizedState !== null, b = T || Zr, A = Hm, M = Zr;
            Hm = v, Zr = b, Zr && !M && (qe = u, U_(u));
            for (var P = s; P !== null; )
              qe = P, YT(
                P,
                // New root; bubble back up to here and stop.
                t,
                a
              ), P = P.sibling;
            qe = u, Hm = A, Zr = M, nE(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & zr) !== lt && s !== null ? (s.return = u, qe = s) : nE(e, t, a);
      }
    }
    function nE(e, t, a) {
      for (; qe !== null; ) {
        var i = qe;
        if ((i.flags & zr) !== lt) {
          var u = i.alternate;
          on(i);
          try {
            b_(t, u, i, a);
          } catch (f) {
            Ln(i, i.return, f);
          }
          In();
        }
        if (i === e) {
          qe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, qe = s;
          return;
        }
        qe = i.return;
      }
    }
    function z_(e) {
      for (; qe !== null; ) {
        var t = qe, a = t.child;
        switch (t.tag) {
          case Y:
          case Le:
          case st:
          case tt: {
            if (t.mode & pt)
              try {
                iu(), vl(br, t, t.return);
              } finally {
                au(t);
              }
            else
              vl(br, t, t.return);
            break;
          }
          case G: {
            Xf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && JS(t, t.return, i);
            break;
          }
          case ae: {
            Xf(t, t.return);
            break;
          }
          case he: {
            var u = t.memoizedState !== null;
            if (u) {
              WT(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, qe = a) : WT(e);
      }
    }
    function WT(e) {
      for (; qe !== null; ) {
        var t = qe;
        if (t === e) {
          qe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, qe = a;
          return;
        }
        qe = t.return;
      }
    }
    function U_(e) {
      for (; qe !== null; ) {
        var t = qe, a = t.child;
        if (t.tag === he) {
          var i = t.memoizedState !== null;
          if (i) {
            QT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, qe = a) : QT(e);
      }
    }
    function QT(e) {
      for (; qe !== null; ) {
        var t = qe;
        on(t);
        try {
          w_(t);
        } catch (i) {
          Ln(t, t.return, i);
        }
        if (In(), t === e) {
          qe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, qe = a;
          return;
        }
        qe = t.return;
      }
    }
    function F_(e, t, a, i) {
      qe = t, j_(t, e, a, i);
    }
    function j_(e, t, a, i) {
      for (; qe !== null; ) {
        var u = qe, s = u.child;
        (u.subtreeFlags & Ia) !== lt && s !== null ? (s.return = u, qe = s) : V_(e, t, a, i);
      }
    }
    function V_(e, t, a, i) {
      for (; qe !== null; ) {
        var u = qe;
        if ((u.flags & An) !== lt) {
          on(u);
          try {
            P_(t, u, a, i);
          } catch (f) {
            Ln(u, u.return, f);
          }
          In();
        }
        if (u === e) {
          qe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, qe = s;
          return;
        }
        qe = u.return;
      }
    }
    function P_(e, t, a, i) {
      switch (t.tag) {
        case Y:
        case Le:
        case tt: {
          if (t.mode & pt) {
            NS();
            try {
              rs(Xr | Rr, t);
            } finally {
              MS(t);
            }
          } else
            rs(Xr | Rr, t);
          break;
        }
      }
    }
    function H_(e) {
      qe = e, B_();
    }
    function B_() {
      for (; qe !== null; ) {
        var e = qe, t = e.child;
        if ((qe.flags & rn) !== lt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              qe = u, Y_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var v = f.sibling;
                    f.sibling = null, f = v;
                  } while (f !== null);
                }
              }
            }
            qe = e;
          }
        }
        (e.subtreeFlags & Ia) !== lt && t !== null ? (t.return = e, qe = t) : $_();
      }
    }
    function $_() {
      for (; qe !== null; ) {
        var e = qe;
        (e.flags & An) !== lt && (on(e), I_(e), In());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, qe = t;
          return;
        }
        qe = e.return;
      }
    }
    function I_(e) {
      switch (e.tag) {
        case Y:
        case Le:
        case tt: {
          e.mode & pt ? (NS(), vl(Xr | Rr, e, e.return), MS(e)) : vl(Xr | Rr, e, e.return);
          break;
        }
      }
    }
    function Y_(e, t) {
      for (; qe !== null; ) {
        var a = qe;
        on(a), Q_(a, t), In();
        var i = a.child;
        i !== null ? (i.return = a, qe = i) : W_(e);
      }
    }
    function W_(e) {
      for (; qe !== null; ) {
        var t = qe, a = t.sibling, i = t.return;
        if (VT(t), t === e) {
          qe = null;
          return;
        }
        if (a !== null) {
          a.return = i, qe = a;
          return;
        }
        qe = i;
      }
    }
    function Q_(e, t) {
      switch (e.tag) {
        case Y:
        case Le:
        case tt: {
          e.mode & pt ? (NS(), vl(Xr, e, t), MS(e)) : vl(Xr, e, t);
          break;
        }
      }
    }
    function q_(e) {
      switch (e.tag) {
        case Y:
        case Le:
        case tt: {
          try {
            rs(br | Rr, e);
          } catch (a) {
            Ln(e, e.return, a);
          }
          break;
        }
        case G: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Ln(e, e.return, a);
          }
          break;
        }
      }
    }
    function G_(e) {
      switch (e.tag) {
        case Y:
        case Le:
        case tt: {
          try {
            rs(Xr | Rr, e);
          } catch (t) {
            Ln(e, e.return, t);
          }
          break;
        }
      }
    }
    function X_(e) {
      switch (e.tag) {
        case Y:
        case Le:
        case tt: {
          try {
            vl(br | Rr, e, e.return);
          } catch (a) {
            Ln(e, e.return, a);
          }
          break;
        }
        case G: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && JS(e, e.return, t);
          break;
        }
      }
    }
    function K_(e) {
      switch (e.tag) {
        case Y:
        case Le:
        case tt:
          try {
            vl(Xr | Rr, e, e.return);
          } catch (t) {
            Ln(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Zp = Symbol.for;
      Zp("selector.component"), Zp("selector.has_pseudo_class"), Zp("selector.role"), Zp("selector.test_id"), Zp("selector.text");
    }
    var Z_ = [];
    function J_() {
      Z_.forEach(function(e) {
        return e();
      });
    }
    var ek = m.ReactCurrentActQueue;
    function tk(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function qT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && ek.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var nk = Math.ceil, rE = m.ReactCurrentDispatcher, aE = m.ReactCurrentOwner, ea = m.ReactCurrentBatchConfig, yl = m.ReactCurrentActQueue, _r = (
      /*             */
      0
    ), GT = (
      /*               */
      1
    ), ta = (
      /*                */
      2
    ), ji = (
      /*                */
      4
    ), Xu = 0, Jp = 1, sc = 2, $m = 3, ev = 4, XT = 5, iE = 6, It = _r, La = null, Kn = null, kr = J, uu = J, lE = qo(J), Dr = Xu, tv = null, Im = J, nv = J, Ym = J, rv = null, ti = null, uE = 0, KT = 500, ZT = 1 / 0, rk = 500, Ku = null;
    function av() {
      ZT = Pn() + rk;
    }
    function JT() {
      return ZT;
    }
    var Wm = !1, oE = null, Kf = null, cc = !1, is = null, iv = J, sE = [], cE = null, ak = 50, lv = 0, fE = null, dE = !1, Qm = !1, ik = 50, Zf = 0, qm = null, uv = Tn, Gm = J, eR = !1;
    function Xm() {
      return La;
    }
    function Ma() {
      return (It & (ta | ji)) !== _r ? Pn() : (uv !== Tn || (uv = Pn()), uv);
    }
    function ls(e) {
      var t = e.mode;
      if ((t & At) === ft)
        return vt;
      if ((It & ta) !== _r && kr !== J)
        return ir(kr);
      var a = tx() !== ex;
      if (a) {
        if (ea.transition !== null) {
          var i = ea.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Gm === $t && (Gm = Qd()), Gm;
      }
      var u = qa();
      if (u !== $t)
        return u;
      var s = Vb();
      return s;
    }
    function lk(e) {
      var t = e.mode;
      return (t & At) === ft ? vt : Ny();
    }
    function Or(e, t, a, i) {
      Ok(), eR && S("useInsertionEffect must not schedule updates."), dE && (Qm = !0), Nu(e, a, i), (It & ta) !== J && e === La ? Nk(t) : (Cr && Zd(e, t, a), Ak(t), e === La && ((It & ta) === _r && (nv = _t(nv, a)), Dr === ev && us(e, kr)), ni(e, i), a === vt && It === _r && (t.mode & At) === ft && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !yl.isBatchingLegacy && (av(), J0()));
    }
    function uk(e, t, a) {
      var i = e.current;
      i.lanes = t, Nu(e, t, a), ni(e, a);
    }
    function ok(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (It & ta) !== _r
      );
    }
    function ni(e, t) {
      var a = e.callbackNode;
      Oy(e, t);
      var i = zs(e, e === La ? kr : J);
      if (i === J) {
        a !== null && mR(a), e.callbackNode = null, e.callbackPriority = $t;
        return;
      }
      var u = er(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(yl.current !== null && a !== SE)) {
        a == null && s !== vt && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && mR(a);
      var f;
      if (u === vt)
        e.tag === Go ? (yl.isBatchingLegacy !== null && (yl.didScheduleLegacyUpdate = !0), Fw(rR.bind(null, e))) : Z0(rR.bind(null, e)), yl.current !== null ? yl.current.push(Xo) : Hb(function() {
          (It & (ta | ji)) === _r && Xo();
        }), f = null;
      else {
        var v;
        switch (Ps(i)) {
          case Ur:
            v = zc;
            break;
          case Tr:
            v = _a;
            break;
          case nl:
            v = ki;
            break;
          case js:
            v = Vl;
            break;
          default:
            v = ki;
            break;
        }
        f = EE(v, tR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function tR(e, t) {
      if (Ox(), uv = Tn, Gm = J, (It & (ta | ji)) !== _r)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ju();
      if (i && e.callbackNode !== a)
        return null;
      var u = zs(e, e === La ? kr : J);
      if (u === J)
        return null;
      var s = !Fs(e, u) && !oh(e, u) && !t, f = s ? gk(e, u) : Zm(e, u);
      if (f !== Xu) {
        if (f === sc) {
          var v = Yd(e);
          v !== J && (u = v, f = pE(e, v));
        }
        if (f === Jp) {
          var h = tv;
          throw fc(e, J), us(e, u), ni(e, Pn()), h;
        }
        if (f === iE)
          us(e, u);
        else {
          var T = !Fs(e, u), b = e.current.alternate;
          if (T && !ck(b)) {
            if (f = Zm(e, u), f === sc) {
              var A = Yd(e);
              A !== J && (u = A, f = pE(e, A));
            }
            if (f === Jp) {
              var M = tv;
              throw fc(e, J), us(e, u), ni(e, Pn()), M;
            }
          }
          e.finishedWork = b, e.finishedLanes = u, sk(e, f, u);
        }
      }
      return ni(e, Pn()), e.callbackNode === a ? tR.bind(null, e) : null;
    }
    function pE(e, t) {
      var a = rv;
      if (ur(e)) {
        var i = fc(e, t);
        i.flags |= Yn, Ow(e.containerInfo);
      }
      var u = Zm(e, t);
      if (u !== sc) {
        var s = ti;
        ti = a, s !== null && nR(s);
      }
      return u;
    }
    function nR(e) {
      ti === null ? ti = e : ti.push.apply(ti, e);
    }
    function sk(e, t, a) {
      switch (t) {
        case Xu:
        case Jp:
          throw new Error("Root did not complete. This is a bug in React.");
        case sc: {
          dc(e, ti, Ku);
          break;
        }
        case $m: {
          if (us(e, a), lf(a) && // do not delay if we're inside an act() scope
          !yR()) {
            var i = uE + KT - Pn();
            if (i > 10) {
              var u = zs(e, J);
              if (u !== J)
                break;
              var s = e.suspendedLanes;
              if (!Mu(s, a)) {
                Ma(), Xd(e, s);
                break;
              }
              e.timeoutHandle = cg(dc.bind(null, e, ti, Ku), i);
              break;
            }
          }
          dc(e, ti, Ku);
          break;
        }
        case ev: {
          if (us(e, a), uh(a))
            break;
          if (!yR()) {
            var f = lh(e, a), v = f, h = Pn() - v, T = Dk(h) - h;
            if (T > 10) {
              e.timeoutHandle = cg(dc.bind(null, e, ti, Ku), T);
              break;
            }
          }
          dc(e, ti, Ku);
          break;
        }
        case XT: {
          dc(e, ti, Ku);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function ck(e) {
      for (var t = e; ; ) {
        if (t.flags & ks) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, v = s.value;
                try {
                  if (!Qe(f(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & ks && h !== null) {
          h.return = t, t = h;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function us(e, t) {
      t = Lo(t, Ym), t = Lo(t, nv), Gd(e, t);
    }
    function rR(e) {
      if (Lx(), (It & (ta | ji)) !== _r)
        throw new Error("Should not already be working.");
      Ju();
      var t = zs(e, J);
      if (!ha(t, vt))
        return ni(e, Pn()), null;
      var a = Zm(e, t);
      if (e.tag !== Go && a === sc) {
        var i = Yd(e);
        i !== J && (t = i, a = pE(e, i));
      }
      if (a === Jp) {
        var u = tv;
        throw fc(e, J), us(e, t), ni(e, Pn()), u;
      }
      if (a === iE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, dc(e, ti, Ku), ni(e, Pn()), null;
    }
    function fk(e, t) {
      t !== J && (Mo(e, _t(t, vt)), ni(e, Pn()), (It & (ta | ji)) === _r && (av(), Xo()));
    }
    function vE(e, t) {
      var a = It;
      It |= GT;
      try {
        return e(t);
      } finally {
        It = a, It === _r && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !yl.isBatchingLegacy && (av(), J0());
      }
    }
    function dk(e, t, a, i, u) {
      var s = qa(), f = ea.transition;
      try {
        return ea.transition = null, lr(Ur), e(t, a, i, u);
      } finally {
        lr(s), ea.transition = f, It === _r && av();
      }
    }
    function Zu(e) {
      is !== null && is.tag === Go && (It & (ta | ji)) === _r && Ju();
      var t = It;
      It |= GT;
      var a = ea.transition, i = qa();
      try {
        return ea.transition = null, lr(Ur), e ? e() : void 0;
      } finally {
        lr(i), ea.transition = a, It = t, (It & (ta | ji)) === _r && Xo();
      }
    }
    function aR() {
      return (It & (ta | ji)) !== _r;
    }
    function Km(e, t) {
      ya(lE, uu, e), uu = _t(uu, t);
    }
    function hE(e) {
      uu = lE.current, ma(lE, e);
    }
    function fc(e, t) {
      e.finishedWork = null, e.finishedLanes = J;
      var a = e.timeoutHandle;
      if (a !== fg && (e.timeoutHandle = fg, Pb(a)), Kn !== null)
        for (var i = Kn.return; i !== null; ) {
          var u = i.alternate;
          NT(u, i), i = i.return;
        }
      La = e;
      var s = pc(e.current, null);
      return Kn = s, kr = uu = t, Dr = Xu, tv = null, Im = J, nv = J, Ym = J, rv = null, ti = null, ix(), sl.discardPendingWarnings(), s;
    }
    function iR(e, t) {
      do {
        var a = Kn;
        try {
          if (im(), zC(), In(), aE.current = null, a === null || a.return === null) {
            Dr = Jp, tv = t, Kn = null;
            return;
          }
          if (Ce && a.mode & pt && Fm(a, !0), ze)
            if (Ru(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              rh(a, i, kr);
            } else
              Pc(a, t, kr);
          Ux(e, a.return, a, t, kr), sR(a);
        } catch (u) {
          t = u, Kn === a && a !== null ? (a = a.return, Kn = a) : a = Kn;
          continue;
        }
        return;
      } while (!0);
    }
    function lR() {
      var e = rE.current;
      return rE.current = Mm, e === null ? Mm : e;
    }
    function uR(e) {
      rE.current = e;
    }
    function pk() {
      uE = Pn();
    }
    function ov(e) {
      Im = _t(e, Im);
    }
    function vk() {
      Dr === Xu && (Dr = $m);
    }
    function mE() {
      (Dr === Xu || Dr === $m || Dr === sc) && (Dr = ev), La !== null && (Us(Im) || Us(nv)) && us(La, kr);
    }
    function hk(e) {
      Dr !== ev && (Dr = sc), rv === null ? rv = [e] : rv.push(e);
    }
    function mk() {
      return Dr === Xu;
    }
    function Zm(e, t) {
      var a = It;
      It |= ta;
      var i = lR();
      if (La !== e || kr !== t) {
        if (Cr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (sv(e, kr), u.clear()), sf(e, t);
        }
        Ku = Jd(), fc(e, t);
      }
      vi(t);
      do
        try {
          yk();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      if (im(), It = a, uR(i), Kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return xo(), La = null, kr = J, Dr;
    }
    function yk() {
      for (; Kn !== null; )
        oR(Kn);
    }
    function gk(e, t) {
      var a = It;
      It |= ta;
      var i = lR();
      if (La !== e || kr !== t) {
        if (Cr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (sv(e, kr), u.clear()), sf(e, t);
        }
        Ku = Jd(), av(), fc(e, t);
      }
      vi(t);
      do
        try {
          Sk();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      return im(), uR(i), It = a, Kn !== null ? (Ls(), Xu) : (xo(), La = null, kr = J, Dr);
    }
    function Sk() {
      for (; Kn !== null && !Ac(); )
        oR(Kn);
    }
    function oR(e) {
      var t = e.alternate;
      on(e);
      var a;
      (e.mode & pt) !== ft ? (LS(e), a = yE(t, e, uu), Fm(e, !0)) : a = yE(t, e, uu), In(), e.memoizedProps = e.pendingProps, a === null ? sR(e) : Kn = a, aE.current = null;
    }
    function sR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ba) === lt) {
          on(t);
          var u = void 0;
          if ((t.mode & pt) === ft ? u = MT(a, t, uu) : (LS(t), u = MT(a, t, uu), Fm(t, !1)), In(), u !== null) {
            Kn = u;
            return;
          }
        } else {
          var s = v_(a, t);
          if (s !== null) {
            s.flags &= qv, Kn = s;
            return;
          }
          if ((t.mode & pt) !== ft) {
            Fm(t, !1);
            for (var f = t.actualDuration, v = t.child; v !== null; )
              f += v.actualDuration, v = v.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ba, i.subtreeFlags = lt, i.deletions = null;
          else {
            Dr = iE, Kn = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          Kn = h;
          return;
        }
        t = i, Kn = t;
      } while (t !== null);
      Dr === Xu && (Dr = XT);
    }
    function dc(e, t, a) {
      var i = qa(), u = ea.transition;
      try {
        ea.transition = null, lr(Ur), Ek(e, t, a, i);
      } finally {
        ea.transition = u, lr(i);
      }
      return null;
    }
    function Ek(e, t, a, i) {
      do
        Ju();
      while (is !== null);
      if (Lk(), (It & (ta | ji)) !== _r)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Fc(s), u === null)
        return Pd(), null;
      if (s === J && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = J, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = $t;
      var f = _t(u.lanes, u.childLanes);
      Kd(e, f), e === La && (La = null, Kn = null, kr = J), ((u.subtreeFlags & Ia) !== lt || (u.flags & Ia) !== lt) && (cc || (cc = !0, cE = a, EE(ki, function() {
        return Ju(), null;
      })));
      var v = (u.subtreeFlags & (Ro | fa | zr | Ia)) !== lt, h = (u.flags & (Ro | fa | zr | Ia)) !== lt;
      if (v || h) {
        var T = ea.transition;
        ea.transition = null;
        var b = qa();
        lr(Ur);
        var A = It;
        It |= ji, aE.current = null, S_(e, u), lT(), N_(e, u, s), Nb(e.containerInfo), e.current = u, ah(s), A_(u, e, s), wo(), Kv(), It = A, lr(b), ea.transition = T;
      } else
        e.current = u, lT();
      var M = cc;
      if (cc ? (cc = !1, is = e, iv = s) : (Zf = 0, qm = null), f = e.pendingLanes, f === J && (Kf = null), M || pR(e.current, !1), Ji(u.stateNode, i), Cr && e.memoizedUpdaters.clear(), J_(), ni(e, Pn()), t !== null)
        for (var P = e.onRecoverableError, B = 0; B < t.length; B++) {
          var X = t[B], Ve = X.stack, ot = X.digest;
          P(X.value, {
            componentStack: Ve,
            digest: ot
          });
        }
      if (Wm) {
        Wm = !1;
        var nt = oE;
        throw oE = null, nt;
      }
      return ha(iv, vt) && e.tag !== Go && Ju(), f = e.pendingLanes, ha(f, vt) ? (Dx(), e === fE ? lv++ : (lv = 0, fE = e)) : lv = 0, Xo(), Pd(), null;
    }
    function Ju() {
      if (is !== null) {
        var e = Ps(iv), t = zy(nl, e), a = ea.transition, i = qa();
        try {
          return ea.transition = null, lr(t), Tk();
        } finally {
          lr(i), ea.transition = a;
        }
      }
      return !1;
    }
    function Ck(e) {
      sE.push(e), cc || (cc = !0, EE(ki, function() {
        return Ju(), null;
      }));
    }
    function Tk() {
      if (is === null)
        return !1;
      var e = cE;
      cE = null;
      var t = is, a = iv;
      if (is = null, iv = J, (It & (ta | ji)) !== _r)
        throw new Error("Cannot flush passive effects while already rendering.");
      dE = !0, Qm = !1, ih(a);
      var i = It;
      It |= ji, H_(t.current), F_(t, t.current, a, e);
      {
        var u = sE;
        sE = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          R_(t, f);
        }
      }
      Os(), pR(t.current, !0), It = i, Xo(), Qm ? t === qm ? Zf++ : (Zf = 0, qm = t) : Zf = 0, dE = !1, Qm = !1, Hl(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function cR(e) {
      return Kf !== null && Kf.has(e);
    }
    function Rk(e) {
      Kf === null ? Kf = /* @__PURE__ */ new Set([e]) : Kf.add(e);
    }
    function bk(e) {
      Wm || (Wm = !0, oE = e);
    }
    var wk = bk;
    function fR(e, t, a) {
      var i = uc(a, t), u = oT(e, i, vt), s = Zo(e, u, vt), f = Ma();
      s !== null && (Nu(s, vt, f), ni(s, f));
    }
    function Ln(e, t, a) {
      if (m_(a), cv(!1), e.tag === Q) {
        fR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Q) {
          fR(i, e, a);
          return;
        } else if (i.tag === G) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !cR(s)) {
            var f = uc(a, e), v = FS(i, f, vt), h = Zo(i, v, vt), T = Ma();
            h !== null && (Nu(h, vt, T), ni(h, T));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function xk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ma();
      Xd(e, a), zk(e), La === e && Mu(kr, a) && (Dr === ev || Dr === $m && lf(kr) && Pn() - uE < KT ? fc(e, J) : Ym = _t(Ym, a)), ni(e, u);
    }
    function dR(e, t) {
      t === $t && (t = lk(e));
      var a = Ma(), i = Ja(e, t);
      i !== null && (Nu(i, t, a), ni(i, a));
    }
    function _k(e) {
      var t = e.memoizedState, a = $t;
      t !== null && (a = t.retryLane), dR(e, a);
    }
    function kk(e, t) {
      var a = $t, i;
      switch (e.tag) {
        case W:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Et:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), dR(e, a);
    }
    function Dk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : nk(e / 1960) * 1960;
    }
    function Ok() {
      if (lv > ak)
        throw lv = 0, fE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Zf > ik && (Zf = 0, qm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Lk() {
      sl.flushLegacyContextWarning(), sl.flushPendingUnsafeLifecycleWarnings();
    }
    function pR(e, t) {
      on(e), Jm(e, ca, X_), t && Jm(e, Tu, K_), Jm(e, ca, q_), t && Jm(e, Tu, G_), In();
    }
    function Jm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== lt ? i = i.child : ((i.flags & t) !== lt && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var ey = null;
    function vR(e) {
      {
        if ((It & ta) !== _r || !(e.mode & At))
          return;
        var t = e.tag;
        if (t !== pe && t !== Q && t !== G && t !== Y && t !== Le && t !== st && t !== tt)
          return;
        var a = Ct(e) || "ReactComponent";
        if (ey !== null) {
          if (ey.has(a))
            return;
          ey.add(a);
        } else
          ey = /* @__PURE__ */ new Set([a]);
        var i = Vn;
        try {
          on(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? on(e) : In();
        }
      }
    }
    var yE;
    {
      var Mk = null;
      yE = function(e, t, a) {
        var i = TR(Mk, t);
        try {
          return _T(e, t, a);
        } catch (s) {
          if (Yw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (im(), zC(), NT(e, t), TR(t, i), t.mode & pt && LS(t), Cu(null, _T, null, e, t, a), ky()) {
            var u = Dd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var hR = !1, gE;
    gE = /* @__PURE__ */ new Set();
    function Nk(e) {
      if (ia && !xx())
        switch (e.tag) {
          case Y:
          case Le:
          case tt: {
            var t = Kn && Ct(Kn) || "Unknown", a = t;
            if (!gE.has(a)) {
              gE.add(a);
              var i = Ct(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case G: {
            hR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hR = !0);
            break;
          }
        }
    }
    function sv(e, t) {
      if (Cr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Zd(e, i, t);
        });
      }
    }
    var SE = {};
    function EE(e, t) {
      {
        var a = yl.current;
        return a !== null ? (a.push(t), SE) : Nc(e, t);
      }
    }
    function mR(e) {
      if (e !== SE)
        return Xv(e);
    }
    function yR() {
      return yl.current !== null;
    }
    function Ak(e) {
      {
        if (e.mode & At) {
          if (!qT())
            return;
        } else if (!tk() || It !== _r || e.tag !== Y && e.tag !== Le && e.tag !== tt)
          return;
        if (yl.current === null) {
          var t = Vn;
          try {
            on(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ct(e));
          } finally {
            t ? on(e) : In();
          }
        }
      }
    }
    function zk(e) {
      e.tag !== Go && qT() && yl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function cv(e) {
      eR = e;
    }
    var Vi = null, Jf = null, Uk = function(e) {
      Vi = e;
    };
    function ed(e) {
      {
        if (Vi === null)
          return e;
        var t = Vi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function CE(e) {
      return ed(e);
    }
    function TE(e) {
      {
        if (Vi === null)
          return e;
        var t = Vi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = ed(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: je,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function gR(e, t) {
      {
        if (Vi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case G: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Y: {
            (typeof i == "function" || s === ut) && (u = !0);
            break;
          }
          case Le: {
            (s === je || s === ut) && (u = !0);
            break;
          }
          case st:
          case tt: {
            (s === wt || s === ut) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Vi(a);
          if (f !== void 0 && f === Vi(i))
            return !0;
        }
        return !1;
      }
    }
    function SR(e) {
      {
        if (Vi === null || typeof WeakSet != "function")
          return;
        Jf === null && (Jf = /* @__PURE__ */ new WeakSet()), Jf.add(e);
      }
    }
    var Fk = function(e, t) {
      {
        if (Vi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ju(), Zu(function() {
          RE(e.current, i, a);
        });
      }
    }, jk = function(e, t) {
      {
        if (e.context !== mi)
          return;
        Ju(), Zu(function() {
          fv(t, e, null, null);
        });
      }
    };
    function RE(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, v = e.type, h = null;
        switch (f) {
          case Y:
          case tt:
          case G:
            h = v;
            break;
          case Le:
            h = v.render;
            break;
        }
        if (Vi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, b = !1;
        if (h !== null) {
          var A = Vi(h);
          A !== void 0 && (a.has(A) ? b = !0 : t.has(A) && (f === G ? b = !0 : T = !0));
        }
        if (Jf !== null && (Jf.has(e) || i !== null && Jf.has(i)) && (b = !0), b && (e._debugNeedsRemount = !0), b || T) {
          var M = Ja(e, vt);
          M !== null && Or(M, e, vt, Tn);
        }
        u !== null && !b && RE(u, t, a), s !== null && RE(s, t, a);
      }
    }
    var Vk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return bE(e.current, i, a), a;
      }
    };
    function bE(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, v = null;
        switch (s) {
          case Y:
          case tt:
          case G:
            v = f;
            break;
          case Le:
            v = f.render;
            break;
        }
        var h = !1;
        v !== null && t.has(v) && (h = !0), h ? Pk(e, a) : i !== null && bE(i, t, a), u !== null && bE(u, t, a);
      }
    }
    function Pk(e, t) {
      {
        var a = Hk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ae:
              t.add(i.stateNode);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
            case Q:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Hk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ae)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var wE;
    {
      wE = !1;
      try {
        var ER = Object.preventExtensions({});
      } catch {
        wE = !0;
      }
    }
    function Bk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = lt, this.subtreeFlags = lt, this.deletions = null, this.lanes = J, this.childLanes = J, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !wE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var yi = function(e, t, a, i) {
      return new Bk(e, t, a, i);
    };
    function xE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function $k(e) {
      return typeof e == "function" && !xE(e) && e.defaultProps === void 0;
    }
    function Ik(e) {
      if (typeof e == "function")
        return xE(e) ? G : Y;
      if (e != null) {
        var t = e.$$typeof;
        if (t === je)
          return Le;
        if (t === wt)
          return st;
      }
      return pe;
    }
    function pc(e, t) {
      var a = e.alternate;
      a === null ? (a = yi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = lt, a.subtreeFlags = lt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Er, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case pe:
        case Y:
        case tt:
          a.type = ed(e.type);
          break;
        case G:
          a.type = CE(e.type);
          break;
        case Le:
          a.type = TE(e.type);
          break;
      }
      return a;
    }
    function Yk(e, t) {
      e.flags &= Er | _n;
      var a = e.alternate;
      if (a === null)
        e.childLanes = J, e.lanes = t, e.child = null, e.subtreeFlags = lt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = lt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Wk(e, t, a) {
      var i;
      return e === Kh ? (i = At, t === !0 && (i |= Hn, i |= Wa)) : i = ft, Cr && (i |= pt), yi(Q, null, null, i);
    }
    function _E(e, t, a, i, u, s) {
      var f = pe, v = e;
      if (typeof e == "function")
        xE(e) ? (f = G, v = CE(v)) : v = ed(v);
      else if (typeof e == "string")
        f = ae;
      else
        e:
          switch (e) {
            case Ra:
              return os(a.children, u, s, t);
            case Ci:
              f = et, u |= Hn, (u & At) !== ft && (u |= Wa);
              break;
            case k:
              return Qk(a, u, s, t);
            case bt:
              return qk(a, u, s, t);
            case Bt:
              return Gk(a, u, s, t);
            case bn:
              return CR(a, u, s, t);
            case Sr:
            case Zn:
            case Ti:
            case ro:
            case Rn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ie:
                    f = Re;
                    break e;
                  case be:
                    f = Dt;
                    break e;
                  case je:
                    f = Le, v = TE(v);
                    break e;
                  case wt:
                    f = st;
                    break e;
                  case ut:
                    f = Kt, v = null;
                    break e;
                }
              var h = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var T = i ? Ct(i) : null;
                T && (h += `

Check the render method of \`` + T + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
            }
          }
      var b = yi(f, a, t, u);
      return b.elementType = e, b.type = v, b.lanes = s, b._debugOwner = i, b;
    }
    function kE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, v = _E(u, s, f, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function os(e, t, a, i) {
      var u = yi(Ke, e, i, t);
      return u.lanes = a, u;
    }
    function Qk(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = yi(Ie, e, i, t | pt);
      return u.elementType = k, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function qk(e, t, a, i) {
      var u = yi(W, e, i, t);
      return u.elementType = bt, u.lanes = a, u;
    }
    function Gk(e, t, a, i) {
      var u = yi(Et, e, i, t);
      return u.elementType = Bt, u.lanes = a, u;
    }
    function CR(e, t, a, i) {
      var u = yi(he, e, i, t);
      u.elementType = bn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function DE(e, t, a) {
      var i = yi(Oe, e, null, t);
      return i.lanes = a, i;
    }
    function Xk() {
      var e = yi(ae, null, null, ft);
      return e.elementType = "DELETED", e;
    }
    function Kk(e) {
      var t = yi(Ot, null, null, ft);
      return t.stateNode = e, t;
    }
    function OE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = yi(ee, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function TR(e, t) {
      return e === null && (e = yi(pe, null, null, ft)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Zk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = fg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = $t, this.eventTimes = of(J), this.expirationTimes = of(Tn), this.pendingLanes = J, this.suspendedLanes = J, this.pingedLanes = J, this.expiredLanes = J, this.mutableReadLanes = J, this.finishedLanes = J, this.entangledLanes = J, this.entanglements = of(J), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Dn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Go:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function RR(e, t, a, i, u, s, f, v, h, T) {
      var b = new Zk(e, t, a, v, h), A = Wk(t, s);
      b.current = A, A.stateNode = b;
      {
        var M = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        A.memoizedState = M;
      }
      return jg(A), b;
    }
    var LE = "18.2.0";
    function Jk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Me(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: $r,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var ME, NE;
    ME = !1, NE = {};
    function bR(e) {
      if (!e)
        return mi;
      var t = Ha(e), a = Uw(t);
      if (t.tag === G) {
        var i = t.type;
        if (eu(i))
          return X0(t, i, a);
      }
      return a;
    }
    function eD(e, t) {
      {
        var a = Ha(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Ya(a);
        if (u === null)
          return null;
        if (u.mode & Hn) {
          var s = Ct(a) || "Component";
          if (!NE[s]) {
            NE[s] = !0;
            var f = Vn;
            try {
              on(u), a.mode & Hn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? on(f) : In();
            }
          }
        }
        return u.stateNode;
      }
    }
    function wR(e, t, a, i, u, s, f, v) {
      var h = !1, T = null;
      return RR(e, t, h, T, a, i, u, s, f);
    }
    function xR(e, t, a, i, u, s, f, v, h, T) {
      var b = !0, A = RR(a, i, b, e, u, s, f, v, h);
      A.context = bR(null);
      var M = A.current, P = Ma(), B = ls(M), X = qu(P, B);
      return X.callback = t ?? null, Zo(M, X, B), uk(A, B, P), A;
    }
    function fv(e, t, a, i) {
      Zv(t, e);
      var u = t.current, s = Ma(), f = ls(u);
      bu(f);
      var v = bR(a);
      t.context === null ? t.context = v : t.pendingContext = v, ia && Vn !== null && !ME && (ME = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ct(Vn) || "Unknown"));
      var h = qu(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var T = Zo(u, h, f);
      return T !== null && (Or(T, u, f, s), cm(T, u, f)), f;
    }
    function ty(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ae:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function tD(e) {
      switch (e.tag) {
        case Q: {
          var t = e.stateNode;
          if (ur(t)) {
            var a = Ly(t);
            fk(t, a);
          }
          break;
        }
        case W: {
          Zu(function() {
            var u = Ja(e, vt);
            if (u !== null) {
              var s = Ma();
              Or(u, e, vt, s);
            }
          });
          var i = vt;
          AE(e, i);
          break;
        }
      }
    }
    function _R(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = ch(a.retryLane, t));
    }
    function AE(e, t) {
      _R(e, t);
      var a = e.alternate;
      a && _R(a, t);
    }
    function nD(e) {
      if (e.tag === W) {
        var t = _o, a = Ja(e, t);
        if (a !== null) {
          var i = Ma();
          Or(a, e, t, i);
        }
        AE(e, t);
      }
    }
    function rD(e) {
      if (e.tag === W) {
        var t = ls(e), a = Ja(e, t);
        if (a !== null) {
          var i = Ma();
          Or(a, e, t, i);
        }
        AE(e, t);
      }
    }
    function kR(e) {
      var t = Gv(e);
      return t === null ? null : t.stateNode;
    }
    var DR = function(e) {
      return null;
    };
    function aD(e) {
      return DR(e);
    }
    var OR = function(e) {
      return !1;
    };
    function iD(e) {
      return OR(e);
    }
    var LR = null, MR = null, NR = null, AR = null, zR = null, UR = null, FR = null, jR = null, VR = null;
    {
      var PR = function(e, t, a) {
        var i = t[a], u = jt(e) ? e.slice() : Mt({}, e);
        return a + 1 === t.length ? (jt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = PR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return PR(e, t, 0);
      }, BR = function(e, t, a, i) {
        var u = t[i], s = jt(e) ? e.slice() : Mt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], jt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = BR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $R = function(e, t, a) {
        if (t.length !== a.length) {
          x("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              x("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return BR(e, t, a, 0);
      }, IR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = jt(e) ? e.slice() : Mt({}, e);
        return s[u] = IR(e[u], t, a + 1, i), s;
      }, YR = function(e, t, a) {
        return IR(e, t, 0, a);
      }, zE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      LR = function(e, t, a, i) {
        var u = zE(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Mt({}, e.memoizedProps);
          var f = Ja(e, vt);
          f !== null && Or(f, e, vt, Tn);
        }
      }, MR = function(e, t, a) {
        var i = zE(e, t);
        if (i !== null) {
          var u = HR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Mt({}, e.memoizedProps);
          var s = Ja(e, vt);
          s !== null && Or(s, e, vt, Tn);
        }
      }, NR = function(e, t, a, i) {
        var u = zE(e, t);
        if (u !== null) {
          var s = $R(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Mt({}, e.memoizedProps);
          var f = Ja(e, vt);
          f !== null && Or(f, e, vt, Tn);
        }
      }, AR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ja(e, vt);
        i !== null && Or(i, e, vt, Tn);
      }, zR = function(e, t) {
        e.pendingProps = HR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ja(e, vt);
        a !== null && Or(a, e, vt, Tn);
      }, UR = function(e, t, a) {
        e.pendingProps = $R(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ja(e, vt);
        i !== null && Or(i, e, vt, Tn);
      }, FR = function(e) {
        var t = Ja(e, vt);
        t !== null && Or(t, e, vt, Tn);
      }, jR = function(e) {
        DR = e;
      }, VR = function(e) {
        OR = e;
      };
    }
    function lD(e) {
      var t = Ya(e);
      return t === null ? null : t.stateNode;
    }
    function uD(e) {
      return null;
    }
    function oD() {
      return Vn;
    }
    function sD(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return jd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: LR,
        overrideHookStateDeletePath: MR,
        overrideHookStateRenamePath: NR,
        overrideProps: AR,
        overridePropsDeletePath: zR,
        overridePropsRenamePath: UR,
        setErrorHandler: jR,
        setSuspenseHandler: VR,
        scheduleUpdate: FR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: lD,
        findFiberByHostInstance: t || uD,
        // React Refresh
        findHostInstancesForRefresh: Vk,
        scheduleRefresh: Fk,
        scheduleRoot: jk,
        setRefreshHandler: Uk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: oD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: LE
      });
    }
    var WR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function UE(e) {
      this._internalRoot = e;
    }
    ny.prototype.render = UE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ry(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Jn) {
          var i = kR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      fv(e, t, null, null);
    }, ny.prototype.unmount = UE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        aR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Zu(function() {
          fv(null, e, null, null);
        }), Y0(t);
      }
    };
    function cD(e, t) {
      if (!ry(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      QR(e);
      var a = !1, i = !1, u = "", s = WR;
      t != null && (t.hydrate ? x("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ei && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = wR(e, Kh, null, a, i, u, s);
      Ih(f.current, e);
      var v = e.nodeType === Jn ? e.parentNode : e;
      return Sp(v), new UE(f);
    }
    function ny(e) {
      this._internalRoot = e;
    }
    function fD(e) {
      e && gh(e);
    }
    ny.prototype.unstable_scheduleHydration = fD;
    function dD(e, t, a) {
      if (!ry(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      QR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", h = WR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var T = xR(t, null, e, Kh, i, s, f, v, h);
      if (Ih(T.current, e), Sp(e), u)
        for (var b = 0; b < u.length; b++) {
          var A = u[b];
          Ex(T, A);
        }
      return new ny(T);
    }
    function ry(e) {
      return !!(e && (e.nodeType === ua || e.nodeType === fi || e.nodeType === hu || !re));
    }
    function dv(e) {
      return !!(e && (e.nodeType === ua || e.nodeType === fi || e.nodeType === hu || e.nodeType === Jn && e.nodeValue === " react-mount-point-unstable "));
    }
    function QR(e) {
      e.nodeType === ua && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Op(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var pD = m.ReactCurrentOwner, qR;
    qR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Jn) {
        var t = kR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = FE(e), u = !!(i && Qo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ua && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function FE(e) {
      return e ? e.nodeType === fi ? e.documentElement : e.firstChild : null;
    }
    function GR() {
    }
    function vD(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var M = ty(f);
            s.call(M);
          };
        }
        var f = xR(
          t,
          i,
          e,
          Go,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          GR
        );
        e._reactRootContainer = f, Ih(f.current, e);
        var v = e.nodeType === Jn ? e.parentNode : e;
        return Sp(v), Zu(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var T = i;
          i = function() {
            var M = ty(b);
            T.call(M);
          };
        }
        var b = wR(
          e,
          Go,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          GR
        );
        e._reactRootContainer = b, Ih(b.current, e);
        var A = e.nodeType === Jn ? e.parentNode : e;
        return Sp(A), Zu(function() {
          fv(t, b, a, i);
        }), b;
      }
    }
    function hD(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ay(e, t, a, i, u) {
      qR(a), hD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = vD(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var v = u;
          u = function() {
            var h = ty(f);
            v.call(h);
          };
        }
        fv(t, f, e, u);
      }
      return ty(f);
    }
    function mD(e) {
      {
        var t = pD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ua ? e : eD(e, "findDOMNode");
    }
    function yD(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !dv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ay(null, e, t, !0, a);
    }
    function gD(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !dv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ay(null, e, t, !1, a);
    }
    function SD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !dv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_s(e))
        throw new Error("parentComponent must be a valid React Component");
      return ay(e, t, a, !1, i);
    }
    function ED(e) {
      if (!dv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Op(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = FE(e), i = a && !Qo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Zu(function() {
          ay(null, null, e, !1, function() {
            e._reactRootContainer = null, Y0(e);
          });
        }), !0;
      } else {
        {
          var u = FE(e), s = !!(u && Qo(u)), f = e.nodeType === ua && dv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ye(tD), dh(nD), Bs(rD), tp(qa), vh(Vs), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Wv(Rb), kc(vE, dk, Zu);
    function CD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ry(t))
        throw new Error("Target container is not a DOM element.");
      return Jk(e, t, null, a);
    }
    function TD(e, t, a, i) {
      return SD(e, t, a, i);
    }
    var jE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Qo, Lf, Yh, _c, bs, vE]
    };
    function RD(e, t) {
      return jE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), cD(e, t);
    }
    function bD(e, t, a) {
      return jE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), dD(e, t, a);
    }
    function wD(e) {
      return aR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Zu(e);
    }
    var xD = sD({
      findFiberByHostInstance: Zs,
      bundleType: 1,
      version: LE,
      rendererPackageName: "react-dom"
    });
    if (!xD && Pt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var XR = window.location.protocol;
      /^(https?|file):$/.test(XR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (XR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jE, ai.createPortal = CD, ai.createRoot = RD, ai.findDOMNode = mD, ai.flushSync = wD, ai.hydrate = yD, ai.hydrateRoot = bD, ai.render = gD, ai.unmountComponentAtNode = ED, ai.unstable_batchedUpdates = vE, ai.unstable_renderSubtreeIntoContainer = TD, ai.version = LE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ai;
}
function w1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w1);
    } catch (p) {
      console.error(p);
    }
  }
}
process.env.NODE_ENV === "production" ? (w1(), JE.exports = jD()) : JE.exports = VD();
var PD = JE.exports, e0 = { exports: {} }, ly = { exports: {} }, mn = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l1;
function HD() {
  if (l1)
    return mn;
  l1 = 1;
  var p = typeof Symbol == "function" && Symbol.for, E = p ? Symbol.for("react.element") : 60103, m = p ? Symbol.for("react.portal") : 60106, C = p ? Symbol.for("react.fragment") : 60107, D = p ? Symbol.for("react.strict_mode") : 60108, x = p ? Symbol.for("react.profiler") : 60114, S = p ? Symbol.for("react.provider") : 60109, ne = p ? Symbol.for("react.context") : 60110, Y = p ? Symbol.for("react.async_mode") : 60111, G = p ? Symbol.for("react.concurrent_mode") : 60111, pe = p ? Symbol.for("react.forward_ref") : 60112, Q = p ? Symbol.for("react.suspense") : 60113, ee = p ? Symbol.for("react.suspense_list") : 60120, ae = p ? Symbol.for("react.memo") : 60115, Oe = p ? Symbol.for("react.lazy") : 60116, Ke = p ? Symbol.for("react.block") : 60121, et = p ? Symbol.for("react.fundamental") : 60117, Dt = p ? Symbol.for("react.responder") : 60118, Re = p ? Symbol.for("react.scope") : 60119;
  function Le(W) {
    if (typeof W == "object" && W !== null) {
      var st = W.$$typeof;
      switch (st) {
        case E:
          switch (W = W.type, W) {
            case Y:
            case G:
            case C:
            case x:
            case D:
            case Q:
              return W;
            default:
              switch (W = W && W.$$typeof, W) {
                case ne:
                case pe:
                case Oe:
                case ae:
                case S:
                  return W;
                default:
                  return st;
              }
          }
        case m:
          return st;
      }
    }
  }
  function Ie(W) {
    return Le(W) === G;
  }
  return mn.AsyncMode = Y, mn.ConcurrentMode = G, mn.ContextConsumer = ne, mn.ContextProvider = S, mn.Element = E, mn.ForwardRef = pe, mn.Fragment = C, mn.Lazy = Oe, mn.Memo = ae, mn.Portal = m, mn.Profiler = x, mn.StrictMode = D, mn.Suspense = Q, mn.isAsyncMode = function(W) {
    return Ie(W) || Le(W) === Y;
  }, mn.isConcurrentMode = Ie, mn.isContextConsumer = function(W) {
    return Le(W) === ne;
  }, mn.isContextProvider = function(W) {
    return Le(W) === S;
  }, mn.isElement = function(W) {
    return typeof W == "object" && W !== null && W.$$typeof === E;
  }, mn.isForwardRef = function(W) {
    return Le(W) === pe;
  }, mn.isFragment = function(W) {
    return Le(W) === C;
  }, mn.isLazy = function(W) {
    return Le(W) === Oe;
  }, mn.isMemo = function(W) {
    return Le(W) === ae;
  }, mn.isPortal = function(W) {
    return Le(W) === m;
  }, mn.isProfiler = function(W) {
    return Le(W) === x;
  }, mn.isStrictMode = function(W) {
    return Le(W) === D;
  }, mn.isSuspense = function(W) {
    return Le(W) === Q;
  }, mn.isValidElementType = function(W) {
    return typeof W == "string" || typeof W == "function" || W === C || W === G || W === x || W === D || W === Q || W === ee || typeof W == "object" && W !== null && (W.$$typeof === Oe || W.$$typeof === ae || W.$$typeof === S || W.$$typeof === ne || W.$$typeof === pe || W.$$typeof === et || W.$$typeof === Dt || W.$$typeof === Re || W.$$typeof === Ke);
  }, mn.typeOf = Le, mn;
}
var yn = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u1;
function BD() {
  return u1 || (u1 = 1, process.env.NODE_ENV !== "production" && function() {
    var p = typeof Symbol == "function" && Symbol.for, E = p ? Symbol.for("react.element") : 60103, m = p ? Symbol.for("react.portal") : 60106, C = p ? Symbol.for("react.fragment") : 60107, D = p ? Symbol.for("react.strict_mode") : 60108, x = p ? Symbol.for("react.profiler") : 60114, S = p ? Symbol.for("react.provider") : 60109, ne = p ? Symbol.for("react.context") : 60110, Y = p ? Symbol.for("react.async_mode") : 60111, G = p ? Symbol.for("react.concurrent_mode") : 60111, pe = p ? Symbol.for("react.forward_ref") : 60112, Q = p ? Symbol.for("react.suspense") : 60113, ee = p ? Symbol.for("react.suspense_list") : 60120, ae = p ? Symbol.for("react.memo") : 60115, Oe = p ? Symbol.for("react.lazy") : 60116, Ke = p ? Symbol.for("react.block") : 60121, et = p ? Symbol.for("react.fundamental") : 60117, Dt = p ? Symbol.for("react.responder") : 60118, Re = p ? Symbol.for("react.scope") : 60119;
    function Le(Se) {
      return typeof Se == "string" || typeof Se == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Se === C || Se === G || Se === x || Se === D || Se === Q || Se === ee || typeof Se == "object" && Se !== null && (Se.$$typeof === Oe || Se.$$typeof === ae || Se.$$typeof === S || Se.$$typeof === ne || Se.$$typeof === pe || Se.$$typeof === et || Se.$$typeof === Dt || Se.$$typeof === Re || Se.$$typeof === Ke);
    }
    function Ie(Se) {
      if (typeof Se == "object" && Se !== null) {
        var Pt = Se.$$typeof;
        switch (Pt) {
          case E:
            var Mn = Se.type;
            switch (Mn) {
              case Y:
              case G:
              case C:
              case x:
              case D:
              case Q:
                return Mn;
              default:
                var Fn = Mn && Mn.$$typeof;
                switch (Fn) {
                  case ne:
                  case pe:
                  case Oe:
                  case ae:
                  case S:
                    return Fn;
                  default:
                    return Pt;
                }
            }
          case m:
            return Pt;
        }
      }
    }
    var W = Y, st = G, tt = ne, Kt = S, Ft = E, Ot = pe, Et = C, at = Oe, he = ae, Ne = m, ht = x, rt = D, Ee = Q, oe = !1;
    function He(Se) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(Se) || Ie(Se) === Y;
    }
    function R(Se) {
      return Ie(Se) === G;
    }
    function z(Se) {
      return Ie(Se) === ne;
    }
    function re(Se) {
      return Ie(Se) === S;
    }
    function ge(Se) {
      return typeof Se == "object" && Se !== null && Se.$$typeof === E;
    }
    function de(Se) {
      return Ie(Se) === pe;
    }
    function ze(Se) {
      return Ie(Se) === C;
    }
    function Ce(Se) {
      return Ie(Se) === Oe;
    }
    function we(Se) {
      return Ie(Se) === ae;
    }
    function ke(Se) {
      return Ie(Se) === m;
    }
    function Ge(Se) {
      return Ie(Se) === x;
    }
    function mt(Se) {
      return Ie(Se) === D;
    }
    function Qt(Se) {
      return Ie(Se) === Q;
    }
    yn.AsyncMode = W, yn.ConcurrentMode = st, yn.ContextConsumer = tt, yn.ContextProvider = Kt, yn.Element = Ft, yn.ForwardRef = Ot, yn.Fragment = Et, yn.Lazy = at, yn.Memo = he, yn.Portal = Ne, yn.Profiler = ht, yn.StrictMode = rt, yn.Suspense = Ee, yn.isAsyncMode = He, yn.isConcurrentMode = R, yn.isContextConsumer = z, yn.isContextProvider = re, yn.isElement = ge, yn.isForwardRef = de, yn.isFragment = ze, yn.isLazy = Ce, yn.isMemo = we, yn.isPortal = ke, yn.isProfiler = Ge, yn.isStrictMode = mt, yn.isSuspense = Qt, yn.isValidElementType = Le, yn.typeOf = Ie;
  }()), yn;
}
var o1;
function x1() {
  return o1 || (o1 = 1, process.env.NODE_ENV === "production" ? ly.exports = HD() : ly.exports = BD()), ly.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var HE, s1;
function $D() {
  if (s1)
    return HE;
  s1 = 1;
  var p = Object.getOwnPropertySymbols, E = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
  function C(x) {
    if (x == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(x);
  }
  function D() {
    try {
      if (!Object.assign)
        return !1;
      var x = new String("abc");
      if (x[5] = "de", Object.getOwnPropertyNames(x)[0] === "5")
        return !1;
      for (var S = {}, ne = 0; ne < 10; ne++)
        S["_" + String.fromCharCode(ne)] = ne;
      var Y = Object.getOwnPropertyNames(S).map(function(pe) {
        return S[pe];
      });
      if (Y.join("") !== "0123456789")
        return !1;
      var G = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(pe) {
        G[pe] = pe;
      }), Object.keys(Object.assign({}, G)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return HE = D() ? Object.assign : function(x, S) {
    for (var ne, Y = C(x), G, pe = 1; pe < arguments.length; pe++) {
      ne = Object(arguments[pe]);
      for (var Q in ne)
        E.call(ne, Q) && (Y[Q] = ne[Q]);
      if (p) {
        G = p(ne);
        for (var ee = 0; ee < G.length; ee++)
          m.call(ne, G[ee]) && (Y[G[ee]] = ne[G[ee]]);
      }
    }
    return Y;
  }, HE;
}
var BE, c1;
function u0() {
  if (c1)
    return BE;
  c1 = 1;
  var p = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return BE = p, BE;
}
var $E, f1;
function _1() {
  return f1 || (f1 = 1, $E = Function.call.bind(Object.prototype.hasOwnProperty)), $E;
}
var IE, d1;
function ID() {
  if (d1)
    return IE;
  d1 = 1;
  var p = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var E = u0(), m = {}, C = _1();
    p = function(x) {
      var S = "Warning: " + x;
      typeof console < "u" && console.error(S);
      try {
        throw new Error(S);
      } catch {
      }
    };
  }
  function D(x, S, ne, Y, G) {
    if (process.env.NODE_ENV !== "production") {
      for (var pe in x)
        if (C(x, pe)) {
          var Q;
          try {
            if (typeof x[pe] != "function") {
              var ee = Error(
                (Y || "React class") + ": " + ne + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw ee.name = "Invariant Violation", ee;
            }
            Q = x[pe](S, pe, Y, ne, null, E);
          } catch (Oe) {
            Q = Oe;
          }
          if (Q && !(Q instanceof Error) && p(
            (Y || "React class") + ": type specification of " + ne + " `" + pe + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof Q + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), Q instanceof Error && !(Q.message in m)) {
            m[Q.message] = !0;
            var ae = G ? G() : "";
            p(
              "Failed " + ne + " type: " + Q.message + (ae ?? "")
            );
          }
        }
    }
  }
  return D.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (m = {});
  }, IE = D, IE;
}
var YE, p1;
function YD() {
  if (p1)
    return YE;
  p1 = 1;
  var p = x1(), E = $D(), m = u0(), C = _1(), D = ID(), x = function() {
  };
  process.env.NODE_ENV !== "production" && (x = function(ne) {
    var Y = "Warning: " + ne;
    typeof console < "u" && console.error(Y);
    try {
      throw new Error(Y);
    } catch {
    }
  });
  function S() {
    return null;
  }
  return YE = function(ne, Y) {
    var G = typeof Symbol == "function" && Symbol.iterator, pe = "@@iterator";
    function Q(R) {
      var z = R && (G && R[G] || R[pe]);
      if (typeof z == "function")
        return z;
    }
    var ee = "<<anonymous>>", ae = {
      array: Dt("array"),
      bigint: Dt("bigint"),
      bool: Dt("boolean"),
      func: Dt("function"),
      number: Dt("number"),
      object: Dt("object"),
      string: Dt("string"),
      symbol: Dt("symbol"),
      any: Re(),
      arrayOf: Le,
      element: Ie(),
      elementType: W(),
      instanceOf: st,
      node: Ot(),
      objectOf: Kt,
      oneOf: tt,
      oneOfType: Ft,
      shape: at,
      exact: he
    };
    function Oe(R, z) {
      return R === z ? R !== 0 || 1 / R === 1 / z : R !== R && z !== z;
    }
    function Ke(R, z) {
      this.message = R, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    Ke.prototype = Error.prototype;
    function et(R) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, re = 0;
      function ge(ze, Ce, we, ke, Ge, mt, Qt) {
        if (ke = ke || ee, mt = mt || we, Qt !== m) {
          if (Y) {
            var Se = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Se.name = "Invariant Violation", Se;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pt = ke + ":" + we;
            !z[Pt] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (x(
              "You are manually calling a React.PropTypes validation function for the `" + mt + "` prop on `" + ke + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[Pt] = !0, re++);
          }
        }
        return Ce[we] == null ? ze ? Ce[we] === null ? new Ke("The " + Ge + " `" + mt + "` is marked as required " + ("in `" + ke + "`, but its value is `null`.")) : new Ke("The " + Ge + " `" + mt + "` is marked as required in " + ("`" + ke + "`, but its value is `undefined`.")) : null : R(Ce, we, ke, Ge, mt);
      }
      var de = ge.bind(null, !1);
      return de.isRequired = ge.bind(null, !0), de;
    }
    function Dt(R) {
      function z(re, ge, de, ze, Ce, we) {
        var ke = re[ge], Ge = rt(ke);
        if (Ge !== R) {
          var mt = Ee(ke);
          return new Ke(
            "Invalid " + ze + " `" + Ce + "` of type " + ("`" + mt + "` supplied to `" + de + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return et(z);
    }
    function Re() {
      return et(S);
    }
    function Le(R) {
      function z(re, ge, de, ze, Ce) {
        if (typeof R != "function")
          return new Ke("Property `" + Ce + "` of component `" + de + "` has invalid PropType notation inside arrayOf.");
        var we = re[ge];
        if (!Array.isArray(we)) {
          var ke = rt(we);
          return new Ke("Invalid " + ze + " `" + Ce + "` of type " + ("`" + ke + "` supplied to `" + de + "`, expected an array."));
        }
        for (var Ge = 0; Ge < we.length; Ge++) {
          var mt = R(we, Ge, de, ze, Ce + "[" + Ge + "]", m);
          if (mt instanceof Error)
            return mt;
        }
        return null;
      }
      return et(z);
    }
    function Ie() {
      function R(z, re, ge, de, ze) {
        var Ce = z[re];
        if (!ne(Ce)) {
          var we = rt(Ce);
          return new Ke("Invalid " + de + " `" + ze + "` of type " + ("`" + we + "` supplied to `" + ge + "`, expected a single ReactElement."));
        }
        return null;
      }
      return et(R);
    }
    function W() {
      function R(z, re, ge, de, ze) {
        var Ce = z[re];
        if (!p.isValidElementType(Ce)) {
          var we = rt(Ce);
          return new Ke("Invalid " + de + " `" + ze + "` of type " + ("`" + we + "` supplied to `" + ge + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return et(R);
    }
    function st(R) {
      function z(re, ge, de, ze, Ce) {
        if (!(re[ge] instanceof R)) {
          var we = R.name || ee, ke = He(re[ge]);
          return new Ke("Invalid " + ze + " `" + Ce + "` of type " + ("`" + ke + "` supplied to `" + de + "`, expected ") + ("instance of `" + we + "`."));
        }
        return null;
      }
      return et(z);
    }
    function tt(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? x(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : x("Invalid argument supplied to oneOf, expected an array.")), S;
      function z(re, ge, de, ze, Ce) {
        for (var we = re[ge], ke = 0; ke < R.length; ke++)
          if (Oe(we, R[ke]))
            return null;
        var Ge = JSON.stringify(R, function(Qt, Se) {
          var Pt = Ee(Se);
          return Pt === "symbol" ? String(Se) : Se;
        });
        return new Ke("Invalid " + ze + " `" + Ce + "` of value `" + String(we) + "` " + ("supplied to `" + de + "`, expected one of " + Ge + "."));
      }
      return et(z);
    }
    function Kt(R) {
      function z(re, ge, de, ze, Ce) {
        if (typeof R != "function")
          return new Ke("Property `" + Ce + "` of component `" + de + "` has invalid PropType notation inside objectOf.");
        var we = re[ge], ke = rt(we);
        if (ke !== "object")
          return new Ke("Invalid " + ze + " `" + Ce + "` of type " + ("`" + ke + "` supplied to `" + de + "`, expected an object."));
        for (var Ge in we)
          if (C(we, Ge)) {
            var mt = R(we, Ge, de, ze, Ce + "." + Ge, m);
            if (mt instanceof Error)
              return mt;
          }
        return null;
      }
      return et(z);
    }
    function Ft(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && x("Invalid argument supplied to oneOfType, expected an instance of array."), S;
      for (var z = 0; z < R.length; z++) {
        var re = R[z];
        if (typeof re != "function")
          return x(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(re) + " at index " + z + "."
          ), S;
      }
      function ge(de, ze, Ce, we, ke) {
        for (var Ge = [], mt = 0; mt < R.length; mt++) {
          var Qt = R[mt], Se = Qt(de, ze, Ce, we, ke, m);
          if (Se == null)
            return null;
          Se.data && C(Se.data, "expectedType") && Ge.push(Se.data.expectedType);
        }
        var Pt = Ge.length > 0 ? ", expected one of type [" + Ge.join(", ") + "]" : "";
        return new Ke("Invalid " + we + " `" + ke + "` supplied to " + ("`" + Ce + "`" + Pt + "."));
      }
      return et(ge);
    }
    function Ot() {
      function R(z, re, ge, de, ze) {
        return Ne(z[re]) ? null : new Ke("Invalid " + de + " `" + ze + "` supplied to " + ("`" + ge + "`, expected a ReactNode."));
      }
      return et(R);
    }
    function Et(R, z, re, ge, de) {
      return new Ke(
        (R || "React class") + ": " + z + " type `" + re + "." + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + de + "`."
      );
    }
    function at(R) {
      function z(re, ge, de, ze, Ce) {
        var we = re[ge], ke = rt(we);
        if (ke !== "object")
          return new Ke("Invalid " + ze + " `" + Ce + "` of type `" + ke + "` " + ("supplied to `" + de + "`, expected `object`."));
        for (var Ge in R) {
          var mt = R[Ge];
          if (typeof mt != "function")
            return Et(de, ze, Ce, Ge, Ee(mt));
          var Qt = mt(we, Ge, de, ze, Ce + "." + Ge, m);
          if (Qt)
            return Qt;
        }
        return null;
      }
      return et(z);
    }
    function he(R) {
      function z(re, ge, de, ze, Ce) {
        var we = re[ge], ke = rt(we);
        if (ke !== "object")
          return new Ke("Invalid " + ze + " `" + Ce + "` of type `" + ke + "` " + ("supplied to `" + de + "`, expected `object`."));
        var Ge = E({}, re[ge], R);
        for (var mt in Ge) {
          var Qt = R[mt];
          if (C(R, mt) && typeof Qt != "function")
            return Et(de, ze, Ce, mt, Ee(Qt));
          if (!Qt)
            return new Ke(
              "Invalid " + ze + " `" + Ce + "` key `" + mt + "` supplied to `" + de + "`.\nBad object: " + JSON.stringify(re[ge], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var Se = Qt(we, mt, de, ze, Ce + "." + mt, m);
          if (Se)
            return Se;
        }
        return null;
      }
      return et(z);
    }
    function Ne(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(Ne);
          if (R === null || ne(R))
            return !0;
          var z = Q(R);
          if (z) {
            var re = z.call(R), ge;
            if (z !== R.entries) {
              for (; !(ge = re.next()).done; )
                if (!Ne(ge.value))
                  return !1;
            } else
              for (; !(ge = re.next()).done; ) {
                var de = ge.value;
                if (de && !Ne(de[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ht(R, z) {
      return R === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function rt(R) {
      var z = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : ht(z, R) ? "symbol" : z;
    }
    function Ee(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var z = rt(R);
      if (z === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function oe(R) {
      var z = Ee(R);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function He(R) {
      return !R.constructor || !R.constructor.name ? ee : R.constructor.name;
    }
    return ae.checkPropTypes = D, ae.resetWarningCache = D.resetWarningCache, ae.PropTypes = ae, ae;
  }, YE;
}
var WE, v1;
function WD() {
  if (v1)
    return WE;
  v1 = 1;
  var p = u0();
  function E() {
  }
  function m() {
  }
  return m.resetWarningCache = E, WE = function() {
    function C(S, ne, Y, G, pe, Q) {
      if (Q !== p) {
        var ee = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ee.name = "Invariant Violation", ee;
      }
    }
    C.isRequired = C;
    function D() {
      return C;
    }
    var x = {
      array: C,
      bigint: C,
      bool: C,
      func: C,
      number: C,
      object: C,
      string: C,
      symbol: C,
      any: C,
      arrayOf: D,
      element: C,
      elementType: C,
      instanceOf: D,
      node: C,
      objectOf: D,
      oneOf: D,
      oneOfType: D,
      shape: D,
      exact: D,
      checkPropTypes: m,
      resetWarningCache: E
    };
    return x.PropTypes = x, x;
  }, WE;
}
if (process.env.NODE_ENV !== "production") {
  var QD = x1(), qD = !0;
  e0.exports = YD()(QD.isElement, qD);
} else
  e0.exports = WD()();
var GD = e0.exports;
const Hi = /* @__PURE__ */ l0(GD);
function t0() {
  return t0 = Object.assign || function(p) {
    for (var E = 1; E < arguments.length; E++) {
      var m = arguments[E];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (p[C] = m[C]);
    }
    return p;
  }, t0.apply(this, arguments);
}
function XD(p, E) {
  if (p == null)
    return {};
  var m = KD(p, E), C, D;
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(p);
    for (D = 0; D < x.length; D++)
      C = x[D], !(E.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(p, C) && (m[C] = p[C]);
  }
  return m;
}
function KD(p, E) {
  if (p == null)
    return {};
  var m = {}, C = Object.keys(p), D, x;
  for (x = 0; x < C.length; x++)
    D = C[x], !(E.indexOf(D) >= 0) && (m[D] = p[D]);
  return m;
}
var o0 = Vt.forwardRef(function(p, E) {
  var m = p.color, C = m === void 0 ? "currentColor" : m, D = p.size, x = D === void 0 ? 24 : D, S = XD(p, ["color", "size"]);
  return /* @__PURE__ */ xn.createElement("svg", t0({
    ref: E,
    xmlns: "http://www.w3.org/2000/svg",
    width: x,
    height: x,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, S), /* @__PURE__ */ xn.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
});
o0.propTypes = {
  color: Hi.string,
  size: Hi.oneOfType([Hi.string, Hi.number])
};
o0.displayName = "ChevronLeft";
const ZD = o0;
function n0() {
  return n0 = Object.assign || function(p) {
    for (var E = 1; E < arguments.length; E++) {
      var m = arguments[E];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (p[C] = m[C]);
    }
    return p;
  }, n0.apply(this, arguments);
}
function JD(p, E) {
  if (p == null)
    return {};
  var m = eO(p, E), C, D;
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(p);
    for (D = 0; D < x.length; D++)
      C = x[D], !(E.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(p, C) && (m[C] = p[C]);
  }
  return m;
}
function eO(p, E) {
  if (p == null)
    return {};
  var m = {}, C = Object.keys(p), D, x;
  for (x = 0; x < C.length; x++)
    D = C[x], !(E.indexOf(D) >= 0) && (m[D] = p[D]);
  return m;
}
var s0 = Vt.forwardRef(function(p, E) {
  var m = p.color, C = m === void 0 ? "currentColor" : m, D = p.size, x = D === void 0 ? 24 : D, S = JD(p, ["color", "size"]);
  return /* @__PURE__ */ xn.createElement("svg", n0({
    ref: E,
    xmlns: "http://www.w3.org/2000/svg",
    width: x,
    height: x,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, S), /* @__PURE__ */ xn.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }));
});
s0.propTypes = {
  color: Hi.string,
  size: Hi.oneOfType([Hi.string, Hi.number])
};
s0.displayName = "ChevronRight";
const tO = s0;
function r0() {
  return r0 = Object.assign || function(p) {
    for (var E = 1; E < arguments.length; E++) {
      var m = arguments[E];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (p[C] = m[C]);
    }
    return p;
  }, r0.apply(this, arguments);
}
function nO(p, E) {
  if (p == null)
    return {};
  var m = rO(p, E), C, D;
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(p);
    for (D = 0; D < x.length; D++)
      C = x[D], !(E.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(p, C) && (m[C] = p[C]);
  }
  return m;
}
function rO(p, E) {
  if (p == null)
    return {};
  var m = {}, C = Object.keys(p), D, x;
  for (x = 0; x < C.length; x++)
    D = C[x], !(E.indexOf(D) >= 0) && (m[D] = p[D]);
  return m;
}
var c0 = Vt.forwardRef(function(p, E) {
  var m = p.color, C = m === void 0 ? "currentColor" : m, D = p.size, x = D === void 0 ? 24 : D, S = nO(p, ["color", "size"]);
  return /* @__PURE__ */ xn.createElement("svg", r0({
    ref: E,
    xmlns: "http://www.w3.org/2000/svg",
    width: x,
    height: x,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, S), /* @__PURE__ */ xn.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /* @__PURE__ */ xn.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
c0.propTypes = {
  color: Hi.string,
  size: Hi.oneOfType([Hi.string, Hi.number])
};
c0.displayName = "X";
const aO = c0, k1 = ({
  imgSrc: p,
  isOpen: E,
  onClose: m,
  onChange: C
}) => {
  const D = Vt.useRef(null), x = () => {
    C == null || C({ reason: "next" });
  }, S = () => {
    C == null || C({ reason: "prev" });
  };
  return zD(["ArrowRight", "ArrowLeft", "Escape"], (ne) => {
    switch (ne.key) {
      case "ArrowRight":
        x();
        break;
      case "ArrowLeft":
        S();
        break;
      case "Escape":
        m();
        break;
    }
  }), Vt.useEffect(() => {
    document.body.style.overflow = E ? "hidden" : "auto";
  }, [E]), E ? PD.createPortal(
    /* @__PURE__ */ fn.jsxs("div", { className: "fixed flex justify-center top-0 left-0 right-0 bottom-0 z-40 backdrop-blur-sm md:p-8", children: [
      C && /* @__PURE__ */ fn.jsx(
        ZD,
        {
          "aria-label": "Previous",
          onClick: S,
          strokeWidth: 1,
          className: "hidden md:block self-center cursor-pointer md:h-24 md:w-24"
        }
      ),
      /* @__PURE__ */ fn.jsxs("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ fn.jsxs(
          "div",
          {
            "aria-label": "Close",
            onClick: (ne) => {
              ne.preventDefault(), ne.stopPropagation(), m();
            },
            className: "absolute right-4 top-4 cursor-pointer z-50 flex items-center gap-2 md:gap-4",
            children: [
              /* @__PURE__ */ fn.jsx(aO, { className: "w-6 h-6" }),
              /* @__PURE__ */ fn.jsx("p", { className: "uppercase", children: "Close" })
            ]
          }
        ),
        /* @__PURE__ */ fn.jsx(
          "img",
          {
            ref: D,
            src: p,
            alt: "",
            className: "object-contain m-auto md:h-full md:object-cover object-center"
          }
        )
      ] }),
      C && /* @__PURE__ */ fn.jsx(
        tO,
        {
          "aria-label": "Next",
          onClick: x,
          strokeWidth: 1,
          className: "hidden md:block self-center cursor-pointer md:h-24 md:w-24"
        }
      )
    ] }),
    document.body
  ) : null;
}, LO = ({ images: p, slotProps: E }) => {
  var ne;
  const [m, C] = Vt.useState(NaN);
  if (!p)
    return null;
  const D = () => {
    C((Y) => (Y + 1) % p.length);
  }, x = () => {
    C((Y) => (Y - 1 + p.length) % p.length);
  }, S = () => {
    C(NaN);
  };
  return /* @__PURE__ */ fn.jsxs(
    "div",
    {
      ...E == null ? void 0 : E.root,
      className: ii(
        "columns-1 sm:columns-2 md:columns-3 gap-4",
        (ne = E == null ? void 0 : E.root) == null ? void 0 : ne.className
      ),
      children: [
        /* @__PURE__ */ fn.jsx(
          k1,
          {
            onChange: ({ reason: Y }) => Y === "next" ? D() : x(),
            imgSrc: p[m],
            isOpen: !Number.isNaN(m),
            onClose: S
          }
        ),
        /* @__PURE__ */ fn.jsx("div", { className: "grid gap-4", children: p.map((Y, G) => {
          var pe;
          return /* @__PURE__ */ Vt.createElement(
            "img",
            {
              ...E == null ? void 0 : E.image,
              tabIndex: 0,
              onKeyDown: (Q) => Q.key === "Enter" || Q.key === " " && C(G),
              onClick: () => C(G),
              key: Y,
              className: ii(
                "h-auto max-w-full cursor-pointer transition ease-in-out md:hover:scale-105 duration-200",
                (pe = E == null ? void 0 : E.image) == null ? void 0 : pe.className
              ),
              src: Y,
              alt: ""
            }
          );
        }) })
      ]
    }
  );
}, MO = Vt.forwardRef(
  function(E, m) {
    return /* @__PURE__ */ fn.jsx(
      "ul",
      {
        ref: m,
        ...E,
        className: ii("Tui-List", E.className)
      }
    );
  }
), NO = Vt.forwardRef(
  function(E, m) {
    return /* @__PURE__ */ fn.jsx(
      "li",
      {
        ref: m,
        ...E,
        className: ii("Tui-ListItem", E.className)
      }
    );
  }
), iO = (p) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(p), lO = {
  subtitle1: "Tui-Subtitle1",
  subtitle2: "Tui-Subtitle2",
  body1: "Tui-Body1",
  body2: "Tui-Body2",
  caption: "Tui-Caption",
  overline: "Tui-Overline"
}, a0 = ({
  children: p,
  variant: E = "body1",
  ...m
}) => iO(E) ? Vt.createElement(
  E,
  { ...m, className: ii(m.className, "Tui-Typography") },
  p
) : Vt.createElement(
  "p",
  {
    ...m,
    className: ii(
      lO[E],
      m.className,
      "Tui-Typography"
    )
  },
  p
), AO = ({
  variant: p = "body1",
  children: E,
  slotProps: m
}) => {
  var C;
  return /* @__PURE__ */ fn.jsx(
    "div",
    {
      ...m == null ? void 0 : m.root,
      className: ii("Tui-ListItemText", (C = m == null ? void 0 : m.root) == null ? void 0 : C.className),
      children: /* @__PURE__ */ fn.jsx(a0, { variant: p, ...m == null ? void 0 : m.typography, children: E })
    }
  );
}, zO = Vt.forwardRef(
  (p, E) => /* @__PURE__ */ fn.jsxs("div", { className: "group", children: [
    /* @__PURE__ */ fn.jsx("label", { htmlFor: p.name, children: p.label }),
    /* @__PURE__ */ fn.jsx(
      "textarea",
      {
        ref: E,
        ...p,
        id: p.name,
        "data-should-validate": !!p.value,
        className: "text-area"
      }
    )
  ] })
), UO = Vt.forwardRef((p, E) => /* @__PURE__ */ fn.jsxs("div", { className: "group", children: [
  /* @__PURE__ */ fn.jsx("label", { htmlFor: p.name, className: "label", children: p.label }),
  /* @__PURE__ */ fn.jsx("input", { ref: E, ...p, className: "text-field" })
] })), FO = Vt.forwardRef(
  function(E, m) {
    return /* @__PURE__ */ fn.jsx(
      "div",
      {
        ref: m,
        ...E,
        className: ii("Tui-Card", E.className)
      }
    );
  }
), jO = Vt.forwardRef(
  function(E, m) {
    return /* @__PURE__ */ fn.jsx(
      "div",
      {
        ref: m,
        ...E,
        className: ii("Tui-CardContent", E.className)
      }
    );
  }
), VO = Vt.forwardRef(
  function(E, m) {
    return /* @__PURE__ */ fn.jsxs(
      "div",
      {
        ref: m,
        ...E,
        className: ii("Tui-CardHeader", E.className),
        children: [
          /* @__PURE__ */ fn.jsx(a0, { variant: "h6", children: E.title }),
          E.subtitle && /* @__PURE__ */ fn.jsx(a0, { variant: "subtitle1", children: E.subtitle })
        ]
      }
    );
  }
), uO = () => {
  const [p, E] = Vt.useState(!1);
  return { isOpen: p, onOpen: () => E(!0), onClose: () => E(!1) };
}, PO = Vt.forwardRef(
  function(E, m) {
    const { isOpen: C, onClose: D, onOpen: x } = uO();
    return /* @__PURE__ */ fn.jsxs(fn.Fragment, { children: [
      /* @__PURE__ */ fn.jsx(
        k1,
        {
          imgSrc: E.src ?? "",
          isOpen: C,
          onClose: D
        }
      ),
      /* @__PURE__ */ fn.jsx(
        "img",
        {
          ...E,
          onClick: x,
          ref: m,
          className: ii("Tui-CardMedia", E.className)
        }
      )
    ] });
  }
), HO = Vt.forwardRef(
  function(E, m) {
    return /* @__PURE__ */ fn.jsx(
      "div",
      {
        ref: m,
        ...E,
        className: ii("Tui-CardActionArea", E.className),
        children: E.children
      }
    );
  }
), BO = Vt.forwardRef(
  function(E, m) {
    return /* @__PURE__ */ fn.jsx(
      "div",
      {
        ref: m,
        ...E,
        className: ii("Tui-CardBody", E.className),
        children: E.children
      }
    );
  }
), oO = (p, E, m, C) => {
  Vt.useLayoutEffect(() => (p == null || p.addEventListener(E, m, C), () => p == null ? void 0 : p.removeEventListener(E, m, C)), [p, E, m, C]);
};
var gv = (p) => p.type === "checkbox", rd = (p) => p instanceof Date, za = (p) => p == null;
const D1 = (p) => typeof p == "object";
var Lr = (p) => !za(p) && !Array.isArray(p) && D1(p) && !rd(p), O1 = (p) => Lr(p) && p.target ? gv(p.target) ? p.target.checked : p.target.value : p, sO = (p) => p.substring(0, p.search(/\.\d+(\.|$)/)) || p, L1 = (p, E) => p.has(sO(E)), cO = (p) => {
  const E = p.constructor && p.constructor.prototype;
  return Lr(E) && E.hasOwnProperty("isPrototypeOf");
}, f0 = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function su(p) {
  let E;
  const m = Array.isArray(p);
  if (p instanceof Date)
    E = new Date(p);
  else if (p instanceof Set)
    E = new Set(p);
  else if (!(f0 && (p instanceof Blob || p instanceof FileList)) && (m || Lr(p)))
    if (E = m ? [] : {}, !m && !cO(p))
      E = p;
    else
      for (const C in p)
        p.hasOwnProperty(C) && (E[C] = su(p[C]));
  else
    return p;
  return E;
}
var Sv = (p) => Array.isArray(p) ? p.filter(Boolean) : [], cr = (p) => p === void 0, Be = (p, E, m) => {
  if (!E || !Lr(p))
    return m;
  const C = Sv(E.split(/[,[\].]+?/)).reduce((D, x) => za(D) ? D : D[x], p);
  return cr(C) || C === p ? cr(p[E]) ? m : p[E] : C;
};
const sy = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, gl = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, to = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, fO = xn.createContext(null), d0 = () => xn.useContext(fO);
var M1 = (p, E, m, C = !0) => {
  const D = {
    defaultValues: E._defaultValues
  };
  for (const x in p)
    Object.defineProperty(D, x, {
      get: () => {
        const S = x;
        return E._proxyFormState[S] !== gl.all && (E._proxyFormState[S] = !C || gl.all), m && (m[S] = !0), p[S];
      }
    });
  return D;
}, Pi = (p) => Lr(p) && !Object.keys(p).length, N1 = (p, E, m, C) => {
  m(p);
  const { name: D, ...x } = p;
  return Pi(x) || Object.keys(x).length >= Object.keys(E).length || Object.keys(x).find((S) => E[S] === (!C || gl.all));
}, uy = (p) => Array.isArray(p) ? p : [p], A1 = (p, E, m) => m && E ? p === E : !p || !E || p === E || uy(p).some((C) => C && (C.startsWith(E) || E.startsWith(C)));
function p0(p) {
  const E = xn.useRef(p);
  E.current = p, xn.useEffect(() => {
    const m = !p.disabled && E.current.subject && E.current.subject.subscribe({
      next: E.current.next
    });
    return () => {
      m && m.unsubscribe();
    };
  }, [p.disabled]);
}
function dO(p) {
  const E = d0(), { control: m = E.control, disabled: C, name: D, exact: x } = p || {}, [S, ne] = xn.useState(m._formState), Y = xn.useRef(!0), G = xn.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), pe = xn.useRef(D);
  return pe.current = D, p0({
    disabled: C,
    next: (Q) => Y.current && A1(pe.current, Q.name, x) && N1(Q, G.current, m._updateFormState) && ne({
      ...m._formState,
      ...Q
    }),
    subject: m._subjects.state
  }), xn.useEffect(() => (Y.current = !0, G.current.isValid && m._updateValid(!0), () => {
    Y.current = !1;
  }), [m]), M1(S, m, G.current, !1);
}
var cu = (p) => typeof p == "string", z1 = (p, E, m, C, D) => cu(p) ? (C && E.watch.add(p), Be(m, p, D)) : Array.isArray(p) ? p.map((x) => (C && E.watch.add(x), Be(m, x))) : (C && (E.watchAll = !0), m);
function pO(p) {
  const E = d0(), { control: m = E.control, name: C, defaultValue: D, disabled: x, exact: S } = p || {}, ne = xn.useRef(C);
  ne.current = C, p0({
    disabled: x,
    subject: m._subjects.values,
    next: (pe) => {
      A1(ne.current, pe.name, S) && G(su(z1(ne.current, m._names, pe.values || m._formValues, !1, D)));
    }
  });
  const [Y, G] = xn.useState(m._getWatch(C, D));
  return xn.useEffect(() => m._removeUnmounted()), Y;
}
var v0 = (p) => /^\w*$/.test(p), U1 = (p) => Sv(p.replace(/["|']|\]/g, "").split(/\.|\[/));
function Un(p, E, m) {
  let C = -1;
  const D = v0(E) ? [E] : U1(E), x = D.length, S = x - 1;
  for (; ++C < x; ) {
    const ne = D[C];
    let Y = m;
    if (C !== S) {
      const G = p[ne];
      Y = Lr(G) || Array.isArray(G) ? G : isNaN(+D[C + 1]) ? {} : [];
    }
    p[ne] = Y, p = p[ne];
  }
  return p;
}
function vO(p) {
  const E = d0(), { name: m, control: C = E.control, shouldUnregister: D } = p, x = L1(C._names.array, m), S = pO({
    control: C,
    name: m,
    defaultValue: Be(C._formValues, m, Be(C._defaultValues, m, p.defaultValue)),
    exact: !0
  }), ne = dO({
    control: C,
    name: m
  }), Y = xn.useRef(C.register(m, {
    ...p.rules,
    value: S
  }));
  return Y.current = C.register(m, p.rules), xn.useEffect(() => {
    const G = C._options.shouldUnregister || D, pe = (Q, ee) => {
      const ae = Be(C._fields, Q);
      ae && (ae._f.mount = ee);
    };
    if (pe(m, !0), G) {
      const Q = su(Be(C._options.defaultValues, m));
      Un(C._defaultValues, m, Q), cr(Be(C._formValues, m)) && Un(C._formValues, m, Q);
    }
    return () => {
      (x ? G && !C._state.action : G) ? C.unregister(m) : pe(m, !1);
    };
  }, [m, C, x, D]), {
    field: {
      name: m,
      value: S,
      onChange: xn.useCallback((G) => Y.current.onChange({
        target: {
          value: O1(G),
          name: m
        },
        type: sy.CHANGE
      }), [m]),
      onBlur: xn.useCallback(() => Y.current.onBlur({
        target: {
          value: Be(C._formValues, m),
          name: m
        },
        type: sy.BLUR
      }), [m, C]),
      ref: (G) => {
        const pe = Be(C._fields, m);
        pe && G && (pe._f.ref = {
          focus: () => G.focus(),
          select: () => G.select(),
          setCustomValidity: (Q) => G.setCustomValidity(Q),
          reportValidity: () => G.reportValidity()
        });
      }
    },
    formState: ne,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!Be(ne.errors, m)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!Be(ne.dirtyFields, m)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!Be(ne.touchedFields, m)
      },
      error: {
        enumerable: !0,
        get: () => Be(ne.errors, m)
      }
    })
  };
}
var hO = (p, E, m, C, D) => E ? {
  ...m[p],
  types: {
    ...m[p] && m[p].types ? m[p].types : {},
    [C]: D || !0
  }
} : {};
const i0 = (p, E, m) => {
  for (const C of m || Object.keys(p)) {
    const D = Be(p, C);
    if (D) {
      const { _f: x, ...S } = D;
      if (x && E(x.name)) {
        if (x.ref.focus) {
          x.ref.focus();
          break;
        } else if (x.refs && x.refs[0].focus) {
          x.refs[0].focus();
          break;
        }
      } else
        Lr(S) && i0(S, E);
    }
  }
};
var h1 = (p) => ({
  isOnSubmit: !p || p === gl.onSubmit,
  isOnBlur: p === gl.onBlur,
  isOnChange: p === gl.onChange,
  isOnAll: p === gl.all,
  isOnTouch: p === gl.onTouched
}), m1 = (p, E, m) => !m && (E.watchAll || E.watch.has(p) || [...E.watch].some((C) => p.startsWith(C) && /^\.\w+/.test(p.slice(C.length)))), mO = (p, E, m) => {
  const C = Sv(Be(p, m));
  return Un(C, "root", E[m]), Un(p, m, C), p;
}, ad = (p) => typeof p == "boolean", h0 = (p) => p.type === "file", ss = (p) => typeof p == "function", cy = (p) => {
  if (!f0)
    return !1;
  const E = p ? p.ownerDocument : 0;
  return p instanceof (E && E.defaultView ? E.defaultView.HTMLElement : HTMLElement);
}, oy = (p) => cu(p), m0 = (p) => p.type === "radio", fy = (p) => p instanceof RegExp;
const y1 = {
  value: !1,
  isValid: !1
}, g1 = { value: !0, isValid: !0 };
var F1 = (p) => {
  if (Array.isArray(p)) {
    if (p.length > 1) {
      const E = p.filter((m) => m && m.checked && !m.disabled).map((m) => m.value);
      return { value: E, isValid: !!E.length };
    }
    return p[0].checked && !p[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      p[0].attributes && !cr(p[0].attributes.value) ? cr(p[0].value) || p[0].value === "" ? g1 : { value: p[0].value, isValid: !0 } : g1
    ) : y1;
  }
  return y1;
};
const S1 = {
  isValid: !1,
  value: null
};
var j1 = (p) => Array.isArray(p) ? p.reduce((E, m) => m && m.checked && !m.disabled ? {
  isValid: !0,
  value: m.value
} : E, S1) : S1;
function E1(p, E, m = "validate") {
  if (oy(p) || Array.isArray(p) && p.every(oy) || ad(p) && !p)
    return {
      type: m,
      message: oy(p) ? p : "",
      ref: E
    };
}
var nd = (p) => Lr(p) && !fy(p) ? p : {
  value: p,
  message: ""
}, C1 = async (p, E, m, C, D) => {
  const { ref: x, refs: S, required: ne, maxLength: Y, minLength: G, min: pe, max: Q, pattern: ee, validate: ae, name: Oe, valueAsNumber: Ke, mount: et, disabled: Dt } = p._f, Re = Be(E, Oe);
  if (!et || Dt)
    return {};
  const Le = S ? S[0] : x, Ie = (at) => {
    C && Le.reportValidity && (Le.setCustomValidity(ad(at) ? "" : at || ""), Le.reportValidity());
  }, W = {}, st = m0(x), tt = gv(x), Kt = st || tt, Ft = (Ke || h0(x)) && cr(x.value) && cr(Re) || cy(x) && x.value === "" || Re === "" || Array.isArray(Re) && !Re.length, Ot = hO.bind(null, Oe, m, W), Et = (at, he, Ne, ht = to.maxLength, rt = to.minLength) => {
    const Ee = at ? he : Ne;
    W[Oe] = {
      type: at ? ht : rt,
      message: Ee,
      ref: x,
      ...Ot(at ? ht : rt, Ee)
    };
  };
  if (D ? !Array.isArray(Re) || !Re.length : ne && (!Kt && (Ft || za(Re)) || ad(Re) && !Re || tt && !F1(S).isValid || st && !j1(S).isValid)) {
    const { value: at, message: he } = oy(ne) ? { value: !!ne, message: ne } : nd(ne);
    if (at && (W[Oe] = {
      type: to.required,
      message: he,
      ref: Le,
      ...Ot(to.required, he)
    }, !m))
      return Ie(he), W;
  }
  if (!Ft && (!za(pe) || !za(Q))) {
    let at, he;
    const Ne = nd(Q), ht = nd(pe);
    if (!za(Re) && !isNaN(Re)) {
      const rt = x.valueAsNumber || Re && +Re;
      za(Ne.value) || (at = rt > Ne.value), za(ht.value) || (he = rt < ht.value);
    } else {
      const rt = x.valueAsDate || new Date(Re), Ee = (R) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + R), oe = x.type == "time", He = x.type == "week";
      cu(Ne.value) && Re && (at = oe ? Ee(Re) > Ee(Ne.value) : He ? Re > Ne.value : rt > new Date(Ne.value)), cu(ht.value) && Re && (he = oe ? Ee(Re) < Ee(ht.value) : He ? Re < ht.value : rt < new Date(ht.value));
    }
    if ((at || he) && (Et(!!at, Ne.message, ht.message, to.max, to.min), !m))
      return Ie(W[Oe].message), W;
  }
  if ((Y || G) && !Ft && (cu(Re) || D && Array.isArray(Re))) {
    const at = nd(Y), he = nd(G), Ne = !za(at.value) && Re.length > +at.value, ht = !za(he.value) && Re.length < +he.value;
    if ((Ne || ht) && (Et(Ne, at.message, he.message), !m))
      return Ie(W[Oe].message), W;
  }
  if (ee && !Ft && cu(Re)) {
    const { value: at, message: he } = nd(ee);
    if (fy(at) && !Re.match(at) && (W[Oe] = {
      type: to.pattern,
      message: he,
      ref: x,
      ...Ot(to.pattern, he)
    }, !m))
      return Ie(he), W;
  }
  if (ae) {
    if (ss(ae)) {
      const at = await ae(Re, E), he = E1(at, Le);
      if (he && (W[Oe] = {
        ...he,
        ...Ot(to.validate, he.message)
      }, !m))
        return Ie(he.message), W;
    } else if (Lr(ae)) {
      let at = {};
      for (const he in ae) {
        if (!Pi(at) && !m)
          break;
        const Ne = E1(await ae[he](Re, E), Le, he);
        Ne && (at = {
          ...Ne,
          ...Ot(he, Ne.message)
        }, Ie(Ne.message), m && (W[Oe] = at));
      }
      if (!Pi(at) && (W[Oe] = {
        ref: Le,
        ...at
      }, !m))
        return W;
    }
  }
  return Ie(!0), W;
};
function yO(p, E) {
  const m = E.slice(0, -1).length;
  let C = 0;
  for (; C < m; )
    p = cr(p) ? C++ : p[E[C++]];
  return p;
}
function gO(p) {
  for (const E in p)
    if (p.hasOwnProperty(E) && !cr(p[E]))
      return !1;
  return !0;
}
function ra(p, E) {
  const m = Array.isArray(E) ? E : v0(E) ? [E] : U1(E), C = m.length === 1 ? p : yO(p, m), D = m.length - 1, x = m[D];
  return C && delete C[x], D !== 0 && (Lr(C) && Pi(C) || Array.isArray(C) && gO(C)) && ra(p, m.slice(0, -1)), p;
}
function QE() {
  let p = [];
  return {
    get observers() {
      return p;
    },
    next: (D) => {
      for (const x of p)
        x.next && x.next(D);
    },
    subscribe: (D) => (p.push(D), {
      unsubscribe: () => {
        p = p.filter((x) => x !== D);
      }
    }),
    unsubscribe: () => {
      p = [];
    }
  };
}
var dy = (p) => za(p) || !D1(p);
function vc(p, E) {
  if (dy(p) || dy(E))
    return p === E;
  if (rd(p) && rd(E))
    return p.getTime() === E.getTime();
  const m = Object.keys(p), C = Object.keys(E);
  if (m.length !== C.length)
    return !1;
  for (const D of m) {
    const x = p[D];
    if (!C.includes(D))
      return !1;
    if (D !== "ref") {
      const S = E[D];
      if (rd(x) && rd(S) || Lr(x) && Lr(S) || Array.isArray(x) && Array.isArray(S) ? !vc(x, S) : x !== S)
        return !1;
    }
  }
  return !0;
}
var V1 = (p) => p.type === "select-multiple", SO = (p) => m0(p) || gv(p), qE = (p) => cy(p) && p.isConnected, P1 = (p) => {
  for (const E in p)
    if (ss(p[E]))
      return !0;
  return !1;
};
function py(p, E = {}) {
  const m = Array.isArray(p);
  if (Lr(p) || m)
    for (const C in p)
      Array.isArray(p[C]) || Lr(p[C]) && !P1(p[C]) ? (E[C] = Array.isArray(p[C]) ? [] : {}, py(p[C], E[C])) : za(p[C]) || (E[C] = !0);
  return E;
}
function H1(p, E, m) {
  const C = Array.isArray(p);
  if (Lr(p) || C)
    for (const D in p)
      Array.isArray(p[D]) || Lr(p[D]) && !P1(p[D]) ? cr(E) || dy(m[D]) ? m[D] = Array.isArray(p[D]) ? py(p[D], []) : { ...py(p[D]) } : H1(p[D], za(E) ? {} : E[D], m[D]) : m[D] = !vc(p[D], E[D]);
  return m;
}
var GE = (p, E) => H1(p, E, py(E)), B1 = (p, { valueAsNumber: E, valueAsDate: m, setValueAs: C }) => cr(p) ? p : E ? p === "" ? NaN : p && +p : m && cu(p) ? new Date(p) : C ? C(p) : p;
function XE(p) {
  const E = p.ref;
  if (!(p.refs ? p.refs.every((m) => m.disabled) : E.disabled))
    return h0(E) ? E.files : m0(E) ? j1(p.refs).value : V1(E) ? [...E.selectedOptions].map(({ value: m }) => m) : gv(E) ? F1(p.refs).value : B1(cr(E.value) ? p.ref.value : E.value, p);
}
var EO = (p, E, m, C) => {
  const D = {};
  for (const x of p) {
    const S = Be(E, x);
    S && Un(D, x, S._f);
  }
  return {
    criteriaMode: m,
    names: [...p],
    fields: D,
    shouldUseNativeValidation: C
  };
}, mv = (p) => cr(p) ? p : fy(p) ? p.source : Lr(p) ? fy(p.value) ? p.value.source : p.value : p, CO = (p) => p.mount && (p.required || p.min || p.max || p.maxLength || p.minLength || p.pattern || p.validate);
function T1(p, E, m) {
  const C = Be(p, m);
  if (C || v0(m))
    return {
      error: C,
      name: m
    };
  const D = m.split(".");
  for (; D.length; ) {
    const x = D.join("."), S = Be(E, x), ne = Be(p, x);
    if (S && !Array.isArray(S) && m !== x)
      return { name: m };
    if (ne && ne.type)
      return {
        name: x,
        error: ne
      };
    D.pop();
  }
  return {
    name: m
  };
}
var TO = (p, E, m, C, D) => D.isOnAll ? !1 : !m && D.isOnTouch ? !(E || p) : (m ? C.isOnBlur : D.isOnBlur) ? !p : (m ? C.isOnChange : D.isOnChange) ? p : !0, RO = (p, E) => !Sv(Be(p, E)).length && ra(p, E);
const bO = {
  mode: gl.onSubmit,
  reValidateMode: gl.onChange,
  shouldFocusError: !0
};
function wO(p = {}, E) {
  let m = {
    ...bO,
    ...p
  }, C = {
    submitCount: 0,
    isDirty: !1,
    isLoading: ss(m.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, D = {}, x = Lr(m.defaultValues) || Lr(m.values) ? su(m.defaultValues || m.values) || {} : {}, S = m.shouldUnregister ? {} : su(x), ne = {
    action: !1,
    mount: !1,
    watch: !1
  }, Y = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, G, pe = 0;
  const Q = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, ee = {
    values: QE(),
    array: QE(),
    state: QE()
  }, ae = p.resetOptions && p.resetOptions.keepDirtyValues, Oe = h1(m.mode), Ke = h1(m.reValidateMode), et = m.criteriaMode === gl.all, Dt = (L) => (I) => {
    clearTimeout(pe), pe = setTimeout(L, I);
  }, Re = async (L) => {
    if (Q.isValid || L) {
      const I = m.resolver ? Pi((await Ft()).errors) : await Et(D, !0);
      I !== C.isValid && ee.state.next({
        isValid: I
      });
    }
  }, Le = (L) => Q.isValidating && ee.state.next({
    isValidating: L
  }), Ie = (L, I = [], Z, Me, ye = !0, se = !0) => {
    if (Me && Z) {
      if (ne.action = !0, se && Array.isArray(Be(D, L))) {
        const $e = Z(Be(D, L), Me.argA, Me.argB);
        ye && Un(D, L, $e);
      }
      if (se && Array.isArray(Be(C.errors, L))) {
        const $e = Z(Be(C.errors, L), Me.argA, Me.argB);
        ye && Un(C.errors, L, $e), RO(C.errors, L);
      }
      if (Q.touchedFields && se && Array.isArray(Be(C.touchedFields, L))) {
        const $e = Z(Be(C.touchedFields, L), Me.argA, Me.argB);
        ye && Un(C.touchedFields, L, $e);
      }
      Q.dirtyFields && (C.dirtyFields = GE(x, S)), ee.state.next({
        name: L,
        isDirty: he(L, I),
        dirtyFields: C.dirtyFields,
        errors: C.errors,
        isValid: C.isValid
      });
    } else
      Un(S, L, I);
  }, W = (L, I) => {
    Un(C.errors, L, I), ee.state.next({
      errors: C.errors
    });
  }, st = (L, I, Z, Me) => {
    const ye = Be(D, L);
    if (ye) {
      const se = Be(S, L, cr(Z) ? Be(x, L) : Z);
      cr(se) || Me && Me.defaultChecked || I ? Un(S, L, I ? se : XE(ye._f)) : rt(L, se), ne.mount && Re();
    }
  }, tt = (L, I, Z, Me, ye) => {
    let se = !1, $e = !1;
    const Lt = {
      name: L
    };
    if (!Z || Me) {
      Q.isDirty && ($e = C.isDirty, C.isDirty = Lt.isDirty = he(), se = $e !== Lt.isDirty);
      const Ht = vc(Be(x, L), I);
      $e = Be(C.dirtyFields, L), Ht ? ra(C.dirtyFields, L) : Un(C.dirtyFields, L, !0), Lt.dirtyFields = C.dirtyFields, se = se || Q.dirtyFields && $e !== !Ht;
    }
    if (Z) {
      const Ht = Be(C.touchedFields, L);
      Ht || (Un(C.touchedFields, L, Z), Lt.touchedFields = C.touchedFields, se = se || Q.touchedFields && Ht !== Z);
    }
    return se && ye && ee.state.next(Lt), se ? Lt : {};
  }, Kt = (L, I, Z, Me) => {
    const ye = Be(C.errors, L), se = Q.isValid && ad(I) && C.isValid !== I;
    if (p.delayError && Z ? (G = Dt(() => W(L, Z)), G(p.delayError)) : (clearTimeout(pe), G = null, Z ? Un(C.errors, L, Z) : ra(C.errors, L)), (Z ? !vc(ye, Z) : ye) || !Pi(Me) || se) {
      const $e = {
        ...Me,
        ...se && ad(I) ? { isValid: I } : {},
        errors: C.errors,
        name: L
      };
      C = {
        ...C,
        ...$e
      }, ee.state.next($e);
    }
    Le(!1);
  }, Ft = async (L) => m.resolver(S, m.context, EO(L || Y.mount, D, m.criteriaMode, m.shouldUseNativeValidation)), Ot = async (L) => {
    const { errors: I } = await Ft();
    if (L)
      for (const Z of L) {
        const Me = Be(I, Z);
        Me ? Un(C.errors, Z, Me) : ra(C.errors, Z);
      }
    else
      C.errors = I;
    return I;
  }, Et = async (L, I, Z = {
    valid: !0
  }) => {
    for (const Me in L) {
      const ye = L[Me];
      if (ye) {
        const { _f: se, ...$e } = ye;
        if (se) {
          const Lt = Y.array.has(se.name), Ht = await C1(ye, S, et, m.shouldUseNativeValidation && !I, Lt);
          if (Ht[se.name] && (Z.valid = !1, I))
            break;
          !I && (Be(Ht, se.name) ? Lt ? mO(C.errors, Ht, se.name) : Un(C.errors, se.name, Ht[se.name]) : ra(C.errors, se.name));
        }
        $e && await Et($e, I, Z);
      }
    }
    return Z.valid;
  }, at = () => {
    for (const L of Y.unMount) {
      const I = Be(D, L);
      I && (I._f.refs ? I._f.refs.every((Z) => !qE(Z)) : !qE(I._f.ref)) && Ce(L);
    }
    Y.unMount = /* @__PURE__ */ new Set();
  }, he = (L, I) => (L && I && Un(S, L, I), !vc(z(), x)), Ne = (L, I, Z) => z1(L, Y, {
    ...ne.mount ? S : cr(I) ? x : cu(L) ? { [L]: I } : I
  }, Z, I), ht = (L) => Sv(Be(ne.mount ? S : x, L, p.shouldUnregister ? Be(x, L, []) : [])), rt = (L, I, Z = {}) => {
    const Me = Be(D, L);
    let ye = I;
    if (Me) {
      const se = Me._f;
      se && (!se.disabled && Un(S, L, B1(I, se)), ye = cy(se.ref) && za(I) ? "" : I, V1(se.ref) ? [...se.ref.options].forEach(($e) => $e.selected = ye.includes($e.value)) : se.refs ? gv(se.ref) ? se.refs.length > 1 ? se.refs.forEach(($e) => (!$e.defaultChecked || !$e.disabled) && ($e.checked = Array.isArray(ye) ? !!ye.find((Lt) => Lt === $e.value) : ye === $e.value)) : se.refs[0] && (se.refs[0].checked = !!ye) : se.refs.forEach(($e) => $e.checked = $e.value === ye) : h0(se.ref) ? se.ref.value = "" : (se.ref.value = ye, se.ref.type || ee.values.next({
        name: L,
        values: { ...S }
      })));
    }
    (Z.shouldDirty || Z.shouldTouch) && tt(L, ye, Z.shouldTouch, Z.shouldDirty, !0), Z.shouldValidate && R(L);
  }, Ee = (L, I, Z) => {
    for (const Me in I) {
      const ye = I[Me], se = `${L}.${Me}`, $e = Be(D, se);
      (Y.array.has(L) || !dy(ye) || $e && !$e._f) && !rd(ye) ? Ee(se, ye, Z) : rt(se, ye, Z);
    }
  }, oe = (L, I, Z = {}) => {
    const Me = Be(D, L), ye = Y.array.has(L), se = su(I);
    Un(S, L, se), ye ? (ee.array.next({
      name: L,
      values: { ...S }
    }), (Q.isDirty || Q.dirtyFields) && Z.shouldDirty && ee.state.next({
      name: L,
      dirtyFields: GE(x, S),
      isDirty: he(L, se)
    })) : Me && !Me._f && !za(se) ? Ee(L, se, Z) : rt(L, se, Z), m1(L, Y) && ee.state.next({ ...C }), ee.values.next({
      name: L,
      values: { ...S }
    }), !ne.mount && E();
  }, He = async (L) => {
    const I = L.target;
    let Z = I.name, Me = !0;
    const ye = Be(D, Z), se = () => I.type ? XE(ye._f) : O1(L);
    if (ye) {
      let $e, Lt;
      const Ht = se(), Nn = L.type === sy.BLUR || L.type === sy.FOCUS_OUT, Mr = !CO(ye._f) && !m.resolver && !Be(C.errors, Z) && !ye._f.deps || TO(Nn, Be(C.touchedFields, Z), C.isSubmitted, Ke, Oe), gn = m1(Z, Y, Nn);
      Un(S, Z, Ht), Nn ? (ye._f.onBlur && ye._f.onBlur(L), G && G(0)) : ye._f.onChange && ye._f.onChange(L);
      const rr = tt(Z, Ht, Nn, !1), Ua = !Pi(rr) || gn;
      if (!Nn && ee.values.next({
        name: Z,
        type: L.type,
        values: { ...S }
      }), Mr)
        return Q.isValid && Re(), Ua && ee.state.next({ name: Z, ...gn ? {} : rr });
      if (!Nn && gn && ee.state.next({ ...C }), Le(!0), m.resolver) {
        const { errors: Nr } = await Ft([Z]), Te = T1(C.errors, D, Z), Ze = T1(Nr, D, Te.name || Z);
        $e = Ze.error, Z = Ze.name, Lt = Pi(Nr);
      } else
        $e = (await C1(ye, S, et, m.shouldUseNativeValidation))[Z], Me = isNaN(Ht) || Ht === Be(S, Z, Ht), Me && ($e ? Lt = !1 : Q.isValid && (Lt = await Et(D, !0)));
      Me && (ye._f.deps && R(ye._f.deps), Kt(Z, Lt, $e, rr));
    }
  }, R = async (L, I = {}) => {
    let Z, Me;
    const ye = uy(L);
    if (Le(!0), m.resolver) {
      const se = await Ot(cr(L) ? L : ye);
      Z = Pi(se), Me = L ? !ye.some(($e) => Be(se, $e)) : Z;
    } else
      L ? (Me = (await Promise.all(ye.map(async (se) => {
        const $e = Be(D, se);
        return await Et($e && $e._f ? { [se]: $e } : $e);
      }))).every(Boolean), !(!Me && !C.isValid) && Re()) : Me = Z = await Et(D);
    return ee.state.next({
      ...!cu(L) || Q.isValid && Z !== C.isValid ? {} : { name: L },
      ...m.resolver || !L ? { isValid: Z } : {},
      errors: C.errors,
      isValidating: !1
    }), I.shouldFocus && !Me && i0(D, (se) => se && Be(C.errors, se), L ? ye : Y.mount), Me;
  }, z = (L) => {
    const I = {
      ...x,
      ...ne.mount ? S : {}
    };
    return cr(L) ? I : cu(L) ? Be(I, L) : L.map((Z) => Be(I, Z));
  }, re = (L, I) => ({
    invalid: !!Be((I || C).errors, L),
    isDirty: !!Be((I || C).dirtyFields, L),
    isTouched: !!Be((I || C).touchedFields, L),
    error: Be((I || C).errors, L)
  }), ge = (L) => {
    L && uy(L).forEach((I) => ra(C.errors, I)), ee.state.next({
      errors: L ? C.errors : {}
    });
  }, de = (L, I, Z) => {
    const Me = (Be(D, L, { _f: {} })._f || {}).ref;
    Un(C.errors, L, {
      ...I,
      ref: Me
    }), ee.state.next({
      name: L,
      errors: C.errors,
      isValid: !1
    }), Z && Z.shouldFocus && Me && Me.focus && Me.focus();
  }, ze = (L, I) => ss(L) ? ee.values.subscribe({
    next: (Z) => L(Ne(void 0, I), Z)
  }) : Ne(L, I, !0), Ce = (L, I = {}) => {
    for (const Z of L ? uy(L) : Y.mount)
      Y.mount.delete(Z), Y.array.delete(Z), I.keepValue || (ra(D, Z), ra(S, Z)), !I.keepError && ra(C.errors, Z), !I.keepDirty && ra(C.dirtyFields, Z), !I.keepTouched && ra(C.touchedFields, Z), !m.shouldUnregister && !I.keepDefaultValue && ra(x, Z);
    ee.values.next({
      values: { ...S }
    }), ee.state.next({
      ...C,
      ...I.keepDirty ? { isDirty: he() } : {}
    }), !I.keepIsValid && Re();
  }, we = (L, I = {}) => {
    let Z = Be(D, L);
    const Me = ad(I.disabled);
    return Un(D, L, {
      ...Z || {},
      _f: {
        ...Z && Z._f ? Z._f : { ref: { name: L } },
        name: L,
        mount: !0,
        ...I
      }
    }), Y.mount.add(L), Z ? Me && Un(S, L, I.disabled ? void 0 : Be(S, L, XE(Z._f))) : st(L, !0, I.value), {
      ...Me ? { disabled: I.disabled } : {},
      ...m.progressive ? {
        required: !!I.required,
        min: mv(I.min),
        max: mv(I.max),
        minLength: mv(I.minLength),
        maxLength: mv(I.maxLength),
        pattern: mv(I.pattern)
      } : {},
      name: L,
      onChange: He,
      onBlur: He,
      ref: (ye) => {
        if (ye) {
          we(L, I), Z = Be(D, L);
          const se = cr(ye.value) && ye.querySelectorAll && ye.querySelectorAll("input,select,textarea")[0] || ye, $e = SO(se), Lt = Z._f.refs || [];
          if ($e ? Lt.find((Ht) => Ht === se) : se === Z._f.ref)
            return;
          Un(D, L, {
            _f: {
              ...Z._f,
              ...$e ? {
                refs: [
                  ...Lt.filter(qE),
                  se,
                  ...Array.isArray(Be(x, L)) ? [{}] : []
                ],
                ref: { type: se.type, name: L }
              } : { ref: se }
            }
          }), st(L, !1, void 0, se);
        } else
          Z = Be(D, L, {}), Z._f && (Z._f.mount = !1), (m.shouldUnregister || I.shouldUnregister) && !(L1(Y.array, L) && ne.action) && Y.unMount.add(L);
      }
    };
  }, ke = () => m.shouldFocusError && i0(D, (L) => L && Be(C.errors, L), Y.mount), Ge = (L, I) => async (Z) => {
    Z && (Z.preventDefault && Z.preventDefault(), Z.persist && Z.persist());
    let Me = su(S);
    if (ee.state.next({
      isSubmitting: !0
    }), m.resolver) {
      const { errors: ye, values: se } = await Ft();
      C.errors = ye, Me = se;
    } else
      await Et(D);
    ra(C.errors, "root"), Pi(C.errors) ? (ee.state.next({
      errors: {}
    }), await L(Me, Z)) : (I && await I({ ...C.errors }, Z), ke(), setTimeout(ke)), ee.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Pi(C.errors),
      submitCount: C.submitCount + 1,
      errors: C.errors
    });
  }, mt = (L, I = {}) => {
    Be(D, L) && (cr(I.defaultValue) ? oe(L, Be(x, L)) : (oe(L, I.defaultValue), Un(x, L, I.defaultValue)), I.keepTouched || ra(C.touchedFields, L), I.keepDirty || (ra(C.dirtyFields, L), C.isDirty = I.defaultValue ? he(L, Be(x, L)) : he()), I.keepError || (ra(C.errors, L), Q.isValid && Re()), ee.state.next({ ...C }));
  }, Qt = (L, I = {}) => {
    const Z = L || x, Me = su(Z), ye = L && !Pi(L) ? Me : x;
    if (I.keepDefaultValues || (x = Z), !I.keepValues) {
      if (I.keepDirtyValues || ae)
        for (const se of Y.mount)
          Be(C.dirtyFields, se) ? Un(ye, se, Be(S, se)) : oe(se, Be(ye, se));
      else {
        if (f0 && cr(L))
          for (const se of Y.mount) {
            const $e = Be(D, se);
            if ($e && $e._f) {
              const Lt = Array.isArray($e._f.refs) ? $e._f.refs[0] : $e._f.ref;
              if (cy(Lt)) {
                const Ht = Lt.closest("form");
                if (Ht) {
                  Ht.reset();
                  break;
                }
              }
            }
          }
        D = {};
      }
      S = p.shouldUnregister ? I.keepDefaultValues ? su(x) : {} : su(ye), ee.array.next({
        values: { ...ye }
      }), ee.values.next({
        values: { ...ye }
      });
    }
    Y = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !ne.mount && E(), ne.mount = !Q.isValid || !!I.keepIsValid, ne.watch = !!p.shouldUnregister, ee.state.next({
      submitCount: I.keepSubmitCount ? C.submitCount : 0,
      isDirty: I.keepDirty ? C.isDirty : !!(I.keepDefaultValues && !vc(L, x)),
      isSubmitted: I.keepIsSubmitted ? C.isSubmitted : !1,
      dirtyFields: I.keepDirtyValues ? C.dirtyFields : I.keepDefaultValues && L ? GE(x, L) : {},
      touchedFields: I.keepTouched ? C.touchedFields : {},
      errors: I.keepErrors ? C.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, Se = (L, I) => Qt(ss(L) ? L(S) : L, I);
  return {
    control: {
      register: we,
      unregister: Ce,
      getFieldState: re,
      handleSubmit: Ge,
      setError: de,
      _executeSchema: Ft,
      _getWatch: Ne,
      _getDirty: he,
      _updateValid: Re,
      _removeUnmounted: at,
      _updateFieldArray: Ie,
      _getFieldArray: ht,
      _reset: Qt,
      _resetDefaultValues: () => ss(m.defaultValues) && m.defaultValues().then((L) => {
        Se(L, m.resetOptions), ee.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (L) => {
        C = {
          ...C,
          ...L
        };
      },
      _subjects: ee,
      _proxyFormState: Q,
      get _fields() {
        return D;
      },
      get _formValues() {
        return S;
      },
      get _state() {
        return ne;
      },
      set _state(L) {
        ne = L;
      },
      get _defaultValues() {
        return x;
      },
      get _names() {
        return Y;
      },
      set _names(L) {
        Y = L;
      },
      get _formState() {
        return C;
      },
      set _formState(L) {
        C = L;
      },
      get _options() {
        return m;
      },
      set _options(L) {
        m = {
          ...m,
          ...L
        };
      }
    },
    trigger: R,
    register: we,
    handleSubmit: Ge,
    watch: ze,
    setValue: oe,
    getValues: z,
    reset: Se,
    resetField: mt,
    clearErrors: ge,
    unregister: Ce,
    setError: de,
    setFocus: (L, I = {}) => {
      const Z = Be(D, L), Me = Z && Z._f;
      if (Me) {
        const ye = Me.refs ? Me.refs[0] : Me.ref;
        ye.focus && (ye.focus(), I.shouldSelect && ye.select());
      }
    },
    getFieldState: re
  };
}
function xO(p = {}) {
  const E = xn.useRef(), m = xn.useRef(), [C, D] = xn.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ss(p.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: ss(p.defaultValues) ? void 0 : p.defaultValues
  });
  E.current || (E.current = {
    ...wO(p, () => D((S) => ({ ...S }))),
    formState: C
  });
  const x = E.current.control;
  return x._options = p, p0({
    subject: x._subjects.state,
    next: (S) => {
      N1(S, x._proxyFormState, x._updateFormState, !0) && D({ ...x._formState });
    }
  }), xn.useEffect(() => {
    p.values && !vc(p.values, m.current) ? (x._reset(p.values, x._options.resetOptions), m.current = p.values) : x._resetDefaultValues();
  }, [p.values, x]), xn.useEffect(() => {
    x._state.mount || (x._updateValid(), x._state.mount = !0), x._state.watch && (x._state.watch = !1, x._subjects.state.next({ ...x._formState })), x._removeUnmounted();
  }), E.current.formState = M1(C, x), E.current;
}
const $O = (p) => {
  const { field: E } = vO({ name: p });
  return E;
}, IO = ({
  onSubmit: p
}) => {
  const [E, m] = Vt.useState(!1), [C, D] = Vt.useState(!1), {
    handleSubmit: x,
    register: S,
    reset: ne
  } = xO();
  return { handleSubmit: Vt.useCallback(
    (G) => {
      G.preventDefault(), D(!0), x(p)(G).catch(() => m(!0)).finally(() => {
        D(!1), ne();
      });
    },
    [x, p, ne]
  ), isError: E, isSubmitting: C, register: S };
}, YO = ({
  callback: p,
  config: E,
  observables: m,
  ...C
}) => {
  Vt.useEffect(() => {
    const D = new IntersectionObserver(p, E);
    return m.forEach((x) => {
      D.observe(x);
    }), () => {
      D.disconnect();
    };
  }, [C, p, E, m]);
}, WO = () => {
  const [p, E] = Vt.useState(!1), m = Vt.useCallback(() => {
    E(window.innerWidth > 768);
  }, [E]);
  return Vt.useEffect(() => {
    m();
  }, [m]), oO(window, "resize", m), p;
};
function QO(p, E) {
  Vt.useEffect(() => {
    const m = (C) => {
      const D = p == null ? void 0 : p.current;
      !D || D.contains(C == null ? void 0 : C.target) || E(C);
    };
    return document.addEventListener("mousedown", m), document.addEventListener("touchend", m), () => {
      document.removeEventListener("mousedown", m), document.removeEventListener("touchend", m);
    };
  }, [p, E]);
}
const qO = () => typeof window < "u", GO = (p) => {
  throw new Error(p);
};
export {
  OO as Button,
  FO as Card,
  HO as CardActions,
  BO as CardBody,
  jO as CardContent,
  VO as CardHeader,
  PO as CardMedia,
  LO as Gallery,
  k1 as ImageDialog,
  MO as List,
  NO as ListItem,
  AO as ListItemText,
  zO as TextArea,
  UO as TextField,
  a0 as Typography,
  lO as TypographyClasses,
  qO as isClient,
  GO as raise,
  uO as useDisclosure,
  oO as useEventListener,
  $O as useField,
  IO as useForm,
  YO as useIntersectionObserver,
  WO as useIsDesktop,
  zD as useKeyPress,
  QO as useOutsideClick
};
