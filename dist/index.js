import jt, { forwardRef as Ea, createElement as Bp, useEffect as $p, useRef as xk, useState as Pp, useLayoutEffect as wk, useCallback as mR } from "react";
import { jsxs as lo, jsx as hn, Fragment as bk } from "react/jsx-runtime";
import './assets/index.css';function yR(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var gR = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(p) {
  (function() {
    var C = {}.hasOwnProperty;
    function m() {
      for (var E = [], b = 0; b < arguments.length; b++) {
        var x = arguments[b];
        if (x) {
          var g = typeof x;
          if (g === "string" || g === "number")
            E.push(x);
          else if (Array.isArray(x)) {
            if (x.length) {
              var K = m.apply(null, x);
              K && E.push(K);
            }
          } else if (g === "object") {
            if (x.toString !== Object.prototype.toString && !x.toString.toString().includes("[native code]")) {
              E.push(x.toString());
              continue;
            }
            for (var $ in x)
              C.call(x, $) && x[$] && E.push($);
          }
        }
      }
      return E.join(" ");
    }
    p.exports ? (m.default = m, p.exports = m) : window.classNames = m;
  })();
})(gR);
var Dk = gR.exports;
const Sa = /* @__PURE__ */ yR(Dk), _k = (p) => "href" in p, kk = Ea(
  function(C, m) {
    const E = Sa("Tui-Button", C.className);
    return _k(C) ? Bp("a", { ...C, ref: m, className: E }, C.children) : Bp(
      "button",
      { ...C, ref: m, className: E },
      C.children
    );
  }
), qO = kk;
function Ok(p, C) {
  $p(() => {
    const m = (E) => {
      p.includes(E.code) && C(E);
    };
    return document.addEventListener("keydown", m), () => {
      document.removeEventListener("keydown", m);
    };
  }, [C, p]);
}
var K0 = { exports: {} }, ya = {}, Km = { exports: {} }, V0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GT;
function Lk() {
  return GT || (GT = 1, function(p) {
    function C(re, _e) {
      var z = re.length;
      re.push(_e);
      e:
        for (; 0 < z; ) {
          var te = z - 1 >>> 1, Se = re[te];
          if (0 < b(Se, _e))
            re[te] = _e, re[z] = Se, z = te;
          else
            break e;
        }
    }
    function m(re) {
      return re.length === 0 ? null : re[0];
    }
    function E(re) {
      if (re.length === 0)
        return null;
      var _e = re[0], z = re.pop();
      if (z !== _e) {
        re[0] = z;
        e:
          for (var te = 0, Se = re.length, Pe = Se >>> 1; te < Pe; ) {
            var ze = 2 * (te + 1) - 1, at = re[ze], Ae = ze + 1, We = re[Ae];
            if (0 > b(at, z))
              Ae < Se && 0 > b(We, at) ? (re[te] = We, re[Ae] = z, te = Ae) : (re[te] = at, re[ze] = z, te = ze);
            else if (Ae < Se && 0 > b(We, z))
              re[te] = We, re[Ae] = z, te = Ae;
            else
              break e;
          }
      }
      return _e;
    }
    function b(re, _e) {
      var z = re.sortIndex - _e.sortIndex;
      return z !== 0 ? z : re.id - _e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      p.unstable_now = function() {
        return x.now();
      };
    } else {
      var g = Date, K = g.now();
      p.unstable_now = function() {
        return g.now() - K;
      };
    }
    var $ = [], G = [], pe = 1, I = null, q = 3, ie = !1, Re = !1, Ve = !1, Ze = typeof setTimeout == "function" ? setTimeout : null, Mt = typeof clearTimeout == "function" ? clearTimeout : null, Le = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ee(re) {
      for (var _e = m(G); _e !== null; ) {
        if (_e.callback === null)
          E(G);
        else if (_e.startTime <= re)
          E(G), _e.sortIndex = _e.expirationTime, C($, _e);
        else
          break;
        _e = m(G);
      }
    }
    function je(re) {
      if (Ve = !1, Ee(re), !Re)
        if (m($) !== null)
          Re = !0, et(Y);
        else {
          var _e = m(G);
          _e !== null && wt(je, _e.startTime - re);
        }
    }
    function Y(re, _e) {
      Re = !1, Ve && (Ve = !1, Mt(Jt), Jt = -1), ie = !0;
      var z = q;
      try {
        for (Ee(_e), I = m($); I !== null && (!(I.expirationTime > _e) || re && !ot()); ) {
          var te = I.callback;
          if (typeof te == "function") {
            I.callback = null, q = I.priorityLevel;
            var Se = te(I.expirationTime <= _e);
            _e = p.unstable_now(), typeof Se == "function" ? I.callback = Se : I === m($) && E($), Ee(_e);
          } else
            E($);
          I = m($);
        }
        if (I !== null)
          var Pe = !0;
        else {
          var ze = m(G);
          ze !== null && wt(je, ze.startTime - _e), Pe = !1;
        }
        return Pe;
      } finally {
        I = null, q = z, ie = !1;
      }
    }
    var ft = !1, qe = null, Jt = -1, Nt = 5, Ct = -1;
    function ot() {
      return !(p.unstable_now() - Ct < Nt);
    }
    function Qe() {
      if (qe !== null) {
        var re = p.unstable_now();
        Ct = re;
        var _e = !0;
        try {
          _e = qe(!0, re);
        } finally {
          _e ? fe() : (ft = !1, qe = null);
        }
      } else
        ft = !1;
    }
    var fe;
    if (typeof Le == "function")
      fe = function() {
        Le(Qe);
      };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), xt = Ne.port2;
      Ne.port1.onmessage = Qe, fe = function() {
        xt.postMessage(null);
      };
    } else
      fe = function() {
        Ze(Qe, 0);
      };
    function et(re) {
      qe = re, ft || (ft = !0, fe());
    }
    function wt(re, _e) {
      Jt = Ze(function() {
        re(p.unstable_now());
      }, _e);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, p.unstable_continueExecution = function() {
      Re || ie || (Re = !0, et(Y));
    }, p.unstable_forceFrameRate = function(re) {
      0 > re || 125 < re ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Nt = 0 < re ? Math.floor(1e3 / re) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, p.unstable_getFirstCallbackNode = function() {
      return m($);
    }, p.unstable_next = function(re) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var _e = 3;
          break;
        default:
          _e = q;
      }
      var z = q;
      q = _e;
      try {
        return re();
      } finally {
        q = z;
      }
    }, p.unstable_pauseExecution = function() {
    }, p.unstable_requestPaint = function() {
    }, p.unstable_runWithPriority = function(re, _e) {
      switch (re) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          re = 3;
      }
      var z = q;
      q = re;
      try {
        return _e();
      } finally {
        q = z;
      }
    }, p.unstable_scheduleCallback = function(re, _e, z) {
      var te = p.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? te + z : te) : z = te, re) {
        case 1:
          var Se = -1;
          break;
        case 2:
          Se = 250;
          break;
        case 5:
          Se = 1073741823;
          break;
        case 4:
          Se = 1e4;
          break;
        default:
          Se = 5e3;
      }
      return Se = z + Se, re = { id: pe++, callback: _e, priorityLevel: re, startTime: z, expirationTime: Se, sortIndex: -1 }, z > te ? (re.sortIndex = z, C(G, re), m($) === null && re === m(G) && (Ve ? (Mt(Jt), Jt = -1) : Ve = !0, wt(je, z - te))) : (re.sortIndex = Se, C($, re), Re || ie || (Re = !0, et(Y))), re;
    }, p.unstable_shouldYield = ot, p.unstable_wrapCallback = function(re) {
      var _e = q;
      return function() {
        var z = q;
        q = _e;
        try {
          return re.apply(this, arguments);
        } finally {
          q = z;
        }
      };
    };
  }(V0)), V0;
}
var j0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qT;
function Mk() {
  return qT || (qT = 1, function(p) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = !1, m = !1, E = 5;
      function b(ce, Ue) {
        var dt = ce.length;
        ce.push(Ue), K(ce, Ue, dt);
      }
      function x(ce) {
        return ce.length === 0 ? null : ce[0];
      }
      function g(ce) {
        if (ce.length === 0)
          return null;
        var Ue = ce[0], dt = ce.pop();
        return dt !== Ue && (ce[0] = dt, $(ce, dt, 0)), Ue;
      }
      function K(ce, Ue, dt) {
        for (var Bt = dt; Bt > 0; ) {
          var fn = Bt - 1 >>> 1, tr = ce[fn];
          if (G(tr, Ue) > 0)
            ce[fn] = Ue, ce[Bt] = tr, Bt = fn;
          else
            return;
        }
      }
      function $(ce, Ue, dt) {
        for (var Bt = dt, fn = ce.length, tr = fn >>> 1; Bt < tr; ) {
          var Rn = (Bt + 1) * 2 - 1, Xr = ce[Rn], an = Rn + 1, Aa = ce[an];
          if (G(Xr, Ue) < 0)
            an < fn && G(Aa, Xr) < 0 ? (ce[Bt] = Aa, ce[an] = Ue, Bt = an) : (ce[Bt] = Xr, ce[Rn] = Ue, Bt = Rn);
          else if (an < fn && G(Aa, Ue) < 0)
            ce[Bt] = Aa, ce[an] = Ue, Bt = an;
          else
            return;
        }
      }
      function G(ce, Ue) {
        var dt = ce.sortIndex - Ue.sortIndex;
        return dt !== 0 ? dt : ce.id - Ue.id;
      }
      var pe = 1, I = 2, q = 3, ie = 4, Re = 5;
      function Ve(ce, Ue) {
      }
      var Ze = typeof performance == "object" && typeof performance.now == "function";
      if (Ze) {
        var Mt = performance;
        p.unstable_now = function() {
          return Mt.now();
        };
      } else {
        var Le = Date, Ee = Le.now();
        p.unstable_now = function() {
          return Le.now() - Ee;
        };
      }
      var je = 1073741823, Y = -1, ft = 250, qe = 5e3, Jt = 1e4, Nt = je, Ct = [], ot = [], Qe = 1, fe = null, Ne = q, xt = !1, et = !1, wt = !1, re = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function te(ce) {
        for (var Ue = x(ot); Ue !== null; ) {
          if (Ue.callback === null)
            g(ot);
          else if (Ue.startTime <= ce)
            g(ot), Ue.sortIndex = Ue.expirationTime, b(Ct, Ue);
          else
            return;
          Ue = x(ot);
        }
      }
      function Se(ce) {
        if (wt = !1, te(ce), !et)
          if (x(Ct) !== null)
            et = !0, za(Pe);
          else {
            var Ue = x(ot);
            Ue !== null && Mn(Se, Ue.startTime - ce);
          }
      }
      function Pe(ce, Ue) {
        et = !1, wt && (wt = !1, cr()), xt = !0;
        var dt = Ne;
        try {
          var Bt;
          if (!m)
            return ze(ce, Ue);
        } finally {
          fe = null, Ne = dt, xt = !1;
        }
      }
      function ze(ce, Ue) {
        var dt = Ue;
        for (te(dt), fe = x(Ct); fe !== null && !C && !(fe.expirationTime > dt && (!ce || Te())); ) {
          var Bt = fe.callback;
          if (typeof Bt == "function") {
            fe.callback = null, Ne = fe.priorityLevel;
            var fn = fe.expirationTime <= dt, tr = Bt(fn);
            dt = p.unstable_now(), typeof tr == "function" ? fe.callback = tr : fe === x(Ct) && g(Ct), te(dt);
          } else
            g(Ct);
          fe = x(Ct);
        }
        if (fe !== null)
          return !0;
        var Rn = x(ot);
        return Rn !== null && Mn(Se, Rn.startTime - dt), !1;
      }
      function at(ce, Ue) {
        switch (ce) {
          case pe:
          case I:
          case q:
          case ie:
          case Re:
            break;
          default:
            ce = q;
        }
        var dt = Ne;
        Ne = ce;
        try {
          return Ue();
        } finally {
          Ne = dt;
        }
      }
      function Ae(ce) {
        var Ue;
        switch (Ne) {
          case pe:
          case I:
          case q:
            Ue = q;
            break;
          default:
            Ue = Ne;
            break;
        }
        var dt = Ne;
        Ne = Ue;
        try {
          return ce();
        } finally {
          Ne = dt;
        }
      }
      function We(ce) {
        var Ue = Ne;
        return function() {
          var dt = Ne;
          Ne = Ue;
          try {
            return ce.apply(this, arguments);
          } finally {
            Ne = dt;
          }
        };
      }
      function Je(ce, Ue, dt) {
        var Bt = p.unstable_now(), fn;
        if (typeof dt == "object" && dt !== null) {
          var tr = dt.delay;
          typeof tr == "number" && tr > 0 ? fn = Bt + tr : fn = Bt;
        } else
          fn = Bt;
        var Rn;
        switch (ce) {
          case pe:
            Rn = Y;
            break;
          case I:
            Rn = ft;
            break;
          case Re:
            Rn = Nt;
            break;
          case ie:
            Rn = Jt;
            break;
          case q:
          default:
            Rn = qe;
            break;
        }
        var Xr = fn + Rn, an = {
          id: Qe++,
          callback: Ue,
          priorityLevel: ce,
          startTime: fn,
          expirationTime: Xr,
          sortIndex: -1
        };
        return fn > Bt ? (an.sortIndex = fn, b(ot, an), x(Ct) === null && an === x(ot) && (wt ? cr() : wt = !0, Mn(Se, fn - Bt))) : (an.sortIndex = Xr, b(Ct, an), !et && !xt && (et = !0, za(Pe))), an;
      }
      function it() {
      }
      function st() {
        !et && !xt && (et = !0, za(Pe));
      }
      function Dt() {
        return x(Ct);
      }
      function le(ce) {
        ce.callback = null;
      }
      function zt() {
        return Ne;
      }
      var mn = !1, er = null, D = -1, V = E, Q = -1;
      function Te() {
        var ce = p.unstable_now() - Q;
        return !(ce < V);
      }
      function se() {
      }
      function ne(ce) {
        if (ce < 0 || ce > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ce > 0 ? V = Math.floor(1e3 / ce) : V = E;
      }
      var ke = function() {
        if (er !== null) {
          var ce = p.unstable_now();
          Q = ce;
          var Ue = !0, dt = !0;
          try {
            dt = er(Ue, ce);
          } finally {
            dt ? St() : (mn = !1, er = null);
          }
        } else
          mn = !1;
      }, St;
      if (typeof z == "function")
        St = function() {
          z(ke);
        };
      else if (typeof MessageChannel < "u") {
        var _t = new MessageChannel(), Bn = _t.port2;
        _t.port1.onmessage = ke, St = function() {
          Bn.postMessage(null);
        };
      } else
        St = function() {
          re(ke, 0);
        };
      function za(ce) {
        er = ce, mn || (mn = !0, St());
      }
      function Mn(ce, Ue) {
        D = re(function() {
          ce(p.unstable_now());
        }, Ue);
      }
      function cr() {
        _e(D), D = -1;
      }
      var fl = se, Ca = null;
      p.unstable_IdlePriority = Re, p.unstable_ImmediatePriority = pe, p.unstable_LowPriority = ie, p.unstable_NormalPriority = q, p.unstable_Profiling = Ca, p.unstable_UserBlockingPriority = I, p.unstable_cancelCallback = le, p.unstable_continueExecution = st, p.unstable_forceFrameRate = ne, p.unstable_getCurrentPriorityLevel = zt, p.unstable_getFirstCallbackNode = Dt, p.unstable_next = Ae, p.unstable_pauseExecution = it, p.unstable_requestPaint = fl, p.unstable_runWithPriority = at, p.unstable_scheduleCallback = Je, p.unstable_shouldYield = Te, p.unstable_wrapCallback = We, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(j0)), j0;
}
var XT;
function SR() {
  return XT || (XT = 1, process.env.NODE_ENV === "production" ? Km.exports = Lk() : Km.exports = Mk()), Km.exports;
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
var KT;
function Nk() {
  if (KT)
    return ya;
  KT = 1;
  var p = jt, C = SR();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var E = /* @__PURE__ */ new Set(), b = {};
  function x(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (b[n] = r, n = 0; n < r.length; n++)
      E.add(r[n]);
  }
  var K = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $ = Object.prototype.hasOwnProperty, G = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, I = {};
  function q(n) {
    return $.call(I, n) ? !0 : $.call(pe, n) ? !1 : G.test(n) ? I[n] = !0 : (pe[n] = !0, !1);
  }
  function ie(n, r, l, o) {
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
  function Re(n, r, l, o) {
    if (r === null || typeof r > "u" || ie(n, r, l, o))
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
  function Ve(n, r, l, o, c, d, y) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = y;
  }
  var Ze = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ze[n] = new Ve(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ze[r] = new Ve(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ze[n] = new Ve(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ze[n] = new Ve(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ze[n] = new Ve(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ze[n] = new Ve(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ze[n] = new Ve(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ze[n] = new Ve(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ze[n] = new Ve(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Mt = /[\-:]([a-z])/g;
  function Le(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Mt,
      Le
    );
    Ze[r] = new Ve(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Mt, Le);
    Ze[r] = new Ve(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Mt, Le);
    Ze[r] = new Ve(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ze[n] = new Ve(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ze.xlinkHref = new Ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ze[n] = new Ve(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ee(n, r, l, o) {
    var c = Ze.hasOwnProperty(r) ? Ze[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Re(r, l, c, o) && (l = null), o || c === null ? q(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var je = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = Symbol.for("react.element"), ft = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), Jt = Symbol.for("react.strict_mode"), Nt = Symbol.for("react.profiler"), Ct = Symbol.for("react.provider"), ot = Symbol.for("react.context"), Qe = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), xt = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), wt = Symbol.for("react.offscreen"), re = Symbol.iterator;
  function _e(n) {
    return n === null || typeof n != "object" ? null : (n = re && n[re] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var z = Object.assign, te;
  function Se(n) {
    if (te === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        te = r && r[1] || "";
      }
    return `
` + te + n;
  }
  var Pe = !1;
  function ze(n, r) {
    if (!n || Pe)
      return "";
    Pe = !0;
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
          } catch (H) {
            var o = H;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (H) {
            o = H;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (H) {
          o = H;
        }
        n();
      }
    } catch (H) {
      if (H && o && typeof H.stack == "string") {
        for (var c = H.stack.split(`
`), d = o.stack.split(`
`), y = c.length - 1, R = d.length - 1; 1 <= y && 0 <= R && c[y] !== d[R]; )
          R--;
        for (; 1 <= y && 0 <= R; y--, R--)
          if (c[y] !== d[R]) {
            if (y !== 1 || R !== 1)
              do
                if (y--, R--, 0 > R || c[y] !== d[R]) {
                  var w = `
` + c[y].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= y && 0 <= R);
            break;
          }
      }
    } finally {
      Pe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Se(n) : "";
  }
  function at(n) {
    switch (n.tag) {
      case 5:
        return Se(n.type);
      case 16:
        return Se("Lazy");
      case 13:
        return Se("Suspense");
      case 19:
        return Se("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ze(n.type, !1), n;
      case 11:
        return n = ze(n.type.render, !1), n;
      case 1:
        return n = ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ae(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case qe:
        return "Fragment";
      case ft:
        return "Portal";
      case Nt:
        return "Profiler";
      case Jt:
        return "StrictMode";
      case fe:
        return "Suspense";
      case Ne:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ot:
          return (n.displayName || "Context") + ".Consumer";
        case Ct:
          return (n._context.displayName || "Context") + ".Provider";
        case Qe:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case xt:
          return r = n.displayName || null, r !== null ? r : Ae(n.type) || "Memo";
        case et:
          r = n._payload, n = n._init;
          try {
            return Ae(n(r));
          } catch {
          }
      }
    return null;
  }
  function We(n) {
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
        return Ae(r);
      case 8:
        return r === Jt ? "StrictMode" : "Mode";
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
  function Je(n) {
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
  function it(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function st(n) {
    var r = it(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(y) {
        o = "" + y, d.call(this, y);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(y) {
        o = "" + y;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Dt(n) {
    n._valueTracker || (n._valueTracker = st(n));
  }
  function le(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = it(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function zt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function mn(n, r) {
    var l = r.checked;
    return z({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function er(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Je(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function D(n, r) {
    r = r.checked, r != null && Ee(n, "checked", r, !1);
  }
  function V(n, r) {
    D(n, r);
    var l = Je(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Te(n, r.type, l) : r.hasOwnProperty("defaultValue") && Te(n, r.type, Je(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Q(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Te(n, r, l) {
    (r !== "number" || zt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var se = Array.isArray;
  function ne(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Je(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ke(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return z({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function St(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(m(92));
        if (se(l)) {
          if (1 < l.length)
            throw Error(m(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Je(l) };
  }
  function _t(n, r) {
    var l = Je(r.value), o = Je(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Bn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function za(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Mn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? za(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var cr, fl = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (cr = cr || document.createElement("div"), cr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = cr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Ca(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ce = {
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
  }, Ue = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ce).forEach(function(n) {
    Ue.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ce[r] = ce[n];
    });
  });
  function dt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ce.hasOwnProperty(n) && ce[n] ? ("" + r).trim() : r + "px";
  }
  function Bt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = dt(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var fn = z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function tr(n, r) {
    if (r) {
      if (fn[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
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
  function Rn(n, r) {
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
  var Xr = null;
  function an(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Aa = null, yn = null, ln = null;
  function Qp(n) {
    if (n = Mo(n)) {
      if (typeof Aa != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = He(r), Aa(n.stateNode, n.type, r));
    }
  }
  function Es(n) {
    yn ? ln ? ln.push(n) : ln = [n] : yn = n;
  }
  function Cs() {
    if (yn) {
      var n = yn, r = ln;
      if (ln = yn = null, Qp(n), r)
        for (n = 0; n < r.length; n++)
          Qp(r[n]);
    }
  }
  function Wp(n, r) {
    return n(r);
  }
  function Gp() {
  }
  var Ts = !1;
  function Ef(n, r, l) {
    if (Ts)
      return n(r, l);
    Ts = !0;
    try {
      return Wp(n, r, l);
    } finally {
      Ts = !1, (yn !== null || ln !== null) && (Gp(), Cs());
    }
  }
  function uo(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = He(l);
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
  var Rs = !1;
  if (K)
    try {
      var dl = {};
      Object.defineProperty(dl, "passive", { get: function() {
        Rs = !0;
      } }), window.addEventListener("test", dl, dl), window.removeEventListener("test", dl, dl);
    } catch {
      Rs = !1;
    }
  function ru(n, r, l, o, c, d, y, R, w) {
    var H = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, H);
    } catch (Z) {
      this.onError(Z);
    }
  }
  var Ta = !1, Ja = null, au = !1, oo = null, Cf = { onError: function(n) {
    Ta = !0, Ja = n;
  } };
  function Tf(n, r, l, o, c, d, y, R, w) {
    Ta = !1, Ja = null, ru.apply(Cf, arguments);
  }
  function iu(n, r, l, o, c, d, y, R, w) {
    if (Tf.apply(this, arguments), Ta) {
      if (Ta) {
        var H = Ja;
        Ta = !1, Ja = null;
      } else
        throw Error(m(198));
      au || (au = !0, oo = H);
    }
  }
  function Ua(n) {
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
  function so(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function lu(n) {
    if (Ua(n) !== n)
      throw Error(m(188));
  }
  function fr(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ua(n), r === null)
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
            return lu(c), n;
          if (d === o)
            return lu(c), r;
          d = d.sibling;
        }
        throw Error(m(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var y = !1, R = c.child; R; ) {
          if (R === l) {
            y = !0, l = c, o = d;
            break;
          }
          if (R === o) {
            y = !0, o = c, l = d;
            break;
          }
          R = R.sibling;
        }
        if (!y) {
          for (R = d.child; R; ) {
            if (R === l) {
              y = !0, l = d, o = c;
              break;
            }
            if (R === o) {
              y = !0, o = d, l = c;
              break;
            }
            R = R.sibling;
          }
          if (!y)
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
  function qp(n) {
    return n = fr(n), n !== null ? Xp(n) : null;
  }
  function Xp(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Xp(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Rf = C.unstable_scheduleCallback, Kp = C.unstable_cancelCallback, ly = C.unstable_shouldYield, uy = C.unstable_requestPaint, un = C.unstable_now, oy = C.unstable_getCurrentPriorityLevel, ei = C.unstable_ImmediatePriority, pt = C.unstable_UserBlockingPriority, ki = C.unstable_NormalPriority, Zp = C.unstable_LowPriority, xf = C.unstable_IdlePriority, co = null, Ra = null;
  function Jp(n) {
    if (Ra && typeof Ra.onCommitFiberRoot == "function")
      try {
        Ra.onCommitFiberRoot(co, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Kr = Math.clz32 ? Math.clz32 : sy, ev = Math.log, tv = Math.LN2;
  function sy(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ev(n) / tv | 0) | 0;
  }
  var xs = 64, uu = 4194304;
  function pl(n) {
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
  function xa(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, y = l & 268435455;
    if (y !== 0) {
      var R = y & ~c;
      R !== 0 ? o = pl(R) : (d &= y, d !== 0 && (o = pl(d)));
    } else
      y = l & ~c, y !== 0 ? o = pl(y) : d !== 0 && (o = pl(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function wf(n, r) {
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
  function ws(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var y = 31 - Kr(d), R = 1 << y, w = c[y];
      w === -1 ? (!(R & l) || R & o) && (c[y] = wf(R, r)) : w <= r && (n.expiredLanes |= R), d &= ~R;
    }
  }
  function bf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function bs() {
    var n = xs;
    return xs <<= 1, !(xs & 4194240) && (xs = 64), n;
  }
  function Df(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function vl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Kr(r), n[r] = l;
  }
  function cy(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function fo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function _f(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nv, Ds, Pt, rv, kf, rt = !1, po = [], gn = null, Zr = null, Jr = null, vo = /* @__PURE__ */ new Map(), xn = /* @__PURE__ */ new Map(), At = [], fy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        gn = null;
        break;
      case "dragenter":
      case "dragleave":
        Zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Jr = null;
        break;
      case "pointerover":
      case "pointerout":
        vo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xn.delete(r.pointerId);
    }
  }
  function nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Mo(r), r !== null && Ds(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Oi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return gn = nr(gn, n, r, l, o, c), !0;
      case "dragenter":
        return Zr = nr(Zr, n, r, l, o, c), !0;
      case "mouseover":
        return Jr = nr(Jr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return vo.set(d, nr(vo.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, xn.set(d, nr(xn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function av(n) {
    var r = ta(n.target);
    if (r !== null) {
      var l = Ua(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = so(l), r !== null) {
            n.blockedOn = r, kf(n.priority, function() {
              Pt(l);
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
  function ou(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Os(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Xr = o, l.target.dispatchEvent(o), Xr = null;
      } else
        return r = Mo(l), r !== null && Ds(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Of(n, r, l) {
    ou(n) && l.delete(r);
  }
  function iv() {
    rt = !1, gn !== null && ou(gn) && (gn = null), Zr !== null && ou(Zr) && (Zr = null), Jr !== null && ou(Jr) && (Jr = null), vo.forEach(Of), xn.forEach(Of);
  }
  function ho(n, r) {
    n.blockedOn === r && (n.blockedOn = null, rt || (rt = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, iv)));
  }
  function mo(n) {
    function r(c) {
      return ho(c, n);
    }
    if (0 < po.length) {
      ho(po[0], n);
      for (var l = 1; l < po.length; l++) {
        var o = po[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (gn !== null && ho(gn, n), Zr !== null && ho(Zr, n), Jr !== null && ho(Jr, n), vo.forEach(r), xn.forEach(r), l = 0; l < At.length; l++)
      o = At[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < At.length && (l = At[0], l.blockedOn === null); )
      av(l), l.blockedOn === null && At.shift();
  }
  var su = je.ReactCurrentBatchConfig, hl = !0;
  function lv(n, r, l, o) {
    var c = Lt, d = su.transition;
    su.transition = null;
    try {
      Lt = 1, ks(n, r, l, o);
    } finally {
      Lt = c, su.transition = d;
    }
  }
  function _s(n, r, l, o) {
    var c = Lt, d = su.transition;
    su.transition = null;
    try {
      Lt = 4, ks(n, r, l, o);
    } finally {
      Lt = c, su.transition = d;
    }
  }
  function ks(n, r, l, o) {
    if (hl) {
      var c = Os(n, r, l, o);
      if (c === null)
        Ps(n, r, o, yo, l), wa(n, o);
      else if (Oi(c, n, r, l, o))
        o.stopPropagation();
      else if (wa(n, o), r & 4 && -1 < fy.indexOf(n)) {
        for (; c !== null; ) {
          var d = Mo(c);
          if (d !== null && nv(d), d = Os(n, r, l, o), d === null && Ps(n, r, o, yo, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        Ps(n, r, o, null, l);
    }
  }
  var yo = null;
  function Os(n, r, l, o) {
    if (yo = null, n = an(o), n = ta(n), n !== null)
      if (r = Ua(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = so(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return yo = n, null;
  }
  function Lf(n) {
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
        switch (oy()) {
          case ei:
            return 1;
          case pt:
            return 4;
          case ki:
          case Zp:
            return 16;
          case xf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ti = null, go = null, So = null;
  function Mf() {
    if (So)
      return So;
    var n, r = go, l = r.length, o, c = "value" in ti ? ti.value : ti.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var y = l - n;
    for (o = 1; o <= y && r[l - o] === c[d - o]; o++)
      ;
    return So = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function cu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Eo() {
    return !0;
  }
  function uv() {
    return !1;
  }
  function Fr(n) {
    function r(l, o, c, d, y) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var R in n)
        n.hasOwnProperty(R) && (l = n[R], this[R] = l ? l(d) : d[R]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Eo : uv, this.isPropagationStopped = uv, this;
    }
    return z(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Eo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Eo);
    }, persist: function() {
    }, isPersistent: Eo }), r;
  }
  var Li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ls = Fr(Li), fu = z({}, Li, { view: 0, detail: 0 }), ov = Fr(fu), Ms, Nf, Co, Nn = z({}, fu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ff, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Co && (Co && n.type === "mousemove" ? (Ms = n.screenX - Co.screenX, Nf = n.screenY - Co.screenY) : Nf = Ms = 0, Co = n), Ms);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Nf;
  } }), Ns = Fr(Nn), sv = z({}, Nn, { dataTransfer: 0 }), cv = Fr(sv), dy = z({}, fu, { relatedTarget: 0 }), Mi = Fr(dy), zf = z({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fv = Fr(zf), py = z({}, Li, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), vy = Fr(py), hy = z({}, Li, { data: 0 }), Af = Fr(hy), Uf = {
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
  }, dv = {
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
  }, pv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function vv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = pv[n]) ? !!r[n] : !1;
  }
  function Ff() {
    return vv;
  }
  var ni = z({}, fu, { key: function(n) {
    if (n.key) {
      var r = Uf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = cu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ff, charCode: function(n) {
    return n.type === "keypress" ? cu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? cu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), my = Fr(ni), Hf = z({}, Nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zs = Fr(Hf), Vf = z({}, fu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ff }), yy = Fr(Vf), As = z({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hv = Fr(As), Rr = z({}, Nn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ri = Fr(Rr), Sn = [9, 13, 27, 32], ba = K && "CompositionEvent" in window, ml = null;
  K && "documentMode" in document && (ml = document.documentMode);
  var Us = K && "TextEvent" in window && !ml, mv = K && (!ba || ml && 8 < ml && 11 >= ml), du = String.fromCharCode(32), yv = !1;
  function gv(n, r) {
    switch (n) {
      case "keyup":
        return Sn.indexOf(r.keyCode) !== -1;
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
  function Fs(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var pu = !1;
  function gy(n, r) {
    switch (n) {
      case "compositionend":
        return Fs(r);
      case "keypress":
        return r.which !== 32 ? null : (yv = !0, du);
      case "textInput":
        return n = r.data, n === du && yv ? null : n;
      default:
        return null;
    }
  }
  function Sy(n, r) {
    if (pu)
      return n === "compositionend" || !ba && gv(n, r) ? (n = Mf(), So = go = ti = null, pu = !1, n) : null;
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
        return mv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Sv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ev(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Sv[n.type] : r === "textarea";
  }
  function Cv(n, r, l, o) {
    Es(o), r = ko(r, "onChange"), 0 < r.length && (l = new Ls("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var To = null, vu = null;
  function hu(n) {
    Bs(n, 0);
  }
  function mu(n) {
    var r = gu(n);
    if (le(r))
      return n;
  }
  function Tv(n, r) {
    if (n === "change")
      return r;
  }
  var jf = !1;
  if (K) {
    var Bf;
    if (K) {
      var Pf = "oninput" in document;
      if (!Pf) {
        var Rv = document.createElement("div");
        Rv.setAttribute("oninput", "return;"), Pf = typeof Rv.oninput == "function";
      }
      Bf = Pf;
    } else
      Bf = !1;
    jf = Bf && (!document.documentMode || 9 < document.documentMode);
  }
  function xv() {
    To && (To.detachEvent("onpropertychange", wv), vu = To = null);
  }
  function wv(n) {
    if (n.propertyName === "value" && mu(vu)) {
      var r = [];
      Cv(r, vu, n, an(n)), Ef(hu, r);
    }
  }
  function Ey(n, r, l) {
    n === "focusin" ? (xv(), To = r, vu = l, To.attachEvent("onpropertychange", wv)) : n === "focusout" && xv();
  }
  function Cy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return mu(vu);
  }
  function Ty(n, r) {
    if (n === "click")
      return mu(r);
  }
  function bv(n, r) {
    if (n === "input" || n === "change")
      return mu(r);
  }
  function Ry(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ea = typeof Object.is == "function" ? Object.is : Ry;
  function Ro(n, r) {
    if (ea(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!$.call(r, c) || !ea(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function Dv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function _v(n, r) {
    var l = Dv(n);
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
      l = Dv(l);
    }
  }
  function kv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? kv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Hs() {
    for (var n = window, r = zt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = zt(n.document);
    }
    return r;
  }
  function ai(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Vs(n) {
    var r = Hs(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && kv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ai(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = _v(l, d);
          var y = _v(
            l,
            o
          );
          c && y && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== y.node || n.focusOffset !== y.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(y.node, y.offset)) : (r.setEnd(y.node, y.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ov = K && "documentMode" in document && 11 >= document.documentMode, Da = null, $f = null, xo = null, If = !1;
  function Lv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    If || Da == null || Da !== zt(o) || (o = Da, "selectionStart" in o && ai(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), xo && Ro(xo, o) || (xo = o, o = ko($f, "onSelect"), 0 < o.length && (r = new Ls("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Da)));
  }
  function js(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var yl = { animationend: js("Animation", "AnimationEnd"), animationiteration: js("Animation", "AnimationIteration"), animationstart: js("Animation", "AnimationStart"), transitionend: js("Transition", "TransitionEnd") }, Yf = {}, Qf = {};
  K && (Qf = document.createElement("div").style, "AnimationEvent" in window || (delete yl.animationend.animation, delete yl.animationiteration.animation, delete yl.animationstart.animation), "TransitionEvent" in window || delete yl.transitionend.transition);
  function zn(n) {
    if (Yf[n])
      return Yf[n];
    if (!yl[n])
      return n;
    var r = yl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Qf)
        return Yf[n] = r[l];
    return n;
  }
  var Wf = zn("animationend"), Mv = zn("animationiteration"), Nv = zn("animationstart"), zv = zn("transitionend"), Av = /* @__PURE__ */ new Map(), Uv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ii(n, r) {
    Av.set(n, r), x(r, [n]);
  }
  for (var wo = 0; wo < Uv.length; wo++) {
    var gl = Uv[wo], xy = gl.toLowerCase(), bo = gl[0].toUpperCase() + gl.slice(1);
    ii(xy, "on" + bo);
  }
  ii(Wf, "onAnimationEnd"), ii(Mv, "onAnimationIteration"), ii(Nv, "onAnimationStart"), ii("dblclick", "onDoubleClick"), ii("focusin", "onFocus"), ii("focusout", "onBlur"), ii(zv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Do = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));
  function Fv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, iu(o, r, void 0, n), n.currentTarget = null;
  }
  function Bs(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var y = o.length - 1; 0 <= y; y--) {
            var R = o[y], w = R.instance, H = R.currentTarget;
            if (R = R.listener, w !== d && c.isPropagationStopped())
              break e;
            Fv(c, R, H), d = w;
          }
        else
          for (y = 0; y < o.length; y++) {
            if (R = o[y], w = R.instance, H = R.currentTarget, R = R.listener, w !== d && c.isPropagationStopped())
              break e;
            Fv(c, R, H), d = w;
          }
      }
    }
    if (au)
      throw n = oo, au = !1, oo = null, n;
  }
  function $t(n, r) {
    var l = r[ed];
    l === void 0 && (l = r[ed] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Hv(r, n, 2, !1), l.add(o));
  }
  function Ni(n, r, l) {
    var o = 0;
    r && (o |= 4), Hv(l, n, o, r);
  }
  var li = "_reactListening" + Math.random().toString(36).slice(2);
  function yu(n) {
    if (!n[li]) {
      n[li] = !0, E.forEach(function(l) {
        l !== "selectionchange" && (wy.has(l) || Ni(l, !1, n), Ni(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[li] || (r[li] = !0, Ni("selectionchange", !1, r));
    }
  }
  function Hv(n, r, l, o) {
    switch (Lf(r)) {
      case 1:
        var c = lv;
        break;
      case 4:
        c = _s;
        break;
      default:
        c = ks;
    }
    l = c.bind(null, r, l, n), c = void 0, !Rs || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Ps(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var y = o.tag;
          if (y === 3 || y === 4) {
            var R = o.stateNode.containerInfo;
            if (R === c || R.nodeType === 8 && R.parentNode === c)
              break;
            if (y === 4)
              for (y = o.return; y !== null; ) {
                var w = y.tag;
                if ((w === 3 || w === 4) && (w = y.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                y = y.return;
              }
            for (; R !== null; ) {
              if (y = ta(R), y === null)
                return;
              if (w = y.tag, w === 5 || w === 6) {
                o = d = y;
                continue e;
              }
              R = R.parentNode;
            }
          }
          o = o.return;
        }
    Ef(function() {
      var H = d, Z = an(l), J = [];
      e: {
        var X = Av.get(n);
        if (X !== void 0) {
          var ve = Ls, xe = n;
          switch (n) {
            case "keypress":
              if (cu(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ve = my;
              break;
            case "focusin":
              xe = "focus", ve = Mi;
              break;
            case "focusout":
              xe = "blur", ve = Mi;
              break;
            case "beforeblur":
            case "afterblur":
              ve = Mi;
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
              ve = Ns;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ve = cv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ve = yy;
              break;
            case Wf:
            case Mv:
            case Nv:
              ve = fv;
              break;
            case zv:
              ve = hv;
              break;
            case "scroll":
              ve = ov;
              break;
            case "wheel":
              ve = ri;
              break;
            case "copy":
            case "cut":
            case "paste":
              ve = vy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ve = zs;
          }
          var De = (r & 4) !== 0, pn = !De && n === "scroll", L = De ? X !== null ? X + "Capture" : null : X;
          De = [];
          for (var k = H, A; k !== null; ) {
            A = k;
            var ae = A.stateNode;
            if (A.tag === 5 && ae !== null && (A = ae, L !== null && (ae = uo(k, L), ae != null && De.push(_o(k, ae, A)))), pn)
              break;
            k = k.return;
          }
          0 < De.length && (X = new ve(X, xe, null, l, Z), J.push({ event: X, listeners: De }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (X = n === "mouseover" || n === "pointerover", ve = n === "mouseout" || n === "pointerout", X && l !== Xr && (xe = l.relatedTarget || l.fromElement) && (ta(xe) || xe[ui]))
            break e;
          if ((ve || X) && (X = Z.window === Z ? Z : (X = Z.ownerDocument) ? X.defaultView || X.parentWindow : window, ve ? (xe = l.relatedTarget || l.toElement, ve = H, xe = xe ? ta(xe) : null, xe !== null && (pn = Ua(xe), xe !== pn || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (ve = null, xe = H), ve !== xe)) {
            if (De = Ns, ae = "onMouseLeave", L = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (De = zs, ae = "onPointerLeave", L = "onPointerEnter", k = "pointer"), pn = ve == null ? X : gu(ve), A = xe == null ? X : gu(xe), X = new De(ae, k + "leave", ve, l, Z), X.target = pn, X.relatedTarget = A, ae = null, ta(Z) === H && (De = new De(L, k + "enter", xe, l, Z), De.target = A, De.relatedTarget = pn, ae = De), pn = ae, ve && xe)
              t: {
                for (De = ve, L = xe, k = 0, A = De; A; A = Sl(A))
                  k++;
                for (A = 0, ae = L; ae; ae = Sl(ae))
                  A++;
                for (; 0 < k - A; )
                  De = Sl(De), k--;
                for (; 0 < A - k; )
                  L = Sl(L), A--;
                for (; k--; ) {
                  if (De === L || L !== null && De === L.alternate)
                    break t;
                  De = Sl(De), L = Sl(L);
                }
                De = null;
              }
            else
              De = null;
            ve !== null && Gf(J, X, ve, De, !1), xe !== null && pn !== null && Gf(J, pn, xe, De, !0);
          }
        }
        e: {
          if (X = H ? gu(H) : window, ve = X.nodeName && X.nodeName.toLowerCase(), ve === "select" || ve === "input" && X.type === "file")
            var Oe = Tv;
          else if (Ev(X))
            if (jf)
              Oe = bv;
            else {
              Oe = Cy;
              var we = Ey;
            }
          else
            (ve = X.nodeName) && ve.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (Oe = Ty);
          if (Oe && (Oe = Oe(n, H))) {
            Cv(J, Oe, l, Z);
            break e;
          }
          we && we(n, X, H), n === "focusout" && (we = X._wrapperState) && we.controlled && X.type === "number" && Te(X, "number", X.value);
        }
        switch (we = H ? gu(H) : window, n) {
          case "focusin":
            (Ev(we) || we.contentEditable === "true") && (Da = we, $f = H, xo = null);
            break;
          case "focusout":
            xo = $f = Da = null;
            break;
          case "mousedown":
            If = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            If = !1, Lv(J, l, Z);
            break;
          case "selectionchange":
            if (Ov)
              break;
          case "keydown":
          case "keyup":
            Lv(J, l, Z);
        }
        var Fe;
        if (ba)
          e: {
            switch (n) {
              case "compositionstart":
                var Ke = "onCompositionStart";
                break e;
              case "compositionend":
                Ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ke = "onCompositionUpdate";
                break e;
            }
            Ke = void 0;
          }
        else
          pu ? gv(n, l) && (Ke = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (mv && l.locale !== "ko" && (pu || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && pu && (Fe = Mf()) : (ti = Z, go = "value" in ti ? ti.value : ti.textContent, pu = !0)), we = ko(H, Ke), 0 < we.length && (Ke = new Af(Ke, n, null, l, Z), J.push({ event: Ke, listeners: we }), Fe ? Ke.data = Fe : (Fe = Fs(l), Fe !== null && (Ke.data = Fe)))), (Fe = Us ? gy(n, l) : Sy(n, l)) && (H = ko(H, "onBeforeInput"), 0 < H.length && (Z = new Af("onBeforeInput", "beforeinput", null, l, Z), J.push({ event: Z, listeners: H }), Z.data = Fe));
      }
      Bs(J, r);
    });
  }
  function _o(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ko(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = uo(n, l), d != null && o.unshift(_o(n, d, c)), d = uo(n, r), d != null && o.push(_o(n, d, c))), n = n.return;
    }
    return o;
  }
  function Sl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Gf(n, r, l, o, c) {
    for (var d = r._reactName, y = []; l !== null && l !== o; ) {
      var R = l, w = R.alternate, H = R.stateNode;
      if (w !== null && w === o)
        break;
      R.tag === 5 && H !== null && (R = H, c ? (w = uo(l, d), w != null && y.unshift(_o(l, w, R))) : c || (w = uo(l, d), w != null && y.push(_o(l, w, R)))), l = l.return;
    }
    y.length !== 0 && n.push({ event: r, listeners: y });
  }
  var qf = /\r\n?/g, by = /\u0000|\uFFFD/g;
  function Xf(n) {
    return (typeof n == "string" ? n : "" + n).replace(qf, `
`).replace(by, "");
  }
  function $s(n, r, l) {
    if (r = Xf(r), Xf(n) !== r && l)
      throw Error(m(425));
  }
  function Is() {
  }
  var Kf = null, El = null;
  function Oo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cl = typeof setTimeout == "function" ? setTimeout : void 0, Vv = typeof clearTimeout == "function" ? clearTimeout : void 0, Zf = typeof Promise == "function" ? Promise : void 0, Jf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zf < "u" ? function(n) {
    return Zf.resolve(null).then(n).catch(Dy);
  } : Cl;
  function Dy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function zi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), mo(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    mo(r);
  }
  function _a(n) {
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
  function Lo(n) {
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
  var Ai = Math.random().toString(36).slice(2), Fa = "__reactFiber$" + Ai, Tl = "__reactProps$" + Ai, ui = "__reactContainer$" + Ai, ed = "__reactEvents$" + Ai, _y = "__reactListeners$" + Ai, td = "__reactHandles$" + Ai;
  function ta(n) {
    var r = n[Fa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ui] || l[Fa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Lo(n); n !== null; ) {
            if (l = n[Fa])
              return l;
            n = Lo(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Mo(n) {
    return n = n[Fa] || n[ui], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function gu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(m(33));
  }
  function He(n) {
    return n[Tl] || null;
  }
  var Ui = [], Yt = -1;
  function lt(n) {
    return { current: n };
  }
  function bt(n) {
    0 > Yt || (n.current = Ui[Yt], Ui[Yt] = null, Yt--);
  }
  function kt(n, r) {
    Yt++, Ui[Yt] = n.current, n.current = r;
  }
  var Ha = {}, Xe = lt(Ha), on = lt(!1), xr = Ha;
  function na(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ha;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Xt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ra() {
    bt(on), bt(Xe);
  }
  function Fi(n, r, l) {
    if (Xe.current !== Ha)
      throw Error(m(168));
    kt(Xe, r), kt(on, l);
  }
  function No(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(m(108, We(n) || "Unknown", c));
    return z({}, l, o);
  }
  function Ys(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ha, xr = Xe.current, kt(Xe, n), kt(on, on.current), !0;
  }
  function jv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(m(169));
    l ? (n = No(n, r, xr), o.__reactInternalMemoizedMergedChildContext = n, bt(on), bt(Xe), kt(Xe, n)) : bt(on), kt(on, l);
  }
  var Hr = null, An = !1, zo = !1;
  function nd(n) {
    Hr === null ? Hr = [n] : Hr.push(n);
  }
  function rd(n) {
    An = !0, nd(n);
  }
  function wr() {
    if (!zo && Hr !== null) {
      zo = !0;
      var n = 0, r = Lt;
      try {
        var l = Hr;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Hr = null, An = !1;
      } catch (c) {
        throw Hr !== null && (Hr = Hr.slice(n + 1)), Rf(ei, wr), c;
      } finally {
        Lt = r, zo = !1;
      }
    }
    return null;
  }
  var Hi = [], br = 0, Rl = null, Su = 0, Dr = [], rr = 0, aa = null, Pn = 1, oi = "";
  function Vr(n, r) {
    Hi[br++] = Su, Hi[br++] = Rl, Rl = n, Su = r;
  }
  function ad(n, r, l) {
    Dr[rr++] = Pn, Dr[rr++] = oi, Dr[rr++] = aa, aa = n;
    var o = Pn;
    n = oi;
    var c = 32 - Kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Kr(r) + c;
    if (30 < d) {
      var y = c - c % 5;
      d = (o & (1 << y) - 1).toString(32), o >>= y, c -= y, Pn = 1 << 32 - Kr(r) + c | l << c | o, oi = d + n;
    } else
      Pn = 1 << d | l << c | o, oi = n;
  }
  function Qs(n) {
    n.return !== null && (Vr(n, 1), ad(n, 1, 0));
  }
  function id(n) {
    for (; n === Rl; )
      Rl = Hi[--br], Hi[br] = null, Su = Hi[--br], Hi[br] = null;
    for (; n === aa; )
      aa = Dr[--rr], Dr[rr] = null, oi = Dr[--rr], Dr[rr] = null, Pn = Dr[--rr], Dr[rr] = null;
  }
  var jr = null, _r = null, Qt = !1, ia = null;
  function ld(n, r) {
    var l = fa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Bv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, jr = n, _r = _a(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, jr = n, _r = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = aa !== null ? { id: Pn, overflow: oi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = fa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, jr = n, _r = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ws(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Gs(n) {
    if (Qt) {
      var r = _r;
      if (r) {
        var l = r;
        if (!Bv(n, r)) {
          if (Ws(n))
            throw Error(m(418));
          r = _a(l.nextSibling);
          var o = jr;
          r && Bv(n, r) ? ld(o, l) : (n.flags = n.flags & -4097 | 2, Qt = !1, jr = n);
        }
      } else {
        if (Ws(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, Qt = !1, jr = n;
      }
    }
  }
  function Pv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    jr = n;
  }
  function qs(n) {
    if (n !== jr)
      return !1;
    if (!Qt)
      return Pv(n), Qt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Oo(n.type, n.memoizedProps)), r && (r = _r)) {
      if (Ws(n))
        throw $v(), Error(m(418));
      for (; r; )
        ld(n, r), r = _a(r.nextSibling);
    }
    if (Pv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                _r = _a(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        _r = null;
      }
    } else
      _r = jr ? _a(n.stateNode.nextSibling) : null;
    return !0;
  }
  function $v() {
    for (var n = _r; n; )
      n = _a(n.nextSibling);
  }
  function en() {
    _r = jr = null, Qt = !1;
  }
  function ud(n) {
    ia === null ? ia = [n] : ia.push(n);
  }
  var Xs = je.ReactCurrentBatchConfig;
  function Br(n, r) {
    if (n && n.defaultProps) {
      r = z({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Va = lt(null), Ks = null, Vi = null, od = null;
  function sd() {
    od = Vi = Ks = null;
  }
  function ji(n) {
    var r = Va.current;
    bt(Va), n._currentValue = r;
  }
  function Un(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ue(n, r) {
    Ks = n, od = Vi = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (En = !0), n.firstContext = null);
  }
  function dn(n) {
    var r = n._currentValue;
    if (od !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Vi === null) {
        if (Ks === null)
          throw Error(m(308));
        Vi = n, Ks.dependencies = { lanes: 0, firstContext: n };
      } else
        Vi = Vi.next = n;
    return r;
  }
  var $n = null;
  function cd(n) {
    $n === null ? $n = [n] : $n.push(n);
  }
  function Iv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, si(n, o);
  }
  function si(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Bi = !1;
  function fd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function wn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ci(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Pi(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, vt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, si(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, si(n, l);
  }
  function Zs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, fo(n, l);
    }
  }
  function dd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var y = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = y : d = d.next = y, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function $i(n, r, l, o) {
    var c = n.updateQueue;
    Bi = !1;
    var d = c.firstBaseUpdate, y = c.lastBaseUpdate, R = c.shared.pending;
    if (R !== null) {
      c.shared.pending = null;
      var w = R, H = w.next;
      w.next = null, y === null ? d = H : y.next = H, y = w;
      var Z = n.alternate;
      Z !== null && (Z = Z.updateQueue, R = Z.lastBaseUpdate, R !== y && (R === null ? Z.firstBaseUpdate = H : R.next = H, Z.lastBaseUpdate = w));
    }
    if (d !== null) {
      var J = c.baseState;
      y = 0, Z = H = w = null, R = d;
      do {
        var X = R.lane, ve = R.eventTime;
        if ((o & X) === X) {
          Z !== null && (Z = Z.next = {
            eventTime: ve,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var xe = n, De = R;
            switch (X = r, ve = l, De.tag) {
              case 1:
                if (xe = De.payload, typeof xe == "function") {
                  J = xe.call(ve, J, X);
                  break e;
                }
                J = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = De.payload, X = typeof xe == "function" ? xe.call(ve, J, X) : xe, X == null)
                  break e;
                J = z({}, J, X);
                break e;
              case 2:
                Bi = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (n.flags |= 64, X = c.effects, X === null ? c.effects = [R] : X.push(R));
        } else
          ve = { eventTime: ve, lane: X, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, Z === null ? (H = Z = ve, w = J) : Z = Z.next = ve, y |= X;
        if (R = R.next, R === null) {
          if (R = c.shared.pending, R === null)
            break;
          X = R, R = X.next, X.next = null, c.lastBaseUpdate = X, c.shared.pending = null;
        }
      } while (1);
      if (Z === null && (w = J), c.baseState = w, c.firstBaseUpdate = H, c.lastBaseUpdate = Z, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          y |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      vi |= y, n.lanes = y, n.memoizedState = J;
    }
  }
  function xl(n, r, l) {
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
  var Yv = new p.Component().refs;
  function pd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : z({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Js = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ua(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = ur(), c = Cn(n), d = ci(o, c);
    d.payload = r, l != null && (d.callback = l), r = Pi(n, d, c), r !== null && (or(r, n, c, o), Zs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = ur(), c = Cn(n), d = ci(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Pi(n, d, c), r !== null && (or(r, n, c, o), Zs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ur(), o = Cn(n), c = ci(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Pi(n, c, o), r !== null && (or(r, n, o, l), Zs(r, n, o));
  } };
  function Qv(n, r, l, o, c, d, y) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, y) : r.prototype && r.prototype.isPureReactComponent ? !Ro(l, o) || !Ro(c, d) : !0;
  }
  function Wv(n, r, l) {
    var o = !1, c = Ha, d = r.contextType;
    return typeof d == "object" && d !== null ? d = dn(d) : (c = Xt(r) ? xr : Xe.current, o = r.contextTypes, d = (o = o != null) ? na(n, c) : Ha), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Js, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Gv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Js.enqueueReplaceState(r, r.state, null);
  }
  function ec(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Yv, fd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = dn(d) : (d = Xt(r) ? xr : Xe.current, c.context = na(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (pd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Js.enqueueReplaceState(c, c.state, null), $i(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Eu(n, r, l) {
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
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(y) {
          var R = c.refs;
          R === Yv && (R = c.refs = {}), y === null ? delete R[d] : R[d] = y;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(m(284));
      if (!l._owner)
        throw Error(m(290, n));
    }
    return n;
  }
  function tc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function qv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Xv(n) {
    function r(L, k) {
      if (n) {
        var A = L.deletions;
        A === null ? (L.deletions = [k], L.flags |= 16) : A.push(k);
      }
    }
    function l(L, k) {
      if (!n)
        return null;
      for (; k !== null; )
        r(L, k), k = k.sibling;
      return null;
    }
    function o(L, k) {
      for (L = /* @__PURE__ */ new Map(); k !== null; )
        k.key !== null ? L.set(k.key, k) : L.set(k.index, k), k = k.sibling;
      return L;
    }
    function c(L, k) {
      return L = Ki(L, k), L.index = 0, L.sibling = null, L;
    }
    function d(L, k, A) {
      return L.index = A, n ? (A = L.alternate, A !== null ? (A = A.index, A < k ? (L.flags |= 2, k) : A) : (L.flags |= 2, k)) : (L.flags |= 1048576, k);
    }
    function y(L) {
      return n && L.alternate === null && (L.flags |= 2), L;
    }
    function R(L, k, A, ae) {
      return k === null || k.tag !== 6 ? (k = Jo(A, L.mode, ae), k.return = L, k) : (k = c(k, A), k.return = L, k);
    }
    function w(L, k, A, ae) {
      var Oe = A.type;
      return Oe === qe ? Z(L, k, A.props.children, ae, A.key) : k !== null && (k.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === et && qv(Oe) === k.type) ? (ae = c(k, A.props), ae.ref = Eu(L, k, A), ae.return = L, ae) : (ae = Nc(A.type, A.key, A.props, null, L.mode, ae), ae.ref = Eu(L, k, A), ae.return = L, ae);
    }
    function H(L, k, A, ae) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== A.containerInfo || k.stateNode.implementation !== A.implementation ? (k = $l(A, L.mode, ae), k.return = L, k) : (k = c(k, A.children || []), k.return = L, k);
    }
    function Z(L, k, A, ae, Oe) {
      return k === null || k.tag !== 7 ? (k = Pl(A, L.mode, ae, Oe), k.return = L, k) : (k = c(k, A), k.return = L, k);
    }
    function J(L, k, A) {
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return k = Jo("" + k, L.mode, A), k.return = L, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Y:
            return A = Nc(k.type, k.key, k.props, null, L.mode, A), A.ref = Eu(L, null, k), A.return = L, A;
          case ft:
            return k = $l(k, L.mode, A), k.return = L, k;
          case et:
            var ae = k._init;
            return J(L, ae(k._payload), A);
        }
        if (se(k) || _e(k))
          return k = Pl(k, L.mode, A, null), k.return = L, k;
        tc(L, k);
      }
      return null;
    }
    function X(L, k, A, ae) {
      var Oe = k !== null ? k.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number")
        return Oe !== null ? null : R(L, k, "" + A, ae);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Y:
            return A.key === Oe ? w(L, k, A, ae) : null;
          case ft:
            return A.key === Oe ? H(L, k, A, ae) : null;
          case et:
            return Oe = A._init, X(
              L,
              k,
              Oe(A._payload),
              ae
            );
        }
        if (se(A) || _e(A))
          return Oe !== null ? null : Z(L, k, A, ae, null);
        tc(L, A);
      }
      return null;
    }
    function ve(L, k, A, ae, Oe) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number")
        return L = L.get(A) || null, R(k, L, "" + ae, Oe);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case Y:
            return L = L.get(ae.key === null ? A : ae.key) || null, w(k, L, ae, Oe);
          case ft:
            return L = L.get(ae.key === null ? A : ae.key) || null, H(k, L, ae, Oe);
          case et:
            var we = ae._init;
            return ve(L, k, A, we(ae._payload), Oe);
        }
        if (se(ae) || _e(ae))
          return L = L.get(A) || null, Z(k, L, ae, Oe, null);
        tc(k, ae);
      }
      return null;
    }
    function xe(L, k, A, ae) {
      for (var Oe = null, we = null, Fe = k, Ke = k = 0, Vn = null; Fe !== null && Ke < A.length; Ke++) {
        Fe.index > Ke ? (Vn = Fe, Fe = null) : Vn = Fe.sibling;
        var Et = X(L, Fe, A[Ke], ae);
        if (Et === null) {
          Fe === null && (Fe = Vn);
          break;
        }
        n && Fe && Et.alternate === null && r(L, Fe), k = d(Et, k, Ke), we === null ? Oe = Et : we.sibling = Et, we = Et, Fe = Vn;
      }
      if (Ke === A.length)
        return l(L, Fe), Qt && Vr(L, Ke), Oe;
      if (Fe === null) {
        for (; Ke < A.length; Ke++)
          Fe = J(L, A[Ke], ae), Fe !== null && (k = d(Fe, k, Ke), we === null ? Oe = Fe : we.sibling = Fe, we = Fe);
        return Qt && Vr(L, Ke), Oe;
      }
      for (Fe = o(L, Fe); Ke < A.length; Ke++)
        Vn = ve(Fe, L, Ke, A[Ke], ae), Vn !== null && (n && Vn.alternate !== null && Fe.delete(Vn.key === null ? Ke : Vn.key), k = d(Vn, k, Ke), we === null ? Oe = Vn : we.sibling = Vn, we = Vn);
      return n && Fe.forEach(function(Zi) {
        return r(L, Zi);
      }), Qt && Vr(L, Ke), Oe;
    }
    function De(L, k, A, ae) {
      var Oe = _e(A);
      if (typeof Oe != "function")
        throw Error(m(150));
      if (A = Oe.call(A), A == null)
        throw Error(m(151));
      for (var we = Oe = null, Fe = k, Ke = k = 0, Vn = null, Et = A.next(); Fe !== null && !Et.done; Ke++, Et = A.next()) {
        Fe.index > Ke ? (Vn = Fe, Fe = null) : Vn = Fe.sibling;
        var Zi = X(L, Fe, Et.value, ae);
        if (Zi === null) {
          Fe === null && (Fe = Vn);
          break;
        }
        n && Fe && Zi.alternate === null && r(L, Fe), k = d(Zi, k, Ke), we === null ? Oe = Zi : we.sibling = Zi, we = Zi, Fe = Vn;
      }
      if (Et.done)
        return l(
          L,
          Fe
        ), Qt && Vr(L, Ke), Oe;
      if (Fe === null) {
        for (; !Et.done; Ke++, Et = A.next())
          Et = J(L, Et.value, ae), Et !== null && (k = d(Et, k, Ke), we === null ? Oe = Et : we.sibling = Et, we = Et);
        return Qt && Vr(L, Ke), Oe;
      }
      for (Fe = o(L, Fe); !Et.done; Ke++, Et = A.next())
        Et = ve(Fe, L, Ke, Et.value, ae), Et !== null && (n && Et.alternate !== null && Fe.delete(Et.key === null ? Ke : Et.key), k = d(Et, k, Ke), we === null ? Oe = Et : we.sibling = Et, we = Et);
      return n && Fe.forEach(function(Gy) {
        return r(L, Gy);
      }), Qt && Vr(L, Ke), Oe;
    }
    function pn(L, k, A, ae) {
      if (typeof A == "object" && A !== null && A.type === qe && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case Y:
            e: {
              for (var Oe = A.key, we = k; we !== null; ) {
                if (we.key === Oe) {
                  if (Oe = A.type, Oe === qe) {
                    if (we.tag === 7) {
                      l(L, we.sibling), k = c(we, A.props.children), k.return = L, L = k;
                      break e;
                    }
                  } else if (we.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === et && qv(Oe) === we.type) {
                    l(L, we.sibling), k = c(we, A.props), k.ref = Eu(L, we, A), k.return = L, L = k;
                    break e;
                  }
                  l(L, we);
                  break;
                } else
                  r(L, we);
                we = we.sibling;
              }
              A.type === qe ? (k = Pl(A.props.children, L.mode, ae, A.key), k.return = L, L = k) : (ae = Nc(A.type, A.key, A.props, null, L.mode, ae), ae.ref = Eu(L, k, A), ae.return = L, L = ae);
            }
            return y(L);
          case ft:
            e: {
              for (we = A.key; k !== null; ) {
                if (k.key === we)
                  if (k.tag === 4 && k.stateNode.containerInfo === A.containerInfo && k.stateNode.implementation === A.implementation) {
                    l(L, k.sibling), k = c(k, A.children || []), k.return = L, L = k;
                    break e;
                  } else {
                    l(L, k);
                    break;
                  }
                else
                  r(L, k);
                k = k.sibling;
              }
              k = $l(A, L.mode, ae), k.return = L, L = k;
            }
            return y(L);
          case et:
            return we = A._init, pn(L, k, we(A._payload), ae);
        }
        if (se(A))
          return xe(L, k, A, ae);
        if (_e(A))
          return De(L, k, A, ae);
        tc(L, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, k !== null && k.tag === 6 ? (l(L, k.sibling), k = c(k, A), k.return = L, L = k) : (l(L, k), k = Jo(A, L.mode, ae), k.return = L, L = k), y(L)) : l(L, k);
    }
    return pn;
  }
  var Cu = Xv(!0), Kv = Xv(!1), Ao = {}, ka = lt(Ao), Uo = lt(Ao), Tu = lt(Ao);
  function wl(n) {
    if (n === Ao)
      throw Error(m(174));
    return n;
  }
  function vd(n, r) {
    switch (kt(Tu, r), kt(Uo, n), kt(ka, Ao), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Mn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Mn(r, n);
    }
    bt(ka), kt(ka, r);
  }
  function Ii() {
    bt(ka), bt(Uo), bt(Tu);
  }
  function $e(n) {
    wl(Tu.current);
    var r = wl(ka.current), l = Mn(r, n.type);
    r !== l && (kt(Uo, n), kt(ka, l));
  }
  function ct(n) {
    Uo.current === n && (bt(ka), bt(Uo));
  }
  var Ie = lt(0);
  function tn(n) {
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
  var la = [];
  function nc() {
    for (var n = 0; n < la.length; n++)
      la[n]._workInProgressVersionPrimary = null;
    la.length = 0;
  }
  var rc = je.ReactCurrentDispatcher, hd = je.ReactCurrentBatchConfig, bl = 0, Wt = null, P = null, mt = null, Ye = !1, ja = !1, Pr = 0, Dl = 0;
  function Gt() {
    throw Error(m(321));
  }
  function _l(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ea(n[l], r[l]))
        return !1;
    return !0;
  }
  function Yi(n, r, l, o, c, d) {
    if (bl = d, Wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, rc.current = n === null || n.memoizedState === null ? Oy : Ly, n = l(o, c), ja) {
      d = 0;
      do {
        if (ja = !1, Pr = 0, 25 <= d)
          throw Error(m(301));
        d += 1, mt = P = null, r.updateQueue = null, rc.current = yd, n = l(o, c);
      } while (ja);
    }
    if (rc.current = Sc, r = P !== null && P.next !== null, bl = 0, mt = P = Wt = null, Ye = !1, r)
      throw Error(m(300));
    return n;
  }
  function kl() {
    var n = Pr !== 0;
    return Pr = 0, n;
  }
  function ua() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? Wt.memoizedState = mt = n : mt = mt.next = n, mt;
  }
  function kr() {
    if (P === null) {
      var n = Wt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = P.next;
    var r = mt === null ? Wt.memoizedState : mt.next;
    if (r !== null)
      mt = r, P = n;
    else {
      if (n === null)
        throw Error(m(310));
      P = n, n = { memoizedState: P.memoizedState, baseState: P.baseState, baseQueue: P.baseQueue, queue: P.queue, next: null }, mt === null ? Wt.memoizedState = mt = n : mt = mt.next = n;
    }
    return mt;
  }
  function Ol(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Fo(n) {
    var r = kr(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var o = P, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var y = c.next;
        c.next = d.next, d.next = y;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var R = y = null, w = null, H = d;
      do {
        var Z = H.lane;
        if ((bl & Z) === Z)
          w !== null && (w = w.next = { lane: 0, action: H.action, hasEagerState: H.hasEagerState, eagerState: H.eagerState, next: null }), o = H.hasEagerState ? H.eagerState : n(o, H.action);
        else {
          var J = {
            lane: Z,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          };
          w === null ? (R = w = J, y = o) : w = w.next = J, Wt.lanes |= Z, vi |= Z;
        }
        H = H.next;
      } while (H !== null && H !== d);
      w === null ? y = o : w.next = R, ea(o, r.memoizedState) || (En = !0), r.memoizedState = o, r.baseState = y, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Wt.lanes |= d, vi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ho(n) {
    var r = kr(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var y = c = c.next;
      do
        d = n(d, y.action), y = y.next;
      while (y !== c);
      ea(d, r.memoizedState) || (En = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ac() {
  }
  function ic(n, r) {
    var l = Wt, o = kr(), c = r(), d = !ea(o.memoizedState, c);
    if (d && (o.memoizedState = c, En = !0), o = o.queue, Vo(oc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || mt !== null && mt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ll(9, uc.bind(null, l, o, c, r), void 0, null), nn === null)
        throw Error(m(349));
      bl & 30 || lc(l, r, c);
    }
    return c;
  }
  function lc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function uc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, sc(r) && cc(n);
  }
  function oc(n, r, l) {
    return l(function() {
      sc(r) && cc(n);
    });
  }
  function sc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ea(n, l);
    } catch {
      return !0;
    }
  }
  function cc(n) {
    var r = si(n, 1);
    r !== null && or(r, n, 1, -1);
  }
  function fc(n) {
    var r = ua();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ol, lastRenderedState: n }, r.queue = n, n = n.dispatch = gc.bind(null, Wt, n), [r.memoizedState, n];
  }
  function Ll(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function dc() {
    return kr().memoizedState;
  }
  function Ml(n, r, l, o) {
    var c = ua();
    Wt.flags |= n, c.memoizedState = Ll(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fi(n, r, l, o) {
    var c = kr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (P !== null) {
      var y = P.memoizedState;
      if (d = y.destroy, o !== null && _l(o, y.deps)) {
        c.memoizedState = Ll(r, l, d, o);
        return;
      }
    }
    Wt.flags |= n, c.memoizedState = Ll(1 | r, l, d, o);
  }
  function pc(n, r) {
    return Ml(8390656, 8, n, r);
  }
  function Vo(n, r) {
    return fi(2048, 8, n, r);
  }
  function vc(n, r) {
    return fi(4, 2, n, r);
  }
  function hc(n, r) {
    return fi(4, 4, n, r);
  }
  function md(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ru(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fi(4, 4, md.bind(null, r, n), l);
  }
  function mc() {
  }
  function xu(n, r) {
    var l = kr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && _l(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Qi(n, r) {
    var l = kr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && _l(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Or(n, r, l) {
    return bl & 21 ? (ea(l, r) || (l = bs(), Wt.lanes |= l, vi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, En = !0), n.memoizedState = l);
  }
  function ky(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = hd.transition;
    hd.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, hd.transition = o;
    }
  }
  function It() {
    return kr().memoizedState;
  }
  function yc(n, r, l) {
    var o = Cn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wu(n))
      jo(r, l);
    else if (l = Iv(n, r, l, o), l !== null) {
      var c = ur();
      or(l, n, o, c), Zv(l, r, o);
    }
  }
  function gc(n, r, l) {
    var o = Cn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wu(n))
      jo(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var y = r.lastRenderedState, R = d(y, l);
          if (c.hasEagerState = !0, c.eagerState = R, ea(R, y)) {
            var w = r.interleaved;
            w === null ? (c.next = c, cd(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Iv(n, r, c, o), l !== null && (c = ur(), or(l, n, o, c), Zv(l, r, o));
    }
  }
  function wu(n) {
    var r = n.alternate;
    return n === Wt || r !== null && r === Wt;
  }
  function jo(n, r) {
    ja = Ye = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Zv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, fo(n, l);
    }
  }
  var Sc = { readContext: dn, useCallback: Gt, useContext: Gt, useEffect: Gt, useImperativeHandle: Gt, useInsertionEffect: Gt, useLayoutEffect: Gt, useMemo: Gt, useReducer: Gt, useRef: Gt, useState: Gt, useDebugValue: Gt, useDeferredValue: Gt, useTransition: Gt, useMutableSource: Gt, useSyncExternalStore: Gt, useId: Gt, unstable_isNewReconciler: !1 }, Oy = { readContext: dn, useCallback: function(n, r) {
    return ua().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: dn, useEffect: pc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ml(
      4194308,
      4,
      md.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Ml(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ml(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = ua();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = ua();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = yc.bind(null, Wt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ua();
    return n = { current: n }, r.memoizedState = n;
  }, useState: fc, useDebugValue: mc, useDeferredValue: function(n) {
    return ua().memoizedState = n;
  }, useTransition: function() {
    var n = fc(!1), r = n[0];
    return n = ky.bind(null, n[1]), ua().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Wt, c = ua();
    if (Qt) {
      if (l === void 0)
        throw Error(m(407));
      l = l();
    } else {
      if (l = r(), nn === null)
        throw Error(m(349));
      bl & 30 || lc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, pc(oc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Ll(9, uc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ua(), r = nn.identifierPrefix;
    if (Qt) {
      var l = oi, o = Pn;
      l = (o & ~(1 << 32 - Kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Pr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Dl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ly = {
    readContext: dn,
    useCallback: xu,
    useContext: dn,
    useEffect: Vo,
    useImperativeHandle: Ru,
    useInsertionEffect: vc,
    useLayoutEffect: hc,
    useMemo: Qi,
    useReducer: Fo,
    useRef: dc,
    useState: function() {
      return Fo(Ol);
    },
    useDebugValue: mc,
    useDeferredValue: function(n) {
      var r = kr();
      return Or(r, P.memoizedState, n);
    },
    useTransition: function() {
      var n = Fo(Ol)[0], r = kr().memoizedState;
      return [n, r];
    },
    useMutableSource: ac,
    useSyncExternalStore: ic,
    useId: It,
    unstable_isNewReconciler: !1
  }, yd = { readContext: dn, useCallback: xu, useContext: dn, useEffect: Vo, useImperativeHandle: Ru, useInsertionEffect: vc, useLayoutEffect: hc, useMemo: Qi, useReducer: Ho, useRef: dc, useState: function() {
    return Ho(Ol);
  }, useDebugValue: mc, useDeferredValue: function(n) {
    var r = kr();
    return P === null ? r.memoizedState = n : Or(r, P.memoizedState, n);
  }, useTransition: function() {
    var n = Ho(Ol)[0], r = kr().memoizedState;
    return [n, r];
  }, useMutableSource: ac, useSyncExternalStore: ic, useId: It, unstable_isNewReconciler: !1 };
  function bu(n, r) {
    try {
      var l = "", o = r;
      do
        l += at(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Bo(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ec(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var My = typeof WeakMap == "function" ? WeakMap : Map;
  function Jv(n, r, l) {
    l = ci(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Dc || (Dc = !0, Fl = o), Ec(n, r);
    }, l;
  }
  function Po(n, r, l) {
    l = ci(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ec(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ec(n, r), typeof o != "function" && ($a === null ? $a = /* @__PURE__ */ new Set([this]) : $a.add(this));
      var y = r.stack;
      this.componentDidCatch(r.value, { componentStack: y !== null ? y : "" });
    }), l;
  }
  function eh(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new My();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Vy.bind(null, n, r, l), r.then(n, n));
  }
  function gd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Sd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ci(-1, 1), r.tag = 2, Pi(l, r, 1))), l.lanes |= 1), n);
  }
  var Ny = je.ReactCurrentOwner, En = !1;
  function bn(n, r, l, o) {
    r.child = n === null ? Kv(r, null, l, o) : Cu(r, n.child, l, o);
  }
  function Wi(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ue(r, c), o = Yi(n, r, l, o, d, c), l = kl(), n !== null && !En ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, In(n, r, c)) : (Qt && l && Qs(r), r.flags |= 1, bn(n, r, o, c), r.child);
  }
  function Cc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Hd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Lr(n, r, d, o, c)) : (n = Nc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var y = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ro, l(y, o) && n.ref === r.ref)
        return In(n, r, c);
    }
    return r.flags |= 1, n = Ki(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Lr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Ro(d, o) && n.ref === r.ref)
        if (En = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (En = !0);
        else
          return r.lanes = n.lanes, In(n, r, c);
    }
    return Du(n, r, l, o, c);
  }
  function Nl(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, kt(Nu, $r), $r |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, kt(Nu, $r), $r |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, kt(Nu, $r), $r |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, kt(Nu, $r), $r |= o;
    return bn(n, r, c, l), r.child;
  }
  function ut(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Du(n, r, l, o, c) {
    var d = Xt(l) ? xr : Xe.current;
    return d = na(r, d), ue(r, c), l = Yi(n, r, l, o, d, c), o = kl(), n !== null && !En ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, In(n, r, c)) : (Qt && o && Qs(r), r.flags |= 1, bn(n, r, l, c), r.child);
  }
  function Ed(n, r, l, o, c) {
    if (Xt(l)) {
      var d = !0;
      Ys(r);
    } else
      d = !1;
    if (ue(r, c), r.stateNode === null)
      ar(n, r), Wv(r, l, o), ec(r, l, o, c), o = !0;
    else if (n === null) {
      var y = r.stateNode, R = r.memoizedProps;
      y.props = R;
      var w = y.context, H = l.contextType;
      typeof H == "object" && H !== null ? H = dn(H) : (H = Xt(l) ? xr : Xe.current, H = na(r, H));
      var Z = l.getDerivedStateFromProps, J = typeof Z == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      J || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (R !== o || w !== H) && Gv(r, y, o, H), Bi = !1;
      var X = r.memoizedState;
      y.state = X, $i(r, o, y, c), w = r.memoizedState, R !== o || X !== w || on.current || Bi ? (typeof Z == "function" && (pd(r, l, Z, o), w = r.memoizedState), (R = Bi || Qv(r, l, R, o, X, w, H)) ? (J || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), y.props = o, y.state = w, y.context = H, o = R) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      y = r.stateNode, wn(n, r), R = r.memoizedProps, H = r.type === r.elementType ? R : Br(r.type, R), y.props = H, J = r.pendingProps, X = y.context, w = l.contextType, typeof w == "object" && w !== null ? w = dn(w) : (w = Xt(l) ? xr : Xe.current, w = na(r, w));
      var ve = l.getDerivedStateFromProps;
      (Z = typeof ve == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (R !== J || X !== w) && Gv(r, y, o, w), Bi = !1, X = r.memoizedState, y.state = X, $i(r, o, y, c);
      var xe = r.memoizedState;
      R !== J || X !== xe || on.current || Bi ? (typeof ve == "function" && (pd(r, l, ve, o), xe = r.memoizedState), (H = Bi || Qv(r, l, H, o, X, xe, w) || !1) ? (Z || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(o, xe, w), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(o, xe, w)), typeof y.componentDidUpdate == "function" && (r.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || R === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = xe), y.props = o, y.state = xe, y.context = w, o = H) : (typeof y.componentDidUpdate != "function" || R === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return th(n, r, l, o, d, c);
  }
  function th(n, r, l, o, c, d) {
    ut(n, r);
    var y = (r.flags & 128) !== 0;
    if (!o && !y)
      return c && jv(r, l, !1), In(n, r, d);
    o = r.stateNode, Ny.current = r;
    var R = y && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && y ? (r.child = Cu(r, n.child, null, d), r.child = Cu(r, null, R, d)) : bn(n, r, R, d), r.memoizedState = o.state, c && jv(r, l, !0), r.child;
  }
  function nh(n) {
    var r = n.stateNode;
    r.pendingContext ? Fi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Fi(n, r.context, !1), vd(n, r.containerInfo);
  }
  function Tc(n, r, l, o, c) {
    return en(), ud(c), r.flags |= 256, bn(n, r, l, o), r.child;
  }
  var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Td(n, r, l) {
    var o = r.pendingProps, c = Ie.current, d = !1, y = (r.flags & 128) !== 0, R;
    if ((R = y) || (R = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), R ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), kt(Ie, c & 1), n === null)
      return Gs(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (y = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, y = { mode: "hidden", children: y }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = y) : d = Zo(y, o, 0, null), n = Pl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Cd(l), r.memoizedState = zl, n) : Rd(r, y));
    if (c = n.memoizedState, c !== null && (R = c.dehydrated, R !== null))
      return zy(n, r, y, o, R, c, l);
    if (d) {
      d = o.fallback, y = r.mode, c = n.child, R = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(y & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Ki(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), R !== null ? d = Ki(R, d) : (d = Pl(d, y, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, y = n.child.memoizedState, y = y === null ? Cd(l) : { baseLanes: y.baseLanes | l, cachePool: null, transitions: y.transitions }, d.memoizedState = y, d.childLanes = n.childLanes & ~l, r.memoizedState = zl, o;
    }
    return d = n.child, n = d.sibling, o = Ki(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Rd(n, r) {
    return r = Zo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function _u(n, r, l, o) {
    return o !== null && ud(o), Cu(r, n.child, null, l), n = Rd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function zy(n, r, l, o, c, d, y) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Bo(Error(m(422))), _u(n, r, y, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Zo({ mode: "visible", children: o.children }, c, 0, null), d = Pl(d, c, y, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Cu(r, n.child, null, y), r.child.memoizedState = Cd(y), r.memoizedState = zl, d);
    if (!(r.mode & 1))
      return _u(n, r, y, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var R = o.dgst;
      return o = R, d = Error(m(419)), o = Bo(d, o, void 0), _u(n, r, y, o);
    }
    if (R = (y & n.childLanes) !== 0, En || R) {
      if (o = nn, o !== null) {
        switch (y & -y) {
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
        c = c & (o.suspendedLanes | y) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, si(n, c), or(o, n, c, -1));
      }
      return Ad(), o = Bo(Error(m(421))), _u(n, r, y, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = jy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, _r = _a(c.nextSibling), jr = r, Qt = !0, ia = null, n !== null && (Dr[rr++] = Pn, Dr[rr++] = oi, Dr[rr++] = aa, Pn = n.id, oi = n.overflow, aa = r), r = Rd(r, o.children), r.flags |= 4096, r);
  }
  function xd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Un(n.return, r, l);
  }
  function Rc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function wd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (bn(n, r, o.children, l), o = Ie.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && xd(n, l, r);
            else if (n.tag === 19)
              xd(n, l, r);
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
    if (kt(Ie, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && tn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Rc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && tn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Rc(r, !0, l, null, d);
          break;
        case "together":
          Rc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function ar(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function In(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), vi |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, l = Ki(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Ki(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function di(n, r, l) {
    switch (r.tag) {
      case 3:
        nh(r), en();
        break;
      case 5:
        $e(r);
        break;
      case 1:
        Xt(r.type) && Ys(r);
        break;
      case 4:
        vd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        kt(Va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (kt(Ie, Ie.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Td(n, r, l) : (kt(Ie, Ie.current & 1), n = In(n, r, l), n !== null ? n.sibling : null);
        kt(Ie, Ie.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return wd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), kt(Ie, Ie.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Nl(n, r, l);
    }
    return In(n, r, l);
  }
  var $o, Al, oa, Dn;
  $o = function(n, r) {
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
  }, Al = function() {
  }, oa = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, wl(ka.current);
      var d = null;
      switch (l) {
        case "input":
          c = mn(n, c), o = mn(n, o), d = [];
          break;
        case "select":
          c = z({}, c, { value: void 0 }), o = z({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ke(n, c), o = ke(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Is);
      }
      tr(l, o);
      var y;
      l = null;
      for (H in c)
        if (!o.hasOwnProperty(H) && c.hasOwnProperty(H) && c[H] != null)
          if (H === "style") {
            var R = c[H];
            for (y in R)
              R.hasOwnProperty(y) && (l || (l = {}), l[y] = "");
          } else
            H !== "dangerouslySetInnerHTML" && H !== "children" && H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && H !== "autoFocus" && (b.hasOwnProperty(H) ? d || (d = []) : (d = d || []).push(H, null));
      for (H in o) {
        var w = o[H];
        if (R = c != null ? c[H] : void 0, o.hasOwnProperty(H) && w !== R && (w != null || R != null))
          if (H === "style")
            if (R) {
              for (y in R)
                !R.hasOwnProperty(y) || w && w.hasOwnProperty(y) || (l || (l = {}), l[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && R[y] !== w[y] && (l || (l = {}), l[y] = w[y]);
            } else
              l || (d || (d = []), d.push(
                H,
                l
              )), l = w;
          else
            H === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, R = R ? R.__html : void 0, w != null && R !== w && (d = d || []).push(H, w)) : H === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(H, "" + w) : H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && (b.hasOwnProperty(H) ? (w != null && H === "onScroll" && $t("scroll", n), d || R === w || (d = [])) : (d = d || []).push(H, w));
      }
      l && (d = d || []).push("style", l);
      var H = d;
      (r.updateQueue = H) && (r.flags |= 4);
    }
  }, Dn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Io(n, r) {
    if (!Qt)
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
  function ir(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ay(n, r, l) {
    var o = r.pendingProps;
    switch (id(r), r.tag) {
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
        return ir(r), null;
      case 1:
        return Xt(r.type) && ra(), ir(r), null;
      case 3:
        return o = r.stateNode, Ii(), bt(on), bt(Xe), nc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (qs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ia !== null && (Ko(ia), ia = null))), Al(n, r), ir(r), null;
      case 5:
        ct(r);
        var c = wl(Tu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          oa(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(m(166));
            return ir(r), null;
          }
          if (n = wl(ka.current), qs(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Fa] = r, o[Tl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                $t("cancel", o), $t("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                $t("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Do.length; c++)
                  $t(Do[c], o);
                break;
              case "source":
                $t("error", o);
                break;
              case "img":
              case "image":
              case "link":
                $t(
                  "error",
                  o
                ), $t("load", o);
                break;
              case "details":
                $t("toggle", o);
                break;
              case "input":
                er(o, d), $t("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, $t("invalid", o);
                break;
              case "textarea":
                St(o, d), $t("invalid", o);
            }
            tr(l, d), c = null;
            for (var y in d)
              if (d.hasOwnProperty(y)) {
                var R = d[y];
                y === "children" ? typeof R == "string" ? o.textContent !== R && (d.suppressHydrationWarning !== !0 && $s(o.textContent, R, n), c = ["children", R]) : typeof R == "number" && o.textContent !== "" + R && (d.suppressHydrationWarning !== !0 && $s(
                  o.textContent,
                  R,
                  n
                ), c = ["children", "" + R]) : b.hasOwnProperty(y) && R != null && y === "onScroll" && $t("scroll", o);
              }
            switch (l) {
              case "input":
                Dt(o), Q(o, d, !0);
                break;
              case "textarea":
                Dt(o), Bn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Is);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            y = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = za(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = y.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = y.createElement(l, { is: o.is }) : (n = y.createElement(l), l === "select" && (y = n, o.multiple ? y.multiple = !0 : o.size && (y.size = o.size))) : n = y.createElementNS(n, l), n[Fa] = r, n[Tl] = o, $o(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (y = Rn(l, o), l) {
                case "dialog":
                  $t("cancel", n), $t("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  $t("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Do.length; c++)
                    $t(Do[c], n);
                  c = o;
                  break;
                case "source":
                  $t("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  $t(
                    "error",
                    n
                  ), $t("load", n), c = o;
                  break;
                case "details":
                  $t("toggle", n), c = o;
                  break;
                case "input":
                  er(n, o), c = mn(n, o), $t("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = z({}, o, { value: void 0 }), $t("invalid", n);
                  break;
                case "textarea":
                  St(n, o), c = ke(n, o), $t("invalid", n);
                  break;
                default:
                  c = o;
              }
              tr(l, c), R = c;
              for (d in R)
                if (R.hasOwnProperty(d)) {
                  var w = R[d];
                  d === "style" ? Bt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && fl(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && Ca(n, w) : typeof w == "number" && Ca(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (b.hasOwnProperty(d) ? w != null && d === "onScroll" && $t("scroll", n) : w != null && Ee(n, d, w, y));
                }
              switch (l) {
                case "input":
                  Dt(n), Q(n, o, !1);
                  break;
                case "textarea":
                  Dt(n), Bn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Je(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? ne(n, !!o.multiple, d, !1) : o.defaultValue != null && ne(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Is);
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
        return ir(r), null;
      case 6:
        if (n && r.stateNode != null)
          Dn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(m(166));
          if (l = wl(Tu.current), wl(ka.current), qs(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Fa] = r, (d = o.nodeValue !== l) && (n = jr, n !== null))
              switch (n.tag) {
                case 3:
                  $s(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && $s(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Fa] = r, r.stateNode = o;
        }
        return ir(r), null;
      case 13:
        if (bt(Ie), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Qt && _r !== null && r.mode & 1 && !(r.flags & 128))
            $v(), en(), r.flags |= 98560, d = !1;
          else if (d = qs(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(m(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(m(317));
              d[Fa] = r;
            } else
              en(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ir(r), d = !1;
          } else
            ia !== null && (Ko(ia), ia = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ie.current & 1 ? kn === 0 && (kn = 3) : Ad())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Ii(), Al(n, r), n === null && yu(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return ji(r.type._context), ir(r), null;
      case 17:
        return Xt(r.type) && ra(), ir(r), null;
      case 19:
        if (bt(Ie), d = r.memoizedState, d === null)
          return ir(r), null;
        if (o = (r.flags & 128) !== 0, y = d.rendering, y === null)
          if (o)
            Io(d, !1);
          else {
            if (kn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (y = tn(n), y !== null) {
                  for (r.flags |= 128, Io(d, !1), o = y.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, y = d.alternate, y === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = y.childLanes, d.lanes = y.lanes, d.child = y.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = y.memoizedProps, d.memoizedState = y.memoizedState, d.updateQueue = y.updateQueue, d.type = y.type, n = y.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return kt(Ie, Ie.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && un() > Au && (r.flags |= 128, o = !0, Io(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = tn(y), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Io(d, !0), d.tail === null && d.tailMode === "hidden" && !y.alternate && !Qt)
                return ir(r), null;
            } else
              2 * un() - d.renderingStartTime > Au && l !== 1073741824 && (r.flags |= 128, o = !0, Io(d, !1), r.lanes = 4194304);
          d.isBackwards ? (y.sibling = r.child, r.child = y) : (l = d.last, l !== null ? l.sibling = y : r.child = y, d.last = y);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = un(), r.sibling = null, l = Ie.current, kt(Ie, o ? l & 1 | 2 : l & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return zd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? $r & 1073741824 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function bd(n, r) {
    switch (id(r), r.tag) {
      case 1:
        return Xt(r.type) && ra(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ii(), bt(on), bt(Xe), nc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ct(r), null;
      case 13:
        if (bt(Ie), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          en();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return bt(Ie), null;
      case 4:
        return Ii(), null;
      case 10:
        return ji(r.type._context), null;
      case 22:
      case 23:
        return zd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Yo = !1, _n = !1, rh = typeof WeakSet == "function" ? WeakSet : Set, Ce = null;
  function ku(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          cn(n, r, o);
        }
      else
        l.current = null;
  }
  function Qo(n, r, l) {
    try {
      l();
    } catch (o) {
      cn(n, r, o);
    }
  }
  var ah = !1;
  function ih(n, r) {
    if (Kf = hl, n = Hs(), ai(n)) {
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
            var y = 0, R = -1, w = -1, H = 0, Z = 0, J = n, X = null;
            t:
              for (; ; ) {
                for (var ve; J !== l || c !== 0 && J.nodeType !== 3 || (R = y + c), J !== d || o !== 0 && J.nodeType !== 3 || (w = y + o), J.nodeType === 3 && (y += J.nodeValue.length), (ve = J.firstChild) !== null; )
                  X = J, J = ve;
                for (; ; ) {
                  if (J === n)
                    break t;
                  if (X === l && ++H === c && (R = y), X === d && ++Z === o && (w = y), (ve = J.nextSibling) !== null)
                    break;
                  J = X, X = J.parentNode;
                }
                J = ve;
              }
            l = R === -1 || w === -1 ? null : { start: R, end: w };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (El = { focusedElem: n, selectionRange: l }, hl = !1, Ce = r; Ce !== null; )
      if (r = Ce, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ce = n;
      else
        for (; Ce !== null; ) {
          r = Ce;
          try {
            var xe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (xe !== null) {
                    var De = xe.memoizedProps, pn = xe.memoizedState, L = r.stateNode, k = L.getSnapshotBeforeUpdate(r.elementType === r.type ? De : Br(r.type, De), pn);
                    L.__reactInternalSnapshotBeforeUpdate = k;
                  }
                  break;
                case 3:
                  var A = r.stateNode.containerInfo;
                  A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (ae) {
            cn(r, r.return, ae);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ce = n;
            break;
          }
          Ce = r.return;
        }
    return xe = ah, ah = !1, xe;
  }
  function Wo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Qo(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Go(n, r) {
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
  function Dd(n) {
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
  function _d(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, _d(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Fa], delete r[Tl], delete r[ed], delete r[_y], delete r[td])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function lh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function xc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || lh(n.return))
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
  function Ou(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Is));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ou(n, r, l), n = n.sibling; n !== null; )
        Ou(n, r, l), n = n.sibling;
  }
  function Ba(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ba(n, r, l), n = n.sibling; n !== null; )
        Ba(n, r, l), n = n.sibling;
  }
  var Kt = null, Fn = !1;
  function sa(n, r, l) {
    for (l = l.child; l !== null; )
      Lu(n, r, l), l = l.sibling;
  }
  function Lu(n, r, l) {
    if (Ra && typeof Ra.onCommitFiberUnmount == "function")
      try {
        Ra.onCommitFiberUnmount(co, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        _n || ku(l, r);
      case 6:
        var o = Kt, c = Fn;
        Kt = null, sa(n, r, l), Kt = o, Fn = c, Kt !== null && (Fn ? (n = Kt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Kt.removeChild(l.stateNode));
        break;
      case 18:
        Kt !== null && (Fn ? (n = Kt, l = l.stateNode, n.nodeType === 8 ? zi(n.parentNode, l) : n.nodeType === 1 && zi(n, l), mo(n)) : zi(Kt, l.stateNode));
        break;
      case 4:
        o = Kt, c = Fn, Kt = l.stateNode.containerInfo, Fn = !0, sa(n, r, l), Kt = o, Fn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_n && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, y = d.destroy;
            d = d.tag, y !== void 0 && (d & 2 || d & 4) && Qo(l, r, y), c = c.next;
          } while (c !== o);
        }
        sa(n, r, l);
        break;
      case 1:
        if (!_n && (ku(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (R) {
            cn(l, r, R);
          }
        sa(n, r, l);
        break;
      case 21:
        sa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (_n = (o = _n) || l.memoizedState !== null, sa(n, r, l), _n = o) : sa(n, r, l);
        break;
      default:
        sa(n, r, l);
    }
  }
  function pi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new rh()), r.forEach(function(o) {
        var c = By.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Oa(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, y = r, R = y;
          e:
            for (; R !== null; ) {
              switch (R.tag) {
                case 5:
                  Kt = R.stateNode, Fn = !1;
                  break e;
                case 3:
                  Kt = R.stateNode.containerInfo, Fn = !0;
                  break e;
                case 4:
                  Kt = R.stateNode.containerInfo, Fn = !0;
                  break e;
              }
              R = R.return;
            }
          if (Kt === null)
            throw Error(m(160));
          Lu(d, y, c), Kt = null, Fn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (H) {
          cn(c, r, H);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        uh(r, n), r = r.sibling;
  }
  function uh(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Oa(r, n), Pa(n), o & 4) {
          try {
            Wo(3, n, n.return), Go(3, n);
          } catch (De) {
            cn(n, n.return, De);
          }
          try {
            Wo(5, n, n.return);
          } catch (De) {
            cn(n, n.return, De);
          }
        }
        break;
      case 1:
        Oa(r, n), Pa(n), o & 512 && l !== null && ku(l, l.return);
        break;
      case 5:
        if (Oa(r, n), Pa(n), o & 512 && l !== null && ku(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Ca(c, "");
          } catch (De) {
            cn(n, n.return, De);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, y = l !== null ? l.memoizedProps : d, R = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              R === "input" && d.type === "radio" && d.name != null && D(c, d), Rn(R, y);
              var H = Rn(R, d);
              for (y = 0; y < w.length; y += 2) {
                var Z = w[y], J = w[y + 1];
                Z === "style" ? Bt(c, J) : Z === "dangerouslySetInnerHTML" ? fl(c, J) : Z === "children" ? Ca(c, J) : Ee(c, Z, J, H);
              }
              switch (R) {
                case "input":
                  V(c, d);
                  break;
                case "textarea":
                  _t(c, d);
                  break;
                case "select":
                  var X = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ve = d.value;
                  ve != null ? ne(c, !!d.multiple, ve, !1) : X !== !!d.multiple && (d.defaultValue != null ? ne(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : ne(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Tl] = d;
            } catch (De) {
              cn(n, n.return, De);
            }
        }
        break;
      case 6:
        if (Oa(r, n), Pa(n), o & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (De) {
            cn(n, n.return, De);
          }
        }
        break;
      case 3:
        if (Oa(r, n), Pa(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            mo(r.containerInfo);
          } catch (De) {
            cn(n, n.return, De);
          }
        break;
      case 4:
        Oa(r, n), Pa(n);
        break;
      case 13:
        Oa(r, n), Pa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Ld = un())), o & 4 && pi(n);
        break;
      case 22:
        if (Z = l !== null && l.memoizedState !== null, n.mode & 1 ? (_n = (H = _n) || Z, Oa(r, n), _n = H) : Oa(r, n), Pa(n), o & 8192) {
          if (H = n.memoizedState !== null, (n.stateNode.isHidden = H) && !Z && n.mode & 1)
            for (Ce = n, Z = n.child; Z !== null; ) {
              for (J = Ce = Z; Ce !== null; ) {
                switch (X = Ce, ve = X.child, X.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Wo(4, X, X.return);
                    break;
                  case 1:
                    ku(X, X.return);
                    var xe = X.stateNode;
                    if (typeof xe.componentWillUnmount == "function") {
                      o = X, l = X.return;
                      try {
                        r = o, xe.props = r.memoizedProps, xe.state = r.memoizedState, xe.componentWillUnmount();
                      } catch (De) {
                        cn(o, l, De);
                      }
                    }
                    break;
                  case 5:
                    ku(X, X.return);
                    break;
                  case 22:
                    if (X.memoizedState !== null) {
                      kd(J);
                      continue;
                    }
                }
                ve !== null ? (ve.return = X, Ce = ve) : kd(J);
              }
              Z = Z.sibling;
            }
          e:
            for (Z = null, J = n; ; ) {
              if (J.tag === 5) {
                if (Z === null) {
                  Z = J;
                  try {
                    c = J.stateNode, H ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (R = J.stateNode, w = J.memoizedProps.style, y = w != null && w.hasOwnProperty("display") ? w.display : null, R.style.display = dt("display", y));
                  } catch (De) {
                    cn(n, n.return, De);
                  }
                }
              } else if (J.tag === 6) {
                if (Z === null)
                  try {
                    J.stateNode.nodeValue = H ? "" : J.memoizedProps;
                  } catch (De) {
                    cn(n, n.return, De);
                  }
              } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === n) && J.child !== null) {
                J.child.return = J, J = J.child;
                continue;
              }
              if (J === n)
                break e;
              for (; J.sibling === null; ) {
                if (J.return === null || J.return === n)
                  break e;
                Z === J && (Z = null), J = J.return;
              }
              Z === J && (Z = null), J.sibling.return = J.return, J = J.sibling;
            }
        }
        break;
      case 19:
        Oa(r, n), Pa(n), o & 4 && pi(n);
        break;
      case 21:
        break;
      default:
        Oa(
          r,
          n
        ), Pa(n);
    }
  }
  function Pa(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (lh(l)) {
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
            o.flags & 32 && (Ca(c, ""), o.flags &= -33);
            var d = xc(n);
            Ba(n, d, c);
            break;
          case 3:
          case 4:
            var y = o.stateNode.containerInfo, R = xc(n);
            Ou(n, R, y);
            break;
          default:
            throw Error(m(161));
        }
      } catch (w) {
        cn(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oh(n, r, l) {
    Ce = n, Mu(n);
  }
  function Mu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Ce !== null; ) {
      var c = Ce, d = c.child;
      if (c.tag === 22 && o) {
        var y = c.memoizedState !== null || Yo;
        if (!y) {
          var R = c.alternate, w = R !== null && R.memoizedState !== null || _n;
          R = Yo;
          var H = _n;
          if (Yo = y, (_n = w) && !H)
            for (Ce = c; Ce !== null; )
              y = Ce, w = y.child, y.tag === 22 && y.memoizedState !== null ? ch(c) : w !== null ? (w.return = y, Ce = w) : ch(c);
          for (; d !== null; )
            Ce = d, Mu(d), d = d.sibling;
          Ce = c, Yo = R, _n = H;
        }
        sh(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ce = d) : sh(n);
    }
  }
  function sh(n) {
    for (; Ce !== null; ) {
      var r = Ce;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                _n || Go(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !_n)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Br(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && xl(r, d, o);
                break;
              case 3:
                var y = r.updateQueue;
                if (y !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  xl(r, y, l);
                }
                break;
              case 5:
                var R = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = R;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && l.focus();
                      break;
                    case "img":
                      w.src && (l.src = w.src);
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
                  var H = r.alternate;
                  if (H !== null) {
                    var Z = H.memoizedState;
                    if (Z !== null) {
                      var J = Z.dehydrated;
                      J !== null && mo(J);
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
          _n || r.flags & 512 && Dd(r);
        } catch (X) {
          cn(r, r.return, X);
        }
      }
      if (r === n) {
        Ce = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ce = l;
        break;
      }
      Ce = r.return;
    }
  }
  function kd(n) {
    for (; Ce !== null; ) {
      var r = Ce;
      if (r === n) {
        Ce = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ce = l;
        break;
      }
      Ce = r.return;
    }
  }
  function ch(n) {
    for (; Ce !== null; ) {
      var r = Ce;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Go(4, r);
            } catch (w) {
              cn(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                cn(r, c, w);
              }
            }
            var d = r.return;
            try {
              Dd(r);
            } catch (w) {
              cn(r, d, w);
            }
            break;
          case 5:
            var y = r.return;
            try {
              Dd(r);
            } catch (w) {
              cn(r, y, w);
            }
        }
      } catch (w) {
        cn(r, r.return, w);
      }
      if (r === n) {
        Ce = null;
        break;
      }
      var R = r.sibling;
      if (R !== null) {
        R.return = r.return, Ce = R;
        break;
      }
      Ce = r.return;
    }
  }
  var wc = Math.ceil, qo = je.ReactCurrentDispatcher, Od = je.ReactCurrentOwner, lr = je.ReactCurrentBatchConfig, vt = 0, nn = null, sn = null, Hn = 0, $r = 0, Nu = lt(0), kn = 0, Xo = null, vi = 0, bc = 0, zu = 0, Ul = null, dr = null, Ld = 0, Au = 1 / 0, hi = null, Dc = !1, Fl = null, $a = null, Gi = !1, qi = null, _c = 0, Uu = 0, kc = null, Hl = -1, Vl = 0;
  function ur() {
    return vt & 6 ? un() : Hl !== -1 ? Hl : Hl = un();
  }
  function Cn(n) {
    return n.mode & 1 ? vt & 2 && Hn !== 0 ? Hn & -Hn : Xs.transition !== null ? (Vl === 0 && (Vl = bs()), Vl) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Lf(n.type)), n) : 1;
  }
  function or(n, r, l, o) {
    if (50 < Uu)
      throw Uu = 0, kc = null, Error(m(185));
    vl(n, l, o), (!(vt & 2) || n !== nn) && (n === nn && (!(vt & 2) && (bc |= l), kn === 4 && ca(n, Hn)), sr(n, o), l === 1 && vt === 0 && !(r.mode & 1) && (Au = un() + 500, An && wr()));
  }
  function sr(n, r) {
    var l = n.callbackNode;
    ws(n, r);
    var o = xa(n, n === nn ? Hn : 0);
    if (o === 0)
      l !== null && Kp(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Kp(l), r === 1)
        n.tag === 0 ? rd(fh.bind(null, n)) : nd(fh.bind(null, n)), Jf(function() {
          !(vt & 6) && wr();
        }), l = null;
      else {
        switch (_f(o)) {
          case 1:
            l = ei;
            break;
          case 4:
            l = pt;
            break;
          case 16:
            l = ki;
            break;
          case 536870912:
            l = xf;
            break;
          default:
            l = ki;
        }
        l = Fd(l, Fu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Fu(n, r) {
    if (Hl = -1, Vl = 0, vt & 6)
      throw Error(m(327));
    var l = n.callbackNode;
    if (Vu() && n.callbackNode !== l)
      return null;
    var o = xa(n, n === nn ? Hn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Lc(n, o);
    else {
      r = o;
      var c = vt;
      vt |= 2;
      var d = Oc();
      (nn !== n || Hn !== r) && (hi = null, Au = un() + 500, jl(n, r));
      do
        try {
          Fy();
          break;
        } catch (R) {
          dh(n, R);
        }
      while (1);
      sd(), qo.current = d, vt = c, sn !== null ? r = 0 : (nn = null, Hn = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (c = bf(n), c !== 0 && (o = c, r = Md(n, c))), r === 1)
        throw l = Xo, jl(n, 0), ca(n, o), sr(n, un()), l;
      if (r === 6)
        ca(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Nd(c) && (r = Lc(n, o), r === 2 && (d = bf(n), d !== 0 && (o = d, r = Md(n, d))), r === 1))
          throw l = Xo, jl(n, 0), ca(n, o), sr(n, un()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Bl(n, dr, hi);
            break;
          case 3:
            if (ca(n, o), (o & 130023424) === o && (r = Ld + 500 - un(), 10 < r)) {
              if (xa(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                ur(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cl(Bl.bind(null, n, dr, hi), r);
              break;
            }
            Bl(n, dr, hi);
            break;
          case 4:
            if (ca(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var y = 31 - Kr(o);
              d = 1 << y, y = r[y], y > c && (c = y), o &= ~d;
            }
            if (o = c, o = un() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * wc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cl(Bl.bind(null, n, dr, hi), o);
              break;
            }
            Bl(n, dr, hi);
            break;
          case 5:
            Bl(n, dr, hi);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return sr(n, un()), n.callbackNode === l ? Fu.bind(null, n) : null;
  }
  function Md(n, r) {
    var l = Ul;
    return n.current.memoizedState.isDehydrated && (jl(n, r).flags |= 256), n = Lc(n, r), n !== 2 && (r = dr, dr = l, r !== null && Ko(r)), n;
  }
  function Ko(n) {
    dr === null ? dr = n : dr.push.apply(dr, n);
  }
  function Nd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ea(d(), c))
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
  function ca(n, r) {
    for (r &= ~zu, r &= ~bc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function fh(n) {
    if (vt & 6)
      throw Error(m(327));
    Vu();
    var r = xa(n, 0);
    if (!(r & 1))
      return sr(n, un()), null;
    var l = Lc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = bf(n);
      o !== 0 && (r = o, l = Md(n, o));
    }
    if (l === 1)
      throw l = Xo, jl(n, 0), ca(n, r), sr(n, un()), l;
    if (l === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Bl(n, dr, hi), sr(n, un()), null;
  }
  function Hu(n, r) {
    var l = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = l, vt === 0 && (Au = un() + 500, An && wr());
    }
  }
  function Xi(n) {
    qi !== null && qi.tag === 0 && !(vt & 6) && Vu();
    var r = vt;
    vt |= 1;
    var l = lr.transition, o = Lt;
    try {
      if (lr.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = o, lr.transition = l, vt = r, !(vt & 6) && wr();
    }
  }
  function zd() {
    $r = Nu.current, bt(Nu);
  }
  function jl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Vv(l)), sn !== null)
      for (l = sn.return; l !== null; ) {
        var o = l;
        switch (id(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ra();
            break;
          case 3:
            Ii(), bt(on), bt(Xe), nc();
            break;
          case 5:
            ct(o);
            break;
          case 4:
            Ii();
            break;
          case 13:
            bt(Ie);
            break;
          case 19:
            bt(Ie);
            break;
          case 10:
            ji(o.type._context);
            break;
          case 22:
          case 23:
            zd();
        }
        l = l.return;
      }
    if (nn = n, sn = n = Ki(n.current, null), Hn = $r = r, kn = 0, Xo = null, zu = bc = vi = 0, dr = Ul = null, $n !== null) {
      for (r = 0; r < $n.length; r++)
        if (l = $n[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var y = d.next;
            d.next = c, o.next = y;
          }
          l.pending = o;
        }
      $n = null;
    }
    return n;
  }
  function dh(n, r) {
    do {
      var l = sn;
      try {
        if (sd(), rc.current = Sc, Ye) {
          for (var o = Wt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ye = !1;
        }
        if (bl = 0, mt = P = Wt = null, ja = !1, Pr = 0, Od.current = null, l === null || l.return === null) {
          kn = 1, Xo = r, sn = null;
          break;
        }
        e: {
          var d = n, y = l.return, R = l, w = r;
          if (r = Hn, R.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var H = w, Z = R, J = Z.tag;
            if (!(Z.mode & 1) && (J === 0 || J === 11 || J === 15)) {
              var X = Z.alternate;
              X ? (Z.updateQueue = X.updateQueue, Z.memoizedState = X.memoizedState, Z.lanes = X.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var ve = gd(y);
            if (ve !== null) {
              ve.flags &= -257, Sd(ve, y, R, d, r), ve.mode & 1 && eh(d, H, r), r = ve, w = H;
              var xe = r.updateQueue;
              if (xe === null) {
                var De = /* @__PURE__ */ new Set();
                De.add(w), r.updateQueue = De;
              } else
                xe.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                eh(d, H, r), Ad();
                break e;
              }
              w = Error(m(426));
            }
          } else if (Qt && R.mode & 1) {
            var pn = gd(y);
            if (pn !== null) {
              !(pn.flags & 65536) && (pn.flags |= 256), Sd(pn, y, R, d, r), ud(bu(w, R));
              break e;
            }
          }
          d = w = bu(w, R), kn !== 4 && (kn = 2), Ul === null ? Ul = [d] : Ul.push(d), d = y;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var L = Jv(d, w, r);
                dd(d, L);
                break e;
              case 1:
                R = w;
                var k = d.type, A = d.stateNode;
                if (!(d.flags & 128) && (typeof k.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && ($a === null || !$a.has(A)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ae = Po(d, R, r);
                  dd(d, ae);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Ud(l);
      } catch (Oe) {
        r = Oe, sn === l && l !== null && (sn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Oc() {
    var n = qo.current;
    return qo.current = Sc, n === null ? Sc : n;
  }
  function Ad() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), nn === null || !(vi & 268435455) && !(bc & 268435455) || ca(nn, Hn);
  }
  function Lc(n, r) {
    var l = vt;
    vt |= 2;
    var o = Oc();
    (nn !== n || Hn !== r) && (hi = null, jl(n, r));
    do
      try {
        Uy();
        break;
      } catch (c) {
        dh(n, c);
      }
    while (1);
    if (sd(), vt = l, qo.current = o, sn !== null)
      throw Error(m(261));
    return nn = null, Hn = 0, kn;
  }
  function Uy() {
    for (; sn !== null; )
      ph(sn);
  }
  function Fy() {
    for (; sn !== null && !ly(); )
      ph(sn);
  }
  function ph(n) {
    var r = hh(n.alternate, n, $r);
    n.memoizedProps = n.pendingProps, r === null ? Ud(n) : sn = r, Od.current = null;
  }
  function Ud(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = bd(l, r), l !== null) {
          l.flags &= 32767, sn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, sn = null;
          return;
        }
      } else if (l = Ay(l, r, $r), l !== null) {
        sn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        sn = r;
        return;
      }
      sn = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Bl(n, r, l) {
    var o = Lt, c = lr.transition;
    try {
      lr.transition = null, Lt = 1, Hy(n, r, l, o);
    } finally {
      lr.transition = c, Lt = o;
    }
    return null;
  }
  function Hy(n, r, l, o) {
    do
      Vu();
    while (qi !== null);
    if (vt & 6)
      throw Error(m(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (cy(n, d), n === nn && (sn = nn = null, Hn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Gi || (Gi = !0, Fd(ki, function() {
      return Vu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = lr.transition, lr.transition = null;
      var y = Lt;
      Lt = 1;
      var R = vt;
      vt |= 4, Od.current = null, ih(n, l), uh(l, n), Vs(El), hl = !!Kf, El = Kf = null, n.current = l, oh(l), uy(), vt = R, Lt = y, lr.transition = d;
    } else
      n.current = l;
    if (Gi && (Gi = !1, qi = n, _c = c), d = n.pendingLanes, d === 0 && ($a = null), Jp(l.stateNode), sr(n, un()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dc)
      throw Dc = !1, n = Fl, Fl = null, n;
    return _c & 1 && n.tag !== 0 && Vu(), d = n.pendingLanes, d & 1 ? n === kc ? Uu++ : (Uu = 0, kc = n) : Uu = 0, wr(), null;
  }
  function Vu() {
    if (qi !== null) {
      var n = _f(_c), r = lr.transition, l = Lt;
      try {
        if (lr.transition = null, Lt = 16 > n ? 16 : n, qi === null)
          var o = !1;
        else {
          if (n = qi, qi = null, _c = 0, vt & 6)
            throw Error(m(331));
          var c = vt;
          for (vt |= 4, Ce = n.current; Ce !== null; ) {
            var d = Ce, y = d.child;
            if (Ce.flags & 16) {
              var R = d.deletions;
              if (R !== null) {
                for (var w = 0; w < R.length; w++) {
                  var H = R[w];
                  for (Ce = H; Ce !== null; ) {
                    var Z = Ce;
                    switch (Z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wo(8, Z, d);
                    }
                    var J = Z.child;
                    if (J !== null)
                      J.return = Z, Ce = J;
                    else
                      for (; Ce !== null; ) {
                        Z = Ce;
                        var X = Z.sibling, ve = Z.return;
                        if (_d(Z), Z === H) {
                          Ce = null;
                          break;
                        }
                        if (X !== null) {
                          X.return = ve, Ce = X;
                          break;
                        }
                        Ce = ve;
                      }
                  }
                }
                var xe = d.alternate;
                if (xe !== null) {
                  var De = xe.child;
                  if (De !== null) {
                    xe.child = null;
                    do {
                      var pn = De.sibling;
                      De.sibling = null, De = pn;
                    } while (De !== null);
                  }
                }
                Ce = d;
              }
            }
            if (d.subtreeFlags & 2064 && y !== null)
              y.return = d, Ce = y;
            else
              e:
                for (; Ce !== null; ) {
                  if (d = Ce, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wo(9, d, d.return);
                    }
                  var L = d.sibling;
                  if (L !== null) {
                    L.return = d.return, Ce = L;
                    break e;
                  }
                  Ce = d.return;
                }
          }
          var k = n.current;
          for (Ce = k; Ce !== null; ) {
            y = Ce;
            var A = y.child;
            if (y.subtreeFlags & 2064 && A !== null)
              A.return = y, Ce = A;
            else
              e:
                for (y = k; Ce !== null; ) {
                  if (R = Ce, R.flags & 2048)
                    try {
                      switch (R.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Go(9, R);
                      }
                    } catch (Oe) {
                      cn(R, R.return, Oe);
                    }
                  if (R === y) {
                    Ce = null;
                    break e;
                  }
                  var ae = R.sibling;
                  if (ae !== null) {
                    ae.return = R.return, Ce = ae;
                    break e;
                  }
                  Ce = R.return;
                }
          }
          if (vt = c, wr(), Ra && typeof Ra.onPostCommitFiberRoot == "function")
            try {
              Ra.onPostCommitFiberRoot(co, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, lr.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = bu(l, r), r = Jv(n, r, 1), n = Pi(n, r, 1), r = ur(), n !== null && (vl(n, 1, r), sr(n, r));
  }
  function cn(n, r, l) {
    if (n.tag === 3)
      vh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          vh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && ($a === null || !$a.has(o))) {
            n = bu(l, n), n = Po(r, n, 1), r = Pi(r, n, 1), n = ur(), r !== null && (vl(r, 1, n), sr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = ur(), n.pingedLanes |= n.suspendedLanes & l, nn === n && (Hn & l) === l && (kn === 4 || kn === 3 && (Hn & 130023424) === Hn && 500 > un() - Ld ? jl(n, 0) : zu |= l), sr(n, r);
  }
  function Mc(n, r) {
    r === 0 && (n.mode & 1 ? (r = uu, uu <<= 1, !(uu & 130023424) && (uu = 4194304)) : r = 1);
    var l = ur();
    n = si(n, r), n !== null && (vl(n, r, l), sr(n, l));
  }
  function jy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Mc(n, l);
  }
  function By(n, r) {
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
    o !== null && o.delete(r), Mc(n, l);
  }
  var hh;
  hh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || on.current)
        En = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return En = !1, di(n, r, l);
        En = !!(n.flags & 131072);
      }
    else
      En = !1, Qt && r.flags & 1048576 && ad(r, Su, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ar(n, r), n = r.pendingProps;
        var c = na(r, Xe.current);
        ue(r, l), c = Yi(null, r, o, n, c, l);
        var d = kl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Xt(o) ? (d = !0, Ys(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, fd(r), c.updater = Js, r.stateNode = c, c._reactInternals = r, ec(r, o, n, l), r = th(null, r, o, !0, d, l)) : (r.tag = 0, Qt && d && Qs(r), bn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ar(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = $y(o), n = Br(o, n), c) {
            case 0:
              r = Du(null, r, o, n, l);
              break e;
            case 1:
              r = Ed(null, r, o, n, l);
              break e;
            case 11:
              r = Wi(null, r, o, n, l);
              break e;
            case 14:
              r = Cc(null, r, o, Br(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Br(o, c), Du(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Br(o, c), Ed(n, r, o, c, l);
      case 3:
        e: {
          if (nh(r), n === null)
            throw Error(m(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, wn(n, r), $i(r, o, null, l);
          var y = r.memoizedState;
          if (o = y.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: y.cache, pendingSuspenseBoundaries: y.pendingSuspenseBoundaries, transitions: y.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = bu(Error(m(423)), r), r = Tc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = bu(Error(m(424)), r), r = Tc(n, r, o, l, c);
              break e;
            } else
              for (_r = _a(r.stateNode.containerInfo.firstChild), jr = r, Qt = !0, ia = null, l = Kv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (en(), o === c) {
              r = In(n, r, l);
              break e;
            }
            bn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return $e(r), n === null && Gs(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, y = c.children, Oo(o, c) ? y = null : d !== null && Oo(o, d) && (r.flags |= 32), ut(n, r), bn(n, r, y, l), r.child;
      case 6:
        return n === null && Gs(r), null;
      case 13:
        return Td(n, r, l);
      case 4:
        return vd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Cu(r, null, o, l) : bn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Br(o, c), Wi(n, r, o, c, l);
      case 7:
        return bn(n, r, r.pendingProps, l), r.child;
      case 8:
        return bn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return bn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, y = c.value, kt(Va, o._currentValue), o._currentValue = y, d !== null)
            if (ea(d.value, y)) {
              if (d.children === c.children && !on.current) {
                r = In(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var R = d.dependencies;
                if (R !== null) {
                  y = d.child;
                  for (var w = R.firstContext; w !== null; ) {
                    if (w.context === o) {
                      if (d.tag === 1) {
                        w = ci(-1, l & -l), w.tag = 2;
                        var H = d.updateQueue;
                        if (H !== null) {
                          H = H.shared;
                          var Z = H.pending;
                          Z === null ? w.next = w : (w.next = Z.next, Z.next = w), H.pending = w;
                        }
                      }
                      d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), Un(
                        d.return,
                        l,
                        r
                      ), R.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  y = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (y = d.return, y === null)
                    throw Error(m(341));
                  y.lanes |= l, R = y.alternate, R !== null && (R.lanes |= l), Un(y, l, r), y = d.sibling;
                } else
                  y = d.child;
                if (y !== null)
                  y.return = d;
                else
                  for (y = d; y !== null; ) {
                    if (y === r) {
                      y = null;
                      break;
                    }
                    if (d = y.sibling, d !== null) {
                      d.return = y.return, y = d;
                      break;
                    }
                    y = y.return;
                  }
                d = y;
              }
          bn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ue(r, l), c = dn(c), o = o(c), r.flags |= 1, bn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Br(o, r.pendingProps), c = Br(o.type, c), Cc(n, r, o, c, l);
      case 15:
        return Lr(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Br(o, c), ar(n, r), r.tag = 1, Xt(o) ? (n = !0, Ys(r)) : n = !1, ue(r, l), Wv(r, o, c), ec(r, o, c, l), th(null, r, o, !0, n, l);
      case 19:
        return wd(n, r, l);
      case 22:
        return Nl(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function Fd(n, r) {
    return Rf(n, r);
  }
  function Py(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fa(n, r, l, o) {
    return new Py(n, r, l, o);
  }
  function Hd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function $y(n) {
    if (typeof n == "function")
      return Hd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Qe)
        return 11;
      if (n === xt)
        return 14;
    }
    return 2;
  }
  function Ki(n, r) {
    var l = n.alternate;
    return l === null ? (l = fa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Nc(n, r, l, o, c, d) {
    var y = 2;
    if (o = n, typeof n == "function")
      Hd(n) && (y = 1);
    else if (typeof n == "string")
      y = 5;
    else
      e:
        switch (n) {
          case qe:
            return Pl(l.children, c, d, r);
          case Jt:
            y = 8, c |= 8;
            break;
          case Nt:
            return n = fa(12, l, r, c | 2), n.elementType = Nt, n.lanes = d, n;
          case fe:
            return n = fa(13, l, r, c), n.elementType = fe, n.lanes = d, n;
          case Ne:
            return n = fa(19, l, r, c), n.elementType = Ne, n.lanes = d, n;
          case wt:
            return Zo(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ct:
                  y = 10;
                  break e;
                case ot:
                  y = 9;
                  break e;
                case Qe:
                  y = 11;
                  break e;
                case xt:
                  y = 14;
                  break e;
                case et:
                  y = 16, o = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = fa(y, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Pl(n, r, l, o) {
    return n = fa(7, n, o, r), n.lanes = l, n;
  }
  function Zo(n, r, l, o) {
    return n = fa(22, n, o, r), n.elementType = wt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Jo(n, r, l) {
    return n = fa(6, n, null, r), n.lanes = l, n;
  }
  function $l(n, r, l) {
    return r = fa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Iy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Df(0), this.expirationTimes = Df(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Df(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function zc(n, r, l, o, c, d, y, R, w) {
    return n = new Iy(n, r, l, R, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = fa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fd(d), n;
  }
  function mh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ft, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Vd(n) {
    if (!n)
      return Ha;
    n = n._reactInternals;
    e: {
      if (Ua(n) !== n || n.tag !== 1)
        throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Xt(r.type)) {
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
      if (Xt(l))
        return No(n, l, r);
    }
    return r;
  }
  function yh(n, r, l, o, c, d, y, R, w) {
    return n = zc(l, o, !0, n, c, d, y, R, w), n.context = Vd(null), l = n.current, o = ur(), c = Cn(l), d = ci(o, c), d.callback = r ?? null, Pi(l, d, c), n.current.lanes = c, vl(n, c, o), sr(n, o), n;
  }
  function es(n, r, l, o) {
    var c = r.current, d = ur(), y = Cn(c);
    return l = Vd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ci(d, y), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Pi(c, r, y), n !== null && (or(n, c, y, d), Zs(n, c, y)), y;
  }
  function Ac(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function gh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function jd(n, r) {
    gh(n, r), (n = n.alternate) && gh(n, r);
  }
  function Sh() {
    return null;
  }
  var Bd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Uc(n) {
    this._internalRoot = n;
  }
  mi.prototype.render = Uc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(m(409));
    es(n, r, null, null);
  }, mi.prototype.unmount = Uc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xi(function() {
        es(null, n, null, null);
      }), r[ui] = null;
    }
  };
  function mi(n) {
    this._internalRoot = n;
  }
  mi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = rv();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < At.length && r !== 0 && r < At[l].priority; l++)
        ;
      At.splice(l, 0, n), l === 0 && av(n);
    }
  };
  function Pd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Fc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Eh() {
  }
  function Yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var H = Ac(y);
          d.call(H);
        };
      }
      var y = yh(r, o, n, 0, null, !1, !1, "", Eh);
      return n._reactRootContainer = y, n[ui] = y.current, yu(n.nodeType === 8 ? n.parentNode : n), Xi(), y;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var R = o;
      o = function() {
        var H = Ac(w);
        R.call(H);
      };
    }
    var w = zc(n, 0, !1, null, null, !1, !1, "", Eh);
    return n._reactRootContainer = w, n[ui] = w.current, yu(n.nodeType === 8 ? n.parentNode : n), Xi(function() {
      es(r, w, l, o);
    }), w;
  }
  function Hc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var y = d;
      if (typeof c == "function") {
        var R = c;
        c = function() {
          var w = Ac(y);
          R.call(w);
        };
      }
      es(r, y, n, c);
    } else
      y = Yy(l, r, n, c, o);
    return Ac(y);
  }
  nv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = pl(r.pendingLanes);
          l !== 0 && (fo(r, l | 1), sr(r, un()), !(vt & 6) && (Au = un() + 500, wr()));
        }
        break;
      case 13:
        Xi(function() {
          var o = si(n, 1);
          if (o !== null) {
            var c = ur();
            or(o, n, 1, c);
          }
        }), jd(n, 1);
    }
  }, Ds = function(n) {
    if (n.tag === 13) {
      var r = si(n, 134217728);
      if (r !== null) {
        var l = ur();
        or(r, n, 134217728, l);
      }
      jd(n, 134217728);
    }
  }, Pt = function(n) {
    if (n.tag === 13) {
      var r = Cn(n), l = si(n, r);
      if (l !== null) {
        var o = ur();
        or(l, n, r, o);
      }
      jd(n, r);
    }
  }, rv = function() {
    return Lt;
  }, kf = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, Aa = function(n, r, l) {
    switch (r) {
      case "input":
        if (V(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = He(o);
              if (!c)
                throw Error(m(90));
              le(o), V(o, c);
            }
          }
        }
        break;
      case "textarea":
        _t(n, l);
        break;
      case "select":
        r = l.value, r != null && ne(n, !!l.multiple, r, !1);
    }
  }, Wp = Hu, Gp = Xi;
  var Qy = { usingClientEntryPoint: !1, Events: [Mo, gu, He, Es, Cs, Hu] }, ju = { findFiberByHostInstance: ta, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Wy = { bundleType: ju.bundleType, version: ju.version, rendererPackageName: ju.rendererPackageName, rendererConfig: ju.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = qp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ju.findFiberByHostInstance || Sh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vc.isDisabled && Vc.supportsFiber)
      try {
        co = Vc.inject(Wy), Ra = Vc;
      } catch {
      }
  }
  return ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qy, ya.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pd(r))
      throw Error(m(200));
    return mh(n, r, null, l);
  }, ya.createRoot = function(n, r) {
    if (!Pd(n))
      throw Error(m(299));
    var l = !1, o = "", c = Bd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = zc(n, 1, !1, null, null, l, !1, o, c), n[ui] = r.current, yu(n.nodeType === 8 ? n.parentNode : n), new Uc(r);
  }, ya.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = qp(r), n = n === null ? null : n.stateNode, n;
  }, ya.flushSync = function(n) {
    return Xi(n);
  }, ya.hydrate = function(n, r, l) {
    if (!Fc(r))
      throw Error(m(200));
    return Hc(null, n, r, !0, l);
  }, ya.hydrateRoot = function(n, r, l) {
    if (!Pd(n))
      throw Error(m(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", y = Bd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (y = l.onRecoverableError)), r = yh(r, null, n, 1, l ?? null, c, !1, d, y), n[ui] = r.current, yu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new mi(r);
  }, ya.render = function(n, r, l) {
    if (!Fc(r))
      throw Error(m(200));
    return Hc(null, n, r, !1, l);
  }, ya.unmountComponentAtNode = function(n) {
    if (!Fc(n))
      throw Error(m(40));
    return n._reactRootContainer ? (Xi(function() {
      Hc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ui] = null;
      });
    }), !0) : !1;
  }, ya.unstable_batchedUpdates = Hu, ya.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Fc(l))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return Hc(n, r, l, !1, o);
  }, ya.version = "18.2.0-next-9e3b772b8-20220608", ya;
}
var ga = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZT;
function zk() {
  return ZT || (ZT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var p = jt, C = SR(), m = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function b(e) {
      E = e;
    }
    function x(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        K("warn", e, a);
      }
    }
    function g(e) {
      if (!E) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        K("error", e, a);
      }
    }
    function K(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $ = 0, G = 1, pe = 2, I = 3, q = 4, ie = 5, Re = 6, Ve = 7, Ze = 8, Mt = 9, Le = 10, Ee = 11, je = 12, Y = 13, ft = 14, qe = 15, Jt = 16, Nt = 17, Ct = 18, ot = 19, Qe = 21, fe = 22, Ne = 23, xt = 24, et = 25, wt = !0, re = !1, _e = !1, z = !1, te = !1, Se = !0, Pe = !1, ze = !1, at = !0, Ae = !0, We = !0, Je = /* @__PURE__ */ new Set(), it = {}, st = {};
    function Dt(e, t) {
      le(e, t), le(e + "Capture", t);
    }
    function le(e, t) {
      it[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), it[e] = t;
      {
        var a = e.toLowerCase();
        st[a] = e, e === "onDoubleClick" && (st.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Je.add(t[i]);
    }
    var zt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mn = Object.prototype.hasOwnProperty;
    function er(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function D(e) {
      try {
        return V(e), !1;
      } catch {
        return !0;
      }
    }
    function V(e) {
      return "" + e;
    }
    function Q(e, t) {
      if (D(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, er(e)), V(e);
    }
    function Te(e) {
      if (D(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), V(e);
    }
    function se(e, t) {
      if (D(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, er(e)), V(e);
    }
    function ne(e, t) {
      if (D(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, er(e)), V(e);
    }
    function ke(e) {
      if (D(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), V(e);
    }
    function St(e) {
      if (D(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", er(e)), V(e);
    }
    var _t = 0, Bn = 1, za = 2, Mn = 3, cr = 4, fl = 5, Ca = 6, ce = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ue = ce + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", dt = new RegExp("^[" + ce + "][" + Ue + "]*$"), Bt = {}, fn = {};
    function tr(e) {
      return mn.call(fn, e) ? !0 : mn.call(Bt, e) ? !1 : dt.test(e) ? (fn[e] = !0, !0) : (Bt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Rn(e, t, a) {
      return t !== null ? t.type === _t : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Xr(e, t, a, i) {
      if (a !== null && a.type === _t)
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
    function an(e, t, a, i) {
      if (t === null || typeof t > "u" || Xr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case cr:
            return t === !1;
          case fl:
            return isNaN(t);
          case Ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Aa(e) {
      return ln.hasOwnProperty(e) ? ln[e] : null;
    }
    function yn(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === za || t === Mn || t === cr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var ln = {}, Qp = [
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
    Qp.forEach(function(e) {
      ln[e] = new yn(
        e,
        _t,
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
      ln[t] = new yn(
        t,
        Bn,
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
      ln[e] = new yn(
        e,
        za,
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
      ln[e] = new yn(
        e,
        za,
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
      ln[e] = new yn(
        e,
        Mn,
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
      ln[e] = new yn(
        e,
        Mn,
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
      ln[e] = new yn(
        e,
        cr,
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
      ln[e] = new yn(
        e,
        Ca,
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
      ln[e] = new yn(
        e,
        fl,
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
    var Es = /[\-\:]([a-z])/g, Cs = function(e) {
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
      var t = e.replace(Es, Cs);
      ln[t] = new yn(
        t,
        Bn,
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
      var t = e.replace(Es, Cs);
      ln[t] = new yn(
        t,
        Bn,
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
      var t = e.replace(Es, Cs);
      ln[t] = new yn(
        t,
        Bn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      ln[e] = new yn(
        e,
        Bn,
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
    var Wp = "xlinkHref";
    ln[Wp] = new yn(
      "xlinkHref",
      Bn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      ln[e] = new yn(
        e,
        Bn,
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
    var Gp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ts = !1;
    function Ef(e) {
      !Ts && Gp.test(e) && (Ts = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function uo(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Q(a, t), i.sanitizeURL && Ef("" + a);
        var s = i.attributeName, f = null;
        if (i.type === cr) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : an(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (an(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Mn)
            return a;
          f = e.getAttribute(s);
        }
        return an(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Rs(e, t, a, i) {
      {
        if (!tr(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Q(a, t), u === "" + a ? a : u;
      }
    }
    function dl(e, t, a, i) {
      var u = Aa(t);
      if (!Rn(t, u, i)) {
        if (an(t, a, u, i) && (a = null), i || u === null) {
          if (tr(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Q(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var v = u.propertyName;
          if (a === null) {
            var h = u.type;
            e[v] = h === Mn ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var S = u.attributeName, T = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(S);
        else {
          var O = u.type, _;
          O === Mn || O === cr && a === !0 ? _ = "" : (Q(a, S), _ = "" + a, u.sanitizeURL && Ef(_.toString())), T ? e.setAttributeNS(T, S, _) : e.setAttribute(S, _);
        }
      }
    }
    var ru = Symbol.for("react.element"), Ta = Symbol.for("react.portal"), Ja = Symbol.for("react.fragment"), au = Symbol.for("react.strict_mode"), oo = Symbol.for("react.profiler"), Cf = Symbol.for("react.provider"), Tf = Symbol.for("react.context"), iu = Symbol.for("react.forward_ref"), Ua = Symbol.for("react.suspense"), so = Symbol.for("react.suspense_list"), lu = Symbol.for("react.memo"), fr = Symbol.for("react.lazy"), qp = Symbol.for("react.scope"), Xp = Symbol.for("react.debug_trace_mode"), Rf = Symbol.for("react.offscreen"), Kp = Symbol.for("react.legacy_hidden"), ly = Symbol.for("react.cache"), uy = Symbol.for("react.tracing_marker"), un = Symbol.iterator, oy = "@@iterator";
    function ei(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = un && e[un] || e[oy];
      return typeof t == "function" ? t : null;
    }
    var pt = Object.assign, ki = 0, Zp, xf, co, Ra, Jp, Kr, ev;
    function tv() {
    }
    tv.__reactDisabledLog = !0;
    function sy() {
      {
        if (ki === 0) {
          Zp = console.log, xf = console.info, co = console.warn, Ra = console.error, Jp = console.group, Kr = console.groupCollapsed, ev = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: tv,
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
        ki++;
      }
    }
    function xs() {
      {
        if (ki--, ki === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: pt({}, e, {
              value: Zp
            }),
            info: pt({}, e, {
              value: xf
            }),
            warn: pt({}, e, {
              value: co
            }),
            error: pt({}, e, {
              value: Ra
            }),
            group: pt({}, e, {
              value: Jp
            }),
            groupCollapsed: pt({}, e, {
              value: Kr
            }),
            groupEnd: pt({}, e, {
              value: ev
            })
          });
        }
        ki < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var uu = m.ReactCurrentDispatcher, pl;
    function xa(e, t, a) {
      {
        if (pl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            pl = i && i[1] || "";
          }
        return `
` + pl + e;
      }
    }
    var wf = !1, ws;
    {
      var bf = typeof WeakMap == "function" ? WeakMap : Map;
      ws = new bf();
    }
    function bs(e, t) {
      if (!e || wf)
        return "";
      {
        var a = ws.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      wf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = uu.current, uu.current = null, sy();
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
            } catch (F) {
              i = F;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (F) {
              i = F;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            i = F;
          }
          e();
        }
      } catch (F) {
        if (F && i && typeof F.stack == "string") {
          for (var v = F.stack.split(`
`), h = i.stack.split(`
`), S = v.length - 1, T = h.length - 1; S >= 1 && T >= 0 && v[S] !== h[T]; )
            T--;
          for (; S >= 1 && T >= 0; S--, T--)
            if (v[S] !== h[T]) {
              if (S !== 1 || T !== 1)
                do
                  if (S--, T--, T < 0 || v[S] !== h[T]) {
                    var O = `
` + v[S].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && ws.set(e, O), O;
                  }
                while (S >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        wf = !1, uu.current = s, xs(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", U = _ ? xa(_) : "";
      return typeof e == "function" && ws.set(e, U), U;
    }
    function Df(e, t, a) {
      return bs(e, !0);
    }
    function vl(e, t, a) {
      return bs(e, !1);
    }
    function cy(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function fo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return bs(e, cy(e));
      if (typeof e == "string")
        return xa(e);
      switch (e) {
        case Ua:
          return xa("Suspense");
        case so:
          return xa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case iu:
            return vl(e.render);
          case lu:
            return fo(e.type, t, a);
          case fr: {
            var i = e, u = i._payload, s = i._init;
            try {
              return fo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Lt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return xa(e.type);
        case Jt:
          return xa("Lazy");
        case Y:
          return xa("Suspense");
        case ot:
          return xa("SuspenseList");
        case $:
        case pe:
        case qe:
          return vl(e.type);
        case Ee:
          return vl(e.type.render);
        case G:
          return Df(e.type);
        default:
          return "";
      }
    }
    function _f(e) {
      try {
        var t = "", a = e;
        do
          t += Lt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function nv(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ds(e) {
      return e.displayName || "Context";
    }
    function Pt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ja:
          return "Fragment";
        case Ta:
          return "Portal";
        case oo:
          return "Profiler";
        case au:
          return "StrictMode";
        case Ua:
          return "Suspense";
        case so:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Tf:
            var t = e;
            return Ds(t) + ".Consumer";
          case Cf:
            var a = e;
            return Ds(a._context) + ".Provider";
          case iu:
            return nv(e, e.render, "ForwardRef");
          case lu:
            var i = e.displayName || null;
            return i !== null ? i : Pt(e.type) || "Memo";
          case fr: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Pt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function rv(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function kf(e) {
      return e.displayName || "Context";
    }
    function rt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case xt:
          return "Cache";
        case Mt:
          var i = a;
          return kf(i) + ".Consumer";
        case Le:
          var u = a;
          return kf(u._context) + ".Provider";
        case Ct:
          return "DehydratedFragment";
        case Ee:
          return rv(a, a.render, "ForwardRef");
        case Ve:
          return "Fragment";
        case ie:
          return a;
        case q:
          return "Portal";
        case I:
          return "Root";
        case Re:
          return "Text";
        case Jt:
          return Pt(a);
        case Ze:
          return a === au ? "StrictMode" : "Mode";
        case fe:
          return "Offscreen";
        case je:
          return "Profiler";
        case Qe:
          return "Scope";
        case Y:
          return "Suspense";
        case ot:
          return "SuspenseList";
        case et:
          return "TracingMarker";
        case G:
        case $:
        case Nt:
        case pe:
        case ft:
        case qe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var po = m.ReactDebugCurrentFrame, gn = null, Zr = !1;
    function Jr() {
      {
        if (gn === null)
          return null;
        var e = gn._debugOwner;
        if (e !== null && typeof e < "u")
          return rt(e);
      }
      return null;
    }
    function vo() {
      return gn === null ? "" : _f(gn);
    }
    function xn() {
      po.getCurrentStack = null, gn = null, Zr = !1;
    }
    function At(e) {
      po.getCurrentStack = e === null ? null : vo, gn = e, Zr = !1;
    }
    function fy() {
      return gn;
    }
    function wa(e) {
      Zr = e;
    }
    function nr(e) {
      return "" + e;
    }
    function Oi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return St(e), e;
        default:
          return "";
      }
    }
    var av = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ou(e, t) {
      av[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Of(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function iv(e) {
      return e._valueTracker;
    }
    function ho(e) {
      e._valueTracker = null;
    }
    function mo(e) {
      var t = "";
      return e && (Of(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function su(e) {
      var t = Of(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      St(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(v) {
            St(v), i = "" + v, s.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            St(v), i = "" + v;
          },
          stopTracking: function() {
            ho(e), delete e[t];
          }
        };
        return f;
      }
    }
    function hl(e) {
      iv(e) || (e._valueTracker = su(e));
    }
    function lv(e) {
      if (!e)
        return !1;
      var t = iv(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = mo(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function _s(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ks = !1, yo = !1, Os = !1, Lf = !1;
    function ti(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function go(e, t) {
      var a = e, i = t.checked, u = pt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function So(e, t) {
      ou("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !yo && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Jr() || "A component", t.type), yo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ks && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Jr() || "A component", t.type), ks = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oi(t.value != null ? t.value : i),
        controlled: ti(t)
      };
    }
    function Mf(e, t) {
      var a = e, i = t.checked;
      i != null && dl(a, "checked", i, !1);
    }
    function cu(e, t) {
      var a = e;
      {
        var i = ti(t);
        !a._wrapperState.controlled && i && !Lf && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Lf = !0), a._wrapperState.controlled && !i && !Os && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Os = !0);
      }
      Mf(e, t);
      var u = Oi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = nr(u)) : a.value !== nr(u) && (a.value = nr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Li(a, t.type, u) : t.hasOwnProperty("defaultValue") && Li(a, t.type, Oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Eo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = nr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function uv(e, t) {
      var a = e;
      cu(a, t), Fr(a, t);
    }
    function Fr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Q(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var v = Fh(f);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            lv(f), cu(f, v);
          }
        }
      }
    }
    function Li(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || _s(e.ownerDocument) !== e) && (a == null ? e.defaultValue = nr(e._wrapperState.initialValue) : e.defaultValue !== nr(a) && (e.defaultValue = nr(a)));
    }
    var Ls = !1, fu = !1, ov = !1;
    function Ms(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? p.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || fu || (fu = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ov || (ov = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ls && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ls = !0);
    }
    function Nf(e, t) {
      t.value != null && e.setAttribute("value", nr(Oi(t.value)));
    }
    var Co = Array.isArray;
    function Nn(e) {
      return Co(e);
    }
    var Ns;
    Ns = !1;
    function sv() {
      var e = Jr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var cv = ["value", "defaultValue"];
    function dy(e) {
      {
        ou("select", e);
        for (var t = 0; t < cv.length; t++) {
          var a = cv[t];
          if (e[a] != null) {
            var i = Nn(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, sv()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, sv());
          }
        }
      }
    }
    function Mi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, v = 0; v < s.length; v++)
          f["$" + s[v]] = !0;
        for (var h = 0; h < u.length; h++) {
          var S = f.hasOwnProperty("$" + u[h].value);
          u[h].selected !== S && (u[h].selected = S), S && i && (u[h].defaultSelected = !0);
        }
      } else {
        for (var T = nr(Oi(a)), O = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === T) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          O === null && !u[_].disabled && (O = u[_]);
        }
        O !== null && (O.selected = !0);
      }
    }
    function zf(e, t) {
      return pt({}, t, {
        value: void 0
      });
    }
    function fv(e, t) {
      var a = e;
      dy(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ns && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ns = !0);
    }
    function py(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Mi(a, !!t.multiple, i, !1) : t.defaultValue != null && Mi(a, !!t.multiple, t.defaultValue, !0);
    }
    function vy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Mi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Mi(a, !!t.multiple, t.defaultValue, !0) : Mi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function hy(e, t) {
      var a = e, i = t.value;
      i != null && Mi(a, !!t.multiple, i, !1);
    }
    var Af = !1;
    function Uf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = pt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: nr(a._wrapperState.initialValue)
      });
      return i;
    }
    function dv(e, t) {
      var a = e;
      ou("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Af && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Jr() || "A component"), Af = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Nn(u)) {
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
        initialValue: Oi(i)
      };
    }
    function pv(e, t) {
      var a = e, i = Oi(t.value), u = Oi(t.defaultValue);
      if (i != null) {
        var s = nr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = nr(u));
    }
    function vv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ff(e, t) {
      pv(e, t);
    }
    var ni = "http://www.w3.org/1999/xhtml", my = "http://www.w3.org/1998/Math/MathML", Hf = "http://www.w3.org/2000/svg";
    function zs(e) {
      switch (e) {
        case "svg":
          return Hf;
        case "math":
          return my;
        default:
          return ni;
      }
    }
    function Vf(e, t) {
      return e == null || e === ni ? zs(t) : e === Hf && t === "foreignObject" ? ni : e;
    }
    var yy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, As, hv = yy(function(e, t) {
      if (e.namespaceURI === Hf && !("innerHTML" in e)) {
        As = As || document.createElement("div"), As.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = As.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Rr = 1, ri = 3, Sn = 8, ba = 9, ml = 11, Us = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ri) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, mv = {
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
    }, du = {
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
    function yv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var gv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(du).forEach(function(e) {
      gv.forEach(function(t) {
        du[yv(t, e)] = du[e];
      });
    });
    function Fs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(du.hasOwnProperty(e) && du[e]) ? t + "px" : (ne(t, e), ("" + t).trim());
    }
    var pu = /([A-Z])/g, gy = /^ms-/;
    function Sy(e) {
      return e.replace(pu, "-$1").toLowerCase().replace(gy, "-ms-");
    }
    var Sv = function() {
    };
    {
      var Ev = /^(?:webkit|moz|o)[A-Z]/, Cv = /^-ms-/, To = /-(.)/g, vu = /;\s*$/, hu = {}, mu = {}, Tv = !1, jf = !1, Bf = function(e) {
        return e.replace(To, function(t, a) {
          return a.toUpperCase();
        });
      }, Pf = function(e) {
        hu.hasOwnProperty(e) && hu[e] || (hu[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Bf(e.replace(Cv, "ms-"))
        ));
      }, Rv = function(e) {
        hu.hasOwnProperty(e) && hu[e] || (hu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, xv = function(e, t) {
        mu.hasOwnProperty(t) && mu[t] || (mu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vu, "")));
      }, wv = function(e, t) {
        Tv || (Tv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ey = function(e, t) {
        jf || (jf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sv = function(e, t) {
        e.indexOf("-") > -1 ? Pf(e) : Ev.test(e) ? Rv(e) : vu.test(t) && xv(e, t), typeof t == "number" && (isNaN(t) ? wv(e, t) : isFinite(t) || Ey(e, t));
      };
    }
    var Cy = Sv;
    function Ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Sy(i)) + ":", t += Fs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function bv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Cy(i, t[i]);
          var s = Fs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ry(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ea(e) {
      var t = {};
      for (var a in e)
        for (var i = mv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Ro(e, t) {
      {
        if (!t)
          return;
        var a = ea(e), i = ea(t), u = {};
        for (var s in a) {
          var f = a[s], v = i[s];
          if (v && f !== v) {
            var h = f + "," + v;
            if (u[h])
              continue;
            u[h] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ry(e[f]) ? "Removing" : "Updating", f, v);
          }
        }
      }
    }
    var Dv = {
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
    }, _v = pt({
      menuitem: !0
    }, Dv), kv = "__html";
    function Hs(e, t) {
      if (t) {
        if (_v[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(kv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ai(e, t) {
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
    var Vs = {
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
    }, Ov = {
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
    }, Da = {}, $f = new RegExp("^(aria)-[" + Ue + "]*$"), xo = new RegExp("^(aria)[A-Z][" + Ue + "]*$");
    function If(e, t) {
      {
        if (mn.call(Da, t) && Da[t])
          return !0;
        if (xo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ov.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Da[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Da[t] = !0, !0;
        }
        if ($f.test(t)) {
          var u = t.toLowerCase(), s = Ov.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Da[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Da[t] = !0, !0;
        }
      }
      return !0;
    }
    function Lv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = If(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function js(e, t) {
      ai(e, t) || Lv(e, t);
    }
    var yl = !1;
    function Yf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !yl && (yl = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Qf = function() {
    };
    {
      var zn = {}, Wf = /^on./, Mv = /^on[^A-Z]/, Nv = new RegExp("^(aria)-[" + Ue + "]*$"), zv = new RegExp("^(aria)[A-Z][" + Ue + "]*$");
      Qf = function(e, t, a, i) {
        if (mn.call(zn, t) && zn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), zn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = f.hasOwnProperty(u) ? f[u] : null;
          if (v != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, v), zn[t] = !0, !0;
          if (Wf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), zn[t] = !0, !0;
        } else if (Wf.test(t))
          return Mv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), zn[t] = !0, !0;
        if (Nv.test(t) || zv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), zn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), zn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), zn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), zn[t] = !0, !0;
        var h = Aa(t), S = h !== null && h.type === _t;
        if (Vs.hasOwnProperty(u)) {
          var T = Vs[u];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), zn[t] = !0, !0;
        } else if (!S && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), zn[t] = !0, !0;
        return typeof a == "boolean" && Xr(t, a, h, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), zn[t] = !0, !0) : S ? !0 : Xr(t, a, h, !1) ? (zn[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === Mn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), zn[t] = !0), !0);
      };
    }
    var Av = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Qf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Uv(e, t, a) {
      ai(e, t) || Av(e, t, a);
    }
    var ii = 1, wo = 2, gl = 4, xy = ii | wo | gl, bo = null;
    function Do(e) {
      bo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), bo = e;
    }
    function wy() {
      bo === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), bo = null;
    }
    function Fv(e) {
      return e === bo;
    }
    function Bs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ri ? t.parentNode : t;
    }
    var $t = null, Ni = null, li = null;
    function yu(e) {
      var t = $u(e);
      if (t) {
        if (typeof $t != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Fh(a);
          $t(t.stateNode, t.type, i);
        }
      }
    }
    function Hv(e) {
      $t = e;
    }
    function Ps(e) {
      Ni ? li ? li.push(e) : li = [e] : Ni = e;
    }
    function _o() {
      return Ni !== null || li !== null;
    }
    function ko() {
      if (Ni) {
        var e = Ni, t = li;
        if (Ni = null, li = null, yu(e), t)
          for (var a = 0; a < t.length; a++)
            yu(t[a]);
      }
    }
    var Sl = function(e, t) {
      return e(t);
    }, Gf = function() {
    }, qf = !1;
    function by() {
      var e = _o();
      e && (Gf(), ko());
    }
    function Xf(e, t, a) {
      if (qf)
        return e(t, a);
      qf = !0;
      try {
        return Sl(e, t, a);
      } finally {
        qf = !1, by();
      }
    }
    function $s(e, t, a) {
      Sl = e, Gf = a;
    }
    function Is(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Kf(e, t, a) {
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
          return !!(a.disabled && Is(t));
        default:
          return !1;
      }
    }
    function El(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Fh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Kf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Oo = !1;
    if (zt)
      try {
        var Cl = {};
        Object.defineProperty(Cl, "passive", {
          get: function() {
            Oo = !0;
          }
        }), window.addEventListener("test", Cl, Cl), window.removeEventListener("test", Cl, Cl);
      } catch {
        Oo = !1;
      }
    function Vv(e, t, a, i, u, s, f, v, h) {
      var S = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, S);
      } catch (T) {
        this.onError(T);
      }
    }
    var Zf = Vv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Jf = document.createElement("react");
      Zf = function(t, a, i, u, s, f, v, h, S) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), O = !1, _ = !0, U = window.event, F = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          Jf.removeEventListener(B, Be, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var me = Array.prototype.slice.call(arguments, 3);
        function Be() {
          O = !0, j(), a.apply(i, me), _ = !1;
        }
        var Me, gt = !1, ht = !1;
        function M(N) {
          if (Me = N.error, gt = !0, Me === null && N.colno === 0 && N.lineno === 0 && (ht = !0), N.defaultPrevented && Me != null && typeof Me == "object")
            try {
              Me._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", M), Jf.addEventListener(B, Be, !1), T.initEvent(B, !1, !1), Jf.dispatchEvent(T), F && Object.defineProperty(window, "event", F), O && _ && (gt ? ht && (Me = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Me = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Me)), window.removeEventListener("error", M), !O)
          return j(), Vv.apply(this, arguments);
      };
    }
    var Dy = Zf, zi = !1, _a = null, Lo = !1, Ai = null, Fa = {
      onError: function(e) {
        zi = !0, _a = e;
      }
    };
    function Tl(e, t, a, i, u, s, f, v, h) {
      zi = !1, _a = null, Dy.apply(Fa, arguments);
    }
    function ui(e, t, a, i, u, s, f, v, h) {
      if (Tl.apply(this, arguments), zi) {
        var S = td();
        Lo || (Lo = !0, Ai = S);
      }
    }
    function ed() {
      if (Lo) {
        var e = Ai;
        throw Lo = !1, Ai = null, e;
      }
    }
    function _y() {
      return zi;
    }
    function td() {
      if (zi) {
        var e = _a;
        return zi = !1, _a = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ta(e) {
      return e._reactInternals;
    }
    function Mo(e) {
      return e._reactInternals !== void 0;
    }
    function gu(e, t) {
      e._reactInternals = t;
    }
    var He = (
      /*                      */
      0
    ), Ui = (
      /*                */
      1
    ), Yt = (
      /*                    */
      2
    ), lt = (
      /*                       */
      4
    ), bt = (
      /*                */
      16
    ), kt = (
      /*                 */
      32
    ), Ha = (
      /*                     */
      64
    ), Xe = (
      /*                   */
      128
    ), on = (
      /*            */
      256
    ), xr = (
      /*                          */
      512
    ), na = (
      /*                     */
      1024
    ), Xt = (
      /*                      */
      2048
    ), ra = (
      /*                    */
      4096
    ), Fi = (
      /*                   */
      8192
    ), No = (
      /*             */
      16384
    ), Ys = Xt | lt | Ha | xr | na | No, jv = (
      /*               */
      32767
    ), Hr = (
      /*                   */
      32768
    ), An = (
      /*                */
      65536
    ), zo = (
      /* */
      131072
    ), nd = (
      /*                       */
      1048576
    ), rd = (
      /*                    */
      2097152
    ), wr = (
      /*                 */
      4194304
    ), Hi = (
      /*                */
      8388608
    ), br = (
      /*               */
      16777216
    ), Rl = (
      /*              */
      33554432
    ), Su = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      lt | na | 0
    ), Dr = Yt | lt | bt | kt | xr | ra | Fi, rr = lt | Ha | xr | Fi, aa = Xt | bt, Pn = wr | Hi | rd, oi = m.ReactCurrentOwner;
    function Vr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Yt | ra)) !== He && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === I ? a : null;
    }
    function ad(e) {
      if (e.tag === Y) {
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
    function Qs(e) {
      return e.tag === I ? e.stateNode.containerInfo : null;
    }
    function id(e) {
      return Vr(e) === e;
    }
    function jr(e) {
      {
        var t = oi.current;
        if (t !== null && t.tag === G) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", rt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ta(e);
      return u ? Vr(u) === u : !1;
    }
    function _r(e) {
      if (Vr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Qt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Vr(e);
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
              return _r(s), e;
            if (h === u)
              return _r(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var S = !1, T = s.child; T; ) {
            if (T === i) {
              S = !0, i = s, u = f;
              break;
            }
            if (T === u) {
              S = !0, u = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!S) {
            for (T = f.child; T; ) {
              if (T === i) {
                S = !0, i = f, u = s;
                break;
              }
              if (T === u) {
                S = !0, u = f, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!S)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== I)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ia(e) {
      var t = Qt(e);
      return t !== null ? ld(t) : null;
    }
    function ld(e) {
      if (e.tag === ie || e.tag === Re)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ld(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Bv(e) {
      var t = Qt(e);
      return t !== null ? Ws(t) : null;
    }
    function Ws(e) {
      if (e.tag === ie || e.tag === Re)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== q) {
          var a = Ws(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Gs = C.unstable_scheduleCallback, Pv = C.unstable_cancelCallback, qs = C.unstable_shouldYield, $v = C.unstable_requestPaint, en = C.unstable_now, ud = C.unstable_getCurrentPriorityLevel, Xs = C.unstable_ImmediatePriority, Br = C.unstable_UserBlockingPriority, Va = C.unstable_NormalPriority, Ks = C.unstable_LowPriority, Vi = C.unstable_IdlePriority, od = C.unstable_yieldValue, sd = C.unstable_setDisableYieldValue, ji = null, Un = null, ue = null, dn = !1, $n = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function cd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        at && (e = pt({}, e, {
          getLaneLabelMap: Pi,
          injectProfilingHooks: ci
        })), ji = t.inject(e), Un = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Iv(e, t) {
      if (Un && typeof Un.onScheduleFiberRoot == "function")
        try {
          Un.onScheduleFiberRoot(ji, e, t);
        } catch (a) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function si(e, t) {
      if (Un && typeof Un.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Xe) === Xe;
          if (Ae) {
            var i;
            switch (t) {
              case ar:
                i = Xs;
                break;
              case In:
                i = Br;
                break;
              case di:
                i = Va;
                break;
              case $o:
                i = Vi;
                break;
              default:
                i = Va;
                break;
            }
            Un.onCommitFiberRoot(ji, e, i, a);
          }
        } catch (u) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Bi(e) {
      if (Un && typeof Un.onPostCommitFiberRoot == "function")
        try {
          Un.onPostCommitFiberRoot(ji, e);
        } catch (t) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function fd(e) {
      if (Un && typeof Un.onCommitFiberUnmount == "function")
        try {
          Un.onCommitFiberUnmount(ji, e);
        } catch (t) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function wn(e) {
      if (typeof od == "function" && (sd(e), b(e)), Un && typeof Un.setStrictMode == "function")
        try {
          Un.setStrictMode(ji, e);
        } catch (t) {
          dn || (dn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ci(e) {
      ue = e;
    }
    function Pi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Wt; a++) {
          var i = ky(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Zs(e) {
      ue !== null && typeof ue.markCommitStarted == "function" && ue.markCommitStarted(e);
    }
    function dd() {
      ue !== null && typeof ue.markCommitStopped == "function" && ue.markCommitStopped();
    }
    function $i(e) {
      ue !== null && typeof ue.markComponentRenderStarted == "function" && ue.markComponentRenderStarted(e);
    }
    function xl() {
      ue !== null && typeof ue.markComponentRenderStopped == "function" && ue.markComponentRenderStopped();
    }
    function Yv(e) {
      ue !== null && typeof ue.markComponentPassiveEffectMountStarted == "function" && ue.markComponentPassiveEffectMountStarted(e);
    }
    function pd() {
      ue !== null && typeof ue.markComponentPassiveEffectMountStopped == "function" && ue.markComponentPassiveEffectMountStopped();
    }
    function Js(e) {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStarted == "function" && ue.markComponentPassiveEffectUnmountStarted(e);
    }
    function Qv() {
      ue !== null && typeof ue.markComponentPassiveEffectUnmountStopped == "function" && ue.markComponentPassiveEffectUnmountStopped();
    }
    function Wv(e) {
      ue !== null && typeof ue.markComponentLayoutEffectMountStarted == "function" && ue.markComponentLayoutEffectMountStarted(e);
    }
    function Gv() {
      ue !== null && typeof ue.markComponentLayoutEffectMountStopped == "function" && ue.markComponentLayoutEffectMountStopped();
    }
    function ec(e) {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStarted == "function" && ue.markComponentLayoutEffectUnmountStarted(e);
    }
    function Eu() {
      ue !== null && typeof ue.markComponentLayoutEffectUnmountStopped == "function" && ue.markComponentLayoutEffectUnmountStopped();
    }
    function tc(e, t, a) {
      ue !== null && typeof ue.markComponentErrored == "function" && ue.markComponentErrored(e, t, a);
    }
    function qv(e, t, a) {
      ue !== null && typeof ue.markComponentSuspended == "function" && ue.markComponentSuspended(e, t, a);
    }
    function Xv(e) {
      ue !== null && typeof ue.markLayoutEffectsStarted == "function" && ue.markLayoutEffectsStarted(e);
    }
    function Cu() {
      ue !== null && typeof ue.markLayoutEffectsStopped == "function" && ue.markLayoutEffectsStopped();
    }
    function Kv(e) {
      ue !== null && typeof ue.markPassiveEffectsStarted == "function" && ue.markPassiveEffectsStarted(e);
    }
    function Ao() {
      ue !== null && typeof ue.markPassiveEffectsStopped == "function" && ue.markPassiveEffectsStopped();
    }
    function ka(e) {
      ue !== null && typeof ue.markRenderStarted == "function" && ue.markRenderStarted(e);
    }
    function Uo() {
      ue !== null && typeof ue.markRenderYielded == "function" && ue.markRenderYielded();
    }
    function Tu() {
      ue !== null && typeof ue.markRenderStopped == "function" && ue.markRenderStopped();
    }
    function wl(e) {
      ue !== null && typeof ue.markRenderScheduled == "function" && ue.markRenderScheduled(e);
    }
    function vd(e, t) {
      ue !== null && typeof ue.markForceUpdateScheduled == "function" && ue.markForceUpdateScheduled(e, t);
    }
    function Ii(e, t) {
      ue !== null && typeof ue.markStateUpdateScheduled == "function" && ue.markStateUpdateScheduled(e, t);
    }
    var $e = (
      /*                         */
      0
    ), ct = (
      /*                 */
      1
    ), Ie = (
      /*                    */
      2
    ), tn = (
      /*               */
      8
    ), la = (
      /*              */
      16
    ), nc = Math.clz32 ? Math.clz32 : bl, rc = Math.log, hd = Math.LN2;
    function bl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (rc(t) / hd | 0) | 0;
    }
    var Wt = 31, P = (
      /*                        */
      0
    ), mt = (
      /*                          */
      0
    ), Ye = (
      /*                        */
      1
    ), ja = (
      /*    */
      2
    ), Pr = (
      /*             */
      4
    ), Dl = (
      /*            */
      8
    ), Gt = (
      /*                     */
      16
    ), _l = (
      /*                */
      32
    ), Yi = (
      /*                       */
      4194240
    ), kl = (
      /*                        */
      64
    ), ua = (
      /*                        */
      128
    ), kr = (
      /*                        */
      256
    ), Ol = (
      /*                        */
      512
    ), Fo = (
      /*                        */
      1024
    ), Ho = (
      /*                        */
      2048
    ), ac = (
      /*                        */
      4096
    ), ic = (
      /*                        */
      8192
    ), lc = (
      /*                        */
      16384
    ), uc = (
      /*                       */
      32768
    ), oc = (
      /*                       */
      65536
    ), sc = (
      /*                       */
      131072
    ), cc = (
      /*                       */
      262144
    ), fc = (
      /*                       */
      524288
    ), Ll = (
      /*                       */
      1048576
    ), dc = (
      /*                       */
      2097152
    ), Ml = (
      /*                            */
      130023424
    ), fi = (
      /*                             */
      4194304
    ), pc = (
      /*                             */
      8388608
    ), Vo = (
      /*                             */
      16777216
    ), vc = (
      /*                             */
      33554432
    ), hc = (
      /*                             */
      67108864
    ), md = fi, Ru = (
      /*          */
      134217728
    ), mc = (
      /*                          */
      268435455
    ), xu = (
      /*               */
      268435456
    ), Qi = (
      /*                        */
      536870912
    ), Or = (
      /*                   */
      1073741824
    );
    function ky(e) {
      {
        if (e & Ye)
          return "Sync";
        if (e & ja)
          return "InputContinuousHydration";
        if (e & Pr)
          return "InputContinuous";
        if (e & Dl)
          return "DefaultHydration";
        if (e & Gt)
          return "Default";
        if (e & _l)
          return "TransitionHydration";
        if (e & Yi)
          return "Transition";
        if (e & Ml)
          return "Retry";
        if (e & Ru)
          return "SelectiveHydration";
        if (e & xu)
          return "IdleHydration";
        if (e & Qi)
          return "Idle";
        if (e & Or)
          return "Offscreen";
      }
    }
    var It = -1, yc = kl, gc = fi;
    function wu(e) {
      switch (En(e)) {
        case Ye:
          return Ye;
        case ja:
          return ja;
        case Pr:
          return Pr;
        case Dl:
          return Dl;
        case Gt:
          return Gt;
        case _l:
          return _l;
        case kl:
        case ua:
        case kr:
        case Ol:
        case Fo:
        case Ho:
        case ac:
        case ic:
        case lc:
        case uc:
        case oc:
        case sc:
        case cc:
        case fc:
        case Ll:
        case dc:
          return e & Yi;
        case fi:
        case pc:
        case Vo:
        case vc:
        case hc:
          return e & Ml;
        case Ru:
          return Ru;
        case xu:
          return xu;
        case Qi:
          return Qi;
        case Or:
          return Or;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function jo(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & mc;
      if (f !== P) {
        var v = f & ~u;
        if (v !== P)
          i = wu(v);
        else {
          var h = f & s;
          h !== P && (i = wu(h));
        }
      } else {
        var S = a & ~u;
        S !== P ? i = wu(S) : s !== P && (i = wu(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === P) {
        var T = En(i), O = En(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= O || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Gt && (O & Yi) !== P
        )
          return t;
      }
      (i & Pr) !== P && (i |= a & Gt);
      var _ = e.entangledLanes;
      if (_ !== P)
        for (var U = e.entanglements, F = i & _; F > 0; ) {
          var j = Wi(F), me = 1 << j;
          i |= U[j], F &= ~me;
        }
      return i;
    }
    function Zv(e, t) {
      for (var a = e.eventTimes, i = It; t > 0; ) {
        var u = Wi(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Sc(e, t) {
      switch (e) {
        case Ye:
        case ja:
        case Pr:
          return t + 250;
        case Dl:
        case Gt:
        case _l:
        case kl:
        case ua:
        case kr:
        case Ol:
        case Fo:
        case Ho:
        case ac:
        case ic:
        case lc:
        case uc:
        case oc:
        case sc:
        case cc:
        case fc:
        case Ll:
        case dc:
          return t + 5e3;
        case fi:
        case pc:
        case Vo:
        case vc:
        case hc:
          return It;
        case Ru:
        case xu:
        case Qi:
        case Or:
          return It;
        default:
          return g("Should have found matching lanes. This is a bug in React."), It;
      }
    }
    function Oy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = Wi(f), h = 1 << v, S = s[v];
        S === It ? ((h & i) === P || (h & u) !== P) && (s[v] = Sc(h, t)) : S <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function Ly(e) {
      return wu(e.pendingLanes);
    }
    function yd(e) {
      var t = e.pendingLanes & ~Or;
      return t !== P ? t : t & Or ? Or : P;
    }
    function bu(e) {
      return (e & Ye) !== P;
    }
    function Bo(e) {
      return (e & mc) !== P;
    }
    function Ec(e) {
      return (e & Ml) === e;
    }
    function My(e) {
      var t = Ye | Pr | Gt;
      return (e & t) === P;
    }
    function Jv(e) {
      return (e & Yi) === e;
    }
    function Po(e, t) {
      var a = ja | Pr | Dl | Gt;
      return (t & a) !== P;
    }
    function eh(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function gd(e) {
      return (e & Yi) !== P;
    }
    function Sd() {
      var e = yc;
      return yc <<= 1, (yc & Yi) === P && (yc = kl), e;
    }
    function Ny() {
      var e = gc;
      return gc <<= 1, (gc & Ml) === P && (gc = fi), e;
    }
    function En(e) {
      return e & -e;
    }
    function bn(e) {
      return En(e);
    }
    function Wi(e) {
      return 31 - nc(e);
    }
    function Cc(e) {
      return Wi(e);
    }
    function Lr(e, t) {
      return (e & t) !== P;
    }
    function Nl(e, t) {
      return (e & t) === t;
    }
    function ut(e, t) {
      return e | t;
    }
    function Du(e, t) {
      return e & ~t;
    }
    function Ed(e, t) {
      return e & t;
    }
    function th(e) {
      return e;
    }
    function nh(e, t) {
      return e !== mt && e < t ? e : t;
    }
    function Tc(e) {
      for (var t = [], a = 0; a < Wt; a++)
        t.push(e);
      return t;
    }
    function zl(e, t, a) {
      e.pendingLanes |= t, t !== Qi && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = Cc(t);
      i[u] = a;
    }
    function Cd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Wi(i), s = 1 << u;
        a[u] = It, i &= ~s;
      }
    }
    function Td(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Rd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = Wi(f), h = 1 << v;
        i[v] = P, u[v] = It, s[v] = It, f &= ~h;
      }
    }
    function _u(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Wi(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function zy(e, t) {
      var a = En(t), i;
      switch (a) {
        case Pr:
          i = ja;
          break;
        case Gt:
          i = Dl;
          break;
        case kl:
        case ua:
        case kr:
        case Ol:
        case Fo:
        case Ho:
        case ac:
        case ic:
        case lc:
        case uc:
        case oc:
        case sc:
        case cc:
        case fc:
        case Ll:
        case dc:
        case fi:
        case pc:
        case Vo:
        case vc:
        case hc:
          i = _l;
          break;
        case Qi:
          i = xu;
          break;
        default:
          i = mt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== mt ? mt : i;
    }
    function xd(e, t, a) {
      if ($n)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Cc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Rc(e, t) {
      if ($n)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Cc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(v) {
            var h = v.alternate;
            (h === null || !i.has(h)) && i.add(v);
          }), f.clear()), t &= ~s;
        }
    }
    function wd(e, t) {
      return null;
    }
    var ar = Ye, In = Pr, di = Gt, $o = Qi, Al = mt;
    function oa() {
      return Al;
    }
    function Dn(e) {
      Al = e;
    }
    function Io(e, t) {
      var a = Al;
      try {
        return Al = e, t();
      } finally {
        Al = a;
      }
    }
    function ir(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ay(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function bd(e, t) {
      return e !== 0 && e < t;
    }
    function Yo(e) {
      var t = En(e);
      return bd(ar, t) ? bd(In, t) ? Bo(t) ? di : $o : In : ar;
    }
    function _n(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var rh;
    function Ce(e) {
      rh = e;
    }
    function ku(e) {
      rh(e);
    }
    var Qo;
    function ah(e) {
      Qo = e;
    }
    var ih;
    function Wo(e) {
      ih = e;
    }
    var Go;
    function Dd(e) {
      Go = e;
    }
    var _d;
    function lh(e) {
      _d = e;
    }
    var xc = !1, Ou = [], Ba = null, Kt = null, Fn = null, sa = /* @__PURE__ */ new Map(), Lu = /* @__PURE__ */ new Map(), pi = [], Oa = [
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
    function uh(e) {
      return Oa.indexOf(e) > -1;
    }
    function Pa(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function oh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ba = null;
          break;
        case "dragenter":
        case "dragleave":
          Kt = null;
          break;
        case "mouseover":
        case "mouseout":
          Fn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          sa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Lu.delete(i);
          break;
        }
      }
    }
    function Mu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Pa(t, a, i, u, s);
        if (t !== null) {
          var v = $u(t);
          v !== null && Qo(v);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var h = e.targetContainers;
      return u !== null && h.indexOf(u) === -1 && h.push(u), e;
    }
    function sh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ba = Mu(Ba, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Kt = Mu(Kt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var v = u;
          return Fn = Mu(Fn, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var h = u, S = h.pointerId;
          return sa.set(S, Mu(sa.get(S) || null, e, t, a, i, h)), !0;
        }
        case "gotpointercapture": {
          var T = u, O = T.pointerId;
          return Lu.set(O, Mu(Lu.get(O) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function kd(e) {
      var t = rs(e.target);
      if (t !== null) {
        var a = Vr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Y) {
            var u = ad(a);
            if (u !== null) {
              e.blockedOn = u, _d(e.priority, function() {
                ih(a);
              });
              return;
            }
          } else if (i === I) {
            var s = a.stateNode;
            if (_n(s)) {
              e.blockedOn = Qs(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ch(e) {
      for (var t = Go(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < pi.length && bd(t, pi[i].priority); i++)
        ;
      pi.splice(i, 0, a), i === 0 && kd(a);
    }
    function wc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ul(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Do(s), u.target.dispatchEvent(s), wy();
        } else {
          var f = $u(i);
          return f !== null && Qo(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function qo(e, t, a) {
      wc(e) && a.delete(t);
    }
    function Od() {
      xc = !1, Ba !== null && wc(Ba) && (Ba = null), Kt !== null && wc(Kt) && (Kt = null), Fn !== null && wc(Fn) && (Fn = null), sa.forEach(qo), Lu.forEach(qo);
    }
    function lr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, xc || (xc = !0, C.unstable_scheduleCallback(C.unstable_NormalPriority, Od)));
    }
    function vt(e) {
      if (Ou.length > 0) {
        lr(Ou[0], e);
        for (var t = 1; t < Ou.length; t++) {
          var a = Ou[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ba !== null && lr(Ba, e), Kt !== null && lr(Kt, e), Fn !== null && lr(Fn, e);
      var i = function(v) {
        return lr(v, e);
      };
      sa.forEach(i), Lu.forEach(i);
      for (var u = 0; u < pi.length; u++) {
        var s = pi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; pi.length > 0; ) {
        var f = pi[0];
        if (f.blockedOn !== null)
          break;
        kd(f), f.blockedOn === null && pi.shift();
      }
    }
    var nn = m.ReactCurrentBatchConfig, sn = !0;
    function Hn(e) {
      sn = !!e;
    }
    function $r() {
      return sn;
    }
    function Nu(e, t, a) {
      var i = dr(t), u;
      switch (i) {
        case ar:
          u = kn;
          break;
        case In:
          u = Xo;
          break;
        case di:
        default:
          u = vi;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function kn(e, t, a, i) {
      var u = oa(), s = nn.transition;
      nn.transition = null;
      try {
        Dn(ar), vi(e, t, a, i);
      } finally {
        Dn(u), nn.transition = s;
      }
    }
    function Xo(e, t, a, i) {
      var u = oa(), s = nn.transition;
      nn.transition = null;
      try {
        Dn(In), vi(e, t, a, i);
      } finally {
        Dn(u), nn.transition = s;
      }
    }
    function vi(e, t, a, i) {
      sn && bc(e, t, a, i);
    }
    function bc(e, t, a, i) {
      var u = Ul(e, t, a, i);
      if (u === null) {
        tg(e, t, i, zu, a), oh(e, i);
        return;
      }
      if (sh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (oh(e, i), t & gl && uh(e)) {
        for (; u !== null; ) {
          var s = $u(u);
          s !== null && ku(s);
          var f = Ul(e, t, a, i);
          if (f === null && tg(e, t, i, zu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      tg(e, t, i, null, a);
    }
    var zu = null;
    function Ul(e, t, a, i) {
      zu = null;
      var u = Bs(i), s = rs(u);
      if (s !== null) {
        var f = Vr(s);
        if (f === null)
          s = null;
        else {
          var v = f.tag;
          if (v === Y) {
            var h = ad(f);
            if (h !== null)
              return h;
            s = null;
          } else if (v === I) {
            var S = f.stateNode;
            if (_n(S))
              return Qs(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return zu = s, null;
    }
    function dr(e) {
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
          return ar;
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
          return In;
        case "message": {
          var t = ud();
          switch (t) {
            case Xs:
              return ar;
            case Br:
              return In;
            case Va:
            case Ks:
              return di;
            case Vi:
              return $o;
            default:
              return di;
          }
        }
        default:
          return di;
      }
    }
    function Ld(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Au(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function hi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Dc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Fl = null, $a = null, Gi = null;
    function qi(e) {
      return Fl = e, $a = kc(), !0;
    }
    function _c() {
      Fl = null, $a = null, Gi = null;
    }
    function Uu() {
      if (Gi)
        return Gi;
      var e, t = $a, a = t.length, i, u = kc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return Gi = u.slice(e, v), Gi;
    }
    function kc() {
      return "value" in Fl ? Fl.value : Fl.textContent;
    }
    function Hl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Vl() {
      return !0;
    }
    function ur() {
      return !1;
    }
    function Cn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var h = e[v];
            h ? this[v] = h(s) : this[v] = s[v];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return S ? this.isDefaultPrevented = Vl : this.isDefaultPrevented = ur, this.isPropagationStopped = ur, this;
      }
      return pt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Vl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Vl);
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
        isPersistent: Vl
      }), t;
    }
    var or = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, sr = Cn(or), Fu = pt({}, or, {
      view: 0,
      detail: 0
    }), Md = Cn(Fu), Ko, Nd, ca;
    function fh(e) {
      e !== ca && (ca && e.type === "mousemove" ? (Ko = e.screenX - ca.screenX, Nd = e.screenY - ca.screenY) : (Ko = 0, Nd = 0), ca = e);
    }
    var Hu = pt({}, Fu, {
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
      getModifierState: Mc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (fh(e), Ko);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Nd;
      }
    }), Xi = Cn(Hu), zd = pt({}, Hu, {
      dataTransfer: 0
    }), jl = Cn(zd), dh = pt({}, Fu, {
      relatedTarget: 0
    }), Oc = Cn(dh), Ad = pt({}, or, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Lc = Cn(Ad), Uy = pt({}, or, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Fy = Cn(Uy), ph = pt({}, or, {
      data: 0
    }), Ud = Cn(ph), Bl = Ud, Hy = {
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
    }, Vu = {
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
    function vh(e) {
      if (e.key) {
        var t = Hy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Hl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vu[e.keyCode] || "Unidentified" : "";
    }
    var cn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Vy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = cn[e];
      return i ? !!a[i] : !1;
    }
    function Mc(e) {
      return Vy;
    }
    var jy = pt({}, Fu, {
      key: vh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Mc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Hl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), By = Cn(jy), hh = pt({}, Hu, {
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
    }), Fd = Cn(hh), Py = pt({}, Fu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mc
    }), fa = Cn(Py), Hd = pt({}, or, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $y = Cn(Hd), Ki = pt({}, Hu, {
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
    }), Nc = Cn(Ki), Pl = [9, 13, 27, 32], Zo = 229, Jo = zt && "CompositionEvent" in window, $l = null;
    zt && "documentMode" in document && ($l = document.documentMode);
    var Iy = zt && "TextEvent" in window && !$l, zc = zt && (!Jo || $l && $l > 8 && $l <= 11), mh = 32, Vd = String.fromCharCode(mh);
    function yh() {
      Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Dt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Dt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var es = !1;
    function Ac(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function gh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function jd(e, t) {
      return e === "keydown" && t.keyCode === Zo;
    }
    function Sh(e, t) {
      switch (e) {
        case "keyup":
          return Pl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Zo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Bd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Uc(e) {
      return e.locale === "ko";
    }
    var mi = !1;
    function Pd(e, t, a, i, u) {
      var s, f;
      if (Jo ? s = gh(t) : mi ? Sh(t, i) && (s = "onCompositionEnd") : jd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      zc && !Uc(i) && (!mi && s === "onCompositionStart" ? mi = qi(u) : s === "onCompositionEnd" && mi && (f = Uu()));
      var v = xh(a, s);
      if (v.length > 0) {
        var h = new Ud(s, t, null, i, u);
        if (e.push({
          event: h,
          listeners: v
        }), f)
          h.data = f;
        else {
          var S = Bd(i);
          S !== null && (h.data = S);
        }
      }
    }
    function Fc(e, t) {
      switch (e) {
        case "compositionend":
          return Bd(t);
        case "keypress":
          var a = t.which;
          return a !== mh ? null : (es = !0, Vd);
        case "textInput":
          var i = t.data;
          return i === Vd && es ? null : i;
        default:
          return null;
      }
    }
    function Eh(e, t) {
      if (mi) {
        if (e === "compositionend" || !Jo && Sh(e, t)) {
          var a = Uu();
          return _c(), mi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ac(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return zc && !Uc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Yy(e, t, a, i, u) {
      var s;
      if (Iy ? s = Fc(t, i) : s = Eh(t, i), !s)
        return null;
      var f = xh(a, "onBeforeInput");
      if (f.length > 0) {
        var v = new Bl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: v,
          listeners: f
        }), v.data = s;
      }
    }
    function Hc(e, t, a, i, u, s, f) {
      Pd(e, t, a, i, u), Yy(e, t, a, i, u);
    }
    var Qy = {
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
    function ju(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Qy[e.type] : t === "textarea";
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
    function Wy(e) {
      if (!zt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vc() {
      Dt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      Ps(i);
      var u = xh(t, "onChange");
      if (u.length > 0) {
        var s = new sr("onChange", "change", null, a, i);
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
      n(t, l, e, Bs(e)), Xf(d, t);
    }
    function d(e) {
      bE(e, 0);
    }
    function y(e) {
      var t = Yc(e);
      if (lv(t))
        return e;
    }
    function R(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    zt && (w = Wy("input") && (!document.documentMode || document.documentMode > 9));
    function H(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", J);
    }
    function Z() {
      r && (r.detachEvent("onpropertychange", J), r = null, l = null);
    }
    function J(e) {
      e.propertyName === "value" && y(l) && c(e);
    }
    function X(e, t, a) {
      e === "focusin" ? (Z(), H(t, a)) : e === "focusout" && Z();
    }
    function ve(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return y(l);
    }
    function xe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function De(e, t) {
      if (e === "click")
        return y(t);
    }
    function pn(e, t) {
      if (e === "input" || e === "change")
        return y(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Li(e, "number", e.value);
    }
    function k(e, t, a, i, u, s, f) {
      var v = a ? Yc(a) : window, h, S;
      if (o(v) ? h = R : ju(v) ? w ? h = pn : (h = ve, S = X) : xe(v) && (h = De), h) {
        var T = h(t, a);
        if (T) {
          n(e, T, i, u);
          return;
        }
      }
      S && S(t, v, a), t === "focusout" && L(v);
    }
    function A() {
      le("onMouseEnter", ["mouseout", "mouseover"]), le("onMouseLeave", ["mouseout", "mouseover"]), le("onPointerEnter", ["pointerout", "pointerover"]), le("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ae(e, t, a, i, u, s, f) {
      var v = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (v && !Fv(i)) {
        var S = i.relatedTarget || i.fromElement;
        if (S && (rs(S) || np(S)))
          return;
      }
      if (!(!h && !v)) {
        var T;
        if (u.window === u)
          T = u;
        else {
          var O = u.ownerDocument;
          O ? T = O.defaultView || O.parentWindow : T = window;
        }
        var _, U;
        if (h) {
          var F = i.relatedTarget || i.toElement;
          if (_ = a, U = F ? rs(F) : null, U !== null) {
            var j = Vr(U);
            (U !== j || U.tag !== ie && U.tag !== Re) && (U = null);
          }
        } else
          _ = null, U = a;
        if (_ !== U) {
          var me = Xi, Be = "onMouseLeave", Me = "onMouseEnter", gt = "mouse";
          (t === "pointerout" || t === "pointerover") && (me = Fd, Be = "onPointerLeave", Me = "onPointerEnter", gt = "pointer");
          var ht = _ == null ? T : Yc(_), M = U == null ? T : Yc(U), B = new me(Be, gt + "leave", _, i, u);
          B.target = ht, B.relatedTarget = M;
          var N = null, ee = rs(u);
          if (ee === a) {
            var ye = new me(Me, gt + "enter", U, i, u);
            ye.target = M, ye.relatedTarget = ht, N = ye;
          }
          rx(e, B, N, _, U);
        }
      }
    }
    function Oe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var we = typeof Object.is == "function" ? Object.is : Oe;
    function Fe(e, t) {
      if (we(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!mn.call(t, s) || !we(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ke(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Vn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Et(e, t) {
      for (var a = Ke(e), i = 0, u = 0; a; ) {
        if (a.nodeType === ri) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ke(Vn(a));
      }
    }
    function Zi(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, v = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Gy(e, u, s, f, v);
    }
    function Gy(e, t, a, i, u) {
      var s = 0, f = -1, v = -1, h = 0, S = 0, T = e, O = null;
      e:
        for (; ; ) {
          for (var _ = null; T === t && (a === 0 || T.nodeType === ri) && (f = s + a), T === i && (u === 0 || T.nodeType === ri) && (v = s + u), T.nodeType === ri && (s += T.nodeValue.length), (_ = T.firstChild) !== null; )
            O = T, T = _;
          for (; ; ) {
            if (T === e)
              break e;
            if (O === t && ++h === a && (f = s), O === i && ++S === u && (v = s), (_ = T.nextSibling) !== null)
              break;
            T = O, O = T.parentNode;
          }
          T = _;
        }
      return f === -1 || v === -1 ? null : {
        start: f,
        end: v
      };
    }
    function HR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > v) {
          var h = v;
          v = f, f = h;
        }
        var S = Et(e, f), T = Et(e, v);
        if (S && T) {
          if (u.rangeCount === 1 && u.anchorNode === S.node && u.anchorOffset === S.offset && u.focusNode === T.node && u.focusOffset === T.offset)
            return;
          var O = a.createRange();
          O.setStart(S.node, S.offset), u.removeAllRanges(), f > v ? (u.addRange(O), u.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), u.addRange(O));
        }
      }
    }
    function vE(e) {
      return e && e.nodeType === ri;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vE(e) ? !1 : vE(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function VR(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function jR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = _s(); t instanceof e.HTMLIFrameElement; ) {
        if (jR(t))
          e = t.contentWindow;
        else
          return t;
        t = _s(e.document);
      }
      return t;
    }
    function qy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function BR() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: qy(e) ? $R(e) : null
      };
    }
    function PR(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && VR(a)) {
        i !== null && qy(a) && IR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Rr && u.push({
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
    function $R(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Zi(e), t || {
        start: 0,
        end: 0
      };
    }
    function IR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : HR(e, t);
    }
    var YR = zt && "documentMode" in document && document.documentMode <= 11;
    function QR() {
      Dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var jc = null, Xy = null, $d = null, Ky = !1;
    function WR(e) {
      if ("selectionStart" in e && qy(e))
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
    function GR(e) {
      return e.window === e ? e.document : e.nodeType === ba ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = GR(a);
      if (!(Ky || jc == null || jc !== _s(i))) {
        var u = WR(jc);
        if (!$d || !Fe($d, u)) {
          $d = u;
          var s = xh(Xy, "onSelect");
          if (s.length > 0) {
            var f = new sr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = jc;
          }
        }
      }
    }
    function qR(e, t, a, i, u, s, f) {
      var v = a ? Yc(a) : window;
      switch (t) {
        case "focusin":
          (ju(v) || v.contentEditable === "true") && (jc = v, Xy = a, $d = null);
          break;
        case "focusout":
          jc = null, Xy = null, $d = null;
          break;
        case "mousedown":
          Ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ky = !1, yE(e, i, u);
          break;
        case "selectionchange":
          if (YR)
            break;
        case "keydown":
        case "keyup":
          yE(e, i, u);
      }
    }
    function Ch(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Bc = {
      animationend: Ch("Animation", "AnimationEnd"),
      animationiteration: Ch("Animation", "AnimationIteration"),
      animationstart: Ch("Animation", "AnimationStart"),
      transitionend: Ch("Transition", "TransitionEnd")
    }, Zy = {}, gE = {};
    zt && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete Bc.animationend.animation, delete Bc.animationiteration.animation, delete Bc.animationstart.animation), "TransitionEvent" in window || delete Bc.transitionend.transition);
    function Th(e) {
      if (Zy[e])
        return Zy[e];
      if (!Bc[e])
        return e;
      var t = Bc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gE)
          return Zy[e] = t[a];
      return e;
    }
    var SE = Th("animationend"), EE = Th("animationiteration"), CE = Th("animationstart"), TE = Th("transitionend"), RE = /* @__PURE__ */ new Map(), xE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      RE.set(e, t), Dt(t, [e]);
    }
    function XR() {
      for (var e = 0; e < xE.length; e++) {
        var t = xE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + i);
      }
      Bu(SE, "onAnimationEnd"), Bu(EE, "onAnimationIteration"), Bu(CE, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(TE, "onTransitionEnd");
    }
    function KR(e, t, a, i, u, s, f) {
      var v = RE.get(t);
      if (v !== void 0) {
        var h = sr, S = t;
        switch (t) {
          case "keypress":
            if (Hl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = By;
            break;
          case "focusin":
            S = "focus", h = Oc;
            break;
          case "focusout":
            S = "blur", h = Oc;
            break;
          case "beforeblur":
          case "afterblur":
            h = Oc;
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
            h = Xi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = jl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = fa;
            break;
          case SE:
          case EE:
          case CE:
            h = Lc;
            break;
          case TE:
            h = $y;
            break;
          case "scroll":
            h = Md;
            break;
          case "wheel":
            h = Nc;
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
            h = Fd;
            break;
        }
        var T = (s & gl) !== 0;
        {
          var O = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = tx(a, v, i.type, T, O);
          if (_.length > 0) {
            var U = new h(v, S, null, i, u);
            e.push({
              event: U,
              listeners: _
            });
          }
        }
      }
    }
    XR(), A(), Vc(), QR(), yh();
    function ZR(e, t, a, i, u, s, f) {
      KR(e, t, a, i, u, s);
      var v = (s & xy) === 0;
      v && (ae(e, t, a, i, u), k(e, t, a, i, u), qR(e, t, a, i, u), Hc(e, t, a, i, u));
    }
    var Id = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Jy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Id));
    function wE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ui(i, t, void 0, e), e.currentTarget = null;
    }
    function JR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, v = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          wE(e, h, v), i = f;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var T = t[S], O = T.instance, _ = T.currentTarget, U = T.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          wE(e, U, _), i = O;
        }
    }
    function bE(e, t) {
      for (var a = (t & gl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        JR(s, f, a);
      }
      ed();
    }
    function ex(e, t, a, i, u) {
      var s = Bs(a), f = [];
      ZR(f, e, i, a, s, t), bE(f, t);
    }
    function rn(e, t) {
      Jy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Ow(t), u = ax(e, a);
      i.has(u) || (DE(t, e, wo, a), i.add(u));
    }
    function eg(e, t, a) {
      Jy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= gl), DE(a, e, i, t);
    }
    var Rh = "_reactListening" + Math.random().toString(36).slice(2);
    function Yd(e) {
      if (!e[Rh]) {
        e[Rh] = !0, Je.forEach(function(a) {
          a !== "selectionchange" && (Jy.has(a) || eg(a, !1, e), eg(a, !0, e));
        });
        var t = e.nodeType === ba ? e : e.ownerDocument;
        t !== null && (t[Rh] || (t[Rh] = !0, eg("selectionchange", !1, t)));
      }
    }
    function DE(e, t, a, i, u) {
      var s = Nu(e, t, a), f = void 0;
      Oo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? hi(e, t, s, f) : Au(e, t, s) : f !== void 0 ? Dc(e, t, s, f) : Ld(e, t, s);
    }
    function _E(e, t) {
      return e === t || e.nodeType === Sn && e.parentNode === t;
    }
    function tg(e, t, a, i, u) {
      var s = i;
      if (!(t & ii) && !(t & wo)) {
        var f = u;
        if (i !== null) {
          var v = i;
          e:
            for (; ; ) {
              if (v === null)
                return;
              var h = v.tag;
              if (h === I || h === q) {
                var S = v.stateNode.containerInfo;
                if (_E(S, f))
                  break;
                if (h === q)
                  for (var T = v.return; T !== null; ) {
                    var O = T.tag;
                    if (O === I || O === q) {
                      var _ = T.stateNode.containerInfo;
                      if (_E(_, f))
                        return;
                    }
                    T = T.return;
                  }
                for (; S !== null; ) {
                  var U = rs(S);
                  if (U === null)
                    return;
                  var F = U.tag;
                  if (F === ie || F === Re) {
                    v = s = U;
                    continue e;
                  }
                  S = S.parentNode;
                }
              }
              v = v.return;
            }
        }
      }
      Xf(function() {
        return ex(e, t, a, s);
      });
    }
    function Qd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function tx(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, h = [], S = e, T = null; S !== null; ) {
        var O = S, _ = O.stateNode, U = O.tag;
        if (U === ie && _ !== null && (T = _, v !== null)) {
          var F = El(S, v);
          F != null && h.push(Qd(S, F, T));
        }
        if (u)
          break;
        S = S.return;
      }
      return h;
    }
    function xh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, v = s.tag;
        if (v === ie && f !== null) {
          var h = f, S = El(u, a);
          S != null && i.unshift(Qd(u, S, h));
          var T = El(u, t);
          T != null && i.push(Qd(u, T, h));
        }
        u = u.return;
      }
      return i;
    }
    function Pc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function nx(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Pc(s))
        u++;
      for (var f = 0, v = i; v; v = Pc(v))
        f++;
      for (; u - f > 0; )
        a = Pc(a), u--;
      for (; f - u > 0; )
        i = Pc(i), f--;
      for (var h = u; h--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Pc(a), i = Pc(i);
      }
      return null;
    }
    function kE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], v = a; v !== null && v !== i; ) {
        var h = v, S = h.alternate, T = h.stateNode, O = h.tag;
        if (S !== null && S === i)
          break;
        if (O === ie && T !== null) {
          var _ = T;
          if (u) {
            var U = El(v, s);
            U != null && f.unshift(Qd(v, U, _));
          } else if (!u) {
            var F = El(v, s);
            F != null && f.push(Qd(v, F, _));
          }
        }
        v = v.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function rx(e, t, a, i, u) {
      var s = i && u ? nx(i, u) : null;
      i !== null && kE(e, t, i, s, !1), u !== null && a !== null && kE(e, a, u, s, !0);
    }
    function ax(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var da = !1, Wd = "dangerouslySetInnerHTML", wh = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", OE = "autoFocus", ts = "children", ns = "style", bh = "__html", ng, Dh, Gd, LE, _h, ME, NE;
    ng = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Dh = function(e, t) {
      js(e, t), Yf(e, t), Uv(e, t, {
        registrationNameDependencies: it,
        possibleRegistrationNames: st
      });
    }, ME = zt && !document.documentMode, Gd = function(e, t, a) {
      if (!da) {
        var i = kh(a), u = kh(t);
        u !== i && (da = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, LE = function(e) {
      if (!da) {
        da = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, _h = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, NE = function(e, t) {
      var a = e.namespaceURI === ni ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var ix = /\r\n?/g, lx = /\u0000|\uFFFD/g;
    function kh(e) {
      ke(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(ix, `
`).replace(lx, "");
    }
    function Oh(e, t, a, i) {
      var u = kh(t), s = kh(e);
      if (s !== u && (i && (da || (da = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && wt))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === ba ? e : e.ownerDocument;
    }
    function ux() {
    }
    function Lh(e) {
      e.onclick = ux;
    }
    function ox(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === ns)
            f && Object.freeze(f), bv(t, f);
          else if (s === Wd) {
            var v = f ? f[bh] : void 0;
            v != null && hv(t, v);
          } else if (s === ts)
            if (typeof f == "string") {
              var h = e !== "textarea" || f !== "";
              h && Us(t, f);
            } else
              typeof f == "number" && Us(t, "" + f);
          else
            s === wh || s === Pu || s === OE || (it.hasOwnProperty(s) ? f != null && (typeof f != "function" && _h(s, f), s === "onScroll" && rn("scroll", t)) : f != null && dl(t, s, f, u));
        }
    }
    function sx(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === ns ? bv(e, f) : s === Wd ? hv(e, f) : s === ts ? Us(e, f) : dl(e, s, f, i);
      }
    }
    function cx(e, t, a, i) {
      var u, s = zE(a), f, v = i;
      if (v === ni && (v = zs(e)), v === ni) {
        if (u = ai(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var S = h.firstChild;
          f = h.removeChild(S);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var T = f;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        f = s.createElementNS(v, e);
      return v === ni && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !mn.call(ng, e) && (ng[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function fx(e, t) {
      return zE(t).createTextNode(e);
    }
    function dx(e, t, a, i) {
      var u = ai(t, a);
      Dh(t, a);
      var s;
      switch (t) {
        case "dialog":
          rn("cancel", e), rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Id.length; f++)
            rn(Id[f], e);
          s = a;
          break;
        case "source":
          rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e), s = a;
          break;
        case "details":
          rn("toggle", e), s = a;
          break;
        case "input":
          So(e, a), s = go(e, a), rn("invalid", e);
          break;
        case "option":
          Ms(e, a), s = a;
          break;
        case "select":
          fv(e, a), s = zf(e, a), rn("invalid", e);
          break;
        case "textarea":
          dv(e, a), s = Uf(e, a), rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Hs(t, s), ox(t, e, i, s, u), t) {
        case "input":
          hl(e), Eo(e, a, !1);
          break;
        case "textarea":
          hl(e), vv(e);
          break;
        case "option":
          Nf(e, a);
          break;
        case "select":
          py(e, a);
          break;
        default:
          typeof s.onClick == "function" && Lh(e);
          break;
      }
    }
    function px(e, t, a, i, u) {
      Dh(t, i);
      var s = null, f, v;
      switch (t) {
        case "input":
          f = go(e, a), v = go(e, i), s = [];
          break;
        case "select":
          f = zf(e, a), v = zf(e, i), s = [];
          break;
        case "textarea":
          f = Uf(e, a), v = Uf(e, i), s = [];
          break;
        default:
          f = a, v = i, typeof f.onClick != "function" && typeof v.onClick == "function" && Lh(e);
          break;
      }
      Hs(t, v);
      var h, S, T = null;
      for (h in f)
        if (!(v.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === ns) {
            var O = f[h];
            for (S in O)
              O.hasOwnProperty(S) && (T || (T = {}), T[S] = "");
          } else
            h === Wd || h === ts || h === wh || h === Pu || h === OE || (it.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in v) {
        var _ = v[h], U = f != null ? f[h] : void 0;
        if (!(!v.hasOwnProperty(h) || _ === U || _ == null && U == null))
          if (h === ns)
            if (_ && Object.freeze(_), U) {
              for (S in U)
                U.hasOwnProperty(S) && (!_ || !_.hasOwnProperty(S)) && (T || (T = {}), T[S] = "");
              for (S in _)
                _.hasOwnProperty(S) && U[S] !== _[S] && (T || (T = {}), T[S] = _[S]);
            } else
              T || (s || (s = []), s.push(h, T)), T = _;
          else if (h === Wd) {
            var F = _ ? _[bh] : void 0, j = U ? U[bh] : void 0;
            F != null && j !== F && (s = s || []).push(h, F);
          } else
            h === ts ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(h, "" + _) : h === wh || h === Pu || (it.hasOwnProperty(h) ? (_ != null && (typeof _ != "function" && _h(h, _), h === "onScroll" && rn("scroll", e)), !s && U !== _ && (s = [])) : (s = s || []).push(h, _));
      }
      return T && (Ro(T, v[ns]), (s = s || []).push(ns, T)), s;
    }
    function vx(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Mf(e, u);
      var s = ai(a, i), f = ai(a, u);
      switch (sx(e, t, s, f), a) {
        case "input":
          cu(e, u);
          break;
        case "textarea":
          pv(e, u);
          break;
        case "select":
          vy(e, u);
          break;
      }
    }
    function hx(e) {
      {
        var t = e.toLowerCase();
        return Vs.hasOwnProperty(t) && Vs[t] || null;
      }
    }
    function mx(e, t, a, i, u, s, f) {
      var v, h;
      switch (v = ai(t, a), Dh(t, a), t) {
        case "dialog":
          rn("cancel", e), rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e);
          break;
        case "video":
        case "audio":
          for (var S = 0; S < Id.length; S++)
            rn(Id[S], e);
          break;
        case "source":
          rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e);
          break;
        case "details":
          rn("toggle", e);
          break;
        case "input":
          So(e, a), rn("invalid", e);
          break;
        case "option":
          Ms(e, a);
          break;
        case "select":
          fv(e, a), rn("invalid", e);
          break;
        case "textarea":
          dv(e, a), rn("invalid", e);
          break;
      }
      Hs(t, a);
      {
        h = /* @__PURE__ */ new Set();
        for (var T = e.attributes, O = 0; O < T.length; O++) {
          var _ = T[O].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              h.add(T[O].name);
          }
        }
      }
      var U = null;
      for (var F in a)
        if (a.hasOwnProperty(F)) {
          var j = a[F];
          if (F === ts)
            typeof j == "string" ? e.textContent !== j && (a[Pu] !== !0 && Oh(e.textContent, j, s, f), U = [ts, j]) : typeof j == "number" && e.textContent !== "" + j && (a[Pu] !== !0 && Oh(e.textContent, j, s, f), U = [ts, "" + j]);
          else if (it.hasOwnProperty(F))
            j != null && (typeof j != "function" && _h(F, j), F === "onScroll" && rn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var me = void 0, Be = v && Pe ? null : Aa(F);
            if (a[Pu] !== !0) {
              if (!(F === wh || F === Pu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              F === "value" || F === "checked" || F === "selected")) {
                if (F === Wd) {
                  var Me = e.innerHTML, gt = j ? j[bh] : void 0;
                  if (gt != null) {
                    var ht = NE(e, gt);
                    ht !== Me && Gd(F, Me, ht);
                  }
                } else if (F === ns) {
                  if (h.delete(F), ME) {
                    var M = Ty(j);
                    me = e.getAttribute("style"), M !== me && Gd(F, me, M);
                  }
                } else if (v && !Pe)
                  h.delete(F.toLowerCase()), me = Rs(e, F, j), j !== me && Gd(F, me, j);
                else if (!Rn(F, Be, v) && !an(F, j, Be, v)) {
                  var B = !1;
                  if (Be !== null)
                    h.delete(Be.attributeName), me = uo(e, F, j, Be);
                  else {
                    var N = i;
                    if (N === ni && (N = zs(t)), N === ni)
                      h.delete(F.toLowerCase());
                    else {
                      var ee = hx(F);
                      ee !== null && ee !== F && (B = !0, h.delete(ee)), h.delete(F);
                    }
                    me = Rs(e, F, j);
                  }
                  var ye = Pe;
                  !ye && j !== me && !B && Gd(F, me, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      h.size > 0 && a[Pu] !== !0 && LE(h), t) {
        case "input":
          hl(e), Eo(e, a, !0);
          break;
        case "textarea":
          hl(e), vv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Lh(e);
          break;
      }
      return U;
    }
    function yx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function rg(e, t) {
      {
        if (da)
          return;
        da = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ag(e, t) {
      {
        if (da)
          return;
        da = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ig(e, t, a) {
      {
        if (da)
          return;
        da = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function lg(e, t) {
      {
        if (t === "" || da)
          return;
        da = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function gx(e, t, a) {
      switch (t) {
        case "input":
          uv(e, a);
          return;
        case "textarea":
          Ff(e, a);
          return;
        case "select":
          hy(e, a);
          return;
      }
    }
    var qd = function() {
    }, Xd = function() {
    };
    {
      var Sx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], AE = [
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
      ], Ex = AE.concat(["button"]), Cx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], UE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Xd = function(e, t) {
        var a = pt({}, e || UE), i = {
          tag: t
        };
        return AE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Ex.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Sx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Tx = function(e, t) {
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
            return Cx.indexOf(t) === -1;
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
      }, Rx = function(e, t) {
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
      }, FE = {};
      qd = function(e, t, a) {
        a = a || UE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Tx(e, u) ? null : i, f = s ? null : Rx(e, a), v = s || f;
        if (v) {
          var h = v.tag, S = !!s + "|" + e + "|" + h;
          if (!FE[S]) {
            FE[S] = !0;
            var T = e, O = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", O = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var _ = "";
              h === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, h, O, _);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, h);
          }
        }
      };
    }
    var Mh = "suppressHydrationWarning", Nh = "$", zh = "/$", Kd = "$?", Zd = "$!", xx = "style", ug = null, og = null;
    function wx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ba:
        case ml: {
          t = i === ba ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Vf(null, "");
          break;
        }
        default: {
          var s = i === Sn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Vf(f, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), h = Xd(null, v);
        return {
          namespace: a,
          ancestorInfo: h
        };
      }
    }
    function bx(e, t, a) {
      {
        var i = e, u = Vf(i.namespace, t), s = Xd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function IO(e) {
      return e;
    }
    function Dx(e) {
      ug = $r(), og = BR();
      var t = null;
      return Hn(!1), t;
    }
    function _x(e) {
      PR(og), Hn(ug), ug = null, og = null;
    }
    function kx(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (qd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, h = Xd(f.ancestorInfo, e);
          qd(null, v, h);
        }
        s = f.namespace;
      }
      var S = cx(e, t, a, s);
      return tp(u, S), mg(S, t), S;
    }
    function Ox(e, t) {
      e.appendChild(t);
    }
    function Lx(e, t, a, i, u) {
      switch (dx(e, t, a, i), t) {
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
    function Mx(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, h = Xd(f.ancestorInfo, t);
          qd(null, v, h);
        }
      }
      return px(e, t, a, i);
    }
    function sg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Nx(e, t, a, i) {
      {
        var u = a;
        qd(null, e, u.ancestorInfo);
      }
      var s = fx(e, t);
      return tp(i, s), s;
    }
    function zx() {
      var e = window.event;
      return e === void 0 ? di : dr(e.type);
    }
    var cg = typeof setTimeout == "function" ? setTimeout : void 0, Ax = typeof clearTimeout == "function" ? clearTimeout : void 0, fg = -1, HE = typeof Promise == "function" ? Promise : void 0, Ux = typeof queueMicrotask == "function" ? queueMicrotask : typeof HE < "u" ? function(e) {
      return HE.resolve(null).then(e).catch(Fx);
    } : cg;
    function Fx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Hx(e, t, a, i) {
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
    function Vx(e, t, a, i, u, s) {
      vx(e, t, a, i, u), mg(e, u);
    }
    function VE(e) {
      Us(e, "");
    }
    function jx(e, t, a) {
      e.nodeValue = a;
    }
    function Bx(e, t) {
      e.appendChild(t);
    }
    function Px(e, t) {
      var a;
      e.nodeType === Sn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Lh(a);
    }
    function $x(e, t, a) {
      e.insertBefore(t, a);
    }
    function Ix(e, t, a) {
      e.nodeType === Sn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Yx(e, t) {
      e.removeChild(t);
    }
    function Qx(e, t) {
      e.nodeType === Sn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function dg(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Sn) {
          var s = u.data;
          if (s === zh)
            if (i === 0) {
              e.removeChild(u), vt(t);
              return;
            } else
              i--;
          else
            (s === Nh || s === Kd || s === Zd) && i++;
        }
        a = u;
      } while (a);
      vt(t);
    }
    function Wx(e, t) {
      e.nodeType === Sn ? dg(e.parentNode, t) : e.nodeType === Rr && dg(e, t), vt(e);
    }
    function Gx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function qx(e) {
      e.nodeValue = "";
    }
    function Xx(e, t) {
      e = e;
      var a = t[xx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Fs("display", i);
    }
    function Kx(e, t) {
      e.nodeValue = t;
    }
    function Zx(e) {
      e.nodeType === Rr ? e.textContent = "" : e.nodeType === ba && e.documentElement && e.removeChild(e.documentElement);
    }
    function Jx(e, t, a) {
      return e.nodeType !== Rr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ew(e, t) {
      return t === "" || e.nodeType !== ri ? null : e;
    }
    function tw(e) {
      return e.nodeType !== Sn ? null : e;
    }
    function jE(e) {
      return e.data === Kd;
    }
    function pg(e) {
      return e.data === Zd;
    }
    function nw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function rw(e, t) {
      e._reactRetry = t;
    }
    function Ah(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Rr || t === ri)
          break;
        if (t === Sn) {
          var a = e.data;
          if (a === Nh || a === Zd || a === Kd)
            break;
          if (a === zh)
            return null;
        }
      }
      return e;
    }
    function Jd(e) {
      return Ah(e.nextSibling);
    }
    function aw(e) {
      return Ah(e.firstChild);
    }
    function iw(e) {
      return Ah(e.firstChild);
    }
    function lw(e) {
      return Ah(e.nextSibling);
    }
    function uw(e, t, a, i, u, s, f) {
      tp(s, e), mg(e, a);
      var v;
      {
        var h = u;
        v = h.namespace;
      }
      var S = (s.mode & ct) !== $e;
      return mx(e, t, a, v, i, S, f);
    }
    function ow(e, t, a, i) {
      return tp(a, e), a.mode & ct, yx(e, t);
    }
    function sw(e, t) {
      tp(t, e);
    }
    function cw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === zh) {
            if (a === 0)
              return Jd(t);
            a--;
          } else
            (i === Nh || i === Zd || i === Kd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function BE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Nh || i === Zd || i === Kd) {
            if (a === 0)
              return t;
            a--;
          } else
            i === zh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function fw(e) {
      vt(e);
    }
    function dw(e) {
      vt(e);
    }
    function pw(e) {
      return e !== "head" && e !== "body";
    }
    function vw(e, t, a, i) {
      var u = !0;
      Oh(t.nodeValue, a, i, u);
    }
    function hw(e, t, a, i, u, s) {
      if (t[Mh] !== !0) {
        var f = !0;
        Oh(i.nodeValue, u, s, f);
      }
    }
    function mw(e, t) {
      t.nodeType === Rr ? rg(e, t) : t.nodeType === Sn || ag(e, t);
    }
    function yw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Rr ? rg(a, t) : t.nodeType === Sn || ag(a, t));
      }
    }
    function gw(e, t, a, i, u) {
      (u || t[Mh] !== !0) && (i.nodeType === Rr ? rg(a, i) : i.nodeType === Sn || ag(a, i));
    }
    function Sw(e, t, a) {
      ig(e, t);
    }
    function Ew(e, t) {
      lg(e, t);
    }
    function Cw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ig(i, t);
      }
    }
    function Tw(e, t) {
      {
        var a = e.parentNode;
        a !== null && lg(a, t);
      }
    }
    function Rw(e, t, a, i, u, s) {
      (s || t[Mh] !== !0) && ig(a, i);
    }
    function xw(e, t, a, i, u) {
      (u || t[Mh] !== !0) && lg(a, i);
    }
    function ww(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function bw(e) {
      Yd(e);
    }
    var $c = Math.random().toString(36).slice(2), Ic = "__reactFiber$" + $c, vg = "__reactProps$" + $c, ep = "__reactContainer$" + $c, hg = "__reactEvents$" + $c, Dw = "__reactListeners$" + $c, _w = "__reactHandles$" + $c;
    function kw(e) {
      delete e[Ic], delete e[vg], delete e[hg], delete e[Dw], delete e[_w];
    }
    function tp(e, t) {
      t[Ic] = e;
    }
    function Uh(e, t) {
      t[ep] = e;
    }
    function PE(e) {
      e[ep] = null;
    }
    function np(e) {
      return !!e[ep];
    }
    function rs(e) {
      var t = e[Ic];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[ep] || a[Ic], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = BE(e); u !== null; ) {
              var s = u[Ic];
              if (s)
                return s;
              u = BE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function $u(e) {
      var t = e[Ic] || e[ep];
      return t && (t.tag === ie || t.tag === Re || t.tag === Y || t.tag === I) ? t : null;
    }
    function Yc(e) {
      if (e.tag === ie || e.tag === Re)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Fh(e) {
      return e[vg] || null;
    }
    function mg(e, t) {
      e[vg] = t;
    }
    function Ow(e) {
      var t = e[hg];
      return t === void 0 && (t = e[hg] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, IE = m.ReactDebugCurrentFrame;
    function Hh(e) {
      if (e) {
        var t = e._owner, a = fo(e.type, e._source, t ? t.type : null);
        IE.setExtraStackFrame(a);
      } else
        IE.setExtraStackFrame(null);
    }
    function yi(e, t, a, i, u) {
      {
        var s = Function.call.bind(mn);
        for (var f in e)
          if (s(e, f)) {
            var v = void 0;
            try {
              if (typeof e[f] != "function") {
                var h = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              v = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              v = S;
            }
            v && !(v instanceof Error) && (Hh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), Hh(null)), v instanceof Error && !(v.message in $E) && ($E[v.message] = !0, Hh(u), g("Failed %s type: %s", a, v.message), Hh(null));
          }
      }
    }
    var yg = [], Vh;
    Vh = [];
    var Il = -1;
    function Iu(e) {
      return {
        current: e
      };
    }
    function Mr(e, t) {
      if (Il < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Vh[Il] && g("Unexpected Fiber popped."), e.current = yg[Il], yg[Il] = null, Vh[Il] = null, Il--;
    }
    function Nr(e, t, a) {
      Il++, yg[Il] = e.current, Vh[Il] = a, e.current = t;
    }
    var gg;
    gg = {};
    var La = {};
    Object.freeze(La);
    var Yl = Iu(La), Ji = Iu(!1), Sg = La;
    function Qc(e, t, a) {
      return a && el(t) ? Sg : Yl.current;
    }
    function YE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Wc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return La;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var v = rt(e) || "Unknown";
          yi(i, s, "context", v);
        }
        return u && YE(e, t, s), s;
      }
    }
    function jh() {
      return Ji.current;
    }
    function el(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Bh(e) {
      Mr(Ji, e), Mr(Yl, e);
    }
    function Eg(e) {
      Mr(Ji, e), Mr(Yl, e);
    }
    function QE(e, t, a) {
      {
        if (Yl.current !== La)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Nr(Yl, t, e), Nr(Ji, a, e);
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = rt(e) || "Unknown";
            gg[s] || (gg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var v in f)
          if (!(v in u))
            throw new Error((rt(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var h = rt(e) || "Unknown";
          yi(u, f, "child context", h);
        }
        return pt({}, a, f);
      }
    }
    function Ph(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || La;
        return Sg = Yl.current, Nr(Yl, a, e), Nr(Ji, Ji.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WE(e, t, Sg);
          i.__reactInternalMemoizedMergedChildContext = u, Mr(Ji, e), Mr(Yl, e), Nr(Yl, u, e), Nr(Ji, a, e);
        } else
          Mr(Ji, e), Nr(Ji, a, e);
      }
    }
    function Lw(e) {
      {
        if (!id(e) || e.tag !== G)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case I:
              return t.stateNode.context;
            case G: {
              var a = t.type;
              if (el(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Yu = 0, $h = 1, Ql = null, Cg = !1, Tg = !1;
    function qE(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    function Mw(e) {
      Cg = !0, qE(e);
    }
    function XE() {
      Cg && Qu();
    }
    function Qu() {
      if (!Tg && Ql !== null) {
        Tg = !0;
        var e = 0, t = oa();
        try {
          var a = !0, i = Ql;
          for (Dn(ar); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Ql = null, Cg = !1;
        } catch (s) {
          throw Ql !== null && (Ql = Ql.slice(e + 1)), Gs(Xs, Qu), s;
        } finally {
          Dn(t), Tg = !1;
        }
      }
      return null;
    }
    var Gc = [], qc = 0, Ih = null, Yh = 0, Ia = [], Ya = 0, as = null, Wl = 1, Gl = "";
    function Nw(e) {
      return ls(), (e.flags & nd) !== He;
    }
    function zw(e) {
      return ls(), Yh;
    }
    function Aw() {
      var e = Gl, t = Wl, a = t & ~Uw(t);
      return a.toString(32) + e;
    }
    function is(e, t) {
      ls(), Gc[qc++] = Yh, Gc[qc++] = Ih, Ih = e, Yh = t;
    }
    function KE(e, t, a) {
      ls(), Ia[Ya++] = Wl, Ia[Ya++] = Gl, Ia[Ya++] = as, as = e;
      var i = Wl, u = Gl, s = Qh(i) - 1, f = i & ~(1 << s), v = a + 1, h = Qh(t) + s;
      if (h > 30) {
        var S = s - s % 5, T = (1 << S) - 1, O = (f & T).toString(32), _ = f >> S, U = s - S, F = Qh(t) + U, j = v << U, me = j | _, Be = O + u;
        Wl = 1 << F | me, Gl = Be;
      } else {
        var Me = v << s, gt = Me | f, ht = u;
        Wl = 1 << h | gt, Gl = ht;
      }
    }
    function Rg(e) {
      ls();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        is(e, a), KE(e, a, i);
      }
    }
    function Qh(e) {
      return 32 - nc(e);
    }
    function Uw(e) {
      return 1 << Qh(e) - 1;
    }
    function xg(e) {
      for (; e === Ih; )
        Ih = Gc[--qc], Gc[qc] = null, Yh = Gc[--qc], Gc[qc] = null;
      for (; e === as; )
        as = Ia[--Ya], Ia[Ya] = null, Gl = Ia[--Ya], Ia[Ya] = null, Wl = Ia[--Ya], Ia[Ya] = null;
    }
    function Fw() {
      return ls(), as !== null ? {
        id: Wl,
        overflow: Gl
      } : null;
    }
    function Hw(e, t) {
      ls(), Ia[Ya++] = Wl, Ia[Ya++] = Gl, Ia[Ya++] = as, Wl = t.id, Gl = t.overflow, as = e;
    }
    function ls() {
      vr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var pr = null, Qa = null, gi = !1, us = !1, Wu = null;
    function Vw() {
      gi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ZE() {
      us = !0;
    }
    function jw() {
      return us;
    }
    function Bw(e) {
      var t = e.stateNode.containerInfo;
      return Qa = iw(t), pr = e, gi = !0, Wu = null, us = !1, !0;
    }
    function Pw(e, t, a) {
      return Qa = lw(t), pr = e, gi = !0, Wu = null, us = !1, a !== null && Hw(e, a), !0;
    }
    function JE(e, t) {
      switch (e.tag) {
        case I: {
          mw(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & ct) !== $e;
          gw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Y: {
          var i = e.memoizedState;
          i.dehydrated !== null && yw(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      JE(e, t);
      var a = Y_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= bt) : i.push(a);
    }
    function wg(e, t) {
      {
        if (us)
          return;
        switch (e.tag) {
          case I: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, Sw(a, i);
                break;
              case Re:
                var u = t.pendingProps;
                Ew(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case ie: {
                var h = t.type, S = t.pendingProps, T = (e.mode & ct) !== $e;
                Rw(
                  s,
                  f,
                  v,
                  h,
                  S,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case Re: {
                var O = t.pendingProps, _ = (e.mode & ct) !== $e;
                xw(
                  s,
                  f,
                  v,
                  O,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case Y: {
            var U = e.memoizedState, F = U.dehydrated;
            if (F !== null)
              switch (t.tag) {
                case ie:
                  var j = t.type;
                  t.pendingProps, Cw(F, j);
                  break;
                case Re:
                  var me = t.pendingProps;
                  Tw(F, me);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function tC(e, t) {
      t.flags = t.flags & ~ra | Yt, wg(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = Jx(t, a);
          return i !== null ? (e.stateNode = i, pr = e, Qa = aw(i), !0) : !1;
        }
        case Re: {
          var u = e.pendingProps, s = ew(t, u);
          return s !== null ? (e.stateNode = s, pr = e, Qa = null, !0) : !1;
        }
        case Y: {
          var f = tw(t);
          if (f !== null) {
            var v = {
              dehydrated: f,
              treeContext: Fw(),
              retryLane: Or
            };
            e.memoizedState = v;
            var h = Q_(f);
            return h.return = e, e.child = h, pr = e, Qa = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function bg(e) {
      return (e.mode & ct) !== $e && (e.flags & Xe) === He;
    }
    function Dg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function _g(e) {
      if (gi) {
        var t = Qa;
        if (!t) {
          bg(e) && (wg(pr, e), Dg()), tC(pr, e), gi = !1, pr = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          bg(e) && (wg(pr, e), Dg()), t = Jd(a);
          var i = pr;
          if (!t || !nC(e, t)) {
            tC(pr, e), gi = !1, pr = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function $w(e, t, a) {
      var i = e.stateNode, u = !us, s = uw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Iw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ow(t, a, e);
      if (i) {
        var u = pr;
        if (u !== null)
          switch (u.tag) {
            case I: {
              var s = u.stateNode.containerInfo, f = (u.mode & ct) !== $e;
              vw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var v = u.type, h = u.memoizedProps, S = u.stateNode, T = (u.mode & ct) !== $e;
              hw(
                v,
                h,
                S,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function Yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      sw(a, e);
    }
    function Qw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return cw(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== I && t.tag !== Y; )
        t = t.return;
      pr = t;
    }
    function Wh(e) {
      if (e !== pr)
        return !1;
      if (!gi)
        return rC(e), gi = !0, !1;
      if (e.tag !== I && (e.tag !== ie || pw(e.type) && !sg(e.type, e.memoizedProps))) {
        var t = Qa;
        if (t)
          if (bg(e))
            aC(e), Dg();
          else
            for (; t; )
              eC(e, t), t = Jd(t);
      }
      return rC(e), e.tag === Y ? Qa = Qw(e) : Qa = pr ? Jd(e.stateNode) : null, !0;
    }
    function Ww() {
      return gi && Qa !== null;
    }
    function aC(e) {
      for (var t = Qa; t; )
        JE(e, t), t = Jd(t);
    }
    function Xc() {
      pr = null, Qa = null, gi = !1, us = !1;
    }
    function iC() {
      Wu !== null && (J1(Wu), Wu = null);
    }
    function vr() {
      return gi;
    }
    function kg(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    var Gw = m.ReactCurrentBatchConfig, qw = null;
    function Xw() {
      return Gw.transition;
    }
    var Si = {
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
      var Kw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tn && (t = a), a = a.return;
        return t;
      }, os = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, rp = [], ap = [], ip = [], lp = [], up = [], op = [], ss = /* @__PURE__ */ new Set();
      Si.recordUnsafeLifecycleWarnings = function(e, t) {
        ss.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && rp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillMount == "function" && ap.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ip.push(e), e.mode & tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && up.push(e), e.mode & tn && typeof t.UNSAFE_componentWillUpdate == "function" && op.push(e));
      }, Si.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        rp.length > 0 && (rp.forEach(function(_) {
          e.add(rt(_) || "Component"), ss.add(_.type);
        }), rp = []);
        var t = /* @__PURE__ */ new Set();
        ap.length > 0 && (ap.forEach(function(_) {
          t.add(rt(_) || "Component"), ss.add(_.type);
        }), ap = []);
        var a = /* @__PURE__ */ new Set();
        ip.length > 0 && (ip.forEach(function(_) {
          a.add(rt(_) || "Component"), ss.add(_.type);
        }), ip = []);
        var i = /* @__PURE__ */ new Set();
        lp.length > 0 && (lp.forEach(function(_) {
          i.add(rt(_) || "Component"), ss.add(_.type);
        }), lp = []);
        var u = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(_) {
          u.add(rt(_) || "Component"), ss.add(_.type);
        }), up = []);
        var s = /* @__PURE__ */ new Set();
        if (op.length > 0 && (op.forEach(function(_) {
          s.add(rt(_) || "Component"), ss.add(_.type);
        }), op = []), t.size > 0) {
          var f = os(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var v = os(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (s.size > 0) {
          var h = os(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, h);
        }
        if (e.size > 0) {
          var S = os(e);
          x(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (a.size > 0) {
          var T = os(a);
          x(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (u.size > 0) {
          var O = os(u);
          x(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var Gh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      Si.recordLegacyContextWarning = function(e, t) {
        var a = Kw(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lC.has(e.type)) {
          var i = Gh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Gh.set(a, i)), i.push(e));
        }
      }, Si.flushLegacyContextWarning = function() {
        Gh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(rt(s) || "Component"), lC.add(s.type);
            });
            var u = os(i);
            try {
              At(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              xn();
            }
          }
        });
      }, Si.discardPendingWarnings = function() {
        rp = [], ap = [], ip = [], lp = [], up = [], op = [], Gh = /* @__PURE__ */ new Map();
      };
    }
    function Ei(e, t) {
      if (e && e.defaultProps) {
        var a = pt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Og = Iu(null), Lg;
    Lg = {};
    var qh = null, Kc = null, Mg = null, Xh = !1;
    function Kh() {
      qh = null, Kc = null, Mg = null, Xh = !1;
    }
    function uC() {
      Xh = !0;
    }
    function oC() {
      Xh = !1;
    }
    function sC(e, t, a) {
      Nr(Og, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Lg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Lg;
    }
    function Ng(e, t) {
      var a = Og.current;
      Mr(Og, t), e._currentValue = a;
    }
    function zg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Nl(i.childLanes, t) ? u !== null && !Nl(u.childLanes, t) && (u.childLanes = ut(u.childLanes, t)) : (i.childLanes = ut(i.childLanes, t), u !== null && (u.childLanes = ut(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zw(e, t, a) {
      Jw(e, t, a);
    }
    function Jw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === G) {
                var v = bn(a), h = ql(It, v);
                h.tag = Jh;
                var S = i.updateQueue;
                if (S !== null) {
                  var T = S.shared, O = T.pending;
                  O === null ? h.next = h : (h.next = O.next, O.next = h), T.pending = h;
                }
              }
              i.lanes = ut(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = ut(_.lanes, a)), zg(i.return, a, e), s.lanes = ut(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Le)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ct) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = ut(U.lanes, a);
          var F = U.alternate;
          F !== null && (F.lanes = ut(F.lanes, a)), zg(U, a, e), u = i.sibling;
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
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Zc(e, t) {
      qh = e, Kc = null, Mg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Lr(a.lanes, t) && Tp(), a.firstContext = null);
      }
    }
    function jn(e) {
      Xh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Mg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Kc === null) {
          if (qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Kc = a, qh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          Kc = Kc.next = a;
      }
      return t;
    }
    var cs = null;
    function Ag(e) {
      cs === null ? cs = [e] : cs.push(e);
    }
    function eb() {
      if (cs !== null) {
        for (var e = 0; e < cs.length; e++) {
          var t = cs[e], a = t.interleaved;
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
        cs = null;
      }
    }
    function cC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Zh(e, i);
    }
    function tb(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function nb(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Zh(e, i);
    }
    function pa(e, t) {
      return Zh(e, t);
    }
    var rb = Zh;
    function Zh(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (Yt | ra)) !== He && fT(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ut(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (u.flags & (Yt | ra)) !== He && fT(e), i = u, u = u.return;
      if (i.tag === I) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var fC = 0, dC = 1, Jh = 2, Ug = 3, em = !1, Fg, tm;
    Fg = !1, tm = null;
    function Hg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function pC(e, t) {
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
    function ql(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: fC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Gu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (tm === u && !Fg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Fg = !0), r_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, rb(e, a);
      } else
        return nb(e, u, t, a);
    }
    function nm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (gd(a)) {
          var s = u.lanes;
          s = Ed(s, e.pendingLanes);
          var f = ut(s, a);
          u.lanes = f, _u(e, f);
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
              var S = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = S : (f.next = S, f = S), h = h.next;
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
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function ab(e, t, a, i, u, s) {
      switch (a.tag) {
        case dC: {
          var f = a.payload;
          if (typeof f == "function") {
            uC();
            var v = f.call(s, i, u);
            {
              if (e.mode & tn) {
                wn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  wn(!1);
                }
              }
              oC();
            }
            return v;
          }
          return f;
        }
        case Ug:
          e.flags = e.flags & ~An | Xe;
        case fC: {
          var h = a.payload, S;
          if (typeof h == "function") {
            uC(), S = h.call(s, i, u);
            {
              if (e.mode & tn) {
                wn(!0);
                try {
                  h.call(s, i, u);
                } finally {
                  wn(!1);
                }
              }
              oC();
            }
          } else
            S = h;
          return S == null ? i : pt({}, i, S);
        }
        case Jh:
          return em = !0, i;
      }
      return i;
    }
    function rm(e, t, a, i) {
      var u = e.updateQueue;
      em = !1, tm = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, v = u.shared.pending;
      if (v !== null) {
        u.shared.pending = null;
        var h = v, S = h.next;
        h.next = null, f === null ? s = S : f.next = S, f = h;
        var T = e.alternate;
        if (T !== null) {
          var O = T.updateQueue, _ = O.lastBaseUpdate;
          _ !== f && (_ === null ? O.firstBaseUpdate = S : _.next = S, O.lastBaseUpdate = h);
        }
      }
      if (s !== null) {
        var U = u.baseState, F = P, j = null, me = null, Be = null, Me = s;
        do {
          var gt = Me.lane, ht = Me.eventTime;
          if (Nl(i, gt)) {
            if (Be !== null) {
              var B = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                tag: Me.tag,
                payload: Me.payload,
                callback: Me.callback,
                next: null
              };
              Be = Be.next = B;
            }
            U = ab(e, u, Me, U, t, a);
            var N = Me.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            Me.lane !== mt) {
              e.flags |= Ha;
              var ee = u.effects;
              ee === null ? u.effects = [Me] : ee.push(Me);
            }
          } else {
            var M = {
              eventTime: ht,
              lane: gt,
              tag: Me.tag,
              payload: Me.payload,
              callback: Me.callback,
              next: null
            };
            Be === null ? (me = Be = M, j = U) : Be = Be.next = M, F = ut(F, gt);
          }
          if (Me = Me.next, Me === null) {
            if (v = u.shared.pending, v === null)
              break;
            var ye = v, de = ye.next;
            ye.next = null, Me = de, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        Be === null && (j = U), u.baseState = j, u.firstBaseUpdate = me, u.lastBaseUpdate = Be;
        var Ge = u.shared.interleaved;
        if (Ge !== null) {
          var nt = Ge;
          do
            F = ut(F, nt.lane), nt = nt.next;
          while (nt !== Ge);
        } else
          s === null && (u.shared.lanes = P);
        zp(F), e.lanes = F, e.memoizedState = U;
      }
      tm = null;
    }
    function ib(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function vC() {
      em = !1;
    }
    function am() {
      return em;
    }
    function hC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, ib(f, a));
        }
    }
    var jg = {}, mC = new p.Component().refs, Bg, Pg, $g, Ig, Yg, yC, im, Qg, Wg, Gg;
    {
      Bg = /* @__PURE__ */ new Set(), Pg = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), Ig = /* @__PURE__ */ new Set(), Qg = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set();
      var gC = /* @__PURE__ */ new Set();
      im = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          gC.has(a) || (gC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, yC = function(e, t) {
        if (t === void 0) {
          var a = Pt(e) || "Component";
          Yg.has(a) || (Yg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(jg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(jg);
    }
    function qg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & tn) {
          wn(!0);
          try {
            s = a(i, u);
          } finally {
            wn(!1);
          }
        }
        yC(t, s);
      }
      var f = s == null ? u : pt({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var v = e.updateQueue;
        v.baseState = f;
      }
    }
    var Xg = {
      isMounted: jr,
      enqueueSetState: function(e, t, a) {
        var i = ta(e), u = Qr(), s = no(i), f = ql(u, s);
        f.payload = t, a != null && (im(a, "setState"), f.callback = a);
        var v = Gu(i, f, s);
        v !== null && (Zn(v, i, s, u), nm(v, i, s)), Ii(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ta(e), u = Qr(), s = no(i), f = ql(u, s);
        f.tag = dC, f.payload = t, a != null && (im(a, "replaceState"), f.callback = a);
        var v = Gu(i, f, s);
        v !== null && (Zn(v, i, s, u), nm(v, i, s)), Ii(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ta(e), i = Qr(), u = no(a), s = ql(i, u);
        s.tag = Jh, t != null && (im(t, "forceUpdate"), s.callback = t);
        var f = Gu(a, s, u);
        f !== null && (Zn(f, a, u, i), nm(f, a, u)), vd(a, u);
      }
    };
    function SC(e, t, a, i, u, s, f) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var h = v.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & tn) {
            wn(!0);
            try {
              h = v.shouldComponentUpdate(i, s, f);
            } finally {
              wn(!1);
            }
          }
          h === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Pt(t) || "Component");
        }
        return h;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Fe(a, i) || !Fe(u, s) : !0;
    }
    function lb(e, t, a) {
      var i = e.stateNode;
      {
        var u = Pt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Wg.has(t) && (Wg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Pt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !$g.has(t) && ($g.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Pt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var v = i.state;
        v && (typeof v != "object" || Nn(v)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function EC(e, t) {
      t.updater = Xg, e.stateNode = t, gu(t, e), t._reactInternalInstance = jg;
    }
    function CC(e, t, a) {
      var i = !1, u = La, s = La, f = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Tf && f._context === void 0
        );
        if (!v && !Gg.has(t)) {
          Gg.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === Cf ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Pt(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = jn(f);
      else {
        u = Qc(e, t, !0);
        var S = t.contextTypes;
        i = S != null, s = i ? Wc(e, u) : La;
      }
      var T = new t(a, s);
      if (e.mode & tn) {
        wn(!0);
        try {
          T = new t(a, s);
        } finally {
          wn(!1);
        }
      }
      var O = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      EC(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var _ = Pt(t) || "Component";
          Pg.has(_) || (Pg.add(_), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, T.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var U = null, F = null, j = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? F = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (F = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), U !== null || F !== null || j !== null) {
            var me = Pt(t) || "Component", Be = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Ig.has(me) || (Ig.add(me), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, me, Be, U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && YE(e, u, s), T;
    }
    function ub(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", rt(e) || "Component"), Xg.enqueueReplaceState(t, t.state, null));
    }
    function TC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = rt(e) || "Component";
          Bg.has(s) || (Bg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Xg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Kg(e, t, a, i) {
      lb(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = mC, Hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = jn(s);
      else {
        var f = Qc(e, t, !0);
        u.context = Wc(e, f);
      }
      {
        if (u.state === a) {
          var v = Pt(t) || "Component";
          Qg.has(v) || (Qg.add(v), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & tn && Si.recordLegacyContextWarning(e, u), Si.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (qg(e, t, h, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (ub(e, u), rm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var S = lt;
        S |= wr, (e.mode & la) !== $e && (S |= br), e.flags |= S;
      }
    }
    function ob(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, v = t.contextType, h = La;
      if (typeof v == "object" && v !== null)
        h = jn(v);
      else {
        var S = Qc(e, t, !0);
        h = Wc(e, S);
      }
      var T = t.getDerivedStateFromProps, O = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !O && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== h) && TC(e, u, a, h), vC();
      var _ = e.memoizedState, U = u.state = _;
      if (rm(e, a, u, i), U = e.memoizedState, s === a && _ === U && !jh() && !am()) {
        if (typeof u.componentDidMount == "function") {
          var F = lt;
          F |= wr, (e.mode & la) !== $e && (F |= br), e.flags |= F;
        }
        return !1;
      }
      typeof T == "function" && (qg(e, t, T, a), U = e.memoizedState);
      var j = am() || SC(e, t, s, a, _, U, h);
      if (j) {
        if (!O && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var me = lt;
          me |= wr, (e.mode & la) !== $e && (me |= br), e.flags |= me;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Be = lt;
          Be |= wr, (e.mode & la) !== $e && (Be |= br), e.flags |= Be;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = h, j;
    }
    function sb(e, t, a, i, u) {
      var s = t.stateNode;
      pC(e, t);
      var f = t.memoizedProps, v = t.type === t.elementType ? f : Ei(t.type, f);
      s.props = v;
      var h = t.pendingProps, S = s.context, T = a.contextType, O = La;
      if (typeof T == "object" && T !== null)
        O = jn(T);
      else {
        var _ = Qc(t, a, !0);
        O = Wc(t, _);
      }
      var U = a.getDerivedStateFromProps, F = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !F && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || S !== O) && TC(t, s, i, O), vC();
      var j = t.memoizedState, me = s.state = j;
      if (rm(t, i, s, u), me = t.memoizedState, f === h && j === me && !jh() && !am() && !_e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= na), !1;
      typeof U == "function" && (qg(t, a, U, i), me = t.memoizedState);
      var Be = am() || SC(t, a, v, i, j, me, O) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      _e;
      return Be ? (!F && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, me, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, me, O)), typeof s.componentDidUpdate == "function" && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= na)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= na), t.memoizedProps = i, t.memoizedState = me), s.props = i, s.state = me, s.context = O, Be;
    }
    var Zg, Jg, eS, tS, nS, RC = function(e, t) {
    };
    Zg = !1, Jg = !1, eS = {}, tS = {}, nS = {}, RC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = rt(t) || "Component";
        tS[a] || (tS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & tn || ze) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = rt(e) || "Component";
          eS[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), eS[u] = !0);
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
          se(i, "ref");
          var S = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
            return t.ref;
          var T = function(O) {
            var _ = h.refs;
            _ === mC && (_ = h.refs = {}), O === null ? delete _[S] : _[S] = O;
          };
          return T._stringRef = S, T;
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
    function lm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function um(e) {
      {
        var t = rt(e) || "Component";
        if (nS[t])
          return;
        nS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function xC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function wC(e) {
      function t(M, B) {
        if (e) {
          var N = M.deletions;
          N === null ? (M.deletions = [B], M.flags |= bt) : N.push(B);
        }
      }
      function a(M, B) {
        if (!e)
          return null;
        for (var N = B; N !== null; )
          t(M, N), N = N.sibling;
        return null;
      }
      function i(M, B) {
        for (var N = /* @__PURE__ */ new Map(), ee = B; ee !== null; )
          ee.key !== null ? N.set(ee.key, ee) : N.set(ee.index, ee), ee = ee.sibling;
        return N;
      }
      function u(M, B) {
        var N = gs(M, B);
        return N.index = 0, N.sibling = null, N;
      }
      function s(M, B, N) {
        if (M.index = N, !e)
          return M.flags |= nd, B;
        var ee = M.alternate;
        if (ee !== null) {
          var ye = ee.index;
          return ye < B ? (M.flags |= Yt, B) : ye;
        } else
          return M.flags |= Yt, B;
      }
      function f(M) {
        return e && M.alternate === null && (M.flags |= Yt), M;
      }
      function v(M, B, N, ee) {
        if (B === null || B.tag !== Re) {
          var ye = k0(N, M.mode, ee);
          return ye.return = M, ye;
        } else {
          var de = u(B, N);
          return de.return = M, de;
        }
      }
      function h(M, B, N, ee) {
        var ye = N.type;
        if (ye === Ja)
          return T(M, B, N.props.children, ee, N.key);
        if (B !== null && (B.elementType === ye || // Keep this check inline so it only runs on the false path:
        hT(B, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === fr && xC(ye) === B.type)) {
          var de = u(B, N.props);
          return de.ref = sp(M, B, N), de.return = M, de._debugSource = N._source, de._debugOwner = N._owner, de;
        }
        var Ge = _0(N, M.mode, ee);
        return Ge.ref = sp(M, B, N), Ge.return = M, Ge;
      }
      function S(M, B, N, ee) {
        if (B === null || B.tag !== q || B.stateNode.containerInfo !== N.containerInfo || B.stateNode.implementation !== N.implementation) {
          var ye = O0(N, M.mode, ee);
          return ye.return = M, ye;
        } else {
          var de = u(B, N.children || []);
          return de.return = M, de;
        }
      }
      function T(M, B, N, ee, ye) {
        if (B === null || B.tag !== Ve) {
          var de = ao(N, M.mode, ee, ye);
          return de.return = M, de;
        } else {
          var Ge = u(B, N);
          return Ge.return = M, Ge;
        }
      }
      function O(M, B, N) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var ee = k0("" + B, M.mode, N);
          return ee.return = M, ee;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case ru: {
              var ye = _0(B, M.mode, N);
              return ye.ref = sp(M, null, B), ye.return = M, ye;
            }
            case Ta: {
              var de = O0(B, M.mode, N);
              return de.return = M, de;
            }
            case fr: {
              var Ge = B._payload, nt = B._init;
              return O(M, nt(Ge), N);
            }
          }
          if (Nn(B) || ei(B)) {
            var Ft = ao(B, M.mode, N, null);
            return Ft.return = M, Ft;
          }
          lm(M, B);
        }
        return typeof B == "function" && um(M), null;
      }
      function _(M, B, N, ee) {
        var ye = B !== null ? B.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return ye !== null ? null : v(M, B, "" + N, ee);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ru:
              return N.key === ye ? h(M, B, N, ee) : null;
            case Ta:
              return N.key === ye ? S(M, B, N, ee) : null;
            case fr: {
              var de = N._payload, Ge = N._init;
              return _(M, B, Ge(de), ee);
            }
          }
          if (Nn(N) || ei(N))
            return ye !== null ? null : T(M, B, N, ee, null);
          lm(M, N);
        }
        return typeof N == "function" && um(M), null;
      }
      function U(M, B, N, ee, ye) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var de = M.get(N) || null;
          return v(B, de, "" + ee, ye);
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case ru: {
              var Ge = M.get(ee.key === null ? N : ee.key) || null;
              return h(B, Ge, ee, ye);
            }
            case Ta: {
              var nt = M.get(ee.key === null ? N : ee.key) || null;
              return S(B, nt, ee, ye);
            }
            case fr:
              var Ft = ee._payload, Tt = ee._init;
              return U(M, B, N, Tt(Ft), ye);
          }
          if (Nn(ee) || ei(ee)) {
            var On = M.get(N) || null;
            return T(B, On, ee, ye, null);
          }
          lm(B, ee);
        }
        return typeof ee == "function" && um(B), null;
      }
      function F(M, B, N) {
        {
          if (typeof M != "object" || M === null)
            return B;
          switch (M.$$typeof) {
            case ru:
            case Ta:
              RC(M, N);
              var ee = M.key;
              if (typeof ee != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(ee);
                break;
              }
              if (!B.has(ee)) {
                B.add(ee);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ee);
              break;
            case fr:
              var ye = M._payload, de = M._init;
              F(de(ye), B, N);
              break;
          }
        }
        return B;
      }
      function j(M, B, N, ee) {
        for (var ye = null, de = 0; de < N.length; de++) {
          var Ge = N[de];
          ye = F(Ge, ye, M);
        }
        for (var nt = null, Ft = null, Tt = B, On = 0, Rt = 0, Tn = null; Tt !== null && Rt < N.length; Rt++) {
          Tt.index > Rt ? (Tn = Tt, Tt = null) : Tn = Tt.sibling;
          var Ar = _(M, Tt, N[Rt], ee);
          if (Ar === null) {
            Tt === null && (Tt = Tn);
            break;
          }
          e && Tt && Ar.alternate === null && t(M, Tt), On = s(Ar, On, Rt), Ft === null ? nt = Ar : Ft.sibling = Ar, Ft = Ar, Tt = Tn;
        }
        if (Rt === N.length) {
          if (a(M, Tt), vr()) {
            var Cr = Rt;
            is(M, Cr);
          }
          return nt;
        }
        if (Tt === null) {
          for (; Rt < N.length; Rt++) {
            var Na = O(M, N[Rt], ee);
            Na !== null && (On = s(Na, On, Rt), Ft === null ? nt = Na : Ft.sibling = Na, Ft = Na);
          }
          if (vr()) {
            var Wr = Rt;
            is(M, Wr);
          }
          return nt;
        }
        for (var Gr = i(M, Tt); Rt < N.length; Rt++) {
          var Ur = U(Gr, M, Rt, N[Rt], ee);
          Ur !== null && (e && Ur.alternate !== null && Gr.delete(Ur.key === null ? Rt : Ur.key), On = s(Ur, On, Rt), Ft === null ? nt = Ur : Ft.sibling = Ur, Ft = Ur);
        }
        if (e && Gr.forEach(function(mf) {
          return t(M, mf);
        }), vr()) {
          var tu = Rt;
          is(M, tu);
        }
        return nt;
      }
      function me(M, B, N, ee) {
        var ye = ei(N);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (Jg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Jg = !0), N.entries === ye && (Zg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zg = !0);
          var de = ye.call(N);
          if (de)
            for (var Ge = null, nt = de.next(); !nt.done; nt = de.next()) {
              var Ft = nt.value;
              Ge = F(Ft, Ge, M);
            }
        }
        var Tt = ye.call(N);
        if (Tt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var On = null, Rt = null, Tn = B, Ar = 0, Cr = 0, Na = null, Wr = Tt.next(); Tn !== null && !Wr.done; Cr++, Wr = Tt.next()) {
          Tn.index > Cr ? (Na = Tn, Tn = null) : Na = Tn.sibling;
          var Gr = _(M, Tn, Wr.value, ee);
          if (Gr === null) {
            Tn === null && (Tn = Na);
            break;
          }
          e && Tn && Gr.alternate === null && t(M, Tn), Ar = s(Gr, Ar, Cr), Rt === null ? On = Gr : Rt.sibling = Gr, Rt = Gr, Tn = Na;
        }
        if (Wr.done) {
          if (a(M, Tn), vr()) {
            var Ur = Cr;
            is(M, Ur);
          }
          return On;
        }
        if (Tn === null) {
          for (; !Wr.done; Cr++, Wr = Tt.next()) {
            var tu = O(M, Wr.value, ee);
            tu !== null && (Ar = s(tu, Ar, Cr), Rt === null ? On = tu : Rt.sibling = tu, Rt = tu);
          }
          if (vr()) {
            var mf = Cr;
            is(M, mf);
          }
          return On;
        }
        for (var Vp = i(M, Tn); !Wr.done; Cr++, Wr = Tt.next()) {
          var ol = U(Vp, M, Cr, Wr.value, ee);
          ol !== null && (e && ol.alternate !== null && Vp.delete(ol.key === null ? Cr : ol.key), Ar = s(ol, Ar, Cr), Rt === null ? On = ol : Rt.sibling = ol, Rt = ol);
        }
        if (e && Vp.forEach(function(Rk) {
          return t(M, Rk);
        }), vr()) {
          var Tk = Cr;
          is(M, Tk);
        }
        return On;
      }
      function Be(M, B, N, ee) {
        if (B !== null && B.tag === Re) {
          a(M, B.sibling);
          var ye = u(B, N);
          return ye.return = M, ye;
        }
        a(M, B);
        var de = k0(N, M.mode, ee);
        return de.return = M, de;
      }
      function Me(M, B, N, ee) {
        for (var ye = N.key, de = B; de !== null; ) {
          if (de.key === ye) {
            var Ge = N.type;
            if (Ge === Ja) {
              if (de.tag === Ve) {
                a(M, de.sibling);
                var nt = u(de, N.props.children);
                return nt.return = M, nt._debugSource = N._source, nt._debugOwner = N._owner, nt;
              }
            } else if (de.elementType === Ge || // Keep this check inline so it only runs on the false path:
            hT(de, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ge == "object" && Ge !== null && Ge.$$typeof === fr && xC(Ge) === de.type) {
              a(M, de.sibling);
              var Ft = u(de, N.props);
              return Ft.ref = sp(M, de, N), Ft.return = M, Ft._debugSource = N._source, Ft._debugOwner = N._owner, Ft;
            }
            a(M, de);
            break;
          } else
            t(M, de);
          de = de.sibling;
        }
        if (N.type === Ja) {
          var Tt = ao(N.props.children, M.mode, ee, N.key);
          return Tt.return = M, Tt;
        } else {
          var On = _0(N, M.mode, ee);
          return On.ref = sp(M, B, N), On.return = M, On;
        }
      }
      function gt(M, B, N, ee) {
        for (var ye = N.key, de = B; de !== null; ) {
          if (de.key === ye)
            if (de.tag === q && de.stateNode.containerInfo === N.containerInfo && de.stateNode.implementation === N.implementation) {
              a(M, de.sibling);
              var Ge = u(de, N.children || []);
              return Ge.return = M, Ge;
            } else {
              a(M, de);
              break;
            }
          else
            t(M, de);
          de = de.sibling;
        }
        var nt = O0(N, M.mode, ee);
        return nt.return = M, nt;
      }
      function ht(M, B, N, ee) {
        var ye = typeof N == "object" && N !== null && N.type === Ja && N.key === null;
        if (ye && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ru:
              return f(Me(M, B, N, ee));
            case Ta:
              return f(gt(M, B, N, ee));
            case fr:
              var de = N._payload, Ge = N._init;
              return ht(M, B, Ge(de), ee);
          }
          if (Nn(N))
            return j(M, B, N, ee);
          if (ei(N))
            return me(M, B, N, ee);
          lm(M, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(Be(M, B, "" + N, ee)) : (typeof N == "function" && um(M), a(M, B));
      }
      return ht;
    }
    var Jc = wC(!0), bC = wC(!1);
    function cb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = gs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = gs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function fb(e, t) {
      for (var a = e.child; a !== null; )
        j_(a, t), a = a.sibling;
    }
    var cp = {}, qu = Iu(cp), fp = Iu(cp), om = Iu(cp);
    function sm(e) {
      if (e === cp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function DC() {
      var e = sm(om.current);
      return e;
    }
    function rS(e, t) {
      Nr(om, t, e), Nr(fp, e, e), Nr(qu, cp, e);
      var a = wx(t);
      Mr(qu, e), Nr(qu, a, e);
    }
    function ef(e) {
      Mr(qu, e), Mr(fp, e), Mr(om, e);
    }
    function aS() {
      var e = sm(qu.current);
      return e;
    }
    function _C(e) {
      sm(om.current);
      var t = sm(qu.current), a = bx(t, e.type);
      t !== a && (Nr(fp, e, e), Nr(qu, a, e));
    }
    function iS(e) {
      fp.current === e && (Mr(qu, e), Mr(fp, e));
    }
    var db = 0, kC = 1, OC = 1, dp = 2, Ci = Iu(db);
    function lS(e, t) {
      return (e & t) !== 0;
    }
    function tf(e) {
      return e & kC;
    }
    function uS(e, t) {
      return e & kC | t;
    }
    function pb(e, t) {
      return e | t;
    }
    function Xu(e, t) {
      Nr(Ci, t, e);
    }
    function nf(e) {
      Mr(Ci, e);
    }
    function vb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function cm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Y) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || jE(i) || pg(i))
              return t;
          }
        } else if (t.tag === ot && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Xe) !== He;
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
    var va = (
      /*   */
      0
    ), Yn = (
      /* */
      1
    ), tl = (
      /*  */
      2
    ), Qn = (
      /*    */
      4
    ), hr = (
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
    function hb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var he = m.ReactCurrentDispatcher, pp = m.ReactCurrentBatchConfig, cS, rf;
    cS = /* @__PURE__ */ new Set();
    var fs = P, Ut = null, Wn = null, Gn = null, fm = !1, vp = !1, hp = 0, mb = 0, yb = 25, W = null, Wa = null, Ku = -1, fS = !1;
    function Ot() {
      {
        var e = W;
        Wa === null ? Wa = [e] : Wa.push(e);
      }
    }
    function oe() {
      {
        var e = W;
        Wa !== null && (Ku++, Wa[Ku] !== e && gb(e));
      }
    }
    function af(e) {
      e != null && !Nn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", W, typeof e);
    }
    function gb(e) {
      {
        var t = rt(Ut);
        if (!cS.has(t) && (cS.add(t), Wa !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ku; u++) {
            for (var s = Wa[u], f = u === Ku ? e : s, v = u + 1 + ". " + s; v.length < i; )
              v += " ";
            v += f + `
`, a += v;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function zr() {
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
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", W), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, W, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!we(e[a], t[a]))
          return !1;
      return !0;
    }
    function lf(e, t, a, i, u, s) {
      fs = s, Ut = t, Wa = e !== null ? e._debugHookTypes : null, Ku = -1, fS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? he.current = ZC : Wa !== null ? he.current = KC : he.current = XC;
      var f = a(i, u);
      if (vp) {
        var v = 0;
        do {
          if (vp = !1, hp = 0, v >= yb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, fS = !1, Wn = null, Gn = null, t.updateQueue = null, Ku = -1, he.current = JC, f = a(i, u);
        } while (vp);
      }
      he.current = xm, t._debugHookTypes = Wa;
      var h = Wn !== null && Wn.next !== null;
      if (fs = P, Ut = null, Wn = null, Gn = null, W = null, Wa = null, Ku = -1, e !== null && (e.flags & Pn) !== (t.flags & Pn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ct) !== $e && g("Internal React error: Expected static flag was missing. Please notify the React team."), fm = !1, h)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function uf() {
      var e = hp !== 0;
      return hp = 0, e;
    }
    function LC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & la) !== $e ? t.flags &= ~(Rl | br | Xt | lt) : t.flags &= ~(Xt | lt), e.lanes = Du(e.lanes, a);
    }
    function MC() {
      if (he.current = xm, fm) {
        for (var e = Ut.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        fm = !1;
      }
      fs = P, Ut = null, Wn = null, Gn = null, Wa = null, Ku = -1, W = null, YC = !1, vp = !1, hp = 0;
    }
    function nl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Gn === null ? Ut.memoizedState = Gn = e : Gn = Gn.next = e, Gn;
    }
    function Ga() {
      var e;
      if (Wn === null) {
        var t = Ut.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Wn.next;
      var a;
      if (Gn === null ? a = Ut.memoizedState : a = Gn.next, a !== null)
        Gn = a, a = Gn.next, Wn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Wn = e;
        var i = {
          memoizedState: Wn.memoizedState,
          baseState: Wn.baseState,
          baseQueue: Wn.baseQueue,
          queue: Wn.queue,
          next: null
        };
        Gn === null ? Ut.memoizedState = Gn = i : Gn = Gn.next = i;
      }
      return Gn;
    }
    function NC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function pS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function vS(e, t, a) {
      var i = nl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Tb.bind(null, Ut, s);
      return [i.memoizedState, f];
    }
    function hS(e, t, a) {
      var i = Ga(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Wn, f = s.baseQueue, v = u.pending;
      if (v !== null) {
        if (f !== null) {
          var h = f.next, S = v.next;
          f.next = S, v.next = h;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = v, u.pending = null;
      }
      if (f !== null) {
        var T = f.next, O = s.baseState, _ = null, U = null, F = null, j = T;
        do {
          var me = j.lane;
          if (Nl(fs, me)) {
            if (F !== null) {
              var Me = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              F = F.next = Me;
            }
            if (j.hasEagerState)
              O = j.eagerState;
            else {
              var gt = j.action;
              O = e(O, gt);
            }
          } else {
            var Be = {
              lane: me,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            F === null ? (U = F = Be, _ = O) : F = F.next = Be, Ut.lanes = ut(Ut.lanes, me), zp(me);
          }
          j = j.next;
        } while (j !== null && j !== T);
        F === null ? _ = O : F.next = U, we(O, i.memoizedState) || Tp(), i.memoizedState = O, i.baseState = _, i.baseQueue = F, u.lastRenderedState = O;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var M = ht;
        do {
          var B = M.lane;
          Ut.lanes = ut(Ut.lanes, B), zp(B), M = M.next;
        } while (M !== ht);
      } else
        f === null && (u.lanes = P);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function mS(e, t, a) {
      var i = Ga(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, v = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var h = f.next, S = h;
        do {
          var T = S.action;
          v = e(v, T), S = S.next;
        } while (S !== h);
        we(v, i.memoizedState) || Tp(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), u.lastRenderedState = v;
      }
      return [v, s];
    }
    function YO(e, t, a) {
    }
    function QO(e, t, a) {
    }
    function yS(e, t, a) {
      var i = Ut, u = nl(), s, f = vr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), rf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), rf = !0);
      } else {
        if (s = t(), !rf) {
          var v = t();
          we(s, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), rf = !0);
        }
        var h = Pm();
        if (h === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Po(h, fs) || zC(i, t, s);
      }
      u.memoizedState = s;
      var S = {
        value: s,
        getSnapshot: t
      };
      return u.queue = S, mm(UC.bind(null, i, S, e), [e]), i.flags |= Xt, mp(Yn | hr, AC.bind(null, i, S, s, t), void 0, null), s;
    }
    function dm(e, t, a) {
      var i = Ut, u = Ga(), s = t();
      if (!rf) {
        var f = t();
        we(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), rf = !0);
      }
      var v = u.memoizedState, h = !we(v, s);
      h && (u.memoizedState = s, Tp());
      var S = u.queue;
      if (gp(UC.bind(null, i, S, e), [e]), S.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Gn !== null && Gn.memoizedState.tag & Yn) {
        i.flags |= Xt, mp(Yn | hr, AC.bind(null, i, S, s, t), void 0, null);
        var T = Pm();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Po(T, fs) || zC(i, t, s);
      }
      return s;
    }
    function zC(e, t, a) {
      e.flags |= No;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Ut.updateQueue;
      if (u === null)
        u = NC(), Ut.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function AC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, FC(t) && HC(e);
    }
    function UC(e, t, a) {
      var i = function() {
        FC(t) && HC(e);
      };
      return a(i);
    }
    function FC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !we(a, i);
      } catch {
        return !0;
      }
    }
    function HC(e) {
      var t = pa(e, Ye);
      t !== null && Zn(t, e, Ye, It);
    }
    function pm(e) {
      var t = nl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: pS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Rb.bind(null, Ut, a);
      return [t.memoizedState, i];
    }
    function gS(e) {
      return hS(pS);
    }
    function SS(e) {
      return mS(pS);
    }
    function mp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Ut.updateQueue;
      if (s === null)
        s = NC(), Ut.updateQueue = s, s.lastEffect = u.next = u;
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
      var t = nl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function vm(e) {
      var t = Ga();
      return t.memoizedState;
    }
    function yp(e, t, a, i) {
      var u = nl(), s = i === void 0 ? null : i;
      Ut.flags |= e, u.memoizedState = mp(Yn | t, a, void 0, s);
    }
    function hm(e, t, a, i) {
      var u = Ga(), s = i === void 0 ? null : i, f = void 0;
      if (Wn !== null) {
        var v = Wn.memoizedState;
        if (f = v.destroy, s !== null) {
          var h = v.deps;
          if (dS(s, h)) {
            u.memoizedState = mp(t, a, f, s);
            return;
          }
        }
      }
      Ut.flags |= e, u.memoizedState = mp(Yn | t, a, f, s);
    }
    function mm(e, t) {
      return (Ut.mode & la) !== $e ? yp(Rl | Xt | Hi, hr, e, t) : yp(Xt | Hi, hr, e, t);
    }
    function gp(e, t) {
      return hm(Xt, hr, e, t);
    }
    function CS(e, t) {
      return yp(lt, tl, e, t);
    }
    function ym(e, t) {
      return hm(lt, tl, e, t);
    }
    function TS(e, t) {
      var a = lt;
      return a |= wr, (Ut.mode & la) !== $e && (a |= br), yp(a, Qn, e, t);
    }
    function gm(e, t) {
      return hm(lt, Qn, e, t);
    }
    function VC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function RS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = lt;
      return u |= wr, (Ut.mode & la) !== $e && (u |= br), yp(u, Qn, VC.bind(null, t, e), i);
    }
    function Sm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return hm(lt, Qn, VC.bind(null, t, e), i);
    }
    function Sb(e, t) {
    }
    var Em = Sb;
    function xS(e, t) {
      var a = nl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Cm(e, t) {
      var a = Ga(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (dS(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function wS(e, t) {
      var a = nl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Tm(e, t) {
      var a = Ga(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (dS(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function bS(e) {
      var t = nl();
      return t.memoizedState = e, e;
    }
    function jC(e) {
      var t = Ga(), a = Wn, i = a.memoizedState;
      return PC(t, i, e);
    }
    function BC(e) {
      var t = Ga();
      if (Wn === null)
        return t.memoizedState = e, e;
      var a = Wn.memoizedState;
      return PC(t, a, e);
    }
    function PC(e, t, a) {
      var i = !My(fs);
      if (i) {
        if (!we(a, t)) {
          var u = Sd();
          Ut.lanes = ut(Ut.lanes, u), zp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Tp()), e.memoizedState = a, a;
    }
    function Eb(e, t, a) {
      var i = oa();
      Dn(ir(i, In)), e(!0);
      var u = pp.transition;
      pp.transition = {};
      var s = pp.transition;
      pp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Dn(i), pp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && x("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function DS() {
      var e = pm(!1), t = e[0], a = e[1], i = Eb.bind(null, a), u = nl();
      return u.memoizedState = i, [t, i];
    }
    function $C() {
      var e = gS(), t = e[0], a = Ga(), i = a.memoizedState;
      return [t, i];
    }
    function IC() {
      var e = SS(), t = e[0], a = Ga(), i = a.memoizedState;
      return [t, i];
    }
    var YC = !1;
    function Cb() {
      return YC;
    }
    function _S() {
      var e = nl(), t = Pm(), a = t.identifierPrefix, i;
      if (vr()) {
        var u = Aw();
        i = ":" + a + "R" + u;
        var s = hp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = mb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Rm() {
      var e = Ga(), t = e.memoizedState;
      return t;
    }
    function Tb(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (QC(e))
        WC(t, u);
      else {
        var s = cC(e, t, u, i);
        if (s !== null) {
          var f = Qr();
          Zn(s, e, i, f), GC(s, t, i);
        }
      }
      qC(e, i);
    }
    function Rb(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (QC(e))
        WC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var v;
            v = he.current, he.current = Ti;
            try {
              var h = t.lastRenderedState, S = f(h, a);
              if (u.hasEagerState = !0, u.eagerState = S, we(S, h)) {
                tb(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              he.current = v;
            }
          }
        }
        var T = cC(e, t, u, i);
        if (T !== null) {
          var O = Qr();
          Zn(T, e, i, O), GC(T, t, i);
        }
      }
      qC(e, i);
    }
    function QC(e) {
      var t = e.alternate;
      return e === Ut || t !== null && t === Ut;
    }
    function WC(e, t) {
      vp = fm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function GC(e, t, a) {
      if (gd(a)) {
        var i = t.lanes;
        i = Ed(i, e.pendingLanes);
        var u = ut(i, a);
        t.lanes = u, _u(e, u);
      }
    }
    function qC(e, t, a) {
      Ii(e, t);
    }
    var xm = {
      readContext: jn,
      useCallback: zr,
      useContext: zr,
      useEffect: zr,
      useImperativeHandle: zr,
      useInsertionEffect: zr,
      useLayoutEffect: zr,
      useMemo: zr,
      useReducer: zr,
      useRef: zr,
      useState: zr,
      useDebugValue: zr,
      useDeferredValue: zr,
      useTransition: zr,
      useMutableSource: zr,
      useSyncExternalStore: zr,
      useId: zr,
      unstable_isNewReconciler: re
    }, XC = null, KC = null, ZC = null, JC = null, rl = null, Ti = null, wm = null;
    {
      var kS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      XC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", Ot(), af(t), xS(e, t);
        },
        useContext: function(e) {
          return W = "useContext", Ot(), jn(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", Ot(), af(t), mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", Ot(), af(a), RS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", Ot(), af(t), CS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", Ot(), af(t), TS(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", Ot(), af(t);
          var a = he.current;
          he.current = rl;
          try {
            return wS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", Ot();
          var i = he.current;
          he.current = rl;
          try {
            return vS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", Ot(), ES(e);
        },
        useState: function(e) {
          W = "useState", Ot();
          var t = he.current;
          he.current = rl;
          try {
            return pm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", Ot(), void 0;
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", Ot(), bS(e);
        },
        useTransition: function() {
          return W = "useTransition", Ot(), DS();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", Ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", Ot(), yS(e, t, a);
        },
        useId: function() {
          return W = "useId", Ot(), _S();
        },
        unstable_isNewReconciler: re
      }, KC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", oe(), xS(e, t);
        },
        useContext: function(e) {
          return W = "useContext", oe(), jn(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", oe(), mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", oe(), RS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", oe(), CS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", oe(), TS(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", oe();
          var a = he.current;
          he.current = rl;
          try {
            return wS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", oe();
          var i = he.current;
          he.current = rl;
          try {
            return vS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", oe(), ES(e);
        },
        useState: function(e) {
          W = "useState", oe();
          var t = he.current;
          he.current = rl;
          try {
            return pm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", oe(), void 0;
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", oe(), bS(e);
        },
        useTransition: function() {
          return W = "useTransition", oe(), DS();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", oe(), yS(e, t, a);
        },
        useId: function() {
          return W = "useId", oe(), _S();
        },
        unstable_isNewReconciler: re
      }, ZC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", oe(), Cm(e, t);
        },
        useContext: function(e) {
          return W = "useContext", oe(), jn(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", oe(), gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", oe(), Sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", oe(), ym(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", oe(), gm(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", oe();
          var a = he.current;
          he.current = Ti;
          try {
            return Tm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", oe();
          var i = he.current;
          he.current = Ti;
          try {
            return hS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", oe(), vm();
        },
        useState: function(e) {
          W = "useState", oe();
          var t = he.current;
          he.current = Ti;
          try {
            return gS(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", oe(), Em();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", oe(), jC(e);
        },
        useTransition: function() {
          return W = "useTransition", oe(), $C();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", oe(), dm(e, t);
        },
        useId: function() {
          return W = "useId", oe(), Rm();
        },
        unstable_isNewReconciler: re
      }, JC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", oe(), Cm(e, t);
        },
        useContext: function(e) {
          return W = "useContext", oe(), jn(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", oe(), gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", oe(), Sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", oe(), ym(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", oe(), gm(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", oe();
          var a = he.current;
          he.current = wm;
          try {
            return Tm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", oe();
          var i = he.current;
          he.current = wm;
          try {
            return mS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", oe(), vm();
        },
        useState: function(e) {
          W = "useState", oe();
          var t = he.current;
          he.current = wm;
          try {
            return SS(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", oe(), Em();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", oe(), BC(e);
        },
        useTransition: function() {
          return W = "useTransition", oe(), IC();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", oe(), dm(e, t);
        },
        useId: function() {
          return W = "useId", oe(), Rm();
        },
        unstable_isNewReconciler: re
      }, rl = {
        readContext: function(e) {
          return kS(), jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", tt(), Ot(), xS(e, t);
        },
        useContext: function(e) {
          return W = "useContext", tt(), Ot(), jn(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", tt(), Ot(), mm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", tt(), Ot(), RS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", tt(), Ot(), CS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", tt(), Ot(), TS(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", tt(), Ot();
          var a = he.current;
          he.current = rl;
          try {
            return wS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", tt(), Ot();
          var i = he.current;
          he.current = rl;
          try {
            return vS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", tt(), Ot(), ES(e);
        },
        useState: function(e) {
          W = "useState", tt(), Ot();
          var t = he.current;
          he.current = rl;
          try {
            return pm(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", tt(), Ot(), void 0;
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", tt(), Ot(), bS(e);
        },
        useTransition: function() {
          return W = "useTransition", tt(), Ot(), DS();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", tt(), Ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", tt(), Ot(), yS(e, t, a);
        },
        useId: function() {
          return W = "useId", tt(), Ot(), _S();
        },
        unstable_isNewReconciler: re
      }, Ti = {
        readContext: function(e) {
          return kS(), jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", tt(), oe(), Cm(e, t);
        },
        useContext: function(e) {
          return W = "useContext", tt(), oe(), jn(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", tt(), oe(), gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", tt(), oe(), Sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", tt(), oe(), ym(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", tt(), oe(), gm(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", tt(), oe();
          var a = he.current;
          he.current = Ti;
          try {
            return Tm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", tt(), oe();
          var i = he.current;
          he.current = Ti;
          try {
            return hS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", tt(), oe(), vm();
        },
        useState: function(e) {
          W = "useState", tt(), oe();
          var t = he.current;
          he.current = Ti;
          try {
            return gS(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", tt(), oe(), Em();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", tt(), oe(), jC(e);
        },
        useTransition: function() {
          return W = "useTransition", tt(), oe(), $C();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", tt(), oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", tt(), oe(), dm(e, t);
        },
        useId: function() {
          return W = "useId", tt(), oe(), Rm();
        },
        unstable_isNewReconciler: re
      }, wm = {
        readContext: function(e) {
          return kS(), jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", tt(), oe(), Cm(e, t);
        },
        useContext: function(e) {
          return W = "useContext", tt(), oe(), jn(e);
        },
        useEffect: function(e, t) {
          return W = "useEffect", tt(), oe(), gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return W = "useImperativeHandle", tt(), oe(), Sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return W = "useInsertionEffect", tt(), oe(), ym(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", tt(), oe(), gm(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", tt(), oe();
          var a = he.current;
          he.current = Ti;
          try {
            return Tm(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", tt(), oe();
          var i = he.current;
          he.current = Ti;
          try {
            return mS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", tt(), oe(), vm();
        },
        useState: function(e) {
          W = "useState", tt(), oe();
          var t = he.current;
          he.current = Ti;
          try {
            return SS(e);
          } finally {
            he.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return W = "useDebugValue", tt(), oe(), Em();
        },
        useDeferredValue: function(e) {
          return W = "useDeferredValue", tt(), oe(), BC(e);
        },
        useTransition: function() {
          return W = "useTransition", tt(), oe(), IC();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", tt(), oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", tt(), oe(), dm(e, t);
        },
        useId: function() {
          return W = "useId", tt(), oe(), Rm();
        },
        unstable_isNewReconciler: re
      };
    }
    var Zu = C.unstable_now, e1 = 0, bm = -1, Sp = -1, Dm = -1, OS = !1, _m = !1;
    function t1() {
      return OS;
    }
    function xb() {
      _m = !0;
    }
    function wb() {
      OS = !1, _m = !1;
    }
    function bb() {
      OS = _m, _m = !1;
    }
    function n1() {
      return e1;
    }
    function r1() {
      e1 = Zu();
    }
    function LS(e) {
      Sp = Zu(), e.actualStartTime < 0 && (e.actualStartTime = Zu());
    }
    function a1(e) {
      Sp = -1;
    }
    function km(e, t) {
      if (Sp >= 0) {
        var a = Zu() - Sp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Sp = -1;
      }
    }
    function al(e) {
      if (bm >= 0) {
        var t = Zu() - bm;
        bm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case je:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function MS(e) {
      if (Dm >= 0) {
        var t = Zu() - Dm;
        Dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case je:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function il() {
      bm = Zu();
    }
    function NS() {
      Dm = Zu();
    }
    function zS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ds(e, t) {
      return {
        value: e,
        source: t,
        stack: _f(t),
        digest: null
      };
    }
    function AS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Db(e, t) {
      return !0;
    }
    function US(e, t) {
      try {
        var a = Db(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === G)
            return;
          console.error(i);
        }
        var v = u ? rt(u) : null, h = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === I)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = rt(e) || "Anonymous";
          S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var O = h + `
` + f + `

` + ("" + S);
        console.error(O);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var _b = typeof WeakMap == "function" ? WeakMap : Map;
    function i1(e, t, a) {
      var i = ql(It, a);
      i.tag = Ug, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        E_(u), US(e, t);
      }, i;
    }
    function FS(e, t, a) {
      var i = ql(It, a);
      i.tag = Ug;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          mT(e), US(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        mT(e), US(e, t), typeof u != "function" && g_(this);
        var h = t.value, S = t.stack;
        this.componentDidCatch(h, {
          componentStack: S !== null ? S : ""
        }), typeof u != "function" && (Lr(e.lanes, Ye) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", rt(e) || "Unknown"));
      }), i;
    }
    function l1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new _b(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = C_.bind(null, e, t, a);
        $n && Ap(e, a), t.then(s, s);
      }
    }
    function kb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Ob(e, t) {
      var a = e.tag;
      if ((e.mode & ct) === $e && (a === $ || a === Ee || a === qe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function u1(e) {
      var t = e;
      do {
        if (t.tag === Y && vb(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function o1(e, t, a, i, u) {
      if ((e.mode & ct) === $e) {
        if (e === t)
          e.flags |= An;
        else {
          if (e.flags |= Xe, a.flags |= zo, a.flags &= ~(Ys | Hr), a.tag === G) {
            var s = a.alternate;
            if (s === null)
              a.tag = Nt;
            else {
              var f = ql(It, Ye);
              f.tag = Jh, Gu(a, f, Ye);
            }
          }
          a.lanes = ut(a.lanes, Ye);
        }
        return e;
      }
      return e.flags |= An, e.lanes = u, e;
    }
    function Lb(e, t, a, i, u) {
      if (a.flags |= Hr, $n && Ap(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Ob(a), vr() && a.mode & ct && ZE();
        var f = u1(t);
        if (f !== null) {
          f.flags &= ~on, o1(f, t, a, e, u), f.mode & ct && l1(e, s, u), kb(f, e, s);
          return;
        } else {
          if (!bu(u)) {
            l1(e, s, u), m0();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (vr() && a.mode & ct) {
        ZE();
        var h = u1(t);
        if (h !== null) {
          (h.flags & An) === He && (h.flags |= on), o1(h, t, a, e, u), kg(ds(i, a));
          return;
        }
      }
      i = ds(i, a), c_(i);
      var S = t;
      do {
        switch (S.tag) {
          case I: {
            var T = i;
            S.flags |= An;
            var O = bn(u);
            S.lanes = ut(S.lanes, O);
            var _ = i1(S, T, O);
            Vg(S, _);
            return;
          }
          case G:
            var U = i, F = S.type, j = S.stateNode;
            if ((S.flags & Xe) === He && (typeof F.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !uT(j))) {
              S.flags |= An;
              var me = bn(u);
              S.lanes = ut(S.lanes, me);
              var Be = FS(S, U, me);
              Vg(S, Be);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function Mb() {
      return null;
    }
    var Ep = m.ReactCurrentOwner, Ri = !1, HS, Cp, VS, jS, BS, ps, PS, Om;
    HS = {}, Cp = {}, VS = {}, jS = {}, BS = {}, ps = !1, PS = {}, Om = {};
    function Ir(e, t, a, i) {
      e === null ? t.child = bC(t, null, a, i) : t.child = Jc(t, e.child, a, i);
    }
    function Nb(e, t, a, i) {
      t.child = Jc(t, e.child, null, i), t.child = Jc(t, null, a, i);
    }
    function s1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && yi(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var f = a.render, v = t.ref, h, S;
      Zc(t, u), $i(t);
      {
        if (Ep.current = t, wa(!0), h = lf(e, t, f, i, v, u), S = uf(), t.mode & tn) {
          wn(!0);
          try {
            h = lf(e, t, f, i, v, u), S = uf();
          } finally {
            wn(!1);
          }
        }
        wa(!1);
      }
      return xl(), e !== null && !Ri ? (LC(e, t, u), Xl(e, t, u)) : (vr() && S && Rg(t), t.flags |= Ui, Ir(e, t, h, u), t.child);
    }
    function c1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (H_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = hf(s), t.tag = qe, t.type = f, YS(t, s), f1(e, t, f, i, u);
        }
        {
          var v = s.propTypes;
          v && yi(
            v,
            i,
            // Resolved props
            "prop",
            Pt(s)
          );
        }
        var h = D0(a.type, null, i, t, t.mode, u);
        return h.ref = t.ref, h.return = t, t.child = h, h;
      }
      {
        var S = a.type, T = S.propTypes;
        T && yi(
          T,
          i,
          // Resolved props
          "prop",
          Pt(S)
        );
      }
      var O = e.child, _ = KS(e, u);
      if (!_) {
        var U = O.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Fe, F(U, i) && e.ref === t.ref)
          return Xl(e, t, u);
      }
      t.flags |= Ui;
      var j = gs(O, i);
      return j.ref = t.ref, j.return = t, t.child = j, j;
    }
    function f1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === fr) {
          var f = s, v = f._payload, h = f._init;
          try {
            s = h(v);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && yi(
            S,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Pt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Fe(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ri = !1, t.pendingProps = i = T, KS(e, u))
            (e.flags & zo) !== He && (Ri = !0);
          else
            return t.lanes = e.lanes, Xl(e, t, u);
      }
      return $S(e, t, a, i, u);
    }
    function d1(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || z)
        if ((t.mode & ct) === $e) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, $m(t, a);
        } else if (Lr(a, Or)) {
          var O = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = O;
          var _ = s !== null ? s.baseLanes : a;
          $m(t, _);
        } else {
          var v = null, h;
          if (s !== null) {
            var S = s.baseLanes;
            h = ut(S, a);
          } else
            h = a;
          t.lanes = t.childLanes = Or;
          var T = {
            baseLanes: h,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, $m(t, h), null;
        }
      else {
        var U;
        s !== null ? (U = ut(s.baseLanes, a), t.memoizedState = null) : U = a, $m(t, U);
      }
      return Ir(e, t, u, a), t.child;
    }
    function zb(e, t, a) {
      var i = t.pendingProps;
      return Ir(e, t, i, a), t.child;
    }
    function Ab(e, t, a) {
      var i = t.pendingProps.children;
      return Ir(e, t, i, a), t.child;
    }
    function Ub(e, t, a) {
      {
        t.flags |= lt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ir(e, t, s, a), t.child;
    }
    function p1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= xr, t.flags |= rd);
    }
    function $S(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && yi(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var f;
      {
        var v = Qc(t, a, !0);
        f = Wc(t, v);
      }
      var h, S;
      Zc(t, u), $i(t);
      {
        if (Ep.current = t, wa(!0), h = lf(e, t, a, i, f, u), S = uf(), t.mode & tn) {
          wn(!0);
          try {
            h = lf(e, t, a, i, f, u), S = uf();
          } finally {
            wn(!1);
          }
        }
        wa(!1);
      }
      return xl(), e !== null && !Ri ? (LC(e, t, u), Xl(e, t, u)) : (vr() && S && Rg(t), t.flags |= Ui, Ir(e, t, h, u), t.child);
    }
    function v1(e, t, a, i, u) {
      {
        switch (J_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), h = v.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= Xe, t.flags |= An;
            var S = new Error("Simulated error coming from DevTools"), T = bn(u);
            t.lanes = ut(t.lanes, T);
            var O = FS(t, ds(S, t), T);
            Vg(t, O);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && yi(
            _,
            i,
            // Resolved props
            "prop",
            Pt(a)
          );
        }
      }
      var U;
      el(a) ? (U = !0, Ph(t)) : U = !1, Zc(t, u);
      var F = t.stateNode, j;
      F === null ? (Mm(e, t), CC(t, a, i), Kg(t, a, i, u), j = !0) : e === null ? j = ob(t, a, i, u) : j = sb(e, t, a, i, u);
      var me = IS(e, t, a, j, U, u);
      {
        var Be = t.stateNode;
        j && Be.props !== i && (ps || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", rt(t) || "a component"), ps = !0);
      }
      return me;
    }
    function IS(e, t, a, i, u, s) {
      p1(e, t);
      var f = (t.flags & Xe) !== He;
      if (!i && !f)
        return u && GE(t, a, !1), Xl(e, t, s);
      var v = t.stateNode;
      Ep.current = t;
      var h;
      if (f && typeof a.getDerivedStateFromError != "function")
        h = null, a1();
      else {
        $i(t);
        {
          if (wa(!0), h = v.render(), t.mode & tn) {
            wn(!0);
            try {
              v.render();
            } finally {
              wn(!1);
            }
          }
          wa(!1);
        }
        xl();
      }
      return t.flags |= Ui, e !== null && f ? Nb(e, t, h, s) : Ir(e, t, h, s), t.memoizedState = v.state, u && GE(t, a, !0), t.child;
    }
    function h1(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), rS(e, t.containerInfo);
    }
    function Fb(e, t, a) {
      if (h1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      pC(e, t), rm(t, i, null, a);
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
        }, S = t.updateQueue;
        if (S.baseState = h, t.memoizedState = h, t.flags & on) {
          var T = ds(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return m1(e, t, v, a, T);
        } else if (v !== s) {
          var O = ds(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return m1(e, t, v, a, O);
        } else {
          Bw(t);
          var _ = bC(t, null, v, a);
          t.child = _;
          for (var U = _; U; )
            U.flags = U.flags & ~Yt | ra, U = U.sibling;
        }
      } else {
        if (Xc(), v === s)
          return Xl(e, t, a);
        Ir(e, t, v, a);
      }
      return t.child;
    }
    function m1(e, t, a, i, u) {
      return Xc(), kg(u), t.flags |= on, Ir(e, t, a, i), t.child;
    }
    function Hb(e, t, a) {
      _C(t), e === null && _g(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, v = sg(i, u);
      return v ? f = null : s !== null && sg(i, s) && (t.flags |= kt), p1(e, t), Ir(e, t, f, a), t.child;
    }
    function Vb(e, t) {
      return e === null && _g(t), null;
    }
    function jb(e, t, a, i) {
      Mm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, v = s._init, h = v(f);
      t.type = h;
      var S = t.tag = V_(h), T = Ei(h, u), O;
      switch (S) {
        case $:
          return YS(t, h), t.type = h = hf(h), O = $S(null, t, h, T, i), O;
        case G:
          return t.type = h = C0(h), O = v1(null, t, h, T, i), O;
        case Ee:
          return t.type = h = T0(h), O = s1(null, t, h, T, i), O;
        case ft: {
          if (t.type !== t.elementType) {
            var _ = h.propTypes;
            _ && yi(
              _,
              T,
              // Resolved for outer only
              "prop",
              Pt(h)
            );
          }
          return O = c1(
            null,
            t,
            h,
            Ei(h.type, T),
            // The inner type can have defaults too
            i
          ), O;
        }
      }
      var U = "";
      throw h !== null && typeof h == "object" && h.$$typeof === fr && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function Bb(e, t, a, i, u) {
      Mm(e, t), t.tag = G;
      var s;
      return el(a) ? (s = !0, Ph(t)) : s = !1, Zc(t, u), CC(t, a, i), Kg(t, a, i, u), IS(null, t, a, !0, s, u);
    }
    function Pb(e, t, a, i) {
      Mm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Qc(t, a, !1);
        s = Wc(t, f);
      }
      Zc(t, i);
      var v, h;
      $i(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = Pt(a) || "Unknown";
          HS[S] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), HS[S] = !0);
        }
        t.mode & tn && Si.recordLegacyContextWarning(t, null), wa(!0), Ep.current = t, v = lf(null, t, a, u, s, i), h = uf(), wa(!1);
      }
      if (xl(), t.flags |= Ui, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var T = Pt(a) || "Unknown";
        Cp[T] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Cp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var O = Pt(a) || "Unknown";
          Cp[O] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), Cp[O] = !0);
        }
        t.tag = G, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return el(a) ? (_ = !0, Ph(t)) : _ = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Hg(t), EC(t, v), Kg(t, a, u, i), IS(null, t, a, !0, _, i);
      } else {
        if (t.tag = $, t.mode & tn) {
          wn(!0);
          try {
            v = lf(null, t, a, u, s, i), h = uf();
          } finally {
            wn(!1);
          }
        }
        return vr() && h && Rg(t), Ir(null, t, v, i), YS(t, a), t.child;
      }
    }
    function YS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Jr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), BS[u] || (BS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Pt(t) || "Unknown";
          jS[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), jS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Pt(t) || "Unknown";
          VS[v] || (g("%s: Function components do not support contextType.", v), VS[v] = !0);
        }
      }
    }
    var QS = {
      dehydrated: null,
      treeContext: null,
      retryLane: mt
    };
    function WS(e) {
      return {
        baseLanes: e,
        cachePool: Mb(),
        transitions: null
      };
    }
    function $b(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Ib(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return lS(e, dp);
    }
    function Yb(e, t) {
      return Du(e.childLanes, t);
    }
    function y1(e, t, a) {
      var i = t.pendingProps;
      ek(t) && (t.flags |= Xe);
      var u = Ci.current, s = !1, f = (t.flags & Xe) !== He;
      if (f || Ib(u, e) ? (s = !0, t.flags &= ~Xe) : (e === null || e.memoizedState !== null) && (u = pb(u, OC)), u = tf(u), Xu(t, u), e === null) {
        _g(t);
        var v = t.memoizedState;
        if (v !== null) {
          var h = v.dehydrated;
          if (h !== null)
            return Xb(t, h);
        }
        var S = i.children, T = i.fallback;
        if (s) {
          var O = Qb(t, S, T, a), _ = t.child;
          return _.memoizedState = WS(a), t.memoizedState = QS, O;
        } else
          return GS(t, S);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var F = U.dehydrated;
          if (F !== null)
            return Kb(e, t, f, i, F, U, a);
        }
        if (s) {
          var j = i.fallback, me = i.children, Be = Gb(e, t, me, j, a), Me = t.child, gt = e.child.memoizedState;
          return Me.memoizedState = gt === null ? WS(a) : $b(gt, a), Me.childLanes = Yb(e, a), t.memoizedState = QS, Be;
        } else {
          var ht = i.children, M = Wb(e, t, ht, a);
          return t.memoizedState = null, M;
        }
      }
    }
    function GS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = qS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Qb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, v, h;
      return (u & ct) === $e && s !== null ? (v = s, v.childLanes = P, v.pendingProps = f, e.mode & Ie && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), h = ao(a, u, i, null)) : (v = qS(f, u), h = ao(a, u, i, null)), v.return = e, h.return = e, v.sibling = h, e.child = v, h;
    }
    function qS(e, t, a) {
      return gT(e, t, P, null);
    }
    function g1(e, t) {
      return gs(e, t);
    }
    function Wb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = g1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ct) === $e && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= bt) : v.push(s);
      }
      return t.child = f, f;
    }
    function Gb(e, t, a, i, u) {
      var s = t.mode, f = e.child, v = f.sibling, h = {
        mode: "hidden",
        children: a
      }, S;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ct) === $e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        S = T, S.childLanes = P, S.pendingProps = h, t.mode & Ie && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = f.selfBaseDuration, S.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        S = g1(f, h), S.subtreeFlags = f.subtreeFlags & Pn;
      var O;
      return v !== null ? O = gs(v, i) : (O = ao(i, s, u, null), O.flags |= Yt), O.return = t, S.return = t, S.sibling = O, t.child = S, O;
    }
    function Lm(e, t, a, i) {
      i !== null && kg(i), Jc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = GS(t, s);
      return f.flags |= Yt, t.memoizedState = null, f;
    }
    function qb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, v = qS(f, s), h = ao(i, s, u, null);
      return h.flags |= Yt, v.return = t, h.return = t, v.sibling = h, t.child = v, (t.mode & ct) !== $e && Jc(t, e.child, null, u), h;
    }
    function Xb(e, t, a) {
      return (e.mode & ct) === $e ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ye) : pg(t) ? e.lanes = Dl : e.lanes = Or, null;
    }
    function Kb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & on) {
          t.flags &= ~on;
          var M = AS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Lm(e, t, f, M);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Xe, null;
          var B = i.children, N = i.fallback, ee = qb(e, t, B, N, f), ye = t.child;
          return ye.memoizedState = WS(f), t.memoizedState = QS, ee;
        }
      else {
        if (Vw(), (t.mode & ct) === $e)
          return Lm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (pg(u)) {
          var v, h, S;
          {
            var T = nw(u);
            v = T.digest, h = T.message, S = T.stack;
          }
          var O;
          h ? O = new Error(h) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = AS(O, v, S);
          return Lm(e, t, f, _);
        }
        var U = Lr(f, e.childLanes);
        if (Ri || U) {
          var F = Pm();
          if (F !== null) {
            var j = zy(F, f);
            if (j !== mt && j !== s.retryLane) {
              s.retryLane = j;
              var me = It;
              pa(e, j), Zn(F, e, j, me);
            }
          }
          m0();
          var Be = AS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Lm(e, t, f, Be);
        } else if (jE(u)) {
          t.flags |= Xe, t.child = e.child;
          var Me = T_.bind(null, e);
          return rw(u, Me), null;
        } else {
          Pw(t, u, s.treeContext);
          var gt = i.children, ht = GS(t, gt);
          return ht.flags |= ra, ht;
        }
      }
    }
    function S1(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ut(i.lanes, t)), zg(e.return, t, a);
    }
    function Zb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Y) {
          var u = i.memoizedState;
          u !== null && S1(i, a, e);
        } else if (i.tag === ot)
          S1(i, a, e);
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
    function Jb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && cm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function eD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !PS[e])
        if (PS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function tD(e, t) {
      e !== void 0 && !Om[e] && (e !== "collapsed" && e !== "hidden" ? (Om[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Om[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function E1(e, t) {
      {
        var a = Nn(e), i = !a && typeof ei(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function nD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Nn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!E1(e[a], a))
              return;
        } else {
          var i = ei(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!E1(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
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
    function C1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      eD(u), tD(s, u), nD(f, u), Ir(e, t, f, a);
      var v = Ci.current, h = lS(v, dp);
      if (h)
        v = uS(v, dp), t.flags |= Xe;
      else {
        var S = e !== null && (e.flags & Xe) !== He;
        S && Zb(t, t.child, a), v = tf(v);
      }
      if (Xu(t, v), (t.mode & ct) === $e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var T = Jb(t.child), O;
            T === null ? (O = t.child, t.child = null) : (O = T.sibling, T.sibling = null), XS(
              t,
              !1,
              // isBackwards
              O,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var F = U.alternate;
              if (F !== null && cm(F) === null) {
                t.child = U;
                break;
              }
              var j = U.sibling;
              U.sibling = _, _ = U, U = j;
            }
            XS(
              t,
              !0,
              // isBackwards
              _,
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
    function rD(e, t, a) {
      rS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Jc(t, null, i, a) : Ir(e, t, i, a), t.child;
    }
    var T1 = !1;
    function aD(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
      {
        "value" in s || T1 || (T1 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && yi(h, s, "prop", "Context.Provider");
      }
      if (sC(t, u, v), f !== null) {
        var S = f.value;
        if (we(S, v)) {
          if (f.children === s.children && !jh())
            return Xl(e, t, a);
        } else
          Zw(t, u, a);
      }
      var T = s.children;
      return Ir(e, t, T, a), t.child;
    }
    var R1 = !1;
    function iD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (R1 || (R1 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Zc(t, a);
      var f = jn(i);
      $i(t);
      var v;
      return Ep.current = t, wa(!0), v = s(f), wa(!1), xl(), t.flags |= Ui, Ir(e, t, v, a), t.child;
    }
    function Tp() {
      Ri = !0;
    }
    function Mm(e, t) {
      (t.mode & ct) === $e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Yt);
    }
    function Xl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), a1(), zp(t.lanes), Lr(a, t.childLanes) ? (cb(e, t), t.child) : null;
    }
    function lD(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= bt) : s.push(e), a.flags |= Yt, a;
      }
    }
    function KS(e, t) {
      var a = e.lanes;
      return !!Lr(a, t);
    }
    function uD(e, t, a) {
      switch (t.tag) {
        case I:
          h1(t), t.stateNode, Xc();
          break;
        case ie:
          _C(t);
          break;
        case G: {
          var i = t.type;
          el(i) && Ph(t);
          break;
        }
        case q:
          rS(t, t.stateNode.containerInfo);
          break;
        case Le: {
          var u = t.memoizedProps.value, s = t.type._context;
          sC(t, s, u);
          break;
        }
        case je:
          {
            var f = Lr(a, t.childLanes);
            f && (t.flags |= lt);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case Y: {
          var h = t.memoizedState;
          if (h !== null) {
            if (h.dehydrated !== null)
              return Xu(t, tf(Ci.current)), t.flags |= Xe, null;
            var S = t.child, T = S.childLanes;
            if (Lr(a, T))
              return y1(e, t, a);
            Xu(t, tf(Ci.current));
            var O = Xl(e, t, a);
            return O !== null ? O.sibling : null;
          } else
            Xu(t, tf(Ci.current));
          break;
        }
        case ot: {
          var _ = (e.flags & Xe) !== He, U = Lr(a, t.childLanes);
          if (_) {
            if (U)
              return C1(e, t, a);
            t.flags |= Xe;
          }
          var F = t.memoizedState;
          if (F !== null && (F.rendering = null, F.tail = null, F.lastEffect = null), Xu(t, Ci.current), U)
            break;
          return null;
        }
        case fe:
        case Ne:
          return t.lanes = P, d1(e, t, a);
      }
      return Xl(e, t, a);
    }
    function x1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return lD(e, t, D0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || jh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ri = !0;
        else {
          var s = KS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Xe) === He)
            return Ri = !1, uD(e, t, a);
          (e.flags & zo) !== He ? Ri = !0 : Ri = !1;
        }
      } else if (Ri = !1, vr() && Nw(t)) {
        var f = t.index, v = zw();
        KE(t, v, f);
      }
      switch (t.lanes = P, t.tag) {
        case pe:
          return Pb(e, t, t.type, a);
        case Jt: {
          var h = t.elementType;
          return jb(e, t, h, a);
        }
        case $: {
          var S = t.type, T = t.pendingProps, O = t.elementType === S ? T : Ei(S, T);
          return $S(e, t, S, O, a);
        }
        case G: {
          var _ = t.type, U = t.pendingProps, F = t.elementType === _ ? U : Ei(_, U);
          return v1(e, t, _, F, a);
        }
        case I:
          return Fb(e, t, a);
        case ie:
          return Hb(e, t, a);
        case Re:
          return Vb(e, t);
        case Y:
          return y1(e, t, a);
        case q:
          return rD(e, t, a);
        case Ee: {
          var j = t.type, me = t.pendingProps, Be = t.elementType === j ? me : Ei(j, me);
          return s1(e, t, j, Be, a);
        }
        case Ve:
          return zb(e, t, a);
        case Ze:
          return Ab(e, t, a);
        case je:
          return Ub(e, t, a);
        case Le:
          return aD(e, t, a);
        case Mt:
          return iD(e, t, a);
        case ft: {
          var Me = t.type, gt = t.pendingProps, ht = Ei(Me, gt);
          if (t.type !== t.elementType) {
            var M = Me.propTypes;
            M && yi(
              M,
              ht,
              // Resolved for outer only
              "prop",
              Pt(Me)
            );
          }
          return ht = Ei(Me.type, ht), c1(e, t, Me, ht, a);
        }
        case qe:
          return f1(e, t, t.type, t.pendingProps, a);
        case Nt: {
          var B = t.type, N = t.pendingProps, ee = t.elementType === B ? N : Ei(B, N);
          return Bb(e, t, B, ee, a);
        }
        case ot:
          return C1(e, t, a);
        case Qe:
          break;
        case fe:
          return d1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function of(e) {
      e.flags |= lt;
    }
    function w1(e) {
      e.flags |= xr, e.flags |= rd;
    }
    var b1, ZS, D1, _1;
    b1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === Re)
          Ox(e, u.stateNode);
        else if (u.tag !== q) {
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
    }, D1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, v = aS(), h = Mx(f, a, s, i, u, v);
        t.updateQueue = h, h && of(t);
      }
    }, _1 = function(e, t, a, i) {
      a !== i && of(t);
    };
    function Rp(e, t) {
      if (!vr())
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
    function mr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = He;
      if (t) {
        if ((e.mode & Ie) !== $e) {
          for (var h = e.selfBaseDuration, S = e.child; S !== null; )
            a = ut(a, ut(S.lanes, S.childLanes)), i |= S.subtreeFlags & Pn, i |= S.flags & Pn, h += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = h;
        } else
          for (var T = e.child; T !== null; )
            a = ut(a, ut(T.lanes, T.childLanes)), i |= T.subtreeFlags & Pn, i |= T.flags & Pn, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ie) !== $e) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = ut(a, ut(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = ut(a, ut(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function oD(e, t, a) {
      if (Ww() && (t.mode & ct) !== $e && (t.flags & Xe) === He)
        return aC(t), Xc(), t.flags |= on | Hr | An, !1;
      var i = Wh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Yw(t), mr(t), (t.mode & Ie) !== $e) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Xc(), (t.flags & Xe) === He && (t.memoizedState = null), t.flags |= lt, mr(t), (t.mode & Ie) !== $e) {
            var f = a !== null;
            if (f) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return iC(), !0;
    }
    function k1(e, t, a) {
      var i = t.pendingProps;
      switch (xg(t), t.tag) {
        case pe:
        case Jt:
        case qe:
        case $:
        case Ee:
        case Ve:
        case Ze:
        case je:
        case Mt:
        case ft:
          return mr(t), null;
        case G: {
          var u = t.type;
          return el(u) && Bh(t), mr(t), null;
        }
        case I: {
          var s = t.stateNode;
          if (ef(t), Eg(t), sS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Wh(t);
            if (f)
              of(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & on) !== He) && (t.flags |= na, iC());
            }
          }
          return ZS(e, t), mr(t), null;
        }
        case ie: {
          iS(t);
          var h = DC(), S = t.type;
          if (e !== null && t.stateNode != null)
            D1(e, t, S, i, h), e.ref !== t.ref && w1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return mr(t), null;
            }
            var T = aS(), O = Wh(t);
            if (O)
              $w(t, h, T) && of(t);
            else {
              var _ = kx(S, i, h, T, t);
              b1(_, t, !1, !1), t.stateNode = _, Lx(_, S, i, h) && of(t);
            }
            t.ref !== null && w1(t);
          }
          return mr(t), null;
        }
        case Re: {
          var U = i;
          if (e && t.stateNode != null) {
            var F = e.memoizedProps;
            _1(e, t, F, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = DC(), me = aS(), Be = Wh(t);
            Be ? Iw(t) && of(t) : t.stateNode = Nx(U, j, me, t);
          }
          return mr(t), null;
        }
        case Y: {
          nf(t);
          var Me = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var gt = oD(e, t, Me);
            if (!gt)
              return t.flags & An ? t : null;
          }
          if ((t.flags & Xe) !== He)
            return t.lanes = a, (t.mode & Ie) !== $e && zS(t), t;
          var ht = Me !== null, M = e !== null && e.memoizedState !== null;
          if (ht !== M && ht) {
            var B = t.child;
            if (B.flags |= Fi, (t.mode & ct) !== $e) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !te);
              N || lS(Ci.current, OC) ? s_() : m0();
            }
          }
          var ee = t.updateQueue;
          if (ee !== null && (t.flags |= lt), mr(t), (t.mode & Ie) !== $e && ht) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case q:
          return ef(t), ZS(e, t), e === null && bw(t.stateNode.containerInfo), mr(t), null;
        case Le:
          var de = t.type._context;
          return Ng(de, t), mr(t), null;
        case Nt: {
          var Ge = t.type;
          return el(Ge) && Bh(t), mr(t), null;
        }
        case ot: {
          nf(t);
          var nt = t.memoizedState;
          if (nt === null)
            return mr(t), null;
          var Ft = (t.flags & Xe) !== He, Tt = nt.rendering;
          if (Tt === null)
            if (Ft)
              Rp(nt, !1);
            else {
              var On = f_() && (e === null || (e.flags & Xe) === He);
              if (!On)
                for (var Rt = t.child; Rt !== null; ) {
                  var Tn = cm(Rt);
                  if (Tn !== null) {
                    Ft = !0, t.flags |= Xe, Rp(nt, !1);
                    var Ar = Tn.updateQueue;
                    return Ar !== null && (t.updateQueue = Ar, t.flags |= lt), t.subtreeFlags = He, fb(t, a), Xu(t, uS(Ci.current, dp)), t.child;
                  }
                  Rt = Rt.sibling;
                }
              nt.tail !== null && en() > X1() && (t.flags |= Xe, Ft = !0, Rp(nt, !1), t.lanes = md);
            }
          else {
            if (!Ft) {
              var Cr = cm(Tt);
              if (Cr !== null) {
                t.flags |= Xe, Ft = !0;
                var Na = Cr.updateQueue;
                if (Na !== null && (t.updateQueue = Na, t.flags |= lt), Rp(nt, !0), nt.tail === null && nt.tailMode === "hidden" && !Tt.alternate && !vr())
                  return mr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                en() * 2 - nt.renderingStartTime > X1() && a !== Or && (t.flags |= Xe, Ft = !0, Rp(nt, !1), t.lanes = md);
            }
            if (nt.isBackwards)
              Tt.sibling = t.child, t.child = Tt;
            else {
              var Wr = nt.last;
              Wr !== null ? Wr.sibling = Tt : t.child = Tt, nt.last = Tt;
            }
          }
          if (nt.tail !== null) {
            var Gr = nt.tail;
            nt.rendering = Gr, nt.tail = Gr.sibling, nt.renderingStartTime = en(), Gr.sibling = null;
            var Ur = Ci.current;
            return Ft ? Ur = uS(Ur, dp) : Ur = tf(Ur), Xu(t, Ur), Gr;
          }
          return mr(t), null;
        }
        case Qe:
          break;
        case fe:
        case Ne: {
          h0(t);
          var tu = t.memoizedState, mf = tu !== null;
          if (e !== null) {
            var Vp = e.memoizedState, ol = Vp !== null;
            ol !== mf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !z && (t.flags |= Fi);
          }
          return !mf || (t.mode & ct) === $e ? mr(t) : Lr(ul, Or) && (mr(t), t.subtreeFlags & (Yt | lt) && (t.flags |= Fi)), null;
        }
        case xt:
          return null;
        case et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function sD(e, t, a) {
      switch (xg(t), t.tag) {
        case G: {
          var i = t.type;
          el(i) && Bh(t);
          var u = t.flags;
          return u & An ? (t.flags = u & ~An | Xe, (t.mode & Ie) !== $e && zS(t), t) : null;
        }
        case I: {
          t.stateNode, ef(t), Eg(t), sS();
          var s = t.flags;
          return (s & An) !== He && (s & Xe) === He ? (t.flags = s & ~An | Xe, t) : null;
        }
        case ie:
          return iS(t), null;
        case Y: {
          nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Xc();
          }
          var v = t.flags;
          return v & An ? (t.flags = v & ~An | Xe, (t.mode & Ie) !== $e && zS(t), t) : null;
        }
        case ot:
          return nf(t), null;
        case q:
          return ef(t), null;
        case Le:
          var h = t.type._context;
          return Ng(h, t), null;
        case fe:
        case Ne:
          return h0(t), null;
        case xt:
          return null;
        default:
          return null;
      }
    }
    function O1(e, t, a) {
      switch (xg(t), t.tag) {
        case G: {
          var i = t.type.childContextTypes;
          i != null && Bh(t);
          break;
        }
        case I: {
          t.stateNode, ef(t), Eg(t), sS();
          break;
        }
        case ie: {
          iS(t);
          break;
        }
        case q:
          ef(t);
          break;
        case Y:
          nf(t);
          break;
        case ot:
          nf(t);
          break;
        case Le:
          var u = t.type._context;
          Ng(u, t);
          break;
        case fe:
        case Ne:
          h0(t);
          break;
      }
    }
    var L1 = null;
    L1 = /* @__PURE__ */ new Set();
    var Nm = !1, yr = !1, cD = typeof WeakSet == "function" ? WeakSet : Set, be = null, sf = null, cf = null;
    function fD(e) {
      Tl(null, function() {
        throw e;
      }), td();
    }
    var dD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ie)
        try {
          il(), t.componentWillUnmount();
        } finally {
          al(e);
        }
      else
        t.componentWillUnmount();
    };
    function M1(e, t) {
      try {
        Ju(Qn, e);
      } catch (a) {
        qt(e, t, a);
      }
    }
    function JS(e, t, a) {
      try {
        dD(e, a);
      } catch (i) {
        qt(e, t, i);
      }
    }
    function pD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        qt(e, t, i);
      }
    }
    function N1(e, t) {
      try {
        A1(e);
      } catch (a) {
        qt(e, t, a);
      }
    }
    function ff(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ae && We && e.mode & Ie)
              try {
                il(), i = a(null);
              } finally {
                al(e);
              }
            else
              i = a(null);
          } catch (u) {
            qt(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", rt(e));
        } else
          a.current = null;
    }
    function zm(e, t, a) {
      try {
        a();
      } catch (i) {
        qt(e, t, i);
      }
    }
    var z1 = !1;
    function vD(e, t) {
      Dx(e.containerInfo), be = t, hD();
      var a = z1;
      return z1 = !1, a;
    }
    function hD() {
      for (; be !== null; ) {
        var e = be, t = e.child;
        (e.subtreeFlags & Su) !== He && t !== null ? (t.return = e, be = t) : mD();
      }
    }
    function mD() {
      for (; be !== null; ) {
        var e = be;
        At(e);
        try {
          yD(e);
        } catch (a) {
          qt(e, e.return, a);
        }
        xn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, be = t;
          return;
        }
        be = e.return;
      }
    }
    function yD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & na) !== He) {
        switch (At(e), e.tag) {
          case $:
          case Ee:
          case qe:
            break;
          case G: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ps && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ei(e.type, i), u);
              {
                var v = L1;
                f === void 0 && !v.has(e.type) && (v.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", rt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case I: {
            {
              var h = e.stateNode;
              Zx(h.containerInfo);
            }
            break;
          }
          case ie:
          case Re:
          case q:
          case Nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        xn();
      }
    }
    function xi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var v = f.destroy;
            f.destroy = void 0, v !== void 0 && ((e & hr) !== va ? Js(t) : (e & Qn) !== va && ec(t), (e & tl) !== va && Up(!0), zm(t, a, v), (e & tl) !== va && Up(!1), (e & hr) !== va ? Qv() : (e & Qn) !== va && Eu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ju(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & hr) !== va ? Yv(t) : (e & Qn) !== va && Wv(t);
            var f = s.create;
            (e & tl) !== va && Up(!0), s.destroy = f(), (e & tl) !== va && Up(!1), (e & hr) !== va ? pd() : (e & Qn) !== va && Gv();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var h = void 0;
                (s.tag & Qn) !== He ? h = "useLayoutEffect" : (s.tag & tl) !== He ? h = "useInsertionEffect" : h = "useEffect";
                var S = void 0;
                v === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? S = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + v, g("%s must not return anything besides a function, which is used for clean-up.%s", h, S);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function gD(e, t) {
      if ((t.flags & lt) !== He)
        switch (t.tag) {
          case je: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = n1(), v = t.alternate === null ? "mount" : "update";
            t1() && (v = "nested-update"), typeof s == "function" && s(u, v, a, f);
            var h = t.return;
            e:
              for (; h !== null; ) {
                switch (h.tag) {
                  case I:
                    var S = h.stateNode;
                    S.passiveEffectDuration += a;
                    break e;
                  case je:
                    var T = h.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                h = h.return;
              }
            break;
          }
        }
    }
    function SD(e, t, a, i) {
      if ((a.flags & rr) !== He)
        switch (a.tag) {
          case $:
          case Ee:
          case qe: {
            if (!yr)
              if (a.mode & Ie)
                try {
                  il(), Ju(Qn | Yn, a);
                } finally {
                  al(a);
                }
              else
                Ju(Qn | Yn, a);
            break;
          }
          case G: {
            var u = a.stateNode;
            if (a.flags & lt && !yr)
              if (t === null)
                if (a.type === a.elementType && !ps && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(a) || "instance")), a.mode & Ie)
                  try {
                    il(), u.componentDidMount();
                  } finally {
                    al(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ei(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ps && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(a) || "instance")), a.mode & Ie)
                  try {
                    il(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    al(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !ps && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", rt(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", rt(a) || "instance")), hC(a, v, u));
            break;
          }
          case I: {
            var h = a.updateQueue;
            if (h !== null) {
              var S = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    S = a.child.stateNode;
                    break;
                  case G:
                    S = a.child.stateNode;
                    break;
                }
              hC(a, h, S);
            }
            break;
          }
          case ie: {
            var T = a.stateNode;
            if (t === null && a.flags & lt) {
              var O = a.type, _ = a.memoizedProps;
              Hx(T, O, _);
            }
            break;
          }
          case Re:
            break;
          case q:
            break;
          case je: {
            {
              var U = a.memoizedProps, F = U.onCommit, j = U.onRender, me = a.stateNode.effectDuration, Be = n1(), Me = t === null ? "mount" : "update";
              t1() && (Me = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, Me, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Be);
              {
                typeof F == "function" && F(a.memoizedProps.id, Me, me, Be), m_(a);
                var gt = a.return;
                e:
                  for (; gt !== null; ) {
                    switch (gt.tag) {
                      case I:
                        var ht = gt.stateNode;
                        ht.effectDuration += me;
                        break e;
                      case je:
                        var M = gt.stateNode;
                        M.effectDuration += me;
                        break e;
                    }
                    gt = gt.return;
                  }
              }
            }
            break;
          }
          case Y: {
            DD(e, a);
            break;
          }
          case ot:
          case Nt:
          case Qe:
          case fe:
          case Ne:
          case et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      yr || a.flags & xr && A1(a);
    }
    function ED(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          if (e.mode & Ie)
            try {
              il(), M1(e, e.return);
            } finally {
              al(e);
            }
          else
            M1(e, e.return);
          break;
        }
        case G: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && pD(e, e.return, t), N1(e, e.return);
          break;
        }
        case ie: {
          N1(e, e.return);
          break;
        }
      }
    }
    function CD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Gx(u) : Xx(i.stateNode, i.memoizedProps);
            } catch (f) {
              qt(e, e.return, f);
            }
          }
        } else if (i.tag === Re) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? qx(s) : Kx(s, i.memoizedProps);
            } catch (f) {
              qt(e, e.return, f);
            }
        } else if (!((i.tag === fe || i.tag === Ne) && i.memoizedState !== null && i !== e)) {
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
    function A1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ie)
            try {
              il(), u = t(i);
            } finally {
              al(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", rt(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", rt(e)), t.current = i;
      }
    }
    function TD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function U1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, U1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && kw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function RD(e) {
      for (var t = e.return; t !== null; ) {
        if (F1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function F1(e) {
      return e.tag === ie || e.tag === I || e.tag === q;
    }
    function H1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || F1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== Re && t.tag !== Ct; ) {
            if (t.flags & Yt || t.child === null || t.tag === q)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Yt))
            return t.stateNode;
        }
    }
    function xD(e) {
      var t = RD(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & kt && (VE(a), t.flags &= ~kt);
          var i = H1(e);
          t0(e, i, a);
          break;
        }
        case I:
        case q: {
          var u = t.stateNode.containerInfo, s = H1(e);
          e0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function e0(e, t, a) {
      var i = e.tag, u = i === ie || i === Re;
      if (u) {
        var s = e.stateNode;
        t ? Ix(a, s, t) : Px(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          e0(f, t, a);
          for (var v = f.sibling; v !== null; )
            e0(v, t, a), v = v.sibling;
        }
      }
    }
    function t0(e, t, a) {
      var i = e.tag, u = i === ie || i === Re;
      if (u) {
        var s = e.stateNode;
        t ? $x(a, s, t) : Bx(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          t0(f, t, a);
          for (var v = f.sibling; v !== null; )
            t0(v, t, a), v = v.sibling;
        }
      }
    }
    var gr = null, wi = !1;
    function wD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ie: {
                gr = i.stateNode, wi = !1;
                break e;
              }
              case I: {
                gr = i.stateNode.containerInfo, wi = !0;
                break e;
              }
              case q: {
                gr = i.stateNode.containerInfo, wi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (gr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        V1(e, t, a), gr = null, wi = !1;
      }
      TD(a);
    }
    function eo(e, t, a) {
      for (var i = a.child; i !== null; )
        V1(e, t, i), i = i.sibling;
    }
    function V1(e, t, a) {
      switch (fd(a), a.tag) {
        case ie:
          yr || ff(a, t);
        case Re: {
          {
            var i = gr, u = wi;
            gr = null, eo(e, t, a), gr = i, wi = u, gr !== null && (wi ? Qx(gr, a.stateNode) : Yx(gr, a.stateNode));
          }
          return;
        }
        case Ct: {
          gr !== null && (wi ? Wx(gr, a.stateNode) : dg(gr, a.stateNode));
          return;
        }
        case q: {
          {
            var s = gr, f = wi;
            gr = a.stateNode.containerInfo, wi = !0, eo(e, t, a), gr = s, wi = f;
          }
          return;
        }
        case $:
        case Ee:
        case ft:
        case qe: {
          if (!yr) {
            var v = a.updateQueue;
            if (v !== null) {
              var h = v.lastEffect;
              if (h !== null) {
                var S = h.next, T = S;
                do {
                  var O = T, _ = O.destroy, U = O.tag;
                  _ !== void 0 && ((U & tl) !== va ? zm(a, t, _) : (U & Qn) !== va && (ec(a), a.mode & Ie ? (il(), zm(a, t, _), al(a)) : zm(a, t, _), Eu())), T = T.next;
                } while (T !== S);
              }
            }
          }
          eo(e, t, a);
          return;
        }
        case G: {
          if (!yr) {
            ff(a, t);
            var F = a.stateNode;
            typeof F.componentWillUnmount == "function" && JS(a, t, F);
          }
          eo(e, t, a);
          return;
        }
        case Qe: {
          eo(e, t, a);
          return;
        }
        case fe: {
          if (
            // TODO: Remove this dead flag
            a.mode & ct
          ) {
            var j = yr;
            yr = j || a.memoizedState !== null, eo(e, t, a), yr = j;
          } else
            eo(e, t, a);
          break;
        }
        default: {
          eo(e, t, a);
          return;
        }
      }
    }
    function bD(e) {
      e.memoizedState;
    }
    function DD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && dw(s);
          }
        }
      }
    }
    function j1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new cD()), t.forEach(function(i) {
          var u = R_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), $n)
              if (sf !== null && cf !== null)
                Ap(cf, sf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function _D(e, t, a) {
      sf = a, cf = e, At(t), B1(t, e), At(t), sf = null, cf = null;
    }
    function bi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            wD(e, t, s);
          } catch (h) {
            qt(s, t, h);
          }
        }
      var f = fy();
      if (t.subtreeFlags & Dr)
        for (var v = t.child; v !== null; )
          At(v), B1(v, e), v = v.sibling;
      At(f);
    }
    function B1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case $:
        case Ee:
        case ft:
        case qe: {
          if (bi(t, e), ll(e), u & lt) {
            try {
              xi(tl | Yn, e, e.return), Ju(tl | Yn, e);
            } catch (Ge) {
              qt(e, e.return, Ge);
            }
            if (e.mode & Ie) {
              try {
                il(), xi(Qn | Yn, e, e.return);
              } catch (Ge) {
                qt(e, e.return, Ge);
              }
              al(e);
            } else
              try {
                xi(Qn | Yn, e, e.return);
              } catch (Ge) {
                qt(e, e.return, Ge);
              }
          }
          return;
        }
        case G: {
          bi(t, e), ll(e), u & xr && i !== null && ff(i, i.return);
          return;
        }
        case ie: {
          bi(t, e), ll(e), u & xr && i !== null && ff(i, i.return);
          {
            if (e.flags & kt) {
              var s = e.stateNode;
              try {
                VE(s);
              } catch (Ge) {
                qt(e, e.return, Ge);
              }
            }
            if (u & lt) {
              var f = e.stateNode;
              if (f != null) {
                var v = e.memoizedProps, h = i !== null ? i.memoizedProps : v, S = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Vx(f, T, S, h, v, e);
                  } catch (Ge) {
                    qt(e, e.return, Ge);
                  }
              }
            }
          }
          return;
        }
        case Re: {
          if (bi(t, e), ll(e), u & lt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var O = e.stateNode, _ = e.memoizedProps, U = i !== null ? i.memoizedProps : _;
            try {
              jx(O, U, _);
            } catch (Ge) {
              qt(e, e.return, Ge);
            }
          }
          return;
        }
        case I: {
          if (bi(t, e), ll(e), u & lt && i !== null) {
            var F = i.memoizedState;
            if (F.isDehydrated)
              try {
                fw(t.containerInfo);
              } catch (Ge) {
                qt(e, e.return, Ge);
              }
          }
          return;
        }
        case q: {
          bi(t, e), ll(e);
          return;
        }
        case Y: {
          bi(t, e), ll(e);
          var j = e.child;
          if (j.flags & Fi) {
            var me = j.stateNode, Be = j.memoizedState, Me = Be !== null;
            if (me.isHidden = Me, Me) {
              var gt = j.alternate !== null && j.alternate.memoizedState !== null;
              gt || o_();
            }
          }
          if (u & lt) {
            try {
              bD(e);
            } catch (Ge) {
              qt(e, e.return, Ge);
            }
            j1(e);
          }
          return;
        }
        case fe: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ct
          ) {
            var M = yr;
            yr = M || ht, bi(t, e), yr = M;
          } else
            bi(t, e);
          if (ll(e), u & Fi) {
            var B = e.stateNode, N = e.memoizedState, ee = N !== null, ye = e;
            if (B.isHidden = ee, ee && !ht && (ye.mode & ct) !== $e) {
              be = ye;
              for (var de = ye.child; de !== null; )
                be = de, OD(de), de = de.sibling;
            }
            CD(ye, ee);
          }
          return;
        }
        case ot: {
          bi(t, e), ll(e), u & lt && j1(e);
          return;
        }
        case Qe:
          return;
        default: {
          bi(t, e), ll(e);
          return;
        }
      }
    }
    function ll(e) {
      var t = e.flags;
      if (t & Yt) {
        try {
          xD(e);
        } catch (a) {
          qt(e, e.return, a);
        }
        e.flags &= ~Yt;
      }
      t & ra && (e.flags &= ~ra);
    }
    function kD(e, t, a) {
      sf = a, cf = t, be = e, P1(e, t, a), sf = null, cf = null;
    }
    function P1(e, t, a) {
      for (var i = (e.mode & ct) !== $e; be !== null; ) {
        var u = be, s = u.child;
        if (u.tag === fe && i) {
          var f = u.memoizedState !== null, v = f || Nm;
          if (v) {
            n0(e, t, a);
            continue;
          } else {
            var h = u.alternate, S = h !== null && h.memoizedState !== null, T = S || yr, O = Nm, _ = yr;
            Nm = v, yr = T, yr && !_ && (be = u, LD(u));
            for (var U = s; U !== null; )
              be = U, P1(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            be = u, Nm = O, yr = _, n0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & rr) !== He && s !== null ? (s.return = u, be = s) : n0(e, t, a);
      }
    }
    function n0(e, t, a) {
      for (; be !== null; ) {
        var i = be;
        if ((i.flags & rr) !== He) {
          var u = i.alternate;
          At(i);
          try {
            SD(t, u, i, a);
          } catch (f) {
            qt(i, i.return, f);
          }
          xn();
        }
        if (i === e) {
          be = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, be = s;
          return;
        }
        be = i.return;
      }
    }
    function OD(e) {
      for (; be !== null; ) {
        var t = be, a = t.child;
        switch (t.tag) {
          case $:
          case Ee:
          case ft:
          case qe: {
            if (t.mode & Ie)
              try {
                il(), xi(Qn, t, t.return);
              } finally {
                al(t);
              }
            else
              xi(Qn, t, t.return);
            break;
          }
          case G: {
            ff(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && JS(t, t.return, i);
            break;
          }
          case ie: {
            ff(t, t.return);
            break;
          }
          case fe: {
            var u = t.memoizedState !== null;
            if (u) {
              $1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, be = a) : $1(e);
      }
    }
    function $1(e) {
      for (; be !== null; ) {
        var t = be;
        if (t === e) {
          be = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, be = a;
          return;
        }
        be = t.return;
      }
    }
    function LD(e) {
      for (; be !== null; ) {
        var t = be, a = t.child;
        if (t.tag === fe) {
          var i = t.memoizedState !== null;
          if (i) {
            I1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, be = a) : I1(e);
      }
    }
    function I1(e) {
      for (; be !== null; ) {
        var t = be;
        At(t);
        try {
          ED(t);
        } catch (i) {
          qt(t, t.return, i);
        }
        if (xn(), t === e) {
          be = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, be = a;
          return;
        }
        be = t.return;
      }
    }
    function MD(e, t, a, i) {
      be = t, ND(t, e, a, i);
    }
    function ND(e, t, a, i) {
      for (; be !== null; ) {
        var u = be, s = u.child;
        (u.subtreeFlags & aa) !== He && s !== null ? (s.return = u, be = s) : zD(e, t, a, i);
      }
    }
    function zD(e, t, a, i) {
      for (; be !== null; ) {
        var u = be;
        if ((u.flags & Xt) !== He) {
          At(u);
          try {
            AD(t, u, a, i);
          } catch (f) {
            qt(u, u.return, f);
          }
          xn();
        }
        if (u === e) {
          be = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, be = s;
          return;
        }
        be = u.return;
      }
    }
    function AD(e, t, a, i) {
      switch (t.tag) {
        case $:
        case Ee:
        case qe: {
          if (t.mode & Ie) {
            NS();
            try {
              Ju(hr | Yn, t);
            } finally {
              MS(t);
            }
          } else
            Ju(hr | Yn, t);
          break;
        }
      }
    }
    function UD(e) {
      be = e, FD();
    }
    function FD() {
      for (; be !== null; ) {
        var e = be, t = e.child;
        if ((be.flags & bt) !== He) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              be = u, jD(u, e);
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
            be = e;
          }
        }
        (e.subtreeFlags & aa) !== He && t !== null ? (t.return = e, be = t) : HD();
      }
    }
    function HD() {
      for (; be !== null; ) {
        var e = be;
        (e.flags & Xt) !== He && (At(e), VD(e), xn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, be = t;
          return;
        }
        be = e.return;
      }
    }
    function VD(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          e.mode & Ie ? (NS(), xi(hr | Yn, e, e.return), MS(e)) : xi(hr | Yn, e, e.return);
          break;
        }
      }
    }
    function jD(e, t) {
      for (; be !== null; ) {
        var a = be;
        At(a), PD(a, t), xn();
        var i = a.child;
        i !== null ? (i.return = a, be = i) : BD(e);
      }
    }
    function BD(e) {
      for (; be !== null; ) {
        var t = be, a = t.sibling, i = t.return;
        if (U1(t), t === e) {
          be = null;
          return;
        }
        if (a !== null) {
          a.return = i, be = a;
          return;
        }
        be = i;
      }
    }
    function PD(e, t) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          e.mode & Ie ? (NS(), xi(hr, e, t), MS(e)) : xi(hr, e, t);
          break;
        }
      }
    }
    function $D(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          try {
            Ju(Qn | Yn, e);
          } catch (a) {
            qt(e, e.return, a);
          }
          break;
        }
        case G: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            qt(e, e.return, a);
          }
          break;
        }
      }
    }
    function ID(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          try {
            Ju(hr | Yn, e);
          } catch (t) {
            qt(e, e.return, t);
          }
          break;
        }
      }
    }
    function YD(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          try {
            xi(Qn | Yn, e, e.return);
          } catch (a) {
            qt(e, e.return, a);
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
    function QD(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe:
          try {
            xi(hr | Yn, e, e.return);
          } catch (t) {
            qt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var xp = Symbol.for;
      xp("selector.component"), xp("selector.has_pseudo_class"), xp("selector.role"), xp("selector.test_id"), xp("selector.text");
    }
    var WD = [];
    function GD() {
      WD.forEach(function(e) {
        return e();
      });
    }
    var qD = m.ReactCurrentActQueue;
    function XD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Y1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && qD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var KD = Math.ceil, r0 = m.ReactCurrentDispatcher, a0 = m.ReactCurrentOwner, Sr = m.ReactCurrentBatchConfig, Di = m.ReactCurrentActQueue, qn = (
      /*             */
      0
    ), Q1 = (
      /*               */
      1
    ), Er = (
      /*                */
      2
    ), qa = (
      /*                */
      4
    ), Kl = 0, wp = 1, vs = 2, Am = 3, bp = 4, W1 = 5, i0 = 6, yt = qn, Yr = null, vn = null, Xn = P, ul = P, l0 = Iu(P), Kn = Kl, Dp = null, Um = P, _p = P, Fm = P, kp = null, ha = null, u0 = 0, G1 = 500, q1 = 1 / 0, ZD = 500, Zl = null;
    function Op() {
      q1 = en() + ZD;
    }
    function X1() {
      return q1;
    }
    var Hm = !1, o0 = null, df = null, hs = !1, to = null, Lp = P, s0 = [], c0 = null, JD = 50, Mp = 0, f0 = null, d0 = !1, Vm = !1, e_ = 50, pf = 0, jm = null, Np = It, Bm = P, K1 = !1;
    function Pm() {
      return Yr;
    }
    function Qr() {
      return (yt & (Er | qa)) !== qn ? en() : (Np !== It || (Np = en()), Np);
    }
    function no(e) {
      var t = e.mode;
      if ((t & ct) === $e)
        return Ye;
      if ((yt & Er) !== qn && Xn !== P)
        return bn(Xn);
      var a = Xw() !== qw;
      if (a) {
        if (Sr.transition !== null) {
          var i = Sr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Bm === mt && (Bm = Sd()), Bm;
      }
      var u = oa();
      if (u !== mt)
        return u;
      var s = zx();
      return s;
    }
    function t_(e) {
      var t = e.mode;
      return (t & ct) === $e ? Ye : Ny();
    }
    function Zn(e, t, a, i) {
      w_(), K1 && g("useInsertionEffect must not schedule updates."), d0 && (Vm = !0), zl(e, a, i), (yt & Er) !== P && e === Yr ? __(t) : ($n && xd(e, t, a), k_(t), e === Yr && ((yt & Er) === qn && (_p = ut(_p, a)), Kn === bp && ro(e, Xn)), ma(e, i), a === Ye && yt === qn && (t.mode & ct) === $e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Di.isBatchingLegacy && (Op(), XE()));
    }
    function n_(e, t, a) {
      var i = e.current;
      i.lanes = t, zl(e, t, a), ma(e, a);
    }
    function r_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (yt & Er) !== qn
      );
    }
    function ma(e, t) {
      var a = e.callbackNode;
      Oy(e, t);
      var i = jo(e, e === Yr ? Xn : P);
      if (i === P) {
        a !== null && pT(a), e.callbackNode = null, e.callbackPriority = mt;
        return;
      }
      var u = En(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Di.current !== null && a !== S0)) {
        a == null && s !== Ye && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && pT(a);
      var f;
      if (u === Ye)
        e.tag === Yu ? (Di.isBatchingLegacy !== null && (Di.didScheduleLegacyUpdate = !0), Mw(eT.bind(null, e))) : qE(eT.bind(null, e)), Di.current !== null ? Di.current.push(Qu) : Ux(function() {
          (yt & (Er | qa)) === qn && Qu();
        }), f = null;
      else {
        var v;
        switch (Yo(i)) {
          case ar:
            v = Xs;
            break;
          case In:
            v = Br;
            break;
          case di:
            v = Va;
            break;
          case $o:
            v = Vi;
            break;
          default:
            v = Va;
            break;
        }
        f = E0(v, Z1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function Z1(e, t) {
      if (wb(), Np = It, Bm = P, (yt & (Er | qa)) !== qn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = eu();
      if (i && e.callbackNode !== a)
        return null;
      var u = jo(e, e === Yr ? Xn : P);
      if (u === P)
        return null;
      var s = !Po(e, u) && !eh(e, u) && !t, f = s ? p_(e, u) : Im(e, u);
      if (f !== Kl) {
        if (f === vs) {
          var v = yd(e);
          v !== P && (u = v, f = p0(e, v));
        }
        if (f === wp) {
          var h = Dp;
          throw ms(e, P), ro(e, u), ma(e, en()), h;
        }
        if (f === i0)
          ro(e, u);
        else {
          var S = !Po(e, u), T = e.current.alternate;
          if (S && !i_(T)) {
            if (f = Im(e, u), f === vs) {
              var O = yd(e);
              O !== P && (u = O, f = p0(e, O));
            }
            if (f === wp) {
              var _ = Dp;
              throw ms(e, P), ro(e, u), ma(e, en()), _;
            }
          }
          e.finishedWork = T, e.finishedLanes = u, a_(e, f, u);
        }
      }
      return ma(e, en()), e.callbackNode === a ? Z1.bind(null, e) : null;
    }
    function p0(e, t) {
      var a = kp;
      if (_n(e)) {
        var i = ms(e, t);
        i.flags |= on, ww(e.containerInfo);
      }
      var u = Im(e, t);
      if (u !== vs) {
        var s = ha;
        ha = a, s !== null && J1(s);
      }
      return u;
    }
    function J1(e) {
      ha === null ? ha = e : ha.push.apply(ha, e);
    }
    function a_(e, t, a) {
      switch (t) {
        case Kl:
        case wp:
          throw new Error("Root did not complete. This is a bug in React.");
        case vs: {
          ys(e, ha, Zl);
          break;
        }
        case Am: {
          if (ro(e, a), Ec(a) && // do not delay if we're inside an act() scope
          !vT()) {
            var i = u0 + G1 - en();
            if (i > 10) {
              var u = jo(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!Nl(s, a)) {
                Qr(), Td(e, s);
                break;
              }
              e.timeoutHandle = cg(ys.bind(null, e, ha, Zl), i);
              break;
            }
          }
          ys(e, ha, Zl);
          break;
        }
        case bp: {
          if (ro(e, a), Jv(a))
            break;
          if (!vT()) {
            var f = Zv(e, a), v = f, h = en() - v, S = x_(h) - h;
            if (S > 10) {
              e.timeoutHandle = cg(ys.bind(null, e, ha, Zl), S);
              break;
            }
          }
          ys(e, ha, Zl);
          break;
        }
        case W1: {
          ys(e, ha, Zl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function i_(e) {
      for (var t = e; ; ) {
        if (t.flags & No) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, v = s.value;
                try {
                  if (!we(f(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var h = t.child;
        if (t.subtreeFlags & No && h !== null) {
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
    function ro(e, t) {
      t = Du(t, Fm), t = Du(t, _p), Cd(e, t);
    }
    function eT(e) {
      if (bb(), (yt & (Er | qa)) !== qn)
        throw new Error("Should not already be working.");
      eu();
      var t = jo(e, P);
      if (!Lr(t, Ye))
        return ma(e, en()), null;
      var a = Im(e, t);
      if (e.tag !== Yu && a === vs) {
        var i = yd(e);
        i !== P && (t = i, a = p0(e, i));
      }
      if (a === wp) {
        var u = Dp;
        throw ms(e, P), ro(e, t), ma(e, en()), u;
      }
      if (a === i0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ys(e, ha, Zl), ma(e, en()), null;
    }
    function l_(e, t) {
      t !== P && (_u(e, ut(t, Ye)), ma(e, en()), (yt & (Er | qa)) === qn && (Op(), Qu()));
    }
    function v0(e, t) {
      var a = yt;
      yt |= Q1;
      try {
        return e(t);
      } finally {
        yt = a, yt === qn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Di.isBatchingLegacy && (Op(), XE());
      }
    }
    function u_(e, t, a, i, u) {
      var s = oa(), f = Sr.transition;
      try {
        return Sr.transition = null, Dn(ar), e(t, a, i, u);
      } finally {
        Dn(s), Sr.transition = f, yt === qn && Op();
      }
    }
    function Jl(e) {
      to !== null && to.tag === Yu && (yt & (Er | qa)) === qn && eu();
      var t = yt;
      yt |= Q1;
      var a = Sr.transition, i = oa();
      try {
        return Sr.transition = null, Dn(ar), e ? e() : void 0;
      } finally {
        Dn(i), Sr.transition = a, yt = t, (yt & (Er | qa)) === qn && Qu();
      }
    }
    function tT() {
      return (yt & (Er | qa)) !== qn;
    }
    function $m(e, t) {
      Nr(l0, ul, e), ul = ut(ul, t);
    }
    function h0(e) {
      ul = l0.current, Mr(l0, e);
    }
    function ms(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== fg && (e.timeoutHandle = fg, Ax(a)), vn !== null)
        for (var i = vn.return; i !== null; ) {
          var u = i.alternate;
          O1(u, i), i = i.return;
        }
      Yr = e;
      var s = gs(e.current, null);
      return vn = s, Xn = ul = t, Kn = Kl, Dp = null, Um = P, _p = P, Fm = P, kp = null, ha = null, eb(), Si.discardPendingWarnings(), s;
    }
    function nT(e, t) {
      do {
        var a = vn;
        try {
          if (Kh(), MC(), xn(), a0.current = null, a === null || a.return === null) {
            Kn = wp, Dp = t, vn = null;
            return;
          }
          if (Ae && a.mode & Ie && km(a, !0), at)
            if (xl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              qv(a, i, Xn);
            } else
              tc(a, t, Xn);
          Lb(e, a.return, a, t, Xn), lT(a);
        } catch (u) {
          t = u, vn === a && a !== null ? (a = a.return, vn = a) : a = vn;
          continue;
        }
        return;
      } while (!0);
    }
    function rT() {
      var e = r0.current;
      return r0.current = xm, e === null ? xm : e;
    }
    function aT(e) {
      r0.current = e;
    }
    function o_() {
      u0 = en();
    }
    function zp(e) {
      Um = ut(e, Um);
    }
    function s_() {
      Kn === Kl && (Kn = Am);
    }
    function m0() {
      (Kn === Kl || Kn === Am || Kn === vs) && (Kn = bp), Yr !== null && (Bo(Um) || Bo(_p)) && ro(Yr, Xn);
    }
    function c_(e) {
      Kn !== bp && (Kn = vs), kp === null ? kp = [e] : kp.push(e);
    }
    function f_() {
      return Kn === Kl;
    }
    function Im(e, t) {
      var a = yt;
      yt |= Er;
      var i = rT();
      if (Yr !== e || Xn !== t) {
        if ($n) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ap(e, Xn), u.clear()), Rc(e, t);
        }
        Zl = wd(), ms(e, t);
      }
      ka(t);
      do
        try {
          d_();
          break;
        } catch (s) {
          nT(e, s);
        }
      while (!0);
      if (Kh(), yt = a, aT(i), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Tu(), Yr = null, Xn = P, Kn;
    }
    function d_() {
      for (; vn !== null; )
        iT(vn);
    }
    function p_(e, t) {
      var a = yt;
      yt |= Er;
      var i = rT();
      if (Yr !== e || Xn !== t) {
        if ($n) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ap(e, Xn), u.clear()), Rc(e, t);
        }
        Zl = wd(), Op(), ms(e, t);
      }
      ka(t);
      do
        try {
          v_();
          break;
        } catch (s) {
          nT(e, s);
        }
      while (!0);
      return Kh(), aT(i), yt = a, vn !== null ? (Uo(), Kl) : (Tu(), Yr = null, Xn = P, Kn);
    }
    function v_() {
      for (; vn !== null && !qs(); )
        iT(vn);
    }
    function iT(e) {
      var t = e.alternate;
      At(e);
      var a;
      (e.mode & Ie) !== $e ? (LS(e), a = y0(t, e, ul), km(e, !0)) : a = y0(t, e, ul), xn(), e.memoizedProps = e.pendingProps, a === null ? lT(e) : vn = a, a0.current = null;
    }
    function lT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Hr) === He) {
          At(t);
          var u = void 0;
          if ((t.mode & Ie) === $e ? u = k1(a, t, ul) : (LS(t), u = k1(a, t, ul), km(t, !1)), xn(), u !== null) {
            vn = u;
            return;
          }
        } else {
          var s = sD(a, t);
          if (s !== null) {
            s.flags &= jv, vn = s;
            return;
          }
          if ((t.mode & Ie) !== $e) {
            km(t, !1);
            for (var f = t.actualDuration, v = t.child; v !== null; )
              f += v.actualDuration, v = v.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Hr, i.subtreeFlags = He, i.deletions = null;
          else {
            Kn = i0, vn = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          vn = h;
          return;
        }
        t = i, vn = t;
      } while (t !== null);
      Kn === Kl && (Kn = W1);
    }
    function ys(e, t, a) {
      var i = oa(), u = Sr.transition;
      try {
        Sr.transition = null, Dn(ar), h_(e, t, a, i);
      } finally {
        Sr.transition = u, Dn(i);
      }
      return null;
    }
    function h_(e, t, a, i) {
      do
        eu();
      while (to !== null);
      if (b_(), (yt & (Er | qa)) !== qn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Zs(s), u === null)
        return dd(), null;
      if (s === P && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = mt;
      var f = ut(u.lanes, u.childLanes);
      Rd(e, f), e === Yr && (Yr = null, vn = null, Xn = P), ((u.subtreeFlags & aa) !== He || (u.flags & aa) !== He) && (hs || (hs = !0, c0 = a, E0(Va, function() {
        return eu(), null;
      })));
      var v = (u.subtreeFlags & (Su | Dr | rr | aa)) !== He, h = (u.flags & (Su | Dr | rr | aa)) !== He;
      if (v || h) {
        var S = Sr.transition;
        Sr.transition = null;
        var T = oa();
        Dn(ar);
        var O = yt;
        yt |= qa, a0.current = null, vD(e, u), r1(), _D(e, u, s), _x(e.containerInfo), e.current = u, Xv(s), kD(u, e, s), Cu(), $v(), yt = O, Dn(T), Sr.transition = S;
      } else
        e.current = u, r1();
      var _ = hs;
      if (hs ? (hs = !1, to = e, Lp = s) : (pf = 0, jm = null), f = e.pendingLanes, f === P && (df = null), _ || cT(e.current, !1), si(u.stateNode, i), $n && e.memoizedUpdaters.clear(), GD(), ma(e, en()), t !== null)
        for (var U = e.onRecoverableError, F = 0; F < t.length; F++) {
          var j = t[F], me = j.stack, Be = j.digest;
          U(j.value, {
            componentStack: me,
            digest: Be
          });
        }
      if (Hm) {
        Hm = !1;
        var Me = o0;
        throw o0 = null, Me;
      }
      return Lr(Lp, Ye) && e.tag !== Yu && eu(), f = e.pendingLanes, Lr(f, Ye) ? (xb(), e === f0 ? Mp++ : (Mp = 0, f0 = e)) : Mp = 0, Qu(), dd(), null;
    }
    function eu() {
      if (to !== null) {
        var e = Yo(Lp), t = Ay(di, e), a = Sr.transition, i = oa();
        try {
          return Sr.transition = null, Dn(t), y_();
        } finally {
          Dn(i), Sr.transition = a;
        }
      }
      return !1;
    }
    function m_(e) {
      s0.push(e), hs || (hs = !0, E0(Va, function() {
        return eu(), null;
      }));
    }
    function y_() {
      if (to === null)
        return !1;
      var e = c0;
      c0 = null;
      var t = to, a = Lp;
      if (to = null, Lp = P, (yt & (Er | qa)) !== qn)
        throw new Error("Cannot flush passive effects while already rendering.");
      d0 = !0, Vm = !1, Kv(a);
      var i = yt;
      yt |= qa, UD(t.current), MD(t, t.current, a, e);
      {
        var u = s0;
        s0 = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          gD(t, f);
        }
      }
      Ao(), cT(t.current, !0), yt = i, Qu(), Vm ? t === jm ? pf++ : (pf = 0, jm = t) : pf = 0, d0 = !1, Vm = !1, Bi(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uT(e) {
      return df !== null && df.has(e);
    }
    function g_(e) {
      df === null ? df = /* @__PURE__ */ new Set([e]) : df.add(e);
    }
    function S_(e) {
      Hm || (Hm = !0, o0 = e);
    }
    var E_ = S_;
    function oT(e, t, a) {
      var i = ds(a, t), u = i1(e, i, Ye), s = Gu(e, u, Ye), f = Qr();
      s !== null && (zl(s, Ye, f), ma(s, f));
    }
    function qt(e, t, a) {
      if (fD(a), Up(!1), e.tag === I) {
        oT(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === I) {
          oT(i, e, a);
          return;
        } else if (i.tag === G) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !uT(s)) {
            var f = ds(a, e), v = FS(i, f, Ye), h = Gu(i, v, Ye), S = Qr();
            h !== null && (zl(h, Ye, S), ma(h, S));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function C_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Qr();
      Td(e, a), O_(e), Yr === e && Nl(Xn, a) && (Kn === bp || Kn === Am && Ec(Xn) && en() - u0 < G1 ? ms(e, P) : Fm = ut(Fm, a)), ma(e, u);
    }
    function sT(e, t) {
      t === mt && (t = t_(e));
      var a = Qr(), i = pa(e, t);
      i !== null && (zl(i, t, a), ma(i, a));
    }
    function T_(e) {
      var t = e.memoizedState, a = mt;
      t !== null && (a = t.retryLane), sT(e, a);
    }
    function R_(e, t) {
      var a = mt, i;
      switch (e.tag) {
        case Y:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ot:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), sT(e, a);
    }
    function x_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : KD(e / 1960) * 1960;
    }
    function w_() {
      if (Mp > JD)
        throw Mp = 0, f0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      pf > e_ && (pf = 0, jm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function b_() {
      Si.flushLegacyContextWarning(), Si.flushPendingUnsafeLifecycleWarnings();
    }
    function cT(e, t) {
      At(e), Ym(e, br, YD), t && Ym(e, Rl, QD), Ym(e, br, $D), t && Ym(e, Rl, ID), xn();
    }
    function Ym(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== He ? i = i.child : ((i.flags & t) !== He && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Qm = null;
    function fT(e) {
      {
        if ((yt & Er) !== qn || !(e.mode & ct))
          return;
        var t = e.tag;
        if (t !== pe && t !== I && t !== G && t !== $ && t !== Ee && t !== ft && t !== qe)
          return;
        var a = rt(e) || "ReactComponent";
        if (Qm !== null) {
          if (Qm.has(a))
            return;
          Qm.add(a);
        } else
          Qm = /* @__PURE__ */ new Set([a]);
        var i = gn;
        try {
          At(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? At(e) : xn();
        }
      }
    }
    var y0;
    {
      var D_ = null;
      y0 = function(e, t, a) {
        var i = ST(D_, t);
        try {
          return x1(e, t, a);
        } catch (s) {
          if (jw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Kh(), MC(), O1(e, t), ST(t, i), t.mode & Ie && LS(t), Tl(null, x1, null, e, t, a), _y()) {
            var u = td();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var dT = !1, g0;
    g0 = /* @__PURE__ */ new Set();
    function __(e) {
      if (Zr && !Cb())
        switch (e.tag) {
          case $:
          case Ee:
          case qe: {
            var t = vn && rt(vn) || "Unknown", a = t;
            if (!g0.has(a)) {
              g0.add(a);
              var i = rt(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case G: {
            dT || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), dT = !0);
            break;
          }
        }
    }
    function Ap(e, t) {
      if ($n) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          xd(e, i, t);
        });
      }
    }
    var S0 = {};
    function E0(e, t) {
      {
        var a = Di.current;
        return a !== null ? (a.push(t), S0) : Gs(e, t);
      }
    }
    function pT(e) {
      if (e !== S0)
        return Pv(e);
    }
    function vT() {
      return Di.current !== null;
    }
    function k_(e) {
      {
        if (e.mode & ct) {
          if (!Y1())
            return;
        } else if (!XD() || yt !== qn || e.tag !== $ && e.tag !== Ee && e.tag !== qe)
          return;
        if (Di.current === null) {
          var t = gn;
          try {
            At(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, rt(e));
          } finally {
            t ? At(e) : xn();
          }
        }
      }
    }
    function O_(e) {
      e.tag !== Yu && Y1() && Di.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Up(e) {
      K1 = e;
    }
    var Xa = null, vf = null, L_ = function(e) {
      Xa = e;
    };
    function hf(e) {
      {
        if (Xa === null)
          return e;
        var t = Xa(e);
        return t === void 0 ? e : t.current;
      }
    }
    function C0(e) {
      return hf(e);
    }
    function T0(e) {
      {
        if (Xa === null)
          return e;
        var t = Xa(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = hf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: iu,
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
    function hT(e, t) {
      {
        if (Xa === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case G: {
            typeof i == "function" && (u = !0);
            break;
          }
          case $: {
            (typeof i == "function" || s === fr) && (u = !0);
            break;
          }
          case Ee: {
            (s === iu || s === fr) && (u = !0);
            break;
          }
          case ft:
          case qe: {
            (s === lu || s === fr) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Xa(a);
          if (f !== void 0 && f === Xa(i))
            return !0;
        }
        return !1;
      }
    }
    function mT(e) {
      {
        if (Xa === null || typeof WeakSet != "function")
          return;
        vf === null && (vf = /* @__PURE__ */ new WeakSet()), vf.add(e);
      }
    }
    var M_ = function(e, t) {
      {
        if (Xa === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        eu(), Jl(function() {
          R0(e.current, i, a);
        });
      }
    }, N_ = function(e, t) {
      {
        if (e.context !== La)
          return;
        eu(), Jl(function() {
          Fp(t, e, null, null);
        });
      }
    };
    function R0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, v = e.type, h = null;
        switch (f) {
          case $:
          case qe:
          case G:
            h = v;
            break;
          case Ee:
            h = v.render;
            break;
        }
        if (Xa === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = !1, T = !1;
        if (h !== null) {
          var O = Xa(h);
          O !== void 0 && (a.has(O) ? T = !0 : t.has(O) && (f === G ? T = !0 : S = !0));
        }
        if (vf !== null && (vf.has(e) || i !== null && vf.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || S) {
          var _ = pa(e, Ye);
          _ !== null && Zn(_, e, Ye, It);
        }
        u !== null && !T && R0(u, t, a), s !== null && R0(s, t, a);
      }
    }
    var z_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return x0(e.current, i, a), a;
      }
    };
    function x0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, v = null;
        switch (s) {
          case $:
          case qe:
          case G:
            v = f;
            break;
          case Ee:
            v = f.render;
            break;
        }
        var h = !1;
        v !== null && t.has(v) && (h = !0), h ? A_(e, a) : i !== null && x0(i, t, a), u !== null && x0(u, t, a);
      }
    }
    function A_(e, t) {
      {
        var a = U_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function U_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
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
    var w0;
    {
      w0 = !1;
      try {
        var yT = Object.preventExtensions({});
      } catch {
        w0 = !0;
      }
    }
    function F_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = He, this.subtreeFlags = He, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !w0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ma = function(e, t, a, i) {
      return new F_(e, t, a, i);
    };
    function b0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function H_(e) {
      return typeof e == "function" && !b0(e) && e.defaultProps === void 0;
    }
    function V_(e) {
      if (typeof e == "function")
        return b0(e) ? G : $;
      if (e != null) {
        var t = e.$$typeof;
        if (t === iu)
          return Ee;
        if (t === lu)
          return ft;
      }
      return pe;
    }
    function gs(e, t) {
      var a = e.alternate;
      a === null ? (a = Ma(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = He, a.subtreeFlags = He, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Pn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case pe:
        case $:
        case qe:
          a.type = hf(e.type);
          break;
        case G:
          a.type = C0(e.type);
          break;
        case Ee:
          a.type = T0(e.type);
          break;
      }
      return a;
    }
    function j_(e, t) {
      e.flags &= Pn | Yt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = He, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = He, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function B_(e, t, a) {
      var i;
      return e === $h ? (i = ct, t === !0 && (i |= tn, i |= la)) : i = $e, $n && (i |= Ie), Ma(I, null, null, i);
    }
    function D0(e, t, a, i, u, s) {
      var f = pe, v = e;
      if (typeof e == "function")
        b0(e) ? (f = G, v = C0(v)) : v = hf(v);
      else if (typeof e == "string")
        f = ie;
      else
        e:
          switch (e) {
            case Ja:
              return ao(a.children, u, s, t);
            case au:
              f = Ze, u |= tn, (u & ct) !== $e && (u |= la);
              break;
            case oo:
              return P_(a, u, s, t);
            case Ua:
              return $_(a, u, s, t);
            case so:
              return I_(a, u, s, t);
            case Rf:
              return gT(a, u, s, t);
            case Kp:
            case qp:
            case ly:
            case uy:
            case Xp:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Cf:
                    f = Le;
                    break e;
                  case Tf:
                    f = Mt;
                    break e;
                  case iu:
                    f = Ee, v = T0(v);
                    break e;
                  case lu:
                    f = ft;
                    break e;
                  case fr:
                    f = Jt, v = null;
                    break e;
                }
              var h = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var S = i ? rt(i) : null;
                S && (h += `

Check the render method of \`` + S + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
            }
          }
      var T = Ma(f, a, t, u);
      return T.elementType = e, T.type = v, T.lanes = s, T._debugOwner = i, T;
    }
    function _0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, v = D0(u, s, f, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function ao(e, t, a, i) {
      var u = Ma(Ve, e, i, t);
      return u.lanes = a, u;
    }
    function P_(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ma(je, e, i, t | Ie);
      return u.elementType = oo, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function $_(e, t, a, i) {
      var u = Ma(Y, e, i, t);
      return u.elementType = Ua, u.lanes = a, u;
    }
    function I_(e, t, a, i) {
      var u = Ma(ot, e, i, t);
      return u.elementType = so, u.lanes = a, u;
    }
    function gT(e, t, a, i) {
      var u = Ma(fe, e, i, t);
      u.elementType = Rf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function k0(e, t, a) {
      var i = Ma(Re, e, null, t);
      return i.lanes = a, i;
    }
    function Y_() {
      var e = Ma(ie, null, null, $e);
      return e.elementType = "DELETED", e;
    }
    function Q_(e) {
      var t = Ma(Ct, null, null, $e);
      return t.stateNode = e, t;
    }
    function O0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ma(q, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ST(e, t) {
      return e === null && (e = Ma(pe, null, null, $e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function W_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = fg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = mt, this.eventTimes = Tc(P), this.expirationTimes = Tc(It), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = Tc(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Wt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case $h:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Yu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function ET(e, t, a, i, u, s, f, v, h, S) {
      var T = new W_(e, t, a, v, h), O = B_(t, s);
      T.current = O, O.stateNode = T;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        O.memoizedState = _;
      }
      return Hg(O), T;
    }
    var L0 = "18.2.0";
    function G_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Te(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Ta,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var M0, N0;
    M0 = !1, N0 = {};
    function CT(e) {
      if (!e)
        return La;
      var t = ta(e), a = Lw(t);
      if (t.tag === G) {
        var i = t.type;
        if (el(i))
          return WE(t, i, a);
      }
      return a;
    }
    function q_(e, t) {
      {
        var a = ta(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ia(a);
        if (u === null)
          return null;
        if (u.mode & tn) {
          var s = rt(a) || "Component";
          if (!N0[s]) {
            N0[s] = !0;
            var f = gn;
            try {
              At(u), a.mode & tn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? At(f) : xn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TT(e, t, a, i, u, s, f, v) {
      var h = !1, S = null;
      return ET(e, t, h, S, a, i, u, s, f);
    }
    function RT(e, t, a, i, u, s, f, v, h, S) {
      var T = !0, O = ET(a, i, T, e, u, s, f, v, h);
      O.context = CT(null);
      var _ = O.current, U = Qr(), F = no(_), j = ql(U, F);
      return j.callback = t ?? null, Gu(_, j, F), n_(O, F, U), O;
    }
    function Fp(e, t, a, i) {
      Iv(t, e);
      var u = t.current, s = Qr(), f = no(u);
      wl(f);
      var v = CT(a);
      t.context === null ? t.context = v : t.pendingContext = v, Zr && gn !== null && !M0 && (M0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, rt(gn) || "Unknown"));
      var h = ql(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var S = Gu(u, h, f);
      return S !== null && (Zn(S, u, f, s), nm(S, u, f)), f;
    }
    function Wm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function X_(e) {
      switch (e.tag) {
        case I: {
          var t = e.stateNode;
          if (_n(t)) {
            var a = Ly(t);
            l_(t, a);
          }
          break;
        }
        case Y: {
          Jl(function() {
            var u = pa(e, Ye);
            if (u !== null) {
              var s = Qr();
              Zn(u, e, Ye, s);
            }
          });
          var i = Ye;
          z0(e, i);
          break;
        }
      }
    }
    function xT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = nh(a.retryLane, t));
    }
    function z0(e, t) {
      xT(e, t);
      var a = e.alternate;
      a && xT(a, t);
    }
    function K_(e) {
      if (e.tag === Y) {
        var t = Ru, a = pa(e, t);
        if (a !== null) {
          var i = Qr();
          Zn(a, e, t, i);
        }
        z0(e, t);
      }
    }
    function Z_(e) {
      if (e.tag === Y) {
        var t = no(e), a = pa(e, t);
        if (a !== null) {
          var i = Qr();
          Zn(a, e, t, i);
        }
        z0(e, t);
      }
    }
    function wT(e) {
      var t = Bv(e);
      return t === null ? null : t.stateNode;
    }
    var bT = function(e) {
      return null;
    };
    function J_(e) {
      return bT(e);
    }
    var DT = function(e) {
      return !1;
    };
    function ek(e) {
      return DT(e);
    }
    var _T = null, kT = null, OT = null, LT = null, MT = null, NT = null, zT = null, AT = null, UT = null;
    {
      var FT = function(e, t, a) {
        var i = t[a], u = Nn(e) ? e.slice() : pt({}, e);
        return a + 1 === t.length ? (Nn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FT(e[i], t, a + 1), u);
      }, HT = function(e, t) {
        return FT(e, t, 0);
      }, VT = function(e, t, a, i) {
        var u = t[i], s = Nn(e) ? e.slice() : pt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Nn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = VT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, jT = function(e, t, a) {
        if (t.length !== a.length) {
          x("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              x("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return VT(e, t, a, 0);
      }, BT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Nn(e) ? e.slice() : pt({}, e);
        return s[u] = BT(e[u], t, a + 1, i), s;
      }, PT = function(e, t, a) {
        return BT(e, t, 0, a);
      }, A0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      _T = function(e, t, a, i) {
        var u = A0(e, t);
        if (u !== null) {
          var s = PT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = pt({}, e.memoizedProps);
          var f = pa(e, Ye);
          f !== null && Zn(f, e, Ye, It);
        }
      }, kT = function(e, t, a) {
        var i = A0(e, t);
        if (i !== null) {
          var u = HT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = pt({}, e.memoizedProps);
          var s = pa(e, Ye);
          s !== null && Zn(s, e, Ye, It);
        }
      }, OT = function(e, t, a, i) {
        var u = A0(e, t);
        if (u !== null) {
          var s = jT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = pt({}, e.memoizedProps);
          var f = pa(e, Ye);
          f !== null && Zn(f, e, Ye, It);
        }
      }, LT = function(e, t, a) {
        e.pendingProps = PT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = pa(e, Ye);
        i !== null && Zn(i, e, Ye, It);
      }, MT = function(e, t) {
        e.pendingProps = HT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = pa(e, Ye);
        a !== null && Zn(a, e, Ye, It);
      }, NT = function(e, t, a) {
        e.pendingProps = jT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = pa(e, Ye);
        i !== null && Zn(i, e, Ye, It);
      }, zT = function(e) {
        var t = pa(e, Ye);
        t !== null && Zn(t, e, Ye, It);
      }, AT = function(e) {
        bT = e;
      }, UT = function(e) {
        DT = e;
      };
    }
    function tk(e) {
      var t = ia(e);
      return t === null ? null : t.stateNode;
    }
    function nk(e) {
      return null;
    }
    function rk() {
      return gn;
    }
    function ak(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return cd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: _T,
        overrideHookStateDeletePath: kT,
        overrideHookStateRenamePath: OT,
        overrideProps: LT,
        overridePropsDeletePath: MT,
        overridePropsRenamePath: NT,
        setErrorHandler: AT,
        setSuspenseHandler: UT,
        scheduleUpdate: zT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: tk,
        findFiberByHostInstance: t || nk,
        // React Refresh
        findHostInstancesForRefresh: z_,
        scheduleRefresh: M_,
        scheduleRoot: N_,
        setRefreshHandler: L_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: rk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: L0
      });
    }
    var $T = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function U0(e) {
      this._internalRoot = e;
    }
    Gm.prototype.render = U0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : qm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Sn) {
          var i = wT(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Fp(e, t, null, null);
    }, Gm.prototype.unmount = U0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tT() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Jl(function() {
          Fp(null, e, null, null);
        }), PE(t);
      }
    };
    function ik(e, t) {
      if (!qm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      IT(e);
      var a = !1, i = !1, u = "", s = $T;
      t != null && (t.hydrate ? x("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ru && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TT(e, $h, null, a, i, u, s);
      Uh(f.current, e);
      var v = e.nodeType === Sn ? e.parentNode : e;
      return Yd(v), new U0(f);
    }
    function Gm(e) {
      this._internalRoot = e;
    }
    function lk(e) {
      e && ch(e);
    }
    Gm.prototype.unstable_scheduleHydration = lk;
    function uk(e, t, a) {
      if (!qm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      IT(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", h = $T;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var S = RT(t, null, e, $h, i, s, f, v, h);
      if (Uh(S.current, e), Yd(e), u)
        for (var T = 0; T < u.length; T++) {
          var O = u[T];
          hb(S, O);
        }
      return new Gm(S);
    }
    function qm(e) {
      return !!(e && (e.nodeType === Rr || e.nodeType === ba || e.nodeType === ml || !Se));
    }
    function Hp(e) {
      return !!(e && (e.nodeType === Rr || e.nodeType === ba || e.nodeType === ml || e.nodeType === Sn && e.nodeValue === " react-mount-point-unstable "));
    }
    function IT(e) {
      e.nodeType === Rr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), np(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ok = m.ReactCurrentOwner, YT;
    YT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Sn) {
        var t = wT(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = F0(e), u = !!(i && $u(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Rr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function F0(e) {
      return e ? e.nodeType === ba ? e.documentElement : e.firstChild : null;
    }
    function QT() {
    }
    function sk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = Wm(f);
            s.call(_);
          };
        }
        var f = RT(
          t,
          i,
          e,
          Yu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QT
        );
        e._reactRootContainer = f, Uh(f.current, e);
        var v = e.nodeType === Sn ? e.parentNode : e;
        return Yd(v), Jl(), f;
      } else {
        for (var h; h = e.lastChild; )
          e.removeChild(h);
        if (typeof i == "function") {
          var S = i;
          i = function() {
            var _ = Wm(T);
            S.call(_);
          };
        }
        var T = TT(
          e,
          Yu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          QT
        );
        e._reactRootContainer = T, Uh(T.current, e);
        var O = e.nodeType === Sn ? e.parentNode : e;
        return Yd(O), Jl(function() {
          Fp(t, T, a, i);
        }), T;
      }
    }
    function ck(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Xm(e, t, a, i, u) {
      YT(a), ck(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = sk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var v = u;
          u = function() {
            var h = Wm(f);
            v.call(h);
          };
        }
        Fp(t, f, e, u);
      }
      return Wm(f);
    }
    function fk(e) {
      {
        var t = ok.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Rr ? e : q_(e, "findDOMNode");
    }
    function dk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = np(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Xm(null, e, t, !0, a);
    }
    function pk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = np(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Xm(null, e, t, !1, a);
    }
    function vk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Mo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Xm(e, t, a, !1, i);
    }
    function hk(e) {
      if (!Hp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = np(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = F0(e), i = a && !$u(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Jl(function() {
          Xm(null, null, e, !1, function() {
            e._reactRootContainer = null, PE(e);
          });
        }), !0;
      } else {
        {
          var u = F0(e), s = !!(u && $u(u)), f = e.nodeType === Rr && Hp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ce(X_), ah(K_), Wo(Z_), Dd(oa), lh(Io), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Hv(gx), $s(v0, u_, Jl);
    function mk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!qm(t))
        throw new Error("Target container is not a DOM element.");
      return G_(e, t, null, a);
    }
    function yk(e, t, a, i) {
      return vk(e, t, a, i);
    }
    var H0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [$u, Yc, Fh, Ps, ko, v0]
    };
    function gk(e, t) {
      return H0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ik(e, t);
    }
    function Sk(e, t, a) {
      return H0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uk(e, t, a);
    }
    function Ek(e) {
      return tT() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Jl(e);
    }
    var Ck = ak({
      findFiberByHostInstance: rs,
      bundleType: 1,
      version: L0,
      rendererPackageName: "react-dom"
    });
    if (!Ck && zt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var WT = window.location.protocol;
      /^(https?|file):$/.test(WT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (WT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H0, ga.createPortal = mk, ga.createRoot = gk, ga.findDOMNode = fk, ga.flushSync = Ek, ga.hydrate = dk, ga.hydrateRoot = Sk, ga.render = pk, ga.unmountComponentAtNode = hk, ga.unstable_batchedUpdates = v0, ga.unstable_renderSubtreeIntoContainer = yk, ga.version = L0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ga;
}
function ER() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ER);
    } catch (p) {
      console.error(p);
    }
  }
}
process.env.NODE_ENV === "production" ? (ER(), K0.exports = Nk()) : K0.exports = zk();
var Ak = K0.exports, Z0 = { exports: {} }, Zm = { exports: {} }, Ht = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JT;
function Uk() {
  if (JT)
    return Ht;
  JT = 1;
  var p = typeof Symbol == "function" && Symbol.for, C = p ? Symbol.for("react.element") : 60103, m = p ? Symbol.for("react.portal") : 60106, E = p ? Symbol.for("react.fragment") : 60107, b = p ? Symbol.for("react.strict_mode") : 60108, x = p ? Symbol.for("react.profiler") : 60114, g = p ? Symbol.for("react.provider") : 60109, K = p ? Symbol.for("react.context") : 60110, $ = p ? Symbol.for("react.async_mode") : 60111, G = p ? Symbol.for("react.concurrent_mode") : 60111, pe = p ? Symbol.for("react.forward_ref") : 60112, I = p ? Symbol.for("react.suspense") : 60113, q = p ? Symbol.for("react.suspense_list") : 60120, ie = p ? Symbol.for("react.memo") : 60115, Re = p ? Symbol.for("react.lazy") : 60116, Ve = p ? Symbol.for("react.block") : 60121, Ze = p ? Symbol.for("react.fundamental") : 60117, Mt = p ? Symbol.for("react.responder") : 60118, Le = p ? Symbol.for("react.scope") : 60119;
  function Ee(Y) {
    if (typeof Y == "object" && Y !== null) {
      var ft = Y.$$typeof;
      switch (ft) {
        case C:
          switch (Y = Y.type, Y) {
            case $:
            case G:
            case E:
            case x:
            case b:
            case I:
              return Y;
            default:
              switch (Y = Y && Y.$$typeof, Y) {
                case K:
                case pe:
                case Re:
                case ie:
                case g:
                  return Y;
                default:
                  return ft;
              }
          }
        case m:
          return ft;
      }
    }
  }
  function je(Y) {
    return Ee(Y) === G;
  }
  return Ht.AsyncMode = $, Ht.ConcurrentMode = G, Ht.ContextConsumer = K, Ht.ContextProvider = g, Ht.Element = C, Ht.ForwardRef = pe, Ht.Fragment = E, Ht.Lazy = Re, Ht.Memo = ie, Ht.Portal = m, Ht.Profiler = x, Ht.StrictMode = b, Ht.Suspense = I, Ht.isAsyncMode = function(Y) {
    return je(Y) || Ee(Y) === $;
  }, Ht.isConcurrentMode = je, Ht.isContextConsumer = function(Y) {
    return Ee(Y) === K;
  }, Ht.isContextProvider = function(Y) {
    return Ee(Y) === g;
  }, Ht.isElement = function(Y) {
    return typeof Y == "object" && Y !== null && Y.$$typeof === C;
  }, Ht.isForwardRef = function(Y) {
    return Ee(Y) === pe;
  }, Ht.isFragment = function(Y) {
    return Ee(Y) === E;
  }, Ht.isLazy = function(Y) {
    return Ee(Y) === Re;
  }, Ht.isMemo = function(Y) {
    return Ee(Y) === ie;
  }, Ht.isPortal = function(Y) {
    return Ee(Y) === m;
  }, Ht.isProfiler = function(Y) {
    return Ee(Y) === x;
  }, Ht.isStrictMode = function(Y) {
    return Ee(Y) === b;
  }, Ht.isSuspense = function(Y) {
    return Ee(Y) === I;
  }, Ht.isValidElementType = function(Y) {
    return typeof Y == "string" || typeof Y == "function" || Y === E || Y === G || Y === x || Y === b || Y === I || Y === q || typeof Y == "object" && Y !== null && (Y.$$typeof === Re || Y.$$typeof === ie || Y.$$typeof === g || Y.$$typeof === K || Y.$$typeof === pe || Y.$$typeof === Ze || Y.$$typeof === Mt || Y.$$typeof === Le || Y.$$typeof === Ve);
  }, Ht.typeOf = Ee, Ht;
}
var Vt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function Fk() {
  return eR || (eR = 1, process.env.NODE_ENV !== "production" && function() {
    var p = typeof Symbol == "function" && Symbol.for, C = p ? Symbol.for("react.element") : 60103, m = p ? Symbol.for("react.portal") : 60106, E = p ? Symbol.for("react.fragment") : 60107, b = p ? Symbol.for("react.strict_mode") : 60108, x = p ? Symbol.for("react.profiler") : 60114, g = p ? Symbol.for("react.provider") : 60109, K = p ? Symbol.for("react.context") : 60110, $ = p ? Symbol.for("react.async_mode") : 60111, G = p ? Symbol.for("react.concurrent_mode") : 60111, pe = p ? Symbol.for("react.forward_ref") : 60112, I = p ? Symbol.for("react.suspense") : 60113, q = p ? Symbol.for("react.suspense_list") : 60120, ie = p ? Symbol.for("react.memo") : 60115, Re = p ? Symbol.for("react.lazy") : 60116, Ve = p ? Symbol.for("react.block") : 60121, Ze = p ? Symbol.for("react.fundamental") : 60117, Mt = p ? Symbol.for("react.responder") : 60118, Le = p ? Symbol.for("react.scope") : 60119;
    function Ee(le) {
      return typeof le == "string" || typeof le == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      le === E || le === G || le === x || le === b || le === I || le === q || typeof le == "object" && le !== null && (le.$$typeof === Re || le.$$typeof === ie || le.$$typeof === g || le.$$typeof === K || le.$$typeof === pe || le.$$typeof === Ze || le.$$typeof === Mt || le.$$typeof === Le || le.$$typeof === Ve);
    }
    function je(le) {
      if (typeof le == "object" && le !== null) {
        var zt = le.$$typeof;
        switch (zt) {
          case C:
            var mn = le.type;
            switch (mn) {
              case $:
              case G:
              case E:
              case x:
              case b:
              case I:
                return mn;
              default:
                var er = mn && mn.$$typeof;
                switch (er) {
                  case K:
                  case pe:
                  case Re:
                  case ie:
                  case g:
                    return er;
                  default:
                    return zt;
                }
            }
          case m:
            return zt;
        }
      }
    }
    var Y = $, ft = G, qe = K, Jt = g, Nt = C, Ct = pe, ot = E, Qe = Re, fe = ie, Ne = m, xt = x, et = b, wt = I, re = !1;
    function _e(le) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(le) || je(le) === $;
    }
    function z(le) {
      return je(le) === G;
    }
    function te(le) {
      return je(le) === K;
    }
    function Se(le) {
      return je(le) === g;
    }
    function Pe(le) {
      return typeof le == "object" && le !== null && le.$$typeof === C;
    }
    function ze(le) {
      return je(le) === pe;
    }
    function at(le) {
      return je(le) === E;
    }
    function Ae(le) {
      return je(le) === Re;
    }
    function We(le) {
      return je(le) === ie;
    }
    function Je(le) {
      return je(le) === m;
    }
    function it(le) {
      return je(le) === x;
    }
    function st(le) {
      return je(le) === b;
    }
    function Dt(le) {
      return je(le) === I;
    }
    Vt.AsyncMode = Y, Vt.ConcurrentMode = ft, Vt.ContextConsumer = qe, Vt.ContextProvider = Jt, Vt.Element = Nt, Vt.ForwardRef = Ct, Vt.Fragment = ot, Vt.Lazy = Qe, Vt.Memo = fe, Vt.Portal = Ne, Vt.Profiler = xt, Vt.StrictMode = et, Vt.Suspense = wt, Vt.isAsyncMode = _e, Vt.isConcurrentMode = z, Vt.isContextConsumer = te, Vt.isContextProvider = Se, Vt.isElement = Pe, Vt.isForwardRef = ze, Vt.isFragment = at, Vt.isLazy = Ae, Vt.isMemo = We, Vt.isPortal = Je, Vt.isProfiler = it, Vt.isStrictMode = st, Vt.isSuspense = Dt, Vt.isValidElementType = Ee, Vt.typeOf = je;
  }()), Vt;
}
var tR;
function CR() {
  return tR || (tR = 1, process.env.NODE_ENV === "production" ? Zm.exports = Uk() : Zm.exports = Fk()), Zm.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var B0, nR;
function Hk() {
  if (nR)
    return B0;
  nR = 1;
  var p = Object.getOwnPropertySymbols, C = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
  function E(x) {
    if (x == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(x);
  }
  function b() {
    try {
      if (!Object.assign)
        return !1;
      var x = new String("abc");
      if (x[5] = "de", Object.getOwnPropertyNames(x)[0] === "5")
        return !1;
      for (var g = {}, K = 0; K < 10; K++)
        g["_" + String.fromCharCode(K)] = K;
      var $ = Object.getOwnPropertyNames(g).map(function(pe) {
        return g[pe];
      });
      if ($.join("") !== "0123456789")
        return !1;
      var G = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(pe) {
        G[pe] = pe;
      }), Object.keys(Object.assign({}, G)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return B0 = b() ? Object.assign : function(x, g) {
    for (var K, $ = E(x), G, pe = 1; pe < arguments.length; pe++) {
      K = Object(arguments[pe]);
      for (var I in K)
        C.call(K, I) && ($[I] = K[I]);
      if (p) {
        G = p(K);
        for (var q = 0; q < G.length; q++)
          m.call(K, G[q]) && ($[G[q]] = K[G[q]]);
      }
    }
    return $;
  }, B0;
}
var P0, rR;
function aE() {
  if (rR)
    return P0;
  rR = 1;
  var p = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return P0 = p, P0;
}
var $0, aR;
function TR() {
  return aR || (aR = 1, $0 = Function.call.bind(Object.prototype.hasOwnProperty)), $0;
}
var I0, iR;
function Vk() {
  if (iR)
    return I0;
  iR = 1;
  var p = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var C = aE(), m = {}, E = TR();
    p = function(x) {
      var g = "Warning: " + x;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function b(x, g, K, $, G) {
    if (process.env.NODE_ENV !== "production") {
      for (var pe in x)
        if (E(x, pe)) {
          var I;
          try {
            if (typeof x[pe] != "function") {
              var q = Error(
                ($ || "React class") + ": " + K + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw q.name = "Invariant Violation", q;
            }
            I = x[pe](g, pe, $, K, null, C);
          } catch (Re) {
            I = Re;
          }
          if (I && !(I instanceof Error) && p(
            ($ || "React class") + ": type specification of " + K + " `" + pe + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof I + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), I instanceof Error && !(I.message in m)) {
            m[I.message] = !0;
            var ie = G ? G() : "";
            p(
              "Failed " + K + " type: " + I.message + (ie ?? "")
            );
          }
        }
    }
  }
  return b.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (m = {});
  }, I0 = b, I0;
}
var Y0, lR;
function jk() {
  if (lR)
    return Y0;
  lR = 1;
  var p = CR(), C = Hk(), m = aE(), E = TR(), b = Vk(), x = function() {
  };
  process.env.NODE_ENV !== "production" && (x = function(K) {
    var $ = "Warning: " + K;
    typeof console < "u" && console.error($);
    try {
      throw new Error($);
    } catch {
    }
  });
  function g() {
    return null;
  }
  return Y0 = function(K, $) {
    var G = typeof Symbol == "function" && Symbol.iterator, pe = "@@iterator";
    function I(z) {
      var te = z && (G && z[G] || z[pe]);
      if (typeof te == "function")
        return te;
    }
    var q = "<<anonymous>>", ie = {
      array: Mt("array"),
      bigint: Mt("bigint"),
      bool: Mt("boolean"),
      func: Mt("function"),
      number: Mt("number"),
      object: Mt("object"),
      string: Mt("string"),
      symbol: Mt("symbol"),
      any: Le(),
      arrayOf: Ee,
      element: je(),
      elementType: Y(),
      instanceOf: ft,
      node: Ct(),
      objectOf: Jt,
      oneOf: qe,
      oneOfType: Nt,
      shape: Qe,
      exact: fe
    };
    function Re(z, te) {
      return z === te ? z !== 0 || 1 / z === 1 / te : z !== z && te !== te;
    }
    function Ve(z, te) {
      this.message = z, this.data = te && typeof te == "object" ? te : {}, this.stack = "";
    }
    Ve.prototype = Error.prototype;
    function Ze(z) {
      if (process.env.NODE_ENV !== "production")
        var te = {}, Se = 0;
      function Pe(at, Ae, We, Je, it, st, Dt) {
        if (Je = Je || q, st = st || We, Dt !== m) {
          if ($) {
            var le = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw le.name = "Invariant Violation", le;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var zt = Je + ":" + We;
            !te[zt] && // Avoid spamming the console because they are often not actionable except for lib authors
            Se < 3 && (x(
              "You are manually calling a React.PropTypes validation function for the `" + st + "` prop on `" + Je + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), te[zt] = !0, Se++);
          }
        }
        return Ae[We] == null ? at ? Ae[We] === null ? new Ve("The " + it + " `" + st + "` is marked as required " + ("in `" + Je + "`, but its value is `null`.")) : new Ve("The " + it + " `" + st + "` is marked as required in " + ("`" + Je + "`, but its value is `undefined`.")) : null : z(Ae, We, Je, it, st);
      }
      var ze = Pe.bind(null, !1);
      return ze.isRequired = Pe.bind(null, !0), ze;
    }
    function Mt(z) {
      function te(Se, Pe, ze, at, Ae, We) {
        var Je = Se[Pe], it = et(Je);
        if (it !== z) {
          var st = wt(Je);
          return new Ve(
            "Invalid " + at + " `" + Ae + "` of type " + ("`" + st + "` supplied to `" + ze + "`, expected ") + ("`" + z + "`."),
            { expectedType: z }
          );
        }
        return null;
      }
      return Ze(te);
    }
    function Le() {
      return Ze(g);
    }
    function Ee(z) {
      function te(Se, Pe, ze, at, Ae) {
        if (typeof z != "function")
          return new Ve("Property `" + Ae + "` of component `" + ze + "` has invalid PropType notation inside arrayOf.");
        var We = Se[Pe];
        if (!Array.isArray(We)) {
          var Je = et(We);
          return new Ve("Invalid " + at + " `" + Ae + "` of type " + ("`" + Je + "` supplied to `" + ze + "`, expected an array."));
        }
        for (var it = 0; it < We.length; it++) {
          var st = z(We, it, ze, at, Ae + "[" + it + "]", m);
          if (st instanceof Error)
            return st;
        }
        return null;
      }
      return Ze(te);
    }
    function je() {
      function z(te, Se, Pe, ze, at) {
        var Ae = te[Se];
        if (!K(Ae)) {
          var We = et(Ae);
          return new Ve("Invalid " + ze + " `" + at + "` of type " + ("`" + We + "` supplied to `" + Pe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Ze(z);
    }
    function Y() {
      function z(te, Se, Pe, ze, at) {
        var Ae = te[Se];
        if (!p.isValidElementType(Ae)) {
          var We = et(Ae);
          return new Ve("Invalid " + ze + " `" + at + "` of type " + ("`" + We + "` supplied to `" + Pe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Ze(z);
    }
    function ft(z) {
      function te(Se, Pe, ze, at, Ae) {
        if (!(Se[Pe] instanceof z)) {
          var We = z.name || q, Je = _e(Se[Pe]);
          return new Ve("Invalid " + at + " `" + Ae + "` of type " + ("`" + Je + "` supplied to `" + ze + "`, expected ") + ("instance of `" + We + "`."));
        }
        return null;
      }
      return Ze(te);
    }
    function qe(z) {
      if (!Array.isArray(z))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? x(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : x("Invalid argument supplied to oneOf, expected an array.")), g;
      function te(Se, Pe, ze, at, Ae) {
        for (var We = Se[Pe], Je = 0; Je < z.length; Je++)
          if (Re(We, z[Je]))
            return null;
        var it = JSON.stringify(z, function(Dt, le) {
          var zt = wt(le);
          return zt === "symbol" ? String(le) : le;
        });
        return new Ve("Invalid " + at + " `" + Ae + "` of value `" + String(We) + "` " + ("supplied to `" + ze + "`, expected one of " + it + "."));
      }
      return Ze(te);
    }
    function Jt(z) {
      function te(Se, Pe, ze, at, Ae) {
        if (typeof z != "function")
          return new Ve("Property `" + Ae + "` of component `" + ze + "` has invalid PropType notation inside objectOf.");
        var We = Se[Pe], Je = et(We);
        if (Je !== "object")
          return new Ve("Invalid " + at + " `" + Ae + "` of type " + ("`" + Je + "` supplied to `" + ze + "`, expected an object."));
        for (var it in We)
          if (E(We, it)) {
            var st = z(We, it, ze, at, Ae + "." + it, m);
            if (st instanceof Error)
              return st;
          }
        return null;
      }
      return Ze(te);
    }
    function Nt(z) {
      if (!Array.isArray(z))
        return process.env.NODE_ENV !== "production" && x("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var te = 0; te < z.length; te++) {
        var Se = z[te];
        if (typeof Se != "function")
          return x(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(Se) + " at index " + te + "."
          ), g;
      }
      function Pe(ze, at, Ae, We, Je) {
        for (var it = [], st = 0; st < z.length; st++) {
          var Dt = z[st], le = Dt(ze, at, Ae, We, Je, m);
          if (le == null)
            return null;
          le.data && E(le.data, "expectedType") && it.push(le.data.expectedType);
        }
        var zt = it.length > 0 ? ", expected one of type [" + it.join(", ") + "]" : "";
        return new Ve("Invalid " + We + " `" + Je + "` supplied to " + ("`" + Ae + "`" + zt + "."));
      }
      return Ze(Pe);
    }
    function Ct() {
      function z(te, Se, Pe, ze, at) {
        return Ne(te[Se]) ? null : new Ve("Invalid " + ze + " `" + at + "` supplied to " + ("`" + Pe + "`, expected a ReactNode."));
      }
      return Ze(z);
    }
    function ot(z, te, Se, Pe, ze) {
      return new Ve(
        (z || "React class") + ": " + te + " type `" + Se + "." + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ze + "`."
      );
    }
    function Qe(z) {
      function te(Se, Pe, ze, at, Ae) {
        var We = Se[Pe], Je = et(We);
        if (Je !== "object")
          return new Ve("Invalid " + at + " `" + Ae + "` of type `" + Je + "` " + ("supplied to `" + ze + "`, expected `object`."));
        for (var it in z) {
          var st = z[it];
          if (typeof st != "function")
            return ot(ze, at, Ae, it, wt(st));
          var Dt = st(We, it, ze, at, Ae + "." + it, m);
          if (Dt)
            return Dt;
        }
        return null;
      }
      return Ze(te);
    }
    function fe(z) {
      function te(Se, Pe, ze, at, Ae) {
        var We = Se[Pe], Je = et(We);
        if (Je !== "object")
          return new Ve("Invalid " + at + " `" + Ae + "` of type `" + Je + "` " + ("supplied to `" + ze + "`, expected `object`."));
        var it = C({}, Se[Pe], z);
        for (var st in it) {
          var Dt = z[st];
          if (E(z, st) && typeof Dt != "function")
            return ot(ze, at, Ae, st, wt(Dt));
          if (!Dt)
            return new Ve(
              "Invalid " + at + " `" + Ae + "` key `" + st + "` supplied to `" + ze + "`.\nBad object: " + JSON.stringify(Se[Pe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(z), null, "  ")
            );
          var le = Dt(We, st, ze, at, Ae + "." + st, m);
          if (le)
            return le;
        }
        return null;
      }
      return Ze(te);
    }
    function Ne(z) {
      switch (typeof z) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !z;
        case "object":
          if (Array.isArray(z))
            return z.every(Ne);
          if (z === null || K(z))
            return !0;
          var te = I(z);
          if (te) {
            var Se = te.call(z), Pe;
            if (te !== z.entries) {
              for (; !(Pe = Se.next()).done; )
                if (!Ne(Pe.value))
                  return !1;
            } else
              for (; !(Pe = Se.next()).done; ) {
                var ze = Pe.value;
                if (ze && !Ne(ze[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function xt(z, te) {
      return z === "symbol" ? !0 : te ? te["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && te instanceof Symbol : !1;
    }
    function et(z) {
      var te = typeof z;
      return Array.isArray(z) ? "array" : z instanceof RegExp ? "object" : xt(te, z) ? "symbol" : te;
    }
    function wt(z) {
      if (typeof z > "u" || z === null)
        return "" + z;
      var te = et(z);
      if (te === "object") {
        if (z instanceof Date)
          return "date";
        if (z instanceof RegExp)
          return "regexp";
      }
      return te;
    }
    function re(z) {
      var te = wt(z);
      switch (te) {
        case "array":
        case "object":
          return "an " + te;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + te;
        default:
          return te;
      }
    }
    function _e(z) {
      return !z.constructor || !z.constructor.name ? q : z.constructor.name;
    }
    return ie.checkPropTypes = b, ie.resetWarningCache = b.resetWarningCache, ie.PropTypes = ie, ie;
  }, Y0;
}
var Q0, uR;
function Bk() {
  if (uR)
    return Q0;
  uR = 1;
  var p = aE();
  function C() {
  }
  function m() {
  }
  return m.resetWarningCache = C, Q0 = function() {
    function E(g, K, $, G, pe, I) {
      if (I !== p) {
        var q = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw q.name = "Invariant Violation", q;
      }
    }
    E.isRequired = E;
    function b() {
      return E;
    }
    var x = {
      array: E,
      bigint: E,
      bool: E,
      func: E,
      number: E,
      object: E,
      string: E,
      symbol: E,
      any: E,
      arrayOf: b,
      element: E,
      elementType: E,
      instanceOf: b,
      node: E,
      objectOf: b,
      oneOf: b,
      oneOfType: b,
      shape: b,
      exact: b,
      checkPropTypes: m,
      resetWarningCache: C
    };
    return x.PropTypes = x, x;
  }, Q0;
}
if (process.env.NODE_ENV !== "production") {
  var Pk = CR(), $k = !0;
  Z0.exports = jk()(Pk.isElement, $k);
} else
  Z0.exports = Bk()();
var Ik = Z0.exports;
const Za = /* @__PURE__ */ yR(Ik);
function J0() {
  return J0 = Object.assign || function(p) {
    for (var C = 1; C < arguments.length; C++) {
      var m = arguments[C];
      for (var E in m)
        Object.prototype.hasOwnProperty.call(m, E) && (p[E] = m[E]);
    }
    return p;
  }, J0.apply(this, arguments);
}
function Yk(p, C) {
  if (p == null)
    return {};
  var m = Qk(p, C), E, b;
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(p);
    for (b = 0; b < x.length; b++)
      E = x[b], !(C.indexOf(E) >= 0) && Object.prototype.propertyIsEnumerable.call(p, E) && (m[E] = p[E]);
  }
  return m;
}
function Qk(p, C) {
  if (p == null)
    return {};
  var m = {}, E = Object.keys(p), b, x;
  for (x = 0; x < E.length; x++)
    b = E[x], !(C.indexOf(b) >= 0) && (m[b] = p[b]);
  return m;
}
var iE = Ea(function(p, C) {
  var m = p.color, E = m === void 0 ? "currentColor" : m, b = p.size, x = b === void 0 ? 24 : b, g = Yk(p, ["color", "size"]);
  return /* @__PURE__ */ jt.createElement("svg", J0({
    ref: C,
    xmlns: "http://www.w3.org/2000/svg",
    width: x,
    height: x,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: E,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, g), /* @__PURE__ */ jt.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
});
iE.propTypes = {
  color: Za.string,
  size: Za.oneOfType([Za.string, Za.number])
};
iE.displayName = "ChevronLeft";
const Wk = iE;
function eE() {
  return eE = Object.assign || function(p) {
    for (var C = 1; C < arguments.length; C++) {
      var m = arguments[C];
      for (var E in m)
        Object.prototype.hasOwnProperty.call(m, E) && (p[E] = m[E]);
    }
    return p;
  }, eE.apply(this, arguments);
}
function Gk(p, C) {
  if (p == null)
    return {};
  var m = qk(p, C), E, b;
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(p);
    for (b = 0; b < x.length; b++)
      E = x[b], !(C.indexOf(E) >= 0) && Object.prototype.propertyIsEnumerable.call(p, E) && (m[E] = p[E]);
  }
  return m;
}
function qk(p, C) {
  if (p == null)
    return {};
  var m = {}, E = Object.keys(p), b, x;
  for (x = 0; x < E.length; x++)
    b = E[x], !(C.indexOf(b) >= 0) && (m[b] = p[b]);
  return m;
}
var lE = Ea(function(p, C) {
  var m = p.color, E = m === void 0 ? "currentColor" : m, b = p.size, x = b === void 0 ? 24 : b, g = Gk(p, ["color", "size"]);
  return /* @__PURE__ */ jt.createElement("svg", eE({
    ref: C,
    xmlns: "http://www.w3.org/2000/svg",
    width: x,
    height: x,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: E,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, g), /* @__PURE__ */ jt.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }));
});
lE.propTypes = {
  color: Za.string,
  size: Za.oneOfType([Za.string, Za.number])
};
lE.displayName = "ChevronRight";
const Xk = lE;
function tE() {
  return tE = Object.assign || function(p) {
    for (var C = 1; C < arguments.length; C++) {
      var m = arguments[C];
      for (var E in m)
        Object.prototype.hasOwnProperty.call(m, E) && (p[E] = m[E]);
    }
    return p;
  }, tE.apply(this, arguments);
}
function Kk(p, C) {
  if (p == null)
    return {};
  var m = Zk(p, C), E, b;
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(p);
    for (b = 0; b < x.length; b++)
      E = x[b], !(C.indexOf(E) >= 0) && Object.prototype.propertyIsEnumerable.call(p, E) && (m[E] = p[E]);
  }
  return m;
}
function Zk(p, C) {
  if (p == null)
    return {};
  var m = {}, E = Object.keys(p), b, x;
  for (x = 0; x < E.length; x++)
    b = E[x], !(C.indexOf(b) >= 0) && (m[b] = p[b]);
  return m;
}
var uE = Ea(function(p, C) {
  var m = p.color, E = m === void 0 ? "currentColor" : m, b = p.size, x = b === void 0 ? 24 : b, g = Kk(p, ["color", "size"]);
  return /* @__PURE__ */ jt.createElement("svg", tE({
    ref: C,
    xmlns: "http://www.w3.org/2000/svg",
    width: x,
    height: x,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: E,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, g), /* @__PURE__ */ jt.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /* @__PURE__ */ jt.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
uE.propTypes = {
  color: Za.string,
  size: Za.oneOfType([Za.string, Za.number])
};
uE.displayName = "X";
const Jk = uE, eO = ({
  imgSrc: p,
  isOpen: C,
  onClose: m,
  onChange: E
}) => {
  const b = xk(null), x = () => {
    E == null || E({ reason: "next" });
  }, g = () => {
    E == null || E({ reason: "prev" });
  };
  return Ok(["ArrowRight", "ArrowLeft", "Escape"], (K) => {
    switch (K.key) {
      case "ArrowRight":
        x();
        break;
      case "ArrowLeft":
        g();
        break;
      case "Escape":
        m();
        break;
    }
  }), $p(() => {
    document.body.style.overflow = C ? "hidden" : "auto";
  }, [C]), C ? Ak.createPortal(
    /* @__PURE__ */ lo("div", { className: "fixed flex justify-center top-0 left-0 right-0 bottom-0 z-40 backdrop-blur-sm md:p-8", children: [
      E && /* @__PURE__ */ hn(
        Wk,
        {
          "aria-label": "Previous",
          onClick: g,
          strokeWidth: 1,
          className: "hidden md:block self-center cursor-pointer md:h-24 md:w-24"
        }
      ),
      /* @__PURE__ */ lo("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ lo(
          "div",
          {
            "aria-label": "Close",
            onClick: (K) => {
              K.preventDefault(), K.stopPropagation(), m();
            },
            className: "absolute right-4 top-4 cursor-pointer z-50 flex items-center gap-2 md:gap-4",
            children: [
              /* @__PURE__ */ hn(Jk, { className: "w-6 h-6" }),
              /* @__PURE__ */ hn("p", { className: "uppercase", children: "Close" })
            ]
          }
        ),
        /* @__PURE__ */ hn(
          "img",
          {
            ref: b,
            src: p,
            alt: "",
            className: "object-contain m-auto md:h-full md:object-cover object-center"
          }
        )
      ] }),
      E && /* @__PURE__ */ hn(
        Xk,
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
}, RR = eO, tO = ({ images: p, slotProps: C }) => {
  var K;
  const [m, E] = Pp(NaN);
  if (!p)
    return null;
  const b = () => {
    E(($) => ($ + 1) % p.length);
  }, x = () => {
    E(($) => ($ - 1 + p.length) % p.length);
  }, g = () => {
    E(NaN);
  };
  return /* @__PURE__ */ lo(
    "div",
    {
      ...C == null ? void 0 : C.root,
      className: Sa(
        "columns-1 sm:columns-2 md:columns-3 gap-4",
        (K = C == null ? void 0 : C.root) == null ? void 0 : K.className
      ),
      children: [
        /* @__PURE__ */ hn(
          RR,
          {
            onChange: ({ reason: $ }) => $ === "next" ? b() : x(),
            imgSrc: p[m],
            isOpen: !Number.isNaN(m),
            onClose: g
          }
        ),
        /* @__PURE__ */ hn("div", { className: "grid gap-4", children: p.map(($, G) => {
          var pe;
          return /* @__PURE__ */ Bp(
            "img",
            {
              ...C == null ? void 0 : C.image,
              tabIndex: 0,
              onKeyDown: (I) => I.key === "Enter" || I.key === " " && E(G),
              onClick: () => E(G),
              key: $,
              className: Sa(
                "h-auto max-w-full cursor-pointer transition ease-in-out md:hover:scale-105 duration-200",
                (pe = C == null ? void 0 : C.image) == null ? void 0 : pe.className
              ),
              src: $,
              alt: ""
            }
          );
        }) })
      ]
    }
  );
}, XO = tO, nO = Ea(
  function(C, m) {
    return /* @__PURE__ */ hn(
      "ul",
      {
        ref: m,
        ...C,
        className: Sa("Tui-List", C.className)
      }
    );
  }
), KO = nO, rO = Ea(
  function(C, m) {
    return /* @__PURE__ */ hn(
      "li",
      {
        ref: m,
        ...C,
        className: Sa("Tui-ListItem", C.className)
      }
    );
  }
), ZO = rO, aO = (p) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(p), iO = {
  subtitle1: "Tui-Subtitle1",
  subtitle2: "Tui-Subtitle2",
  body1: "Tui-Body1",
  body2: "Tui-Body2",
  caption: "Tui-Caption",
  overline: "Tui-Overline"
}, lO = ({
  children: p,
  variant: C = "body1",
  ...m
}) => aO(C) ? Bp(
  C,
  { ...m, className: Sa(m.className, "Tui-Typography") },
  p
) : Bp(
  "p",
  {
    ...m,
    className: Sa(
      iO[C],
      m.className,
      "Tui-Typography"
    )
  },
  p
), nE = lO, uO = ({
  variant: p = "body1",
  children: C,
  slotProps: m
}) => {
  var E;
  return /* @__PURE__ */ hn(
    "div",
    {
      ...m == null ? void 0 : m.root,
      className: Sa("Tui-ListItemText", (E = m == null ? void 0 : m.root) == null ? void 0 : E.className),
      children: /* @__PURE__ */ hn(nE, { variant: p, ...m == null ? void 0 : m.typography, children: C })
    }
  );
}, JO = uO, oO = Ea(
  (p, C) => /* @__PURE__ */ lo("div", { className: "Tui-FieldGroup", children: [
    /* @__PURE__ */ hn("label", { htmlFor: p.name, children: p.label }),
    /* @__PURE__ */ hn(
      "textarea",
      {
        ref: C,
        ...p,
        id: p.name,
        "data-should-validate": !!p.value,
        className: "Tui-TextArea"
      }
    )
  ] })
), eL = oO, sO = Ea((p, C) => /* @__PURE__ */ lo("div", { className: "Tui-FieldGroup", children: [
  /* @__PURE__ */ hn("label", { htmlFor: p.name, className: "label", children: p.label }),
  /* @__PURE__ */ hn("input", { ref: C, ...p, className: "Tui-TextField" })
] })), tL = sO, cO = Ea(
  function(C, m) {
    return /* @__PURE__ */ hn(
      "div",
      {
        ref: m,
        ...C,
        className: Sa("Tui-Card", C.className)
      }
    );
  }
), nL = cO, fO = Ea(
  function(C, m) {
    return /* @__PURE__ */ hn(
      "div",
      {
        ref: m,
        ...C,
        className: Sa("Tui-CardContent", C.className)
      }
    );
  }
), rL = fO, dO = Ea(
  function(C, m) {
    return /* @__PURE__ */ lo(
      "div",
      {
        ref: m,
        ...C,
        className: Sa("Tui-CardHeader", C.className),
        children: [
          /* @__PURE__ */ hn(nE, { variant: "h6", children: C.title }),
          C.subtitle && /* @__PURE__ */ hn(nE, { variant: "subtitle1", children: C.subtitle })
        ]
      }
    );
  }
), aL = dO, pO = () => {
  const [p, C] = Pp(!1);
  return { isOpen: p, onOpen: () => C(!0), onClose: () => C(!1) };
}, vO = pO, hO = Ea(
  function(C, m) {
    const { isOpen: E, onClose: b, onOpen: x } = vO();
    return /* @__PURE__ */ lo(bk, { children: [
      /* @__PURE__ */ hn(
        RR,
        {
          imgSrc: C.src ?? "",
          isOpen: E,
          onClose: b
        }
      ),
      /* @__PURE__ */ hn(
        "img",
        {
          ...C,
          onClick: x,
          ref: m,
          className: Sa("Tui-CardMedia", C.className)
        }
      )
    ] });
  }
), iL = hO, mO = Ea(
  function(C, m) {
    return /* @__PURE__ */ hn(
      "div",
      {
        ref: m,
        ...C,
        className: Sa("Tui-CardActionArea", C.className),
        children: C.children
      }
    );
  }
), lL = mO, yO = Ea(
  function(C, m) {
    return /* @__PURE__ */ hn(
      "div",
      {
        ref: m,
        ...C,
        className: Sa("Tui-CardBody", C.className),
        children: C.children
      }
    );
  }
), uL = yO, gO = (p, C, m, E) => {
  wk(() => (p == null || p.addEventListener(C, m, E), () => p == null ? void 0 : p.removeEventListener(C, m, E)), [p, C, m, E]);
}, SO = gO;
var Ip = (p) => p.type === "checkbox", gf = (p) => p instanceof Date, qr = (p) => p == null;
const xR = (p) => typeof p == "object";
var Jn = (p) => !qr(p) && !Array.isArray(p) && xR(p) && !gf(p), wR = (p) => Jn(p) && p.target ? Ip(p.target) ? p.target.checked : p.target.value : p, EO = (p) => p.substring(0, p.search(/\.\d+(\.|$)/)) || p, bR = (p, C) => p.has(EO(C)), CO = (p) => {
  const C = p.constructor && p.constructor.prototype;
  return Jn(C) && C.hasOwnProperty("isPrototypeOf");
}, oE = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function sl(p) {
  let C;
  const m = Array.isArray(p);
  if (p instanceof Date)
    C = new Date(p);
  else if (p instanceof Set)
    C = new Set(p);
  else if (!(oE && (p instanceof Blob || p instanceof FileList)) && (m || Jn(p)))
    if (C = m ? [] : {}, !m && !CO(p))
      C = p;
    else
      for (const E in p)
        p.hasOwnProperty(E) && (C[E] = sl(p[E]));
  else
    return p;
  return C;
}
var Yp = (p) => Array.isArray(p) ? p.filter(Boolean) : [], Ln = (p) => p === void 0, ge = (p, C, m) => {
  if (!C || !Jn(p))
    return m;
  const E = Yp(C.split(/[,[\].]+?/)).reduce((b, x) => qr(b) ? b : b[x], p);
  return Ln(E) || E === p ? Ln(p[C]) ? m : p[C] : E;
};
const ty = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, _i = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, nu = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, TO = jt.createContext(null), sE = () => jt.useContext(TO);
var DR = (p, C, m, E = !0) => {
  const b = {
    defaultValues: C._defaultValues
  };
  for (const x in p)
    Object.defineProperty(b, x, {
      get: () => {
        const g = x;
        return C._proxyFormState[g] !== _i.all && (C._proxyFormState[g] = !E || _i.all), m && (m[g] = !0), p[g];
      }
    });
  return b;
}, Ka = (p) => Jn(p) && !Object.keys(p).length, _R = (p, C, m, E) => {
  m(p);
  const { name: b, ...x } = p;
  return Ka(x) || Object.keys(x).length >= Object.keys(C).length || Object.keys(x).find((g) => C[g] === (!E || _i.all));
}, Jm = (p) => Array.isArray(p) ? p : [p], kR = (p, C, m) => m && C ? p === C : !p || !C || p === C || Jm(p).some((E) => E && (E.startsWith(C) || C.startsWith(E)));
function cE(p) {
  const C = jt.useRef(p);
  C.current = p, jt.useEffect(() => {
    const m = !p.disabled && C.current.subject && C.current.subject.subscribe({
      next: C.current.next
    });
    return () => {
      m && m.unsubscribe();
    };
  }, [p.disabled]);
}
function RO(p) {
  const C = sE(), { control: m = C.control, disabled: E, name: b, exact: x } = p || {}, [g, K] = jt.useState(m._formState), $ = jt.useRef(!0), G = jt.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), pe = jt.useRef(b);
  return pe.current = b, cE({
    disabled: E,
    next: (I) => $.current && kR(pe.current, I.name, x) && _R(I, G.current, m._updateFormState) && K({
      ...m._formState,
      ...I
    }),
    subject: m._subjects.state
  }), jt.useEffect(() => ($.current = !0, G.current.isValid && m._updateValid(!0), () => {
    $.current = !1;
  }), [m]), DR(g, m, G.current, !1);
}
var cl = (p) => typeof p == "string", OR = (p, C, m, E, b) => cl(p) ? (E && C.watch.add(p), ge(m, p, b)) : Array.isArray(p) ? p.map((x) => (E && C.watch.add(x), ge(m, x))) : (E && (C.watchAll = !0), m);
function xO(p) {
  const C = sE(), { control: m = C.control, name: E, defaultValue: b, disabled: x, exact: g } = p || {}, K = jt.useRef(E);
  K.current = E, cE({
    disabled: x,
    subject: m._subjects.values,
    next: (pe) => {
      kR(K.current, pe.name, g) && G(sl(OR(K.current, m._names, pe.values || m._formValues, !1, b)));
    }
  });
  const [$, G] = jt.useState(m._getWatch(E, b));
  return jt.useEffect(() => m._removeUnmounted()), $;
}
var fE = (p) => /^\w*$/.test(p), LR = (p) => Yp(p.replace(/["|']|\]/g, "").split(/\.|\[/));
function Zt(p, C, m) {
  let E = -1;
  const b = fE(C) ? [C] : LR(C), x = b.length, g = x - 1;
  for (; ++E < x; ) {
    const K = b[E];
    let $ = m;
    if (E !== g) {
      const G = p[K];
      $ = Jn(G) || Array.isArray(G) ? G : isNaN(+b[E + 1]) ? {} : [];
    }
    p[K] = $, p = p[K];
  }
  return p;
}
function wO(p) {
  const C = sE(), { name: m, control: E = C.control, shouldUnregister: b } = p, x = bR(E._names.array, m), g = xO({
    control: E,
    name: m,
    defaultValue: ge(E._formValues, m, ge(E._defaultValues, m, p.defaultValue)),
    exact: !0
  }), K = RO({
    control: E,
    name: m
  }), $ = jt.useRef(E.register(m, {
    ...p.rules,
    value: g
  }));
  return $.current = E.register(m, p.rules), jt.useEffect(() => {
    const G = E._options.shouldUnregister || b, pe = (I, q) => {
      const ie = ge(E._fields, I);
      ie && (ie._f.mount = q);
    };
    if (pe(m, !0), G) {
      const I = sl(ge(E._options.defaultValues, m));
      Zt(E._defaultValues, m, I), Ln(ge(E._formValues, m)) && Zt(E._formValues, m, I);
    }
    return () => {
      (x ? G && !E._state.action : G) ? E.unregister(m) : pe(m, !1);
    };
  }, [m, E, x, b]), {
    field: {
      name: m,
      value: g,
      onChange: jt.useCallback((G) => $.current.onChange({
        target: {
          value: wR(G),
          name: m
        },
        type: ty.CHANGE
      }), [m]),
      onBlur: jt.useCallback(() => $.current.onBlur({
        target: {
          value: ge(E._formValues, m),
          name: m
        },
        type: ty.BLUR
      }), [m, E]),
      ref: (G) => {
        const pe = ge(E._fields, m);
        pe && G && (pe._f.ref = {
          focus: () => G.focus(),
          select: () => G.select(),
          setCustomValidity: (I) => G.setCustomValidity(I),
          reportValidity: () => G.reportValidity()
        });
      }
    },
    formState: K,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!ge(K.errors, m)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!ge(K.dirtyFields, m)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!ge(K.touchedFields, m)
      },
      error: {
        enumerable: !0,
        get: () => ge(K.errors, m)
      }
    })
  };
}
var bO = (p, C, m, E, b) => C ? {
  ...m[p],
  types: {
    ...m[p] && m[p].types ? m[p].types : {},
    [E]: b || !0
  }
} : {};
const rE = (p, C, m) => {
  for (const E of m || Object.keys(p)) {
    const b = ge(p, E);
    if (b) {
      const { _f: x, ...g } = b;
      if (x && C(x.name)) {
        if (x.ref.focus) {
          x.ref.focus();
          break;
        } else if (x.refs && x.refs[0].focus) {
          x.refs[0].focus();
          break;
        }
      } else
        Jn(g) && rE(g, C);
    }
  }
};
var oR = (p) => ({
  isOnSubmit: !p || p === _i.onSubmit,
  isOnBlur: p === _i.onBlur,
  isOnChange: p === _i.onChange,
  isOnAll: p === _i.all,
  isOnTouch: p === _i.onTouched
}), sR = (p, C, m) => !m && (C.watchAll || C.watch.has(p) || [...C.watch].some((E) => p.startsWith(E) && /^\.\w+/.test(p.slice(E.length)))), DO = (p, C, m) => {
  const E = Yp(ge(p, m));
  return Zt(E, "root", C[m]), Zt(p, m, E), p;
}, Sf = (p) => typeof p == "boolean", dE = (p) => p.type === "file", io = (p) => typeof p == "function", ny = (p) => {
  if (!oE)
    return !1;
  const C = p ? p.ownerDocument : 0;
  return p instanceof (C && C.defaultView ? C.defaultView.HTMLElement : HTMLElement);
}, ey = (p) => cl(p), pE = (p) => p.type === "radio", ry = (p) => p instanceof RegExp;
const cR = {
  value: !1,
  isValid: !1
}, fR = { value: !0, isValid: !0 };
var MR = (p) => {
  if (Array.isArray(p)) {
    if (p.length > 1) {
      const C = p.filter((m) => m && m.checked && !m.disabled).map((m) => m.value);
      return { value: C, isValid: !!C.length };
    }
    return p[0].checked && !p[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      p[0].attributes && !Ln(p[0].attributes.value) ? Ln(p[0].value) || p[0].value === "" ? fR : { value: p[0].value, isValid: !0 } : fR
    ) : cR;
  }
  return cR;
};
const dR = {
  isValid: !1,
  value: null
};
var NR = (p) => Array.isArray(p) ? p.reduce((C, m) => m && m.checked && !m.disabled ? {
  isValid: !0,
  value: m.value
} : C, dR) : dR;
function pR(p, C, m = "validate") {
  if (ey(p) || Array.isArray(p) && p.every(ey) || Sf(p) && !p)
    return {
      type: m,
      message: ey(p) ? p : "",
      ref: C
    };
}
var yf = (p) => Jn(p) && !ry(p) ? p : {
  value: p,
  message: ""
}, vR = async (p, C, m, E, b) => {
  const { ref: x, refs: g, required: K, maxLength: $, minLength: G, min: pe, max: I, pattern: q, validate: ie, name: Re, valueAsNumber: Ve, mount: Ze, disabled: Mt } = p._f, Le = ge(C, Re);
  if (!Ze || Mt)
    return {};
  const Ee = g ? g[0] : x, je = (Qe) => {
    E && Ee.reportValidity && (Ee.setCustomValidity(Sf(Qe) ? "" : Qe || ""), Ee.reportValidity());
  }, Y = {}, ft = pE(x), qe = Ip(x), Jt = ft || qe, Nt = (Ve || dE(x)) && Ln(x.value) && Ln(Le) || ny(x) && x.value === "" || Le === "" || Array.isArray(Le) && !Le.length, Ct = bO.bind(null, Re, m, Y), ot = (Qe, fe, Ne, xt = nu.maxLength, et = nu.minLength) => {
    const wt = Qe ? fe : Ne;
    Y[Re] = {
      type: Qe ? xt : et,
      message: wt,
      ref: x,
      ...Ct(Qe ? xt : et, wt)
    };
  };
  if (b ? !Array.isArray(Le) || !Le.length : K && (!Jt && (Nt || qr(Le)) || Sf(Le) && !Le || qe && !MR(g).isValid || ft && !NR(g).isValid)) {
    const { value: Qe, message: fe } = ey(K) ? { value: !!K, message: K } : yf(K);
    if (Qe && (Y[Re] = {
      type: nu.required,
      message: fe,
      ref: Ee,
      ...Ct(nu.required, fe)
    }, !m))
      return je(fe), Y;
  }
  if (!Nt && (!qr(pe) || !qr(I))) {
    let Qe, fe;
    const Ne = yf(I), xt = yf(pe);
    if (!qr(Le) && !isNaN(Le)) {
      const et = x.valueAsNumber || Le && +Le;
      qr(Ne.value) || (Qe = et > Ne.value), qr(xt.value) || (fe = et < xt.value);
    } else {
      const et = x.valueAsDate || new Date(Le), wt = (z) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + z), re = x.type == "time", _e = x.type == "week";
      cl(Ne.value) && Le && (Qe = re ? wt(Le) > wt(Ne.value) : _e ? Le > Ne.value : et > new Date(Ne.value)), cl(xt.value) && Le && (fe = re ? wt(Le) < wt(xt.value) : _e ? Le < xt.value : et < new Date(xt.value));
    }
    if ((Qe || fe) && (ot(!!Qe, Ne.message, xt.message, nu.max, nu.min), !m))
      return je(Y[Re].message), Y;
  }
  if (($ || G) && !Nt && (cl(Le) || b && Array.isArray(Le))) {
    const Qe = yf($), fe = yf(G), Ne = !qr(Qe.value) && Le.length > +Qe.value, xt = !qr(fe.value) && Le.length < +fe.value;
    if ((Ne || xt) && (ot(Ne, Qe.message, fe.message), !m))
      return je(Y[Re].message), Y;
  }
  if (q && !Nt && cl(Le)) {
    const { value: Qe, message: fe } = yf(q);
    if (ry(Qe) && !Le.match(Qe) && (Y[Re] = {
      type: nu.pattern,
      message: fe,
      ref: x,
      ...Ct(nu.pattern, fe)
    }, !m))
      return je(fe), Y;
  }
  if (ie) {
    if (io(ie)) {
      const Qe = await ie(Le, C), fe = pR(Qe, Ee);
      if (fe && (Y[Re] = {
        ...fe,
        ...Ct(nu.validate, fe.message)
      }, !m))
        return je(fe.message), Y;
    } else if (Jn(ie)) {
      let Qe = {};
      for (const fe in ie) {
        if (!Ka(Qe) && !m)
          break;
        const Ne = pR(await ie[fe](Le, C), Ee, fe);
        Ne && (Qe = {
          ...Ne,
          ...Ct(fe, Ne.message)
        }, je(Ne.message), m && (Y[Re] = Qe));
      }
      if (!Ka(Qe) && (Y[Re] = {
        ref: Ee,
        ...Qe
      }, !m))
        return Y;
    }
  }
  return je(!0), Y;
};
function _O(p, C) {
  const m = C.slice(0, -1).length;
  let E = 0;
  for (; E < m; )
    p = Ln(p) ? E++ : p[C[E++]];
  return p;
}
function kO(p) {
  for (const C in p)
    if (p.hasOwnProperty(C) && !Ln(p[C]))
      return !1;
  return !0;
}
function Tr(p, C) {
  const m = Array.isArray(C) ? C : fE(C) ? [C] : LR(C), E = m.length === 1 ? p : _O(p, m), b = m.length - 1, x = m[b];
  return E && delete E[x], b !== 0 && (Jn(E) && Ka(E) || Array.isArray(E) && kO(E)) && Tr(p, m.slice(0, -1)), p;
}
function W0() {
  let p = [];
  return {
    get observers() {
      return p;
    },
    next: (b) => {
      for (const x of p)
        x.next && x.next(b);
    },
    subscribe: (b) => (p.push(b), {
      unsubscribe: () => {
        p = p.filter((x) => x !== b);
      }
    }),
    unsubscribe: () => {
      p = [];
    }
  };
}
var ay = (p) => qr(p) || !xR(p);
function Ss(p, C) {
  if (ay(p) || ay(C))
    return p === C;
  if (gf(p) && gf(C))
    return p.getTime() === C.getTime();
  const m = Object.keys(p), E = Object.keys(C);
  if (m.length !== E.length)
    return !1;
  for (const b of m) {
    const x = p[b];
    if (!E.includes(b))
      return !1;
    if (b !== "ref") {
      const g = C[b];
      if (gf(x) && gf(g) || Jn(x) && Jn(g) || Array.isArray(x) && Array.isArray(g) ? !Ss(x, g) : x !== g)
        return !1;
    }
  }
  return !0;
}
var zR = (p) => p.type === "select-multiple", OO = (p) => pE(p) || Ip(p), G0 = (p) => ny(p) && p.isConnected, AR = (p) => {
  for (const C in p)
    if (io(p[C]))
      return !0;
  return !1;
};
function iy(p, C = {}) {
  const m = Array.isArray(p);
  if (Jn(p) || m)
    for (const E in p)
      Array.isArray(p[E]) || Jn(p[E]) && !AR(p[E]) ? (C[E] = Array.isArray(p[E]) ? [] : {}, iy(p[E], C[E])) : qr(p[E]) || (C[E] = !0);
  return C;
}
function UR(p, C, m) {
  const E = Array.isArray(p);
  if (Jn(p) || E)
    for (const b in p)
      Array.isArray(p[b]) || Jn(p[b]) && !AR(p[b]) ? Ln(C) || ay(m[b]) ? m[b] = Array.isArray(p[b]) ? iy(p[b], []) : { ...iy(p[b]) } : UR(p[b], qr(C) ? {} : C[b], m[b]) : m[b] = !Ss(p[b], C[b]);
  return m;
}
var q0 = (p, C) => UR(p, C, iy(C)), FR = (p, { valueAsNumber: C, valueAsDate: m, setValueAs: E }) => Ln(p) ? p : C ? p === "" ? NaN : p && +p : m && cl(p) ? new Date(p) : E ? E(p) : p;
function X0(p) {
  const C = p.ref;
  if (!(p.refs ? p.refs.every((m) => m.disabled) : C.disabled))
    return dE(C) ? C.files : pE(C) ? NR(p.refs).value : zR(C) ? [...C.selectedOptions].map(({ value: m }) => m) : Ip(C) ? MR(p.refs).value : FR(Ln(C.value) ? p.ref.value : C.value, p);
}
var LO = (p, C, m, E) => {
  const b = {};
  for (const x of p) {
    const g = ge(C, x);
    g && Zt(b, x, g._f);
  }
  return {
    criteriaMode: m,
    names: [...p],
    fields: b,
    shouldUseNativeValidation: E
  };
}, jp = (p) => Ln(p) ? p : ry(p) ? p.source : Jn(p) ? ry(p.value) ? p.value.source : p.value : p, MO = (p) => p.mount && (p.required || p.min || p.max || p.maxLength || p.minLength || p.pattern || p.validate);
function hR(p, C, m) {
  const E = ge(p, m);
  if (E || fE(m))
    return {
      error: E,
      name: m
    };
  const b = m.split(".");
  for (; b.length; ) {
    const x = b.join("."), g = ge(C, x), K = ge(p, x);
    if (g && !Array.isArray(g) && m !== x)
      return { name: m };
    if (K && K.type)
      return {
        name: x,
        error: K
      };
    b.pop();
  }
  return {
    name: m
  };
}
var NO = (p, C, m, E, b) => b.isOnAll ? !1 : !m && b.isOnTouch ? !(C || p) : (m ? E.isOnBlur : b.isOnBlur) ? !p : (m ? E.isOnChange : b.isOnChange) ? p : !0, zO = (p, C) => !Yp(ge(p, C)).length && Tr(p, C);
const AO = {
  mode: _i.onSubmit,
  reValidateMode: _i.onChange,
  shouldFocusError: !0
};
function UO(p = {}, C) {
  let m = {
    ...AO,
    ...p
  }, E = {
    submitCount: 0,
    isDirty: !1,
    isLoading: io(m.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, b = {}, x = Jn(m.defaultValues) || Jn(m.values) ? sl(m.defaultValues || m.values) || {} : {}, g = m.shouldUnregister ? {} : sl(x), K = {
    action: !1,
    mount: !1,
    watch: !1
  }, $ = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, G, pe = 0;
  const I = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, q = {
    values: W0(),
    array: W0(),
    state: W0()
  }, ie = p.resetOptions && p.resetOptions.keepDirtyValues, Re = oR(m.mode), Ve = oR(m.reValidateMode), Ze = m.criteriaMode === _i.all, Mt = (D) => (V) => {
    clearTimeout(pe), pe = setTimeout(D, V);
  }, Le = async (D) => {
    if (I.isValid || D) {
      const V = m.resolver ? Ka((await Nt()).errors) : await ot(b, !0);
      V !== E.isValid && q.state.next({
        isValid: V
      });
    }
  }, Ee = (D) => I.isValidating && q.state.next({
    isValidating: D
  }), je = (D, V = [], Q, Te, se = !0, ne = !0) => {
    if (Te && Q) {
      if (K.action = !0, ne && Array.isArray(ge(b, D))) {
        const ke = Q(ge(b, D), Te.argA, Te.argB);
        se && Zt(b, D, ke);
      }
      if (ne && Array.isArray(ge(E.errors, D))) {
        const ke = Q(ge(E.errors, D), Te.argA, Te.argB);
        se && Zt(E.errors, D, ke), zO(E.errors, D);
      }
      if (I.touchedFields && ne && Array.isArray(ge(E.touchedFields, D))) {
        const ke = Q(ge(E.touchedFields, D), Te.argA, Te.argB);
        se && Zt(E.touchedFields, D, ke);
      }
      I.dirtyFields && (E.dirtyFields = q0(x, g)), q.state.next({
        name: D,
        isDirty: fe(D, V),
        dirtyFields: E.dirtyFields,
        errors: E.errors,
        isValid: E.isValid
      });
    } else
      Zt(g, D, V);
  }, Y = (D, V) => {
    Zt(E.errors, D, V), q.state.next({
      errors: E.errors
    });
  }, ft = (D, V, Q, Te) => {
    const se = ge(b, D);
    if (se) {
      const ne = ge(g, D, Ln(Q) ? ge(x, D) : Q);
      Ln(ne) || Te && Te.defaultChecked || V ? Zt(g, D, V ? ne : X0(se._f)) : et(D, ne), K.mount && Le();
    }
  }, qe = (D, V, Q, Te, se) => {
    let ne = !1, ke = !1;
    const St = {
      name: D
    };
    if (!Q || Te) {
      I.isDirty && (ke = E.isDirty, E.isDirty = St.isDirty = fe(), ne = ke !== St.isDirty);
      const _t = Ss(ge(x, D), V);
      ke = ge(E.dirtyFields, D), _t ? Tr(E.dirtyFields, D) : Zt(E.dirtyFields, D, !0), St.dirtyFields = E.dirtyFields, ne = ne || I.dirtyFields && ke !== !_t;
    }
    if (Q) {
      const _t = ge(E.touchedFields, D);
      _t || (Zt(E.touchedFields, D, Q), St.touchedFields = E.touchedFields, ne = ne || I.touchedFields && _t !== Q);
    }
    return ne && se && q.state.next(St), ne ? St : {};
  }, Jt = (D, V, Q, Te) => {
    const se = ge(E.errors, D), ne = I.isValid && Sf(V) && E.isValid !== V;
    if (p.delayError && Q ? (G = Mt(() => Y(D, Q)), G(p.delayError)) : (clearTimeout(pe), G = null, Q ? Zt(E.errors, D, Q) : Tr(E.errors, D)), (Q ? !Ss(se, Q) : se) || !Ka(Te) || ne) {
      const ke = {
        ...Te,
        ...ne && Sf(V) ? { isValid: V } : {},
        errors: E.errors,
        name: D
      };
      E = {
        ...E,
        ...ke
      }, q.state.next(ke);
    }
    Ee(!1);
  }, Nt = async (D) => m.resolver(g, m.context, LO(D || $.mount, b, m.criteriaMode, m.shouldUseNativeValidation)), Ct = async (D) => {
    const { errors: V } = await Nt();
    if (D)
      for (const Q of D) {
        const Te = ge(V, Q);
        Te ? Zt(E.errors, Q, Te) : Tr(E.errors, Q);
      }
    else
      E.errors = V;
    return V;
  }, ot = async (D, V, Q = {
    valid: !0
  }) => {
    for (const Te in D) {
      const se = D[Te];
      if (se) {
        const { _f: ne, ...ke } = se;
        if (ne) {
          const St = $.array.has(ne.name), _t = await vR(se, g, Ze, m.shouldUseNativeValidation && !V, St);
          if (_t[ne.name] && (Q.valid = !1, V))
            break;
          !V && (ge(_t, ne.name) ? St ? DO(E.errors, _t, ne.name) : Zt(E.errors, ne.name, _t[ne.name]) : Tr(E.errors, ne.name));
        }
        ke && await ot(ke, V, Q);
      }
    }
    return Q.valid;
  }, Qe = () => {
    for (const D of $.unMount) {
      const V = ge(b, D);
      V && (V._f.refs ? V._f.refs.every((Q) => !G0(Q)) : !G0(V._f.ref)) && Ae(D);
    }
    $.unMount = /* @__PURE__ */ new Set();
  }, fe = (D, V) => (D && V && Zt(g, D, V), !Ss(te(), x)), Ne = (D, V, Q) => OR(D, $, {
    ...K.mount ? g : Ln(V) ? x : cl(D) ? { [D]: V } : V
  }, Q, V), xt = (D) => Yp(ge(K.mount ? g : x, D, p.shouldUnregister ? ge(x, D, []) : [])), et = (D, V, Q = {}) => {
    const Te = ge(b, D);
    let se = V;
    if (Te) {
      const ne = Te._f;
      ne && (!ne.disabled && Zt(g, D, FR(V, ne)), se = ny(ne.ref) && qr(V) ? "" : V, zR(ne.ref) ? [...ne.ref.options].forEach((ke) => ke.selected = se.includes(ke.value)) : ne.refs ? Ip(ne.ref) ? ne.refs.length > 1 ? ne.refs.forEach((ke) => (!ke.defaultChecked || !ke.disabled) && (ke.checked = Array.isArray(se) ? !!se.find((St) => St === ke.value) : se === ke.value)) : ne.refs[0] && (ne.refs[0].checked = !!se) : ne.refs.forEach((ke) => ke.checked = ke.value === se) : dE(ne.ref) ? ne.ref.value = "" : (ne.ref.value = se, ne.ref.type || q.values.next({
        name: D,
        values: { ...g }
      })));
    }
    (Q.shouldDirty || Q.shouldTouch) && qe(D, se, Q.shouldTouch, Q.shouldDirty, !0), Q.shouldValidate && z(D);
  }, wt = (D, V, Q) => {
    for (const Te in V) {
      const se = V[Te], ne = `${D}.${Te}`, ke = ge(b, ne);
      ($.array.has(D) || !ay(se) || ke && !ke._f) && !gf(se) ? wt(ne, se, Q) : et(ne, se, Q);
    }
  }, re = (D, V, Q = {}) => {
    const Te = ge(b, D), se = $.array.has(D), ne = sl(V);
    Zt(g, D, ne), se ? (q.array.next({
      name: D,
      values: { ...g }
    }), (I.isDirty || I.dirtyFields) && Q.shouldDirty && q.state.next({
      name: D,
      dirtyFields: q0(x, g),
      isDirty: fe(D, ne)
    })) : Te && !Te._f && !qr(ne) ? wt(D, ne, Q) : et(D, ne, Q), sR(D, $) && q.state.next({ ...E }), q.values.next({
      name: D,
      values: { ...g }
    }), !K.mount && C();
  }, _e = async (D) => {
    const V = D.target;
    let Q = V.name, Te = !0;
    const se = ge(b, Q), ne = () => V.type ? X0(se._f) : wR(D);
    if (se) {
      let ke, St;
      const _t = ne(), Bn = D.type === ty.BLUR || D.type === ty.FOCUS_OUT, za = !MO(se._f) && !m.resolver && !ge(E.errors, Q) && !se._f.deps || NO(Bn, ge(E.touchedFields, Q), E.isSubmitted, Ve, Re), Mn = sR(Q, $, Bn);
      Zt(g, Q, _t), Bn ? (se._f.onBlur && se._f.onBlur(D), G && G(0)) : se._f.onChange && se._f.onChange(D);
      const cr = qe(Q, _t, Bn, !1), fl = !Ka(cr) || Mn;
      if (!Bn && q.values.next({
        name: Q,
        type: D.type,
        values: { ...g }
      }), za)
        return I.isValid && Le(), fl && q.state.next({ name: Q, ...Mn ? {} : cr });
      if (!Bn && Mn && q.state.next({ ...E }), Ee(!0), m.resolver) {
        const { errors: Ca } = await Nt([Q]), ce = hR(E.errors, b, Q), Ue = hR(Ca, b, ce.name || Q);
        ke = Ue.error, Q = Ue.name, St = Ka(Ca);
      } else
        ke = (await vR(se, g, Ze, m.shouldUseNativeValidation))[Q], Te = isNaN(_t) || _t === ge(g, Q, _t), Te && (ke ? St = !1 : I.isValid && (St = await ot(b, !0)));
      Te && (se._f.deps && z(se._f.deps), Jt(Q, St, ke, cr));
    }
  }, z = async (D, V = {}) => {
    let Q, Te;
    const se = Jm(D);
    if (Ee(!0), m.resolver) {
      const ne = await Ct(Ln(D) ? D : se);
      Q = Ka(ne), Te = D ? !se.some((ke) => ge(ne, ke)) : Q;
    } else
      D ? (Te = (await Promise.all(se.map(async (ne) => {
        const ke = ge(b, ne);
        return await ot(ke && ke._f ? { [ne]: ke } : ke);
      }))).every(Boolean), !(!Te && !E.isValid) && Le()) : Te = Q = await ot(b);
    return q.state.next({
      ...!cl(D) || I.isValid && Q !== E.isValid ? {} : { name: D },
      ...m.resolver || !D ? { isValid: Q } : {},
      errors: E.errors,
      isValidating: !1
    }), V.shouldFocus && !Te && rE(b, (ne) => ne && ge(E.errors, ne), D ? se : $.mount), Te;
  }, te = (D) => {
    const V = {
      ...x,
      ...K.mount ? g : {}
    };
    return Ln(D) ? V : cl(D) ? ge(V, D) : D.map((Q) => ge(V, Q));
  }, Se = (D, V) => ({
    invalid: !!ge((V || E).errors, D),
    isDirty: !!ge((V || E).dirtyFields, D),
    isTouched: !!ge((V || E).touchedFields, D),
    error: ge((V || E).errors, D)
  }), Pe = (D) => {
    D && Jm(D).forEach((V) => Tr(E.errors, V)), q.state.next({
      errors: D ? E.errors : {}
    });
  }, ze = (D, V, Q) => {
    const Te = (ge(b, D, { _f: {} })._f || {}).ref;
    Zt(E.errors, D, {
      ...V,
      ref: Te
    }), q.state.next({
      name: D,
      errors: E.errors,
      isValid: !1
    }), Q && Q.shouldFocus && Te && Te.focus && Te.focus();
  }, at = (D, V) => io(D) ? q.values.subscribe({
    next: (Q) => D(Ne(void 0, V), Q)
  }) : Ne(D, V, !0), Ae = (D, V = {}) => {
    for (const Q of D ? Jm(D) : $.mount)
      $.mount.delete(Q), $.array.delete(Q), V.keepValue || (Tr(b, Q), Tr(g, Q)), !V.keepError && Tr(E.errors, Q), !V.keepDirty && Tr(E.dirtyFields, Q), !V.keepTouched && Tr(E.touchedFields, Q), !m.shouldUnregister && !V.keepDefaultValue && Tr(x, Q);
    q.values.next({
      values: { ...g }
    }), q.state.next({
      ...E,
      ...V.keepDirty ? { isDirty: fe() } : {}
    }), !V.keepIsValid && Le();
  }, We = (D, V = {}) => {
    let Q = ge(b, D);
    const Te = Sf(V.disabled);
    return Zt(b, D, {
      ...Q || {},
      _f: {
        ...Q && Q._f ? Q._f : { ref: { name: D } },
        name: D,
        mount: !0,
        ...V
      }
    }), $.mount.add(D), Q ? Te && Zt(g, D, V.disabled ? void 0 : ge(g, D, X0(Q._f))) : ft(D, !0, V.value), {
      ...Te ? { disabled: V.disabled } : {},
      ...m.progressive ? {
        required: !!V.required,
        min: jp(V.min),
        max: jp(V.max),
        minLength: jp(V.minLength),
        maxLength: jp(V.maxLength),
        pattern: jp(V.pattern)
      } : {},
      name: D,
      onChange: _e,
      onBlur: _e,
      ref: (se) => {
        if (se) {
          We(D, V), Q = ge(b, D);
          const ne = Ln(se.value) && se.querySelectorAll && se.querySelectorAll("input,select,textarea")[0] || se, ke = OO(ne), St = Q._f.refs || [];
          if (ke ? St.find((_t) => _t === ne) : ne === Q._f.ref)
            return;
          Zt(b, D, {
            _f: {
              ...Q._f,
              ...ke ? {
                refs: [
                  ...St.filter(G0),
                  ne,
                  ...Array.isArray(ge(x, D)) ? [{}] : []
                ],
                ref: { type: ne.type, name: D }
              } : { ref: ne }
            }
          }), ft(D, !1, void 0, ne);
        } else
          Q = ge(b, D, {}), Q._f && (Q._f.mount = !1), (m.shouldUnregister || V.shouldUnregister) && !(bR($.array, D) && K.action) && $.unMount.add(D);
      }
    };
  }, Je = () => m.shouldFocusError && rE(b, (D) => D && ge(E.errors, D), $.mount), it = (D, V) => async (Q) => {
    Q && (Q.preventDefault && Q.preventDefault(), Q.persist && Q.persist());
    let Te = sl(g);
    if (q.state.next({
      isSubmitting: !0
    }), m.resolver) {
      const { errors: se, values: ne } = await Nt();
      E.errors = se, Te = ne;
    } else
      await ot(b);
    Tr(E.errors, "root"), Ka(E.errors) ? (q.state.next({
      errors: {}
    }), await D(Te, Q)) : (V && await V({ ...E.errors }, Q), Je(), setTimeout(Je)), q.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ka(E.errors),
      submitCount: E.submitCount + 1,
      errors: E.errors
    });
  }, st = (D, V = {}) => {
    ge(b, D) && (Ln(V.defaultValue) ? re(D, ge(x, D)) : (re(D, V.defaultValue), Zt(x, D, V.defaultValue)), V.keepTouched || Tr(E.touchedFields, D), V.keepDirty || (Tr(E.dirtyFields, D), E.isDirty = V.defaultValue ? fe(D, ge(x, D)) : fe()), V.keepError || (Tr(E.errors, D), I.isValid && Le()), q.state.next({ ...E }));
  }, Dt = (D, V = {}) => {
    const Q = D || x, Te = sl(Q), se = D && !Ka(D) ? Te : x;
    if (V.keepDefaultValues || (x = Q), !V.keepValues) {
      if (V.keepDirtyValues || ie)
        for (const ne of $.mount)
          ge(E.dirtyFields, ne) ? Zt(se, ne, ge(g, ne)) : re(ne, ge(se, ne));
      else {
        if (oE && Ln(D))
          for (const ne of $.mount) {
            const ke = ge(b, ne);
            if (ke && ke._f) {
              const St = Array.isArray(ke._f.refs) ? ke._f.refs[0] : ke._f.ref;
              if (ny(St)) {
                const _t = St.closest("form");
                if (_t) {
                  _t.reset();
                  break;
                }
              }
            }
          }
        b = {};
      }
      g = p.shouldUnregister ? V.keepDefaultValues ? sl(x) : {} : sl(se), q.array.next({
        values: { ...se }
      }), q.values.next({
        values: { ...se }
      });
    }
    $ = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !K.mount && C(), K.mount = !I.isValid || !!V.keepIsValid, K.watch = !!p.shouldUnregister, q.state.next({
      submitCount: V.keepSubmitCount ? E.submitCount : 0,
      isDirty: V.keepDirty ? E.isDirty : !!(V.keepDefaultValues && !Ss(D, x)),
      isSubmitted: V.keepIsSubmitted ? E.isSubmitted : !1,
      dirtyFields: V.keepDirtyValues ? E.dirtyFields : V.keepDefaultValues && D ? q0(x, D) : {},
      touchedFields: V.keepTouched ? E.touchedFields : {},
      errors: V.keepErrors ? E.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, le = (D, V) => Dt(io(D) ? D(g) : D, V);
  return {
    control: {
      register: We,
      unregister: Ae,
      getFieldState: Se,
      handleSubmit: it,
      setError: ze,
      _executeSchema: Nt,
      _getWatch: Ne,
      _getDirty: fe,
      _updateValid: Le,
      _removeUnmounted: Qe,
      _updateFieldArray: je,
      _getFieldArray: xt,
      _reset: Dt,
      _resetDefaultValues: () => io(m.defaultValues) && m.defaultValues().then((D) => {
        le(D, m.resetOptions), q.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (D) => {
        E = {
          ...E,
          ...D
        };
      },
      _subjects: q,
      _proxyFormState: I,
      get _fields() {
        return b;
      },
      get _formValues() {
        return g;
      },
      get _state() {
        return K;
      },
      set _state(D) {
        K = D;
      },
      get _defaultValues() {
        return x;
      },
      get _names() {
        return $;
      },
      set _names(D) {
        $ = D;
      },
      get _formState() {
        return E;
      },
      set _formState(D) {
        E = D;
      },
      get _options() {
        return m;
      },
      set _options(D) {
        m = {
          ...m,
          ...D
        };
      }
    },
    trigger: z,
    register: We,
    handleSubmit: it,
    watch: at,
    setValue: re,
    getValues: te,
    reset: le,
    resetField: st,
    clearErrors: Pe,
    unregister: Ae,
    setError: ze,
    setFocus: (D, V = {}) => {
      const Q = ge(b, D), Te = Q && Q._f;
      if (Te) {
        const se = Te.refs ? Te.refs[0] : Te.ref;
        se.focus && (se.focus(), V.shouldSelect && se.select());
      }
    },
    getFieldState: Se
  };
}
function FO(p = {}) {
  const C = jt.useRef(), m = jt.useRef(), [E, b] = jt.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: io(p.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: io(p.defaultValues) ? void 0 : p.defaultValues
  });
  C.current || (C.current = {
    ...UO(p, () => b((g) => ({ ...g }))),
    formState: E
  });
  const x = C.current.control;
  return x._options = p, cE({
    subject: x._subjects.state,
    next: (g) => {
      _R(g, x._proxyFormState, x._updateFormState, !0) && b({ ...x._formState });
    }
  }), jt.useEffect(() => {
    p.values && !Ss(p.values, m.current) ? (x._reset(p.values, x._options.resetOptions), m.current = p.values) : x._resetDefaultValues();
  }, [p.values, x]), jt.useEffect(() => {
    x._state.mount || (x._updateValid(), x._state.mount = !0), x._state.watch && (x._state.watch = !1, x._subjects.state.next({ ...x._formState })), x._removeUnmounted();
  }), C.current.formState = DR(E, x), C.current;
}
const HO = (p) => {
  const { field: C } = wO({ name: p });
  return C;
}, oL = HO, VO = ({
  onSubmit: p
}) => {
  const [C, m] = Pp(!1), [E, b] = Pp(!1), {
    handleSubmit: x,
    register: g,
    reset: K
  } = FO();
  return { handleSubmit: mR(
    (G) => {
      G.preventDefault(), b(!0), x(p)(G).catch(() => m(!0)).finally(() => {
        b(!1), K();
      });
    },
    [x, p, K]
  ), isError: C, isSubmitting: E, register: g };
}, sL = VO, jO = ({
  callback: p,
  config: C,
  observables: m,
  ...E
}) => {
  $p(() => {
    const b = new IntersectionObserver(p, C);
    return m.forEach((x) => {
      b.observe(x);
    }), () => {
      b.disconnect();
    };
  }, [E, p, C, m]);
}, cL = jO, BO = () => {
  const [p, C] = Pp(!1), m = mR(() => {
    C(window.innerWidth > 768);
  }, [C]);
  return $p(() => {
    m();
  }, [m]), SO(window, "resize", m), p;
}, fL = BO;
function dL(p, C) {
  $p(() => {
    const m = (E) => {
      const b = p == null ? void 0 : p.current;
      !b || b.contains(E == null ? void 0 : E.target) || C(E);
    };
    return document.addEventListener("mousedown", m), document.addEventListener("touchend", m), () => {
      document.removeEventListener("mousedown", m), document.removeEventListener("touchend", m);
    };
  }, [p, C]);
}
const PO = () => typeof window < "u", pL = PO, $O = (p) => {
  throw new Error(p);
}, vL = $O;
export {
  qO as Button,
  nL as Card,
  lL as CardActions,
  uL as CardBody,
  rL as CardContent,
  aL as CardHeader,
  iL as CardMedia,
  XO as Gallery,
  RR as ImageDialog,
  KO as List,
  ZO as ListItem,
  JO as ListItemText,
  eL as TextArea,
  tL as TextField,
  nE as Typography,
  iO as TypographyClasses,
  pL as isClient,
  vL as raise,
  vO as useDisclosure,
  SO as useEventListener,
  oL as useField,
  sL as useForm,
  cL as useIntersectionObserver,
  fL as useIsDesktop,
  Ok as useKeyPress,
  dL as useOutsideClick
};
