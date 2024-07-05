import jt, { forwardRef as Hr, createElement as Bp, useEffect as $p, useRef as Dk, useState as Pp, useLayoutEffect as _k, useCallback as mx } from "react";
import { jsxs as lo, jsx as Yt, Fragment as kk } from "react/jsx-runtime";
import './assets/index.css';function yx(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var gx = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(p) {
  (function() {
    var S = {}.hasOwnProperty;
    function m() {
      for (var C = [], b = 0; b < arguments.length; b++) {
        var R = arguments[b];
        if (R) {
          var g = typeof R;
          if (g === "string" || g === "number")
            C.push(R);
          else if (Array.isArray(R)) {
            if (R.length) {
              var K = m.apply(null, R);
              K && C.push(K);
            }
          } else if (g === "object") {
            if (R.toString !== Object.prototype.toString && !R.toString.toString().includes("[native code]")) {
              C.push(R.toString());
              continue;
            }
            for (var $ in R)
              S.call(R, $) && R[$] && C.push($);
          }
        }
      }
      return C.join(" ");
    }
    p.exports ? (m.default = m, p.exports = m) : window.classNames = m;
  })();
})(gx);
var Ok = gx.exports;
const Jn = /* @__PURE__ */ yx(Ok), Lk = (p) => "href" in p, Mk = Hr(
  function(S, m) {
    const C = Jn("Tui-Button", S.className);
    return Lk(S) ? Bp("a", { ...S, ref: m, className: C }, S.children) : Bp(
      "button",
      { ...S, ref: m, className: C },
      S.children
    );
  }
), eL = Mk;
function Nk(p, S) {
  $p(() => {
    const m = (C) => {
      p.includes(C.code) && S(C);
    };
    return document.addEventListener("keydown", m), () => {
      document.removeEventListener("keydown", m);
    };
  }, [S, p]);
}
var Z0 = { exports: {} }, Sa = {}, Km = { exports: {} }, j0 = {};
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
function zk() {
  return GT || (GT = 1, function(p) {
    function S(re, _e) {
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
    function C(re) {
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
      var R = performance;
      p.unstable_now = function() {
        return R.now();
      };
    } else {
      var g = Date, K = g.now();
      p.unstable_now = function() {
        return g.now() - K;
      };
    }
    var $ = [], G = [], pe = 1, I = null, q = 3, ie = !1, xe = !1, Ve = !1, Ze = typeof setTimeout == "function" ? setTimeout : null, Mt = typeof clearTimeout == "function" ? clearTimeout : null, Le = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ee(re) {
      for (var _e = m(G); _e !== null; ) {
        if (_e.callback === null)
          C(G);
        else if (_e.startTime <= re)
          C(G), _e.sortIndex = _e.expirationTime, S($, _e);
        else
          break;
        _e = m(G);
      }
    }
    function je(re) {
      if (Ve = !1, Ee(re), !xe)
        if (m($) !== null)
          xe = !0, et(Y);
        else {
          var _e = m(G);
          _e !== null && wt(je, _e.startTime - re);
        }
    }
    function Y(re, _e) {
      xe = !1, Ve && (Ve = !1, Mt(en), en = -1), ie = !0;
      var z = q;
      try {
        for (Ee(_e), I = m($); I !== null && (!(I.expirationTime > _e) || re && !ot()); ) {
          var te = I.callback;
          if (typeof te == "function") {
            I.callback = null, q = I.priorityLevel;
            var Se = te(I.expirationTime <= _e);
            _e = p.unstable_now(), typeof Se == "function" ? I.callback = Se : I === m($) && C($), Ee(_e);
          } else
            C($);
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
    var ft = !1, qe = null, en = -1, Nt = 5, Ct = -1;
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
      var Ne = new MessageChannel(), Rt = Ne.port2;
      Ne.port1.onmessage = Qe, fe = function() {
        Rt.postMessage(null);
      };
    } else
      fe = function() {
        Ze(Qe, 0);
      };
    function et(re) {
      qe = re, ft || (ft = !0, fe());
    }
    function wt(re, _e) {
      en = Ze(function() {
        re(p.unstable_now());
      }, _e);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(re) {
      re.callback = null;
    }, p.unstable_continueExecution = function() {
      xe || ie || (xe = !0, et(Y));
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
      return Se = z + Se, re = { id: pe++, callback: _e, priorityLevel: re, startTime: z, expirationTime: Se, sortIndex: -1 }, z > te ? (re.sortIndex = z, S(G, re), m($) === null && re === m(G) && (Ve ? (Mt(en), en = -1) : Ve = !0, wt(je, z - te))) : (re.sortIndex = Se, S($, re), xe || ie || (xe = !0, et(Y))), re;
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
  }(j0)), j0;
}
var B0 = {};
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
function Ak() {
  return qT || (qT = 1, function(p) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var S = !1, m = !1, C = 5;
      function b(ce, Ue) {
        var dt = ce.length;
        ce.push(Ue), K(ce, Ue, dt);
      }
      function R(ce) {
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
          var dn = Bt - 1 >>> 1, nr = ce[dn];
          if (G(nr, Ue) > 0)
            ce[dn] = Ue, ce[Bt] = nr, Bt = dn;
          else
            return;
        }
      }
      function $(ce, Ue, dt) {
        for (var Bt = dt, dn = ce.length, nr = dn >>> 1; Bt < nr; ) {
          var xn = (Bt + 1) * 2 - 1, Zr = ce[xn], ln = xn + 1, Aa = ce[ln];
          if (G(Zr, Ue) < 0)
            ln < dn && G(Aa, Zr) < 0 ? (ce[Bt] = Aa, ce[ln] = Ue, Bt = ln) : (ce[Bt] = Zr, ce[xn] = Ue, Bt = xn);
          else if (ln < dn && G(Aa, Ue) < 0)
            ce[Bt] = Aa, ce[ln] = Ue, Bt = ln;
          else
            return;
        }
      }
      function G(ce, Ue) {
        var dt = ce.sortIndex - Ue.sortIndex;
        return dt !== 0 ? dt : ce.id - Ue.id;
      }
      var pe = 1, I = 2, q = 3, ie = 4, xe = 5;
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
      var je = 1073741823, Y = -1, ft = 250, qe = 5e3, en = 1e4, Nt = je, Ct = [], ot = [], Qe = 1, fe = null, Ne = q, Rt = !1, et = !1, wt = !1, re = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function te(ce) {
        for (var Ue = R(ot); Ue !== null; ) {
          if (Ue.callback === null)
            g(ot);
          else if (Ue.startTime <= ce)
            g(ot), Ue.sortIndex = Ue.expirationTime, b(Ct, Ue);
          else
            return;
          Ue = R(ot);
        }
      }
      function Se(ce) {
        if (wt = !1, te(ce), !et)
          if (R(Ct) !== null)
            et = !0, za(Pe);
          else {
            var Ue = R(ot);
            Ue !== null && Mn(Se, Ue.startTime - ce);
          }
      }
      function Pe(ce, Ue) {
        et = !1, wt && (wt = !1, fr()), Rt = !0;
        var dt = Ne;
        try {
          var Bt;
          if (!m)
            return ze(ce, Ue);
        } finally {
          fe = null, Ne = dt, Rt = !1;
        }
      }
      function ze(ce, Ue) {
        var dt = Ue;
        for (te(dt), fe = R(Ct); fe !== null && !S && !(fe.expirationTime > dt && (!ce || Te())); ) {
          var Bt = fe.callback;
          if (typeof Bt == "function") {
            fe.callback = null, Ne = fe.priorityLevel;
            var dn = fe.expirationTime <= dt, nr = Bt(dn);
            dt = p.unstable_now(), typeof nr == "function" ? fe.callback = nr : fe === R(Ct) && g(Ct), te(dt);
          } else
            g(Ct);
          fe = R(Ct);
        }
        if (fe !== null)
          return !0;
        var xn = R(ot);
        return xn !== null && Mn(Se, xn.startTime - dt), !1;
      }
      function at(ce, Ue) {
        switch (ce) {
          case pe:
          case I:
          case q:
          case ie:
          case xe:
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
        var Bt = p.unstable_now(), dn;
        if (typeof dt == "object" && dt !== null) {
          var nr = dt.delay;
          typeof nr == "number" && nr > 0 ? dn = Bt + nr : dn = Bt;
        } else
          dn = Bt;
        var xn;
        switch (ce) {
          case pe:
            xn = Y;
            break;
          case I:
            xn = ft;
            break;
          case xe:
            xn = Nt;
            break;
          case ie:
            xn = en;
            break;
          case q:
          default:
            xn = qe;
            break;
        }
        var Zr = dn + xn, ln = {
          id: Qe++,
          callback: Ue,
          priorityLevel: ce,
          startTime: dn,
          expirationTime: Zr,
          sortIndex: -1
        };
        return dn > Bt ? (ln.sortIndex = dn, b(ot, ln), R(Ct) === null && ln === R(ot) && (wt ? fr() : wt = !0, Mn(Se, dn - Bt))) : (ln.sortIndex = Zr, b(Ct, ln), !et && !Rt && (et = !0, za(Pe))), ln;
      }
      function it() {
      }
      function st() {
        !et && !Rt && (et = !0, za(Pe));
      }
      function Dt() {
        return R(Ct);
      }
      function le(ce) {
        ce.callback = null;
      }
      function zt() {
        return Ne;
      }
      var mn = !1, tr = null, D = -1, V = C, Q = -1;
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
        ce > 0 ? V = Math.floor(1e3 / ce) : V = C;
      }
      var ke = function() {
        if (tr !== null) {
          var ce = p.unstable_now();
          Q = ce;
          var Ue = !0, dt = !0;
          try {
            dt = tr(Ue, ce);
          } finally {
            dt ? St() : (mn = !1, tr = null);
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
        tr = ce, mn || (mn = !0, St());
      }
      function Mn(ce, Ue) {
        D = re(function() {
          ce(p.unstable_now());
        }, Ue);
      }
      function fr() {
        _e(D), D = -1;
      }
      var fl = se, Ca = null;
      p.unstable_IdlePriority = xe, p.unstable_ImmediatePriority = pe, p.unstable_LowPriority = ie, p.unstable_NormalPriority = q, p.unstable_Profiling = Ca, p.unstable_UserBlockingPriority = I, p.unstable_cancelCallback = le, p.unstable_continueExecution = st, p.unstable_forceFrameRate = ne, p.unstable_getCurrentPriorityLevel = zt, p.unstable_getFirstCallbackNode = Dt, p.unstable_next = Ae, p.unstable_pauseExecution = it, p.unstable_requestPaint = fl, p.unstable_runWithPriority = at, p.unstable_scheduleCallback = Je, p.unstable_shouldYield = Te, p.unstable_wrapCallback = We, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(B0)), B0;
}
var XT;
function Sx() {
  return XT || (XT = 1, process.env.NODE_ENV === "production" ? Km.exports = zk() : Km.exports = Ak()), Km.exports;
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
function Uk() {
  if (KT)
    return Sa;
  KT = 1;
  var p = jt, S = Sx();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), b = {};
  function R(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (b[n] = r, n = 0; n < r.length; n++)
      C.add(r[n]);
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
  function xe(n, r, l, o) {
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
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (xe(r, l, c, o) && (l = null), o || c === null ? q(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var je = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = Symbol.for("react.element"), ft = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), en = Symbol.for("react.strict_mode"), Nt = Symbol.for("react.profiler"), Ct = Symbol.for("react.provider"), ot = Symbol.for("react.context"), Qe = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), Rt = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), wt = Symbol.for("react.offscreen"), re = Symbol.iterator;
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
`), y = c.length - 1, x = d.length - 1; 1 <= y && 0 <= x && c[y] !== d[x]; )
          x--;
        for (; 1 <= y && 0 <= x; y--, x--)
          if (c[y] !== d[x]) {
            if (y !== 1 || x !== 1)
              do
                if (y--, x--, 0 > x || c[y] !== d[x]) {
                  var w = `
` + c[y].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= y && 0 <= x);
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
      case en:
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
        case Rt:
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
        return r === en ? "StrictMode" : "Mode";
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
  function tr(n, r) {
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
  var fr, fl = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (fr = fr || document.createElement("div"), fr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = fr.firstChild; n.firstChild; )
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
  var dn = z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function nr(n, r) {
    if (r) {
      if (dn[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
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
  function xn(n, r) {
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
  var Zr = null;
  function ln(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Aa = null, yn = null, un = null;
  function Qp(n) {
    if (n = Mo(n)) {
      if (typeof Aa != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = He(r), Aa(n.stateNode, n.type, r));
    }
  }
  function Es(n) {
    yn ? un ? un.push(n) : un = [n] : yn = n;
  }
  function Cs() {
    if (yn) {
      var n = yn, r = un;
      if (un = yn = null, Qp(n), r)
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
      Ts = !1, (yn !== null || un !== null) && (Gp(), Cs());
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
  var xs = !1;
  if (K)
    try {
      var dl = {};
      Object.defineProperty(dl, "passive", { get: function() {
        xs = !0;
      } }), window.addEventListener("test", dl, dl), window.removeEventListener("test", dl, dl);
    } catch {
      xs = !1;
    }
  function ru(n, r, l, o, c, d, y, x, w) {
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
  function Tf(n, r, l, o, c, d, y, x, w) {
    Ta = !1, Ja = null, ru.apply(Cf, arguments);
  }
  function iu(n, r, l, o, c, d, y, x, w) {
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
  function dr(n) {
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
        for (var y = !1, x = c.child; x; ) {
          if (x === l) {
            y = !0, l = c, o = d;
            break;
          }
          if (x === o) {
            y = !0, o = c, l = d;
            break;
          }
          x = x.sibling;
        }
        if (!y) {
          for (x = d.child; x; ) {
            if (x === l) {
              y = !0, l = d, o = c;
              break;
            }
            if (x === o) {
              y = !0, o = d, l = c;
              break;
            }
            x = x.sibling;
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
    return n = dr(n), n !== null ? Xp(n) : null;
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
  var xf = S.unstable_scheduleCallback, Kp = S.unstable_cancelCallback, uy = S.unstable_shouldYield, oy = S.unstable_requestPaint, on = S.unstable_now, sy = S.unstable_getCurrentPriorityLevel, ei = S.unstable_ImmediatePriority, pt = S.unstable_UserBlockingPriority, ki = S.unstable_NormalPriority, Zp = S.unstable_LowPriority, Rf = S.unstable_IdlePriority, co = null, xa = null;
  function Jp(n) {
    if (xa && typeof xa.onCommitFiberRoot == "function")
      try {
        xa.onCommitFiberRoot(co, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Jr = Math.clz32 ? Math.clz32 : cy, ev = Math.log, tv = Math.LN2;
  function cy(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ev(n) / tv | 0) | 0;
  }
  var Rs = 64, uu = 4194304;
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
  function Ra(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, y = l & 268435455;
    if (y !== 0) {
      var x = y & ~c;
      x !== 0 ? o = pl(x) : (d &= y, d !== 0 && (o = pl(d)));
    } else
      y = l & ~c, y !== 0 ? o = pl(y) : d !== 0 && (o = pl(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Jr(r), c = 1 << l, o |= n[l], r &= ~c;
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
      var y = 31 - Jr(d), x = 1 << y, w = c[y];
      w === -1 ? (!(x & l) || x & o) && (c[y] = wf(x, r)) : w <= r && (n.expiredLanes |= x), d &= ~x;
    }
  }
  function bf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function bs() {
    var n = Rs;
    return Rs <<= 1, !(Rs & 4194240) && (Rs = 64), n;
  }
  function Df(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function vl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Jr(r), n[r] = l;
  }
  function fy(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Jr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function fo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Jr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Lt = 0;
  function _f(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var nv, Ds, Pt, rv, kf, rt = !1, po = [], gn = null, ea = null, ta = null, vo = /* @__PURE__ */ new Map(), Rn = /* @__PURE__ */ new Map(), At = [], dy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        gn = null;
        break;
      case "dragenter":
      case "dragleave":
        ea = null;
        break;
      case "mouseover":
      case "mouseout":
        ta = null;
        break;
      case "pointerover":
      case "pointerout":
        vo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rn.delete(r.pointerId);
    }
  }
  function rr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Mo(r), r !== null && Ds(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Oi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return gn = rr(gn, n, r, l, o, c), !0;
      case "dragenter":
        return ea = rr(ea, n, r, l, o, c), !0;
      case "mouseover":
        return ta = rr(ta, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return vo.set(d, rr(vo.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rn.set(d, rr(Rn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function av(n) {
    var r = ra(n.target);
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
        Zr = o, l.target.dispatchEvent(o), Zr = null;
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
    rt = !1, gn !== null && ou(gn) && (gn = null), ea !== null && ou(ea) && (ea = null), ta !== null && ou(ta) && (ta = null), vo.forEach(Of), Rn.forEach(Of);
  }
  function ho(n, r) {
    n.blockedOn === r && (n.blockedOn = null, rt || (rt = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, iv)));
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
    for (gn !== null && ho(gn, n), ea !== null && ho(ea, n), ta !== null && ho(ta, n), vo.forEach(r), Rn.forEach(r), l = 0; l < At.length; l++)
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
      else if (wa(n, o), r & 4 && -1 < dy.indexOf(n)) {
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
    if (yo = null, n = ln(o), n = ra(n), n !== null)
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
        switch (sy()) {
          case ei:
            return 1;
          case pt:
            return 4;
          case ki:
          case Zp:
            return 16;
          case Rf:
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
  function Vr(n) {
    function r(l, o, c, d, y) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var x in n)
        n.hasOwnProperty(x) && (l = n[x], this[x] = l ? l(d) : d[x]);
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
  }, defaultPrevented: 0, isTrusted: 0 }, Ls = Vr(Li), fu = z({}, Li, { view: 0, detail: 0 }), ov = Vr(fu), Ms, Nf, Co, Nn = z({}, fu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ff, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Co && (Co && n.type === "mousemove" ? (Ms = n.screenX - Co.screenX, Nf = n.screenY - Co.screenY) : Nf = Ms = 0, Co = n), Ms);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Nf;
  } }), Ns = Vr(Nn), sv = z({}, Nn, { dataTransfer: 0 }), cv = Vr(sv), py = z({}, fu, { relatedTarget: 0 }), Mi = Vr(py), zf = z({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fv = Vr(zf), vy = z({}, Li, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), hy = Vr(vy), my = z({}, Li, { data: 0 }), Af = Vr(my), Uf = {
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
  } }), yy = Vr(ni), Hf = z({}, Nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zs = Vr(Hf), Vf = z({}, fu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ff }), gy = Vr(Vf), As = z({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hv = Vr(As), Rr = z({}, Nn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ri = Vr(Rr), Sn = [9, 13, 27, 32], ba = K && "CompositionEvent" in window, ml = null;
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
  function Sy(n, r) {
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
  function Ey(n, r) {
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
        var xv = document.createElement("div");
        xv.setAttribute("oninput", "return;"), Pf = typeof xv.oninput == "function";
      }
      Bf = Pf;
    } else
      Bf = !1;
    jf = Bf && (!document.documentMode || 9 < document.documentMode);
  }
  function Rv() {
    To && (To.detachEvent("onpropertychange", wv), vu = To = null);
  }
  function wv(n) {
    if (n.propertyName === "value" && mu(vu)) {
      var r = [];
      Cv(r, vu, n, ln(n)), Ef(hu, r);
    }
  }
  function Cy(n, r, l) {
    n === "focusin" ? (Rv(), To = r, vu = l, To.attachEvent("onpropertychange", wv)) : n === "focusout" && Rv();
  }
  function Ty(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return mu(vu);
  }
  function xy(n, r) {
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
  var na = typeof Object.is == "function" ? Object.is : Ry;
  function xo(n, r) {
    if (na(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!$.call(r, c) || !na(n[c], r[c]))
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
  var Ov = K && "documentMode" in document && 11 >= document.documentMode, Da = null, $f = null, Ro = null, If = !1;
  function Lv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    If || Da == null || Da !== zt(o) || (o = Da, "selectionStart" in o && ai(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Ro && xo(Ro, o) || (Ro = o, o = ko($f, "onSelect"), 0 < o.length && (r = new Ls("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Da)));
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
    Av.set(n, r), R(r, [n]);
  }
  for (var wo = 0; wo < Uv.length; wo++) {
    var gl = Uv[wo], wy = gl.toLowerCase(), bo = gl[0].toUpperCase() + gl.slice(1);
    ii(wy, "on" + bo);
  }
  ii(Wf, "onAnimationEnd"), ii(Mv, "onAnimationIteration"), ii(Nv, "onAnimationStart"), ii("dblclick", "onDoubleClick"), ii("focusin", "onFocus"), ii("focusout", "onBlur"), ii(zv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), R("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), R("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), R("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Do = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), by = new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));
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
            var x = o[y], w = x.instance, H = x.currentTarget;
            if (x = x.listener, w !== d && c.isPropagationStopped())
              break e;
            Fv(c, x, H), d = w;
          }
        else
          for (y = 0; y < o.length; y++) {
            if (x = o[y], w = x.instance, H = x.currentTarget, x = x.listener, w !== d && c.isPropagationStopped())
              break e;
            Fv(c, x, H), d = w;
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
      n[li] = !0, C.forEach(function(l) {
        l !== "selectionchange" && (by.has(l) || Ni(l, !1, n), Ni(l, !0, n));
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
    l = c.bind(null, r, l, n), c = void 0, !xs || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
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
            var x = o.stateNode.containerInfo;
            if (x === c || x.nodeType === 8 && x.parentNode === c)
              break;
            if (y === 4)
              for (y = o.return; y !== null; ) {
                var w = y.tag;
                if ((w === 3 || w === 4) && (w = y.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                y = y.return;
              }
            for (; x !== null; ) {
              if (y = ra(x), y === null)
                return;
              if (w = y.tag, w === 5 || w === 6) {
                o = d = y;
                continue e;
              }
              x = x.parentNode;
            }
          }
          o = o.return;
        }
    Ef(function() {
      var H = d, Z = ln(l), J = [];
      e: {
        var X = Av.get(n);
        if (X !== void 0) {
          var ve = Ls, Re = n;
          switch (n) {
            case "keypress":
              if (cu(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ve = yy;
              break;
            case "focusin":
              Re = "focus", ve = Mi;
              break;
            case "focusout":
              Re = "blur", ve = Mi;
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
              ve = gy;
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
              ve = hy;
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
          var De = (r & 4) !== 0, vn = !De && n === "scroll", L = De ? X !== null ? X + "Capture" : null : X;
          De = [];
          for (var k = H, A; k !== null; ) {
            A = k;
            var ae = A.stateNode;
            if (A.tag === 5 && ae !== null && (A = ae, L !== null && (ae = uo(k, L), ae != null && De.push(_o(k, ae, A)))), vn)
              break;
            k = k.return;
          }
          0 < De.length && (X = new ve(X, Re, null, l, Z), J.push({ event: X, listeners: De }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (X = n === "mouseover" || n === "pointerover", ve = n === "mouseout" || n === "pointerout", X && l !== Zr && (Re = l.relatedTarget || l.fromElement) && (ra(Re) || Re[ui]))
            break e;
          if ((ve || X) && (X = Z.window === Z ? Z : (X = Z.ownerDocument) ? X.defaultView || X.parentWindow : window, ve ? (Re = l.relatedTarget || l.toElement, ve = H, Re = Re ? ra(Re) : null, Re !== null && (vn = Ua(Re), Re !== vn || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (ve = null, Re = H), ve !== Re)) {
            if (De = Ns, ae = "onMouseLeave", L = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (De = zs, ae = "onPointerLeave", L = "onPointerEnter", k = "pointer"), vn = ve == null ? X : gu(ve), A = Re == null ? X : gu(Re), X = new De(ae, k + "leave", ve, l, Z), X.target = vn, X.relatedTarget = A, ae = null, ra(Z) === H && (De = new De(L, k + "enter", Re, l, Z), De.target = A, De.relatedTarget = vn, ae = De), vn = ae, ve && Re)
              t: {
                for (De = ve, L = Re, k = 0, A = De; A; A = Sl(A))
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
            ve !== null && Gf(J, X, ve, De, !1), Re !== null && vn !== null && Gf(J, vn, Re, De, !0);
          }
        }
        e: {
          if (X = H ? gu(H) : window, ve = X.nodeName && X.nodeName.toLowerCase(), ve === "select" || ve === "input" && X.type === "file")
            var Oe = Tv;
          else if (Ev(X))
            if (jf)
              Oe = bv;
            else {
              Oe = Ty;
              var we = Cy;
            }
          else
            (ve = X.nodeName) && ve.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (Oe = xy);
          if (Oe && (Oe = Oe(n, H))) {
            Cv(J, Oe, l, Z);
            break e;
          }
          we && we(n, X, H), n === "focusout" && (we = X._wrapperState) && we.controlled && X.type === "number" && Te(X, "number", X.value);
        }
        switch (we = H ? gu(H) : window, n) {
          case "focusin":
            (Ev(we) || we.contentEditable === "true") && (Da = we, $f = H, Ro = null);
            break;
          case "focusout":
            Ro = $f = Da = null;
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
        Ke && (mv && l.locale !== "ko" && (pu || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && pu && (Fe = Mf()) : (ti = Z, go = "value" in ti ? ti.value : ti.textContent, pu = !0)), we = ko(H, Ke), 0 < we.length && (Ke = new Af(Ke, n, null, l, Z), J.push({ event: Ke, listeners: we }), Fe ? Ke.data = Fe : (Fe = Fs(l), Fe !== null && (Ke.data = Fe)))), (Fe = Us ? Sy(n, l) : Ey(n, l)) && (H = ko(H, "onBeforeInput"), 0 < H.length && (Z = new Af("onBeforeInput", "beforeinput", null, l, Z), J.push({ event: Z, listeners: H }), Z.data = Fe));
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
      var x = l, w = x.alternate, H = x.stateNode;
      if (w !== null && w === o)
        break;
      x.tag === 5 && H !== null && (x = H, c ? (w = uo(l, d), w != null && y.unshift(_o(l, w, x))) : c || (w = uo(l, d), w != null && y.push(_o(l, w, x)))), l = l.return;
    }
    y.length !== 0 && n.push({ event: r, listeners: y });
  }
  var qf = /\r\n?/g, Dy = /\u0000|\uFFFD/g;
  function Xf(n) {
    return (typeof n == "string" ? n : "" + n).replace(qf, `
`).replace(Dy, "");
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
    return Zf.resolve(null).then(n).catch(_y);
  } : Cl;
  function _y(n) {
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
  var Ai = Math.random().toString(36).slice(2), Fa = "__reactFiber$" + Ai, Tl = "__reactProps$" + Ai, ui = "__reactContainer$" + Ai, ed = "__reactEvents$" + Ai, ky = "__reactListeners$" + Ai, td = "__reactHandles$" + Ai;
  function ra(n) {
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
  var Ui = [], Qt = -1;
  function lt(n) {
    return { current: n };
  }
  function bt(n) {
    0 > Qt || (n.current = Ui[Qt], Ui[Qt] = null, Qt--);
  }
  function kt(n, r) {
    Qt++, Ui[Qt] = n.current, n.current = r;
  }
  var Ha = {}, Xe = lt(Ha), sn = lt(!1), wr = Ha;
  function aa(n, r) {
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
  function Kt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ia() {
    bt(sn), bt(Xe);
  }
  function Fi(n, r, l) {
    if (Xe.current !== Ha)
      throw Error(m(168));
    kt(Xe, r), kt(sn, l);
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
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ha, wr = Xe.current, kt(Xe, n), kt(sn, sn.current), !0;
  }
  function jv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(m(169));
    l ? (n = No(n, r, wr), o.__reactInternalMemoizedMergedChildContext = n, bt(sn), bt(Xe), kt(Xe, n)) : bt(sn), kt(sn, l);
  }
  var jr = null, An = !1, zo = !1;
  function nd(n) {
    jr === null ? jr = [n] : jr.push(n);
  }
  function rd(n) {
    An = !0, nd(n);
  }
  function br() {
    if (!zo && jr !== null) {
      zo = !0;
      var n = 0, r = Lt;
      try {
        var l = jr;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        jr = null, An = !1;
      } catch (c) {
        throw jr !== null && (jr = jr.slice(n + 1)), xf(ei, br), c;
      } finally {
        Lt = r, zo = !1;
      }
    }
    return null;
  }
  var Hi = [], Dr = 0, xl = null, Su = 0, _r = [], ar = 0, la = null, Pn = 1, oi = "";
  function Br(n, r) {
    Hi[Dr++] = Su, Hi[Dr++] = xl, xl = n, Su = r;
  }
  function ad(n, r, l) {
    _r[ar++] = Pn, _r[ar++] = oi, _r[ar++] = la, la = n;
    var o = Pn;
    n = oi;
    var c = 32 - Jr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Jr(r) + c;
    if (30 < d) {
      var y = c - c % 5;
      d = (o & (1 << y) - 1).toString(32), o >>= y, c -= y, Pn = 1 << 32 - Jr(r) + c | l << c | o, oi = d + n;
    } else
      Pn = 1 << d | l << c | o, oi = n;
  }
  function Qs(n) {
    n.return !== null && (Br(n, 1), ad(n, 1, 0));
  }
  function id(n) {
    for (; n === xl; )
      xl = Hi[--Dr], Hi[Dr] = null, Su = Hi[--Dr], Hi[Dr] = null;
    for (; n === la; )
      la = _r[--ar], _r[ar] = null, oi = _r[--ar], _r[ar] = null, Pn = _r[--ar], _r[ar] = null;
  }
  var Pr = null, kr = null, Wt = !1, ua = null;
  function ld(n, r) {
    var l = pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Bv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Pr = n, kr = _a(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Pr = n, kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = la !== null ? { id: Pn, overflow: oi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Pr = n, kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ws(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Gs(n) {
    if (Wt) {
      var r = kr;
      if (r) {
        var l = r;
        if (!Bv(n, r)) {
          if (Ws(n))
            throw Error(m(418));
          r = _a(l.nextSibling);
          var o = Pr;
          r && Bv(n, r) ? ld(o, l) : (n.flags = n.flags & -4097 | 2, Wt = !1, Pr = n);
        }
      } else {
        if (Ws(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, Wt = !1, Pr = n;
      }
    }
  }
  function Pv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Pr = n;
  }
  function qs(n) {
    if (n !== Pr)
      return !1;
    if (!Wt)
      return Pv(n), Wt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Oo(n.type, n.memoizedProps)), r && (r = kr)) {
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
                kr = _a(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        kr = null;
      }
    } else
      kr = Pr ? _a(n.stateNode.nextSibling) : null;
    return !0;
  }
  function $v() {
    for (var n = kr; n; )
      n = _a(n.nextSibling);
  }
  function tn() {
    kr = Pr = null, Wt = !1;
  }
  function ud(n) {
    ua === null ? ua = [n] : ua.push(n);
  }
  var Xs = je.ReactCurrentBatchConfig;
  function $r(n, r) {
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
  function pn(n) {
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
    var d = c.firstBaseUpdate, y = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var w = x, H = w.next;
      w.next = null, y === null ? d = H : y.next = H, y = w;
      var Z = n.alternate;
      Z !== null && (Z = Z.updateQueue, x = Z.lastBaseUpdate, x !== y && (x === null ? Z.firstBaseUpdate = H : x.next = H, Z.lastBaseUpdate = w));
    }
    if (d !== null) {
      var J = c.baseState;
      y = 0, Z = H = w = null, x = d;
      do {
        var X = x.lane, ve = x.eventTime;
        if ((o & X) === X) {
          Z !== null && (Z = Z.next = {
            eventTime: ve,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Re = n, De = x;
            switch (X = r, ve = l, De.tag) {
              case 1:
                if (Re = De.payload, typeof Re == "function") {
                  J = Re.call(ve, J, X);
                  break e;
                }
                J = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = De.payload, X = typeof Re == "function" ? Re.call(ve, J, X) : Re, X == null)
                  break e;
                J = z({}, J, X);
                break e;
              case 2:
                Bi = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, X = c.effects, X === null ? c.effects = [x] : X.push(x));
        } else
          ve = { eventTime: ve, lane: X, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, Z === null ? (H = Z = ve, w = J) : Z = Z.next = ve, y |= X;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null)
            break;
          X = x, x = X.next, X.next = null, c.lastBaseUpdate = X, c.shared.pending = null;
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
  function Rl(n, r, l) {
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
    var o = or(), c = Cn(n), d = ci(o, c);
    d.payload = r, l != null && (d.callback = l), r = Pi(n, d, c), r !== null && (sr(r, n, c, o), Zs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = or(), c = Cn(n), d = ci(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Pi(n, d, c), r !== null && (sr(r, n, c, o), Zs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = or(), o = Cn(n), c = ci(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Pi(n, c, o), r !== null && (sr(r, n, o, l), Zs(r, n, o));
  } };
  function Qv(n, r, l, o, c, d, y) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, y) : r.prototype && r.prototype.isPureReactComponent ? !xo(l, o) || !xo(c, d) : !0;
  }
  function Wv(n, r, l) {
    var o = !1, c = Ha, d = r.contextType;
    return typeof d == "object" && d !== null ? d = pn(d) : (c = Kt(r) ? wr : Xe.current, o = r.contextTypes, d = (o = o != null) ? aa(n, c) : Ha), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Js, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Gv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Js.enqueueReplaceState(r, r.state, null);
  }
  function ec(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Yv, fd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = pn(d) : (d = Kt(r) ? wr : Xe.current, c.context = aa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (pd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Js.enqueueReplaceState(c, c.state, null), $i(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
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
          var x = c.refs;
          x === Yv && (x = c.refs = {}), y === null ? delete x[d] : x[d] = y;
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
    function x(L, k, A, ae) {
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
        return Oe !== null ? null : x(L, k, "" + A, ae);
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
        return L = L.get(A) || null, x(k, L, "" + ae, Oe);
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
    function Re(L, k, A, ae) {
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
        return l(L, Fe), Wt && Br(L, Ke), Oe;
      if (Fe === null) {
        for (; Ke < A.length; Ke++)
          Fe = J(L, A[Ke], ae), Fe !== null && (k = d(Fe, k, Ke), we === null ? Oe = Fe : we.sibling = Fe, we = Fe);
        return Wt && Br(L, Ke), Oe;
      }
      for (Fe = o(L, Fe); Ke < A.length; Ke++)
        Vn = ve(Fe, L, Ke, A[Ke], ae), Vn !== null && (n && Vn.alternate !== null && Fe.delete(Vn.key === null ? Ke : Vn.key), k = d(Vn, k, Ke), we === null ? Oe = Vn : we.sibling = Vn, we = Vn);
      return n && Fe.forEach(function(Zi) {
        return r(L, Zi);
      }), Wt && Br(L, Ke), Oe;
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
        ), Wt && Br(L, Ke), Oe;
      if (Fe === null) {
        for (; !Et.done; Ke++, Et = A.next())
          Et = J(L, Et.value, ae), Et !== null && (k = d(Et, k, Ke), we === null ? Oe = Et : we.sibling = Et, we = Et);
        return Wt && Br(L, Ke), Oe;
      }
      for (Fe = o(L, Fe); !Et.done; Ke++, Et = A.next())
        Et = ve(Fe, L, Ke, Et.value, ae), Et !== null && (n && Et.alternate !== null && Fe.delete(Et.key === null ? Ke : Et.key), k = d(Et, k, Ke), we === null ? Oe = Et : we.sibling = Et, we = Et);
      return n && Fe.forEach(function(qy) {
        return r(L, qy);
      }), Wt && Br(L, Ke), Oe;
    }
    function vn(L, k, A, ae) {
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
            return we = A._init, vn(L, k, we(A._payload), ae);
        }
        if (se(A))
          return Re(L, k, A, ae);
        if (_e(A))
          return De(L, k, A, ae);
        tc(L, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, k !== null && k.tag === 6 ? (l(L, k.sibling), k = c(k, A), k.return = L, L = k) : (l(L, k), k = Jo(A, L.mode, ae), k.return = L, L = k), y(L)) : l(L, k);
    }
    return vn;
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
  function nn(n) {
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
  var oa = [];
  function nc() {
    for (var n = 0; n < oa.length; n++)
      oa[n]._workInProgressVersionPrimary = null;
    oa.length = 0;
  }
  var rc = je.ReactCurrentDispatcher, hd = je.ReactCurrentBatchConfig, bl = 0, Gt = null, P = null, mt = null, Ye = !1, ja = !1, Ir = 0, Dl = 0;
  function qt() {
    throw Error(m(321));
  }
  function _l(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!na(n[l], r[l]))
        return !1;
    return !0;
  }
  function Yi(n, r, l, o, c, d) {
    if (bl = d, Gt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, rc.current = n === null || n.memoizedState === null ? Ly : My, n = l(o, c), ja) {
      d = 0;
      do {
        if (ja = !1, Ir = 0, 25 <= d)
          throw Error(m(301));
        d += 1, mt = P = null, r.updateQueue = null, rc.current = yd, n = l(o, c);
      } while (ja);
    }
    if (rc.current = Sc, r = P !== null && P.next !== null, bl = 0, mt = P = Gt = null, Ye = !1, r)
      throw Error(m(300));
    return n;
  }
  function kl() {
    var n = Ir !== 0;
    return Ir = 0, n;
  }
  function sa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? Gt.memoizedState = mt = n : mt = mt.next = n, mt;
  }
  function Or() {
    if (P === null) {
      var n = Gt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = P.next;
    var r = mt === null ? Gt.memoizedState : mt.next;
    if (r !== null)
      mt = r, P = n;
    else {
      if (n === null)
        throw Error(m(310));
      P = n, n = { memoizedState: P.memoizedState, baseState: P.baseState, baseQueue: P.baseQueue, queue: P.queue, next: null }, mt === null ? Gt.memoizedState = mt = n : mt = mt.next = n;
    }
    return mt;
  }
  function Ol(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Fo(n) {
    var r = Or(), l = r.queue;
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
      var x = y = null, w = null, H = d;
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
          w === null ? (x = w = J, y = o) : w = w.next = J, Gt.lanes |= Z, vi |= Z;
        }
        H = H.next;
      } while (H !== null && H !== d);
      w === null ? y = o : w.next = x, na(o, r.memoizedState) || (En = !0), r.memoizedState = o, r.baseState = y, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Gt.lanes |= d, vi |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ho(n) {
    var r = Or(), l = r.queue;
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
      na(d, r.memoizedState) || (En = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ac() {
  }
  function ic(n, r) {
    var l = Gt, o = Or(), c = r(), d = !na(o.memoizedState, c);
    if (d && (o.memoizedState = c, En = !0), o = o.queue, Vo(oc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || mt !== null && mt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ll(9, uc.bind(null, l, o, c, r), void 0, null), rn === null)
        throw Error(m(349));
      bl & 30 || lc(l, r, c);
    }
    return c;
  }
  function lc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Gt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Gt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
      return !na(n, l);
    } catch {
      return !0;
    }
  }
  function cc(n) {
    var r = si(n, 1);
    r !== null && sr(r, n, 1, -1);
  }
  function fc(n) {
    var r = sa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ol, lastRenderedState: n }, r.queue = n, n = n.dispatch = gc.bind(null, Gt, n), [r.memoizedState, n];
  }
  function Ll(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Gt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Gt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function dc() {
    return Or().memoizedState;
  }
  function Ml(n, r, l, o) {
    var c = sa();
    Gt.flags |= n, c.memoizedState = Ll(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fi(n, r, l, o) {
    var c = Or();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (P !== null) {
      var y = P.memoizedState;
      if (d = y.destroy, o !== null && _l(o, y.deps)) {
        c.memoizedState = Ll(r, l, d, o);
        return;
      }
    }
    Gt.flags |= n, c.memoizedState = Ll(1 | r, l, d, o);
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
  function xu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fi(4, 4, md.bind(null, r, n), l);
  }
  function mc() {
  }
  function Ru(n, r) {
    var l = Or();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && _l(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Qi(n, r) {
    var l = Or();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && _l(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Lr(n, r, l) {
    return bl & 21 ? (na(l, r) || (l = bs(), Gt.lanes |= l, vi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, En = !0), n.memoizedState = l);
  }
  function Oy(n, r) {
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
    return Or().memoizedState;
  }
  function yc(n, r, l) {
    var o = Cn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wu(n))
      jo(r, l);
    else if (l = Iv(n, r, l, o), l !== null) {
      var c = or();
      sr(l, n, o, c), Zv(l, r, o);
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
          var y = r.lastRenderedState, x = d(y, l);
          if (c.hasEagerState = !0, c.eagerState = x, na(x, y)) {
            var w = r.interleaved;
            w === null ? (c.next = c, cd(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Iv(n, r, c, o), l !== null && (c = or(), sr(l, n, o, c), Zv(l, r, o));
    }
  }
  function wu(n) {
    var r = n.alternate;
    return n === Gt || r !== null && r === Gt;
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
  var Sc = { readContext: pn, useCallback: qt, useContext: qt, useEffect: qt, useImperativeHandle: qt, useInsertionEffect: qt, useLayoutEffect: qt, useMemo: qt, useReducer: qt, useRef: qt, useState: qt, useDebugValue: qt, useDeferredValue: qt, useTransition: qt, useMutableSource: qt, useSyncExternalStore: qt, useId: qt, unstable_isNewReconciler: !1 }, Ly = { readContext: pn, useCallback: function(n, r) {
    return sa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: pn, useEffect: pc, useImperativeHandle: function(n, r, l) {
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
    var l = sa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = sa();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = yc.bind(null, Gt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = sa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: fc, useDebugValue: mc, useDeferredValue: function(n) {
    return sa().memoizedState = n;
  }, useTransition: function() {
    var n = fc(!1), r = n[0];
    return n = Oy.bind(null, n[1]), sa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Gt, c = sa();
    if (Wt) {
      if (l === void 0)
        throw Error(m(407));
      l = l();
    } else {
      if (l = r(), rn === null)
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
    var n = sa(), r = rn.identifierPrefix;
    if (Wt) {
      var l = oi, o = Pn;
      l = (o & ~(1 << 32 - Jr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ir++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Dl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, My = {
    readContext: pn,
    useCallback: Ru,
    useContext: pn,
    useEffect: Vo,
    useImperativeHandle: xu,
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
      var r = Or();
      return Lr(r, P.memoizedState, n);
    },
    useTransition: function() {
      var n = Fo(Ol)[0], r = Or().memoizedState;
      return [n, r];
    },
    useMutableSource: ac,
    useSyncExternalStore: ic,
    useId: It,
    unstable_isNewReconciler: !1
  }, yd = { readContext: pn, useCallback: Ru, useContext: pn, useEffect: Vo, useImperativeHandle: xu, useInsertionEffect: vc, useLayoutEffect: hc, useMemo: Qi, useReducer: Ho, useRef: dc, useState: function() {
    return Ho(Ol);
  }, useDebugValue: mc, useDeferredValue: function(n) {
    var r = Or();
    return P === null ? r.memoizedState = n : Lr(r, P.memoizedState, n);
  }, useTransition: function() {
    var n = Ho(Ol)[0], r = Or().memoizedState;
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
  var Ny = typeof WeakMap == "function" ? WeakMap : Map;
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
      o = n.pingCache = new Ny();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = jy.bind(null, n, r, l), r.then(n, n));
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
  var zy = je.ReactCurrentOwner, En = !1;
  function bn(n, r, l, o) {
    r.child = n === null ? Kv(r, null, l, o) : Cu(r, n.child, l, o);
  }
  function Wi(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ue(r, c), o = Yi(n, r, l, o, d, c), l = kl(), n !== null && !En ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, In(n, r, c)) : (Wt && l && Qs(r), r.flags |= 1, bn(n, r, o, c), r.child);
  }
  function Cc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Hd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Mr(n, r, d, o, c)) : (n = Nc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var y = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : xo, l(y, o) && n.ref === r.ref)
        return In(n, r, c);
    }
    return r.flags |= 1, n = Ki(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Mr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (xo(d, o) && n.ref === r.ref)
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
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, kt(Nu, Yr), Yr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, kt(Nu, Yr), Yr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, kt(Nu, Yr), Yr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, kt(Nu, Yr), Yr |= o;
    return bn(n, r, c, l), r.child;
  }
  function ut(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Du(n, r, l, o, c) {
    var d = Kt(l) ? wr : Xe.current;
    return d = aa(r, d), ue(r, c), l = Yi(n, r, l, o, d, c), o = kl(), n !== null && !En ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, In(n, r, c)) : (Wt && o && Qs(r), r.flags |= 1, bn(n, r, l, c), r.child);
  }
  function Ed(n, r, l, o, c) {
    if (Kt(l)) {
      var d = !0;
      Ys(r);
    } else
      d = !1;
    if (ue(r, c), r.stateNode === null)
      ir(n, r), Wv(r, l, o), ec(r, l, o, c), o = !0;
    else if (n === null) {
      var y = r.stateNode, x = r.memoizedProps;
      y.props = x;
      var w = y.context, H = l.contextType;
      typeof H == "object" && H !== null ? H = pn(H) : (H = Kt(l) ? wr : Xe.current, H = aa(r, H));
      var Z = l.getDerivedStateFromProps, J = typeof Z == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      J || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (x !== o || w !== H) && Gv(r, y, o, H), Bi = !1;
      var X = r.memoizedState;
      y.state = X, $i(r, o, y, c), w = r.memoizedState, x !== o || X !== w || sn.current || Bi ? (typeof Z == "function" && (pd(r, l, Z, o), w = r.memoizedState), (x = Bi || Qv(r, l, x, o, X, w, H)) ? (J || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), y.props = o, y.state = w, y.context = H, o = x) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      y = r.stateNode, wn(n, r), x = r.memoizedProps, H = r.type === r.elementType ? x : $r(r.type, x), y.props = H, J = r.pendingProps, X = y.context, w = l.contextType, typeof w == "object" && w !== null ? w = pn(w) : (w = Kt(l) ? wr : Xe.current, w = aa(r, w));
      var ve = l.getDerivedStateFromProps;
      (Z = typeof ve == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (x !== J || X !== w) && Gv(r, y, o, w), Bi = !1, X = r.memoizedState, y.state = X, $i(r, o, y, c);
      var Re = r.memoizedState;
      x !== J || X !== Re || sn.current || Bi ? (typeof ve == "function" && (pd(r, l, ve, o), Re = r.memoizedState), (H = Bi || Qv(r, l, H, o, X, Re, w) || !1) ? (Z || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(o, Re, w), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(o, Re, w)), typeof y.componentDidUpdate == "function" && (r.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || x === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Re), y.props = o, y.state = Re, y.context = w, o = H) : (typeof y.componentDidUpdate != "function" || x === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return th(n, r, l, o, d, c);
  }
  function th(n, r, l, o, c, d) {
    ut(n, r);
    var y = (r.flags & 128) !== 0;
    if (!o && !y)
      return c && jv(r, l, !1), In(n, r, d);
    o = r.stateNode, zy.current = r;
    var x = y && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && y ? (r.child = Cu(r, n.child, null, d), r.child = Cu(r, null, x, d)) : bn(n, r, x, d), r.memoizedState = o.state, c && jv(r, l, !0), r.child;
  }
  function nh(n) {
    var r = n.stateNode;
    r.pendingContext ? Fi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Fi(n, r.context, !1), vd(n, r.containerInfo);
  }
  function Tc(n, r, l, o, c) {
    return tn(), ud(c), r.flags |= 256, bn(n, r, l, o), r.child;
  }
  var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Td(n, r, l) {
    var o = r.pendingProps, c = Ie.current, d = !1, y = (r.flags & 128) !== 0, x;
    if ((x = y) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), kt(Ie, c & 1), n === null)
      return Gs(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (y = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, y = { mode: "hidden", children: y }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = y) : d = Zo(y, o, 0, null), n = Pl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Cd(l), r.memoizedState = zl, n) : xd(r, y));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null))
      return Ay(n, r, y, o, x, c, l);
    if (d) {
      d = o.fallback, y = r.mode, c = n.child, x = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(y & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Ki(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Ki(x, d) : (d = Pl(d, y, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, y = n.child.memoizedState, y = y === null ? Cd(l) : { baseLanes: y.baseLanes | l, cachePool: null, transitions: y.transitions }, d.memoizedState = y, d.childLanes = n.childLanes & ~l, r.memoizedState = zl, o;
    }
    return d = n.child, n = d.sibling, o = Ki(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function xd(n, r) {
    return r = Zo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function _u(n, r, l, o) {
    return o !== null && ud(o), Cu(r, n.child, null, l), n = xd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Ay(n, r, l, o, c, d, y) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Bo(Error(m(422))), _u(n, r, y, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Zo({ mode: "visible", children: o.children }, c, 0, null), d = Pl(d, c, y, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Cu(r, n.child, null, y), r.child.memoizedState = Cd(y), r.memoizedState = zl, d);
    if (!(r.mode & 1))
      return _u(n, r, y, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var x = o.dgst;
      return o = x, d = Error(m(419)), o = Bo(d, o, void 0), _u(n, r, y, o);
    }
    if (x = (y & n.childLanes) !== 0, En || x) {
      if (o = rn, o !== null) {
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
        c = c & (o.suspendedLanes | y) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, si(n, c), sr(o, n, c, -1));
      }
      return Ad(), o = Bo(Error(m(421))), _u(n, r, y, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = By.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, kr = _a(c.nextSibling), Pr = r, Wt = !0, ua = null, n !== null && (_r[ar++] = Pn, _r[ar++] = oi, _r[ar++] = la, Pn = n.id, oi = n.overflow, la = r), r = xd(r, o.children), r.flags |= 4096, r);
  }
  function Rd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Un(n.return, r, l);
  }
  function xc(n, r, l, o, c) {
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
              n.memoizedState !== null && Rd(n, l, r);
            else if (n.tag === 19)
              Rd(n, l, r);
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
            n = l.alternate, n !== null && nn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), xc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && nn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          xc(r, !0, l, null, d);
          break;
        case "together":
          xc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function ir(n, r) {
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
        nh(r), tn();
        break;
      case 5:
        $e(r);
        break;
      case 1:
        Kt(r.type) && Ys(r);
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
  var $o, Al, ca, Dn;
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
  }, ca = function(n, r, l, o) {
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
      nr(l, o);
      var y;
      l = null;
      for (H in c)
        if (!o.hasOwnProperty(H) && c.hasOwnProperty(H) && c[H] != null)
          if (H === "style") {
            var x = c[H];
            for (y in x)
              x.hasOwnProperty(y) && (l || (l = {}), l[y] = "");
          } else
            H !== "dangerouslySetInnerHTML" && H !== "children" && H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && H !== "autoFocus" && (b.hasOwnProperty(H) ? d || (d = []) : (d = d || []).push(H, null));
      for (H in o) {
        var w = o[H];
        if (x = c != null ? c[H] : void 0, o.hasOwnProperty(H) && w !== x && (w != null || x != null))
          if (H === "style")
            if (x) {
              for (y in x)
                !x.hasOwnProperty(y) || w && w.hasOwnProperty(y) || (l || (l = {}), l[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && x[y] !== w[y] && (l || (l = {}), l[y] = w[y]);
            } else
              l || (d || (d = []), d.push(
                H,
                l
              )), l = w;
          else
            H === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, x = x ? x.__html : void 0, w != null && x !== w && (d = d || []).push(H, w)) : H === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(H, "" + w) : H !== "suppressContentEditableWarning" && H !== "suppressHydrationWarning" && (b.hasOwnProperty(H) ? (w != null && H === "onScroll" && $t("scroll", n), d || x === w || (d = [])) : (d = d || []).push(H, w));
      }
      l && (d = d || []).push("style", l);
      var H = d;
      (r.updateQueue = H) && (r.flags |= 4);
    }
  }, Dn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Io(n, r) {
    if (!Wt)
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
  function lr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Uy(n, r, l) {
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
        return lr(r), null;
      case 1:
        return Kt(r.type) && ia(), lr(r), null;
      case 3:
        return o = r.stateNode, Ii(), bt(sn), bt(Xe), nc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (qs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ua !== null && (Ko(ua), ua = null))), Al(n, r), lr(r), null;
      case 5:
        ct(r);
        var c = wl(Tu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          ca(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(m(166));
            return lr(r), null;
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
                tr(o, d), $t("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, $t("invalid", o);
                break;
              case "textarea":
                St(o, d), $t("invalid", o);
            }
            nr(l, d), c = null;
            for (var y in d)
              if (d.hasOwnProperty(y)) {
                var x = d[y];
                y === "children" ? typeof x == "string" ? o.textContent !== x && (d.suppressHydrationWarning !== !0 && $s(o.textContent, x, n), c = ["children", x]) : typeof x == "number" && o.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && $s(
                  o.textContent,
                  x,
                  n
                ), c = ["children", "" + x]) : b.hasOwnProperty(y) && x != null && y === "onScroll" && $t("scroll", o);
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
              switch (y = xn(l, o), l) {
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
                  tr(n, o), c = mn(n, o), $t("invalid", n);
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
              nr(l, c), x = c;
              for (d in x)
                if (x.hasOwnProperty(d)) {
                  var w = x[d];
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
        return lr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Dn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(m(166));
          if (l = wl(Tu.current), wl(ka.current), qs(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Fa] = r, (d = o.nodeValue !== l) && (n = Pr, n !== null))
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
        return lr(r), null;
      case 13:
        if (bt(Ie), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Wt && kr !== null && r.mode & 1 && !(r.flags & 128))
            $v(), tn(), r.flags |= 98560, d = !1;
          else if (d = qs(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(m(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(m(317));
              d[Fa] = r;
            } else
              tn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            lr(r), d = !1;
          } else
            ua !== null && (Ko(ua), ua = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ie.current & 1 ? kn === 0 && (kn = 3) : Ad())), r.updateQueue !== null && (r.flags |= 4), lr(r), null);
      case 4:
        return Ii(), Al(n, r), n === null && yu(r.stateNode.containerInfo), lr(r), null;
      case 10:
        return ji(r.type._context), lr(r), null;
      case 17:
        return Kt(r.type) && ia(), lr(r), null;
      case 19:
        if (bt(Ie), d = r.memoizedState, d === null)
          return lr(r), null;
        if (o = (r.flags & 128) !== 0, y = d.rendering, y === null)
          if (o)
            Io(d, !1);
          else {
            if (kn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (y = nn(n), y !== null) {
                  for (r.flags |= 128, Io(d, !1), o = y.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, y = d.alternate, y === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = y.childLanes, d.lanes = y.lanes, d.child = y.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = y.memoizedProps, d.memoizedState = y.memoizedState, d.updateQueue = y.updateQueue, d.type = y.type, n = y.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return kt(Ie, Ie.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && on() > Au && (r.flags |= 128, o = !0, Io(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = nn(y), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Io(d, !0), d.tail === null && d.tailMode === "hidden" && !y.alternate && !Wt)
                return lr(r), null;
            } else
              2 * on() - d.renderingStartTime > Au && l !== 1073741824 && (r.flags |= 128, o = !0, Io(d, !1), r.lanes = 4194304);
          d.isBackwards ? (y.sibling = r.child, r.child = y) : (l = d.last, l !== null ? l.sibling = y : r.child = y, d.last = y);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = on(), r.sibling = null, l = Ie.current, kt(Ie, o ? l & 1 | 2 : l & 1), r) : (lr(r), null);
      case 22:
      case 23:
        return zd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Yr & 1073741824 && (lr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : lr(r), null;
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
        return Kt(r.type) && ia(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ii(), bt(sn), bt(Xe), nc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ct(r), null;
      case 13:
        if (bt(Ie), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          tn();
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
          fn(n, r, o);
        }
      else
        l.current = null;
  }
  function Qo(n, r, l) {
    try {
      l();
    } catch (o) {
      fn(n, r, o);
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
            var y = 0, x = -1, w = -1, H = 0, Z = 0, J = n, X = null;
            t:
              for (; ; ) {
                for (var ve; J !== l || c !== 0 && J.nodeType !== 3 || (x = y + c), J !== d || o !== 0 && J.nodeType !== 3 || (w = y + o), J.nodeType === 3 && (y += J.nodeValue.length), (ve = J.firstChild) !== null; )
                  X = J, J = ve;
                for (; ; ) {
                  if (J === n)
                    break t;
                  if (X === l && ++H === c && (x = y), X === d && ++Z === o && (w = y), (ve = J.nextSibling) !== null)
                    break;
                  J = X, X = J.parentNode;
                }
                J = ve;
              }
            l = x === -1 || w === -1 ? null : { start: x, end: w };
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
            var Re = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Re !== null) {
                    var De = Re.memoizedProps, vn = Re.memoizedState, L = r.stateNode, k = L.getSnapshotBeforeUpdate(r.elementType === r.type ? De : $r(r.type, De), vn);
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
            fn(r, r.return, ae);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ce = n;
            break;
          }
          Ce = r.return;
        }
    return Re = ah, ah = !1, Re;
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
    r !== null && (n.alternate = null, _d(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Fa], delete r[Tl], delete r[ed], delete r[ky], delete r[td])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function lh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Rc(n) {
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
  var Zt = null, Fn = !1;
  function fa(n, r, l) {
    for (l = l.child; l !== null; )
      Lu(n, r, l), l = l.sibling;
  }
  function Lu(n, r, l) {
    if (xa && typeof xa.onCommitFiberUnmount == "function")
      try {
        xa.onCommitFiberUnmount(co, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        _n || ku(l, r);
      case 6:
        var o = Zt, c = Fn;
        Zt = null, fa(n, r, l), Zt = o, Fn = c, Zt !== null && (Fn ? (n = Zt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Zt.removeChild(l.stateNode));
        break;
      case 18:
        Zt !== null && (Fn ? (n = Zt, l = l.stateNode, n.nodeType === 8 ? zi(n.parentNode, l) : n.nodeType === 1 && zi(n, l), mo(n)) : zi(Zt, l.stateNode));
        break;
      case 4:
        o = Zt, c = Fn, Zt = l.stateNode.containerInfo, Fn = !0, fa(n, r, l), Zt = o, Fn = c;
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
        fa(n, r, l);
        break;
      case 1:
        if (!_n && (ku(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (x) {
            fn(l, r, x);
          }
        fa(n, r, l);
        break;
      case 21:
        fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (_n = (o = _n) || l.memoizedState !== null, fa(n, r, l), _n = o) : fa(n, r, l);
        break;
      default:
        fa(n, r, l);
    }
  }
  function pi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new rh()), r.forEach(function(o) {
        var c = Py.bind(null, n, o);
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
          var d = n, y = r, x = y;
          e:
            for (; x !== null; ) {
              switch (x.tag) {
                case 5:
                  Zt = x.stateNode, Fn = !1;
                  break e;
                case 3:
                  Zt = x.stateNode.containerInfo, Fn = !0;
                  break e;
                case 4:
                  Zt = x.stateNode.containerInfo, Fn = !0;
                  break e;
              }
              x = x.return;
            }
          if (Zt === null)
            throw Error(m(160));
          Lu(d, y, c), Zt = null, Fn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (H) {
          fn(c, r, H);
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
            fn(n, n.return, De);
          }
          try {
            Wo(5, n, n.return);
          } catch (De) {
            fn(n, n.return, De);
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
            fn(n, n.return, De);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, y = l !== null ? l.memoizedProps : d, x = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              x === "input" && d.type === "radio" && d.name != null && D(c, d), xn(x, y);
              var H = xn(x, d);
              for (y = 0; y < w.length; y += 2) {
                var Z = w[y], J = w[y + 1];
                Z === "style" ? Bt(c, J) : Z === "dangerouslySetInnerHTML" ? fl(c, J) : Z === "children" ? Ca(c, J) : Ee(c, Z, J, H);
              }
              switch (x) {
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
              fn(n, n.return, De);
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
            fn(n, n.return, De);
          }
        }
        break;
      case 3:
        if (Oa(r, n), Pa(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            mo(r.containerInfo);
          } catch (De) {
            fn(n, n.return, De);
          }
        break;
      case 4:
        Oa(r, n), Pa(n);
        break;
      case 13:
        Oa(r, n), Pa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Ld = on())), o & 4 && pi(n);
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
                    var Re = X.stateNode;
                    if (typeof Re.componentWillUnmount == "function") {
                      o = X, l = X.return;
                      try {
                        r = o, Re.props = r.memoizedProps, Re.state = r.memoizedState, Re.componentWillUnmount();
                      } catch (De) {
                        fn(o, l, De);
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
                    c = J.stateNode, H ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = J.stateNode, w = J.memoizedProps.style, y = w != null && w.hasOwnProperty("display") ? w.display : null, x.style.display = dt("display", y));
                  } catch (De) {
                    fn(n, n.return, De);
                  }
                }
              } else if (J.tag === 6) {
                if (Z === null)
                  try {
                    J.stateNode.nodeValue = H ? "" : J.memoizedProps;
                  } catch (De) {
                    fn(n, n.return, De);
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
            var d = Rc(n);
            Ba(n, d, c);
            break;
          case 3:
          case 4:
            var y = o.stateNode.containerInfo, x = Rc(n);
            Ou(n, x, y);
            break;
          default:
            throw Error(m(161));
        }
      } catch (w) {
        fn(n, n.return, w);
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
          var x = c.alternate, w = x !== null && x.memoizedState !== null || _n;
          x = Yo;
          var H = _n;
          if (Yo = y, (_n = w) && !H)
            for (Ce = c; Ce !== null; )
              y = Ce, w = y.child, y.tag === 22 && y.memoizedState !== null ? ch(c) : w !== null ? (w.return = y, Ce = w) : ch(c);
          for (; d !== null; )
            Ce = d, Mu(d), d = d.sibling;
          Ce = c, Yo = x, _n = H;
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
                    var c = r.elementType === r.type ? l.memoizedProps : $r(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && Rl(r, d, o);
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
                  Rl(r, y, l);
                }
                break;
              case 5:
                var x = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = x;
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
          fn(r, r.return, X);
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
              fn(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                fn(r, c, w);
              }
            }
            var d = r.return;
            try {
              Dd(r);
            } catch (w) {
              fn(r, d, w);
            }
            break;
          case 5:
            var y = r.return;
            try {
              Dd(r);
            } catch (w) {
              fn(r, y, w);
            }
        }
      } catch (w) {
        fn(r, r.return, w);
      }
      if (r === n) {
        Ce = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Ce = x;
        break;
      }
      Ce = r.return;
    }
  }
  var wc = Math.ceil, qo = je.ReactCurrentDispatcher, Od = je.ReactCurrentOwner, ur = je.ReactCurrentBatchConfig, vt = 0, rn = null, cn = null, Hn = 0, Yr = 0, Nu = lt(0), kn = 0, Xo = null, vi = 0, bc = 0, zu = 0, Ul = null, pr = null, Ld = 0, Au = 1 / 0, hi = null, Dc = !1, Fl = null, $a = null, Gi = !1, qi = null, _c = 0, Uu = 0, kc = null, Hl = -1, Vl = 0;
  function or() {
    return vt & 6 ? on() : Hl !== -1 ? Hl : Hl = on();
  }
  function Cn(n) {
    return n.mode & 1 ? vt & 2 && Hn !== 0 ? Hn & -Hn : Xs.transition !== null ? (Vl === 0 && (Vl = bs()), Vl) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Lf(n.type)), n) : 1;
  }
  function sr(n, r, l, o) {
    if (50 < Uu)
      throw Uu = 0, kc = null, Error(m(185));
    vl(n, l, o), (!(vt & 2) || n !== rn) && (n === rn && (!(vt & 2) && (bc |= l), kn === 4 && da(n, Hn)), cr(n, o), l === 1 && vt === 0 && !(r.mode & 1) && (Au = on() + 500, An && br()));
  }
  function cr(n, r) {
    var l = n.callbackNode;
    ws(n, r);
    var o = Ra(n, n === rn ? Hn : 0);
    if (o === 0)
      l !== null && Kp(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Kp(l), r === 1)
        n.tag === 0 ? rd(fh.bind(null, n)) : nd(fh.bind(null, n)), Jf(function() {
          !(vt & 6) && br();
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
            l = Rf;
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
    var o = Ra(n, n === rn ? Hn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Lc(n, o);
    else {
      r = o;
      var c = vt;
      vt |= 2;
      var d = Oc();
      (rn !== n || Hn !== r) && (hi = null, Au = on() + 500, jl(n, r));
      do
        try {
          Hy();
          break;
        } catch (x) {
          dh(n, x);
        }
      while (1);
      sd(), qo.current = d, vt = c, cn !== null ? r = 0 : (rn = null, Hn = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (c = bf(n), c !== 0 && (o = c, r = Md(n, c))), r === 1)
        throw l = Xo, jl(n, 0), da(n, o), cr(n, on()), l;
      if (r === 6)
        da(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Nd(c) && (r = Lc(n, o), r === 2 && (d = bf(n), d !== 0 && (o = d, r = Md(n, d))), r === 1))
          throw l = Xo, jl(n, 0), da(n, o), cr(n, on()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Bl(n, pr, hi);
            break;
          case 3:
            if (da(n, o), (o & 130023424) === o && (r = Ld + 500 - on(), 10 < r)) {
              if (Ra(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                or(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cl(Bl.bind(null, n, pr, hi), r);
              break;
            }
            Bl(n, pr, hi);
            break;
          case 4:
            if (da(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var y = 31 - Jr(o);
              d = 1 << y, y = r[y], y > c && (c = y), o &= ~d;
            }
            if (o = c, o = on() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * wc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cl(Bl.bind(null, n, pr, hi), o);
              break;
            }
            Bl(n, pr, hi);
            break;
          case 5:
            Bl(n, pr, hi);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return cr(n, on()), n.callbackNode === l ? Fu.bind(null, n) : null;
  }
  function Md(n, r) {
    var l = Ul;
    return n.current.memoizedState.isDehydrated && (jl(n, r).flags |= 256), n = Lc(n, r), n !== 2 && (r = pr, pr = l, r !== null && Ko(r)), n;
  }
  function Ko(n) {
    pr === null ? pr = n : pr.push.apply(pr, n);
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
              if (!na(d(), c))
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
  function da(n, r) {
    for (r &= ~zu, r &= ~bc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Jr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function fh(n) {
    if (vt & 6)
      throw Error(m(327));
    Vu();
    var r = Ra(n, 0);
    if (!(r & 1))
      return cr(n, on()), null;
    var l = Lc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = bf(n);
      o !== 0 && (r = o, l = Md(n, o));
    }
    if (l === 1)
      throw l = Xo, jl(n, 0), da(n, r), cr(n, on()), l;
    if (l === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Bl(n, pr, hi), cr(n, on()), null;
  }
  function Hu(n, r) {
    var l = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = l, vt === 0 && (Au = on() + 500, An && br());
    }
  }
  function Xi(n) {
    qi !== null && qi.tag === 0 && !(vt & 6) && Vu();
    var r = vt;
    vt |= 1;
    var l = ur.transition, o = Lt;
    try {
      if (ur.transition = null, Lt = 1, n)
        return n();
    } finally {
      Lt = o, ur.transition = l, vt = r, !(vt & 6) && br();
    }
  }
  function zd() {
    Yr = Nu.current, bt(Nu);
  }
  function jl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Vv(l)), cn !== null)
      for (l = cn.return; l !== null; ) {
        var o = l;
        switch (id(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ia();
            break;
          case 3:
            Ii(), bt(sn), bt(Xe), nc();
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
    if (rn = n, cn = n = Ki(n.current, null), Hn = Yr = r, kn = 0, Xo = null, zu = bc = vi = 0, pr = Ul = null, $n !== null) {
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
      var l = cn;
      try {
        if (sd(), rc.current = Sc, Ye) {
          for (var o = Gt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ye = !1;
        }
        if (bl = 0, mt = P = Gt = null, ja = !1, Ir = 0, Od.current = null, l === null || l.return === null) {
          kn = 1, Xo = r, cn = null;
          break;
        }
        e: {
          var d = n, y = l.return, x = l, w = r;
          if (r = Hn, x.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var H = w, Z = x, J = Z.tag;
            if (!(Z.mode & 1) && (J === 0 || J === 11 || J === 15)) {
              var X = Z.alternate;
              X ? (Z.updateQueue = X.updateQueue, Z.memoizedState = X.memoizedState, Z.lanes = X.lanes) : (Z.updateQueue = null, Z.memoizedState = null);
            }
            var ve = gd(y);
            if (ve !== null) {
              ve.flags &= -257, Sd(ve, y, x, d, r), ve.mode & 1 && eh(d, H, r), r = ve, w = H;
              var Re = r.updateQueue;
              if (Re === null) {
                var De = /* @__PURE__ */ new Set();
                De.add(w), r.updateQueue = De;
              } else
                Re.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                eh(d, H, r), Ad();
                break e;
              }
              w = Error(m(426));
            }
          } else if (Wt && x.mode & 1) {
            var vn = gd(y);
            if (vn !== null) {
              !(vn.flags & 65536) && (vn.flags |= 256), Sd(vn, y, x, d, r), ud(bu(w, x));
              break e;
            }
          }
          d = w = bu(w, x), kn !== 4 && (kn = 2), Ul === null ? Ul = [d] : Ul.push(d), d = y;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var L = Jv(d, w, r);
                dd(d, L);
                break e;
              case 1:
                x = w;
                var k = d.type, A = d.stateNode;
                if (!(d.flags & 128) && (typeof k.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && ($a === null || !$a.has(A)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ae = Po(d, x, r);
                  dd(d, ae);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Ud(l);
      } catch (Oe) {
        r = Oe, cn === l && l !== null && (cn = l = l.return);
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
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), rn === null || !(vi & 268435455) && !(bc & 268435455) || da(rn, Hn);
  }
  function Lc(n, r) {
    var l = vt;
    vt |= 2;
    var o = Oc();
    (rn !== n || Hn !== r) && (hi = null, jl(n, r));
    do
      try {
        Fy();
        break;
      } catch (c) {
        dh(n, c);
      }
    while (1);
    if (sd(), vt = l, qo.current = o, cn !== null)
      throw Error(m(261));
    return rn = null, Hn = 0, kn;
  }
  function Fy() {
    for (; cn !== null; )
      ph(cn);
  }
  function Hy() {
    for (; cn !== null && !uy(); )
      ph(cn);
  }
  function ph(n) {
    var r = hh(n.alternate, n, Yr);
    n.memoizedProps = n.pendingProps, r === null ? Ud(n) : cn = r, Od.current = null;
  }
  function Ud(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = bd(l, r), l !== null) {
          l.flags &= 32767, cn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, cn = null;
          return;
        }
      } else if (l = Uy(l, r, Yr), l !== null) {
        cn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        cn = r;
        return;
      }
      cn = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Bl(n, r, l) {
    var o = Lt, c = ur.transition;
    try {
      ur.transition = null, Lt = 1, Vy(n, r, l, o);
    } finally {
      ur.transition = c, Lt = o;
    }
    return null;
  }
  function Vy(n, r, l, o) {
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
    if (fy(n, d), n === rn && (cn = rn = null, Hn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Gi || (Gi = !0, Fd(ki, function() {
      return Vu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = ur.transition, ur.transition = null;
      var y = Lt;
      Lt = 1;
      var x = vt;
      vt |= 4, Od.current = null, ih(n, l), uh(l, n), Vs(El), hl = !!Kf, El = Kf = null, n.current = l, oh(l), oy(), vt = x, Lt = y, ur.transition = d;
    } else
      n.current = l;
    if (Gi && (Gi = !1, qi = n, _c = c), d = n.pendingLanes, d === 0 && ($a = null), Jp(l.stateNode), cr(n, on()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dc)
      throw Dc = !1, n = Fl, Fl = null, n;
    return _c & 1 && n.tag !== 0 && Vu(), d = n.pendingLanes, d & 1 ? n === kc ? Uu++ : (Uu = 0, kc = n) : Uu = 0, br(), null;
  }
  function Vu() {
    if (qi !== null) {
      var n = _f(_c), r = ur.transition, l = Lt;
      try {
        if (ur.transition = null, Lt = 16 > n ? 16 : n, qi === null)
          var o = !1;
        else {
          if (n = qi, qi = null, _c = 0, vt & 6)
            throw Error(m(331));
          var c = vt;
          for (vt |= 4, Ce = n.current; Ce !== null; ) {
            var d = Ce, y = d.child;
            if (Ce.flags & 16) {
              var x = d.deletions;
              if (x !== null) {
                for (var w = 0; w < x.length; w++) {
                  var H = x[w];
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
                var Re = d.alternate;
                if (Re !== null) {
                  var De = Re.child;
                  if (De !== null) {
                    Re.child = null;
                    do {
                      var vn = De.sibling;
                      De.sibling = null, De = vn;
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
                  if (x = Ce, x.flags & 2048)
                    try {
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Go(9, x);
                      }
                    } catch (Oe) {
                      fn(x, x.return, Oe);
                    }
                  if (x === y) {
                    Ce = null;
                    break e;
                  }
                  var ae = x.sibling;
                  if (ae !== null) {
                    ae.return = x.return, Ce = ae;
                    break e;
                  }
                  Ce = x.return;
                }
          }
          if (vt = c, br(), xa && typeof xa.onPostCommitFiberRoot == "function")
            try {
              xa.onPostCommitFiberRoot(co, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, ur.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = bu(l, r), r = Jv(n, r, 1), n = Pi(n, r, 1), r = or(), n !== null && (vl(n, 1, r), cr(n, r));
  }
  function fn(n, r, l) {
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
            n = bu(l, n), n = Po(r, n, 1), r = Pi(r, n, 1), n = or(), r !== null && (vl(r, 1, n), cr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function jy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = or(), n.pingedLanes |= n.suspendedLanes & l, rn === n && (Hn & l) === l && (kn === 4 || kn === 3 && (Hn & 130023424) === Hn && 500 > on() - Ld ? jl(n, 0) : zu |= l), cr(n, r);
  }
  function Mc(n, r) {
    r === 0 && (n.mode & 1 ? (r = uu, uu <<= 1, !(uu & 130023424) && (uu = 4194304)) : r = 1);
    var l = or();
    n = si(n, r), n !== null && (vl(n, r, l), cr(n, l));
  }
  function By(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Mc(n, l);
  }
  function Py(n, r) {
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
      if (n.memoizedProps !== r.pendingProps || sn.current)
        En = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return En = !1, di(n, r, l);
        En = !!(n.flags & 131072);
      }
    else
      En = !1, Wt && r.flags & 1048576 && ad(r, Su, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ir(n, r), n = r.pendingProps;
        var c = aa(r, Xe.current);
        ue(r, l), c = Yi(null, r, o, n, c, l);
        var d = kl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Kt(o) ? (d = !0, Ys(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, fd(r), c.updater = Js, r.stateNode = c, c._reactInternals = r, ec(r, o, n, l), r = th(null, r, o, !0, d, l)) : (r.tag = 0, Wt && d && Qs(r), bn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ir(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Iy(o), n = $r(o, n), c) {
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
              r = Cc(null, r, o, $r(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : $r(o, c), Du(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : $r(o, c), Ed(n, r, o, c, l);
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
              for (kr = _a(r.stateNode.containerInfo.firstChild), Pr = r, Wt = !0, ua = null, l = Kv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (tn(), o === c) {
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : $r(o, c), Wi(n, r, o, c, l);
      case 7:
        return bn(n, r, r.pendingProps, l), r.child;
      case 8:
        return bn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return bn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, y = c.value, kt(Va, o._currentValue), o._currentValue = y, d !== null)
            if (na(d.value, y)) {
              if (d.children === c.children && !sn.current) {
                r = In(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var x = d.dependencies;
                if (x !== null) {
                  y = d.child;
                  for (var w = x.firstContext; w !== null; ) {
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
                      ), x.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  y = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (y = d.return, y === null)
                    throw Error(m(341));
                  y.lanes |= l, x = y.alternate, x !== null && (x.lanes |= l), Un(y, l, r), y = d.sibling;
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
        return c = r.type, o = r.pendingProps.children, ue(r, l), c = pn(c), o = o(c), r.flags |= 1, bn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = $r(o, r.pendingProps), c = $r(o.type, c), Cc(n, r, o, c, l);
      case 15:
        return Mr(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : $r(o, c), ir(n, r), r.tag = 1, Kt(o) ? (n = !0, Ys(r)) : n = !1, ue(r, l), Wv(r, o, c), ec(r, o, c, l), th(null, r, o, !0, n, l);
      case 19:
        return wd(n, r, l);
      case 22:
        return Nl(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function Fd(n, r) {
    return xf(n, r);
  }
  function $y(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pa(n, r, l, o) {
    return new $y(n, r, l, o);
  }
  function Hd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Iy(n) {
    if (typeof n == "function")
      return Hd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Qe)
        return 11;
      if (n === Rt)
        return 14;
    }
    return 2;
  }
  function Ki(n, r) {
    var l = n.alternate;
    return l === null ? (l = pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
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
          case en:
            y = 8, c |= 8;
            break;
          case Nt:
            return n = pa(12, l, r, c | 2), n.elementType = Nt, n.lanes = d, n;
          case fe:
            return n = pa(13, l, r, c), n.elementType = fe, n.lanes = d, n;
          case Ne:
            return n = pa(19, l, r, c), n.elementType = Ne, n.lanes = d, n;
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
                case Rt:
                  y = 14;
                  break e;
                case et:
                  y = 16, o = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = pa(y, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Pl(n, r, l, o) {
    return n = pa(7, n, o, r), n.lanes = l, n;
  }
  function Zo(n, r, l, o) {
    return n = pa(22, n, o, r), n.elementType = wt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Jo(n, r, l) {
    return n = pa(6, n, null, r), n.lanes = l, n;
  }
  function $l(n, r, l) {
    return r = pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Yy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Df(0), this.expirationTimes = Df(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Df(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function zc(n, r, l, o, c, d, y, x, w) {
    return n = new Yy(n, r, l, x, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fd(d), n;
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
            if (Kt(r.type)) {
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
      if (Kt(l))
        return No(n, l, r);
    }
    return r;
  }
  function yh(n, r, l, o, c, d, y, x, w) {
    return n = zc(l, o, !0, n, c, d, y, x, w), n.context = Vd(null), l = n.current, o = or(), c = Cn(l), d = ci(o, c), d.callback = r ?? null, Pi(l, d, c), n.current.lanes = c, vl(n, c, o), cr(n, o), n;
  }
  function es(n, r, l, o) {
    var c = r.current, d = or(), y = Cn(c);
    return l = Vd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ci(d, y), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Pi(c, r, y), n !== null && (sr(n, c, y, d), Zs(n, c, y)), y;
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
  function Qy(n, r, l, o, c) {
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
      var x = o;
      o = function() {
        var H = Ac(w);
        x.call(H);
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
        var x = c;
        c = function() {
          var w = Ac(y);
          x.call(w);
        };
      }
      es(r, y, n, c);
    } else
      y = Qy(l, r, n, c, o);
    return Ac(y);
  }
  nv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = pl(r.pendingLanes);
          l !== 0 && (fo(r, l | 1), cr(r, on()), !(vt & 6) && (Au = on() + 500, br()));
        }
        break;
      case 13:
        Xi(function() {
          var o = si(n, 1);
          if (o !== null) {
            var c = or();
            sr(o, n, 1, c);
          }
        }), jd(n, 1);
    }
  }, Ds = function(n) {
    if (n.tag === 13) {
      var r = si(n, 134217728);
      if (r !== null) {
        var l = or();
        sr(r, n, 134217728, l);
      }
      jd(n, 134217728);
    }
  }, Pt = function(n) {
    if (n.tag === 13) {
      var r = Cn(n), l = si(n, r);
      if (l !== null) {
        var o = or();
        sr(l, n, r, o);
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
  var Wy = { usingClientEntryPoint: !1, Events: [Mo, gu, He, Es, Cs, Hu] }, ju = { findFiberByHostInstance: ra, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Gy = { bundleType: ju.bundleType, version: ju.version, rendererPackageName: ju.rendererPackageName, rendererConfig: ju.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = qp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ju.findFiberByHostInstance || Sh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vc.isDisabled && Vc.supportsFiber)
      try {
        co = Vc.inject(Gy), xa = Vc;
      } catch {
      }
  }
  return Sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wy, Sa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pd(r))
      throw Error(m(200));
    return mh(n, r, null, l);
  }, Sa.createRoot = function(n, r) {
    if (!Pd(n))
      throw Error(m(299));
    var l = !1, o = "", c = Bd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = zc(n, 1, !1, null, null, l, !1, o, c), n[ui] = r.current, yu(n.nodeType === 8 ? n.parentNode : n), new Uc(r);
  }, Sa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = qp(r), n = n === null ? null : n.stateNode, n;
  }, Sa.flushSync = function(n) {
    return Xi(n);
  }, Sa.hydrate = function(n, r, l) {
    if (!Fc(r))
      throw Error(m(200));
    return Hc(null, n, r, !0, l);
  }, Sa.hydrateRoot = function(n, r, l) {
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
  }, Sa.render = function(n, r, l) {
    if (!Fc(r))
      throw Error(m(200));
    return Hc(null, n, r, !1, l);
  }, Sa.unmountComponentAtNode = function(n) {
    if (!Fc(n))
      throw Error(m(40));
    return n._reactRootContainer ? (Xi(function() {
      Hc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ui] = null;
      });
    }), !0) : !1;
  }, Sa.unstable_batchedUpdates = Hu, Sa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Fc(l))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return Hc(n, r, l, !1, o);
  }, Sa.version = "18.2.0-next-9e3b772b8-20220608", Sa;
}
var Ea = {};
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
function Fk() {
  return ZT || (ZT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var p = jt, S = Sx(), m = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, C = !1;
    function b(e) {
      C = e;
    }
    function R(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        K("warn", e, a);
      }
    }
    function g(e) {
      if (!C) {
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
    var $ = 0, G = 1, pe = 2, I = 3, q = 4, ie = 5, xe = 6, Ve = 7, Ze = 8, Mt = 9, Le = 10, Ee = 11, je = 12, Y = 13, ft = 14, qe = 15, en = 16, Nt = 17, Ct = 18, ot = 19, Qe = 21, fe = 22, Ne = 23, Rt = 24, et = 25, wt = !0, re = !1, _e = !1, z = !1, te = !1, Se = !0, Pe = !1, ze = !1, at = !0, Ae = !0, We = !0, Je = /* @__PURE__ */ new Set(), it = {}, st = {};
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
    function tr(e) {
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
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, tr(e)), V(e);
    }
    function Te(e) {
      if (D(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), V(e);
    }
    function se(e, t) {
      if (D(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, tr(e)), V(e);
    }
    function ne(e, t) {
      if (D(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, tr(e)), V(e);
    }
    function ke(e) {
      if (D(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), V(e);
    }
    function St(e) {
      if (D(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", tr(e)), V(e);
    }
    var _t = 0, Bn = 1, za = 2, Mn = 3, fr = 4, fl = 5, Ca = 6, ce = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ue = ce + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", dt = new RegExp("^[" + ce + "][" + Ue + "]*$"), Bt = {}, dn = {};
    function nr(e) {
      return mn.call(dn, e) ? !0 : mn.call(Bt, e) ? !1 : dt.test(e) ? (dn[e] = !0, !0) : (Bt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function xn(e, t, a) {
      return t !== null ? t.type === _t : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Zr(e, t, a, i) {
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
    function ln(e, t, a, i) {
      if (t === null || typeof t > "u" || Zr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case fr:
            return t === !1;
          case fl:
            return isNaN(t);
          case Ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Aa(e) {
      return un.hasOwnProperty(e) ? un[e] : null;
    }
    function yn(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === za || t === Mn || t === fr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var un = {}, Qp = [
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
      un[e] = new yn(
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
      un[t] = new yn(
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
      un[e] = new yn(
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
      un[e] = new yn(
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
      un[e] = new yn(
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
      un[e] = new yn(
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
      un[e] = new yn(
        e,
        fr,
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
      un[e] = new yn(
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
      un[e] = new yn(
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
      un[t] = new yn(
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
      un[t] = new yn(
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
      un[t] = new yn(
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
      un[e] = new yn(
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
    un[Wp] = new yn(
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
      un[e] = new yn(
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
        if (i.type === fr) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : ln(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (ln(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Mn)
            return a;
          f = e.getAttribute(s);
        }
        return ln(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function xs(e, t, a, i) {
      {
        if (!nr(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Q(a, t), u === "" + a ? a : u;
      }
    }
    function dl(e, t, a, i) {
      var u = Aa(t);
      if (!xn(t, u, i)) {
        if (ln(t, a, u, i) && (a = null), i || u === null) {
          if (nr(t)) {
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
        var E = u.attributeName, T = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(E);
        else {
          var O = u.type, _;
          O === Mn || O === fr && a === !0 ? _ = "" : (Q(a, E), _ = "" + a, u.sanitizeURL && Ef(_.toString())), T ? e.setAttributeNS(T, E, _) : e.setAttribute(E, _);
        }
      }
    }
    var ru = Symbol.for("react.element"), Ta = Symbol.for("react.portal"), Ja = Symbol.for("react.fragment"), au = Symbol.for("react.strict_mode"), oo = Symbol.for("react.profiler"), Cf = Symbol.for("react.provider"), Tf = Symbol.for("react.context"), iu = Symbol.for("react.forward_ref"), Ua = Symbol.for("react.suspense"), so = Symbol.for("react.suspense_list"), lu = Symbol.for("react.memo"), dr = Symbol.for("react.lazy"), qp = Symbol.for("react.scope"), Xp = Symbol.for("react.debug_trace_mode"), xf = Symbol.for("react.offscreen"), Kp = Symbol.for("react.legacy_hidden"), uy = Symbol.for("react.cache"), oy = Symbol.for("react.tracing_marker"), on = Symbol.iterator, sy = "@@iterator";
    function ei(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = on && e[on] || e[sy];
      return typeof t == "function" ? t : null;
    }
    var pt = Object.assign, ki = 0, Zp, Rf, co, xa, Jp, Jr, ev;
    function tv() {
    }
    tv.__reactDisabledLog = !0;
    function cy() {
      {
        if (ki === 0) {
          Zp = console.log, Rf = console.info, co = console.warn, xa = console.error, Jp = console.group, Jr = console.groupCollapsed, ev = console.groupEnd;
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
    function Rs() {
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
              value: Rf
            }),
            warn: pt({}, e, {
              value: co
            }),
            error: pt({}, e, {
              value: xa
            }),
            group: pt({}, e, {
              value: Jp
            }),
            groupCollapsed: pt({}, e, {
              value: Jr
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
    function Ra(e, t, a) {
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
      s = uu.current, uu.current = null, cy();
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
`), E = v.length - 1, T = h.length - 1; E >= 1 && T >= 0 && v[E] !== h[T]; )
            T--;
          for (; E >= 1 && T >= 0; E--, T--)
            if (v[E] !== h[T]) {
              if (E !== 1 || T !== 1)
                do
                  if (E--, T--, T < 0 || v[E] !== h[T]) {
                    var O = `
` + v[E].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && ws.set(e, O), O;
                  }
                while (E >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        wf = !1, uu.current = s, Rs(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", U = _ ? Ra(_) : "";
      return typeof e == "function" && ws.set(e, U), U;
    }
    function Df(e, t, a) {
      return bs(e, !0);
    }
    function vl(e, t, a) {
      return bs(e, !1);
    }
    function fy(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function fo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return bs(e, fy(e));
      if (typeof e == "string")
        return Ra(e);
      switch (e) {
        case Ua:
          return Ra("Suspense");
        case so:
          return Ra("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case iu:
            return vl(e.render);
          case lu:
            return fo(e.type, t, a);
          case dr: {
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
          return Ra(e.type);
        case en:
          return Ra("Lazy");
        case Y:
          return Ra("Suspense");
        case ot:
          return Ra("SuspenseList");
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
          case dr: {
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
        case Rt:
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
        case xe:
          return "Text";
        case en:
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
    var po = m.ReactDebugCurrentFrame, gn = null, ea = !1;
    function ta() {
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
    function Rn() {
      po.getCurrentStack = null, gn = null, ea = !1;
    }
    function At(e) {
      po.getCurrentStack = e === null ? null : vo, gn = e, ea = !1;
    }
    function dy() {
      return gn;
    }
    function wa(e) {
      ea = e;
    }
    function rr(e) {
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
      ou("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !yo && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ta() || "A component", t.type), yo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ks && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ta() || "A component", t.type), ks = !0);
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
        a.value != u) && (a.value = rr(u)) : a.value !== rr(u) && (a.value = rr(u));
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
        var f = rr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function uv(e, t) {
      var a = e;
      cu(a, t), Vr(a, t);
    }
    function Vr(e, t) {
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
      (t !== "number" || _s(e.ownerDocument) !== e) && (a == null ? e.defaultValue = rr(e._wrapperState.initialValue) : e.defaultValue !== rr(a) && (e.defaultValue = rr(a)));
    }
    var Ls = !1, fu = !1, ov = !1;
    function Ms(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? p.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || fu || (fu = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ov || (ov = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ls && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ls = !0);
    }
    function Nf(e, t) {
      t.value != null && e.setAttribute("value", rr(Oi(t.value)));
    }
    var Co = Array.isArray;
    function Nn(e) {
      return Co(e);
    }
    var Ns;
    Ns = !1;
    function sv() {
      var e = ta();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var cv = ["value", "defaultValue"];
    function py(e) {
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
          var E = f.hasOwnProperty("$" + u[h].value);
          u[h].selected !== E && (u[h].selected = E), E && i && (u[h].defaultSelected = !0);
        }
      } else {
        for (var T = rr(Oi(a)), O = null, _ = 0; _ < u.length; _++) {
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
      py(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ns && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ns = !0);
    }
    function vy(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Mi(a, !!t.multiple, i, !1) : t.defaultValue != null && Mi(a, !!t.multiple, t.defaultValue, !0);
    }
    function hy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Mi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Mi(a, !!t.multiple, t.defaultValue, !0) : Mi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function my(e, t) {
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
        children: rr(a._wrapperState.initialValue)
      });
      return i;
    }
    function dv(e, t) {
      var a = e;
      ou("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Af && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ta() || "A component"), Af = !0);
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
        var s = rr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = rr(u));
    }
    function vv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ff(e, t) {
      pv(e, t);
    }
    var ni = "http://www.w3.org/1999/xhtml", yy = "http://www.w3.org/1998/Math/MathML", Hf = "http://www.w3.org/2000/svg";
    function zs(e) {
      switch (e) {
        case "svg":
          return Hf;
        case "math":
          return yy;
        default:
          return ni;
      }
    }
    function Vf(e, t) {
      return e == null || e === ni ? zs(t) : e === Hf && t === "foreignObject" ? ni : e;
    }
    var gy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, As, hv = gy(function(e, t) {
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
    var pu = /([A-Z])/g, Sy = /^ms-/;
    function Ey(e) {
      return e.replace(pu, "-$1").toLowerCase().replace(Sy, "-ms-");
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
      }, xv = function(e) {
        hu.hasOwnProperty(e) && hu[e] || (hu[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Rv = function(e, t) {
        mu.hasOwnProperty(t) && mu[t] || (mu[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vu, "")));
      }, wv = function(e, t) {
        Tv || (Tv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Cy = function(e, t) {
        jf || (jf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sv = function(e, t) {
        e.indexOf("-") > -1 ? Pf(e) : Ev.test(e) ? xv(e) : vu.test(t) && Rv(e, t), typeof t == "number" && (isNaN(t) ? wv(e, t) : isFinite(t) || Cy(e, t));
      };
    }
    var Ty = Sv;
    function xy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ey(i)) + ":", t += Fs(i, u, s), a = ";";
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
          u || Ty(i, t[i]);
          var s = Fs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ry(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function na(e) {
      var t = {};
      for (var a in e)
        for (var i = mv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function xo(e, t) {
      {
        if (!t)
          return;
        var a = na(e), i = na(t), u = {};
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
    }, Da = {}, $f = new RegExp("^(aria)-[" + Ue + "]*$"), Ro = new RegExp("^(aria)[A-Z][" + Ue + "]*$");
    function If(e, t) {
      {
        if (mn.call(Da, t) && Da[t])
          return !0;
        if (Ro.test(t)) {
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
        var h = Aa(t), E = h !== null && h.type === _t;
        if (Vs.hasOwnProperty(u)) {
          var T = Vs[u];
          if (T !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, T), zn[t] = !0, !0;
        } else if (!E && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), zn[t] = !0, !0;
        return typeof a == "boolean" && Zr(t, a, h, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), zn[t] = !0, !0) : E ? !0 : Zr(t, a, h, !1) ? (zn[t] = !0, !1) : ((a === "false" || a === "true") && h !== null && h.type === Mn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), zn[t] = !0), !0);
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
    var ii = 1, wo = 2, gl = 4, wy = ii | wo | gl, bo = null;
    function Do(e) {
      bo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), bo = e;
    }
    function by() {
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
    function Dy() {
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
        qf = !1, Dy();
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
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, E);
      } catch (T) {
        this.onError(T);
      }
    }
    var Zf = Vv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Jf = document.createElement("react");
      Zf = function(t, a, i, u, s, f, v, h, E) {
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
    var _y = Zf, zi = !1, _a = null, Lo = !1, Ai = null, Fa = {
      onError: function(e) {
        zi = !0, _a = e;
      }
    };
    function Tl(e, t, a, i, u, s, f, v, h) {
      zi = !1, _a = null, _y.apply(Fa, arguments);
    }
    function ui(e, t, a, i, u, s, f, v, h) {
      if (Tl.apply(this, arguments), zi) {
        var E = td();
        Lo || (Lo = !0, Ai = E);
      }
    }
    function ed() {
      if (Lo) {
        var e = Ai;
        throw Lo = !1, Ai = null, e;
      }
    }
    function ky() {
      return zi;
    }
    function td() {
      if (zi) {
        var e = _a;
        return zi = !1, _a = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ra(e) {
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
    ), Qt = (
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
    ), sn = (
      /*            */
      256
    ), wr = (
      /*                          */
      512
    ), aa = (
      /*                     */
      1024
    ), Kt = (
      /*                      */
      2048
    ), ia = (
      /*                    */
      4096
    ), Fi = (
      /*                   */
      8192
    ), No = (
      /*             */
      16384
    ), Ys = Kt | lt | Ha | wr | aa | No, jv = (
      /*               */
      32767
    ), jr = (
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
    ), br = (
      /*                 */
      4194304
    ), Hi = (
      /*                */
      8388608
    ), Dr = (
      /*               */
      16777216
    ), xl = (
      /*              */
      33554432
    ), Su = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      lt | aa | 0
    ), _r = Qt | lt | bt | kt | wr | ia | Fi, ar = lt | Ha | wr | Fi, la = Kt | bt, Pn = br | Hi | rd, oi = m.ReactCurrentOwner;
    function Br(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Qt | ia)) !== He && (a = t.return), i = t.return;
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
      return Br(e) === e;
    }
    function Pr(e) {
      {
        var t = oi.current;
        if (t !== null && t.tag === G) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", rt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ra(e);
      return u ? Br(u) === u : !1;
    }
    function kr(e) {
      if (Br(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Wt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Br(e);
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
              return kr(s), e;
            if (h === u)
              return kr(s), t;
            h = h.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var E = !1, T = s.child; T; ) {
            if (T === i) {
              E = !0, i = s, u = f;
              break;
            }
            if (T === u) {
              E = !0, u = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!E) {
            for (T = f.child; T; ) {
              if (T === i) {
                E = !0, i = f, u = s;
                break;
              }
              if (T === u) {
                E = !0, u = f, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!E)
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
    function ua(e) {
      var t = Wt(e);
      return t !== null ? ld(t) : null;
    }
    function ld(e) {
      if (e.tag === ie || e.tag === xe)
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
      var t = Wt(e);
      return t !== null ? Ws(t) : null;
    }
    function Ws(e) {
      if (e.tag === ie || e.tag === xe)
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
    var Gs = S.unstable_scheduleCallback, Pv = S.unstable_cancelCallback, qs = S.unstable_shouldYield, $v = S.unstable_requestPaint, tn = S.unstable_now, ud = S.unstable_getCurrentPriorityLevel, Xs = S.unstable_ImmediatePriority, $r = S.unstable_UserBlockingPriority, Va = S.unstable_NormalPriority, Ks = S.unstable_LowPriority, Vi = S.unstable_IdlePriority, od = S.unstable_yieldValue, sd = S.unstable_setDisableYieldValue, ji = null, Un = null, ue = null, pn = !1, $n = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
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
          pn || (pn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function si(e, t) {
      if (Un && typeof Un.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Xe) === Xe;
          if (Ae) {
            var i;
            switch (t) {
              case ir:
                i = Xs;
                break;
              case In:
                i = $r;
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
          pn || (pn = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function Bi(e) {
      if (Un && typeof Un.onPostCommitFiberRoot == "function")
        try {
          Un.onPostCommitFiberRoot(ji, e);
        } catch (t) {
          pn || (pn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function fd(e) {
      if (Un && typeof Un.onCommitFiberUnmount == "function")
        try {
          Un.onCommitFiberUnmount(ji, e);
        } catch (t) {
          pn || (pn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function wn(e) {
      if (typeof od == "function" && (sd(e), b(e)), Un && typeof Un.setStrictMode == "function")
        try {
          Un.setStrictMode(ji, e);
        } catch (t) {
          pn || (pn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ci(e) {
      ue = e;
    }
    function Pi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Gt; a++) {
          var i = Oy(t);
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
    function Rl() {
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
    ), nn = (
      /*               */
      8
    ), oa = (
      /*              */
      16
    ), nc = Math.clz32 ? Math.clz32 : bl, rc = Math.log, hd = Math.LN2;
    function bl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (rc(t) / hd | 0) | 0;
    }
    var Gt = 31, P = (
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
    ), Ir = (
      /*             */
      4
    ), Dl = (
      /*            */
      8
    ), qt = (
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
    ), sa = (
      /*                        */
      128
    ), Or = (
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
    ), md = fi, xu = (
      /*          */
      134217728
    ), mc = (
      /*                          */
      268435455
    ), Ru = (
      /*               */
      268435456
    ), Qi = (
      /*                        */
      536870912
    ), Lr = (
      /*                   */
      1073741824
    );
    function Oy(e) {
      {
        if (e & Ye)
          return "Sync";
        if (e & ja)
          return "InputContinuousHydration";
        if (e & Ir)
          return "InputContinuous";
        if (e & Dl)
          return "DefaultHydration";
        if (e & qt)
          return "Default";
        if (e & _l)
          return "TransitionHydration";
        if (e & Yi)
          return "Transition";
        if (e & Ml)
          return "Retry";
        if (e & xu)
          return "SelectiveHydration";
        if (e & Ru)
          return "IdleHydration";
        if (e & Qi)
          return "Idle";
        if (e & Lr)
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
        case Ir:
          return Ir;
        case Dl:
          return Dl;
        case qt:
          return qt;
        case _l:
          return _l;
        case kl:
        case sa:
        case Or:
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
        case xu:
          return xu;
        case Ru:
          return Ru;
        case Qi:
          return Qi;
        case Lr:
          return Lr;
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
        var E = a & ~u;
        E !== P ? i = wu(E) : s !== P && (i = wu(s));
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
          T === qt && (O & Yi) !== P
        )
          return t;
      }
      (i & Ir) !== P && (i |= a & qt);
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
        case Ir:
          return t + 250;
        case Dl:
        case qt:
        case _l:
        case kl:
        case sa:
        case Or:
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
        case xu:
        case Ru:
        case Qi:
        case Lr:
          return It;
        default:
          return g("Should have found matching lanes. This is a bug in React."), It;
      }
    }
    function Ly(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = Wi(f), h = 1 << v, E = s[v];
        E === It ? ((h & i) === P || (h & u) !== P) && (s[v] = Sc(h, t)) : E <= t && (e.expiredLanes |= h), f &= ~h;
      }
    }
    function My(e) {
      return wu(e.pendingLanes);
    }
    function yd(e) {
      var t = e.pendingLanes & ~Lr;
      return t !== P ? t : t & Lr ? Lr : P;
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
    function Ny(e) {
      var t = Ye | Ir | qt;
      return (e & t) === P;
    }
    function Jv(e) {
      return (e & Yi) === e;
    }
    function Po(e, t) {
      var a = ja | Ir | Dl | qt;
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
    function zy() {
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
    function Mr(e, t) {
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
      for (var t = [], a = 0; a < Gt; a++)
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
    function xd(e, t) {
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
    function Ay(e, t) {
      var a = En(t), i;
      switch (a) {
        case Ir:
          i = ja;
          break;
        case qt:
          i = Dl;
          break;
        case kl:
        case sa:
        case Or:
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
          i = Ru;
          break;
        default:
          i = mt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== mt ? mt : i;
    }
    function Rd(e, t, a) {
      if ($n)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Cc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function xc(e, t) {
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
    var ir = Ye, In = Ir, di = qt, $o = Qi, Al = mt;
    function ca() {
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
    function lr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Uy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function bd(e, t) {
      return e !== 0 && e < t;
    }
    function Yo(e) {
      var t = En(e);
      return bd(ir, t) ? bd(In, t) ? Bo(t) ? di : $o : In : ir;
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
    var Rc = !1, Ou = [], Ba = null, Zt = null, Fn = null, fa = /* @__PURE__ */ new Map(), Lu = /* @__PURE__ */ new Map(), pi = [], Oa = [
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
          Zt = null;
          break;
        case "mouseover":
        case "mouseout":
          Fn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          fa.delete(a);
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
          return Zt = Mu(Zt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var v = u;
          return Fn = Mu(Fn, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var h = u, E = h.pointerId;
          return fa.set(E, Mu(fa.get(E) || null, e, t, a, i, h)), !0;
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
        var a = Br(t);
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
          Do(s), u.target.dispatchEvent(s), by();
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
      Rc = !1, Ba !== null && wc(Ba) && (Ba = null), Zt !== null && wc(Zt) && (Zt = null), Fn !== null && wc(Fn) && (Fn = null), fa.forEach(qo), Lu.forEach(qo);
    }
    function ur(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Rc || (Rc = !0, S.unstable_scheduleCallback(S.unstable_NormalPriority, Od)));
    }
    function vt(e) {
      if (Ou.length > 0) {
        ur(Ou[0], e);
        for (var t = 1; t < Ou.length; t++) {
          var a = Ou[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ba !== null && ur(Ba, e), Zt !== null && ur(Zt, e), Fn !== null && ur(Fn, e);
      var i = function(v) {
        return ur(v, e);
      };
      fa.forEach(i), Lu.forEach(i);
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
    var rn = m.ReactCurrentBatchConfig, cn = !0;
    function Hn(e) {
      cn = !!e;
    }
    function Yr() {
      return cn;
    }
    function Nu(e, t, a) {
      var i = pr(t), u;
      switch (i) {
        case ir:
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
      var u = ca(), s = rn.transition;
      rn.transition = null;
      try {
        Dn(ir), vi(e, t, a, i);
      } finally {
        Dn(u), rn.transition = s;
      }
    }
    function Xo(e, t, a, i) {
      var u = ca(), s = rn.transition;
      rn.transition = null;
      try {
        Dn(In), vi(e, t, a, i);
      } finally {
        Dn(u), rn.transition = s;
      }
    }
    function vi(e, t, a, i) {
      cn && bc(e, t, a, i);
    }
    function bc(e, t, a, i) {
      var u = Ul(e, t, a, i);
      if (u === null) {
        ng(e, t, i, zu, a), oh(e, i);
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
          if (f === null && ng(e, t, i, zu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      ng(e, t, i, null, a);
    }
    var zu = null;
    function Ul(e, t, a, i) {
      zu = null;
      var u = Bs(i), s = rs(u);
      if (s !== null) {
        var f = Br(s);
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
            var E = f.stateNode;
            if (_n(E))
              return Qs(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return zu = s, null;
    }
    function pr(e) {
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
          return ir;
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
              return ir;
            case $r:
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
    function or() {
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
        var E = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return E ? this.isDefaultPrevented = Vl : this.isDefaultPrevented = or, this.isPropagationStopped = or, this;
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
    var sr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, cr = Cn(sr), Fu = pt({}, sr, {
      view: 0,
      detail: 0
    }), Md = Cn(Fu), Ko, Nd, da;
    function fh(e) {
      e !== da && (da && e.type === "mousemove" ? (Ko = e.screenX - da.screenX, Nd = e.screenY - da.screenY) : (Ko = 0, Nd = 0), da = e);
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
    }), Oc = Cn(dh), Ad = pt({}, sr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Lc = Cn(Ad), Fy = pt({}, sr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Hy = Cn(Fy), ph = pt({}, sr, {
      data: 0
    }), Ud = Cn(ph), Bl = Ud, Vy = {
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
        var t = Vy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Hl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Vu[e.keyCode] || "Unidentified" : "";
    }
    var fn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function jy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = fn[e];
      return i ? !!a[i] : !1;
    }
    function Mc(e) {
      return jy;
    }
    var By = pt({}, Fu, {
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
    }), Py = Cn(By), hh = pt({}, Hu, {
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
    }), Fd = Cn(hh), $y = pt({}, Fu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mc
    }), pa = Cn($y), Hd = pt({}, sr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Iy = Cn(Hd), Ki = pt({}, Hu, {
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
    var Yy = zt && "TextEvent" in window && !$l, zc = zt && (!Jo || $l && $l > 8 && $l <= 11), mh = 32, Vd = String.fromCharCode(mh);
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
      var v = Rh(a, s);
      if (v.length > 0) {
        var h = new Ud(s, t, null, i, u);
        if (e.push({
          event: h,
          listeners: v
        }), f)
          h.data = f;
        else {
          var E = Bd(i);
          E !== null && (h.data = E);
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
    function Qy(e, t, a, i, u) {
      var s;
      if (Yy ? s = Fc(t, i) : s = Eh(t, i), !s)
        return null;
      var f = Rh(a, "onBeforeInput");
      if (f.length > 0) {
        var v = new Bl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: v,
          listeners: f
        }), v.data = s;
      }
    }
    function Hc(e, t, a, i, u, s, f) {
      Pd(e, t, a, i, u), Qy(e, t, a, i, u);
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
    function ju(e) {
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
    function Gy(e) {
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
      var u = Rh(t, "onChange");
      if (u.length > 0) {
        var s = new cr("onChange", "change", null, a, i);
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
    function x(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    zt && (w = Gy("input") && (!document.documentMode || document.documentMode > 9));
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
    function Re(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function De(e, t) {
      if (e === "click")
        return y(t);
    }
    function vn(e, t) {
      if (e === "input" || e === "change")
        return y(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Li(e, "number", e.value);
    }
    function k(e, t, a, i, u, s, f) {
      var v = a ? Yc(a) : window, h, E;
      if (o(v) ? h = x : ju(v) ? w ? h = vn : (h = ve, E = X) : Re(v) && (h = De), h) {
        var T = h(t, a);
        if (T) {
          n(e, T, i, u);
          return;
        }
      }
      E && E(t, v, a), t === "focusout" && L(v);
    }
    function A() {
      le("onMouseEnter", ["mouseout", "mouseover"]), le("onMouseLeave", ["mouseout", "mouseover"]), le("onPointerEnter", ["pointerout", "pointerover"]), le("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ae(e, t, a, i, u, s, f) {
      var v = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout";
      if (v && !Fv(i)) {
        var E = i.relatedTarget || i.fromElement;
        if (E && (rs(E) || np(E)))
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
            var j = Br(U);
            (U !== j || U.tag !== ie && U.tag !== xe) && (U = null);
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
          lR(e, B, N, _, U);
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
      return qy(e, u, s, f, v);
    }
    function qy(e, t, a, i, u) {
      var s = 0, f = -1, v = -1, h = 0, E = 0, T = e, O = null;
      e:
        for (; ; ) {
          for (var _ = null; T === t && (a === 0 || T.nodeType === ri) && (f = s + a), T === i && (u === 0 || T.nodeType === ri) && (v = s + u), T.nodeType === ri && (s += T.nodeValue.length), (_ = T.firstChild) !== null; )
            O = T, T = _;
          for (; ; ) {
            if (T === e)
              break e;
            if (O === t && ++h === a && (f = s), O === i && ++E === u && (v = s), (_ = T.nextSibling) !== null)
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
    function Bx(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > v) {
          var h = v;
          v = f, f = h;
        }
        var E = Et(e, f), T = Et(e, v);
        if (E && T) {
          if (u.rangeCount === 1 && u.anchorNode === E.node && u.anchorOffset === E.offset && u.focusNode === T.node && u.focusOffset === T.offset)
            return;
          var O = a.createRange();
          O.setStart(E.node, E.offset), u.removeAllRanges(), f > v ? (u.addRange(O), u.extend(T.node, T.offset)) : (O.setEnd(T.node, T.offset), u.addRange(O));
        }
      }
    }
    function vE(e) {
      return e && e.nodeType === ri;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vE(e) ? !1 : vE(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Px(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function $x(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = _s(); t instanceof e.HTMLIFrameElement; ) {
        if ($x(t))
          e = t.contentWindow;
        else
          return t;
        t = _s(e.document);
      }
      return t;
    }
    function Xy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Ix() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: Xy(e) ? Qx(e) : null
      };
    }
    function Yx(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Px(a)) {
        i !== null && Xy(a) && Wx(a, i);
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
    function Qx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Zi(e), t || {
        start: 0,
        end: 0
      };
    }
    function Wx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bx(e, t);
    }
    var Gx = zt && "documentMode" in document && document.documentMode <= 11;
    function qx() {
      Dt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var jc = null, Ky = null, $d = null, Zy = !1;
    function Xx(e) {
      if ("selectionStart" in e && Xy(e))
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
    function Kx(e) {
      return e.window === e ? e.document : e.nodeType === ba ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = Kx(a);
      if (!(Zy || jc == null || jc !== _s(i))) {
        var u = Xx(jc);
        if (!$d || !Fe($d, u)) {
          $d = u;
          var s = Rh(Ky, "onSelect");
          if (s.length > 0) {
            var f = new cr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = jc;
          }
        }
      }
    }
    function Zx(e, t, a, i, u, s, f) {
      var v = a ? Yc(a) : window;
      switch (t) {
        case "focusin":
          (ju(v) || v.contentEditable === "true") && (jc = v, Ky = a, $d = null);
          break;
        case "focusout":
          jc = null, Ky = null, $d = null;
          break;
        case "mousedown":
          Zy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zy = !1, yE(e, i, u);
          break;
        case "selectionchange":
          if (Gx)
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
    }, Jy = {}, gE = {};
    zt && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete Bc.animationend.animation, delete Bc.animationiteration.animation, delete Bc.animationstart.animation), "TransitionEvent" in window || delete Bc.transitionend.transition);
    function Th(e) {
      if (Jy[e])
        return Jy[e];
      if (!Bc[e])
        return e;
      var t = Bc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gE)
          return Jy[e] = t[a];
      return e;
    }
    var SE = Th("animationend"), EE = Th("animationiteration"), CE = Th("animationstart"), TE = Th("transitionend"), xE = /* @__PURE__ */ new Map(), RE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      xE.set(e, t), Dt(t, [e]);
    }
    function Jx() {
      for (var e = 0; e < RE.length; e++) {
        var t = RE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + i);
      }
      Bu(SE, "onAnimationEnd"), Bu(EE, "onAnimationIteration"), Bu(CE, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(TE, "onTransitionEnd");
    }
    function eR(e, t, a, i, u, s, f) {
      var v = xE.get(t);
      if (v !== void 0) {
        var h = cr, E = t;
        switch (t) {
          case "keypress":
            if (Hl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            h = Py;
            break;
          case "focusin":
            E = "focus", h = Oc;
            break;
          case "focusout":
            E = "blur", h = Oc;
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
            h = pa;
            break;
          case SE:
          case EE:
          case CE:
            h = Lc;
            break;
          case TE:
            h = Iy;
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
            h = Hy;
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
          t === "scroll", _ = aR(a, v, i.type, T, O);
          if (_.length > 0) {
            var U = new h(v, E, null, i, u);
            e.push({
              event: U,
              listeners: _
            });
          }
        }
      }
    }
    Jx(), A(), Vc(), qx(), yh();
    function tR(e, t, a, i, u, s, f) {
      eR(e, t, a, i, u, s);
      var v = (s & wy) === 0;
      v && (ae(e, t, a, i, u), k(e, t, a, i, u), Zx(e, t, a, i, u), Hc(e, t, a, i, u));
    }
    var Id = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], eg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Id));
    function wE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ui(i, t, void 0, e), e.currentTarget = null;
    }
    function nR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, v = s.currentTarget, h = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          wE(e, h, v), i = f;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var T = t[E], O = T.instance, _ = T.currentTarget, U = T.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          wE(e, U, _), i = O;
        }
    }
    function bE(e, t) {
      for (var a = (t & gl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        nR(s, f, a);
      }
      ed();
    }
    function rR(e, t, a, i, u) {
      var s = Bs(a), f = [];
      tR(f, e, i, a, s, t), bE(f, t);
    }
    function an(e, t) {
      eg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Nw(t), u = uR(e, a);
      i.has(u) || (DE(t, e, wo, a), i.add(u));
    }
    function tg(e, t, a) {
      eg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= gl), DE(a, e, i, t);
    }
    var xh = "_reactListening" + Math.random().toString(36).slice(2);
    function Yd(e) {
      if (!e[xh]) {
        e[xh] = !0, Je.forEach(function(a) {
          a !== "selectionchange" && (eg.has(a) || tg(a, !1, e), tg(a, !0, e));
        });
        var t = e.nodeType === ba ? e : e.ownerDocument;
        t !== null && (t[xh] || (t[xh] = !0, tg("selectionchange", !1, t)));
      }
    }
    function DE(e, t, a, i, u) {
      var s = Nu(e, t, a), f = void 0;
      Oo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? hi(e, t, s, f) : Au(e, t, s) : f !== void 0 ? Dc(e, t, s, f) : Ld(e, t, s);
    }
    function _E(e, t) {
      return e === t || e.nodeType === Sn && e.parentNode === t;
    }
    function ng(e, t, a, i, u) {
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
                var E = v.stateNode.containerInfo;
                if (_E(E, f))
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
                for (; E !== null; ) {
                  var U = rs(E);
                  if (U === null)
                    return;
                  var F = U.tag;
                  if (F === ie || F === xe) {
                    v = s = U;
                    continue e;
                  }
                  E = E.parentNode;
                }
              }
              v = v.return;
            }
        }
      }
      Xf(function() {
        return rR(e, t, a, s);
      });
    }
    function Qd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function aR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, h = [], E = e, T = null; E !== null; ) {
        var O = E, _ = O.stateNode, U = O.tag;
        if (U === ie && _ !== null && (T = _, v !== null)) {
          var F = El(E, v);
          F != null && h.push(Qd(E, F, T));
        }
        if (u)
          break;
        E = E.return;
      }
      return h;
    }
    function Rh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, v = s.tag;
        if (v === ie && f !== null) {
          var h = f, E = El(u, a);
          E != null && i.unshift(Qd(u, E, h));
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
    function iR(e, t) {
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
        var h = v, E = h.alternate, T = h.stateNode, O = h.tag;
        if (E !== null && E === i)
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
    function lR(e, t, a, i, u) {
      var s = i && u ? iR(i, u) : null;
      i !== null && kE(e, t, i, s, !1), u !== null && a !== null && kE(e, a, u, s, !0);
    }
    function uR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var va = !1, Wd = "dangerouslySetInnerHTML", wh = "suppressContentEditableWarning", Pu = "suppressHydrationWarning", OE = "autoFocus", ts = "children", ns = "style", bh = "__html", rg, Dh, Gd, LE, _h, ME, NE;
    rg = {
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
      if (!va) {
        var i = kh(a), u = kh(t);
        u !== i && (va = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, LE = function(e) {
      if (!va) {
        va = !0;
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
    var oR = /\r\n?/g, sR = /\u0000|\uFFFD/g;
    function kh(e) {
      ke(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(oR, `
`).replace(sR, "");
    }
    function Oh(e, t, a, i) {
      var u = kh(t), s = kh(e);
      if (s !== u && (i && (va || (va = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && wt))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === ba ? e : e.ownerDocument;
    }
    function cR() {
    }
    function Lh(e) {
      e.onclick = cR;
    }
    function fR(e, t, a, i, u) {
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
            s === wh || s === Pu || s === OE || (it.hasOwnProperty(s) ? f != null && (typeof f != "function" && _h(s, f), s === "onScroll" && an("scroll", t)) : f != null && dl(t, s, f, u));
        }
    }
    function dR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === ns ? bv(e, f) : s === Wd ? hv(e, f) : s === ts ? Us(e, f) : dl(e, s, f, i);
      }
    }
    function pR(e, t, a, i) {
      var u, s = zE(a), f, v = i;
      if (v === ni && (v = zs(e)), v === ni) {
        if (u = ai(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var h = s.createElement("div");
          h.innerHTML = "<script><\/script>";
          var E = h.firstChild;
          f = h.removeChild(E);
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
      return v === ni && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !mn.call(rg, e) && (rg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function vR(e, t) {
      return zE(t).createTextNode(e);
    }
    function hR(e, t, a, i) {
      var u = ai(t, a);
      Dh(t, a);
      var s;
      switch (t) {
        case "dialog":
          an("cancel", e), an("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          an("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Id.length; f++)
            an(Id[f], e);
          s = a;
          break;
        case "source":
          an("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          an("error", e), an("load", e), s = a;
          break;
        case "details":
          an("toggle", e), s = a;
          break;
        case "input":
          So(e, a), s = go(e, a), an("invalid", e);
          break;
        case "option":
          Ms(e, a), s = a;
          break;
        case "select":
          fv(e, a), s = zf(e, a), an("invalid", e);
          break;
        case "textarea":
          dv(e, a), s = Uf(e, a), an("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Hs(t, s), fR(t, e, i, s, u), t) {
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
          vy(e, a);
          break;
        default:
          typeof s.onClick == "function" && Lh(e);
          break;
      }
    }
    function mR(e, t, a, i, u) {
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
      var h, E, T = null;
      for (h in f)
        if (!(v.hasOwnProperty(h) || !f.hasOwnProperty(h) || f[h] == null))
          if (h === ns) {
            var O = f[h];
            for (E in O)
              O.hasOwnProperty(E) && (T || (T = {}), T[E] = "");
          } else
            h === Wd || h === ts || h === wh || h === Pu || h === OE || (it.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
      for (h in v) {
        var _ = v[h], U = f != null ? f[h] : void 0;
        if (!(!v.hasOwnProperty(h) || _ === U || _ == null && U == null))
          if (h === ns)
            if (_ && Object.freeze(_), U) {
              for (E in U)
                U.hasOwnProperty(E) && (!_ || !_.hasOwnProperty(E)) && (T || (T = {}), T[E] = "");
              for (E in _)
                _.hasOwnProperty(E) && U[E] !== _[E] && (T || (T = {}), T[E] = _[E]);
            } else
              T || (s || (s = []), s.push(h, T)), T = _;
          else if (h === Wd) {
            var F = _ ? _[bh] : void 0, j = U ? U[bh] : void 0;
            F != null && j !== F && (s = s || []).push(h, F);
          } else
            h === ts ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(h, "" + _) : h === wh || h === Pu || (it.hasOwnProperty(h) ? (_ != null && (typeof _ != "function" && _h(h, _), h === "onScroll" && an("scroll", e)), !s && U !== _ && (s = [])) : (s = s || []).push(h, _));
      }
      return T && (xo(T, v[ns]), (s = s || []).push(ns, T)), s;
    }
    function yR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Mf(e, u);
      var s = ai(a, i), f = ai(a, u);
      switch (dR(e, t, s, f), a) {
        case "input":
          cu(e, u);
          break;
        case "textarea":
          pv(e, u);
          break;
        case "select":
          hy(e, u);
          break;
      }
    }
    function gR(e) {
      {
        var t = e.toLowerCase();
        return Vs.hasOwnProperty(t) && Vs[t] || null;
      }
    }
    function SR(e, t, a, i, u, s, f) {
      var v, h;
      switch (v = ai(t, a), Dh(t, a), t) {
        case "dialog":
          an("cancel", e), an("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          an("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < Id.length; E++)
            an(Id[E], e);
          break;
        case "source":
          an("error", e);
          break;
        case "img":
        case "image":
        case "link":
          an("error", e), an("load", e);
          break;
        case "details":
          an("toggle", e);
          break;
        case "input":
          So(e, a), an("invalid", e);
          break;
        case "option":
          Ms(e, a);
          break;
        case "select":
          fv(e, a), an("invalid", e);
          break;
        case "textarea":
          dv(e, a), an("invalid", e);
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
            j != null && (typeof j != "function" && _h(F, j), F === "onScroll" && an("scroll", e));
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
                    var M = xy(j);
                    me = e.getAttribute("style"), M !== me && Gd(F, me, M);
                  }
                } else if (v && !Pe)
                  h.delete(F.toLowerCase()), me = xs(e, F, j), j !== me && Gd(F, me, j);
                else if (!xn(F, Be, v) && !ln(F, j, Be, v)) {
                  var B = !1;
                  if (Be !== null)
                    h.delete(Be.attributeName), me = uo(e, F, j, Be);
                  else {
                    var N = i;
                    if (N === ni && (N = zs(t)), N === ni)
                      h.delete(F.toLowerCase());
                    else {
                      var ee = gR(F);
                      ee !== null && ee !== F && (B = !0, h.delete(ee)), h.delete(F);
                    }
                    me = xs(e, F, j);
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
    function ER(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ag(e, t) {
      {
        if (va)
          return;
        va = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ig(e, t) {
      {
        if (va)
          return;
        va = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function lg(e, t, a) {
      {
        if (va)
          return;
        va = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ug(e, t) {
      {
        if (t === "" || va)
          return;
        va = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function CR(e, t, a) {
      switch (t) {
        case "input":
          uv(e, a);
          return;
        case "textarea":
          Ff(e, a);
          return;
        case "select":
          my(e, a);
          return;
      }
    }
    var qd = function() {
    }, Xd = function() {
    };
    {
      var TR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], AE = [
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
      ], xR = AE.concat(["button"]), RR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], UE = {
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
        return AE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), xR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), TR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var wR = function(e, t) {
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
            return RR.indexOf(t) === -1;
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
      }, bR = function(e, t) {
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
        var s = wR(e, u) ? null : i, f = s ? null : bR(e, a), v = s || f;
        if (v) {
          var h = v.tag, E = !!s + "|" + e + "|" + h;
          if (!FE[E]) {
            FE[E] = !0;
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
    var Mh = "suppressHydrationWarning", Nh = "$", zh = "/$", Kd = "$?", Zd = "$!", DR = "style", og = null, sg = null;
    function _R(e) {
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
    function kR(e, t, a) {
      {
        var i = e, u = Vf(i.namespace, t), s = Xd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function qO(e) {
      return e;
    }
    function OR(e) {
      og = Yr(), sg = Ix();
      var t = null;
      return Hn(!1), t;
    }
    function LR(e) {
      Yx(sg), Hn(og), og = null, sg = null;
    }
    function MR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (qd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, h = Xd(f.ancestorInfo, e);
          qd(null, v, h);
        }
        s = f.namespace;
      }
      var E = pR(e, t, a, s);
      return tp(u, E), yg(E, t), E;
    }
    function NR(e, t) {
      e.appendChild(t);
    }
    function zR(e, t, a, i, u) {
      switch (hR(e, t, a, i), t) {
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
    function AR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, h = Xd(f.ancestorInfo, t);
          qd(null, v, h);
        }
      }
      return mR(e, t, a, i);
    }
    function cg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function UR(e, t, a, i) {
      {
        var u = a;
        qd(null, e, u.ancestorInfo);
      }
      var s = vR(e, t);
      return tp(i, s), s;
    }
    function FR() {
      var e = window.event;
      return e === void 0 ? di : pr(e.type);
    }
    var fg = typeof setTimeout == "function" ? setTimeout : void 0, HR = typeof clearTimeout == "function" ? clearTimeout : void 0, dg = -1, HE = typeof Promise == "function" ? Promise : void 0, VR = typeof queueMicrotask == "function" ? queueMicrotask : typeof HE < "u" ? function(e) {
      return HE.resolve(null).then(e).catch(jR);
    } : fg;
    function jR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function BR(e, t, a, i) {
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
    function PR(e, t, a, i, u, s) {
      yR(e, t, a, i, u), yg(e, u);
    }
    function VE(e) {
      Us(e, "");
    }
    function $R(e, t, a) {
      e.nodeValue = a;
    }
    function IR(e, t) {
      e.appendChild(t);
    }
    function YR(e, t) {
      var a;
      e.nodeType === Sn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Lh(a);
    }
    function QR(e, t, a) {
      e.insertBefore(t, a);
    }
    function WR(e, t, a) {
      e.nodeType === Sn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function GR(e, t) {
      e.removeChild(t);
    }
    function qR(e, t) {
      e.nodeType === Sn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function pg(e, t) {
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
    function XR(e, t) {
      e.nodeType === Sn ? pg(e.parentNode, t) : e.nodeType === Rr && pg(e, t), vt(e);
    }
    function KR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ZR(e) {
      e.nodeValue = "";
    }
    function JR(e, t) {
      e = e;
      var a = t[DR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Fs("display", i);
    }
    function ew(e, t) {
      e.nodeValue = t;
    }
    function tw(e) {
      e.nodeType === Rr ? e.textContent = "" : e.nodeType === ba && e.documentElement && e.removeChild(e.documentElement);
    }
    function nw(e, t, a) {
      return e.nodeType !== Rr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function rw(e, t) {
      return t === "" || e.nodeType !== ri ? null : e;
    }
    function aw(e) {
      return e.nodeType !== Sn ? null : e;
    }
    function jE(e) {
      return e.data === Kd;
    }
    function vg(e) {
      return e.data === Zd;
    }
    function iw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function lw(e, t) {
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
    function uw(e) {
      return Ah(e.firstChild);
    }
    function ow(e) {
      return Ah(e.firstChild);
    }
    function sw(e) {
      return Ah(e.nextSibling);
    }
    function cw(e, t, a, i, u, s, f) {
      tp(s, e), yg(e, a);
      var v;
      {
        var h = u;
        v = h.namespace;
      }
      var E = (s.mode & ct) !== $e;
      return SR(e, t, a, v, i, E, f);
    }
    function fw(e, t, a, i) {
      return tp(a, e), a.mode & ct, ER(e, t);
    }
    function dw(e, t) {
      tp(t, e);
    }
    function pw(e) {
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
    function vw(e) {
      vt(e);
    }
    function hw(e) {
      vt(e);
    }
    function mw(e) {
      return e !== "head" && e !== "body";
    }
    function yw(e, t, a, i) {
      var u = !0;
      Oh(t.nodeValue, a, i, u);
    }
    function gw(e, t, a, i, u, s) {
      if (t[Mh] !== !0) {
        var f = !0;
        Oh(i.nodeValue, u, s, f);
      }
    }
    function Sw(e, t) {
      t.nodeType === Rr ? ag(e, t) : t.nodeType === Sn || ig(e, t);
    }
    function Ew(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Rr ? ag(a, t) : t.nodeType === Sn || ig(a, t));
      }
    }
    function Cw(e, t, a, i, u) {
      (u || t[Mh] !== !0) && (i.nodeType === Rr ? ag(a, i) : i.nodeType === Sn || ig(a, i));
    }
    function Tw(e, t, a) {
      lg(e, t);
    }
    function xw(e, t) {
      ug(e, t);
    }
    function Rw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && lg(i, t);
      }
    }
    function ww(e, t) {
      {
        var a = e.parentNode;
        a !== null && ug(a, t);
      }
    }
    function bw(e, t, a, i, u, s) {
      (s || t[Mh] !== !0) && lg(a, i);
    }
    function Dw(e, t, a, i, u) {
      (u || t[Mh] !== !0) && ug(a, i);
    }
    function _w(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function kw(e) {
      Yd(e);
    }
    var $c = Math.random().toString(36).slice(2), Ic = "__reactFiber$" + $c, hg = "__reactProps$" + $c, ep = "__reactContainer$" + $c, mg = "__reactEvents$" + $c, Ow = "__reactListeners$" + $c, Lw = "__reactHandles$" + $c;
    function Mw(e) {
      delete e[Ic], delete e[hg], delete e[mg], delete e[Ow], delete e[Lw];
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
      return t && (t.tag === ie || t.tag === xe || t.tag === Y || t.tag === I) ? t : null;
    }
    function Yc(e) {
      if (e.tag === ie || e.tag === xe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Fh(e) {
      return e[hg] || null;
    }
    function yg(e, t) {
      e[hg] = t;
    }
    function Nw(e) {
      var t = e[mg];
      return t === void 0 && (t = e[mg] = /* @__PURE__ */ new Set()), t;
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
            } catch (E) {
              v = E;
            }
            v && !(v instanceof Error) && (Hh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), Hh(null)), v instanceof Error && !(v.message in $E) && ($E[v.message] = !0, Hh(u), g("Failed %s type: %s", a, v.message), Hh(null));
          }
      }
    }
    var gg = [], Vh;
    Vh = [];
    var Il = -1;
    function Iu(e) {
      return {
        current: e
      };
    }
    function Nr(e, t) {
      if (Il < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Vh[Il] && g("Unexpected Fiber popped."), e.current = gg[Il], gg[Il] = null, Vh[Il] = null, Il--;
    }
    function zr(e, t, a) {
      Il++, gg[Il] = e.current, Vh[Il] = a, e.current = t;
    }
    var Sg;
    Sg = {};
    var La = {};
    Object.freeze(La);
    var Yl = Iu(La), Ji = Iu(!1), Eg = La;
    function Qc(e, t, a) {
      return a && el(t) ? Eg : Yl.current;
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
      Nr(Ji, e), Nr(Yl, e);
    }
    function Cg(e) {
      Nr(Ji, e), Nr(Yl, e);
    }
    function QE(e, t, a) {
      {
        if (Yl.current !== La)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        zr(Yl, t, e), zr(Ji, a, e);
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = rt(e) || "Unknown";
            Sg[s] || (Sg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
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
        return Eg = Yl.current, zr(Yl, a, e), zr(Ji, Ji.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WE(e, t, Eg);
          i.__reactInternalMemoizedMergedChildContext = u, Nr(Ji, e), Nr(Yl, e), zr(Yl, u, e), zr(Ji, a, e);
        } else
          Nr(Ji, e), zr(Ji, a, e);
      }
    }
    function zw(e) {
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
    var Yu = 0, $h = 1, Ql = null, Tg = !1, xg = !1;
    function qE(e) {
      Ql === null ? Ql = [e] : Ql.push(e);
    }
    function Aw(e) {
      Tg = !0, qE(e);
    }
    function XE() {
      Tg && Qu();
    }
    function Qu() {
      if (!xg && Ql !== null) {
        xg = !0;
        var e = 0, t = ca();
        try {
          var a = !0, i = Ql;
          for (Dn(ir); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Ql = null, Tg = !1;
        } catch (s) {
          throw Ql !== null && (Ql = Ql.slice(e + 1)), Gs(Xs, Qu), s;
        } finally {
          Dn(t), xg = !1;
        }
      }
      return null;
    }
    var Gc = [], qc = 0, Ih = null, Yh = 0, Ia = [], Ya = 0, as = null, Wl = 1, Gl = "";
    function Uw(e) {
      return ls(), (e.flags & nd) !== He;
    }
    function Fw(e) {
      return ls(), Yh;
    }
    function Hw() {
      var e = Gl, t = Wl, a = t & ~Vw(t);
      return a.toString(32) + e;
    }
    function is(e, t) {
      ls(), Gc[qc++] = Yh, Gc[qc++] = Ih, Ih = e, Yh = t;
    }
    function KE(e, t, a) {
      ls(), Ia[Ya++] = Wl, Ia[Ya++] = Gl, Ia[Ya++] = as, as = e;
      var i = Wl, u = Gl, s = Qh(i) - 1, f = i & ~(1 << s), v = a + 1, h = Qh(t) + s;
      if (h > 30) {
        var E = s - s % 5, T = (1 << E) - 1, O = (f & T).toString(32), _ = f >> E, U = s - E, F = Qh(t) + U, j = v << U, me = j | _, Be = O + u;
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
    function Vw(e) {
      return 1 << Qh(e) - 1;
    }
    function wg(e) {
      for (; e === Ih; )
        Ih = Gc[--qc], Gc[qc] = null, Yh = Gc[--qc], Gc[qc] = null;
      for (; e === as; )
        as = Ia[--Ya], Ia[Ya] = null, Gl = Ia[--Ya], Ia[Ya] = null, Wl = Ia[--Ya], Ia[Ya] = null;
    }
    function jw() {
      return ls(), as !== null ? {
        id: Wl,
        overflow: Gl
      } : null;
    }
    function Bw(e, t) {
      ls(), Ia[Ya++] = Wl, Ia[Ya++] = Gl, Ia[Ya++] = as, Wl = t.id, Gl = t.overflow, as = e;
    }
    function ls() {
      hr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var vr = null, Qa = null, gi = !1, us = !1, Wu = null;
    function Pw() {
      gi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ZE() {
      us = !0;
    }
    function $w() {
      return us;
    }
    function Iw(e) {
      var t = e.stateNode.containerInfo;
      return Qa = ow(t), vr = e, gi = !0, Wu = null, us = !1, !0;
    }
    function Yw(e, t, a) {
      return Qa = sw(t), vr = e, gi = !0, Wu = null, us = !1, a !== null && Bw(e, a), !0;
    }
    function JE(e, t) {
      switch (e.tag) {
        case I: {
          Sw(e.stateNode.containerInfo, t);
          break;
        }
        case ie: {
          var a = (e.mode & ct) !== $e;
          Cw(
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
          i.dehydrated !== null && Ew(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      JE(e, t);
      var a = G_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= bt) : i.push(a);
    }
    function bg(e, t) {
      {
        if (us)
          return;
        switch (e.tag) {
          case I: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, Tw(a, i);
                break;
              case xe:
                var u = t.pendingProps;
                xw(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case ie: {
                var h = t.type, E = t.pendingProps, T = (e.mode & ct) !== $e;
                bw(
                  s,
                  f,
                  v,
                  h,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case xe: {
                var O = t.pendingProps, _ = (e.mode & ct) !== $e;
                Dw(
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
                  t.pendingProps, Rw(F, j);
                  break;
                case xe:
                  var me = t.pendingProps;
                  ww(F, me);
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
      t.flags = t.flags & ~ia | Qt, bg(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = nw(t, a);
          return i !== null ? (e.stateNode = i, vr = e, Qa = uw(i), !0) : !1;
        }
        case xe: {
          var u = e.pendingProps, s = rw(t, u);
          return s !== null ? (e.stateNode = s, vr = e, Qa = null, !0) : !1;
        }
        case Y: {
          var f = aw(t);
          if (f !== null) {
            var v = {
              dehydrated: f,
              treeContext: jw(),
              retryLane: Lr
            };
            e.memoizedState = v;
            var h = q_(f);
            return h.return = e, e.child = h, vr = e, Qa = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Dg(e) {
      return (e.mode & ct) !== $e && (e.flags & Xe) === He;
    }
    function _g(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function kg(e) {
      if (gi) {
        var t = Qa;
        if (!t) {
          Dg(e) && (bg(vr, e), _g()), tC(vr, e), gi = !1, vr = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          Dg(e) && (bg(vr, e), _g()), t = Jd(a);
          var i = vr;
          if (!t || !nC(e, t)) {
            tC(vr, e), gi = !1, vr = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function Qw(e, t, a) {
      var i = e.stateNode, u = !us, s = cw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Ww(e) {
      var t = e.stateNode, a = e.memoizedProps, i = fw(t, a, e);
      if (i) {
        var u = vr;
        if (u !== null)
          switch (u.tag) {
            case I: {
              var s = u.stateNode.containerInfo, f = (u.mode & ct) !== $e;
              yw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ie: {
              var v = u.type, h = u.memoizedProps, E = u.stateNode, T = (u.mode & ct) !== $e;
              gw(
                v,
                h,
                E,
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
    function Gw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      dw(a, e);
    }
    function qw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return pw(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== I && t.tag !== Y; )
        t = t.return;
      vr = t;
    }
    function Wh(e) {
      if (e !== vr)
        return !1;
      if (!gi)
        return rC(e), gi = !0, !1;
      if (e.tag !== I && (e.tag !== ie || mw(e.type) && !cg(e.type, e.memoizedProps))) {
        var t = Qa;
        if (t)
          if (Dg(e))
            aC(e), _g();
          else
            for (; t; )
              eC(e, t), t = Jd(t);
      }
      return rC(e), e.tag === Y ? Qa = qw(e) : Qa = vr ? Jd(e.stateNode) : null, !0;
    }
    function Xw() {
      return gi && Qa !== null;
    }
    function aC(e) {
      for (var t = Qa; t; )
        JE(e, t), t = Jd(t);
    }
    function Xc() {
      vr = null, Qa = null, gi = !1, us = !1;
    }
    function iC() {
      Wu !== null && (J1(Wu), Wu = null);
    }
    function hr() {
      return gi;
    }
    function Og(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    var Kw = m.ReactCurrentBatchConfig, Zw = null;
    function Jw() {
      return Kw.transition;
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
      var eb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & nn && (t = a), a = a.return;
        return t;
      }, os = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, rp = [], ap = [], ip = [], lp = [], up = [], op = [], ss = /* @__PURE__ */ new Set();
      Si.recordUnsafeLifecycleWarnings = function(e, t) {
        ss.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && rp.push(e), e.mode & nn && typeof t.UNSAFE_componentWillMount == "function" && ap.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ip.push(e), e.mode & nn && typeof t.UNSAFE_componentWillReceiveProps == "function" && lp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && up.push(e), e.mode & nn && typeof t.UNSAFE_componentWillUpdate == "function" && op.push(e));
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
          var E = os(e);
          R(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (a.size > 0) {
          var T = os(a);
          R(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (u.size > 0) {
          var O = os(u);
          R(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var Gh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      Si.recordLegacyContextWarning = function(e, t) {
        var a = eb(e);
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
              Rn();
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
    var Lg = Iu(null), Mg;
    Mg = {};
    var qh = null, Kc = null, Ng = null, Xh = !1;
    function Kh() {
      qh = null, Kc = null, Ng = null, Xh = !1;
    }
    function uC() {
      Xh = !0;
    }
    function oC() {
      Xh = !1;
    }
    function sC(e, t, a) {
      zr(Lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Mg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Mg;
    }
    function zg(e, t) {
      var a = Lg.current;
      Nr(Lg, t), e._currentValue = a;
    }
    function Ag(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Nl(i.childLanes, t) ? u !== null && !Nl(u.childLanes, t) && (u.childLanes = ut(u.childLanes, t)) : (i.childLanes = ut(i.childLanes, t), u !== null && (u.childLanes = ut(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function tb(e, t, a) {
      nb(e, t, a);
    }
    function nb(e, t, a) {
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
                var E = i.updateQueue;
                if (E !== null) {
                  var T = E.shared, O = T.pending;
                  O === null ? h.next = h : (h.next = O.next, O.next = h), T.pending = h;
                }
              }
              i.lanes = ut(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = ut(_.lanes, a)), Ag(i.return, a, e), s.lanes = ut(s.lanes, a);
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
          F !== null && (F.lanes = ut(F.lanes, a)), Ag(U, a, e), u = i.sibling;
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
      qh = e, Kc = null, Ng = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Mr(a.lanes, t) && Tp(), a.firstContext = null);
      }
    }
    function jn(e) {
      Xh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ng !== e) {
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
    function Ug(e) {
      cs === null ? cs = [e] : cs.push(e);
    }
    function rb() {
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
      return u === null ? (a.next = a, Ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Zh(e, i);
    }
    function ab(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function ib(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Zh(e, i);
    }
    function ha(e, t) {
      return Zh(e, t);
    }
    var lb = Zh;
    function Zh(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (Qt | ia)) !== He && fT(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ut(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (u.flags & (Qt | ia)) !== He && fT(e), i = u, u = u.return;
      if (i.tag === I) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var fC = 0, dC = 1, Jh = 2, Fg = 3, em = !1, Hg, tm;
    Hg = !1, tm = null;
    function Vg(e) {
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
      if (tm === u && !Hg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Hg = !0), l_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, lb(e, a);
      } else
        return ib(e, u, t, a);
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
    function jg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, v = a.firstBaseUpdate;
          if (v !== null) {
            var h = v;
            do {
              var E = {
                eventTime: h.eventTime,
                lane: h.lane,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              };
              f === null ? s = f = E : (f.next = E, f = E), h = h.next;
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
    function ub(e, t, a, i, u, s) {
      switch (a.tag) {
        case dC: {
          var f = a.payload;
          if (typeof f == "function") {
            uC();
            var v = f.call(s, i, u);
            {
              if (e.mode & nn) {
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
        case Fg:
          e.flags = e.flags & ~An | Xe;
        case fC: {
          var h = a.payload, E;
          if (typeof h == "function") {
            uC(), E = h.call(s, i, u);
            {
              if (e.mode & nn) {
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
            E = h;
          return E == null ? i : pt({}, i, E);
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
        var h = v, E = h.next;
        h.next = null, f === null ? s = E : f.next = E, f = h;
        var T = e.alternate;
        if (T !== null) {
          var O = T.updateQueue, _ = O.lastBaseUpdate;
          _ !== f && (_ === null ? O.firstBaseUpdate = E : _.next = E, O.lastBaseUpdate = h);
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
            U = ub(e, u, Me, U, t, a);
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
    function ob(e, t) {
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
          f !== null && (s.callback = null, ob(f, a));
        }
    }
    var Bg = {}, mC = new p.Component().refs, Pg, $g, Ig, Yg, Qg, yC, im, Wg, Gg, qg;
    {
      Pg = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), Ig = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Qg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set();
      var gC = /* @__PURE__ */ new Set();
      im = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          gC.has(a) || (gC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, yC = function(e, t) {
        if (t === void 0) {
          var a = Pt(e) || "Component";
          Qg.has(a) || (Qg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Bg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Bg);
    }
    function Xg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & nn) {
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
    var Kg = {
      isMounted: Pr,
      enqueueSetState: function(e, t, a) {
        var i = ra(e), u = Gr(), s = no(i), f = ql(u, s);
        f.payload = t, a != null && (im(a, "setState"), f.callback = a);
        var v = Gu(i, f, s);
        v !== null && (Zn(v, i, s, u), nm(v, i, s)), Ii(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ra(e), u = Gr(), s = no(i), f = ql(u, s);
        f.tag = dC, f.payload = t, a != null && (im(a, "replaceState"), f.callback = a);
        var v = Gu(i, f, s);
        v !== null && (Zn(v, i, s, u), nm(v, i, s)), Ii(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ra(e), i = Gr(), u = no(a), s = ql(i, u);
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
          if (e.mode & nn) {
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
    function sb(e, t, a) {
      var i = e.stateNode;
      {
        var u = Pt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Gg.has(t) && (Gg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Pt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Ig.has(t) && (Ig.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Pt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var v = i.state;
        v && (typeof v != "object" || Nn(v)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function EC(e, t) {
      t.updater = Kg, e.stateNode = t, gu(t, e), t._reactInternalInstance = Bg;
    }
    function CC(e, t, a) {
      var i = !1, u = La, s = La, f = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Tf && f._context === void 0
        );
        if (!v && !qg.has(t)) {
          qg.add(t);
          var h = "";
          f === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? h = " However, it is set to a " + typeof f + "." : f.$$typeof === Cf ? h = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Pt(t) || "Component", h);
        }
      }
      if (typeof f == "object" && f !== null)
        s = jn(f);
      else {
        u = Qc(e, t, !0);
        var E = t.contextTypes;
        i = E != null, s = i ? Wc(e, u) : La;
      }
      var T = new t(a, s);
      if (e.mode & nn) {
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
          $g.has(_) || ($g.add(_), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, T.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var U = null, F = null, j = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? F = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (F = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), U !== null || F !== null || j !== null) {
            var me = Pt(t) || "Component", Be = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Yg.has(me) || (Yg.add(me), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

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
    function cb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", rt(e) || "Component"), Kg.enqueueReplaceState(t, t.state, null));
    }
    function TC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = rt(e) || "Component";
          Pg.has(s) || (Pg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Kg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Zg(e, t, a, i) {
      sb(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = mC, Vg(e);
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
          Wg.has(v) || (Wg.add(v), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & nn && Si.recordLegacyContextWarning(e, u), Si.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var h = t.getDerivedStateFromProps;
      if (typeof h == "function" && (Xg(e, t, h, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (cb(e, u), rm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var E = lt;
        E |= br, (e.mode & oa) !== $e && (E |= Dr), e.flags |= E;
      }
    }
    function fb(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, v = t.contextType, h = La;
      if (typeof v == "object" && v !== null)
        h = jn(v);
      else {
        var E = Qc(e, t, !0);
        h = Wc(e, E);
      }
      var T = t.getDerivedStateFromProps, O = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !O && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== h) && TC(e, u, a, h), vC();
      var _ = e.memoizedState, U = u.state = _;
      if (rm(e, a, u, i), U = e.memoizedState, s === a && _ === U && !jh() && !am()) {
        if (typeof u.componentDidMount == "function") {
          var F = lt;
          F |= br, (e.mode & oa) !== $e && (F |= Dr), e.flags |= F;
        }
        return !1;
      }
      typeof T == "function" && (Xg(e, t, T, a), U = e.memoizedState);
      var j = am() || SC(e, t, s, a, _, U, h);
      if (j) {
        if (!O && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var me = lt;
          me |= br, (e.mode & oa) !== $e && (me |= Dr), e.flags |= me;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Be = lt;
          Be |= br, (e.mode & oa) !== $e && (Be |= Dr), e.flags |= Be;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = h, j;
    }
    function db(e, t, a, i, u) {
      var s = t.stateNode;
      pC(e, t);
      var f = t.memoizedProps, v = t.type === t.elementType ? f : Ei(t.type, f);
      s.props = v;
      var h = t.pendingProps, E = s.context, T = a.contextType, O = La;
      if (typeof T == "object" && T !== null)
        O = jn(T);
      else {
        var _ = Qc(t, a, !0);
        O = Wc(t, _);
      }
      var U = a.getDerivedStateFromProps, F = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !F && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== h || E !== O) && TC(t, s, i, O), vC();
      var j = t.memoizedState, me = s.state = j;
      if (rm(t, i, s, u), me = t.memoizedState, f === h && j === me && !jh() && !am() && !_e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= aa), !1;
      typeof U == "function" && (Xg(t, a, U, i), me = t.memoizedState);
      var Be = am() || SC(t, a, v, i, j, me, O) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      _e;
      return Be ? (!F && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, me, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, me, O)), typeof s.componentDidUpdate == "function" && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= aa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= lt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= aa), t.memoizedProps = i, t.memoizedState = me), s.props = i, s.state = me, s.context = O, Be;
    }
    var Jg, eS, tS, nS, rS, xC = function(e, t) {
    };
    Jg = !1, eS = !1, tS = {}, nS = {}, rS = {}, xC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = rt(t) || "Component";
        nS[a] || (nS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & nn || ze) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = rt(e) || "Component";
          tS[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), tS[u] = !0);
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
          var E = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var T = function(O) {
            var _ = h.refs;
            _ === mC && (_ = h.refs = {}), O === null ? delete _[E] : _[E] = O;
          };
          return T._stringRef = E, T;
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
        if (rS[t])
          return;
        rS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function RC(e) {
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
          return ye < B ? (M.flags |= Qt, B) : ye;
        } else
          return M.flags |= Qt, B;
      }
      function f(M) {
        return e && M.alternate === null && (M.flags |= Qt), M;
      }
      function v(M, B, N, ee) {
        if (B === null || B.tag !== xe) {
          var ye = O0(N, M.mode, ee);
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
        typeof ye == "object" && ye !== null && ye.$$typeof === dr && RC(ye) === B.type)) {
          var de = u(B, N.props);
          return de.ref = sp(M, B, N), de.return = M, de._debugSource = N._source, de._debugOwner = N._owner, de;
        }
        var Ge = k0(N, M.mode, ee);
        return Ge.ref = sp(M, B, N), Ge.return = M, Ge;
      }
      function E(M, B, N, ee) {
        if (B === null || B.tag !== q || B.stateNode.containerInfo !== N.containerInfo || B.stateNode.implementation !== N.implementation) {
          var ye = L0(N, M.mode, ee);
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
          var ee = O0("" + B, M.mode, N);
          return ee.return = M, ee;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case ru: {
              var ye = k0(B, M.mode, N);
              return ye.ref = sp(M, null, B), ye.return = M, ye;
            }
            case Ta: {
              var de = L0(B, M.mode, N);
              return de.return = M, de;
            }
            case dr: {
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
              return N.key === ye ? E(M, B, N, ee) : null;
            case dr: {
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
              return E(B, nt, ee, ye);
            }
            case dr:
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
              xC(M, N);
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
            case dr:
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
        for (var nt = null, Ft = null, Tt = B, On = 0, xt = 0, Tn = null; Tt !== null && xt < N.length; xt++) {
          Tt.index > xt ? (Tn = Tt, Tt = null) : Tn = Tt.sibling;
          var Ur = _(M, Tt, N[xt], ee);
          if (Ur === null) {
            Tt === null && (Tt = Tn);
            break;
          }
          e && Tt && Ur.alternate === null && t(M, Tt), On = s(Ur, On, xt), Ft === null ? nt = Ur : Ft.sibling = Ur, Ft = Ur, Tt = Tn;
        }
        if (xt === N.length) {
          if (a(M, Tt), hr()) {
            var Tr = xt;
            is(M, Tr);
          }
          return nt;
        }
        if (Tt === null) {
          for (; xt < N.length; xt++) {
            var Na = O(M, N[xt], ee);
            Na !== null && (On = s(Na, On, xt), Ft === null ? nt = Na : Ft.sibling = Na, Ft = Na);
          }
          if (hr()) {
            var qr = xt;
            is(M, qr);
          }
          return nt;
        }
        for (var Xr = i(M, Tt); xt < N.length; xt++) {
          var Fr = U(Xr, M, xt, N[xt], ee);
          Fr !== null && (e && Fr.alternate !== null && Xr.delete(Fr.key === null ? xt : Fr.key), On = s(Fr, On, xt), Ft === null ? nt = Fr : Ft.sibling = Fr, Ft = Fr);
        }
        if (e && Xr.forEach(function(mf) {
          return t(M, mf);
        }), hr()) {
          var tu = xt;
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
          N[Symbol.toStringTag] === "Generator" && (eS || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eS = !0), N.entries === ye && (Jg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jg = !0);
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
        for (var On = null, xt = null, Tn = B, Ur = 0, Tr = 0, Na = null, qr = Tt.next(); Tn !== null && !qr.done; Tr++, qr = Tt.next()) {
          Tn.index > Tr ? (Na = Tn, Tn = null) : Na = Tn.sibling;
          var Xr = _(M, Tn, qr.value, ee);
          if (Xr === null) {
            Tn === null && (Tn = Na);
            break;
          }
          e && Tn && Xr.alternate === null && t(M, Tn), Ur = s(Xr, Ur, Tr), xt === null ? On = Xr : xt.sibling = Xr, xt = Xr, Tn = Na;
        }
        if (qr.done) {
          if (a(M, Tn), hr()) {
            var Fr = Tr;
            is(M, Fr);
          }
          return On;
        }
        if (Tn === null) {
          for (; !qr.done; Tr++, qr = Tt.next()) {
            var tu = O(M, qr.value, ee);
            tu !== null && (Ur = s(tu, Ur, Tr), xt === null ? On = tu : xt.sibling = tu, xt = tu);
          }
          if (hr()) {
            var mf = Tr;
            is(M, mf);
          }
          return On;
        }
        for (var Vp = i(M, Tn); !qr.done; Tr++, qr = Tt.next()) {
          var ol = U(Vp, M, Tr, qr.value, ee);
          ol !== null && (e && ol.alternate !== null && Vp.delete(ol.key === null ? Tr : ol.key), Ur = s(ol, Ur, Tr), xt === null ? On = ol : xt.sibling = ol, xt = ol);
        }
        if (e && Vp.forEach(function(bk) {
          return t(M, bk);
        }), hr()) {
          var wk = Tr;
          is(M, wk);
        }
        return On;
      }
      function Be(M, B, N, ee) {
        if (B !== null && B.tag === xe) {
          a(M, B.sibling);
          var ye = u(B, N);
          return ye.return = M, ye;
        }
        a(M, B);
        var de = O0(N, M.mode, ee);
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
            typeof Ge == "object" && Ge !== null && Ge.$$typeof === dr && RC(Ge) === de.type) {
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
          var On = k0(N, M.mode, ee);
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
        var nt = L0(N, M.mode, ee);
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
            case dr:
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
    function pb(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = gs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = gs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function vb(e, t) {
      for (var a = e.child; a !== null; )
        $_(a, t), a = a.sibling;
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
    function aS(e, t) {
      zr(om, t, e), zr(fp, e, e), zr(qu, cp, e);
      var a = _R(t);
      Nr(qu, e), zr(qu, a, e);
    }
    function ef(e) {
      Nr(qu, e), Nr(fp, e), Nr(om, e);
    }
    function iS() {
      var e = sm(qu.current);
      return e;
    }
    function _C(e) {
      sm(om.current);
      var t = sm(qu.current), a = kR(t, e.type);
      t !== a && (zr(fp, e, e), zr(qu, a, e));
    }
    function lS(e) {
      fp.current === e && (Nr(qu, e), Nr(fp, e));
    }
    var hb = 0, kC = 1, OC = 1, dp = 2, Ci = Iu(hb);
    function uS(e, t) {
      return (e & t) !== 0;
    }
    function tf(e) {
      return e & kC;
    }
    function oS(e, t) {
      return e & kC | t;
    }
    function mb(e, t) {
      return e | t;
    }
    function Xu(e, t) {
      zr(Ci, t, e);
    }
    function nf(e) {
      Nr(Ci, e);
    }
    function yb(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function cm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Y) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || jE(i) || vg(i))
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
    var ma = (
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
    ), mr = (
      /*   */
      8
    ), sS = [];
    function cS() {
      for (var e = 0; e < sS.length; e++) {
        var t = sS[e];
        t._workInProgressVersionPrimary = null;
      }
      sS.length = 0;
    }
    function gb(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var he = m.ReactCurrentDispatcher, pp = m.ReactCurrentBatchConfig, fS, rf;
    fS = /* @__PURE__ */ new Set();
    var fs = P, Ut = null, Wn = null, Gn = null, fm = !1, vp = !1, hp = 0, Sb = 0, Eb = 25, W = null, Wa = null, Ku = -1, dS = !1;
    function Ot() {
      {
        var e = W;
        Wa === null ? Wa = [e] : Wa.push(e);
      }
    }
    function oe() {
      {
        var e = W;
        Wa !== null && (Ku++, Wa[Ku] !== e && Cb(e));
      }
    }
    function af(e) {
      e != null && !Nn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", W, typeof e);
    }
    function Cb(e) {
      {
        var t = rt(Ut);
        if (!fS.has(t) && (fS.add(t), Wa !== null)) {
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
    function Ar() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function pS(e, t) {
      if (dS)
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
      fs = s, Ut = t, Wa = e !== null ? e._debugHookTypes : null, Ku = -1, dS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? he.current = ZC : Wa !== null ? he.current = KC : he.current = XC;
      var f = a(i, u);
      if (vp) {
        var v = 0;
        do {
          if (vp = !1, hp = 0, v >= Eb)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, dS = !1, Wn = null, Gn = null, t.updateQueue = null, Ku = -1, he.current = JC, f = a(i, u);
        } while (vp);
      }
      he.current = Rm, t._debugHookTypes = Wa;
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
      t.updateQueue = e.updateQueue, (t.mode & oa) !== $e ? t.flags &= ~(xl | Dr | Kt | lt) : t.flags &= ~(Kt | lt), e.lanes = Du(e.lanes, a);
    }
    function MC() {
      if (he.current = Rm, fm) {
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
    function vS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function hS(e, t, a) {
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
      var f = s.dispatch = wb.bind(null, Ut, s);
      return [i.memoizedState, f];
    }
    function mS(e, t, a) {
      var i = Ga(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Wn, f = s.baseQueue, v = u.pending;
      if (v !== null) {
        if (f !== null) {
          var h = f.next, E = v.next;
          f.next = E, v.next = h;
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
    function yS(e, t, a) {
      var i = Ga(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, v = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var h = f.next, E = h;
        do {
          var T = E.action;
          v = e(v, T), E = E.next;
        } while (E !== h);
        we(v, i.memoizedState) || Tp(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), u.lastRenderedState = v;
      }
      return [v, s];
    }
    function XO(e, t, a) {
    }
    function KO(e, t, a) {
    }
    function gS(e, t, a) {
      var i = Ut, u = nl(), s, f = hr();
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
      var E = {
        value: s,
        getSnapshot: t
      };
      return u.queue = E, mm(UC.bind(null, i, E, e), [e]), i.flags |= Kt, mp(Yn | mr, AC.bind(null, i, E, s, t), void 0, null), s;
    }
    function dm(e, t, a) {
      var i = Ut, u = Ga(), s = t();
      if (!rf) {
        var f = t();
        we(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), rf = !0);
      }
      var v = u.memoizedState, h = !we(v, s);
      h && (u.memoizedState = s, Tp());
      var E = u.queue;
      if (gp(UC.bind(null, i, E, e), [e]), E.getSnapshot !== t || h || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Gn !== null && Gn.memoizedState.tag & Yn) {
        i.flags |= Kt, mp(Yn | mr, AC.bind(null, i, E, s, t), void 0, null);
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
      var t = ha(e, Ye);
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
        lastRenderedReducer: vS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = bb.bind(null, Ut, a);
      return [t.memoizedState, i];
    }
    function SS(e) {
      return mS(vS);
    }
    function ES(e) {
      return yS(vS);
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
    function CS(e) {
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
          if (pS(s, h)) {
            u.memoizedState = mp(t, a, f, s);
            return;
          }
        }
      }
      Ut.flags |= e, u.memoizedState = mp(Yn | t, a, f, s);
    }
    function mm(e, t) {
      return (Ut.mode & oa) !== $e ? yp(xl | Kt | Hi, mr, e, t) : yp(Kt | Hi, mr, e, t);
    }
    function gp(e, t) {
      return hm(Kt, mr, e, t);
    }
    function TS(e, t) {
      return yp(lt, tl, e, t);
    }
    function ym(e, t) {
      return hm(lt, tl, e, t);
    }
    function xS(e, t) {
      var a = lt;
      return a |= br, (Ut.mode & oa) !== $e && (a |= Dr), yp(a, Qn, e, t);
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
      return u |= br, (Ut.mode & oa) !== $e && (u |= Dr), yp(u, Qn, VC.bind(null, t, e), i);
    }
    function Sm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return hm(lt, Qn, VC.bind(null, t, e), i);
    }
    function Tb(e, t) {
    }
    var Em = Tb;
    function wS(e, t) {
      var a = nl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Cm(e, t) {
      var a = Ga(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (pS(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function bS(e, t) {
      var a = nl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Tm(e, t) {
      var a = Ga(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (pS(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function DS(e) {
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
      var i = !Ny(fs);
      if (i) {
        if (!we(a, t)) {
          var u = Sd();
          Ut.lanes = ut(Ut.lanes, u), zp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Tp()), e.memoizedState = a, a;
    }
    function xb(e, t, a) {
      var i = ca();
      Dn(lr(i, In)), e(!0);
      var u = pp.transition;
      pp.transition = {};
      var s = pp.transition;
      pp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Dn(i), pp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function _S() {
      var e = pm(!1), t = e[0], a = e[1], i = xb.bind(null, a), u = nl();
      return u.memoizedState = i, [t, i];
    }
    function $C() {
      var e = SS(), t = e[0], a = Ga(), i = a.memoizedState;
      return [t, i];
    }
    function IC() {
      var e = ES(), t = e[0], a = Ga(), i = a.memoizedState;
      return [t, i];
    }
    var YC = !1;
    function Rb() {
      return YC;
    }
    function kS() {
      var e = nl(), t = Pm(), a = t.identifierPrefix, i;
      if (hr()) {
        var u = Hw();
        i = ":" + a + "R" + u;
        var s = hp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Sb++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function xm() {
      var e = Ga(), t = e.memoizedState;
      return t;
    }
    function wb(e, t, a) {
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
          var f = Gr();
          Zn(s, e, i, f), GC(s, t, i);
        }
      }
      qC(e, i);
    }
    function bb(e, t, a) {
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
              var h = t.lastRenderedState, E = f(h, a);
              if (u.hasEagerState = !0, u.eagerState = E, we(E, h)) {
                ab(e, t, u, i);
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
          var O = Gr();
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
    var Rm = {
      readContext: jn,
      useCallback: Ar,
      useContext: Ar,
      useEffect: Ar,
      useImperativeHandle: Ar,
      useInsertionEffect: Ar,
      useLayoutEffect: Ar,
      useMemo: Ar,
      useReducer: Ar,
      useRef: Ar,
      useState: Ar,
      useDebugValue: Ar,
      useDeferredValue: Ar,
      useTransition: Ar,
      useMutableSource: Ar,
      useSyncExternalStore: Ar,
      useId: Ar,
      unstable_isNewReconciler: re
    }, XC = null, KC = null, ZC = null, JC = null, rl = null, Ti = null, wm = null;
    {
      var OS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      XC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", Ot(), af(t), wS(e, t);
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
          return W = "useInsertionEffect", Ot(), af(t), TS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", Ot(), af(t), xS(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", Ot(), af(t);
          var a = he.current;
          he.current = rl;
          try {
            return bS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", Ot();
          var i = he.current;
          he.current = rl;
          try {
            return hS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", Ot(), CS(e);
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
          return W = "useDeferredValue", Ot(), DS(e);
        },
        useTransition: function() {
          return W = "useTransition", Ot(), _S();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", Ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", Ot(), gS(e, t, a);
        },
        useId: function() {
          return W = "useId", Ot(), kS();
        },
        unstable_isNewReconciler: re
      }, KC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", oe(), wS(e, t);
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
          return W = "useInsertionEffect", oe(), TS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", oe(), xS(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", oe();
          var a = he.current;
          he.current = rl;
          try {
            return bS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", oe();
          var i = he.current;
          he.current = rl;
          try {
            return hS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", oe(), CS(e);
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
          return W = "useDeferredValue", oe(), DS(e);
        },
        useTransition: function() {
          return W = "useTransition", oe(), _S();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", oe(), gS(e, t, a);
        },
        useId: function() {
          return W = "useId", oe(), kS();
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
          he.current = Ti;
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
          return W = "useId", oe(), xm();
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
            return yS(e, t, a);
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
            return ES(e);
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
          return W = "useId", oe(), xm();
        },
        unstable_isNewReconciler: re
      }, rl = {
        readContext: function(e) {
          return OS(), jn(e);
        },
        useCallback: function(e, t) {
          return W = "useCallback", tt(), Ot(), wS(e, t);
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
          return W = "useInsertionEffect", tt(), Ot(), TS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return W = "useLayoutEffect", tt(), Ot(), xS(e, t);
        },
        useMemo: function(e, t) {
          W = "useMemo", tt(), Ot();
          var a = he.current;
          he.current = rl;
          try {
            return bS(e, t);
          } finally {
            he.current = a;
          }
        },
        useReducer: function(e, t, a) {
          W = "useReducer", tt(), Ot();
          var i = he.current;
          he.current = rl;
          try {
            return hS(e, t, a);
          } finally {
            he.current = i;
          }
        },
        useRef: function(e) {
          return W = "useRef", tt(), Ot(), CS(e);
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
          return W = "useDeferredValue", tt(), Ot(), DS(e);
        },
        useTransition: function() {
          return W = "useTransition", tt(), Ot(), _S();
        },
        useMutableSource: function(e, t, a) {
          return W = "useMutableSource", tt(), Ot(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return W = "useSyncExternalStore", tt(), Ot(), gS(e, t, a);
        },
        useId: function() {
          return W = "useId", tt(), Ot(), kS();
        },
        unstable_isNewReconciler: re
      }, Ti = {
        readContext: function(e) {
          return OS(), jn(e);
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
          return W = "useId", tt(), oe(), xm();
        },
        unstable_isNewReconciler: re
      }, wm = {
        readContext: function(e) {
          return OS(), jn(e);
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
            return yS(e, t, a);
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
            return ES(e);
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
          return W = "useId", tt(), oe(), xm();
        },
        unstable_isNewReconciler: re
      };
    }
    var Zu = S.unstable_now, e1 = 0, bm = -1, Sp = -1, Dm = -1, LS = !1, _m = !1;
    function t1() {
      return LS;
    }
    function Db() {
      _m = !0;
    }
    function _b() {
      LS = !1, _m = !1;
    }
    function kb() {
      LS = _m, _m = !1;
    }
    function n1() {
      return e1;
    }
    function r1() {
      e1 = Zu();
    }
    function MS(e) {
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
    function NS(e) {
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
    function zS() {
      Dm = Zu();
    }
    function AS(e) {
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
    function US(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Ob(e, t) {
      return !0;
    }
    function FS(e, t) {
      try {
        var a = Ob(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === G)
            return;
          console.error(i);
        }
        var v = u ? rt(u) : null, h = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === I)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = rt(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var O = h + `
` + f + `

` + ("" + E);
        console.error(O);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var Lb = typeof WeakMap == "function" ? WeakMap : Map;
    function i1(e, t, a) {
      var i = ql(It, a);
      i.tag = Fg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        x_(u), FS(e, t);
      }, i;
    }
    function HS(e, t, a) {
      var i = ql(It, a);
      i.tag = Fg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          mT(e), FS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        mT(e), FS(e, t), typeof u != "function" && C_(this);
        var h = t.value, E = t.stack;
        this.componentDidCatch(h, {
          componentStack: E !== null ? E : ""
        }), typeof u != "function" && (Mr(e.lanes, Ye) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", rt(e) || "Unknown"));
      }), i;
    }
    function l1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Lb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = R_.bind(null, e, t, a);
        $n && Ap(e, a), t.then(s, s);
      }
    }
    function Mb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Nb(e, t) {
      var a = e.tag;
      if ((e.mode & ct) === $e && (a === $ || a === Ee || a === qe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function u1(e) {
      var t = e;
      do {
        if (t.tag === Y && yb(t))
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
          if (e.flags |= Xe, a.flags |= zo, a.flags &= ~(Ys | jr), a.tag === G) {
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
    function zb(e, t, a, i, u) {
      if (a.flags |= jr, $n && Ap(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Nb(a), hr() && a.mode & ct && ZE();
        var f = u1(t);
        if (f !== null) {
          f.flags &= ~sn, o1(f, t, a, e, u), f.mode & ct && l1(e, s, u), Mb(f, e, s);
          return;
        } else {
          if (!bu(u)) {
            l1(e, s, u), y0();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (hr() && a.mode & ct) {
        ZE();
        var h = u1(t);
        if (h !== null) {
          (h.flags & An) === He && (h.flags |= sn), o1(h, t, a, e, u), Og(ds(i, a));
          return;
        }
      }
      i = ds(i, a), p_(i);
      var E = t;
      do {
        switch (E.tag) {
          case I: {
            var T = i;
            E.flags |= An;
            var O = bn(u);
            E.lanes = ut(E.lanes, O);
            var _ = i1(E, T, O);
            jg(E, _);
            return;
          }
          case G:
            var U = i, F = E.type, j = E.stateNode;
            if ((E.flags & Xe) === He && (typeof F.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !uT(j))) {
              E.flags |= An;
              var me = bn(u);
              E.lanes = ut(E.lanes, me);
              var Be = HS(E, U, me);
              jg(E, Be);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function Ab() {
      return null;
    }
    var Ep = m.ReactCurrentOwner, xi = !1, VS, Cp, jS, BS, PS, ps, $S, Om;
    VS = {}, Cp = {}, jS = {}, BS = {}, PS = {}, ps = !1, $S = {}, Om = {};
    function Qr(e, t, a, i) {
      e === null ? t.child = bC(t, null, a, i) : t.child = Jc(t, e.child, a, i);
    }
    function Ub(e, t, a, i) {
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
      var f = a.render, v = t.ref, h, E;
      Zc(t, u), $i(t);
      {
        if (Ep.current = t, wa(!0), h = lf(e, t, f, i, v, u), E = uf(), t.mode & nn) {
          wn(!0);
          try {
            h = lf(e, t, f, i, v, u), E = uf();
          } finally {
            wn(!1);
          }
        }
        wa(!1);
      }
      return Rl(), e !== null && !xi ? (LC(e, t, u), Xl(e, t, u)) : (hr() && E && Rg(t), t.flags |= Ui, Qr(e, t, h, u), t.child);
    }
    function c1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (B_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = hf(s), t.tag = qe, t.type = f, QS(t, s), f1(e, t, f, i, u);
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
        var h = _0(a.type, null, i, t, t.mode, u);
        return h.ref = t.ref, h.return = t, t.child = h, h;
      }
      {
        var E = a.type, T = E.propTypes;
        T && yi(
          T,
          i,
          // Resolved props
          "prop",
          Pt(E)
        );
      }
      var O = e.child, _ = ZS(e, u);
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
        if (s.$$typeof === dr) {
          var f = s, v = f._payload, h = f._init;
          try {
            s = h(v);
          } catch {
            s = null;
          }
          var E = s && s.propTypes;
          E && yi(
            E,
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
          if (xi = !1, t.pendingProps = i = T, ZS(e, u))
            (e.flags & zo) !== He && (xi = !0);
          else
            return t.lanes = e.lanes, Xl(e, t, u);
      }
      return IS(e, t, a, i, u);
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
        } else if (Mr(a, Lr)) {
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
            var E = s.baseLanes;
            h = ut(E, a);
          } else
            h = a;
          t.lanes = t.childLanes = Lr;
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
      return Qr(e, t, u, a), t.child;
    }
    function Fb(e, t, a) {
      var i = t.pendingProps;
      return Qr(e, t, i, a), t.child;
    }
    function Hb(e, t, a) {
      var i = t.pendingProps.children;
      return Qr(e, t, i, a), t.child;
    }
    function Vb(e, t, a) {
      {
        t.flags |= lt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Qr(e, t, s, a), t.child;
    }
    function p1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= wr, t.flags |= rd);
    }
    function IS(e, t, a, i, u) {
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
      var h, E;
      Zc(t, u), $i(t);
      {
        if (Ep.current = t, wa(!0), h = lf(e, t, a, i, f, u), E = uf(), t.mode & nn) {
          wn(!0);
          try {
            h = lf(e, t, a, i, f, u), E = uf();
          } finally {
            wn(!1);
          }
        }
        wa(!1);
      }
      return Rl(), e !== null && !xi ? (LC(e, t, u), Xl(e, t, u)) : (hr() && E && Rg(t), t.flags |= Ui, Qr(e, t, h, u), t.child);
    }
    function v1(e, t, a, i, u) {
      {
        switch (nk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), h = v.state;
            s.updater.enqueueSetState(s, h, null);
            break;
          }
          case !0: {
            t.flags |= Xe, t.flags |= An;
            var E = new Error("Simulated error coming from DevTools"), T = bn(u);
            t.lanes = ut(t.lanes, T);
            var O = HS(t, ds(E, t), T);
            jg(t, O);
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
      F === null ? (Mm(e, t), CC(t, a, i), Zg(t, a, i, u), j = !0) : e === null ? j = fb(t, a, i, u) : j = db(e, t, a, i, u);
      var me = YS(e, t, a, j, U, u);
      {
        var Be = t.stateNode;
        j && Be.props !== i && (ps || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", rt(t) || "a component"), ps = !0);
      }
      return me;
    }
    function YS(e, t, a, i, u, s) {
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
          if (wa(!0), h = v.render(), t.mode & nn) {
            wn(!0);
            try {
              v.render();
            } finally {
              wn(!1);
            }
          }
          wa(!1);
        }
        Rl();
      }
      return t.flags |= Ui, e !== null && f ? Ub(e, t, h, s) : Qr(e, t, h, s), t.memoizedState = v.state, u && GE(t, a, !0), t.child;
    }
    function h1(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), aS(e, t.containerInfo);
    }
    function jb(e, t, a) {
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
        }, E = t.updateQueue;
        if (E.baseState = h, t.memoizedState = h, t.flags & sn) {
          var T = ds(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return m1(e, t, v, a, T);
        } else if (v !== s) {
          var O = ds(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return m1(e, t, v, a, O);
        } else {
          Iw(t);
          var _ = bC(t, null, v, a);
          t.child = _;
          for (var U = _; U; )
            U.flags = U.flags & ~Qt | ia, U = U.sibling;
        }
      } else {
        if (Xc(), v === s)
          return Xl(e, t, a);
        Qr(e, t, v, a);
      }
      return t.child;
    }
    function m1(e, t, a, i, u) {
      return Xc(), Og(u), t.flags |= sn, Qr(e, t, a, i), t.child;
    }
    function Bb(e, t, a) {
      _C(t), e === null && kg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, v = cg(i, u);
      return v ? f = null : s !== null && cg(i, s) && (t.flags |= kt), p1(e, t), Qr(e, t, f, a), t.child;
    }
    function Pb(e, t) {
      return e === null && kg(t), null;
    }
    function $b(e, t, a, i) {
      Mm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, v = s._init, h = v(f);
      t.type = h;
      var E = t.tag = P_(h), T = Ei(h, u), O;
      switch (E) {
        case $:
          return QS(t, h), t.type = h = hf(h), O = IS(null, t, h, T, i), O;
        case G:
          return t.type = h = T0(h), O = v1(null, t, h, T, i), O;
        case Ee:
          return t.type = h = x0(h), O = s1(null, t, h, T, i), O;
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
      throw h !== null && typeof h == "object" && h.$$typeof === dr && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + h + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function Ib(e, t, a, i, u) {
      Mm(e, t), t.tag = G;
      var s;
      return el(a) ? (s = !0, Ph(t)) : s = !1, Zc(t, u), CC(t, a, i), Zg(t, a, i, u), YS(null, t, a, !0, s, u);
    }
    function Yb(e, t, a, i) {
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
          var E = Pt(a) || "Unknown";
          VS[E] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), VS[E] = !0);
        }
        t.mode & nn && Si.recordLegacyContextWarning(t, null), wa(!0), Ep.current = t, v = lf(null, t, a, u, s, i), h = uf(), wa(!1);
      }
      if (Rl(), t.flags |= Ui, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
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
        return el(a) ? (_ = !0, Ph(t)) : _ = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Vg(t), EC(t, v), Zg(t, a, u, i), YS(null, t, a, !0, _, i);
      } else {
        if (t.tag = $, t.mode & nn) {
          wn(!0);
          try {
            v = lf(null, t, a, u, s, i), h = uf();
          } finally {
            wn(!1);
          }
        }
        return hr() && h && Rg(t), Qr(null, t, v, i), QS(t, a), t.child;
      }
    }
    function QS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ta();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), PS[u] || (PS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Pt(t) || "Unknown";
          BS[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), BS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Pt(t) || "Unknown";
          jS[v] || (g("%s: Function components do not support contextType.", v), jS[v] = !0);
        }
      }
    }
    var WS = {
      dehydrated: null,
      treeContext: null,
      retryLane: mt
    };
    function GS(e) {
      return {
        baseLanes: e,
        cachePool: Ab(),
        transitions: null
      };
    }
    function Qb(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Wb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return uS(e, dp);
    }
    function Gb(e, t) {
      return Du(e.childLanes, t);
    }
    function y1(e, t, a) {
      var i = t.pendingProps;
      rk(t) && (t.flags |= Xe);
      var u = Ci.current, s = !1, f = (t.flags & Xe) !== He;
      if (f || Wb(u, e) ? (s = !0, t.flags &= ~Xe) : (e === null || e.memoizedState !== null) && (u = mb(u, OC)), u = tf(u), Xu(t, u), e === null) {
        kg(t);
        var v = t.memoizedState;
        if (v !== null) {
          var h = v.dehydrated;
          if (h !== null)
            return Jb(t, h);
        }
        var E = i.children, T = i.fallback;
        if (s) {
          var O = qb(t, E, T, a), _ = t.child;
          return _.memoizedState = GS(a), t.memoizedState = WS, O;
        } else
          return qS(t, E);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var F = U.dehydrated;
          if (F !== null)
            return eD(e, t, f, i, F, U, a);
        }
        if (s) {
          var j = i.fallback, me = i.children, Be = Kb(e, t, me, j, a), Me = t.child, gt = e.child.memoizedState;
          return Me.memoizedState = gt === null ? GS(a) : Qb(gt, a), Me.childLanes = Gb(e, a), t.memoizedState = WS, Be;
        } else {
          var ht = i.children, M = Xb(e, t, ht, a);
          return t.memoizedState = null, M;
        }
      }
    }
    function qS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = XS(u, i);
      return s.return = e, e.child = s, s;
    }
    function qb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, v, h;
      return (u & ct) === $e && s !== null ? (v = s, v.childLanes = P, v.pendingProps = f, e.mode & Ie && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), h = ao(a, u, i, null)) : (v = XS(f, u), h = ao(a, u, i, null)), v.return = e, h.return = e, v.sibling = h, e.child = v, h;
    }
    function XS(e, t, a) {
      return gT(e, t, P, null);
    }
    function g1(e, t) {
      return gs(e, t);
    }
    function Xb(e, t, a, i) {
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
    function Kb(e, t, a, i, u) {
      var s = t.mode, f = e.child, v = f.sibling, h = {
        mode: "hidden",
        children: a
      }, E;
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
        E = T, E.childLanes = P, E.pendingProps = h, t.mode & Ie && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = f.selfBaseDuration, E.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        E = g1(f, h), E.subtreeFlags = f.subtreeFlags & Pn;
      var O;
      return v !== null ? O = gs(v, i) : (O = ao(i, s, u, null), O.flags |= Qt), O.return = t, E.return = t, E.sibling = O, t.child = E, O;
    }
    function Lm(e, t, a, i) {
      i !== null && Og(i), Jc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = qS(t, s);
      return f.flags |= Qt, t.memoizedState = null, f;
    }
    function Zb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, v = XS(f, s), h = ao(i, s, u, null);
      return h.flags |= Qt, v.return = t, h.return = t, v.sibling = h, t.child = v, (t.mode & ct) !== $e && Jc(t, e.child, null, u), h;
    }
    function Jb(e, t, a) {
      return (e.mode & ct) === $e ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ye) : vg(t) ? e.lanes = Dl : e.lanes = Lr, null;
    }
    function eD(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & sn) {
          t.flags &= ~sn;
          var M = US(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Lm(e, t, f, M);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Xe, null;
          var B = i.children, N = i.fallback, ee = Zb(e, t, B, N, f), ye = t.child;
          return ye.memoizedState = GS(f), t.memoizedState = WS, ee;
        }
      else {
        if (Pw(), (t.mode & ct) === $e)
          return Lm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (vg(u)) {
          var v, h, E;
          {
            var T = iw(u);
            v = T.digest, h = T.message, E = T.stack;
          }
          var O;
          h ? O = new Error(h) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = US(O, v, E);
          return Lm(e, t, f, _);
        }
        var U = Mr(f, e.childLanes);
        if (xi || U) {
          var F = Pm();
          if (F !== null) {
            var j = Ay(F, f);
            if (j !== mt && j !== s.retryLane) {
              s.retryLane = j;
              var me = It;
              ha(e, j), Zn(F, e, j, me);
            }
          }
          y0();
          var Be = US(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Lm(e, t, f, Be);
        } else if (jE(u)) {
          t.flags |= Xe, t.child = e.child;
          var Me = w_.bind(null, e);
          return lw(u, Me), null;
        } else {
          Yw(t, u, s.treeContext);
          var gt = i.children, ht = qS(t, gt);
          return ht.flags |= ia, ht;
        }
      }
    }
    function S1(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ut(i.lanes, t)), Ag(e.return, t, a);
    }
    function tD(e, t, a) {
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
    function nD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && cm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function rD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !$S[e])
        if ($S[e] = !0, typeof e == "string")
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
    function aD(e, t) {
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
    function iD(e, t) {
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
    function KS(e, t, a, i, u) {
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
      rD(u), aD(s, u), iD(f, u), Qr(e, t, f, a);
      var v = Ci.current, h = uS(v, dp);
      if (h)
        v = oS(v, dp), t.flags |= Xe;
      else {
        var E = e !== null && (e.flags & Xe) !== He;
        E && tD(t, t.child, a), v = tf(v);
      }
      if (Xu(t, v), (t.mode & ct) === $e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var T = nD(t.child), O;
            T === null ? (O = t.child, t.child = null) : (O = T.sibling, T.sibling = null), KS(
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
            KS(
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
            KS(
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
    function lD(e, t, a) {
      aS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Jc(t, null, i, a) : Qr(e, t, i, a), t.child;
    }
    var T1 = !1;
    function uD(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
      {
        "value" in s || T1 || (T1 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var h = t.type.propTypes;
        h && yi(h, s, "prop", "Context.Provider");
      }
      if (sC(t, u, v), f !== null) {
        var E = f.value;
        if (we(E, v)) {
          if (f.children === s.children && !jh())
            return Xl(e, t, a);
        } else
          tb(t, u, a);
      }
      var T = s.children;
      return Qr(e, t, T, a), t.child;
    }
    var x1 = !1;
    function oD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (x1 || (x1 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Zc(t, a);
      var f = jn(i);
      $i(t);
      var v;
      return Ep.current = t, wa(!0), v = s(f), wa(!1), Rl(), t.flags |= Ui, Qr(e, t, v, a), t.child;
    }
    function Tp() {
      xi = !0;
    }
    function Mm(e, t) {
      (t.mode & ct) === $e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Qt);
    }
    function Xl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), a1(), zp(t.lanes), Mr(a, t.childLanes) ? (pb(e, t), t.child) : null;
    }
    function sD(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= bt) : s.push(e), a.flags |= Qt, a;
      }
    }
    function ZS(e, t) {
      var a = e.lanes;
      return !!Mr(a, t);
    }
    function cD(e, t, a) {
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
          aS(t, t.stateNode.containerInfo);
          break;
        case Le: {
          var u = t.memoizedProps.value, s = t.type._context;
          sC(t, s, u);
          break;
        }
        case je:
          {
            var f = Mr(a, t.childLanes);
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
            var E = t.child, T = E.childLanes;
            if (Mr(a, T))
              return y1(e, t, a);
            Xu(t, tf(Ci.current));
            var O = Xl(e, t, a);
            return O !== null ? O.sibling : null;
          } else
            Xu(t, tf(Ci.current));
          break;
        }
        case ot: {
          var _ = (e.flags & Xe) !== He, U = Mr(a, t.childLanes);
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
    function R1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return sD(e, t, _0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || jh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          xi = !0;
        else {
          var s = ZS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Xe) === He)
            return xi = !1, cD(e, t, a);
          (e.flags & zo) !== He ? xi = !0 : xi = !1;
        }
      } else if (xi = !1, hr() && Uw(t)) {
        var f = t.index, v = Fw();
        KE(t, v, f);
      }
      switch (t.lanes = P, t.tag) {
        case pe:
          return Yb(e, t, t.type, a);
        case en: {
          var h = t.elementType;
          return $b(e, t, h, a);
        }
        case $: {
          var E = t.type, T = t.pendingProps, O = t.elementType === E ? T : Ei(E, T);
          return IS(e, t, E, O, a);
        }
        case G: {
          var _ = t.type, U = t.pendingProps, F = t.elementType === _ ? U : Ei(_, U);
          return v1(e, t, _, F, a);
        }
        case I:
          return jb(e, t, a);
        case ie:
          return Bb(e, t, a);
        case xe:
          return Pb(e, t);
        case Y:
          return y1(e, t, a);
        case q:
          return lD(e, t, a);
        case Ee: {
          var j = t.type, me = t.pendingProps, Be = t.elementType === j ? me : Ei(j, me);
          return s1(e, t, j, Be, a);
        }
        case Ve:
          return Fb(e, t, a);
        case Ze:
          return Hb(e, t, a);
        case je:
          return Vb(e, t, a);
        case Le:
          return uD(e, t, a);
        case Mt:
          return oD(e, t, a);
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
          return Ib(e, t, B, ee, a);
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
      e.flags |= wr, e.flags |= rd;
    }
    var b1, JS, D1, _1;
    b1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === xe)
          NR(e, u.stateNode);
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
    }, JS = function(e, t) {
    }, D1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, v = iS(), h = AR(f, a, s, i, u, v);
        t.updateQueue = h, h && of(t);
      }
    }, _1 = function(e, t, a, i) {
      a !== i && of(t);
    };
    function xp(e, t) {
      if (!hr())
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
    function yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = He;
      if (t) {
        if ((e.mode & Ie) !== $e) {
          for (var h = e.selfBaseDuration, E = e.child; E !== null; )
            a = ut(a, ut(E.lanes, E.childLanes)), i |= E.subtreeFlags & Pn, i |= E.flags & Pn, h += E.treeBaseDuration, E = E.sibling;
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
    function fD(e, t, a) {
      if (Xw() && (t.mode & ct) !== $e && (t.flags & Xe) === He)
        return aC(t), Xc(), t.flags |= sn | jr | An, !1;
      var i = Wh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Gw(t), yr(t), (t.mode & Ie) !== $e) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Xc(), (t.flags & Xe) === He && (t.memoizedState = null), t.flags |= lt, yr(t), (t.mode & Ie) !== $e) {
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
      switch (wg(t), t.tag) {
        case pe:
        case en:
        case qe:
        case $:
        case Ee:
        case Ve:
        case Ze:
        case je:
        case Mt:
        case ft:
          return yr(t), null;
        case G: {
          var u = t.type;
          return el(u) && Bh(t), yr(t), null;
        }
        case I: {
          var s = t.stateNode;
          if (ef(t), Cg(t), cS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Wh(t);
            if (f)
              of(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & sn) !== He) && (t.flags |= aa, iC());
            }
          }
          return JS(e, t), yr(t), null;
        }
        case ie: {
          lS(t);
          var h = DC(), E = t.type;
          if (e !== null && t.stateNode != null)
            D1(e, t, E, i, h), e.ref !== t.ref && w1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return yr(t), null;
            }
            var T = iS(), O = Wh(t);
            if (O)
              Qw(t, h, T) && of(t);
            else {
              var _ = MR(E, i, h, T, t);
              b1(_, t, !1, !1), t.stateNode = _, zR(_, E, i, h) && of(t);
            }
            t.ref !== null && w1(t);
          }
          return yr(t), null;
        }
        case xe: {
          var U = i;
          if (e && t.stateNode != null) {
            var F = e.memoizedProps;
            _1(e, t, F, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = DC(), me = iS(), Be = Wh(t);
            Be ? Ww(t) && of(t) : t.stateNode = UR(U, j, me, t);
          }
          return yr(t), null;
        }
        case Y: {
          nf(t);
          var Me = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var gt = fD(e, t, Me);
            if (!gt)
              return t.flags & An ? t : null;
          }
          if ((t.flags & Xe) !== He)
            return t.lanes = a, (t.mode & Ie) !== $e && AS(t), t;
          var ht = Me !== null, M = e !== null && e.memoizedState !== null;
          if (ht !== M && ht) {
            var B = t.child;
            if (B.flags |= Fi, (t.mode & ct) !== $e) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !te);
              N || uS(Ci.current, OC) ? d_() : y0();
            }
          }
          var ee = t.updateQueue;
          if (ee !== null && (t.flags |= lt), yr(t), (t.mode & Ie) !== $e && ht) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case q:
          return ef(t), JS(e, t), e === null && kw(t.stateNode.containerInfo), yr(t), null;
        case Le:
          var de = t.type._context;
          return zg(de, t), yr(t), null;
        case Nt: {
          var Ge = t.type;
          return el(Ge) && Bh(t), yr(t), null;
        }
        case ot: {
          nf(t);
          var nt = t.memoizedState;
          if (nt === null)
            return yr(t), null;
          var Ft = (t.flags & Xe) !== He, Tt = nt.rendering;
          if (Tt === null)
            if (Ft)
              xp(nt, !1);
            else {
              var On = v_() && (e === null || (e.flags & Xe) === He);
              if (!On)
                for (var xt = t.child; xt !== null; ) {
                  var Tn = cm(xt);
                  if (Tn !== null) {
                    Ft = !0, t.flags |= Xe, xp(nt, !1);
                    var Ur = Tn.updateQueue;
                    return Ur !== null && (t.updateQueue = Ur, t.flags |= lt), t.subtreeFlags = He, vb(t, a), Xu(t, oS(Ci.current, dp)), t.child;
                  }
                  xt = xt.sibling;
                }
              nt.tail !== null && tn() > X1() && (t.flags |= Xe, Ft = !0, xp(nt, !1), t.lanes = md);
            }
          else {
            if (!Ft) {
              var Tr = cm(Tt);
              if (Tr !== null) {
                t.flags |= Xe, Ft = !0;
                var Na = Tr.updateQueue;
                if (Na !== null && (t.updateQueue = Na, t.flags |= lt), xp(nt, !0), nt.tail === null && nt.tailMode === "hidden" && !Tt.alternate && !hr())
                  return yr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                tn() * 2 - nt.renderingStartTime > X1() && a !== Lr && (t.flags |= Xe, Ft = !0, xp(nt, !1), t.lanes = md);
            }
            if (nt.isBackwards)
              Tt.sibling = t.child, t.child = Tt;
            else {
              var qr = nt.last;
              qr !== null ? qr.sibling = Tt : t.child = Tt, nt.last = Tt;
            }
          }
          if (nt.tail !== null) {
            var Xr = nt.tail;
            nt.rendering = Xr, nt.tail = Xr.sibling, nt.renderingStartTime = tn(), Xr.sibling = null;
            var Fr = Ci.current;
            return Ft ? Fr = oS(Fr, dp) : Fr = tf(Fr), Xu(t, Fr), Xr;
          }
          return yr(t), null;
        }
        case Qe:
          break;
        case fe:
        case Ne: {
          m0(t);
          var tu = t.memoizedState, mf = tu !== null;
          if (e !== null) {
            var Vp = e.memoizedState, ol = Vp !== null;
            ol !== mf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !z && (t.flags |= Fi);
          }
          return !mf || (t.mode & ct) === $e ? yr(t) : Mr(ul, Lr) && (yr(t), t.subtreeFlags & (Qt | lt) && (t.flags |= Fi)), null;
        }
        case Rt:
          return null;
        case et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function dD(e, t, a) {
      switch (wg(t), t.tag) {
        case G: {
          var i = t.type;
          el(i) && Bh(t);
          var u = t.flags;
          return u & An ? (t.flags = u & ~An | Xe, (t.mode & Ie) !== $e && AS(t), t) : null;
        }
        case I: {
          t.stateNode, ef(t), Cg(t), cS();
          var s = t.flags;
          return (s & An) !== He && (s & Xe) === He ? (t.flags = s & ~An | Xe, t) : null;
        }
        case ie:
          return lS(t), null;
        case Y: {
          nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Xc();
          }
          var v = t.flags;
          return v & An ? (t.flags = v & ~An | Xe, (t.mode & Ie) !== $e && AS(t), t) : null;
        }
        case ot:
          return nf(t), null;
        case q:
          return ef(t), null;
        case Le:
          var h = t.type._context;
          return zg(h, t), null;
        case fe:
        case Ne:
          return m0(t), null;
        case Rt:
          return null;
        default:
          return null;
      }
    }
    function O1(e, t, a) {
      switch (wg(t), t.tag) {
        case G: {
          var i = t.type.childContextTypes;
          i != null && Bh(t);
          break;
        }
        case I: {
          t.stateNode, ef(t), Cg(t), cS();
          break;
        }
        case ie: {
          lS(t);
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
          zg(u, t);
          break;
        case fe:
        case Ne:
          m0(t);
          break;
      }
    }
    var L1 = null;
    L1 = /* @__PURE__ */ new Set();
    var Nm = !1, gr = !1, pD = typeof WeakSet == "function" ? WeakSet : Set, be = null, sf = null, cf = null;
    function vD(e) {
      Tl(null, function() {
        throw e;
      }), td();
    }
    var hD = function(e, t) {
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
        Xt(e, t, a);
      }
    }
    function e0(e, t, a) {
      try {
        hD(e, a);
      } catch (i) {
        Xt(e, t, i);
      }
    }
    function mD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Xt(e, t, i);
      }
    }
    function N1(e, t) {
      try {
        A1(e);
      } catch (a) {
        Xt(e, t, a);
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
            Xt(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", rt(e));
        } else
          a.current = null;
    }
    function zm(e, t, a) {
      try {
        a();
      } catch (i) {
        Xt(e, t, i);
      }
    }
    var z1 = !1;
    function yD(e, t) {
      OR(e.containerInfo), be = t, gD();
      var a = z1;
      return z1 = !1, a;
    }
    function gD() {
      for (; be !== null; ) {
        var e = be, t = e.child;
        (e.subtreeFlags & Su) !== He && t !== null ? (t.return = e, be = t) : SD();
      }
    }
    function SD() {
      for (; be !== null; ) {
        var e = be;
        At(e);
        try {
          ED(e);
        } catch (a) {
          Xt(e, e.return, a);
        }
        Rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, be = t;
          return;
        }
        be = e.return;
      }
    }
    function ED(e) {
      var t = e.alternate, a = e.flags;
      if ((a & aa) !== He) {
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
              tw(h.containerInfo);
            }
            break;
          }
          case ie:
          case xe:
          case q:
          case Nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Rn();
      }
    }
    function Ri(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var v = f.destroy;
            f.destroy = void 0, v !== void 0 && ((e & mr) !== ma ? Js(t) : (e & Qn) !== ma && ec(t), (e & tl) !== ma && Up(!0), zm(t, a, v), (e & tl) !== ma && Up(!1), (e & mr) !== ma ? Qv() : (e & Qn) !== ma && Eu());
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
            (e & mr) !== ma ? Yv(t) : (e & Qn) !== ma && Wv(t);
            var f = s.create;
            (e & tl) !== ma && Up(!0), s.destroy = f(), (e & tl) !== ma && Up(!1), (e & mr) !== ma ? pd() : (e & Qn) !== ma && Gv();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var h = void 0;
                (s.tag & Qn) !== He ? h = "useLayoutEffect" : (s.tag & tl) !== He ? h = "useInsertionEffect" : h = "useEffect";
                var E = void 0;
                v === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? E = `

It looks like you wrote ` + h + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + h + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + v, g("%s must not return anything besides a function, which is used for clean-up.%s", h, E);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function CD(e, t) {
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
                    var E = h.stateNode;
                    E.passiveEffectDuration += a;
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
    function TD(e, t, a, i) {
      if ((a.flags & ar) !== He)
        switch (a.tag) {
          case $:
          case Ee:
          case qe: {
            if (!gr)
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
            if (a.flags & lt && !gr)
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
              var E = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    E = a.child.stateNode;
                    break;
                  case G:
                    E = a.child.stateNode;
                    break;
                }
              hC(a, h, E);
            }
            break;
          }
          case ie: {
            var T = a.stateNode;
            if (t === null && a.flags & lt) {
              var O = a.type, _ = a.memoizedProps;
              BR(T, O, _);
            }
            break;
          }
          case xe:
            break;
          case q:
            break;
          case je: {
            {
              var U = a.memoizedProps, F = U.onCommit, j = U.onRender, me = a.stateNode.effectDuration, Be = n1(), Me = t === null ? "mount" : "update";
              t1() && (Me = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, Me, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Be);
              {
                typeof F == "function" && F(a.memoizedProps.id, Me, me, Be), S_(a);
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
            OD(e, a);
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
      gr || a.flags & wr && A1(a);
    }
    function xD(e) {
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
          typeof t.componentDidMount == "function" && mD(e, e.return, t), N1(e, e.return);
          break;
        }
        case ie: {
          N1(e, e.return);
          break;
        }
      }
    }
    function RD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? KR(u) : JR(i.stateNode, i.memoizedProps);
            } catch (f) {
              Xt(e, e.return, f);
            }
          }
        } else if (i.tag === xe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ZR(s) : ew(s, i.memoizedProps);
            } catch (f) {
              Xt(e, e.return, f);
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
    function wD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function U1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, U1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && Mw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function bD(e) {
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
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== xe && t.tag !== Ct; ) {
            if (t.flags & Qt || t.child === null || t.tag === q)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Qt))
            return t.stateNode;
        }
    }
    function DD(e) {
      var t = bD(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & kt && (VE(a), t.flags &= ~kt);
          var i = H1(e);
          n0(e, i, a);
          break;
        }
        case I:
        case q: {
          var u = t.stateNode.containerInfo, s = H1(e);
          t0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function t0(e, t, a) {
      var i = e.tag, u = i === ie || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? WR(a, s, t) : YR(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          t0(f, t, a);
          for (var v = f.sibling; v !== null; )
            t0(v, t, a), v = v.sibling;
        }
      }
    }
    function n0(e, t, a) {
      var i = e.tag, u = i === ie || i === xe;
      if (u) {
        var s = e.stateNode;
        t ? QR(a, s, t) : IR(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          n0(f, t, a);
          for (var v = f.sibling; v !== null; )
            n0(v, t, a), v = v.sibling;
        }
      }
    }
    var Sr = null, wi = !1;
    function _D(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ie: {
                Sr = i.stateNode, wi = !1;
                break e;
              }
              case I: {
                Sr = i.stateNode.containerInfo, wi = !0;
                break e;
              }
              case q: {
                Sr = i.stateNode.containerInfo, wi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Sr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        V1(e, t, a), Sr = null, wi = !1;
      }
      wD(a);
    }
    function eo(e, t, a) {
      for (var i = a.child; i !== null; )
        V1(e, t, i), i = i.sibling;
    }
    function V1(e, t, a) {
      switch (fd(a), a.tag) {
        case ie:
          gr || ff(a, t);
        case xe: {
          {
            var i = Sr, u = wi;
            Sr = null, eo(e, t, a), Sr = i, wi = u, Sr !== null && (wi ? qR(Sr, a.stateNode) : GR(Sr, a.stateNode));
          }
          return;
        }
        case Ct: {
          Sr !== null && (wi ? XR(Sr, a.stateNode) : pg(Sr, a.stateNode));
          return;
        }
        case q: {
          {
            var s = Sr, f = wi;
            Sr = a.stateNode.containerInfo, wi = !0, eo(e, t, a), Sr = s, wi = f;
          }
          return;
        }
        case $:
        case Ee:
        case ft:
        case qe: {
          if (!gr) {
            var v = a.updateQueue;
            if (v !== null) {
              var h = v.lastEffect;
              if (h !== null) {
                var E = h.next, T = E;
                do {
                  var O = T, _ = O.destroy, U = O.tag;
                  _ !== void 0 && ((U & tl) !== ma ? zm(a, t, _) : (U & Qn) !== ma && (ec(a), a.mode & Ie ? (il(), zm(a, t, _), al(a)) : zm(a, t, _), Eu())), T = T.next;
                } while (T !== E);
              }
            }
          }
          eo(e, t, a);
          return;
        }
        case G: {
          if (!gr) {
            ff(a, t);
            var F = a.stateNode;
            typeof F.componentWillUnmount == "function" && e0(a, t, F);
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
            var j = gr;
            gr = j || a.memoizedState !== null, eo(e, t, a), gr = j;
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
    function kD(e) {
      e.memoizedState;
    }
    function OD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && hw(s);
          }
        }
      }
    }
    function j1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new pD()), t.forEach(function(i) {
          var u = b_.bind(null, e, i);
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
    function LD(e, t, a) {
      sf = a, cf = e, At(t), B1(t, e), At(t), sf = null, cf = null;
    }
    function bi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            _D(e, t, s);
          } catch (h) {
            Xt(s, t, h);
          }
        }
      var f = dy();
      if (t.subtreeFlags & _r)
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
              Ri(tl | Yn, e, e.return), Ju(tl | Yn, e);
            } catch (Ge) {
              Xt(e, e.return, Ge);
            }
            if (e.mode & Ie) {
              try {
                il(), Ri(Qn | Yn, e, e.return);
              } catch (Ge) {
                Xt(e, e.return, Ge);
              }
              al(e);
            } else
              try {
                Ri(Qn | Yn, e, e.return);
              } catch (Ge) {
                Xt(e, e.return, Ge);
              }
          }
          return;
        }
        case G: {
          bi(t, e), ll(e), u & wr && i !== null && ff(i, i.return);
          return;
        }
        case ie: {
          bi(t, e), ll(e), u & wr && i !== null && ff(i, i.return);
          {
            if (e.flags & kt) {
              var s = e.stateNode;
              try {
                VE(s);
              } catch (Ge) {
                Xt(e, e.return, Ge);
              }
            }
            if (u & lt) {
              var f = e.stateNode;
              if (f != null) {
                var v = e.memoizedProps, h = i !== null ? i.memoizedProps : v, E = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    PR(f, T, E, h, v, e);
                  } catch (Ge) {
                    Xt(e, e.return, Ge);
                  }
              }
            }
          }
          return;
        }
        case xe: {
          if (bi(t, e), ll(e), u & lt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var O = e.stateNode, _ = e.memoizedProps, U = i !== null ? i.memoizedProps : _;
            try {
              $R(O, U, _);
            } catch (Ge) {
              Xt(e, e.return, Ge);
            }
          }
          return;
        }
        case I: {
          if (bi(t, e), ll(e), u & lt && i !== null) {
            var F = i.memoizedState;
            if (F.isDehydrated)
              try {
                vw(t.containerInfo);
              } catch (Ge) {
                Xt(e, e.return, Ge);
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
              gt || f_();
            }
          }
          if (u & lt) {
            try {
              kD(e);
            } catch (Ge) {
              Xt(e, e.return, Ge);
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
            var M = gr;
            gr = M || ht, bi(t, e), gr = M;
          } else
            bi(t, e);
          if (ll(e), u & Fi) {
            var B = e.stateNode, N = e.memoizedState, ee = N !== null, ye = e;
            if (B.isHidden = ee, ee && !ht && (ye.mode & ct) !== $e) {
              be = ye;
              for (var de = ye.child; de !== null; )
                be = de, ND(de), de = de.sibling;
            }
            RD(ye, ee);
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
      if (t & Qt) {
        try {
          DD(e);
        } catch (a) {
          Xt(e, e.return, a);
        }
        e.flags &= ~Qt;
      }
      t & ia && (e.flags &= ~ia);
    }
    function MD(e, t, a) {
      sf = a, cf = t, be = e, P1(e, t, a), sf = null, cf = null;
    }
    function P1(e, t, a) {
      for (var i = (e.mode & ct) !== $e; be !== null; ) {
        var u = be, s = u.child;
        if (u.tag === fe && i) {
          var f = u.memoizedState !== null, v = f || Nm;
          if (v) {
            r0(e, t, a);
            continue;
          } else {
            var h = u.alternate, E = h !== null && h.memoizedState !== null, T = E || gr, O = Nm, _ = gr;
            Nm = v, gr = T, gr && !_ && (be = u, zD(u));
            for (var U = s; U !== null; )
              be = U, P1(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            be = u, Nm = O, gr = _, r0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ar) !== He && s !== null ? (s.return = u, be = s) : r0(e, t, a);
      }
    }
    function r0(e, t, a) {
      for (; be !== null; ) {
        var i = be;
        if ((i.flags & ar) !== He) {
          var u = i.alternate;
          At(i);
          try {
            TD(t, u, i, a);
          } catch (f) {
            Xt(i, i.return, f);
          }
          Rn();
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
    function ND(e) {
      for (; be !== null; ) {
        var t = be, a = t.child;
        switch (t.tag) {
          case $:
          case Ee:
          case ft:
          case qe: {
            if (t.mode & Ie)
              try {
                il(), Ri(Qn, t, t.return);
              } finally {
                al(t);
              }
            else
              Ri(Qn, t, t.return);
            break;
          }
          case G: {
            ff(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && e0(t, t.return, i);
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
    function zD(e) {
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
          xD(t);
        } catch (i) {
          Xt(t, t.return, i);
        }
        if (Rn(), t === e) {
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
    function AD(e, t, a, i) {
      be = t, UD(t, e, a, i);
    }
    function UD(e, t, a, i) {
      for (; be !== null; ) {
        var u = be, s = u.child;
        (u.subtreeFlags & la) !== He && s !== null ? (s.return = u, be = s) : FD(e, t, a, i);
      }
    }
    function FD(e, t, a, i) {
      for (; be !== null; ) {
        var u = be;
        if ((u.flags & Kt) !== He) {
          At(u);
          try {
            HD(t, u, a, i);
          } catch (f) {
            Xt(u, u.return, f);
          }
          Rn();
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
    function HD(e, t, a, i) {
      switch (t.tag) {
        case $:
        case Ee:
        case qe: {
          if (t.mode & Ie) {
            zS();
            try {
              Ju(mr | Yn, t);
            } finally {
              NS(t);
            }
          } else
            Ju(mr | Yn, t);
          break;
        }
      }
    }
    function VD(e) {
      be = e, jD();
    }
    function jD() {
      for (; be !== null; ) {
        var e = be, t = e.child;
        if ((be.flags & bt) !== He) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              be = u, $D(u, e);
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
        (e.subtreeFlags & la) !== He && t !== null ? (t.return = e, be = t) : BD();
      }
    }
    function BD() {
      for (; be !== null; ) {
        var e = be;
        (e.flags & Kt) !== He && (At(e), PD(e), Rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, be = t;
          return;
        }
        be = e.return;
      }
    }
    function PD(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          e.mode & Ie ? (zS(), Ri(mr | Yn, e, e.return), NS(e)) : Ri(mr | Yn, e, e.return);
          break;
        }
      }
    }
    function $D(e, t) {
      for (; be !== null; ) {
        var a = be;
        At(a), YD(a, t), Rn();
        var i = a.child;
        i !== null ? (i.return = a, be = i) : ID(e);
      }
    }
    function ID(e) {
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
    function YD(e, t) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          e.mode & Ie ? (zS(), Ri(mr, e, t), NS(e)) : Ri(mr, e, t);
          break;
        }
      }
    }
    function QD(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          try {
            Ju(Qn | Yn, e);
          } catch (a) {
            Xt(e, e.return, a);
          }
          break;
        }
        case G: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Xt(e, e.return, a);
          }
          break;
        }
      }
    }
    function WD(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          try {
            Ju(mr | Yn, e);
          } catch (t) {
            Xt(e, e.return, t);
          }
          break;
        }
      }
    }
    function GD(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe: {
          try {
            Ri(Qn | Yn, e, e.return);
          } catch (a) {
            Xt(e, e.return, a);
          }
          break;
        }
        case G: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && e0(e, e.return, t);
          break;
        }
      }
    }
    function qD(e) {
      switch (e.tag) {
        case $:
        case Ee:
        case qe:
          try {
            Ri(mr | Yn, e, e.return);
          } catch (t) {
            Xt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Rp = Symbol.for;
      Rp("selector.component"), Rp("selector.has_pseudo_class"), Rp("selector.role"), Rp("selector.test_id"), Rp("selector.text");
    }
    var XD = [];
    function KD() {
      XD.forEach(function(e) {
        return e();
      });
    }
    var ZD = m.ReactCurrentActQueue;
    function JD(e) {
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
        return !e && ZD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var e_ = Math.ceil, a0 = m.ReactCurrentDispatcher, i0 = m.ReactCurrentOwner, Er = m.ReactCurrentBatchConfig, Di = m.ReactCurrentActQueue, qn = (
      /*             */
      0
    ), Q1 = (
      /*               */
      1
    ), Cr = (
      /*                */
      2
    ), qa = (
      /*                */
      4
    ), Kl = 0, wp = 1, vs = 2, Am = 3, bp = 4, W1 = 5, l0 = 6, yt = qn, Wr = null, hn = null, Xn = P, ul = P, u0 = Iu(P), Kn = Kl, Dp = null, Um = P, _p = P, Fm = P, kp = null, ya = null, o0 = 0, G1 = 500, q1 = 1 / 0, t_ = 500, Zl = null;
    function Op() {
      q1 = tn() + t_;
    }
    function X1() {
      return q1;
    }
    var Hm = !1, s0 = null, df = null, hs = !1, to = null, Lp = P, c0 = [], f0 = null, n_ = 50, Mp = 0, d0 = null, p0 = !1, Vm = !1, r_ = 50, pf = 0, jm = null, Np = It, Bm = P, K1 = !1;
    function Pm() {
      return Wr;
    }
    function Gr() {
      return (yt & (Cr | qa)) !== qn ? tn() : (Np !== It || (Np = tn()), Np);
    }
    function no(e) {
      var t = e.mode;
      if ((t & ct) === $e)
        return Ye;
      if ((yt & Cr) !== qn && Xn !== P)
        return bn(Xn);
      var a = Jw() !== Zw;
      if (a) {
        if (Er.transition !== null) {
          var i = Er.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Bm === mt && (Bm = Sd()), Bm;
      }
      var u = ca();
      if (u !== mt)
        return u;
      var s = FR();
      return s;
    }
    function a_(e) {
      var t = e.mode;
      return (t & ct) === $e ? Ye : zy();
    }
    function Zn(e, t, a, i) {
      __(), K1 && g("useInsertionEffect must not schedule updates."), p0 && (Vm = !0), zl(e, a, i), (yt & Cr) !== P && e === Wr ? L_(t) : ($n && Rd(e, t, a), M_(t), e === Wr && ((yt & Cr) === qn && (_p = ut(_p, a)), Kn === bp && ro(e, Xn)), ga(e, i), a === Ye && yt === qn && (t.mode & ct) === $e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Di.isBatchingLegacy && (Op(), XE()));
    }
    function i_(e, t, a) {
      var i = e.current;
      i.lanes = t, zl(e, t, a), ga(e, a);
    }
    function l_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (yt & Cr) !== qn
      );
    }
    function ga(e, t) {
      var a = e.callbackNode;
      Ly(e, t);
      var i = jo(e, e === Wr ? Xn : P);
      if (i === P) {
        a !== null && pT(a), e.callbackNode = null, e.callbackPriority = mt;
        return;
      }
      var u = En(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Di.current !== null && a !== E0)) {
        a == null && s !== Ye && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && pT(a);
      var f;
      if (u === Ye)
        e.tag === Yu ? (Di.isBatchingLegacy !== null && (Di.didScheduleLegacyUpdate = !0), Aw(eT.bind(null, e))) : qE(eT.bind(null, e)), Di.current !== null ? Di.current.push(Qu) : VR(function() {
          (yt & (Cr | qa)) === qn && Qu();
        }), f = null;
      else {
        var v;
        switch (Yo(i)) {
          case ir:
            v = Xs;
            break;
          case In:
            v = $r;
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
        f = C0(v, Z1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function Z1(e, t) {
      if (_b(), Np = It, Bm = P, (yt & (Cr | qa)) !== qn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = eu();
      if (i && e.callbackNode !== a)
        return null;
      var u = jo(e, e === Wr ? Xn : P);
      if (u === P)
        return null;
      var s = !Po(e, u) && !eh(e, u) && !t, f = s ? m_(e, u) : Im(e, u);
      if (f !== Kl) {
        if (f === vs) {
          var v = yd(e);
          v !== P && (u = v, f = v0(e, v));
        }
        if (f === wp) {
          var h = Dp;
          throw ms(e, P), ro(e, u), ga(e, tn()), h;
        }
        if (f === l0)
          ro(e, u);
        else {
          var E = !Po(e, u), T = e.current.alternate;
          if (E && !o_(T)) {
            if (f = Im(e, u), f === vs) {
              var O = yd(e);
              O !== P && (u = O, f = v0(e, O));
            }
            if (f === wp) {
              var _ = Dp;
              throw ms(e, P), ro(e, u), ga(e, tn()), _;
            }
          }
          e.finishedWork = T, e.finishedLanes = u, u_(e, f, u);
        }
      }
      return ga(e, tn()), e.callbackNode === a ? Z1.bind(null, e) : null;
    }
    function v0(e, t) {
      var a = kp;
      if (_n(e)) {
        var i = ms(e, t);
        i.flags |= sn, _w(e.containerInfo);
      }
      var u = Im(e, t);
      if (u !== vs) {
        var s = ya;
        ya = a, s !== null && J1(s);
      }
      return u;
    }
    function J1(e) {
      ya === null ? ya = e : ya.push.apply(ya, e);
    }
    function u_(e, t, a) {
      switch (t) {
        case Kl:
        case wp:
          throw new Error("Root did not complete. This is a bug in React.");
        case vs: {
          ys(e, ya, Zl);
          break;
        }
        case Am: {
          if (ro(e, a), Ec(a) && // do not delay if we're inside an act() scope
          !vT()) {
            var i = o0 + G1 - tn();
            if (i > 10) {
              var u = jo(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!Nl(s, a)) {
                Gr(), Td(e, s);
                break;
              }
              e.timeoutHandle = fg(ys.bind(null, e, ya, Zl), i);
              break;
            }
          }
          ys(e, ya, Zl);
          break;
        }
        case bp: {
          if (ro(e, a), Jv(a))
            break;
          if (!vT()) {
            var f = Zv(e, a), v = f, h = tn() - v, E = D_(h) - h;
            if (E > 10) {
              e.timeoutHandle = fg(ys.bind(null, e, ya, Zl), E);
              break;
            }
          }
          ys(e, ya, Zl);
          break;
        }
        case W1: {
          ys(e, ya, Zl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function o_(e) {
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
      if (kb(), (yt & (Cr | qa)) !== qn)
        throw new Error("Should not already be working.");
      eu();
      var t = jo(e, P);
      if (!Mr(t, Ye))
        return ga(e, tn()), null;
      var a = Im(e, t);
      if (e.tag !== Yu && a === vs) {
        var i = yd(e);
        i !== P && (t = i, a = v0(e, i));
      }
      if (a === wp) {
        var u = Dp;
        throw ms(e, P), ro(e, t), ga(e, tn()), u;
      }
      if (a === l0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ys(e, ya, Zl), ga(e, tn()), null;
    }
    function s_(e, t) {
      t !== P && (_u(e, ut(t, Ye)), ga(e, tn()), (yt & (Cr | qa)) === qn && (Op(), Qu()));
    }
    function h0(e, t) {
      var a = yt;
      yt |= Q1;
      try {
        return e(t);
      } finally {
        yt = a, yt === qn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Di.isBatchingLegacy && (Op(), XE());
      }
    }
    function c_(e, t, a, i, u) {
      var s = ca(), f = Er.transition;
      try {
        return Er.transition = null, Dn(ir), e(t, a, i, u);
      } finally {
        Dn(s), Er.transition = f, yt === qn && Op();
      }
    }
    function Jl(e) {
      to !== null && to.tag === Yu && (yt & (Cr | qa)) === qn && eu();
      var t = yt;
      yt |= Q1;
      var a = Er.transition, i = ca();
      try {
        return Er.transition = null, Dn(ir), e ? e() : void 0;
      } finally {
        Dn(i), Er.transition = a, yt = t, (yt & (Cr | qa)) === qn && Qu();
      }
    }
    function tT() {
      return (yt & (Cr | qa)) !== qn;
    }
    function $m(e, t) {
      zr(u0, ul, e), ul = ut(ul, t);
    }
    function m0(e) {
      ul = u0.current, Nr(u0, e);
    }
    function ms(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== dg && (e.timeoutHandle = dg, HR(a)), hn !== null)
        for (var i = hn.return; i !== null; ) {
          var u = i.alternate;
          O1(u, i), i = i.return;
        }
      Wr = e;
      var s = gs(e.current, null);
      return hn = s, Xn = ul = t, Kn = Kl, Dp = null, Um = P, _p = P, Fm = P, kp = null, ya = null, rb(), Si.discardPendingWarnings(), s;
    }
    function nT(e, t) {
      do {
        var a = hn;
        try {
          if (Kh(), MC(), Rn(), i0.current = null, a === null || a.return === null) {
            Kn = wp, Dp = t, hn = null;
            return;
          }
          if (Ae && a.mode & Ie && km(a, !0), at)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              qv(a, i, Xn);
            } else
              tc(a, t, Xn);
          zb(e, a.return, a, t, Xn), lT(a);
        } catch (u) {
          t = u, hn === a && a !== null ? (a = a.return, hn = a) : a = hn;
          continue;
        }
        return;
      } while (!0);
    }
    function rT() {
      var e = a0.current;
      return a0.current = Rm, e === null ? Rm : e;
    }
    function aT(e) {
      a0.current = e;
    }
    function f_() {
      o0 = tn();
    }
    function zp(e) {
      Um = ut(e, Um);
    }
    function d_() {
      Kn === Kl && (Kn = Am);
    }
    function y0() {
      (Kn === Kl || Kn === Am || Kn === vs) && (Kn = bp), Wr !== null && (Bo(Um) || Bo(_p)) && ro(Wr, Xn);
    }
    function p_(e) {
      Kn !== bp && (Kn = vs), kp === null ? kp = [e] : kp.push(e);
    }
    function v_() {
      return Kn === Kl;
    }
    function Im(e, t) {
      var a = yt;
      yt |= Cr;
      var i = rT();
      if (Wr !== e || Xn !== t) {
        if ($n) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ap(e, Xn), u.clear()), xc(e, t);
        }
        Zl = wd(), ms(e, t);
      }
      ka(t);
      do
        try {
          h_();
          break;
        } catch (s) {
          nT(e, s);
        }
      while (!0);
      if (Kh(), yt = a, aT(i), hn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Tu(), Wr = null, Xn = P, Kn;
    }
    function h_() {
      for (; hn !== null; )
        iT(hn);
    }
    function m_(e, t) {
      var a = yt;
      yt |= Cr;
      var i = rT();
      if (Wr !== e || Xn !== t) {
        if ($n) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ap(e, Xn), u.clear()), xc(e, t);
        }
        Zl = wd(), Op(), ms(e, t);
      }
      ka(t);
      do
        try {
          y_();
          break;
        } catch (s) {
          nT(e, s);
        }
      while (!0);
      return Kh(), aT(i), yt = a, hn !== null ? (Uo(), Kl) : (Tu(), Wr = null, Xn = P, Kn);
    }
    function y_() {
      for (; hn !== null && !qs(); )
        iT(hn);
    }
    function iT(e) {
      var t = e.alternate;
      At(e);
      var a;
      (e.mode & Ie) !== $e ? (MS(e), a = g0(t, e, ul), km(e, !0)) : a = g0(t, e, ul), Rn(), e.memoizedProps = e.pendingProps, a === null ? lT(e) : hn = a, i0.current = null;
    }
    function lT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & jr) === He) {
          At(t);
          var u = void 0;
          if ((t.mode & Ie) === $e ? u = k1(a, t, ul) : (MS(t), u = k1(a, t, ul), km(t, !1)), Rn(), u !== null) {
            hn = u;
            return;
          }
        } else {
          var s = dD(a, t);
          if (s !== null) {
            s.flags &= jv, hn = s;
            return;
          }
          if ((t.mode & Ie) !== $e) {
            km(t, !1);
            for (var f = t.actualDuration, v = t.child; v !== null; )
              f += v.actualDuration, v = v.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= jr, i.subtreeFlags = He, i.deletions = null;
          else {
            Kn = l0, hn = null;
            return;
          }
        }
        var h = t.sibling;
        if (h !== null) {
          hn = h;
          return;
        }
        t = i, hn = t;
      } while (t !== null);
      Kn === Kl && (Kn = W1);
    }
    function ys(e, t, a) {
      var i = ca(), u = Er.transition;
      try {
        Er.transition = null, Dn(ir), g_(e, t, a, i);
      } finally {
        Er.transition = u, Dn(i);
      }
      return null;
    }
    function g_(e, t, a, i) {
      do
        eu();
      while (to !== null);
      if (k_(), (yt & (Cr | qa)) !== qn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Zs(s), u === null)
        return dd(), null;
      if (s === P && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = mt;
      var f = ut(u.lanes, u.childLanes);
      xd(e, f), e === Wr && (Wr = null, hn = null, Xn = P), ((u.subtreeFlags & la) !== He || (u.flags & la) !== He) && (hs || (hs = !0, f0 = a, C0(Va, function() {
        return eu(), null;
      })));
      var v = (u.subtreeFlags & (Su | _r | ar | la)) !== He, h = (u.flags & (Su | _r | ar | la)) !== He;
      if (v || h) {
        var E = Er.transition;
        Er.transition = null;
        var T = ca();
        Dn(ir);
        var O = yt;
        yt |= qa, i0.current = null, yD(e, u), r1(), LD(e, u, s), LR(e.containerInfo), e.current = u, Xv(s), MD(u, e, s), Cu(), $v(), yt = O, Dn(T), Er.transition = E;
      } else
        e.current = u, r1();
      var _ = hs;
      if (hs ? (hs = !1, to = e, Lp = s) : (pf = 0, jm = null), f = e.pendingLanes, f === P && (df = null), _ || cT(e.current, !1), si(u.stateNode, i), $n && e.memoizedUpdaters.clear(), KD(), ga(e, tn()), t !== null)
        for (var U = e.onRecoverableError, F = 0; F < t.length; F++) {
          var j = t[F], me = j.stack, Be = j.digest;
          U(j.value, {
            componentStack: me,
            digest: Be
          });
        }
      if (Hm) {
        Hm = !1;
        var Me = s0;
        throw s0 = null, Me;
      }
      return Mr(Lp, Ye) && e.tag !== Yu && eu(), f = e.pendingLanes, Mr(f, Ye) ? (Db(), e === d0 ? Mp++ : (Mp = 0, d0 = e)) : Mp = 0, Qu(), dd(), null;
    }
    function eu() {
      if (to !== null) {
        var e = Yo(Lp), t = Uy(di, e), a = Er.transition, i = ca();
        try {
          return Er.transition = null, Dn(t), E_();
        } finally {
          Dn(i), Er.transition = a;
        }
      }
      return !1;
    }
    function S_(e) {
      c0.push(e), hs || (hs = !0, C0(Va, function() {
        return eu(), null;
      }));
    }
    function E_() {
      if (to === null)
        return !1;
      var e = f0;
      f0 = null;
      var t = to, a = Lp;
      if (to = null, Lp = P, (yt & (Cr | qa)) !== qn)
        throw new Error("Cannot flush passive effects while already rendering.");
      p0 = !0, Vm = !1, Kv(a);
      var i = yt;
      yt |= qa, VD(t.current), AD(t, t.current, a, e);
      {
        var u = c0;
        c0 = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          CD(t, f);
        }
      }
      Ao(), cT(t.current, !0), yt = i, Qu(), Vm ? t === jm ? pf++ : (pf = 0, jm = t) : pf = 0, p0 = !1, Vm = !1, Bi(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function uT(e) {
      return df !== null && df.has(e);
    }
    function C_(e) {
      df === null ? df = /* @__PURE__ */ new Set([e]) : df.add(e);
    }
    function T_(e) {
      Hm || (Hm = !0, s0 = e);
    }
    var x_ = T_;
    function oT(e, t, a) {
      var i = ds(a, t), u = i1(e, i, Ye), s = Gu(e, u, Ye), f = Gr();
      s !== null && (zl(s, Ye, f), ga(s, f));
    }
    function Xt(e, t, a) {
      if (vD(a), Up(!1), e.tag === I) {
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
            var f = ds(a, e), v = HS(i, f, Ye), h = Gu(i, v, Ye), E = Gr();
            h !== null && (zl(h, Ye, E), ga(h, E));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function R_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Gr();
      Td(e, a), N_(e), Wr === e && Nl(Xn, a) && (Kn === bp || Kn === Am && Ec(Xn) && tn() - o0 < G1 ? ms(e, P) : Fm = ut(Fm, a)), ga(e, u);
    }
    function sT(e, t) {
      t === mt && (t = a_(e));
      var a = Gr(), i = ha(e, t);
      i !== null && (zl(i, t, a), ga(i, a));
    }
    function w_(e) {
      var t = e.memoizedState, a = mt;
      t !== null && (a = t.retryLane), sT(e, a);
    }
    function b_(e, t) {
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
    function D_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : e_(e / 1960) * 1960;
    }
    function __() {
      if (Mp > n_)
        throw Mp = 0, d0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      pf > r_ && (pf = 0, jm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function k_() {
      Si.flushLegacyContextWarning(), Si.flushPendingUnsafeLifecycleWarnings();
    }
    function cT(e, t) {
      At(e), Ym(e, Dr, GD), t && Ym(e, xl, qD), Ym(e, Dr, QD), t && Ym(e, xl, WD), Rn();
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
        if ((yt & Cr) !== qn || !(e.mode & ct))
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
          i ? At(e) : Rn();
        }
      }
    }
    var g0;
    {
      var O_ = null;
      g0 = function(e, t, a) {
        var i = ST(O_, t);
        try {
          return R1(e, t, a);
        } catch (s) {
          if ($w() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Kh(), MC(), O1(e, t), ST(t, i), t.mode & Ie && MS(t), Tl(null, R1, null, e, t, a), ky()) {
            var u = td();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var dT = !1, S0;
    S0 = /* @__PURE__ */ new Set();
    function L_(e) {
      if (ea && !Rb())
        switch (e.tag) {
          case $:
          case Ee:
          case qe: {
            var t = hn && rt(hn) || "Unknown", a = t;
            if (!S0.has(a)) {
              S0.add(a);
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
          Rd(e, i, t);
        });
      }
    }
    var E0 = {};
    function C0(e, t) {
      {
        var a = Di.current;
        return a !== null ? (a.push(t), E0) : Gs(e, t);
      }
    }
    function pT(e) {
      if (e !== E0)
        return Pv(e);
    }
    function vT() {
      return Di.current !== null;
    }
    function M_(e) {
      {
        if (e.mode & ct) {
          if (!Y1())
            return;
        } else if (!JD() || yt !== qn || e.tag !== $ && e.tag !== Ee && e.tag !== qe)
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
            t ? At(e) : Rn();
          }
        }
      }
    }
    function N_(e) {
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
    var Xa = null, vf = null, z_ = function(e) {
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
    function T0(e) {
      return hf(e);
    }
    function x0(e) {
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
            (typeof i == "function" || s === dr) && (u = !0);
            break;
          }
          case Ee: {
            (s === iu || s === dr) && (u = !0);
            break;
          }
          case ft:
          case qe: {
            (s === lu || s === dr) && (u = !0);
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
    var A_ = function(e, t) {
      {
        if (Xa === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        eu(), Jl(function() {
          R0(e.current, i, a);
        });
      }
    }, U_ = function(e, t) {
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
        var E = !1, T = !1;
        if (h !== null) {
          var O = Xa(h);
          O !== void 0 && (a.has(O) ? T = !0 : t.has(O) && (f === G ? T = !0 : E = !0));
        }
        if (vf !== null && (vf.has(e) || i !== null && vf.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || E) {
          var _ = ha(e, Ye);
          _ !== null && Zn(_, e, Ye, It);
        }
        u !== null && !T && R0(u, t, a), s !== null && R0(s, t, a);
      }
    }
    var F_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return w0(e.current, i, a), a;
      }
    };
    function w0(e, t, a) {
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
        v !== null && t.has(v) && (h = !0), h ? H_(e, a) : i !== null && w0(i, t, a), u !== null && w0(u, t, a);
      }
    }
    function H_(e, t) {
      {
        var a = V_(e, t);
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
    function V_(e, t) {
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
    var b0;
    {
      b0 = !1;
      try {
        var yT = Object.preventExtensions({});
      } catch {
        b0 = !0;
      }
    }
    function j_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = He, this.subtreeFlags = He, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !b0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ma = function(e, t, a, i) {
      return new j_(e, t, a, i);
    };
    function D0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function B_(e) {
      return typeof e == "function" && !D0(e) && e.defaultProps === void 0;
    }
    function P_(e) {
      if (typeof e == "function")
        return D0(e) ? G : $;
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
          a.type = T0(e.type);
          break;
        case Ee:
          a.type = x0(e.type);
          break;
      }
      return a;
    }
    function $_(e, t) {
      e.flags &= Pn | Qt;
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
    function I_(e, t, a) {
      var i;
      return e === $h ? (i = ct, t === !0 && (i |= nn, i |= oa)) : i = $e, $n && (i |= Ie), Ma(I, null, null, i);
    }
    function _0(e, t, a, i, u, s) {
      var f = pe, v = e;
      if (typeof e == "function")
        D0(e) ? (f = G, v = T0(v)) : v = hf(v);
      else if (typeof e == "string")
        f = ie;
      else
        e:
          switch (e) {
            case Ja:
              return ao(a.children, u, s, t);
            case au:
              f = Ze, u |= nn, (u & ct) !== $e && (u |= oa);
              break;
            case oo:
              return Y_(a, u, s, t);
            case Ua:
              return Q_(a, u, s, t);
            case so:
              return W_(a, u, s, t);
            case xf:
              return gT(a, u, s, t);
            case Kp:
            case qp:
            case uy:
            case oy:
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
                    f = Ee, v = x0(v);
                    break e;
                  case lu:
                    f = ft;
                    break e;
                  case dr:
                    f = en, v = null;
                    break e;
                }
              var h = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var E = i ? rt(i) : null;
                E && (h += `

Check the render method of \`` + E + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + h));
            }
          }
      var T = Ma(f, a, t, u);
      return T.elementType = e, T.type = v, T.lanes = s, T._debugOwner = i, T;
    }
    function k0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, v = _0(u, s, f, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function ao(e, t, a, i) {
      var u = Ma(Ve, e, i, t);
      return u.lanes = a, u;
    }
    function Y_(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ma(je, e, i, t | Ie);
      return u.elementType = oo, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Q_(e, t, a, i) {
      var u = Ma(Y, e, i, t);
      return u.elementType = Ua, u.lanes = a, u;
    }
    function W_(e, t, a, i) {
      var u = Ma(ot, e, i, t);
      return u.elementType = so, u.lanes = a, u;
    }
    function gT(e, t, a, i) {
      var u = Ma(fe, e, i, t);
      u.elementType = xf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function O0(e, t, a) {
      var i = Ma(xe, e, null, t);
      return i.lanes = a, i;
    }
    function G_() {
      var e = Ma(ie, null, null, $e);
      return e.elementType = "DELETED", e;
    }
    function q_(e) {
      var t = Ma(Ct, null, null, $e);
      return t.stateNode = e, t;
    }
    function L0(e, t, a) {
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
    function X_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = dg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = mt, this.eventTimes = Tc(P), this.expirationTimes = Tc(It), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = Tc(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Gt; f++)
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
    function ET(e, t, a, i, u, s, f, v, h, E) {
      var T = new X_(e, t, a, v, h), O = I_(t, s);
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
      return Vg(O), T;
    }
    var M0 = "18.2.0";
    function K_(e, t, a) {
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
    var N0, z0;
    N0 = !1, z0 = {};
    function CT(e) {
      if (!e)
        return La;
      var t = ra(e), a = zw(t);
      if (t.tag === G) {
        var i = t.type;
        if (el(i))
          return WE(t, i, a);
      }
      return a;
    }
    function Z_(e, t) {
      {
        var a = ra(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ua(a);
        if (u === null)
          return null;
        if (u.mode & nn) {
          var s = rt(a) || "Component";
          if (!z0[s]) {
            z0[s] = !0;
            var f = gn;
            try {
              At(u), a.mode & nn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? At(f) : Rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TT(e, t, a, i, u, s, f, v) {
      var h = !1, E = null;
      return ET(e, t, h, E, a, i, u, s, f);
    }
    function xT(e, t, a, i, u, s, f, v, h, E) {
      var T = !0, O = ET(a, i, T, e, u, s, f, v, h);
      O.context = CT(null);
      var _ = O.current, U = Gr(), F = no(_), j = ql(U, F);
      return j.callback = t ?? null, Gu(_, j, F), i_(O, F, U), O;
    }
    function Fp(e, t, a, i) {
      Iv(t, e);
      var u = t.current, s = Gr(), f = no(u);
      wl(f);
      var v = CT(a);
      t.context === null ? t.context = v : t.pendingContext = v, ea && gn !== null && !N0 && (N0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, rt(gn) || "Unknown"));
      var h = ql(s, f);
      h.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), h.callback = i);
      var E = Gu(u, h, f);
      return E !== null && (Zn(E, u, f, s), nm(E, u, f)), f;
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
    function J_(e) {
      switch (e.tag) {
        case I: {
          var t = e.stateNode;
          if (_n(t)) {
            var a = My(t);
            s_(t, a);
          }
          break;
        }
        case Y: {
          Jl(function() {
            var u = ha(e, Ye);
            if (u !== null) {
              var s = Gr();
              Zn(u, e, Ye, s);
            }
          });
          var i = Ye;
          A0(e, i);
          break;
        }
      }
    }
    function RT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = nh(a.retryLane, t));
    }
    function A0(e, t) {
      RT(e, t);
      var a = e.alternate;
      a && RT(a, t);
    }
    function ek(e) {
      if (e.tag === Y) {
        var t = xu, a = ha(e, t);
        if (a !== null) {
          var i = Gr();
          Zn(a, e, t, i);
        }
        A0(e, t);
      }
    }
    function tk(e) {
      if (e.tag === Y) {
        var t = no(e), a = ha(e, t);
        if (a !== null) {
          var i = Gr();
          Zn(a, e, t, i);
        }
        A0(e, t);
      }
    }
    function wT(e) {
      var t = Bv(e);
      return t === null ? null : t.stateNode;
    }
    var bT = function(e) {
      return null;
    };
    function nk(e) {
      return bT(e);
    }
    var DT = function(e) {
      return !1;
    };
    function rk(e) {
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
          R("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              R("copyWithRename() expects paths to be the same except for the deepest key");
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
      }, U0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      _T = function(e, t, a, i) {
        var u = U0(e, t);
        if (u !== null) {
          var s = PT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = pt({}, e.memoizedProps);
          var f = ha(e, Ye);
          f !== null && Zn(f, e, Ye, It);
        }
      }, kT = function(e, t, a) {
        var i = U0(e, t);
        if (i !== null) {
          var u = HT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = pt({}, e.memoizedProps);
          var s = ha(e, Ye);
          s !== null && Zn(s, e, Ye, It);
        }
      }, OT = function(e, t, a, i) {
        var u = U0(e, t);
        if (u !== null) {
          var s = jT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = pt({}, e.memoizedProps);
          var f = ha(e, Ye);
          f !== null && Zn(f, e, Ye, It);
        }
      }, LT = function(e, t, a) {
        e.pendingProps = PT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ha(e, Ye);
        i !== null && Zn(i, e, Ye, It);
      }, MT = function(e, t) {
        e.pendingProps = HT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ha(e, Ye);
        a !== null && Zn(a, e, Ye, It);
      }, NT = function(e, t, a) {
        e.pendingProps = jT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ha(e, Ye);
        i !== null && Zn(i, e, Ye, It);
      }, zT = function(e) {
        var t = ha(e, Ye);
        t !== null && Zn(t, e, Ye, It);
      }, AT = function(e) {
        bT = e;
      }, UT = function(e) {
        DT = e;
      };
    }
    function ak(e) {
      var t = ua(e);
      return t === null ? null : t.stateNode;
    }
    function ik(e) {
      return null;
    }
    function lk() {
      return gn;
    }
    function uk(e) {
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
        findHostInstanceByFiber: ak,
        findFiberByHostInstance: t || ik,
        // React Refresh
        findHostInstancesForRefresh: F_,
        scheduleRefresh: A_,
        scheduleRoot: U_,
        setRefreshHandler: z_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: lk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: M0
      });
    }
    var $T = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function F0(e) {
      this._internalRoot = e;
    }
    Gm.prototype.render = F0.prototype.render = function(e) {
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
    }, Gm.prototype.unmount = F0.prototype.unmount = function() {
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
    function ok(e, t) {
      if (!qm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      IT(e);
      var a = !1, i = !1, u = "", s = $T;
      t != null && (t.hydrate ? R("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ru && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TT(e, $h, null, a, i, u, s);
      Uh(f.current, e);
      var v = e.nodeType === Sn ? e.parentNode : e;
      return Yd(v), new F0(f);
    }
    function Gm(e) {
      this._internalRoot = e;
    }
    function sk(e) {
      e && ch(e);
    }
    Gm.prototype.unstable_scheduleHydration = sk;
    function ck(e, t, a) {
      if (!qm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      IT(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", h = $T;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (h = a.onRecoverableError));
      var E = xT(t, null, e, $h, i, s, f, v, h);
      if (Uh(E.current, e), Yd(e), u)
        for (var T = 0; T < u.length; T++) {
          var O = u[T];
          gb(E, O);
        }
      return new Gm(E);
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
    var fk = m.ReactCurrentOwner, YT;
    YT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Sn) {
        var t = wT(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = H0(e), u = !!(i && $u(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Rr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function H0(e) {
      return e ? e.nodeType === ba ? e.documentElement : e.firstChild : null;
    }
    function QT() {
    }
    function dk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = Wm(f);
            s.call(_);
          };
        }
        var f = xT(
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
          var E = i;
          i = function() {
            var _ = Wm(T);
            E.call(_);
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
    function pk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Xm(e, t, a, i, u) {
      YT(a), pk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = dk(a, t, e, u, i);
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
    function vk(e) {
      {
        var t = fk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Rr ? e : Z_(e, "findDOMNode");
    }
    function hk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = np(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Xm(null, e, t, !0, a);
    }
    function mk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = np(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Xm(null, e, t, !1, a);
    }
    function yk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Mo(e))
        throw new Error("parentComponent must be a valid React Component");
      return Xm(e, t, a, !1, i);
    }
    function gk(e) {
      if (!Hp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = np(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = H0(e), i = a && !$u(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Jl(function() {
          Xm(null, null, e, !1, function() {
            e._reactRootContainer = null, PE(e);
          });
        }), !0;
      } else {
        {
          var u = H0(e), s = !!(u && $u(u)), f = e.nodeType === Rr && Hp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ce(J_), ah(ek), Wo(tk), Dd(ca), lh(Io), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Hv(CR), $s(h0, c_, Jl);
    function Sk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!qm(t))
        throw new Error("Target container is not a DOM element.");
      return K_(e, t, null, a);
    }
    function Ek(e, t, a, i) {
      return yk(e, t, a, i);
    }
    var V0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [$u, Yc, Fh, Ps, ko, h0]
    };
    function Ck(e, t) {
      return V0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ok(e, t);
    }
    function Tk(e, t, a) {
      return V0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ck(e, t, a);
    }
    function xk(e) {
      return tT() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Jl(e);
    }
    var Rk = uk({
      findFiberByHostInstance: rs,
      bundleType: 1,
      version: M0,
      rendererPackageName: "react-dom"
    });
    if (!Rk && zt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var WT = window.location.protocol;
      /^(https?|file):$/.test(WT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (WT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V0, Ea.createPortal = Sk, Ea.createRoot = Ck, Ea.findDOMNode = vk, Ea.flushSync = xk, Ea.hydrate = hk, Ea.hydrateRoot = Tk, Ea.render = mk, Ea.unmountComponentAtNode = gk, Ea.unstable_batchedUpdates = h0, Ea.unstable_renderSubtreeIntoContainer = Ek, Ea.version = M0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ea;
}
function Ex() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ex);
    } catch (p) {
      console.error(p);
    }
  }
}
process.env.NODE_ENV === "production" ? (Ex(), Z0.exports = Uk()) : Z0.exports = Fk();
var Hk = Z0.exports, J0 = { exports: {} }, Zm = { exports: {} }, Ht = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JT;
function Vk() {
  if (JT)
    return Ht;
  JT = 1;
  var p = typeof Symbol == "function" && Symbol.for, S = p ? Symbol.for("react.element") : 60103, m = p ? Symbol.for("react.portal") : 60106, C = p ? Symbol.for("react.fragment") : 60107, b = p ? Symbol.for("react.strict_mode") : 60108, R = p ? Symbol.for("react.profiler") : 60114, g = p ? Symbol.for("react.provider") : 60109, K = p ? Symbol.for("react.context") : 60110, $ = p ? Symbol.for("react.async_mode") : 60111, G = p ? Symbol.for("react.concurrent_mode") : 60111, pe = p ? Symbol.for("react.forward_ref") : 60112, I = p ? Symbol.for("react.suspense") : 60113, q = p ? Symbol.for("react.suspense_list") : 60120, ie = p ? Symbol.for("react.memo") : 60115, xe = p ? Symbol.for("react.lazy") : 60116, Ve = p ? Symbol.for("react.block") : 60121, Ze = p ? Symbol.for("react.fundamental") : 60117, Mt = p ? Symbol.for("react.responder") : 60118, Le = p ? Symbol.for("react.scope") : 60119;
  function Ee(Y) {
    if (typeof Y == "object" && Y !== null) {
      var ft = Y.$$typeof;
      switch (ft) {
        case S:
          switch (Y = Y.type, Y) {
            case $:
            case G:
            case C:
            case R:
            case b:
            case I:
              return Y;
            default:
              switch (Y = Y && Y.$$typeof, Y) {
                case K:
                case pe:
                case xe:
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
  return Ht.AsyncMode = $, Ht.ConcurrentMode = G, Ht.ContextConsumer = K, Ht.ContextProvider = g, Ht.Element = S, Ht.ForwardRef = pe, Ht.Fragment = C, Ht.Lazy = xe, Ht.Memo = ie, Ht.Portal = m, Ht.Profiler = R, Ht.StrictMode = b, Ht.Suspense = I, Ht.isAsyncMode = function(Y) {
    return je(Y) || Ee(Y) === $;
  }, Ht.isConcurrentMode = je, Ht.isContextConsumer = function(Y) {
    return Ee(Y) === K;
  }, Ht.isContextProvider = function(Y) {
    return Ee(Y) === g;
  }, Ht.isElement = function(Y) {
    return typeof Y == "object" && Y !== null && Y.$$typeof === S;
  }, Ht.isForwardRef = function(Y) {
    return Ee(Y) === pe;
  }, Ht.isFragment = function(Y) {
    return Ee(Y) === C;
  }, Ht.isLazy = function(Y) {
    return Ee(Y) === xe;
  }, Ht.isMemo = function(Y) {
    return Ee(Y) === ie;
  }, Ht.isPortal = function(Y) {
    return Ee(Y) === m;
  }, Ht.isProfiler = function(Y) {
    return Ee(Y) === R;
  }, Ht.isStrictMode = function(Y) {
    return Ee(Y) === b;
  }, Ht.isSuspense = function(Y) {
    return Ee(Y) === I;
  }, Ht.isValidElementType = function(Y) {
    return typeof Y == "string" || typeof Y == "function" || Y === C || Y === G || Y === R || Y === b || Y === I || Y === q || typeof Y == "object" && Y !== null && (Y.$$typeof === xe || Y.$$typeof === ie || Y.$$typeof === g || Y.$$typeof === K || Y.$$typeof === pe || Y.$$typeof === Ze || Y.$$typeof === Mt || Y.$$typeof === Le || Y.$$typeof === Ve);
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
var ex;
function jk() {
  return ex || (ex = 1, process.env.NODE_ENV !== "production" && function() {
    var p = typeof Symbol == "function" && Symbol.for, S = p ? Symbol.for("react.element") : 60103, m = p ? Symbol.for("react.portal") : 60106, C = p ? Symbol.for("react.fragment") : 60107, b = p ? Symbol.for("react.strict_mode") : 60108, R = p ? Symbol.for("react.profiler") : 60114, g = p ? Symbol.for("react.provider") : 60109, K = p ? Symbol.for("react.context") : 60110, $ = p ? Symbol.for("react.async_mode") : 60111, G = p ? Symbol.for("react.concurrent_mode") : 60111, pe = p ? Symbol.for("react.forward_ref") : 60112, I = p ? Symbol.for("react.suspense") : 60113, q = p ? Symbol.for("react.suspense_list") : 60120, ie = p ? Symbol.for("react.memo") : 60115, xe = p ? Symbol.for("react.lazy") : 60116, Ve = p ? Symbol.for("react.block") : 60121, Ze = p ? Symbol.for("react.fundamental") : 60117, Mt = p ? Symbol.for("react.responder") : 60118, Le = p ? Symbol.for("react.scope") : 60119;
    function Ee(le) {
      return typeof le == "string" || typeof le == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      le === C || le === G || le === R || le === b || le === I || le === q || typeof le == "object" && le !== null && (le.$$typeof === xe || le.$$typeof === ie || le.$$typeof === g || le.$$typeof === K || le.$$typeof === pe || le.$$typeof === Ze || le.$$typeof === Mt || le.$$typeof === Le || le.$$typeof === Ve);
    }
    function je(le) {
      if (typeof le == "object" && le !== null) {
        var zt = le.$$typeof;
        switch (zt) {
          case S:
            var mn = le.type;
            switch (mn) {
              case $:
              case G:
              case C:
              case R:
              case b:
              case I:
                return mn;
              default:
                var tr = mn && mn.$$typeof;
                switch (tr) {
                  case K:
                  case pe:
                  case xe:
                  case ie:
                  case g:
                    return tr;
                  default:
                    return zt;
                }
            }
          case m:
            return zt;
        }
      }
    }
    var Y = $, ft = G, qe = K, en = g, Nt = S, Ct = pe, ot = C, Qe = xe, fe = ie, Ne = m, Rt = R, et = b, wt = I, re = !1;
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
      return typeof le == "object" && le !== null && le.$$typeof === S;
    }
    function ze(le) {
      return je(le) === pe;
    }
    function at(le) {
      return je(le) === C;
    }
    function Ae(le) {
      return je(le) === xe;
    }
    function We(le) {
      return je(le) === ie;
    }
    function Je(le) {
      return je(le) === m;
    }
    function it(le) {
      return je(le) === R;
    }
    function st(le) {
      return je(le) === b;
    }
    function Dt(le) {
      return je(le) === I;
    }
    Vt.AsyncMode = Y, Vt.ConcurrentMode = ft, Vt.ContextConsumer = qe, Vt.ContextProvider = en, Vt.Element = Nt, Vt.ForwardRef = Ct, Vt.Fragment = ot, Vt.Lazy = Qe, Vt.Memo = fe, Vt.Portal = Ne, Vt.Profiler = Rt, Vt.StrictMode = et, Vt.Suspense = wt, Vt.isAsyncMode = _e, Vt.isConcurrentMode = z, Vt.isContextConsumer = te, Vt.isContextProvider = Se, Vt.isElement = Pe, Vt.isForwardRef = ze, Vt.isFragment = at, Vt.isLazy = Ae, Vt.isMemo = We, Vt.isPortal = Je, Vt.isProfiler = it, Vt.isStrictMode = st, Vt.isSuspense = Dt, Vt.isValidElementType = Ee, Vt.typeOf = je;
  }()), Vt;
}
var tx;
function Cx() {
  return tx || (tx = 1, process.env.NODE_ENV === "production" ? Zm.exports = Vk() : Zm.exports = jk()), Zm.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var P0, nx;
function Bk() {
  if (nx)
    return P0;
  nx = 1;
  var p = Object.getOwnPropertySymbols, S = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
  function C(R) {
    if (R == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(R);
  }
  function b() {
    try {
      if (!Object.assign)
        return !1;
      var R = new String("abc");
      if (R[5] = "de", Object.getOwnPropertyNames(R)[0] === "5")
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
  return P0 = b() ? Object.assign : function(R, g) {
    for (var K, $ = C(R), G, pe = 1; pe < arguments.length; pe++) {
      K = Object(arguments[pe]);
      for (var I in K)
        S.call(K, I) && ($[I] = K[I]);
      if (p) {
        G = p(K);
        for (var q = 0; q < G.length; q++)
          m.call(K, G[q]) && ($[G[q]] = K[G[q]]);
      }
    }
    return $;
  }, P0;
}
var $0, rx;
function aE() {
  if (rx)
    return $0;
  rx = 1;
  var p = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $0 = p, $0;
}
var I0, ax;
function Tx() {
  return ax || (ax = 1, I0 = Function.call.bind(Object.prototype.hasOwnProperty)), I0;
}
var Y0, ix;
function Pk() {
  if (ix)
    return Y0;
  ix = 1;
  var p = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var S = aE(), m = {}, C = Tx();
    p = function(R) {
      var g = "Warning: " + R;
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
  }
  function b(R, g, K, $, G) {
    if (process.env.NODE_ENV !== "production") {
      for (var pe in R)
        if (C(R, pe)) {
          var I;
          try {
            if (typeof R[pe] != "function") {
              var q = Error(
                ($ || "React class") + ": " + K + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw q.name = "Invariant Violation", q;
            }
            I = R[pe](g, pe, $, K, null, S);
          } catch (xe) {
            I = xe;
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
  }, Y0 = b, Y0;
}
var Q0, lx;
function $k() {
  if (lx)
    return Q0;
  lx = 1;
  var p = Cx(), S = Bk(), m = aE(), C = Tx(), b = Pk(), R = function() {
  };
  process.env.NODE_ENV !== "production" && (R = function(K) {
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
  return Q0 = function(K, $) {
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
      objectOf: en,
      oneOf: qe,
      oneOfType: Nt,
      shape: Qe,
      exact: fe
    };
    function xe(z, te) {
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
            Se < 3 && (R(
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
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? R(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : R("Invalid argument supplied to oneOf, expected an array.")), g;
      function te(Se, Pe, ze, at, Ae) {
        for (var We = Se[Pe], Je = 0; Je < z.length; Je++)
          if (xe(We, z[Je]))
            return null;
        var it = JSON.stringify(z, function(Dt, le) {
          var zt = wt(le);
          return zt === "symbol" ? String(le) : le;
        });
        return new Ve("Invalid " + at + " `" + Ae + "` of value `" + String(We) + "` " + ("supplied to `" + ze + "`, expected one of " + it + "."));
      }
      return Ze(te);
    }
    function en(z) {
      function te(Se, Pe, ze, at, Ae) {
        if (typeof z != "function")
          return new Ve("Property `" + Ae + "` of component `" + ze + "` has invalid PropType notation inside objectOf.");
        var We = Se[Pe], Je = et(We);
        if (Je !== "object")
          return new Ve("Invalid " + at + " `" + Ae + "` of type " + ("`" + Je + "` supplied to `" + ze + "`, expected an object."));
        for (var it in We)
          if (C(We, it)) {
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
        return process.env.NODE_ENV !== "production" && R("Invalid argument supplied to oneOfType, expected an instance of array."), g;
      for (var te = 0; te < z.length; te++) {
        var Se = z[te];
        if (typeof Se != "function")
          return R(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(Se) + " at index " + te + "."
          ), g;
      }
      function Pe(ze, at, Ae, We, Je) {
        for (var it = [], st = 0; st < z.length; st++) {
          var Dt = z[st], le = Dt(ze, at, Ae, We, Je, m);
          if (le == null)
            return null;
          le.data && C(le.data, "expectedType") && it.push(le.data.expectedType);
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
        var it = S({}, Se[Pe], z);
        for (var st in it) {
          var Dt = z[st];
          if (C(z, st) && typeof Dt != "function")
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
    function Rt(z, te) {
      return z === "symbol" ? !0 : te ? te["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && te instanceof Symbol : !1;
    }
    function et(z) {
      var te = typeof z;
      return Array.isArray(z) ? "array" : z instanceof RegExp ? "object" : Rt(te, z) ? "symbol" : te;
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
  }, Q0;
}
var W0, ux;
function Ik() {
  if (ux)
    return W0;
  ux = 1;
  var p = aE();
  function S() {
  }
  function m() {
  }
  return m.resetWarningCache = S, W0 = function() {
    function C(g, K, $, G, pe, I) {
      if (I !== p) {
        var q = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw q.name = "Invariant Violation", q;
      }
    }
    C.isRequired = C;
    function b() {
      return C;
    }
    var R = {
      array: C,
      bigint: C,
      bool: C,
      func: C,
      number: C,
      object: C,
      string: C,
      symbol: C,
      any: C,
      arrayOf: b,
      element: C,
      elementType: C,
      instanceOf: b,
      node: C,
      objectOf: b,
      oneOf: b,
      oneOfType: b,
      shape: b,
      exact: b,
      checkPropTypes: m,
      resetWarningCache: S
    };
    return R.PropTypes = R, R;
  }, W0;
}
if (process.env.NODE_ENV !== "production") {
  var Yk = Cx(), Qk = !0;
  J0.exports = $k()(Yk.isElement, Qk);
} else
  J0.exports = Ik()();
var Wk = J0.exports;
const Za = /* @__PURE__ */ yx(Wk);
function eE() {
  return eE = Object.assign || function(p) {
    for (var S = 1; S < arguments.length; S++) {
      var m = arguments[S];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (p[C] = m[C]);
    }
    return p;
  }, eE.apply(this, arguments);
}
function Gk(p, S) {
  if (p == null)
    return {};
  var m = qk(p, S), C, b;
  if (Object.getOwnPropertySymbols) {
    var R = Object.getOwnPropertySymbols(p);
    for (b = 0; b < R.length; b++)
      C = R[b], !(S.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(p, C) && (m[C] = p[C]);
  }
  return m;
}
function qk(p, S) {
  if (p == null)
    return {};
  var m = {}, C = Object.keys(p), b, R;
  for (R = 0; R < C.length; R++)
    b = C[R], !(S.indexOf(b) >= 0) && (m[b] = p[b]);
  return m;
}
var iE = Hr(function(p, S) {
  var m = p.color, C = m === void 0 ? "currentColor" : m, b = p.size, R = b === void 0 ? 24 : b, g = Gk(p, ["color", "size"]);
  return /* @__PURE__ */ jt.createElement("svg", eE({
    ref: S,
    xmlns: "http://www.w3.org/2000/svg",
    width: R,
    height: R,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C,
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
const Xk = iE;
function tE() {
  return tE = Object.assign || function(p) {
    for (var S = 1; S < arguments.length; S++) {
      var m = arguments[S];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (p[C] = m[C]);
    }
    return p;
  }, tE.apply(this, arguments);
}
function Kk(p, S) {
  if (p == null)
    return {};
  var m = Zk(p, S), C, b;
  if (Object.getOwnPropertySymbols) {
    var R = Object.getOwnPropertySymbols(p);
    for (b = 0; b < R.length; b++)
      C = R[b], !(S.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(p, C) && (m[C] = p[C]);
  }
  return m;
}
function Zk(p, S) {
  if (p == null)
    return {};
  var m = {}, C = Object.keys(p), b, R;
  for (R = 0; R < C.length; R++)
    b = C[R], !(S.indexOf(b) >= 0) && (m[b] = p[b]);
  return m;
}
var lE = Hr(function(p, S) {
  var m = p.color, C = m === void 0 ? "currentColor" : m, b = p.size, R = b === void 0 ? 24 : b, g = Kk(p, ["color", "size"]);
  return /* @__PURE__ */ jt.createElement("svg", tE({
    ref: S,
    xmlns: "http://www.w3.org/2000/svg",
    width: R,
    height: R,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C,
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
const Jk = lE;
function nE() {
  return nE = Object.assign || function(p) {
    for (var S = 1; S < arguments.length; S++) {
      var m = arguments[S];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (p[C] = m[C]);
    }
    return p;
  }, nE.apply(this, arguments);
}
function eO(p, S) {
  if (p == null)
    return {};
  var m = tO(p, S), C, b;
  if (Object.getOwnPropertySymbols) {
    var R = Object.getOwnPropertySymbols(p);
    for (b = 0; b < R.length; b++)
      C = R[b], !(S.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(p, C) && (m[C] = p[C]);
  }
  return m;
}
function tO(p, S) {
  if (p == null)
    return {};
  var m = {}, C = Object.keys(p), b, R;
  for (R = 0; R < C.length; R++)
    b = C[R], !(S.indexOf(b) >= 0) && (m[b] = p[b]);
  return m;
}
var uE = Hr(function(p, S) {
  var m = p.color, C = m === void 0 ? "currentColor" : m, b = p.size, R = b === void 0 ? 24 : b, g = eO(p, ["color", "size"]);
  return /* @__PURE__ */ jt.createElement("svg", nE({
    ref: S,
    xmlns: "http://www.w3.org/2000/svg",
    width: R,
    height: R,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C,
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
const nO = uE, rO = (p) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(p), aO = {
  subtitle1: "Tui-Subtitle1",
  subtitle2: "Tui-Subtitle2",
  body1: "Tui-Body1",
  body2: "Tui-Body2",
  caption: "Tui-Caption",
  overline: "Tui-Overline"
}, iO = ({
  children: p,
  variant: S = "body1",
  ...m
}) => rO(S) ? Bp(
  S,
  { ...m, className: Jn(m.className, "Tui-Typography") },
  p
) : Bp(
  "p",
  {
    ...m,
    className: Jn(
      aO[S],
      m.className,
      "Tui-Typography"
    )
  },
  p
), ty = iO, lO = ({
  imgSrc: p,
  isOpen: S,
  onClose: m,
  onChange: C
}) => {
  const b = Dk(null), R = () => {
    C == null || C({ reason: "next" });
  }, g = () => {
    C == null || C({ reason: "prev" });
  };
  return Nk(["ArrowRight", "ArrowLeft", "Escape"], (K) => {
    switch (K.key) {
      case "ArrowRight":
        R();
        break;
      case "ArrowLeft":
        g();
        break;
      case "Escape":
        m();
    }
  }), $p(() => {
    document.body.style.overflow = S ? "hidden" : "auto";
  }, [S]), S ? Hk.createPortal(
    /* @__PURE__ */ lo("div", { className: "fixed flex justify-center top-0 left-0 right-0 bottom-0 z-40 backdrop-blur-sm md:p-8", children: [
      C && /* @__PURE__ */ Yt(
        Xk,
        {
          "aria-label": "Previous",
          onClick: g,
          strokeWidth: 1,
          className: "hidden md:block self-center dark:text-white cursor-pointer md:h-24 md:w-24"
        }
      ),
      /* @__PURE__ */ lo("div", { className: "flex justify-center", children: [
        /* @__PURE__ */ Yt(
          "div",
          {
            "aria-label": "Close",
            onClick: (K) => {
              K.preventDefault(), K.stopPropagation(), m();
            },
            className: "absolute right-4 top-4 cursor-pointer z-50 flex items-center gap-2 md:gap-4",
            children: /* @__PURE__ */ lo(ty, { variant: "overline", className: "flex gap-2 text-base", children: [
              /* @__PURE__ */ Yt(nO, {}),
              "Close"
            ] })
          }
        ),
        /* @__PURE__ */ Yt(
          "img",
          {
            ref: b,
            src: p,
            alt: "",
            className: "object-contain m-auto md:h-full md:object-cover object-center"
          }
        )
      ] }),
      C && /* @__PURE__ */ Yt(
        Jk,
        {
          "aria-label": "Next",
          onClick: R,
          strokeWidth: 1,
          className: "hidden dark:text-white md:block self-center cursor-pointer md:h-24 md:w-24"
        }
      )
    ] }),
    document.body
  ) : null;
}, xx = lO, uO = ({ images: p, slotProps: S }) => {
  var K;
  const [m, C] = Pp(NaN);
  if (!p)
    return null;
  const b = () => {
    C(($) => ($ + 1) % p.length);
  }, R = () => {
    C(($) => ($ - 1 + p.length) % p.length);
  }, g = () => {
    C(NaN);
  };
  return /* @__PURE__ */ lo(
    "div",
    {
      ...S == null ? void 0 : S.root,
      className: Jn(
        "columns-1 sm:columns-2 md:columns-3 gap-4",
        (K = S == null ? void 0 : S.root) == null ? void 0 : K.className
      ),
      children: [
        /* @__PURE__ */ Yt(
          xx,
          {
            onChange: ({ reason: $ }) => $ === "next" ? b() : R(),
            imgSrc: p[m],
            isOpen: !Number.isNaN(m),
            onClose: g
          }
        ),
        /* @__PURE__ */ Yt("div", { className: "grid gap-4", children: p.map(($, G) => {
          var pe;
          return /* @__PURE__ */ Bp(
            "img",
            {
              ...S == null ? void 0 : S.image,
              tabIndex: 0,
              onKeyDown: (I) => I.key === "Enter" || I.key === " " && C(G),
              onClick: () => C(G),
              key: $,
              className: Jn(
                "h-auto max-w-full cursor-pointer transition ease-in-out md:hover:scale-105 duration-200",
                (pe = S == null ? void 0 : S.image) == null ? void 0 : pe.className
              ),
              src: $,
              alt: ""
            }
          );
        }) })
      ]
    }
  );
}, tL = uO, oO = Hr(
  function(S, m) {
    return /* @__PURE__ */ Yt(
      "ul",
      {
        ref: m,
        ...S,
        className: Jn("Tui-List", S.className)
      }
    );
  }
), nL = oO, sO = Hr(
  function(S, m) {
    return /* @__PURE__ */ Yt(
      "li",
      {
        ref: m,
        ...S,
        className: Jn("Tui-ListItem", S.className)
      }
    );
  }
), rL = sO, cO = ({
  variant: p = "body1",
  children: S,
  slotProps: m
}) => {
  var C;
  return /* @__PURE__ */ Yt(
    "div",
    {
      ...m == null ? void 0 : m.root,
      className: Jn("Tui-ListItemText", (C = m == null ? void 0 : m.root) == null ? void 0 : C.className),
      children: /* @__PURE__ */ Yt(ty, { variant: p, ...m == null ? void 0 : m.typography, children: S })
    }
  );
}, aL = cO;
function Rx({ slotProps: p, children: S }) {
  var m;
  return /* @__PURE__ */ Yt(
    "div",
    {
      ...p == null ? void 0 : p.root,
      className: Jn("Tui-FormGroup", (m = p == null ? void 0 : p.root) == null ? void 0 : m.className),
      children: S
    }
  );
}
const fO = Hr(
  function(S) {
    return /* @__PURE__ */ Yt("label", { ...S, className: Jn("Tui-Label", S.className), children: S.children });
  }
), wx = fO, dO = Hr(
  (p, S) => /* @__PURE__ */ Yt(
    "p",
    {
      ref: S,
      ...p,
      className: Jn("Tui-HelperText", p.className)
    }
  )
), bx = dO, pO = Hr(
  ({ slotProps: p, ...S }, m) => /* @__PURE__ */ lo(Rx, { ...p == null ? void 0 : p.root, children: [
    /* @__PURE__ */ Yt(wx, { ...p == null ? void 0 : p.label, htmlFor: S.name, children: S.label }),
    /* @__PURE__ */ Yt(
      "textarea",
      {
        ...S,
        id: S.name,
        className: Jn("Tui-TextArea", S.className),
        ref: m
      }
    ),
    S.error && /* @__PURE__ */ Yt(bx, { ...p == null ? void 0 : p.helperText, children: S.helperText })
  ] })
), iL = pO, vO = Hr(
  ({ slotProps: p, ...S }, m) => /* @__PURE__ */ lo(Rx, { ...p == null ? void 0 : p.root, children: [
    /* @__PURE__ */ Yt(wx, { ...p == null ? void 0 : p.label, htmlFor: S.name, children: S.label }),
    /* @__PURE__ */ Yt(
      "input",
      {
        ...S,
        id: S.name,
        className: Jn("Tui-TextField", S.className),
        ref: m
      }
    ),
    S.error && /* @__PURE__ */ Yt(bx, { ...p == null ? void 0 : p.helperText, children: S.helperText })
  ] })
), lL = vO, hO = Hr(
  function(S, m) {
    return /* @__PURE__ */ Yt(
      "div",
      {
        ref: m,
        ...S,
        className: Jn("Tui-Card", S.className)
      }
    );
  }
), uL = hO, mO = Hr(
  function(S, m) {
    return /* @__PURE__ */ Yt(
      "div",
      {
        ref: m,
        ...S,
        className: Jn("Tui-CardContent", S.className)
      }
    );
  }
), oL = mO, yO = Hr(
  function(S, m) {
    return /* @__PURE__ */ lo(
      "div",
      {
        ref: m,
        ...S,
        className: Jn("Tui-CardHeader", S.className),
        children: [
          /* @__PURE__ */ Yt(ty, { variant: "h6", children: S.title }),
          S.subtitle && /* @__PURE__ */ Yt(ty, { variant: "subtitle1", children: S.subtitle })
        ]
      }
    );
  }
), sL = yO, gO = () => {
  const [p, S] = Pp(!1);
  return { isOpen: p, onOpen: () => S(!0), onClose: () => S(!1) };
}, SO = gO, EO = Hr(
  function(S, m) {
    const { isOpen: C, onClose: b, onOpen: R } = SO();
    return /* @__PURE__ */ lo(kk, { children: [
      /* @__PURE__ */ Yt(
        xx,
        {
          imgSrc: S.src ?? "",
          isOpen: C,
          onClose: b
        }
      ),
      /* @__PURE__ */ Yt(
        "img",
        {
          ...S,
          onClick: R,
          ref: m,
          className: Jn("Tui-CardMedia", S.className)
        }
      )
    ] });
  }
), cL = EO, CO = Hr(
  function(S, m) {
    return /* @__PURE__ */ Yt(
      "div",
      {
        ref: m,
        ...S,
        className: Jn("Tui-CardActionArea", S.className),
        children: S.children
      }
    );
  }
), fL = CO, TO = Hr(
  function(S, m) {
    return /* @__PURE__ */ Yt(
      "div",
      {
        ref: m,
        ...S,
        className: Jn("Tui-CardBody", S.className),
        children: S.children
      }
    );
  }
), dL = TO, xO = (p, S, m, C) => {
  _k(() => (p == null || p.addEventListener(S, m, C), () => p == null ? void 0 : p.removeEventListener(S, m, C)), [p, S, m, C]);
}, RO = xO;
var Ip = (p) => p.type === "checkbox", gf = (p) => p instanceof Date, Kr = (p) => p == null;
const Dx = (p) => typeof p == "object";
var er = (p) => !Kr(p) && !Array.isArray(p) && Dx(p) && !gf(p), _x = (p) => er(p) && p.target ? Ip(p.target) ? p.target.checked : p.target.value : p, wO = (p) => p.substring(0, p.search(/\.\d+(\.|$)/)) || p, kx = (p, S) => p.has(wO(S)), bO = (p) => {
  const S = p.constructor && p.constructor.prototype;
  return er(S) && S.hasOwnProperty("isPrototypeOf");
}, oE = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function sl(p) {
  let S;
  const m = Array.isArray(p);
  if (p instanceof Date)
    S = new Date(p);
  else if (p instanceof Set)
    S = new Set(p);
  else if (!(oE && (p instanceof Blob || p instanceof FileList)) && (m || er(p)))
    if (S = m ? [] : {}, !m && !bO(p))
      S = p;
    else
      for (const C in p)
        p.hasOwnProperty(C) && (S[C] = sl(p[C]));
  else
    return p;
  return S;
}
var Yp = (p) => Array.isArray(p) ? p.filter(Boolean) : [], Ln = (p) => p === void 0, ge = (p, S, m) => {
  if (!S || !er(p))
    return m;
  const C = Yp(S.split(/[,[\].]+?/)).reduce((b, R) => Kr(b) ? b : b[R], p);
  return Ln(C) || C === p ? Ln(p[S]) ? m : p[S] : C;
};
const ny = {
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
}, DO = jt.createContext(null), sE = () => jt.useContext(DO);
var Ox = (p, S, m, C = !0) => {
  const b = {
    defaultValues: S._defaultValues
  };
  for (const R in p)
    Object.defineProperty(b, R, {
      get: () => {
        const g = R;
        return S._proxyFormState[g] !== _i.all && (S._proxyFormState[g] = !C || _i.all), m && (m[g] = !0), p[g];
      }
    });
  return b;
}, Ka = (p) => er(p) && !Object.keys(p).length, Lx = (p, S, m, C) => {
  m(p);
  const { name: b, ...R } = p;
  return Ka(R) || Object.keys(R).length >= Object.keys(S).length || Object.keys(R).find((g) => S[g] === (!C || _i.all));
}, Jm = (p) => Array.isArray(p) ? p : [p], Mx = (p, S, m) => m && S ? p === S : !p || !S || p === S || Jm(p).some((C) => C && (C.startsWith(S) || S.startsWith(C)));
function cE(p) {
  const S = jt.useRef(p);
  S.current = p, jt.useEffect(() => {
    const m = !p.disabled && S.current.subject && S.current.subject.subscribe({
      next: S.current.next
    });
    return () => {
      m && m.unsubscribe();
    };
  }, [p.disabled]);
}
function _O(p) {
  const S = sE(), { control: m = S.control, disabled: C, name: b, exact: R } = p || {}, [g, K] = jt.useState(m._formState), $ = jt.useRef(!0), G = jt.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), pe = jt.useRef(b);
  return pe.current = b, cE({
    disabled: C,
    next: (I) => $.current && Mx(pe.current, I.name, R) && Lx(I, G.current, m._updateFormState) && K({
      ...m._formState,
      ...I
    }),
    subject: m._subjects.state
  }), jt.useEffect(() => ($.current = !0, G.current.isValid && m._updateValid(!0), () => {
    $.current = !1;
  }), [m]), Ox(g, m, G.current, !1);
}
var cl = (p) => typeof p == "string", Nx = (p, S, m, C, b) => cl(p) ? (C && S.watch.add(p), ge(m, p, b)) : Array.isArray(p) ? p.map((R) => (C && S.watch.add(R), ge(m, R))) : (C && (S.watchAll = !0), m);
function kO(p) {
  const S = sE(), { control: m = S.control, name: C, defaultValue: b, disabled: R, exact: g } = p || {}, K = jt.useRef(C);
  K.current = C, cE({
    disabled: R,
    subject: m._subjects.values,
    next: (pe) => {
      Mx(K.current, pe.name, g) && G(sl(Nx(K.current, m._names, pe.values || m._formValues, !1, b)));
    }
  });
  const [$, G] = jt.useState(m._getWatch(C, b));
  return jt.useEffect(() => m._removeUnmounted()), $;
}
var fE = (p) => /^\w*$/.test(p), zx = (p) => Yp(p.replace(/["|']|\]/g, "").split(/\.|\[/));
function Jt(p, S, m) {
  let C = -1;
  const b = fE(S) ? [S] : zx(S), R = b.length, g = R - 1;
  for (; ++C < R; ) {
    const K = b[C];
    let $ = m;
    if (C !== g) {
      const G = p[K];
      $ = er(G) || Array.isArray(G) ? G : isNaN(+b[C + 1]) ? {} : [];
    }
    p[K] = $, p = p[K];
  }
  return p;
}
function OO(p) {
  const S = sE(), { name: m, control: C = S.control, shouldUnregister: b } = p, R = kx(C._names.array, m), g = kO({
    control: C,
    name: m,
    defaultValue: ge(C._formValues, m, ge(C._defaultValues, m, p.defaultValue)),
    exact: !0
  }), K = _O({
    control: C,
    name: m
  }), $ = jt.useRef(C.register(m, {
    ...p.rules,
    value: g
  }));
  return $.current = C.register(m, p.rules), jt.useEffect(() => {
    const G = C._options.shouldUnregister || b, pe = (I, q) => {
      const ie = ge(C._fields, I);
      ie && (ie._f.mount = q);
    };
    if (pe(m, !0), G) {
      const I = sl(ge(C._options.defaultValues, m));
      Jt(C._defaultValues, m, I), Ln(ge(C._formValues, m)) && Jt(C._formValues, m, I);
    }
    return () => {
      (R ? G && !C._state.action : G) ? C.unregister(m) : pe(m, !1);
    };
  }, [m, C, R, b]), {
    field: {
      name: m,
      value: g,
      onChange: jt.useCallback((G) => $.current.onChange({
        target: {
          value: _x(G),
          name: m
        },
        type: ny.CHANGE
      }), [m]),
      onBlur: jt.useCallback(() => $.current.onBlur({
        target: {
          value: ge(C._formValues, m),
          name: m
        },
        type: ny.BLUR
      }), [m, C]),
      ref: (G) => {
        const pe = ge(C._fields, m);
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
var LO = (p, S, m, C, b) => S ? {
  ...m[p],
  types: {
    ...m[p] && m[p].types ? m[p].types : {},
    [C]: b || !0
  }
} : {};
const rE = (p, S, m) => {
  for (const C of m || Object.keys(p)) {
    const b = ge(p, C);
    if (b) {
      const { _f: R, ...g } = b;
      if (R && S(R.name)) {
        if (R.ref.focus) {
          R.ref.focus();
          break;
        } else if (R.refs && R.refs[0].focus) {
          R.refs[0].focus();
          break;
        }
      } else
        er(g) && rE(g, S);
    }
  }
};
var ox = (p) => ({
  isOnSubmit: !p || p === _i.onSubmit,
  isOnBlur: p === _i.onBlur,
  isOnChange: p === _i.onChange,
  isOnAll: p === _i.all,
  isOnTouch: p === _i.onTouched
}), sx = (p, S, m) => !m && (S.watchAll || S.watch.has(p) || [...S.watch].some((C) => p.startsWith(C) && /^\.\w+/.test(p.slice(C.length)))), MO = (p, S, m) => {
  const C = Yp(ge(p, m));
  return Jt(C, "root", S[m]), Jt(p, m, C), p;
}, Sf = (p) => typeof p == "boolean", dE = (p) => p.type === "file", io = (p) => typeof p == "function", ry = (p) => {
  if (!oE)
    return !1;
  const S = p ? p.ownerDocument : 0;
  return p instanceof (S && S.defaultView ? S.defaultView.HTMLElement : HTMLElement);
}, ey = (p) => cl(p), pE = (p) => p.type === "radio", ay = (p) => p instanceof RegExp;
const cx = {
  value: !1,
  isValid: !1
}, fx = { value: !0, isValid: !0 };
var Ax = (p) => {
  if (Array.isArray(p)) {
    if (p.length > 1) {
      const S = p.filter((m) => m && m.checked && !m.disabled).map((m) => m.value);
      return { value: S, isValid: !!S.length };
    }
    return p[0].checked && !p[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      p[0].attributes && !Ln(p[0].attributes.value) ? Ln(p[0].value) || p[0].value === "" ? fx : { value: p[0].value, isValid: !0 } : fx
    ) : cx;
  }
  return cx;
};
const dx = {
  isValid: !1,
  value: null
};
var Ux = (p) => Array.isArray(p) ? p.reduce((S, m) => m && m.checked && !m.disabled ? {
  isValid: !0,
  value: m.value
} : S, dx) : dx;
function px(p, S, m = "validate") {
  if (ey(p) || Array.isArray(p) && p.every(ey) || Sf(p) && !p)
    return {
      type: m,
      message: ey(p) ? p : "",
      ref: S
    };
}
var yf = (p) => er(p) && !ay(p) ? p : {
  value: p,
  message: ""
}, vx = async (p, S, m, C, b) => {
  const { ref: R, refs: g, required: K, maxLength: $, minLength: G, min: pe, max: I, pattern: q, validate: ie, name: xe, valueAsNumber: Ve, mount: Ze, disabled: Mt } = p._f, Le = ge(S, xe);
  if (!Ze || Mt)
    return {};
  const Ee = g ? g[0] : R, je = (Qe) => {
    C && Ee.reportValidity && (Ee.setCustomValidity(Sf(Qe) ? "" : Qe || ""), Ee.reportValidity());
  }, Y = {}, ft = pE(R), qe = Ip(R), en = ft || qe, Nt = (Ve || dE(R)) && Ln(R.value) && Ln(Le) || ry(R) && R.value === "" || Le === "" || Array.isArray(Le) && !Le.length, Ct = LO.bind(null, xe, m, Y), ot = (Qe, fe, Ne, Rt = nu.maxLength, et = nu.minLength) => {
    const wt = Qe ? fe : Ne;
    Y[xe] = {
      type: Qe ? Rt : et,
      message: wt,
      ref: R,
      ...Ct(Qe ? Rt : et, wt)
    };
  };
  if (b ? !Array.isArray(Le) || !Le.length : K && (!en && (Nt || Kr(Le)) || Sf(Le) && !Le || qe && !Ax(g).isValid || ft && !Ux(g).isValid)) {
    const { value: Qe, message: fe } = ey(K) ? { value: !!K, message: K } : yf(K);
    if (Qe && (Y[xe] = {
      type: nu.required,
      message: fe,
      ref: Ee,
      ...Ct(nu.required, fe)
    }, !m))
      return je(fe), Y;
  }
  if (!Nt && (!Kr(pe) || !Kr(I))) {
    let Qe, fe;
    const Ne = yf(I), Rt = yf(pe);
    if (!Kr(Le) && !isNaN(Le)) {
      const et = R.valueAsNumber || Le && +Le;
      Kr(Ne.value) || (Qe = et > Ne.value), Kr(Rt.value) || (fe = et < Rt.value);
    } else {
      const et = R.valueAsDate || new Date(Le), wt = (z) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + z), re = R.type == "time", _e = R.type == "week";
      cl(Ne.value) && Le && (Qe = re ? wt(Le) > wt(Ne.value) : _e ? Le > Ne.value : et > new Date(Ne.value)), cl(Rt.value) && Le && (fe = re ? wt(Le) < wt(Rt.value) : _e ? Le < Rt.value : et < new Date(Rt.value));
    }
    if ((Qe || fe) && (ot(!!Qe, Ne.message, Rt.message, nu.max, nu.min), !m))
      return je(Y[xe].message), Y;
  }
  if (($ || G) && !Nt && (cl(Le) || b && Array.isArray(Le))) {
    const Qe = yf($), fe = yf(G), Ne = !Kr(Qe.value) && Le.length > +Qe.value, Rt = !Kr(fe.value) && Le.length < +fe.value;
    if ((Ne || Rt) && (ot(Ne, Qe.message, fe.message), !m))
      return je(Y[xe].message), Y;
  }
  if (q && !Nt && cl(Le)) {
    const { value: Qe, message: fe } = yf(q);
    if (ay(Qe) && !Le.match(Qe) && (Y[xe] = {
      type: nu.pattern,
      message: fe,
      ref: R,
      ...Ct(nu.pattern, fe)
    }, !m))
      return je(fe), Y;
  }
  if (ie) {
    if (io(ie)) {
      const Qe = await ie(Le, S), fe = px(Qe, Ee);
      if (fe && (Y[xe] = {
        ...fe,
        ...Ct(nu.validate, fe.message)
      }, !m))
        return je(fe.message), Y;
    } else if (er(ie)) {
      let Qe = {};
      for (const fe in ie) {
        if (!Ka(Qe) && !m)
          break;
        const Ne = px(await ie[fe](Le, S), Ee, fe);
        Ne && (Qe = {
          ...Ne,
          ...Ct(fe, Ne.message)
        }, je(Ne.message), m && (Y[xe] = Qe));
      }
      if (!Ka(Qe) && (Y[xe] = {
        ref: Ee,
        ...Qe
      }, !m))
        return Y;
    }
  }
  return je(!0), Y;
};
function NO(p, S) {
  const m = S.slice(0, -1).length;
  let C = 0;
  for (; C < m; )
    p = Ln(p) ? C++ : p[S[C++]];
  return p;
}
function zO(p) {
  for (const S in p)
    if (p.hasOwnProperty(S) && !Ln(p[S]))
      return !1;
  return !0;
}
function xr(p, S) {
  const m = Array.isArray(S) ? S : fE(S) ? [S] : zx(S), C = m.length === 1 ? p : NO(p, m), b = m.length - 1, R = m[b];
  return C && delete C[R], b !== 0 && (er(C) && Ka(C) || Array.isArray(C) && zO(C)) && xr(p, m.slice(0, -1)), p;
}
function G0() {
  let p = [];
  return {
    get observers() {
      return p;
    },
    next: (b) => {
      for (const R of p)
        R.next && R.next(b);
    },
    subscribe: (b) => (p.push(b), {
      unsubscribe: () => {
        p = p.filter((R) => R !== b);
      }
    }),
    unsubscribe: () => {
      p = [];
    }
  };
}
var iy = (p) => Kr(p) || !Dx(p);
function Ss(p, S) {
  if (iy(p) || iy(S))
    return p === S;
  if (gf(p) && gf(S))
    return p.getTime() === S.getTime();
  const m = Object.keys(p), C = Object.keys(S);
  if (m.length !== C.length)
    return !1;
  for (const b of m) {
    const R = p[b];
    if (!C.includes(b))
      return !1;
    if (b !== "ref") {
      const g = S[b];
      if (gf(R) && gf(g) || er(R) && er(g) || Array.isArray(R) && Array.isArray(g) ? !Ss(R, g) : R !== g)
        return !1;
    }
  }
  return !0;
}
var Fx = (p) => p.type === "select-multiple", AO = (p) => pE(p) || Ip(p), q0 = (p) => ry(p) && p.isConnected, Hx = (p) => {
  for (const S in p)
    if (io(p[S]))
      return !0;
  return !1;
};
function ly(p, S = {}) {
  const m = Array.isArray(p);
  if (er(p) || m)
    for (const C in p)
      Array.isArray(p[C]) || er(p[C]) && !Hx(p[C]) ? (S[C] = Array.isArray(p[C]) ? [] : {}, ly(p[C], S[C])) : Kr(p[C]) || (S[C] = !0);
  return S;
}
function Vx(p, S, m) {
  const C = Array.isArray(p);
  if (er(p) || C)
    for (const b in p)
      Array.isArray(p[b]) || er(p[b]) && !Hx(p[b]) ? Ln(S) || iy(m[b]) ? m[b] = Array.isArray(p[b]) ? ly(p[b], []) : { ...ly(p[b]) } : Vx(p[b], Kr(S) ? {} : S[b], m[b]) : m[b] = !Ss(p[b], S[b]);
  return m;
}
var X0 = (p, S) => Vx(p, S, ly(S)), jx = (p, { valueAsNumber: S, valueAsDate: m, setValueAs: C }) => Ln(p) ? p : S ? p === "" ? NaN : p && +p : m && cl(p) ? new Date(p) : C ? C(p) : p;
function K0(p) {
  const S = p.ref;
  if (!(p.refs ? p.refs.every((m) => m.disabled) : S.disabled))
    return dE(S) ? S.files : pE(S) ? Ux(p.refs).value : Fx(S) ? [...S.selectedOptions].map(({ value: m }) => m) : Ip(S) ? Ax(p.refs).value : jx(Ln(S.value) ? p.ref.value : S.value, p);
}
var UO = (p, S, m, C) => {
  const b = {};
  for (const R of p) {
    const g = ge(S, R);
    g && Jt(b, R, g._f);
  }
  return {
    criteriaMode: m,
    names: [...p],
    fields: b,
    shouldUseNativeValidation: C
  };
}, jp = (p) => Ln(p) ? p : ay(p) ? p.source : er(p) ? ay(p.value) ? p.value.source : p.value : p, FO = (p) => p.mount && (p.required || p.min || p.max || p.maxLength || p.minLength || p.pattern || p.validate);
function hx(p, S, m) {
  const C = ge(p, m);
  if (C || fE(m))
    return {
      error: C,
      name: m
    };
  const b = m.split(".");
  for (; b.length; ) {
    const R = b.join("."), g = ge(S, R), K = ge(p, R);
    if (g && !Array.isArray(g) && m !== R)
      return { name: m };
    if (K && K.type)
      return {
        name: R,
        error: K
      };
    b.pop();
  }
  return {
    name: m
  };
}
var HO = (p, S, m, C, b) => b.isOnAll ? !1 : !m && b.isOnTouch ? !(S || p) : (m ? C.isOnBlur : b.isOnBlur) ? !p : (m ? C.isOnChange : b.isOnChange) ? p : !0, VO = (p, S) => !Yp(ge(p, S)).length && xr(p, S);
const jO = {
  mode: _i.onSubmit,
  reValidateMode: _i.onChange,
  shouldFocusError: !0
};
function BO(p = {}, S) {
  let m = {
    ...jO,
    ...p
  }, C = {
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
  }, b = {}, R = er(m.defaultValues) || er(m.values) ? sl(m.defaultValues || m.values) || {} : {}, g = m.shouldUnregister ? {} : sl(R), K = {
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
    values: G0(),
    array: G0(),
    state: G0()
  }, ie = p.resetOptions && p.resetOptions.keepDirtyValues, xe = ox(m.mode), Ve = ox(m.reValidateMode), Ze = m.criteriaMode === _i.all, Mt = (D) => (V) => {
    clearTimeout(pe), pe = setTimeout(D, V);
  }, Le = async (D) => {
    if (I.isValid || D) {
      const V = m.resolver ? Ka((await Nt()).errors) : await ot(b, !0);
      V !== C.isValid && q.state.next({
        isValid: V
      });
    }
  }, Ee = (D) => I.isValidating && q.state.next({
    isValidating: D
  }), je = (D, V = [], Q, Te, se = !0, ne = !0) => {
    if (Te && Q) {
      if (K.action = !0, ne && Array.isArray(ge(b, D))) {
        const ke = Q(ge(b, D), Te.argA, Te.argB);
        se && Jt(b, D, ke);
      }
      if (ne && Array.isArray(ge(C.errors, D))) {
        const ke = Q(ge(C.errors, D), Te.argA, Te.argB);
        se && Jt(C.errors, D, ke), VO(C.errors, D);
      }
      if (I.touchedFields && ne && Array.isArray(ge(C.touchedFields, D))) {
        const ke = Q(ge(C.touchedFields, D), Te.argA, Te.argB);
        se && Jt(C.touchedFields, D, ke);
      }
      I.dirtyFields && (C.dirtyFields = X0(R, g)), q.state.next({
        name: D,
        isDirty: fe(D, V),
        dirtyFields: C.dirtyFields,
        errors: C.errors,
        isValid: C.isValid
      });
    } else
      Jt(g, D, V);
  }, Y = (D, V) => {
    Jt(C.errors, D, V), q.state.next({
      errors: C.errors
    });
  }, ft = (D, V, Q, Te) => {
    const se = ge(b, D);
    if (se) {
      const ne = ge(g, D, Ln(Q) ? ge(R, D) : Q);
      Ln(ne) || Te && Te.defaultChecked || V ? Jt(g, D, V ? ne : K0(se._f)) : et(D, ne), K.mount && Le();
    }
  }, qe = (D, V, Q, Te, se) => {
    let ne = !1, ke = !1;
    const St = {
      name: D
    };
    if (!Q || Te) {
      I.isDirty && (ke = C.isDirty, C.isDirty = St.isDirty = fe(), ne = ke !== St.isDirty);
      const _t = Ss(ge(R, D), V);
      ke = ge(C.dirtyFields, D), _t ? xr(C.dirtyFields, D) : Jt(C.dirtyFields, D, !0), St.dirtyFields = C.dirtyFields, ne = ne || I.dirtyFields && ke !== !_t;
    }
    if (Q) {
      const _t = ge(C.touchedFields, D);
      _t || (Jt(C.touchedFields, D, Q), St.touchedFields = C.touchedFields, ne = ne || I.touchedFields && _t !== Q);
    }
    return ne && se && q.state.next(St), ne ? St : {};
  }, en = (D, V, Q, Te) => {
    const se = ge(C.errors, D), ne = I.isValid && Sf(V) && C.isValid !== V;
    if (p.delayError && Q ? (G = Mt(() => Y(D, Q)), G(p.delayError)) : (clearTimeout(pe), G = null, Q ? Jt(C.errors, D, Q) : xr(C.errors, D)), (Q ? !Ss(se, Q) : se) || !Ka(Te) || ne) {
      const ke = {
        ...Te,
        ...ne && Sf(V) ? { isValid: V } : {},
        errors: C.errors,
        name: D
      };
      C = {
        ...C,
        ...ke
      }, q.state.next(ke);
    }
    Ee(!1);
  }, Nt = async (D) => m.resolver(g, m.context, UO(D || $.mount, b, m.criteriaMode, m.shouldUseNativeValidation)), Ct = async (D) => {
    const { errors: V } = await Nt();
    if (D)
      for (const Q of D) {
        const Te = ge(V, Q);
        Te ? Jt(C.errors, Q, Te) : xr(C.errors, Q);
      }
    else
      C.errors = V;
    return V;
  }, ot = async (D, V, Q = {
    valid: !0
  }) => {
    for (const Te in D) {
      const se = D[Te];
      if (se) {
        const { _f: ne, ...ke } = se;
        if (ne) {
          const St = $.array.has(ne.name), _t = await vx(se, g, Ze, m.shouldUseNativeValidation && !V, St);
          if (_t[ne.name] && (Q.valid = !1, V))
            break;
          !V && (ge(_t, ne.name) ? St ? MO(C.errors, _t, ne.name) : Jt(C.errors, ne.name, _t[ne.name]) : xr(C.errors, ne.name));
        }
        ke && await ot(ke, V, Q);
      }
    }
    return Q.valid;
  }, Qe = () => {
    for (const D of $.unMount) {
      const V = ge(b, D);
      V && (V._f.refs ? V._f.refs.every((Q) => !q0(Q)) : !q0(V._f.ref)) && Ae(D);
    }
    $.unMount = /* @__PURE__ */ new Set();
  }, fe = (D, V) => (D && V && Jt(g, D, V), !Ss(te(), R)), Ne = (D, V, Q) => Nx(D, $, {
    ...K.mount ? g : Ln(V) ? R : cl(D) ? { [D]: V } : V
  }, Q, V), Rt = (D) => Yp(ge(K.mount ? g : R, D, p.shouldUnregister ? ge(R, D, []) : [])), et = (D, V, Q = {}) => {
    const Te = ge(b, D);
    let se = V;
    if (Te) {
      const ne = Te._f;
      ne && (!ne.disabled && Jt(g, D, jx(V, ne)), se = ry(ne.ref) && Kr(V) ? "" : V, Fx(ne.ref) ? [...ne.ref.options].forEach((ke) => ke.selected = se.includes(ke.value)) : ne.refs ? Ip(ne.ref) ? ne.refs.length > 1 ? ne.refs.forEach((ke) => (!ke.defaultChecked || !ke.disabled) && (ke.checked = Array.isArray(se) ? !!se.find((St) => St === ke.value) : se === ke.value)) : ne.refs[0] && (ne.refs[0].checked = !!se) : ne.refs.forEach((ke) => ke.checked = ke.value === se) : dE(ne.ref) ? ne.ref.value = "" : (ne.ref.value = se, ne.ref.type || q.values.next({
        name: D,
        values: { ...g }
      })));
    }
    (Q.shouldDirty || Q.shouldTouch) && qe(D, se, Q.shouldTouch, Q.shouldDirty, !0), Q.shouldValidate && z(D);
  }, wt = (D, V, Q) => {
    for (const Te in V) {
      const se = V[Te], ne = `${D}.${Te}`, ke = ge(b, ne);
      ($.array.has(D) || !iy(se) || ke && !ke._f) && !gf(se) ? wt(ne, se, Q) : et(ne, se, Q);
    }
  }, re = (D, V, Q = {}) => {
    const Te = ge(b, D), se = $.array.has(D), ne = sl(V);
    Jt(g, D, ne), se ? (q.array.next({
      name: D,
      values: { ...g }
    }), (I.isDirty || I.dirtyFields) && Q.shouldDirty && q.state.next({
      name: D,
      dirtyFields: X0(R, g),
      isDirty: fe(D, ne)
    })) : Te && !Te._f && !Kr(ne) ? wt(D, ne, Q) : et(D, ne, Q), sx(D, $) && q.state.next({ ...C }), q.values.next({
      name: D,
      values: { ...g }
    }), !K.mount && S();
  }, _e = async (D) => {
    const V = D.target;
    let Q = V.name, Te = !0;
    const se = ge(b, Q), ne = () => V.type ? K0(se._f) : _x(D);
    if (se) {
      let ke, St;
      const _t = ne(), Bn = D.type === ny.BLUR || D.type === ny.FOCUS_OUT, za = !FO(se._f) && !m.resolver && !ge(C.errors, Q) && !se._f.deps || HO(Bn, ge(C.touchedFields, Q), C.isSubmitted, Ve, xe), Mn = sx(Q, $, Bn);
      Jt(g, Q, _t), Bn ? (se._f.onBlur && se._f.onBlur(D), G && G(0)) : se._f.onChange && se._f.onChange(D);
      const fr = qe(Q, _t, Bn, !1), fl = !Ka(fr) || Mn;
      if (!Bn && q.values.next({
        name: Q,
        type: D.type,
        values: { ...g }
      }), za)
        return I.isValid && Le(), fl && q.state.next({ name: Q, ...Mn ? {} : fr });
      if (!Bn && Mn && q.state.next({ ...C }), Ee(!0), m.resolver) {
        const { errors: Ca } = await Nt([Q]), ce = hx(C.errors, b, Q), Ue = hx(Ca, b, ce.name || Q);
        ke = Ue.error, Q = Ue.name, St = Ka(Ca);
      } else
        ke = (await vx(se, g, Ze, m.shouldUseNativeValidation))[Q], Te = isNaN(_t) || _t === ge(g, Q, _t), Te && (ke ? St = !1 : I.isValid && (St = await ot(b, !0)));
      Te && (se._f.deps && z(se._f.deps), en(Q, St, ke, fr));
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
      }))).every(Boolean), !(!Te && !C.isValid) && Le()) : Te = Q = await ot(b);
    return q.state.next({
      ...!cl(D) || I.isValid && Q !== C.isValid ? {} : { name: D },
      ...m.resolver || !D ? { isValid: Q } : {},
      errors: C.errors,
      isValidating: !1
    }), V.shouldFocus && !Te && rE(b, (ne) => ne && ge(C.errors, ne), D ? se : $.mount), Te;
  }, te = (D) => {
    const V = {
      ...R,
      ...K.mount ? g : {}
    };
    return Ln(D) ? V : cl(D) ? ge(V, D) : D.map((Q) => ge(V, Q));
  }, Se = (D, V) => ({
    invalid: !!ge((V || C).errors, D),
    isDirty: !!ge((V || C).dirtyFields, D),
    isTouched: !!ge((V || C).touchedFields, D),
    error: ge((V || C).errors, D)
  }), Pe = (D) => {
    D && Jm(D).forEach((V) => xr(C.errors, V)), q.state.next({
      errors: D ? C.errors : {}
    });
  }, ze = (D, V, Q) => {
    const Te = (ge(b, D, { _f: {} })._f || {}).ref;
    Jt(C.errors, D, {
      ...V,
      ref: Te
    }), q.state.next({
      name: D,
      errors: C.errors,
      isValid: !1
    }), Q && Q.shouldFocus && Te && Te.focus && Te.focus();
  }, at = (D, V) => io(D) ? q.values.subscribe({
    next: (Q) => D(Ne(void 0, V), Q)
  }) : Ne(D, V, !0), Ae = (D, V = {}) => {
    for (const Q of D ? Jm(D) : $.mount)
      $.mount.delete(Q), $.array.delete(Q), V.keepValue || (xr(b, Q), xr(g, Q)), !V.keepError && xr(C.errors, Q), !V.keepDirty && xr(C.dirtyFields, Q), !V.keepTouched && xr(C.touchedFields, Q), !m.shouldUnregister && !V.keepDefaultValue && xr(R, Q);
    q.values.next({
      values: { ...g }
    }), q.state.next({
      ...C,
      ...V.keepDirty ? { isDirty: fe() } : {}
    }), !V.keepIsValid && Le();
  }, We = (D, V = {}) => {
    let Q = ge(b, D);
    const Te = Sf(V.disabled);
    return Jt(b, D, {
      ...Q || {},
      _f: {
        ...Q && Q._f ? Q._f : { ref: { name: D } },
        name: D,
        mount: !0,
        ...V
      }
    }), $.mount.add(D), Q ? Te && Jt(g, D, V.disabled ? void 0 : ge(g, D, K0(Q._f))) : ft(D, !0, V.value), {
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
          const ne = Ln(se.value) && se.querySelectorAll && se.querySelectorAll("input,select,textarea")[0] || se, ke = AO(ne), St = Q._f.refs || [];
          if (ke ? St.find((_t) => _t === ne) : ne === Q._f.ref)
            return;
          Jt(b, D, {
            _f: {
              ...Q._f,
              ...ke ? {
                refs: [
                  ...St.filter(q0),
                  ne,
                  ...Array.isArray(ge(R, D)) ? [{}] : []
                ],
                ref: { type: ne.type, name: D }
              } : { ref: ne }
            }
          }), ft(D, !1, void 0, ne);
        } else
          Q = ge(b, D, {}), Q._f && (Q._f.mount = !1), (m.shouldUnregister || V.shouldUnregister) && !(kx($.array, D) && K.action) && $.unMount.add(D);
      }
    };
  }, Je = () => m.shouldFocusError && rE(b, (D) => D && ge(C.errors, D), $.mount), it = (D, V) => async (Q) => {
    Q && (Q.preventDefault && Q.preventDefault(), Q.persist && Q.persist());
    let Te = sl(g);
    if (q.state.next({
      isSubmitting: !0
    }), m.resolver) {
      const { errors: se, values: ne } = await Nt();
      C.errors = se, Te = ne;
    } else
      await ot(b);
    xr(C.errors, "root"), Ka(C.errors) ? (q.state.next({
      errors: {}
    }), await D(Te, Q)) : (V && await V({ ...C.errors }, Q), Je(), setTimeout(Je)), q.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ka(C.errors),
      submitCount: C.submitCount + 1,
      errors: C.errors
    });
  }, st = (D, V = {}) => {
    ge(b, D) && (Ln(V.defaultValue) ? re(D, ge(R, D)) : (re(D, V.defaultValue), Jt(R, D, V.defaultValue)), V.keepTouched || xr(C.touchedFields, D), V.keepDirty || (xr(C.dirtyFields, D), C.isDirty = V.defaultValue ? fe(D, ge(R, D)) : fe()), V.keepError || (xr(C.errors, D), I.isValid && Le()), q.state.next({ ...C }));
  }, Dt = (D, V = {}) => {
    const Q = D || R, Te = sl(Q), se = D && !Ka(D) ? Te : R;
    if (V.keepDefaultValues || (R = Q), !V.keepValues) {
      if (V.keepDirtyValues || ie)
        for (const ne of $.mount)
          ge(C.dirtyFields, ne) ? Jt(se, ne, ge(g, ne)) : re(ne, ge(se, ne));
      else {
        if (oE && Ln(D))
          for (const ne of $.mount) {
            const ke = ge(b, ne);
            if (ke && ke._f) {
              const St = Array.isArray(ke._f.refs) ? ke._f.refs[0] : ke._f.ref;
              if (ry(St)) {
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
      g = p.shouldUnregister ? V.keepDefaultValues ? sl(R) : {} : sl(se), q.array.next({
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
    }, !K.mount && S(), K.mount = !I.isValid || !!V.keepIsValid, K.watch = !!p.shouldUnregister, q.state.next({
      submitCount: V.keepSubmitCount ? C.submitCount : 0,
      isDirty: V.keepDirty ? C.isDirty : !!(V.keepDefaultValues && !Ss(D, R)),
      isSubmitted: V.keepIsSubmitted ? C.isSubmitted : !1,
      dirtyFields: V.keepDirtyValues ? C.dirtyFields : V.keepDefaultValues && D ? X0(R, D) : {},
      touchedFields: V.keepTouched ? C.touchedFields : {},
      errors: V.keepErrors ? C.errors : {},
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
      _getFieldArray: Rt,
      _reset: Dt,
      _resetDefaultValues: () => io(m.defaultValues) && m.defaultValues().then((D) => {
        le(D, m.resetOptions), q.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (D) => {
        C = {
          ...C,
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
        return R;
      },
      get _names() {
        return $;
      },
      set _names(D) {
        $ = D;
      },
      get _formState() {
        return C;
      },
      set _formState(D) {
        C = D;
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
function PO(p = {}) {
  const S = jt.useRef(), m = jt.useRef(), [C, b] = jt.useState({
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
  S.current || (S.current = {
    ...BO(p, () => b((g) => ({ ...g }))),
    formState: C
  });
  const R = S.current.control;
  return R._options = p, cE({
    subject: R._subjects.state,
    next: (g) => {
      Lx(g, R._proxyFormState, R._updateFormState, !0) && b({ ...R._formState });
    }
  }), jt.useEffect(() => {
    p.values && !Ss(p.values, m.current) ? (R._reset(p.values, R._options.resetOptions), m.current = p.values) : R._resetDefaultValues();
  }, [p.values, R]), jt.useEffect(() => {
    R._state.mount || (R._updateValid(), R._state.mount = !0), R._state.watch && (R._state.watch = !1, R._subjects.state.next({ ...R._formState })), R._removeUnmounted();
  }), S.current.formState = Ox(C, R), S.current;
}
const $O = (p) => {
  const { field: S } = OO({ name: p });
  return S;
}, pL = $O, IO = ({
  onSubmit: p
}) => {
  const [S, m] = Pp(!1), [C, b] = Pp(!1), {
    handleSubmit: R,
    register: g,
    reset: K
  } = PO();
  return { handleSubmit: mx(
    (G) => {
      G.preventDefault(), b(!0), R(p)(G).catch(() => m(!0)).finally(() => {
        b(!1), K();
      });
    },
    [R, p, K]
  ), isError: S, isSubmitting: C, register: g };
}, vL = IO, YO = ({
  callback: p,
  config: S,
  observables: m,
  ...C
}) => {
  $p(() => {
    const b = new IntersectionObserver(p, S);
    return m.forEach((R) => {
      b.observe(R);
    }), () => {
      b.disconnect();
    };
  }, [C, p, S, m]);
}, hL = YO, QO = () => {
  const [p, S] = Pp(!1), m = mx(() => {
    S(window.innerWidth > 768);
  }, [S]);
  return $p(() => {
    m();
  }, [m]), RO(window, "resize", m), p;
}, mL = QO;
function yL(p, S) {
  $p(() => {
    const m = (C) => {
      const b = p == null ? void 0 : p.current;
      !b || b.contains(C == null ? void 0 : C.target) || S(C);
    };
    return document.addEventListener("mousedown", m), document.addEventListener("touchend", m), () => {
      document.removeEventListener("mousedown", m), document.removeEventListener("touchend", m);
    };
  }, [p, S]);
}
const WO = () => typeof window < "u", gL = WO, GO = (p) => {
  throw new Error(p);
}, SL = GO;
export {
  eL as Button,
  uL as Card,
  fL as CardActions,
  dL as CardBody,
  oL as CardContent,
  sL as CardHeader,
  cL as CardMedia,
  tL as Gallery,
  bx as HelperText,
  xx as ImageDialog,
  nL as List,
  rL as ListItem,
  aL as ListItemText,
  iL as TextArea,
  lL as TextField,
  ty as Typography,
  aO as TypographyClasses,
  gL as isClient,
  SL as raise,
  SO as useDisclosure,
  RO as useEventListener,
  pL as useField,
  vL as useForm,
  hL as useIntersectionObserver,
  mL as useIsDesktop,
  Nk as useKeyPress,
  yL as useOutsideClick
};
