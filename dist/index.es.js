import X, { forwardRef as pe, createElement as Qe, useEffect as rr, useRef as nn, useState as er, useLayoutEffect as an, useCallback as bt } from "react";
import { createPortal as sn } from "react-dom";
import './index.css';function Ir(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _t = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var n = {}.hasOwnProperty;
    function r() {
      for (var t = [], s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        if (a) {
          var c = typeof a;
          if (c === "string" || c === "number")
            t.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var f = r.apply(null, a);
              f && t.push(f);
            }
          } else if (c === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              t.push(a.toString());
              continue;
            }
            for (var y in a)
              n.call(a, y) && a[y] && t.push(y);
          }
        }
      }
      return t.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(_t);
var on = _t.exports;
const ve = /* @__PURE__ */ Ir(on), un = (e) => "href" in e, ti = pe(function(n, r) {
  const t = ve("TuiButton", n.className);
  return un(n) ? Qe("a", { ...n, ref: r, className: t }, n.children) : Qe("button", { ...n, ref: r, className: t }, n.children);
});
var Et = {}, xt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r;
    }
  });
  function n(t, s) {
    return {
      handler: t,
      config: s
    };
  }
  n.withOptions = function(t, s = () => ({})) {
    const a = function(c) {
      return {
        __options: c,
        handler: t(c),
        config: s(c)
      };
    };
    return a.__isOptionsFunction = !0, a.__pluginFunction = t, a.__configFunction = s, a;
  };
  const r = n;
})(xt);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  const n = /* @__PURE__ */ r(xt);
  function r(s) {
    return s && s.__esModule ? s : {
      default: s
    };
  }
  const t = n.default;
})(Et);
let br = Et;
var cn = (br.__esModule ? br : { default: br }).default;
const ln = /* @__PURE__ */ Ir(cn);
function ni(e) {
  const n = Object.entries((e == null ? void 0 : e.overrides) ?? {}).reduce(
    (r, [t, s]) => {
      const a = Object.entries(s).reduce(
        (c, [f, y]) => (c[f] = `${y} !important`, c),
        {}
      );
      return Object.assign(r, { [t]: a }), r;
    },
    {}
  );
  return ln(
    ({ addComponents: r }) => {
      r(n);
    },
    {
      theme: {
        darkMode: "class",
        fontFamily: {
          serif: ["NotoSerif-Variable"],
          body: ["Koulen"],
          sans: ["Finlandica-Variable"]
        },
        extend: {
          colors: {
            primary: {
              50: "#f5f3ff",
              100: "#edeafd",
              200: "#ddd7fd",
              300: "#c3b7fb",
              400: "#a78ff6",
              500: "#8a61f1",
              600: "#7a40e7",
              700: "#753dd6",
              800: "#5926b1",
              900: "#4a2191",
              950: "#2d1362"
            }
          }
        }
      }
    }
  );
}
var jr = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function fn() {
  if (et)
    return Ke;
  et = 1;
  var e = X, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, y, E) {
    var w, b = {}, S = null, Y = null;
    E !== void 0 && (S = "" + E), y.key !== void 0 && (S = "" + y.key), y.ref !== void 0 && (Y = y.ref);
    for (w in y)
      t.call(y, w) && !a.hasOwnProperty(w) && (b[w] = y[w]);
    if (f && f.defaultProps)
      for (w in y = f.defaultProps, y)
        b[w] === void 0 && (b[w] = y[w]);
    return { $$typeof: n, type: f, key: S, ref: Y, props: b, _owner: s.current };
  }
  return Ke.Fragment = r, Ke.jsx = c, Ke.jsxs = c, Ke;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function dn() {
  return rt || (rt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = X, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), Z = Symbol.iterator, Q = "@@iterator";
    function ae(i) {
      if (i === null || typeof i != "object")
        return null;
      var d = Z && i[Z] || i[Q];
      return typeof d == "function" ? d : null;
    }
    var se = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(i) {
      {
        for (var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), j = 1; j < d; j++)
          p[j - 1] = arguments[j];
        z("error", i, p);
      }
    }
    function z(i, d, p) {
      {
        var j = se.ReactDebugCurrentFrame, H = j.getStackAddendum();
        H !== "" && (d += "%s", p = p.concat([H]));
        var ee = p.map(function(q) {
          return String(q);
        });
        ee.unshift("Warning: " + d), Function.prototype.apply.call(console[i], console, ee);
      }
    }
    var G = !1, h = !1, be = !1, Ae = !1, Pe = !1, he;
    he = Symbol.for("react.module.reference");
    function Te(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === t || i === a || Pe || i === s || i === E || i === w || Ae || i === Y || G || h || be || typeof i == "object" && i !== null && (i.$$typeof === S || i.$$typeof === b || i.$$typeof === c || i.$$typeof === f || i.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === he || i.getModuleId !== void 0));
    }
    function ge(i, d, p) {
      var j = i.displayName;
      if (j)
        return j;
      var H = d.displayName || d.name || "";
      return H !== "" ? p + "(" + H + ")" : p;
    }
    function $(i) {
      return i.displayName || "Context";
    }
    function A(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case t:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case E:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case f:
            var d = i;
            return $(d) + ".Consumer";
          case c:
            var p = i;
            return $(p._context) + ".Provider";
          case y:
            return ge(i, i.render, "ForwardRef");
          case b:
            var j = i.displayName || null;
            return j !== null ? j : A(i.type) || "Memo";
          case S: {
            var H = i, ee = H._payload, q = H._init;
            try {
              return A(q(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, ne = 0, re, ue, _e, Oe, v, T, V;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function k() {
      {
        if (ne === 0) {
          re = console.log, ue = console.info, _e = console.warn, Oe = console.error, v = console.group, T = console.groupCollapsed, V = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: D,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        ne++;
      }
    }
    function W() {
      {
        if (ne--, ne === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, i, {
              value: re
            }),
            info: M({}, i, {
              value: ue
            }),
            warn: M({}, i, {
              value: _e
            }),
            error: M({}, i, {
              value: Oe
            }),
            group: M({}, i, {
              value: v
            }),
            groupCollapsed: M({}, i, {
              value: T
            }),
            groupEnd: M({}, i, {
              value: V
            })
          });
        }
        ne < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = se.ReactCurrentDispatcher, P;
    function I(i, d, p) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (H) {
            var j = H.stack.trim().match(/\n( *(at )?)/);
            P = j && j[1] || "";
          }
        return `
` + P + i;
      }
    }
    var U = !1, N;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      N = new de();
    }
    function g(i, d) {
      if (!i || U)
        return "";
      {
        var p = N.get(i);
        if (p !== void 0)
          return p;
      }
      var j;
      U = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = F.current, F.current = null, k();
      try {
        if (d) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Ie) {
              j = Ie;
            }
            Reflect.construct(i, [], q);
          } else {
            try {
              q.call();
            } catch (Ie) {
              j = Ie;
            }
            i.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            j = Ie;
          }
          i();
        }
      } catch (Ie) {
        if (Ie && j && typeof Ie.stack == "string") {
          for (var B = Ie.stack.split(`
`), Ee = j.stack.split(`
`), ce = B.length - 1, fe = Ee.length - 1; ce >= 1 && fe >= 0 && B[ce] !== Ee[fe]; )
            fe--;
          for (; ce >= 1 && fe >= 0; ce--, fe--)
            if (B[ce] !== Ee[fe]) {
              if (ce !== 1 || fe !== 1)
                do
                  if (ce--, fe--, fe < 0 || B[ce] !== Ee[fe]) {
                    var Se = `
` + B[ce].replace(" at new ", " at ");
                    return i.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", i.displayName)), typeof i == "function" && N.set(i, Se), Se;
                  }
                while (ce >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        U = !1, F.current = ee, W(), Error.prepareStackTrace = H;
      }
      var Be = i ? i.displayName || i.name : "", Qr = Be ? I(Be) : "";
      return typeof i == "function" && N.set(i, Qr), Qr;
    }
    function we(i, d, p) {
      return g(i, !1);
    }
    function Me(i) {
      var d = i.prototype;
      return !!(d && d.isReactComponent);
    }
    function Le(i, d, p) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return g(i, Me(i));
      if (typeof i == "string")
        return I(i);
      switch (i) {
        case E:
          return I("Suspense");
        case w:
          return I("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case y:
            return we(i.render);
          case b:
            return Le(i.type, d, p);
          case S: {
            var j = i, H = j._payload, ee = j._init;
            try {
              return Le(ee(H), d, p);
            } catch {
            }
          }
        }
      return "";
    }
    var o = Object.prototype.hasOwnProperty, u = {}, l = se.ReactDebugCurrentFrame;
    function O(i) {
      if (i) {
        var d = i._owner, p = Le(i.type, i._source, d ? d.type : null);
        l.setExtraStackFrame(p);
      } else
        l.setExtraStackFrame(null);
    }
    function _(i, d, p, j, H) {
      {
        var ee = Function.call.bind(o);
        for (var q in i)
          if (ee(i, q)) {
            var B = void 0;
            try {
              if (typeof i[q] != "function") {
                var Ee = Error((j || "React class") + ": " + p + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              B = i[q](d, q, j, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              B = ce;
            }
            B && !(B instanceof Error) && (O(H), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", p, q, typeof B), O(null)), B instanceof Error && !(B.message in u) && (u[B.message] = !0, O(H), R("Failed %s type: %s", p, B.message), O(null));
          }
      }
    }
    var m = Array.isArray;
    function C(i) {
      return m(i);
    }
    function ie(i) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, p = d && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return p;
      }
    }
    function oe(i) {
      try {
        return Ve(i), !1;
      } catch {
        return !0;
      }
    }
    function Ve(i) {
      return "" + i;
    }
    function ir(i) {
      if (oe(i))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ie(i)), Ve(i);
    }
    var De = se.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, Ge, Je;
    Je = {};
    function sr(i) {
      if (o.call(i, "ref")) {
        var d = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Bt(i) {
      if (o.call(i, "key")) {
        var d = Object.getOwnPropertyDescriptor(i, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Yt(i, d) {
      if (typeof i.ref == "string" && De.current && d && De.current.stateNode !== d) {
        var p = A(De.current.type);
        Je[p] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(De.current.type), i.ref), Je[p] = !0);
      }
    }
    function qt(i, d) {
      {
        var p = function() {
          ar || (ar = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        p.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function zt(i, d) {
      {
        var p = function() {
          Ge || (Ge = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        p.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var Ht = function(i, d, p, j, H, ee, q) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: i,
        key: d,
        ref: p,
        props: q,
        // Record the component responsible for creating this element.
        _owner: ee
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function Gt(i, d, p, j, H) {
      {
        var ee, q = {}, B = null, Ee = null;
        p !== void 0 && (ir(p), B = "" + p), Bt(d) && (ir(d.key), B = "" + d.key), sr(d) && (Ee = d.ref, Yt(d, H));
        for (ee in d)
          o.call(d, ee) && !He.hasOwnProperty(ee) && (q[ee] = d[ee]);
        if (i && i.defaultProps) {
          var ce = i.defaultProps;
          for (ee in ce)
            q[ee] === void 0 && (q[ee] = ce[ee]);
        }
        if (B || Ee) {
          var fe = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          B && qt(q, fe), Ee && zt(q, fe);
        }
        return Ht(i, B, Ee, H, j, De.current, q);
      }
    }
    var mr = se.ReactCurrentOwner, Hr = se.ReactDebugCurrentFrame;
    function Ue(i) {
      if (i) {
        var d = i._owner, p = Le(i.type, i._source, d ? d.type : null);
        Hr.setExtraStackFrame(p);
      } else
        Hr.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function pr(i) {
      return typeof i == "object" && i !== null && i.$$typeof === n;
    }
    function Gr() {
      {
        if (mr.current) {
          var i = A(mr.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Jt(i) {
      {
        if (i !== void 0) {
          var d = i.fileName.replace(/^.*[\\\/]/, ""), p = i.lineNumber;
          return `

Check your code at ` + d + ":" + p + ".";
        }
        return "";
      }
    }
    var Jr = {};
    function Kt(i) {
      {
        var d = Gr();
        if (!d) {
          var p = typeof i == "string" ? i : i.displayName || i.name;
          p && (d = `

Check the top-level render call using <` + p + ">.");
        }
        return d;
      }
    }
    function Kr(i, d) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var p = Kt(d);
        if (Jr[p])
          return;
        Jr[p] = !0;
        var j = "";
        i && i._owner && i._owner !== mr.current && (j = " It was passed a child from " + A(i._owner.type) + "."), Ue(i), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, j), Ue(null);
      }
    }
    function Xr(i, d) {
      {
        if (typeof i != "object")
          return;
        if (C(i))
          for (var p = 0; p < i.length; p++) {
            var j = i[p];
            pr(j) && Kr(j, d);
          }
        else if (pr(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var H = ae(i);
          if (typeof H == "function" && H !== i.entries)
            for (var ee = H.call(i), q; !(q = ee.next()).done; )
              pr(q.value) && Kr(q.value, d);
        }
      }
    }
    function Xt(i) {
      {
        var d = i.type;
        if (d == null || typeof d == "string")
          return;
        var p;
        if (typeof d == "function")
          p = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === b))
          p = d.propTypes;
        else
          return;
        if (p) {
          var j = A(d);
          _(p, i.props, "prop", j, i);
        } else if (d.PropTypes !== void 0 && !gr) {
          gr = !0;
          var H = A(d);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zt(i) {
      {
        for (var d = Object.keys(i.props), p = 0; p < d.length; p++) {
          var j = d[p];
          if (j !== "children" && j !== "key") {
            Ue(i), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Ue(null);
            break;
          }
        }
        i.ref !== null && (Ue(i), R("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
      }
    }
    function Zr(i, d, p, j, H, ee) {
      {
        var q = Te(i);
        if (!q) {
          var B = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = Jt(H);
          Ee ? B += Ee : B += Gr();
          var ce;
          i === null ? ce = "null" : C(i) ? ce = "array" : i !== void 0 && i.$$typeof === n ? (ce = "<" + (A(i.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof i, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, B);
        }
        var fe = Gt(i, d, p, H, ee);
        if (fe == null)
          return fe;
        if (q) {
          var Se = d.children;
          if (Se !== void 0)
            if (j)
              if (C(Se)) {
                for (var Be = 0; Be < Se.length; Be++)
                  Xr(Se[Be], i);
                Object.freeze && Object.freeze(Se);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xr(Se, i);
        }
        return i === t ? Zt(fe) : Xt(fe), fe;
      }
    }
    function Qt(i, d, p) {
      return Zr(i, d, p, !0);
    }
    function en(i, d, p) {
      return Zr(i, d, p, !1);
    }
    var rn = en, tn = Qt;
    Xe.Fragment = t, Xe.jsx = rn, Xe.jsxs = tn;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? jr.exports = fn() : jr.exports = dn();
var L = jr.exports;
function vn(e, n) {
  rr(() => {
    const r = (t) => {
      e.includes(t.code) && n(t);
    };
    return document.addEventListener("keydown", r), () => {
      document.removeEventListener("keydown", r);
    };
  }, [n, e]);
}
var kr = { exports: {} }, or = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function yn() {
  if (tt)
    return J;
  tt = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, w = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, Z = e ? Symbol.for("react.lazy") : 60116, Q = e ? Symbol.for("react.block") : 60121, ae = e ? Symbol.for("react.fundamental") : 60117, se = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function z(h) {
    if (typeof h == "object" && h !== null) {
      var be = h.$$typeof;
      switch (be) {
        case n:
          switch (h = h.type, h) {
            case y:
            case E:
            case t:
            case a:
            case s:
            case b:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case f:
                case w:
                case Z:
                case Y:
                case c:
                  return h;
                default:
                  return be;
              }
          }
        case r:
          return be;
      }
    }
  }
  function G(h) {
    return z(h) === E;
  }
  return J.AsyncMode = y, J.ConcurrentMode = E, J.ContextConsumer = f, J.ContextProvider = c, J.Element = n, J.ForwardRef = w, J.Fragment = t, J.Lazy = Z, J.Memo = Y, J.Portal = r, J.Profiler = a, J.StrictMode = s, J.Suspense = b, J.isAsyncMode = function(h) {
    return G(h) || z(h) === y;
  }, J.isConcurrentMode = G, J.isContextConsumer = function(h) {
    return z(h) === f;
  }, J.isContextProvider = function(h) {
    return z(h) === c;
  }, J.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === n;
  }, J.isForwardRef = function(h) {
    return z(h) === w;
  }, J.isFragment = function(h) {
    return z(h) === t;
  }, J.isLazy = function(h) {
    return z(h) === Z;
  }, J.isMemo = function(h) {
    return z(h) === Y;
  }, J.isPortal = function(h) {
    return z(h) === r;
  }, J.isProfiler = function(h) {
    return z(h) === a;
  }, J.isStrictMode = function(h) {
    return z(h) === s;
  }, J.isSuspense = function(h) {
    return z(h) === b;
  }, J.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === E || h === a || h === s || h === b || h === S || typeof h == "object" && h !== null && (h.$$typeof === Z || h.$$typeof === Y || h.$$typeof === c || h.$$typeof === f || h.$$typeof === w || h.$$typeof === ae || h.$$typeof === se || h.$$typeof === R || h.$$typeof === Q);
  }, J.typeOf = z, J;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function hn() {
  return nt || (nt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, y = e ? Symbol.for("react.async_mode") : 60111, E = e ? Symbol.for("react.concurrent_mode") : 60111, w = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, Z = e ? Symbol.for("react.lazy") : 60116, Q = e ? Symbol.for("react.block") : 60121, ae = e ? Symbol.for("react.fundamental") : 60117, se = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function z(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === t || g === E || g === a || g === s || g === b || g === S || typeof g == "object" && g !== null && (g.$$typeof === Z || g.$$typeof === Y || g.$$typeof === c || g.$$typeof === f || g.$$typeof === w || g.$$typeof === ae || g.$$typeof === se || g.$$typeof === R || g.$$typeof === Q);
    }
    function G(g) {
      if (typeof g == "object" && g !== null) {
        var we = g.$$typeof;
        switch (we) {
          case n:
            var Me = g.type;
            switch (Me) {
              case y:
              case E:
              case t:
              case a:
              case s:
              case b:
                return Me;
              default:
                var Le = Me && Me.$$typeof;
                switch (Le) {
                  case f:
                  case w:
                  case Z:
                  case Y:
                  case c:
                    return Le;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var h = y, be = E, Ae = f, Pe = c, he = n, Te = w, ge = t, $ = Z, A = Y, M = r, ne = a, re = s, ue = b, _e = !1;
    function Oe(g) {
      return _e || (_e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(g) || G(g) === y;
    }
    function v(g) {
      return G(g) === E;
    }
    function T(g) {
      return G(g) === f;
    }
    function V(g) {
      return G(g) === c;
    }
    function D(g) {
      return typeof g == "object" && g !== null && g.$$typeof === n;
    }
    function k(g) {
      return G(g) === w;
    }
    function W(g) {
      return G(g) === t;
    }
    function F(g) {
      return G(g) === Z;
    }
    function P(g) {
      return G(g) === Y;
    }
    function I(g) {
      return G(g) === r;
    }
    function U(g) {
      return G(g) === a;
    }
    function N(g) {
      return G(g) === s;
    }
    function de(g) {
      return G(g) === b;
    }
    K.AsyncMode = h, K.ConcurrentMode = be, K.ContextConsumer = Ae, K.ContextProvider = Pe, K.Element = he, K.ForwardRef = Te, K.Fragment = ge, K.Lazy = $, K.Memo = A, K.Portal = M, K.Profiler = ne, K.StrictMode = re, K.Suspense = ue, K.isAsyncMode = Oe, K.isConcurrentMode = v, K.isContextConsumer = T, K.isContextProvider = V, K.isElement = D, K.isForwardRef = k, K.isFragment = W, K.isLazy = F, K.isMemo = P, K.isPortal = I, K.isProfiler = U, K.isStrictMode = N, K.isSuspense = de, K.isValidElementType = z, K.typeOf = G;
  }()), K;
}
var it;
function Tt() {
  return it || (it = 1, process.env.NODE_ENV === "production" ? or.exports = yn() : or.exports = hn()), or.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _r, at;
function mn() {
  if (at)
    return _r;
  at = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function t(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var c = {}, f = 0; f < 10; f++)
        c["_" + String.fromCharCode(f)] = f;
      var y = Object.getOwnPropertyNames(c).map(function(w) {
        return c[w];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var E = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        E[w] = w;
      }), Object.keys(Object.assign({}, E)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _r = s() ? Object.assign : function(a, c) {
    for (var f, y = t(a), E, w = 1; w < arguments.length; w++) {
      f = Object(arguments[w]);
      for (var b in f)
        n.call(f, b) && (y[b] = f[b]);
      if (e) {
        E = e(f);
        for (var S = 0; S < E.length; S++)
          r.call(f, E[S]) && (y[E[S]] = f[E[S]]);
      }
    }
    return y;
  }, _r;
}
var Er, st;
function Nr() {
  if (st)
    return Er;
  st = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Er = e, Er;
}
var xr, ot;
function wt() {
  return ot || (ot = 1, xr = Function.call.bind(Object.prototype.hasOwnProperty)), xr;
}
var Tr, ut;
function gn() {
  if (ut)
    return Tr;
  ut = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = Nr(), r = {}, t = wt();
    e = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function s(a, c, f, y, E) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in a)
        if (t(a, w)) {
          var b;
          try {
            if (typeof a[w] != "function") {
              var S = Error(
                (y || "React class") + ": " + f + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            b = a[w](c, w, y, f, null, n);
          } catch (Z) {
            b = Z;
          }
          if (b && !(b instanceof Error) && e(
            (y || "React class") + ": type specification of " + f + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), b instanceof Error && !(b.message in r)) {
            r[b.message] = !0;
            var Y = E ? E() : "";
            e(
              "Failed " + f + " type: " + b.message + (Y ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Tr = s, Tr;
}
var wr, ct;
function pn() {
  if (ct)
    return wr;
  ct = 1;
  var e = Tt(), n = mn(), r = Nr(), t = wt(), s = gn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(f) {
    var y = "Warning: " + f;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return wr = function(f, y) {
    var E = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function b(v) {
      var T = v && (E && v[E] || v[w]);
      if (typeof T == "function")
        return T;
    }
    var S = "<<anonymous>>", Y = {
      array: se("array"),
      bigint: se("bigint"),
      bool: se("boolean"),
      func: se("function"),
      number: se("number"),
      object: se("object"),
      string: se("string"),
      symbol: se("symbol"),
      any: R(),
      arrayOf: z,
      element: G(),
      elementType: h(),
      instanceOf: be,
      node: Te(),
      objectOf: Pe,
      oneOf: Ae,
      oneOfType: he,
      shape: $,
      exact: A
    };
    function Z(v, T) {
      return v === T ? v !== 0 || 1 / v === 1 / T : v !== v && T !== T;
    }
    function Q(v, T) {
      this.message = v, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    Q.prototype = Error.prototype;
    function ae(v) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, V = 0;
      function D(W, F, P, I, U, N, de) {
        if (I = I || S, N = N || P, de !== r) {
          if (y) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = I + ":" + P;
            !T[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[we] = !0, V++);
          }
        }
        return F[P] == null ? W ? F[P] === null ? new Q("The " + U + " `" + N + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new Q("The " + U + " `" + N + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : v(F, P, I, U, N);
      }
      var k = D.bind(null, !1);
      return k.isRequired = D.bind(null, !0), k;
    }
    function se(v) {
      function T(V, D, k, W, F, P) {
        var I = V[D], U = re(I);
        if (U !== v) {
          var N = ue(I);
          return new Q(
            "Invalid " + W + " `" + F + "` of type " + ("`" + N + "` supplied to `" + k + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return ae(T);
    }
    function R() {
      return ae(c);
    }
    function z(v) {
      function T(V, D, k, W, F) {
        if (typeof v != "function")
          return new Q("Property `" + F + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var P = V[D];
        if (!Array.isArray(P)) {
          var I = re(P);
          return new Q("Invalid " + W + " `" + F + "` of type " + ("`" + I + "` supplied to `" + k + "`, expected an array."));
        }
        for (var U = 0; U < P.length; U++) {
          var N = v(P, U, k, W, F + "[" + U + "]", r);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return ae(T);
    }
    function G() {
      function v(T, V, D, k, W) {
        var F = T[V];
        if (!f(F)) {
          var P = re(F);
          return new Q("Invalid " + k + " `" + W + "` of type " + ("`" + P + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return ae(v);
    }
    function h() {
      function v(T, V, D, k, W) {
        var F = T[V];
        if (!e.isValidElementType(F)) {
          var P = re(F);
          return new Q("Invalid " + k + " `" + W + "` of type " + ("`" + P + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return ae(v);
    }
    function be(v) {
      function T(V, D, k, W, F) {
        if (!(V[D] instanceof v)) {
          var P = v.name || S, I = Oe(V[D]);
          return new Q("Invalid " + W + " `" + F + "` of type " + ("`" + I + "` supplied to `" + k + "`, expected ") + ("instance of `" + P + "`."));
        }
        return null;
      }
      return ae(T);
    }
    function Ae(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), c;
      function T(V, D, k, W, F) {
        for (var P = V[D], I = 0; I < v.length; I++)
          if (Z(P, v[I]))
            return null;
        var U = JSON.stringify(v, function(de, g) {
          var we = ue(g);
          return we === "symbol" ? String(g) : g;
        });
        return new Q("Invalid " + W + " `" + F + "` of value `" + String(P) + "` " + ("supplied to `" + k + "`, expected one of " + U + "."));
      }
      return ae(T);
    }
    function Pe(v) {
      function T(V, D, k, W, F) {
        if (typeof v != "function")
          return new Q("Property `" + F + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var P = V[D], I = re(P);
        if (I !== "object")
          return new Q("Invalid " + W + " `" + F + "` of type " + ("`" + I + "` supplied to `" + k + "`, expected an object."));
        for (var U in P)
          if (t(P, U)) {
            var N = v(P, U, k, W, F + "." + U, r);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return ae(T);
    }
    function he(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var T = 0; T < v.length; T++) {
        var V = v[T];
        if (typeof V != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _e(V) + " at index " + T + "."
          ), c;
      }
      function D(k, W, F, P, I) {
        for (var U = [], N = 0; N < v.length; N++) {
          var de = v[N], g = de(k, W, F, P, I, r);
          if (g == null)
            return null;
          g.data && t(g.data, "expectedType") && U.push(g.data.expectedType);
        }
        var we = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new Q("Invalid " + P + " `" + I + "` supplied to " + ("`" + F + "`" + we + "."));
      }
      return ae(D);
    }
    function Te() {
      function v(T, V, D, k, W) {
        return M(T[V]) ? null : new Q("Invalid " + k + " `" + W + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return ae(v);
    }
    function ge(v, T, V, D, k) {
      return new Q(
        (v || "React class") + ": " + T + " type `" + V + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function $(v) {
      function T(V, D, k, W, F) {
        var P = V[D], I = re(P);
        if (I !== "object")
          return new Q("Invalid " + W + " `" + F + "` of type `" + I + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var U in v) {
          var N = v[U];
          if (typeof N != "function")
            return ge(k, W, F, U, ue(N));
          var de = N(P, U, k, W, F + "." + U, r);
          if (de)
            return de;
        }
        return null;
      }
      return ae(T);
    }
    function A(v) {
      function T(V, D, k, W, F) {
        var P = V[D], I = re(P);
        if (I !== "object")
          return new Q("Invalid " + W + " `" + F + "` of type `" + I + "` " + ("supplied to `" + k + "`, expected `object`."));
        var U = n({}, V[D], v);
        for (var N in U) {
          var de = v[N];
          if (t(v, N) && typeof de != "function")
            return ge(k, W, F, N, ue(de));
          if (!de)
            return new Q(
              "Invalid " + W + " `" + F + "` key `" + N + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(V[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var g = de(P, N, k, W, F + "." + N, r);
          if (g)
            return g;
        }
        return null;
      }
      return ae(T);
    }
    function M(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(M);
          if (v === null || f(v))
            return !0;
          var T = b(v);
          if (T) {
            var V = T.call(v), D;
            if (T !== v.entries) {
              for (; !(D = V.next()).done; )
                if (!M(D.value))
                  return !1;
            } else
              for (; !(D = V.next()).done; ) {
                var k = D.value;
                if (k && !M(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(v, T) {
      return v === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function re(v) {
      var T = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : ne(T, v) ? "symbol" : T;
    }
    function ue(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var T = re(v);
      if (T === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function _e(v) {
      var T = ue(v);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function Oe(v) {
      return !v.constructor || !v.constructor.name ? S : v.constructor.name;
    }
    return Y.checkPropTypes = s, Y.resetWarningCache = s.resetWarningCache, Y.PropTypes = Y, Y;
  }, wr;
}
var Or, lt;
function bn() {
  if (lt)
    return Or;
  lt = 1;
  var e = Nr();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, Or = function() {
    function t(c, f, y, E, w, b) {
      if (b !== e) {
        var S = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw S.name = "Invariant Violation", S;
      }
    }
    t.isRequired = t;
    function s() {
      return t;
    }
    var a = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: s,
      element: t,
      elementType: t,
      instanceOf: s,
      node: t,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return a.PropTypes = a, a;
  }, Or;
}
if (process.env.NODE_ENV !== "production") {
  var _n = Tt(), En = !0;
  kr.exports = pn()(_n.isElement, En);
} else
  kr.exports = bn()();
var xn = kr.exports;
const Ce = /* @__PURE__ */ Ir(xn);
function Fr() {
  return Fr = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }, Fr.apply(this, arguments);
}
function Tn(e, n) {
  if (e == null)
    return {};
  var r = wn(e, n), t, s;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (s = 0; s < a.length; s++)
      t = a[s], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
function wn(e, n) {
  if (e == null)
    return {};
  var r = {}, t = Object.keys(e), s, a;
  for (a = 0; a < t.length; a++)
    s = t[a], !(n.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var Lr = pe(function(e, n) {
  var r = e.color, t = r === void 0 ? "currentColor" : r, s = e.size, a = s === void 0 ? 24 : s, c = Tn(e, ["color", "size"]);
  return /* @__PURE__ */ X.createElement("svg", Fr({
    ref: n,
    xmlns: "http://www.w3.org/2000/svg",
    width: a,
    height: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, c), /* @__PURE__ */ X.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
});
Lr.propTypes = {
  color: Ce.string,
  size: Ce.oneOfType([Ce.string, Ce.number])
};
Lr.displayName = "ChevronLeft";
const On = Lr;
function Pr() {
  return Pr = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }, Pr.apply(this, arguments);
}
function Sn(e, n) {
  if (e == null)
    return {};
  var r = Rn(e, n), t, s;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (s = 0; s < a.length; s++)
      t = a[s], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
function Rn(e, n) {
  if (e == null)
    return {};
  var r = {}, t = Object.keys(e), s, a;
  for (a = 0; a < t.length; a++)
    s = t[a], !(n.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var $r = pe(function(e, n) {
  var r = e.color, t = r === void 0 ? "currentColor" : r, s = e.size, a = s === void 0 ? 24 : s, c = Sn(e, ["color", "size"]);
  return /* @__PURE__ */ X.createElement("svg", Pr({
    ref: n,
    xmlns: "http://www.w3.org/2000/svg",
    width: a,
    height: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, c), /* @__PURE__ */ X.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }));
});
$r.propTypes = {
  color: Ce.string,
  size: Ce.oneOfType([Ce.string, Ce.number])
};
$r.displayName = "ChevronRight";
const Cn = $r;
function Vr() {
  return Vr = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }, Vr.apply(this, arguments);
}
function An(e, n) {
  if (e == null)
    return {};
  var r = jn(e, n), t, s;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (s = 0; s < a.length; s++)
      t = a[s], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
function jn(e, n) {
  if (e == null)
    return {};
  var r = {}, t = Object.keys(e), s, a;
  for (a = 0; a < t.length; a++)
    s = t[a], !(n.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var Mr = pe(function(e, n) {
  var r = e.color, t = r === void 0 ? "currentColor" : r, s = e.size, a = s === void 0 ? 24 : s, c = An(e, ["color", "size"]);
  return /* @__PURE__ */ X.createElement("svg", Vr({
    ref: n,
    xmlns: "http://www.w3.org/2000/svg",
    width: a,
    height: a,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, c), /* @__PURE__ */ X.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /* @__PURE__ */ X.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
Mr.propTypes = {
  color: Ce.string,
  size: Ce.oneOfType([Ce.string, Ce.number])
};
Mr.displayName = "X";
const kn = Mr, Fn = (e) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(e), Pn = {
  subtitle1: "TuiSubtitle1",
  subtitle2: "TuiSubtitle2",
  body1: "TuiBody1",
  body2: "TuiBody2",
  caption: "TuiCaption",
  overline: "TuiOverline"
}, lr = ({
  children: e,
  variant: n = "body1",
  ...r
}) => Fn(n) ? Qe(
  n,
  { ...r, className: ve("TuiTypography", r.className) },
  e
) : Qe(
  "p",
  {
    ...r,
    className: ve(
      Pn[n],
      "TuiTypography",
      r.className
    )
  },
  e
), Ot = ({
  imgSrc: e,
  isOpen: n,
  onClose: r,
  onChange: t
}) => {
  const s = nn(null), a = () => {
    t == null || t({ reason: "next" });
  }, c = () => {
    t == null || t({ reason: "prev" });
  };
  return vn(["ArrowRight", "ArrowLeft", "Escape"], (f) => {
    switch (f.key) {
      case "ArrowRight":
        a();
        break;
      case "ArrowLeft":
        c();
        break;
      case "Escape":
        r();
    }
  }), rr(() => {
    document.body.style.overflow = n ? "hidden" : "auto";
  }, [n]), n ? sn(
    /* @__PURE__ */ L.jsxs("div", { className: "fixed flex justify-center top-0 left-0 right-0 bottom-0 z-40 backdrop-blur-sm md:p-8", children: [
      t && /* @__PURE__ */ L.jsx(
        On,
        {
          "aria-label": "Previous",
          onClick: c,
          strokeWidth: 1,
          className: "hidden md:block self-center dark:text-white cursor-pointer md:h-24 md:w-24"
        }
      ),
      /* @__PURE__ */ L.jsxs("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ L.jsx(
          "div",
          {
            "aria-label": "Close",
            onClick: (f) => {
              f.preventDefault(), f.stopPropagation(), r();
            },
            className: "absolute right-4 top-4 cursor-pointer z-50 flex items-center gap-2 md:gap-4",
            children: /* @__PURE__ */ L.jsxs(lr, { variant: "overline", className: "flex gap-2 text-base", children: [
              /* @__PURE__ */ L.jsx(kn, {}),
              "Close"
            ] })
          }
        ),
        /* @__PURE__ */ L.jsx(
          "img",
          {
            ref: s,
            src: e,
            alt: "",
            className: "object-contain m-auto md:h-full md:object-cover object-center"
          }
        )
      ] }),
      t && /* @__PURE__ */ L.jsx(
        Cn,
        {
          "aria-label": "Next",
          onClick: a,
          strokeWidth: 1,
          className: "hidden dark:text-white md:block self-center cursor-pointer md:h-24 md:w-24"
        }
      )
    ] }),
    document.body
  ) : null;
}, ii = ({ images: e, slotProps: n }) => {
  var f;
  const [r, t] = er(NaN);
  if (!e)
    return null;
  const s = () => {
    t((y) => (y + 1) % e.length);
  }, a = () => {
    t((y) => (y - 1 + e.length) % e.length);
  }, c = () => {
    t(NaN);
  };
  return /* @__PURE__ */ L.jsxs(
    "div",
    {
      ...n == null ? void 0 : n.root,
      className: ve(
        "columns-1 sm:columns-2 md:columns-3 gap-4",
        (f = n == null ? void 0 : n.root) == null ? void 0 : f.className
      ),
      children: [
        /* @__PURE__ */ L.jsx(
          Ot,
          {
            onChange: ({ reason: y }) => y === "next" ? s() : a(),
            imgSrc: e[r],
            isOpen: !Number.isNaN(r),
            onClose: c
          }
        ),
        /* @__PURE__ */ L.jsx("div", { className: "grid gap-4", children: e.map((y, E) => {
          var w;
          return /* @__PURE__ */ Qe(
            "img",
            {
              ...n == null ? void 0 : n.image,
              tabIndex: 0,
              onKeyDown: (b) => b.key === "Enter" || b.key === " " && t(E),
              onClick: () => t(E),
              key: y,
              className: ve(
                "h-auto max-w-full cursor-pointer transition ease-in-out md:hover:scale-105 duration-200",
                (w = n == null ? void 0 : n.image) == null ? void 0 : w.className
              ),
              src: y,
              alt: ""
            }
          );
        }) })
      ]
    }
  );
}, ai = pe(
  function(n, r) {
    return /* @__PURE__ */ L.jsx(
      "ul",
      {
        ref: r,
        ...n,
        className: ve("TuiList", n.className)
      }
    );
  }
), si = pe(
  function(n, r) {
    return /* @__PURE__ */ L.jsx(
      "li",
      {
        ref: r,
        ...n,
        className: ve("TuiListItem", n.className)
      }
    );
  }
), oi = ({
  variant: e = "body1",
  children: n,
  slotProps: r
}) => {
  var t;
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      ...r == null ? void 0 : r.root,
      className: ve("TuiListItemText", (t = r == null ? void 0 : r.root) == null ? void 0 : t.className),
      children: /* @__PURE__ */ L.jsx(lr, { variant: e, ...r == null ? void 0 : r.typography, children: n })
    }
  );
};
function St({ slotProps: e, children: n }) {
  var r;
  return /* @__PURE__ */ L.jsx(
    "div",
    {
      ...e == null ? void 0 : e.root,
      className: ve("TuiFormGroup group", (r = e == null ? void 0 : e.root) == null ? void 0 : r.className),
      children: n
    }
  );
}
const Rt = pe(
  function(n) {
    return /* @__PURE__ */ L.jsx("label", { ...n, className: ve("TuiLabel", n.className), children: n.children });
  }
), Ct = pe(
  (e, n) => /* @__PURE__ */ L.jsx(
    "p",
    {
      ref: n,
      ...e,
      className: ve("TuiHelperText", e.className)
    }
  )
), ui = pe(
  function({ slotProps: n, ...r }, t) {
    return /* @__PURE__ */ L.jsxs(St, { ...n == null ? void 0 : n.root, children: [
      /* @__PURE__ */ L.jsxs("div", { className: "flex flex-col-reverse", children: [
        /* @__PURE__ */ L.jsx(
          "textarea",
          {
            ...r,
            id: r.name,
            placeholder: " ",
            className: ve("TuiTextArea peer", r.className),
            "data-should-validate": !!r.error,
            ref: t
          }
        ),
        /* @__PURE__ */ L.jsx(
          Rt,
          {
            className: "peer-focus:font-medium peer-focus:TuiCaption peer-placeholder-shown:TuiBody1 TuiCaption transition-all ease-in-out duration-300",
            ...n == null ? void 0 : n.label,
            htmlFor: r.name,
            children: r.label
          }
        )
      ] }),
      r.error && /* @__PURE__ */ L.jsx(Ct, { ...n == null ? void 0 : n.helperText, children: r.helperText })
    ] });
  }
), ci = pe(
  function({ slotProps: n, ...r }, t) {
    return console.log(r.value), /* @__PURE__ */ L.jsxs(St, { ...n == null ? void 0 : n.root, children: [
      /* @__PURE__ */ L.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ L.jsx(
          "input",
          {
            ...r,
            id: r.name,
            placeholder: " ",
            className: ve("TuiTextField peer", r.className),
            "data-should-validate": !!r.error,
            ref: t
          }
        ),
        /* @__PURE__ */ L.jsx(
          Rt,
          {
            className: "group-focus-within:font-medium group-focus-within:TuiCaption peer-focus:-translate-y-8 peer-focus:TuiCaption peer-placeholder-shown:TuiBody1 peer-placeholder-shown:translate-y-0 TuiCaption -translate-y-8 absolute bottom-4",
            ...n == null ? void 0 : n.label,
            htmlFor: r.name,
            children: r.label
          }
        )
      ] }),
      r.error && /* @__PURE__ */ L.jsx(Ct, { ...n == null ? void 0 : n.helperText, children: r.helperText })
    ] });
  }
), li = pe(
  function(n, r) {
    return /* @__PURE__ */ L.jsx(
      "div",
      {
        ref: r,
        ...n,
        className: ve("TuiCard", n.className)
      }
    );
  }
), fi = pe(
  function(n, r) {
    return /* @__PURE__ */ L.jsx(
      "div",
      {
        ref: r,
        ...n,
        className: ve("TuiCardContent", n.className)
      }
    );
  }
), di = pe(
  function(n, r) {
    return /* @__PURE__ */ L.jsxs(
      "div",
      {
        ref: r,
        ...n,
        className: ve("TuiCardHeader", n.className),
        children: [
          /* @__PURE__ */ L.jsx(lr, { variant: "h6", children: n.title }),
          n.subtitle && /* @__PURE__ */ L.jsx(lr, { variant: "subtitle1", children: n.subtitle })
        ]
      }
    );
  }
), Vn = () => {
  const [e, n] = er(!1);
  return { isOpen: e, onOpen: () => n(!0), onClose: () => n(!1) };
}, vi = pe(
  function(n, r) {
    const { isOpen: t, onClose: s, onOpen: a } = Vn();
    return /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
      /* @__PURE__ */ L.jsx(
        Ot,
        {
          imgSrc: n.src ?? "",
          isOpen: t,
          onClose: s
        }
      ),
      /* @__PURE__ */ L.jsx(
        "img",
        {
          ...n,
          onClick: a,
          ref: r,
          className: ve("TuiCardMedia", n.className)
        }
      )
    ] });
  }
), yi = pe(
  function(n, r) {
    return /* @__PURE__ */ L.jsx(
      "div",
      {
        ref: r,
        ...n,
        className: ve("TuiCardActionArea", n.className),
        children: n.children
      }
    );
  }
), hi = pe(
  function(n, r) {
    return /* @__PURE__ */ L.jsx(
      "div",
      {
        ref: r,
        ...n,
        className: ve("TuiCardBody", n.className),
        children: n.children
      }
    );
  }
), Dn = (e, n, r, t) => {
  an(() => (e == null || e.addEventListener(n, r, t), () => e == null ? void 0 : e.removeEventListener(n, r, t)), [e, n, r, t]);
};
var tr = (e) => e.type === "checkbox", qe = (e) => e instanceof Date, xe = (e) => e == null;
const At = (e) => typeof e == "object";
var ye = (e) => !xe(e) && !Array.isArray(e) && At(e) && !qe(e), jt = (e) => ye(e) && e.target ? tr(e.target) ? e.target.checked : e.target.value : e, In = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, kt = (e, n) => e.has(In(n)), Nn = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return ye(n) && n.hasOwnProperty("isPrototypeOf");
}, Wr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ke(e) {
  let n;
  const r = Array.isArray(e);
  if (e instanceof Date)
    n = new Date(e);
  else if (e instanceof Set)
    n = new Set(e);
  else if (!(Wr && (e instanceof Blob || e instanceof FileList)) && (r || ye(e)))
    if (n = r ? [] : {}, !r && !Nn(e))
      n = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (n[t] = ke(e[t]));
  else
    return e;
  return n;
}
var nr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], le = (e) => e === void 0, x = (e, n, r) => {
  if (!n || !ye(e))
    return r;
  const t = nr(n.split(/[,[\].]+?/)).reduce((s, a) => xe(s) ? s : s[a], e);
  return le(t) || t === e ? le(e[n]) ? r : e[n] : t;
};
const fr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, je = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Ne = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ln = X.createContext(null), Ur = () => X.useContext(Ln);
var Ft = (e, n, r, t = !0) => {
  const s = {
    defaultValues: n._defaultValues
  };
  for (const a in e)
    Object.defineProperty(s, a, {
      get: () => {
        const c = a;
        return n._proxyFormState[c] !== je.all && (n._proxyFormState[c] = !t || je.all), r && (r[c] = !0), e[c];
      }
    });
  return s;
}, Re = (e) => ye(e) && !Object.keys(e).length, Pt = (e, n, r, t) => {
  r(e);
  const { name: s, ...a } = e;
  return Re(a) || Object.keys(a).length >= Object.keys(n).length || Object.keys(a).find((c) => n[c] === (!t || je.all));
}, ur = (e) => Array.isArray(e) ? e : [e], Vt = (e, n, r) => r && n ? e === n : !e || !n || e === n || ur(e).some((t) => t && (t.startsWith(n) || n.startsWith(t)));
function Br(e) {
  const n = X.useRef(e);
  n.current = e, X.useEffect(() => {
    const r = !e.disabled && n.current.subject && n.current.subject.subscribe({
      next: n.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function $n(e) {
  const n = Ur(), { control: r = n.control, disabled: t, name: s, exact: a } = e || {}, [c, f] = X.useState(r._formState), y = X.useRef(!0), E = X.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), w = X.useRef(s);
  return w.current = s, Br({
    disabled: t,
    next: (b) => y.current && Vt(w.current, b.name, a) && Pt(b, E.current, r._updateFormState) && f({
      ...r._formState,
      ...b
    }),
    subject: r._subjects.state
  }), X.useEffect(() => (y.current = !0, E.current.isValid && r._updateValid(!0), () => {
    y.current = !1;
  }), [r]), Ft(c, r, E.current, !1);
}
var Fe = (e) => typeof e == "string", Dt = (e, n, r, t, s) => Fe(e) ? (t && n.watch.add(e), x(r, e, s)) : Array.isArray(e) ? e.map((a) => (t && n.watch.add(a), x(r, a))) : (t && (n.watchAll = !0), r);
function Mn(e) {
  const n = Ur(), { control: r = n.control, name: t, defaultValue: s, disabled: a, exact: c } = e || {}, f = X.useRef(t);
  f.current = t, Br({
    disabled: a,
    subject: r._subjects.values,
    next: (w) => {
      Vt(f.current, w.name, c) && E(ke(Dt(f.current, r._names, w.values || r._formValues, !1, s)));
    }
  });
  const [y, E] = X.useState(r._getWatch(t, s));
  return X.useEffect(() => r._removeUnmounted()), y;
}
var Yr = (e) => /^\w*$/.test(e), It = (e) => nr(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function te(e, n, r) {
  let t = -1;
  const s = Yr(n) ? [n] : It(n), a = s.length, c = a - 1;
  for (; ++t < a; ) {
    const f = s[t];
    let y = r;
    if (t !== c) {
      const E = e[f];
      y = ye(E) || Array.isArray(E) ? E : isNaN(+s[t + 1]) ? {} : [];
    }
    e[f] = y, e = e[f];
  }
  return e;
}
function Wn(e) {
  const n = Ur(), { name: r, control: t = n.control, shouldUnregister: s } = e, a = kt(t._names.array, r), c = Mn({
    control: t,
    name: r,
    defaultValue: x(t._formValues, r, x(t._defaultValues, r, e.defaultValue)),
    exact: !0
  }), f = $n({
    control: t,
    name: r
  }), y = X.useRef(t.register(r, {
    ...e.rules,
    value: c
  }));
  return y.current = t.register(r, e.rules), X.useEffect(() => {
    const E = t._options.shouldUnregister || s, w = (b, S) => {
      const Y = x(t._fields, b);
      Y && (Y._f.mount = S);
    };
    if (w(r, !0), E) {
      const b = ke(x(t._options.defaultValues, r));
      te(t._defaultValues, r, b), le(x(t._formValues, r)) && te(t._formValues, r, b);
    }
    return () => {
      (a ? E && !t._state.action : E) ? t.unregister(r) : w(r, !1);
    };
  }, [r, t, a, s]), {
    field: {
      name: r,
      value: c,
      onChange: X.useCallback((E) => y.current.onChange({
        target: {
          value: jt(E),
          name: r
        },
        type: fr.CHANGE
      }), [r]),
      onBlur: X.useCallback(() => y.current.onBlur({
        target: {
          value: x(t._formValues, r),
          name: r
        },
        type: fr.BLUR
      }), [r, t]),
      ref: (E) => {
        const w = x(t._fields, r);
        w && E && (w._f.ref = {
          focus: () => E.focus(),
          select: () => E.select(),
          setCustomValidity: (b) => E.setCustomValidity(b),
          reportValidity: () => E.reportValidity()
        });
      }
    },
    formState: f,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!x(f.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!x(f.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!x(f.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => x(f.errors, r)
      }
    })
  };
}
var Un = (e, n, r, t, s) => n ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: s || !0
  }
} : {};
const Dr = (e, n, r) => {
  for (const t of r || Object.keys(e)) {
    const s = x(e, t);
    if (s) {
      const { _f: a, ...c } = s;
      if (a && n(a.name)) {
        if (a.ref.focus) {
          a.ref.focus();
          break;
        } else if (a.refs && a.refs[0].focus) {
          a.refs[0].focus();
          break;
        }
      } else
        ye(c) && Dr(c, n);
    }
  }
};
var ft = (e) => ({
  isOnSubmit: !e || e === je.onSubmit,
  isOnBlur: e === je.onBlur,
  isOnChange: e === je.onChange,
  isOnAll: e === je.all,
  isOnTouch: e === je.onTouched
}), dt = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))), Bn = (e, n, r) => {
  const t = nr(x(e, r));
  return te(t, "root", n[r]), te(e, r, t), e;
}, ze = (e) => typeof e == "boolean", qr = (e) => e.type === "file", $e = (e) => typeof e == "function", dr = (e) => {
  if (!Wr)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, cr = (e) => Fe(e), zr = (e) => e.type === "radio", vr = (e) => e instanceof RegExp;
const vt = {
  value: !1,
  isValid: !1
}, yt = { value: !0, isValid: !0 };
var Nt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !le(e[0].attributes.value) ? le(e[0].value) || e[0].value === "" ? yt : { value: e[0].value, isValid: !0 } : yt
    ) : vt;
  }
  return vt;
};
const ht = {
  isValid: !1,
  value: null
};
var Lt = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, ht) : ht;
function mt(e, n, r = "validate") {
  if (cr(e) || Array.isArray(e) && e.every(cr) || ze(e) && !e)
    return {
      type: r,
      message: cr(e) ? e : "",
      ref: n
    };
}
var Ye = (e) => ye(e) && !vr(e) ? e : {
  value: e,
  message: ""
}, gt = async (e, n, r, t, s) => {
  const { ref: a, refs: c, required: f, maxLength: y, minLength: E, min: w, max: b, pattern: S, validate: Y, name: Z, valueAsNumber: Q, mount: ae, disabled: se } = e._f, R = x(n, Z);
  if (!ae || se)
    return {};
  const z = c ? c[0] : a, G = ($) => {
    t && z.reportValidity && (z.setCustomValidity(ze($) ? "" : $ || ""), z.reportValidity());
  }, h = {}, be = zr(a), Ae = tr(a), Pe = be || Ae, he = (Q || qr(a)) && le(a.value) && le(R) || dr(a) && a.value === "" || R === "" || Array.isArray(R) && !R.length, Te = Un.bind(null, Z, r, h), ge = ($, A, M, ne = Ne.maxLength, re = Ne.minLength) => {
    const ue = $ ? A : M;
    h[Z] = {
      type: $ ? ne : re,
      message: ue,
      ref: a,
      ...Te($ ? ne : re, ue)
    };
  };
  if (s ? !Array.isArray(R) || !R.length : f && (!Pe && (he || xe(R)) || ze(R) && !R || Ae && !Nt(c).isValid || be && !Lt(c).isValid)) {
    const { value: $, message: A } = cr(f) ? { value: !!f, message: f } : Ye(f);
    if ($ && (h[Z] = {
      type: Ne.required,
      message: A,
      ref: z,
      ...Te(Ne.required, A)
    }, !r))
      return G(A), h;
  }
  if (!he && (!xe(w) || !xe(b))) {
    let $, A;
    const M = Ye(b), ne = Ye(w);
    if (!xe(R) && !isNaN(R)) {
      const re = a.valueAsNumber || R && +R;
      xe(M.value) || ($ = re > M.value), xe(ne.value) || (A = re < ne.value);
    } else {
      const re = a.valueAsDate || new Date(R), ue = (v) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + v), _e = a.type == "time", Oe = a.type == "week";
      Fe(M.value) && R && ($ = _e ? ue(R) > ue(M.value) : Oe ? R > M.value : re > new Date(M.value)), Fe(ne.value) && R && (A = _e ? ue(R) < ue(ne.value) : Oe ? R < ne.value : re < new Date(ne.value));
    }
    if (($ || A) && (ge(!!$, M.message, ne.message, Ne.max, Ne.min), !r))
      return G(h[Z].message), h;
  }
  if ((y || E) && !he && (Fe(R) || s && Array.isArray(R))) {
    const $ = Ye(y), A = Ye(E), M = !xe($.value) && R.length > +$.value, ne = !xe(A.value) && R.length < +A.value;
    if ((M || ne) && (ge(M, $.message, A.message), !r))
      return G(h[Z].message), h;
  }
  if (S && !he && Fe(R)) {
    const { value: $, message: A } = Ye(S);
    if (vr($) && !R.match($) && (h[Z] = {
      type: Ne.pattern,
      message: A,
      ref: a,
      ...Te(Ne.pattern, A)
    }, !r))
      return G(A), h;
  }
  if (Y) {
    if ($e(Y)) {
      const $ = await Y(R, n), A = mt($, z);
      if (A && (h[Z] = {
        ...A,
        ...Te(Ne.validate, A.message)
      }, !r))
        return G(A.message), h;
    } else if (ye(Y)) {
      let $ = {};
      for (const A in Y) {
        if (!Re($) && !r)
          break;
        const M = mt(await Y[A](R, n), z, A);
        M && ($ = {
          ...M,
          ...Te(A, M.message)
        }, G(M.message), r && (h[Z] = $));
      }
      if (!Re($) && (h[Z] = {
        ref: z,
        ...$
      }, !r))
        return h;
    }
  }
  return G(!0), h;
};
function Yn(e, n) {
  const r = n.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = le(e) ? t++ : e[n[t++]];
  return e;
}
function qn(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !le(e[n]))
      return !1;
  return !0;
}
function me(e, n) {
  const r = Array.isArray(n) ? n : Yr(n) ? [n] : It(n), t = r.length === 1 ? e : Yn(e, r), s = r.length - 1, a = r[s];
  return t && delete t[a], s !== 0 && (ye(t) && Re(t) || Array.isArray(t) && qn(t)) && me(e, r.slice(0, -1)), e;
}
function Sr() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const a of e)
        a.next && a.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((a) => a !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}
var yr = (e) => xe(e) || !At(e);
function We(e, n) {
  if (yr(e) || yr(n))
    return e === n;
  if (qe(e) && qe(n))
    return e.getTime() === n.getTime();
  const r = Object.keys(e), t = Object.keys(n);
  if (r.length !== t.length)
    return !1;
  for (const s of r) {
    const a = e[s];
    if (!t.includes(s))
      return !1;
    if (s !== "ref") {
      const c = n[s];
      if (qe(a) && qe(c) || ye(a) && ye(c) || Array.isArray(a) && Array.isArray(c) ? !We(a, c) : a !== c)
        return !1;
    }
  }
  return !0;
}
var $t = (e) => e.type === "select-multiple", zn = (e) => zr(e) || tr(e), Rr = (e) => dr(e) && e.isConnected, Mt = (e) => {
  for (const n in e)
    if ($e(e[n]))
      return !0;
  return !1;
};
function hr(e, n = {}) {
  const r = Array.isArray(e);
  if (ye(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || ye(e[t]) && !Mt(e[t]) ? (n[t] = Array.isArray(e[t]) ? [] : {}, hr(e[t], n[t])) : xe(e[t]) || (n[t] = !0);
  return n;
}
function Wt(e, n, r) {
  const t = Array.isArray(e);
  if (ye(e) || t)
    for (const s in e)
      Array.isArray(e[s]) || ye(e[s]) && !Mt(e[s]) ? le(n) || yr(r[s]) ? r[s] = Array.isArray(e[s]) ? hr(e[s], []) : { ...hr(e[s]) } : Wt(e[s], xe(n) ? {} : n[s], r[s]) : r[s] = !We(e[s], n[s]);
  return r;
}
var Cr = (e, n) => Wt(e, n, hr(n)), Ut = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: t }) => le(e) ? e : n ? e === "" ? NaN : e && +e : r && Fe(e) ? new Date(e) : t ? t(e) : e;
function Ar(e) {
  const n = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : n.disabled))
    return qr(n) ? n.files : zr(n) ? Lt(e.refs).value : $t(n) ? [...n.selectedOptions].map(({ value: r }) => r) : tr(n) ? Nt(e.refs).value : Ut(le(n.value) ? e.ref.value : n.value, e);
}
var Hn = (e, n, r, t) => {
  const s = {};
  for (const a of e) {
    const c = x(n, a);
    c && te(s, a, c._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: t
  };
}, Ze = (e) => le(e) ? e : vr(e) ? e.source : ye(e) ? vr(e.value) ? e.value.source : e.value : e, Gn = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function pt(e, n, r) {
  const t = x(e, r);
  if (t || Yr(r))
    return {
      error: t,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const a = s.join("."), c = x(n, a), f = x(e, a);
    if (c && !Array.isArray(c) && r !== a)
      return { name: r };
    if (f && f.type)
      return {
        name: a,
        error: f
      };
    s.pop();
  }
  return {
    name: r
  };
}
var Jn = (e, n, r, t, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(n || e) : (r ? t.isOnBlur : s.isOnBlur) ? !e : (r ? t.isOnChange : s.isOnChange) ? e : !0, Kn = (e, n) => !nr(x(e, n)).length && me(e, n);
const Xn = {
  mode: je.onSubmit,
  reValidateMode: je.onChange,
  shouldFocusError: !0
};
function Zn(e = {}, n) {
  let r = {
    ...Xn,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: $e(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, s = {}, a = ye(r.defaultValues) || ye(r.values) ? ke(r.defaultValues || r.values) || {} : {}, c = r.shouldUnregister ? {} : ke(a), f = {
    action: !1,
    mount: !1,
    watch: !1
  }, y = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, E, w = 0;
  const b = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, S = {
    values: Sr(),
    array: Sr(),
    state: Sr()
  }, Y = e.resetOptions && e.resetOptions.keepDirtyValues, Z = ft(r.mode), Q = ft(r.reValidateMode), ae = r.criteriaMode === je.all, se = (o) => (u) => {
    clearTimeout(w), w = setTimeout(o, u);
  }, R = async (o) => {
    if (b.isValid || o) {
      const u = r.resolver ? Re((await he()).errors) : await ge(s, !0);
      u !== t.isValid && S.state.next({
        isValid: u
      });
    }
  }, z = (o) => b.isValidating && S.state.next({
    isValidating: o
  }), G = (o, u = [], l, O, _ = !0, m = !0) => {
    if (O && l) {
      if (f.action = !0, m && Array.isArray(x(s, o))) {
        const C = l(x(s, o), O.argA, O.argB);
        _ && te(s, o, C);
      }
      if (m && Array.isArray(x(t.errors, o))) {
        const C = l(x(t.errors, o), O.argA, O.argB);
        _ && te(t.errors, o, C), Kn(t.errors, o);
      }
      if (b.touchedFields && m && Array.isArray(x(t.touchedFields, o))) {
        const C = l(x(t.touchedFields, o), O.argA, O.argB);
        _ && te(t.touchedFields, o, C);
      }
      b.dirtyFields && (t.dirtyFields = Cr(a, c)), S.state.next({
        name: o,
        isDirty: A(o, u),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      te(c, o, u);
  }, h = (o, u) => {
    te(t.errors, o, u), S.state.next({
      errors: t.errors
    });
  }, be = (o, u, l, O) => {
    const _ = x(s, o);
    if (_) {
      const m = x(c, o, le(l) ? x(a, o) : l);
      le(m) || O && O.defaultChecked || u ? te(c, o, u ? m : Ar(_._f)) : re(o, m), f.mount && R();
    }
  }, Ae = (o, u, l, O, _) => {
    let m = !1, C = !1;
    const ie = {
      name: o
    };
    if (!l || O) {
      b.isDirty && (C = t.isDirty, t.isDirty = ie.isDirty = A(), m = C !== ie.isDirty);
      const oe = We(x(a, o), u);
      C = x(t.dirtyFields, o), oe ? me(t.dirtyFields, o) : te(t.dirtyFields, o, !0), ie.dirtyFields = t.dirtyFields, m = m || b.dirtyFields && C !== !oe;
    }
    if (l) {
      const oe = x(t.touchedFields, o);
      oe || (te(t.touchedFields, o, l), ie.touchedFields = t.touchedFields, m = m || b.touchedFields && oe !== l);
    }
    return m && _ && S.state.next(ie), m ? ie : {};
  }, Pe = (o, u, l, O) => {
    const _ = x(t.errors, o), m = b.isValid && ze(u) && t.isValid !== u;
    if (e.delayError && l ? (E = se(() => h(o, l)), E(e.delayError)) : (clearTimeout(w), E = null, l ? te(t.errors, o, l) : me(t.errors, o)), (l ? !We(_, l) : _) || !Re(O) || m) {
      const C = {
        ...O,
        ...m && ze(u) ? { isValid: u } : {},
        errors: t.errors,
        name: o
      };
      t = {
        ...t,
        ...C
      }, S.state.next(C);
    }
    z(!1);
  }, he = async (o) => r.resolver(c, r.context, Hn(o || y.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), Te = async (o) => {
    const { errors: u } = await he();
    if (o)
      for (const l of o) {
        const O = x(u, l);
        O ? te(t.errors, l, O) : me(t.errors, l);
      }
    else
      t.errors = u;
    return u;
  }, ge = async (o, u, l = {
    valid: !0
  }) => {
    for (const O in o) {
      const _ = o[O];
      if (_) {
        const { _f: m, ...C } = _;
        if (m) {
          const ie = y.array.has(m.name), oe = await gt(_, c, ae, r.shouldUseNativeValidation && !u, ie);
          if (oe[m.name] && (l.valid = !1, u))
            break;
          !u && (x(oe, m.name) ? ie ? Bn(t.errors, oe, m.name) : te(t.errors, m.name, oe[m.name]) : me(t.errors, m.name));
        }
        C && await ge(C, u, l);
      }
    }
    return l.valid;
  }, $ = () => {
    for (const o of y.unMount) {
      const u = x(s, o);
      u && (u._f.refs ? u._f.refs.every((l) => !Rr(l)) : !Rr(u._f.ref)) && F(o);
    }
    y.unMount = /* @__PURE__ */ new Set();
  }, A = (o, u) => (o && u && te(c, o, u), !We(T(), a)), M = (o, u, l) => Dt(o, y, {
    ...f.mount ? c : le(u) ? a : Fe(o) ? { [o]: u } : u
  }, l, u), ne = (o) => nr(x(f.mount ? c : a, o, e.shouldUnregister ? x(a, o, []) : [])), re = (o, u, l = {}) => {
    const O = x(s, o);
    let _ = u;
    if (O) {
      const m = O._f;
      m && (!m.disabled && te(c, o, Ut(u, m)), _ = dr(m.ref) && xe(u) ? "" : u, $t(m.ref) ? [...m.ref.options].forEach((C) => C.selected = _.includes(C.value)) : m.refs ? tr(m.ref) ? m.refs.length > 1 ? m.refs.forEach((C) => (!C.defaultChecked || !C.disabled) && (C.checked = Array.isArray(_) ? !!_.find((ie) => ie === C.value) : _ === C.value)) : m.refs[0] && (m.refs[0].checked = !!_) : m.refs.forEach((C) => C.checked = C.value === _) : qr(m.ref) ? m.ref.value = "" : (m.ref.value = _, m.ref.type || S.values.next({
        name: o,
        values: { ...c }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && Ae(o, _, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && v(o);
  }, ue = (o, u, l) => {
    for (const O in u) {
      const _ = u[O], m = `${o}.${O}`, C = x(s, m);
      (y.array.has(o) || !yr(_) || C && !C._f) && !qe(_) ? ue(m, _, l) : re(m, _, l);
    }
  }, _e = (o, u, l = {}) => {
    const O = x(s, o), _ = y.array.has(o), m = ke(u);
    te(c, o, m), _ ? (S.array.next({
      name: o,
      values: { ...c }
    }), (b.isDirty || b.dirtyFields) && l.shouldDirty && S.state.next({
      name: o,
      dirtyFields: Cr(a, c),
      isDirty: A(o, m)
    })) : O && !O._f && !xe(m) ? ue(o, m, l) : re(o, m, l), dt(o, y) && S.state.next({ ...t }), S.values.next({
      name: o,
      values: { ...c }
    }), !f.mount && n();
  }, Oe = async (o) => {
    const u = o.target;
    let l = u.name, O = !0;
    const _ = x(s, l), m = () => u.type ? Ar(_._f) : jt(o);
    if (_) {
      let C, ie;
      const oe = m(), Ve = o.type === fr.BLUR || o.type === fr.FOCUS_OUT, ir = !Gn(_._f) && !r.resolver && !x(t.errors, l) && !_._f.deps || Jn(Ve, x(t.touchedFields, l), t.isSubmitted, Q, Z), De = dt(l, y, Ve);
      te(c, l, oe), Ve ? (_._f.onBlur && _._f.onBlur(o), E && E(0)) : _._f.onChange && _._f.onChange(o);
      const He = Ae(l, oe, Ve, !1), ar = !Re(He) || De;
      if (!Ve && S.values.next({
        name: l,
        type: o.type,
        values: { ...c }
      }), ir)
        return b.isValid && R(), ar && S.state.next({ name: l, ...De ? {} : He });
      if (!Ve && De && S.state.next({ ...t }), z(!0), r.resolver) {
        const { errors: Ge } = await he([l]), Je = pt(t.errors, s, l), sr = pt(Ge, s, Je.name || l);
        C = sr.error, l = sr.name, ie = Re(Ge);
      } else
        C = (await gt(_, c, ae, r.shouldUseNativeValidation))[l], O = isNaN(oe) || oe === x(c, l, oe), O && (C ? ie = !1 : b.isValid && (ie = await ge(s, !0)));
      O && (_._f.deps && v(_._f.deps), Pe(l, ie, C, He));
    }
  }, v = async (o, u = {}) => {
    let l, O;
    const _ = ur(o);
    if (z(!0), r.resolver) {
      const m = await Te(le(o) ? o : _);
      l = Re(m), O = o ? !_.some((C) => x(m, C)) : l;
    } else
      o ? (O = (await Promise.all(_.map(async (m) => {
        const C = x(s, m);
        return await ge(C && C._f ? { [m]: C } : C);
      }))).every(Boolean), !(!O && !t.isValid) && R()) : O = l = await ge(s);
    return S.state.next({
      ...!Fe(o) || b.isValid && l !== t.isValid ? {} : { name: o },
      ...r.resolver || !o ? { isValid: l } : {},
      errors: t.errors,
      isValidating: !1
    }), u.shouldFocus && !O && Dr(s, (m) => m && x(t.errors, m), o ? _ : y.mount), O;
  }, T = (o) => {
    const u = {
      ...a,
      ...f.mount ? c : {}
    };
    return le(o) ? u : Fe(o) ? x(u, o) : o.map((l) => x(u, l));
  }, V = (o, u) => ({
    invalid: !!x((u || t).errors, o),
    isDirty: !!x((u || t).dirtyFields, o),
    isTouched: !!x((u || t).touchedFields, o),
    error: x((u || t).errors, o)
  }), D = (o) => {
    o && ur(o).forEach((u) => me(t.errors, u)), S.state.next({
      errors: o ? t.errors : {}
    });
  }, k = (o, u, l) => {
    const O = (x(s, o, { _f: {} })._f || {}).ref;
    te(t.errors, o, {
      ...u,
      ref: O
    }), S.state.next({
      name: o,
      errors: t.errors,
      isValid: !1
    }), l && l.shouldFocus && O && O.focus && O.focus();
  }, W = (o, u) => $e(o) ? S.values.subscribe({
    next: (l) => o(M(void 0, u), l)
  }) : M(o, u, !0), F = (o, u = {}) => {
    for (const l of o ? ur(o) : y.mount)
      y.mount.delete(l), y.array.delete(l), u.keepValue || (me(s, l), me(c, l)), !u.keepError && me(t.errors, l), !u.keepDirty && me(t.dirtyFields, l), !u.keepTouched && me(t.touchedFields, l), !r.shouldUnregister && !u.keepDefaultValue && me(a, l);
    S.values.next({
      values: { ...c }
    }), S.state.next({
      ...t,
      ...u.keepDirty ? { isDirty: A() } : {}
    }), !u.keepIsValid && R();
  }, P = (o, u = {}) => {
    let l = x(s, o);
    const O = ze(u.disabled);
    return te(s, o, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: o } },
        name: o,
        mount: !0,
        ...u
      }
    }), y.mount.add(o), l ? O && te(c, o, u.disabled ? void 0 : x(c, o, Ar(l._f))) : be(o, !0, u.value), {
      ...O ? { disabled: u.disabled } : {},
      ...r.progressive ? {
        required: !!u.required,
        min: Ze(u.min),
        max: Ze(u.max),
        minLength: Ze(u.minLength),
        maxLength: Ze(u.maxLength),
        pattern: Ze(u.pattern)
      } : {},
      name: o,
      onChange: Oe,
      onBlur: Oe,
      ref: (_) => {
        if (_) {
          P(o, u), l = x(s, o);
          const m = le(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _, C = zn(m), ie = l._f.refs || [];
          if (C ? ie.find((oe) => oe === m) : m === l._f.ref)
            return;
          te(s, o, {
            _f: {
              ...l._f,
              ...C ? {
                refs: [
                  ...ie.filter(Rr),
                  m,
                  ...Array.isArray(x(a, o)) ? [{}] : []
                ],
                ref: { type: m.type, name: o }
              } : { ref: m }
            }
          }), be(o, !1, void 0, m);
        } else
          l = x(s, o, {}), l._f && (l._f.mount = !1), (r.shouldUnregister || u.shouldUnregister) && !(kt(y.array, o) && f.action) && y.unMount.add(o);
      }
    };
  }, I = () => r.shouldFocusError && Dr(s, (o) => o && x(t.errors, o), y.mount), U = (o, u) => async (l) => {
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let O = ke(c);
    if (S.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: _, values: m } = await he();
      t.errors = _, O = m;
    } else
      await ge(s);
    me(t.errors, "root"), Re(t.errors) ? (S.state.next({
      errors: {}
    }), await o(O, l)) : (u && await u({ ...t.errors }, l), I(), setTimeout(I)), S.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Re(t.errors),
      submitCount: t.submitCount + 1,
      errors: t.errors
    });
  }, N = (o, u = {}) => {
    x(s, o) && (le(u.defaultValue) ? _e(o, x(a, o)) : (_e(o, u.defaultValue), te(a, o, u.defaultValue)), u.keepTouched || me(t.touchedFields, o), u.keepDirty || (me(t.dirtyFields, o), t.isDirty = u.defaultValue ? A(o, x(a, o)) : A()), u.keepError || (me(t.errors, o), b.isValid && R()), S.state.next({ ...t }));
  }, de = (o, u = {}) => {
    const l = o || a, O = ke(l), _ = o && !Re(o) ? O : a;
    if (u.keepDefaultValues || (a = l), !u.keepValues) {
      if (u.keepDirtyValues || Y)
        for (const m of y.mount)
          x(t.dirtyFields, m) ? te(_, m, x(c, m)) : _e(m, x(_, m));
      else {
        if (Wr && le(o))
          for (const m of y.mount) {
            const C = x(s, m);
            if (C && C._f) {
              const ie = Array.isArray(C._f.refs) ? C._f.refs[0] : C._f.ref;
              if (dr(ie)) {
                const oe = ie.closest("form");
                if (oe) {
                  oe.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      c = e.shouldUnregister ? u.keepDefaultValues ? ke(a) : {} : ke(_), S.array.next({
        values: { ..._ }
      }), S.values.next({
        values: { ..._ }
      });
    }
    y = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !f.mount && n(), f.mount = !b.isValid || !!u.keepIsValid, f.watch = !!e.shouldUnregister, S.state.next({
      submitCount: u.keepSubmitCount ? t.submitCount : 0,
      isDirty: u.keepDirty ? t.isDirty : !!(u.keepDefaultValues && !We(o, a)),
      isSubmitted: u.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: u.keepDirtyValues ? t.dirtyFields : u.keepDefaultValues && o ? Cr(a, o) : {},
      touchedFields: u.keepTouched ? t.touchedFields : {},
      errors: u.keepErrors ? t.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, g = (o, u) => de($e(o) ? o(c) : o, u);
  return {
    control: {
      register: P,
      unregister: F,
      getFieldState: V,
      handleSubmit: U,
      setError: k,
      _executeSchema: he,
      _getWatch: M,
      _getDirty: A,
      _updateValid: R,
      _removeUnmounted: $,
      _updateFieldArray: G,
      _getFieldArray: ne,
      _reset: de,
      _resetDefaultValues: () => $e(r.defaultValues) && r.defaultValues().then((o) => {
        g(o, r.resetOptions), S.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (o) => {
        t = {
          ...t,
          ...o
        };
      },
      _subjects: S,
      _proxyFormState: b,
      get _fields() {
        return s;
      },
      get _formValues() {
        return c;
      },
      get _state() {
        return f;
      },
      set _state(o) {
        f = o;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return y;
      },
      set _names(o) {
        y = o;
      },
      get _formState() {
        return t;
      },
      set _formState(o) {
        t = o;
      },
      get _options() {
        return r;
      },
      set _options(o) {
        r = {
          ...r,
          ...o
        };
      }
    },
    trigger: v,
    register: P,
    handleSubmit: U,
    watch: W,
    setValue: _e,
    getValues: T,
    reset: g,
    resetField: N,
    clearErrors: D,
    unregister: F,
    setError: k,
    setFocus: (o, u = {}) => {
      const l = x(s, o), O = l && l._f;
      if (O) {
        const _ = O.refs ? O.refs[0] : O.ref;
        _.focus && (_.focus(), u.shouldSelect && _.select());
      }
    },
    getFieldState: V
  };
}
function Qn(e = {}) {
  const n = X.useRef(), r = X.useRef(), [t, s] = X.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: $e(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: $e(e.defaultValues) ? void 0 : e.defaultValues
  });
  n.current || (n.current = {
    ...Zn(e, () => s((c) => ({ ...c }))),
    formState: t
  });
  const a = n.current.control;
  return a._options = e, Br({
    subject: a._subjects.state,
    next: (c) => {
      Pt(c, a._proxyFormState, a._updateFormState, !0) && s({ ...a._formState });
    }
  }), X.useEffect(() => {
    e.values && !We(e.values, r.current) ? (a._reset(e.values, a._options.resetOptions), r.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), X.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), n.current.formState = Ft(t, a), n.current;
}
const mi = (e) => {
  const { field: n } = Wn({ name: e });
  return n;
}, gi = ({
  onSubmit: e
}) => {
  const [n, r] = er(!1), [t, s] = er(!1), {
    handleSubmit: a,
    register: c,
    reset: f
  } = Qn();
  return { handleSubmit: bt(
    (E) => {
      E.preventDefault(), s(!0), a(e)(E).catch(() => r(!0)).finally(() => {
        s(!1), f();
      });
    },
    [a, e, f]
  ), isError: n, isSubmitting: t, register: c };
}, pi = ({
  callback: e,
  config: n,
  observables: r,
  ...t
}) => {
  rr(() => {
    const s = new IntersectionObserver(e, n);
    return r.forEach((a) => {
      s.observe(a);
    }), () => {
      s.disconnect();
    };
  }, [t, e, n, r]);
}, bi = () => {
  const [e, n] = er(!1), r = bt(() => {
    n(window.innerWidth > 768);
  }, [n]);
  return rr(() => {
    r();
  }, [r]), Dn(window, "resize", r), e;
};
function _i(e, n) {
  rr(() => {
    const r = (t) => {
      const s = e == null ? void 0 : e.current;
      !s || s.contains(t == null ? void 0 : t.target) || n(t);
    };
    return document.addEventListener("mousedown", r), document.addEventListener("touchend", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchend", r);
    };
  }, [e, n]);
}
export {
  ti as Button,
  li as Card,
  yi as CardActions,
  hi as CardBody,
  fi as CardContent,
  di as CardHeader,
  vi as CardMedia,
  ii as Gallery,
  Ct as HelperText,
  Ot as ImageDialog,
  ai as List,
  si as ListItem,
  oi as ListItemText,
  ui as TextArea,
  ci as TextField,
  lr as Typography,
  Pn as TypographyClasses,
  ni as typestry,
  Vn as useDisclosure,
  Dn as useEventListener,
  mi as useField,
  gi as useForm,
  pi as useIntersectionObserver,
  bi as useIsDesktop,
  vn as useKeyPress,
  _i as useOutsideClick
};
//# sourceMappingURL=index.es.js.map
